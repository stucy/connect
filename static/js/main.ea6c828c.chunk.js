(this.webpackJsonpconnect=this.webpackJsonpconnect||[]).push([[0],{25:function(e,t,c){},38:function(e,t,c){},51:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(39),r=c.n(a),i=(c(51),c(5)),o=c(14),l=c.n(o),j=c(17),d=c(3),u=c(15),b=c.n(u),m=c(1),h=s.a.createContext();function O(){return Object(n.useContext)(h)}var x=function(e){var t,c=e.children,s=Object(n.useState)(null),a=Object(d.a)(s,2),r=a[0],o=a[1],u=Object(i.g)();Object(n.useEffect)((function(){var e=localStorage.getItem("user");o(JSON.parse(e))}),[]);var O=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("logout context function"),e.prev=1,e.next=4,b.a.post("/logout");case 4:localStorage.clear(),o(null),u.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),x={currentUser:r,setCurrentUser:o,Signup:function(e){return b.a.post("http://localhost:5000/signup",e)},Login:function(e,t){return b.a.post("http://localhost:5000/login",{email:e,password:t})},Logout:O},g=(null===r||void 0===r||null===(t=r.settings)||void 0===t?void 0:t.darkMode)?"darkTheme":"lightTheme";return r||(g="darkTheme"),Object(m.jsx)(h.Provider,{value:x,children:Object(m.jsx)("div",{className:g,children:c})})},g=c(4),p=c(13),f=function(e){var t=e.passRef,c=e.text,s=e.error,a=e.name,r=e.change,i=Object(n.useState)(!1),o=Object(d.a)(i,2),l=o[0],j=o[1];return Object(m.jsxs)("div",{className:"input__container",children:[Object(m.jsx)("input",{className:s?"error":"",type:l?"text":"password",ref:t,placeholder:c,name:a,onChange:r}),l?Object(m.jsx)(p.c,{className:"pass-icon",onClick:function(){return j(!1)}}):Object(m.jsx)(p.b,{className:"pass-icon",onClick:function(){return j(!0)}})]})},v=(c(25),c.p+"connect/static/media/logo.64d15edf.svg"),N=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(d.a)(a,2),o=r[0],u=r[1],b=O(),h=(b.Login,b.setCurrentUser),x=b.currentUser,p=Object(i.g)(),N=Object(n.useRef)(),w=Object(n.useRef)(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u(!0),N.current.value,w.current.value;try{localStorage.setItem("user",JSON.stringify('{"id":"604b84a03523674a98225fe8","username":"test","friends":{"accepted":[],"pending":[],"blocked":[]},"settings":{"darkMode":true,"activeStatus":true,"notifications":true},"avatar":"test-1615562045917.png"}')),h('{"id":"604b84a03523674a98225fe8","username":"test","friends":{"accepted":[],"pending":[],"blocked":[]},"settings":{"darkMode":true,"activeStatus":true,"notifications":true},"avatar":"test-1615562045917.png"}'),p.push("/friends")}catch(n){c=n.response.data.errors,console.log(c),s(c)}finally{u(!1)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return x?Object(m.jsx)(i.a,{to:"/connect/friends"}):Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsx)("img",{className:"auth-logo",src:v,alt:"Connect logo"}),Object(m.jsx)("h1",{children:"Let's sign you in."}),Object(m.jsxs)("form",{onSubmit:k,onChange:function(e){c&&s("")},autoComplete:"off",children:[Object(m.jsx)("span",{className:"error-message",children:null===c||void 0===c?void 0:c.login}),Object(m.jsx)("input",{type:"text",ref:N,placeholder:"Email"}),Object(m.jsx)(f,{passRef:w,text:"Password"}),Object(m.jsxs)("div",{className:"inverted__link",children:[Object(m.jsxs)("span",{children:["Don't have an account? ",Object(m.jsx)(g.b,{to:"/connect/register",children:"Register!"})]}),Object(m.jsx)("button",{type:"submit",disabled:o,children:"Sign In"})]})]})]})},w=c(8),k=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(d.a)(a,2),o=r[0],u=r[1],b=O(),h=(b.Signup,b.setCurrentUser),x=b.currentUser,p=Object(i.g)(),N=Object(n.useRef)(),k=Object(n.useRef)(),A=Object(n.useRef)(),y=Object(n.useRef)(),C=function(e){var t=e.target.name;s((function(e){return e[t]=null,Object(w.a)({},e)}))},S=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,n,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(!0),c=N.current.value,n=k.current.value,a=A.current.value,r=y.current.value,n===a){e.next=9;break}return u(!1),e.abrupt("return",s({passwordConfirm:"Passwords don't match! "}));case 9:({username:r,email:c,password:n});try{localStorage.setItem("user",JSON.stringify('{"id":"604b84a03523674a98225fe8","username":"test","friends":{"accepted":[],"pending":[],"blocked":[]},"settings":{"darkMode":true,"activeStatus":true,"notifications":true},"avatar":"test-1615562045917.png"}')),h('{"id":"604b84a03523674a98225fe8","username":"test","friends":{"accepted":[],"pending":[],"blocked":[]},"settings":{"darkMode":true,"activeStatus":true,"notifications":true},"avatar":"test-1615562045917.png"}'),p.push("/friends")}catch(o){i=o.response.data.errors,s(i)}finally{u(!1)}case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return x?Object(m.jsx)(i.a,{to:"/connect/friends"}):Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsx)("img",{className:"auth-logo",src:v,alt:"Connect logo"}),Object(m.jsx)("h1",{children:"Make an account"}),Object(m.jsxs)("form",{onSubmit:S,autoComplete:"off",children:[Object(m.jsx)("input",{className:"".concat((null===c||void 0===c?void 0:c.email)?"error":""),type:"email",ref:N,placeholder:"Email",name:"email",onChange:C}),Object(m.jsx)("span",{className:"error-message",children:null===c||void 0===c?void 0:c.email}),Object(m.jsx)("input",{className:"".concat((null===c||void 0===c?void 0:c.username)?"error":""),type:"text",ref:y,placeholder:"Username",name:"username",onChange:C}),Object(m.jsx)("span",{className:"error-message",children:null===c||void 0===c?void 0:c.username}),Object(m.jsx)(f,{error:null===c||void 0===c?void 0:c.password,passRef:k,text:"Password",name:"password",change:C}),Object(m.jsx)("span",{className:"error-message",children:null===c||void 0===c?void 0:c.password}),Object(m.jsx)(f,{error:null===c||void 0===c?void 0:c.passwordConfirm,passRef:A,text:"Confirm Password",name:"passwordConfirm",change:C}),Object(m.jsx)("span",{className:"error-message",children:null===c||void 0===c?void 0:c.passwordConfirm}),Object(m.jsxs)("div",{className:"inverted__link",children:[Object(m.jsxs)("span",{children:["Already have an account? ",Object(m.jsx)(g.b,{to:"/connect/login",children:"Sign in!"})]}),Object(m.jsx)("button",{type:"submit",disabled:o,children:"Register"})]})]})]})},A=(c(78),function(e){return e.children}),y=(c(79),c(41)),C=function(e){var t=e.placeholder,c=e.handle,s=Object(n.useRef)();return Object(m.jsxs)("form",{className:"search-input-container",onSubmit:function(){var e=s.current.value;c(e)},children:[Object(m.jsx)("input",{className:"search-input",type:"text",name:"search",ref:s,placeholder:t}),Object(m.jsx)("button",{className:"search-btn",type:"submit",children:Object(m.jsx)(y.a,{className:"search-icon"})})]})},S=(c(80),function(e){var t=e.name,c=e.message,n=e.time,s=e.img,a=e.id;return Object(m.jsxs)(g.b,{className:"item-container",to:"/connect/chat/".concat(a),children:[Object(m.jsx)("img",{className:"item-avatar",src:s,alt:"Profile Image"}),Object(m.jsxs)("div",{className:"item-content",children:[Object(m.jsx)("h2",{className:"item-name",children:t}),Object(m.jsx)("p",{className:"item-message",children:c})]}),Object(m.jsx)("span",{className:"item-time",children:n})]})}),U="data:image/png;base64,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",R={display:"flex",flexDirection:"column",marginBottom:"7rem"},B=function(){var e=Object(n.useState)([{id:1,name:"Stoyan",lastMessage:"Hello! How are you. Lorem ipsu dolor amet something something",time:"12:23"},{id:2,name:"Ivan",lastMessage:"Yo. How are you man?",time:"22:13"}]),t=Object(d.a)(e,2),c=t[0],s=(t[1],c.map((function(e){return Object(m.jsx)(S,{img:U,name:e.name,message:e.lastMessage,time:e.time,id:e.id},e.id)})));return Object(m.jsx)("div",{style:R,children:s})},I=c(42),Q=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],s=t[1],a=window.matchMedia("(max-width: 780px)"),r=function(){if(a.matches)return s(!1);s(!0)};return Object(n.useEffect)((function(){r(),window.addEventListener("resize",r)}),[]),Object(m.jsx)("div",{className:"chats-container ".concat(c?"active":"hidden"),children:c?Object(m.jsxs)(A,{children:[Object(m.jsx)("h1",{className:"chats-heading",children:"Messages"}),a.matches?Object(m.jsx)("button",{className:"close-drawer",onClick:function(){return s(!1)},children:"X"}):null,Object(m.jsx)(C,{placeholder:"Find conversation",handle:function(){}}),Object(m.jsx)(B,{}),Object(m.jsx)("div",{className:"clearfix"}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:U,alt:"Chat Image"}),Object(m.jsx)("h1",{children:"Stucy"})]}),Object(m.jsx)(g.b,{to:"/connect/profile",children:Object(m.jsx)(p.a,{className:"cog-icon"})})]})]}):Object(m.jsx)(I.a,{className:"burger-icon",onClick:function(){return s(!0)}})})},H=(c(81),function(e){var t=e.children;return Object(m.jsxs)("div",{className:"app-grid",children:[Object(m.jsx)(Q,{}),t]})}),P=(c(38),c(82),c(20)),D=c(28),G=function(e){var t,c=e.name,n=e.img,s=e.id;switch(e.type){case"friend":t=Object(m.jsxs)("div",{className:"friend-container",children:[Object(m.jsxs)("div",{className:"friend-content",children:[Object(m.jsx)("img",{className:"friend-avatar",src:n,alt:"avatar"}),Object(m.jsx)("h1",{className:"friend-name",children:c})]}),Object(m.jsxs)("div",{className:"friend-buttons",children:[Object(m.jsx)(g.b,{to:"/connect/chat/".concat(s),children:Object(m.jsx)(P.a,{className:"friend-icons"})}),Object(m.jsx)(g.b,{to:"/connect/chat/".concat(s),children:Object(m.jsx)(P.b,{className:"friend-icons"})})]})]});break;case"invite":t=Object(m.jsxs)("div",{className:"friend-container",children:[Object(m.jsxs)("div",{className:"friend-content",children:[Object(m.jsx)("img",{className:"friend-avatar",src:n,alt:"avatar"}),Object(m.jsx)("h1",{className:"friend-name",children:c})]}),Object(m.jsxs)("div",{className:"friend-buttons",children:[Object(m.jsx)(D.a,{className:"friend-icons cancel"}),Object(m.jsx)(D.b,{className:"friend-icons accept"})]})]});break;case"user":t=Object(m.jsxs)("div",{className:"friend-container",children:[Object(m.jsxs)("div",{className:"friend-content",children:[Object(m.jsx)("img",{className:"friend-avatar",src:n,alt:"avatar"}),Object(m.jsx)("h1",{className:"friend-name",children:c})]}),Object(m.jsx)("div",{className:"friend-buttons",children:Object(m.jsx)(p.d,{onClick:function(){},className:"friend-icons"})})]})}return t},E=function(){var e=Object(n.useState)([{id:1,name:"Stoyan"}]),t=Object(d.a)(e,2),c=t[0],s=(t[1],Object(n.useState)([{id:1,name:"Ivan"}])),a=Object(d.a)(s,2),r=a[0],i=(a[1],c.map((function(e){return Object(m.jsx)(G,{img:U,name:e.name,id:e.id,type:"invite"},e.id)}))),o=r.map((function(e){return Object(m.jsx)(G,{img:U,name:e.name,id:e.id,type:"friend"},e.id)}));return Object(m.jsx)(H,{children:Object(m.jsxs)("div",{className:"friends-container",children:[Object(m.jsxs)("div",{className:"friends-header-container",children:[Object(m.jsx)("h3",{className:"firends-heading",children:"Friends"}),Object(m.jsxs)(g.b,{to:"/connect/add-friends",className:"add-friend-btn",children:["Add Friend",Object(m.jsx)(p.d,{className:"add-friend-icon"})]})]}),Object(m.jsxs)("div",{className:"friend-items",children:[i,o]})]})})},K=c(7),q=function(){var e=Object(i.g)(),t=Object(n.useState)([{id:1,name:"Boyan"}]),c=Object(d.a)(t,2),s=c[0],a=(c[1],s.map((function(e){return Object(m.jsx)(G,{img:U,name:e.name,id:e.id,type:"user"},e.id)})));return Object(m.jsx)(H,{children:Object(m.jsxs)("div",{className:"friends-container",children:[Object(m.jsxs)("div",{className:"back-icon-container",children:[Object(m.jsx)(K.a,{className:"back-icon",onClick:function(){return e.goBack()}}),Object(m.jsx)("h3",{children:"Add Friends"})]}),Object(m.jsxs)("div",{className:"friend-items",children:[Object(m.jsx)(C,{placeholder:"Find users",handle:function(){}}),a]})]})})},M=(c(83),c.p+"connect/static/media/404.9acf9988.svg"),F=function(){return Object(m.jsxs)("div",{className:"er404-container",children:[Object(m.jsx)("h1",{className:"er404",children:"404"}),Object(m.jsx)("h2",{className:"er404-message",children:"Oops, Page Not Found!"}),Object(m.jsx)("img",{className:"er404-img",src:M,alt:"404 Image"}),Object(m.jsx)(g.b,{to:"/connect/",className:"er404-btn",children:"Go to homepage"})]})},z=(c(84),function(e){var t=e.Icon,c=e.text,s=e.type,a=e.click,r=e.color,i=e.checked,o=e.disabled,l=e.name,j=Object(n.useRef)();switch(s){case"button":return Object(m.jsxs)("button",{className:"icon-input",type:"button",onClick:a,children:[Object(m.jsx)("div",{className:"icon-container",style:{backgroundColor:r},children:Object(m.jsx)(t,{className:"input-icon"})}),c]});case"link":return Object(m.jsxs)(g.b,{className:"icon-input",to:a,children:[Object(m.jsx)("div",{className:"icon-container",style:{backgroundColor:r},children:Object(m.jsx)(t,{className:"input-icon"})}),c]});case"toggle":return Object(m.jsxs)("div",{className:"icon-input",onClick:function(){o||j.current.click()},children:[Object(m.jsx)("div",{className:"icon-container",style:{backgroundColor:r},children:Object(m.jsx)(t,{className:"input-icon"})}),c,Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",checked:i,ref:j,onChange:a,disabled:o,name:l}),Object(m.jsx)("span",{className:"slider round"})]})]});default:return Object(m.jsx)("div",{children:"Invalid Type"})}}),J=(c(85),function(){var e=O(),t=e.Logout,c=e.currentUser,s=e.setCurrentUser,a=Object(n.useState)(!1),r=Object(d.a)(a,2),o=r[0],l=r[1],j=Object(i.g)(),u=Object(n.useRef)(),b=function(e){l(!0);var t=e.target.name,n={};n[t]=!c.settings[t],s((function(e){return e.settings[t]=n[t],localStorage.setItem("user",JSON.stringify(e)),Object(w.a)({},e)})),l(!1)};return Object(m.jsx)(H,{children:Object(m.jsxs)("div",{className:"profile-container",children:[Object(m.jsxs)("div",{className:"back-icon-container",children:[Object(m.jsx)(K.a,{className:"back-icon",onClick:function(){return j.goBack()}}),Object(m.jsx)("h3",{children:"Settings"})]}),Object(m.jsxs)("div",{className:"profile-avatar",children:[Object(m.jsx)("img",{src:U,alt:"Profile Image"}),Object(m.jsx)(K.g,{className:"edit-icon",onClick:function(){u.current.click()}}),Object(m.jsx)("input",{type:"file",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t={pathname:"/crop-avatar",state:{}},c=new FileReader;c.addEventListener("load",(function(){t.state={img:c.result},j.push(t)})),c.readAsDataURL(e.target.files[0])}},name:"avatarUpload",ref:u,style:{display:"none"}})]}),Object(m.jsx)("h2",{children:"Stoyan G."}),Object(m.jsx)("h4",{children:"Profile"}),Object(m.jsx)(z,{type:"toggle",Icon:K.e,text:"Dark Mode",checked:!!(null===c||void 0===c?void 0:c.settings.darkMode),click:b,color:"#545454",name:"darkMode"}),Object(m.jsx)(z,{type:"toggle",Icon:K.c,text:"Notifications",checked:!!(null===c||void 0===c?void 0:c.settings.notifications),click:b,color:"#57A6C4",disabled:o,name:"notifications"}),Object(m.jsx)(z,{type:"toggle",Icon:K.b,text:"Active Status",checked:!!(null===c||void 0===c?void 0:c.settings.activeStatus),click:b,color:"#6FDC9A",disabled:o,name:"activeStatus"}),Object(m.jsx)("h4",{children:"Security"}),Object(m.jsx)(z,{type:"link",text:"Change Password",click:"/connect/change-password",Icon:K.d,color:"#2F458E"}),Object(m.jsx)(z,{type:"button",click:t,text:"Logout",Icon:K.f,color:"#C55F62"})]})})}),L=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(d.a)(a,2),o=r[0],l=r[1],j=Object(n.useRef)(),u=Object(n.useRef)(),b=Object(n.useRef)(),h=Object(i.g)(),O=function(e){var t=e.target.name;s((function(e){return e[t]=null,Object(w.a)({},e)}))};return Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"back-icon-container",children:[Object(m.jsx)(K.a,{className:"back-icon",onClick:function(){return h.goBack()}}),Object(m.jsx)("h3",{children:"Change Password"})]}),Object(m.jsx)("span",{className:"success-message",children:null===c||void 0===c?void 0:c.success}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0);j.current.value;var t=u.current.value;if(t!==b.current.value)return l(!1),s({confirmNewPass:"Passwords don't match!"});h.goBack()},children:[Object(m.jsx)(f,{error:null===c||void 0===c?void 0:c.oldPass,passRef:j,text:"Old Password",name:"oldPassword",change:O}),Object(m.jsx)("span",{className:"error-message",children:null===c||void 0===c?void 0:c.oldPassword}),Object(m.jsx)(f,{error:!1,passRef:u,text:"New Password",name:"newPass",change:O}),Object(m.jsx)(f,{error:null===c||void 0===c?void 0:c.confirmNewPass,passRef:b,text:"Confirm Password",name:"confirmNewPass",change:O}),Object(m.jsx)("span",{className:"error-message",children:null===c||void 0===c?void 0:c.confirmNewPass}),Object(m.jsx)("button",{disabled:o,children:"Change Password"})]})]})},X=c(43),T=c.n(X),Z=(c(86),{unit:"%",width:50,height:50,aspect:1,x:25,y:25}),V=function(){var e=O().setCurrentUser,t=Object(n.useState)(Z),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),o=Object(d.a)(r,2),l=o[0],j=o[1],u=Object(n.useRef)(null),b=Object(i.g)(),h=Object(n.useCallback)((function(e){u.current=e}),[]);return Object(m.jsxs)("div",{className:"crop-container",children:[Object(m.jsxs)("div",{className:"back-icon-container",children:[Object(m.jsx)(K.a,{className:"back-icon",onClick:function(){return b.goBack()}}),Object(m.jsx)("h3",{children:"Crop Avatar"})]}),Object(m.jsx)(T.a,{src:b.location.state.img,onImageLoaded:h,crop:s,onChange:function(e){return a(e)},keepSelection:!0,style:{height:300,width:300},imageStyle:{height:300,width:300}}),Object(m.jsx)("button",{onClick:function(){j(!1);var t=u.current,c=document.createElement("canvas"),n=t.naturalWidth/t.width,a=t.naturalHeight/t.height,r=window.devicePixelRatio;c.width=s.width,c.height=s.height;var i=c.getContext("2d");i.setTransform(r,0,0,r,0,0),i.imageSmoothingQuality="high",i.drawImage(t,s.x*n,s.y*a,s.width*n,s.height*a,0,0,s.width,s.height);var o=c.toDataURL("image/jpeg");e((function(e){return e.avatar=o,localStorage.setItem("user",JSON.stringify(e)),Object(w.a)({},e)})),b.goBack()},disabled:l,children:"Save"})]})},Y=c(45),W=(c(87),function(e){var t,c=e.msg,n=e.img,s=e.time,a=e.type;switch(a){case"sent":t=Object(m.jsxs)("div",{className:"message-container ".concat(a),children:[Object(m.jsx)("p",{className:"message-text",children:c}),Object(m.jsx)("span",{className:"message-time",children:s})]});break;case"received":t=Object(m.jsxs)("div",{className:"sent-container",children:[Object(m.jsx)("img",{className:"message-avatar",src:n,alt:"User Avatar"}),Object(m.jsxs)("div",{className:"message-container ".concat(a),children:[Object(m.jsx)("p",{className:"message-text",children:c}),Object(m.jsx)("span",{className:"message-time",children:s})]})]});break;case"system":t=Object(m.jsxs)("div",{className:"message-container ".concat(a),children:[Object(m.jsx)("span",{className:"message-time",children:s}),Object(m.jsx)("p",{className:"message-text",children:c})]})}return t}),_=(c(88),c(44)),$=function(){var e=Object(i.g)(),t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useState)([{id:1,msg:"Hello! How are you?",time:"12:33",type:"sent"},{id:2,msg:"Hi!! I am fine how about you?",time:"12:44",type:"received"},{id:3,msg:"Stoyan set Boyans nickname to Bo",time:"13:44",type:"system"}]),a=Object(d.a)(s,2),r=a[0],o=a[1];Object(n.useEffect)((function(){c.current.scrollTop=c.current.scrollHeight}),[r]);var l=function(e){e.preventDefault();var c=t.current.value;t.current.value="";var n=Math.random(),s=new Date,a={id:n,msg:c,time:"".concat(s.getHours(),":").concat(s.getMinutes()),type:"sent"};o((function(e){return[].concat(Object(Y.a)(e),[a])}))},j=r.map((function(e){return Object(n.createElement)(W,Object(w.a)(Object(w.a)({img:U},e),{},{key:e.id}))}));return Object(m.jsx)(H,{children:Object(m.jsxs)("div",{className:"chat-container",children:[Object(m.jsxs)("div",{className:"chat-header",children:[Object(m.jsx)(K.a,{className:"back-icon",onClick:function(){return e.goBack()}}),Object(m.jsx)("h3",{children:"Stoyan"}),Object(m.jsx)(g.b,{to:"/connect/chat/1/settings",children:Object(m.jsx)(P.b,{className:"chat-settings"})})]}),Object(m.jsx)("div",{className:"messages-container",ref:c,children:j}),Object(m.jsxs)("form",{className:"message-input-container",onSubmit:l,children:[Object(m.jsx)("input",{className:"message-input",ref:t,type:"text",placeholder:"Type message.."}),Object(m.jsx)(_.a,{onClick:l,className:"send-message-btn"})]})]})})};c(46);var ee=function(){return Object(m.jsx)(x,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{exact:!0,path:["/connect/","/connect/login"],component:N}),Object(m.jsx)(i.b,{exact:!0,path:"/connect/register",component:k}),Object(m.jsx)(i.b,{exact:!0,path:"/connect/profile",component:J}),Object(m.jsx)(i.b,{exact:!0,path:"/connect/change-password",component:L}),Object(m.jsx)(i.b,{exact:!0,path:"/connect/crop-avatar",component:V}),Object(m.jsx)(i.b,{exact:!0,path:"/connect/chat/:id",component:$}),Object(m.jsx)(i.b,{exact:!0,path:"/connect/chat/:id/settings",component:$}),Object(m.jsx)(i.b,{exact:!0,path:"/connect/friends",component:E}),Object(m.jsx)(i.b,{exact:!0,path:"/connect/add-friends",component:q}),Object(m.jsx)(i.b,{path:"*",component:F})]})})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g.a,{children:Object(m.jsx)(ee,{})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.ea6c828c.chunk.js.map