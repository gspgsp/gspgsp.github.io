import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>git之post-merge钩子函数: 在使用这个钩子函数之前，先补充一个git pull 的原理: git pull 包含两个操作，git fetch和git merge</p><p>git fetch：将远程仓库拉取到本地仓库 git merge：将本地仓库与分支进行merge git pull执行时，会先向远程发送git-upload-pack请求，携带是本地仓库commit的记录，如果一样就不需要拉取，不一样就将远程仓库拉取下来。</p><p>所以可以通过git pull或者 git merge 触发这个钩子函数.</p><p>打开项目的 .git目录，然后打开里面的hooks目录，会发现各种 .sample结尾的钩子函数. vim post-merge 新建文件，根据项目pull之后需要执行的操作，添加脚本，这里给个例子:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;composer install&#39;</span></span>
<span class="line">php8.1 /usr/bin/composer <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;invoking schema update&quot;</span></span>
<span class="line">php8.1 bin/console doctrine:migrations:migrate</span>
<span class="line"></span>
<span class="line"><span class="token comment">#yarn</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;build admin resource&#39;</span></span>
<span class="line"><span class="token function">yarn</span> run dev</span>
<span class="line"></span>
<span class="line"><span class="token comment">#web</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;build web resource&#39;</span></span>
<span class="line"><span class="token builtin class-name">cd</span> web-project</span>
<span class="line"><span class="token function">yarn</span> build</span>
<span class="line"></span>
<span class="line"><span class="token comment">#restart service</span></span>
<span class="line">supervisorctl restart web:web_project_00</span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">exit</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过上面的操作，php 安装指定的依赖 数据库迁移 以及相关静态资源的打包；nuxt 打包资源; supervisorctl 重启守护进程</p>`,6)]))}const r=n(l,[["render",t],["__file","git之post-merge钩子函数.html.vue"]]),o=JSON.parse('{"path":"/content/other/git/git%E4%B9%8Bpost-merge%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html","title":"git之post-merge钩子函数","lang":"en-US","frontmatter":{"sidebar":false,"title":"git之post-merge钩子函数","description":"git之post-merge钩子函数"},"headers":[],"git":{},"filePathRelative":"content/other/git/git之post-merge钩子函数.md"}');export{r as comp,o as data};
