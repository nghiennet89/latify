<template>
  <v-card class="mx-auto pa-5">
    <v-card-title class="mx-0 px-0">Update Scope</v-card-title>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="item.name" dense label="Name" outlined/>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="item.group" dense label="Group" outlined/>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="item.title" dense label="Title" outlined/>
      </v-col>
    </v-row>
    <v-card-actions class="mx-0 pa-0">
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onCancel">Cancel</v-btn>
      <v-btn color="primary" text @click="processUpdate">Update</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'UpdateScope',
  props: ['selectedItem', 'onUpdated', 'onCancel'],
  data: () => ({
    item: {}
  }),
  computed: {
    ...mapGetters({
      roles: 'role/all'
    }),
  },
  methods: {
    ...mapActions({
      updateItem: 'scope/update',
    }),
    processUpdate() {
      this.updateItem(this.item).then(() => {
        this.onUpdated();
        this.item = {};
      });
    }
  },
  watch: {
    selectedItem: {
      handler() {
        if (this.selectedItem) this.item = this.cloneDeep(this.selectedItem);
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
