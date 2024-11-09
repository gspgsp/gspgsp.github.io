import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const c={},l=s(`<p>symfony7\u81EA\u5B9A\u4E49\u670D\u52A1:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services:
    App\\SomeService:
        arguments:
            $customCache: &#39;@cache.custom_cache&#39;

\u89E3\u91CA\uFF1A
services: \u8FD9\u662F Symfony \u670D\u52A1\u914D\u7F6E\u7684\u4E3B\u8981\u90E8\u5206\u3002
App\\SomeService: \u8FD9\u6307\u5B9A\u4E86\u6211\u4EEC\u6B63\u5728\u914D\u7F6E\u7684\u670D\u52A1\u7C7B\u3002\u8FD9\u91CC\u662F App\\SomeService \u7C7B\u3002
arguments: \u8FD9\u90E8\u5206\u7528\u4E8E\u6307\u5B9A\u670D\u52A1\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u3002
$customCache: &#39;@cache.custom_cache&#39;
  
$customCache \u662F\u6784\u9020\u51FD\u6570\u4E2D\u53C2\u6570\u7684\u540D\u79F0\u3002
&#39;@cache.custom_cache&#39; \u662F\u4E00\u4E2A\u670D\u52A1\u5F15\u7528\u3002@ \u7B26\u53F7\u8868\u793A\u8FD9\u662F\u5BF9\u53E6\u4E00\u4E2A\u670D\u52A1\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u666E\u901A\u7684\u5B57\u7B26\u4E32\u3002

\u8FD9\u4E2A\u914D\u7F6E\u7684\u4F5C\u7528\u662F\uFF1A\u5F53 Symfony \u7684\u4F9D\u8D56\u6CE8\u5165\u5BB9\u5668\u521B\u5EFA App\\SomeService \u7684\u5B9E\u4F8B\u65F6\uFF0C\u5B83\u4F1A\u5C06 cache.custom_cache \u670D\u52A1\u6CE8\u5165\u5230\u6784\u9020\u51FD\u6570\u7684 $customCache \u53C2\u6570\u4E2D\u3002

\u4F60\u7684\u670D\u52A1\u7C7B\u53EF\u80FD\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A

phpCopynamespace App;

use Symfony\\Contracts\\Cache\\CacheInterface;

class SomeService
{
    private $cache;

    public function __construct(CacheInterface $customCache)
    {
        $this-&gt;cache = $customCache;
    }

    // \u4F7F\u7528 $this-&gt;cache \u7684\u5176\u4ED6\u65B9\u6CD5...
}

\u6709\u4E86\u8FD9\u4E2A\u914D\u7F6E\uFF0C\u4F60\u53EF\u4EE5\u5728\u5E94\u7528\u7684\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528\u8FD9\u4E2A\u670D\u52A1\uFF0C\u800C\u4E0D\u9700\u8981\u624B\u52A8\u521B\u5EFA\u7F13\u5B58\u5BF9\u8C61\uFF1A

phpCopyclass SomeController
{
    public function someAction(App\\SomeService $someService)
    {
        // $someService \u5DF2\u7ECF\u88AB\u6CE8\u5165\u4E86\u6B63\u786E\u7684\u7F13\u5B58\u5B9E\u4F8B
        // \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528
    }
}
  
\u4F18\u70B9\uFF1A
\u89E3\u8026\uFF1A\u4F60\u7684 SomeService \u7C7B\u4E0D\u9700\u8981\u77E5\u9053\u5177\u4F53\u4F7F\u7528\u54EA\u4E2A\u7F13\u5B58\u670D\u52A1\uFF0C\u8FD9\u7531\u914D\u7F6E\u51B3\u5B9A\u3002
\u7075\u6D3B\u6027\uFF1A\u4F60\u53EF\u4EE5\u8F7B\u677E\u5730\u5728\u4E0D\u540C\u73AF\u5883\u4E2D\u5207\u6362\u4E0D\u540C\u7684\u7F13\u5B58\u5B9E\u73B0\uFF0C\u53EA\u9700\u66F4\u6539\u914D\u7F6E\u6587\u4EF6\u3002
\u6D4B\u8BD5\u53CB\u597D\uFF1A\u5728\u5355\u5143\u6D4B\u8BD5\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u5730\u6CE8\u5165\u4E00\u4E2A\u6A21\u62DF\u7684\u7F13\u5B58\u670D\u52A1\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function d(a,m){return n(),i("div",null,v)}var u=e(c,[["render",d],["__file","symfony7\u81EA\u5B9A\u4E49\u670D\u52A1.html.vue"]]);export{u as default};
