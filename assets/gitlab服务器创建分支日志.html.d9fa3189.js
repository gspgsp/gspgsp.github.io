import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const r={},t=s(`<p>gitlab\u670D\u52A1\u5668\u521B\u5EFA\u5206\u652F\u65E5\u5FD7(\u4E3B\u8981\u6D89\u53CA \u901A\u8FC7git push \u5728\u8FDC\u7A0B\u521B\u5EFA\u5206\u652F\u7684\u8BB0\u5F55):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>k8s@HPDEV-31:~/code/yizhi-frontend-v2$ git push origin yizhi-821:yizhi-821
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: To create a merge request for yizhi-821, visit:
remote:   https://gitlab.k8s.com:8081/dev/yizhi-frontend-v2/-/merge_requests/new?merge_request%5Bsource_branch%5D=yizhi-821
remote: 
remote: Sending mail...
remote: clone new project
remote: Creating branch yizhi-frontend-v2@yizhi-821
remote: Loading git hook: /var/www/gitlab-hooks/hooks/yizhi-frontend-v2.sh
remote: Creating new branch yizhi-821 ...
remote: Cloning into &#39;yizhi-821&#39;...
remote: Warning: Permanently added &#39;[gitlab.k8s.com]:9922&#39; (ED25519) to the list of known hosts.
remote: Run npm install or composer install here after a new branch is created, branch: yizhi-821.
remote: npm WARN ERESOLVE overriding peer dependency
remote: npm WARN While resolving: @typescript-eslint/eslint-plugin@7.13.0
remote: npm WARN Found: eslint@9.5.0
remote: npm WARN node_modules/eslint
remote: npm WARN   dev eslint@&quot;^9.5.0&quot; from the root project
remote: npm WARN   20 more (@eslint-community/eslint-utils, ...)
remote: npm WARN 
...
...
remote:   \u2514\u2500 .output/server/package.json (1.66 kB) (759 B gzip)
remote: \u03A3 Total size: 25.1 MB (9.24 MB gzip)
remote: [nitro] \u2714 You can preview this build using node .output/server/index.mjs
remote: \u250C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
remote: \u2502 id \u2502 name      \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21BA    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502
remote: \u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
remote: [PM2][WARN] Applications yizhiFrontend not running, starting...
remote: [PM2][ERROR] Error: Script not found: /app/.output/server/index.mjs
To ssh://gitlab.k8s.com:9922/dev/yizhi-frontend-v2.git
 * [new branch]        yizhi-821 -&gt; yizhi-821
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD9\u4E2A\u65E5\u5FD7\u4E3B\u8981\u662F\u4E3A\u4E86\u8BF4\u660E\uFF0C\u5728gitlab  push\u521B\u5EFA\u5206\u652F\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u5230\u81EA\u5B9A\u4E49\u7684git hook(git server\u7AEF)\uFF0C\u521B\u5EFA\u6307\u5B9A\u7684\u5206\u652F\uFF0C\u4EE5\u53CA\u521D\u59CB\u5316\u5206\u652F\u9879\u76EE,\u5173\u4E8E git hook \u811A\u672C\u6211\u5728\u53E6\u4E00\u7BC7\u6587\u7AE0\u4E2D\u6709\u4ECB\u7ECD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),d=[t];function l(o,a){return i(),n("div",null,d)}var v=e(r,[["render",l],["__file","gitlab\u670D\u52A1\u5668\u521B\u5EFA\u5206\u652F\u65E5\u5FD7.html.vue"]]);export{v as default};
