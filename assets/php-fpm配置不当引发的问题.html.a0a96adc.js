import{_ as e,o as n,c as i,g as s}from"./app.d66d8774.js";const l={},d=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6700\u8FD1\u5728\u914D\u7F6E php \u73AF\u5883\u7684\u65F6\u5019\uFF0C\u9047\u5230\u4E00\u4E2A\u95EE\u9898\uFF0C\u660E\u660E\u914D\u7F6E\u4E86 nginx \u7684user\u548Cgroup\uFF0C\u4E5F\u914D\u7F6E\u4E86 php-fpm\u7684 user\u548Cgroup\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u662F\u4F1A
\u62A5 502 \u9519\u8BEF\u5462

\u5206\u6790\u539F\u56E0\u5982\u4E0B \u5F53\u6211\u4EEC\u5728 \u914D\u7F6Ephp-fm\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u5982\u679Clisten \u914D\u7F6E\u4E86tcp\u8FDE\u63A5 \u5982\uFF1Alisten = 127.0.0.1:9000 \uFF0C\u6309\u4E0A\u9762\u7684\u914D\u7F6E
\u8FD0\u884C\u4E0D\u4F1A\u6709\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F\u5982\u679C\u914D\u7F6E\u4E86socket\u8FDE\u63A5\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6709\u95EE\u9898\uFF0C\u9700\u8981\u914D\u7F6E listen.owner\u548Clisten.group = nobody\u8FD9\u4E24\u4E2A\u53C2\u6570\uFF0C
\u8FD9\u4E24\u4E2A\u53C2\u6570\u7684\u89E3\u91CA\u5982\u4E0B\uFF1A

; Set permissions for unix socket, if one is used. In Linux, read/write
; permissions must be set in order to allow connections from a web server.
; Default Values: user and group are set as the running user
;                 mode is set to 0660
;listen.owner = nobody
;listen.group = nobody
;listen.mode = 0660

\u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\uFF1Asock\u6587\u4EF6\u7684\u8BFB\u5199\u7528\u6237 \u90FD\u5FC5\u987B\u548C web\u670D\u52A1\u5668\u7684\u4E00\u81F4\uFF0C\u8FD9\u91CC\u5C31\u662F\u8981\u548Cnginx\u7684\u7528\u6237\u4E00\u81F4\uFF0C\u6240\u4EE5\u628A\u8FD9\u91CC\u914D\u7F6E\u4E00\u4E0B\uFF0C\u91CD\u542Ffpm\u548Cnginx
\u5C31\u53EF\u4EE5\u4E86

\u90A3\u4E48 user/group \u548C listen.owner/listen.group\u7684\u533A\u522B\u662F\u5565\uFF0C\u524D\u8005\u662Fphp-fpm\u542F\u52A8\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4\uFF0C\u540E\u8005\u662Fsock\u8FDE\u63A5\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4\uFF0C\u5F53
\u4E3A TCP \u8FDE\u63A5\u7684\u65F6\u5019 \uFF0C\u8FD9\u4E2A\u5C31\u4E0D\u4F1A\u6709\u5F71\u54CD\u4E86\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[d];function o(a,t){return n(),i("div",null,r)}var v=e(l,[["render",o],["__file","php-fpm\u914D\u7F6E\u4E0D\u5F53\u5F15\u53D1\u7684\u95EE\u9898.html.vue"]]);export{v as default};
