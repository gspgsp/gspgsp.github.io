import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const t={};function l(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>git提交的OPEN_SSL和Time_Out问题以及解决办法:</p><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git" data-title="git"><pre><code><span class="line"><span class="token command">$ git push<span class="token parameter"> -u</span> origin master  </span></span>
<span class="line">fatal: unable to access <span class="token string">&#39;https://github.com/gspgsp/vue-blog.git/&#39;</span>: Failed to connect to github.com port 443 after 21045 ms: Timed out  </span>
<span class="line"></span>
<span class="line">git config --global --unset https.proxy</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token command">$ git push<span class="token parameter"> -u</span> origin master  </span></span>
<span class="line">fatal: unable to access <span class="token string">&#39;https://github.com/gspgsp/vue-blog.git/&#39;</span>: OpenSSL SSL_read: Connection was reset, errno 10054  </span>
<span class="line"></span>
<span class="line">git config --global http.sslVerify <span class="token string">&quot;false&quot;</span></span>
<span class="line"></span>
<span class="line">//可能是因为本地开启了代理的缘故</span>
<span class="line">直接恢复，使用代理：</span>
<span class="line">git config --global http.proxy <span class="token string">&quot;http://127.0.0.1:7890&quot;</span></span>
<span class="line">git config --global https.proxy <span class="token string">&quot;https://127.0.0.1:7890&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token command">再执行 $ git push<span class="token parameter"> -u</span> origin master 就好了</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>host文件配置:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">140.82.112.3 github.com</span>
<span class="line">185.199.108.153	assets-cdn.github.com</span>
<span class="line">185.199.109.153 assets-cdn.github.com</span>
<span class="line">185.199.110.153 assets-cdn.github.com</span>
<span class="line">185.199.111.153 assets-cdn.github.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const r=n(t,[["render",l],["__file","git提交的OPEN_SSL和Time_Out问题以及解决办法.html.vue"]]),d=JSON.parse('{"path":"/content/other/git/git%E6%8F%90%E4%BA%A4%E7%9A%84OPEN_SSL%E5%92%8CTime_Out%E9%97%AE%E9%A2%98%E4%BB%A5%E5%8F%8A%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html","title":"git提交的OPEN_SSL和Time_Out问题以及解决办法","lang":"en-US","frontmatter":{"sidebar":false,"title":"git提交的OPEN_SSL和Time_Out问题以及解决办法","description":"git提交的OPEN_SSL和Time_Out问题以及解决办法"},"headers":[],"git":{},"filePathRelative":"content/other/git/git提交的OPEN_SSL和Time_Out问题以及解决办法.md"}');export{r as comp,d as data};
