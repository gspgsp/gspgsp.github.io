import{_ as n,o as s,c as e,g as t}from"./app.66ae8700.js";const a={},i=t(`<p>vue3\u4E4Bslot\u7684\u62D3\u5C55:<br> 1.\u901A\u8FC7slot\u83B7\u53D6slot\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7236\u7EC4\u4EF6
&lt;div&gt;
    &lt;AppDashboardFloatingFilters
      v-if=&quot;dashboardFilters&quot;
      v-slot=&quot;slotProps&quot;
    &gt;
      &lt;MyDashboardEventProposalsFilters
        v-model:search=&quot;searchModel&quot;
        :query-params
        :status-types=&quot;statusItems&quot;
        :is-floating=&quot;slotProps.isFloating&quot;
        @change-status=&quot;changeStatus&quot;
        @change-search=&quot;changeSearch&quot;
      /&gt;
    &lt;/AppDashboardFloatingFilters&gt;
&lt;/div&gt;
  
//\u5B50\u7EC4\u4EF6 AppDashboardFloatingFilters.vue
&lt;template&gt;
  &lt;transition
    enter-from-class=&quot;-translate-y-[100%]&quot;
    leave-to-class=&quot;-translate-y-[100%]&quot;
    enter-active-class=&quot;transition-transform duration-[.5s]&quot;
    leave-active-class=&quot;transition-transform duration-[.5s]&quot;
  &gt;
    &lt;div
      v-if=&quot;!dashboardProposalFiltersVisible &amp;&amp; !isMobileViewport()&quot;
      class=&quot;fixed right-0 top-[4.3rem] z-1 bg-white px-5 shadow-md&quot;
      :style=&quot;[\`left: \${sidebarWidth}\`]&quot;
    &gt;
      &lt;slot :is-floating=&quot;true&quot; /&gt;
    &lt;/div&gt;
  &lt;/transition&gt;

  &lt;slot
    v-if=&quot;dashboardProposalFiltersVisible || isMobileViewport()&quot;
    :is-floating=&quot;false&quot;
  /&gt;
&lt;/template&gt;
  
\u5206\u6790:  
\u4E0A\u9762\u7684 v-slot=&quot;slotProps&quot; \u4F5C\u7528\u662F\uFF0C\u901A\u8FC7 slotProps \u83B7\u53D6\u7EC4\u4EF6\u81EA\u8EAB\u5B9A\u4E49\u7684 slot \u5C5E\u6027(\u6709\u4E2A\u524D\u63D0\uFF0C\u5FC5\u987B\u662F\u53EF\u4EE5\u5C55\u793A\u7684slot), \u5982\u679C\u6709\u591A\u4E2Aslot, \u53EF\u4EE5\u83B7\u53D6\u6BCF\u4E2Aslot\u7684\u5171\u540C\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u83B7\u53D6\u5404\u81EA\u7279\u6709\u7684\u5C5E\u6027, \u7136\u540E\u62FF\u5230\u8FD9\u4E2A\u5C5E\u6027\u5728\u540E\u9762\u7684\u4EE3\u7801\u91CC\u4F7F\u7528\uFF0C\u5982 :is-floating=&quot;slotProps.isFloating&quot;, \u8FD9\u79CD\u573A\u666F\u53EA\u6709\u5728 \u53EA\u6709default slot\u7684\u65F6\u5019\u624D\u80FD\u8FD9\u4E48\u7528,\u5982\u4E0B\u8865\u5145\u8BF4\u660E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u901A\u8FC7slot\u5224\u65AD\u7EC4\u4EF6\u5B9A\u4E49\u7684slot\u4F7F\u7528\u60C5\u51B5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7EC4\u4EF6
...
...
//ts
const slots = defineSlots&lt;{
  default: () =&gt; void;
  loader: () =&gt; void;
  noData: () =&gt; void;
  footer: () =&gt; void;
  footerLeft: () =&gt; void;
  footerRight: () =&gt; void;
  pagination: () =&gt; void;
}&gt;();

const hasAnyFooterSlots = computed(() =&gt; {
  return (
    !!slots.footer ||
    !!slots.footerLeft ||
    !!slots.footerRight ||
    !!slots.pagination
  );
});
  
//\u9875\u9762\u4FE1\u606F
&lt;slot
      v-if=&quot;hasAnyFooterSlots&quot;
      name=&quot;footer&quot;
    &gt;
      &lt;div
        class=&quot;mt-11 flex w-full flex-wrap items-center justify-center gap-2 text-sm empty:hidden lg:min-h-16&quot;
      &gt;
        &lt;div
          v-if=&quot;$slots.footerLeft&quot;
          class=&quot;flex flex-wrap items-center justify-center gap-2 lg:mr-auto&quot;
        &gt;
          &lt;slot name=&quot;footerLeft&quot; /&gt;
        &lt;/div&gt;

        &lt;div
          v-if=&quot;$slots.footerRight || $slots.pagination&quot;
          class=&quot;flex flex-wrap items-center justify-center gap-2 lg:ml-auto&quot;
        &gt;
          &lt;slot name=&quot;footerRight&quot;&gt;
            &lt;slot
              v-if=&quot;hasTableData&quot;
              name=&quot;pagination&quot;
            /&gt;
          &lt;/slot&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/slot&gt;
...
...
  
\u5206\u6790:
\u4E0A\u9762\u7684 defineSlots \u7528\u6765\u5B9A\u4E49\u5F53\u524D\u7EC4\u4EF6\u5185\u6240\u6709\u7684 slot\u4FE1\u606F\uFF0C\u7136\u540E\u53EF\u4EE5\u901A\u8FC7 slots \u83B7\u53D6\u6307\u5B9A\u7684slot, \u7528\u6765\u505A\u5224\u65AD\uFF0C\u6BD4\u5982\u8BA1\u7B97\u5C5E\u6027 hasAnyFooterSlots\uFF0C\u4EE5\u53CA\u540E\u9762\u7684\u4EE3\u7801\u91CC\u4F7F\u7528 v-if=&quot;$slots.footerLeft&quot; \u8FDB\u884C\u52A8\u6001\u5224\u65AD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u65B0\u6D4B\u8BD5\u8868\u660E\uFF0C\u8FD8\u9700\u8981\u6CE8\u610F\u5982\u4E0B\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vue3\u4E2D v-slot=&quot;slotProps&quot; \u7684\u7528\u6CD5:

\`v-slot\`\u6307\u4EE4\u662FVue 3\u4E2D\u7528\u4E8E\u63A5\u6536\u63D2\u69FD\u5185\u5BB9\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u5F53\u4E00\u4E2A\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u5230\u5B83\u7684\u63D2\u69FD\u65F6,\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\`v-slot\`\u6765\u8BBF\u95EE\u8FD9\u4E9B\u6570\u636E\u3002

\u8FD9\u91CC\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u8BF4\u660E\u5B83\u7684\u7528\u6CD5:

\`\`\`vue
&lt;!-- \u7236\u7EC4\u4EF6 --&gt;
&lt;template&gt;
  &lt;ChildComponent&gt;
    &lt;template v-slot=&quot;slotProps&quot;&gt;
      {{ slotProps.item }}
    &lt;/template&gt;
  &lt;/ChildComponent&gt;
&lt;/template&gt;

&lt;!-- \u5B50\u7EC4\u4EF6 (ChildComponent) --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;slot :item=&quot;{ name: &#39;Vue 3&#39;, version: &#39;3.0&#39; }&quot;&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D:</p><ol><li><p>\u5B50\u7EC4\u4EF6(<code>ChildComponent</code>)\u5B9A\u4E49\u4E86\u4E00\u4E2A\u63D2\u69FD,\u5E76\u901A\u8FC7<code>:item</code>\u5C5E\u6027\u5411\u63D2\u69FD\u4F20\u9012\u4E86\u4E00\u4E2A\u5BF9\u8C61\u3002</p></li><li><p>\u7236\u7EC4\u4EF6\u4F7F\u7528<code>v-slot=&quot;slotProps&quot;</code>\u6765\u63A5\u6536\u8FD9\u4E2A\u4F20\u9012\u7684\u6570\u636E\u3002<code>slotProps</code>\u662F\u4E00\u4E2A\u5305\u542B\u6240\u6709\u63D2\u69FD\u5C5E\u6027\u7684\u5BF9\u8C61\u3002</p></li><li><p>\u7136\u540E,\u6211\u4EEC\u53EF\u4EE5\u5728\u7236\u7EC4\u4EF6\u4E2D\u901A\u8FC7<code>slotProps.item</code>\u6765\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E\u3002</p></li></ol><p><code>v-slot</code>\u6307\u4EE4\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u7528\u6CD5:</p><ol><li><p>\u5177\u540D\u63D2\u69FD:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>headerProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ headerProps.title }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u89E3\u6784\u63D2\u69FD prop:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ item }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ item.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7F29\u5199\u8BED\u6CD5 (#):</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ item }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ item.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>\u8FD9\u5C31\u662F<code>v-slot=&quot;slotProps&quot;</code>\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u3002\u5B83\u5141\u8BB8\u6211\u4EEC\u5728\u4F7F\u7528\u7EC4\u4EF6\u65F6,\u7075\u6D3B\u5730\u63A5\u6536\u548C\u4F7F\u7528\u7EC4\u4EF6\u4F20\u9012\u7ED9\u63D2\u69FD\u7684\u6570\u636E\u3002</p><p>\u8FD8\u6709\u4E00\u79CD\u975E\u5E38\u7279\u6B8A\u7684\u7528\u6CD5:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- \u7236\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    //\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u62FF\u5230\u5B50\u7EC4\u4EF6\u4E2D slot \u5C5E\u6027\u7684\u503C\uFF0C\u5728\u8C03\u7528\u5B50\u7EC4\u4EF6\u91CC\u9762\u7684\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528
    {{ slotProps.item }}

    // \u5982\u679C\u53C8\u8C03\u7528\u4E86\u5176\u5B83\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u628A slotProps.item \u4F20\u9012\u5230 \u5176\u5B83\u7EC4\u4EF6\u7684props\u91CC\u9762

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ChildComponent</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u5B50\u7EC4\u4EF6 (ChildComponent) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ name: <span class="token punctuation">&#39;</span>Vue 3<span class="token punctuation">&#39;</span>, version: <span class="token punctuation">&#39;</span>3.0<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0A\u9762\u8FD9\u79CD\u9002\u7528\u4E8E\uFF0C\u5B50\u7EC4\u4EF6\u53EA\u6709\u4E00\u4E2A default solt \u7684\u60C5\u51B5\uFF0C\u5E76\u4E14\u8FD9\u4E2Adefault slot \u6CA1\u6709\u540D\u79F0\uFF0C\u5982\u679C\u5B50\u7EC4\u4EF6\u6709\u591A\u4E2Aslot, \u90A3\u4E48\u4E0A\u9762\u7684\u5199\u6CD5\u5C31\u4F1A\u62A5\u9519: Codegen node is missing for element/if/for node. Apply appropriate transforms first.
\u5E76\u4E14 slotProps \u53EF\u4EE5\u6362\u6210\u4EFB\u4F55\u6709\u610F\u4E49\u7684\u540D\u79F0\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684 headerProps\uFF0C\u8FD9\u53EA\u662F\u4E00\u4E2A\u540D\u79F0.
  
\u6CE8\u610F:  
1&gt; \u7236\u7EC4\u4EF6\u901A\u8FC7 props \u5411\u5B50\u7EC4\u4EF6\u4F20\u503C(\u5305\u62EC\u5B50\u7EC4\u4EF6\u4E2D\u7684 slot\u7684\u53C2\u6570\u503C)  
2&gt; \u5B50\u7EC4\u4EF6\u4E2D\u7684 slot, \u53EF\u4EE5\u901A\u8FC7 \u4E0A\u9762\u7684\u4E09\u79CD v-slot \u7528\u6CD5\u7ED9\u7236\u7EC4\u4EF6\u4F20\u503C\uFF0C\u6CE8\u610F\uFF1A\u4E0D\u80FD\u76F4\u63A5\u5728 &lt;template&gt; \u91CC\u7ED9slot \u4F20\u503C\uFF0C\u56E0\u4E3A\u53EA\u80FD\u901A\u8FC7 slot \u7ED9\u7236\u7EC4\u4EF6\u4F20\u503C\uFF0C\u8FD9\u4E2A\u662F\u5355\u5411\u7684. \u8FD9\u4E2A\u95EE\u9898\u56F0\u6270\u4E86\u6211\u5F88\u4E45\uFF0C\u6211\u53D1\u73B0\u662F\u6211\u60F3\u7684\u7B80\u5355\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[i];function o(d,u){return s(),e("div",null,l)}var c=n(a,[["render",o],["__file","vue3\u4E4Bslot\u7684\u62D3\u5C55.html.vue"]]);export{c as default};
