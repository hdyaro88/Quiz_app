(this.webpackJsonpquiz_app=this.webpackJsonpquiz_app||[]).push([[0],[,,,,,function(e,t,c){e.exports={options:"QuizItem_options__3BO4R",quiz_img:"QuizItem_quiz_img__373ct",quiz_box:"QuizItem_quiz_box__2aXZG"}},,,function(e,t,c){e.exports={correct:"Option_correct__2EtMx",wrong:"Option_wrong__1hRVE"}},,,function(e,t,c){},function(e,t,c){e.exports={timer:"Timer_timer__3VEpf"}},function(e,t,c){e.exports={quizHolder:"Quiz_quizHolder__1JFml"}},function(e,t,c){e.exports={score:"Result_score__2gVds"}},function(e,t,c){e.exports={main:"Main_main__2nxbW"}},,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(4),o=c.n(i),r=(c(20),c(2)),a=c(11),s=c.n(a),u=c(1),j=function(e){return Object(u.jsx)("button",{onClick:e.onClick,className:"".concat(e.className," ").concat(s.a.Button),children:e.children})},p=c(5),b=c.n(p),l=c(8),O=c.n(l),m=c(3),d=c(10),h=Object(d.b)({name:"option",initialState:{selected:!1,correct:!1,score:0,wrong:0,right:0},reducers:{markCorrect:function(e){e.correct=!0,e.selected=!0,e.score+=5,e.right++},markWrong:function(e){e.correct=!1,e.selected=!0,e.wrong++},Reset:function(e){e.selected=!1,e.correct=!1}}}),x=Object(d.a)({reducer:{option:h.reducer}}),f=h.actions,g=function(e){var t=Object(m.c)((function(e){return e.option})),c=Object(m.b)(),i=Object(n.useState)(""),o=Object(r.a)(i,2),a=o[0],s=o[1];return Object(u.jsx)("li",{className:a,onClick:function(){e.option!==e.correctOption||t.selected?t.selected||(s(O.a.wrong),c(f.markWrong())):(s(O.a.correct),c(f.markCorrect()))},children:e.option})},_=c.p+"static/media/clock.06b02662.png",S=c(12),k=c.n(S),C=function(){var e=Object(n.useState)(1),t=Object(r.a)(e,2),c=t[0],i=t[1];return setTimeout((function(){10!==c&&i(c+1)}),1e3),Object(u.jsxs)("div",{className:k.a.timer,children:[Object(u.jsx)("img",{src:_,alt:"timer"}),Object(u.jsx)("h1",{children:c})]})},z=function(e){var t=Object(m.c)((function(e){return e.option})),c=Object(n.useState)(!1),i=Object(r.a)(c,2),o=i[0],a=i[1],s=Object(n.useState)(!0),p=Object(r.a)(s,2),l=p[0],O=p[1];Object(n.useEffect)((function(){var e=setTimeout((function(){O(!1),a(!0)}),1e4);return function(){O(!0),a(!1),clearTimeout(e)}}),[e]);var d=e.options.map((function(t){return Object(u.jsx)(g,{option:t,correctOption:e.correctOption},t)}));return Object(u.jsxs)("div",{className:b.a.quiz_box,children:[Object(u.jsxs)("h1",{children:["Question No. ",e.quesNo," "]}),Object(u.jsx)("h2",{children:"What is the object Shown in the Figure?"}),l&&Object(u.jsxs)("div",{className:b.a.quiz_img,children:[Object(u.jsx)("img",{src:e.image,alt:"quiz_image"}),Object(u.jsx)(C,{})]}),o&&Object(u.jsxs)("div",{className:b.a.options,children:[Object(u.jsx)("ul",{children:d}),t.selected&&Object(u.jsx)(j,{onClick:e.submitted,children:"Submit"})]})]})},v=c.p+"static/media/book.f12c14a4.png",q=c.p+"static/media/elephant.46f04c8c.png",T=c.p+"static/media/cycle.7b7ab4d3.png",N=c.p+"static/media/superman.2ebd5a59.png",E=c.p+"static/media/car.7781b7b4.png",w=c(13),B=c.n(w),y=c(14),Q=c.n(y),R=function(){var e=Object(m.c)((function(e){return e.option}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{className:Q.a.score,children:["Your Final Score is ",Object(u.jsx)("u",{children:e.score})," "]}),Object(u.jsxs)("p",{children:["Wrong : ",e.wrong]}),Object(u.jsxs)("p",{children:["Right : ",e.right]})]})},W=[{id:1,image:v,options:["Book","Elephant","Cycle","Superman","Car","Tea"],correctOption:"Book"},{id:2,image:q,options:["Book","Elephant","Cycle","Superman","Car","Tea"],correctOption:"Elephant"},{id:3,image:T,options:["Book","Elephant","Cycle","Superman","Car","Tea"],correctOption:"Cycle"},{id:4,image:N,options:["Book","Elephant","Cycle","Superman","Car","Tea"],correctOption:"Superman"},{id:5,image:E,options:["Book","Elephant","Cycle","Superman","Car","Tea"],correctOption:"Car"}],F=function(){var e=Object(n.useState)(1),t=Object(r.a)(e,2),c=t[0],i=t[1],o=Object(n.useState)(!1),a=Object(r.a)(o,2),s=a[0],j=a[1],p=Object(m.b)();return Object(u.jsxs)("div",{className:B.a.quizHolder,children:[!s&&Object(u.jsx)(z,{submitted:function(){p(f.Reset()),5===c?j(!0):i((function(e){return e+1}))},quesNo:c,image:W[c-1].image,options:W[c-1].options,correctOption:W[c-1].correctOption}),s&&Object(u.jsx)(R,{})]})},I=c(15),H=c.n(I),J=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(u.jsxs)(u.Fragment,{children:[!c&&Object(u.jsxs)("div",{className:H.a.main,children:[Object(u.jsx)("h1",{children:"Welcome , To The Quiz"}),Object(u.jsx)("p",{children:"To Start The Quiz , Press Start"}),Object(u.jsx)(j,{onClick:function(){i(!0)},children:"Start Test"})]}),c&&Object(u.jsx)(F,{})]})};c(26);var V=function(){return Object(u.jsx)(J,{})};o.a.render(Object(u.jsx)(m.a,{store:x,children:Object(u.jsx)(V,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.544d7a79.chunk.js.map