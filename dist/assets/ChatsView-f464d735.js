import{l as S,s as U,d as b,k as w,r as _,o as u,c as p,a as i,b as h,u as n,U as k,e as I,w as A,m as j,n as B,q as R,t as g,x as C,y as F,F as E,z as L,A as T,B as z,C as H}from"./index-667504d2.js";const M="/assets/chat-810ec4a5.svg",q="/assets/trash-00570b08.svg";let m;const P=new Uint8Array(16);function G(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(P)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function J(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}const K=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),x={randomUUID:K};function O(e,t,o){if(x.randomUUID&&!t&&!e)return x.randomUUID();e=e||{};const l=e.random||(e.rng||G)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){o=o||0;for(let a=0;a<16;++a)t[o+a]=l[a];return t}return J(l)}const v="http://195.49.210.52:3000/api/chats",y=S.create({baseURL:v});y.defaults.headers.common.Authorization=U.getData("token");const Q=async e=>{e.trim()&&(await y.post(v,{roomName:e,uuid:O(),userId:Number(U.getData("id"))}),e="",location.reload())},W=async e=>{try{y.delete(`${v}/${e}`),location.reload()}catch(t){console.log(t)}},X={class:"flex justify-center sm:flex"},Y=b({__name:"UIFormChat",setup(e){const{t}=w({useScope:"global"}),o=_("");return(l,a)=>(u(),p("form",{onSubmit:a[1]||(a[1]=A(c=>n(Q)(o.value),["prevent"]))},[i("div",X,[h(k,{class:"px-2",bg:"#0054A8",value:o.value,"onUpdate:value":a[0]||(a[0]=c=>o.value=c),placeholder:n(t)("chatName")},null,8,["value","placeholder"]),h(I,{type:"submit",title:n(t)("create"),class:"ml-3"},null,8,["title"])])],32))}}),Z={key:0},ee={class:"text-center text-3xl mt-5"},te={class:"m-2"},se={class:"flex items-center mt-3 justify-between flex-wrap"},ne={class:"flex flex-wrap justify-center"},ae=["onClick"],oe={class:"flex w-20 justify-between"},le=["title"],ie=["title","onClick"],ce=b({__name:"ChatsView",setup(e){const{t}=w({useScope:"global"}),o=_(""),l=j();B(async()=>await l.getUserData());const a=_(!1),{enterChat:c,closeChat:D,showChats:N,uuid:V,room:$}=R();return(re,d)=>n(N)===!0?(u(),p("div",Z,[i("h1",ee,g(n(t)("chatsList")),1),i("div",te,[i("div",se,[i("div",ne,[h(I,{onClick:d[0]||(d[0]=r=>a.value=!a.value),title:n(t)("createChat")},null,8,["title"]),a.value?(u(),C(Y,{key:0,class:"ml-4"})):F("",!0)]),h(k,{class:"p-2",bg:"#0054A8",value:o.value,"onUpdate:value":d[1]||(d[1]=r=>o.value=r)},null,8,["value"])]),(u(!0),p(E,null,L(n(H)(n(l).user.chats,o.value),r=>(u(),p("ul",{class:"mt-5",key:r.id},[i("li",{class:"bg-blue-500 p-5 rounded-md flex justify-between items-center cursor-pointer hover:bg-blue-400 ease-in duration-100 mt-2",onClick:f=>n(c)(r.uuid,r.roomName)},[z(g(r.roomName)+" ",1),i("div",oe,[i("img",{title:n(t)("goChat"),src:M,alt:""},null,8,le),i("img",{title:n(t)("delete"),onClick:f=>n(W)(r.id),src:q,alt:""},null,8,ie)])],8,ae)]))),128))])])):(u(),C(T,{key:1,onCloseChat:n(D),uuid:n(V),name:n($)},null,8,["onCloseChat","uuid","name"]))}});export{ce as default};