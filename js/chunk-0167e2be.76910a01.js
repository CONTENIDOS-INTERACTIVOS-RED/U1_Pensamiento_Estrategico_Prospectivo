(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0167e2be"],{"4ab4":function(t,e,s){},"7db0":function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").find,a=s("44d2"),l="find",o=!0;l in[]&&Array(1)[l]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(l)},a15b:function(t,e,s){"use strict";var i=s("23e7"),n=s("44ad"),a=s("fc6a"),l=s("a640"),o=[].join,r=n!=Object,d=l("join",",");i({target:"Array",proto:!0,forced:r||!d},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},a965:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},n=[],a=(s("7db0"),s("d3b7"),s("b64b"),s("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t,e=this,s=null===(t=this.ids.find((function(t){return t.id===e.selectedId})))||void 0===t?void 0:t.id,i=document.getElementById(s);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==i){var n=this.$refs.hContainer,a=i.offsetWidth*this.ids.length,l=i.offsetLeft,o=n.offsetWidth/i.offsetWidth;o>1&&a-l<n.offsetWidth&&(l=a-n.offsetWidth),this.scrollVal=1===this.ids.length?0:-l}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),l=a,o=(s("a99e"),s("2877")),r=Object(o["a"])(l,i,n,!1,null,"b934bcc2",null);e["a"]=r.exports},a99e:function(t,e,s){"use strict";s("4ab4")},d963:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pasos-b"},[s("div",{staticClass:"row flex-nowrap mx-0 pasos-b__header mb-4"},[s("div",{staticClass:"col-2 col-sm-auto px-0 me-sm-3"},[s("div",{staticClass:"pasos-b__header__btn--left",on:{click:function(e){t.selected=t.leftBtnId}}},[s("i",{staticClass:"fas fa-angle-left"})])]),s("div",{staticClass:"col-8 col-sm px-0"},[s("div",{staticClass:"row mx-0 flex-nowrap pasos-b__header__items"},[t.elements.length?s("ScrollHorizontal",{attrs:{selectedId:"pb-header-"+(t.selected-1)}},t._l(t.elements,(function(e,i){return s("div",{key:"pb-header-key-"+e.id,staticClass:"col-6 col-sm-4 px-0 pasos-b__header__item",class:t.itemClasses(e.id),attrs:{id:"pb-header-"+e.id}},[s("div",{staticClass:"pasos-b__header__item__line-container"},[s("div",{staticClass:"pasos-b__header__item__dot"},[s("span",{staticClass:"text-bold"},[t._v(t._s(i+1))]),s("i",{staticClass:"fas fa-check"})])]),s("div",{staticClass:"pasos-b__header__item__tittle px-2 text-small",domProps:{innerHTML:t._s(e.titulo)}})])})),0):t._e()],1)]),s("div",{staticClass:"col-2 col-sm-auto px-0 ms-sm-3 d-flex justify-content-end"},[s("div",{staticClass:"pasos-b__header__btn--right",on:{click:function(e){t.selected=t.rightBtnId},mouseover:function(e){t.mostrarIndicador=!1}}},[s("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador?s("div",{staticClass:"indicador__container indicador--left"},[s("div",{staticClass:"indicador--click"})]):t._e()])])]),s("div",{staticClass:"linea-tiempo-c__content"},[t.elements.length?s("ScrollHorizontal",{attrs:{selectedId:"pb-content-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return s("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"pb-content-key-"+t.id,staticClass:"linea-tiempo-c__content__item",attrs:{id:"pb-content-"+t.id}})})),0):t._e(),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)])},n=[],a=s("f480"),l=s("a965"),o={name:"PasosB",components:{ScrollHorizontal:l["a"]},mixins:[a["a"]],data:function(){return{headerSelected:0,mostrarIndicador:!0}},computed:{leftBtnId:function(){return this.selected-1===this.mainId?this.selected:this.selected-1},rightBtnId:function(){return this.selected+1===this.elements[this.elements.length-1].id+1?this.selected:this.selected+1}},watch:{elements:function(t,e){!e.length&&t.length&&(this.headerSelected=t[0].id)}},methods:{itemClasses:function(t){return[{"pasos-b__header__item--active":t===this.selected},{"pasos-b__header__item--before":t<this.selected},this.elements.length>6?"col-lg-2":"col-lg",this.elements.length>=4?"col-md-3":"col-md"]}}},r=o,d=s("2877"),c=Object(d["a"])(r,i,n,!1,null,null,null);e["default"]=c.exports},f480:function(t,e,s){"use strict";var i=s("5530");s("d81d"),s("a15b");e["a"]={data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}},watch:{menuState:function(){this.domUpdated()}},created:function(){window.addEventListener("resize",this.domUpdated)},mounted:function(){var t=this;this.$nextTick((function(){t.crearElementos()}))},computed:{menuState:function(){return this.$store.getters.isMenuOpen},navObj:function(){if(!this.elements.length||!this.secuencial)return{};var t=this.elements.map((function(t){return t.id})),e=t.indexOf(this.selected);if(e<0)return{};var s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy:function(){window.removeEventListener("resize",this.domUpdated)},updated:function(){var t=this;this.$nextTick((function(){t.getStateStr()!=t.stateStr&&t.crearElementos()}))},methods:{crearElementos:function(){var t=this;return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((function(e,s){var n=e.data&&e.data.attrs?e.data.attrs:[];return Object(i["a"])({id:t.mainId+s+1,elm:e.elm},n)})),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight:function(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr:function(){return this.$slots.default.map((function(t){return t.elm.outerHTML})).join("")},domUpdated:function(){var t=this;this.rendered=!1,setTimeout((function(){t.rendered=!0}),100)}}}}}]);
//# sourceMappingURL=chunk-0167e2be.76910a01.js.map