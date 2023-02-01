<template>
  <v-card :elevation="0" class="crud-box list-scopes" tile>
    <h1 class="mx-4">Manage Scopes</h1>
    <v-layout class="px-4 pt-4" wrap>
      <div style="overflow: visible">
        <v-btn class="mr-2" color="success" @click="onClickNew">
          <v-icon>mdi-plus</v-icon>
          New
        </v-btn>
        <v-btn class="mr-2" color="primary" outlined @click="onClickImport">
          <v-icon>mdi-database-import</v-icon>
          Import
        </v-btn>
        <v-btn class="mr-2" color="primary" outlined @click="onClickExport">
          <v-icon>mdi-database-export</v-icon>
          Export
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
        <v-text-field v-model="searchFields.group.value" class="mr-2" dense label="Search Group" outlined
                      @keyup.enter="doSearch"/>
      </v-layout>
      <v-btn color="primary" @click="doSearch">
        <v-icon>mdi-magnify</v-icon>
        Search
      </v-btn>
    </v-layout>

    <!--card content-->
    <v-card :disabled="tblLoading" :elevation="1" class="block-tbl mx-4" outlined tile>
      <v-data-table v-model="pickedItems" :footer-props="tblConfig.footerProps" :headers="tblHeader" :items="listItems"
                    :loading="tblLoading" :loading-text="tblConfig.text.loading" :options.sync="tblOptions"
                    :server-items-length="tblPagination.total" :show-select="tblConfig.showSelect" @dblclick:row="onClickRow">
        <template v-slot:no-data>
          {{ tblConfig.text.noItem }}
        </template>

        <template v-slot:item.no="{item}">
          {{ getIndexOfItem(item) }}
        </template>

        <template v-slot:item.actions="props">
          <v-icon class="mr-2" color="primary" small @click="onClickDetail(props)">mdi-view-list</v-icon>
          <v-icon class="mr-2" color="secondary" small @click="onClickEdit(props)">mdi-pencil</v-icon>
          <v-icon color="error" small @click="onClickDelete(props)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog.create" :width="800">
      <CreateItem :onCancel="()=>{dialog.create=false}" :onCreated="onCreated"></CreateItem>
    </v-dialog>
    <v-dialog v-model="dialog.detail" :width="'60%'">
      <DetailItem :onClose="()=>{dialog.detail=false}" :selectedItem="selectedItem"></DetailItem>
    </v-dialog>
    <v-dialog v-model="dialog.update" :width="800">
      <UpdateItem :onCancel="()=>{dialog.update=false}" :onUpdated="onUpdated" :selectedItem="selectedItem"></UpdateItem>
    </v-dialog>
    <v-dialog v-model="dialog.delete" :width="400">
      <DeleteItem :idsToDelete="idsToDelete" :onCancel="()=>{dialog.delete=false}" :onDeleted="onDeleted"></DeleteItem>
    </v-dialog>
    <v-dialog v-model="dialog.import" :width="400">
      <ImportItem :onCancel="()=>{dialog.import=false}" :onImported="onImported"></ImportItem>
    </v-dialog>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import CreateItem from "./Create";
import DetailItem from "./Detail";
import UpdateItem from "./Update";
import DeleteItem from "./Delete";
import ImportItem from "./Import";
import indexMixin from './indexMixin';

export default {
  name: 'ManageScopes',
  components: {CreateItem, DetailItem, UpdateItem, DeleteItem, ImportItem},
  mixins: [indexMixin],
  data() {
    return {
      searchFields: {
        name: {
          value: '',
          type: 'like',
        },
        group: {
          value: '',
          type: 'like',
        },
      },
      searchWith: '',
      tblHeader: [
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
          text: 'Group',
          value: 'group',
        },
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Created At',
          value: 'created_at',
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
    }
  },
  computed: {
    ...mapGetters({
      items: 'scope/all',
      tblPagination: 'scope/pagination'
    }),
  },
  methods: {
    ...mapActions({
      getListItems: 'scope/get',
      exportListItems: 'scope/export',
    }),
  }
}
</script>
