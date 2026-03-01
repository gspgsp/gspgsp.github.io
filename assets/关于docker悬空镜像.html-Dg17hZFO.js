import{_ as n,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(c,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h3 id="关于docker悬空镜像" tabindex="-1"><a class="header-anchor" href="#关于docker悬空镜像"><span>关于docker悬空镜像</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker rmi $(docker images -q --filter &quot;dangling=true&quot;)</span>
<span class="line">dangling=true 是 Docker 镜像过滤器的一种选项，用于查找“悬空”（无标签）的镜像。</span>
<span class="line"></span>
<span class="line">悬空镜像（Dangling Images）是 没有标签（tag）的镜像，通常出现在：</span>
<span class="line">重新构建镜像时，旧的中间层镜像未被删除</span>
<span class="line">docker build 失败后，留下未使用的临时镜像</span>
<span class="line">docker tag 被更新，导致旧镜像的 tag 失效</span>
<span class="line"></span>
<span class="line">如果没有悬空镜像，docker rmi 可能会报错 must specify at least one image</span>
<span class="line">更安全的删除:</span>
<span class="line">$ docker images -q --filter &quot;dangling=true&quot; | xargs -r docker rmi</span>
<span class="line"></span>
<span class="line">定期清理悬空镜像，以释放 Docker 存储空间</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 以下是两种场景</span>
<span class="line">$ docker image ls</span>
<span class="line">REPOSITORY                                                                     TAG               IMAGE ID       CREATED             SIZE</span>
<span class="line">local-nuxt-nginx-my-nginx                                                      latest            a910ae53e1a8   About an hour ago   192MB</span>
<span class="line">localhost:5000/my-vue-app                                                      latest            4a1252aaebb4   4 hours ago         418MB</span>
<span class="line">localhost:5000/my-vue-app                                                      main              4a1252aaebb4   4 hours ago         418MB</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ docker image ls</span>
<span class="line">REPOSITORY                                                                     TAG               IMAGE ID       CREATED              SIZE</span>
<span class="line">local-nuxt-nginx-my-nginx                                                      latest            165e5bdc91f1   About a minute ago   192MB</span>
<span class="line">&lt;none&gt;                                                                         &lt;none&gt;            a910ae53e1a8   About an hour ago    192MB</span>
<span class="line">localhost:5000/my-vue-app                                                      latest            4a1252aaebb4   4 hours ago          418MB</span>
<span class="line">localhost:5000/my-vue-app                                                      main              4a1252aaebb4   4 hours ago          418MB</span>
<span class="line">nginx                                                                          latest            97662d24417b   9 days ago           192MB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下是一个nginx的启动脚本:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#!/bin/bash</span>
<span class="line">set -u</span>
<span class="line"></span>
<span class="line">cd &quot;$(dirname &quot;$0&quot;)&quot;</span>
<span class="line"></span>
<span class="line"># the local user&#39;s UID &amp; GID are required to build the php Docker container</span>
<span class="line">export USER_ID=$(id -u)</span>
<span class="line">export GROUP_ID=$(id -g)</span>
<span class="line"></span>
<span class="line">if [[ $(docker images -q --filter &quot;dangling=true&quot;) ]]; then</span>
<span class="line">    echo &quot;Removing untagged Docker images...&quot;</span>
<span class="line">    docker images -q --filter &quot;dangling=true&quot; | xargs -r docker rmi</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">echo &quot;Building Docker images...&quot;</span>
<span class="line">#docker compose build my-nginx //不需要这个，在 up 的时候加上 --build</span>
<span class="line">docker compose build my-nginx</span>
<span class="line"></span>
<span class="line"># compose up the stack in detached mode and start to follow the logs output</span>
<span class="line">echo &quot;Starting Docker Compose stack in detached mode...&quot;</span>
<span class="line">#clear</span>
<span class="line">#docker-compose up -d --build</span>
<span class="line">docker-compose up -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面有两种启动nginx的方式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;.</span>
<span class="line">直接 docker-compose up -d --build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">2&gt;.</span>
<span class="line">docker compose build my-nginx</span>
<span class="line">docker-compose up -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种方式都会重新构建nginx的镜像，然后nginx服务每次都是最新的， 但是有时候会出现，image tag 为null的情况，就需要在启动之前，通过上面的if条件做个判断。</p><p>还有一个启动方式:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker-compose up,这个会服用之前生成的镜像，即使Dockerfile文件发生了变化，也不会重新build，所以要避免这个情况，一般会单独在前面县buildf一次</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过自定义的Dockerfile build生成的镜像的默认命名规则如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;项目名&gt;_&lt;服务名&gt;:&lt;tag&gt;</span>
<span class="line"></span>
<span class="line">项目名（Project Name）默认是 docker-compose.yml 所在目录的名称。</span>
<span class="line">服务名（Service Name）来自 docker-compose.yml 里的 services 定义。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想 自定义镜像名称，可以在 docker-compose.yml 里添加 image：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">services:</span>
<span class="line">my-nginx:</span>
<span class="line">build: .</span>
<span class="line">image: my-nginx:latest   # 指定镜像名称，避免默认前缀</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想 自定义项目名称，可以运行：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker-compose -p customname up -d --build //通过-p 参数指定项目的名称</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,16)]))}const r=n(l,[["render",d],["__file","关于docker悬空镜像.html.vue"]]),p=JSON.parse('{"path":"/content/service/docker/%E5%85%B3%E4%BA%8Edocker%E6%82%AC%E7%A9%BA%E9%95%9C%E5%83%8F.html","title":"关于docker悬空镜像","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于docker悬空镜像","head":[["meta",{"name":"title","content":"关于docker悬空镜像"}],["meta",{"name":"description","content":"关于docker悬空镜像"}],["meta",{"name":"keywords","content":"registry,docker"}],["meta",{"property":"og:title","content":"关于docker悬空镜像"}],["meta",{"property":"og:description","content":"关于docker悬空镜像"}]]},"headers":[{"level":3,"title":"关于docker悬空镜像","slug":"关于docker悬空镜像","link":"#关于docker悬空镜像","children":[]}],"git":{},"filePathRelative":"content/service/docker/关于docker悬空镜像.md"}');export{r as comp,p as data};
