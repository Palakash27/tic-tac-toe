(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,function(e,a,l){e.exports=l(12)},,,,,function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var t=l(0),r=l.n(t),n=l(3),i=l.n(n),o=(l(10),l(4)),c=l(1);l(11);var d=function(e){var a=Object(t.useState)("-"),l=Object(c.a)(a,2),n=l[0],i=l[1];return r.a.createElement("button",{style:{width:80,height:80,color:" black",fontSize:"40px"},onClick:function(a){e.disabled||(i(e.player),e.fillBoxArrayWithIndex(a.target.id,e.player),a.target.disabled=!0)},id:e.id},n)};function y(e){return r.a.createElement("div",{style:{textAlign:"center "}},r.a.createElement("div",null,r.a.createElement(d,{id:1,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled}),r.a.createElement(d,{id:2,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled}),r.a.createElement(d,{id:3,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled})),r.a.createElement("div",null,r.a.createElement(d,{id:4,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled}),r.a.createElement(d,{id:5,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled}),r.a.createElement(d,{id:6,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled})),r.a.createElement("div",null,r.a.createElement(d,{id:7,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled}),r.a.createElement(d,{id:8,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled}),r.a.createElement(d,{id:9,player:e.player,changePlayer:e.changePlayer,fillBoxArrayWithIndex:e.fillBoxArrayWithIndex,disabled:e.disabled})))}function s(){return r.a.createElement("header",null,r.a.createElement("h1",null," Tic Tac Toe"))}function h(e){return r.a.createElement("div",{style:{textAlign:"center",fontSize:"30px",padding:25}},"Current Player is : ",e.player)}function g(e){return console.log(e.gameStatus),r.a.createElement("div",{style:{textAlign:"center",fontSize:"30px",padding:25}},e.gameStatus===u.WIN&&r.a.createElement("div",null,e.PlayerWon," won the match!"),e.gameStatus===u.DRAW&&r.a.createElement("div",null,"Opps, It's a draw!"))}var u={STARTED:"0",WIN:"1",DRAW:"2"};var x=function(){var e=Object(t.useState)(""),a=Object(c.a)(e,2),l=a[0],n=a[1],i=Object(t.useState)(u.STARTED),d=Object(c.a)(i,2),x=d[0],W=d[1],f=Object(t.useState)("O"),m=Object(c.a)(f,2),b=m[0],p=m[1],I=Object(t.useState)(1),A=Object(c.a)(I,2),E=A[0],B=A[1],P=Object(t.useState)(new Array(9)),v=Object(c.a)(P,2),w=v[0],O=v[1],S=function(e){B(E+1),p("X"===e?"O":"X"),9===E&&W(u.DRAW)},k=function(e){return console.log("I'm checking if anyone won"),e[0]&&e[0]===e[1]&&e[1]===e[2]?(n(e[0]),W(u.WIN),console.log("Bro it worked!"),!0):e[3]&&e[3]===e[4]&&e[4]===e[5]?(n(e[3]),W(u.WIN),console.log("Bro it worked!"),!0):e[6]&&e[6]===e[7]&&e[7]===e[8]?(n(e[6]),W(u.WIN),console.log("Bro it worked!"),!0):e[0]&&e[0]===e[3]&&e[3]===e[6]?(n(e[0]),W(u.WIN),console.log("Bro it worked!"),!0):e[1]&&e[1]===e[4]&&e[4]===e[7]?(n(e[1]),W(u.WIN),console.log("Bro it worked!"),!0):e[2]&&e[2]===e[5]&&e[5]===e[8]?(n(e[2]),W(u.WIN),console.log("Bro it worked!"),!0):e[0]&&e[0]===e[4]&&e[4]===e[8]?(n(e[0]),W(u.WIN),console.log("Bro it worked!"),!0):!(!e[2]||e[2]!==e[4]||e[4]!==e[6])&&(n(e[2]),W(u.WIN),console.log("Bro it worked!"),!0)};return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement("div",null,(x===u.WIN||x===u.DRAW)&&r.a.createElement(g,{PlayerWon:l,gameStatus:x}),x===u.STARTED&&r.a.createElement(h,{player:b,changePlayer:S}),r.a.createElement(y,{player:b,changePlayer:S,fillBoxArrayWithIndex:function(e,a){var l=Object(o.a)(w);l[e-1]=a,O(l),console.log(l),k(l)?(console.log(x),W(u.WIN)):S(a)},disabled:x===u.WIN||x===u.DRAW})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.0cd72c2f.chunk.js.map