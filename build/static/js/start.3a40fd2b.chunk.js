(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[6],{124:function(e,t,c){"use strict";c(6);var n=c(152),s=c(153),a=c(114),r=c(115),j=c(9),i=c(20),l=function(e){return"/".concat(e)===j.b?Object(i.jsx)(r.a,{id:"menu.home"}):Object(i.jsx)(r.a,{id:"menu.".concat(e)})},d=function(e,t){return e.split(t)[0]+t},b=function(e){var t=e.match.path.substr(1),c=t.split("/");return c[c.length-1].indexOf(":")>-1&&(c=c.filter((function(e){return-1===e.indexOf(":")}))),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:c.map((function(e,n){return Object(i.jsx)(s.a,{active:c.length===n+1,children:c.length!==n+1?Object(i.jsx)(a.b,{to:"/".concat(d(t,e)),children:l(e)}):l(e)},n)}))})})};t.a=function(e){var t=e.heading,c=e.match;return Object(i.jsxs)(i.Fragment,{children:[t&&Object(i.jsx)("h1",{children:Object(i.jsx)(r.a,{id:t})}),Object(i.jsx)(b,{match:c})]})}},227:function(e,t,c){"use strict";c.r(t);c(6);var n=c(135),s=c(115),a=c(117),r=c(124),j=c(20);t.default=function(e){var t=e.match;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(n.a,{children:Object(j.jsxs)(a.a,{xxs:"12",children:[Object(j.jsx)(r.a,{heading:"menu.start",match:t}),Object(j.jsx)(a.b,{className:"mb-5"})]})}),Object(j.jsx)(n.a,{children:Object(j.jsxs)(a.a,{xxs:"12",className:"mb-4",children:[Object(j.jsx)("p",{children:Object(j.jsx)(s.a,{id:"menu.start"})}),Object(j.jsx)("p",{children:"dashboard"})]})})]})}},232:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),a=c(21),r=c(120),j=c(6),i=c(135),l=c(136),d=c(229),b=c(137),o=c(263),x=c(132),h=c(115),O=c(117),u=c(124),m=c(15),g=c(28),p=c(275),f=c(257),v=c(258),N=c(259),C=c(179),y=c(20);var k=function(e){var t=e.currentTupla,c=e.isOpen,n=e.closeModal;return console.log("LLAMAMOS AL MODAL"),Object(y.jsx)(l.a,{className:"mb-4",children:Object(y.jsx)(d.a,{children:Object(y.jsx)("div",{children:Object(y.jsxs)(p.a,{isOpen:c,toggle:function(){return n(!c)},children:[Object(y.jsxs)(f.a,{children:["Cod: ",t.idQR," ",Object(y.jsx)("br",{}),t.gloss," ",Object(y.jsx)("br",{})]}),Object(y.jsx)(v.a,{children:Object(y.jsx)("div",{className:"d-flex justify-content-center",children:Object(y.jsx)("div",{className:"d-flex justify-content-center",children:t?Object(y.jsx)(C.a,{base64String:t.codigoQR}):Object(y.jsx)("h3",{children:"No disponible ..."})})})}),Object(y.jsxs)(N.a,{children:[Object(y.jsx)(x.a,{color:"primary",onClick:function(){return n(!1)},children:"Aceptar"})," "]})]})})})})},S=c(260),A=c(261),E=c(262);var P=function(e){var t=e.productsPerPage,c=e.curentPage,n=e.setCurrentPage,s=e.totolProduct,a=Object(j.useState)(!1),i=Object(r.a)(a,2),l=i[0],d=i[1],b=Object(j.useState)(!1),o=Object(r.a)(b,2),x=o[0],h=o[1];Object(j.useEffect)((function(){s>0&&h(!0)}),[s]);for(var O=[],u=1;u<=Math.ceil(s/t);u++)O.push(u);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"text-center",children:Object(y.jsxs)(E.a,{className:"d-inline-block",size:"sm",listClassName:"justify-content-center","aria-label":"Page navigation example",children:[Object(y.jsx)(S.a,{className:"".concat(!l&&"disabled"),children:Object(y.jsx)(A.a,{className:"prev",onClick:function(){l&&(n(c-1),d(c-1!==1),h(c-1))},disabled:!l,children:Object(y.jsx)("i",{className:"simple-icon-arrow-left"})})}),O.map((function(e){return Object(y.jsx)(S.a,{active:e===c,children:Object(y.jsx)(A.a,{onClick:function(){return n(t=e),d(1!==t),void h(t!==O.length);var t},children:e})},e)})),Object(y.jsx)(S.a,{className:"".concat(!x&&"disabled"),children:Object(y.jsx)(A.a,{className:"next",onClick:function(){x&&(n(c+1),h(c+1<O.length),d(c+1))},disabled:!x,children:Object(y.jsx)("i",{className:"simple-icon-arrow-right"})})})]})})})};t.default=function(e){var t=e.match,c=Object(j.useState)([]),n=Object(r.a)(c,2),p=n[0],f=n[1],v=Object(j.useState)(!1),N=Object(r.a)(v,2),C=N[0],S=N[1],A=Object(j.useState)(null),E=Object(r.a)(A,2),w=E[0],F=E[1],M=Object(j.useState)(10),D=Object(r.a)(M,2),L=D[0],R=(D[1],Object(j.useState)(1)),T=Object(r.a)(R,2),Q=T[0],z=T[1],I=p.length,V=Q*L,J=V-L;Object(j.useEffect)(Object(a.a)(s.a.mark((function e(){var t,c,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(m.d)(),c=t.title,n={userName:c,fkCustomer:"1",typeRequest:"DATAQR"},console.log("SE ESTA EJECUTANDO EL USEEFECT ...."),e.next=6,Object(g.b)(n);case 6:a=e.sent,console.log(a.data.data),f(a.data.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error al obtener los datos de Cobranza");case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(i.a,{children:Object(y.jsxs)(O.a,{xxs:"12",children:[Object(y.jsx)(u.a,{heading:"menu.cobranza",match:t}),Object(y.jsx)(O.b,{className:"mb-5"})]})}),Object(y.jsx)(i.a,{children:Object(y.jsx)(O.a,{xxs:"12",className:"mb-4",children:Object(y.jsx)("p",{children:Object(y.jsx)(h.a,{id:"menu.cobranza"})})})}),Object(y.jsx)(O.a,{xxs:"12",children:Object(y.jsx)(l.a,{className:"mb-4",children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(b.a,{children:Object(y.jsx)(h.a,{id:"table.bootstrap-basic"})}),Object(y.jsxs)(o.a,{children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"ID"}),Object(y.jsx)("th",{children:"Cliente"}),Object(y.jsx)("th",{children:"Monto"}),Object(y.jsx)("th",{children:"Moneda"}),Object(y.jsx)("th",{style:{width:"7%"},children:"Estado"}),Object(y.jsx)("th",{children:"Fecha de Expiracion"}),Object(y.jsx)("th",{children:"Fecha de Pago"}),Object(y.jsx)("th",{children:"Ver QR"}),Object(y.jsx)("th",{children:"Verificar"}),Object(y.jsx)("th",{children:"Cancelar"})]})}),Object(y.jsxs)("tbody",{children:[0===p.length?Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:"10",align:"center",children:"Cargando ..."})}):void 0,p.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsxs)("th",{scope:"row",children:[" ",e.id," "]}),Object(y.jsxs)("td",{children:[" ",e.userName," "]}),Object(y.jsxs)("td",{children:[" ",e.amount," "]}),Object(y.jsxs)("td",{children:[" ",e.currency," "]}),0===parseInt(e.status,10)?Object(y.jsx)("td",{children:" sin pagar "}):Object(y.jsxs)("td",{style:{background:"#5abd71",color:"white",textAlign:"center",fontWeight:"bold"},children:[" ",Object(y.jsx)("span",{style:{background:"#5abd71",color:"white"},children:"pagado"})," "]}),Object(y.jsxs)("td",{style:{textAlign:"center"},children:[" ",new Date(e.expirationdate).toLocaleDateString()," "]}),0===parseInt(e.status,10)?Object(y.jsx)("td",{style:{textAlign:"center"},children:" - "}):Object(y.jsxs)("td",{style:{fontWeight:"",textAlign:"center"},children:[" ",Object(y.jsx)("span",{children:"25/10/2023 15:30"})," "]}),0===parseInt(e.status,10)?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("td",{children:Object(y.jsx)(x.a,{className:"px-3 py-1",onClick:function(){return function(e){F(e),S(!0),console.log("la tupla es: "),console.log(e)}(e)},children:"Ver QR"})}),Object(y.jsx)("td",{children:Object(y.jsx)(x.a,{className:"px-3 py-1",children:"Verificar"})}),Object(y.jsx)("td",{children:Object(y.jsx)(x.a,{className:"px-3 py-1",children:"Cancelar"})})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("td",{}),Object(y.jsx)("td",{}),Object(y.jsx)("td",{})]})]},e.id)})).slice(J,V)]})]}),Object(y.jsx)(P,{productsPerPage:L,curentPage:Q,setCurrentPage:z,totolProduct:I}),C&&Object(y.jsx)(k,{currentTupla:w,isOpen:C,closeModal:function(){return S(!1)}})]})})})]})}}}]);
//# sourceMappingURL=start.3a40fd2b.chunk.js.map