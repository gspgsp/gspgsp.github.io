import{_ as e,o as n,c as i,g as s}from"./app.d66d8774.js";const l={},d=s(`<p>symfony7\u54CD\u5E94\u7F13\u5B58\u7684\u4F7F\u7528: \u76EE\u524D\u4F7F\u7528symfony7\u505A\u540E\u53F0API\u7684\u5F00\u53D1\uFF0C\u90E8\u5206\u63A5\u53E3\u4F1A\u505A\u54CD\u5E94\u7F13\u5B58\uFF0C\u57FA\u4E8E Caching Interface\uFF0C \u8FD9\u4E2A\u662FPSR-6\u7684\u6807\u51C6: https://www.php-fig.org/psr/psr-6/</p><p>\u5173\u4E8Ephp\u7684\u6807\u51C6(PSR:PHP Standards Recommendations): https://www.php-fig.org/</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//cache\u914D\u7F6E
config/packages/cache.yaml
framework:
    cache:
        app: cache.adapter.filesystem
        system: cache.adapter.system
        directory: &#39;%kernel.cache_dir%/pools&#39;

        # Unique name of your app: used to compute stable namespaces for cache keys.
        #prefix_seed: your_vendor_name/app_name

        # The &quot;app&quot; cache stores to the filesystem by default.
        # The data in this cache should persist between deploys.
        # Other options include:

        # Redis
        #app: cache.adapter.redis
        #default_redis_provider: redis://localhost

        # APCu (not recommended with heavy random-write workloads as memory fragmentation can cause perf issues)
        #app: cache.adapter.apcu

        # Namespaced pools use the above &quot;app&quot; backend by default
        #pools:
            #my.dedicated.cache: null
  
//\u5B9A\u4E49cache\u7684listener
congig/services.yaml
    App\\EventListener\\RequestCacheListener:
        tags:
            - { name: kernel.event_listener, event: kernel.request, method: onKernelRequest }
            - { name: kernel.event_listener, event: kernel.response, method: onKernelResponse }

&lt;?php
  
namespace App\\EventListener;
  
use App\\Attribute\\RequestCache;
use Psr\\Cache\\CacheItemPoolInterface;
use Symfony\\Component\\HttpKernel\\Event\\RequestEvent;
use Symfony\\Component\\HttpKernel\\Event\\ResponseEvent;
use Symfony\\Component\\HttpKernel\\KernelInterface;
  
class RequestCacheListener
{
    public function __construct(
        private CacheItemPoolInterface $requestCachePool,
        private readonly KernelInterface $kernel,
    ) {
    }

    //\u8FD9\u4E2A\u65B9\u6CD5\u5728 request\u65F6\u4F1A\u88AB\u8C03\u7528\uFF0C\u4E0D\u7BA1\u6709\u6CA1\u6709\u7F13\u5B58
    public function onKernelRequest(RequestEvent $event): void
    {
        if (!$event-&gt;isMainRequest() || !in_array($this-&gt;kernel-&gt;getEnvironment(), [&quot;prod&quot;, &quot;staging&quot;])) {
            return;
        }

        $request = $event-&gt;getRequest();
        $controller = $request-&gt;attributes-&gt;get(&#39;_controller&#39;);
        $controllerParts = explode(&#39;::&#39;, $controller);

        if (2 !== count($controllerParts)) {
            return;
        }

        $controllerClass = $controllerParts[0];
        $controllerMethod = $controllerParts[1];

        try {
            $reflectionController = new \\ReflectionMethod($controllerClass, $controllerMethod);
            $requestCache = $reflectionController-&gt;getAttributes(RequestCache::class, \\ReflectionAttribute::IS_INSTANCEOF); // \u901A\u8FC7\u5B9A\u4E49\u7684\u6307\u5B9Aattribute\u6765\u51B3\u5B9A\u7F13\u5B58\u7C7B\u578B
        } catch (\\ReflectionException $e) {
            return;
        }

        if (empty($requestCache)) {
            return;
        }

        $requestCache = $requestCache[0]-&gt;newInstance();
        $cacheKey = md5($request-&gt;getUri());
        $cachedItem = $this-&gt;requestCachePool-&gt;getItem($cacheKey);

        if ($cachedItem-&gt;isHit()) {
            $response = $cachedItem-&gt;get();
            $event-&gt;setResponse($response);

            return;
        }

        $event-&gt;getRequest()-&gt;attributes-&gt;set(&#39;_request_cache&#39;, $requestCache);
    }

    //\u8FD9\u4E2A\u65B9\u6CD5\u5728 response\u65F6\u4F1A\u88AB\u8C03\u7528\uFF0C\u4E0D\u7BA1\u6709\u6CA1\u6709\u7F13\u5B58
    public function onKernelResponse(ResponseEvent $event): void
    {
        $requestCache = $event-&gt;getRequest()-&gt;attributes-&gt;get(&#39;_request_cache&#39;);

        if (null === $requestCache) {
            $response = $event-&gt;getResponse();
            $response-&gt;headers-&gt;set(&#39;X-Cache&#39;, &#39;Hit&#39;);
            return;
        }

        $response  = $event-&gt;getResponse();
        $cacheKey  = md5($event-&gt;getRequest()-&gt;getUri());
        $cacheTime = $requestCache-&gt;expirationTime;

        // cache for 5s only for errors
        if (500 === $response-&gt;getStatusCode()) {
            $cacheTime = 5;
        }

        $response-&gt;headers-&gt;add([&#39;X-Cache&#39; =&gt; &#39;Miss&#39;]);
        $response-&gt;headers-&gt;addCacheControlDirective(&#39;public&#39;);
        $response-&gt;setMaxAge($cacheTime);

        $cachedItem = $this-&gt;requestCachePool-&gt;getItem($cacheKey);
        $cachedItem-&gt;set($response); // \u8FD9\u91CC\u5C06\u6574\u4E2A\u54CD\u5E94\u7ED3\u679C\u7F13\u5B58\uFF0C\u6BD4\u5982\u6709\u4E9B\u63A5\u53E3\u4F1A\u8FD4\u56DE \u56FD\u5BB6 \u7C7B\u578B\u7B49\u5217\u8868\uFF0C\u53EF\u4EE5\u8FDB\u884C\u7F13\u5B58
        $cachedItem-&gt;expiresAfter($cacheTime);
        $this-&gt;requestCachePool-&gt;save($cachedItem);
    }
}
  
//\u8C03\u7528cache
//\u5148\u5B9A\u4E49\u4E00\u4E2Aattribute
&lt;?php
  
namespace App\\Attribute;
  
#[\\Attribute(\\Attribute::TARGET_METHOD)]
class RequestCache
{
    public function __construct(
        public int $expirationTime = 3600 // Default expiration time in seconds
    ) {
    }
}
  
//\u63A7\u5236\u5668\u4E0B\u4F7F\u7528\u8FD9\u4E2Aattribute

use App\\Attribute\\RequestCache;

#[RequestCache(expirationTime: 86400)]
public function listEventStatuses(
    Service\\EventService $eventService
): JsonResponse {
    return new ApiSuccessResponse($eventService-&gt;getEventStatuses());
}
  
//\u6E05\u7406cache, CacheService.php, \u6211\u8BA4\u4E3A\u8FD9\u4E2A\u4E5F\u53EF\u4EE5\u505A\u4E00\u4E2Alistener\u6765\u63A7\u5236\u4EC0\u4E48\u65F6\u5019\u6E05\u7406\u7F13\u5B58
public function __construct(
        private readonly CacheItemPoolInterface $requestCachePool,
    ) {
    }
public function clear(){
  $this-&gt;requestCachePool-&gt;deleteItem(&quot;f2e644c1ffe9be69e85325ed0e746c97&quot;); // \u6E05\u7406\u6307\u5B9A\u89C1
  $this-&gt;requestCachePool-&gt;clear(); // \u6E05\u7406\u6240\u6709
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[d];function v(t,c){return n(),i("div",null,r)}var u=e(l,[["render",v],["__file","symfony7\u54CD\u5E94\u7F13\u5B58\u7684\u4F7F\u7528.html.vue"]]);export{u as default};
