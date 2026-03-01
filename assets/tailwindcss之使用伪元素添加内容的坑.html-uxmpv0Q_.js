import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>tailwindcss之使用伪元素添加内容的坑:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">:deep(.select-none) {</span>
<span class="line">    @apply text-[0px];</span>
<span class="line">    &amp;::before {</span>
<span class="line">      @apply text-base</span>
<span class="line">      @apply content-[&#39;No results match your search.&#39;];</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">报: The content-[&quot;No class does not exist. If content-[&quot;No is a custom class, make sure it is defined within a @layer directive</span>
<span class="line">  </span>
<span class="line">:deep(.select-none) {</span>
<span class="line">    @apply text-[0px];</span>
<span class="line">    &amp;::before {</span>
<span class="line">      @apply text-base;</span>
<span class="line">      @apply content-[&#39;No_results_match_your_search.&#39;];</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">原因: Since whitespace denotes the end of a class in HTML, replace any spaces in an arbitrary value with an underscore.  </span>
<span class="line">原文: https://tailwindcss.com/docs/content#setting-a-pseudo-elements-content</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(l,[["render",t],["__file","tailwindcss之使用伪元素添加内容的坑.html.vue"]]),r=JSON.parse('{"path":"/content/front/html/tailwindcss%E4%B9%8B%E4%BD%BF%E7%94%A8%E4%BC%AA%E5%85%83%E7%B4%A0%E6%B7%BB%E5%8A%A0%E5%86%85%E5%AE%B9%E7%9A%84%E5%9D%91.html","title":"tailwindcss之使用伪元素添加内容的坑","lang":"en-US","frontmatter":{"sidebar":false,"title":"tailwindcss之使用伪元素添加内容的坑","description":"tailwindcss之使用伪元素添加内容的坑"},"headers":[],"git":{},"filePathRelative":"content/front/html/tailwindcss之使用伪元素添加内容的坑.md"}');export{p as comp,r as data};
