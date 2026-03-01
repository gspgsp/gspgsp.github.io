import{_ as e,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(d,s){return i(),n("div",null,s[0]||(s[0]=[a(`<p>Docker Compose 文件中定义的网络和通过命令行创建的网络的一些区别：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 作用域和生命周期:</span>
<span class="line">   - Docker Compose 文件中定义的网络:</span>
<span class="line">     - 作用域限于该 Compose 项目。</span>
<span class="line">     - 随 \`docker compose up\` 创建，随 \`docker compose down\` 删除（除非定义为外部网络）。</span>
<span class="line">     - 网络名称会自动加上项目名称作为前缀。</span>
<span class="line">   - 命令行创建的网络:</span>
<span class="line">     - 全局作用域，可被任何容器或 Compose 项目使用。</span>
<span class="line">     - 持久存在，除非手动删除。</span>
<span class="line">     - 网络名称就是创建时指定的名称，没有额外前缀。</span>
<span class="line">2. 管理方式:</span>
<span class="line">   - Docker Compose 文件中的网络由 Docker Compose 管理，与项目其他部分（如服务、卷）集成。</span>
<span class="line">   - 命令行创建的网络需要手动管理，包括创建和删除。</span>
<span class="line">3. 可重用性:</span>
<span class="line">   - 命令行创建的网络更容易在多个项目间共享。</span>
<span class="line">   - Compose 文件中的网络默认只用于当前项目，但可以通过 \`external: true\` 选项引用外部网络。</span>
<span class="line">4. 配置灵活性:</span>
<span class="line">   - Compose 文件允许更详细的网络配置，如设置驱动选项、IPAM 配置等。</span>
<span class="line">   - 命令行创建的网络通常使用默认配置，除非在创建时指定特定选项。</span>
<span class="line">5. 版本控制:</span>
<span class="line">   - Compose 文件中的网络定义可以版本控制，方便团队协作和环境一致性。</span>
<span class="line">   - 命令行创建的网络配置不容易版本控制，除非将创建命令写入脚本。</span>
<span class="line">在您的情况下，如果想要在 Compose 文件中使用脚本创建的网络，您可以在 Compose 文件中将这些网络声明为外部网络：</span>
<span class="line">\`\`\`yaml</span>
<span class="line">networks:</span>
<span class="line">  laravel-dev-v2-internal:</span>
<span class="line">    external: true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，Compose 将使用已存在的网络，而不是创建新的。 总的来说，除非有特殊需求（如跨项目共享网络），通常建议在 Docker Compose 文件中定义和管理网络，以保持项目的自包含性和一致性。如果确实需要预先创建的网络，最好在 Compose 文件中明确引用它们。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,4)]))}const r=e(l,[["render",c],["__file","docker_compose文件中定义networks的两种方式的区别.html.vue"]]),o=JSON.parse('{"path":"/content/service/docker/docker_compose%E6%96%87%E4%BB%B6%E4%B8%AD%E5%AE%9A%E4%B9%89networks%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"docker_compose文件中定义networks的两种方式的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"docker_compose文件中定义networks的两种方式的区别","description":"docker_compose文件中定义networks的两种方式的区别"},"headers":[],"git":{},"filePathRelative":"content/service/docker/docker_compose文件中定义networks的两种方式的区别.md"}');export{r as comp,o as data};
