import{_ as n,o as e,c as s,g as a}from"./app.6e4bf74b.js";const t={},i=a(`<p>\u4E00\u76F4\u5728\u7528\u4E8B\u4EF6\u76D1\u542C\uFF0C\u4F46\u662F\u4E4B\u524D\u8BB0\u5F55\u7684\u592A\u7B80\u5355\u4E86\uFF0C\u8FD8\u6709\u5F88\u591A\u7EC6\u8282\u6CA1\u6709\u7406\u89E3\uFF0C\u73B0\u5728\u8BB0\u5F55\u4E00\u4E0B</p><p>\u9996\u5148\u662F kernel.event_listener \u7684 \u6982\u5FF5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>There is an optional attribute for the kernel.event_listener tag called event which is useful when listener $event argument is not typed. If you configure it, it will change type of $event object. For the kernel.exception event, it is ExceptionEvent. Check out the Symfony events reference to see what type of object each event provides.

With this attribute, Symfony follows this logic to decide which method to call inside the event listener class:

If the kernel.event_listener tag defines the method attribute, that&#39;s the name of the method to be called;
If no method attribute is defined, try to call the method whose name is on + &quot;PascalCased event name&quot; (e.g. onKernelException() method for the kernel.exception event);
If that method is not defined either, try to call the __invoke() magic method (which makes event listeners invokable);
If the __invoke() method is not defined either, throw an exception.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7FFB\u8BD1\u8FC7\u6765\uFF0C\u4F7F\u7528\u4EE3\u7801\u8BF4\u660E:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#service.yaml\u5B9A\u4E49:</span>
    <span class="token key atrule">App\\EventListener\\VideoSaveListener</span><span class="token punctuation">:</span>
        <span class="token key atrule">tags</span><span class="token punctuation">:</span>
<span class="token comment">#            - {name: &#39;kernel.event_listener&#39;, event: App\\Event\\AfterVideoSaveEvent, method: &#39;onVideoSave&#39;} #\u663E</span>
            <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;kernel.event_listener&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">event</span><span class="token punctuation">:</span> App\\Event\\AfterVideoSaveEvent<span class="token punctuation">}</span> <span class="token comment">#\u9690</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VideoSaveListener:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>EventListener</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Video</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Event<span class="token punctuation">\\</span>AfterVideoSaveEvent</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Service<span class="token punctuation">\\</span>VideoService</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>EntityManagerInterface</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">VideoSaveListener</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name type-declaration">EntityManagerInterface</span> <span class="token variable">$entityManager</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u65E2\u6CA1\u6709\u663E\u5F0F\u4E5F\u6CA1\u6709\u9690\u5F0F\u5B9A\u4E49 method \u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u8C03\u7528\u8FD9\u4E2A __invoke \u65B9\u6CD5
     *
     * <span class="token keyword">@param</span> <span class="token class-name">AfterVideoSaveEvent</span> <span class="token parameter">$event</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token class-name type-declaration">AfterVideoSaveEvent</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./3.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;3333&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">EntityManagerInterface</span> <span class="token variable">$entityManager</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">entityManager</span> <span class="token operator">=</span> <span class="token variable">$entityManager</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u663E\u5F0F \u5B9A\u4E49 method (\u9700\u8981\u5728service \u7684 tags \u91CC \u6307\u5B9A method \u4E3A\u4E0B\u9762\u8FD9\u4E2A\u65B9\u6CD5\u540D)
     */</span>
<span class="token comment">//    public function onVideoSave(AfterVideoSaveEvent $event): void</span>
<span class="token comment">//    {</span>
<span class="token comment">//        file_put_contents(&#39;./1.txt&#39;, &#39;11111&#39;);</span>
<span class="token comment">//        $video  = $event-&gt;getVideo();</span>
<span class="token comment">//        $length = (new VideoService())-&gt;getVideoLength($video-&gt;getPlayUrl());</span>
<span class="token comment">//        $video-&gt;setLength($length);</span>
<span class="token comment">//</span>
<span class="token comment">//        $this-&gt;entityManager-&gt;getRepository(Video::class)-&gt;save($video, true);</span>
<span class="token comment">//    }</span>

        <span class="token doc-comment comment">/**
         * \u9690\u5F0F \u5B9A\u4E49 method (on + \u4E8B\u4EF6\u540D\u79F0\u7A7A\u95F4+\u540D\u79F0)
         */</span>
<span class="token comment">//    public function onAppEventAfterVideoSaveEvent(AfterVideoSaveEvent $event): void</span>
<span class="token comment">//    {</span>
<span class="token comment">//        file_put_contents(&#39;./2.txt&#39;, &#39;22222&#39;);</span>
<span class="token comment">//        $video  = $event-&gt;getVideo();</span>
<span class="token comment">//        $length = (new VideoService())-&gt;getVideoLength($video-&gt;getPlayUrl());</span>
<span class="token comment">//        $video-&gt;setLength($length);</span>
<span class="token comment">//</span>
<span class="token comment">//        $this-&gt;entityManager-&gt;getRepository(Video::class)-&gt;save($video, true);</span>
<span class="token comment">//    }</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003:https://symfony.com/doc/current/event_dispatcher.html</p>`,8),l=[i];function c(o,p){return e(),s("div",null,l)}var v=n(t,[["render",c],["__file","symfony5\u4E8B\u4EF6\u76D1\u542C\u8BE6\u89E3.html.vue"]]);export{v as default};
