import{_ as n,o as s,c as a,g as e}from"./app.66ae8700.js";const p={},t=e(`<p>\u6709\u65F6\u5019\u4F1A\u4F7F\u7528\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u91CC\u7684 \u5F15\u7528 \u5C5E\u6027\uFF0C\u4F46\u662F\u5C55\u793A\u7684\u65F6\u5019\u53EF\u80FD\u4E0D\u4F1A\u5C55\u793A\u51FA\u6765\uFF0C\u770B\u4E0D\u51FA\u5F15\u7528\u7684\u6548\u679C\uFF0C\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u5F15\u7528\u5C5E\u6027blockquote\u7684\u5C5E\u6027</p><p>\u6211\u7684\u4F7F\u7528\uFF1A</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code> <span class="token selector">blockquote</span><span class="token punctuation">{</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span><span class="token comment">//\u8BBE\u7F6E\u5F15\u7528\u7684border</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #F8F9FD<span class="token punctuation">;</span><span class="token comment">//\u5F15\u7528\u5185\u5BB9\u7684\u80CC\u666F\u8272</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u53EF\u4EE5\u6709\u7684\u5C5E\u6027\u8BBE\u7F6E:</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">blockquote </span><span class="token punctuation">{</span>
 <span class="token property">background</span><span class="token punctuation">:</span> #f9f9f9<span class="token punctuation">;</span>
 <span class="token property">border-left</span><span class="token punctuation">:</span> 10px solid #ccc<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 1.5em 10px<span class="token punctuation">;</span>
 <span class="token property">padding</span><span class="token punctuation">:</span> 0.5em 10px<span class="token punctuation">;</span>
 <span class="token property">quotes</span><span class="token punctuation">:</span> <span class="token string">&quot;\\201C&quot;</span> <span class="token string">&quot;\\201D&quot;</span> <span class="token string">&quot;\\2018&quot;</span> <span class="token string">&quot;\\2019&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">blockquote:before </span><span class="token punctuation">{</span>
 <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
 <span class="token property">content</span><span class="token punctuation">:</span> open-quote<span class="token punctuation">;</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 4em<span class="token punctuation">;</span>
 <span class="token property">line-height</span><span class="token punctuation">:</span> 0.1em<span class="token punctuation">;</span>
 <span class="token property">margin-right</span><span class="token punctuation">:</span> 0.25em<span class="token punctuation">;</span>
 <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.4em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">blockquote p </span><span class="token punctuation">{</span>
 <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function o(l,i){return s(),a("div",null,c)}var r=n(p,[["render",o],["__file","css\u4E4B\u4FEE\u6539\u5F15\u7528blockquote\u5143\u7D20\u7684\u5C5E\u6027.html.vue"]]);export{r as default};
