(this["webpackJsonphaptik-app"]=this["webpackJsonphaptik-app"]||[]).push([[0],{25:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(11),i=t.n(r),s=(t(25),t(7),t(3)),o=t(9),l="ADD_FRIEND",u="SEARCH_FRIEND",d="TOGGLE_FAVOURITE",b="TOGGLE_DELETE",j="CHANGE_PAGE",f="SORT_ON_NAME",p="SORT_FAV",O=function(e){return function(a){a({type:j,payload:e})}},v=t(1);var m=Object(s.b)((function(e){return{data:e.globalData.data}}))((function(e){var a=c.a.useState(""),t=Object(o.a)(a,2),n=t[0],r=t[1];return Object(v.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},onKeyPress:function(a){var t;"Enter"===a.key&&n.trim().length&&(e.data.map((function(e){return e.name.toLowerCase()})).includes(n.toLowerCase())?alert("User with same name already exists."):(e.dispatch((t=n,function(e){e({type:l,payload:t})})),r("")))},className:"input-text",placeholder:"Enter your friend's name",type:"text"})})),h=t(6),g=t(5),x=t(19);var S=Object(s.b)((function(e){return{data:e.globalData.data}}))((function(e){return Object(v.jsxs)("div",{className:"item ".concat(e.item.isFav?"blue":"orange"," "),children:[Object(v.jsxs)("div",{className:"data ".concat(e.item.isDelete&&"deleted"),children:[Object(v.jsx)("div",{className:"title",children:e.item.name}),Object(v.jsx)("div",{className:"subTitle",children:"is your friend"})]}),Object(v.jsxs)("div",{className:"action-button",children:[Object(v.jsx)(h.a,{onClick:function(){return e.dispatch((a=e.item,function(e){e({type:d,payload:a})}));var a},icon:e.item.isFav?g.h:x.a}),Object(v.jsx)(h.a,{onClick:function(){return e.dispatch((a=e.item,function(e){e({type:b,payload:a})}));var a},icon:g.j})]})]})}));var D=Object(s.b)((function(e){return{user:e.globalData.user}}))((function(){return Object(v.jsx)("div",{className:"nav",children:Object(v.jsx)("h4",{children:"Friends List"})})}));var y=Object(s.b)((function(e){return{data:e.globalData.data,page:e.globalData.page,pageSize:e.globalData.pageSize}}))((function(e){for(var a=Math.ceil(e.data.length/e.pageSize),t=[],n=0;n<a;n++)t.push(n);return Object(v.jsx)("div",{className:"pagination",children:Object(v.jsxs)("div",{className:"slider",children:[Object(v.jsx)(h.a,{onClick:function(){return e.dispatch(O(Math.max(0,e.page-1)))},className:"number",icon:g.a}),t.map((function(a,t){return Object(v.jsx)("div",{onClick:function(){return e.dispatch(O(t))},className:"number ".concat(t===e.page&&"selected"),children:t+1},t)})),Object(v.jsx)(h.a,{onClick:function(){return e.dispatch(O(Math.min(a-1,e.page+1)))},className:"number",icon:g.b})]})})}));var N=Object(s.b)((function(e){return{data:e.globalData.data,search:e.globalData.searchText}}))((function(e){var a=c.a.useState(e.search),t=Object(o.a)(a,2),n=t[0],r=t[1],i=c.a.useState(!1),s=Object(o.a)(i,2),l=s[0],d=s[1],b=function(a){var t;"Enter"===a.key&&n!=e.search&&e.dispatch((t=n,function(e){e({type:u,payload:t})}))};return Object(v.jsx)("div",{className:"search",children:l?Object(v.jsxs)("div",{className:"input-container",children:[Object(v.jsx)("input",{value:n,onKeyPress:function(e){return b(e)},onChange:function(e){return r(e.target.value)},className:"input-text",placeholder:"Search friends",type:"text"}),Object(v.jsx)(h.a,{onClick:function(){return d(!l)},icon:g.i})]}):Object(v.jsx)("div",{className:"button",onClick:function(){return d(!l)},children:Object(v.jsx)(h.a,{icon:g.c})})})}));var F=Object(s.b)((function(e){return{nameSort:e.globalData.nameSort,favSort:e.globalData.favSort}}))((function(e){return Object(v.jsxs)("div",{className:"sorting",children:[Object(v.jsx)(h.a,{style:{visibility:"hidden"},onClick:function(){return e.dispatch((function(e){e({type:f,payload:a})}));var a},icon:e.nameSort?g.d:g.e}),Object(v.jsx)(h.a,{onClick:function(){return e.dispatch((function(e){e({type:p,payload:a})}));var a},icon:e.favSort?g.f:g.g})]})})),C={true:1,false:0},E=function(e,a,t,n,c,r){return e=function(e,a,t){return t?e.sort((function(e,a){return C[a.isFav]-C[e.isFav]})):e.sort((function(e,a){return C[e.isFav]-C[a.isFav]}))}(e,0,r),a&&a.trim()&&(e=e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))),e=e.slice(t*n,t*n+n)};var k=Object(s.b)((function(e){return{data:e.globalData.data,page:e.globalData.page,search:e.globalData.searchText,pageSize:e.globalData.pageSize,favSort:e.globalData.favSort,nameSort:e.globalData.nameSort}}))((function(e){var a=e.data,t=e.search,n=e.page,c=e.pageSize,r=(e.nameSort,e.favSort);return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(D,{}),Object(v.jsx)(m,{}),Object(v.jsx)("div",{className:"line"}),Object(v.jsx)(F,{}),Object(v.jsx)("div",{className:"items",children:E(a,t,n,c,0,r).map((function(e,a){return Object(v.jsx)(S,{item:e,index:a},a)}))}),Object(v.jsx)(N,{}),Object(v.jsx)(y,{})]})}));var L=Object(s.b)((function(e){return{user:e.globalData.user}}))((function(){return Object(v.jsx)(k,{})})),T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),r(e),i(e)}))},w=t(13),A=t(20),_=t(4),z=t(17),G={user:{},page:0,pageSize:4,favSort:!0,nameSort:!0,data:[{name:"John Doe",isDeleted:!1,isFav:!1},{name:"Sufiyan Ansari",isDeleted:!1,isFav:!1},{name:"Bill Gates",isDeleted:!1,isFav:!1},{name:"Elon Musk",isDeleted:!1,isFav:!1},{name:"Dennis Ritchi",isDeleted:!1,isFav:!1},{name:"Steve Jobs",isDeleted:!1,isFav:!1},{name:"James",isDeleted:!1,isFav:!1}]},R=function(e,a,t){var n=Object(z.a)(e.data),c=n.findIndex((function(e){return e.name.toLowerCase()==a.name.toLowerCase()}));return n[c][t]=!n[c][t],Object(_.a)(Object(_.a)({},e),{},{data:n})},I=Object(w.c)(Object(w.b)({globalData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return Object(_.a)(Object(_.a)({},e),{},{data:[].concat(Object(z.a)(e.data),[{name:a.payload}])});case u:return Object(_.a)(Object(_.a)({},e),{},{searchText:a.payload});case f:return Object(_.a)(Object(_.a)({},e),{},{nameSort:!e.nameSort});case p:return Object(_.a)(Object(_.a)({},e),{},{favSort:!e.favSort});case d:return R(e,a.payload,"isFav");case b:return R(e,a.payload,"isDelete");case j:return Object(_.a)(Object(_.a)({},e),{},{page:a.payload});default:return e}}}),Object(w.a)(A.a));i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(s.a,{store:I,children:Object(v.jsx)(L,{})})}),document.getElementById("root")),T()},7:function(e,a,t){}},[[35,1,2]]]);
//# sourceMappingURL=main.ded16312.chunk.js.map