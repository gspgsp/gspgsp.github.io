import{_ as n,c as e,d as a,o as i}from"./app-C7j_h9cy.js";const l={};function c(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>symfony7自定义服务:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">services:</span>
<span class="line">    App\\SomeService:</span>
<span class="line">        arguments:</span>
<span class="line">            $customCache: &#39;@cache.custom_cache&#39;</span>
<span class="line"></span>
<span class="line">解释：</span>
<span class="line">services: 这是 Symfony 服务配置的主要部分。</span>
<span class="line">App\\SomeService: 这指定了我们正在配置的服务类。这里是 App\\SomeService 类。</span>
<span class="line">arguments: 这部分用于指定服务构造函数的参数。</span>
<span class="line">$customCache: &#39;@cache.custom_cache&#39;</span>
<span class="line">  </span>
<span class="line">$customCache 是构造函数中参数的名称。</span>
<span class="line">&#39;@cache.custom_cache&#39; 是一个服务引用。@ 符号表示这是对另一个服务的引用，而不是普通的字符串。</span>
<span class="line"></span>
<span class="line">这个配置的作用是：当 Symfony 的依赖注入容器创建 App\\SomeService 的实例时，它会将 cache.custom_cache 服务注入到构造函数的 $customCache 参数中。</span>
<span class="line"></span>
<span class="line">你的服务类可能看起来像这样：</span>
<span class="line"></span>
<span class="line">phpCopynamespace App;</span>
<span class="line"></span>
<span class="line">use Symfony\\Contracts\\Cache\\CacheInterface;</span>
<span class="line"></span>
<span class="line">class SomeService</span>
<span class="line">{</span>
<span class="line">    private $cache;</span>
<span class="line"></span>
<span class="line">    public function __construct(CacheInterface $customCache)</span>
<span class="line">    {</span>
<span class="line">        $this-&gt;cache = $customCache;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 使用 $this-&gt;cache 的其他方法...</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">有了这个配置，你可以在应用的任何地方使用这个服务，而不需要手动创建缓存对象：</span>
<span class="line"></span>
<span class="line">phpCopyclass SomeController</span>
<span class="line">{</span>
<span class="line">    public function someAction(App\\SomeService $someService)</span>
<span class="line">    {</span>
<span class="line">        // $someService 已经被注入了正确的缓存实例</span>
<span class="line">        // 可以直接使用</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">优点：</span>
<span class="line">解耦：你的 SomeService 类不需要知道具体使用哪个缓存服务，这由配置决定。</span>
<span class="line">灵活性：你可以轻松地在不同环境中切换不同的缓存实现，只需更改配置文件。</span>
<span class="line">测试友好：在单元测试中，你可以轻松地注入一个模拟的缓存服务。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const v=n(l,[["render",c],["__file","symfony7自定义服务.html.vue"]]),m=JSON.parse('{"path":"/content/php/symfony/symfony7%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9C%8D%E5%8A%A1.html","title":"symfony7自定义服务","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7自定义服务","description":"symfony7自定义服务"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7自定义服务.md"}');export{v as comp,m as data};
