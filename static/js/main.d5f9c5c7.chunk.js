(this["webpackJsonphaptik-app"]=this["webpackJsonphaptik-app"]||[]).push([[0],{25:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),s=(a(25),a(7),a(3)),o=a(9),l="ADD_FRIEND",u="SEARCH_FRIEND",d="TOGGLE_FAVOURITE",b="TOGGLE_DELETE",j="CHANGE_PAGE",f="SORT_ON_NAME",O="SORT_FAV",h="SHOW_ALERT",p=function(e){return function(t){t({type:b,payload:e})}},v=function(e){return function(t){t({type:j,payload:e})}},m=a(1);var g=Object(s.b)((function(e){return{data:e.globalData.data}}))((function(e){var t=c.a.useState(""),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(m.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},onKeyPress:function(t){var a;"Enter"===t.key&&n.trim().length&&(e.data.map((function(e){return e.name.toLowerCase()})).includes(n.toLowerCase())?alert("User with same name already exists."):(e.dispatch((a=n,function(e){e({type:l,payload:a})})),r("")))},className:"input-text",placeholder:"Enter your friend's name",type:"text"})})),x=a(6),y=a(5),D=a(19);var S=Object(s.b)((function(e){return{data:e.globalData.data}}))((function(e){return Object(m.jsxs)("div",{className:"item ".concat(e.item.isFav?"blue":"orange"," "),children:[Object(m.jsxs)("div",{className:"data ".concat(e.item.isDelete&&"deleted"),children:[Object(m.jsx)("div",{className:"title",children:e.item.name}),Object(m.jsx)("div",{className:"subTitle",children:"is your friend"})]}),Object(m.jsxs)("div",{className:"action-button",children:[Object(m.jsx)(x.a,{onClick:function(){return e.dispatch((t=e.item,function(e){e({type:d,payload:t})}));var t},icon:e.item.isFav?y.h:D.a}),Object(m.jsx)(x.a,{onClick:function(){(e.item.isDelete||window.confirm("Do u really want to delete your friend?"))&&e.dispatch(p(e.item))},icon:y.j})]})]})}));var N=Object(s.b)((function(e){return{user:e.globalData.user}}))((function(){return Object(m.jsx)("div",{className:"nav",children:Object(m.jsx)("h4",{children:"Friends List"})})}));var F=Object(s.b)((function(e){return{data:e.globalData.data,page:e.globalData.page,pageSize:e.globalData.pageSize}}))((function(e){for(var t=Math.ceil(e.data.length/e.pageSize),a=[],n=0;n<t;n++)a.push(n);return Object(m.jsx)("div",{className:"pagination",children:Object(m.jsxs)("div",{className:"slider",children:[Object(m.jsx)(x.a,{onClick:function(){return e.dispatch(v(Math.max(0,e.page-1)))},className:"number",icon:y.a}),a.map((function(t,a){return Object(m.jsx)("div",{onClick:function(){return e.dispatch(v(a))},className:"number ".concat(a===e.page&&"selected"),children:a+1},a)})),Object(m.jsx)(x.a,{onClick:function(){return e.dispatch(v(Math.min(t-1,e.page+1)))},className:"number",icon:y.b})]})})}));var C=Object(s.b)((function(e){return{data:e.globalData.data,search:e.globalData.searchText}}))((function(e){var t=c.a.useState(e.search),a=Object(o.a)(t,2),n=a[0],r=a[1],i=c.a.useState(!1),s=Object(o.a)(i,2),l=s[0],d=s[1],b=function(t){var a;"Enter"===t.key&&n!=e.search&&e.dispatch((a=n,function(e){e({type:u,payload:a})}))};return Object(m.jsx)("div",{className:"search",children:l?Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("input",{value:n,onKeyPress:function(e){return b(e)},onChange:function(e){return r(e.target.value)},className:"input-text",placeholder:"Search friends",type:"text"}),Object(m.jsx)(x.a,{onClick:function(){return d(!l)},icon:y.i})]}):Object(m.jsx)("div",{className:"button",onClick:function(){return d(!l)},children:Object(m.jsx)(x.a,{icon:y.c})})})}));var w=Object(s.b)((function(e){return{nameSort:e.globalData.nameSort,favSort:e.globalData.favSort}}))((function(e){return Object(m.jsxs)("div",{className:"sorting",children:[Object(m.jsx)(x.a,{style:{visibility:"hidden"},onClick:function(){return e.dispatch((function(e){e({type:f,payload:t})}));var t},icon:e.nameSort?y.d:y.e}),Object(m.jsx)(x.a,{onClick:function(){return e.dispatch((function(e){e({type:O,payload:t})}));var t},icon:e.favSort?y.f:y.g})]})})),E={true:1,false:0},k=function(e,t,a,n,c,r){return e=A(e,c,r),t&&t.trim()&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))),e=e.slice(a*n,a*n+n)},A=function(e,t,a){return a?e.sort((function(e,t){return E[t.isFav]-E[e.isFav]})):e.sort((function(e,t){return E[e.isFav]-E[t.isFav]}))};var T=Object(s.b)((function(e){return{showAlert:e.globalData.showAlert}}))((function(e){var t=c.a.useRef();return c.a.useEffect((function(){t.current||(t.current=!0),setTimeout((function(){var t;e.dispatch((t=!1,function(e){e({type:h,payload:t})}))}),2e3)})),Object(m.jsx)("div",{className:"alert",children:Object(m.jsx)("h4",{children:"Friend added successfully"})})}));var L=Object(s.b)((function(e){return{data:e.globalData.data,page:e.globalData.page,search:e.globalData.searchText,pageSize:e.globalData.pageSize,favSort:e.globalData.favSort,nameSort:e.globalData.nameSort}}))((function(e){var t=e.data,a=e.search,n=e.page,c=e.pageSize,r=e.nameSort,i=e.favSort;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(N,{}),Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"line"}),Object(m.jsx)(w,{}),Object(m.jsx)("div",{className:"items",children:k(t,a,n,c,r,i).map((function(e,t){return Object(m.jsx)(S,{item:e,index:t},t)}))}),Object(m.jsx)(C,{}),Object(m.jsx)(F,{})]})}));var R=Object(s.b)((function(e){return{showAlert:e.globalData.showAlert}}))((function(e){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(L,{}),e.showAlert&&Object(m.jsx)(T,{})]})})),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},z=a(13),G=a(20),I=a(4),M=a(17),J={user:{},page:0,pageSize:4,favSort:!0,nameSort:!0,data:[{name:"John Doe",isDeleted:!1,isFav:!1},{name:"Sufiyan Ansari",isDeleted:!1,isFav:!1},{name:"Bill Gates",isDeleted:!1,isFav:!1},{name:"Elon Musk",isDeleted:!1,isFav:!1},{name:"Dennis Ritchi",isDeleted:!1,isFav:!1},{name:"Steve Jobs",isDeleted:!1,isFav:!1},{name:"James",isDeleted:!1,isFav:!1}]},P=function(e,t,a){var n=Object(M.a)(e.data),c=n.findIndex((function(e){return e.name.toLowerCase()==t.name.toLowerCase()}));return n[c][a]=!n[c][a],Object(I.a)(Object(I.a)({},e),{},{data:n})},B=Object(z.c)(Object(z.b)({globalData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(I.a)(Object(I.a)({},e),{},{data:[].concat(Object(M.a)(e.data),[{name:t.payload}]),showAlert:!0});case u:return Object(I.a)(Object(I.a)({},e),{},{searchText:t.payload});case f:return Object(I.a)(Object(I.a)({},e),{},{nameSort:!e.nameSort});case O:return Object(I.a)(Object(I.a)({},e),{},{favSort:!e.favSort});case d:return P(e,t.payload,"isFav");case b:return P(e,t.payload,"isDelete");case j:return Object(I.a)(Object(I.a)({},e),{},{page:t.payload});case h:return Object(I.a)(Object(I.a)({},e),{},{showAlert:t.payload});default:return e}}}),Object(z.a)(G.a));i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(s.a,{store:B,children:Object(m.jsx)(R,{})})}),document.getElementById("root")),_()},7:function(e,t,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.d5f9c5c7.chunk.js.map