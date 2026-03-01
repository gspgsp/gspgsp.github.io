import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function p(c,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>symfony7响应缓存的使用: 目前使用symfony7做后台API的开发，部分接口会做响应缓存，基于 Caching Interface， 这个是PSR-6的标准: https://www.php-fig.org/psr/psr-6/</p><p>关于php的标准(PSR:PHP Standards Recommendations): https://www.php-fig.org/</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//cache配置</span>
<span class="line">config/packages/cache.yaml</span>
<span class="line">framework:</span>
<span class="line">    cache:</span>
<span class="line">        app: cache.adapter.filesystem</span>
<span class="line">        system: cache.adapter.system</span>
<span class="line">        directory: &#39;%kernel.cache_dir%/pools&#39;</span>
<span class="line"></span>
<span class="line">        # Unique name of your app: used to compute stable namespaces for cache keys.</span>
<span class="line">        #prefix_seed: your_vendor_name/app_name</span>
<span class="line"></span>
<span class="line">        # The &quot;app&quot; cache stores to the filesystem by default.</span>
<span class="line">        # The data in this cache should persist between deploys.</span>
<span class="line">        # Other options include:</span>
<span class="line"></span>
<span class="line">        # Redis</span>
<span class="line">        #app: cache.adapter.redis</span>
<span class="line">        #default_redis_provider: redis://localhost</span>
<span class="line"></span>
<span class="line">        # APCu (not recommended with heavy random-write workloads as memory fragmentation can cause perf issues)</span>
<span class="line">        #app: cache.adapter.apcu</span>
<span class="line"></span>
<span class="line">        # Namespaced pools use the above &quot;app&quot; backend by default</span>
<span class="line">        #pools:</span>
<span class="line">            #my.dedicated.cache: null</span>
<span class="line">  </span>
<span class="line">//定义cache的listener</span>
<span class="line">congig/services.yaml</span>
<span class="line">    App\\EventListener\\RequestCacheListener:</span>
<span class="line">        tags:</span>
<span class="line">            - { name: kernel.event_listener, event: kernel.request, method: onKernelRequest }</span>
<span class="line">            - { name: kernel.event_listener, event: kernel.response, method: onKernelResponse }</span>
<span class="line"></span>
<span class="line">&lt;?php</span>
<span class="line">  </span>
<span class="line">namespace App\\EventListener;</span>
<span class="line">  </span>
<span class="line">use App\\Attribute\\RequestCache;</span>
<span class="line">use Psr\\Cache\\CacheItemPoolInterface;</span>
<span class="line">use Symfony\\Component\\HttpKernel\\Event\\RequestEvent;</span>
<span class="line">use Symfony\\Component\\HttpKernel\\Event\\ResponseEvent;</span>
<span class="line">use Symfony\\Component\\HttpKernel\\KernelInterface;</span>
<span class="line">  </span>
<span class="line">class RequestCacheListener</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private CacheItemPoolInterface $requestCachePool,</span>
<span class="line">        private readonly KernelInterface $kernel,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    //这个方法在 request时会被调用，不管有没有缓存</span>
<span class="line">    public function onKernelRequest(RequestEvent $event): void</span>
<span class="line">    {</span>
<span class="line">        if (!$event-&gt;isMainRequest() || !in_array($this-&gt;kernel-&gt;getEnvironment(), [&quot;prod&quot;, &quot;staging&quot;])) {</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $request = $event-&gt;getRequest();</span>
<span class="line">        $controller = $request-&gt;attributes-&gt;get(&#39;_controller&#39;);</span>
<span class="line">        $controllerParts = explode(&#39;::&#39;, $controller);</span>
<span class="line"></span>
<span class="line">        if (2 !== count($controllerParts)) {</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $controllerClass = $controllerParts[0];</span>
<span class="line">        $controllerMethod = $controllerParts[1];</span>
<span class="line"></span>
<span class="line">        try {</span>
<span class="line">            $reflectionController = new \\ReflectionMethod($controllerClass, $controllerMethod);</span>
<span class="line">            $requestCache = $reflectionController-&gt;getAttributes(RequestCache::class, \\ReflectionAttribute::IS_INSTANCEOF); // 通过定义的指定attribute来决定缓存类型</span>
<span class="line">        } catch (\\ReflectionException $e) {</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        if (empty($requestCache)) {</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $requestCache = $requestCache[0]-&gt;newInstance();</span>
<span class="line">        $cacheKey = md5($request-&gt;getUri());</span>
<span class="line">        $cachedItem = $this-&gt;requestCachePool-&gt;getItem($cacheKey);</span>
<span class="line"></span>
<span class="line">        if ($cachedItem-&gt;isHit()) {</span>
<span class="line">            $response = $cachedItem-&gt;get();</span>
<span class="line">            $event-&gt;setResponse($response);</span>
<span class="line"></span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $event-&gt;getRequest()-&gt;attributes-&gt;set(&#39;_request_cache&#39;, $requestCache);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    //这个方法在 response时会被调用，不管有没有缓存</span>
<span class="line">    public function onKernelResponse(ResponseEvent $event): void</span>
<span class="line">    {</span>
<span class="line">        $requestCache = $event-&gt;getRequest()-&gt;attributes-&gt;get(&#39;_request_cache&#39;);</span>
<span class="line"></span>
<span class="line">        if (null === $requestCache) {</span>
<span class="line">            $response = $event-&gt;getResponse();</span>
<span class="line">            $response-&gt;headers-&gt;set(&#39;X-Cache&#39;, &#39;Hit&#39;);</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $response  = $event-&gt;getResponse();</span>
<span class="line">        $cacheKey  = md5($event-&gt;getRequest()-&gt;getUri());</span>
<span class="line">        $cacheTime = $requestCache-&gt;expirationTime;</span>
<span class="line"></span>
<span class="line">        // cache for 5s only for errors</span>
<span class="line">        if (500 === $response-&gt;getStatusCode()) {</span>
<span class="line">            $cacheTime = 5;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $response-&gt;headers-&gt;add([&#39;X-Cache&#39; =&gt; &#39;Miss&#39;]);</span>
<span class="line">        $response-&gt;headers-&gt;addCacheControlDirective(&#39;public&#39;);</span>
<span class="line">        $response-&gt;setMaxAge($cacheTime);</span>
<span class="line"></span>
<span class="line">        $cachedItem = $this-&gt;requestCachePool-&gt;getItem($cacheKey);</span>
<span class="line">        $cachedItem-&gt;set($response); // 这里将整个响应结果缓存，比如有些接口会返回 国家 类型等列表，可以进行缓存</span>
<span class="line">        $cachedItem-&gt;expiresAfter($cacheTime);</span>
<span class="line">        $this-&gt;requestCachePool-&gt;save($cachedItem);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">//调用cache</span>
<span class="line">//先定义一个attribute</span>
<span class="line">&lt;?php</span>
<span class="line">  </span>
<span class="line">namespace App\\Attribute;</span>
<span class="line">  </span>
<span class="line">#[\\Attribute(\\Attribute::TARGET_METHOD)]</span>
<span class="line">class RequestCache</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        public int $expirationTime = 3600 // Default expiration time in seconds</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">//控制器下使用这个attribute</span>
<span class="line"></span>
<span class="line">use App\\Attribute\\RequestCache;</span>
<span class="line"></span>
<span class="line">#[RequestCache(expirationTime: 86400)]</span>
<span class="line">public function listEventStatuses(</span>
<span class="line">    Service\\EventService $eventService</span>
<span class="line">): JsonResponse {</span>
<span class="line">    return new ApiSuccessResponse($eventService-&gt;getEventStatuses());</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">//清理cache, CacheService.php, 我认为这个也可以做一个listener来控制什么时候清理缓存</span>
<span class="line">public function __construct(</span>
<span class="line">        private readonly CacheItemPoolInterface $requestCachePool,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line">public function clear(){</span>
<span class="line">  $this-&gt;requestCachePool-&gt;deleteItem(&quot;f2e644c1ffe9be69e85325ed0e746c97&quot;); // 清理指定见</span>
<span class="line">  $this-&gt;requestCachePool-&gt;clear(); // 清理所有</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="对如下缓存代码的分析" tabindex="-1"><a class="header-anchor" href="#对如下缓存代码的分析"><span>对如下缓存代码的分析:</span></a></h5><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$cachedItem</span><span class="token operator">-&gt;</span><span class="token function">isHit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$cachedItem</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">setResponse</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好，我们仔细分析一下这段关键代码在 Symfony 生命周期中的作用以及之后的流程：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$cachedItem</span><span class="token operator">-&gt;</span><span class="token function">isHit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$cachedItem</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">setResponse</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1️⃣-当前代码做了什么" tabindex="-1"><a class="header-anchor" href="#_1️⃣-当前代码做了什么"><span>1️⃣ 当前代码做了什么</span></a></h5><ol><li><p>检查缓存命中 (<code>isHit()</code>)。</p></li><li><p>如果命中：</p><ul><li>从缓存池拿出之前存的 <strong>Response 对象</strong> (<code>$cachedItem-&gt;get()</code>)。</li><li>调用 <code>$event-&gt;setResponse($response)</code>，将这个 Response 设置给事件。</li></ul></li><li><p><code>return</code>：当前监听器不再继续处理，跳过下面代码逻辑（例如 <code>_request_cache</code> 注入）。</p></li></ol><h5 id="_2️⃣-symfony-后续请求处理流程" tabindex="-1"><a class="header-anchor" href="#_2️⃣-symfony-后续请求处理流程"><span>2️⃣ Symfony 后续请求处理流程</span></a></h5><p>在 Symfony 中，请求处理大致顺序：</p><ol><li><strong>kernel.request</strong> → 所有 RequestListener 被调用</li><li><strong>kernel.controller</strong> → 调用 Controller</li><li><strong>Controller 返回 Response</strong></li><li><strong>kernel.view</strong> → 如果 Controller 没返回 Response，可处理</li><li><strong>kernel.response</strong> → 所有 ResponseListener 被调用</li><li><strong>发送 Response 给客户端</strong></li></ol><h5 id="情况-a-缓存命中" tabindex="-1"><a class="header-anchor" href="#情况-a-缓存命中"><span>情况 A：缓存命中</span></a></h5><ul><li>已经 <code>setResponse($response)</code>，Symfony 会 <strong>短路 Controller</strong>： <ul><li>不再执行 Controller 方法</li><li>不会触发 kernel.controller</li><li>不会生成新的 Response</li></ul></li><li>但 <strong>仍会触发 kernel.response</strong>，因为 Symfony 需要把 Response 发出去。</li><li>在 <code>onKernelResponse</code> 可以对这个缓存 Response 做一些操作，例如： <ul><li>添加 <code>X-Cache</code> header（可以改为 <code>Hit</code>）</li><li>设置 cache-control 等</li></ul></li><li>最终这个缓存 Response 被发送给客户端。</li></ul><h5 id="情况-b-缓存未命中" tabindex="-1"><a class="header-anchor" href="#情况-b-缓存未命中"><span>情况 B：缓存未命中</span></a></h5><ul><li>代码执行到 <code>return</code> 之外，<code>_request_cache</code> 被写入 request attributes。</li><li>Controller 会正常执行生成 Response。</li><li><code>onKernelResponse</code> 拿到 <code>_request_cache</code>： <ul><li>将 Response 写入缓存池</li><li>设置缓存时间、headers</li></ul></li><li>下次同样请求就能命中缓存。</li></ul><h5 id="_3️⃣-总结-缓存命中后的-请求干什么" tabindex="-1"><a class="header-anchor" href="#_3️⃣-总结-缓存命中后的-请求干什么"><span>3️⃣ 总结：缓存命中后的“请求干什么”</span></a></h5><table><thead><tr><th>步骤</th><th>动作</th></tr></thead><tbody><tr><td>kernel.request</td><td>检查缓存，命中 → setResponse，Controller 不执行</td></tr><tr><td>kernel.controller</td><td>被跳过</td></tr><tr><td>Controller</td><td>不执行</td></tr><tr><td>kernel.response</td><td>仍然触发，可以对缓存 Response 做 header、Cache-Control 等处理</td></tr><tr><td>客户端接收 Response</td><td>完整的缓存响应，包括 body、status、headers</td></tr></tbody></table><p>✅ 关键点：缓存命中后，<strong>整个请求不会再执行 Controller</strong>，但 Symfony 会正常触发 Response 事件并发送 Response。</p><h5 id="这个缓存到底缓存的什么内容" tabindex="-1"><a class="header-anchor" href="#这个缓存到底缓存的什么内容"><span>这个缓存到底缓存的什么内容:</span></a></h5><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token variable">$cachedItem</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">requestCachePool</span><span class="token operator">-&gt;</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token variable">$cacheKey</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$cachedItem</span><span class="token operator">-&gt;</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$cachedItem</span><span class="token operator">-&gt;</span><span class="token function">expiresAfter</span><span class="token punctuation">(</span><span class="token variable">$cacheTime</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">requestCachePool</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token variable">$cachedItem</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="关键点-1-缓存的对象是-symfony-response" tabindex="-1"><a class="header-anchor" href="#关键点-1-缓存的对象是-symfony-response"><span>关键点 1：缓存的对象是 <strong>Symfony Response</strong></span></a></h5><ul><li><code>set($response)</code> 这里直接把 <code>$response</code> 对象写入缓存。</li><li>也就是说，缓存里存的是 <strong>整个 <code>Symfony\\Component\\HttpFoundation\\Response</code> 对象</strong>，包含： <ul><li>HTTP 状态码（200、500 等）</li><li>headers（包括你加的 <code>X-Cache</code>）</li><li>内容 body（HTML、JSON 等）</li><li>cookies 等信息</li></ul></li></ul><p>所以并不是只缓存一个简单的字符串或者数组，而是整个响应对象。</p><h5 id="关键点-2-缓存读取时直接返回对象" tabindex="-1"><a class="header-anchor" href="#关键点-2-缓存读取时直接返回对象"><span>关键点 2：缓存读取时直接返回对象</span></a></h5><p>在 <code>onKernelRequest</code>：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$cachedItem</span><span class="token operator">-&gt;</span><span class="token function">isHit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$cachedItem</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">setResponse</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>get()</code> 拿出来的就是之前存的 <code>Response</code> 对象。</li><li>直接 <code>setResponse($response)</code>，请求就被短路，浏览器收到缓存内容，和正常生成响应完全一致。</li><li>所以你没看到“单独 set 值”，实际上 <code>$response</code> 就是缓存的完整内容。</li></ul><h5 id="关键点-3-缓存策略" tabindex="-1"><a class="header-anchor" href="#关键点-3-缓存策略"><span>关键点 3：缓存策略</span></a></h5><ul><li><strong>缓存按 URI</strong>：<code>$cacheKey = md5($request-&gt;getUri())</code>，同一 URL 命中同一缓存。</li><li><strong>缓存时间可控</strong>： <ul><li>默认：注解里的 <code>expirationTime</code></li><li>错误（500）：强制 5 秒</li></ul></li></ul><p>✅ 总结一句话：</p><blockquote><p>缓存的不是单独的数据字段，而是整个 <code>Response</code> 对象，包括状态码、headers 和 body。读取缓存时直接返回这个 Response，对客户端来说就像正常生成的一样。</p></blockquote><h5 id="小优化" tabindex="-1"><a class="header-anchor" href="#小优化"><span>小优化:</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">if ($cachedItem-&gt;isHit()) {</span>
<span class="line">$response = $cachedItem-&gt;get();</span>
<span class="line">$response-&gt;headers-&gt;set(&#39;X-Cache&#39;, &#39;Hit&#39;);</span>
<span class="line">$event-&gt;setResponse($response);</span>
<span class="line"></span>
<span class="line">    return;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const r=n(i,[["render",p],["__file","symfony7响应缓存的使用.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony7%E5%93%8D%E5%BA%94%E7%BC%93%E5%AD%98%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"symfony7响应缓存的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7响应缓存的使用","description":"symfony7响应缓存的使用"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7响应缓存的使用.md"}');export{r as comp,d as data};
