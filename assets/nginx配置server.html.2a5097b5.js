import{_ as n,o as e,c as i,g as s}from"./app.d66d8774.js";const l={},d=s(`<p>nginx\u914D\u7F6Eserver\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u95EE\u9898\uFF1A\u73B0\u5728\u6267\u884Cvagrant up \u5728/etc/nginx/sites-available \u4E0B\u4E0D\u4F1A\u751F\u6210\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDEdefault\u4E5F\u6CA1\u6709\uFF0C\u5F88\u5947\u602A\uFF0C\u6240\u4EE5\u9700\u8981\u624B\u52A8\u914D\u7F6E:

server {

listen 80 default_server;

listen [::]:80 default_server;

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



\u66F4\u6539sites-available\u4EE5\u540E\u5728 /etc/nginx/sites-enabled \u76EE\u5F55\u4E0B\u5EFA\u7ACB\u4E00\u4E2A\u8F6F\u94FE\u63A5:

ln -s /etc/nginx/sites-available/www.front.test.conf /etc/nginx/sites-enabled/www.front.test.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function r(a,c){return e(),i("div",null,v)}var u=n(l,[["render",r],["__file","nginx\u914D\u7F6Eserver.html.vue"]]);export{u as default};
