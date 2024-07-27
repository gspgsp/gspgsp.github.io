import{_ as n,o as s,c as a,g as e}from"./app.6e4bf74b.js";const t={},i=e(`<p>nginx\u7B80\u5355\u8BBF\u95EE\u63A7\u5236\u7684\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F:<br> 1\u3001auth_basic \u672C\u673A\u8BA4\u8BC1<br> 2\u3001ngx_http_auth_request_module \u7B2C\u4E09\u65B9\u8BA4\u8BC1</p><p>\u7B2C\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  local.server.com<span class="token punctuation">;</span>
    
    auth_basic <span class="token string">&quot;User Authentication&quot;</span><span class="token punctuation">;</span>
    auth_basic_user_file /usr/local/nginx-1.10.2/conf/pass.db<span class="token punctuation">;</span> //\u9700\u8981\u7EF4\u62A4 pass.db \u6587\u4EF6
    
    location / <span class="token punctuation">{</span>
        root   /data/www<span class="token punctuation">;</span>
        index  index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u79CD\u5B9E\u73B0\u65B9\u5F0F:</p><ul><li>\u7F16\u8BD1 Nginx \u65F6\u9700\u8981\u6DFB\u52A0\u8BE5\u6A21\u5757 --with-http_auth_request_module</li><li>\u8BE5\u6A21\u5757\u53EF\u4EE5\u5C06\u5BA2\u6237\u7AEF\u8F93\u5165\u7684\u7528\u6237\u540D\u3001\u5BC6\u7801 username:password \u901A\u8FC7 Base64 \u7F16\u7801\u540E\u5199\u5165 Request Headers \u4E2D</li><li>\u4F8B\u5982\uFF1Azhang:123456 -&gt; Authorization:Basic d2FuZzp3YW5n=</li><li>\u7136\u540E\u901A\u8FC7\u7B2C\u4E09\u65B9\u7A0B\u5E8F\u89E3\u7801\u540E\u8DDF\u6570\u636E\u5E93\u4E2D\u7528\u6237\u540D\u3001\u5BC6\u7801\u8FDB\u884C\u6BD4\u8F83\uFF0CNginx \u670D\u52A1\u5668\u901A\u8FC7 header \u7684\u8FD4\u56DE\u72B6\u6001\u5224\u65AD\u662F\u5426\u8BA4\u8BC1\u901A\u8FC7\u3002</li></ul><p>\u4F7F\u7528:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name local.server.com<span class="token punctuation">;</span>

    auth_request /auth<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
        index  index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location /auth <span class="token punctuation">{</span>
        proxy_pass http://auth.gsplovedss.xyz/AuthRequestServer.php<span class="token punctuation">;</span>
        proxy_pass_request_body off<span class="token punctuation">;</span>
        proxy_set_header Content-Length <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        proxy_set_header X-Original-URI <span class="token variable">$request_uri</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AuthRequestServer.php\u7684\u4EE3\u7801\u5982\u4E0B:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_AUTH_USER&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_AUTH_PW&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_AUTH_USER&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token variable">$password</span> <span class="token operator">=</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_AUTH_PW&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$username</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;zhang&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$password</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;WWW-Authenticate: Basic realm=&quot;Auth Server&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;HTTP/1.0 401 Unauthorized&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[i];function l(c,o){return s(),a("div",null,p)}var r=n(t,[["render",l],["__file","nginx\u7B80\u5355\u8BBF\u95EE\u63A7\u5236.html.vue"]]);export{r as default};
