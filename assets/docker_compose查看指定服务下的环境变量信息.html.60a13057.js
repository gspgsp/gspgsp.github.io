import{_ as n,o as i,c as e,g as s}from"./app.66ae8700.js";const d={},l=s(`<p>docker_compose\u67E5\u770B\u6307\u5B9A\u670D\u52A1\u4E0B\u7684\u73AF\u5883\u53D8\u91CF\u4FE1\u606F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728docker-compsoe.yml\u540C\u7EA7\u76EE\u5F55\u4E0B\u6267\u884C
$ docker-compose config
\u53EF\u4EE5\u67E5\u770B\u6240\u6709 service \u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u6BD4\u5982\u5F15\u7528\u4E86\u54EA\u4E9B\u73AF\u5883\u53D8\u91CF
  
\u67E5\u770B\u5355\u4E2A\u5BB9\u5668\u7684\u73AF\u5883\u53D8\u91CF:
$ docker exec -it k8s-dev-v2-php env
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=49c87b3bc8b9
TERM=xterm
MAIL_NAME=k8s-dev-v2-mailcatcher
MAIL_SMTP_PORT=1025
PHPIZE_DEPS=autoconf    dpkg-dev    file    g++     gcc     libc-dev    make    pkg-config    re2c
PHP_INI_DIR=/usr/local/etc/php
PHP_CFLAGS=-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64
PHP_CPPFLAGS=-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64
PHP_LDFLAGS=-Wl,-O1 -pie
GPG_KEYS=1198C0117593497A5EC5C199286AF1F9897469DC C28D937575603EB4ABB725861C0779DC5C0A9DE4 AFD8691FDAEDF03BDF6E460563F15A9B715376CA
PHP_VERSION=8.3.0alpha1
PHP_URL=https://downloads.php.net/~jakub/php-8.3.0alpha1.tar.xz
PHP_ASC_URL=https://downloads.php.net/~jakub/php-8.3.0alpha1.tar.xz.asc
PHP_SHA256=7df01cbae615cccdc01a811094a74326119080e1141988fd57aeefd6b751165c
HOME=/root
  
\u5BF9\u4E8E\u7279\u5B9A\u7684\u73AF\u5883\u53D8\u91CF:
$ docker exec -it k8s-dev-v2-php printenv PHP_VERSION
8.3.0alpha1
  
\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7bash\u8FDB\u5165container\uFF0C\u7136\u540E\u8BBF\u95EE\u73AF\u5883\u53D8\u91CF:
$ docker exec -it k8s-dev-v2-php bash
root@49c87b3bc8b9:/var/www# printenv
HOSTNAME=49c87b3bc8b9
PHP_VERSION=8.3.0alpha1
PHP_INI_DIR=/usr/local/etc/php
GPG_KEYS=1198C0117593497A5EC5C199286AF1F9897469DC C28D937575603EB4ABB725861C0779DC5C0A9DE4 AFD8691FDAEDF03BDF6E460563F15A9B715376CA
PHP_LDFLAGS=-Wl,-O1 -pie
MAIL_SMTP_PORT=1025
PWD=/var/www
HOME=/root
PHP_SHA256=7df01cbae615cccdc01a811094a74326119080e1141988fd57aeefd6b751165c
PHPIZE_DEPS=autoconf    dpkg-dev    file    g++     gcc     libc-dev    make    pkg-config    re2c
TERM=xterm
PHP_URL=https://downloads.php.net/~jakub/php-8.3.0alpha1.tar.xz
SHLVL=1
PHP_CFLAGS=-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
MAIL_NAME=k8s-dev-v2-mailcatcher
PHP_ASC_URL=https://downloads.php.net/~jakub/php-8.3.0alpha1.tar.xz.asc
PHP_CPPFLAGS=-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64
_=/usr/bin/printenv 
  
root@49c87b3bc8b9:/var/www# echo $PHP_VERSION
8.3.0alpha1
  
\u4E5F\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 env \u547D\u4EE4 \u8BBF\u95EE\u5168\u90E8\u73AF\u5883\u53D8\u91CF\uFF0C\u901A\u8FC7 sort \u6392\u5E8F: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function v(a,r){return i(),e("div",null,c)}var _=n(d,[["render",v],["__file","docker_compose\u67E5\u770B\u6307\u5B9A\u670D\u52A1\u4E0B\u7684\u73AF\u5883\u53D8\u91CF\u4FE1\u606F.html.vue"]]);export{_ as default};
