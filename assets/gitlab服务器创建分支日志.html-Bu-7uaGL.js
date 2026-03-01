import{_ as n,c as s,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(r,e){return a(),s("div",null,e[0]||(e[0]=[i(`<p>gitlab服务器创建分支日志(主要涉及 通过git push 在远程创建分支的记录):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">k8s@HPDEV-31:~/code/yizhi-frontend-v2$ git push origin yizhi-821:yizhi-821</span>
<span class="line">Total 0 (delta 0), reused 0 (delta 0), pack-reused 0</span>
<span class="line">remote: </span>
<span class="line">remote: To create a merge request for yizhi-821, visit:</span>
<span class="line">remote:   https://gitlab.k8s.com:8081/dev/yizhi-frontend-v2/-/merge_requests/new?merge_request%5Bsource_branch%5D=yizhi-821</span>
<span class="line">remote: </span>
<span class="line">remote: Sending mail...</span>
<span class="line">remote: clone new project</span>
<span class="line">remote: Creating branch yizhi-frontend-v2@yizhi-821</span>
<span class="line">remote: Loading git hook: /var/www/gitlab-hooks/hooks/yizhi-frontend-v2.sh</span>
<span class="line">remote: Creating new branch yizhi-821 ...</span>
<span class="line">remote: Cloning into &#39;yizhi-821&#39;...</span>
<span class="line">remote: Warning: Permanently added &#39;[gitlab.k8s.com]:9922&#39; (ED25519) to the list of known hosts.</span>
<span class="line">remote: Run npm install or composer install here after a new branch is created, branch: yizhi-821.</span>
<span class="line">remote: npm WARN ERESOLVE overriding peer dependency</span>
<span class="line">remote: npm WARN While resolving: @typescript-eslint/eslint-plugin@7.13.0</span>
<span class="line">remote: npm WARN Found: eslint@9.5.0</span>
<span class="line">remote: npm WARN node_modules/eslint</span>
<span class="line">remote: npm WARN   dev eslint@&quot;^9.5.0&quot; from the root project</span>
<span class="line">remote: npm WARN   20 more (@eslint-community/eslint-utils, ...)</span>
<span class="line">remote: npm WARN </span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">remote:   └─ .output/server/package.json (1.66 kB) (759 B gzip)</span>
<span class="line">remote: Σ Total size: 25.1 MB (9.24 MB gzip)</span>
<span class="line">remote: [nitro] ✔ You can preview this build using node .output/server/index.mjs</span>
<span class="line">remote: ┌────┬───────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐</span>
<span class="line">remote: │ id │ name      │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │</span>
<span class="line">remote: └────┴───────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘</span>
<span class="line">remote: [PM2][WARN] Applications yizhiFrontend not running, starting...</span>
<span class="line">remote: [PM2][ERROR] Error: Script not found: /app/.output/server/index.mjs</span>
<span class="line">To ssh://gitlab.k8s.com:9922/dev/yizhi-frontend-v2.git</span>
<span class="line"> * [new branch]        yizhi-821 -&gt; yizhi-821</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这个日志主要是为了说明，在gitlab  push创建分支的时候，使用到自定义的git hook(git server端)，创建指定的分支，以及初始化分支项目,关于 git hook 脚本我在另一篇文章中有介绍</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,3)]))}const p=n(l,[["render",t],["__file","gitlab服务器创建分支日志.html.vue"]]),c=JSON.parse('{"path":"/content/other/git/gitlab%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF%E6%97%A5%E5%BF%97.html","title":"gitlab服务器创建分支日志","lang":"en-US","frontmatter":{"sidebar":false,"title":"gitlab服务器创建分支日志","description":"gitlab服务器创建分支日志"},"headers":[],"git":{},"filePathRelative":"content/other/git/gitlab服务器创建分支日志.md"}');export{p as comp,c as data};
