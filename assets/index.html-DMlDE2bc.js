import{_ as i,c as p,a as n,f as c,o as t,r as a}from"./app-BB_BIQV8.js";const r={};function o(d,s){const e=a("DocSearchInPage"),l=a("InArticleAd");return t(),p("div",null,[n(e),n(l),s[0]||(s[0]=c(`<h1 id="docker-使用手册" tabindex="-1"><a class="header-anchor" href="#docker-使用手册"><span>Docker 使用手册</span></a></h1><h2 id="docker-简介" tabindex="-1"><a class="header-anchor" href="#docker-简介"><span>Docker 简介</span></a></h2><p>Docker 是一个开源的容器化平台,可以让开发者将应用及其依赖打包到轻量级、可移植的容器中,实现&quot;一次构建,到处运行&quot;。</p><h3 id="主要优势" tabindex="-1"><a class="header-anchor" href="#主要优势"><span>主要优势</span></a></h3><ul><li><strong>环境一致性</strong>: 开发、测试、生产环境完全一致</li><li><strong>快速部署</strong>: 秒级启动容器</li><li><strong>资源隔离</strong>: 容器之间相互隔离,互不影响</li><li><strong>轻量高效</strong>: 相比虚拟机占用更少资源</li><li><strong>版本控制</strong>: 镜像支持版本管理和回滚</li></ul><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><h3 id="linux-ubuntu-debian" tabindex="-1"><a class="header-anchor" href="#linux-ubuntu-debian"><span>Linux (Ubuntu/Debian)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 更新软件包索引</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ca-certificates <span class="token function">curl</span> gnupg lsb-release</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加 Docker 官方 GPG 密钥</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/apt/keyrings</span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置仓库</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 Docker Engine</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证安装</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 使用 Homebrew 安装</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或下载 Docker Desktop</span></span>
<span class="line"><span class="token comment"># 访问: https://www.docker.com/products/docker-desktop</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3><p>下载并安装 Docker Desktop for Windows: https://www.docker.com/products/docker-desktop</p><h3 id="配置用户权限-linux" tabindex="-1"><a class="header-anchor" href="#配置用户权限-linux"><span>配置用户权限 (Linux)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 将当前用户添加到 docker 组</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新登录或执行</span></span>
<span class="line">newgrp <span class="token function">docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-核心概念" tabindex="-1"><a class="header-anchor" href="#docker-核心概念"><span>Docker 核心概念</span></a></h2><h3 id="镜像-image" tabindex="-1"><a class="header-anchor" href="#镜像-image"><span>镜像 (Image)</span></a></h3><p>镜像是一个只读的模板,包含运行应用所需的代码、运行时、库、环境变量和配置文件。</p><h3 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container"><span>容器 (Container)</span></a></h3><p>容器是镜像的运行实例,是一个独立运行的应用环境。</p><h3 id="仓库-registry" tabindex="-1"><a class="header-anchor" href="#仓库-registry"><span>仓库 (Registry)</span></a></h3><p>用于存储和分发 Docker 镜像的服务,如 Docker Hub。</p><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h3><p>用于构建镜像的文本文件,包含一系列构建指令。</p><h2 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理"><span>镜像管理</span></a></h2><h3 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像"><span>搜索镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 在 Docker Hub 搜索镜像</span></span>
<span class="line"><span class="token function">docker</span> search nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索官方镜像</span></span>
<span class="line"><span class="token function">docker</span> search <span class="token parameter variable">--filter</span> <span class="token string">&quot;is-official=true&quot;</span> nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像"><span>拉取镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 拉取最新版本</span></span>
<span class="line"><span class="token function">docker</span> pull nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取指定版本</span></span>
<span class="line"><span class="token function">docker</span> pull nginx:1.25.3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取指定平台镜像</span></span>
<span class="line"><span class="token function">docker</span> pull <span class="token parameter variable">--platform</span> linux/amd64 nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看本地镜像" tabindex="-1"><a class="header-anchor" href="#查看本地镜像"><span>查看本地镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 列出所有镜像</span></span>
<span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看镜像详细信息</span></span>
<span class="line"><span class="token function">docker</span> image inspect nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看镜像历史</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">history</span> nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像"><span>删除镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 删除指定镜像</span></span>
<span class="line"><span class="token function">docker</span> rmi nginx:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除多个镜像</span></span>
<span class="line"><span class="token function">docker</span> rmi nginx:1.25 nginx:1.24</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有未使用的镜像</span></span>
<span class="line"><span class="token function">docker</span> image prune <span class="token parameter variable">-a</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制删除镜像</span></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> image_id</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入导出镜像" tabindex="-1"><a class="header-anchor" href="#导入导出镜像"><span>导入导出镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 导出镜像为 tar 文件</span></span>
<span class="line"><span class="token function">docker</span> save <span class="token parameter variable">-o</span> nginx.tar nginx:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从 tar 文件导入镜像</span></span>
<span class="line"><span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx.tar</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出容器为镜像</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">export</span> container_id <span class="token operator">&gt;</span> container.tar</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从导出的容器创建镜像</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">import</span> container.tar myimage:tag</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标记镜像" tabindex="-1"><a class="header-anchor" href="#标记镜像"><span>标记镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 为镜像添加新标签</span></span>
<span class="line"><span class="token function">docker</span> tag nginx:latest myregistry.com/nginx:v1.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 推送到私有仓库</span></span>
<span class="line"><span class="token function">docker</span> push myregistry.com/nginx:v1.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器管理" tabindex="-1"><a class="header-anchor" href="#容器管理"><span>容器管理</span></a></h2><h3 id="创建和运行容器" tabindex="-1"><a class="header-anchor" href="#创建和运行容器"><span>创建和运行容器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 运行容器(前台)</span></span>
<span class="line"><span class="token function">docker</span> run nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行容器(后台)</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行容器并命名</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> my-nginx nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 映射端口</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 映射所有端口</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置环境变量</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;ENV=production&quot;</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 挂载数据卷</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /host/path:/container/path nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 限制资源</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--memory</span><span class="token operator">=</span><span class="token string">&quot;512m&quot;</span> <span class="token parameter variable">--cpus</span><span class="token operator">=</span><span class="token string">&quot;1.5&quot;</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启策略</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器生命周期管理" tabindex="-1"><a class="header-anchor" href="#容器生命周期管理"><span>容器生命周期管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 启动容器</span></span>
<span class="line"><span class="token function">docker</span> start container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止容器</span></span>
<span class="line"><span class="token function">docker</span> stop container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启容器</span></span>
<span class="line"><span class="token function">docker</span> restart container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 暂停容器</span></span>
<span class="line"><span class="token function">docker</span> pause container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复容器</span></span>
<span class="line"><span class="token function">docker</span> unpause container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制删除运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有停止的容器</span></span>
<span class="line"><span class="token function">docker</span> container prune</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看容器信息" tabindex="-1"><a class="header-anchor" href="#查看容器信息"><span>查看容器信息</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 列出运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出所有容器(包括停止的)</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看容器详细信息</span></span>
<span class="line"><span class="token function">docker</span> inspect container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看容器日志</span></span>
<span class="line"><span class="token function">docker</span> logs container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 实时查看日志</span></span>
<span class="line"><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看最近 100 行日志</span></span>
<span class="line"><span class="token function">docker</span> logs <span class="token parameter variable">--tail</span> <span class="token number">100</span> container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看容器资源使用情况</span></span>
<span class="line"><span class="token function">docker</span> stats</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看容器进程</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">top</span> container_id</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器"><span>进入容器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 交互式进入容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> container_id /bin/bash</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 以 root 用户进入</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-u</span> root container_id /bin/bash</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 执行单个命令</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> container_id <span class="token function">ls</span> <span class="token parameter variable">-la</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 attach (不推荐,退出会停止容器)</span></span>
<span class="line"><span class="token function">docker</span> attach container_id</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器与主机间的文件操作" tabindex="-1"><a class="header-anchor" href="#容器与主机间的文件操作"><span>容器与主机间的文件操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 从容器复制文件到主机</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">cp</span> container_id:/path/to/file /host/path</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从主机复制文件到容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">cp</span> /host/path/file container_id:/path/to/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器提交为镜像" tabindex="-1"><a class="header-anchor" href="#容器提交为镜像"><span>容器提交为镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 将容器当前状态保存为新镜像</span></span>
<span class="line"><span class="token function">docker</span> commit container_id myimage:v1.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加提交信息</span></span>
<span class="line"><span class="token function">docker</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Added nginx config&quot;</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;Author Name&quot;</span> container_id myimage:v1.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络配置" tabindex="-1"><a class="header-anchor" href="#网络配置"><span>网络配置</span></a></h2><h3 id="网络模式" tabindex="-1"><a class="header-anchor" href="#网络模式"><span>网络模式</span></a></h3><ul><li><strong>bridge</strong>: 默认模式,容器连接到虚拟网桥</li><li><strong>host</strong>: 容器使用主机网络</li><li><strong>none</strong>: 容器没有网络</li><li><strong>container</strong>: 容器共享另一个容器的网络</li></ul><h3 id="网络管理" tabindex="-1"><a class="header-anchor" href="#网络管理"><span>网络管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 列出所有网络</span></span>
<span class="line"><span class="token function">docker</span> network <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建网络</span></span>
<span class="line"><span class="token function">docker</span> network create my-network</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建指定子网的网络</span></span>
<span class="line"><span class="token function">docker</span> network create <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.18</span>.0.0/16 my-network</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看网络详情</span></span>
<span class="line"><span class="token function">docker</span> network inspect my-network</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 连接容器到网络</span></span>
<span class="line"><span class="token function">docker</span> network connect my-network container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 断开容器网络连接</span></span>
<span class="line"><span class="token function">docker</span> network disconnect my-network container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除网络</span></span>
<span class="line"><span class="token function">docker</span> network <span class="token function">rm</span> my-network</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有未使用的网络</span></span>
<span class="line"><span class="token function">docker</span> network prune</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用自定义网络运行容器" tabindex="-1"><a class="header-anchor" href="#使用自定义网络运行容器"><span>使用自定义网络运行容器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 运行容器并连接到指定网络</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> web <span class="token parameter variable">--network</span> my-network nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 同一网络内容器可以通过容器名互相访问</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> app <span class="token parameter variable">--network</span> my-network myapp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据卷管理" tabindex="-1"><a class="header-anchor" href="#数据卷管理"><span>数据卷管理</span></a></h2><h3 id="数据卷类型" tabindex="-1"><a class="header-anchor" href="#数据卷类型"><span>数据卷类型</span></a></h3><ul><li><strong>命名卷 (Named Volume)</strong>: Docker 管理的持久化存储</li><li><strong>绑定挂载 (Bind Mount)</strong>: 挂载主机目录到容器</li><li><strong>tmpfs 挂载</strong>: 挂载到内存,容器停止后数据丢失</li></ul><h3 id="数据卷操作" tabindex="-1"><a class="header-anchor" href="#数据卷操作"><span>数据卷操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建数据卷</span></span>
<span class="line"><span class="token function">docker</span> volume create my-volume</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出所有数据卷</span></span>
<span class="line"><span class="token function">docker</span> volume <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看数据卷详情</span></span>
<span class="line"><span class="token function">docker</span> volume inspect my-volume</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除数据卷</span></span>
<span class="line"><span class="token function">docker</span> volume <span class="token function">rm</span> my-volume</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有未使用的数据卷</span></span>
<span class="line"><span class="token function">docker</span> volume prune</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用数据卷" tabindex="-1"><a class="header-anchor" href="#使用数据卷"><span>使用数据卷</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 使用命名卷</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> my-volume:/data nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用绑定挂载(绝对路径)</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /host/path:/container/path nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 只读挂载</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> my-volume:/data:ro nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 tmpfs</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--tmpfs</span> /app/cache nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 --mount(更明确的语法)</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>volume,source<span class="token operator">=</span>my-volume,target<span class="token operator">=</span>/data <span class="token punctuation">\\</span></span>
<span class="line">  nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据卷备份和恢复" tabindex="-1"><a class="header-anchor" href="#数据卷备份和恢复"><span>数据卷备份和恢复</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 备份数据卷</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> my-volume:/data <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>:/backup ubuntu <span class="token function">tar</span> czf /backup/backup.tar.gz /data</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复数据卷</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> my-volume:/data <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>:/backup ubuntu <span class="token function">tar</span> xzf /backup/backup.tar.gz <span class="token parameter variable">-C</span> /</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>Docker Compose</span></a></h2><p>Docker Compose 是用于定义和运行多容器 Docker 应用的工具。</p><h3 id="安装-docker-compose" tabindex="-1"><a class="header-anchor" href="#安装-docker-compose"><span>安装 Docker Compose</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Docker Desktop 自带 Compose V2</span></span>
<span class="line"><span class="token comment"># Linux 上安装</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-compose-plugin</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证安装</span></span>
<span class="line"><span class="token function">docker</span> compose version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="核心用途" tabindex="-1"><a class="header-anchor" href="#核心用途"><span>核心用途</span></a></h3><ul><li>启动几个服务（php、nginx、mysql、redis）</li><li>端口如何映射</li><li>环境变量</li><li>容器之间如何通信</li><li>挂载 volume</li><li>依赖关系（depends_on）</li></ul><h3 id="docker-compose-yaml-示例" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml-示例"><span>docker-compose.yaml 示例</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span> <span class="token comment"># 3.9表示这个 docker-compose 文件，遵循 3.9 版本的语法规范, 对于Compose v2 可以不用写这个version信息, 之前很多是3.8(Compose v1)</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">   <span class="token key atrule">php</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">build</span><span class="token punctuation">:</span> . <span class="token comment"># 先用 从php的Dockerfile 构建镜像, 并且这里使用默认的dockerfile: Dockerfile(所以不用显示写)， 如果需要使用其它名称的可以显示定义，如 dockerfile: Dockerfile.dev</span></span>
<span class="line">      <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/app</span>
<span class="line">      <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token punctuation">-</span> app</span>
<span class="line"></span>
<span class="line">   <span class="token key atrule">nginx</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine <span class="token comment"># 直接用官方镜像，不自己构建</span></span>
<span class="line">      <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token punctuation">-</span> <span class="token string">&quot;8080:80&quot;</span></span>
<span class="line">      <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token punctuation">-</span> ./docker/nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf</span>
<span class="line">      <span class="token key atrule">depends_on</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token punctuation">-</span> php</span>
<span class="line">      <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token punctuation">-</span> app</span>
<span class="line"></span>
<span class="line">   <span class="token key atrule">mysql</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">8.0</span> <span class="token comment"># 直接用官方镜像，不自己构建</span></span>
<span class="line">      <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> root</span>
<span class="line">         <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> app</span>
<span class="line">      <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token punctuation">-</span> mysql_data<span class="token punctuation">:</span>/var/lib/mysql</span>
<span class="line">      <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">         <span class="token punctuation">-</span> app</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">   <span class="token key atrule">app</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">   <span class="token key atrule">mysql_data</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="compose-常用命令-v2版本-go版-docker-cli-插件-plugin-v1版-python版-独立工具使用的是-docker-compose-up-等" tabindex="-1"><a class="header-anchor" href="#compose-常用命令-v2版本-go版-docker-cli-插件-plugin-v1版-python版-独立工具使用的是-docker-compose-up-等"><span>Compose 常用命令(v2版本-go版-docker CLI 插件(plugin)，v1版-python版-独立工具使用的是: docker-compose up 等)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 启动所有服务(后台)</span></span>
<span class="line"><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动并重新构建镜像</span></span>
<span class="line"><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span> <span class="token parameter variable">--build</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看服务状态</span></span>
<span class="line"><span class="token function">docker</span> compose <span class="token function">ps</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看服务日志</span></span>
<span class="line"><span class="token function">docker</span> compose logs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 实时查看日志</span></span>
<span class="line"><span class="token function">docker</span> compose logs <span class="token parameter variable">-f</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看特定服务日志</span></span>
<span class="line"><span class="token function">docker</span> compose logs web</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止服务</span></span>
<span class="line"><span class="token function">docker</span> compose stop</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止并删除容器</span></span>
<span class="line"><span class="token function">docker</span> compose down</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止并删除容器、网络、数据卷</span></span>
<span class="line"><span class="token function">docker</span> compose down <span class="token parameter variable">-v</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启服务</span></span>
<span class="line"><span class="token function">docker</span> compose restart</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 执行命令</span></span>
<span class="line"><span class="token function">docker</span> compose <span class="token builtin class-name">exec</span> web <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 扩展服务</span></span>
<span class="line"><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span> <span class="token parameter variable">--scale</span> <span class="token assign-left variable">web</span><span class="token operator">=</span><span class="token number">3</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证配置文件</span></span>
<span class="line"><span class="token function">docker</span> compose config</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取所有镜像</span></span>
<span class="line"><span class="token function">docker</span> compose pull</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile-编写" tabindex="-1"><a class="header-anchor" href="#dockerfile-编写"><span>Dockerfile 编写</span></a></h2><h3 id="dockerfile-基础结构" tabindex="-1"><a class="header-anchor" href="#dockerfile-基础结构"><span>Dockerfile 基础结构</span></a></h3><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 指定基础镜像</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> node:18-alpine</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置工作目录</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置环境变量</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENV</span> NODE_ENV=production</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制依赖文件</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> package*.json ./</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> npm ci --only=production</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制应用代码</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> . .</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 暴露端口</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置用户</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">USER</span> node</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动命令</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;node&quot;</span>, <span class="token string">&quot;server.js&quot;</span>]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="核心用途-1" tabindex="-1"><a class="header-anchor" href="#核心用途-1"><span>核心用途</span></a></h3><ul><li>基于哪个基础镜像（php、node、nginx…）</li><li>安装什么系统依赖 / 扩展</li><li>拷贝代码</li><li>如何编译 / build</li><li>容器启动时执行什么命令</li></ul><h3 id="常用指令详解" tabindex="-1"><a class="header-anchor" href="#常用指令详解"><span>常用指令详解</span></a></h3><h4 id="from" tabindex="-1"><a class="header-anchor" href="#from"><span>FROM</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 使用官方基础镜像</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:22.04</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用多阶段构建</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> golang:1.21 <span class="token keyword">AS</span> builder</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="run" tabindex="-1"><a class="header-anchor" href="#run"><span>RUN</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 执行命令并创建新层</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y <span class="token operator">\\</span></span>
<span class="line">    package1 <span class="token operator">\\</span></span>
<span class="line">    package2 <span class="token operator">\\</span></span>
<span class="line">    &amp;&amp; rm -rf /var/lib/apt/lists/*</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 &amp;&amp; 连接命令减少层数</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> command1 &amp;&amp; command2 &amp;&amp; command3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="copy-vs-add" tabindex="-1"><a class="header-anchor" href="#copy-vs-add"><span>COPY vs ADD</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># COPY: 简单复制文件(推荐)</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> src/ /app/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ADD: 支持 URL 和自动解压 tar</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ADD</span> https://example.com/file.tar.gz /app/</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ADD</span> archive.tar.gz /app/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="env" tabindex="-1"><a class="header-anchor" href="#env"><span>ENV</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 设置环境变量</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENV</span> APP_HOME=/app <span class="token operator">\\</span></span>
<span class="line">    PORT=8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arg" tabindex="-1"><a class="header-anchor" href="#arg"><span>ARG</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 构建时参数</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ARG</span> VERSION=1.0</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;Building version \${VERSION}&quot;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用: docker build --build-arg VERSION=2.0 .</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir"><span>WORKDIR</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 设置工作目录(自动创建)</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="expose" tabindex="-1"><a class="header-anchor" href="#expose"><span>EXPOSE</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 声明容器监听端口(仅文档作用)</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">EXPOSE</span> 80 443</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="volume" tabindex="-1"><a class="header-anchor" href="#volume"><span>VOLUME</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 声明挂载点</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">VOLUME</span> /data</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 切换用户</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">USER</span> appuser</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cmd-vs-entrypoint" tabindex="-1"><a class="header-anchor" href="#cmd-vs-entrypoint"><span>CMD vs ENTRYPOINT</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># CMD: 默认命令(可被覆盖)</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ENTRYPOINT: 容器入口点(不易覆盖)</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;docker-entrypoint.sh&quot;</span>]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 组合使用</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;python&quot;</span>]</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;app.py&quot;</span>]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多阶段构建示例" tabindex="-1"><a class="header-anchor" href="#多阶段构建示例"><span>多阶段构建示例</span></a></h3><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token comment"># 构建阶段</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> golang:1.21 <span class="token keyword">AS</span> builder</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> go.* ./</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> go mod download</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> . .</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 go build -o myapp</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行阶段</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> alpine:latest</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> apk --no-cache add ca-certificates</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /root/</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/myapp .</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./myapp&quot;</span>]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像"><span>构建镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 基本构建</span></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> myapp:v1.0 <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定 Dockerfile</span></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-f</span> Dockerfile.prod <span class="token parameter variable">-t</span> myapp:prod <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用构建参数</span></span>
<span class="line"><span class="token function">docker</span> build --build-arg <span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token number">2.0</span> <span class="token parameter variable">-t</span> myapp:v2.0 <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 不使用缓存</span></span>
<span class="line"><span class="token function">docker</span> build --no-cache <span class="token parameter variable">-t</span> myapp:v1.0 <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定平台</span></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">--platform</span> linux/amd64 <span class="token parameter variable">-t</span> myapp:v1.0 <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerignore-文件" tabindex="-1"><a class="header-anchor" href="#dockerignore-文件"><span>.dockerignore 文件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Git 文件</span>
<span class="line">.git</span>
<span class="line">.gitignore</span>
<span class="line"></span>
<span class="line"># 依赖目录</span>
<span class="line">node_modules</span>
<span class="line">vendor</span>
<span class="line"></span>
<span class="line"># 构建输出</span>
<span class="line">dist</span>
<span class="line">build</span>
<span class="line"></span>
<span class="line"># 日志和临时文件</span>
<span class="line">*.log</span>
<span class="line">tmp</span>
<span class="line">*.tmp</span>
<span class="line"></span>
<span class="line"># IDE 配置</span>
<span class="line">.vscode</span>
<span class="line">.idea</span>
<span class="line"></span>
<span class="line"># 文档</span>
<span class="line">README.md</span>
<span class="line">docs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令速查" tabindex="-1"><a class="header-anchor" href="#常用命令速查"><span>常用命令速查</span></a></h2><h3 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息"><span>系统信息</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看 Docker 版本</span></span>
<span class="line"><span class="token function">docker</span> version</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看系统信息</span></span>
<span class="line"><span class="token function">docker</span> info</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看磁盘使用情况</span></span>
<span class="line"><span class="token function">docker</span> system <span class="token function">df</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清理未使用资源</span></span>
<span class="line"><span class="token function">docker</span> system prune</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清理所有未使用资源(包括数据卷)</span></span>
<span class="line"><span class="token function">docker</span> system prune <span class="token parameter variable">-a</span> <span class="token parameter variable">--volumes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快捷操作" tabindex="-1"><a class="header-anchor" href="#快捷操作"><span>快捷操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 停止所有运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有镜像</span></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看容器 IP 地址</span></span>
<span class="line"><span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">&#39;{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39;</span> container_id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进入容器并执行命令</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> container_id <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;command&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><h3 id="镜像构建最佳实践" tabindex="-1"><a class="header-anchor" href="#镜像构建最佳实践"><span>镜像构建最佳实践</span></a></h3><ol><li><p><strong>使用合适的基础镜像</strong></p><ul><li>优先选择官方镜像</li><li>使用 alpine 版本减小镜像体积</li><li>使用特定版本标签而非 latest</li></ul></li><li><p><strong>优化层缓存</strong></p><ul><li>将变化频率低的指令放在前面</li><li>先复制依赖文件,再复制代码</li><li>合并 RUN 指令减少层数</li></ul></li><li><p><strong>减小镜像体积</strong></p><ul><li>使用多阶段构建</li><li>清理临时文件和缓存</li><li>使用 .dockerignore 排除无用文件</li></ul></li><li><p><strong>安全性</strong></p><ul><li>不要在镜像中存储敏感信息</li><li>使用非 root 用户运行应用</li><li>定期更新基础镜像</li><li>扫描镜像漏洞</li></ul></li></ol><h3 id="容器运行最佳实践" tabindex="-1"><a class="header-anchor" href="#容器运行最佳实践"><span>容器运行最佳实践</span></a></h3><ol><li><strong>资源限制</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--memory</span><span class="token operator">=</span><span class="token string">&quot;512m&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  --memory-swap<span class="token operator">=</span><span class="token string">&quot;1g&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--cpus</span><span class="token operator">=</span><span class="token string">&quot;1.5&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  --pids-limit<span class="token operator">=</span><span class="token number">100</span> <span class="token punctuation">\\</span></span>
<span class="line">  myapp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>健康检查</strong></li></ol><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">HEALTHCHECK</span> <span class="token options"><span class="token property">--interval</span><span class="token punctuation">=</span><span class="token string">30s</span> <span class="token property">--timeout</span><span class="token punctuation">=</span><span class="token string">3s</span></span> <span class="token operator">\\</span></span>
<span class="line">  <span class="token keyword">CMD</span> curl -f http://localhost/ || exit 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>日志管理</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 限制日志大小</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  --log-opt max-size<span class="token operator">=</span>10m <span class="token punctuation">\\</span></span>
<span class="line">  --log-opt max-file<span class="token operator">=</span><span class="token number">3</span> <span class="token punctuation">\\</span></span>
<span class="line">  myapp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>重启策略</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 总是重启</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always myapp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 失败时重启</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>on-failure:5 myapp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-最佳实践" tabindex="-1"><a class="header-anchor" href="#docker-compose-最佳实践"><span>Docker Compose 最佳实践</span></a></h3><ol><li><strong>环境变量管理</strong></li></ol><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># 使用 .env 文件</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">web</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> DB_HOST=$<span class="token punctuation">{</span>DB_HOST<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> DB_PORT=$<span class="token punctuation">{</span>DB_PORT<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>服务依赖</strong></li></ol><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">web</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">db</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy</span>
<span class="line">  <span class="token key atrule">db</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pg_isready&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>开发与生产配置分离</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 开发环境</span></span>
<span class="line"><span class="token function">docker</span> compose <span class="token parameter variable">-f</span> compose.yaml <span class="token parameter variable">-f</span> compose.dev.yaml up</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 生产环境</span></span>
<span class="line"><span class="token function">docker</span> compose <span class="token parameter variable">-f</span> compose.yaml <span class="token parameter variable">-f</span> compose.prod.yaml up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h3><ol><li><strong>使用数据卷而非绑定挂载</strong></li><li><strong>合理配置网络模式</strong></li><li><strong>使用 BuildKit 加速构建</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token assign-left variable">DOCKER_BUILDKIT</span><span class="token operator">=</span><span class="token number">1</span> <span class="token function">docker</span> build <span class="token parameter variable">-t</span> myapp <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li><strong>配置镜像加速器</strong></li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;https://mirror.gcr.io&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监控和日志" tabindex="-1"><a class="header-anchor" href="#监控和日志"><span>监控和日志</span></a></h3><ol><li><strong>使用 Prometheus 监控容器</strong></li><li><strong>集中化日志收集(ELK/EFK)</strong></li><li><strong>使用 docker stats 实时监控资源</strong></li><li><strong>配置日志驱动(json-file, syslog, journald)</strong></li></ol><h3 id="安全建议" tabindex="-1"><a class="header-anchor" href="#安全建议"><span>安全建议</span></a></h3><ol><li><strong>定期更新 Docker 和镜像</strong></li><li><strong>使用内容信任验证镜像</strong></li><li><strong>限制容器权限</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run --cap-drop<span class="token operator">=</span>ALL --cap-add<span class="token operator">=</span>NET_BIND_SERVICE myapp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li><strong>使用只读文件系统</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run --read-only <span class="token parameter variable">--tmpfs</span> /tmp myapp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li><strong>启用 Docker 安全扫描</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> scan myimage:tag</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="附录-故障排查" tabindex="-1"><a class="header-anchor" href="#附录-故障排查"><span>附录: 故障排查</span></a></h2><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3><p><strong>容器无法启动</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看详细错误信息</span></span>
<span class="line"><span class="token function">docker</span> logs container_id</span>
<span class="line"><span class="token function">docker</span> inspect container_id</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>端口已被占用</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看端口占用</span></span>
<span class="line"><span class="token function">lsof</span> <span class="token parameter variable">-i</span> :8080</span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-tulpn</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>磁盘空间不足</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 清理未使用资源</span></span>
<span class="line"><span class="token function">docker</span> system prune <span class="token parameter variable">-a</span> <span class="token parameter variable">--volumes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>网络连接问题</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查容器网络配置</span></span>
<span class="line"><span class="token function">docker</span> network inspect bridge</span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> container_id <span class="token function">ping</span> google.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>性能问题</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看资源使用</span></span>
<span class="line"><span class="token function">docker</span> stats</span>
<span class="line"><span class="token function">docker</span> <span class="token function">top</span> container_id</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源"><span>参考资源</span></a></h2><ul><li>官方文档: https://docs.docker.com</li><li>Docker Hub: https://hub.docker.com</li><li>Docker Compose 文档: https://docs.docker.com/compose</li><li>最佳实践指南: https://docs.docker.com/develop/dev-best-practices</li></ul><hr><p><strong>版本</strong>: 适用于 Docker Engine 24.x+ 和 Docker Compose V2<br><strong>最后更新</strong>: 2026-01-01</p>`,162))])}const v=i(r,[["render",o],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/books/docker-handbook/","title":"Docker 使用手册","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Docker 简介","slug":"docker-简介","link":"#docker-简介","children":[{"level":3,"title":"主要优势","slug":"主要优势","link":"#主要优势","children":[]}]},{"level":2,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[{"level":3,"title":"Linux (Ubuntu/Debian)","slug":"linux-ubuntu-debian","link":"#linux-ubuntu-debian","children":[]},{"level":3,"title":"macOS","slug":"macos","link":"#macos","children":[]},{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":3,"title":"配置用户权限 (Linux)","slug":"配置用户权限-linux","link":"#配置用户权限-linux","children":[]}]},{"level":2,"title":"Docker 核心概念","slug":"docker-核心概念","link":"#docker-核心概念","children":[{"level":3,"title":"镜像 (Image)","slug":"镜像-image","link":"#镜像-image","children":[]},{"level":3,"title":"容器 (Container)","slug":"容器-container","link":"#容器-container","children":[]},{"level":3,"title":"仓库 (Registry)","slug":"仓库-registry","link":"#仓库-registry","children":[]},{"level":3,"title":"Dockerfile","slug":"dockerfile","link":"#dockerfile","children":[]}]},{"level":2,"title":"镜像管理","slug":"镜像管理","link":"#镜像管理","children":[{"level":3,"title":"搜索镜像","slug":"搜索镜像","link":"#搜索镜像","children":[]},{"level":3,"title":"拉取镜像","slug":"拉取镜像","link":"#拉取镜像","children":[]},{"level":3,"title":"查看本地镜像","slug":"查看本地镜像","link":"#查看本地镜像","children":[]},{"level":3,"title":"删除镜像","slug":"删除镜像","link":"#删除镜像","children":[]},{"level":3,"title":"导入导出镜像","slug":"导入导出镜像","link":"#导入导出镜像","children":[]},{"level":3,"title":"标记镜像","slug":"标记镜像","link":"#标记镜像","children":[]}]},{"level":2,"title":"容器管理","slug":"容器管理","link":"#容器管理","children":[{"level":3,"title":"创建和运行容器","slug":"创建和运行容器","link":"#创建和运行容器","children":[]},{"level":3,"title":"容器生命周期管理","slug":"容器生命周期管理","link":"#容器生命周期管理","children":[]},{"level":3,"title":"查看容器信息","slug":"查看容器信息","link":"#查看容器信息","children":[]},{"level":3,"title":"进入容器","slug":"进入容器","link":"#进入容器","children":[]},{"level":3,"title":"容器与主机间的文件操作","slug":"容器与主机间的文件操作","link":"#容器与主机间的文件操作","children":[]},{"level":3,"title":"容器提交为镜像","slug":"容器提交为镜像","link":"#容器提交为镜像","children":[]}]},{"level":2,"title":"网络配置","slug":"网络配置","link":"#网络配置","children":[{"level":3,"title":"网络模式","slug":"网络模式","link":"#网络模式","children":[]},{"level":3,"title":"网络管理","slug":"网络管理","link":"#网络管理","children":[]},{"level":3,"title":"使用自定义网络运行容器","slug":"使用自定义网络运行容器","link":"#使用自定义网络运行容器","children":[]}]},{"level":2,"title":"数据卷管理","slug":"数据卷管理","link":"#数据卷管理","children":[{"level":3,"title":"数据卷类型","slug":"数据卷类型","link":"#数据卷类型","children":[]},{"level":3,"title":"数据卷操作","slug":"数据卷操作","link":"#数据卷操作","children":[]},{"level":3,"title":"使用数据卷","slug":"使用数据卷","link":"#使用数据卷","children":[]},{"level":3,"title":"数据卷备份和恢复","slug":"数据卷备份和恢复","link":"#数据卷备份和恢复","children":[]}]},{"level":2,"title":"Docker Compose","slug":"docker-compose","link":"#docker-compose","children":[{"level":3,"title":"安装 Docker Compose","slug":"安装-docker-compose","link":"#安装-docker-compose","children":[]},{"level":3,"title":"核心用途","slug":"核心用途","link":"#核心用途","children":[]},{"level":3,"title":"docker-compose.yaml 示例","slug":"docker-compose-yaml-示例","link":"#docker-compose-yaml-示例","children":[]},{"level":3,"title":"Compose 常用命令(v2版本-go版-docker CLI 插件(plugin)，v1版-python版-独立工具使用的是: docker-compose up 等)","slug":"compose-常用命令-v2版本-go版-docker-cli-插件-plugin-v1版-python版-独立工具使用的是-docker-compose-up-等","link":"#compose-常用命令-v2版本-go版-docker-cli-插件-plugin-v1版-python版-独立工具使用的是-docker-compose-up-等","children":[]}]},{"level":2,"title":"Dockerfile 编写","slug":"dockerfile-编写","link":"#dockerfile-编写","children":[{"level":3,"title":"Dockerfile 基础结构","slug":"dockerfile-基础结构","link":"#dockerfile-基础结构","children":[]},{"level":3,"title":"核心用途","slug":"核心用途-1","link":"#核心用途-1","children":[]},{"level":3,"title":"常用指令详解","slug":"常用指令详解","link":"#常用指令详解","children":[]},{"level":3,"title":"多阶段构建示例","slug":"多阶段构建示例","link":"#多阶段构建示例","children":[]},{"level":3,"title":"构建镜像","slug":"构建镜像","link":"#构建镜像","children":[]},{"level":3,"title":".dockerignore 文件","slug":"dockerignore-文件","link":"#dockerignore-文件","children":[]}]},{"level":2,"title":"常用命令速查","slug":"常用命令速查","link":"#常用命令速查","children":[{"level":3,"title":"系统信息","slug":"系统信息","link":"#系统信息","children":[]},{"level":3,"title":"快捷操作","slug":"快捷操作","link":"#快捷操作","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[{"level":3,"title":"镜像构建最佳实践","slug":"镜像构建最佳实践","link":"#镜像构建最佳实践","children":[]},{"level":3,"title":"容器运行最佳实践","slug":"容器运行最佳实践","link":"#容器运行最佳实践","children":[]},{"level":3,"title":"Docker Compose 最佳实践","slug":"docker-compose-最佳实践","link":"#docker-compose-最佳实践","children":[]},{"level":3,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]},{"level":3,"title":"监控和日志","slug":"监控和日志","link":"#监控和日志","children":[]},{"level":3,"title":"安全建议","slug":"安全建议","link":"#安全建议","children":[]}]},{"level":2,"title":"附录: 故障排查","slug":"附录-故障排查","link":"#附录-故障排查","children":[{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}]},{"level":2,"title":"参考资源","slug":"参考资源","link":"#参考资源","children":[]}],"git":{},"filePathRelative":"books/docker-handbook/index.md"}');export{v as comp,m as data};
