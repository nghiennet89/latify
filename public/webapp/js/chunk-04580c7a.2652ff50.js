(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04580c7a"],{"0702":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-parallax",{staticStyle:{height:"100%"},attrs:{src:t.settings.backgroundImage}},[i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"12",lg:"4",md:"4",sm:"8"}},[i("v-card",{staticClass:"elevation-5 pa-3"},[i("v-card-actions",[i("v-spacer"),i("localization")],1),i("v-card-text",[i("div",{staticClass:"layout column align-center"},[i("img",{attrs:{alt:"App Logo",height:"120",src:s("a1b1"),width:"120"}}),i("h1",{staticClass:"text-center my-4 primary--text"},[t._v(t._s(t.appTitle))])]),i("v-form",[i("v-text-field",{attrs:{label:t.$t("login.email"),"append-icon":"mdi-account",autocomplete:"username",name:"email",required:"",type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),i("v-text-field",{attrs:{label:t.$t("login.password"),"append-icon":"mdi-lock",autocomplete:"new-password",name:"password",required:"",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),i("v-text-field",{attrs:{label:t.$t("login.confirm"),"append-icon":"mdi-lock",autocomplete:"new-password",name:"confirm",required:"",type:"password"},model:{value:t.user.confirm,callback:function(e){t.$set(t.user,"confirm",e)},expression:"user.confirm"}})],1)],1),i("v-card-actions",[i("v-btn",{attrs:{to:{name:"Login"},color:"primary",outlined:""}},[t._v(" "+t._s(t.$t("login.login"))+" ")]),i("v-spacer"),i("v-btn",{attrs:{loading:t.loading,color:"primary"},on:{click:function(e){return t.register()}}},[t._v(" "+t._s(t.$t("login.register"))+" ")])],1)],1)],1)],1)],1)},a=[],r=(s("ac1f"),s("5319"),s("19d5")),n=s("9b43"),o=s.n(n),l={name:"Register",components:{Localization:r["a"]},data:function(){return{appTitle:o.a.appName,loading:!1,user:{email:"user"+(new Date).toISOString().substring(0,10).replace(/-/gi,"")+"@base-project.com",password:"User@123",confirm:"User@123"}}},computed:{settings:"settings"},methods:{register:function(){}}},d=l,c=(s("6903"),s("2877")),h=s("6544"),u=s.n(h),p=s("8336"),m=s("b0af"),g=s("99d9"),f=s("62ad"),w=s("4bd4"),v=s("8b9c"),b=s("0fd9"),x=s("2fa4"),_=s("8654"),y=Object(c["a"])(d,i,a,!1,null,null,null);e["default"]=y.exports;u()(y,{VBtn:p["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["c"],VCol:f["a"],VForm:w["a"],VParallax:v["a"],VRow:b["a"],VSpacer:x["a"],VTextField:_["a"]})},"4bd4":function(t,e,s){"use strict";var i=s("58df"),a=s("7e2b"),r=s("3206");e["a"]=Object(i["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},6903:function(t,e,s){"use strict";s("76c7")},"76c7":function(t,e,s){},"8b9c":function(t,e,s){"use strict";s("94aa");var i=s("2b0e"),a=i["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=s("58df");const n=Object(r["a"])(a);e["a"]=n.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},s=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[s,i])}})},"94aa":function(t,e,s){}}]);
//# sourceMappingURL=chunk-04580c7a.2652ff50.js.map