import {mapActions} from 'vuex'
import CONSTANTS from '@/config/constants'
export default {
  data: () => ({
    CONSTANTS: CONSTANTS
  }),
  computed: {
    user() {
      if (this.$auth.user()) return this.$auth.user()
      return {}
    }
  },
  methods: {
    ...mapActions({
      noticeInfo: 'system/noticeInfo',
      noticeSuccess: 'system/noticeSuccess',
      noticeWarning: 'system/noticeWarning',
      noticeError: 'system/noticeError',
    }),
    findRefByName(refName) {
      let obj = this
      while (obj) {
        if (obj.$refs[refName]) return obj.$refs[refName]
        obj = obj.$parent
      }
      return undefined
    },
  },
  created() {
    if (!window.VueComp) window.VueComp = {
      Others: []
    }

    let compName = this.$options.name;
    if (typeof compName === 'undefined') return;
    if (!window.VueComp[compName]) window.VueComp[compName] = this
    else window.VueComp.Others.push(this)
  },
}
