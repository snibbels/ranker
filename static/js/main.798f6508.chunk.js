(this["webpackJsonpranking-system"]=this["webpackJsonpranking-system"]||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),o=(n(33),n(34),n(35),n(10)),l=n(2),u=n(8),s=n(6),m=n(15),d=function(e){var t=e.id,n=e.selected,a=void 0!==n&&n,c=e.onSelect,i=void 0===c?function(e){return e}:c,o=e.onUnSelect,l=void 0===o?function(e){return e}:o,u=e.image,s=e.ranking,m=e.title;return r.a.createElement("div",{onClick:function(){return a?l(t):i(t)},className:"list-entry ".concat(a?"selected":"")},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:u,onError:function(e){return null}})),r.a.createElement("div",{className:"title"},m),r.a.createElement("div",{className:"ranking"},s))},f=n(27),E=n(13),g=n(23),b=n(43),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=Object(g.a)(t,["type"]);switch(n){case"ENTRY_RATED":return Object(s.a)(Object(s.a)({},e),{},{ratings:[].concat(Object(f.a)(e.ratings),[a.rating])});default:return e}},O=Object(u.b)(null,(function(e){return{rateItem:function(t,n){return e(function(e,t){return{type:"ENTRY_RATED",id:e,rating:t}}(t,n))}}}))((function(e){var t=e.setSelectedItem,n=void 0===t?function(e){return e}:t,a=e.selectedItem,c=e.rateItem,i=void 0===c?function(e){return e}:c,l=function(e,t){return function(){n(),i(e,t)}};return r.a.createElement("div",{className:"control-panel"},r.a.createElement("h2",null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:l(a,-1)},"-1"),r.a.createElement("div",{onClick:l(a,0)},"0"),r.a.createElement("div",{onClick:l(a,1)},"+1")):r.a.createElement(o.b,{to:"/ranker/create"},"+")))})),j=Object(u.b)((function(e,t){return Object(s.a)({entries:Object.values(e.entries)},t)}))((function(e){var t=e.entries,n=void 0===t?[]:t,c=Object(a.useState)(),i=Object(m.a)(c,2),o=i[0],l=i[1],u=function(e){return l(e)},f=function(e){return l(-1)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return e+t}),0)/e.length||0};return r.a.createElement("div",{className:"list-view"},r.a.createElement("h1",null,"Dein Ranking"),n.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{ranking:E(e.ratings)})})).sort((function(e,t){return t.ranking-e.ranking})).map((function(e,t){return r.a.createElement(d,Object.assign({},e,{key:t,onSelect:u,onUnSelect:f,selected:e.id===o}))})),r.a.createElement(O,{setSelectedItem:l,selectedItem:o}))})),h=n(12),p=localStorage.getItem("state"),k=Object(h.c)(Object(h.b)({entries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=Object(g.a)(t,["type"]);switch(n){case"ENTRY_CREATED":return Object(s.a)(Object(s.a)({},e),{},Object(E.a)({},a.id,a));case"ENTRY_RATED":return Object(s.a)(Object(s.a)({},e),{},Object(E.a)({},a.id,v(e[a.id],Object(s.a)({type:n},a))));default:return e}}}),p?JSON.parse(p):{});k.subscribe((function(){localStorage.setItem("state",JSON.stringify(k.getState()))}));var y=k,N=Object(u.b)(null,(function(e){return{addEntry:function(t,n){return e(function(e,t){return{type:"ENTRY_CREATED",id:Object(b.a)(),title:e,image:t,ratings:[]}}(t,n))}}}))((function(e){var t=e.addEntry,n=void 0===t?function(e){return e}:t,c=Object(a.useState)(""),i=Object(m.a)(c,2),l=i[0],u=i[1],s=Object(a.useState)(""),d=Object(m.a)(s,2),f=d[0];d[1];return r.a.createElement("div",{className:"entry-form"},r.a.createElement("h1",null,"Eintrag erstellen"),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:f,alt:"W\xe4hle ein Bild aus",onError:function(){return null}})),r.a.createElement("h2",{className:"entry-title"},r.a.createElement("input",{autoFocus:!0,type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement("button",{onClick:function(e){e.preventDefault(),n(l,f)}},"Hinzuf\xfcgen"),r.a.createElement(o.b,{to:"/ranker/"},"Abbrechen"))}));var S=function(){return r.a.createElement(u.a,{store:y},r.a.createElement(o.a,null,r.a.createElement(l.a,{path:"/ranker/",exact:!0,component:j}),r.a.createElement(l.a,{path:"/ranker/create",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.798f6508.chunk.js.map