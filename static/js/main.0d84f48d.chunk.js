(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[3],{14:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"f",(function(){return c})),r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"k",(function(){return l})),r.d(t,"m",(function(){return d})),r.d(t,"l",(function(){return f})),r.d(t,"h",(function(){return g})),r.d(t,"j",(function(){return p})),r.d(t,"i",(function(){return b})),r.d(t,"g",(function(){return O}));var n=r(5),a=function(e,t){return{type:n.h,payload:{user:e,history:t}}},c=function(e){return{type:n.j,payload:e}},o=function(e){return{type:n.i,payload:{message:e}}},u=function(e,t){return{type:n.b,payload:{forgotUserMail:e,history:t}}},s=function(e){return{type:n.d,payload:e}},i=function(e){return{type:n.c,payload:{message:e}}},l=function(e){var t=e.resetPasswordCode,r=e.newPassword,a=e.history;return{type:n.t,payload:{resetPasswordCode:t,newPassword:r,history:a}}},d=function(e){return{type:n.v,payload:e}},f=function(e){return{type:n.u,payload:{message:e}}},g=function(e,t){return{type:n.q,payload:{user:e,history:t}}},p=function(e){return{type:n.s,payload:e}},b=function(e){return{type:n.r,payload:{message:e}}},O=function(e){return{type:n.k,payload:{history:e}}}},15:function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"j",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"f",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"h",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"g",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"i",(function(){return g}));var n=r(9),a=function(){var e=n.f;try{if(localStorage.getItem("direction")){var t=localStorage.getItem("direction");"rtl"!==t&&"ltr"!==t||(e=t)}}catch(r){console.log(">>>>: src/helpers/Utils.js : getDirection -> error",r),e=n.f}return{direction:e,isRtl:"rtl"===e}},c=function(e){var t="ltr";"rtl"!==e&&"ltr"!==e||(t=e);try{localStorage.setItem("direction",t)}catch(r){console.log(">>>>: src/helpers/Utils.js : setDirection -> error",r)}},o=function(){var e=n.e;try{localStorage.getItem(n.p)&&(e=localStorage.getItem(n.p))}catch(t){console.log(">>>>: src/helpers/Utils.js : getCurrentColor -> error",t),e=n.e}return e},u=function(e){try{localStorage.setItem(n.p,e)}catch(t){console.log(">>>>: src/helpers/Utils.js : setCurrentColor -> error",t)}},s=function(){var e="rounded";try{localStorage.getItem(n.q)&&(e=localStorage.getItem(n.q))}catch(t){console.log(">>>>: src/helpers/Utils.js : getCurrentRadius -> error",t),e="rounded"}return e},i=function(e){try{localStorage.setItem(n.q,e)}catch(t){console.log(">>>>: src/helpers/Utils.js : setCurrentRadius -> error",t)}},l=function(){var e=n.g;try{e=localStorage.getItem("currentLanguage")&&n.m.filter((function(e){return e.id===localStorage.getItem("currentLanguage")})).length>0?localStorage.getItem("currentLanguage"):n.g}catch(t){console.log(">>>>: src/helpers/Utils.js : getCurrentLanguage -> error",t),e=n.g}return e},d=function(e){try{localStorage.setItem("currentLanguage",e)}catch(t){console.log(">>>>: src/helpers/Utils.js : setCurrentLanguage -> error",t)}},f=function(){var e=null;try{e=null!=localStorage.getItem("gogo_current_user")?JSON.parse(localStorage.getItem("gogo_current_user")):null}catch(t){console.log(">>>>: src/helpers/Utils.js  : getCurrentUser -> error",t),e=null}return console.log("local storage esta devolviendo: "),console.log(e),e},g=function(e){try{e?localStorage.setItem("gogo_current_user",JSON.stringify(e)):localStorage.removeItem("gogo_current_user")}catch(t){console.log(">>>>: src/helpers/Utils.js : setCurrentUser -> error",t)}}},24:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(25),a=(r(65),r(67),r(9));n.a.initializeApp(a.i);var c=n.a.auth();n.a.database()},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return o}));var n=r(5),a=function(e,t){return{type:n.e,payload:{data:e,history:t}}},c=function(e){return{type:n.g,payload:e}},o=function(e){return{type:n.f,payload:{message:e}}}},28:function(e,t,r){"use strict";r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return i}));var n=r(43),a=r.n(n).a.create({baseURL:"https://backendbf.banticapps.com/api/v1",withCredentials:!0}),c=function(e){return a.post("/auth/signin",e)},o=function(e){return a.post("/users/generarQR",e)},u=function(){return a.get("/prueba")},s=function(e){return a.get("/cobranza/getAllQR?userName=".concat(e.userName,"&fkCustomer=").concat(e.fkCustomer,"&typeRequest=").concat(e.typeRequest))},i=function(e){return a.post("/users/verificarQR",e)}},48:function(e,t,r){"use strict";r.r(t);r(49),r(50),r(51),r(52),r(53),r(54),r(55);var n=r(9),a=r(15),c=n.l||n.k?Object(a.a)():n.e;Object(a.f)(c);r(56)("./gogo.".concat(c,".scss")).then((function(){r(87)}))},49:function(e,t,r){},5:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"h",(function(){return a})),r.d(t,"j",(function(){return c})),r.d(t,"i",(function(){return o})),r.d(t,"q",(function(){return u})),r.d(t,"s",(function(){return s})),r.d(t,"r",(function(){return i})),r.d(t,"k",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return g})),r.d(t,"t",(function(){return p})),r.d(t,"v",(function(){return b})),r.d(t,"u",(function(){return O})),r.d(t,"p",(function(){return j})),r.d(t,"o",(function(){return h})),r.d(t,"n",(function(){return m})),r.d(t,"l",(function(){return y})),r.d(t,"m",(function(){return v})),r.d(t,"e",(function(){return S})),r.d(t,"g",(function(){return w})),r.d(t,"f",(function(){return x}));var n="CHANGE_LOCALE",a="LOGIN_USER",c="LOGIN_USER_SUCCESS",o="LOGIN_USER_ERROR",u="REGISTER_USER",s="REGISTER_USER_SUCCESS",i="REGISTER_USER_ERROR",l="LOGOUT_USER",d="FORGOT_PASSWORD",f="FORGOT_PASSWORD_SUCCESS",g="FORGOT_PASSWORD_ERROR",p="RESET_PASSWORD",b="RESET_PASSWORD_SUCCESS",O="RESET_PASSWORD_ERROR",j="MENU_SET_CLASSNAMES",h="MENU_CONTAINER_ADD_CLASSNAME",m="MENU_CLICK_MOBILE_MENU",y="MENU_CHANGE_DEFAULT_CLASSES",v="MENU_CHANGE_HAS_SUB_ITEM_STATUS",S="GENERAR_QR",w="GENERAR_QR_SUCCESS",x="GENERAR_QR_ERROR"},50:function(e,t,r){},56:function(e,t,r){var n={"./gogo.dark.bluenavy.scss":[88,21],"./gogo.dark.blueolympic.scss":[89,22],"./gogo.dark.blueyale.scss":[90,23],"./gogo.dark.greenlime.scss":[91,24],"./gogo.dark.greenmoss.scss":[92,25],"./gogo.dark.greysteel.scss":[93,26],"./gogo.dark.orangecarrot.scss":[94,27],"./gogo.dark.purplemonster.scss":[95,28],"./gogo.dark.redruby.scss":[96,29],"./gogo.dark.yellowgranola.scss":[97,30],"./gogo.light.bluenavy.scss":[98,31],"./gogo.light.blueolympic.scss":[99,32],"./gogo.light.blueyale.scss":[100,33],"./gogo.light.greenlime.scss":[101,34],"./gogo.light.greenmoss.scss":[102,35],"./gogo.light.greysteel.scss":[103,36],"./gogo.light.orangecarrot.scss":[104,37],"./gogo.light.purplemonster.scss":[105,38],"./gogo.light.redruby.scss":[106,39],"./gogo.light.yellowgranola.scss":[107,40]};function a(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((function(){return r.t(a,7)}))}a.keys=function(){return Object.keys(n)},a.id=56,e.exports=a},87:function(e,t,r){"use strict";r.r(t);var n=r(6),a=r.n(n),c=r(22),o=r.n(c),u=r(31),s=r(18),i=r(45),l=r(3),d=r(15),f=r(5),g={locale:Object(d.b)()},p=r(9),b={containerClassnames:p.h,subHiddenBreakpoint:p.o,menuHiddenBreakpoint:p.n,menuClickCount:0,selectedMenuHasSubItems:"menu-default"===p.h},O={currentUser:p.j?p.d:Object(d.d)(),forgotUserMail:"",newPassword:"",resetPasswordCode:"",loading:!1,error:""},j={miqr:"",erro:""},h=Object(s.b)({menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.m:return Object(l.a)(Object(l.a)({},e),{},{selectedMenuHasSubItems:t.payload});case f.p:case f.n:return Object(l.a)(Object(l.a)({},e),{},{containerClassnames:t.payload.containerClassnames,menuClickCount:t.payload.menuClickCount});case f.o:case f.l:return Object(l.a)(Object(l.a)({},e),{},{containerClassnames:t.payload});default:return Object(l.a)({},e)}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.a:return Object(l.a)(Object(l.a)({},e),{},{locale:t.payload});default:return Object(l.a)({},e)}},authUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.h:return Object(l.a)(Object(l.a)({},e),{},{loading:!0,error:""});case f.j:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,currentUser:t.payload,error:""});case f.i:return console.log("action.payload"),console.log(t.payload),Object(l.a)(Object(l.a)({},e),{},{loading:!1,currentUser:null,error:t.payload.message});case f.b:return Object(l.a)(Object(l.a)({},e),{},{loading:!0,error:""});case f.d:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,forgotUserMail:t.payload,error:""});case f.c:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,forgotUserMail:"",error:t.payload.message});case f.t:return Object(l.a)(Object(l.a)({},e),{},{loading:!0,error:""});case f.v:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,newPassword:t.payload,resetPasswordCode:"",error:""});case f.u:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,newPassword:"",resetPasswordCode:"",error:t.payload.message});case f.q:return Object(l.a)(Object(l.a)({},e),{},{loading:!0,error:""});case f.s:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,currentUser:t.payload,error:""});case f.r:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,currentUser:null,error:t.payload.message});case f.k:return Object(l.a)(Object(l.a)({},e),{},{currentUser:null,error:""});default:return Object(l.a)({},e)}},qrReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.e:return Object(l.a)(Object(l.a)({},e),{},{erro:""});case f.g:return Object(l.a)(Object(l.a)({},e),{},{miqr:t.payload,erro:""});case f.f:return Object(l.a)(Object(l.a)({},e),{},{erro:t.payload.message});default:return Object(l.a)({},e)}}}),m=r(8),y=r.n(m),v=r(11),S=r(21),w=r(24),x=r(28),R=r(109),E=r(26),k=r(44),_=r.n(k),C=r(14),U=y.a.mark(H),I=y.a.mark(Q),A=y.a.mark(z),L=y.a.mark(K),N=y.a.mark(X),P=y.a.mark(V),T=y.a.mark(Z),M=y.a.mark(ee),q=y.a.mark(te),G=y.a.mark(ne),D=y.a.mark(ae),B=y.a.mark(oe),F=y.a.mark(ue);function H(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(f.h,Q);case 2:case"end":return e.stop()}}),U)}var W=function(){var e=Object(S.a)(y.a.mark((function e(t,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)({username:t,password:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();function Q(e){var t,r,n,a,c,o,u;return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,r=t.user,n=r.email,a=r.password,c=t.history,s.prev=3,s.next=6,Object(v.b)(W,n,a);case 6:return o=s.sent,console.log("LAS RESPUESTA ES ..............."),console.log(o.data),u=Object(l.a)(Object(l.a)({uid:Object(R.a)()},p.d),{},{title:o.data.nameUser}),Object(d.i)(u),s.next=13,Object(v.d)(Object(C.f)(u));case 13:c.push(p.b),s.next=20;break;case 16:return s.prev=16,s.t0=s.catch(3),s.next=20,Object(v.d)(Object(C.e)(s.t0.response.data[0]));case 20:case"end":return s.stop()}}),I,null,[[3,16]])}var J=function(){var e=Object(S.a)(y.a.mark((function e(t,r,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)({amount:t,glosa:r,user:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();function z(e){var t,r,n,a,c,o,u,s;return y.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,r=t.data,n=r.amount,a=r.glosa,c=Object(d.d)(),o=c.title,u=t.history,i.prev=4,i.next=7,Object(v.b)(J,n,a,o);case 7:return s=i.sent,console.log(s.data),i.next=11,Object(v.d)(Object(E.c)(s.data));case 11:u.push("".concat(p.b,"/verqr")),i.next=19;break;case 14:return i.prev=14,i.t0=i.catch(4),console.log(i.t0.response.data),i.next=19,Object(v.d)(Object(E.b)(i.t0.response.data[0]));case 19:case"end":return i.stop()}}),A,null,[[4,14]])}function K(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(f.e,z);case 2:case"end":return e.stop()}}),L)}function X(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(f.q,V);case 2:case"end":return e.stop()}}),N)}var Y=function(){var e=Object(S.a)(y.a.mark((function e(t,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.createUserWithEmailAndPassword(t,r).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();function V(e){var t,r,n,a,c,o,u;return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,r=t.user,n=r.email,a=r.password,c=t.history,s.prev=3,s.next=6,Object(v.b)(Y,n,a);case 6:if((o=s.sent).message){s.next=15;break}return u=Object(l.a)({uid:o.user.uid},p.d),Object(d.i)(u),s.next=12,Object(v.d)(Object(C.j)(u));case 12:c.push(p.b),s.next=17;break;case 15:return s.next=17,Object(v.d)(Object(C.i)(o.message));case 17:s.next=23;break;case 19:return s.prev=19,s.t0=s.catch(3),s.next=23,Object(v.d)(Object(C.i)(s.t0));case 23:case"end":return s.stop()}}),P,null,[[3,19]])}function Z(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(f.k,ee);case 2:case"end":return e.stop()}}),T)}var $=function(e){e.push(p.b),window.location.reload()};function ee(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,r=t.history,Object(d.i)(),_.a.remove("token"),n.next=6,Object(v.b)($,r);case 6:case"end":return n.stop()}}),M)}function te(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(f.b,ne);case 2:case"end":return e.stop()}}),q)}var re=function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.sendPasswordResetEmail(t).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ne(e){var t,r,n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,r=t.forgotUserMail.email,a.prev=2,a.next=5,Object(v.b)(re,r);case 5:if(n=a.sent){a.next=11;break}return a.next=9,Object(v.d)(Object(C.c)("success"));case 9:a.next=13;break;case 11:return a.next=13,Object(v.d)(Object(C.b)(n.message));case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(2),a.next=19,Object(v.d)(Object(C.b)(a.t0));case 19:case"end":return a.stop()}}),G,null,[[2,15]])}function ae(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(f.t,oe);case 2:case"end":return e.stop()}}),D)}var ce=function(){var e=Object(S.a)(y.a.mark((function e(t,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.confirmPasswordReset(t,r).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();function oe(e){var t,r,n,a;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,r=t.newPassword,n=t.resetPasswordCode,c.prev=2,c.next=5,Object(v.b)(ce,n,r);case 5:if(a=c.sent){c.next=11;break}return c.next=9,Object(v.d)(Object(C.m)("success"));case 9:c.next=13;break;case 11:return c.next=13,Object(v.d)(Object(C.l)(a.message));case 13:c.next=19;break;case 15:return c.prev=15,c.t0=c.catch(2),c.next=19,Object(v.d)(Object(C.l)(c.t0));case 19:case"end":return c.stop()}}),B,null,[[2,15]])}function ue(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.c)(H),Object(v.c)(Z),Object(v.c)(X),Object(v.c)(te),Object(v.c)(ae),Object(v.c)(K)]);case 2:case"end":return e.stop()}}),F)}var se=y.a.mark(ie);function ie(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([ue()]);case 2:case"end":return e.stop()}}),se)}var le=Object(i.a)(),de=[le];function fe(e){var t=Object(s.d)(h,e,Object(s.c)(s.a.apply(void 0,de)));return le.run(ie),t}var ge=function(e){e&&e instanceof Function&&r.e(41).then(r.bind(null,239)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))},pe=r(20),be=a.a.lazy((function(){return Promise.all([r.e(19),r.e(1)]).then(r.bind(null,266))})),Oe=function(){return Object(pe.jsx)(u.a,{store:fe(),children:Object(pe.jsx)(n.Suspense,{fallback:Object(pe.jsx)("div",{className:"loading"}),children:Object(pe.jsx)(be,{})})})};o.a.render(Object(pe.jsx)(Oe,{}),document.getElementById("root")),ge()},9:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"h",(function(){return a})),r.d(t,"o",(function(){return c})),r.d(t,"n",(function(){return o})),r.d(t,"g",(function(){return u})),r.d(t,"m",(function(){return s})),r.d(t,"i",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"d",(function(){return d})),r.d(t,"p",(function(){return f})),r.d(t,"l",(function(){return g})),r.d(t,"e",(function(){return p})),r.d(t,"k",(function(){return b})),r.d(t,"f",(function(){return O})),r.d(t,"q",(function(){return j})),r.d(t,"j",(function(){return h})),r.d(t,"c",(function(){return m}));var n={Admin:0,Editor:1},a="menu-default",c=1440,o=768,u="en",s=[{id:"en",name:"English - LTR",direction:"ltr"},{id:"es",name:"Espa\xf1ol",direction:"ltr"},{id:"enrtl",name:"English - RTL",direction:"rtl"}],i={apiKey:"AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg",authDomain:"gogo-react-login.firebaseapp.com",databaseURL:"https://gogo-react-login.firebaseio.com",projectId:"gogo-react-login",storageBucket:"gogo-react-login.appspot.com",messagingSenderId:"216495999563"},l="/app",d=("".concat(l,"/#"),{id:1,title:"Reinaldo",img:"/assets/img/profiles/l-1.jpg",date:"Last seen today 15:24",role:n.Admin}),f="__theme_selected_color",g=!0,p="light.purplemonster",b=!0,O="ltr",j="__theme_radius",h=!0,m=["bluenavy","blueyale","blueolympic","greenmoss","greenlime","purplemonster","orangecarrot","redruby","yellowgranola","greysteel"]}},[[48,4,17]]]);
//# sourceMappingURL=main.0d84f48d.chunk.js.map