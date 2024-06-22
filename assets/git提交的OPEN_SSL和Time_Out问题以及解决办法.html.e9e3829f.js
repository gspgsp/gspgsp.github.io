import{_ as s,o as n,c as e,g as i}from"./app.dd03cafd.js";const a={},t=i(`<p>git\u63D0\u4EA4\u7684OPEN_SSL\u548CTime_Out\u95EE\u9898\u4EE5\u53CA\u89E3\u51B3\u529E\u6CD5:</p><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code><span class="token command">$ git push<span class="token parameter"> -u</span> origin master  </span>
fatal: unable to access <span class="token string">&#39;https://github.com/gspgsp/vue-blog.git/&#39;</span>: Failed to connect to github.com port 443 after 21045 ms: Timed out  

git config --global --unset https.proxy


<span class="token command">$ git push<span class="token parameter"> -u</span> origin master  </span>
fatal: unable to access <span class="token string">&#39;https://github.com/gspgsp/vue-blog.git/&#39;</span>: OpenSSL SSL_read: Connection was reset, errno 10054  

git config --global http.sslVerify <span class="token string">&quot;false&quot;</span>

//\u53EF\u80FD\u662F\u56E0\u4E3A\u672C\u5730\u5F00\u542F\u4E86\u4EE3\u7406\u7684\u7F18\u6545
\u76F4\u63A5\u6062\u590D\uFF0C\u4F7F\u7528\u4EE3\u7406\uFF1A
git config --global http.proxy <span class="token string">&quot;http://127.0.0.1:7890&quot;</span>
git config --global https.proxy <span class="token string">&quot;https://127.0.0.1:7890&quot;</span>

<span class="token command">\u518D\u6267\u884C $ git push<span class="token parameter"> -u</span> origin master \u5C31\u597D\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>host\u6587\u4EF6\u914D\u7F6E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>140.82.112.3 github.com
185.199.108.153	assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function c(d,o){return n(),e("div",null,l)}var u=s(a,[["render",c],["__file","git\u63D0\u4EA4\u7684OPEN_SSL\u548CTime_Out\u95EE\u9898\u4EE5\u53CA\u89E3\u51B3\u529E\u6CD5.html.vue"]]);export{u as default};
