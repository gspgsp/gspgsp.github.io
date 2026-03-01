import{_ as i,c as p,a as n,f as c,o as t,r as a}from"./app-BB_BIQV8.js";const d={};function o(r,s){const e=a("DocSearchInPage"),l=a("InArticleAd");return t(),p("div",null,[n(e),n(l),s[0]||(s[0]=c(`<h1 id="linux-使用手册-2025版" tabindex="-1"><a class="header-anchor" href="#linux-使用手册-2025版"><span>Linux 使用手册 (2025版)</span></a></h1><h2 id="linux-基础概念" tabindex="-1"><a class="header-anchor" href="#linux-基础概念"><span>Linux 基础概念</span></a></h2><p>Linux是一个开源的类Unix操作系统内核,广泛应用于服务器、桌面、嵌入式设备等领域。</p><h3 id="主流发行版" tabindex="-1"><a class="header-anchor" href="#主流发行版"><span>主流发行版</span></a></h3><ul><li><strong>Ubuntu/Debian</strong>: 用户友好,适合初学者</li><li><strong>RHEL/Rocky Linux/AlmaLinux</strong>: 企业级应用</li><li><strong>Fedora</strong>: 最新技术的试验场</li><li><strong>Arch Linux</strong>: 高度自定义,滚动更新</li><li><strong>openSUSE</strong>: 稳定可靠,适合企业</li></ul><h3 id="文件系统层次结构" tabindex="-1"><a class="header-anchor" href="#文件系统层次结构"><span>文件系统层次结构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/           根目录</span>
<span class="line">├── bin     基本命令二进制文件</span>
<span class="line">├── boot    启动加载器文件</span>
<span class="line">├── dev     设备文件</span>
<span class="line">├── etc     系统配置文件</span>
<span class="line">├── home    用户主目录</span>
<span class="line">├── lib     系统库文件</span>
<span class="line">├── opt     可选应用软件包</span>
<span class="line">├── proc    进程和内核信息</span>
<span class="line">├── root    root用户主目录</span>
<span class="line">├── tmp     临时文件</span>
<span class="line">├── usr     用户程序</span>
<span class="line">└── var     可变数据文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="文件系统操作" tabindex="-1"><a class="header-anchor" href="#文件系统操作"><span>文件系统操作</span></a></h2><h3 id="基本导航命令" tabindex="-1"><a class="header-anchor" href="#基本导航命令"><span>基本导航命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看当前目录</span></span>
<span class="line"><span class="token builtin class-name">pwd</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出文件和目录</span></span>
<span class="line"><span class="token function">ls</span>              <span class="token comment"># 基本列表</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-l</span>           <span class="token comment"># 详细信息</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-la</span>          <span class="token comment"># 包括隐藏文件</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-lh</span>          <span class="token comment"># 人类可读的文件大小</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /path/to/dir <span class="token comment"># 绝对路径</span></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>           <span class="token comment"># 上级目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> ~            <span class="token comment"># 用户主目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> -            <span class="token comment"># 上次访问的目录</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作"><span>文件操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建文件</span></span>
<span class="line"><span class="token function">touch</span> filename.txt</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;内容&quot;</span> <span class="token operator">&gt;</span> filename.txt</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制文件</span></span>
<span class="line"><span class="token function">cp</span> source.txt dest.txt</span>
<span class="line"><span class="token function">cp</span> <span class="token parameter variable">-r</span> sourcedir/ destdir/    <span class="token comment"># 递归复制目录</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移动/重命名</span></span>
<span class="line"><span class="token function">mv</span> oldname.txt newname.txt</span>
<span class="line"><span class="token function">mv</span> file.txt /path/to/dest/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除文件</span></span>
<span class="line"><span class="token function">rm</span> filename.txt</span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-r</span> dirname/              <span class="token comment"># 递归删除目录</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> dirname/             <span class="token comment"># 强制删除(谨慎使用)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建目录</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token function">dirname</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> path/to/nested/dir <span class="token comment"># 创建多级目录</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看文件内容" tabindex="-1"><a class="header-anchor" href="#查看文件内容"><span>查看文件内容</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> file.txt                <span class="token comment"># 显示全部内容</span></span>
<span class="line"><span class="token function">less</span> file.txt               <span class="token comment"># 分页查看(推荐)</span></span>
<span class="line"><span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> file.txt         <span class="token comment"># 查看前10行</span></span>
<span class="line"><span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> file.txt         <span class="token comment"># 查看后10行</span></span>
<span class="line"><span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/syslog     <span class="token comment"># 实时监控日志</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件搜索" tabindex="-1"><a class="header-anchor" href="#文件搜索"><span>文件搜索</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 按名称查找文件</span></span>
<span class="line"><span class="token function">find</span> /path <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span></span>
<span class="line"><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;config*&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在文件中搜索文本</span></span>
<span class="line"><span class="token function">grep</span> <span class="token string">&quot;关键词&quot;</span> file.txt</span>
<span class="line"><span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;关键词&quot;</span> /path/      <span class="token comment"># 递归搜索</span></span>
<span class="line"><span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;关键词&quot;</span> file.txt    <span class="token comment"># 忽略大小写</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 快速定位文件</span></span>
<span class="line"><span class="token function">locate</span> filename</span>
<span class="line">updatedb                     <span class="token comment"># 更新locate数据库</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件权限" tabindex="-1"><a class="header-anchor" href="#文件权限"><span>文件权限</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看权限</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-l</span> file.txt</span>
<span class="line"><span class="token comment"># 输出: -rwxr-xr-- 1 user group 1234 Jan 1 12:00 file.txt</span></span>
<span class="line"><span class="token comment"># 权限说明: [文件类型][所有者][组][其他用户]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改权限</span></span>
<span class="line"><span class="token function">chmod</span> <span class="token number">755</span> file.txt          <span class="token comment"># 数字方式</span></span>
<span class="line"><span class="token function">chmod</span> u+x file.txt          <span class="token comment"># 符号方式(所有者添加执行权限)</span></span>
<span class="line"><span class="token function">chmod</span> g-w file.txt          <span class="token comment"># 组移除写权限</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改所有者</span></span>
<span class="line"><span class="token function">chown</span> user:group file.txt</span>
<span class="line"><span class="token function">chown</span> <span class="token parameter variable">-R</span> user:group dir/    <span class="token comment"># 递归修改</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="用户和权限管理" tabindex="-1"><a class="header-anchor" href="#用户和权限管理"><span>用户和权限管理</span></a></h2><h3 id="用户操作" tabindex="-1"><a class="header-anchor" href="#用户操作"><span>用户操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建用户</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash username</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">passwd</span> username        <span class="token comment"># 设置密码</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改用户</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> username  <span class="token comment"># 添加到sudo组</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-l</span> newname oldname <span class="token comment"># 重命名用户</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除用户</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">userdel</span> username</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">userdel</span> <span class="token parameter variable">-r</span> username    <span class="token comment"># 同时删除主目录</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看用户信息</span></span>
<span class="line"><span class="token function">whoami</span>                      <span class="token comment"># 当前用户</span></span>
<span class="line"><span class="token function">id</span>                          <span class="token comment"># 用户ID和组信息</span></span>
<span class="line"><span class="token function">who</span>                         <span class="token comment"># 已登录用户</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组管理" tabindex="-1"><a class="header-anchor" href="#组管理"><span>组管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建组</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">groupadd</span> groupname</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将用户添加到组</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> groupname username</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看组</span></span>
<span class="line"><span class="token function">groups</span> username</span>
<span class="line"><span class="token function">cat</span> /etc/group</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sudo权限" tabindex="-1"><a class="header-anchor" href="#sudo权限"><span>sudo权限</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 使用sudo执行命令</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token builtin class-name">command</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编辑sudoers文件(安全方式)</span></span>
<span class="line"><span class="token function">sudo</span> visudo</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换到root用户</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token parameter variable">-i</span>                     <span class="token comment"># 完整的root环境</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">su</span>                     <span class="token comment"># 切换到root shell</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理"><span>进程管理</span></a></h2><h3 id="查看进程" tabindex="-1"><a class="header-anchor" href="#查看进程"><span>查看进程</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 显示进程</span></span>
<span class="line"><span class="token function">ps</span> aux                      <span class="token comment"># 所有进程详细信息</span></span>
<span class="line"><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> processname   <span class="token comment"># 搜索特定进程</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 动态查看进程</span></span>
<span class="line"><span class="token function">top</span>                         <span class="token comment"># 传统进程监控</span></span>
<span class="line"><span class="token function">htop</span>                        <span class="token comment"># 增强版(需安装)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进程树</span></span>
<span class="line">pstree</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="管理进程" tabindex="-1"><a class="header-anchor" href="#管理进程"><span>管理进程</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 终止进程</span></span>
<span class="line"><span class="token function">kill</span> PID                    <span class="token comment"># 正常终止</span></span>
<span class="line"><span class="token function">kill</span> <span class="token parameter variable">-9</span> PID                 <span class="token comment"># 强制终止</span></span>
<span class="line"><span class="token function">killall</span> processname         <span class="token comment"># 按名称终止</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 后台运行</span></span>
<span class="line"><span class="token builtin class-name">command</span> <span class="token operator">&amp;</span>                   <span class="token comment"># 后台执行</span></span>
<span class="line"><span class="token function">nohup</span> <span class="token builtin class-name">command</span> <span class="token operator">&amp;</span>             <span class="token comment"># 退出终端后继续运行</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看后台任务</span></span>
<span class="line"><span class="token function">jobs</span></span>
<span class="line"><span class="token function">fg</span> %1                       <span class="token comment"># 将任务1调到前台</span></span>
<span class="line"><span class="token function">bg</span> %1                       <span class="token comment"># 将任务1放到后台</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统服务管理-systemd" tabindex="-1"><a class="header-anchor" href="#系统服务管理-systemd"><span>系统服务管理(systemd)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 启动/停止服务</span></span>
<span class="line"><span class="token function">sudo</span> systemctl start servicename</span>
<span class="line"><span class="token function">sudo</span> systemctl stop servicename</span>
<span class="line"><span class="token function">sudo</span> systemctl restart servicename</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开机自启</span></span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> servicename</span>
<span class="line"><span class="token function">sudo</span> systemctl disable servicename</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看服务状态</span></span>
<span class="line"><span class="token function">sudo</span> systemctl status servicename</span>
<span class="line">systemctl list-units <span class="token parameter variable">--type</span><span class="token operator">=</span>service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="软件包管理" tabindex="-1"><a class="header-anchor" href="#软件包管理"><span>软件包管理</span></a></h2><h3 id="debian-ubuntu-apt" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu-apt"><span>Debian/Ubuntu (APT)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 更新软件包列表</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 升级已安装的软件包</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> upgrade</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> full-upgrade       <span class="token comment"># 包括内核升级</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装软件</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> packagename</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> package1 package2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除软件</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> remove packagename</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> purge packagename  <span class="token comment"># 同时删除配置文件</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索软件</span></span>
<span class="line"><span class="token function">apt</span> search keyword</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清理</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> autoremove         <span class="token comment"># 删除不需要的依赖</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> clean              <span class="token comment"># 清理下载的包文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rhel-rocky-fedora-dnf-yum" tabindex="-1"><a class="header-anchor" href="#rhel-rocky-fedora-dnf-yum"><span>RHEL/Rocky/Fedora (DNF/YUM)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 更新</span></span>
<span class="line"><span class="token function">sudo</span> dnf update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> packagename</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除</span></span>
<span class="line"><span class="token function">sudo</span> dnf remove packagename</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索</span></span>
<span class="line">dnf search keyword</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清理</span></span>
<span class="line"><span class="token function">sudo</span> dnf autoremove</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arch-linux-pacman" tabindex="-1"><a class="header-anchor" href="#arch-linux-pacman"><span>Arch Linux (Pacman)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 更新系统</span></span>
<span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-Syu</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> packagename</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除</span></span>
<span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-R</span> packagename</span>
<span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-Rns</span> packagename <span class="token comment"># 删除包及其依赖</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索</span></span>
<span class="line">pacman <span class="token parameter variable">-Ss</span> keyword</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="网络配置" tabindex="-1"><a class="header-anchor" href="#网络配置"><span>网络配置</span></a></h2><h3 id="网络信息" tabindex="-1"><a class="header-anchor" href="#网络信息"><span>网络信息</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看网络接口</span></span>
<span class="line"><span class="token function">ip</span> addr show</span>
<span class="line"><span class="token function">ip</span> <span class="token function">link</span> show</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看路由</span></span>
<span class="line"><span class="token function">ip</span> route show</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试连接</span></span>
<span class="line"><span class="token function">ping</span> google.com</span>
<span class="line"><span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">4</span> <span class="token number">8.8</span>.8.8          <span class="token comment"># 发送4个包</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># DNS查询</span></span>
<span class="line"><span class="token function">nslookup</span> domain.com</span>
<span class="line"><span class="token function">dig</span> domain.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看网络连接</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-tulpn</span>             <span class="token comment"># 监听端口</span></span>
<span class="line">ss <span class="token parameter variable">-tulpn</span>                  <span class="token comment"># 现代替代工具</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防火墙-firewalld" tabindex="-1"><a class="header-anchor" href="#防火墙-firewalld"><span>防火墙(firewalld)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看状态</span></span>
<span class="line"><span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--state</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出规则</span></span>
<span class="line"><span class="token function">sudo</span> firewall-cmd --list-all</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开放端口</span></span>
<span class="line"><span class="token function">sudo</span> firewall-cmd --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span></span>
<span class="line"><span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--reload</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开放服务</span></span>
<span class="line"><span class="token function">sudo</span> firewall-cmd --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh"><span>SSH</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 连接远程主机</span></span>
<span class="line"><span class="token function">ssh</span> username@hostname</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用密钥</span></span>
<span class="line">ssh-keygen <span class="token parameter variable">-t</span> ed25519       <span class="token comment"># 生成密钥对</span></span>
<span class="line">ssh-copy-id user@host       <span class="token comment"># 复制公钥到远程主机</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 文件传输</span></span>
<span class="line"><span class="token function">scp</span> file.txt user@host:/path/</span>
<span class="line"><span class="token function">scp</span> user@host:/path/file.txt ./</span>
<span class="line"><span class="token function">rsync</span> <span class="token parameter variable">-avz</span> source/ user@host:dest/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="系统监控" tabindex="-1"><a class="header-anchor" href="#系统监控"><span>系统监控</span></a></h2><h3 id="资源使用" tabindex="-1"><a class="header-anchor" href="#资源使用"><span>资源使用</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># CPU和内存</span></span>
<span class="line"><span class="token function">top</span></span>
<span class="line"><span class="token function">htop</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 内存详情</span></span>
<span class="line"><span class="token function">free</span> <span class="token parameter variable">-h</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 磁盘使用</span></span>
<span class="line"><span class="token function">df</span> <span class="token parameter variable">-h</span>                       <span class="token comment"># 磁盘空间</span></span>
<span class="line"><span class="token function">du</span> <span class="token parameter variable">-sh</span> /path/to/dir         <span class="token comment"># 目录大小</span></span>
<span class="line"><span class="token function">du</span> <span class="token parameter variable">-h</span> --max-depth<span class="token operator">=</span><span class="token number">1</span>         <span class="token comment"># 当前目录下各子目录大小</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># I/O统计</span></span>
<span class="line">iostat</span>
<span class="line">iotop                       <span class="token comment"># 实时I/O监控</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志查看" tabindex="-1"><a class="header-anchor" href="#日志查看"><span>日志查看</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># systemd日志</span></span>
<span class="line">journalctl                  <span class="token comment"># 所有日志</span></span>
<span class="line">journalctl <span class="token parameter variable">-u</span> servicename   <span class="token comment"># 特定服务日志</span></span>
<span class="line">journalctl <span class="token parameter variable">-f</span>               <span class="token comment"># 实时日志</span></span>
<span class="line">journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;1 hour ago&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 传统日志文件</span></span>
<span class="line"><span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/syslog</span>
<span class="line"><span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/auth.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息"><span>系统信息</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 系统版本</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-a</span></span>
<span class="line"><span class="token function">cat</span> /etc/os-release</span>
<span class="line"></span>
<span class="line"><span class="token comment"># CPU信息</span></span>
<span class="line">lscpu</span>
<span class="line"><span class="token function">cat</span> /proc/cpuinfo</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 内存信息</span></span>
<span class="line"><span class="token function">cat</span> /proc/meminfo</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 硬件信息</span></span>
<span class="line">lshw</span>
<span class="line">lspci                       <span class="token comment"># PCI设备</span></span>
<span class="line">lsusb                       <span class="token comment"># USB设备</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="shell-脚本基础" tabindex="-1"><a class="header-anchor" href="#shell-脚本基础"><span>Shell 脚本基础</span></a></h2><h3 id="创建脚本" tabindex="-1"><a class="header-anchor" href="#创建脚本"><span>创建脚本</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token comment"># 第一个Shell脚本</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello, World!&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 变量</span></span>
<span class="line"><span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Linux&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;Welcome to <span class="token variable">$NAME</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 命令输出赋值</span></span>
<span class="line"><span class="token assign-left variable">CURRENT_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;Today is <span class="token variable">$CURRENT_DATE</span>&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句"><span>条件语句</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;/path/to/file&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;文件存在&quot;</span></span>
<span class="line"><span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;/path/to/dir&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;目录存在&quot;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;路径不存在&quot;</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># for循环</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number: <span class="token variable">$i</span>&quot;</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># while循环</span></span>
<span class="line"><span class="token assign-left variable">COUNT</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$COUNT</span> <span class="token parameter variable">-lt</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Count: <span class="token variable">$COUNT</span>&quot;</span></span>
<span class="line">    <span class="token assign-left variable">COUNT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>COUNT <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义函数</span></span>
<span class="line"><span class="token function-name function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello, <span class="token variable">$1</span>!&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 调用函数</span></span>
<span class="line">greet <span class="token string">&quot;User&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="常用工具" tabindex="-1"><a class="header-anchor" href="#常用工具"><span>常用工具</span></a></h2><h3 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理"><span>文本处理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># sed - 流编辑器</span></span>
<span class="line"><span class="token function">sed</span> <span class="token string">&#39;s/old/new/g&#39;</span> file.txt          <span class="token comment"># 替换文本</span></span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/old/new/g&#39;</span> file.txt       <span class="token comment"># 直接修改文件</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># awk - 文本分析工具</span></span>
<span class="line"><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> file.txt           <span class="token comment"># 打印第一列</span></span>
<span class="line"><span class="token function">awk</span> -F: <span class="token string">&#39;{print $1}&#39;</span> /etc/passwd    <span class="token comment"># 指定分隔符</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># cut - 剪切文本</span></span>
<span class="line"><span class="token function">cut</span> -d: <span class="token parameter variable">-f1</span> /etc/passwd             <span class="token comment"># 提取第一字段</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># sort - 排序</span></span>
<span class="line"><span class="token function">sort</span> file.txt</span>
<span class="line"><span class="token function">sort</span> <span class="token parameter variable">-r</span> file.txt                    <span class="token comment"># 反向排序</span></span>
<span class="line"><span class="token function">sort</span> <span class="token parameter variable">-n</span> file.txt                    <span class="token comment"># 数字排序</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># uniq - 去重</span></span>
<span class="line"><span class="token function">sort</span> file.txt <span class="token operator">|</span> <span class="token function">uniq</span></span>
<span class="line"><span class="token function">uniq</span> <span class="token parameter variable">-c</span> file.txt                    <span class="token comment"># 统计重复次数</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩和解压" tabindex="-1"><a class="header-anchor" href="#压缩和解压"><span>压缩和解压</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># tar归档</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-czf</span> archive.tar.gz dir/        <span class="token comment"># 压缩</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xzf</span> archive.tar.gz             <span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-tzf</span> archive.tar.gz             <span class="token comment"># 查看内容</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># zip</span></span>
<span class="line"><span class="token function">zip</span> <span class="token parameter variable">-r</span> archive.zip dir/</span>
<span class="line"><span class="token function">unzip</span> archive.zip</span>
<span class="line"></span>
<span class="line"><span class="token comment"># gzip</span></span>
<span class="line"><span class="token function">gzip</span> file.txt                       <span class="token comment"># 压缩</span></span>
<span class="line">gunzip file.txt.gz                  <span class="token comment"># 解压</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统维护" tabindex="-1"><a class="header-anchor" href="#系统维护"><span>系统维护</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 定时任务(cron)</span></span>
<span class="line"><span class="token function">crontab</span> <span class="token parameter variable">-e</span>                          <span class="token comment"># 编辑crontab</span></span>
<span class="line"><span class="token function">crontab</span> <span class="token parameter variable">-l</span>                          <span class="token comment"># 列出定时任务</span></span>
<span class="line"><span class="token comment"># 格式: 分 时 日 月 周 命令</span></span>
<span class="line"><span class="token comment"># 示例: 0 2 * * * /path/to/backup.sh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 磁盘检查</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">fsck</span> /dev/sda1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 挂载磁盘</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mount</span> /dev/sdb1 /mnt/usb</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">umount</span> /mnt/usb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h2><h3 id="bash快捷键" tabindex="-1"><a class="header-anchor" href="#bash快捷键"><span>Bash快捷键</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Ctrl + C        中断当前命令</span>
<span class="line">Ctrl + D        退出当前shell</span>
<span class="line">Ctrl + Z        暂停当前进程</span>
<span class="line">Ctrl + L        清屏</span>
<span class="line">Ctrl + A        移到行首</span>
<span class="line">Ctrl + E        移到行尾</span>
<span class="line">Ctrl + U        删除光标前的内容</span>
<span class="line">Ctrl + K        删除光标后的内容</span>
<span class="line">Ctrl + R        搜索历史命令</span>
<span class="line">Tab             自动补全</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><strong>定期更新系统</strong>: 保持系统和软件包最新,修复安全漏洞</li><li><strong>使用非root用户</strong>: 日常操作使用普通用户,需要时使用sudo</li><li><strong>备份重要数据</strong>: 定期备份/home和/etc等重要目录</li><li><strong>监控日志</strong>: 定期检查系统日志,及时发现问题</li><li><strong>最小权限原则</strong>: 只给予必要的权限</li><li><strong>使用SSH密钥</strong>: 禁用密码登录,使用密钥认证</li><li><strong>防火墙配置</strong>: 只开放必要的端口</li></ol><hr><h2 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助"><span>获取帮助</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">man</span> <span class="token builtin class-name">command</span>                 <span class="token comment"># 查看命令手册</span></span>
<span class="line"><span class="token builtin class-name">command</span> <span class="token parameter variable">--help</span>              <span class="token comment"># 查看命令帮助</span></span>
<span class="line">info <span class="token builtin class-name">command</span>                <span class="token comment"># 查看详细文档</span></span>
<span class="line">whatis <span class="token builtin class-name">command</span>              <span class="token comment"># 命令简短描述</span></span>
<span class="line"><span class="token function">apropos</span> keyword             <span class="token comment"># 搜索相关命令</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>Linux是一个强大而灵活的操作系统。掌握基本命令和概念后,您可以高效地管理系统、自动化任务,并解决各种技术问题。持续实践是精通Linux的关键。</p><p><strong>推荐学习资源</strong>:</p><ul><li>Linux Documentation Project (tldp.org)</li><li>Arch Wiki (即使不使用Arch,文档也很详尽)</li><li>man页面和info文档</li><li>在线教程和社区论坛</li></ul>`,92))])}const u=i(d,[["render",o],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/books/linux-handbook/","title":"Linux 使用手册 (2025版)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Linux 基础概念","slug":"linux-基础概念","link":"#linux-基础概念","children":[{"level":3,"title":"主流发行版","slug":"主流发行版","link":"#主流发行版","children":[]},{"level":3,"title":"文件系统层次结构","slug":"文件系统层次结构","link":"#文件系统层次结构","children":[]}]},{"level":2,"title":"文件系统操作","slug":"文件系统操作","link":"#文件系统操作","children":[{"level":3,"title":"基本导航命令","slug":"基本导航命令","link":"#基本导航命令","children":[]},{"level":3,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[]},{"level":3,"title":"查看文件内容","slug":"查看文件内容","link":"#查看文件内容","children":[]},{"level":3,"title":"文件搜索","slug":"文件搜索","link":"#文件搜索","children":[]},{"level":3,"title":"文件权限","slug":"文件权限","link":"#文件权限","children":[]}]},{"level":2,"title":"用户和权限管理","slug":"用户和权限管理","link":"#用户和权限管理","children":[{"level":3,"title":"用户操作","slug":"用户操作","link":"#用户操作","children":[]},{"level":3,"title":"组管理","slug":"组管理","link":"#组管理","children":[]},{"level":3,"title":"sudo权限","slug":"sudo权限","link":"#sudo权限","children":[]}]},{"level":2,"title":"进程管理","slug":"进程管理","link":"#进程管理","children":[{"level":3,"title":"查看进程","slug":"查看进程","link":"#查看进程","children":[]},{"level":3,"title":"管理进程","slug":"管理进程","link":"#管理进程","children":[]},{"level":3,"title":"系统服务管理(systemd)","slug":"系统服务管理-systemd","link":"#系统服务管理-systemd","children":[]}]},{"level":2,"title":"软件包管理","slug":"软件包管理","link":"#软件包管理","children":[{"level":3,"title":"Debian/Ubuntu (APT)","slug":"debian-ubuntu-apt","link":"#debian-ubuntu-apt","children":[]},{"level":3,"title":"RHEL/Rocky/Fedora (DNF/YUM)","slug":"rhel-rocky-fedora-dnf-yum","link":"#rhel-rocky-fedora-dnf-yum","children":[]},{"level":3,"title":"Arch Linux (Pacman)","slug":"arch-linux-pacman","link":"#arch-linux-pacman","children":[]}]},{"level":2,"title":"网络配置","slug":"网络配置","link":"#网络配置","children":[{"level":3,"title":"网络信息","slug":"网络信息","link":"#网络信息","children":[]},{"level":3,"title":"防火墙(firewalld)","slug":"防火墙-firewalld","link":"#防火墙-firewalld","children":[]},{"level":3,"title":"SSH","slug":"ssh","link":"#ssh","children":[]}]},{"level":2,"title":"系统监控","slug":"系统监控","link":"#系统监控","children":[{"level":3,"title":"资源使用","slug":"资源使用","link":"#资源使用","children":[]},{"level":3,"title":"日志查看","slug":"日志查看","link":"#日志查看","children":[]},{"level":3,"title":"系统信息","slug":"系统信息","link":"#系统信息","children":[]}]},{"level":2,"title":"Shell 脚本基础","slug":"shell-脚本基础","link":"#shell-脚本基础","children":[{"level":3,"title":"创建脚本","slug":"创建脚本","link":"#创建脚本","children":[]},{"level":3,"title":"条件语句","slug":"条件语句","link":"#条件语句","children":[]},{"level":3,"title":"循环","slug":"循环","link":"#循环","children":[]},{"level":3,"title":"函数","slug":"函数","link":"#函数","children":[]}]},{"level":2,"title":"常用工具","slug":"常用工具","link":"#常用工具","children":[{"level":3,"title":"文本处理","slug":"文本处理","link":"#文本处理","children":[]},{"level":3,"title":"压缩和解压","slug":"压缩和解压","link":"#压缩和解压","children":[]},{"level":3,"title":"系统维护","slug":"系统维护","link":"#系统维护","children":[]}]},{"level":2,"title":"快捷键","slug":"快捷键","link":"#快捷键","children":[{"level":3,"title":"Bash快捷键","slug":"bash快捷键","link":"#bash快捷键","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"获取帮助","slug":"获取帮助","link":"#获取帮助","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"filePathRelative":"books/linux-handbook/index.md"}');export{u as comp,v as data};
