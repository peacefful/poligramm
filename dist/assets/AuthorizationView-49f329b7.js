import{d as g,u as f,r as u,c as x,a as e,t as r,b as o,w as d,v as p,e as h,o as v}from"./index-6af0ad5d.js";import{a as w,_ as y}from"./_plugin-vue_export-helper-5e16b8b3.js";import{u as b}from"./useToogleLang-6f196cdc.js";const k={class:"mt-5 p-1"},S={class:"text-3xl text-center"},V=["placeholder"],z=["placeholder"],B={class:"flex"},U={class:"w-full p-1.5 my-2 bg-polligrammBackground rounded-[10px]"},A={type:"submit",class:"w-full p-1.5 my-2 bg-polligrammBackground rounded-[10px] ml-4"},I="http://localhost:3000/api/auth",L=g({__name:"AuthorizationView",setup(M){const{t:a,updateLocale:c}=b(),m=f(),n=u(""),i=u(""),_=async()=>{if(n.value&&i.value){const s=await w.post(I,{login:n.value,password:i.value});s&&(localStorage.setItem("token",s.data.token),localStorage.setItem("id",s.data.id),localStorage.setItem("uuid",s.data.uuid),m.push("home"))}};return(s,t)=>(v(),x("main",k,[e("h1",S,r(o(a)("authorization")),1),e("form",{class:"flex flex-col max-w-sm min-h-full",onSubmit:t[2]||(t[2]=h(l=>_(),["prevent"]))},[d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),placeholder:o(a)("login")},null,8,V),[[p,n.value]]),d(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),placeholder:o(a)("password")},null,8,z),[[p,i.value]]),e("div",B,[e("button",U,r(o(a)("forgotMyPassword")),1),e("button",A,r(o(a)("login")),1)])],32),e("div",{onClick:t[3]||(t[3]=l=>o(c)()),class:"text-center text-xm text-gray-400 hover:text-gray-100 ease-in duration-100 cursor-pointer"},r(o(a)("updateLanguage")),1)]))}});const E=y(L,[["__scopeId","data-v-c58085af"]]);export{E as default};