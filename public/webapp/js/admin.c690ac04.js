(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={admin:0},i={admin:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-33eab2b1":"8724c9da","chunk-48b30c6c":"6823d14d","chunk-49bed9fd":"20eee910","chunk-6f860b96":"78350068","chunk-eb44fdd6":"6f3fbbcb","chunk-120ded5c":"f09a51a2","chunk-2a17404c":"de1ed4a7","chunk-5b7acb9c":"86e1ed59","chunk-bedef052":"4604fdbf","chunk-3bdf0eac":"e0fec155","chunk-81868c90":"e5436292"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-33eab2b1":1,"chunk-48b30c6c":1,"chunk-49bed9fd":1,"chunk-6f860b96":1,"chunk-eb44fdd6":1,"chunk-120ded5c":1,"chunk-2a17404c":1,"chunk-5b7acb9c":1,"chunk-bedef052":1,"chunk-3bdf0eac":1,"chunk-81868c90":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-33eab2b1":"3bd07d10","chunk-48b30c6c":"d23d36b7","chunk-49bed9fd":"01cf6fd8","chunk-6f860b96":"d23d36b7","chunk-eb44fdd6":"62292234","chunk-120ded5c":"df9d9a7c","chunk-2a17404c":"7d55441c","chunk-5b7acb9c":"9f3a8196","chunk-bedef052":"489f3631","chunk-3bdf0eac":"df9d9a7c","chunk-81868c90":"f2197ed2"}[t]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],d.parentNode.removeChild(d),n(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",h.name="ChunkLoadError",h.type=a,h.request=o,n[1](h)}i[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/webapp/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;r.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){n("ed71"),t.exports=n("45f6")},"0034":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{dense:""}},t._l(t.themes,(function(e,a){return n("v-col",{key:a,class:["text-center",{"elevation-5 pa-2":t.themeIndex===a}],attrs:{cols:t.cols},on:{click:function(e){return e.stopPropagation(),t.toggleTheme(a)}}},t._l(e.light,(function(e,a){return n("div",{key:a,staticClass:"white--text",style:{background:e}},[t._v(" "+t._s(a)+" ")])})),0)})),1)},o=[],i=n("5530"),r=n("2f62"),s=n("e21c"),c={name:"AppTheme",props:{cols:{type:String,default:"6"}},data:function(){return{themes:s["a"]}},computed:Object(i["a"])({},Object(r["c"])({themeIndex:"settings/themeIndex"})),methods:{toggleTheme:function(t){this.$store.dispatch("settings/ThemeToggle",{index:t,vuetify:this.$vuetify})}}},l=c,u=n("2877"),h=n("6544"),d=n.n(h),f=n("62ad"),m=n("0fd9"),p=Object(u["a"])(l,a,o,!1,null,null,null);e["a"]=p.exports;d()(p,{VCol:f["a"],VRow:m["a"]})},"045a":function(t,e,n){"use strict";n("50dc")},"0c24":function(t,e,n){"use strict";n("e5da")},"19d5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"nudge-bottom":10,"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:"",text:""}},a),[n("v-icon",[t._v(" mdi-translate ")])],1)]}}])},[n("v-list",{staticClass:"pa-0"},t._l(t.locales,(function(e,a){return n("v-list-item",{key:a,attrs:{target:e.target,rel:"noopener",ripple:"ripple"},on:{click:function(n){return t.setLocale(e.locale)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)},o=[],i=n("1da1"),r=(n("96cf"),n("a7c8")),s={name:"AppLocalization",data:function(){return{locales:r["b"]}},methods:{setLocale:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("settings/SetLocale",{locale:t});case 2:case"end":return n.stop()}}),n)})))()}}},c=s,l=n("2877"),u=n("6544"),h=n.n(u),d=n("8336"),f=n("132d"),m=n("8860"),p=n("da13"),b=n("5d23"),v=n("e449"),g=Object(l["a"])(c,a,o,!1,null,null,null);e["a"]=g.exports;h()(g,{VBtn:d["a"],VIcon:f["a"],VList:m["a"],VListItem:p["a"],VListItemContent:b["a"],VListItemTitle:b["c"],VMenu:v["a"]})},2962:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="2962"},3191:function(t,e,n){},"45f6":function(t,e,n){},"48ec":function(t,e,n){"use strict";n("bfb5")},"50dc":function(t,e,n){},"5f67":function(t,e,n){},"655b":function(t,e,n){"use strict";n("caf8")},bcb9:function(t,e,n){},bfb5:function(t,e,n){},c882:function(t,e,n){},caf8:function(t,e,n){},d3a7:function(t,e,n){"use strict";n("3191")},d624:function(t,e,n){"use strict";n("5f67")},e5da:function(t,e,n){},e624:function(t,e,n){"use strict";n("c882")},e7ff:function(t,e,n){"use strict";n("bcb9")},ed71:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("f5df1"),n("bf40"),n("d5e8"),n("39bd");var a=n("2b0e"),o=n("bc3a"),i=n.n(o),r=n("a7fe"),s=n.n(r),c=n("a65d"),l=n.n(c),u=n("2b27"),h=n.n(u),d=n("8a9b"),f=n.n(d),m=n("9b43"),p=n.n(m),b=n("587c"),v=n("5cff"),g=n("54c3"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view",{ref:"content"}),n("div",{style:t.appLoading||t.initializing?"display: block;":"display: none;",attrs:{id:"app-loading"}},[n("img",{staticClass:"indicator-icon",attrs:{src:"/webapp/img/loading_indicator.svg"}})]),n("AdminNotice")],1)},y=[],w=n("5530"),k=(n("b0c0"),n("2f62")),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span")},T=[],O={name:"AdminNotice",data:function(){return{toastShowing:0}},computed:Object(w["a"])({},Object(k["c"])({notices:"system/notices"})),methods:Object(w["a"])(Object(w["a"])({},Object(k["b"])({removeNotice:"system/removeNotice"})),{},{showNotice:function(t){var e=this,n={className:"vue-toast-notices",duration:5759+579*this.toastShowing,action:{class:"action-close-toast v-icon mdi mdi-close",onClick:function(t,n){e.toastShowing-=1,n.goAway(0)}},onComplete:function(){return e.toastShowing-=1}};this.toastShowing+=1,t.type===p.a.CONSTANTS.NOTICE_TYPE.SUCCESS&&(n.type="success"),t.type===p.a.CONSTANTS.NOTICE_TYPE.ERROR&&(n.type="error"),t.type===p.a.CONSTANTS.NOTICE_TYPE.INFO&&(n.className+=" toast-info"),t.type===p.a.CONSTANTS.NOTICE_TYPE.WARNING&&(n.className+=" toast-warning"),this.$toasted.show(t.message,n),this.removeNotice(t)}}),watch:{notices:{handler:function(t){while(this.toastShowing<p.a.settings.maxNoticesDisplay&&t.length>0)this.showNotice(t.pop())},deep:!0},toastShowing:{handler:function(){while(this.toastShowing<p.a.settings.maxNoticesDisplay&&this.notices.length>0)this.showNotice(this.notices.pop())}}}},x=O,E=(n("e624"),n("2877")),C=Object(E["a"])(x,S,T,!1,null,null,null),N=C.exports,j={name:"Admin",data:function(){return{needUserMasterData:!0,watchUserAuth:null,initializing:!0}},components:{AdminNotice:N},computed:Object(w["a"])(Object(w["a"])({},Object(k["c"])({appLoading:"system/appLoading",notices:"system/notices"})),{},{_user:function(){return this.$auth.user()}}),methods:Object(w["a"])({},Object(k["b"])({loadMasterData:"loadMasterData",loadUserMasterData:"loadUserMasterData",setAuthenticatedUser:"user/setAuthenticatedUser"})),watch:{$route:{handler:function(t){if(!t||!t.matched||t.matched.length<1)return this.$router.push({name:"Page404"})}}},created:function(){var t=this;this.watchUserAuth=this.$watch("_user",(function(e){console.log("SET_AUTHENTICATED_USER",e),e&&e.id&&e.role_id?(t.setAuthenticatedUser(JSON.parse(JSON.stringify(e))),t.needUserMasterData=!1,t.loadUserMasterData().then((function(e){if(console.log("User's master data :",e),"Login"===t.$route.name)return t.$router.push({name:"Dashboard"})}))):t.setAuthenticatedUser(null)})),this.loadMasterData().then((function(t){console.log("Master data :",t)}))},updated:function(){var t=this;this.initializing&&this.$nextTick((function(){"undefined"!=typeof t.$refs.content&&(t.initializing=!1)}))}},V=j,A=(n("48ec"),n("d3a7"),n("6544")),L=n.n(A),$=n("7496"),D=Object(E["a"])(V,_,y,!1,null,"7f031c7f",null),I=D.exports;L()(D,{VApp:$["a"]});var P=n("2909"),R=(n("99af"),n("3ca3"),n("ddb0"),n("8c4f")),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-application--wrap"},[n("div",{staticClass:"app-background",style:"background-image: url("+t.backgroundImage+")"}),n("the-layout-drawer"),n("the-layout-toolbar"),n("the-layout-content"),n("the-layout-fab"),n("the-layout-to-top-fab"),n("the-layout-footer")],1)},B=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"menu-box",class:t.themeDark?"menu-dark":"menu-light",attrs:{value:t.navbarShow,app:"",fixed:"",width:"275"},on:{input:t.stateNavbarShow}},[t.navbarLogo?n("v-app-bar",{staticClass:"align-center",staticStyle:{background:"rgba(128,128,128,0.35)"},attrs:{dense:t.toolbarDense}},[n("v-toolbar-title",{staticStyle:{display:"inline-table"}},[n("v-avatar",{staticClass:"px-1",attrs:{size:"32px",tile:""}},[n("img",{attrs:{alt:"VVA",src:"/webapp/img/icons/vuetify.svg",width:"32"}})])],1),n("v-toolbar-title",{staticStyle:{width:"100%"}},[n("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(t.appName))])])],1):t._e(),n("the-layout-drawer-list",{attrs:{dense:t.navbarDense,menu:t.menu,"icon-show":""}})],1)},F=[],z=(n("4de4"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"layout-drawer",attrs:{dense:t.dense}},t._l(t.menu,(function(e){return n("div",{key:e.name},[t.hasChildren(e)?n("v-list-group",{attrs:{"prepend-icon":t.getListIcon(e),value:t.needExplainMenu(e)},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t.getListTitle(e))+" ")])],1)]},proxy:!0}],null,!0)},[n("the-layout-drawer-list",{attrs:{dense:t.dense,menu:e.children,iconShow:!0}})],1):n("v-list-item",{staticClass:"px-1",class:e.name===t.$route.name?"v-list-item--active":"",attrs:{ripple:"ripple"},on:{click:function(n){return t.openRoute(e,n)}}},[n("v-list-item-icon",{staticClass:"layout-drawer__icon ma-3"},[n("v-icon",[t._v(t._s(t.getListIcon(e)))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t.getListTitle(e))+" ")])],1)],1)],1)})),0)}),q=[],Y=(n("498a"),{name:"TheLayoutDrawerList",props:{dense:Boolean,iconShow:Boolean,isNest:Boolean,menu:{type:Array,default:function(){}}},data:function(){return{}},computed:Object(w["a"])({},Object(k["c"])({breadcrumb:"system/breadcrumb"})),methods:Object(w["a"])(Object(w["a"])({},Object(k["b"])({})),{},{isExternal:function(t){return/^(https?:|mailto:|tel:)/.test(t)},needExplainMenu:function(t){var e=this.breadcrumb.map((function(t){return t.title}));return e.indexOf(t.title)>-1},hasChildren:function(t){return null!==t.children&&(!!Array.isArray(t.children)&&t.children.length>=1)},openRoute:function(t,e){if(e.target.innerText&&e.target.innerText.trim()===this.$t(t.title)){var n=t.name,a=this.$router.currentRoute.name;n&&n!==a&&this.$router.push({name:n})}},getListIcon:function(t){return this.iconShow&&t.icon?t.icon:" "},getListTitle:function(t){return t?this.$t(t.title):""}})}),H=Y,J=(n("0c24"),n("132d")),G=n("8860"),W=n("56b0"),X=n("da13"),K=n("5d23"),Q=n("34c3"),Z=Object(E["a"])(H,z,q,!1,null,null,null),tt=Z.exports;L()(Z,{VIcon:J["a"],VList:G["a"],VListGroup:W["a"],VListItem:X["a"],VListItemContent:K["a"],VListItemIcon:Q["a"],VListItemTitle:K["c"]});var et,nt=n("b85c"),at=n("2962"),ot=[],it=Object(nt["a"])(at.keys());try{for(it.s();!(et=it.n()).done;){var rt=et.value,st=at(rt);ot.push(st.default||st)}}catch(Ln){it.e(Ln)}finally{it.f()}var ct=[{name:"Dashboard",title:"route.dashboard",icon:"mdi-view-dashboard"},{title:"menu.auth.title",icon:"mdi-account-group",role:[m["CONSTANTS"].ROLES.SUPER_ADMINISTRATOR],children:[{name:"ManageUsers",title:"menu.auth.manageUsers",icon:"mdi-account-multiple"},{name:"ManageRoles",title:"menu.auth.manageRoles",icon:"mdi-account-multiple-check"},{name:"ManageScopes",title:"menu.auth.manageScopes",icon:"mdi-account-question"}]},{title:"Resources",icon:"mdi-alpha-r-box-outline",children:ot},{title:"route.config",icon:"mdi-cog",children:[{name:"Theme",title:"route.theme",icon:"mdi-palette"},{name:"I18n",title:"route.i18n",icon:"mdi-translate"}]}],lt={name:"TheLayoutDrawer",components:{TheLayoutDrawerList:tt},data:function(){return{appName:m["appName"]}},computed:Object(w["a"])(Object(w["a"])({},Object(k["c"])({navbarDense:"settings/navbarDense",navbarShow:"settings/navbarShow",navbarLogo:"settings/navbarLogo",toolbarDense:"settings/toolbarDense",themeDark:"settings/themeDark",authenticatedUser:"user/authenticatedUser",backgroundImage:"settings/backgroundImage"})),{},{menu:function(){var t=this;return ct.map((function(e){return t.parseRole(e,t.authenticatedUser?t.authenticatedUser.role_id:null)})).filter((function(t){return null!==t}))}}),methods:{stateNavbarShow:function(t){this.$store.dispatch("settings/NavbarState",{state:t})},parseRole:function(t,e){var n=this;return Array.isArray(t.children)&&t.children.length>0&&(t.children=t.children.map((function(t){return n.parseRole(t,e)})).filter((function(t){return null!==t}))),t.role?(Array.isArray(t.role)||(t.role=[t.role]),t.role.indexOf(e)<0?null:t):t}}},ut=lt,ht=(n("e7ff"),n("40dc")),dt=n("8212"),ft=n("f774"),mt=n("2a7f"),pt=Object(E["a"])(ut,M,F,!1,null,null,null),bt=pt.exports;L()(pt,{VAppBar:ht["a"],VAvatar:dt["a"],VNavigationDrawer:ft["a"],VToolbarTitle:mt["a"]});var vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{dense:t.toolbarDense,app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.NavbarToggle.apply(null,arguments)}}},[n("v-icon",[t._v(t._s(t.toggleNavbarIcon))])],1),n("breadcrumbs"),n("v-spacer"),n("full-screen"),n("notification"),n("localization"),n("profile")],1)},gt=[],_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:t.breadcrumb,divider:"/"},scopedSlots:t._u([{key:"item",fn:function(e){return[n("a",{on:{click:function(n){return n.preventDefault(),t.handleLink(e.item)}}},[t._v(" "+t._s(t.generateTitle(e.item.title))+" ")])]}}])})},yt=[],wt=(n("159b"),{name:"AppBreadcrumbs",data:function(){return{menu:ct}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},computed:Object(w["a"])({},Object(k["c"])({breadcrumb:"system/breadcrumb",themeDark:"settings/themeDark"})),methods:Object(w["a"])(Object(w["a"])({},Object(k["b"])({setBreadcrumb:"system/setBreadcrumb"})),{},{generateTitle:function(t){var e=this.$te("".concat(t));if(e){var n=this.$t("".concat(t));return n}return t},getBreadcrumb:function(){var t=[],e=function e(n,a){var o=n.filter((function(t){return t.name===a}));if(o.length)return t.unshift(o[0]),o[0];var i=null;return n.filter((function(t){return t.children})).forEach((function(n){var o=e(n.children,a);if(o)return t.unshift(n),i=o})),i},n=this.$router.currentRoute.name;e(this.menu,n),this.setBreadcrumb(t)},handleLink:function(t){var e=this.$router.currentRoute,n=t.redirect;if(n===e.path)return console.log("not redirect to current route");if(void 0!==n&&"noredirect"!==n){var a=this.$router.resolve({path:n});return a.route.path===n?this.$router.push({path:n}):console.log("Route link error:",n)}if(t.name===e.name)return console.log("not redirect to current route");var o=t&&t.name?t.name:"Dashboard",i=this.$router.resolve({name:o});return i.route.name===o?this.$router.push({name:o}):console.log("routeName error:",o)}})}),kt=wt,St=n("2bc5"),Tt=Object(E["a"])(kt,_t,yt,!1,null,null,null),Ot=Tt.exports;L()(Tt,{VBreadcrumbs:St["a"]});var xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:""},on:{click:t.toggleFullScreen}},[n("v-icon",[t._v(t._s(t.toggleFullScreenIcon))])],1)},Et=[],Ct=function(){var t=window.document,e=t.documentElement,n=e.requestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullScreen||e.msRequestFullscreen,a=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen;return t.fullscreenElement||t.mozFullScreenElement||t.webkitFullscreenElement||t.msFullscreenElement?(a.call(t),!1):(n.call(e),!0)},Nt={name:"AppFullScreen",computed:Object(w["a"])(Object(w["a"])({},Object(k["c"])({fullscreenShow:"settings/fullscreenShow"})),{},{toggleFullScreenIcon:function(){return this.fullscreenShow?"mdi-fullscreen-exit":"mdi-fullscreen"}}),methods:Object(w["a"])(Object(w["a"])({},Object(k["b"])({FullscreenToggle:"settings/FullscreenToggle"})),{},{toggleFullScreen:function(){this.FullscreenToggle({state:Ct()})}})},jt=Nt,Vt=n("8336"),At=Object(E["a"])(jt,xt,Et,!1,null,null,null),Lt=At.exports;L()(At,{VBtn:Vt["a"],VIcon:J["a"]});var $t=n("19d5"),Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"nudge-bottom":10,"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:"",text:""},on:{click:t.onExplainNotificationsBox}},a),[n("v-icon",{attrs:{color:t.notifyColor}},[t._v(t._s(t.notifyIcon))]),n("span",{staticClass:"notify-unread red--text"},[t._v(t._s(t.notifyUnreadCount))])],1)]}}])},[n("v-list",{staticClass:"pa-0",attrs:{subheader:"","two-line":""}},[n("v-subheader",[t._v("Notifications")]),n("v-divider"),t._l(t.serverNotifications,(function(e,a){return n("v-list-item",{key:a,on:{click:function(t){}}},[n("v-list-item-avatar",[n("v-icon",{class:[e.iconClass]},[t._v(" "+t._s(e.icon)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))]),n("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v(" mdi-information ")])],1)],1)],1)}))],2),n("v-divider"),n("v-subheader",[t._v("Show All")])],1)},It=[],Pt=n("5638"),Rt={name:"AppNotification",data:function(){return{echo:null}},computed:Object(w["a"])(Object(w["a"])({},Object(k["c"])({serverNotifications:"serverNotifications",authenticatedUser:"user/authenticatedUser"})),{},{authenticatedUserId:function(){return this.authenticatedUser?this.authenticatedUser.id:null},isEchoConnected:function(){return this.echo&&null!==this.echo.connector.pusher.connection.connection},notifyIcon:function(){return"mdi-bell"},notifyColor:function(){return"secondary"},notifyUnreadCount:function(){return this.serverNotifications.length>0?this.serverNotifications.length:""}}),methods:Object(w["a"])(Object(w["a"])({},Object(k["b"])({gotServerNotification:"gotServerNotification"})),{},{registerEcho:function(){this.echo=new Pt["a"](Object(w["a"])(Object(w["a"])({},p.a.auth().pusher),{},{broadcaster:"pusher",forceTLS:!0,authEndpoint:"/broadcasting/auth",auth:{headers:{Authorization:null}}}))},connectEcho:function(){var t=this;this.echo||(this.registerEcho(),this.echo.connector.pusher.connection.bind("connected",(function(e){return t.bindChannels(e)})),this.echo.connector.pusher.connection.bind("disconnected",(function(){return t.disconnectEcho()}))),this.echo.connector.pusher.config.auth.headers.Authorization="Bearer "+this.$auth.token(),this.echo.connector.pusher.connect()},disconnectEcho:function(){this.echo&&this.echo.disconnect()},bindChannels:function(){var t=this;console.log("Echo: Bind channels"),this.echo.private("App.Entities.User."+this.authenticatedUserId).notification((function(e){return t.handleNotification(e)})),this.listenEvent("BaseEvent"),this.listenEvent("App\\Events\\BaseEvent")},listenEvent:function(t){var e=this;this.echo.private("App.Entities.User."+this.authenticatedUserId).listen(t,(function(n){e.handleEvent(t,n)}))},handleEvent:function(t,e){this.gotServerNotification({icon:"mdi-message",iconClass:"blue white--text",title:"New Event: "+t,subtitle:e,fullData:e,unread:!0}),this.noticeInfo(this.$t("notification.new"))},handleNotification:function(t){this.gotServerNotification({icon:"mdi-message",iconClass:"blue white--text",title:t.data.title?t.data.title:t.data,subtitle:t.created_at,fullData:t,unread:!0}),this.noticeInfo(this.$t("notification.new"))},onExplainNotificationsBox:function(){}}),watch:{authenticatedUserId:{handler:function(t){return t?this.connectEcho():this.disconnectEcho()},deep:!0},isEchoConnected:{handler:function(t){return t?console.log("Echo: Connected"):console.log("Echo: Disconnected")}}},mounted:function(){this.authenticatedUserId&&!this.isEchoConnected&&this.connectEcho()}},Ut=Rt,Bt=n("ce7e"),Mt=n("1800"),Ft=n("8270"),zt=n("e449"),qt=n("e0c7"),Yt=Object(E["a"])(Ut,Dt,It,!1,null,null,null),Ht=Yt.exports;L()(Yt,{VBtn:Vt["a"],VDivider:Bt["a"],VIcon:J["a"],VList:G["a"],VListItem:X["a"],VListItemAction:Mt["a"],VListItemAvatar:Ft["a"],VListItemContent:K["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"],VMenu:zt["a"],VSubheader:qt["a"]});var Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"nudge-bottom":10,"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:"",large:"",text:""}},a),[n("v-avatar",{attrs:{size:"36px"}},[t.user.avatar?n("img",{attrs:{src:t.user.avatar,alt:"name"}}):n("v-icon",{staticClass:"blue--text",attrs:{"x-large":""}},[t._v(" mdi-account-circle ")])],1)],1)]}}])},[n("v-list",{staticClass:"pa-0"},[n("v-list",[n("v-list-item",[n("v-list-item-avatar",[t.user.avatar?n("img",{attrs:{src:t.user.avatar,alt:"name"}}):n("v-icon",{staticClass:"blue--text",attrs:{"x-large":""}},[t._v(" mdi-account ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.user.name))]),n("v-list-item-subtitle",[t._v(t._s(t.user&&t.user.role?t.user.role.name:""))])],1)],1)],1),n("v-divider"),t._l(t.menuitems,(function(e,a){return n("v-list-item",{key:a,attrs:{disabled:e.disabled,rel:"noopener",ripple:"ripple"},on:{click:e.click}},[e.icon?n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t(e.title)))])],1)],1)}))],2)],1)},Gt=[],Wt={name:"AppProfile",data:function(){var t=this;return{menuitems:[{icon:"mdi-account",title:"toolbar.profile",click:function(e){t.$router.push({name:"Profile"})}},{icon:"mdi-cog",title:"toolbar.settings",click:function(){return t.toggleSettingsPanel()}},{icon:"mdi-exit-to-app",title:"toolbar.logout",click:function(){t.logout()}}]}},computed:{user:function(){return this.$auth.user()}},methods:Object(w["a"])(Object(w["a"])({},Object(k["b"])({SettingsPanelToggle:"settings/SettingsPanelToggle"})),{},{logout:function(){this.$auth.logout()},toggleSettingsPanel:function(){this.$vuetify.goTo(0),this.SettingsPanelToggle()}})},Xt=Wt,Kt=Object(E["a"])(Xt,Jt,Gt,!1,null,null,null),Qt=Kt.exports;L()(Kt,{VAvatar:dt["a"],VBtn:Vt["a"],VDivider:Bt["a"],VIcon:J["a"],VList:G["a"],VListItem:X["a"],VListItemAction:Mt["a"],VListItemAvatar:Ft["a"],VListItemContent:K["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"],VMenu:zt["a"]});var Zt={name:"TheLayoutToolbar",components:{Breadcrumbs:Ot,FullScreen:Lt,Localization:$t["a"],Notification:Ht,Profile:Qt},data:function(){return{}},computed:Object(w["a"])(Object(w["a"])({},Object(k["c"])({toolbarDense:"settings/toolbarDense",navbarShow:"settings/navbarShow",themeDark:"settings/themeDark"})),{},{toggleNavbarIcon:function(){return this.navbarShow?"mdi-format-indent-decrease":"mdi-format-indent-increase"}}),methods:Object(w["a"])({},Object(k["b"])({NavbarToggle:"settings/NavbarToggle"}))},te=Zt,ee=n("5bc1"),ne=n("2fa4"),ae=Object(E["a"])(te,vt,gt,!1,null,null,null),oe=ae.exports;L()(ae,{VAppBar:ht["a"],VAppBarNavIcon:ee["a"],VIcon:J["a"],VSpacer:ne["a"]});var ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("transition",{attrs:{mode:"out-in",name:"fade-transform"}},[n("keep-alive",[n("v-card",{staticClass:"layout-card-content",attrs:{tile:"",elevation:0}},[n("router-view")],1)],1)],1)],1)},re=[],se={name:"TheLayoutContent"},ce=se,le=(n("045a"),n("b0af")),ue=n("f6c4"),he=Object(E["a"])(ce,ie,re,!1,null,null,null),de=he.exports;L()(he,{VCard:le["a"],VMain:ue["a"]});var fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",{staticClass:"layout-fab"},[t.settingsPanelBtn?n("v-btn",{staticClass:"layout-fab__btn",attrs:{color:"error",fab:"",falt:"",fixed:"",right:"right",small:"",top:"top"},on:{click:t.toggleSettingsPanel}},[n("v-icon",[t._v("mdi-cog")])],1):t._e(),n("v-navigation-drawer",{attrs:{value:t.settingsPanelShow,app:"","disable-resize-watcher":"",fixed:"",right:"",temporary:""},on:{input:t.stateSettingsPanel}},[n("v-app-bar",{attrs:{dense:t.toolbarDense,color:"secondary",dark:""}},[n("v-toolbar-title",[t._v(" "+t._s(t.$t("settings.title"))+" ")]),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{absolute:"",bottom:"",color:"error",dark:"",fab:"",right:"",small:""},on:{click:function(e){return e.stopPropagation(),t.setDefaultSettingsPanel.apply(null,arguments)}}},a),[n("v-icon",[t._v("mdi-refresh")])],1)]}}])},[n("span",[t._v(t._s(t.$t("settings.default")))])])],1),n("v-subheader",{staticClass:"layout-fab__header"},[t._v(" "+t._s(t.$t("settings.version"))+": "+t._s(t.version)+" ")]),n("v-divider"),n("v-expansion-panels",{attrs:{accordion:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"layout-fab__header"},[t._v(" "+t._s(t.$t("settings.position"))+" ")]),n("v-expansion-panel-content",t._l(t.switches,(function(t,e){return n("v-switch",{key:e,staticClass:"layout-fab__switch",attrs:{disabled:null===t.value,"input-value":t.value,label:t.label,color:"secondary",dense:"","hide-details":""},on:{change:t.change}})})),1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"layout-fab__header"},[t._v(" "+t._s(t.$t("settings.theme"))+" ")]),n("v-expansion-panel-content",[n("app-theme",{attrs:{cols:"6"}})],1)],1)],1)],1)],1)},me=[],pe=n("0034"),be={name:"TheLayoutFab",components:{AppTheme:pe["a"]},data:function(){return{}},computed:Object(w["a"])(Object(w["a"])({},Object(k["c"])({version:"settings/version",themeDark:"settings/themeDark",settingsPanelBtn:"settings/settingsPanelBtn",settingsPanelShow:"settings/settingsPanelShow",toolbarDense:"settings/toolbarDense",navbarDense:"settings/navbarDense",navbarLogo:"settings/navbarLogo",footerShow:"settings/footerShow"})),{},{switches:function(){return[{value:this.toolbarDense,label:"".concat(this.$t("settings.toolbarDense"),": ").concat(this.toolbarDense?"on":"off"),change:this.toggleToolbarDense},{value:this.navbarDense,label:"".concat(this.$t("settings.navbarDense"),": ").concat(this.navbarDense?"on":"off"),change:this.toggleNavbarDense},{value:this.navbarLogo,label:"".concat(this.$t("settings.navbarLogo"),": ").concat(this.navbarLogo?"on":"off"),change:this.toggleNavbarLogo},{value:this.settingsPanelBtn,label:"".concat(this.$t("settings.settingsBtn"),": ").concat(this.settingsPanelBtn?"on":"off"),change:this.toggleSettingsPanelBtn},{value:this.footerShow,label:"".concat(this.$t("settings.footer"),": ").concat(this.footerShow?"on":"off"),change:this.toggleFooterToggle},{value:this.themeDark,label:"".concat(this.$t("settings.dark"),": ").concat(this.themeDark?"on":"off"),change:this.toogleThemeDark}]}}),methods:{stateSettingsPanel:function(t){this.$store.dispatch("settings/SettingsPanelState",{state:t})},toggleSettingsPanel:function(){this.$vuetify.goTo(0),this.$store.dispatch("settings/SettingsPanelToggle")},toogleThemeDark:function(){this.$store.dispatch("settings/ThemeDarkToggle")},toggleToolbarDense:function(){this.$store.dispatch("settings/ToolbarDenseToggle")},toggleNavbarDense:function(){this.$store.dispatch("settings/NavbarDenseToggle")},toggleNavbarLogo:function(){this.$store.dispatch("settings/NavbarLogoToggle")},toggleSettingsPanelBtn:function(){this.$store.dispatch("settings/SettingsPanelBtnToggle")},toggleFooterToggle:function(){this.$store.dispatch("settings/FooterToggle")},setDefaultSettingsPanel:function(){this.$store.dispatch("settings/SettingsPanelDefault")}}},ve=be,ge=(n("655b"),n("cd55")),_e=n("49e2"),ye=n("c865"),we=n("0393"),ke=n("b73d"),Se=n("3a2f"),Te=Object(E["a"])(ve,fe,me,!1,null,null,null),Oe=Te.exports;L()(Te,{VAppBar:ht["a"],VBtn:Vt["a"],VDivider:Bt["a"],VExpansionPanel:ge["a"],VExpansionPanelContent:_e["a"],VExpansionPanelHeader:ye["a"],VExpansionPanels:we["a"],VIcon:J["a"],VMain:ue["a"],VNavigationDrawer:ft["a"],VSubheader:qt["a"],VSwitch:ke["a"],VToolbarTitle:mt["a"],VTooltip:Se["a"]});var xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{bottom:"",color:"error",dark:"",fab:"",fixed:"",right:""},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-chevron-up")])],1)],1)},Ee=[],Ce={name:"TheLayoutToTopFab",data:function(){return{fab:!1}},methods:{onScroll:function(){if("undefined"!==typeof window){var t=window.pageYOffset||document.documentElement.offsetTop||0;this.fab=t>300}},toTop:function(){this.$vuetify.goTo(0)}}},Ne=Ce,je=n("0789"),Ve=n("269a"),Ae=n.n(Ve),Le=n("f977"),$e=Object(E["a"])(Ne,xe,Ee,!1,null,null,null),De=$e.exports;L()($e,{VBtn:Vt["a"],VFabTransition:je["c"],VIcon:J["a"]}),Ae()($e,{Scroll:Le["b"]});var Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.footerShow?n("v-footer",{attrs:{app:"",inset:"",padless:"",dense:""}},[n("v-card",{staticClass:"secondary text-left",attrs:{flat:"",tile:"",width:"100%",height:"40px"}},[n("v-card-text",{staticClass:"white--text pa-3"},[t._v(" nghiennet89@gmail.com ")])],1)],1):t._e()},Pe=[],Re={name:"TheLayoutFooter",components:{},data:function(){return{icons:["mdi-home","mdi-email","mdi-calendar","mdi-delete"]}},computed:Object(w["a"])({},Object(k["c"])({footerShow:"settings/footerShow"})),methods:{}},Ue=Re,Be=n("99d9"),Me=n("553a"),Fe=Object(E["a"])(Ue,Ie,Pe,!1,null,null,null),ze=Fe.exports;L()(Fe,{VCard:le["a"],VCardText:Be["c"],VFooter:Me["a"]});var qe={name:"TheLayout",components:{TheLayoutDrawer:bt,TheLayoutToolbar:oe,TheLayoutContent:de,TheLayoutFab:Oe,TheLayoutToTopFab:De,TheLayoutFooter:ze},data:function(){return{}},computed:Object(w["a"])({},Object(k["c"])({backgroundImage:"settings/backgroundImage"}))},Ye=qe,He=(n("d624"),Object(E["a"])(Ye,U,B,!1,null,null,null)),Je=He.exports,Ge=[{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-6f860b96")]).then(n.bind(null,"5eaf"))},hidden:!0},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-48b30c6c")]).then(n.bind(null,"0702"))},hidden:!0}],We=Ge,Xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"white"},[n("v-toolbar-title",[t._v("Error")])],1),n("v-main",[n("router-view")],1)],1)},Ke=[],Qe={name:"TheErrorLayout",data:function(){return{}}},Ze=Qe,tn=Object(E["a"])(Ze,Xe,Ke,!1,null,null,null),en=tn.exports;L()(tn,{VAppBar:ht["a"],VMain:ue["a"],VToolbarTitle:mt["a"]});var nn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-center",{scopedSlots:t._u([{key:"page",fn:function(){return[n("h1",{staticClass:"display-2 primary--text"},[t._v(" "+t._s(t.$t("errors.whoops")+", "+t.errorCode)+" ")]),n("p",[t._v(t._s(t.$t("errors."+t.errorCode)))]),n("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v(" "+t._s(t.$t("errors.back"))+" ")])]},proxy:!0}])})},an=[],on=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"container--fluid fill-height"},[n("v-row",{attrs:{align:"center",dense:"",justify:"center","no-gutters":""}},[n("v-col",{staticClass:"text-center"},[t._t("page")],2)],1)],1)}),rn=[],sn={name:"AppCenter",data:function(){return{}}},cn=sn,ln=n("62ad"),un=n("a523"),hn=n("0fd9"),dn=Object(E["a"])(cn,on,rn,!1,null,null,null),fn=dn.exports;L()(dn,{VCol:ln["a"],VContainer:un["a"],VRow:hn["a"]});var mn={name:"ErrorPage",components:{AppCenter:fn},props:{errorCode:{type:Number,default:404}},data:function(){return{}}},pn=mn,bn=Object(E["a"])(pn,nn,an,!1,null,null,null),vn=bn.exports;L()(bn,{VBtn:Vt["a"]});var gn,_n={path:"/error",component:en,name:"ErrorPages",children:[{path:"301",component:vn,name:"Page301",props:{errorCode:301}},{path:"401",component:vn,name:"Page401",props:{errorCode:401}},{path:"403",component:vn,name:"Page403",props:{errorCode:403}},{path:"404",component:vn,name:"Page404",props:{errorCode:404}},{path:"500",component:vn,name:"Page500",props:{errorCode:500}}]},yn=_n,wn=m["CONSTANTS"].ROLES,kn=n("fc8a"),Sn=[],Tn=Object(nt["a"])(kn.keys());try{for(Tn.s();!(gn=Tn.n()).done;){var On=gn.value,xn=kn(On);Sn.push(xn.default||xn)}}catch(Ln){Tn.e(Ln)}finally{Tn.f()}var En=[{path:"/manage-users",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-bedef052")]).then(n.bind(null,"9c4d"))},name:"ManageUsers",meta:{noCache:!0,roles:[wn.SUPER_ADMINISTRATOR],affix:!0}},{path:"/manage-roles",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-5b7acb9c")]).then(n.bind(null,"9b90"))},name:"ManageRoles",meta:{noCache:!0,roles:[wn.SUPER_ADMINISTRATOR],affix:!0}},{path:"/manage-scopes",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-2a17404c")]).then(n.bind(null,"74d6"))},name:"ManageScopes",meta:{noCache:!0,roles:[wn.SUPER_ADMINISTRATOR],affix:!0}}].concat(Sn),Cn=m["CONSTANTS"].ROLES;a["a"].use(R["a"]);var Nn=[].concat(Object(P["a"])(We),[{path:"/",component:Je,redirect:{name:"Dashboard"},meta:{auth:!0},children:[{path:"/dashboard",component:function(){return n.e("chunk-81868c90").then(n.bind(null,"905c"))},name:"Dashboard",meta:{noCache:!0,affix:!0}},{path:"/theme",component:function(){return n.e("chunk-3bdf0eac").then(n.bind(null,"713e"))},name:"Theme"},{path:"/i18n",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-120ded5c")]).then(n.bind(null,"c689"))},name:"I18n"},{path:"/profile",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-49bed9fd")]).then(n.bind(null,"7067"))},name:"Profile",meta:{noCache:!0,roles:[Cn.SUPER_ADMINISTRATOR,Cn.NORMAL_USER],affix:!0}}].concat(Object(P["a"])(En))}]),jn=new R["a"]({scrollBehavior:function(){return{y:0}},routes:[].concat(Object(P["a"])(Nn),[yn,{path:"/:catchAll(.*)",redirect:{name:"Page404"},hidden:!0}])}),Vn=n("a7c8");window.VueComp||(window.VueComp={Others:[],Config:p.a}),window.Pusher=n("782e"),window._=n("2ef0");var An=document.getElementById("admin");An&&(window.axios=i.a,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",a["a"].use(s.a,window.axios),a["a"].axios.defaults.baseURL="/api",a["a"].use(l.a),a["a"].use(h.a),a["a"].mixin(v["a"]),a["a"].config.productionTip=!1,a["a"].router=jn,a["a"].use(f.a,p.a.auth().VueAuth),window._VueAdminApp=new a["a"]({router:jn,store:b["a"],i18n:Vn["a"],vuetify:g["a"],render:function(t){return t(I)}}).$mount("#admin"),i.a.interceptors.request.use((function(t){return window._VueAdminApp.$store.dispatch("system/fireRequest",t),t}),(function(t){return window._VueAdminApp.$store.dispatch("system/addResponse",t.response),Promise.reject(t)})),i.a.interceptors.response.use((function(t){return window._VueAdminApp.$store.dispatch("system/addResponse",t),t}),(function(t){return window._VueAdminApp.$store.dispatch("system/addResponse",t.response),Promise.reject(t)})))},fc8a:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="fc8a"}});
//# sourceMappingURL=admin.c690ac04.js.map