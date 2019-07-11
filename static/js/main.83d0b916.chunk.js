(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){e.exports=t(39)},31:function(e,n,t){},35:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),i=(t(31),t(11)),l=t(5),s=t(2),u=t(3);function f(){var e=Object(s.a)(['\n  flex: 1 1 auto;\n  margin-right: 10px;\n  padding: 5px 15px;\n  height: 46px;\n  font-size: 1rem;\n  font-family: "Helvetica Now Text Regular", sans-serif;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n  &:focus {\n    outline: none;\n    border: 2px solid var(--secondary);\n  }\n']);return f=function(){return e},e}function d(){var e=Object(s.a)(["\n  color: var(--white);\n  margin: 0.5rem auto;\n"]);return d=function(){return e},e}function m(){var e=Object(s.a)(['\n  font-family: "Helvetica Now Display XBold", sans-serif;\n  color: var(--primary);\n  text-align: left;\n  font-size: ',";\n  & span.tasks-number {\n    vertical-align: super;\n    font-size: 1rem;\n    color: var(--secondary);\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(s.a)(["\n  float: ",";\n  cursor: pointer;\n  padding: 10px 15px;\n  background: var(--primary);\n  border: 2px solid transparent;\n  color: white;\n  padding: 5px 15px;\n  font-size: 1rem;\n  border-radius: 3px;\n  transition: all 0.3s ease;\n  margin-bottom: 10px;\n  letter-spacing: 1px;\n  &:hover {\n    border-color: var(--secondary);\n  }\n  &:active,\n  &:focus {\n    outline: none;\n    background: var(--secondary);\n  }\n"]);return p=function(){return e},e}var b=u.a.button(p(),function(e){return e.left?"left":"right"}),h=u.a.h1(m(),function(e){return e.size?"".concat(e.size,"rem"):"3rem"}),g=Object(u.a)(h)(d()),x=u.a.input(f()),k=b,v=r.a.forwardRef(function(e,n){var t=r.a.createRef();return r.a.createElement("div",{className:"add-task"},r.a.createElement(x,{type:"text",name:"task",ref:n,autoComplete:"off",onKeyPress:function(e){13===(e.charCode||e.which)&&t.current.click()}}),r.a.createElement(k,{onClick:function(){e.handleAdd()},ref:t},r.a.createElement(g,{size:1},"Add Task")))}),E=(t(35),function(e){var n=Object(a.useState)(!1),t=Object(l.a)(n,2),o=t[0],c=t[1];return Object(a.useEffect)(function(){c(e.done)},[e.done]),r.a.createElement("li",{className:"checkbox-item"},r.a.createElement("input",{type:"checkbox",id:"checkbox-".concat(e.index),checked:o,onChange:function(n){c(n.target.checked),e.handleCheck(n.target.checked,e.index)}}),r.a.createElement("label",{htmlFor:"checkbox-".concat(e.index)},r.a.createElement("span",{className:"checkbox-label"},e.task),r.a.createElement("span",{className:"styled-checkbox"})))}),y=t(17),O=t(18),w=t(22),j=t(19),N=t(23),S=t(9),z=t(20),C=t(21);function J(){var e=Object(s.a)(['\n  /* position: absolute; */\n  position: relative;\n  /* bottom: -50px; */\n  left: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-family: "Helvetica Now Text Regular", sans-serif;\n  font-weight: 500;\n  /* text-transform: uppercase; */\n  /* letter-spacing: 0.08rem; */\n  font-size: 0.8rem;\n  width: 100%;\n  @media screen and (max-width: 500px) {\n    font-size: 0.7rem;\n  }\n  & > *:not(:last-child) {\n    float: left;\n    vertical-align: middle;\n  }\n']);return J=function(){return e},e}function T(){var e=Object(s.a)(["\n  color: inherit;\n  text-decoration: none;#61dafb\n"]);return T=function(){return e},e}var I=u.a.a(T()),R=u.a.h3(J()),H=function(e){function n(){return Object(y.a)(this,n),Object(w.a)(this,Object(j.a)(n).apply(this,arguments))}return Object(N.a)(n,e),Object(O.a)(n,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement("span",null,"Made with"," ",r.a.createElement(S.a,{icon:C.a,pulse:!0,style:{color:"#f44336",opacity:"1",margin:"0 2px"}})," ","by"," ",r.a.createElement(I,{href:"http://imsolitude.github.io",style:{color:"rgba(255, 255, 255, 1)"},target:"_blank"},"MuhammadJ"),r.a.createElement(I,{href:this.props.href,target:"_blank",style:{opacity:"1",float:"right"}},r.a.createElement(S.a,{icon:z.a,size:"2x",style:{color:"white"}}))))}}]),n}(a.Component);t(38);var A=function(e){var n=Object(a.useState)([{task:"NodeJS Homework",done:!1},{task:"Practicing React",done:!1},{task:"Pay Taxes Today",done:!1}]),t=Object(l.a)(n,2),o=t[0],c=t[1],s=Object(a.useState)(0),u=Object(l.a)(s,2),f=u[0],d=u[1];Object(a.useEffect)(function(){return localStorage.getItem("tasks")&&c(JSON.parse(localStorage.getItem("tasks"))),function(){localStorage.clear()}},[]);var m=function(e,n){var t=o.map(function(t,a){return a===n?Object.assign({},{task:o[n].task,done:e}):t});c(t),localStorage.setItem("tasks",JSON.stringify(t))};Object(a.useEffect)(function(){d(o.filter(function(e){return!e.done}).length)},[o]);var p=r.a.createRef();Object(a.useEffect)(function(){p.current.focus()});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"container"},r.a.createElement(h,null,"ToDone",r.a.createElement("span",{className:"tasks-number"},f),r.a.createElement("span",null,"\ud83d\udccc"),r.a.createElement("span",null)),r.a.createElement("ul",{className:"checkbox"},o.map(function(e,n){return r.a.createElement(E,{key:n,index:n,task:e.task,done:e.done,handleCheck:m})})),r.a.createElement(v,{handleAdd:function(){""!==p.current.value.trim()&&(c([].concat(Object(i.a)(o),[{task:p.current.value.trim(),done:!1}])),localStorage.setItem("tasks",JSON.stringify([].concat(Object(i.a)(o),[{task:p.current.value.trim(),done:!1}]))),p.current.value="")},ref:p}))),r.a.createElement(H,{href:"http://github.com/ImSolitude/ToDone"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.83d0b916.chunk.js.map