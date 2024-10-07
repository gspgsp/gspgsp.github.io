import{_ as e,o as n,c as i,g as l}from"./app.d66d8774.js";const s={},d=l(`<p>css\u7684\u51E0\u4E2A\u6709\u7528\u5C5E\u6027:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.css content \u5C5E\u6027:
content \u5C5E\u6027\u901A\u5E38\u53EA\u5BF9\u4F2A\u5143\u7D20\uFF08\u5982 ::before \u6216 ::after\uFF09\u751F\u6548\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F5C\u7528\u4E8E HTML \u5143\u7D20\u672C\u8EAB\u3002\u5728\u60A8\u7684\u60C5\u51B5\u4E0B\uFF0C\u60A8\u8BD5\u56FE\u76F4\u63A5\u4FEE\u6539\u4E00\u4E2A div \u5143\u7D20\u7684\u5185\u5BB9\uFF0C\u8FD9\u662F\u4E0D\u4F1A\u751F\u6548\u7684\u3002
  
\u9519\u8BEF\u7528\u6CD5:
:deep(.select-none){
    content: &#39;No results match your search.&#39;;
}
  
\u6B63\u786E\u7528\u6CD5:
:deep(.select-none){
    font-size: 0;// \u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u8BBE\u7F6E\u4E3A 0, \u5B9E\u9645\u6548\u679C\u662F\u9690\u85CF\u4E86\u5143\u7D20\u7684\u539F\u59CB\u6587\u672C\u5185\u5BB9\uFF0C\u56E0\u4E3A\u6587\u5B57\u5927\u5C0F\u4E3A 0 \u5C31\u4E0D\u53EF\u89C1\u4E86, \u4F46\u662F\uFF0C\u5143\u7D20\u672C\u8EAB\u53CA\u5176\u5C3A\u5BF8\u548C\u5176\u4ED6\u6837\u5F0F\u5C5E\u6027\u4ECD\u7136\u4FDD\u6301\u4E0D\u53D8.
    &amp;:before{
      font-size: 1rem; // \u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u786E\u4FDD\u65B0\u7684\u6587\u672C\u5185\u5BB9\u662F\u53EF\u89C1\u7684\uFF0C\u56E0\u4E3A\u7236\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u662F 0.
      content: &#39;No results match your search.&#39;; // \u8BBE\u7F6E\u4F2A\u5143\u7D20\u7684\u5185\u5BB9\u4E3A\u6307\u5B9A\u7684\u6587\u672C, \u8FD9\u4E2A\u6587\u672C\u5C06\u4F1A\u663E\u793A\u5728\u5143\u7D20\u4E2D\uFF0C\u66FF\u4EE3\u539F\u6765\u7684\u5185\u5BB9.
    }
}
  
2.css fit-content\u4F7F\u7528:
\u8FD9\u4E2A\u5C5E\u6027\u5F88\u6709\u7528,\u5982\u4E0B\u4EE3\u7801:
&lt;div class=&quot;flex w-full flex-col gap-2.5&quot;&gt;
&lt;div
  v-for=&quot;(item, index) in selectedItems&quot;
  :key=&quot;index&quot;
  class=&quot;flex items-center rounded border border-color-info bg-brand-subtler hover:border-color-success w-fit&quot;
&gt;
  &lt;MText class=&quot;flex-1&quot;&gt;
    {{ item.label }}
  &lt;/MText&gt;
  &lt;MIcon
    name=&quot;close&quot;
    size=&quot;sm&quot;
    class=&quot;cursor-pointer hover:rounded hover:bg-brand-subtle&quot;
    @click=&quot;removeItem(item.value)&quot;
  /&gt;
&lt;/div&gt;
&lt;/div&gt;
  
\u8FD9\u4E2A\u5B9E\u73B0\u7684\u662F: \u7236\u7EA7 100%\u5BBD\u5EA6\uFF0C\u4F46\u662F\u5B50\u5143\u7D20\u4F1A\u6839\u636E\u5B50\u7EA7\u5185\u5BB9\u7684\u5BBD\u5EA6\u81EA\u52A8\u4F38\u7F29\uFF0C\u5305\u62EC\u81EA\u52A8\u6362\u884C
https://developer.mozilla.org/zh-CN/docs/Web/CSS/fit-content
  
\u4E0B\u9762\u8FD9\u4E2A:
&lt;div class=&quot;flex w-full flex-col gap-2.5&quot;&gt;
&lt;div
  v-for=&quot;(item, index) in selectedItems&quot;
  :key=&quot;index&quot;
  class=&quot;flex items-center justify-between rounded border border-color-info bg-brand-subtler hover:border-color-success&quot;
&gt;
  &lt;MText class=&quot;flex-1&quot;&gt;
    {{ item.label }}
  &lt;/MText&gt;
  &lt;MIcon
    name=&quot;close&quot;
    size=&quot;sm&quot;
    class=&quot;cursor-pointer hover:rounded hover:bg-brand-subtle&quot;
    @click=&quot;removeItem(item.value)&quot;
  /&gt;
&lt;/div&gt;
&lt;/div&gt;
  
\u5B9E\u73B0\u7684\u662F\uFF0C\u7236\u7EA7 100%\u5BBD\u5EA6\uFF0C\u4F46\u662F\u5B50\u5143\u7D20\u4F1A\u5360\u636E\u9664\u53BBMICon\u5143\u7D20\uFF0C\u5269\u4F59\u7684\u6240\u6709\u5BBD\u5EA6\uFF0C\u540C\u65F6\u53EF\u4EE5\u81EA\u52A8\u6362\u884C
  
3.flex-wrap\u662F\u7528\u4E8Eflex\u5BB9\u5668\u7684,\u800C\u4E0D\u662F\u5B50\u5143\u7D20
  
4.css\u5BF9\u5B50\u5143\u7D20\u8BBE\u7F6Eflex\u5C5E\u6027:
\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\uFF0C\u4E24\u4E2A\u6216\u4E09\u4E2A\u503C\u6765\u6307\u5B9A flex \u5C5E\u6027

\u5355\u503C\u8BED\u6CD5\uFF1A\u503C\u5FC5\u987B\u662F\u4EE5\u4E0B\u4E4B\u4E00\uFF1A
\u4E00\u4E2A &lt;flex-grow&gt; \u7684\u6709\u6548\u503C\uFF1A\u6B64\u65F6\u7B80\u5199\u4F1A\u6269\u5C55\u4E3A flex: &lt;flex-grow&gt; 1 0\u3002
\u4E00\u4E2A &lt;flex-basis&gt; \u7684\u6709\u6548\u503C\uFF1A\u6B64\u65F6\u7B80\u5199\u4F1A\u6269\u5C55\u4E3A flex: 1 1 &lt;flex-basis&gt;\u3002
\u5173\u952E\u5B57 none \u6216\u8005\u5168\u5C40\u5173\u952E\u5B57\u4E4B\u4E00\u3002 // \u6CE8\u610F flex: none \u5BF9\u5E94\uFF0C flex-grow: 0; flex-shrink: 0; flex-basis: auto;
  
\u5982:
/* \u5355\u503C\uFF0C\u65E0\u5355\u4F4D\u6570\u5B57\uFF1Aflex-grow
flex-basis \u6B64\u65F6\u7B49\u4E8E 0\u3002 */
flex: 2; // \u5373\u4E3A: flex: 2 1 0

/* \u5355\u503C\uFF0C\u5BBD\u5EA6/\u9AD8\u5EA6\uFF1Aflex-basis */
flex: 10em;
flex: 30px; // \u5373\u4E3A: flex: 1 1 30px;
flex: min-content;
  
\u53CC\u503C\u8BED\u6CD5\uFF1A
\u7B2C\u4E00\u4E2A\u503C\u5FC5\u987B\u662F\u4E00\u4E2A flex-grow \u7684\u6709\u6548\u503C\u3002
\u7B2C\u4E8C\u4E2A\u503C\u5FC5\u987B\u662F\u4EE5\u4E0B\u4E4B\u4E00\uFF1A
\u4E00\u4E2A flex-shrink \u7684\u6709\u6548\u503C\uFF1A\u6B64\u65F6\u7B80\u5199\u4F1A\u6269\u5C55\u4E3A flex: &lt;flex-grow&gt; &lt;flex-shrink&gt; 0\u3002
\u4E00\u4E2A flex-basis \u7684\u6709\u6548\u503C\uFF1A\u6B64\u65F6\u7B80\u5199\u4F1A\u6269\u5C55\u4E3A flex: &lt;flex-grow&gt; 1 &lt;flex-basis&gt;\u3002
  
\u4E09\u503C\u8BED\u6CD5\uFF1A\u503C\u5FC5\u987B\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u6307\u5B9A\uFF1A
\u4E00\u4E2A flex-grow \u7684\u6709\u6548\u503C\u3002
\u4E00\u4E2A flex-shrink \u7684\u6709\u6548\u503C\u3002
\u4E00\u4E2A flex-basis \u7684\u6709\u6548\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function r(c,t){return n(),i("div",null,v)}var a=e(s,[["render",r],["__file","css\u7684\u51E0\u4E2A\u6709\u7528\u5C5E\u6027.html.vue"]]);export{a as default};
