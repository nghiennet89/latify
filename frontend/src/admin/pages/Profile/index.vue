<template>
  <v-card :elevation="0" class="ma-4" tile>
    <h1 class="mx-4">User Profile</h1>
    <v-row class="mb-4">
      <v-col cols="3" md="6" sm="12" xs="12">
        <v-row justify="center">
          <v-avatar class="mr-4" size="275">
            <img :src="form.avatar" alt="Avatar">
          </v-avatar>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <v-btn color="primary" @click="openAvatarPicker">Change Avatar</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn color="warning" @click="dialogChangePassword = true">Change Password</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9" md="6" sm="12" xs="12">
        <v-text-field v-model="form.name"
                      label="Name"
                      outlined></v-text-field>
        <v-text-field v-model="form.role" disabled
                      label="Role"
                      outlined></v-text-field>
        <v-text-field v-model="form.email" disabled
                      label="Email Address"
                      outlined></v-text-field>
        <v-container class="full-width pa-0" style="display: inline-block">
          <v-textarea v-model="form.api_key" class="text-sm-left" label="API Key" outlined
                      readonly
                      style="font-size: smaller"></v-textarea>
          <v-btn class="mb-8 float-right" color="warning" @click="createApiKey">New Key</v-btn>
        </v-container>
        <v-text-field v-model="form.webhook_url" label="Webhook URL"
                      outlined></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :loading="loading" color="primary" @click.native="updateProfile">
        <v-icon dark left>mdi-check</v-icon>
        Save Changes
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialogAvatarPicker" :width="400">
      <avatar-picker :current-avatar="form.avatar" :onCancel="()=>{dialogAvatarPicker=false}" @selected="selectAvatar"></avatar-picker>
    </v-dialog>
    <v-dialog v-if="dialogChangePassword" v-model="dialogChangePassword" :width="600">
      <ChangePassword :onCancel="()=>{dialogChangePassword = false}" :onPasswordChanged="()=>{dialogChangePassword = false}"/>
    </v-dialog>
  </v-card>
</template>

<script>
import AvatarPicker from '@/admin/components/AvatarPicker'
import ChangePassword from './ChangePassword'
import {mapActions} from "vuex";

export default {
  name: 'Profile',
  components: {AvatarPicker, ChangePassword},
  data() {
    let user = this.$auth.user() || {};
    return {
      loading: false,
      form: {
        name: user.name,
        role: user.role ? user.role.name : '',
        email: user.email,
        api_key: user.api_key,
        webhook_url: user.webhook_url,
        avatar: user.avatar || require('~/img/avatars/(1).png')
      },
      dialogAvatarPicker: false,
      dialogChangePassword: false,
    }
  },
  methods: {
    ...mapActions({
      userCreateApiKey: "user/createApiKey",
    }),
    openAvatarPicker() {
      this.dialogAvatarPicker = true
    },
    selectAvatar(avatar) {
      this.form.avatar = avatar
    },
    updateProfile() {

    },
    async createApiKey() {
      this.form.api_key = await this.userCreateApiKey();
    }
  }
}
</script>
