<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    bottom
    left
    max-width="90%"
    min-width="275"
    offset-x
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-card
        id="settings"
        v-bind="attrs"
        v-on="on"
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        style="position: fixed; top: 175px; right: -35px;"
        width="100"
      >
        <v-icon large>
          mdi-cog
        </v-icon>
      </v-card>
    </template>

    <v-card class="py-2">
      <base-title
        align="center"
        space="0"
        title="Theme Colors"
      />

      <v-card-text>
        <v-item-group
          v-model="$vuetify.theme.themes.light.primary"
          class="d-flex justify-center"
        >
          <v-item
            v-for="color in colors"
            :key="color"
            :value="color"
          >
            <template v-slot="{ active, toggle }">
              <base-avatar
                :color="color"
                :outlined="active"
                class="ma-2"
                size="48"
                style="cursor: pointer;"
                @click.stop="toggle"
              />
            </template>
          </v-item>
        </v-item-group>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'HomeSettings',

  data() {
    return {
      colors: [
        this.$vuetify.theme.themes.light.primary,
        '#9368e9',
        '#F4511E',
      ],
      menu: false,
    }
  },
}
</script>
