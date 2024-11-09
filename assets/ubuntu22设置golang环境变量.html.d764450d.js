import{_ as e,o as n,c as s,g as i}from"./app.66ae8700.js";const l={},u=i(`<p>ubuntu22\u8BBE\u7F6Egolang\u73AF\u5883\u53D8\u91CF:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#PATH
export GOROOT=/usr/local/go
export GOPATH=/usr/local/go-project
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
  
\u8FD0\u884C sudo go mod init xxx ,\u62A5:sudo: go: command not found
  
\u6211\u4EEC\u4F7F\u7528 sudo \u65F6\uFF0C\u4F7F\u7528\u7684\u914D\u7F6E\u6587\u4EF6\u662F /etc/sudoers\u3002
\u914D\u7F6E /etc/sudoers \u6587\u4EF6\u4E2D\u7684 Defaults secure_path \u8FD9\u4E00\u9879\u3002\u5C06 $GOROOT/bin \u76EE\u5F55\u52A0\u5165\u8FDB\u53BB
Defaults secure_path \u8FD9\u4E00\u884C\uFF1A
Defaults        secure_path=&quot;/usr/local/go/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[u];function d(o,r){return n(),s("div",null,a)}var c=e(l,[["render",d],["__file","ubuntu22\u8BBE\u7F6Egolang\u73AF\u5883\u53D8\u91CF.html.vue"]]);export{c as default};
