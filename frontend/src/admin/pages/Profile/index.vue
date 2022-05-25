<template>
  <v-card class="ma-4" tile :elevation="0">
    <h1 class="mx-4">User Profile</h1>
    <v-row class="mb-4">
      <v-col cols="3" md="6" sm="12" xs="12">
        <v-row justify="center">
          <v-avatar size="275" class="mr-4">
            <img :src="form.avatar" alt="Avatar">
          </v-avatar>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <v-btn color="primary" @click="openAvatarPicker">Change Avatar</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn @click="dialogChangePassword = true" color="warning">Change Password</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9" md="6" sm="12" xs="12">
        <v-text-field outlined
                      v-model="form.name"
                      label="Name"></v-text-field>
        <v-text-field outlined disabled
                      v-model="form.role"
                      label="Role"></v-text-field>
        <v-text-field outlined disabled
                      v-model="form.email"
                      label="Email Address"></v-text-field>
        <v-container class="full-width pa-0" style="display: inline-block">
          <v-textarea readonly outlined class="text-sm-left" style="font-size: smaller"
                      v-model="form.api_key"
                      label="API Key"></v-textarea>
          <v-btn color="warning" @click="createApiKey" class="mb-8 float-right">New Key</v-btn>
        </v-container>
        <v-text-field outlined v-model="form.webhook_url"
                      label="Webhook URL"></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" :loading="loading" @click.native="updateProfile">
        <v-icon left dark>mdi-check</v-icon>
        Save Changes
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialogAvatarPicker" :width="400">
      <avatar-picker :current-avatar="form.avatar" @selected="selectAvatar" :onCancel="()=>{dialogAvatarPicker=false}"></avatar-picker>
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
