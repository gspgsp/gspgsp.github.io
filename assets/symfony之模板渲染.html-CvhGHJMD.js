import{_ as s,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(p,n){return l(),e("div",null,n[0]||(n[0]=[a(`<p>symfony模板渲染:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">①常规方式</span>
<span class="line">// src/Controller/ProductController.php</span>
<span class="line">namespace App\\Controller;</span>
<span class="line"></span>
<span class="line">use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Response;</span>
<span class="line"></span>
<span class="line">class ProductController extends AbstractController</span>
<span class="line">{</span>
<span class="line">    public function index(): Response</span>
<span class="line">    {</span>
<span class="line">        // ...</span>
<span class="line"></span>
<span class="line">        // the \`render()\` method returns a \`Response\` object with the</span>
<span class="line">        // contents created by the template</span>
<span class="line">        return $this-&gt;render(&#39;product/index.html.twig&#39;, [</span>
<span class="line">            &#39;category&#39; =&gt; &#39;...&#39;,</span>
<span class="line">            &#39;promotions&#39; =&gt; [&#39;...&#39;, &#39;...&#39;],</span>
<span class="line">        ]);</span>
<span class="line"></span>
<span class="line">        // the \`renderView()\` method only returns the contents created by the</span>
<span class="line">        // template, so you can use those contents later in a \`Response\` object</span>
<span class="line">        $contents = $this-&gt;renderView(&#39;product/index.html.twig&#39;, [</span>
<span class="line">            &#39;category&#39; =&gt; &#39;...&#39;,</span>
<span class="line">            &#39;promotions&#39; =&gt; [&#39;...&#39;, &#39;...&#39;],</span>
<span class="line">        ]);</span>
<span class="line"></span>
<span class="line">        return new Response($contents);</span>
<span class="line">        </span>
<span class="line">        //或者直接 render</span>
<span class="line">        return $this-&gt;render(&#39;product/index.html.twig&#39;, [</span>
<span class="line">            &#39;pagination&#39; =&gt; $pagination,</span>
<span class="line">            &#39;query&#39; =&gt; $request-&gt;query-&gt;all(),</span>
<span class="line">        ]);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">②v5.4版本以后可以通过Annotation方式，虽然官网说是v6.2以后才行</span>
<span class="line">// src/Controller/ProductController.php</span>
<span class="line">namespace App\\Controller;</span>
<span class="line"></span>
<span class="line">use Symfony\\Bridge\\Twig\\Attribute\\Template;</span>
<span class="line">use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Response;</span>
<span class="line"></span>
<span class="line">class ProductController extends AbstractController</span>
<span class="line">{</span>
<span class="line">    #[Template(&#39;product/index.html.twig&#39;)] //Annotation方式</span>
<span class="line">    public function index()</span>
<span class="line">    {</span>
<span class="line">        // ...</span>
<span class="line"></span>
<span class="line">        // when using the #[Template()] attribute, you only need to return</span>
<span class="line">        // an array with the parameters to pass to the template (the attribute</span>
<span class="line">        // is the one which will create and return the Response object).</span>
<span class="line">        return [</span>
<span class="line">            &#39;category&#39; =&gt; &#39;...&#39;,</span>
<span class="line">            &#39;promotions&#39; =&gt; [&#39;...&#39;, &#39;...&#39;],</span>
<span class="line">        ];</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">③在非控制器(比如 service 里面)</span>
<span class="line">// src/Service/SomeService.php</span>
<span class="line">namespace App\\Service;</span>
<span class="line"></span>
<span class="line">use Twig\\Environment;//注意这个twig的环境变量</span>
<span class="line"></span>
<span class="line">class SomeService</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private Environment $twig,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function someMethod()</span>
<span class="line">    {</span>
<span class="line">        // ...</span>
<span class="line"></span>
<span class="line">        $htmlContents = $this-&gt;twig-&gt;render(&#39;product/index.html.twig&#39;, [</span>
<span class="line">            &#39;category&#39; =&gt; &#39;...&#39;,</span>
<span class="line">            &#39;promotions&#39; =&gt; [&#39;...&#39;, &#39;...&#39;],</span>
<span class="line">        ]);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">④直接在 config/routes.yaml 渲染模板,虽然模板通常在控制器和服务中呈现，但你可以直接从路由定义中呈现不需要任何变量的静态页面。使用Symfony提供的特殊TemplateController：</span>
<span class="line">acme_privacy:</span>
<span class="line">  path:          /admin/test //路由</span>
<span class="line">  controller:    Symfony\\Bundle\\FrameworkBundle\\Controller\\TemplateController //这个控制器是symfony自带的，不许用我们处理</span>
<span class="line">  defaults:</span>
<span class="line">    # the path of the template to render</span>
<span class="line">    template:  &#39;admin/test.html.twig&#39; //只需要一个静态页面即可</span>
<span class="line"></span>
<span class="line">    # the response status code (default: 200)</span>
<span class="line">    statusCode: 200</span>
<span class="line"></span>
<span class="line">    # special options defined by Symfony to set the page cache</span>
<span class="line">    maxAge:    86400</span>
<span class="line">    sharedAge: 86400</span>
<span class="line"></span>
<span class="line">    # whether or not caching should apply for client caches only</span>
<span class="line">    private: true</span>
<span class="line"></span>
<span class="line">    # optionally you can define some arguments passed to the template</span>
<span class="line">    context:</span>
<span class="line">      site_name: &#39;ACME&#39;</span>
<span class="line">      theme: &#39;dark&#39;</span>
<span class="line"></span>
<span class="line">检查所有模板:$ php bin/console lint:twig</span>
<span class="line">展示模板信息:$ php bin/console debug:twig</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(i,[["render",c],["__file","symfony之模板渲染.html.vue"]]),t=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8B%E6%A8%A1%E6%9D%BF%E6%B8%B2%E6%9F%93.html","title":"symfony之模板渲染","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之模板渲染","description":"symfony之模板渲染"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之模板渲染.md"}');export{r as comp,t as data};
