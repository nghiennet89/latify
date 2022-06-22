<template>
  <v-parallax :src="backgroundImage" style="height: 100%">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" lg="5" md="6" sm="8">
        <v-card class="elevation-5 pa-3">
          <v-card-actions>
            <v-spacer></v-spacer>
            <localization/>
          </v-card-actions>
          <v-card-text>
            <div class="layout column align-center">
              <img :src="require('~/img/icons/vuetify.svg')" alt="Vue Vuetify Admin Logo" height="120" width="120">
              <h1 class="text-center my-4 primary--text">{{ appTitle }}</h1>
            </div>
            <v-form>
              <v-text-field v-model="userLogin.username" :label="$t('login.email')" append-icon="mdi-account" autocomplete="username" name="email"
                            required type="email"
                            @keyup.enter="login"/>
              <v-text-field v-model="userLogin.password" :label="$t('login.password')" append-icon="mdi-lock" autocomplete="current-password"
                            name="password"
                            required
                            type="password" @keyup.enter="login"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <template v-if="$vuetify.breakpoint.name === 'xs'">
              <v-row>
                <v-col cols="6">
                  <v-btn :to="{name: 'Register'}" class="float-left" color="primary" outlined>
                    {{ $t('login.register') }}
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn :loading="loading" class="float-right" color="primary" @click="login">
                    {{ $t('login.login') }}
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn block class="float-left white--text" color="red" href="/social-login/google">
                    <v-icon class="v-size--x-large mr-2" color="white">mdi-google</v-icon>
                    Login with Google
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn block class="float-right white--text" href="/social-login/facebook" style="background: #3b5998">
                    <v-icon class="v-size--x-large mr-2" color="white">mdi-facebook</v-icon>
                    Login with Facebook
                  </v-btn>
                </v-col>

              </v-row>
            </template>
            <template v-else>
              <v-btn color="red white--text" href="/social-login/google">
                <v-icon class="v-size--x-large mr-2" color="white">mdi-google</v-icon>
                Google
              </v-btn>
              <v-btn color="white--text" href="/social-login/facebook" style="background: #3b5998">
                <v-icon class="v-size--x-large mr-2" color="white">mdi-facebook</v-icon>
                Facebook
              </v-btn>
              <v-spacer/>
              <v-btn :to="{name: 'Register'}" color="primary" outlined>
                {{ $t('login.register') }}
              </v-btn>
              <v-btn :loading="loading" color="primary" @click="login">
                {{ $t('login.login') }}
              </v-btn>
            </template>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import Localization from '@/admin/widget/AppLocalization.vue';
import {mapGetters} from 'vuex'
import config from '@/config'

export default {
  name: 'Login',
  components: {Localization},
  data: () => ({
    appTitle: config.appName,
    loading: false,
    socialLogin: false,
    userLogin: {
      username: 'admin@' + config.appUrl.replace('https://', '').replace('http://', ''),
      password: 'Admin@123',
      grant_type: "password",
      ...config.auth().passport,
    },
  }),
  computed: {
    ...mapGetters({
      backgroundImage: 'settings/backgroundImage'
    })
  },
  methods: {
    login() {
      this.$auth.login({
        data: {
          ...this.userLogin,
        },
        rememberMe: true,
        fetchUser: true,
        error: err => {
          console.log('error:', err.response)
        }
      })
    },
  },
  mounted() {
    if (this.$auth.currentToken) return this.$router.push({name: 'Dashboard'});
    this.$auth.fetch();
  }
};
</script>
<style>
.v-parallax__image-container img {
  bottom: 0;
  left: 0;
  filter: brightness(35%);
  position: fixed;
  right: 0;
  top: 0;
  transform: none !important;
  transition: none;
}
</style>
