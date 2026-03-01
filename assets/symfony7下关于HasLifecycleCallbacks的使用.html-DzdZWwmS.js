import{_ as e,c as n,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(t,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h5 id="symfony7下关于haslifecyclecallbacks的使用" tabindex="-1"><a class="header-anchor" href="#symfony7下关于haslifecyclecallbacks的使用"><span>symfony7下关于HasLifecycleCallbacks的使用</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 Symfony 7 中，#[ORM\\HasLifecycleCallbacks] 是 Doctrine ORM 提供的一个 PHP 8+ 属性（attribute），用于声明该实体类（如 CustomRegistrationOrder）包含生命周期回调方法（如 prePersist, postPersist 等）。这个属性的作用是告诉 Doctrine 要扫描这个类中带有生命周期钩子注解的方法，并在相应事件触发时自动调用它们。</span>
<span class="line"></span>
<span class="line">例子:</span>
<span class="line">use Doctrine\\ORM\\Mapping as ORM;</span>
<span class="line"></span>
<span class="line">#[ORM\\Table(&quot;custom_registration_orders&quot;)]</span>
<span class="line">#[ORM\\HasLifecycleCallbacks]</span>
<span class="line">class CustomRegistrationOrder</span>
<span class="line">{</span>
<span class="line"></span>
<span class="line">    #[ORM\\Column(name: &#39;created_at&#39;, type: &#39;datetime&#39;, nullable: false)]</span>
<span class="line">    protected \\DateTime $createdAt;</span>
<span class="line"></span>
<span class="line">    #[ORM\\Column(name: &#39;updated_at&#39;, type: &#39;datetime&#39;, nullable: false)]</span>
<span class="line">    protected \\DateTime $updatedAt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    #[ORM\\PrePersist]</span>
<span class="line">    public function updateTimestamps(): void</span>
<span class="line">    {</span>
<span class="line">        $this-&gt;createdAt = new \\DateTime();</span>
<span class="line">        $this-&gt;updatedAt = new \\DateTime();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=e(i,[["render",c],["__file","symfony7下关于HasLifecycleCallbacks的使用.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B8%8B%E5%85%B3%E4%BA%8EHasLifecycleCallbacks%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"symfony7下关于HasLifecycleCallbacks的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7下关于HasLifecycleCallbacks的使用","head":[["meta",{"name":"title","content":"symfony7下关于HasLifecycleCallbacks的使用"}],["meta",{"name":"description","content":"symfony7下关于HasLifecycleCallbacks的使用"}],["meta",{"name":"keywords","content":"php,HasLifecycleCallbacks"}],["meta",{"property":"og:title","content":"symfony7下关于HasLifecycleCallbacks的使用"}],["meta",{"property":"og:description","content":"symfony7下关于HasLifecycleCallbacks的使用"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7下关于HasLifecycleCallbacks的使用.md"}');export{p as comp,r as data};
