import{_ as n,o as e,c as i,g as l}from"./app.d66d8774.js";const s={},d=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>golang\u5F53\u4E2D\u63D0\u4F9B\u4E86\u4E24\u79CD\u5E38\u7528\u7684\u9501\u3002

\u4E00\u79CD\u662F sync.Mutex \uFF08\u4E92\u65A5\u9501\uFF09 \u53E6\u5916\u4E00\u79CD\u662F sync.RWMutex \uFF08\u8BFB\u5199\u9501\uFF09

Mutex\uFF0C\u5B83\u5C31\u662F\u6700\u7B80\u5355\u6700\u57FA\u7840\u7684\u540C\u6B65\u9501\uFF0C\u5F53\u4E00\u4E2Agoroutine\u6301\u6709\u9501\u7684\u65F6\u5019\uFF0C\u5176\u4ED6\u7684goroutine\u53EA\u80FD\u7B49\u5F85\u5230\u9501\u91CA\u653E\u4E4B\u540E\u624D\u53EF\u4EE5\u5C1D\u8BD5\u6301\u6709\u3002

RWMutex \u662F\u8BFB\u5199\u9501\u7684\u610F\u601D\uFF0C\u5B83\u652F\u6301\u4E00\u5199\u591A\u8BFB\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5141\u8BB8\u652F\u6301\u591A\u4E2Agoroutine\u540C\u65F6\u6301\u6709\u8BFB\u9501\uFF0C\u800C\u53EA\u5141\u8BB8\u4E00\u4E2Agoroutine\u6301\u6709\u5199\u9501\u3002\u5F53\u6709goroutine\u6301\u6709\u8BFB\u9501\u7684\u65F6\u5019\uFF0C\u4F1A\u963B\u6B62\u5199\u64CD\u4F5C\u3002\u5F53\u6709goroutine\u6301\u6709\u5199\u9501\u7684\u65F6\u5019\uFF0C\u65E0\u8BBA\u8BFB\u5199\u90FD\u4F1A\u88AB\u5835\u585E\u3002

\u5047\u8BBE\u6211\u4EEC\u5F53\u524D\u6709\u591A\u4E2Agoroutine\uFF0C\u4F46\u662F\u6211\u4EEC\u53EA\u5E0C\u671B\u6301\u6709\u9501\u7684goroutine\u6267\u884C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u5199\uFF1A
var lock sync.Mutex

for i := 0; i &lt; 10; i++ {
    go func() {
        lock.Lock()
        defer lock.Unlock()
        // do something
    }()
}

RWMutex\u5206\u4E3A\u8BFB\u5199\u9501\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E00\u5171\u4F1A\u67094\u4E2Aapi\uFF0C\u5206\u522B\u662FLock, Unlock, RLock, RUnlock\u3002Lock\u548CUnlock\u662F\u5199\u9501\u7684\u52A0\u9501\u4EE5\u53CA\u89E3\u9501\uFF0C\u800CRLock\u548CRUnlock\u5C31\u662F\u8BFB\u9501\u7684\u52A0\u9501\u548C\u89E3\u9501\u4E86\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[d];function o(r,v){return e(),i("div",null,c)}var a=n(s,[["render",o],["__file","go\u5E38\u7528\u9501.html.vue"]]);export{a as default};
