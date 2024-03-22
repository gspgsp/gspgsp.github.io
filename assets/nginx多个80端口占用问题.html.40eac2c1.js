import{_ as e,o as n,c as i,g as s}from"./app.b04686bd.js";const l={},d=s(`<p>nginx\u591A\u4E2A80\u7AEF\u53E3\u5360\u7528\u95EE\u9898\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u5982\u4E0Bserver \u914D\u7F6E\uFF1A
server {

listen 80 default_server; #\u8FD9\u91CC\u6709\u4E2Adefault_server\u6807\u8BC6

listen [::]:80 default_server; #\u8FD9\u91CC\u6709\u4E2Adefault_server\u6807\u8BC6

root /home/www/blog/public; #\u7F51\u7AD9\u6839\u76EE\u5F55\uFF0C\u65E2index.php\u5165\u53E3\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u7ED3\u5C3E\u4E0D\u52A0 /

index index.php index.html;

server_name www.front.test; # \u57DF\u540D\u6216\u8005ip\u5730\u5740

location / {

try_files $uri $uri/ /index.php?$query_string; #larvel\u4F18\u96C5\u8FDE\u63A5\u3002\u8BF7\u6839\u636E\u5B9E\u9645\u914D\u7F6E

}

location ~ \\.php$ { # \u652F\u6301php

include snippets/fastcgi-php.conf;

fastcgi_pass unix:/run/php/php7.0-fpm.sock; # \u8FD9\u91CC\u5BF9\u5E94\u7740\u4E0A\u9762\u5B89\u88C5\u7684php7.0

}

}

\u5982\u679C\u8FD8\u6709\u5176\u5B83server \u9700\u8981\u4F7F\u7528 80 \u7AEF\u53E3\uFF0C\u90A3\u4E48\u9700\u8981\u628A default_server \u53BB\u6389 \u5373\u53EF\uFF0C\u5426\u5219\u5C31\u4F1A\u62A5\u9519
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function r(a,c){return n(),i("div",null,v)}var t=e(l,[["render",r],["__file","nginx\u591A\u4E2A80\u7AEF\u53E3\u5360\u7528\u95EE\u9898.html.vue"]]);export{t as default};
