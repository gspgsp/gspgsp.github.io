import{_ as M,e as c,C as m,o as g,c as h,b as s,g as V,v as C,D as R,t as I,h as v}from"./app-Cl2rcTth.js";const k="/images/qrcode_for_me.jpg",P={__name:"PasswordModal",props:{isModalVisible:{type:Boolean,required:!0}},emits:["update:isModalVisible"],setup(w,{expose:o,emit:l}){o();const e=l,a=()=>{e("update:isModalVisible",!1),u()},n=c(""),r=c(""),d=m(),u=()=>{n.value="",r.value=""};function p(t){return t.replace(/[\u4e00-\u9fa5]/g,i=>encodeURIComponent(i))}const _={emit:e,closeModal:a,passwordInput:n,errorMessage:r,router:d,resetForm:u,encodeChinese:p,handleVerify:()=>{if(typeof window<"u"){const t=localStorage.getItem("intended_route"),i=__PROTECTED_ROUTES__,f=Object.entries(i).find(([b])=>(console.log("intendedRoute is:",t),t.startsWith(p(b))));if(!f)return;const[j,y]=f;n.value===y?(localStorage.setItem(`auth_${t}`,"true"),a(),d.push(t)):r.value="密码错误，请重试"}},handleCancel:()=>{a(),d.push("/")},ref:c,get useRouter(){return m}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}},S={key:0,class:"password-modal-overlay"},x={class:"password-modal"},B={class:"input-group"},D={key:0,class:"error"};function E(w,o,l,e,a,n){return l.isModalVisible?(g(),h("div",S,[s("div",x,[o[1]||(o[1]=s("p",{class:"title"},"关注公众号，回复 code 即可获取密码",-1)),o[2]||(o[2]=s("img",{src:k,alt:""},null,-1)),s("div",B,[V(s("input",{type:"password","onUpdate:modelValue":o[0]||(o[0]=r=>e.passwordInput=r),placeholder:"请输入访问密码",onKeyup:R(e.handleVerify,["enter"])},null,544),[[C,e.passwordInput]]),e.errorMessage?(g(),h("div",D,I(e.errorMessage),1)):v("",!0)]),s("div",{class:"button-group"},[s("button",{onClick:e.handleVerify},"确认"),s("button",{onClick:e.handleCancel,class:"cancel"},"取消")])])])):v("",!0)}const q=M(P,[["render",E],["__scopeId","data-v-1bf15b89"],["__file","PasswordModal.vue"]]);export{q as default};