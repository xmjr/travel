(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdf38a72"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0d6b":function(t,e,n){},"0da5":function(t,e,n){"use strict";var i=n("42e4"),r=n.n(i);r.a},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),r=n("e53d").document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},"27a6":function(t,e,n){},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},3143:function(t,e,n){"use strict";var i=n("27a6"),r=n.n(i);r.a},"35e8":function(t,e,n){var i=n("d9f6"),r=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},"36bc":function(t,e,n){"use strict";var i=n("0d6b"),r=n.n(i);r.a},"419d":function(t,e,n){},"42e4":function(t,e,n){},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"4e6f":function(t,e,n){},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"63b6":function(t,e,n){var i=n("e53d"),r=n("584a"),o=n("d864"),s=n("35e8"),c=n("07e3"),a="prototype",u=function(t,e,n){var f,l,p,d=t&u.F,m=t&u.G,v=t&u.S,w=t&u.P,b=t&u.B,y=t&u.W,h=m?r:r[e]||(r[e]={}),g=h[a],O=m?i:v?i[e]:(i[e]||{})[a];for(f in m&&(n=e),n)l=!d&&O&&void 0!==O[f],l&&c(h,f)||(p=l?O[f]:n[f],h[f]=m&&"function"!=typeof O[f]?n[f]:b&&l?o(p,i):y&&O[f]==p?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[a]=t[a],e}(p):w&&"function"==typeof p?o(Function.call,p):p,w&&((h.virtual||(h.virtual={}))[f]=p,t&u.R&&g&&!g[f]&&s(g,f,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},9220:function(t,e,n){"use strict";var i=n("4e6f"),r=n.n(i);r.a},"953e":function(t,e,n){"use strict";var i=n("419d"),r=n.n(i);r.a},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b3d7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("home-header"),n("home-swiper",{attrs:{list:t.swiperList}}),n("home-icons",{attrs:{list:t.iconList}}),n("home-recommend",{attrs:{list:t.recommendList}}),n("home-weekend",{attrs:{list:t.weekendList}})],1)},r=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._m(0),n("router-link",{staticClass:"header-input",attrs:{to:"/city"}},[n("span",{staticClass:"iconfont icon-sousuo"}),t._v("\n\t\t输入城市/景点/游玩主题")]),n("router-link",{attrs:{to:"/city"}},[n("div",{staticClass:"header-right"},[t._v("\n\t\t\t"+t._s(this.city)+"\n\t\t\t"),n("span",{staticClass:"iconfont icon-jiantou"},[t._v("")])])])],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-left"},[n("div",{staticClass:"iconfont icon-fanhui"},[t._v("")])])}],a=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"HomeHeader",computed:f({},Object(a["c"])(["city"]))},p=l,d=(n("0da5"),n("2877")),m=Object(d["a"])(p,s,c,!1,null,"4ca256e7",null),v=m.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t.showSwiper?n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,(function(t){return n("swiper-slide",{key:t.id},[n("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},b=[],y=(n("dfa4"),n("7212")),h={name:"HomeSwiper",components:{swiper:y["swiper"],swiperSlide:y["swiperSlide"]},props:{list:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:!0}}},computed:{showSwiper:function(){return this.list.length}}},g=h,O=(n("953e"),Object(d["a"])(g,w,b,!1,null,"2ca65553",null)),_=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icons"},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,(function(e,i){return n("swiper-slide",{key:i},t._l(e,(function(e){return n("div",{key:e.id,staticClass:"icon"},[n("div",{staticClass:"icon-img"},[n("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),n("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])})),0)})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},C=[],P={name:"HomeIcons",components:{swiper:y["swiper"],swiperSlide:y["swiperSlide"]},props:{list:Array},data:function(){return{swiperOption:{autoplay:!1,pagination:{el:".swiper-pagination"}}}},computed:{pages:function(){var t=[];return this.list.forEach((function(e,n){var i=Math.floor(n/8);t[i]||(t[i]=[]),t[i].push(e)})),t}}},x=P,k=(n("36bc"),Object(d["a"])(x,j,C,!1,null,"3cf9a08a",null)),S=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("热销推荐")]),n("ul",t._l(t.list,(function(e){return n("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[n("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),n("div",{staticClass:"item-info"},[n("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),n("button",{staticClass:"item-button"},[t._v("查看详情")])])])})),1)])},H=[],L={name:"HomeRecommend",props:{list:Array},data:function(){return{}}},D=L,I=(n("3143"),Object(d["a"])(D,E,H,!1,null,"d929849a",null)),$=I.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("周末去哪儿")]),n("ul",t._l(t.list,(function(e){return n("li",{key:e.id,staticClass:"item border-bottom"},[n("div",{staticClass:"item-img-wrapper"},[n("img",{staticClass:"item-img",attrs:{src:e.imgUrl},on:{click:function(t){t.stopPropagation(),t.preventDefault()}}})]),n("div",{staticClass:"item-info"},[n("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])})),0)])},F=[],M={name:"HomeWeekend",props:{list:Array},data:function(){return{}}},U=M,R=(n("9220"),Object(d["a"])(U,A,F,!1,null,"4106a1fe",null)),T=R.exports,W=n("bc3a"),B=n.n(W);function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var q={name:"Home",components:{HomeHeader:v,HomeSwiper:_,HomeIcons:S,HomeRecommend:$,HomeWeekend:T},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:J({},Object(a["c"])(["city"])),methods:{getHomeInfo:function(){B.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},z=q,K=Object(d["a"])(z,i,r,!1,null,null,null);e["default"]=K.exports},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("85f2"),r=n.n(i);function o(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),r=n("794b"),o=n("1bc3"),s=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-cdf38a72.4493d4bd.js.map