import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h5 id="项目发布系统-将当前项目发送到不同的服务器" tabindex="-1"><a class="header-anchor" href="#项目发布系统-将当前项目发送到不同的服务器"><span>项目发布系统(将当前项目发送到不同的服务器)</span></a></h5><h5 id="_1-环境准备" tabindex="-1"><a class="header-anchor" href="#_1-环境准备"><span>1.环境准备</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ubuntu22(宿主机)</span>
<span class="line">docker(web1 web2)</span>
<span class="line">rsync</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-创建网络-模拟内网" tabindex="-1"><a class="header-anchor" href="#_2-创建网络-模拟内网"><span>2.创建网络(模拟内网)</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker network create --subnet=10.10.0.0/24 deploy-net</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_3-创建两个模拟-远程服务器" tabindex="-1"><a class="header-anchor" href="#_3-创建两个模拟-远程服务器"><span>3.创建两个模拟“远程服务器”</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 容器 A</span>
<span class="line">docker run -dit --name web-node-1 --hostname web1 \\</span>
<span class="line">  --net deploy-net --ip 10.10.0.11 \\</span>
<span class="line">  -v /opt/web-node-1:/opt/srv/laravel12 \\</span>
<span class="line">  ubuntu:22.04 bash</span>
<span class="line"></span>
<span class="line"># 容器 B</span>
<span class="line">docker run -dit --name web-node-2 --hostname web2 \\</span>
<span class="line">  --net deploy-net --ip 10.10.0.12 \\</span>
<span class="line">  -v /opt/web-node-2:/opt/srv/laravel12 \\</span>
<span class="line">  ubuntu:22.04 bash</span>
<span class="line">  </span>
<span class="line">鉴于这是一bash 命令，docker重启后，不能自动启动，所以下次 docker start -ai web-node-1/2 启动容器</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-配置-ssh-服务-在容器中" tabindex="-1"><a class="header-anchor" href="#_4-配置-ssh-服务-在容器中"><span>4.配置 SSH 服务（在容器中）</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker exec -it web-node-1 bash</span>
<span class="line"># 安装 SSH</span>
<span class="line">apt update &amp;&amp; apt install openssh-server -y</span>
<span class="line">mkdir -p /var/run/sshd</span>
<span class="line">passwd -d root  # 免密,删除root用户的密码（开发环境测试用）</span>
<span class="line">echo &quot;PermitRootLogin yes&quot; &gt;&gt; /etc/ssh/sshd_config  # 允许root登陆</span>
<span class="line">echo &quot;PasswordAuthentication no&quot; &gt;&gt; /etc/ssh/sshd_config # 不允许密码登陆，只能ssh密钥登陆</span>
<span class="line">mkdir -p /root/.ssh</span>
<span class="line">exit</span>
<span class="line"></span>
<span class="line">重复上述步骤给 web-node-2 配置</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-然后启动-ssh-服务" tabindex="-1"><a class="header-anchor" href="#_5-然后启动-ssh-服务"><span>5.然后启动 SSH 服务：</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker exec -d web-node-1 service ssh start</span>
<span class="line">docker exec -d web-node-2 service ssh start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-配置-ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#_6-配置-ssh-免密登录"><span>6.配置 SSH 免密登录</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在主机上生成 SSH 密钥（如果没有）：</span>
<span class="line">ssh-keygen -t rsa -b 2048 -f ~/.ssh/id_rsa -N &quot;&quot;</span>
<span class="line"></span>
<span class="line">将公钥拷贝进两个容器：</span>
<span class="line">docker exec -i web-node-1 bash -c &#39;cat &gt;&gt; /root/.ssh/authorized_keys&#39; &lt; ~/.ssh/id_rsa.pub</span>
<span class="line">docker exec -i web-node-2 bash -c &#39;cat &gt;&gt; /root/.ssh/authorized_keys&#39; &lt; ~/.ssh/id_rsa.pub</span>
<span class="line"></span>
<span class="line">测试连接:</span>
<span class="line">ssh root@10.10.0.11</span>
<span class="line">ssh root@10.10.0.12</span>
<span class="line"></span>
<span class="line">可能需要手动输入一个yes， 因为:</span>
<span class="line">SSH 客户端检测到你是第一次连接这个 IP 的主机，它会：</span>
<span class="line">检查你本地的 ~/.ssh/known_hosts 文件</span>
<span class="line">发现这个 IP 没有记录</span>
<span class="line">出于安全，要求你手动确认是否信任这个主机</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-准备部署平台目录结构-在宿主机" tabindex="-1"><a class="header-anchor" href="#_7-准备部署平台目录结构-在宿主机"><span>7.准备部署平台目录结构（在宿主机）</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir -p ~/projects/deploy-platform/.pac/hooks</span>
<span class="line"></span>
<span class="line">cd ~/projects/deploy-platform</span>
<span class="line"></span>
<span class="line">echo &#39;#!/bin/bash&#39; &gt; .pac/hooks/deploy.sh</span>
<span class="line">chmod +x .pac/hooks/deploy.sh</span>
<span class="line"></span>
<span class="line">cat &gt; .pac/config.sh &lt;&lt;EOF</span>
<span class="line">SSH=/usr/bin/ssh</span>
<span class="line">SSH_USER=root</span>
<span class="line">SSH_PORT=22</span>
<span class="line">SSH_HOSTS=(10.10.0.11 10.10.0.12)</span>
<span class="line">RSYNC=/usr/bin/rsync</span>
<span class="line">LOCAL_DIR=/home/guoshipeng/Documents/code/deploy-platform</span>
<span class="line">HOOKS_DIR=$LOCAL_DIR/.pac/hooks</span>
<span class="line">REMOTE_DIR=/opt/srv/laravel12</span>
<span class="line">DEP_MODE=mix</span>
<span class="line">LIMIT_RELEASES=3</span>
<span class="line">RSYNC_EXCLUDE_FILE=$HOOKS_DIR/rsync_exclude</span>
<span class="line">EOF</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-模拟一次部署" tabindex="-1"><a class="header-anchor" href="#_8-模拟一次部署"><span>8.模拟一次部署</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">本来应该在.pac/hooks/deploy.sh 里添加一个标准的发布命令的，但是有些复杂，这里主要想验证代码是否发布成功</span>
<span class="line">所以直接在项目的根目录下创建一个deploy.sh 脚本，用来发布当前项目,内容如下</span>
<span class="line"></span>
<span class="line">#!/bin/bash</span>
<span class="line"></span>
<span class="line">source .pac/config.sh</span>
<span class="line"></span>
<span class="line">for HOST in &quot;\${SSH_HOSTS[@]}&quot;; do</span>
<span class="line">    echo &quot;🚀 Deploying to $HOST...&quot;</span>
<span class="line"></span>
<span class="line">    TIMESTAMP=$(date +%Y%m%d%H%M%S)</span>
<span class="line">    TARGET_DIR=&quot;$REMOTE_DIR/releases/$TIMESTAMP&quot;</span>
<span class="line"></span>
<span class="line">    echo &quot;📁 初始化远程目录结构&quot;</span>
<span class="line">    ssh -p &quot;$SSH_PORT&quot; &quot;$SSH_USER@$HOST&quot; &quot;mkdir -p $REMOTE_DIR/releases &amp;&amp; mkdir -p $REMOTE_DIR/shared&quot;</span>
<span class="line"></span>
<span class="line">    echo &quot;📦 使用 rsync 同步项目到远程: $TARGET_DIR&quot;</span>
<span class="line">    rsync -az --exclude-from=&quot;$RSYNC_EXCLUDE_FILE&quot; . &quot;$SSH_USER@$HOST:$TARGET_DIR&quot;</span>
<span class="line"></span>
<span class="line">    echo &quot;🔗 创建或更新 current 软链接&quot;</span>
<span class="line">    ssh -p &quot;$SSH_PORT&quot; &quot;$SSH_USER@$HOST&quot; &quot;ln -sfn $TARGET_DIR $REMOTE_DIR/current&quot;</span>
<span class="line"></span>
<span class="line">    echo &quot;✅ [$HOST] 部署成功: $TARGET_DIR -&gt; current&quot;</span>
<span class="line">    echo</span>
<span class="line">done</span>
<span class="line"></span>
<span class="line">然后直接在项目更目录执行:</span>
<span class="line">$ bash ./deploy.sh</span>
<span class="line">🚀 Deploying to 10.10.0.11...</span>
<span class="line">📁 初始化远程目录结构</span>
<span class="line">ssh: connect to host 10.10.0.11 port 22: No route to host</span>
<span class="line">📦 使用 rsync 同步项目到远程: /opt/srv/laravel12/releases/20250417001247</span>
<span class="line">ssh: connect to host 10.10.0.11 port 22: No route to host</span>
<span class="line">rsync: connection unexpectedly closed (0 bytes received so far) [sender]</span>
<span class="line">rsync error: unexplained error (code 255) at io.c(232) [sender=3.2.7]</span>
<span class="line">🔗 创建或更新 current 软链接</span>
<span class="line">ssh: connect to host 10.10.0.11 port 22: No route to host</span>
<span class="line">✅ [10.10.0.11] 部署成功: /opt/srv/laravel12/releases/20250417001247 -&gt; current</span>
<span class="line"></span>
<span class="line">🚀 Deploying to 10.10.0.12...</span>
<span class="line">📁 初始化远程目录结构</span>
<span class="line">ssh: connect to host 10.10.0.12 port 22: Connection refused</span>
<span class="line">📦 使用 rsync 同步项目到远程: /opt/srv/laravel12/releases/20250417001257</span>
<span class="line">ssh: connect to host 10.10.0.12 port 22: Connection refused</span>
<span class="line">rsync: connection unexpectedly closed (0 bytes received so far) [sender]</span>
<span class="line">rsync error: unexplained error (code 255) at io.c(232) [sender=3.2.7]</span>
<span class="line">🔗 创建或更新 current 软链接</span>
<span class="line">ssh: connect to host 10.10.0.12 port 22: Connection refused</span>
<span class="line">✅ [10.10.0.12] 部署成功: /opt/srv/laravel12/releases/20250417001257 -&gt; current</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">上面命令可能会报:</span>
<span class="line">rsync: command not found</span>
<span class="line">这是因为远程服务器没有安装 rsync， 执行：</span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install rsync</span>
<span class="line"></span>
<span class="line">rsync --versio</span>
<span class="line"></span>
<span class="line">为什么，远程服务器也需要安装 rsync?</span>
<span class="line">rsync 的工作原理是：</span>
<span class="line">部署平台通过 SSH 登录远程服务器，然后在远程服务器上启动 rsync 服务端进程，与本地的 rsync 客户端进行交互，同步文件。再详细的说就是:</span>
<span class="line">本地部署平台（Client）：</span>
<span class="line">  你运行 rsync 命令。</span>
<span class="line">  它连接远程主机的 SSH（默认22端口）。</span>
<span class="line">  它在远程服务器上运行一个 rsync --server 命令（这一步是自动的！你看不到，但确实发生了）。</span>
<span class="line"></span>
<span class="line">远程服务器（Server）：</span>
<span class="line">  并不需要运行 rsync 守护进程（daemon）。</span>
<span class="line">  只需要安装 rsync 命令行工具（client/server 二合一）。</span>
<span class="line">  它接收到 SSH 发起的 rsync 命令之后，会临时启动 rsync 进程，进入服务端模式，等待数据同步。</span>
<span class="line">  </span>
<span class="line">然后双方交换文件列表并同步差异。</span>
<span class="line"></span>
<span class="line">很多人以为 rsync 需要像 FTP 那样一直跑一个服务监听873端口，其实 “rsync over SSH” 根本不需要：</span>
<span class="line">只要远程机器装了 rsync 命令就够。</span>
<span class="line">同步是通过 SSH 通道临时执行 rsync 的，不是守护进程。</span>
<span class="line"></span>
<span class="line">最后在容器里，/opt/srv/laravel12/releases 分别可以看到代码，其中current 是一个软连接，用来指向当前最新发布，后续可以将这个current指向nginx的root 目录，运行项目</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const p=n(l,[["render",d],["__file","项目发布系统.html.vue"]]),t=JSON.parse('{"path":"/content/service/deploy/%E9%A1%B9%E7%9B%AE%E5%8F%91%E5%B8%83%E7%B3%BB%E7%BB%9F.html","title":"项目发布系统","lang":"en-US","frontmatter":{"sidebar":false,"title":"项目发布系统","head":[["meta"],{"name":"title","content":"项目发布系统"},["meta"],{"name":"description","content":"项目发布系统"},["meta"],{"name":"keywords","content":"php,laravel,项目发布系统"},["meta"],{"property":"og:title","content":"项目发布系统"},["meta"],{"property":"og:description","content":"项目发布系统"}]},"headers":[],"git":{},"filePathRelative":"content/service/deploy/项目发布系统.md"}');export{p as comp,t as data};
