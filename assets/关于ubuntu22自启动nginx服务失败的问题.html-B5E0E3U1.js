import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>关于ubuntu22自启动nginx服务失败的问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;昨天安装了php8.3,但是过程中好像对apacahe2也自动做了操作</span>
<span class="line">2&gt;今天开机，发现nginx 服务启动不了，报: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)，预感 80 端口被占用，于是按照下面的命令查询</span>
<span class="line">k8s@HPDEV-31:~/code/sciforum-backend-v2$ sudo netstat -anp | grep 80 (记得加sudo/root权限，否则看不到最后面的进程信息)</span>
<span class="line">tcp        0      0 127.0.0.1:59080         127.0.0.1:7890          ESTABLISHED 10711/chrome --type </span>
<span class="line">tcp        0      0 188.188.54.160:60980    114.42.229.233:443      ESTABLISHED 10576/clash-linux   </span>
<span class="line">tcp        0      0 127.0.0.1:7890          127.0.0.1:59080         ESTABLISHED 10576/clash-linux   </span>
<span class="line">tcp        0      0 188.188.54.160:44326    91.189.91.98:80         TIME_WAIT   -                   </span>
<span class="line">tcp6       0      0 :::80                   :::*                    LISTEN      890/apache2         </span>
<span class="line">tcp6       0      0 :::20080                :::*                    LISTEN      5607/java           </span>
<span class="line">udp        0      0 0.0.0.0:631             0.0.0.0:*                           1802/cups-browsed  </span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">果真发现 80 端口被占用，而且是 apache2 占用的，解决方法 要么 stop ，但是下次开机还是有这个问题，要么直接卸载，我这里 直接修改apacahe2使用的默认端口为8088</span>
<span class="line">$ sudo vim /etc/apache2/ports.conf</span>
<span class="line"># If you just change the port or add more ports here, you will likely also</span>
<span class="line"># have to change the VirtualHost statement in</span>
<span class="line"># /etc/apache2/sites-enabled/000-default.conf</span>
<span class="line"></span>
<span class="line">Listen 8088</span>
<span class="line"></span>
<span class="line">&lt;IfModule ssl_module&gt;</span>
<span class="line">        Listen 443</span>
<span class="line">&lt;/IfModule&gt;</span>
<span class="line"></span>
<span class="line">&lt;IfModule mod_gnutls.c&gt;</span>
<span class="line">        Listen 443</span>
<span class="line">&lt;/IfModule&gt;</span>
<span class="line"></span>
<span class="line"># vim: syntax=apache ts=4 sw=4 sts=4 sr noet</span>
<span class="line"></span>
<span class="line">再重启 apache2:</span>
<span class="line">$ sudo systemctl restart apache2</span>
<span class="line"></span>
<span class="line">在执行：$ sudo netstat -anp | grep 80 现在80端口就没有被占用，同时 apache2占用了8088</span>
<span class="line"></span>
<span class="line">3&gt;重新启动nginx即可</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=s(l,[["render",c],["__file","关于ubuntu22自启动nginx服务失败的问题.html.vue"]]),u=JSON.parse('{"path":"/content/php/base/%E5%85%B3%E4%BA%8Eubuntu22%E8%87%AA%E5%90%AF%E5%8A%A8nginx%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"关于ubuntu22自启动nginx服务失败的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于ubuntu22自启动nginx服务失败的问题","description":"关于ubuntu22自启动nginx服务失败的问题"},"headers":[],"git":{},"filePathRelative":"content/php/base/关于ubuntu22自启动nginx服务失败的问题.md"}');export{t as comp,u as data};
