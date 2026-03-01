import{_ as s,c as n,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function r(d,e){return l(),n("div",null,e[0]||(e[0]=[a(`<p>docker基本操作命令:</p><ul><li>删除所有镜像:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker rmi $(docker images -q)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>清理docker缓存:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker builder prune</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看volume信息:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker volume COMMAND</span>
<span class="line">Commands:</span>
<span class="line">  create      Create a volume</span>
<span class="line">  inspect     Display detailed information on one or more volumes</span>
<span class="line">  ls          List volumes</span>
<span class="line">  prune       Remove unused local volumes</span>
<span class="line">  rm          Remove one or more volumes</span>
<span class="line">  update      Update a volume (cluster volumes only)</span>
<span class="line">  </span>
<span class="line">如:</span>
<span class="line">$ docker volume ls</span>
<span class="line">$ docker volume inspect docker_volume-mysql-laravel</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看网络信息:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker network COMMAND</span>
<span class="line">Commands:</span>
<span class="line">  connect     Connect a container to a network</span>
<span class="line">  create      Create a network</span>
<span class="line">  disconnect  Disconnect a container from a network</span>
<span class="line">  inspect     Display detailed information on one or more networks</span>
<span class="line">  ls          List networks</span>
<span class="line">  prune       Remove all unused networks</span>
<span class="line">  rm          Remove one or more networks</span>
<span class="line"></span>
<span class="line">如:</span>
<span class="line">$ docker network ls</span>
<span class="line">$ docker network inspect docker_network-laravel-fron</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>docker image排序:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker image ls --format &quot;{{.Repository}}:{{.Tag}}&quot; | sort</span>
<span class="line">docker-nginx:latest</span>
<span class="line">docker-php:latest</span>
<span class="line">docker-solr:latest</span>
<span class="line">ghcr.io/open-webui/open-webui:main</span>
<span class="line">jwilder/nginx-proxy:latest</span>
<span class="line">laravel-dev-v2-nginx:latest</span>
<span class="line">laravel-dev-v2-php:latest</span>
<span class="line">laravel-dev-v2-solr:latest</span>
<span class="line">meta-dev-v2-nginx:latest</span>
<span class="line">meta-dev-v2-php:latest</span>
<span class="line">meta-dev-v2-solr:latest</span>
<span class="line">mysql:8-debian</span>
<span class="line">schickling/mailcatcher:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>docker停止并且删除指定开头名称的container</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker ps -a --format &#39;{{.Names}}&#39; | grep &#39;^laravel\\|^meta&#39; | xargs -r docker stop &amp;&amp; docker ps -a --format &#39;{{.Names}}&#39; | grep &#39;^laravel\\|^meta&#39; | xargs -r docker rm</span>
<span class="line">这个命令的工作原理如下：</span>
<span class="line">  </span>
<span class="line">docker ps -a --format &#39;{{.Names}}&#39;: 列出所有容器的名称（包括停止的容器）。</span>
<span class="line">grep &#39;^laravel\\|^meta&#39;: 过滤出以 &quot;laravel&quot; 或 &quot;meta&quot; 开头的容器名称。</span>
<span class="line">xargs -r docker stop: 停止这些容器。-r 选项确保在没有匹配项时不会执行 docker stop。</span>
<span class="line">&amp;&amp;: 如果停止操作成功，则继续执行后面的命令。</span>
<span class="line">重复相同的过程来删除这些容器。</span>
<span class="line">  </span>
<span class="line">如果不先停止，直接删除，可以这样:</span>
<span class="line">docker ps -a --format &#39;{{.Names}}&#39; | grep &#39;^laravel\\|^meta&#39; | xargs -r docker rm -f</span>
<span class="line">这个命令使用 docker rm -f 来强制删除容器，即使它们正在运行。这样就不需要先停止再删除了。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const t=s(i,[["render",r],["__file","docker基本操作命令.html.vue"]]),p=JSON.parse('{"path":"/content/service/docker/docker%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4.html","title":"docker基本操作命令","lang":"en-US","frontmatter":{"sidebar":false,"title":"docker基本操作命令","description":"docker基本操作命令"},"headers":[],"git":{},"filePathRelative":"content/service/docker/docker基本操作命令.md"}');export{t as comp,p as data};
