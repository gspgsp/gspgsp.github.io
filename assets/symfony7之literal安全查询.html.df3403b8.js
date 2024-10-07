import{_ as e,o as i,c as n,g as l}from"./app.d66d8774.js";const s={},d=l(`<p>symfony7\u4E4Bliteral\u5B89\u5168\u67E5\u8BE2:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528: $qb-&gt;expr()-&gt;literal()
1&gt;
$qb-&gt;where(
    $qb-&gt;expr()-&gt;eq(
        &#39;u.id&#39;,
        $qb-&gt;expr()-&gt;literal($userId)
    )
)
  
2&gt;
$qb-&gt;where(
    $qb-&gt;expr()-&gt;like(
        &#39;u.firstName&#39;,
        $qb-&gt;expr()-&gt;literal(&#39;%&#39; . $userRoleDto-&gt;getSearch() . &#39;%&#39;)
    )
)
  
\u603B\u7ED3:\u5728\u8FDB\u884C\u4EFB\u4F55\u7C7B\u578B\u7684\u67E5\u8BE2\u65F6\u4F7F\u7528 literal() \u90FD\u662F\u4E00\u4E2A\u597D\u4E60\u60EF\uFF0C\u56E0\u4E3A\u5B83\u80FD\u63D0\u9AD8\u5B89\u5168\u6027\u3002\u4F7F\u7528 literal() \u7684\u597D\u5904\uFF1A
\u5B89\u5168\u6027\uFF1A\u9632\u6B62 SQL \u6CE8\u5165\u653B\u51FB\u3002
\u6B63\u786E\u5904\u7406\u6570\u636E\u7C7B\u578B\uFF1A\u786E\u4FDD\u503C\u88AB\u6B63\u786E\u5730\u8F6C\u6362\u548C\u5F15\u7528\u3002
\u4E00\u81F4\u6027\uFF1A\u4E3A\u6240\u6709\u7C7B\u578B\u7684\u67E5\u8BE2\u63D0\u4F9B\u7EDF\u4E00\u7684\u5904\u7406\u65B9\u5F0F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function t(a,v){return i(),n("div",null,r)}var u=e(s,[["render",t],["__file","symfony7\u4E4Bliteral\u5B89\u5168\u67E5\u8BE2.html.vue"]]);export{u as default};
