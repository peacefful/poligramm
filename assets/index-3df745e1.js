import{a as V,h as w,b as _,s as A,d as x,u as T,c as E,r as F,e as v,f as N,g as $,i as U,o,j as k,w as c,k as n,l as s,m,n as g,t as p,p as B,q as S,F as D,S as I,_ as L}from"./index-f8fe02d2.js";import{C as j,p as z,a as H,A as O,_ as R}from"./chart-d790841a.js";import{u as q,_ as b,F as J}from"./Form-81e7f510.js";const{Axios:ae,AxiosError:P,CanceledError:oe,isCancel:ne,CancelToken:re,VERSION:ie,all:ce,Cancel:le,isAxiosError:ue,spread:de,toFormData:_e,AxiosHeaders:pe,HttpStatusCode:me,formToJSON:ge,getAdapter:fe,mergeConfig:he}=V,G=async l=>{try{const e=(await w.post("/api/users/auth",{...l})).data;return e&&(_.set("accessToken",e.accessToken),_.set("refreshToken",e.refreshToken),_.set("uuid",e.uuid),A.setData("id",e.id)),e}catch(e){return e}},K={class:"mt"},M={key:0},Q={key:1},W=x({__name:"LoginForm",setup(l){j.register(z,H,O);const e=T(),{t:r}=E({useScope:"global"}),a=F({login:"",password:""}),f=v(!1),h=v(0),{handleSubmit:y}=q({validationSchema:N({...$})}),C=y(async()=>{var t;const i=await G(a);if(!(i instanceof P)&&i.accessToken)e.push("/chats");else{f.value=!0;const u=i;h.value=(t=u.response)==null?void 0:t.status}});return(i,t)=>{const u=U("router-link");return o(),k(s(J),{title:"authorization","button-title":"signIn","handler-submit":s(C)},{labels:c(()=>[n(s(b),{name:"login",class:"vee-input","error-name":"incorrectesLogin",modelValue:a.login,"onUpdate:modelValue":t[0]||(t[0]=d=>a.login=d)},null,8,["modelValue"]),m("div",K,[n(s(b),{name:"password",type:"password",class:"vee-input","error-name":"incorrectesPassword",modelValue:a.password,"onUpdate:modelValue":t[1]||(t[1]=d=>a.password=d)},null,8,["modelValue"])]),f.value?(o(),k(s(R),{key:0,"type-toast":"error"},{default:c(()=>[h.value===404?(o(),g("div",M,p(s(r)("notAccount",2)),1)):(o(),g("div",Q,"Не правильный логин или пароль"))]),_:1})):B("",!0)]),hint:c(()=>[S(p(s(r)("notAccount"))+" ",1),n(u,{class:"underline",to:"/signup"},{default:c(()=>[S(p(s(r)("signUp",2)),1)]),_:1})]),_:1},8,["handler-submit"])}}}),X={class:"signin"},Y={class:"hidden sm:block"},Z=x({__name:"Signin",setup(l){return(e,r)=>(o(),g(D,null,[m("div",X,[n(s(W))]),m("div",Y,[n(s(I),{class:"flex justify-end mr-4"})])],64))}});const ve=L(Z,[["__scopeId","data-v-9b3bc7ea"]]);export{ve as default};
