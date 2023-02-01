<template>
  <v-card class="mx-auto pa-5">
    <v-row>
      <v-col class="pl-1 pr-2" cols="12">
        <h3 class="title-col mb-2 pl-3">Change Password</h3>
        <v-row no-gutters>
          <v-col cols="4">
            <v-subheader>Current password
              <div class="red--text">*</div>
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="old_password"
              dense
              outlined
              placeholder="Current password"
              type="password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <v-subheader>New password
              <div class="red--text">*</div>
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="password"
              dense
              outlined
              placeholder="New password"
              type="password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <v-subheader>Repeat new password
              <div class="red--text">*</div>
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="password_conf"
              dense
              outlined
              placeholder="Repeat new password"
              type="password"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-card-actions class="mx-0 pa-0">
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onClickCancel">Cancel</v-btn>
      <v-btn
        :disabled="password === '' || password === ''"
        color="primary"
        text
        @click="onClickSave"
      >Save
      </v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: "ChangePassword",
  props: ['onCancel', 'onPasswordChanged'],
  data: () => ({
    old_password: "",
    password: "",
    password_conf: "",
  }),
  computed: {},
  methods: {
    ...mapActions({
      changePassword: "user/changePassword",
    }),
    onClickSave() {
      this.changePassword({
        id: this.user.id,
        old_password: this.old_password,
        password: this.password,
        password_conf: this.password_conf
      }).then(() => {
        if (this.onPasswordChanged) this.onPasswordChanged();
      });
    },
    onClickCancel() {
      if (this.onCancel) this.onCancel();
    },
  },
};
</script>
