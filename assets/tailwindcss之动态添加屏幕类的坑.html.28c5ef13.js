import{_ as i,o as n,c as l,g as e}from"./app.66ae8700.js";const s={},d=e(`<p>tailwindcss\u4E4B\u52A8\u6001\u6DFB\u52A0\u5C4F\u5E55\u7C7B\u7684\u5751:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u672C\u6765\u60F3\u52A8\u6001\u4FEE\u6539 lg \u6761\u4EF6\u4E0B\uFF0Cdiv\u7684\u5BBD\u5EA6, \u5982\u4E0B\uFF0C\u4F46\u662F\u4E0D\u751F\u6548
withDefaults(
  defineProps&lt;{
    isNotificationVisible?: boolean;
    content?: string;
    maxWidth?: string;
  }&gt;(),
  {
    isNotificationVisible: false,
    content: &quot;&quot;,
    maxWidth: &quot;25rem&quot;,
  }
);
  
&lt;div
    class=&quot;w-full&quot;
    :class=&quot;\`lg:max-w-[\${maxWidth}]\`&quot;
  &gt;
  
2&gt;\u901A\u8FC7style\u53EF\u4EE5\u52A0\u8F7D\u8FD9\u4E2A\u52A8\u6001\u5BBD\u5EA6\uFF0C\u4F46\u662F\u6CA1\u6CD5\u4F7F\u7528 lg \u6761\u4EF6
&lt;div
    class=&quot;w-full&quot;
    :style=&quot;{ maxWidth: maxWidth }&quot;
  &gt;
\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FD9\u6837:
&lt;div
    class=&quot;w-full&quot;
    :style=&quot;{ maxWidth }&quot;
  &gt;
  
3&gt;\u89E3\u51B3 lg \u95EE\u9898
// \u4F7F\u7528\u5A92\u4F53\u67E5\u8BE2\uFF0C\u4E5F\u4E0D\u751F\u6548
&lt;div
    class=&quot;w-full&quot;
    :style=&quot;{ &#39;@media (min-width: 1024px)&#39;: { maxWidth: maxWidth } }&quot;
  &gt;
  
//\u4E0B\u9762\u7684\u65B9\u6CD5\u662F\u53EF\u884C\u7684
\u5B9A\u4E49:
@layer utilities {
  .lg-dynamic-max-w {
    @apply lg:max-w-[var(--max-width)];
  }
}
  
\u4F7F\u7528:
&lt;div
    class=&quot;w-full lg-dynamic-max-w&quot;
    :style=&quot;{ &#39;--max-width&#39;: maxWidth }&quot;
  &gt;
\u539F\u7406:
\u2460
@layer utilities \u544A\u8BC9 Tailwind \u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5DE5\u5177\u7C7B\u3002
@apply \u6307\u4EE4\u5141\u8BB8\u60A8\u5728\u81EA\u5B9A\u4E49\u7C7B\u4E2D\u4F7F\u7528 Tailwind \u7684\u539F\u5B50\u7C7B\u3002
lg:max-w-[var(--max-width)] \u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7C7B\uFF0C\u5B83\u5728\u5927\u5C4F\u5E55\uFF08lg\uFF09\u65AD\u70B9\u4E0A\u5E94\u7528\u6700\u5927\u5BBD\u5EA6\u3002
var(--max-width) \u662F\u4E00\u4E2A CSS \u53D8\u91CF\uFF0C\u5B83\u7684\u503C\u53EF\u4EE5\u52A8\u6001\u8BBE\u7F6E\u3002
  
\u2461
class=&quot;w-full lg-dynamic-max-w&quot; \u5E94\u7528\u4E86\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u7C7B\u3002
:style=&quot;{ &#39;--max-width&#39;: maxWidth }&quot; \u52A8\u6001\u8BBE\u7F6E CSS \u53D8\u91CF\u7684\u503C\u3002
  
\u2462
\u5F53\u5C4F\u5E55\u5BBD\u5EA6\u8FBE\u5230 lg \u65AD\u70B9\u65F6\uFF0CTailwind \u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u6FC0\u6D3B lg: \u524D\u7F00\u7684\u6837\u5F0F\u3002
\u6B64\u65F6\uFF0Cmax-w-[var(--max-width)] \u5F00\u59CB\u751F\u6548\u3002
var(--max-width) \u7684\u503C\u662F\u901A\u8FC7 Vue \u7684 :style \u7ED1\u5B9A\u52A8\u6001\u8BBE\u7F6E\u7684\u3002
\u7ED3\u679C\u662F\uFF0C\u5728\u5927\u5C4F\u5E55\u4E0A\uFF0C\u5143\u7D20\u83B7\u5F97\u4E86\u4E00\u4E2A\u52A8\u6001\u7684\u6700\u5927\u5BBD\u5EA6\u3002
  
\u2463
\u5B83\u5229\u7528\u4E86 Tailwind \u7684 JIT\uFF08\u5373\u65F6\u7F16\u8BD1\uFF09\u6A21\u5F0F\uFF0C\u5141\u8BB8\u4F7F\u7528\u4EFB\u610F\u503C\u3002
\u5B83\u7ED3\u5408\u4E86 Tailwind \u7684\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u548C CSS \u53D8\u91CF\u7684\u52A8\u6001\u6027\u3002
\u901A\u8FC7 @apply\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u53EF\u91CD\u7528\u7684\u7C7B\uFF0C\u5B83\u65E2\u5305\u542B Tailwind \u7684\u529F\u80FD\uFF0C\u53C8\u5141\u8BB8\u52A8\u6001\u503C\u3002
  
\u2464
\u4FDD\u6301\u4E86 Tailwind \u7684\u54CD\u5E94\u5F0F\u7279\u6027\u3002
\u5141\u8BB8\u52A8\u6001\u8BBE\u7F6E\u6700\u5927\u5BBD\u5EA6\u3002
\u5C06\u54CD\u5E94\u5F0F\u903B\u8F91\u4FDD\u7559\u5728 CSS \u4E2D\uFF0C\u800C\u4E0D\u662F JavaScript\u3002
\u53EF\u4EE5\u5728\u591A\u4E2A\u7EC4\u4EF6\u4E2D\u91CD\u7528\u81EA\u5B9A\u4E49\u7C7B\u3002

\u603B\u7ED3: \u8FD9\u79CD\u65B9\u6CD5\u4E4B\u6240\u4EE5\u6709\u6548\uFF0C\u662F\u56E0\u4E3A\u5B83\u5DE7\u5999\u5730\u5728 Tailwind \u7684\u9759\u6001\u7C7B\u7CFB\u7EDF\u548C CSS \u53D8\u91CF\u7684\u52A8\u6001\u7279\u6027\u4E4B\u95F4\u67B6\u8D77\u4E86\u4E00\u5EA7\u6865\u6881\u3002\u5B83\u5141\u8BB8\u60A8\u5728\u4FDD\u6301 Tailwind \u5DE5\u4F5C\u6D41\u7A0B\u7684\u540C\u65F6\uFF0C\u5F15\u5165\u52A8\u6001\u503C\u7684\u7075\u6D3B\u6027\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(u,c){return n(),l("div",null,v)}var t=i(s,[["render",a],["__file","tailwindcss\u4E4B\u52A8\u6001\u6DFB\u52A0\u5C4F\u5E55\u7C7B\u7684\u5751.html.vue"]]);export{t as default};
