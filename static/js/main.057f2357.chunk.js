(this["webpackJsonppuzzle-game"]=this["webpackJsonppuzzle-game"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(31),c=a.n(r),s=a(47),o=a(48),l=a(76),u=a(81),d=a(13),m=a(145),p=a(147),j=a(156),b=a(137),h=a(2),g=Object(h.jsx)("iframe",{width:"1090",height:"613",src:"https://www.youtube.com/embed/Zhola4i_L0Q",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0});var f=function(){return Object(h.jsxs)(b.a,{spacing:3,children:[Object(h.jsx)("h2",{children:"Pizza game is the best game youve probably never played!"}),Object(h.jsx)("h3",{children:"if you havent, fisrt of all shame on you"}),Object(h.jsx)("h3",{children:"but also everytin you need to know is in this traler"}),"also i didnt feel like baking cookies so your progess wont be saved if you colse the tab",g,"also you wont need need to have watch tralior until the game game but it will help also there am no hints on this page except the vidoe so dont worry and haev fun!!(tm)"]})},x=a.p+"static/media/cardinal.b300fd84.png",O=a.p+"static/media/teardrop.50fc3203.png",y=a(57),v=a(153),w=a(110),z=a(146),I=a(154),T=a(80),S=a.n(T),k={0:[77,73,76,69,78,73,65,76,66,85,76,89],1:[84,69,65,82,83],2:[65,82,73,77,78,65,69,83],3:[80,73,90,90,65,83,80,72,69,82,69],4:[68,65,82,75,83,69,67,82,69,84,80,65,83,84],5:[76,73,75,69,84,72,69,80,69,80,80,69,82]},C=a(14),A={encode:function(e){for(var t=[],a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t},decode:function(e){return String.fromCharCode.apply(String,Object(C.a)(e))}},P=a.p+"static/media/roobit.f060e935.png",_=a.p+"static/media/arim-naes.47c8c3b1.png",D=a.p+"static/media/arim-yays.41c2cc8f.png",G=a(139),N=function(e){var t=n.a.useState(!1),a=Object(d.a)(t,2),i=a[0],r=a[1],c=n.a.useState(!1),s=Object(d.a)(c,2),o=s[0],l=s[1],u=n.a.useState(""),m=Object(d.a)(u,2),p=m[0],j=m[1],b=function(t){t.preventDefault(),t.stopPropagation(),A.decode(k[e.puzzleId])==p.toUpperCase().replace(/[^A-Z0-9]/gi,"")?(r(!0),l(!1)):l(!0)},g=function(){return Object(h.jsx)(G.a,{sx:{boxShadow:1,borderRadius:1,height:"auto"},children:Object(h.jsx)("img",{src:i?D:_,style:{width:"100%",maxWidth:100,height:"auto"}})})},f=function(){return Object(h.jsx)(v.a,{color:"primary",sx:{p:"10px"},"aria-label":"directions",onClick:b,disabled:i,children:i||o?Object(h.jsx)(g,{}):Object(h.jsx)(S.a,{})})};return"undefined"!==typeof e.secret&&i?Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"you freed a the me! thank you forever!"}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:P})})]}):Object(h.jsxs)(w.a,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",height:60},children:[Object(h.jsx)(z.a,{sx:{ml:1,flex:1},placeholder:e.prompt,inputProps:{"aria-label":"submit your answer"},onChange:function(e){j(e.target.value),l(!1)},onKeyPress:function(e){"Enter"===e.key&&b(e)},disabled:i,error:o}),Object(h.jsx)(I.a,{sx:{height:28,m:.5},orientation:"vertical"}),Object(h.jsx)(f,{})]})},B=function(e){return Object(h.jsxs)(b.a,{spacing:3,children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{children:e.subTitle}),Object(h.jsx)(N,{prompt:"reply",submitText:"Send",puzzleId:e.puzzleId,secret:e.secret}),Object(h.jsx)(w.a,{sx:{p:"2px 4px",display:"flex",alignItems:"left"},children:e.contents})]})};function L(e){return Object(h.jsx)("img",{src:"c"==e.val?x:O,style:{maxHeight:100,maxWidth:100,transform:"r"==e.val?"scaleX(-1)":""}})}var W=[["c","c","c","t"],["c","c","t","c","c"],["c","r","r","c","c","c","t"]];function H(e,t){return Object(h.jsx)(y.a,{container:!0,columns:e.length,spacing:2,children:e.map((function(e,a){return Object(h.jsxs)(y.a,{item:!0,children:[" ",Object(h.jsx)(L,{val:e})," "]},a+t)}))})}var R=function(){return B({title:"Learning is not in the cards",subTitle:"All my classes are hard, no matter what school I go to!",puzzleId:1,contents:Object(h.jsx)(y.a,{container:!0,spacing:2,children:W.map((function(e,t){return Object(h.jsx)(y.a,{container:!0,children:H(e,t)},e)}))})})},J=a(150),E=a(37);var K=function(){var e=["m\u2019i gonna tlel you somethnig very important","you are sml brain and are stinky and need a hot tbu","so get on that","smell you later","youll probab smell bad"];return Object(h.jsx)(y.a,{container:!0,children:Object(h.jsx)(y.a,{item:!0,children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(E.b,{children:"hey"}),Object(h.jsx)(E.c,{children:"hey"}),e.map((function(e){return Object(h.jsx)(E.b,{avater:Object(h.jsx)(J.a,{children:"KS"}),children:e},e)})),Object(h.jsx)(E.c,{children:Object(h.jsx)(N,{prompt:"reply",submitText:"Send",puzzleId:0,color:"blue"})})]})})})},Z=a(151);var q=function(){return B({title:"Nothing personal, printer boy",subTitle:"Best practices are so 1900s, worst practices are in! Take notes from the best in the business.",puzzleId:2,contents:Object(h.jsx)(b.a,{spacing:3,children:["Only Bolsonaro can destroy it","Robert and his strip of brined salmon","Long-range nuclear capability (-C)","Pirates of the Seven Seeds","Instant coffee: Just add water!","Turtlenecks are the original sin","Defense Against the Dark Arts? No, true Gamers learn Defense Against the","Catharina-Amalia isn\u2019t sp oiled"].map((function(e){return Object(h.jsx)(Z.a,{color:"info",variant:"outlined",label:e},e)}))})})};var F=function(){return B({title:"Story Tim",subTitle:"I lov a good stry! Here are sme of my favrites:",puzzleId:2,contents:Object(h.jsx)(b.a,{spacing:3,children:["Our uninvited picnic guests each wore three pairs of jeans","When I learned my Dr. owned Death Row, I realized my situation was extremely serious","Every atom in our bodies were filled with energy as we reached the holy city","I could not focus on the moon landing hoax video because every word the presenter said came through his nose","The new power production device faced heavy opposition from the local religious leader","The assassin demonstrated great ability","They mirrored my pose in a possibly-flirtatious manner","The detective ran after the suspect in order to continue the investigation","Vivid visions came to me after just the right amount of alcohol","My one-sided conversation in the temple made the price of admission worthwhile","Our base of operations once stored some number of coins"].map((function(e){return Object(h.jsx)(Z.a,{label:e},e)}))})})},M=a.p+"static/media/age-restricted.a148f3bb.jpeg",Q=a.p+"static/media/lonely.8c3232a7.jpg",U=a.p+"static/media/mirror.eb18e0bf.png",V=a.p+"static/media/dall_or_grante.5d74d65c.jpg",X=a.p+"static/media/furious.e05601d4.png",Y=a.p+"static/media/holey.f1dba5b1.jpg",$=a.p+"static/media/head.463f7e66.png",ee=a.p+"static/media/big_guys_bad_side.24776fee.jpg",te=a.p+"static/media/borat_priya.b973ce7f.jpg",ae=a.p+"static/media/clifford.16b6cda2.jpg",ie=a.p+"static/media/terminal.cc2d2127.png",ne=a(152),re=a(155);var ce=function(){function e(e){return Object(h.jsx)("img",{src:e.image,style:{maxHeight:500,maxWidth:500,width:"100%"}})}var t=[{image:V,clue:6},{image:Y,clue:7},{image:te,clue:6},{image:$,clue:5},{image:ee,clue:5},{image:X,clue:7},{image:ae,clue:8},{image:te,clue:6},{image:X,clue:7},{image:U,clue:12},{image:ie,clue:7},{image:Q,clue:7},{image:M,clue:8},{image:U,clue:12}];return B({title:"Besties",subTitle:"These are some of my best friends! They promise they'll behave...",puzzleId:4,contents:Object(h.jsx)(b.a,{spacing:2,children:t.map((function(t,a){return Object(h.jsxs)(ne.a,{children:[Object(h.jsx)(e,{image:t.image}),Object(h.jsx)(re.a,{title:t.clue})]},a)}))})})},se=a.p+"static/media/mr-arimnaes.fb65dfd7.png",oe=a.p+"static/media/sensei.3fdf57d1.png",le=a.p+"static/media/warped-lamp.14513f5d.png",ue=a.p+"static/media/keenarnor.e89343b2.png",de=a.p+"static/media/chris.bfe87131.png";var me=function(){var e=[{image:se,clue:"5->7"},{image:oe,clue:"3->6, 2->8"},{image:le,clue:"2->5, 12->3"},{image:ue,clue:"6->1, 5->2"},{image:de,clue:"4->4"}];function t(e){return Object(h.jsx)("img",{src:e.image,style:{maxHeight:500,maxWidth:500,width:"100%"}})}return B({title:"PIzza Game Game",subTitle:"I hope you had fune! Lets see waht you've leanred!",puzzleId:5,contents:Object(h.jsx)(b.a,{spacing:2,children:e.map((function(e){return Object(h.jsxs)(ne.a,{children:[Object(h.jsx)(t,{image:e.image}),Object(h.jsx)(re.a,{title:e.clue})]},e.clue)}))}),secret:!0})},pe=[function(){return Object(h.jsx)(f,{})},function(){return Object(h.jsx)(R,{})},function(){return Object(h.jsx)(K,{})},function(){return Object(h.jsx)(q,{})},function(){return Object(h.jsx)(F,{})},function(){return Object(h.jsx)(ce,{})},function(){return Object(h.jsx)(me,{})}],je=["Intro","Learning is not in the cards","Rude","Nothing personal","Story tim","Besties","Pizza Game Game"];var be=function(){var e=n.a.useState(0),t=Object(d.a)(e,2),a=t[0],i=t[1];return Object(h.jsxs)("div",{className:"Game",children:[Object(h.jsx)(m.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(h.jsx)(p.a,{value:a,onChange:function(e,t){i(t)},className:"mb-3",variant:"scrollable",children:je.map((function(e){return Object(h.jsx)(j.a,{label:e},e)}))})}),Object(h.jsx)(m.a,{children:pe[a]()})]})},he=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(be,{})})}}]),a}(i.Component),ge=he;c.a.render(Object(h.jsx)(ge,{}),document.querySelector("#app"))}},[[103,1,2]]]);
//# sourceMappingURL=main.057f2357.chunk.js.map