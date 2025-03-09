import{_ as n,c as e,e as a,o as i}from"./app-CBlpnRTs.js";const l={};function c(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>symfony7响应缓存的使用: 目前使用symfony7做后台API的开发，部分接口会做响应缓存，基于 Caching Interface， 这个是PSR-6的标准: https://www.php-fig.org/psr/psr-6/</p><p>关于php的标准(PSR:PHP Standards Recommendations): https://www.php-fig.org/</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//cache配置</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const t=n(l,[["render",c],["__file","symfony7响应缓存的使用.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/symfony7%E5%93%8D%E5%BA%94%E7%BC%93%E5%AD%98%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"symfony7响应缓存的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7响应缓存的使用","description":"symfony7响应缓存的使用"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7响应缓存的使用.md"}');export{t as comp,r as data};
