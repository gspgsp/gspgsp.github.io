import{_ as n,o as s,c as a,g as e}from"./app.6e4bf74b.js";const i={},p=e(`<p>scss\u4E4B\u81EA\u9002\u5E94\u5A92\u4F53\u67E5\u8BE2:</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">//feature.scss</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 10px 0<span class="token punctuation">;</span>

    <span class="token keyword">@include</span> <span class="token selector">bp-small </span><span class="token punctuation">{</span>
        <span class="token property">padding-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">padding-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@include</span> <span class="token selector">bp-medium </span><span class="token punctuation">{</span>
        <span class="token property">padding-left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">padding-right</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@include</span> <span class="token selector">bp-large </span><span class="token punctuation">{</span>
        <span class="token property">padding-left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">padding-right</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//common.scss:</span>
<span class="token keyword">@mixin</span> <span class="token selector">bp-small </span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 40em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@mixin</span> <span class="token selector">bp-medium </span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 40.063em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@mixin</span> <span class="token selector">bp-large </span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 60em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u4E0A\u9762\u4E24\u4E2Ascss\u6587\u4EF6\u5728\u540C\u7EA7\u76EE\u5F55\u4E0B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u5206\u6790:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD9\u6BB5\u6837\u5F0F\u548C SCSS \u4EE3\u7801\u4F7F\u7528\u4E86\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7684\u601D\u60F3\uFF0C\u6839\u636E\u4E0D\u540C\u5C4F\u5E55\u5BBD\u5EA6\u5E94\u7528\u4E0D\u540C\u7684\u6837\u5F0F\u3002\u8FD9\u91CC\u4F7F\u7528\u4E86 mixin \u6765\u5B9A\u4E49\u5A92\u4F53\u67E5\u8BE2\uFF0C\u7136\u540E\u5728 div \u5143\u7D20\u7684\u6837\u5F0F\u4E2D\u8C03\u7528\u8FD9\u4E9B mixin\u3002\u4E0B\u9762\u662F\u5BF9\u4EE3\u7801\u7684\u5206\u6790\uFF1A

div { ... }: \u8FD9\u662F\u4E00\u4E2A\u9009\u62E9\u5668\uFF0C\u5E94\u7528\u4E8E\u6240\u6709 div \u5143\u7D20\u3002

text-align: right;: \u8BBE\u7F6E\u6587\u672C\u5728 div \u4E2D\u53F3\u5BF9\u9F50\u3002

margin: 0 0 10px 0;: \u8BBE\u7F6E div \u7684\u4E0A\u3001\u53F3\u3001\u4E0B\u3001\u5DE6\u8FB9\u8DDD\u4E3A0\u30010\u300110px\u30010\u3002

\u5D4C\u5957\u4E86\u4E09\u4E2A\u5A92\u4F53\u67E5\u8BE2 mixin\uFF0C\u5206\u522B\u662F bp-small\u3001bp-medium\u3001bp-large\u3002

@include bp-small { ... }: \u5F53\u5C4F\u5E55\u5BBD\u5EA6\u5C0F\u4E8E\u7B49\u4E8E40em\u65F6\uFF0C\u5E94\u7528\u4EE5\u4E0B\u6837\u5F0F\u3002

padding-left: 20px;: \u5728\u5C0F\u5C4F\u5E55\u4E0A\u8BBE\u7F6E\u5DE6\u5185\u8FB9\u8DDD\u4E3A20px\u3002
padding-right: 20px;: \u5728\u5C0F\u5C4F\u5E55\u4E0A\u8BBE\u7F6E\u53F3\u5185\u8FB9\u8DDD\u4E3A20px\u3002
@include bp-medium { ... }: \u5F53\u5C4F\u5E55\u5BBD\u5EA6\u5927\u4E8E40.063em\u65F6\uFF0C\u5E94\u7528\u4EE5\u4E0B\u6837\u5F0F\u3002

padding-left: 50px;: \u5728\u4E2D\u7B49\u5C4F\u5E55\u4E0A\u8BBE\u7F6E\u5DE6\u5185\u8FB9\u8DDD\u4E3A50px\u3002
padding-right: 50px;: \u5728\u4E2D\u7B49\u5C4F\u5E55\u4E0A\u8BBE\u7F6E\u53F3\u5185\u8FB9\u8DDD\u4E3A50px\u3002
@include bp-large { ... }: \u5F53\u5C4F\u5E55\u5BBD\u5EA6\u5927\u4E8E60em\u65F6\uFF0C\u5E94\u7528\u4EE5\u4E0B\u6837\u5F0F\u3002

padding-left: 50px;: \u5728\u5927\u5C4F\u5E55\u4E0A\u8BBE\u7F6E\u5DE6\u5185\u8FB9\u8DDD\u4E3A50px\u3002
padding-right: 50px;: \u5728\u5927\u5C4F\u5E55\u4E0A\u8BBE\u7F6E\u53F3\u5185\u8FB9\u8DDD\u4E3A50px\u3002
\u8FD9\u6837\u7684\u8BBE\u8BA1\u4F7F\u5F97\u5728\u4E0D\u540C\u5C4F\u5E55\u5C3A\u5BF8\u4E0A\u90FD\u80FD\u6709\u5408\u9002\u7684\u5185\u8FB9\u8DDD\uFF0C\u63D0\u5347\u9875\u9762\u5728\u4E0D\u540C\u8BBE\u5907\u4E0A\u7684\u53EF\u8BFB\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002 mixin \u4E2D\u5B9A\u4E49\u7684\u5A92\u4F53\u67E5\u8BE2\u5141\u8BB8\u5728\u591A\u4E2A\u5730\u65B9\u91CD\u7528\u76F8\u540C\u7684\u5C4F\u5E55\u5BBD\u5EA6\u6761\u4EF6\uFF0C\u63D0\u9AD8\u4E86\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[p];function t(c,d){return s(),a("div",null,l)}var u=n(i,[["render",t],["__file","scss\u4E4B\u54CD\u5E94\u5F0F\u5A92\u4F53\u67E5\u8BE2.html.vue"]]);export{u as default};
