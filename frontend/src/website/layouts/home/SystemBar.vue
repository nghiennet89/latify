<template>
  <v-system-bar
    v-if="model"
    app
    class="px-4"
    color="#262626"
    dark
    height="58"
  >
    <a
      class="d-flex align-center"
      href="https://vuetifyjs.com/?ref=vtyd-pro-demo-system-bar"
      target="_blank"
    >
      <v-img
        alt="Vuetify Logo"
        class="mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        width="32"
      />

      <v-img
        alt="Vuetify Name"
        class="hidden-xs-only"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="96"
      />
    </a>

    <v-spacer/>

    <v-btn
      class="text-capitalize subtitle-2 mr-6"
      color="success"
      href="https://store.vuetifyjs.com/product/zero-theme-free?ref=vtyd-system-bar"
      min-width="112"
    >
      Free Download
    </v-btn>

    <v-btn
      class="text-capitalize subtitle-2 font-weight-bold"
      color="white"
      href="https://store.vuetifyjs.com/product/zero-theme-pro/?ref=vtyd-system-bar"
      light
      min-width="112"
    >
      Go Pro
    </v-btn>

    <v-divider
      class="ml-6 mr-3"
      vertical
    />

    <v-btn
      class="text-capitalize grey--text mr-n2 mr-sm-n1"
      small
      text
      @click="model = false"
    >
      <v-icon
        :left="$vuetify.breakpoint.smAndUp"
        color="white"
      >
        mdi-close
      </v-icon>

      <span class="hidden-xs-only">
        Remove Frame
      </span>
    </v-btn>
  </v-system-bar>
</template>

<script>
export default {
  name: 'HomeSystemBar',

  data: () => ({
    model: true,
  }),
}
</script>
