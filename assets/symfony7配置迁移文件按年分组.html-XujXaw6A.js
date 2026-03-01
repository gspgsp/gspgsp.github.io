import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h5 id="symfony7配置迁移文件按年分组" tabindex="-1"><a class="header-anchor" href="#symfony7配置迁移文件按年分组"><span>symfony7配置迁移文件按年分组</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">symfony7配置迁移文件按年分组: 在config/packages/doctrine_migrations.yaml</span>
<span class="line"></span>
<span class="line">doctrine_migrations:</span>
<span class="line">    migrations_paths:</span>
<span class="line">        # namespace is arbitrary but should be different from App\\Migrations</span>
<span class="line">        # as migrations classes should NOT be autoloaded</span>
<span class="line">        &#39;DoctrineMigrations&#39;: &#39;%kernel.project_dir%/migrations&#39;</span>
<span class="line">    enable_profiler: false</span>
<span class="line"></span>
<span class="line">    organize_migrations: BY_YEAR #通过这个配置实现</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">除了 BY_YEAR，Doctrine Migrations 还支持其他几种组织方式:</span>
<span class="line">BY_YEAR_AND_MONTH：按年份和月份组织</span>
<span class="line">false：不进行组织（默认）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(l,[["render",t],["__file","symfony7配置迁移文件按年分组.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony7%E9%85%8D%E7%BD%AE%E8%BF%81%E7%A7%BB%E6%96%87%E4%BB%B6%E6%8C%89%E5%B9%B4%E5%88%86%E7%BB%84.html","title":"symfony7配置迁移文件按年分组","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7配置迁移文件按年分组","head":[["meta",{"name":"title","content":"symfony7配置迁移文件按年分组"}],["meta",{"name":"description","content":"symfony7配置迁移文件按年分组"}],["meta",{"name":"keywords","content":"symfony7,migration"}],["meta",{"property":"og:title","content":"symfony7配置迁移文件按年分组"}],["meta",{"property":"og:description","content":"symfony7配置迁移文件按年分组"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7配置迁移文件按年分组.md"}');export{c as comp,d as data};
