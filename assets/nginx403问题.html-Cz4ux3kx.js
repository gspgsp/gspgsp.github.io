import{_ as s,c as i,f as a,o as e}from"./app-BB_BIQV8.js";const l={};function r(p,n){return e(),i("div",null,n[0]||(n[0]=[a(`<p>nginx403问题：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">查看日志：</span>
<span class="line">$ vim /var/log/nginx/error.log</span>
<span class="line">$ vim /var/log/nginx/access.log</span>
<span class="line"></span>
<span class="line">主要问题：</span>
<span class="line">①file not found，还是user:group的问题</span>
<span class="line">root@k8s-server:/etc/php/8.1/fpm$ ll</span>
<span class="line">total 96</span>
<span class="line">drwxr-xr-x 4 root root  4096 11月  3 17:20 ./</span>
<span class="line">drwxr-xr-x 5 root root  4096 11月  3 10:05 ../</span>
<span class="line">drwxr-xr-x 2 root root  4096 11月  3 12:16 conf.d/</span>
<span class="line">-rw-r--r-- 1 root root  5457 11月  3 17:16 php-fpm.conf</span>
<span class="line">-rw-r--r-- 1 root root 72928  9月 15 19:30 php.ini</span>
<span class="line">drwxr-xr-x 2 root root  4096 11月  3 17:21 pool.d/    //php-fpm.conf 里不能直接配置 user:group ,需要在 pool.d 里的www.conf 里配置和项目一样的user:group</span>
<span class="line">root@k8s-server:/etc/php/8.1/fpm$ pwd</span>
<span class="line">/etc/php/8.1/fpm</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">② 502 bad gatwway</span>
<span class="line">root@k8s-server:/run/php$ ll</span>
<span class="line">total 4</span>
<span class="line">drwxr-xr-x  2 www-data www-data  100 11月  3 17:21 ./</span>
<span class="line">drwxr-xr-x 37 root     root     1000 11月  3 17:02 ../</span>
<span class="line">-rw-r--r--  1 root     root        5 11月  3 17:21 php8.1-fpm.pid</span>
<span class="line">srw-rw----  1 mdpi     mdpi        0 11月  3 17:21 php8.1-fpm.sock=   // 这个的用户名和用户组不对，统一改为项目的user:group,nginx.conf 里面也要改</span>
<span class="line">lrwxrwxrwx  1 root     root       30 11月  3 10:05 php-fpm.sock -&gt; /etc/alternatives/php-fpm.sock=</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(l,[["render",r],["__file","nginx403问题.html.vue"]]),o=JSON.parse('{"path":"/content/linux/nginx/nginx403%E9%97%AE%E9%A2%98.html","title":"nginx403问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"nginx403问题","description":"nginx403问题"},"headers":[],"git":{},"filePathRelative":"content/linux/nginx/nginx403问题.md"}');export{c as comp,o as data};
