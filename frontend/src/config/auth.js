const VueCookies = require('vue-cookies');

module.exports = function () {
  return {
    VueAuth: {
      auth: {
        request: (req, token) => {
          req.headers = req.headers || {}
          req.headers.Authorization = 'Bearer ' + token
          return req
        },
        response: res => {
          let url = res.config.url;
          if (url.indexOf('oauth') < 0) {
            //handle personal_access_token from social login
            let personalAccessToken = window.localStorage.getItem(window.location.hostname + '_personal_access_token');
            if (!personalAccessToken) return
            window.localStorage.removeItem(window.location.hostname + '_personal_access_token');
            VueCookies.set(window.location.hostname + '_personal_access_token', personalAccessToken, new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000))
            VueCookies.set(window.location.hostname + '_rememberMe', true, new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000))
            VueCookies.remove(window.location.hostname + '_refresh_token');
            return personalAccessToken
          }
          
          let token = res.data ? res.data.access_token : null
          if (token) {
            let expiresIn = parseInt(res.data.expired_in)
            VueCookies.set(window.location.hostname + '_access_token', res.data.access_token, new Date(new Date().getTime() + expiresIn))
            VueCookies.set(window.location.hostname + '_refresh_token', res.data.refresh_token, new Date(new Date().getTime() + expiresIn))
            VueCookies.set(window.location.hostname + '_token_type', res.data.token_type, new Date(new Date().getTime() + expiresIn))
            VueCookies.set(window.location.hostname + '_expires_in', res.data.expires_in, new Date(new Date().getTime() + expiresIn))
            try {
              if (window._VueAdminApp) {
                window._VueAdminApp.$auth.options.refreshData.enabled = true
                window._VueAdminApp.$auth.options.refreshData.data.refresh_token = res.data.refresh_token
              }
              if (window._VueWebApp) {
                window._VueWebApp.$auth.options.refreshData.enabled = true
                window._VueWebApp.$auth.options.refreshData.data.refresh_token = res.data.refresh_token
              }
            } catch (e) {
              console.log('Update refresh token fail:', e);
            }
            return token.trim()
          }
        }
      },
      http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
      router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
      rolesVar: 'role.id',
      authRedirect: {name: 'Login'},
      loginData: {
        url: '../oauth/token',
        method: 'POST',
        redirect: {name: 'Dashboard'},
      },
      logoutData: {
        url: '/user/logout',
        method: 'GET',
        redirect: {name: 'Login'},
        makeRequest: true,
      },
      fetchData: {
        url: 'user/info',
        method: 'GET',
        enabled: true
      },
      refreshData: {
        url: '../oauth/token',
        method: 'POST',
        //enabled: !window.localStorage.getItem(window.location.hostname + '_personal_access_token') && !VueCookies.isKey(window.location.hostname + '_personal_access_token'),
        enabled: VueCookies.isKey(window.location.hostname + '_refresh_token'),
        interval: 60, //minutes
        data: {
          refresh_token: VueCookies.isKey(window.location.hostname + '_refresh_token') ? VueCookies.get(window.location.hostname + '_refresh_token') : 'no-token',
          grant_type: 'refresh_token',
          client_id: process.env.VUE_APP_PUBLIC_CLIENT_ID,
          client_secret: process.env.VUE_APP_PUBLIC_CLIENT_SECRET,
        },
        params: {
          silent: true
        }
      },
      parseUserData: data => data
    },
    pusher: {
      key: process.env.VUE_APP_PUSHER_APP_KEY,
      cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
    },
    passport: {
      client_id: process.env.VUE_APP_PUBLIC_CLIENT_ID,
      client_secret: process.env.VUE_APP_PUBLIC_CLIENT_SECRET,
    }
  }
}
