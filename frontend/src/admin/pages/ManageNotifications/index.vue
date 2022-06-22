<template>
  <v-card :elevation="0" class="crud-box list-notifications" tile>
    <h1 class="mx-4">Notifications</h1>
    <v-layout class="px-4 pt-4" wrap>
      <div style="overflow: visible">
        <!--        <v-btn color="primary" outlined class="mr-2" @click="onClickExport">
                  <v-icon>mdi-database-export</v-icon>
                  Export
                </v-btn>-->
      </div>
      <!---->
      <v-spacer></v-spacer>
      <v-layout style="max-width: 255px;" wrap>
        <v-text-field v-model="searchFields.data.value" class="mr-2" dense label="Search Message" outlined
                      @keyup.enter="doSearch"/>
      </v-layout>
      <v-btn color="primary" @click="doSearch">
        <v-icon>mdi-magnify</v-icon>
        Search
      </v-btn>
    </v-layout>

    <!--card content-->
    <v-card :disabled="tblLoading" :elevation="1" class="block-tbl mx-4" outlined tile>
      <v-data-table v-model="pickedItems" :expanded.sync="expanded" :headers="tblHeader" :items="listItems"
                    :loading="tblLoading" :loading-text="tblConfig.text.loading" :options.sync="tblOptions" :server-items-length="tblPagination.total"
                    :show-select="tblConfig.showSelect" single-expand @click:row="onClickRow">
        <template v-slot:no-data>
          {{ tblConfig.text.noItem }}
        </template>

        <template v-slot:item.message="{item}">
          <div :class="{'message-unread': item.status === 'unread'}" class="notification-message">{{ item.message }}</div>
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
      <DetailItem :onClose="()=>{dialog.detail=false}" :selectedItem="selectedItem"></DetailItem>
    </v-dialog>
    <v-dialog v-model="dialog.delete" :width="400">
      <DeleteItem :idsToDelete="idsToDelete" :onCancel="()=>{dialog.delete=false}" :onDeleted="onDeleted"></DeleteItem>
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
<style lang="scss" scoped>
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
