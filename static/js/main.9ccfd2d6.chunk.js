(this["webpackJsonpdinamicka-test"]=this["webpackJsonpdinamicka-test"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":"1","content":"first"},{"id":"2","content":"second"}]')},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(19),i=n.n(a),o=(n(26),n(17)),r=n(11),d=n(1);var j=function(e){var t=e.addTodo,n=Object(c.useState)(""),s=Object(r.a)(n,2),a=s[0],i=s[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(d.jsx)("label",{children:"Add new:"}),Object(d.jsx)("input",{type:"text",onChange:function(e){return function(e){i(e.target.value)}(e)}}),Object(d.jsxs)("button",{className:"col s5 btn waves-effect waves-light",type:"submit",name:"action",children:["Add",Object(d.jsx)("i",{className:"material-icons right",children:"send"})]})]})})},l=function(e){var t=e.todos,n=e.deleteTodo;return Object(d.jsx)("div",{className:"todos collection",children:t.map((function(e){return Object(d.jsxs)("div",{className:"collection-item row",children:[Object(d.jsx)("span",{className:"col s10",children:e.content}),Object(d.jsx)("div",{className:"col s1",children:Object(d.jsx)("a",{className:"  btn-floating btn-medium waves-effect waves-light green end",children:Object(d.jsx)("i",{className:"material-icons",children:"add"})})}),Object(d.jsx)("div",{className:"col s1",children:Object(d.jsx)("a",{className:"  btn-floating btn-medium waves-effect waves-light red end",onClick:function(){return n(e.id)},children:Object(d.jsx)("i",{className:"material-icons",children:"delete"})})})]},e.id)}))})},b=n(20);var u=function(){var e=Object(c.useState)(b),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)("div",{className:"todo-app container",children:[Object(d.jsx)("h1",{className:"center blue-text",children:" Todos"}),Object(d.jsx)(l,{todos:n,deleteTodo:function(e){s((function(t){return Object(o.a)(t).filter((function(t){return t.id!==e}))}))}}),Object(d.jsx)(j,{addTodo:function(e){s((function(t){var n=Math.random();return[].concat(Object(o.a)(t),[{id:n,content:e}])}))}})]})};var O=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"SOME TEXT ABOUT "})})};var h=function(){return Object(d.jsx)("div",{children:"\u041d\u0435 \u0443\u0441\u043f\u0435\u043b \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0438 \u0441\u043c\u043e\u0433 \u0431\u044b). \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435."})},m=n(14),x=n(2);var f=function(){return Object(d.jsx)(m.a,{children:Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{path:"/",exact:!0,component:u}),Object(d.jsx)(x.a,{path:"/about",component:O}),Object(d.jsx)(x.a,{path:"/change",component:h})]})})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9ccfd2d6.chunk.js.map