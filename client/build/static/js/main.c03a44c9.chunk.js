(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,l,u=n(1),d=n(36),b=n.n(d),j=n(14),p=(n(73),n(5)),O=n(26),m=(n(74),n(2)),f=Object(j.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl,i=e.match;return Object(m.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object(m.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(m.jsx)("span",{className:"subtitle",children:"Shop Now"})]})]})})),h=(n(83),n(12)),x=n(11),v=Object(x.a)([function(e){return e.directory}],(function(e){return e.sections})),g=Object(x.b)({sections:v}),S=Object(h.b)(g)((function(e){var t=e.sections;return Object(m.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(O.a)(e,["id"]);return Object(m.jsx)(f,Object(p.a)({},n),t)}))})})),E=n(19),I=n(20),_=I.b.div(r||(r=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n"]))),w=function(){return Object(m.jsx)(_,{children:Object(m.jsx)(S,{})})},y=n(16),N=function(e){return e.shop},C=Object(x.a)([N],(function(e){return e.collections})),T=Object(x.a)([C],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),k=Object(x.a)([N],(function(e){return e.isFetching})),U=Object(x.a)([N],(function(e){return!!e.collections})),R=I.b.div(c||(c=Object(E.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),A=I.b.div(a||(a=Object(E.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),L=function(e){return function(t){var n=t.isLoading,r=Object(O.a)(t,["isLoading"]);return n?Object(m.jsx)(R,{children:Object(m.jsx)(A,{})}):Object(m.jsx)(e,Object(p.a)({},r))}},G=(n(49),Object(I.a)(i||(i=Object(E.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"])))),P=Object(I.a)(s||(s=Object(E.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),F=Object(I.a)(o||(o=Object(E.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),H=I.b.button(l||(l=Object(E.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ',";\n"])),(function(e){return e.isGoogleSignIn?F:e.inverted?P:G})),M=function(e){var t=e.children,n=Object(O.a)(e,["children"]);return Object(m.jsx)(H,Object(p.a)(Object(p.a)({},n),{},{children:t}))},D=(n(87),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}),q=function(){return{type:D.TOGGLE_CART_HIDDEN}},z=function(e){return{type:D.ADD_ITEM,payload:e}},B=Object(h.b)(null,(function(e){return{addItem:function(t){return e(z(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,a=t.imageUrl;return Object(m.jsxs)("div",{className:"collection-item",children:[Object(m.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(m.jsxs)("div",{className:"collection-footer",children:[Object(m.jsx)("span",{className:"name",children:r}),Object(m.jsxs)("span",{className:"price",children:["$",c]})]}),Object(m.jsx)(M,{onClick:function(){return n(t)},inverted:!0,children:"Add to Cart"})]})})),V=Object(j.g)((function(e){var t=e.title,n=e.items,r=e.history,c=e.match;return Object(m.jsxs)("div",{className:"collection-preview",children:[Object(m.jsx)("div",{className:"title",onClick:function(){return r.push("".concat(c.url,"/").concat(t.toLowerCase()))},children:t}),Object(m.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(m.jsx)(B,{item:e},e.id)}))})]})})),K=(n(88),Object(x.b)({collections:T})),W=Object(h.b)(K)((function(e){var t=e.collections;return Object(m.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(O.a)(e,["id"]);return Object(m.jsx)(V,Object(p.a)({},n),t)}))})})),X=Object(x.b)({isLoading:k}),Q=Object(y.d)(Object(h.b)(X),L)(W),Y=(n(89),Object(h.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(x.a)([C],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return Object(m.jsxs)("div",{className:"collection-page",children:[Object(m.jsx)("h2",{className:"title",children:n}),Object(m.jsx)("div",{className:"items",children:r.map((function(e){return Object(m.jsx)(B,{item:e},e.id)}))})]})}))),$=Object(x.b)({isLoading:function(e){return!U(e)}}),J=Object(y.d)(Object(h.b)($),L)(Y),Z={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},ee=n(4),te=n.n(ee),ne=n(30),re=n(34),ce=(n(125),n(91),function(){var e=Object(ne.a)(te.a.mark((function e(t,n){var r,c,a,i;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=se.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(p.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),ae=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})};re.a.initializeApp({apiKey:"AIzaSyBTE2ztB4LYRPIeDg44mBXbOdGGGvILKjY",authDomain:"crwn-db-deba6.firebaseapp.com",projectId:"crwn-db-deba6",storageBucket:"crwn-db-deba6.appspot.com",messagingSenderId:"313144925409",appId:"1:313144925409:web:edbd5c8a9e4c024dabeba0",measurementId:"G-KQ5XE7SH70"});var ie=re.a.auth(),se=re.a.firestore(),oe=new re.a.auth.GoogleAuthProvider;oe.setCustomParameters({prompt:"select_account"});re.a;var le,ue,de=function(){return{type:Z.FETCH_COLLECTIONS_START}},be=function(e){return{type:Z.FETCH_COLLECTIONS_SUCCESS,payload:e}},je=function(e){return{type:Z.FETCH_COLLECTIONS_FAILURE,payload:e}},pe=Object(h.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(de())}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(u.useEffect)((function(){t()}),[t]),Object(m.jsxs)("div",{className:"shop-page",children:[Object(m.jsx)(j.b,{exact:!0,path:"".concat(n.path),component:Q}),Object(m.jsx)(j.b,{path:"".concat(n.path,"/:collectionId"),component:J})]})})),Oe=(n(93),n(33)),me=n(40),fe=(n(94),n(95),function(e){var t=e.handleChange,n=e.label,r=Object(O.a)(e,["handleChange","label"]);return Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)("input",Object(p.a)({className:"form-input",onChange:t},r)),n?Object(m.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label shrink"),children:n}):null]})}),he={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},xe=function(e){return{type:he.SIGN_IN_FAILURE,payload:e}},ve=function(e){var t=e.user,n=e.additionalData;return{type:he.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},ge=Object(h.b)(null,(function(e){return{googleSignInStart:function(){return e({type:he.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:he.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,r=Object(u.useState)({email:"",password:""}),c=Object(me.a)(r,2),a=c[0],i=c[1],s=a.email,o=a.password,l=function(){var e=Object(ne.a)(te.a.mark((function e(n){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(s,o);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.value,r=t.name;i(Object(p.a)(Object(p.a)({},a),{},Object(Oe.a)({},r,n)))};return Object(m.jsxs)("div",{className:"sign-in",children:[Object(m.jsx)("h2",{children:"I already have an account!"}),Object(m.jsx)("span",{children:"Sign in with your email and password"}),Object(m.jsx)("span",{children:"asdasdasfasfas@abv.bg"}),Object(m.jsxs)("form",{onSubmit:l,children:[Object(m.jsx)(fe,{name:"email",type:"email",value:s,handleChange:d,label:"email",required:!0}),Object(m.jsx)(fe,{name:"password",type:"password",value:o,handleChange:d,label:"password",required:!0}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)(M,{type:"submit",children:" Sign in "}),Object(m.jsx)(M,{type:"button",onClick:n,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})})),Se=(n(96),Object(h.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:he.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(u.useState)({displayName:"",email:"",password:"",confirmPassword:""}),r=Object(me.a)(n,2),c=r[0],a=r[1],i=c.displayName,s=c.email,o=c.password,l=c.confirmPassword,d=function(){var e=Object(ne.a)(te.a.mark((function e(n){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o===l){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:t({displayName:i,email:s,password:o});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,r=t.value;a(Object(p.a)(Object(p.a)({},c),{},Object(Oe.a)({},n,r)))};return Object(m.jsxs)("div",{className:"sign-up",children:[Object(m.jsx)("h2",{className:"title",children:"I do not have an account!"}),Object(m.jsx)("span",{children:"Sign up with your email and password"}),Object(m.jsxs)("form",{className:"sign-up-form",onSubmit:d,children:[Object(m.jsx)(fe,{type:"text",name:"displayName",value:i,onChange:b,label:"Display Name",required:!0}),Object(m.jsx)(fe,{type:"email",name:"email",value:s,onChange:b,label:"Email",required:!0}),Object(m.jsx)(fe,{type:"password",name:"password",value:o,onChange:b,label:"Password",required:!0}),Object(m.jsx)(fe,{type:"password",name:"confirmPassword",value:l,onChange:b,label:"Confirm Password",required:!0}),Object(m.jsx)(M,{type:"submit",children:"SIGN UP"})]})]})}))),Ee=function(){return Object(m.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(m.jsx)(ge,{}),Object(m.jsx)(Se,{})]})},Ie=(n(97),n(98),Object(h.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:D.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(z(t))},removeItem:function(t){return e(function(e){return{type:D.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,c=e.removeItem,a=t.name,i=t.imageUrl,s=t.price,o=t.quantity;return Object(m.jsxs)("div",{className:"checkout-item",children:[Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)("img",{src:i,alt:"item"})}),Object(m.jsx)("span",{className:"name",children:a}),Object(m.jsxs)("span",{className:"quantity",children:[Object(m.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276e"}),Object(m.jsx)("span",{className:"value",children:o}),Object(m.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(m.jsxs)("span",{className:"price",children:["$",s]}),Object(m.jsx)("div",{className:"remove",onClick:function(){return n(t)},children:"\u2715"})]})}))),_e=function(e){return e.cart},we=Object(x.a)([_e],(function(e){return e.cartItems})),ye=Object(x.a)([_e],(function(e){return e.hidden})),Ne=Object(x.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ce=Object(x.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Te=n(63),ke=n.n(Te),Ue=n.p+"static/media/crown.3a4e2b15.svg",Re=n(64),Ae=n.n(Re),Le=function(e){var t=e.price,n=100*t;return Object(m.jsx)(ke.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:Ue,description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){Ae()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Payment successful!")})).catch((function(e){console.log("Payment error: ",JSON.parse(e)),alert("There was an issue with your payment. Please make sure you use the provided credit card!")}))},stripeKey:"pk_test_51IVAh0EiRmpMwH9NtU7QwLuKoVyODCTU6UBrYECd0x1F3ZBRZ8pGETQuFX7qeAl6Pbf2IlmHbXtMdMhasvl6Ba0z00kfzHlv4P"})},Ge=Object(x.b)({cartItems:we,total:Ce}),Pe=Object(h.b)(Ge)((function(e){var t=e.cartItems,n=e.total;return Object(m.jsxs)("div",{className:"checkout-page",children:[Object(m.jsxs)("div",{className:"checkout-header",children:[Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Product"})}),Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Description"})}),Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Quantity"})}),Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Price"})}),Object(m.jsx)("div",{className:"header-block",children:Object(m.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(m.jsx)(Ie,{cartItem:e},e.id)})),Object(m.jsxs)("div",{className:"total",children:[" TOTAL: $",n]}),Object(m.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit for payments* ",Object(m.jsx)("br",{}),"4242 4242 4242 4242 - Exp: any future date - CVC: any 3 digits"]}),Object(m.jsx)(Le,{price:n})]})}));function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function He(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Me(e,t){var n=e.title,r=e.titleId,c=He(e,["title","titleId"]);return u.createElement("svg",Fe({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),void 0===n?u.createElement("title",{id:r},"Group"):n?u.createElement("title",{id:r},n):null,le||(le=u.createElement("desc",null,"Created with Sketch.")),ue||(ue=u.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},u.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},u.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},u.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),u.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),u.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),u.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),u.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var De,qe,ze,Be,Ve,Ke,We,Xe,Qe,Ye,$e,Je,Ze,et,tt,nt=u.forwardRef(Me);n.p,n(116);function rt(){return(rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ct(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function at(e,t){var n=e.title,r=e.titleId,c=ct(e,["title","titleId"]);return u.createElement("svg",rt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?u.createElement("title",{id:r},n):null,u.createElement("g",null,u.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),u.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),u.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),u.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),u.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),De||(De=u.createElement("g",null)),qe||(qe=u.createElement("g",null)),ze||(ze=u.createElement("g",null)),Be||(Be=u.createElement("g",null)),Ve||(Ve=u.createElement("g",null)),Ke||(Ke=u.createElement("g",null)),We||(We=u.createElement("g",null)),Xe||(Xe=u.createElement("g",null)),Qe||(Qe=u.createElement("g",null)),Ye||(Ye=u.createElement("g",null)),$e||($e=u.createElement("g",null)),Je||(Je=u.createElement("g",null)),Ze||(Ze=u.createElement("g",null)),et||(et=u.createElement("g",null)),tt||(tt=u.createElement("g",null)))}var it,st,ot,lt,ut=u.forwardRef(at),dt=(n.p,Object(x.b)({itemCount:Ne})),bt=Object(h.b)(dt,(function(e){return{toggleCartHidden:function(){return e(q())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(m.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(m.jsx)(ut,{className:"shopping-icon"}),Object(m.jsx)("span",{className:"item-count",children:n})]})})),jt=(n(117),n(118),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(m.jsxs)("div",{className:"cart-item",children:[Object(m.jsx)("img",{src:n,alt:"item"}),Object(m.jsxs)("div",{className:"item-details",children:[Object(m.jsx)("span",{className:"name",children:c}),Object(m.jsxs)("span",{className:"price",children:[a," x $",r]})]})]})}),pt=Object(x.b)({cartItems:we}),Ot=Object(j.g)(Object(h.b)(pt)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(m.jsxs)("div",{className:"cart-dropdown",children:[Object(m.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(m.jsx)(jt,{item:e},e.id)})):Object(m.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(m.jsx)(M,{onClick:function(){n.push("/checkout"),r(q())},children:"Go To Checkout"})]})}))),mt=Object(x.a)([function(e){return e.user}],(function(e){return e.currentUser})),ft=n(27),ht=I.b.div(it||(it=Object(E.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]))),xt=Object(I.b)(ft.b)(st||(st=Object(E.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]))),vt=I.b.div(ot||(ot=Object(E.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),gt=Object(I.b)(ft.b)(lt||(lt=Object(E.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),St=Object(x.b)({currentUser:mt,hidden:ye}),Et=Object(h.b)(St,(function(e){return{signOutStart:function(){return e({type:he.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return Object(m.jsxs)(ht,{children:[Object(m.jsx)(xt,{to:"/",children:Object(m.jsx)(nt,{})}),Object(m.jsxs)(vt,{children:[Object(m.jsx)(gt,{to:"/shop",children:"SHOP"}),Object(m.jsx)(gt,{to:"/shop",children:"CONTACT"}),t?Object(m.jsx)(gt,{as:"div",onClick:r,children:"SIGN OUT"}):Object(m.jsx)(gt,{to:"/signin",children:"SIGN IN"}),Object(m.jsx)(bt,{})]}),n?null:Object(m.jsx)(Ot,{})]})})),It=(n(119),Object(x.b)({currentUser:mt})),_t=Object(h.b)(It,(function(e){return{checkUserSession:function(){return e({type:he.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(u.useEffect)((function(){t()}),[t]),Object(m.jsxs)("div",{children:[Object(m.jsx)(Et,{}),Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",component:w}),Object(m.jsx)(j.b,{path:"/shop",component:pe}),Object(m.jsx)(j.b,{exact:!0,path:"/checkout",component:Pe}),Object(m.jsx)(j.b,{exact:!0,path:"/signin",render:function(){return n?Object(m.jsx)(j.a,{to:"/"}):Object(m.jsx)(Ee,{})}})]})]})})),wt=(n(120),n(65)),yt=(n(121),n(39)),Nt=n(68),Ct=n(66),Tt=n.n(Ct),kt={currentUser:null,error:null},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.SIGN_IN_SUCCESS:return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload,error:null});case he.SIGN_OUT_SUCCESS:return Object(p.a)(Object(p.a)({},e),{},{currentUser:null,error:null});case he.SIGN_IN_FAILURE:case he.SIGN_OUT_FAILURE:case he.SIGN_UP_FAILURE:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});default:return e}},Rt=n(67),At=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Rt.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},Lt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))},Gt={hidden:!0,cartItems:[]},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.TOGGLE_CART_HIDDEN:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case D.ADD_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:At(e.cartItems,t.payload)});case D.REMOVE_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:Lt(e.cartItems,t.payload)});case D.CLEAR_ITEM_FROM_CART:return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case D.CLEAR_CART:return Object(p.a)(Object(p.a)({},e),{},{cartItems:[]});default:return e}},Ft={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Mt={collections:null,isFetching:!1,errorMessage:void 0},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.FETCH_COLLECTIONS_START:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!0});case Z.FETCH_COLLECTIONS_SUCCESS:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,collections:t.payload});case Z.FETCH_COLLECTIONS_FAILURE:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},qt={key:"root",storage:Tt.a,whitelist:["cart"]},zt=Object(y.c)({user:Ut,cart:Pt,directory:Ht,shop:Dt}),Bt=Object(yt.a)(qt,zt),Vt=n(8),Kt=te.a.mark(Qt),Wt=te.a.mark(Yt),Xt=te.a.mark($t);function Qt(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.c)({type:D.CLEAR_CART});case 2:case"end":return e.stop()}}),Kt)}function Yt(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(he.SIGN_OUT_SUCCESS,Qt);case 2:case"end":return e.stop()}}),Wt)}function $t(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.a)([Object(Vt.b)(Yt)]);case 2:case"end":return e.stop()}}),Xt)}var Jt=te.a.mark(tn),Zt=te.a.mark(nn),en=te.a.mark(rn);function tn(){var e,t,n;return te.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,console.log("im fired");case 2:return r.prev=2,e=se.collection("collections"),r.next=6,e.get();case 6:return t=r.sent,r.next=9,Object(Vt.b)(ae,t);case 9:return n=r.sent,r.next=12,Object(Vt.c)(be(n));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(2),r.next=18,Object(Vt.c)(je(r.t0.message));case 18:case"end":return r.stop()}}),Jt,null,[[2,14]])}function nn(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(Z.FETCH_COLLECTIONS_START,tn);case 2:case"end":return e.stop()}}),Zt)}function rn(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.a)([Object(Vt.b)(nn)]);case 2:case"end":return e.stop()}}),en)}var cn=te.a.mark(xn),an=te.a.mark(vn),sn=te.a.mark(gn),on=te.a.mark(Sn),ln=te.a.mark(En),un=te.a.mark(In),dn=te.a.mark(_n),bn=te.a.mark(wn),jn=te.a.mark(yn),pn=te.a.mark(Nn),On=te.a.mark(Cn),mn=te.a.mark(Tn),fn=te.a.mark(kn),hn=te.a.mark(Un);function xn(e,t){var n,r;return te.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(Vt.b)(ce,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(Vt.c)((a=Object(p.a)({id:r.id},r.data()),{type:he.SIGN_IN_SUCCESS,payload:a}));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(Vt.c)(xe(c.t0));case 15:case"end":return c.stop()}var a}),cn,null,[[0,11]])}function vn(){var e,t;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ie.signInWithPopup(oe);case 3:return e=n.sent,t=e.user,n.next=7,xn(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Vt.c)(xe(n.t0));case 13:case"end":return n.stop()}}),an,null,[[0,9]])}function gn(e){var t,n,r,c,a;return te.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,ie.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,xn(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(Vt.c)(xe(i.t0));case 14:case"end":return i.stop()}}),sn,null,[[1,10]])}function Sn(){var e;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=ie.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,xn(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Vt.c)(xe(t.t0));case 14:case"end":return t.stop()}}),on,null,[[0,10]])}function En(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.signOut();case 3:return e.next=5,Object(Vt.c)({type:he.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Vt.c)((t=e.t0,{type:he.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),ln,null,[[0,7]])}function In(e){var t,n,r,c,a,i;return te.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,s.prev=1,s.next=4,ie.createUserWithEmailAndPassword(n,r);case 4:return a=s.sent,i=a.user,s.next=8,Object(Vt.c)(ve({user:i,additionalData:{displayName:c}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(Vt.c)((o=s.t0,{type:he.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),un,null,[[1,10]])}function _n(e){var t,n,r;return te.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,xn(n,r);case 3:case"end":return c.stop()}}),dn)}function wn(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(he.GOOGLE_SIGN_IN_START,vn);case 2:case"end":return e.stop()}}),bn)}function yn(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(he.EMAIL_SIGN_IN_START,gn);case 2:case"end":return e.stop()}}),jn)}function Nn(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(he.CHECK_USER_SESSION,Sn);case 2:case"end":return e.stop()}}),pn)}function Cn(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(he.SIGN_OUT_START,En);case 2:case"end":return e.stop()}}),On)}function Tn(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(he.SIGN_UP_START,In);case 2:case"end":return e.stop()}}),mn)}function kn(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.d)(he.SIGN_UP_SUCCESS,_n);case 2:case"end":return e.stop()}}),fn)}function Un(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.a)([Object(Vt.b)(wn),Object(Vt.b)(yn),Object(Vt.b)(Nn),Object(Vt.b)(Cn),Object(Vt.b)(Tn),Object(Vt.b)(kn)]);case 2:case"end":return e.stop()}}),hn)}var Rn=te.a.mark(An);function An(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vt.a)([Object(Vt.b)(rn),Object(Vt.b)(Un),Object(Vt.b)($t)]);case 2:case"end":return e.stop()}}),Rn)}var Ln=Object(Nt.a)(),Gn=[Ln];var Pn=Object(y.e)(Bt,y.a.apply(void 0,Gn));Ln.run(An);var Fn=Object(yt.b)(Pn);b.a.render(Object(m.jsx)(h.a,{store:Pn,children:Object(m.jsx)(ft.a,{children:Object(m.jsx)(wt.a,{persistor:Fn,children:Object(m.jsx)(_t,{})})})}),document.getElementById("root"))},49:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},83:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.c03a44c9.chunk.js.map