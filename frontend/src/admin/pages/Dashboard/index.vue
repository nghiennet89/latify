<template>
  <div>
    <github-corner class="github-corner"/>
    <v-container class="container--fluid grid-list-md text-center">
      <v-card-text class="align-center">Dashboard</v-card-text>
      <v-row>
        <v-col class="col-auto">
          <v-btn color="info" outlined @click="testEvent"> Test Event</v-btn>
        </v-col>
        <v-col class="col-auto">
          <v-btn color="info" outlined @click="testNotification"> Test Notification</v-btn>
        </v-col>
        <v-col class="col-auto">
          <v-btn color="info" outlined @click="getAllNotification"> Get Notification</v-btn>
        </v-col>
        <v-col class="col-auto">
          <v-btn color="info" outlined @click="getUnreadNotification"> Get Unread Notification</v-btn>
        </v-col>
      </v-row>
      <v-card-text class="align-content-start" style="white-space: pre-line">{{ actionContent }}</v-card-text>
    </v-container>
  </div>
</template>

<script>
import GithubCorner from '@/admin/pages/Dashboard/GithubCorner.vue';
import axios from 'axios';
import {mapActions} from "vuex";

export default {
  name: 'Dashboard',
  components: {
    GithubCorner,
  },
  data() {
    return {
      actionContent: ''
    }
  },
  methods: {
    ...mapActions({
      getAllNotification: 'notification/all',
      getUnreadNotification: 'notification/getUnread',
      markNotificationAsRead: 'notification/markAsRead',
    }),
    testEvent() {
      this.actionContent += 'Start test event ...' + "\n";
      axios.get('user/sample-event', {params: {silent: true}}).then(() => {
        this.actionContent += 'Finished call to server to dispatch event' + "\n";
      })
    },
    testNotification() {
      this.actionContent += 'Start test notification ...' + "\n";
      axios.get('user/sample-notification', {params: {silent: true}}).then(() => {
        this.actionContent += 'Finished call to server to push notification' + "\n";
      })
    },
  }
};
</script>
