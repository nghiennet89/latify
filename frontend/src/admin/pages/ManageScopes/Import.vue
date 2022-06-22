<template>
  <v-card>
    <v-card-title>Import Scopes</v-card-title>
    <v-file-input v-model="importFile" class="mx-4" dense label="File to import" outlined
                  show-size/>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onCancel">Cancel</v-btn>
      <v-btn color="primary" text @click="processImport">Import</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: 'ImportScope',
  props: ['onImported', 'onCancel'],
  data: () => ({
    importFile: null
  }),
  methods: {
    ...mapActions({
      importItems: 'scope/import'
    }),
    async processImport() {
      let data = new FormData();
      data.append('import_file', this.importFile);
      this.importItems(data).then(() => {
        this.onImported();
      });
    }
  }
}
</script>
