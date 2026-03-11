import{_ as s,c as a,f as n,o as i}from"./app-WR18URC5.js";const l={};function t(p,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h3 id="最近在本地运行laravel12项目的时候" tabindex="-1"><a class="header-anchor" href="#最近在本地运行laravel12项目的时候"><span>最近在本地运行laravel12项目的时候</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ composer install</span>
<span class="line">Installing dependencies from lock file (including require-dev)</span>
<span class="line">Verifying lock file contents can be installed on current platform.</span>
<span class="line">Your lock file does not contain a compatible set of packages. Please run composer update.</span>
<span class="line"></span>
<span class="line">  Problem 1</span>
<span class="line">    - symfony/clock is locked to version v8.0.0 and an update of this package was not requested.</span>
<span class="line">    - symfony/clock v8.0.0 requires php &gt;=8.4 -&gt; your php version (8.3.17) does not satisfy that requirement.</span>
<span class="line">  Problem 2</span>
<span class="line">    - symfony/css-selector is locked to version v8.0.6 and an update of this package was not requested.</span>
<span class="line">    - symfony/css-selector v8.0.6 requires php &gt;=8.4 -&gt; your php version (8.3.17) does not satisfy that requirement.</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需要安装php8-4环境" tabindex="-1"><a class="header-anchor" href="#需要安装php8-4环境"><span>需要安装php8.4环境</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo add-apt-repository ppa:ondrej/php</span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install php8.4 php8.4-cli php8.4-mbstring php8.4-xml php8.4-curl php8.4-mysql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行-add-apt-repository-之前可以通过如下命令查看是否安装过" tabindex="-1"><a class="header-anchor" href="#执行-add-apt-repository-之前可以通过如下命令查看是否安装过"><span>执行 <code>add-apt-repository</code> 之前可以通过如下命令查看是否安装过</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ls /etc/apt/sources.list.d/</span>
<span class="line">docker.list  google-chrome.list  hashicorp.list  ngrok.list  ondrej-ubuntu-php-jammy.list  sublime-text.list  vscode.list</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现: <code>ondrej-ubuntu-php-jammy.list</code>, 这就是 ppa:ondrej/php 的 source 文件。</p><h3 id="接下来直接update" tabindex="-1"><a class="header-anchor" href="#接下来直接update"><span>接下来直接update</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ sudo apt update</span>
<span class="line">Hit:2 https://dl.google.com/linux/chrome/deb stable InRelease                                                                                                                                                     </span>
<span class="line">Hit:3 https://mirrors.aliyun.com/docker-ce/linux/ubuntu jammy InRelease                                                                                                                                           </span>
<span class="line">Hit:1 https://packages.microsoft.com/repos/code stable InRelease                                                                                                                                                  </span>
<span class="line">Get:4 http://security.ubuntu.com/ubuntu jammy-security InRelease [129 kB]                                                                                                                                         </span>
<span class="line">Get:5 https://apt.releases.hashicorp.com jammy InRelease [12.9 kB]                                                                                                                                                </span>
<span class="line">Hit:6 https://ngrok-agent.s3.amazonaws.com bookworm InRelease                                                                                                                                  </span>
<span class="line">Hit:7 https://download.sublimetext.com apt/stable/ InRelease                                                                                                </span>
<span class="line">Hit:8 https://ppa.launchpadcontent.net/ondrej/php/ubuntu jammy InRelease                                                              </span>
<span class="line">Hit:9 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy InRelease                                                </span>
<span class="line">Get:11 https://apt.releases.hashicorp.com jammy/main i386 Packages [91.1 kB]                          </span>
<span class="line">Get:10 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-updates InRelease [128 kB]</span>
<span class="line">Get:12 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-backports InRelease [127 kB]        </span>
<span class="line">Get:13 https://apt.releases.hashicorp.com jammy/main amd64 Packages [225 kB]   </span>
<span class="line">Get:14 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-updates/main amd64 Packages [3,285 kB]</span>
<span class="line">Get:15 http://security.ubuntu.com/ubuntu jammy-security/main i386 Packages [778 kB]        </span>
<span class="line">Get:16 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-updates/main amd64 DEP-11 Metadata [114 kB] </span>
<span class="line">Get:17 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-updates/main amd64 c-n-f Metadata [19.2 kB]</span>
<span class="line">Get:18 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-updates/restricted amd64 DEP-11 Metadata [212 B]    </span>
<span class="line">Get:19 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-updates/universe amd64 Packages [1,256 kB]        </span>
<span class="line">Get:20 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-updates/universe amd64 DEP-11 Metadata [360 kB]</span>
<span class="line">Get:21 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-updates/multiverse amd64 DEP-11 Metadata [940 B]</span>
<span class="line">Get:22 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-backports/main amd64 DEP-11 Metadata [7,280 B]</span>
<span class="line">Get:23 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-backports/restricted amd64 DEP-11 Metadata [212 B]</span>
<span class="line">Get:24 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-backports/universe amd64 DEP-11 Metadata [10.2 kB]</span>
<span class="line">Get:25 http://mirrors.tuna.tsinghua.edu.cn/ubuntu jammy-backports/multiverse amd64 DEP-11 Metadata [212 B]</span>
<span class="line">Get:26 http://security.ubuntu.com/ubuntu jammy-security/main amd64 Packages [3,023 kB]</span>
<span class="line">Fetched 9,567 kB in 5s (1,911 kB/s)  </span>
<span class="line">Reading package lists... Done</span>
<span class="line">Building dependency tree... Done</span>
<span class="line">Reading state information... Done</span>
<span class="line">261 packages can be upgraded. Run &#39;apt list --upgradable&#39; to see them.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看php源-是否包含php8-4版本" tabindex="-1"><a class="header-anchor" href="#查看php源-是否包含php8-4版本"><span>查看php源 是否包含php8.4版本</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ apt search php8.4-cli</span>
<span class="line">Sorting... Done</span>
<span class="line">Full Text Search... Done</span>
<span class="line">php8.4-cli/jammy 8.4.18-2+ubuntu22.04.1+deb.sury.org+1 amd64</span>
<span class="line">  command-line interpreter for the PHP scripting language</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明是 ok 的</p><h3 id="安装php8-4" tabindex="-1"><a class="header-anchor" href="#安装php8-4"><span>安装php8.4</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ sudo apt install php8.4 php8.4-cli php8.4-fpm php8.4-mbstring php8.4-xml php8.4-curl php8.4-mysql php8.4-zip php8.4-bcmath php8.4-intl</span>
<span class="line">Reading package lists... Done</span>
<span class="line">Building dependency tree... Done</span>
<span class="line">Reading state information... Done</span>
<span class="line">The following additional packages will be installed:</span>
<span class="line">  apache2 apache2-data libapache2-mod-php8.4 php-common php8.4-common php8.4-opcache php8.4-readline</span>
<span class="line">Suggested packages:</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后等待就可以了</p><p>中间报：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">...</span>
<span class="line">...</span>
<span class="line">Job for apache2.service failed because the control process exited with error code.</span>
<span class="line">See &quot;systemctl status apache2.service&quot; and &quot;journalctl -xeu apache2.service&quot; for details.</span>
<span class="line">invoke-rc.d: initscript apache2, action &quot;restart&quot; failed.</span>
<span class="line">× apache2.service - The Apache HTTP Server</span>
<span class="line">     Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)</span>
<span class="line">     Active: failed (Result: exit-code) since Wed 2026-03-11 23:53:39 CST; 8ms ago</span>
<span class="line">       Docs: https://httpd.apache.org/docs/2.4/</span>
<span class="line">    Process: 36283 ExecStart=/usr/sbin/apachectl start (code=exited, status=1/FAILURE)</span>
<span class="line">        CPU: 28ms</span>
<span class="line"></span>
<span class="line">Mar 11 23:53:39 tianyi510s systemd[1]: Starting The Apache HTTP Server...</span>
<span class="line">Mar 11 23:53:39 tianyi510s apachectl[36286]: (98)Address already in use: AH00072: make_sock: could not bind to address [::]:80</span>
<span class="line">Mar 11 23:53:39 tianyi510s apachectl[36286]: (98)Address already in use: AH00072: make_sock: could not bind to address 0.0.0.0:80</span>
<span class="line">Mar 11 23:53:39 tianyi510s apachectl[36286]: no listening sockets available, shutting down</span>
<span class="line">Mar 11 23:53:39 tianyi510s apachectl[36286]: AH00015: Unable to open logs</span>
<span class="line">Mar 11 23:53:39 tianyi510s apachectl[36283]: Action &#39;start&#39; failed.</span>
<span class="line">Mar 11 23:53:39 tianyi510s apachectl[36283]: The Apache error log may have more information.</span>
<span class="line">Mar 11 23:53:39 tianyi510s systemd[1]: apache2.service: Control process exited, code=exited, status=1/FAILURE</span>
<span class="line">Mar 11 23:53:39 tianyi510s systemd[1]: apache2.service: Failed with result &#39;exit-code&#39;.</span>
<span class="line">Mar 11 23:53:39 tianyi510s systemd[1]: Failed to start The Apache HTTP Server.</span>
<span class="line">apache2_invoke: Enable module php8.4</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是因为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">libapache2-mod-php8.4 这个包会把 Apache 安装</span>
<span class="line"></span>
<span class="line">可以关闭Apache：</span>
<span class="line">sudo systemctl stop apache2</span>
<span class="line">sudo systemctl disable apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可以通过如下命令-移除apcahe" tabindex="-1"><a class="header-anchor" href="#可以通过如下命令-移除apcahe"><span>可以通过如下命令，移除Apcahe</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo apt remove apache2 libapache2-mod-php8.4</span>
<span class="line"></span>
<span class="line">sudo apt autoremove</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看php8-4运行状态" tabindex="-1"><a class="header-anchor" href="#查看php8-4运行状态"><span>查看php8.4运行状态</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ sudo systemctl status php8.4-fpm</span>
<span class="line">//如果没有启动，就启动一下</span>
<span class="line">$ sudo systemctl start php8.4-fpm</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接下来继续执行" tabindex="-1"><a class="header-anchor" href="#接下来继续执行"><span>接下来继续执行</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">compsoer install 完成项目初始化</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,25)]))}const r=s(l,[["render",t],["__file","laravel之php8_4安装.html.vue"]]),c=JSON.parse('{"path":"/content/php/laravel/laravel%E4%B9%8Bphp8_4%E5%AE%89%E8%A3%85.html","title":"laravel之php8.4安装","lang":"en-US","frontmatter":{"sidebar":false,"title":"laravel之php8.4安装","head":[["meta"],{"name":"title","content":"laravel之php8.4安装"},["meta"],{"name":"description","content":"laravel之php8.4安装"},["meta"],{"name":"keywords","content":"php8.4,laravel,composer"},["meta"],{"property":"og:title","content":"laravel之php8.4安装"},["meta"],{"property":"og:description","content":"laravel之php8.4安装"}]},"headers":[{"level":3,"title":"最近在本地运行laravel12项目的时候","slug":"最近在本地运行laravel12项目的时候","link":"#最近在本地运行laravel12项目的时候","children":[]},{"level":3,"title":"需要安装php8.4环境","slug":"需要安装php8-4环境","link":"#需要安装php8-4环境","children":[]},{"level":3,"title":"执行 add-apt-repository 之前可以通过如下命令查看是否安装过","slug":"执行-add-apt-repository-之前可以通过如下命令查看是否安装过","link":"#执行-add-apt-repository-之前可以通过如下命令查看是否安装过","children":[]},{"level":3,"title":"接下来直接update","slug":"接下来直接update","link":"#接下来直接update","children":[]},{"level":3,"title":"查看php源 是否包含php8.4版本","slug":"查看php源-是否包含php8-4版本","link":"#查看php源-是否包含php8-4版本","children":[]},{"level":3,"title":"安装php8.4","slug":"安装php8-4","link":"#安装php8-4","children":[]},{"level":3,"title":"可以通过如下命令，移除Apcahe","slug":"可以通过如下命令-移除apcahe","link":"#可以通过如下命令-移除apcahe","children":[]},{"level":3,"title":"查看php8.4运行状态","slug":"查看php8-4运行状态","link":"#查看php8-4运行状态","children":[]},{"level":3,"title":"接下来继续执行","slug":"接下来继续执行","link":"#接下来继续执行","children":[]}],"git":{},"filePathRelative":"content/php/laravel/laravel之php8_4安装.md"}');export{r as comp,c as data};
