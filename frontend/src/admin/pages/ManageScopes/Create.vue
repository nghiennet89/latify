<template>
  <v-card class="mx-auto pa-5">
    <v-card-title class="mx-0 px-0">Create new scope</v-card-title>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="newItem.name" dense label="Name" outlined/>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="newItem.group" dense label="Group" outlined/>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="newItem.title" dense label="Title" outlined/>
      </v-col>
    </v-row>
    <v-card-actions class="mx-0 pa-0">
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onCancel">Cancel</v-btn>
      <v-btn color="primary" text @click="processAdd">Create</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'CreateScope',
  props: ['onCreated', 'onCancel'],
  data: () => ({
    newItem: {}
  }),
  computed: {
    ...mapGetters({
      roles: 'scope/all'
    }),
  },
  methods: {
    ...mapActions({
      createItem: 'scope/create',
    }),
    processAdd() {
      this.createItem(this.newItem).then(() => {
        this.onCreated();
        this.item = {};
      });
    }
  },
}
</script>
