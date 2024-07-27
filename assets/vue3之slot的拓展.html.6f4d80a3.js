import{_ as i,o as n,c as s,g as e}from"./app.6e4bf74b.js";const l={},t=e(`<p>vue3\u4E4Bslot\u7684\u62D3\u5C55:<br> 1.\u901A\u8FC7slot\u83B7\u53D6slot\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7236\u7EC4\u4EF6
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
\u4E0A\u9762\u7684 v-slot=&quot;slotProps&quot; \u4F5C\u7528\u662F\uFF0C\u901A\u8FC7 slotProps \u83B7\u53D6\u7EC4\u4EF6\u81EA\u8EAB\u5B9A\u4E49\u7684 slot \u5C5E\u6027(\u6709\u4E2A\u524D\u63D0\uFF0C\u5FC5\u987B\u662F\u53EF\u4EE5\u5C55\u793A\u7684slot), \u5982\u679C\u6709\u591A\u4E2Aslot, \u53EF\u4EE5\u83B7\u53D6\u6BCF\u4E2Aslot\u7684\u5171\u540C\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u83B7\u53D6\u5404\u81EA\u7279\u6709\u7684\u5C5E\u6027, \u7136\u540E\u62FF\u5230\u8FD9\u4E2A\u5C5E\u6027\u5728\u540E\u9762\u7684\u4EE3\u7801\u91CC\u4F7F\u7528\uFF0C\u5982 :is-floating=&quot;slotProps.isFloating&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[t];function v(a,o){return n(),s("div",null,d)}var u=i(l,[["render",v],["__file","vue3\u4E4Bslot\u7684\u62D3\u5C55.html.vue"]]);export{u as default};
