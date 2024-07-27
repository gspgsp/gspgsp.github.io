import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},t=s(`<p>vue3\u4E0B\u4F7F\u7528ref\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5\u7684\u65F6\u5019\u5BF9ts\u7C7B\u578B\u7684\u5224\u65AD:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//paraernt.vue\u4E0B\u8C03\u7528\u5B50\u7EC4\u4EF6 UserDashboardEventSeriesTable.vue

const eventSeriesTable = ref&lt;InstanceType&lt;
  typeof UserDashboardEventSeriesTable
&gt; | null&gt;(null);

&lt;UserDashboardEventSeriesTable
        ref=&quot;eventSeriesTable&quot;
        :query-content=&quot;search&quot;
      /&gt;
\u5BF9\u4E8E eventSeriesTable \u8FD9\u4E2A\u5E38\u91CF\uFF0C\u6211\u5F00\u59CB\u662F\u8FD9\u6837\u5B9A\u4E49\u7C7B\u578B\u7684:
interface ChildComponentMethod {
  getEventSeriesItems: () =&gt; void;
}

\u7136\u540E:
const eventSeriesTable = ref&lt;ChildComponentMethod | null&gt;(null);

\u4F46\u662F\u540E\u6765\uFF0C\u53D1\u73B0\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 typeof \u83B7\u53D6\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u5F53\u7136\u4E3A\u4E86\u66F4\u5B89\u5168\uFF0C\u53EF\u4EE5\u901A\u8FC7 InstanceType \u5B9E\u73B0

\u5B98\u65B9\u6587\u6863:https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[t];function d(v,a){return n(),i("div",null,r)}var u=e(l,[["render",d],["__file","vue3\u4E0B\u4F7F\u7528ref\u8C03\u7528\u5B50\u7EC4\u4EF6\u65B9\u6CD5\u7684\u65F6\u5019\u5BF9ts\u7C7B\u578B\u7684\u5224\u65AD.html.vue"]]);export{u as default};
