(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={admin:0},i={admin:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-33eab2b1":"9ad8073f","chunk-04580c7a":"2652ff50","chunk-2a105798":"bdc58ffd","chunk-3e9af660":"8f8ffdb4","chunk-eb44fdd6":"4d6e359d","chunk-120ded5c":"4c2657a2","chunk-2a17404c":"6bbd294c","chunk-5b7acb9c":"2d57d274","chunk-89167c30":"c4c81b6d","chunk-bedef052":"0ad4748f","chunk-3bdf0eac":"d9715134","chunk-81868c90":"9f533622"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-33eab2b1":1,"chunk-04580c7a":1,"chunk-2a105798":1,"chunk-3e9af660":1,"chunk-eb44fdd6":1,"chunk-120ded5c":1,"chunk-2a17404c":1,"chunk-5b7acb9c":1,"chunk-89167c30":1,"chunk-bedef052":1,"chunk-3bdf0eac":1,"chunk-81868c90":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-33eab2b1":"0921586d","chunk-04580c7a":"88913ff4","chunk-2a105798":"88913ff4","chunk-3e9af660":"8ca2f194","chunk-eb44fdd6":"73dc8410","chunk-120ded5c":"1b08253b","chunk-2a17404c":"7d55441c","chunk-5b7acb9c":"9f3a8196","chunk-89167c30":"2de547ea","chunk-bedef052":"489f3631","chunk-3bdf0eac":"1b08253b","chunk-81868c90":"f2197ed2"}[t]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],d.parentNode.removeChild(d),n(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",h.name="ChunkLoadError",h.type=a,h.request=o,n[1](h)}i[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/webapp/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;r.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){n("ed71"),t.exports=n("45f6")},"0034":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{dense:""}},t._l(t.themes,(function(e,a){return n("v-col",{key:a,class:["text-center",{"elevation-5 pa-2":t.themeIndex===a}],attrs:{cols:t.cols},on:{click:function(e){return e.stopPropagation(),t.toggleTheme(a)}}},t._l(e.light,(function(e,a){return n("div",{key:a,staticClass:"white--text",style:{background:e}},[t._v(" "+t._s(a)+" ")])})),0)})),1)},o=[],i=n("5530"),r=n("2f62"),s=n("e21c"),c={name:"AppTheme",props:{cols:{type:String,default:"6"}},data:function(){return{themes:s["a"]}},computed:Object(i["a"])({},Object(r["c"])({themeIndex:"settings/themeIndex"})),methods:{toggleTheme:function(t){this.$store.dispatch("settings/ThemeToggle",{index:t,vuetify:this.$vuetify})}}},l=c,u=n("2877"),h=n("6544"),d=n.n(h),f=n("62ad"),m=n("0fd9"),p=Object(u["a"])(l,a,o,!1,null,null,null);e["a"]=p.exports;d()(p,{VCol:f["a"],VRow:m["a"]})},"045a":function(t,e,n){"use strict";n("50dc")},"0c24":function(t,e,n){"use strict";n("e5da")},"19d5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"nudge-bottom":10,"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:"",text:""}},a),[n("v-icon",[t._v(" mdi-translate ")])],1)]}}])},[n("v-list",{staticClass:"pa-0"},t._l(t.locales,(function(e,a){return n("v-list-item",{key:a,attrs:{target:e.target,rel:"noopener",ripple:"ripple"},on:{click:function(n){return t.setLocale(e.locale)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)},o=[],i=n("c7eb"),r=n("1da1"),s=n("a7c8"),c={name:"AppLocalization",data:function(){return{locales:s["b"]}},methods:{setLocale:function(t){var e=this;return Object(r["a"])(Object(i["a"])().mark((function n(){return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("settings/SetLocale",{locale:t});case 2:case"end":return n.stop()}}),n)})))()}}},l=c,u=n("2877"),h=n("6544"),d=n.n(h),f=n("8336"),m=n("132d"),p=n("8860"),b=n("da13"),v=n("5d23"),g=n("e449"),_=Object(u["a"])(l,a,o,!1,null,null,null);e["a"]=_.exports;d()(_,{VBtn:f["a"],VIcon:m["a"],VList:p["a"],VListItem:b["a"],VListItemContent:v["a"],VListItemTitle:v["c"],VMenu:g["a"]})},2962:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="2962"},3191:function(t,e,n){},"45f6":function(t,e,n){},"50dc":function(t,e,n){},"5f67":function(t,e,n){},"655b":function(t,e,n){"use strict";n("caf8")},"94e2":function(t,e,n){},a1b1:function(t,e,n){t.exports=n.p+"img/vuetify.ef88ed3b.svg"},bcb9:function(t,e,n){},c882:function(t,e,n){},caf8:function(t,e,n){},cd49:function(t,e,n){"use strict";n("94e2")},d336:function(t,e,n){t.exports=n.p+"img/loading_indicator.699d772e.svg"},d3a7:function(t,e,n){"use strict";n("3191")},d624:function(t,e,n){"use strict";n("5f67")},e453:function(t,e,n){t.exports=n.p+"img/(1).495b8af4.png"},e5da:function(t,e,n){},e624:function(t,e,n){"use strict";n("c882")},e7ff:function(t,e,n){"use strict";n("bcb9")},ed71:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("f5df1"),n("bf40"),n("d5e8"),n("39bd");var a=n("2b0e"),o=n("bc3a"),i=n.n(o),r=n("a7fe"),s=n.n(r),c=n("ad06"),l=n("a65d"),u=n.n(l),h=n("2b27"),d=n.n(h),f=n("8a9b"),m=n.n(f),p=n("9b43"),b=n.n(p),v=n("587c"),g=n("5cff"),_=n("54c3"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view",{ref:"content"}),a("div",{style:t.appLoading||t.initializing?"display: block;":"display: none;",attrs:{id:"app-loading"}},[a("img",{staticClass:"indicator-icon",attrs:{src:n("d336"),alt:"loading..."}})]),a("AdminNotice")],1)},w=[],k=n("5530"),S=(n("e9c4"),n("b0c0"),n("2f62")),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span")},T=[],x={name:"AdminNotice",data:function(){return{toastShowing:0}},computed:Object(k["a"])({},Object(S["c"])({notices:"system/notices"})),methods:Object(k["a"])(Object(k["a"])({},Object(S["b"])({removeNotice:"system/removeNotice"})),{},{showNotice:function(t){var e=this,n={className:"vue-toast-notices",duration:5759+579*this.toastShowing,action:{class:"action-close-toast v-icon mdi mdi-close",onClick:function(t,n){e.toastShowing-=1,n.goAway(0)}},onComplete:function(){return e.toastShowing-=1}};this.toastShowing+=1,t.type===b.a.CONSTANTS.NOTICE_TYPE.SUCCESS&&(n.type="success"),t.type===b.a.CONSTANTS.NOTICE_TYPE.ERROR&&(n.type="error"),t.type===b.a.CONSTANTS.NOTICE_TYPE.INFO&&(n.className+=" toast-info"),t.type===b.a.CONSTANTS.NOTICE_TYPE.WARNING&&(n.className+=" toast-warning"),this.$toasted.show(t.message,n),this.removeNotice(t)}}),watch:{notices:{handler:function(t){while(this.toastShowing<b.a.settings.maxNoticesDisplay&&t.length>0)this.showNotice(t.pop())},deep:!0},toastShowing:{handler:function(){while(this.toastShowing<b.a.settings.maxNoticesDisplay&&this.notices.length>0)this.showNotice(this.notices.pop())}}}},C=x,E=(n("e624"),n("2877")),N=Object(E["a"])(C,O,T,!1,null,null,null),j=N.exports,V={name:"Admin",data:function(){return{needUserMasterData:!0,watchUserAuth:null,initializing:!0}},components:{AdminNotice:j},computed:Object(k["a"])(Object(k["a"])({},Object(S["c"])({appLoading:"system/appLoading",notices:"system/notices"})),{},{_user:function(){return this.$auth.user()}}),methods:Object(k["a"])({},Object(S["b"])({loadMasterData:"loadMasterData",loadUserMasterData:"loadUserMasterData",setAuthenticatedUser:"user/setAuthenticatedUser"})),watch:{$route:{handler:function(t){if(!t||!t.matched||t.matched.length<1)return this.$router.push({name:"Page404"})}}},created:function(){var t=this;this.watchUserAuth=this.$watch("_user",(function(e){e&&e.id&&e.role_id?(t.setAuthenticatedUser(JSON.parse(JSON.stringify(e))),t.needUserMasterData=!1,t.loadUserMasterData().then((function(e){if("Login"===t.$route.name)return t.$router.push({name:"Dashboard"})}))):t.setAuthenticatedUser(null)})),this.loadMasterData()},updated:function(){var t=this;this.initializing&&this.$nextTick((function(){"undefined"!=typeof t.$refs.content&&(t.initializing=!1)}))}},$=V,A=(n("cd49"),n("d3a7"),n("6544")),L=n.n(A),D=n("7496"),P=Object(E["a"])($,y,w,!1,null,"180e8c14",null),I=P.exports;L()(P,{VApp:D["a"]});var R=n("2909"),U=(n("99af"),n("3ca3"),n("ddb0"),n("8c4f")),B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-application--wrap"},[n("div",{staticClass:"app-background",style:"background-image: url("+t.backgroundImage+")"}),n("the-layout-drawer"),n("the-layout-toolbar"),n("the-layout-content"),n("the-layout-fab"),n("the-layout-to-top-fab"),n("the-layout-footer")],1)},M=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"menu-box",class:t.themeDark?"menu-dark":"menu-light",attrs:{value:t.navbarShow,app:"",fixed:"",width:"275"},on:{input:t.stateNavbarShow}},[t.navbarLogo?a("v-app-bar",{staticClass:"align-center",staticStyle:{background:"rgba(128,128,128,0.35)"},attrs:{dense:t.toolbarDense}},[a("v-toolbar-title",{staticStyle:{display:"inline-table"}},[a("v-avatar",{staticClass:"px-1",attrs:{size:"32px",tile:""}},[a("img",{attrs:{alt:"VVA",src:n("a1b1"),width:"32"}})])],1),a("v-toolbar-title",{staticStyle:{width:"100%"}},[a("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(t.appName))])])],1):t._e(),a("the-layout-drawer-list",{attrs:{dense:t.navbarDense,menu:t.menu,"icon-show":""}})],1)},z=[],q=(n("4de4"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"layout-drawer",attrs:{dense:t.dense}},t._l(t.menu,(function(e){return n("div",{key:e.name},[t.hasChildren(e)?n("v-list-group",{attrs:{"prepend-icon":t.getListIcon(e),value:t.needExplainMenu(e)},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t.getListTitle(e))+" ")])],1)]},proxy:!0}],null,!0)},[n("the-layout-drawer-list",{attrs:{dense:t.dense,menu:e.children,iconShow:!0}})],1):n("v-list-item",{staticClass:"px-1",class:e.name===t.$route.name?"v-list-item--active":"",attrs:{ripple:"ripple"},on:{click:function(n){return t.openRoute(e,n)}}},[n("v-list-item-icon",{staticClass:"layout-drawer__icon ma-3"},[n("v-icon",[t._v(t._s(t.getListIcon(e)))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t.getListTitle(e))+" ")])],1)],1)],1)})),0)}),Y=[],J=(n("ac1f"),n("00b4"),n("498a"),{name:"TheLayoutDrawerList",props:{dense:Boolean,iconShow:Boolean,isNest:Boolean,menu:{type:Array,default:function(){}}},data:function(){return{}},computed:Object(k["a"])({},Object(S["c"])({breadcrumb:"system/breadcrumb"})),methods:Object(k["a"])(Object(k["a"])({},Object(S["b"])({})),{},{isExternal:function(t){return/^(https?:|mailto:|tel:)/.test(t)},needExplainMenu:function(t){var e=this.breadcrumb.map((function(t){return t.title}));return e.indexOf(t.title)>-1},hasChildren:function(t){return null!==t.children&&(!!Array.isArray(t.children)&&t.children.length>=1)},openRoute:function(t,e){if(e.target.innerText&&e.target.innerText.trim()===this.$t(t.title)){var n=t.name,a=this.$router.currentRoute.name;n&&n!==a&&this.$router.push({name:n})}},getListIcon:function(t){return this.iconShow&&t.icon?t.icon:" "},getListTitle:function(t){return t?this.$t(t.title):""}})}),H=J,G=(n("0c24"),n("132d")),W=n("8860"),X=n("56b0"),K=n("da13"),Q=n("5d23"),Z=n("34c3"),tt=Object(E["a"])(H,q,Y,!1,null,null,null),et=tt.exports;L()(tt,{VIcon:G["a"],VList:W["a"],VListGroup:X["a"],VListItem:K["a"],VListItemContent:Q["a"],VListItemIcon:Z["a"],VListItemTitle:Q["c"]});var nt,at=n("b85c"),ot=n("2962"),it=[],rt=Object(at["a"])(ot.keys());try{for(rt.s();!(nt=rt.n()).done;){var st=nt.value,ct=ot(st);it=it.concat(ct.default||ct)}}catch(Ln){rt.e(Ln)}finally{rt.f()}var lt=[{name:"Dashboard",title:"route.dashboard",icon:"mdi-view-dashboard"},{title:"menu.auth.title",icon:"mdi-account-group",role:[p["CONSTANTS"].ROLES.SUPER_ADMINISTRATOR],children:[{name:"ManageUsers",title:"menu.auth.manageUsers",icon:"mdi-account-multiple"},{name:"ManageRoles",title:"menu.auth.manageRoles",icon:"mdi-account-multiple-check"},{name:"ManageScopes",title:"menu.auth.manageScopes",icon:"mdi-account-question"}]},{title:"Resources",icon:"mdi-alpha-r-box-outline",children:it},{title:"route.config",icon:"mdi-cog",children:[{name:"Theme",title:"route.theme",icon:"mdi-palette"},{name:"I18n",title:"route.i18n",icon:"mdi-translate"}]}],ut={name:"TheLayoutDrawer",components:{TheLayoutDrawerList:et},data:function(){return{appName:p["appName"]}},computed:Object(k["a"])(Object(k["a"])({},Object(S["c"])({navbarDense:"settings/navbarDense",navbarShow:"settings/navbarShow",navbarLogo:"settings/navbarLogo",toolbarDense:"settings/toolbarDense",themeDark:"settings/themeDark",authenticatedUser:"user/authenticatedUser",backgroundImage:"settings/backgroundImage"})),{},{menu:function(){var t=this;return lt.map((function(e){return t.parseRole(e,t.authenticatedUser?t.authenticatedUser.role_id:null)})).filter((function(t){return null!==t}))}}),methods:{stateNavbarShow:function(t){this.$store.dispatch("settings/NavbarState",{state:t})},parseRole:function(t,e){var n=this;return Array.isArray(t.children)&&t.children.length>0&&(t.children=t.children.map((function(t){return n.parseRole(t,e)})).filter((function(t){return null!==t}))),t.role?(Array.isArray(t.role)||(t.role=[t.role]),t.role.indexOf(e)<0?null:t):t}}},ht=ut,dt=(n("e7ff"),n("40dc")),ft=n("8212"),mt=n("f774"),pt=n("2a7f"),bt=Object(E["a"])(ht,F,z,!1,null,null,null),vt=bt.exports;L()(bt,{VAppBar:dt["a"],VAvatar:ft["a"],VNavigationDrawer:mt["a"],VToolbarTitle:pt["a"]});var gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{dense:t.toolbarDense,app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.NavbarToggle.apply(null,arguments)}}},[n("v-icon",[t._v(t._s(t.toggleNavbarIcon))])],1),n("breadcrumbs"),n("v-spacer"),n("full-screen"),n("notification"),n("localization"),n("profile")],1)},_t=[],yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:t.breadcrumb,divider:"/"},scopedSlots:t._u([{key:"item",fn:function(e){return[n("a",{on:{click:function(n){return n.preventDefault(),t.handleLink(e.item)}}},[t._v(" "+t._s(t.generateTitle(e.item.title))+" ")])]}}])})},wt=[],kt=(n("159b"),{name:"AppBreadcrumbs",data:function(){return{menu:lt}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},computed:Object(k["a"])({},Object(S["c"])({breadcrumb:"system/breadcrumb",themeDark:"settings/themeDark"})),methods:Object(k["a"])(Object(k["a"])({},Object(S["b"])({setBreadcrumb:"system/setBreadcrumb"})),{},{generateTitle:function(t){var e=this.$te("".concat(t));if(e){var n=this.$t("".concat(t));return n}return t},getBreadcrumb:function(){var t=[],e=function e(n,a){var o=n.filter((function(t){return t.name===a}));if(o.length)return t.unshift(o[0]),o[0];var i=null;return n.filter((function(t){return t.children})).forEach((function(n){var o=e(n.children,a);if(o)return t.unshift(n),i=o})),i},n=this.$router.currentRoute.name;e(this.menu,n),this.setBreadcrumb(t)},handleLink:function(t){var e=this.$router.currentRoute,n=t.redirect;if(n===e.path)return console.log("not redirect to current route");if(void 0!==n&&"noredirect"!==n){var a=this.$router.resolve({path:n});return a.route.path===n?this.$router.push({path:n}):console.log("Route link error:",n)}if(t.name===e.name)return console.log("not redirect to current route");var o=t&&t.name?t.name:"Dashboard",i=this.$router.resolve({name:o});return i.route.name===o?this.$router.push({name:o}):console.log("routeName error:",o)}})}),St=kt,Ot=n("2bc5"),Tt=Object(E["a"])(St,yt,wt,!1,null,null,null),xt=Tt.exports;L()(Tt,{VBreadcrumbs:Ot["a"]});var Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:""},on:{click:t.toggleFullScreen}},[n("v-icon",[t._v(t._s(t.toggleFullScreenIcon))])],1)},Et=[],Nt=function(){var t=window.document,e=t.documentElement,n=e.requestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullScreen||e.msRequestFullscreen,a=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen;return t.fullscreenElement||t.mozFullScreenElement||t.webkitFullscreenElement||t.msFullscreenElement?(a.call(t),!1):(n.call(e),!0)},jt={name:"AppFullScreen",computed:Object(k["a"])(Object(k["a"])({},Object(S["c"])({fullscreenShow:"settings/fullscreenShow"})),{},{toggleFullScreenIcon:function(){return this.fullscreenShow?"mdi-fullscreen-exit":"mdi-fullscreen"}}),methods:Object(k["a"])(Object(k["a"])({},Object(S["b"])({FullscreenToggle:"settings/FullscreenToggle"})),{},{toggleFullScreen:function(){this.FullscreenToggle({state:Nt()})}})},Vt=jt,$t=n("8336"),At=Object(E["a"])(Vt,Ct,Et,!1,null,null,null),Lt=At.exports;L()(At,{VBtn:$t["a"],VIcon:G["a"]});var Dt=n("19d5"),Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"nudge-bottom":10,"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:"",text:""},on:{click:t.onExplainNotificationsBox}},a),[n("v-icon",{attrs:{color:t.notifyColor}},[t._v(t._s(t.notifyIcon))]),n("span",{staticClass:"notify-unread red--text"},[t._v(t._s(t.notifyUnreadCount))])],1)]}}])},[n("v-list",{staticClass:"pa-0",attrs:{subheader:"","two-line":""}},[n("v-subheader",[t._v("Notifications")]),n("v-divider"),t._l(t.serverNotifications,(function(e,a){return n("v-list-item",{key:a,on:{click:function(t){}}},[n("v-list-item-avatar",[n("v-icon",{class:[e.iconClass]},[t._v(" "+t._s(e.icon)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))]),n("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v(" mdi-information ")])],1)],1)],1)}))],2),n("v-divider"),n("v-subheader",{staticStyle:{cursor:"pointer"},on:{click:t.showAllNotify}},[t._v("Show All")])],1)},It=[],Rt=n("5638"),Ut={name:"AppNotification",data:function(){return{echo:null}},computed:Object(k["a"])(Object(k["a"])({},Object(S["c"])({serverNotifications:"notification/all",authenticatedUser:"user/authenticatedUser"})),{},{authenticatedUserId:function(){return this.authenticatedUser?this.authenticatedUser.id:null},isEchoConnected:function(){return this.echo&&null!==this.echo.connector.pusher.connection.connection},notifyIcon:function(){return"mdi-bell"},notifyColor:function(){return"secondary"},notifyUnreadCount:function(){return this.serverNotifications.length>0?this.serverNotifications.length:""},listServerNotifications:function(){return this.serverNotifications.map((function(t){return{icon:"mdi-message",iconClass:"blue white--text",title:t.data.title?t.data.title:t.data,subtitle:t.created_at,fullData:t,unread:!0}}))}}),methods:Object(k["a"])(Object(k["a"])({},Object(S["b"])({gotServerNotification:"notification/gotServerNotification",countUnread:"notification/countUnread"})),{},{registerEcho:function(){this.echo=new Rt["a"](Object(k["a"])(Object(k["a"])({},b.a.auth().pusher),{},{broadcaster:"pusher",forceTLS:!0,authEndpoint:"/broadcasting/auth",auth:{headers:{Authorization:null}}}))},connectEcho:function(){var t=this;this.echo||(this.registerEcho(),this.echo.connector.pusher.connection.bind("connected",(function(e){return t.bindChannels(e)})),this.echo.connector.pusher.connection.bind("disconnected",(function(){return t.disconnectEcho()}))),this.echo.connector.pusher.config.auth.headers.Authorization="Bearer "+this.$auth.token(),this.echo.connector.pusher.connect()},disconnectEcho:function(){this.echo&&this.echo.disconnect()},bindChannels:function(){var t=this;console.log("Echo: Bind channels"),this.echo.private("App.Entities.User."+this.authenticatedUserId).notification((function(e){return t.handleNotification(e)})),this.listenEvent("BaseEvent"),this.listenEvent("App\\Events\\BaseEvent")},listenEvent:function(t){var e=this;this.echo.private("App.Entities.User."+this.authenticatedUserId).listen(t,(function(n){e.handleEvent(t,n)}))},handleEvent:function(t,e){this.gotServerNotification({icon:"mdi-message",iconClass:"blue white--text",title:"New Event: "+t,subtitle:e,fullData:e,unread:!0}),this.noticeInfo(this.$t("event.new"))},handleNotification:function(t){console.log("notification:",t),this.noticeInfo(this.$t("notification.new"))},onExplainNotificationsBox:function(){},showAllNotify:function(){this.$router.push({name:"ManageNotifications"})}}),watch:{authenticatedUserId:{handler:function(t){return t?this.connectEcho():this.disconnectEcho()},deep:!0},isEchoConnected:{handler:function(t){return t?console.log("Echo: Connected"):console.log("Echo: Disconnected")}}},mounted:function(){this.authenticatedUserId&&!this.isEchoConnected&&this.connectEcho()}},Bt=Ut,Mt=n("ce7e"),Ft=n("1800"),zt=n("8270"),qt=n("e449"),Yt=n("e0c7"),Jt=Object(E["a"])(Bt,Pt,It,!1,null,null,null),Ht=Jt.exports;L()(Jt,{VBtn:$t["a"],VDivider:Mt["a"],VIcon:G["a"],VList:W["a"],VListItem:K["a"],VListItemAction:Ft["a"],VListItemAvatar:zt["a"],VListItemContent:Q["a"],VListItemSubtitle:Q["b"],VListItemTitle:Q["c"],VMenu:qt["a"],VSubheader:Yt["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"nudge-bottom":10,"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({attrs:{icon:"",large:"",text:""}},o),[a("v-avatar",{attrs:{size:"36px"}},[t.user.avatar?a("img",{attrs:{src:t.user.avatar,alt:"name"}}):a("img",{attrs:{src:n("e453"),alt:"name"}})])],1)]}}])},[a("v-list",{staticClass:"pa-0"},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[t.user.avatar?a("img",{attrs:{src:t.user.avatar,alt:"name"}}):a("img",{attrs:{src:n("e453"),alt:"name"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.name))]),a("v-list-item-subtitle",[t._v(t._s(t.user&&t.user.role?t.user.role.name:""))])],1)],1)],1),a("v-divider"),t._l(t.menuitems,(function(e,n){return a("v-list-item",{key:n,attrs:{disabled:e.disabled,rel:"noopener",ripple:"ripple"},on:{click:e.click}},[e.icon?a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1):t._e(),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t(e.title)))])],1)],1)}))],2)],1)},Wt=[],Xt={name:"AppProfile",data:function(){var t=this;return{menuitems:[{icon:"mdi-account",title:"toolbar.profile",click:function(e){t.$router.push({name:"Profile"})}},{icon:"mdi-cog",title:"toolbar.settings",click:function(){return t.toggleSettingsPanel()}},{icon:"mdi-exit-to-app",title:"toolbar.logout",click:function(){t.logout()}}]}},computed:{user:function(){return this.$auth.user()}},methods:Object(k["a"])(Object(k["a"])({},Object(S["b"])({SettingsPanelToggle:"settings/SettingsPanelToggle"})),{},{logout:function(){this.$auth.logout()},toggleSettingsPanel:function(){this.$vuetify.goTo(0),this.SettingsPanelToggle()}})},Kt=Xt,Qt=Object(E["a"])(Kt,Gt,Wt,!1,null,null,null),Zt=Qt.exports;L()(Qt,{VAvatar:ft["a"],VBtn:$t["a"],VDivider:Mt["a"],VIcon:G["a"],VList:W["a"],VListItem:K["a"],VListItemAction:Ft["a"],VListItemAvatar:zt["a"],VListItemContent:Q["a"],VListItemSubtitle:Q["b"],VListItemTitle:Q["c"],VMenu:qt["a"]});var te={name:"TheLayoutToolbar",components:{Breadcrumbs:xt,FullScreen:Lt,Localization:Dt["a"],Notification:Ht,Profile:Zt},data:function(){return{}},computed:Object(k["a"])(Object(k["a"])({},Object(S["c"])({toolbarDense:"settings/toolbarDense",navbarShow:"settings/navbarShow",themeDark:"settings/themeDark"})),{},{toggleNavbarIcon:function(){return this.navbarShow?"mdi-format-indent-decrease":"mdi-format-indent-increase"}}),methods:Object(k["a"])({},Object(S["b"])({NavbarToggle:"settings/NavbarToggle"}))},ee=te,ne=n("5bc1"),ae=n("2fa4"),oe=Object(E["a"])(ee,gt,_t,!1,null,null,null),ie=oe.exports;L()(oe,{VAppBar:dt["a"],VAppBarNavIcon:ne["a"],VIcon:G["a"],VSpacer:ae["a"]});var re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("transition",{attrs:{mode:"out-in",name:"fade-transform"}},[n("keep-alive",[n("v-card",{staticClass:"layout-card-content",attrs:{tile:"",elevation:0}},[n("router-view")],1)],1)],1)],1)},se=[],ce={name:"TheLayoutContent"},le=ce,ue=(n("045a"),n("b0af")),he=n("f6c4"),de=Object(E["a"])(le,re,se,!1,null,null,null),fe=de.exports;L()(de,{VCard:ue["a"],VMain:he["a"]});var me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",{staticClass:"layout-fab"},[t.settingsPanelBtn?n("v-btn",{staticClass:"layout-fab__btn",attrs:{color:"error",fab:"",falt:"",fixed:"",right:"right",small:"",top:"top"},on:{click:t.toggleSettingsPanel}},[n("v-icon",[t._v("mdi-cog")])],1):t._e(),n("v-navigation-drawer",{attrs:{value:t.settingsPanelShow,app:"","disable-resize-watcher":"",fixed:"",right:"",temporary:""},on:{input:t.stateSettingsPanel}},[n("v-app-bar",{attrs:{dense:t.toolbarDense,color:"secondary",dark:""}},[n("v-toolbar-title",[t._v(" "+t._s(t.$t("settings.title"))+" ")]),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{absolute:"",bottom:"",color:"error",dark:"",fab:"",right:"",small:""},on:{click:function(e){return e.stopPropagation(),t.setDefaultSettingsPanel.apply(null,arguments)}}},a),[n("v-icon",[t._v("mdi-refresh")])],1)]}}])},[n("span",[t._v(t._s(t.$t("settings.default")))])])],1),n("v-subheader",{staticClass:"layout-fab__header"},[t._v(" "+t._s(t.$t("settings.version"))+": "+t._s(t.version)+" ")]),n("v-divider"),n("v-expansion-panels",{attrs:{accordion:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"layout-fab__header"},[t._v(" "+t._s(t.$t("settings.position"))+" ")]),n("v-expansion-panel-content",t._l(t.switches,(function(t,e){return n("v-switch",{key:e,staticClass:"layout-fab__switch",attrs:{disabled:null===t.value,"input-value":t.value,label:t.label,color:"secondary",dense:"","hide-details":""},on:{change:t.change}})})),1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"layout-fab__header"},[t._v(" "+t._s(t.$t("settings.theme"))+" ")]),n("v-expansion-panel-content",[n("app-theme",{attrs:{cols:"6"}})],1)],1)],1)],1)],1)},pe=[],be=n("0034"),ve={name:"TheLayoutFab",components:{AppTheme:be["a"]},data:function(){return{}},computed:Object(k["a"])(Object(k["a"])({},Object(S["c"])({version:"settings/version",themeDark:"settings/themeDark",settingsPanelBtn:"settings/settingsPanelBtn",settingsPanelShow:"settings/settingsPanelShow",toolbarDense:"settings/toolbarDense",navbarDense:"settings/navbarDense",navbarLogo:"settings/navbarLogo",footerShow:"settings/footerShow"})),{},{switches:function(){return[{value:this.toolbarDense,label:"".concat(this.$t("settings.toolbarDense"),": ").concat(this.toolbarDense?"on":"off"),change:this.toggleToolbarDense},{value:this.navbarDense,label:"".concat(this.$t("settings.navbarDense"),": ").concat(this.navbarDense?"on":"off"),change:this.toggleNavbarDense},{value:this.navbarLogo,label:"".concat(this.$t("settings.navbarLogo"),": ").concat(this.navbarLogo?"on":"off"),change:this.toggleNavbarLogo},{value:this.settingsPanelBtn,label:"".concat(this.$t("settings.settingsBtn"),": ").concat(this.settingsPanelBtn?"on":"off"),change:this.toggleSettingsPanelBtn},{value:this.footerShow,label:"".concat(this.$t("settings.footer"),": ").concat(this.footerShow?"on":"off"),change:this.toggleFooterToggle},{value:this.themeDark,label:"".concat(this.$t("settings.dark"),": ").concat(this.themeDark?"on":"off"),change:this.toogleThemeDark}]}}),methods:{stateSettingsPanel:function(t){this.$store.dispatch("settings/SettingsPanelState",{state:t})},toggleSettingsPanel:function(){this.$vuetify.goTo(0),this.$store.dispatch("settings/SettingsPanelToggle")},toogleThemeDark:function(){this.$store.dispatch("settings/ThemeDarkToggle")},toggleToolbarDense:function(){this.$store.dispatch("settings/ToolbarDenseToggle")},toggleNavbarDense:function(){this.$store.dispatch("settings/NavbarDenseToggle")},toggleNavbarLogo:function(){this.$store.dispatch("settings/NavbarLogoToggle")},toggleSettingsPanelBtn:function(){this.$store.dispatch("settings/SettingsPanelBtnToggle")},toggleFooterToggle:function(){this.$store.dispatch("settings/FooterToggle")},setDefaultSettingsPanel:function(){this.$store.dispatch("settings/SettingsPanelDefault")}}},ge=ve,_e=(n("655b"),n("cd55")),ye=n("49e2"),we=n("c865"),ke=n("0393"),Se=n("b73d"),Oe=n("3a2f"),Te=Object(E["a"])(ge,me,pe,!1,null,null,null),xe=Te.exports;L()(Te,{VAppBar:dt["a"],VBtn:$t["a"],VDivider:Mt["a"],VExpansionPanel:_e["a"],VExpansionPanelContent:ye["a"],VExpansionPanelHeader:we["a"],VExpansionPanels:ke["a"],VIcon:G["a"],VMain:he["a"],VNavigationDrawer:mt["a"],VSubheader:Yt["a"],VSwitch:Se["a"],VToolbarTitle:pt["a"],VTooltip:Oe["a"]});var Ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{bottom:"",color:"error",dark:"",fab:"",fixed:"",right:""},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-chevron-up")])],1)],1)},Ee=[],Ne={name:"TheLayoutToTopFab",data:function(){return{fab:!1}},methods:{onScroll:function(){if("undefined"!==typeof window){var t=window.pageYOffset||document.documentElement.offsetTop||0;this.fab=t>300}},toTop:function(){this.$vuetify.goTo(0)}}},je=Ne,Ve=n("0789"),$e=n("269a"),Ae=n.n($e),Le=n("f977"),De=Object(E["a"])(je,Ce,Ee,!1,null,null,null),Pe=De.exports;L()(De,{VBtn:$t["a"],VFabTransition:Ve["c"],VIcon:G["a"]}),Ae()(De,{Scroll:Le["b"]});var Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.footerShow?n("v-footer",{attrs:{app:"",inset:"",padless:"",dense:""}},[n("v-card",{staticClass:"secondary text-left",attrs:{flat:"",tile:"",width:"100%",height:"40px"}},[n("v-card-text",{staticClass:"white--text pa-3"},[t._v(" nghiennet89@gmail.com ")])],1)],1):t._e()},Re=[],Ue={name:"TheLayoutFooter",components:{},data:function(){return{icons:["mdi-home","mdi-email","mdi-calendar","mdi-delete"]}},computed:Object(k["a"])({},Object(S["c"])({footerShow:"settings/footerShow"})),methods:{}},Be=Ue,Me=n("99d9"),Fe=n("553a"),ze=Object(E["a"])(Be,Ie,Re,!1,null,null,null),qe=ze.exports;L()(ze,{VCard:ue["a"],VCardText:Me["c"],VFooter:Fe["a"]});var Ye={name:"TheLayout",components:{TheLayoutDrawer:vt,TheLayoutToolbar:ie,TheLayoutContent:fe,TheLayoutFab:xe,TheLayoutToTopFab:Pe,TheLayoutFooter:qe},data:function(){return{}},computed:Object(k["a"])({},Object(S["c"])({backgroundImage:"settings/backgroundImage"}))},Je=Ye,He=(n("d624"),Object(E["a"])(Je,B,M,!1,null,null,null)),Ge=He.exports,We=[{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-2a105798")]).then(n.bind(null,"5eaf"))},hidden:!0},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-04580c7a")]).then(n.bind(null,"0702"))},hidden:!0}],Xe=We,Ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"white"},[n("v-toolbar-title",[t._v("Error")])],1),n("v-main",[n("router-view")],1)],1)},Qe=[],Ze={name:"TheErrorLayout",data:function(){return{}}},tn=Ze,en=Object(E["a"])(tn,Ke,Qe,!1,null,null,null),nn=en.exports;L()(en,{VAppBar:dt["a"],VMain:he["a"],VToolbarTitle:pt["a"]});var an=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-center",{scopedSlots:t._u([{key:"page",fn:function(){return[n("h1",{staticClass:"display-2 primary--text"},[t._v(" "+t._s(t.$t("errors.whoops")+", "+t.errorCode)+" ")]),n("p",[t._v(t._s(t.$t("errors."+t.errorCode)))]),n("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v(" "+t._s(t.$t("errors.back"))+" ")])]},proxy:!0}])})},on=[],rn=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"container--fluid fill-height"},[n("v-row",{attrs:{align:"center",dense:"",justify:"center","no-gutters":""}},[n("v-col",{staticClass:"text-center"},[t._t("page")],2)],1)],1)}),sn=[],cn={name:"AppCenter",data:function(){return{}}},ln=cn,un=n("62ad"),hn=n("a523"),dn=n("0fd9"),fn=Object(E["a"])(ln,rn,sn,!1,null,null,null),mn=fn.exports;L()(fn,{VCol:un["a"],VContainer:hn["a"],VRow:dn["a"]});var pn={name:"ErrorPage",components:{AppCenter:mn},props:{errorCode:{type:Number,default:404}},data:function(){return{}}},bn=pn,vn=Object(E["a"])(bn,an,on,!1,null,null,null),gn=vn.exports;L()(vn,{VBtn:$t["a"]});var _n,yn={path:"/error",component:nn,name:"ErrorPages",children:[{path:"301",component:gn,name:"Page301",props:{errorCode:301}},{path:"401",component:gn,name:"Page401",props:{errorCode:401}},{path:"403",component:gn,name:"Page403",props:{errorCode:403}},{path:"404",component:gn,name:"Page404",props:{errorCode:404}},{path:"500",component:gn,name:"Page500",props:{errorCode:500}}]},wn=yn,kn=p["CONSTANTS"].ROLES,Sn=n("fc8a"),On=[],Tn=Object(at["a"])(Sn.keys());try{for(Tn.s();!(_n=Tn.n()).done;){var xn=_n.value,Cn=Sn(xn);On=On.concat(Cn.default||Cn)}}catch(Ln){Tn.e(Ln)}finally{Tn.f()}var En=[{path:"/manage-users",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-bedef052")]).then(n.bind(null,"9c4d"))},name:"ManageUsers",meta:{noCache:!0,roles:[kn.SUPER_ADMINISTRATOR],affix:!0}},{path:"/manage-roles",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-5b7acb9c")]).then(n.bind(null,"9b90"))},name:"ManageRoles",meta:{noCache:!0,roles:[kn.SUPER_ADMINISTRATOR],affix:!0}},{path:"/manage-scopes",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-2a17404c")]).then(n.bind(null,"74d6"))},name:"ManageScopes",meta:{noCache:!0,roles:[kn.SUPER_ADMINISTRATOR],affix:!0}},{path:"/notifications",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-89167c30")]).then(n.bind(null,"14bf"))},name:"ManageNotifications",meta:{noCache:!0,affix:!0}}].concat(Object(R["a"])(On)),Nn=p["CONSTANTS"].ROLES;a["a"].use(U["a"]);var jn=[].concat(Object(R["a"])(Xe),[{path:"/",component:Ge,redirect:{name:"Dashboard"},meta:{auth:!0},children:[{path:"/dashboard",component:function(){return n.e("chunk-81868c90").then(n.bind(null,"905c"))},name:"Dashboard",meta:{noCache:!0,affix:!0}},{path:"/theme",component:function(){return n.e("chunk-3bdf0eac").then(n.bind(null,"713e"))},name:"Theme"},{path:"/i18n",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-eb44fdd6"),n.e("chunk-120ded5c")]).then(n.bind(null,"c689"))},name:"I18n"},{path:"/profile",component:function(){return Promise.all([n.e("chunk-33eab2b1"),n.e("chunk-3e9af660")]).then(n.bind(null,"313c"))},name:"Profile",meta:{noCache:!0,roles:[Nn.SUPER_ADMINISTRATOR,Nn.NORMAL_USER],affix:!0}}].concat(Object(R["a"])(En))}]),Vn=new U["a"]({scrollBehavior:function(){return{y:0}},routes:[].concat(Object(R["a"])(jn),[wn,{path:"/:catchAll(.*)",redirect:{name:"Page404"},hidden:!0}])}),$n=n("a7c8");window.VueComp||(window.VueComp={Others:[],Config:b.a}),window.Pusher=n("782e"),window._=n("2ef0"),Object(c["a"])(i.a,{retries:3});var An=document.getElementById("admin");An&&(window.axios=i.a,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",a["a"].use(s.a,window.axios),a["a"].axios.defaults.baseURL="/api",a["a"].use(u.a),a["a"].use(d.a),a["a"].mixin(g["a"]),a["a"].config.productionTip=!1,a["a"].router=Vn,a["a"].use(m.a,b.a.auth().VueAuth),window._VueAdminApp=new a["a"]({router:Vn,store:v["a"],i18n:$n["a"],vuetify:_["a"],render:function(t){return t(I)}}).$mount("#admin"),i.a.interceptors.request.use((function(t){return window._VueAdminApp.$store.dispatch("system/fireRequest",t),t}),(function(t){return window._VueAdminApp.$store.dispatch("system/addResponse",t.response),Promise.reject(t)})),i.a.interceptors.response.use((function(t){return window._VueAdminApp.$store.dispatch("system/addResponse",t),t}),(function(t){return window._VueAdminApp.$store.dispatch("system/addResponse",t.response),Promise.reject(t)})))},fc8a:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="fc8a"}});
//# sourceMappingURL=admin.f9392a0c.js.map