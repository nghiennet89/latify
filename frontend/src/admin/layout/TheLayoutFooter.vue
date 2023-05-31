<template>
  <v-footer v-if="footerShow" app dense inset padless>
    <v-card class="secondary text-left" flat height="40px" tile width="100%">
      <v-card-text class="white--text pa-3">
        Author Email: nghiennet89@gmail.com
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'TheLayoutFooter',
  components: {},
  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
  }),
  computed: {
    ...mapGetters({
      footerShow: 'settings/footerShow',
    }),
  },
  methods: {},
};
</script>
