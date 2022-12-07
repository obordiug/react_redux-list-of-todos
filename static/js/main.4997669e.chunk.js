(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(6),r=c(5),i=c(11),l=c(12),o=function(e){return{type:"currentTodo/SET",payload:e}},d=function(){return{type:"currentTodo/REMOVE"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},j=c(2),b={query:"",status:"all"},h=function(e){return{type:"filter/STATUS",payload:e}},f=function(e){return{type:"filter/QUERY",payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.payload});case"filter/QUERY":return Object(j.a)(Object(j.a)({},e),{},{query:t.payload});default:return e}},O=function(e){return{type:"todos/GET",payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/GET"===t.type?t.payload:e},p=Object(r.combineReducers)({currentTodo:u,filter:m,todos:x}),v=Object(r.createStore)(p,Object(i.composeWithDevTools)(Object(r.applyMiddleware)(l.a))),y=c(3),N=c(1),g=(c(20),c(21),c(4)),T=c.n(g),k=s.b,E=s.c,S=c(0),w=function(){var e=E((function(e){return e.todos})),t=Object(N.useState)(e),c=Object(y.a)(t,2),n=c[0],a=c[1],s=E((function(e){return e.filter})),r=s.status,i=s.query,l=E((function(e){return e.currentTodo})),d=k();Object(N.useEffect)((function(){a(function(){var t;switch(r){case"active":t=e.filter((function(e){return!e.completed}));break;case"completed":t=e.filter((function(e){return e.completed}));break;default:t=e}return t.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())}))}())}),[r,i]);return Object(S.jsx)(S.Fragment,{children:0===n.length?Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:n.map((function(e){return Object(S.jsxs)("tr",{"data-cy":"todo",className:T()({"has-background-info-light":e.id===(null===l||void 0===l?void 0:l.id)}),children:[Object(S.jsx)("td",{className:"is-vcentered",children:e.id}),Object(S.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:T()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:Object(S.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){return d(o(e))}(e)},children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:T()("far",{"far fa-eye":e.id!==(null===l||void 0===l?void 0:l.id),"fa-eye-slash":e.id===(null===l||void 0===l?void 0:l.id)})})})})})]},e.id)}))})]})})},C=function(){var e=k(),t=E((function(e){return e.filter})),c=t.status,n=t.query,a=function(t){return e(f(t))};return Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsxs)("select",{"data-cy":"statusSelect",name:"status",value:c,onChange:function(t){return c=t.target.value,e(h(c));var c},children:[Object(S.jsx)("option",{value:"all",children:"All"}),Object(S.jsx)("option",{value:"active",children:"Active"}),Object(S.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){return a(e.target.value)}}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),n&&Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},R=(c(23),function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var q=function(){var e=E((function(e){return e.currentTodo})),t=k(),c=Object(N.useState)(null),n=Object(y.a)(c,2),a=n[0],s=n[1];Object(N.useEffect)((function(){var t;e&&(t=e.userId,_("/users/".concat(t))).then((function(e){return s(e)}))}),[e]);return Object(S.jsxs)("div",{className:T()("modal",{"is-active":e}),"data-cy":"modal",children:[Object(S.jsx)("div",{className:"modal-background"}),a?Object(S.jsxs)("div",{className:"modal-card",children:[Object(S.jsxs)("header",{className:"modal-card-head",children:[Object(S.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===e||void 0===e?void 0:e.id)}),Object(S.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return t(d())}})]}),Object(S.jsxs)("div",{className:"modal-card-body",children:[Object(S.jsx)("p",{className:"block","data-cy":"modal-title",children:null===e||void 0===e?void 0:e.title}),Object(S.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==e&&void 0!==e&&e.completed?Object(S.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(S.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(S.jsx)("a",{href:"mailto:".concat(a.name),children:a.name})]})]})]}):Object(S.jsx)(R,{})]})},A=function(){var e=Object(N.useState)(!1),t=Object(y.a)(e,2),c=t[0],n=t[1],a=E((function(e){return e.currentTodo})),s=k();return Object(N.useEffect)((function(){try{_("/todos").then((function(e){s(O(e)),n(!0)}))}catch(e){n(!1)}}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(C,{})}),Object(S.jsx)("div",{className:"block",children:c?Object(S.jsx)(w,{}):Object(S.jsx)(R,{})})]})})}),a&&Object(S.jsx)(q,{})]})},L=function(){return Object(S.jsx)(s.a,{store:v,children:Object(S.jsx)(A,{})})};a.a.render(Object(S.jsx)(L,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4997669e.chunk.js.map