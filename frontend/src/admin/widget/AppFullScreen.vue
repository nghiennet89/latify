<template>
  <v-btn icon @click="toggleFullScreen">
    <v-icon>{{ toggleFullScreenIcon }}</v-icon>
  </v-btn>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

const toggleFullScreen = () => {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen = docEl.requestFullscreen
    || docEl.mozRequestFullScreen
    || docEl.webkitRequestFullScreen
    || docEl.msRequestFullscreen;
  const cancelFullScreen = doc.exitFullscreen
    || doc.mozCancelFullScreen
    || doc.webkitExitFullscreen
    || doc.msExitFullscreen;

  if (!doc.fullscreenElement
    && !doc.mozFullScreenElement
    && !doc.webkitFullscreenElement
    && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
    return true;
  }

  cancelFullScreen.call(doc);
  return false;
};

export default {
  name: 'AppFullScreen',
  computed: {
    ...mapGetters({
      fullscreenShow: 'settings/fullscreenShow',
    }),
    toggleFullScreenIcon() {
      return this.fullscreenShow ? 'mdi-fullscreen-exit' : 'mdi-fullscreen';
    },
  },
  methods: {
    ...mapActions({
      FullscreenToggle: 'settings/FullscreenToggle'
    }),
    toggleFullScreen() {
      this.FullscreenToggle({state: toggleFullScreen()})
    },
  },
};
</script>
