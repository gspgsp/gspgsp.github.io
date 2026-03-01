import{_ as n,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h5 id="基于docker的haproxy的热发布配置" tabindex="-1"><a class="header-anchor" href="#基于docker的haproxy的热发布配置"><span>基于docker的Haproxy的热发布配置</span></a></h5><blockquote><p>为什么想写这个，因为最近继续研究haproxy，突然想到如果能实现热发布，配合haproxy的超强代理配置，那么可以实现的功能就更加丰富了</p></blockquote><ul><li>项目目录结构<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">haproxy-demo/</span>
<span class="line">├── docker-compose.yml</span>
<span class="line">├── Dockerfile.haproxy  </span>
<span class="line">├── haproxy.cfg</span>
<span class="line">├── setup.sh</span>
<span class="line">├── reload.sh</span>
<span class="line">├── web1/</span>
<span class="line">│   └── index.html</span>
<span class="line">└── web2/</span>
<span class="line">└── index.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>操作流程 <ul><li>创建文件<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir haproxy-demo &amp;&amp; cd haproxy-demo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>初始化页面内容, vim setup.sh, 内容如下<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir -p web1 web2</span>
<span class="line">echo &quot;&lt;h1&gt;Web Server 1&lt;/h1&gt;&quot; &gt; web1/index.html  </span>
<span class="line">echo &quot;&lt;h1&gt;Web Server 2&lt;/h1&gt;&quot; &gt; web2/index.html</span>
<span class="line"></span>
<span class="line">chmod +x ./setup.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>添加haproxy配置, vim haproxy.cfg<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line">global</span>
<span class="line">    log stdout local0</span>
<span class="line">    maxconn 4096</span>
<span class="line"></span>
<span class="line">defaults</span>
<span class="line">    mode http</span>
<span class="line">    log global</span>
<span class="line">    option httplog</span>
<span class="line">    timeout connect 5000ms</span>
<span class="line">    timeout client 50000ms</span>
<span class="line">    timeout server 50000ms</span>
<span class="line"></span>
<span class="line">frontend stats</span>
<span class="line">    bind <span class="token important">*:</span><span class="token number">8404</span></span>
<span class="line">    stats enable</span>
<span class="line">    stats uri /stats</span>
<span class="line">    stats refresh 30s</span>
<span class="line"></span>
<span class="line">frontend web_frontend</span>
<span class="line">    bind <span class="token important">*:</span><span class="token number">80</span></span>
<span class="line">    http<span class="token punctuation">-</span>response add<span class="token punctuation">-</span>header X<span class="token punctuation">-</span>Load<span class="token punctuation">-</span>Balancer &quot;HAProxy&quot; <span class="token comment"># 自定义信息</span></span>
<span class="line">    http<span class="token punctuation">-</span>response add<span class="token punctuation">-</span>header X<span class="token punctuation">-</span>Server<span class="token punctuation">-</span>Version &quot;v1.0&quot;  自定义信息</span>
<span class="line">    default_backend web_servers</span>
<span class="line"></span>
<span class="line">backend web_servers</span>
<span class="line">    balance roundrobin</span>
<span class="line">    option httpchk GET /</span>
<span class="line">    http<span class="token punctuation">-</span>response set<span class="token punctuation">-</span>header X<span class="token punctuation">-</span>Backend<span class="token punctuation">-</span>Server v8  自定义信息</span>
<span class="line">    server web1 web1<span class="token punctuation">:</span>80 check</span>
<span class="line">    server web2 web2<span class="token punctuation">:</span>80 check</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>添加docker compose 内容， vim docker-compose.yml<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">haproxy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">context</span><span class="token punctuation">:</span> .</span>
<span class="line">      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile.haproxy</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> haproxy</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;8081:80&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;8404:8404&quot;</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> haproxy_config<span class="token punctuation">:</span>/usr/local/etc/haproxy</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;haproxy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/usr/local/etc/haproxy/haproxy.cfg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-W&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    </span>
<span class="line">  <span class="token key atrule">web1</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> web1</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./web1<span class="token punctuation">:</span>/usr/share/nginx/html</span>
<span class="line">    </span>
<span class="line">  <span class="token key atrule">web2</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> web2</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./web2<span class="token punctuation">:</span>/usr/share/nginx/html</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">haproxy_config</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>添加 Dockerfile 内容, vim Dockerfile.haproxy<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line">FROM haproxy<span class="token punctuation">:</span>latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制配置文件到镜像中</span></span>
<span class="line">COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下面两个暂时不要</span></span>
<span class="line"><span class="token comment"># 确保配置文件权限正确</span></span>
<span class="line"><span class="token comment">#RUN chmod 644 /usr/local/etc/haproxy/haproxy.cfg</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证配置文件语法</span></span>
<span class="line"><span class="token comment">#RUN haproxy -f /usr/local/etc/haproxy/haproxy.cfg -c</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>启动docker服务<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> 1.先执行 ./setup.sh</span>
<span class="line"> 2.$ docker-compose up -d --build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>查看服务<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker ps</span>
<span class="line">2eb152e70d82   nginx:alpine                             &quot;/docker-entrypoint.…&quot;   23 minutes ago   Up 22 minutes                80/tcp                                                                                                                  web1</span>
<span class="line">46eb39650f05   nginx:alpine                             &quot;/docker-entrypoint.…&quot;   23 minutes ago   Up 22 minutes                80/tcp                                                                                                                  web2</span>
<span class="line">d1d99bae1a4b   haproxy-demo-haproxy                     &quot;docker-entrypoint.s…&quot;   23 minutes ago   Up 22 minutes                0.0.0.0:8404-&gt;8404/tcp, :::8404-&gt;8404/tcp, 0.0.0.0:8081-&gt;80/tcp, :::8081-&gt;80/tcp                                        haproxy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>页面法访问<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">http://localhost:8081/ 可以看到 Response Headers 有如下自定义字段</span>
<span class="line"></span>
<span class="line">X-Backend-Server:v8</span>
<span class="line">X-Load-Balancer:HAProxy</span>
<span class="line">X-Server-Version:v1.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>修改haproxy.cfg的配置信息， 比如 v8 改为v9</li><li>重点来了，通过haproxy的热启动，让配置生效，脚本 reload.sh 如下</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># HAProxy配置热重启脚本</span></span>
<span class="line"><span class="token comment"># 用法: chmod +x, ./reload.sh</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;🔄 HAProxy配置热重启开始...&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1. 复制配置文件到容器</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;📝 复制配置文件到容器...&quot;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token function">docker</span> <span class="token function">cp</span> haproxy.cfg haproxy:/usr/local/etc/haproxy/haproxy.cfg<span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;✅ 配置文件复制成功&quot;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;❌ 配置文件复制失败&quot;</span></span>
<span class="line">    <span class="token builtin class-name">exit</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 发送热重启信号</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;🔥 发送热重启信号...&quot;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token function">docker-compose</span> <span class="token function">kill</span> <span class="token parameter variable">-s</span> HUP haproxy<span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;✅ 热重启信号发送成功&quot;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;❌ 热重启信号发送失败&quot;</span></span>
<span class="line">    <span class="token builtin class-name">exit</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 等待一下让重启完成</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;⏳ 等待重启完成...&quot;</span></span>
<span class="line"><span class="token function">sleep</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 验证配置是否生效</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;🔍 验证配置...&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;响应头信息:&quot;</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-I</span> http://localhost:8081 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;(HTTP|X-|Server)&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;🎉 HAProxy配置热重启完成！&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;💡 访问 http://localhost:8081 测试服务&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;📊 访问 http://localhost:8404/stats 查看状态&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>再次页面法访问<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">http://localhost:8081/ 可以看到 Response Headers 有如下自定义字段</span>
<span class="line"></span>
<span class="line">X-Backend-Server:v9 #内容发生变化</span>
<span class="line">X-Load-Balancer:HAProxy</span>
<span class="line">X-Server-Version:v1.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>为什么要使用这种方式，因为和docker的两种挂载方式有关，我会单独开一篇讲解二者的不同</li></ul>`,3)]))}const o=n(i,[["render",p],["__file","基于docker的Haproxy的热发布配置.html.vue"]]),r=JSON.parse('{"path":"/content/service/deploy/%E5%9F%BA%E4%BA%8Edocker%E7%9A%84Haproxy%E7%9A%84%E7%83%AD%E5%8F%91%E5%B8%83%E9%85%8D%E7%BD%AE.html","title":"基于docker的Haproxy的热发布配置","lang":"en-US","frontmatter":{"sidebar":false,"title":"基于docker的Haproxy的热发布配置","head":[["meta",{"name":"title","content":"基于docker的Haproxy的热发布配置"}],["meta",{"name":"description","content":"基于docker的Haproxy的热发布配置"}],["meta",{"name":"keywords","content":"Haproxy,Docker"}],["meta",{"property":"og:title","content":"基于docker的Haproxy的热发布配置"}],["meta",{"property":"og:description","content":"基于docker的Haproxy的热发布配置"}]]},"headers":[],"git":{},"filePathRelative":"content/service/deploy/基于docker的Haproxy的热发布配置.md"}');export{o as comp,r as data};
