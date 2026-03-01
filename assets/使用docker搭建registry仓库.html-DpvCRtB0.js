import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function r(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h3 id="使用docker搭建registry仓库" tabindex="-1"><a class="header-anchor" href="#使用docker搭建registry仓库"><span>使用docker搭建registry仓库:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;</span>
<span class="line">$ docker pull docker.1ms.run/registry:2</span>
<span class="line">$ docker image tag docker.1ms.run/registry:2 registry:2</span>
<span class="line">$ docker rmi docker.1ms.run/registry:2</span>
<span class="line"></span>
<span class="line">2&gt;</span>
<span class="line">docker run -d \\</span>
<span class="line">--name registry \\</span>
<span class="line">-p 5000:5000 \\</span>
<span class="line">--restart=always \\</span>
<span class="line">-v /opt/registry/data:/var/lib/registry \\</span>
<span class="line">registry:2</span>
<span class="line"></span>
<span class="line">解释:</span>
<span class="line">-d：后台运行容器</span>
<span class="line">--name registry：容器名称</span>
<span class="line">-p 5000:5000：映射本地 5000 端口到容器的 5000 端口</span>
<span class="line">--restart=always：开机自启</span>
<span class="line">-v /opt/registry/data:/var/lib/registry：挂载本地目录到容器内</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ docker ps 和 $ docker container ls 效果一样, docker ps -a 查看所有容器，包括被停止的</span>
<span class="line"></span>
<span class="line">3&gt;</span>
<span class="line">验证:</span>
<span class="line">浏览器访问 http://localhost:5000/v2/  或者curl 访问 http://localhost:5000/v2/</span>
<span class="line"></span>
<span class="line">返回 {} 表示成功</span>
<span class="line"></span>
<span class="line">4&gt;推送和拉取</span>
<span class="line">4.1 先将官网的拉下来，再重新push到本地仓库</span>
<span class="line">docker pull busybox</span>
<span class="line">docker tag busybox localhost:5000/busybox</span>
<span class="line">docker push localhost:5000/busybox</span>
<span class="line"></span>
<span class="line">4.2删掉本地的镜像</span>
<span class="line">$ docker rmi localhost:5000/busybox</span>
<span class="line"></span>
<span class="line">4.3再从本地仓库拉取</span>
<span class="line">$ docker pull localhost:5000/busybox</span>
<span class="line"></span>
<span class="line">结论，可以拉取到本地仓库的镜像</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">5.配置远程访问</span>
<span class="line">默认情况下，Docker 只允许使用 https 连接到私有仓库。如果你只想在局域网内使用，可以通过配置 Docker 允许 http 访问。</span>
<span class="line"></span>
<span class="line">编辑 /etc/docker/daemon.json（如果文件不存在，就创建）：</span>
<span class="line">{</span>
<span class="line">&quot;insecure-registries&quot;: [&quot;localhost:5000&quot;]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">然后重启docker:</span>
<span class="line">sudo systemctl restart docker</span>
<span class="line"></span>
<span class="line">如果是远程机器访问，将 localhost 替换为你的服务器 IP，例如 192.168.1.100:5000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上本地访问不加<code>&quot;insecure-registries&quot;: [&quot;localhost:5000&quot;]</code> 也可以，原因如下: 如果你在 <strong>本地（localhost）</strong> 搭建 Docker Registry，并且 <strong>Docker 默认支持推送到 <code>localhost:5000</code> 的 HTTP 端口</strong>，那么你可以不配置 <code>&quot;insecure-registries&quot;</code> 也能正常 <code>docker push</code>。</p><h4 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析"><span><strong>原因分析</strong></span></a></h4><ol><li><strong>Docker 允许 <code>localhost</code> 作为特殊情况</strong></li></ol><ul><li><code>localhost</code> 被 Docker 认为是本地地址，因此不会强制 HTTPS 连接。</li><li>只要 <code>registry</code> 在 <code>localhost:5000</code> 运行，Docker 允许 <code>http://localhost:5000</code> 进行推送和拉取操作。</li></ul><ol start="2"><li><strong><code>&quot;insecure-registries&quot;</code> 主要用于远程访问</strong></li></ol><ul><li>如果你在<strong>其他机器</strong>（如 <code>192.168.1.100:5000</code>）上运行 Registry，默认情况下 Docker 需要 HTTPS 连接。</li><li>你必须在 <code>/etc/docker/daemon.json</code> 配置 <code>&quot;insecure-registries&quot;: [&quot;192.168.1.100:5000&quot;]</code>，否则 <code>docker push</code> 会失败。</li></ul><h4 id="什么时候需要-insecure-registries" tabindex="-1"><a class="header-anchor" href="#什么时候需要-insecure-registries"><span><strong>什么时候需要 <code>insecure-registries</code>？</strong></span></a></h4><ul><li><strong>本机（localhost）</strong> 访问 <code>localhost:5000</code> → <strong>不需要</strong></li><li><strong>局域网（如 192.168.1.100:5000）</strong> 访问 → <strong>需要</strong></li><li><strong>公网 IP 或域名（如 registry.example.com:5000）</strong> 访问 → <strong>需要</strong></li></ul><h4 id="如何验证" tabindex="-1"><a class="header-anchor" href="#如何验证"><span><strong>如何验证</strong></span></a></h4><p>如果你尝试推送到非 <code>localhost</code> 地址：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> tag busybox <span class="token number">192.168</span>.1.100:5000/busybox</span>
<span class="line"><span class="token function">docker</span> push <span class="token number">192.168</span>.1.100:5000/busybox</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能会遇到类似的错误：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">http: server gave HTTP response to HTTPS client</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这表明 Docker <strong>默认需要 HTTPS</strong>，你需要在 <code>daemon.json</code> 添加：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.1.100:5000&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启 Docker：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl restart <span class="token function">docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h4 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span><strong>结论</strong></span></a></h4><ul><li>本地 <code>localhost:5000</code> 访问 <code>registry:2</code>，Docker <strong>默认允许 HTTP</strong>，无需额外配置。</li><li>远程访问 <code>192.168.1.100:5000</code> 需要 <code>&quot;insecure-registries&quot;</code>，否则必须使用 HTTPS。</li></ul><p>如果要使用 HTTPS，需要： 申请或自签证书 配置 Docker Registry 使用 HTTPS 在 Docker 客户端信任该证书 需要在 /etc/docker/daemon.json 中配置 registry-mirrors 和 insecure-registries，或者使用反向代理（如 Nginx）加 HTTPS。</p><hr><h3 id="要查看docker-registry-私有仓库-中有哪些镜像-可以使用以下几种方法" tabindex="-1"><a class="header-anchor" href="#要查看docker-registry-私有仓库-中有哪些镜像-可以使用以下几种方法"><span>要查看Docker Registry（私有仓库）中有哪些镜像，可以使用以下几种方法：</span></a></h3><h4 id="方法-1-使用-curl-直接查询" tabindex="-1"><a class="header-anchor" href="#方法-1-使用-curl-直接查询"><span><strong>方法 1：使用 <code>curl</code> 直接查询</strong></span></a></h4><p>Docker Registry 提供了一个 REST API，可以用 <code>curl</code> 查询已存储的镜像列表：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET http://localhost:5000/v2/_catalog //对应可以直接浏览器访问: http://localhost:5000/v2/_catalog</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例返回：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;repositories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;busybox&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nginx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;my-app&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示你的私有仓库里存储了 <code>busybox</code>、<code>nginx</code> 和 <code>my-app</code> 这三个镜像。</p><p>如果你的 Registry 运行在远程服务器（例如 <code>192.168.1.100</code>），可以这样查询：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET http://192.168.1.100:5000/v2/_catalog</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h4 id="方法-2-查看某个镜像的所有标签" tabindex="-1"><a class="header-anchor" href="#方法-2-查看某个镜像的所有标签"><span><strong>方法 2：查看某个镜像的所有标签</strong></span></a></h4><p>如果你想查看某个镜像有哪些标签（版本），可以使用：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET http://localhost:5000/v2/busybox/tags/list</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例返回：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;busybox&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.35&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.36&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示 <code>busybox</code> 镜像在你的私有仓库中有 <code>latest</code>、<code>1.35</code> 和 <code>1.36</code> 三个版本。</p><hr><h4 id="方法-3-使用-docker-cli" tabindex="-1"><a class="header-anchor" href="#方法-3-使用-docker-cli"><span><strong>方法 3：使用 Docker CLI</strong></span></a></h4><p>Docker CLI 没有直接的 <code>docker registry ls</code> 命令，但你可以这样做：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> pull registry:2</span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> registry:2 bin/registry garbage-collect /etc/docker/registry/config.yml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>（不推荐，通常 <code>curl</code> 方法更简单）</p><hr><h4 id="方法-4-通过-ui-浏览-可选" tabindex="-1"><a class="header-anchor" href="#方法-4-通过-ui-浏览-可选"><span><strong>方法 4：通过 UI 浏览（可选）</strong></span></a></h4><p>如果你希望用 <strong>Web 界面</strong>来管理 Registry，可以使用 <code>portus</code> 或 <code>docker-registry-ui</code>：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">--name</span> registry-ui <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">REGISTRY_URL</span><span class="token operator">=</span>http://localhost:5000 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">DELETE_IMAGES</span><span class="token operator">=</span>true <span class="token punctuation">\\</span></span>
<span class="line">  joxit/docker-registry-ui:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在浏览器访问：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">http://localhost:8080</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>它会列出所有镜像，并提供管理功能。</p><hr><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h4><ul><li><strong>最简单的方法</strong>：用 <code>curl http://localhost:5000/v2/_catalog</code></li><li><strong>查看具体镜像的版本</strong>：<code>curl http://localhost:5000/v2/busybox/tags/list</code></li><li><strong>想用 UI 管理</strong>：用 <code>docker-registry-ui</code> 或 <code>portus</code></li></ul><hr><h3 id="为docker私有仓库配置账号和密码" tabindex="-1"><a class="header-anchor" href="#为docker私有仓库配置账号和密码"><span>为docker私有仓库配置账号和密码:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;生成用户名和密码(使用 htpasswd 命令创建认证文件)</span>
<span class="line">$ sudo apt install apache2-utils -y   # 安装 htpasswd（如果未安装）</span>
<span class="line">$ sudo mkdir -p /opt/registry/auth         # 存放认证文件</span>
<span class="line">$ sudo htpasswd -B -c /opt/registry/auth/htpasswd myuser</span>
<span class="line">New password:</span>
<span class="line">Re-type new password:</span>
<span class="line">Adding password for user myuser</span>
<span class="line"></span>
<span class="line">这会创建 /opt/registry/auth/htpasswd 文件，其中 myuser 是用户名，你可以换成自己的用户名。</span>
<span class="line"></span>
<span class="line">2&gt;停止和删除容器，可以先通过 docker ps -a 查看所有容器(包括运行的和停止的)</span>
<span class="line">$ docker stop registry</span>
<span class="line">$ docker rm registry</span>
<span class="line"></span>
<span class="line">3&gt;然后重新运行 Registry，增加 -e 环境变量指定认证文件：</span>
<span class="line">docker run -d \\</span>
<span class="line">--restart=always \\</span>
<span class="line">--name registry \\</span>
<span class="line">-p 5000:5000 \\</span>
<span class="line">-v /opt/registry/data:/var/lib/registry \\</span>
<span class="line">-v /opt/registry/auth:/auth \\</span>
<span class="line">-e &quot;REGISTRY_AUTH=htpasswd&quot; \\</span>
<span class="line">-e &quot;REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm&quot; \\</span>
<span class="line">-e &quot;REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd&quot; \\</span>
<span class="line">registry:2</span>
<span class="line"></span>
<span class="line">4&gt;验证</span>
<span class="line">再次执行之前的命令，推送到本地仓库:</span>
<span class="line">$ docker push localhost:5000/busybox</span>
<span class="line">Using default tag: latest</span>
<span class="line">The push refers to repository [localhost:5000/busybox]</span>
<span class="line">66140dc7271c: Preparing</span>
<span class="line">no basic auth credentials</span>
<span class="line"></span>
<span class="line">会发现没有授权，执行如下命令:</span>
<span class="line">$ docker login localhost:5000</span>
<span class="line">Username: myuser</span>
<span class="line">Password:</span>
<span class="line">WARNING! Your password will be stored unencrypted in /home/guoshipeng/.docker/config.json.</span>
<span class="line">Configure a credential helper to remove this warning. See</span>
<span class="line">https://docs.docker.com/engine/reference/commandline/login/#credentials-store</span>
<span class="line"></span>
<span class="line">Login Succeeded</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">再次执行:</span>
<span class="line">$ docker push localhost:5000/busybox</span>
<span class="line">Using default tag: latest</span>
<span class="line">The push refers to repository [localhost:5000/busybox]</span>
<span class="line">66140dc7271c: Layer already exists</span>
<span class="line">latest: digest: sha256:359e81f9b2a9be2b4ae628a146e0fab4d5b8ac8a386f4e8181f099d0f354dfc4 size: 527</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">再次删除本地已有的镜像:</span>
<span class="line">$ docker rmi localhost:5000/busybox:latest</span>
<span class="line">然后从本地仓库拉取:</span>
<span class="line">$ docker pull localhost:5000/busybox</span>
<span class="line">Using default tag: latest</span>
<span class="line">latest: Pulling from busybox</span>
<span class="line">Digest: sha256:359e81f9b2a9be2b4ae628a146e0fab4d5b8ac8a386f4e8181f099d0f354dfc4</span>
<span class="line">Status: Downloaded newer image for localhost:5000/busybox:latest</span>
<span class="line">localhost:5000/busybox:latest</span>
<span class="line"></span>
<span class="line">完美运行!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新增用户: htpasswd /opt/registry/auth/htpasswd newuser</p><p>删除用户: sed -i &#39;/^olduser/d&#39; /opt/registry/auth/htpasswd 解释: 这条命令的作用是 <strong>删除 <code>/opt/registry/auth/htpasswd</code> 文件中以 <code>olduser</code> 开头的行</strong>，即 <strong>删除 <code>olduser</code> 这个用户的密码记录</strong>。</p><hr><h4 id="命令详解" tabindex="-1"><a class="header-anchor" href="#命令详解"><span><strong>命令详解</strong></span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^olduser/d&#39;</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>部分</th><th>作用</th></tr></thead><tbody><tr><td><code>sed</code></td><td>调用 <code>sed</code> 命令（stream editor，流编辑器）</td></tr><tr><td><code>-i</code></td><td><strong>直接修改文件</strong>（<code>in-place</code>），否则 <code>sed</code> 只会输出修改结果，而不改变原文件</td></tr><tr><td><code>&#39;/^olduser/d&#39;</code></td><td><strong><code>/^olduser/</code></strong>：匹配以 <code>olduser</code> 开头的行<br><strong><code>d</code></strong>：删除匹配的行</td></tr><tr><td><code>/opt/registry/auth/htpasswd</code></td><td>要修改的目标文件（存储用户名和密码）</td></tr></tbody></table><hr><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span><strong>示例</strong></span></a></h4><p>假设 <code>htpasswd</code> 文件内容如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">olduser:$2y$05$abcde12345...</span>
<span class="line">myuser:$2y$05$xyz98765...</span>
<span class="line">admin:$2y$05$pass45678...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^olduser/d&#39;</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>之后 <code>htpasswd</code> 文件变为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">myuser:$2y$05$xyz98765...</span>
<span class="line">admin:$2y$05$pass45678...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>✅ <strong><code>olduser</code> 这一行被删除了</strong>。</p><hr><h4 id="删除多个用户" tabindex="-1"><a class="header-anchor" href="#删除多个用户"><span><strong>删除多个用户</strong></span></a></h4><p>如果想删除多个用户（如 <code>olduser1</code> 和 <code>olduser2</code>），可以使用 <code>-e</code> 选项：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/^olduser1/d&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/^olduser2/d&#39;</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者用 <code>|</code>（正则表达式的 OR 运算符）：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^olduser1\\|^olduser2/d&#39;</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h4 id="如何验证删除是否成功" tabindex="-1"><a class="header-anchor" href="#如何验证删除是否成功"><span><strong>如何验证删除是否成功？</strong></span></a></h4><p>可以用 <code>cat</code> 或 <code>grep</code> 检查：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">grep</span> <span class="token string">&#39;olduser&#39;</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果 <code>grep</code> 没有输出，说明 <code>olduser</code> 已成功删除。</p><hr><h4 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span><strong>总结</strong></span></a></h4><ul><li><strong>删除 <code>htpasswd</code> 文件中 <code>olduser</code> 这一行</strong>：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^olduser/d&#39;</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><strong>匹配 <code>htpasswd</code> 文件中多个用户，并删除</strong>：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^olduser1\\|^olduser2/d&#39;</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><strong>安全检查，确认用户已删除</strong>：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">grep</span> <span class="token string">&#39;olduser&#39;</span> /opt/registry/auth/htpasswd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><p>这样，你就可以管理 Docker Registry 的用户访问权限了！</p><p>加了用户名和密码之后，上面的查看接口，如: http://localhost:5000/v2/_catalog 访问的时候，就需要输入用户名和秘密</p><hr><h3 id="在项目中的gitlab-ci-yml测试这个仓库" tabindex="-1"><a class="header-anchor" href="#在项目中的gitlab-ci-yml测试这个仓库"><span>在项目中的gitlab-ci.yml测试这个仓库</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">运行之后报：</span>
<span class="line">Running with gitlab-runner 17.8.3 (690ce25c)</span>
<span class="line">on a runner for local gitlab t1_UNMMA, system ID: r_iTJKxTxte9W9</span>
<span class="line">Preparing the &quot;shell&quot; executor</span>
<span class="line">00:00</span>
<span class="line">Using Shell (bash) executor...</span>
<span class="line">Preparing environment</span>
<span class="line">00:01</span>
<span class="line">Running on 8446a748968a...</span>
<span class="line">Getting source from Git repository</span>
<span class="line">00:02</span>
<span class="line">Fetching changes with git depth set to 20...</span>
<span class="line">Reinitialized existing Git repository in /home/gitlab-runner/builds/t1_UNMMA/0/front/laravel-15/.git/</span>
<span class="line">Checking out 0a2f2a56 as detached HEAD (ref is main)...</span>
<span class="line">Skipping Git submodules setup</span>
<span class="line">Executing &quot;step_script&quot; stage of the job script</span>
<span class="line">00:00</span>
<span class="line">$ echo &quot;Logging into Docker Registry...&quot;</span>
<span class="line">Logging into Docker Registry...</span>
<span class="line">$ docker login -u &quot;$CI_REGISTRY_USER&quot; -p &quot;$CI_REGISTRY_PASSWORD&quot; &quot;$REGISTRY&quot;</span>
<span class="line">bash: line 150: docker: command not found</span>
<span class="line">Cleaning up project directory and file based variables</span>
<span class="line">00:00</span>
<span class="line">ERROR: Job failed: exit status 1</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">但是之前安装docker-runner的时候，已经挂载了宿主机的docker(参考前面的gitlab-runner搭建)，如下可以说明:</span>
<span class="line"># ls -l /var/run/docker.sock</span>
<span class="line">srw-rw---- 1 root gitlab-runner 0 Feb 13  2025 /var/run/docker.sock</span>
<span class="line"></span>
<span class="line">这里只是缺少了docker-ci(docker客户端)</span>
<span class="line"></span>
<span class="line"># docker exec -it gitlab-runner bash</span>
<span class="line"># docker -v</span>
<span class="line">bash: docker: command not found</span>
<span class="line"></span>
<span class="line">//安装docker-cli</span>
<span class="line"># apt update &amp;&amp; apt install -y docker.io</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">//查看，有了</span>
<span class="line"># docker --version</span>
<span class="line">Docker version 26.1.3, build 26.1.3-0ubuntu1~20.04.1</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//继续在gitlab下重试之前的job</span>
<span class="line"></span>
<span class="line">Search visible log output</span>
<span class="line">Running with gitlab-runner 17.8.3 (690ce25c)</span>
<span class="line">on a runner for local gitlab t1_UNMMA, system ID: r_iTJKxTxte9W9</span>
<span class="line">Preparing the &quot;shell&quot; executor</span>
<span class="line">00:00</span>
<span class="line">Using Shell (bash) executor...</span>
<span class="line">Preparing environment</span>
<span class="line">00:00</span>
<span class="line">Running on 8446a748968a...</span>
<span class="line">Getting source from Git repository</span>
<span class="line">00:01</span>
<span class="line">Fetching changes with git depth set to 20...</span>
<span class="line">Reinitialized existing Git repository in /home/gitlab-runner/builds/t1_UNMMA/0/front/laravel-15/.git/</span>
<span class="line">Checking out 44958810 as detached HEAD (ref is main)...</span>
<span class="line">Skipping Git submodules setup</span>
<span class="line">Executing &quot;step_script&quot; stage of the job script</span>
<span class="line">00:00</span>
<span class="line">$ echo &quot;Logging into Docker Registry...&quot;</span>
<span class="line">Logging into Docker Registry...</span>
<span class="line">$ export PATH=&quot;/usr/bin:$PATH&quot;</span>
<span class="line">$ docker login -u &quot;$CI_REGISTRY_USER&quot; -p &quot;$CI_REGISTRY_PASSWORD&quot; &quot;$REGISTRY&quot;</span>
<span class="line">WARNING! Using --password via the CLI is insecure. Use --password-stdin.</span>
<span class="line">WARNING! Your password will be stored unencrypted in /home/gitlab-runner/.docker/config.json.</span>
<span class="line">Configure a credential helper to remove this warning. See</span>
<span class="line">https://docs.docker.com/engine/reference/commandline/login/#credentials-store</span>
<span class="line">Login Succeeded</span>
<span class="line">$ docker build -t &quot;$REGISTRY/$IMAGE_NAME:$CI_COMMIT_REF_NAME&quot; .</span>
<span class="line">DEPRECATED: The legacy builder is deprecated and will be removed in a future release.</span>
<span class="line">Install the buildx component to build images with BuildKit:</span>
<span class="line">https://docs.docker.com/go/buildx/</span>
<span class="line">unable to prepare context: unable to evaluate symlinks in Dockerfile path: lstat /home/gitlab-runner/builds/t1_UNMMA/0/front/laravel-15/Dockerfile: no such file or directory</span>
<span class="line">Cleaning up project directory and file based variables</span>
<span class="line">00:00</span>
<span class="line">ERROR: Job failed: exit status 1</span>
<span class="line"></span>
<span class="line">可以知道gitlab-runner下docker已经登陆成功了，现在的问题是项目没有定义Dockerfile.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="现在在已有的目录下初始化一个nuxt3项目-之前的项目不完整-只是随便写了一些东西-没有dockerfile这些" tabindex="-1"><a class="header-anchor" href="#现在在已有的目录下初始化一个nuxt3项目-之前的项目不完整-只是随便写了一些东西-没有dockerfile这些"><span>现在在已有的目录下初始化一个nuxt3项目，之前的项目不完整，只是随便写了一些东西，没有Dockerfile这些</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">官方命令:</span>
<span class="line">npx nuxi@latest init &lt;project-name&gt;</span>
<span class="line"></span>
<span class="line">由于我的项目已经存在，所以这里直接</span>
<span class="line">npx nuxi@latest init</span>
<span class="line">就可以在当前项目下创建了，会有如下提示:</span>
<span class="line">The directory \`/home/guoshipeng/Documents/code/laravel-15\` already exists. What would you like to do?</span>
<span class="line">直接 override its contents 就可以了，之前的内容还可以保留</span>
<span class="line"></span>
<span class="line">在本地的nuxt3项目的Dockerfile下，需要node镜像，使用如下方法下载</span>
<span class="line">$ docker pull docker.1ms.run/node:20.17.0-alpine</span>
<span class="line">$ docker image tag docker.1ms.run/node:20.17.0-alpine node:20.17.0-alpine</span>
<span class="line">$ docker rmi docker.1ms.run/node:20.17.0-alpine</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">基于docker + gitlab + gitlab-runner + nginx-proxy + nuxt3 部署项目, 总结如下:</span>
<span class="line"></span>
<span class="line">使用如下方式搭建gitlab-runner</span>
<span class="line">docker run -d --name gitlab-runner --restart always \\</span>
<span class="line">  -v /srv/gitlab-runner/config:/etc/gitlab-runner \\</span>
<span class="line">  -v /var/run/docker.sock:/var/run/docker.sock \\</span>
<span class="line">  gitlab/gitlab-runner:latest</span>
<span class="line">现在gitlab-runner容器里的docker 服务和宿主机上docker的服的相同，那么在gitlab-runner 执行gitlab-ci中的脚本的时候，比如执行 docker  run 相关的命令的时候，就相当于在宿主机上执行docker相关的命令一样。</span>
<span class="line">原因:</span>
<span class="line">由于在运行 gitlab-runner 容器时挂载了 /var/run/docker.sock，容器内的 Docker CLI 实际上是在直接与宿主机上的 Docker Daemon 交互。这意味着：</span>
<span class="line">任何在 gitlab-runner 容器中执行的 docker 命令（例如 docker run、docker build 等），都会直接作用于宿主机的 Docker，而不是 gitlab-runner 容器本身。</span>
<span class="line">运行的容器是由宿主机的 Docker 管理的，而不是 gitlab-runner 容器内部的独立 Docker 进程。</span>
<span class="line">这也意味着 gitlab-ci.yml 中的 docker 相关命令，都会像在宿主机上执行一样起作用。</span>
<span class="line"></span>
<span class="line">这样做的好处是可以让 GitLab Runner 直接管理宿主机的 Docker 资源，而不需要在 gitlab-runner 容器内再运行一个 Docker 进程（即 “Docker in Docker” 方案），避免额外的开销和复杂性。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">我发现，在gitlab-runner容器里执行，docker ps, 发现展示的内容和直接在宿主机上执行docker ps 一样。</span>
<span class="line">原因:</span>
<span class="line">由于挂载了宿主机的 Docker 套接字（-v /var/run/docker.sock:/var/run/docker.sock），gitlab-runner 容器内部的 docker CLI 实际上是在直接与 宿主机的 Docker Daemon 交互。因此：</span>
<span class="line">在 gitlab-runner 容器中运行 docker ps，它获取的是 宿主机上运行的所有容器（包括 gitlab-runner 容器本身）。</span>
<span class="line">在宿主机上运行 docker ps，看到的内容和 gitlab-runner 容器内执行 docker ps 的内容完全相同。</span>
<span class="line">这个行为可以验证 gitlab-runner 运行的 CI/CD 任务中 docker 命令 是在宿主机上执行的，而不是在 gitlab-runner 容器的独立环境内执行的。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">意味着，可以通过tilab-runner运行gitlab-ci，在宿主机上通过docker部署项目，而不是在gitlab-runner容器里部署项目。</span>
<span class="line">这正是 挂载 /var/run/docker.sock 的关键作用，它使 gitlab-runner 充当一个代理，直接在 宿主机的 Docker 环境 中执行 docker 命令，而不是在 gitlab-runner 容器内部。</span>
<span class="line">这样做的好处：</span>
<span class="line">1.项目部署在宿主机，而不是 gitlab-runner 容器内部</span>
<span class="line"></span>
<span class="line">gitlab-runner 只负责触发 CI/CD 任务，不会影响你的部署环境。</span>
<span class="line">可以在 gitlab-ci.yml 里自由使用 docker run、docker compose up 等命令，在宿主机上部署项目。</span>
<span class="line"></span>
<span class="line">2.避免 Docker in Docker（DinD）带来的问题</span>
<span class="line"></span>
<span class="line">传统的 DinD 方案需要在 gitlab-runner 容器内运行一个独立的 Docker Daemon，可能会导致 权限问题、性能损耗 和 容器网络隔离 的问题。</span>
<span class="line">直接挂载 /var/run/docker.sock，就不需要额外的 Docker Daemon，性能更好，部署更简单。</span>
<span class="line"></span>
<span class="line">3.可以管理整个宿主机的 Docker 容器</span>
<span class="line"></span>
<span class="line">可以在 GitLab CI 中执行 docker ps、docker stop、docker rm 等命令，直接控制宿主机上的容器。</span>
<span class="line">适用于部署 Web 应用、微服务，或者自动化构建和更新 Docker 容器。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">举个例子，假设有如下gitlab-ci.yml:</span>
<span class="line">stages:</span>
<span class="line">  - deploy</span>
<span class="line"></span>
<span class="line">deploy:</span>
<span class="line">  stage: deploy</span>
<span class="line">  image: docker:latest  # 使用 Docker 官方镜像</span>
<span class="line">  services:</span>
<span class="line">    - docker:dind       # 这里的 DinD 只是用于 GitLab 兼容性，不会真正运行</span>
<span class="line">  script:</span>
<span class="line">    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY</span>
<span class="line">    - docker pull my-image:latest</span>
<span class="line">    - docker stop my-container || true</span>
<span class="line">    - docker rm my-container || true</span>
<span class="line">    - docker run -d --name my-container -p 8080:8080 my-image:latest</span>
<span class="line"></span>
<span class="line">这样 gitlab-runner 只是触发命令，实际的 docker run 操作都是在 宿主机 上执行的，而不是 gitlab-runner 容器内部。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,97)]))}const t=n(l,[["render",r],["__file","使用docker搭建registry仓库.html.vue"]]),p=JSON.parse('{"path":"/content/service/docker/%E4%BD%BF%E7%94%A8docker%E6%90%AD%E5%BB%BAregistry%E4%BB%93%E5%BA%93.html","title":"使用docker搭建registry仓库","lang":"en-US","frontmatter":{"sidebar":false,"title":"使用docker搭建registry仓库","head":[["meta",{"name":"title","content":"使用docker搭建registry仓库"}],["meta",{"name":"description","content":"使用docker搭建registry仓库"}],["meta",{"name":"keywords","content":"registry,network,docker"}],["meta",{"property":"og:title","content":"使用docker搭建registry仓库"}],["meta",{"property":"og:description","content":"使用docker搭建registry仓库"}]]},"headers":[{"level":3,"title":"使用docker搭建registry仓库:","slug":"使用docker搭建registry仓库","link":"#使用docker搭建registry仓库","children":[]},{"level":3,"title":"要查看Docker Registry（私有仓库）中有哪些镜像，可以使用以下几种方法：","slug":"要查看docker-registry-私有仓库-中有哪些镜像-可以使用以下几种方法","link":"#要查看docker-registry-私有仓库-中有哪些镜像-可以使用以下几种方法","children":[]},{"level":3,"title":"为docker私有仓库配置账号和密码:","slug":"为docker私有仓库配置账号和密码","link":"#为docker私有仓库配置账号和密码","children":[]},{"level":3,"title":"在项目中的gitlab-ci.yml测试这个仓库","slug":"在项目中的gitlab-ci-yml测试这个仓库","link":"#在项目中的gitlab-ci-yml测试这个仓库","children":[]},{"level":3,"title":"现在在已有的目录下初始化一个nuxt3项目，之前的项目不完整，只是随便写了一些东西，没有Dockerfile这些","slug":"现在在已有的目录下初始化一个nuxt3项目-之前的项目不完整-只是随便写了一些东西-没有dockerfile这些","link":"#现在在已有的目录下初始化一个nuxt3项目-之前的项目不完整-只是随便写了一些东西-没有dockerfile这些","children":[]}],"git":{},"filePathRelative":"content/service/docker/使用docker搭建registry仓库.md"}');export{t as comp,p as data};
