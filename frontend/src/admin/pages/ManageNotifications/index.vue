<template>
  <v-card tile :elevation="0" class="crud-box list-notifications">
    <h1 class="mx-4">Notifications</h1>
    <v-layout wrap class="px-4 pt-4">
      <div style="overflow: visible">
        <!--        <v-btn color="primary" outlined class="mr-2" @click="onClickExport">
                  <v-icon>mdi-database-export</v-icon>
                  Export
                </v-btn>-->
      </div>
      <!---->
      <v-spacer></v-spacer>
      <v-layout wrap style="max-width: 255px;">
        <v-text-field dense outlined @keyup.enter="doSearch" class="mr-2" label="Search Message"
                      v-model="searchFields.data.value"/>
      </v-layout>
      <v-btn color="primary" @click="doSearch">
        <v-icon>mdi-magnify</v-icon>
        Search
      </v-btn>
    </v-layout>

    <!--card content-->
    <v-card tile :elevation="1" :disabled="tblLoading" outlined class="block-tbl mx-4">
      <v-data-table :headers="tblHeader" :items="listItems" :server-items-length="tblPagination.total" :loading="tblLoading"
                    @click:row="onClickRow" :options.sync="tblOptions" single-expand :expanded.sync="expanded"
                    :loading-text="tblConfig.text.loading" v-model="pickedItems" :show-select="tblConfig.showSelect">
        <template v-slot:no-data>
          {{ tblConfig.text.noItem }}
        </template>

        <template v-slot:item.message="{item}">
          <div class="notification-message" :class="{'message-unread': item.status === 'unread'}">{{ item.message }}</div>
        </template>

        <template v-slot:item.created_time="{item}">
          <div class="text-date">{{ item.created_time.split('T')[0] }}</div>
          <div class="text-time">{{ item.created_time.split('T')[1] }}</div>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            {{ item }}
          </td>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog.detail" :width="'60%'">
      <DetailItem :selectedItem="selectedItem" :onClose="()=>{dialog.detail=false}"></DetailItem>
    </v-dialog>
    <v-dialog v-model="dialog.delete" :width="400">
      <DeleteItem :idsToDelete="idsToDelete" :onDeleted="onDeleted" :onCancel="()=>{dialog.delete=false}"></DeleteItem>
    </v-dialog>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import DetailItem from "./Detail";
import DeleteItem from "./Delete";
import indexMixin from './indexMixin';

export default {
  name: 'ManageNotifications',
  components: {DetailItem, DeleteItem},
  mixins: [indexMixin],
  data() {
    return {
      searchFields: {
        data: {
          value: '',
          type: 'like',
        },
      },
      searchWith: '',
      tblHeader: [
        {
          text: 'Time',
          value: 'created_time',
          width: '111px',
          sortable: false
        },
        {
          text: 'Message',
          value: 'message',
          sortable: false
        },
        {
          text: 'Status',
          value: 'status',
          width: '99px',
          sortable: false
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      items: 'notification/all',
      tblPagination: 'notification/pagination'
    }),
  },
  methods: {
    ...mapActions({
      getListItems: 'notification/get',
      getListUnread: 'notification/getUnread',
      markAsRead: 'notification/markAsRead',
      exportListItems: 'notification/export',
    }),
    async onClickRow($event, row) {
      this.expanded = [row.item];
      if (row.item.read_at) return;
      this.markAsRead([row.item.id]);
    },
  }
}
</script>
<style scoped lang="scss">
.text-date {
  text-align: right;
}

.text-time {
  text-align: right;
  font-size: 0.75rem;
  opacity: 0.75;
}

.notification-message {
  color: #777;

  &.message-unread {
    font-weight: bold;
    color: #000;
  }
}
</style>
