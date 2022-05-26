(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a105798"],{"2d75":function(t,e,a){},"2e79":function(t,e,a){"use strict";a("2d75")},"4bd4":function(t,e,a){"use strict";var i=a("58df"),s=a("7e2b"),r=a("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"5eaf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-parallax",{staticStyle:{height:"100%"},attrs:{src:t.backgroundImage}},[i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"12",lg:"5",md:"6",sm:"8"}},[i("v-card",{staticClass:"elevation-5 pa-3"},[i("v-card-actions",[i("v-spacer"),i("localization")],1),i("v-card-text",[i("div",{staticClass:"layout column align-center"},[i("img",{attrs:{alt:"Vue Vuetify Admin Logo",height:"120",src:a("a1b1"),width:"120"}}),i("h1",{staticClass:"text-center my-4 primary--text"},[t._v(t._s(t.appTitle))])]),i("v-form",[i("v-text-field",{attrs:{label:t.$t("login.email"),"append-icon":"mdi-account",autocomplete:"username",name:"email",required:"",type:"email"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),i("v-text-field",{attrs:{label:t.$t("login.password"),"append-icon":"mdi-lock",autocomplete:"current-password",name:"password",required:"",type:"password"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1)],1),i("v-card-actions",["xs"===t.$vuetify.breakpoint.name?[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-btn",{staticClass:"float-left",attrs:{to:{name:"Register"},color:"primary",outlined:""}},[t._v(" "+t._s(t.$t("login.register"))+" ")])],1),i("v-col",{attrs:{cols:"6"}},[i("v-btn",{staticClass:"float-right",attrs:{loading:t.loading,color:"primary"},on:{click:t.login}},[t._v(" "+t._s(t.$t("login.login"))+" ")])],1),i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticClass:"float-left white--text",attrs:{block:"",color:"red",href:"/social-login/google"}},[i("v-icon",{staticClass:"v-size--x-large mr-2",attrs:{color:"white"}},[t._v("mdi-google")]),t._v(" Login with Google ")],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticClass:"float-right white--text",staticStyle:{background:"#3b5998"},attrs:{block:"",href:"/social-login/facebook"}},[i("v-icon",{staticClass:"v-size--x-large mr-2",attrs:{color:"white"}},[t._v("mdi-facebook")]),t._v(" Login with Facebook ")],1)],1)],1)]:[i("v-btn",{attrs:{color:"red white--text",href:"/social-login/google"}},[i("v-icon",{staticClass:"v-size--x-large mr-2",attrs:{color:"white"}},[t._v("mdi-google")]),t._v(" Google ")],1),i("v-btn",{staticStyle:{background:"#3b5998"},attrs:{color:"white--text",href:"/social-login/facebook"}},[i("v-icon",{staticClass:"v-size--x-large mr-2",attrs:{color:"white"}},[t._v("mdi-facebook")]),t._v(" Facebook ")],1),i("v-spacer"),i("v-btn",{attrs:{to:{name:"Register"},color:"primary",outlined:""}},[t._v(" "+t._s(t.$t("login.register"))+" ")]),i("v-btn",{attrs:{loading:t.loading,color:"primary"},on:{click:t.login}},[t._v(" "+t._s(t.$t("login.login"))+" ")])]],2)],1)],1)],1)],1)},s=[],r=a("5530"),o=(a("ac1f"),a("5319"),a("19d5")),n=a("2f62"),l=a("9b43"),c=a.n(l),d={name:"Login",components:{Localization:o["a"]},data:function(){return{appTitle:c.a.appName,loading:!1,socialLogin:!1,userLogin:Object(r["a"])({username:"admin@"+c.a.appUrl.replace("https://","").replace("http://",""),password:"Admin@123",grant_type:"password"},c.a.auth().passport)}},computed:Object(r["a"])({},Object(n["c"])({backgroundImage:"settings/backgroundImage"})),methods:{login:function(){this.$auth.login({data:Object(r["a"])({},this.userLogin),rememberMe:!0,fetchUser:!0,error:function(t){console.log("error:",t.response)}})}},mounted:function(){if(this.$auth.token())return this.$router.push({name:"Dashboard"});this.$auth.fetch()}},h=d,u=(a("2e79"),a("2877")),p=a("6544"),g=a.n(p),m=a("8336"),v=a("b0af"),f=a("99d9"),w=a("62ad"),b=a("4bd4"),y=a("132d"),_=a("8b9c"),x=a("0fd9"),k=a("2fa4"),$=a("8654"),C=Object(u["a"])(h,i,s,!1,null,null,null);e["default"]=C.exports;g()(C,{VBtn:m["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["c"],VCol:w["a"],VForm:b["a"],VIcon:y["a"],VParallax:_["a"],VRow:x["a"],VSpacer:k["a"],VTextField:$["a"]})},"8b9c":function(t,e,a){"use strict";a("94aa");var i=a("2b0e"),s=i["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=a("58df");const o=Object(r["a"])(s);e["a"]=o.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},a=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[a,i])}})},"94aa":function(t,e,a){}}]);
//# sourceMappingURL=chunk-2a105798.bdc58ffd.js.map