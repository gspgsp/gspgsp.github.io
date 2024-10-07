import{_ as e,o as n,c as s,g as i}from"./app.d66d8774.js";const a={},l=i(`<p>k8s\u96C6\u7FA4\u914D\u7F6EHTTPS\u8BBF\u95EE: \u4E3B\u8981\u662F\u8981\u914D\u7F6E\u4E00\u4E2ASecret\u7684\u8D44\u6E90\uFF0C\u901A\u8FC7yaml\u6587\u4EF6\u914D\u7F6E(\u4E0D\u60F3\u901A\u8FC7\u547D\u4EE4\u884C)\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: v1
kind: Secret
metadata:
  name: k8s-secret-tls
  namespace: hello-api-namespace
data:
  tls.crt: \u6587\u4EF6\u5185\u5BB9
  tls.key: \u6587\u4EF6\u5185\u5BB9
type: kubernetes.io/tls

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function d(c,r){return n(),s("div",null,t)}var m=e(a,[["render",d],["__file","k8s\u96C6\u7FA4\u914D\u7F6EHTTPS\u8BBF\u95EE.html.vue"]]);export{m as default};
