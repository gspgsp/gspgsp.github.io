import{_ as e,o as n,c as s,g as i}from"./app.66ae8700.js";const o={},t=i(`<p>golang\u4E4B\u8FD0\u884C\u73AF\u5883\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E</p><p>\u4E3B\u8981\u662F\u5728\u901A\u8FC7 go enc -w \u914D\u7F6Egolang\u8FD0\u884C\u7684\u73AF\u5883\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u4F1A\u6709\u4E0B\u9762\u7684\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@k8smaster ~]# go env -w GO111MODULE=on
[root@k8smaster ~]# go env -w GOPROXY=https://goproxy.cn,direct
warning: go env -w GOPROXY=... does not override conflicting OS environment variable

\u89E3\u51B3\u529E\u6CD5:
[root@k8smaster ~]# unset GOPROXY
[root@k8smaster ~]# go env -w GOPROXY=https://goproxy.cn,direct

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[t];function a(l,c){return n(),s("div",null,r)}var v=e(o,[["render",a],["__file","golang\u4E4B\u8FD0\u884C\u73AF\u5883\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E.html.vue"]]);export{v as default};
