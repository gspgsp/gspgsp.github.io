import{_ as e,o as n,c as i,g as l}from"./app.d66d8774.js";const s={},d=l(`<p>docker\u57FA\u672C\u64CD\u4F5C\u547D\u4EE4:</p><ul><li>\u5220\u9664\u6240\u6709\u955C\u50CF:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker rmi $(docker images -q)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6E05\u7406docker\u7F13\u5B58:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker builder prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u67E5\u770Bvolume\u4FE1\u606F:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker volume COMMAND
Commands:
  create      Create a volume
  inspect     Display detailed information on one or more volumes
  ls          List volumes
  prune       Remove unused local volumes
  rm          Remove one or more volumes
  update      Update a volume (cluster volumes only)
  
\u5982:
$ docker volume ls
$ docker volume inspect docker_volume-mysql-laravel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u7F51\u7EDC\u4FE1\u606F:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker network COMMAND
Commands:
  connect     Connect a container to a network
  create      Create a network
  disconnect  Disconnect a container from a network
  inspect     Display detailed information on one or more networks
  ls          List networks
  prune       Remove all unused networks
  rm          Remove one or more networks

\u5982:
$ docker network ls
$ docker network inspect docker_network-laravel-fron
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>docker image\u6392\u5E8F:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ docker image ls --format &quot;{{.Repository}}:{{.Tag}}&quot; | sort
docker-nginx:latest
docker-php:latest
docker-solr:latest
ghcr.io/open-webui/open-webui:main
jwilder/nginx-proxy:latest
laravel-dev-v2-nginx:latest
laravel-dev-v2-php:latest
laravel-dev-v2-solr:latest
meta-dev-v2-nginx:latest
meta-dev-v2-php:latest
meta-dev-v2-solr:latest
mysql:8-debian
schickling/mailcatcher:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>docker\u505C\u6B62\u5E76\u4E14\u5220\u9664\u6307\u5B9A\u5F00\u5934\u540D\u79F0\u7684container</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ docker ps -a --format &#39;{{.Names}}&#39; | grep &#39;^laravel\\|^meta&#39; | xargs -r docker stop &amp;&amp; docker ps -a --format &#39;{{.Names}}&#39; | grep &#39;^laravel\\|^meta&#39; | xargs -r docker rm
\u8FD9\u4E2A\u547D\u4EE4\u7684\u5DE5\u4F5C\u539F\u7406\u5982\u4E0B\uFF1A
  
docker ps -a --format &#39;{{.Names}}&#39;: \u5217\u51FA\u6240\u6709\u5BB9\u5668\u7684\u540D\u79F0\uFF08\u5305\u62EC\u505C\u6B62\u7684\u5BB9\u5668\uFF09\u3002
grep &#39;^laravel\\|^meta&#39;: \u8FC7\u6EE4\u51FA\u4EE5 &quot;laravel&quot; \u6216 &quot;meta&quot; \u5F00\u5934\u7684\u5BB9\u5668\u540D\u79F0\u3002
xargs -r docker stop: \u505C\u6B62\u8FD9\u4E9B\u5BB9\u5668\u3002-r \u9009\u9879\u786E\u4FDD\u5728\u6CA1\u6709\u5339\u914D\u9879\u65F6\u4E0D\u4F1A\u6267\u884C docker stop\u3002
&amp;&amp;: \u5982\u679C\u505C\u6B62\u64CD\u4F5C\u6210\u529F\uFF0C\u5219\u7EE7\u7EED\u6267\u884C\u540E\u9762\u7684\u547D\u4EE4\u3002
\u91CD\u590D\u76F8\u540C\u7684\u8FC7\u7A0B\u6765\u5220\u9664\u8FD9\u4E9B\u5BB9\u5668\u3002
  
\u5982\u679C\u4E0D\u5148\u505C\u6B62\uFF0C\u76F4\u63A5\u5220\u9664\uFF0C\u53EF\u4EE5\u8FD9\u6837:
docker ps -a --format &#39;{{.Names}}&#39; | grep &#39;^laravel\\|^meta&#39; | xargs -r docker rm -f
\u8FD9\u4E2A\u547D\u4EE4\u4F7F\u7528 docker rm -f \u6765\u5F3A\u5236\u5220\u9664\u5BB9\u5668\uFF0C\u5373\u4F7F\u5B83\u4EEC\u6B63\u5728\u8FD0\u884C\u3002\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u5148\u505C\u6B62\u518D\u5220\u9664\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),a=[d];function r(v,c){return n(),i("div",null,a)}var o=e(s,[["render",r],["__file","docker\u57FA\u672C\u64CD\u4F5C\u547D\u4EE4.html.vue"]]);export{o as default};
