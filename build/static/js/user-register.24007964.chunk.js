(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[9],{115:function(e,n,t){"use strict";var a=t(3),s=(t(6),t(141)),i=t(127),r=t(20);n.a=Object(i.c)((function(e){return Object(r.jsx)(s.a,Object(a.a)({},e))}),{withRef:!1})},117:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));var a=t(3),s=(t(6),t(134)),i=t(20),r=function(e){return Object(i.jsx)(s.a,Object(a.a)(Object(a.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},o=function(e){var n=e.className;return Object(i.jsx)("div",{className:"separator ".concat(n)})}},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return s})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"l",(function(){return c})),t.d(n,"c",(function(){return l})),t.d(n,"f",(function(){return d.a})),t.d(n,"j",(function(){return d.h})),t.d(n,"i",(function(){return d.g})),t.d(n,"h",(function(){return d.d})),t.d(n,"k",(function(){return d.k})),t.d(n,"g",(function(){return b.a}));var a=t(5),s=function(e){return{type:a.m,payload:e}},i=function(e){return{type:a.l,payload:e}},r=function(e,n){var t=!n.indexOf(e)>-1?"".concat(n," ").concat(e):n;return{type:a.o,payload:t}},o=function(e){var n=e?e.split(" ").filter((function(e){return""!==e&&"sub-show-temporary"!==e})):"",t="";return t=n.includes("main-show-temporary")?n.filter((function(e){return"main-show-temporary"!==e})).join(" "):"".concat(n.join(" ")," main-show-temporary"),{type:a.n,payload:{containerClassnames:t,menuClickCount:0}}},c=function(e,n,t){var s=n?n.split(" ").filter((function(e){return""!==e})):"",i="";return t||(!s.includes("menu-default")||e%4!==0&&e%4!==3||(e=1),s.includes("menu-sub-hidden")&&e%4===2&&(e=0),!s.includes("menu-hidden")||e%4!==2&&e%4!==3||(e=0)),e%4===0?(s.includes("menu-default")&&s.includes("menu-sub-hidden")?i="menu-default menu-sub-hidden":s.includes("menu-default")?i="menu-default":s.includes("menu-sub-hidden")?i="menu-sub-hidden":s.includes("menu-hidden")&&(i="menu-hidden"),e=0):e%4===1?s.includes("menu-default")&&s.includes("menu-sub-hidden")?i="menu-default menu-sub-hidden main-hidden sub-hidden":s.includes("menu-default")?i="menu-default sub-hidden":s.includes("menu-sub-hidden")?i="menu-sub-hidden main-hidden sub-hidden":s.includes("menu-hidden")&&(i="menu-hidden main-show-temporary"):e%4===2?s.includes("menu-default")&&s.includes("menu-sub-hidden")?i="menu-default menu-sub-hidden sub-hidden":s.includes("menu-default")?i="menu-default main-hidden sub-hidden":s.includes("menu-sub-hidden")?i="menu-sub-hidden sub-hidden":s.includes("menu-hidden")&&(i="menu-hidden main-show-temporary sub-show-temporary"):e%4===3&&(s.includes("menu-default")&&s.includes("menu-sub-hidden")?i="menu-default menu-sub-hidden sub-show-temporary":s.includes("menu-default")?i="menu-default sub-hidden":s.includes("menu-sub-hidden")?i="menu-sub-hidden sub-show-temporary":s.includes("menu-hidden")&&(i="menu-hidden main-show-temporary")),s.includes("menu-mobile")&&(i+=" menu-mobile"),{type:a.p,payload:{containerClassnames:i,menuClickCount:e}}},u=t(15),l=function(e){return Object(u.g)(e),{type:a.a,payload:e}},d=t(14),b=t(26)},132:function(e,n,t){"use strict";var a=t(12),s=t(17),i=t(116),r=t(113),o=t(6),c=t.n(o),u=t(46),l=t.n(u),d=t(110),b=t.n(d),f=t(111),m={active:l.a.bool,"aria-label":l.a.string,block:l.a.bool,color:l.a.string,disabled:l.a.bool,outline:l.a.bool,tag:f.q,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),onClick:l.a.func,size:l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,close:l.a.bool},p=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind(Object(i.a)(t)),t}Object(r.a)(n,e);var t=n.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,n=e.active,t=e["aria-label"],i=e.block,r=e.className,o=e.close,u=e.cssModule,l=e.color,d=e.outline,m=e.size,p=e.tag,h=e.innerRef,j=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof j.children&&(j.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(d?"-outline":"")+"-"+l,O=Object(f.m)(b()(r,{close:o},o||"btn",o||g,!!m&&"btn-"+m,!!i&&"btn-block",{active:n,disabled:this.props.disabled}),u);j.href&&"button"===p&&(p="a");var v=o?"Close":null;return c.a.createElement(p,Object(a.a)({type:"button"===p&&j.onClick?"button":void 0},j,{className:O,ref:h,onClick:this.onClick,"aria-label":t||v}))},n}(c.a.Component);p.propTypes=m,p.defaultProps={color:"secondary",tag:"button"},n.a=p},134:function(e,n,t){"use strict";var a=t(12),s=t(17),i=t(6),r=t.n(i),o=t(46),c=t.n(o),u=t(110),l=t.n(u),d=t(111),b=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),m={tag:d.q,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,n,t){return!0===t||""===t?e?"col":"col-"+n:"auto"===t?e?"col-auto":"col-"+n+"-auto":e?"col-"+t:"col-"+n+"-"+t},j=function(e){var n=e.className,t=e.cssModule,i=e.widths,o=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];i.forEach((function(n,a){var s=e[n];if(delete c[n],s||""===s){var i=!a;if(Object(d.k)(s)){var r,o=i?"-":"-"+n+"-",b=h(i,n,s.size);u.push(Object(d.m)(l()(((r={})[b]=s.size||""===s.size,r["order"+o+s.order]=s.order||0===s.order,r["offset"+o+s.offset]=s.offset||0===s.offset,r)),t))}else{var f=h(i,n,s);u.push(f)}}})),u.length||u.push("col");var b=Object(d.m)(l()(n,u),t);return r.a.createElement(o,Object(a.a)({},c,{className:b}))};j.propTypes=m,j.defaultProps=p,n.a=j},135:function(e,n,t){"use strict";var a=t(12),s=t(17),i=t(6),r=t.n(i),o=t(46),c=t.n(o),u=t(110),l=t.n(u),d=t(111),b=c.a.oneOfType([c.a.number,c.a.string]),f={tag:d.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var n=e.className,t=e.cssModule,i=e.noGutters,o=e.tag,c=e.form,u=e.widths,b=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];u.forEach((function(n,t){var a=e[n];if(delete b[n],a){var s=!t;f.push(s?"row-cols-"+a:"row-cols-"+n+"-"+a)}}));var m=Object(d.m)(l()(n,i?"no-gutters":null,c?"form-row":"row",f),t);return r.a.createElement(o,Object(a.a)({},b,{className:m}))};p.propTypes=f,p.defaultProps=m,n.a=p},136:function(e,n,t){"use strict";var a=t(12),s=t(17),i=t(6),r=t.n(i),o=t(46),c=t.n(o),u=t(110),l=t.n(u),d=t(111),b={tag:d.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var n=e.className,t=e.cssModule,i=e.color,o=e.body,c=e.inverse,u=e.outline,b=e.tag,f=e.innerRef,m=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.m)(l()(n,"card",!!c&&"text-white",!!o&&"card-body",!!i&&(u?"border":"bg")+"-"+i),t);return r.a.createElement(b,Object(a.a)({},m,{className:p,ref:f}))};f.propTypes=b,f.defaultProps={tag:"div"},n.a=f},137:function(e,n,t){"use strict";var a=t(12),s=t(17),i=t(6),r=t.n(i),o=t(46),c=t.n(o),u=t(110),l=t.n(u),d=t(111),b={tag:d.q,className:c.a.string,cssModule:c.a.object},f=function(e){var n=e.className,t=e.cssModule,i=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),c=Object(d.m)(l()(n,"card-title"),t);return r.a.createElement(i,Object(a.a)({},o,{className:c}))};f.propTypes=b,f.defaultProps={tag:"div"},n.a=f},141:function(e,n,t){"use strict";var a=t(2),s=t(6),i=t(127),r=t(119);function o(e){var n=function(){var e=s.useContext(i.a);return Object(r.c)(e),e}(),t=n.formatMessage,a=n.textComponent,o=void 0===a?s.Fragment:a,c=e.id,u=e.description,l=e.defaultMessage,d=e.values,b=e.children,f=e.tagName,m=void 0===f?o:f,p=t({id:c,description:u,defaultMessage:l},d,{ignoreTag:e.ignoreTag});return Array.isArray(p)||(p=[p]),"function"===typeof b?b(p):m?s.createElement(m,null,s.Children.toArray(p)):s.createElement(s.Fragment,null,p)}o.displayName="FormattedMessage";var c=s.memo(o,(function(e,n){var t=e.values,s=Object(a.f)(e,["values"]),i=n.values,o=Object(a.f)(n,["values"]);return Object(r.d)(i,t)&&Object(r.d)(s,o)}));c.displayName="MemoizedFormattedMessage";n.a=c},269:function(e,n,t){"use strict";t.r(n);var a=t(120),s=t(6),i=t.n(s),r=t(135),o=t(136),c=t(137),u=t(12),l=t(17),d=t(116),b=t(113),f=t(46),m=t.n(f),p=t(110),h=t.n(p),j=t(111),g={children:m.a.node,inline:m.a.bool,tag:j.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},O=function(e){function n(n){var t;return(t=e.call(this,n)||this).getRef=t.getRef.bind(Object(d.a)(t)),t.submit=t.submit.bind(Object(d.a)(t)),t}Object(b.a)(n,e);var t=n.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,n=e.className,t=e.cssModule,a=e.inline,s=e.tag,r=e.innerRef,o=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),c=Object(j.m)(h()(n,!!a&&"form-inline"),t);return i.a.createElement(s,Object(u.a)({},o,{ref:r,className:c}))},n}(s.Component);O.propTypes=g,O.defaultProps={tag:"form"};var v=O,y=t(235),x=t(236),N={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:j.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},w=function(e){function n(n){var t;return(t=e.call(this,n)||this).getRef=t.getRef.bind(Object(d.a)(t)),t.focus=t.focus.bind(Object(d.a)(t)),t}Object(b.a)(n,e);var t=n.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,n=e.className,t=e.cssModule,a=e.type,s=e.bsSize,r=e.valid,o=e.invalid,c=e.tag,d=e.addon,b=e.plaintext,f=e.innerRef,m=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),p=["radio","checkbox"].indexOf(a)>-1,g=new RegExp("\\D","g"),O=c||("select"===a||"textarea"===a?a:"input"),v="form-control";b?(v+="-plaintext",O=c||"input"):"file"===a?v+="-file":"range"===a?v+="-range":p&&(v=d?null:"form-check-input"),m.size&&g.test(m.size)&&(Object(j.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=m.size,delete m.size);var y=Object(j.m)(h()(n,o&&"is-invalid",r&&"is-valid",!!s&&"form-control-"+s,v),t);return("input"===O||c&&"function"===typeof c)&&(m.type=a),m.children&&!b&&"select"!==a&&"string"===typeof O&&"select"!==O&&(Object(j.s)('Input with a type of "'+a+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),i.a.createElement(O,Object(u.a)({},m,{ref:f,className:y,"aria-invalid":o}))},n}(i.a.Component);w.propTypes=N,w.defaultProps={type:"text"};var M=w,C=t(132),R=t(114),k=t(31),z=t(121),T=t(115),E=t(117),P=t(9),S=t(20);n.default=Object(k.b)((function(){}),{registerUserAction:z.j})((function(e){var n=e.history,t=Object(s.useState)("demo@gogo.com"),i=Object(a.a)(t,1)[0],u=Object(s.useState)("gogo123"),l=Object(a.a)(u,1)[0],d=Object(s.useState)("Sarah Kortney"),b=Object(a.a)(d,1)[0];return Object(S.jsx)(r.a,{className:"h-100",children:Object(S.jsx)(E.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(S.jsxs)(o.a,{className:"auth-card",children:[Object(S.jsxs)("div",{className:"position-relative image-side ",children:[Object(S.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(S.jsxs)("p",{className:"white mb-0",children:["Please use this form to register. ",Object(S.jsx)("br",{}),"If you are a member, please"," ",Object(S.jsx)(R.b,{to:"/user/login",className:"white",children:"login"}),"."]})]}),Object(S.jsxs)("div",{className:"form-side",children:[Object(S.jsx)(R.b,{to:"/",className:"white",children:Object(S.jsx)("span",{className:"logo-single"})}),Object(S.jsx)(c.a,{className:"mb-4",children:Object(S.jsx)(T.a,{id:"user.register"})}),Object(S.jsxs)(v,{children:[Object(S.jsxs)(y.a,{className:"form-group has-float-label  mb-4",children:[Object(S.jsx)(x.a,{children:Object(S.jsx)(T.a,{id:"user.fullname"})}),Object(S.jsx)(M,{type:"name",defaultValue:b})]}),Object(S.jsxs)(y.a,{className:"form-group has-float-label  mb-4",children:[Object(S.jsx)(x.a,{children:Object(S.jsx)(T.a,{id:"user.email"})}),Object(S.jsx)(M,{type:"email",defaultValue:i})]}),Object(S.jsxs)(y.a,{className:"form-group has-float-label  mb-4",children:[Object(S.jsx)(x.a,{children:Object(S.jsx)(T.a,{id:"user.password",defaultValue:l})}),Object(S.jsx)(M,{type:"password"})]}),Object(S.jsx)("div",{className:"d-flex justify-content-end align-items-center",children:Object(S.jsx)(C.a,{color:"primary",className:"btn-shadow",size:"lg",onClick:function(){""!==i&&""!==l&&n.push(P.b)},children:Object(S.jsx)(T.a,{id:"user.register-button"})})})]})]})]})})})}))}}]);
//# sourceMappingURL=user-register.24007964.chunk.js.map