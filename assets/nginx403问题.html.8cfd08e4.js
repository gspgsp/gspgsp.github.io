import{_ as n,o as r,c as i,g as e}from"./app.dd03cafd.js";const s={},d=e(`<p>nginx403\u95EE\u9898\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u67E5\u770B\u65E5\u5FD7\uFF1A
$ vim /var/log/nginx/error.log
$ vim /var/log/nginx/access.log

\u4E3B\u8981\u95EE\u9898\uFF1A
\u2460file not found\uFF0C\u8FD8\u662Fuser:group\u7684\u95EE\u9898
root@k8s-server:/etc/php/8.1/fpm$ ll
total 96
drwxr-xr-x 4 root root  4096 11\u6708  3 17:20 ./
drwxr-xr-x 5 root root  4096 11\u6708  3 10:05 ../
drwxr-xr-x 2 root root  4096 11\u6708  3 12:16 conf.d/
-rw-r--r-- 1 root root  5457 11\u6708  3 17:16 php-fpm.conf
-rw-r--r-- 1 root root 72928  9\u6708 15 19:30 php.ini
drwxr-xr-x 2 root root  4096 11\u6708  3 17:21 pool.d/    //php-fpm.conf \u91CC\u4E0D\u80FD\u76F4\u63A5\u914D\u7F6E user:group ,\u9700\u8981\u5728 pool.d \u91CC\u7684www.conf \u91CC\u914D\u7F6E\u548C\u9879\u76EE\u4E00\u6837\u7684user:group
root@k8s-server:/etc/php/8.1/fpm$ pwd
/etc/php/8.1/fpm



\u2461 502 bad gatwway
root@k8s-server:/run/php$ ll
total 4
drwxr-xr-x  2 www-data www-data  100 11\u6708  3 17:21 ./
drwxr-xr-x 37 root     root     1000 11\u6708  3 17:02 ../
-rw-r--r--  1 root     root        5 11\u6708  3 17:21 php8.1-fpm.pid
srw-rw----  1 mdpi     mdpi        0 11\u6708  3 17:21 php8.1-fpm.sock=   // \u8FD9\u4E2A\u7684\u7528\u6237\u540D\u548C\u7528\u6237\u7EC4\u4E0D\u5BF9\uFF0C\u7EDF\u4E00\u6539\u4E3A\u9879\u76EE\u7684user:group,nginx.conf \u91CC\u9762\u4E5F\u8981\u6539
lrwxrwxrwx  1 root     root       30 11\u6708  3 10:05 php-fpm.sock -&gt; /etc/alternatives/php-fpm.sock=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function o(v,t){return r(),i("div",null,l)}var c=n(s,[["render",o],["__file","nginx403\u95EE\u9898.html.vue"]]);export{c as default};
