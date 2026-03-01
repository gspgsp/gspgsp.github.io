import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<ul><li>ubuntu22安装memecached</li></ul><p>主要操作步骤如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">root@k8s:~$ memcached --version</span>
<span class="line">Command &#39;memcached&#39; not found, but can be installed with:</span>
<span class="line">root@k8s:~$ cd /usr/local/</span>
<span class="line">Cannot write to ‘memcached-1.6.21.tar.gz’ (Permission denied).</span>
<span class="line">root@k8s:/usr/local$ sudo wget -c http://www.memcached.org/files/memcached-1.6.21.tar.gz  //官网地址:https://memcached.org/</span>
<span class="line">root@k8s:/usr/local$ sudo tar zxvf memcached-1.6.21.tar.gz</span>
<span class="line">root@k8s:/usr/local$ cd memcached-1.6.21/</span>
<span class="line"></span>
<span class="line">现在安装libevent-dev包，因为它是memcached的依赖项：</span>
<span class="line">root@k8s:/usr/local/memcached-1.6.21$ sudo apt install libevent-dev -y</span>
<span class="line"></span>
<span class="line">root@k8s:/usr/local$./configure &amp;&amp; make &amp;&amp; make test &amp;&amp; sudo make install</span>
<span class="line"></span>
<span class="line">当通过源码安装 Memcached 时，配置文件通常不会自动生成，而是需要手动创建。配置文件的位置可以自行指定，但通常会将其放在 /etc 目录下或 Memcached 的安装目录中</span>
<span class="line">可以手动创建 Memcached 的配置文件。配置文件通常命名为 memcached.conf。你可以选择将其放在 /etc 目录下或 Memcached 的安装目录中。在配置文件中，你可以指定 Memcached 的监听地址、端口、缓存大小以及其他配置选项。</span>
<span class="line">下面是一个示例配置文件的内容：</span>
<span class="line"># Sample Memcached configuration file</span>
<span class="line"></span>
<span class="line"># Run memcached as a daemon (background process)</span>
<span class="line">-d</span>
<span class="line"></span>
<span class="line"># Listen on localhost (127.0.0.1) and port 11211</span>
<span class="line">-l 127.0.0.1</span>
<span class="line">-p 11211</span>
<span class="line"></span>
<span class="line"># Set the memory cache size to 64 megabytes</span>
<span class="line">-m 64</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">命令行运行:</span>
<span class="line">/usr/local/memcached-1.6.21/memcached -P /path/to/your/memcached.conf  //没有bin 文件，直接就是 memcached 可执行文件</span>
<span class="line">/usr/local/memcached-1.6.21/memcached -d -m 64 -l 127.0.0.1 -p 11211</span>
<span class="line"></span>
<span class="line">配置成服务运行:</span>
<span class="line">sudo vim /etc/systemd/system/memcached.service</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">[Unit]</span>
<span class="line">Description=Memcached caching server</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">ExecStart=/usr/local/memcached-1.6.21/memcached -u root -p 11211 -m 128 #这里的user 必须配置，配置成这个文件的所有者就可以了，不然启动失败</span>
<span class="line">Restart=always</span>
<span class="line">User=root</span>
<span class="line">StandardOutput=syslog</span>
<span class="line">StandardError=syslog</span>
<span class="line">SyslogIdentifier=memcached</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line"></span>
<span class="line">sudo systemctl daemon-reload</span>
<span class="line"></span>
<span class="line">sudo systemctl status memcached</span>
<span class="line">sudo systemctl start memcached</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const p=n(i,[["render",c],["__file","ubuntu22安装memecached.html.vue"]]),r=JSON.parse('{"path":"/content/database/redis/ubuntu22%E5%AE%89%E8%A3%85memecached.html","title":"ubuntu22安装memecached","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu22安装memecached","description":"ubuntu22安装memecached"},"headers":[],"git":{},"filePathRelative":"content/database/redis/ubuntu22安装memecached.md"}');export{p as comp,r as data};
