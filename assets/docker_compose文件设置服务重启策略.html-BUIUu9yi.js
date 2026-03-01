import{_ as s,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const c={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<p>docker_compose文件设置服务重启策略:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">设置 restart: always 确实会使容器在系统重启后自动启动。这个设置的具体作用如下：</span>
<span class="line">  </span>
<span class="line">系统重启后：当系统重新启动并且Docker服务开始运行时，所有设置了 restart: always 的容器都会自动启动。</span>
<span class="line">容器崩溃时：如果容器因为任何原因崩溃或停止，Docker 会自动尝试重新启动它。</span>
<span class="line">Docker 服务重启时：如果 Docker 服务本身重启，所有设置了 restart: always 的容器也会重新启动。</span>
<span class="line">  </span>
<span class="line">这个设置非常适合那些需要持续运行的服务，比如数据库、web 服务器等。</span>
<span class="line">  </span>
<span class="line">也可以通过命令行来修改: docker update --restart always container_name_or_id</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(c,[["render",l],["__file","docker_compose文件设置服务重启策略.html.vue"]]),d=JSON.parse('{"path":"/content/service/docker/docker_compose%E6%96%87%E4%BB%B6%E8%AE%BE%E7%BD%AE%E6%9C%8D%E5%8A%A1%E9%87%8D%E5%90%AF%E7%AD%96%E7%95%A5.html","title":"docker_compose文件设置服务重启策略","lang":"en-US","frontmatter":{"sidebar":false,"title":"docker_compose文件设置服务重启策略","description":"docker_compose文件设置服务重启策略"},"headers":[],"git":{},"filePathRelative":"content/service/docker/docker_compose文件设置服务重启策略.md"}');export{o as comp,d as data};
