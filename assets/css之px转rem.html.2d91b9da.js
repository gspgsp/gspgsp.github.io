import{_ as e,o as n,c as s,g as i}from"./app.d66d8774.js";const l={},d=i(`<p>\u5728nuxt3\u4E2D\u4F7F\u7528scss\u5B9A\u4E8E\u5168\u5C40\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u8F6Crem</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B9A\u4E49\u4E00\u4E2Acommon.scss
\u7B2C\u4E00\u4E2A\u7248\u672C\uFF1A

@charset &quot;utf-8&quot;;
$defaultSize: 16px !default;
$font-base: 1rem;
@function rem($px){
  @return $px / $defaultSize * $font-base;
}

\u4F7F\u7528:
&lt;style lang=&quot;scss&quot; scoped&gt;
@import &quot;assets/scss/common.scss&quot;;
...
...
&lt;/style &gt;

\u6267\u884C\u62A5\u9519\uFF1A
vite:css] [sass] 40.6875rem/px isn&#39;t a valid CSS value

\u4FEE\u6539\u540E\u7684\u7248\u672C:
@charset &quot;utf-8&quot;;
$defaultSize: 16 !default;
$font-base: 1rem;
@function rem($px){
  @return calc($px / $defaultSize * $font-base);
}

\u4E3B\u8981\u662F\u628A\u8FD9\u4E2A16px\u6539\u4E3A16\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(c,t){return n(),s("div",null,a)}var u=e(l,[["render",v],["__file","css\u4E4Bpx\u8F6Crem.html.vue"]]);export{u as default};
