import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h3 id="关于keydb的使用" tabindex="-1"><a class="header-anchor" href="#关于keydb的使用"><span>关于keyDB的使用</span></a></h3><h4 id="_1-服务配置" tabindex="-1"><a class="header-anchor" href="#_1-服务配置"><span>1.服务配置</span></a></h4><ul><li><p>docker-compose 文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vim docker-compose.yml</span>
<span class="line"></span>
<span class="line">version: &quot;3.9&quot;</span>
<span class="line">services:</span>
<span class="line">keydb-master:</span>
<span class="line">image: eqalpha/keydb:latest</span>
<span class="line">container_name: keydb-master</span>
<span class="line">restart: unless-stopped</span>
<span class="line">ports:</span>
<span class="line">- &quot;6381:6379&quot;</span>
<span class="line">volumes:</span>
<span class="line">- ./master-data:/data</span>
<span class="line">- ./master.conf:/etc/keydb/keydb.conf</span>
<span class="line">command: [&quot;keydb-server&quot;, &quot;/etc/keydb/keydb.conf&quot;]</span>
<span class="line"></span>
<span class="line">keydb-replica:</span>
<span class="line">image: eqalpha/keydb:latest</span>
<span class="line">container_name: keydb-replica</span>
<span class="line">restart: unless-stopped</span>
<span class="line">ports:</span>
<span class="line">- &quot;6382:6379&quot;</span>
<span class="line">volumes:</span>
<span class="line">- ./replica-data:/data</span>
<span class="line">- ./replica.conf:/etc/keydb/keydb.conf</span>
<span class="line">depends_on:</span>
<span class="line">- keydb-master</span>
<span class="line">command: [&quot;keydb-server&quot;, &quot;/etc/keydb/keydb.conf&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建目录</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir -p master-data replica-data</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>主配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vim master.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>KeyDB 主节点配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">port 6379</span>
<span class="line">bind 0.0.0.0</span>
<span class="line">requirepass yourpassword</span>
<span class="line">masterauth yourpassword</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据持久化</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">save 900 1</span>
<span class="line">save 300 10</span>
<span class="line">save 60 10000</span>
<span class="line">dir /data</span>
<span class="line">dbfilename keydb-master.rdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>日志</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">loglevel notice</span>
<span class="line">logfile &quot;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">timeout 0</span>
<span class="line">tcp-keepalive 300</span>
<span class="line">supervised no</span>
<span class="line">pidfile /var/run/keydb_6379.pid</span>
<span class="line">databases 16</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>从配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vim replica.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>KeyDB 副本节点配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">port 6379</span>
<span class="line">bind 0.0.0.0</span>
<span class="line">requirepass yourpassword</span>
<span class="line">masterauth yourpassword</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>主从复制配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">replicaof keydb-master 6379</span>
<span class="line">replica-read-only yes</span>
<span class="line">replica-serve-stale-data yes</span>
<span class="line">replica-priority 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据持久化</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">save 900 1</span>
<span class="line">save 300 10</span>
<span class="line">save 60 10000</span>
<span class="line">dir /data</span>
<span class="line">dbfilename keydb-replica.rdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>日志</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">loglevel notice</span>
<span class="line">logfile &quot;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">timeout 0</span>
<span class="line">tcp-keepalive 300</span>
<span class="line">supervised no</span>
<span class="line">pidfile /var/run/keydb_6379.pid</span>
<span class="line">databases 16</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker-compose up -d</span>
<span class="line">WARN[0000] /home/mdpi/code/code-new/my-keyDB/docker-compose.yml: \`version\` is obsolete</span>
<span class="line">[+] Running 3/3</span>
<span class="line">✔ Network my-keydb_default  Created                                                                                                                                                                          0.1s</span>
<span class="line">✔ Container keydb-master    Started                                                                                                                                                                          0.0s</span>
<span class="line">✔ Container keydb-replica   Started</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看运行状态" tabindex="-1"><a class="header-anchor" href="#查看运行状态"><span>查看运行状态</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker ps</span>
<span class="line">CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                                                                                  NAMES</span>
<span class="line">0e1a6ca9d96e   eqalpha/keydb:latest     &quot;docker-entrypoint.s…&quot;   8 seconds ago   Up 8 seconds   0.0.0.0:6382-&gt;6379/tcp, :::6382-&gt;6379/tcp                                              keydb-replica</span>
<span class="line">ade18b7c5898   eqalpha/keydb:latest     &quot;docker-entrypoint.s…&quot;   8 seconds ago   Up 8 seconds   0.0.0.0:6381-&gt;6379/tcp, :::6381-&gt;6379/tcp                                              keydb-master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看配置是否生效" tabindex="-1"><a class="header-anchor" href="#查看配置是否生效"><span>查看配置是否生效</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker exec -it keydb-master keydb-cli -a yourpassword INFO replication</span>
<span class="line">Warning: Using a password with &#39;-a&#39; or &#39;-u&#39; option on the command line interface may not be safe.</span>
<span class="line">role:master</span>
<span class="line">connected_slaves:1</span>
<span class="line">slave0:ip=172.22.0.3,port=6379,state=online,offset=37,lag=1</span>
<span class="line">master_failover_state:no-failover</span>
<span class="line">master_replid:f214c2411a60042d8e85679c3f3f7648943a245c</span>
<span class="line">master_replid2:0000000000000000000000000000000000000000</span>
<span class="line">master_repl_offset:37</span>
<span class="line">second_repl_offset:-1</span>
<span class="line">repl_backlog_active:1</span>
<span class="line">repl_backlog_size:1048576</span>
<span class="line">repl_backlog_first_byte_offset:1</span>
<span class="line">repl_backlog_histlen:37</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ docker exec -it keydb-replica keydb-cli -a yourpassword INFO replication</span>
<span class="line">Warning: Using a password with &#39;-a&#39; or &#39;-u&#39; option on the command line interface may not be safe.</span>
<span class="line">role:slave</span>
<span class="line">master_global_link_status:up</span>
<span class="line">connected_masters:1</span>
<span class="line">master_host:keydb-master</span>
<span class="line">master_port:6379</span>
<span class="line">master_link_status:up</span>
<span class="line">master_last_io_seconds_ago:7</span>
<span class="line">master_sync_in_progress:0</span>
<span class="line">slave_read_repl_offset:51</span>
<span class="line">slave_repl_offset:51</span>
<span class="line">slave_priority:100</span>
<span class="line">slave_read_only:1</span>
<span class="line">replica_announced:1</span>
<span class="line">connected_slaves:0</span>
<span class="line">master_failover_state:no-failover</span>
<span class="line">master_replid:f214c2411a60042d8e85679c3f3f7648943a245c</span>
<span class="line">master_replid2:0000000000000000000000000000000000000000</span>
<span class="line">master_repl_offset:51</span>
<span class="line">second_repl_offset:-1</span>
<span class="line">repl_backlog_active:1</span>
<span class="line">repl_backlog_size:1048576</span>
<span class="line">repl_backlog_first_byte_offset:1</span>
<span class="line">repl_backlog_histlen:51</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker exec -it keydb-master keydb-cli -a yourpassword SET test &quot;hello world&quot;</span>
<span class="line">Warning: Using a password with &#39;-a&#39; or &#39;-u&#39; option on the command line interface may not be safe.</span>
<span class="line">OK</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ docker exec -it keydb-replica keydb-cli -a yourpassword GET test</span>
<span class="line">Warning: Using a password with &#39;-a&#39; or &#39;-u&#39; option on the command line interface may not be safe.</span>
<span class="line">&quot;hello world&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置分析" tabindex="-1"><a class="header-anchor" href="#配置分析"><span>配置分析</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">requirepass yourpassword</span>
<span class="line">作用: 设置当前节点的访问密码</span>
<span class="line">用途: 客户端连接到这个节点时需要提供的密码</span>
<span class="line">相当于: &quot;进入这个节点需要密码&quot;</span>
<span class="line"></span>
<span class="line">masterauth yourpassword</span>
<span class="line">作用: 设置连接主节点时使用的密码</span>
<span class="line">用途: 当前节点作为副本连接主节点时的认证密码</span>
<span class="line">相当于: &quot;连接主节点时用这个密码&quot;</span>
<span class="line"></span>
<span class="line">主节点上也配置了: masterauth yourpassword 虽然是主节点，但配置上以防角色切换</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结论-顺利启动" tabindex="-1"><a class="header-anchor" href="#结论-顺利启动"><span>结论: 顺利启动</span></a></h4><hr><h3 id="简单运行一个laravel12项目-用来测试上面的-keydb-读写分离" tabindex="-1"><a class="header-anchor" href="#简单运行一个laravel12项目-用来测试上面的-keydb-读写分离"><span>简单运行一个laravel12项目，用来测试上面的 keyDB 读写分离</span></a></h3><ul><li>1.运行comoser 创建命令<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ composer create-project laravel/laravel laravel12-project &quot;12.*&quot;</span>
<span class="line"></span>
<span class="line">Problem 1</span>
<span class="line">- Root composer.json requires laravel/pint ^1.24 -&gt; satisfiable by laravel/pint[v1.24.0, v1.25.0, v1.25.1].</span>
<span class="line">- laravel/pint[v1.24.0, ..., v1.25.1] require ext-xml * -&gt; it is missing from your system. Install or enable PHP&#39;s xml extension.</span>
<span class="line">Problem 2</span>
<span class="line">- phpunit/phpunit[11.5.3, ..., 11.5.41] require ext-dom * -&gt; it is missing from your system. Install or enable PHP&#39;s dom extension.</span>
<span class="line">- Root composer.json requires phpunit/phpunit ^11.5.3 -&gt; satisfiable by phpunit/phpunit[11.5.3, ..., 11.5.41].</span>
<span class="line"></span>
<span class="line">To enable extensions, verify that they are enabled in your .ini files:</span>
<span class="line">- /etc/php/8.4/cli/php.ini</span>
<span class="line">- /etc/php/8.4/cli/conf.d/10-opcache.ini</span>
<span class="line">- /etc/php/8.4/cli/conf.d/10-pdo.ini</span>
<span class="line">- /etc/php/8.4/cli/conf.d/20-calendar.ini</span>
<span class="line">- /etc/php/8.4/cli/conf.d/20-ctype.ini</span>
<span class="line">- /etc/php/8.4/cli/conf.d/20-exif.ini</span>
<span class="line">- /etc/php/8.4/cli/conf.d/20-ffi.ini</span>
<span class="line">- /etc/php/8.4/cli/conf.d/20-fileinfo.ini</span>
<span class="line">- /etc/php/8.4/cli/conf.d/20-ftp.ini</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>这个报错的意思是 <strong>PHP 缺少一些扩展</strong>，Laravel 12 的 <code>pint</code> 和 <code>phpunit</code> 需要用到 <code>ext-xml</code> 和 <code>ext-dom</code>。</p><p>具体解决方法如下：</p><h4 id="_1-安装缺失的-php-扩展" tabindex="-1"><a class="header-anchor" href="#_1-安装缺失的-php-扩展"><span>1. 安装缺失的 PHP 扩展</span></a></h4><p>根据你的操作系统不同，安装方式也不一样。你用的是 PHP 8.4（报错里显示 <code>/etc/php/8.4/cli/php.ini</code>），假设是 <strong>Ubuntu / Debian 系统</strong>：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php8.4-xml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>php8.4-xml</code> 会包含 <code>ext-xml</code> 和 <code>ext-dom</code>。</li><li>安装后，重启 PHP-FPM / CLI：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">service</span> php8.4-fpm restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-确认扩展已启用" tabindex="-1"><a class="header-anchor" href="#_2-确认扩展已启用"><span>2. 确认扩展已启用</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php <span class="token parameter variable">-m</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;xml|dom&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">dom</span>
<span class="line">xml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>就说明安装成功。</p><hr><h4 id="_3-重新执行-composer" tabindex="-1"><a class="header-anchor" href="#_3-重新执行-composer"><span>3. 重新执行 Composer</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">composer</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">由于使用的是phpredis 客户端，所以还需要 sudo apt install php8.4-redis</span>
<span class="line">还需要：</span>
<span class="line">sudo apt install php8.4-mbstring， 否则报：Call to undefined function Illuminate\\Support\\mb_split()</span>
<span class="line">sudo apt install php8.4-mysql 否则报: could not find driver (Connection: mysql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>2.配置redis &#39;write&#39; =&gt; [ &#39;host&#39; =&gt; env(&#39;REDIS_HOST_1&#39;, &#39;127.0.0.1&#39;), &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;, null), &#39;port&#39; =&gt; env(&#39;REDIS_PORT_1&#39;, 6379), // KeyDB 主节点 &#39;database&#39; =&gt; 0, ], &#39;read&#39; =&gt; [ &#39;host&#39; =&gt; env(&#39;REDIS_HOST_2&#39;, &#39;127.0.0.1&#39;), &#39;password&#39; =&gt; env(&#39;REDIS_PASSWORD&#39;, null), &#39;port&#39; =&gt; env(&#39;REDIS_PORT_2&#39;, 6380), // KeyDB 从节点 &#39;database&#39; =&gt; 0, ],</p></li><li><p>3.通过php-cli启动服务</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">php artisan serve (默认8000端口)</span>
<span class="line"></span>
<span class="line">也可以手动指定端口</span>
<span class="line">php artisan serve --port=8080</span>
<span class="line"></span>
<span class="line">也可以手动指定 IP + 端口（比如想局域网访问）</span>
<span class="line">php artisan serve --host=0.0.0.0 --port=8081</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>4.测试:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Helpers;</span>
<span class="line"></span>
<span class="line">use Illuminate\\Support\\Facades\\Redis;</span>
<span class="line"></span>
<span class="line">class RedisHelper</span>
<span class="line">{</span>
<span class="line">    /**</span>
<span class="line">     * redis 写数据库</span>
<span class="line">     *</span>
<span class="line">     * @return \\Illuminate\\Redis\\Connections\\Connection</span>
<span class="line">     */</span>
<span class="line">    public static function write()</span>
<span class="line">    {</span>
<span class="line">        return Redis::connection(&#39;write&#39;);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * Redis 读数据库</span>
<span class="line">     *</span>
<span class="line">     * @return \\Illuminate\\Redis\\Connections\\Connection</span>
<span class="line">     */</span>
<span class="line">    public static function read()</span>
<span class="line">    {</span>
<span class="line">        return Redis::connection(&#39;read&#39;);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Route::get(&#39;/redis-cluster-test&#39;, function () {</span>
<span class="line">    RedisHelper::write()-&gt;set(&#39;address&#39;, &#39;wuhan&#39;.time());</span>
<span class="line">    $value = RedisHelper::read()-&gt;get(&#39;address&#39;);</span>
<span class="line"></span>
<span class="line">    return response()-&gt;json([</span>
<span class="line">        &#39;master_write&#39; =&gt; &#39;success&#39;,</span>
<span class="line">        &#39;slave_read&#39; =&gt; $value</span>
<span class="line">    ]);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">http://localhost:8082/redis-cluster-test</span>
<span class="line">{</span>
<span class="line">&quot;master_write&quot;: &quot;success&quot;,</span>
<span class="line">&quot;slave_read&quot;: &quot;wuhan1759033136&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>5.问题： 还是需要手动控制 读写 连接</p></li></ul>`,34)]))}const r=n(l,[["render",d],["__file","关于keyDB的使用.html.vue"]]),c=JSON.parse('{"path":"/content/database/redis/%E5%85%B3%E4%BA%8EkeyDB%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"关于keyDB的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于keyDB的使用","head":[["meta",{"name":"title","content":"关于keyDB的使用"}],["meta",{"name":"description","content":"关于keyDB的使用"}],["meta",{"name":"keywords","content":"keyDb"}],["meta",{"property":"og:title","content":"关于keyDB的使用"}],["meta",{"property":"og:description","content":"关于keyDB的使用"}]]},"headers":[{"level":3,"title":"关于keyDB的使用","slug":"关于keydb的使用","link":"#关于keydb的使用","children":[]},{"level":3,"title":"简单运行一个laravel12项目，用来测试上面的 keyDB 读写分离","slug":"简单运行一个laravel12项目-用来测试上面的-keydb-读写分离","link":"#简单运行一个laravel12项目-用来测试上面的-keydb-读写分离","children":[]}],"git":{},"filePathRelative":"content/database/redis/关于keyDB的使用.md"}');export{r as comp,c as data};
