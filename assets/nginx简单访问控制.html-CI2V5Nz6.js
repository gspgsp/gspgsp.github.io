import{_ as s,c as a,f as e,o as p}from"./app-BB_BIQV8.js";const i={};function t(l,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>nginx简单访问控制的两种实现方式:<br> 1、auth_basic 本机认证<br> 2、ngx_http_auth_request_module 第三方认证</p><p>第一种实现方式:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    server_name  local.server.com<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    auth_basic <span class="token string">&quot;User Authentication&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    auth_basic_user_file /usr/local/nginx-1.10.2/conf/pass.db<span class="token punctuation">;</span> //需要维护 pass.db 文件</span>
<span class="line">    </span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">        root   /data/www<span class="token punctuation">;</span></span>
<span class="line">        index  index.html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种实现方式:</p><ul><li>编译 Nginx 时需要添加该模块 --with-http_auth_request_module</li><li>该模块可以将客户端输入的用户名、密码 username:password 通过 Base64 编码后写入 Request Headers 中</li><li>例如：zhang:123456 -&gt; Authorization:Basic d2FuZzp3YW5n=</li><li>然后通过第三方程序解码后跟数据库中用户名、密码进行比较，Nginx 服务器通过 header 的返回状态判断是否认证通过。</li></ul><p>使用:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    server_name local.server.com<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    auth_request /auth<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">        root   html<span class="token punctuation">;</span></span>
<span class="line">        index  index.html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    location /auth <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http://auth.gsplovedss.xyz/AuthRequestServer.php<span class="token punctuation">;</span></span>
<span class="line">        proxy_pass_request_body off<span class="token punctuation">;</span></span>
<span class="line">        proxy_set_header Content-Length <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        proxy_set_header X-Original-URI <span class="token variable">$request_uri</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AuthRequestServer.php的代码如下:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_AUTH_USER&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_AUTH_PW&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_AUTH_USER&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token variable">$password</span> <span class="token operator">=</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_AUTH_PW&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$username</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;zhang&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$password</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;WWW-Authenticate: Basic realm=&quot;Auth Server&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;HTTP/1.0 401 Unauthorized&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const o=s(i,[["render",t],["__file","nginx简单访问控制.html.vue"]]),u=JSON.parse('{"path":"/content/linux/nginx/nginx%E7%AE%80%E5%8D%95%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6.html","title":"nginx简单访问控制","lang":"en-US","frontmatter":{"sidebar":false,"title":"nginx简单访问控制","description":"nginx简单访问控制"},"headers":[],"git":{},"filePathRelative":"content/linux/nginx/nginx简单访问控制.md"}');export{o as comp,u as data};
