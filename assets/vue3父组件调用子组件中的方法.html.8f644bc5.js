import{_ as e,o as n,c as i,g as l}from"./app.66ae8700.js";const d={},s=l(`<p>vue3\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6211\u5728\u5B50\u7EC4\u4EF6\u91CC\u5B9A\u4E49\u7684 const someMethod = () =&gt; {} \u53EF\u4EE5\u88AB\u8C03\u7528\u5417
\u5728\u7EC4\u5408\u5F0FAPI\u4E2D,\u5982\u679C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4EC5\u4EC5\u662F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5E38\u91CF\u6216\u65B9\u6CD5 const someMethod = () =&gt; {}\uFF0C\u90A3\u4E48\u8BE5\u65B9\u6CD5\u662F\u65E0\u6CD5\u88AB\u7236\u7EC4\u4EF6\u76F4\u63A5\u8C03\u7528\u7684\u3002
\u8FD9\u662F\u56E0\u4E3A\u5728\u7EC4\u5408\u5F0FAPI\u4E2D\uFF0C\u5B50\u7EC4\u4EF6\u9700\u8981\u901A\u8FC7 defineExpose \u4E3B\u52A8\u66B4\u9732\u51FA\u9700\u8981\u7ED9\u5916\u90E8\u8BBF\u95EE\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u3002\u5982\u679C\u6CA1\u6709\u4F7F\u7528 defineExpose\uFF0C\u90A3\u4E48\u5B50\u7EC4\u4EF6\u5185\u90E8\u5B9A\u4E49\u7684\u5E38\u91CF\u3001\u65B9\u6CD5\u7B49\u90FD\u662F\u79C1\u6709\u7684\uFF0C\u5916\u90E8\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u3002
\u6240\u4EE5\uFF0C\u4E3A\u4E86\u8BA9\u7236\u7EC4\u4EF6\u53EF\u4EE5\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8FD9\u6837\u505A\uFF1A
  
&lt;script setup&gt;
const someMethod = () =&gt; {
  console.log(&#39;Child method called&#39;)
}
  
// \u4F7F\u7528defineExpose\u5C06someMethod\u66B4\u9732\u7ED9\u5916\u90E8
defineExpose({
  someMethod
})
&lt;/script&gt;
  
\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 defineExpose \u51FD\u6570\uFF0C\u5C06 someMethod \u65B9\u6CD5\u66B4\u9732\u7ED9\u4E86\u5916\u90E8\u3002\u8FD9\u6837\uFF0C\u7236\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u901A\u8FC7\u6A21\u677Fref\u6216\u8005\u6E32\u67D3\u5668refs\u6765\u8C03\u7528\u8BE5\u65B9\u6CD5\u4E86\u3002
\u5982\u679C\u5B50\u7EC4\u4EF6\u4E2D\u6709\u591A\u4E2A\u9700\u8981\u66B4\u9732\u7ED9\u5916\u90E8\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06\u5B83\u4EEC\u4F5C\u4E3A\u5BF9\u8C61\u7684\u5C5E\u6027\u4F20\u9012\u7ED9 defineExpose\uFF1A
defineExpose({
  someMethod,
  someData,
  ...
})
  
Vue3\u7EC4\u5408\u5F0FAPI \u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u7684\u65B9\u6CD5:
&lt;template&gt;
  &lt;child-component ref=&quot;childComponent&quot; /&gt;
  &lt;button @click=&quot;callChildMethod&quot;&gt;Call Child Method&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import ChildComponent from &#39;./ChildComponent.vue&#39;
import { ref, onMounted } from &#39;vue&#39;

const childComponent = ref(null)

const callChildMethod = () =&gt; {
  childComponent.value.someMethod()
}

onMounted(() =&gt; {
  // \u5728mounted\u94A9\u5B50\u4E2D,childComponent.value\u5DF2\u7ECF\u662F\u5B50\u7EC4\u4EF6\u7684\u5B9E\u4F8B
  console.log(childComponent.value)
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[s];function t(c,o){return n(),i("div",null,v)}var a=e(d,[["render",t],["__file","vue3\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5.html.vue"]]);export{a as default};
