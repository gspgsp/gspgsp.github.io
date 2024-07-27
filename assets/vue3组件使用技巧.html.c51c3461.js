import{_ as i,o as e,c as l,g as n}from"./app.6e4bf74b.js";const s={},d=n(`<p>vue3\u7EC4\u4EF6\u4F7F\u7528\u6280\u5DE7:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u6709\u5982\u4E0B\u81EA\u7EC4\u4EF6\uFF0C\u5047\u5982\u4E3A Child.vue
withDefaults(
  defineProps&lt;{
    isOverflowVisible?: boolean;
  }&gt;(),
  {
    isOverflowVisible: false,
  }
);
  
  &lt;TModal
    v-model=&quot;isModalVisible&quot;
    :max-width
    class=&quot;app-modal [&amp;_.m-modal\\_\\_panel]:gap-md&quot;
    :class=&quot;{
      &#39;app-modal--visible&#39;: isOverflowVisible,
    }&quot;
    :hide-close-icon
    :persistent
  &gt;
  ...
  ...
  &lt;/TModal&gt;

  &lt;style lang=&quot;scss&quot;&gt;
    .app-modal {
      &amp;--visible {
        .m-modal__panel {
          @apply overflow-visible;
        }
      }
    }
&lt;/style&gt;
  
//\u7236\u7EC4\u4EF6\u4F7F\u7528
&lt;template&gt;

&lt;Child is-overflow-visible&gt;

&lt;/Child&gt;

&lt;/template&gt;
  
\u8FD9\u91CC\u76F4\u63A5\u4F7F\u7528 is-overflow-visible\uFF0C \u800C\u6CA1\u6709\u5B9A\u4E49\u76F8\u5173\u7684\u53D8\u91CF(\u6BD4\u5982\u5B9A\u4E49\u4E00\u4E2A isOverflowVisible, \u7528\u6765\u8D4B\u503C\uFF0C \u7C7B\u4F3C :is-overflow-visible=isOverflowVisible)\uFF0C\u8FD9\u6837\u7684\u8BDD\u5B50\u7EC4\u4EF6\u91CC\u7684 isOverflowVisible \u4F1A\u6E32\u67D3\u4E3A true, \u8FD9\u662F\u4E00\u4E2A\u5F88\u6709\u7528\u7684\u7EC6\u8282\uFF0C\u5BF9\u4E8E\u4E00\u4E2A bool \u7C7B\u578B\u7684 prop\uFF0C\u5982\u679C\u7236\u7EC4\u4EF6\u6CA1\u6709\u901A\u8FC7\u5C5E\u6027\u8D4B\u503C\uFF0C\u90A3\u4E48\u4F1A\u88AB\u718F\u67D3\u4E3A true.
  
\u4E0A\u9762\u7684\u4F8B\u5B50\u8FD8\u6709\u4E00\u4E2A\u7EC6\u8282\uFF0C\u5C31\u662F:
:class=&quot;{
      &#39;app-modal--visible&#39;: isOverflowVisible,
    }&quot;
  
\u8FD9\u4E2A\u4E3B\u8981\u662F\u52A8\u6001\u52A0\u8F7D app-modal--visible \u8FD9\u4E2A\u7C7B\uFF0C\u6CE8\u610F\u547D\u540D\uFF0C\u6709\u4E2A\u524D\u7F00 app-modal, \u540E\u9762\u662F --visible, \u8FD9\u79CD\u98CE\u683C\u7684\u547D\u540D\uFF0C\u6709\u4E2A\u597D\u5904\u662F\uFF0C\u5728scss\u6587\u4EF6\u91CC\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u6837\u5F0F\u5D4C\u5957\uFF0C\u5982\u4E0B:
  &lt;style lang=&quot;scss&quot;&gt;
    .app-modal {
      &amp;--visible {// \u8FD9\u91CC\u867D\u7136\u6709\u4E24\u7EA7\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u8FD8\u662F\u6539\u7684\u7236\u7EA7\u6837\u5F0F, \u8FD9\u4E2A\u4E3B\u8981\u662F\u7528\u4E8E\u52A8\u6001\u4FEE\u6539\u540C\u7EA7\u5143\u7D20\u7684\u6837\u5F0F\u7684\u65F6\u5019\uFF1B \u4E5F\u53EF\u4EE5\u7528\u4E8E\u5B50\u5143\u7D20\uFF0C \u5F53\u5B50\u5143\u7D20\u4E5F\u4EE5\u76F8\u540C\u7684\u524D\u7F00\u5F00\u59CB\u7684\u8BDD\uFF0C\u5728\u6837\u5F0F\u91CC\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8FC7 &amp; \u5F00\u5934\u5B9A\u4E49\u6837\u5F0F
        .m-modal__panel {
          @apply overflow-visible;
        }
      }
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,m){return e(),l("div",null,v)}var u=i(s,[["render",a],["__file","vue3\u7EC4\u4EF6\u4F7F\u7528\u6280\u5DE7.html.vue"]]);export{u as default};
