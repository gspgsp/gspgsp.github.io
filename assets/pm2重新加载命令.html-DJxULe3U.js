import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function p(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>pm2重新加载命令:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pm2 delete ecosystem.config.js</span>
<span class="line">当你运行 pm2 delete ecosystem.config.js 时，PM2 会查找指定配置文件中定义的所有进程，并将其停止并从进程列表中删除。这个命令对于清理不再需要运行的应用程序或者重新启动应用程序时非常有用。</span>
<span class="line">pm2 start ecosystem.config.js //执行完上面的命令再执行这个就可以重新加载配置了</span>
<span class="line"></span>
<span class="line">pm2 reload ecosystem.config.js</span>
<span class="line">如果修改了 PM2 的配置文件（比如 ecosystem.config.js），然后想要让新的配置生效，可能需要重新加载配置或者重启 PM2 进程管理器。直接使用 pm2 stop 然后 pm2 start 并不会重新加载配置文件，因此新的配置不会生效。</span>
<span class="line">一种更简单的方法是使用 pm2 reload 命令，它会重新加载配置文件而不需要先停止再启动进程。</span>
<span class="line"></span>
<span class="line">pm2 restart ecosystem.config.js，这个和 pm2 stop 然后 pm2 start效果一样，都不会重新加载配置文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何使用pm2管理多个应用程序的ecosystem.config.js文件？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">分析如下ecosystem.config.js.js文件</span>
<span class="line">module.exports = {</span>
<span class="line">  apps: [{</span>
<span class="line">    name: &#39;app1&#39;,</span>
<span class="line">    脚本&#39;./app1/index.js&#39;,</span>
<span class="line">    watch: true,</span>
<span class="line">    ignore_watch：[&#39;node_modules&#39;],</span>
<span class="line">    env: {</span>
<span class="line">      NODE_ENV: &#39;production&#39;,</span>
<span class="line">      port： 3001</span>
<span class="line">    }</span>
<span class="line">  }]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">要想实现管理多个应用就需要为每个应用不同的命名</span>
<span class="line">然后在管理应用的时候加上 --name参数，比如这里的启动指定应用 pm2 start ecosystem.config.js --name=&quot;app1&quot;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=n(l,[["render",p],["__file","pm2重新加载命令.html.vue"]]),r=JSON.parse('{"path":"/content/tool/front/pm2%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E5%91%BD%E4%BB%A4.html","title":"pm2重新加载命令","lang":"en-US","frontmatter":{"sidebar":false,"title":"pm2重新加载命令","description":"pm2重新加载命令"},"headers":[],"git":{},"filePathRelative":"content/tool/front/pm2重新加载命令.md"}');export{d as comp,r as data};
