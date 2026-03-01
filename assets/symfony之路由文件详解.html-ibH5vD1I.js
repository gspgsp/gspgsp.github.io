import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function r(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>symfony路由文件详解:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">①查看所有路由</span>
<span class="line">php bin/console debug:router</span>
<span class="line"></span>
<span class="line">②查看指定路由信息</span>
<span class="line">php bin/console debug:router admin_course_list</span>
<span class="line"></span>
<span class="line">③根据指定路由名称获取url</span>
<span class="line">如果你的控制器扩展自AbstractController，使用generateUrl()帮助器:</span>
<span class="line">$this-&gt;generateUrl(&#39;sign_up&#39;);</span>
<span class="line"></span>
<span class="line">如果你的控制器没有从AbstractController扩展，你需要在你的控制器中获取服务，并遵循下一节的指示:</span>
<span class="line">// src/Service/SomeService.php</span>
<span class="line">namespace App\\Service;</span>
<span class="line"></span>
<span class="line">use Symfony\\Component\\Routing\\Generator\\UrlGeneratorInterface;</span>
<span class="line"></span>
<span class="line">class SomeService</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private UrlGeneratorInterface $router,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function someMethod()</span>
<span class="line">    {</span>
<span class="line">        // ...</span>
<span class="line"></span>
<span class="line">        // generate a URL with no route arguments</span>
<span class="line">        $signUpPage = $this-&gt;router-&gt;generate(&#39;sign_up&#39;);</span>
<span class="line"></span>
<span class="line">        // generate a URL with route arguments</span>
<span class="line">        $userProfilePage = $this-&gt;router-&gt;generate(&#39;user_profile&#39;, [</span>
<span class="line">            &#39;username&#39; =&gt; $user-&gt;getUserIdentifier(),</span>
<span class="line">        ]);</span>
<span class="line"></span>
<span class="line">        // generated URLs are &quot;absolute paths&quot; by default. Pass a third optional</span>
<span class="line">        // argument to generate different URLs (e.g. an &quot;absolute URL&quot;)</span>
<span class="line">        $signUpPage = $this-&gt;router-&gt;generate(&#39;sign_up&#39;, [], UrlGeneratorInterface::ABSOLUTE_URL);</span>
<span class="line"></span>
<span class="line">        // when a route is localized, Symfony uses by default the current request locale</span>
<span class="line">        // pass a different &#39;_locale&#39; value if you want to set the locale explicitly</span>
<span class="line">        $signUpPageInDutch = $this-&gt;router-&gt;generate(&#39;sign_up&#39;, [&#39;_locale&#39; =&gt; &#39;nl&#39;]);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",r],["__file","symfony之路由文件详解.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8B%E8%B7%AF%E7%94%B1%E6%96%87%E4%BB%B6%E8%AF%A6%E8%A7%A3.html","title":"symfony之路由文件详解","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之路由文件详解","description":"symfony之路由文件详解"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之路由文件详解.md"}');export{p as comp,d as data};
