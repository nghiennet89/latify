<template>
  <v-card :elevation="0" class="crud-box list-users" tile>
    <h1 class="mx-4">Manage Users</h1>
    <v-layout class="px-4 pt-4" wrap>
      <div style="overflow: visible">
        <v-btn class="mr-2" color="success" @click="onClickNew">
          <v-icon>mdi-plus</v-icon>
          New
        </v-btn>
        <v-btn v-if="pickedItems.length > 0" class="mr-2" color="error" @click="onClickDeleteAll">
          <v-icon>mdi-delete</v-icon>
          Delete Items
        </v-btn>
      </div>
      <!---->
      <v-spacer></v-spacer>
      <v-layout style="max-width: calc(100% - 250px);" wrap>
        <v-text-field v-model="searchFields.name.value" class="mr-2" dense label="Search Name" outlined
                      @keyup.enter="doSearch"/>
        <v-text-field v-model="searchFields.email.value" class="mr-2" dense label="Search Email" outlined
                      @keyup.enter="doSearch"/>
        <v-autocomplete v-model="searchFields.role_id.value" :items="listSearchRoles" class="mr-2" dense label="Search Role"
                        outlined @keyup.enter="doSearch"/>
      </v-layout>
      <v-btn color="primary" @click="doSearch">
        <v-icon>mdi-magnify</v-icon>
        Search
      </v-btn>
    </v-layout>

    <!--card content-->
    <v-card :disabled="tblLoading" :elevation="1" class="block-tbl mx-4" outlined tile>
      <v-data-table v-model="pickedItems" :footer-props="tblConfig.footerProps" :headers="tblConfig.header" :items="listItems"
                    :loading="tblLoading" :loading-text="tblConfig.text.loading" :options.sync="tblOptions"
                    :server-items-length="tblPagination.total" :show-select="tblConfig.showSelect" @dblclick:row="onClickRow">
        <template v-slot:no-data>
          {{ tblConfig.text.noItem }}
        </template>

        <template v-slot:item.no="{item}">
          {{ getIndexOfItem(item) }}
        </template>

        <template v-slot:item.actions="props">
          <v-icon class="mr-2" color="primary" small>mdi-view-list</v-icon>
          <v-icon class="mr-2" color="secondary" small @click="onClickEdit(props)">mdi-pencil</v-icon>
          <v-icon color="error" small @click="onClickDelete(props)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialogUpdate" :width="800">
      <UpdateItem :onCancel="()=>{dialogUpdate=false}" :onUpdated="onUpdated" :selectedItem="selectedItem"></UpdateItem>
    </v-dialog>
    <v-dialog v-model="dialogCreate" :width="800">
      <CreateItem :onCancel="()=>{dialogCreate=false}" :onCreated="onCreated"></CreateItem>
    </v-dialog>
    <v-dialog v-model="dialogDelete" :width="400">
      <DeleteItem :idsToDelete="idsToDelete" :onCancel="()=>{dialogDelete=false}" :onDeleted="onDeleted"></DeleteItem>
    </v-dialog>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import DeleteItem from "@/admin/pages/ManageUsers/Delete";
import CreateItem from "@/admin/pages/ManageUsers/Create";
import UpdateItem from "@/admin/pages/ManageUsers/Update";

export default {
  name: 'ManageUsers',
  components: {DeleteItem, CreateItem, UpdateItem},
  data() {
    return {
      pickedItems: [],
      selectedItem: null,
      idsToDelete: [],
      tblLoading: false,
      dialogCreate: false,
      dialogUpdate: false,
      dialogDelete: false,
      searchFields: {
        name: {
          value: '',
          type: 'like',
        },
        email: {
          value: '',
          type: 'like',
        },
        role_id: {
          value: '',
          type: '='
        },
      },
      querySilent: true,
      searchWith: 'role;socialAccount',
      tblConfig: {
        header: [
          {
            text: 'No',
            value: 'no',
            sortable: false,
            groupable: false,
            width: '55px',
            align: 'start',
          },
          {
            text: 'Name',
            value: 'name',
          },
          {
            text: 'Email',
            value: 'email',
          },
          {
            text: 'Role',
            value: 'role_name',
          },
          {
            text: 'Created At',
            value: 'created_at',
          },
          {
            text: 'Updated At',
            value: 'updated_at',
          },
          {
            text: 'Actions',
            value: 'actions',
            sortable: false,
            groupable: false,
            width: '111px',
            align: 'center',
          }
        ],
        footerProps: {
          showFirstLastPage: true,
          'items-per-page-options': [10, 20, 50, 100, -1]
        },
        showSelect: true,
        text: {
          loading: 'Loading ...',
          noItem: 'No item found'
        },
      },
      tblOptions: {}
    }
  },
  computed: {
    ...mapGetters({
      users: 'user/all',
      roles: 'role/all',
      roleById: 'role/getById',
      tblPagination: 'user/pagination'
    }),
    listItems() {
      return this.users.map(u => {
        u.role_name = u.role.name;
        return u;
      })
    },
    listSearchRoles() {
      let listSearchRoles = [
        {text: 'All Roles', value: null}
      ]
      this.roles.forEach(r => {
        listSearchRoles.push({
          text: r.name,
          value: r.id
        })
      });
      return listSearchRoles;
    },
    getIndexOfItem() {
      return item => {
        let pageOffset = this.tblPagination ? (this.tblPagination.current_page - 1) * this.tblPagination.per_page : 0
        return pageOffset + this.users.indexOf(item) + 1
      }
    },
    queryConf() {
      return {
        options: this.tblOptions,
        searchWith: this.searchWith,
        querySilent: this.querySilent
      }
    }
  },
  methods: {
    ...mapActions({
      getListItems: 'user/get',
      getAllRoles: 'role/all',
    }),
    onClickRow($event, row) {
      console.log('$event', $event);
      console.log('row', row);
    },

    onClickNew() {
      this.dialogCreate = true;
    },

    /**
     * open confirm box for delete 1 item
     * @param props
     */
    onClickDelete(props) {
      this.dialogDelete = true;
      this.idsToDelete = [props.item.id];
    },

    onClickEdit(props) {
      this.selectedItem = props.item;
      this.dialogUpdate = true;
    },

    /**
     * open confirm box for delete multi item
     */
    onClickDeleteAll() {
      this.dialogDelete = true;
      this.idsToDelete = this.pickedItems.map(i => i.id);
    },

    /**
     * callback after delete items
     */
    onDeleted() {
      this.dialogDelete = false;
      this.idsToDelete = [];
      this.doSearch();
    },

    onCreated() {
      this.dialogCreate = false;
      this.doSearch();
    },

    onUpdated() {
      this.dialogUpdate = false;
      this.doSearch();
    },

    doSearch() {
      this.pickedItems = [];
      this.selectedItem = null;
      this.tblLoading = true
      this.getListItems({
        ...this.queryConf,
        searchFields: this.searchFields,
      }).then(res => {
        if (this.tblOptions.page > res.data.total_pages) this.tblOptions.page = res.data.total_pages;
      }).finally(() => this.tblLoading = false);
    },
  },
  watch: {
    'queryConf': {
      handler(val) {
        console.log('queryConf:', val);
        this.doSearch();
      },
      deep: true
    },
  },
  created() {
    console.log('roleById:', this.roleById(1));
  }
}
</script>
