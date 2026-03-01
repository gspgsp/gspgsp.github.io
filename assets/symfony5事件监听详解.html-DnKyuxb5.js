import{_ as s,c as a,f as e,o as t}from"./app-BB_BIQV8.js";const i={};function l(p,n){return t(),a("div",null,n[0]||(n[0]=[e(`<p>一直在用事件监听，但是之前记录的太简单了，还有很多细节没有理解，现在记录一下</p><p>首先是 kernel.event_listener 的 概念:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">There is an optional attribute for the kernel.event_listener tag called event which is useful when listener $event argument is not typed. If you configure it, it will change type of $event object. For the kernel.exception event, it is ExceptionEvent. Check out the Symfony events reference to see what type of object each event provides.</span>
<span class="line"></span>
<span class="line">With this attribute, Symfony follows this logic to decide which method to call inside the event listener class:</span>
<span class="line"></span>
<span class="line">If the kernel.event_listener tag defines the method attribute, that&#39;s the name of the method to be called;</span>
<span class="line">If no method attribute is defined, try to call the method whose name is on + &quot;PascalCased event name&quot; (e.g. onKernelException() method for the kernel.exception event);</span>
<span class="line">If that method is not defined either, try to call the __invoke() magic method (which makes event listeners invokable);</span>
<span class="line">If the __invoke() method is not defined either, throw an exception.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>翻译过来，使用代码说明:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment">#service.yaml定义:</span></span>
<span class="line">    <span class="token key atrule">App\\EventListener\\VideoSaveListener</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">tags</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token comment">#            - {name: &#39;kernel.event_listener&#39;, event: App\\Event\\AfterVideoSaveEvent, method: &#39;onVideoSave&#39;} #显</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;kernel.event_listener&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">event</span><span class="token punctuation">:</span> App\\Event\\AfterVideoSaveEvent<span class="token punctuation">}</span> <span class="token comment">#隐</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VideoSaveListener:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>EventListener</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Video</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Event<span class="token punctuation">\\</span>AfterVideoSaveEvent</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Service<span class="token punctuation">\\</span>VideoService</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>EntityManagerInterface</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">VideoSaveListener</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name type-declaration">EntityManagerInterface</span> <span class="token variable">$entityManager</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 既没有显式也没有隐式定义 method 的时候，会自动调用这个 __invoke 方法</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name">AfterVideoSaveEvent</span> <span class="token parameter">$event</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token class-name type-declaration">AfterVideoSaveEvent</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./3.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;3333&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">EntityManagerInterface</span> <span class="token variable">$entityManager</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">entityManager</span> <span class="token operator">=</span> <span class="token variable">$entityManager</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 显式 定义 method (需要在service 的 tags 里 指定 method 为下面这个方法名)</span>
<span class="line">     */</span></span>
<span class="line"><span class="token comment">//    public function onVideoSave(AfterVideoSaveEvent $event): void</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        file_put_contents(&#39;./1.txt&#39;, &#39;11111&#39;);</span></span>
<span class="line"><span class="token comment">//        $video  = $event-&gt;getVideo();</span></span>
<span class="line"><span class="token comment">//        $length = (new VideoService())-&gt;getVideoLength($video-&gt;getPlayUrl());</span></span>
<span class="line"><span class="token comment">//        $video-&gt;setLength($length);</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">//        $this-&gt;entityManager-&gt;getRepository(Video::class)-&gt;save($video, true);</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line"></span>
<span class="line">        <span class="token doc-comment comment">/**</span>
<span class="line">         * 隐式 定义 method (on + 事件名称空间+名称)</span>
<span class="line">         */</span></span>
<span class="line"><span class="token comment">//    public function onAppEventAfterVideoSaveEvent(AfterVideoSaveEvent $event): void</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        file_put_contents(&#39;./2.txt&#39;, &#39;22222&#39;);</span></span>
<span class="line"><span class="token comment">//        $video  = $event-&gt;getVideo();</span></span>
<span class="line"><span class="token comment">//        $length = (new VideoService())-&gt;getVideoLength($video-&gt;getPlayUrl());</span></span>
<span class="line"><span class="token comment">//        $video-&gt;setLength($length);</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">//        $this-&gt;entityManager-&gt;getRepository(Video::class)-&gt;save($video, true);</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考:https://symfony.com/doc/current/event_dispatcher.html</p>`,8)]))}const o=s(i,[["render",l],["__file","symfony5事件监听详解.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony5%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E8%AF%A6%E8%A7%A3.html","title":"symfony之事件监听详解","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之事件监听详解","description":"symfony之事件监听详解"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony5事件监听详解.md"}');export{o as comp,d as data};
