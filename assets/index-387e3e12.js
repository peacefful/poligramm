import{h,d as p,u as w,e as S,r as b,g as U,z as x,j as y,o as _,k,w as m,l as t,m as e,n as o,x as d,t as c,q as F,F as $,S as B,y as N}from"./index-42c5f00f.js";import{u as C,_ as l,F as E}from"./Form-0c2f3e56.js";const I=async i=>{try{return(await h.post("/api/users",{...i})).data}catch{return new Error("Error registration")}},j={class:"mt"},D={class:"mt"},L={class:"mt"},R=p({__name:"RegForm",setup(i){const r=w(),{t:u}=S({useScope:"global"}),s=b({login:"",password:"",name:"",surname:"",uuid:""}),{handleSubmit:g}=C({validationSchema:U({...x})}),V=g(async()=>{await I(s)&&r.push("/")});return(v,a)=>{const f=y("router-link");return _(),k(e(E),{title:"signUp","button-title":"signUp","handler-submit":e(V)},{labels:m(()=>[t(e(l),{name:"name",class:"vee-input","error-name":"incorrectesName",modelValue:s.name,"onUpdate:modelValue":a[0]||(a[0]=n=>s.name=n)},null,8,["modelValue"]),o("div",j,[t(e(l),{name:"surname",class:"vee-input","error-name":"incorrectesSurname",modelValue:s.surname,"onUpdate:modelValue":a[1]||(a[1]=n=>s.surname=n)},null,8,["modelValue"])]),o("div",D,[t(e(l),{name:"login",class:"vee-input","error-name":"incorrectesLogin",modelValue:s.login,"onUpdate:modelValue":a[2]||(a[2]=n=>s.login=n)},null,8,["modelValue"])]),o("div",L,[t(e(l),{name:"password",class:"vee-input",type:"password","error-name":"incorrectesPassword",modelValue:s.password,"onUpdate:modelValue":a[3]||(a[3]=n=>s.password=n)},null,8,["modelValue"])])]),hint:m(()=>[d(c(e(u)("hasAccount"))+" ",1),t(f,{class:"underline",to:"/"},{default:m(()=>[d(c(e(u)("signIn",2)),1)]),_:1})]),_:1},8,["handler-submit"])}}}),q={class:"signin"},z={class:"hidden sm:block"},A=p({__name:"Signup",setup(i){return(r,u)=>(_(),F($,null,[o("div",q,[t(e(R))]),o("div",z,[t(e(B),{class:"flex justify-end mr-4"})])],64))}});const G=N(A,[["__scopeId","data-v-57d4226b"]]);export{G as default};
