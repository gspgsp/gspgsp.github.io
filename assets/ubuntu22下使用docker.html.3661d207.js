import{_ as e,o as n,c as i,g as s}from"./app.dd03cafd.js";const d={},l=s(`<p>ubuntu22\u4E0B\u4F7F\u7528docker:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u7AEF\u53E3\u6620\u5C04\u5173\u7CFB\uFF0C\u4E5F\u9002\u7528\u4E8E\u76F4\u63A5docker run -p host_port:container_port

https://juejin.cn/s/docker-compose.yml%20%E7%AB%AF%E5%8F%A3
  
2&gt;docker \u547D\u540D\u5377
\u9ED8\u8BA4\u60C5\u51B5\u4E0B,\u547D\u540D\u5377\u5728\u5927\u591A\u6570 Linux \u53D1\u884C\u7248\u4E2D\u5B58\u50A8\u5728\u4E3B\u673A\u6587\u4EF6\u7CFB\u7EDF\u7684 /var/lib/docker/volumes \u76EE\u5F55\u4E0B
\u6BD4\u5982:
volumes:
  - volume-mysql-duoxiaozhan:/var/lib/mysql //\u58F0\u660E \u547D\u540D\u5377\uFF0C\u7136\u540E\u6302\u8F7D\u5230 /var/lib/mysql\uFF0C\u7528\u6765\u5B58\u50A8mysql\u6570\u636E\uFF0C\u8FD9\u6837\u5373\u4F7F\u5BB9\u5668\u9500\u6BC1\u6570\u636E\u8FD8\u5728
\u5728 Linux \u4E0A: /var/lib/docker/volumes/volume-mysql-duoxiaozhan/_data
  
3&gt;\u4E3Adocker-compose \u914D\u7F6E\u73AF\u5883\u53D8\u91CF
https://docs.docker.com/compose/environment-variables/set-environment-variables/
  
4&gt;\u5173\u4E8Ejwilder/nginx-proxy
http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/
  
5&gt;\u73B0\u5728\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 docker compose build , \u8FC7\u53BB\u9700\u8981\u4F7F\u7528 docker-compose build
\u5BF9\u4E8E\u65B0\u7248 Docker(19.03+),\u53EA\u9700\u5B89\u88C5 Docker Engine \u5373\u53EF\u4F7F\u7528 docker compose \u547D\u4EE4
\u5BF9\u4E8E\u65E7\u7248 Docker,\u9700\u8981\u5148\u5B89\u88C5 Docker Engine,\u518D\u5355\u72EC\u5B89\u88C5 docker-compose

\u8FD8\u6709\u4E00\u70B9\u5F88\u91CD\u8981:
\u8FC7\u53BB\u5728\u5F53\u524D docker-compose.yml\u76EE\u5F55\u4E0B\u6267\u884C docker-compose up\uFF0C\u5982\u679C\u955C\u50CF\u4E0D\u5B58\u5728\uFF0C\u4F1A\u81EA\u52A8\u6267\u884C docker-compose build [\u53EF\u4EE5\u52A0\u5355\u72EC\u955C\u50CF\u540D\u79F0\uFF0C\u6BD4\u5982nginx]\u547D\u4EE4
\u73B0\u5728\u5FC5\u987B\u8981\u5148\u6267\u884C docker compose build [\u53EF\u4EE5\u52A0\u5355\u72EC\u955C\u50CF\u540D\u79F0\uFF0C\u6BD4\u5982nginx], \u7136\u540E\u5355\u72EC\u6267\u884C docker compose up [-d\u53C2\u6570]\uFF0C \u4F7F\u7528 -d \u6807\u5FD7\u542F\u52A8\u5BB9\u5668,\u8868\u793A\u4EE5&quot;\u5206\u79BB(detached)&quot;\u6A21\u5F0F\u8FD0\u884C\u3002
\u5206\u79BB\u6A21\u5F0F\u610F\u5473\u7740\u5BB9\u5668\u5C06\u5728\u540E\u53F0\u8FD0\u884C,\u800C\u4E0D\u4F1A\u5C06\u5B83\u4EEC\u7684\u8F93\u51FA\u6D41(\u6807\u51C6\u8F93\u51FA\u548C\u6807\u51C6\u9519\u8BEF)\u8FDE\u63A5\u5230\u60A8\u7684\u7EC8\u7AEF\u3002
  
6&gt;\u6267\u884C docker image ls\uFF0C\u62A5\u4E0B\u9762\u7684\u9519\u8BEF
permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Head ......

\u539F\u56E0\u662F:
\u8FD9\u662F\u56E0\u4E3A\u4F60\u5F53\u524D\u7684\u7528\u6237\u6CA1\u6709\u8FD9\u4E2A\u6743\u9650\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cdocker \u547D\u4EE4\u4F1A\u4F7F\u7528 Unix socket \u4E0E Docker \u5F15\u64CE\u901A\u8BAF\u3002\u800C\u53EA\u6709 root \u7528\u6237\u548C docker \u7EC4\u7684\u7528\u6237\u624D\u53EF\u4EE5\u8BBF\u95EE Docker \u5F15\u64CE\u7684 Unix socket\u3002\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u4E00\u822C Linux \u7CFB\u7EDF\u4E0A\u4E0D\u4F1A\u76F4\u63A5\u4F7F\u7528 root \u7528\u6237\u3002\u5373\u6211\u4EEC\u5F53\u524D\u7684\u7528\u6237\u4E0D\u662Froot\u7528\u6237\u3002

\u89E3\u51B3\u529E\u6CD5\uFF1A\u628A\u6211\u4EEC\u5F53\u524D\u7684\u7528\u6237\u6DFB\u52A0\u5230docker\u7EC4\u4E2D\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u6837\u4ED6\u4EEC\u5C31\u662F\u4E00\u5BB6\u4EBA\u4E86\u3002

\u7B2C\u4E00\u6B65\uFF1Asudo gpasswd -a username docker  #\u5C06\u666E\u901A\u7528\u6237username\u52A0\u5165\u5230docker\u7EC4\u4E2D\uFF0Cusername\u8FD9\u4E2A\u5B57\u6BB5\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6362\u6210$USER\u3002
\u7B2C\u4E8C\u6B65\uFF1Anewgrp docker  #\u66F4\u65B0docker\u7EC4
\u7B2C\u4E09\u6B65\uFF1A\u518D\u6267\u884C\u4F60\u62A5\u9519\u7684\u547D\u4EE4\uFF0C\u6B64\u65F6\u5C31\u4E0D\u4F1A\u62A5\u9519\u4E86\u3002
  
7&gt;docker \u5BB9\u5668\u5185\u6267\u884Cvim
root@b8c739f8b2b3:/app# apt-get update
root@b8c739f8b2b3:/app# apt-get install -y vim

https://blog.csdn.net/hkl_Forever/article/details/125466251
  
8&gt;docker\u5BB9\u5668\u5185\u5BFC\u5165\u6570\u636E
root@bf42367264b4:/dumps# mysql -u duoxiaozhan -p duoxiaozhanpub_dev &lt; /dumps/duoxiaozhanpub.sql
Enter password: 
ERROR 1118 (42000) at line 1739814: Row size too large (&gt; 8126). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help. In current row format, BLOB prefix of 768 bytes is stored inline.

\u89E3\u51B3\u65B9\u5F0F:

\u627E\u5230\u5BF9\u5E94\u8868DML\uFF0C\u628A ROW_FORMAT=COMPACT \u6539\u4E3A ROW_FORMAT=DYNAMIC:
DROP TABLE IF EXISTS \`users\`;
CREATE TABLE \`users\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`editor_id\` int unsigned DEFAULT NULL,
  \`email\` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  \`password\` char(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
) ENGINE=InnoDB AUTO_INCREMENT=2184475 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

\u81F3\u4E8E\u7F51\u4E0A\u7684 \u5404\u79CD\u8BBE\u7F6E\u90FD\u6CA1\u7528\uFF0C\u5176\u5B9E\u5C31\u4E0A\u9762\u7684\u63D0\u793A\u5C31\u662F\u89E3\u51B3\u65B9\u6CD5

\u7136\u540E\u6267\u884C:
root@bf42367264b4:/dumps# ls
duoxiaozhanpub.sql  tables
root@bf42367264b4:/dumps# mysql -u root -p duoxiaozhanpub_dev &lt; /dumps/duoxiaozhanpub.sql
Enter password: 
root@bf42367264b4:/dumps#

\u5BFC\u5165\u5B8C\u6210
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8865\u5145:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://blog.csdn.net/guo_zhen_qian/article/details/132254406 //\u547D\u4EE4\u884C\u5B89\u88C5(\u7B80\u5355)
https://docs.docker.com/desktop/install/linux-install/ //\u5B89\u88C5desk\u7248\u672C
https://docs.docker.com/engine/install/ubuntu/ //\u5B89\u88C5engine\u7248\u672C
  
// docker-compose \u5B89\u88C5, \u65B0\u7248\u672C\u7684docker \u53EF\u4EE5\u4E0D\u7528\u5355\u72EC\u5B89\u88C5\u8FD9\u4E2A\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u89C1\u4E0A\u9762\u7684\u547D\u4EE4\u64CD\u4F5C
sudo curl -L https://github.com/docker/compose/releases/download/v2.26.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
$ sudo chmod +x ./docker-compose //\u8BB0\u5F97\u8D4B\u6743\u9650
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[l];function o(c,v){return n(),i("div",null,r)}var u=e(d,[["render",o],["__file","ubuntu22\u4E0B\u4F7F\u7528docker.html.vue"]]);export{u as default};
