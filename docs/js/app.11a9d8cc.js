(function(e){function t(t){for(var s,c,o=t[0],l=t[1],u=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);i&&i(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},a={app:0},r=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/pvp-calc/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var i=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"0820":function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("4a7a"),r=n.n(a),c=n("9ebe"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 col-md-6 m-auto",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getPokemonStats(t)}}},[n("h4",{staticClass:"my-4 text-center"},[e._v("Enter Stats")]),n("div",{staticClass:"d-flex mb-4"},[n("PokemonSelector",{staticClass:"mr-2 w-75",attrs:{addSavedResult:e.addSavedResult,allPokemon:e.allPokemon,selectedValue:e.selectedPokemon,setSelectedPokemon:e.setSelectedPokemon}}),n("div",{staticClass:"form-group w-25 mb-0"},[n("input",{staticClass:"form-control",attrs:{max:"40",min:"0",placeholder:"Level",type:"number"},domProps:{value:e.selectedLevel},on:{input:function(t){var n=t.target;return e.selectedLevel=n.value}}})])],1),n("IndividualValueInputs",{staticClass:"d-flex mb-4",attrs:{selectedIvValues:e.selectedIvValues,setSelectedIvValues:e.setSelectedIvValues}}),n("div",{staticClass:"mb-4"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:e.isCalculateStatsDisabled},on:{click:e.getPokemonStats}},[e._v(" "+e._s(e.isFetchingStats?"Loading...":"Calculate")+" ")])]),n("hr"),e.selectedPokemonStats?n("LeagueRankingSection",{attrs:{addSavedResult:e.addSavedResult,allRankings:e.allRankings,selectedPokemon:e.selectedPokemon,selectedPokemonIvs:e.ivsString,selectedPokemonStats:e.selectedPokemonStats}}):e._e()],1),e.savedResults.length?n("SavedResultsTable",{staticClass:"col-xl-8 col-md-6",attrs:{savedResults:e.savedResults}}):e._e()],1)])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-light bg-light"},[n("span",{staticClass:"navbar-brand mb-0 h1"},[e._v("PVP Complete")])])}],u=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("e587")),i=n("2fa7"),d=(n("96cf"),n("89ba")),f=(n("a15b"),n("284c")),p=n("3d20"),m=n.n(p);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object({NODE_ENV:"production",VUE_APP_DEVELOPMENT_API_URL:"http://localhost:4000/api/v1",VUE_APP_PRODUCTION_API_URL:"https://pvp-calculator.herokuapp.com/api/v1",VUE_APP_LAST_VISITED_DATE_DURATION:"12",BASE_URL:"/pvp-calc/"}),j=h.NODE_ENV,k=h.VUE_APP_PRODUCTION_API_URL,g=h.VUE_APP_DEVELOPMENT_API_URL,y="production"===j?k:g,P={headers:{Accept:"application/json"}},_=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(y+t,b({},P,{options:n}));case 3:return s=e.sent,e.next=6,s.json();case 6:if(a=e.sent,!(s.status>400)){e.next=9;break}throw new Error(a);case 9:return e.abrupt("return",a);case 12:return e.prev=12,e.t0=e["catch"](0),m.a.fire({type:"error",title:"Oops...",text:e.t0}),e.abrupt("return",{error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_(t,n);case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w="ALL_POKEMON",O="ALL_RANKINGS",x="LAST_VISITED_DATE",C=n("c1df"),R=n.n(C),I=window.localStorage,E="12",V=function(e){var t=I.getItem(e);return t||null},N=function(e,t){I.setItem(e,t)},L=function(){return I.clear()},D=function(){var e=V(x),t="YYYY-MM-DDTHH:MM:ss";if(e){var n=R()().diff(e,"hours");n>=E&&L()}else N(x,R()().format(t))},T=function(){var e,t="localStorage";try{e=window[t];var n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(s){return s instanceof DOMException&&(22===s.code||1014===s.code||"QuotaExceededError"===s.name||"NS_ERROR_DOM_QUOTA_REACHED"===s.name)&&e&&0!==e.length}},A=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=V(w),!T()||!t){e.next=3;break}return e.abrupt("return",JSON.parse(t));case 3:return e.next=5,S("/all-pokemon");case 5:if(n=e.sent,!n.error){e.next=8;break}return e.abrupt("return",[]);case 8:return N(w,JSON.stringify(n)),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S("/evolution-chain/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.error?[]:n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,s,a){var r,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[t].concat(Object(f["a"])(n)).join(","),c="?ivs=".concat(s,"&level=").concat(a,"&pokemon=").concat(r),e.next=4,S("/iv-spread".concat(c));case 4:return o=e.sent,e.abrupt("return",o.error?null:o);case 6:case"end":return e.stop()}}),e)})));return function(t,n,s,a){return e.apply(this,arguments)}}(),q=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=V(O),!T()||!t){e.next=3;break}return e.abrupt("return",JSON.parse(t));case 3:return e.next=5,S("/rankings");case 5:if(n=e.sent,!n.error){e.next=8;break}return e.abrupt("return",[]);case 8:return N(O,JSON.stringify(n)),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-group mb-0 mr-2 flex-grow-1"},[n("input",{staticClass:"form-control",attrs:{max:"15",min:"0",name:"attack",placeholder:"Attack IV",type:"number"},domProps:{value:e.selectedIvValues.attack},on:{input:e.setSelectedIvValues}})]),n("div",{staticClass:"form-group mb-0 mr-2 flex-grow-1"},[n("input",{staticClass:"form-control",attrs:{max:"15",min:"0",name:"defense",placeholder:"Defense IV",type:"number"},domProps:{value:e.selectedIvValues.defense},on:{input:e.setSelectedIvValues}})]),n("div",{staticClass:"form-group mb-0 flex-grow-1"},[n("input",{staticClass:"form-control",attrs:{max:"15",min:"0",name:"hp",placeholder:"HP IV",type:"number"},domProps:{value:e.selectedIvValues.hp},on:{input:e.setSelectedIvValues}})])])},F=[],M={props:{selectedIvValues:{type:Object},setSelectedIvValues:{type:Function}}},$=M,H=n("2877"),J=Object(H["a"])($,B,F,!1,null,null,null),G=J.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",[e._v("Stats")]),e._l(e.selectedPokemonStats,(function(t,s){return n("PokemonStatCard",{key:s,attrs:{addSavedResult:e.addSavedResult,allRankings:e.allRankings,ivsString:e.selectedPokemonIvs,name:s,selectedPokemonName:e.selectedPokemon.speciesId,stats:t}})}))],2)},Y=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border-bottom p-2"},[n("div",{staticClass:"d-flex justify-content-between"},[n("div",{staticClass:"text-capitalize font-weight-bold"},[e._v(e._s(e.name))]),n("button",{staticClass:"btn btn-sm btn-primary",on:{click:e.handleSaveResult}},[e._v(" Save Result ")])]),e.stats?[n("div",[e._v("Great League Rank: "),n("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.leagueRankText))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("span",[e._v("IV Spreads: ")]),n("ul",{staticClass:"m-0"},[n("li",[e._v(" Wild Catch: "),n("span",{},[e._v("#"+e._s(e.stats.ranks.all))])]),n("li",[e._v(" Weather Boosted: "),n("span",{},[e._v("#"+e._s(e.stats.ranks.weatherBoosted))])]),n("li",[e._v(" Hatched: "),n("span",[e._v("#"+e._s(e.stats.ranks.hatched))])])])]),n("div",{staticClass:"col-md-6"},[n("div",[e._v(" Target CP: "),n("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.stats.targetCp))])]),n("div",[e._v(" Target Level: "),n("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.stats.targetLevel))])]),n("div",[e._v(" Total Startdust: "),n("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.formatNumber(e.stats.costs.stardust)))])]),n("div",[e._v(" Total Candy: "),n("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.stats.costs.candy))]),n("p",{staticClass:"text-danger small mb-0"},[e._v("Not including evolution candy!")])])])])]:n("div",[e._v(" Does not qualify for this league. ")])],2)},Q=[],X=(n("7db0"),n("2ef0")),Z=n("6612"),ee=n.n(Z),te={props:{addSavedResult:{type:Function,required:!0},allRankings:{type:Array,required:!0},name:{type:String,required:!0},ivsString:{type:String,required:!0},selectedPokemonName:{type:String,required:!0},stats:{type:Object,default:function(){return{}}}},computed:{leagueRankText:function(){return this.selectedPokemonRank?"#".concat(this.selectedPokemonRank):"Not ranked"},resultStats:function(){return{currentName:this.selectedPokemonName,ivs:this.ivsString,leagueRank:this.selectedPokemonRank,resultName:this.name,stats:this.stats}},selectedPokemonRankData:function(){var e=this,t=this.allRankings.find((function(t){var n=t.speciesId;return n===e.name}));return t||null},selectedPokemonRank:function(){if(this.selectedPokemonRankData){var e={speciesId:this.name};return Object(X["findIndex"])(this.allRankings,e)+1}}},methods:{formatNumber:function(e){return ee()(e).format("0,0")},handleSaveResult:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.fire({title:"Are you sure?",text:"After saving this result the other displayed results will be erased.",type:"warning",showCancelButton:!0,cancelButtonColor:"#d33",confirmButtonText:"Save"});case 2:if(t=e.sent,"dismiss"!==t.value){e.next=5;break}return e.abrupt("return");case 5:this.addSavedResult(this.resultStats);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},ne=te,se=Object(H["a"])(ne,K,Q,!1,null,null,null),ae=se.exports,re={components:{PokemonStatCard:ae},props:{addSavedResult:{type:Function,required:!0},allRankings:{type:Array,required:!0},selectedPokemon:{type:Object,required:!0},selectedPokemonIvs:{type:String,required:!0},selectedPokemonStats:{type:Object,required:!0}}},ce=re,oe=Object(H["a"])(ce,W,Y,!1,null,null,null),le=oe.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-select",{attrs:{getOptionLabel:function(e){var t=e.dex,n=e.speciesName;return"#"+t+" "+n},inputId:"pokemon-selector",placeholder:"Enter Pokemon name or number",filterBy:e.handleFilterBy,selectOnTab:!0,options:e.allPokemon,value:e.selectedValue},on:{input:e.handleOnChange}})],1)},ie=[],de=(n("caad"),n("2532"),{props:{addSelectedPokemon:{type:Function},allPokemon:{type:Array},selectedValue:{type:Object,default:function(){return{}}},setSelectedPokemon:{type:Function}},methods:{handleFilterBy:function(e,t,n){var s=e.dex;return"".concat(s).includes(n)||t.toLowerCase().includes(n)},handleOnChange:function(e){this.setSelectedPokemon(e)}}}),fe=de,pe=Object(H["a"])(fe,ue,ie,!1,null,null,null),me=pe.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100",staticStyle:{"overflow-x":"scroll"}},[n("v-client-table",{attrs:{columns:e.columns,data:e.savedResults,options:e.options},scopedSlots:e._u([{key:"currentName",fn:function(t){var s=t.row;return n("span",{staticClass:"text-capitalize",domProps:{textContent:e._s(s.currentName)}})}},{key:"resultName",fn:function(t){var s=t.row;return n("span",{staticClass:"text-capitalize",domProps:{textContent:e._s(s.resultName)}})}},{key:"ivs",fn:function(t){var s=t.row;return n("span",{staticClass:"text-capitalize",domProps:{textContent:e._s(s.ivs)}})}},{key:"leagueRank",fn:function(t){var s=t.row;return n("span",{staticClass:"text-capitalize",domProps:{textContent:e._s("#"+s.leagueRank+", Great League")}})}},{key:"stats.targetCp",fn:function(t){var s=t.row.stats;return n("span",{staticClass:"text-capitalize",domProps:{textContent:e._s(s.targetCp)}})}},{key:"stats.targetLevel",fn:function(t){var s=t.row.stats;return n("span",{staticClass:"text-capitalize",domProps:{textContent:e._s(s.targetLevel)}})}},{key:"stats.ranks.all",fn:function(t){var s=t.row.stats.ranks;return n("span",{domProps:{textContent:e._s(s.all)}})}},{key:"stats.ranks.weatherBoosted",fn:function(t){var s=t.row.stats.ranks;return n("span",{domProps:{textContent:e._s(s.weatherBoosted)}})}},{key:"stats.ranks.hatched",fn:function(t){var s=t.row.stats.ranks;return n("span",{domProps:{textContent:e._s(s.hatched)}})}},{key:"stats.costs.candy",fn:function(t){var s=t.row.stats.costs;return n("span",{domProps:{textContent:e._s(s.candy)}})}},{key:"stats.costs.stardust",fn:function(t){var s=t.row.stats.costs;return n("span",{domProps:{textContent:e._s(e.formatNumber(s.stardust))}})}}])})],1)},be=[],he={props:{savedResults:{type:Array,required:!0}},data:function(){var e=this.$createElement;return{columns:["currentName","resultName","ivs","leagueRank","stats.targetCp","stats.targetLevel","stats.ranks.all","stats.ranks.weatherBoosted","stats.ranks.hatched","stats.costs.candy","stats.costs.stardust"],options:{headings:{currentName:"Current Species",resultName:"Target Species",ivs:"IVs (ATK/DEF/HP)",leagueRank:"League Rank","stats.targetCp":"Target CP","stats.targetLevel":"Target Level","stats.ranks.all":function(){return e("span",["Wild Catch ",e("br"),"IV Spread"])},"stats.ranks.weatherBoosted":function(){return e("span",["Weather Boosted",e("br"),"IV Spread"])},"stats.ranks.hatched":function(){return e("span",["Hatched",e("br"),"IV Spread"])},"stats.costs.candy":"Candy Upgrade Costs","stats.costs.stardust":"Stardust Upgrade Costs"}}}},methods:{formatNumber:function(e){return ee()(e).format("0,0")}}},je=he,ke=(n("8c6f"),Object(H["a"])(je,ve,be,!1,null,"49268aa1",null)),ge=ke.exports;function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _e={attack:"",defense:"",hp:""},Se={name:"App",components:{IndividualValueInputs:G,LeagueRankingSection:le,PokemonSelector:me,SavedResultsTable:ge},data:function(){return{allPokemon:[],allRankings:[],isFetchingStats:!1,savedResults:[],selectedIvValues:_e,selectedLevel:"",selectedPokemon:null,selectedPokemonStats:null}},computed:{ivsString:function(){var e=this.selectedIvValues,t=e.attack,n=e.defense,s=e.hp;return"".concat(t,"/").concat(n,"/").concat(s)},isCalculateStatsDisabled:function(){var e=this.selectedIvValues,t=e.attack,n=e.defense,s=e.hp;return this.isFetchingStats||!this.selectedPokemon||!t||!n||!s}},created:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:D(),this.getOnLoadData();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{addSavedResult:function(e){this.savedResults.push(e),this.clearSelectedValues()},clearSelectedValues:function(){this.selectedIvValues=Pe({},_e),this.selectedLevel="",this.selectedPokemon=null,this.selectedPokemonStats=null},getOnLoadData:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([A(),q()]);case 2:t=e.sent,n=Object(u["a"])(t,2),s=n[0],a=n[1],this.allPokemon=s,this.allRankings=a;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getPokemonStats:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,s,a,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isCalculateStatsDisabled){e.next=2;break}return e.abrupt("return");case 2:if(!t||!t.target||"pokemon-selector"!==t.target.name){e.next=4;break}return e.abrupt("return");case 4:return n=this.selectedPokemon,s=n.dex,a=n.speciesId,this.isFetchingStats=!0,e.next=8,z(s);case 8:return r=e.sent,e.next=11,U(a,r,this.ivsString,this.selectedLevel);case 11:c=e.sent,this.isFetchingStats=!1,this.selectedPokemonStats=c;case 14:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setSelectedIvValues:function(e){var t=e.target,n=Object(i["a"])({},t.name,t.value);this.selectedIvValues=Pe({},this.selectedIvValues,{},n)},setSelectedPokemon:function(e){this.selectedPokemon=e}}},we=Se,Oe=(n("034f"),Object(H["a"])(we,o,l,!1,null,null,null)),xe=Oe.exports;n("3e48"),n("21b6"),n("6dfc");s["default"].config.productionTip=!1,s["default"].component("v-select",r.a),s["default"].use(c["ClientTable"]),new s["default"]({render:function(e){return e(xe)}}).$mount("#app")},"85ec":function(e,t,n){},"8c6f":function(e,t,n){"use strict";var s=n("0820"),a=n.n(s);a.a}});
//# sourceMappingURL=app.11a9d8cc.js.map