import{_ as n,o as e,c as i,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>\u5173\u4E8Eubuntu22\u81EA\u542F\u52A8nginx\u670D\u52A1\u5931\u8D25\u7684\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u6628\u5929\u5B89\u88C5\u4E86php8.3,\u4F46\u662F\u8FC7\u7A0B\u4E2D\u597D\u50CF\u5BF9apacahe2\u4E5F\u81EA\u52A8\u505A\u4E86\u64CD\u4F5C
2&gt;\u4ECA\u5929\u5F00\u673A\uFF0C\u53D1\u73B0nginx \u670D\u52A1\u542F\u52A8\u4E0D\u4E86\uFF0C\u62A5: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)\uFF0C\u9884\u611F 80 \u7AEF\u53E3\u88AB\u5360\u7528\uFF0C\u4E8E\u662F\u6309\u7167\u4E0B\u9762\u7684\u547D\u4EE4\u67E5\u8BE2
k8s@HPDEV-31:~/code/sciforum-backend-v2$ sudo netstat -anp | grep 80 (\u8BB0\u5F97\u52A0sudo/root\u6743\u9650\uFF0C\u5426\u5219\u770B\u4E0D\u5230\u6700\u540E\u9762\u7684\u8FDB\u7A0B\u4FE1\u606F)
tcp        0      0 127.0.0.1:59080         127.0.0.1:7890          ESTABLISHED 10711/chrome --type 
tcp        0      0 188.188.54.160:60980    114.42.229.233:443      ESTABLISHED 10576/clash-linux   
tcp        0      0 127.0.0.1:7890          127.0.0.1:59080         ESTABLISHED 10576/clash-linux   
tcp        0      0 188.188.54.160:44326    91.189.91.98:80         TIME_WAIT   -                   
tcp6       0      0 :::80                   :::*                    LISTEN      890/apache2         
tcp6       0      0 :::20080                :::*                    LISTEN      5607/java           
udp        0      0 0.0.0.0:631             0.0.0.0:*                           1802/cups-browsed  
...
...
\u679C\u771F\u53D1\u73B0 80 \u7AEF\u53E3\u88AB\u5360\u7528\uFF0C\u800C\u4E14\u662F apache2 \u5360\u7528\u7684\uFF0C\u89E3\u51B3\u65B9\u6CD5 \u8981\u4E48 stop \uFF0C\u4F46\u662F\u4E0B\u6B21\u5F00\u673A\u8FD8\u662F\u6709\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8981\u4E48\u76F4\u63A5\u5378\u8F7D\uFF0C\u6211\u8FD9\u91CC \u76F4\u63A5\u4FEE\u6539apacahe2\u4F7F\u7528\u7684\u9ED8\u8BA4\u7AEF\u53E3\u4E3A8088
$ sudo vim /etc/apache2/ports.conf
# If you just change the port or add more ports here, you will likely also
# have to change the VirtualHost statement in
# /etc/apache2/sites-enabled/000-default.conf

Listen 8088

&lt;IfModule ssl_module&gt;
        Listen 443
&lt;/IfModule&gt;

&lt;IfModule mod_gnutls.c&gt;
        Listen 443
&lt;/IfModule&gt;

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet

\u518D\u91CD\u542F apache2:
$ sudo systemctl restart apache2

\u5728\u6267\u884C\uFF1A$ sudo netstat -anp | grep 80 \u73B0\u572880\u7AEF\u53E3\u5C31\u6CA1\u6709\u88AB\u5360\u7528\uFF0C\u540C\u65F6 apache2\u5360\u7528\u4E868088

3&gt;\u91CD\u65B0\u542F\u52A8nginx\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function c(t,v){return e(),i("div",null,a)}var r=n(l,[["render",c],["__file","\u5173\u4E8Eubuntu22\u81EA\u542F\u52A8nginx\u670D\u52A1\u5931\u8D25\u7684\u95EE\u9898.html.vue"]]);export{r as default};
