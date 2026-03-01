import{_ as e,c as n,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(d,s){return l(),n("div",null,s[0]||(s[0]=[a(`<p>mysql常用函数:</p><h5 id="coalesce" tabindex="-1"><a class="header-anchor" href="#coalesce"><span>COALESCE</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 MySQL 中，COALESCE 是一个控制流函数，用于返回第一个非 NULL 的值。</span>
<span class="line"></span>
<span class="line">COALESCE(value1, value2, ..., valueN)</span>
<span class="line">按顺序检查 value1, value2, ...，返回第一个非 NULL 的值。</span>
<span class="line">如果所有参数都是 NULL，则返回 NULL。</span>
<span class="line"></span>
<span class="line">例子:</span>
<span class="line">SELECT COALESCE(NULL, NULL, &#39;Hello&#39;, &#39;World&#39;);</span>
<span class="line">Hello</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">实际应用:</span>
<span class="line">SELECT COALESCE(updated_at, created_at) AS orderByDate</span>
<span class="line">FROM users;</span>
<span class="line"></span>
<span class="line">如果 updated_at 为空，则用 created_at 代替。</span>
<span class="line">确保 orderByDate 总有值，便于排序。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=e(i,[["render",t],["__file","mysql常用函数.html.vue"]]),p=JSON.parse('{"path":"/content/database/mysql/mysql%E5%B8%B8%E7%94%A8%E5%87%BD%E6%95%B0.html","title":"mysql常用函数","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql常用函数","head":[["meta",{"name":"title","content":"mysql常用函数"}],["meta",{"name":"description","content":"mysql常用函数"}],["meta",{"name":"keywords","content":"mysql"}],["meta",{"property":"og:title","content":"mysql常用函数"}],["meta",{"property":"og:description","content":"mysql常用函数"}]]},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql常用函数.md"}');export{r as comp,p as data};
