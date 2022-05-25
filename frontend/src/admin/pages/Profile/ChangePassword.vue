<template>
  <v-card class="mx-auto pa-5">
    <v-row>
      <v-col cols="12" class="pl-1 pr-2">
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
                type="password"
                dense
                outlined
                placeholder="Current password"
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
                type="password"
                dense
                outlined
                placeholder="New password"
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
                type="password"
                dense
                outlined
                placeholder="Repeat new password"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-card-actions class="mx-0 pa-0">
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onClickCancel">Cancel</v-btn>
      <v-btn
          color="primary"
          text
          @click="onClickSave"
          :disabled="password === '' || password === ''"
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
