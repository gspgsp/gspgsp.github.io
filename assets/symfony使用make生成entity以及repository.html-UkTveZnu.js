import{_ as e,c as s,f as i,o as a}from"./app-BB_BIQV8.js";const t={};function l(r,n){return a(),s("div",null,n[0]||(n[0]=[i(`<p>symfony使用make生成entity以及repository:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 Symfony 中，如果你使用的是 Doctrine ORM，那么 Repository 类会在你生成实体类的同时自动生成。具体步骤如下:</span>
<span class="line">  </span>
<span class="line">确保你已经配置好了 Doctrine ORM 相关的 bundle,并映射了实体路径。</span>
<span class="line">使用 Symfony 提供的命令来生成实体类和 Repository 类:</span>
<span class="line">php bin/console make:entity</span>
<span class="line">这个命令会引导你输入实体的详细信息。  </span>
<span class="line">  </span>
<span class="line">在该命令的引导过程中,会询问你是否需要为该实体生成 Repository 类,选择&quot;Yes&quot;。</span>
<span class="line">命令执行完毕后,就会在 src/Repository 目录下生成对应的 Repository 类。</span>
<span class="line">就像你提供的 AffiliationRepository 类代码一样,Symfony会自动为你生成类继承自 Doctrine\\ORM\\EntityRepository 的仓库类。</span>
<span class="line">  </span>
<span class="line">这个自动生成的仓库类中是空的,因为预期你会在其中自行添加自定义的查询方法。你可以在该类中编写针对该实体的查询逻辑。</span>
<span class="line">  </span>
<span class="line">如果你后续需要为已有的实体生成仓库类,可以运行:</span>
<span class="line">php bin/console make:entity --entity=Entity\\ExistingEntity --regenerate</span>
<span class="line">其中 --entity 选项指定了要为哪个已存在的实体类生成仓库类, --regenerate 选项表示重新生成仓库类(如果已存在则覆盖)。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=e(t,[["render",l],["__file","symfony使用make生成entity以及repository.html.vue"]]),c=JSON.parse('{"path":"/content/php/symfony/symfony%E4%BD%BF%E7%94%A8make%E7%94%9F%E6%88%90entity%E4%BB%A5%E5%8F%8Arepository.html","title":"symfony使用make生成entity以及repository","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony使用make生成entity以及repository","description":"symfony使用make生成entity以及repository"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony使用make生成entity以及repository.md"}');export{p as comp,c as data};
