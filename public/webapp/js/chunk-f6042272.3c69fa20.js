(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6042272"],{2246:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)},i=[],s={name:"BaseView"},o=s,r=n("2877"),d=n("6544"),u=n.n(d),c=n("0789"),p=n("f6c4"),l=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports;u()(l,{VFadeTransition:c["d"],VMain:p["a"]})},bd0c:function(t,e,n){},d10f:function(t,e,n){"use strict";var a=n("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},f6c4:function(t,e,n){"use strict";n("bd0c");var a=n("d10f");e["a"]=a["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:a,insetFooter:i,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:n+"px",paddingBottom:a+i+s+"px",paddingLeft:o+"px"}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=chunk-f6042272.3c69fa20.js.map