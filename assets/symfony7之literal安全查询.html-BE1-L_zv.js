import{_ as n,c as e,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(r,s){return a(),e("div",null,s[0]||(s[0]=[l(`<p>symfony7之literal安全查询:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">使用: $qb-&gt;expr()-&gt;literal()</span>
<span class="line">1&gt;</span>
<span class="line">$qb-&gt;where(</span>
<span class="line">    $qb-&gt;expr()-&gt;eq(</span>
<span class="line">        &#39;u.id&#39;,</span>
<span class="line">        $qb-&gt;expr()-&gt;literal($userId)</span>
<span class="line">    )</span>
<span class="line">)</span>
<span class="line">  </span>
<span class="line">2&gt;</span>
<span class="line">$qb-&gt;where(</span>
<span class="line">    $qb-&gt;expr()-&gt;like(</span>
<span class="line">        &#39;u.firstName&#39;,</span>
<span class="line">        $qb-&gt;expr()-&gt;literal(&#39;%&#39; . $userRoleDto-&gt;getSearch() . &#39;%&#39;)</span>
<span class="line">    )</span>
<span class="line">)</span>
<span class="line">  </span>
<span class="line">总结:在进行任何类型的查询时使用 literal() 都是一个好习惯，因为它能提高安全性。使用 literal() 的好处：</span>
<span class="line">安全性：防止 SQL 注入攻击。</span>
<span class="line">正确处理数据类型：确保值被正确地转换和引用。</span>
<span class="line">一致性：为所有类型的查询提供统一的处理方式。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=n(i,[["render",t],["__file","symfony7之literal安全查询.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B9%8Bliteral%E5%AE%89%E5%85%A8%E6%9F%A5%E8%AF%A2.html","title":"symfony7之literal安全查询","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7之literal安全查询","description":"symfony7之literal安全查询"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7之literal安全查询.md"}');export{c as comp,d as data};
