import{_ as n,c as s,d as a,o as p}from"./app-DNwsX6Hl.js";const i={};function l(c,e){return p(),s("div",null,e[0]||(e[0]=[a(`<h5 id="php之docker容器安装php拓展" tabindex="-1"><a class="header-anchor" href="#php之docker容器安装php拓展"><span>php之docker容器安装php拓展</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">关于 docker-php-ext-install:</span>
<span class="line">docker-php-ext-install 是官方 PHP Docker 镜像自带的工具脚本，专门用于安装 PHP 的内置扩展（bcmath、intl、xsl、gd、pdo_mysql 等等）</span>
<span class="line"></span>
<span class="line"># build images (will actually only build if images not yet built or if something changed)</span>
<span class="line">echo &quot;Building Docker images...&quot;</span>
<span class="line">docker compose build nginx</span>
<span class="line">docker compose build --no-cache php //不使用缓存， 但是没用</span>
<span class="line">docker compose build solr</span>
<span class="line"></span>
<span class="line">直接进入php容器里执行:</span>
<span class="line">docker-php-ext-install bcmath //这也是可以安装成功的，但是不能立即生效，所以需要重启docker,但是之前的安装可能丢失</span>
<span class="line"></span>
<span class="line">在容器里查看脚本路径:</span>
<span class="line">root@d7842b65ff32:/var/www# cd /usr/local/bin</span>
<span class="line">root@d7842b65ff32:/usr/local/bin# ls</span>
<span class="line">composer         docker-php-ext-configure  docker-php-ext-install  pear   pecl  phar.phar  php-config  wkhtmltoimage</span>
<span class="line">docker-php-entrypoint  docker-php-ext-enable   docker-php-source   peardev  phar  php    phpize      wkhtmltopdf</span>
<span class="line"></span>
<span class="line">所以，如果用的是这些镜像：</span>
<span class="line">✅ php:X.Y-fpm</span>
<span class="line">✅ php:X.Y-cli</span>
<span class="line">✅ php:X.Y-apache</span>
<span class="line">✅ php:X.Y-zts</span>
<span class="line"></span>
<span class="line">一定可以使用 docker-php-ext-install。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(i,[["render",l],["__file","php之docker容器安装php拓展.html.vue"]]),t=JSON.parse('{"path":"/content/service/docker/php%E4%B9%8Bdocker%E5%AE%B9%E5%99%A8%E5%AE%89%E8%A3%85php%E6%8B%93%E5%B1%95.html","title":"php之docker容器安装php拓展","lang":"en-US","frontmatter":{"sidebar":false,"title":"php之docker容器安装php拓展","head":[["meta",{"name":"title","content":"php之docker容器安装php拓展"}],["meta",{"name":"description","content":"php之docker容器安装php拓展"}],["meta",{"name":"keywords","content":"docker,php"}],["meta",{"property":"og:title","content":"php之docker容器安装php拓展"}],["meta",{"property":"og:description","content":"php之docker容器安装php拓展"}]]},"headers":[],"git":{},"filePathRelative":"content/service/docker/php之docker容器安装php拓展.md"}');export{r as comp,t as data};
