"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{555:function(n,t,e){e.d(t,{Z:function(){return y}});var r,a,c,o,u,i,s=e(689),p=e(168),f=e(444),d=e(87),l=(0,f.ZP)(d.rU)(r||(r=(0,p.Z)(["\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),x=f.ZP.li(a||(a=(0,p.Z)(["\n  flex-basis: calc(100% / 4 - 20px);\n  background-color: #f1c32b;\n  border-radius: 8px;\n  overflow: hidden;\n  text-align: center;\n  :hover {\n    box-shadow: 0px 10px 10px #072f13;\n  }\n"]))),h=f.ZP.img(c||(c=(0,p.Z)(["\n  width: 100%;\n"]))),v=f.ZP.h3(o||(o=(0,p.Z)(["\n  padding: 5px;\n  color: #2c0231;\n"]))),g=e(184),m=function(n){var t=n.movies,e=(0,s.TH)();return t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,g.jsx)(x,{children:(0,g.jsxs)(l,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)("div",{children:(0,g.jsx)(h,{src:"https://image.tmdb.org/t/p/w500/"+a,alt:"poster"})}),(0,g.jsxs)(v,{children:[" ",r]})]})},t)}))},Z=f.ZP.div(u||(u=(0,p.Z)(["\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 10px 15px;\n  background-color: #2c0231;\n"]))),w=f.ZP.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 20px;\n"]))),y=function(n){var t=n.movies;return(0,g.jsx)(Z,{children:(0,g.jsx)(w,{children:(0,g.jsx)(m,{movies:t})})})}},485:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r,a=e(439),c=e(791),o=e(555),u=e(215),i=e(168),s=e(444).ZP.h1(r||(r=(0,i.Z)(["\n  text-align: center;\n  color: #2c0231;\n  padding-top: 25px;\n  padding-bottom: 25px;\n"]))),p=e(184),f=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,c.useEffect)((function(){(0,u.wr)().then((function(n){var t=n.data;r(t.results)}))}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)(s,{children:"Trending today"}),(0,p.jsx)(o.Z,{movies:e})]})}},215:function(n,t,e){e.d(t,{BG:function(){return f},I2:function(){return g},kK:function(){return l},sv:function(){return h},wr:function(){return s}});var r=e(861),a=e(757),c=e.n(a),o=e(243),u="https://api.themoviedb.org/3/",i="31387222f9d913a960cb8ee3c225d2d3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=485.ce76996a.chunk.js.map