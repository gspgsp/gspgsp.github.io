import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>docker_compose查看指定服务下的环境变量信息:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在docker-compsoe.yml同级目录下执行</span>
<span class="line">$ docker-compose config</span>
<span class="line">可以查看所有 service 的配置信息，比如引用了哪些环境变量</span>
<span class="line">  </span>
<span class="line">查看单个容器的环境变量:</span>
<span class="line">$ docker exec -it k8s-dev-v2-php env</span>
<span class="line">PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin</span>
<span class="line">HOSTNAME=49c87b3bc8b9</span>
<span class="line">TERM=xterm</span>
<span class="line">MAIL_NAME=k8s-dev-v2-mailcatcher</span>
<span class="line">MAIL_SMTP_PORT=1025</span>
<span class="line">PHPIZE_DEPS=autoconf    dpkg-dev    file    g++     gcc     libc-dev    make    pkg-config    re2c</span>
<span class="line">PHP_INI_DIR=/usr/local/etc/php</span>
<span class="line">PHP_CFLAGS=-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64</span>
<span class="line">PHP_CPPFLAGS=-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64</span>
<span class="line">PHP_LDFLAGS=-Wl,-O1 -pie</span>
<span class="line">GPG_KEYS=1198C0117593497A5EC5C199286AF1F9897469DC C28D937575603EB4ABB725861C0779DC5C0A9DE4 AFD8691FDAEDF03BDF6E460563F15A9B715376CA</span>
<span class="line">PHP_VERSION=8.3.0alpha1</span>
<span class="line">PHP_URL=https://downloads.php.net/~jakub/php-8.3.0alpha1.tar.xz</span>
<span class="line">PHP_ASC_URL=https://downloads.php.net/~jakub/php-8.3.0alpha1.tar.xz.asc</span>
<span class="line">PHP_SHA256=7df01cbae615cccdc01a811094a74326119080e1141988fd57aeefd6b751165c</span>
<span class="line">HOME=/root</span>
<span class="line">  </span>
<span class="line">对于特定的环境变量:</span>
<span class="line">$ docker exec -it k8s-dev-v2-php printenv PHP_VERSION</span>
<span class="line">8.3.0alpha1</span>
<span class="line">  </span>
<span class="line">当然也可以通过bash进入container，然后访问环境变量:</span>
<span class="line">$ docker exec -it k8s-dev-v2-php bash</span>
<span class="line">root@49c87b3bc8b9:/var/www# printenv</span>
<span class="line">HOSTNAME=49c87b3bc8b9</span>
<span class="line">PHP_VERSION=8.3.0alpha1</span>
<span class="line">PHP_INI_DIR=/usr/local/etc/php</span>
<span class="line">GPG_KEYS=1198C0117593497A5EC5C199286AF1F9897469DC C28D937575603EB4ABB725861C0779DC5C0A9DE4 AFD8691FDAEDF03BDF6E460563F15A9B715376CA</span>
<span class="line">PHP_LDFLAGS=-Wl,-O1 -pie</span>
<span class="line">MAIL_SMTP_PORT=1025</span>
<span class="line">PWD=/var/www</span>
<span class="line">HOME=/root</span>
<span class="line">PHP_SHA256=7df01cbae615cccdc01a811094a74326119080e1141988fd57aeefd6b751165c</span>
<span class="line">PHPIZE_DEPS=autoconf    dpkg-dev    file    g++     gcc     libc-dev    make    pkg-config    re2c</span>
<span class="line">TERM=xterm</span>
<span class="line">PHP_URL=https://downloads.php.net/~jakub/php-8.3.0alpha1.tar.xz</span>
<span class="line">SHLVL=1</span>
<span class="line">PHP_CFLAGS=-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64</span>
<span class="line">PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin</span>
<span class="line">MAIL_NAME=k8s-dev-v2-mailcatcher</span>
<span class="line">PHP_ASC_URL=https://downloads.php.net/~jakub/php-8.3.0alpha1.tar.xz.asc</span>
<span class="line">PHP_CPPFLAGS=-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64</span>
<span class="line">_=/usr/bin/printenv </span>
<span class="line">  </span>
<span class="line">root@49c87b3bc8b9:/var/www# echo $PHP_VERSION</span>
<span class="line">8.3.0alpha1</span>
<span class="line">  </span>
<span class="line">也可以直接通过 env 命令 访问全部环境变量，通过 sort 排序: </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(l,[["render",c],["__file","docker_compose查看指定服务下的环境变量信息.html.vue"]]),v=JSON.parse('{"path":"/content/service/docker/docker_compose%E6%9F%A5%E7%9C%8B%E6%8C%87%E5%AE%9A%E6%9C%8D%E5%8A%A1%E4%B8%8B%E7%9A%84%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E4%BF%A1%E6%81%AF.html","title":"docker_compose查看指定服务下的环境变量信息","lang":"en-US","frontmatter":{"sidebar":false,"title":"docker_compose查看指定服务下的环境变量信息","description":"docker_compose查看指定服务下的环境变量信息"},"headers":[],"git":{},"filePathRelative":"content/service/docker/docker_compose查看指定服务下的环境变量信息.md"}');export{r as comp,v as data};
