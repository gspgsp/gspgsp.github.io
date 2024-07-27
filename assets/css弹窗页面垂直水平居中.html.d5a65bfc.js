import{_ as n,o as s,c as a,g as e}from"./app.6e4bf74b.js";const t={},i=e(`<p>css\u5F39\u7A97\u9875\u9762\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D:</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector"><span class="token parent important">&amp;</span></span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token selector">.ajaxShowForm</span><span class="token punctuation">{</span>
          <span class="token property">top</span><span class="token punctuation">:</span> 50% <span class="token important">!important</span><span class="token punctuation">;</span>
          <span class="token property">bottom</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
          <span class="token property">max-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh <span class="token operator">-</span> 40px<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u5206\u6790:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&amp;: \u8868\u793A\u5F15\u7528\u7236\u9009\u62E9\u5668\uFF0C\u8FD9\u91CC\u53EF\u80FD\u662F\u67D0\u4E2A\u5BB9\u5668\u5143\u7D20\u7684\u9009\u62E9\u5668\u3002

width: 100%;: \u8BBE\u7F6E\u8BE5\u5BB9\u5668\u5143\u7D20\u7684\u5BBD\u5EA6\u4E3A100%\u3002

.ajaxShowForm { ... }: \u5D4C\u5957\u7684\u89C4\u5219\uFF0C\u9488\u5BF9\u5177\u6709.ajaxShowForm\u7C7B\u7684\u5143\u7D20\u3002

top: 50% !important;: \u8BBE\u7F6E\u5143\u7D20\u7684\u9876\u90E8\u8FB9\u7F18\u8DDD\u79BB\u5176\u5305\u542B\u5143\u7D20\u9876\u90E8\u7684\u8DDD\u79BB\u4E3A50%\uFF0C\u5E76\u4F7F\u7528!important\u786E\u4FDD\u8FD9\u4E2A\u89C4\u5219\u7684\u4F18\u5148\u7EA7\u8F83\u9AD8\u3002

bottom: auto;: \u53D6\u6D88bottom\u5C5E\u6027\u7684\u4EFB\u4F55\u503C\uFF0C\u4F7F\u5176\u81EA\u52A8\u8BA1\u7B97\u3002

height: auto;: \u8BBE\u7F6E\u5143\u7D20\u7684\u9AD8\u5EA6\u4E3A\u81EA\u52A8\uFF0C\u5141\u8BB8\u5176\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6\u3002

max-height: calc(100vh - 40px);: \u8BBE\u7F6E\u5143\u7D20\u7684\u6700\u5927\u9AD8\u5EA6\u4E3A\u89C6\u7A97\u9AD8\u5EA6\uFF08100vh\uFF09\u51CF\u53BB40\u50CF\u7D20\uFF0C\u4F7F\u7528calc()\u51FD\u6570\u6267\u884C\u6570\u5B66\u8FD0\u7B97\u3002

transform: translateY(-50%);: \u4F7F\u7528transform\u5C5E\u6027\u5BF9\u5143\u7D20\u8FDB\u884C\u5782\u76F4\u5E73\u79FB\uFF0C\u4F7F\u5176\u5782\u76F4\u5C45\u4E2D\u3002translateY(-50%)\u8868\u793A\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u5411\u4E0A\u79FB\u52A850%\u7684\u5143\u7D20\u9AD8\u5EA6\u3002

margin: 0 auto;: \u8BBE\u7F6E\u5143\u7D20\u7684\u4E0A\u4E0B\u8FB9\u8DDD\u4E3A0\uFF0C\u5DE6\u53F3\u8FB9\u8DDD\u4E3A\u81EA\u52A8\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6C34\u5E73\u5C45\u4E2D\u3002

\u8FD9\u6BB5\u4EE3\u7801\u7684\u6574\u4F53\u4F5C\u7528\u662F\u4F7F\u5305\u542B\u6709.ajaxShowForm\u7C7B\u7684\u5143\u7D20\u5782\u76F4\u548C\u6C34\u5E73\u5C45\u4E2D\uFF0C\u540C\u65F6\u9650\u5236\u5176\u6700\u5927\u9AD8\u5EA6\u4E3A\u89C6\u7A97\u9AD8\u5EA6\u51CF\u53BB40\u50CF\u7D20\u3002\u7236\u9009\u62E9\u5668\u53EF\u80FD\u662F\u67D0\u4E2A\u5305\u542B\u8FD9\u4E2A\u6837\u5F0F\u7684\u5BB9\u5668\u5143\u7D20\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[i];function c(l,o){return s(),a("div",null,p)}var r=n(t,[["render",c],["__file","css\u5F39\u7A97\u9875\u9762\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D.html.vue"]]);export{r as default};
