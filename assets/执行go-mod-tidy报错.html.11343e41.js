import{_ as i,o as n,c as e,g as o}from"./app.b04686bd.js";const d={},c=o(`<p>\u6267\u884Cgo-mod-tidy\u62A5\u9519:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ go mod tidy
go: finding module for package github.com/gin-gonic/gin
go: downloading github.com/gin-gonic/gin v1.9.1
gitee.com/qinhong_design/duoxiaozhan-api/main imports
        github.com/gin-gonic/gin: github.com/gin-gonic/gin@v1.9.1: verifying module: github.com/gin-gonic/gin@v1.9.1: open /usr/local/go-project/pkg/sumdb/sum.golang.org/latest: no such file or directory

  
\u5982\u679Cgo get\u65F6\u5565\u7684\u51FA\u95EE\u9898, \u4E00\u5B9A\u8BB0\u5F97\u5173\u95EDGOSUMDB, \u547D\u4EE4\u4E3A. go env -w GOSUMDB=off \u51E0\u4E4E\u6240\u6709\u548Cgo mod\u6709\u5173\u7684\u7591\u96BE\u6742\u75C7,\u90FD\u662F\u6CA1\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g=[c];function s(a,t){return n(),e("div",null,g)}var r=i(d,[["render",s],["__file","\u6267\u884Cgo-mod-tidy\u62A5\u9519.html.vue"]]);export{r as default};
