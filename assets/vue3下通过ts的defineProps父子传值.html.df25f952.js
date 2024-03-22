import{_ as n,o as e,c as i,g as t}from"./app.b04686bd.js";const l={},s=t(`<p>\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C: defineProps \u662F Vue3 \u4E2D\u4E00\u79CD\u65B0\u7684\u7EC4\u4EF6\u6570\u636E\u4F20\u9012\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5728\u5B50\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u63A5\u6536\u54EA\u4E9B\u7236\u7EC4\u4EF6\u7684 props\u3002\u5F53\u7236\u7EC4\u4EF6\u7684 props \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5B50\u7EC4\u4EF6\u4E5F\u4F1A\u968F\u4E4B\u54CD\u5E94\u3002 \u5728\u5B50\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u4F7F\u7528 defineProps \u58F0\u660E\u8BE5\u7EC4\u4EF6\u9700\u8981\u63A5\u6536\u7684 props\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7236\u7EC4\u4EF6
&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import ChildComponent from &#39;./ChildComponent.vue&#39;

const count = ref(0)
const add = () =&gt; {
  count.value++
}
&lt;/script&gt;
&lt;template&gt;
  &lt;button @click=&quot;add&quot;&gt;+&lt;/button&gt;
  &lt;ChildComponent :count=&quot;count&quot;&gt;&lt;/ChildComponent&gt;
&lt;/template&gt;
  
//\u5B50\u7EC4\u4EF6
&lt;script setup lang=&quot;ts&quot;&gt;
const props = defineProps({
  count: Number
})
&lt;/script&gt;
&lt;template&gt;
  &lt;div&gt;
    {{ props.count }}
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u7EC4\u4EF6\u5411\u592B\u7EC4\u4EF6\u4F20\u503C: defineEmits\u7528\u4E8E\u5728setup\u4E2D\u6CE8\u518C\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u662F\u4E00\u4E2A\u5B8F\u51FD\u6570\uFF0C\u4F7F\u7528\u65F6\u65E0\u9700\u5BFC\u5165 defineEmits\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5143\u7D20\u4E3A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D defineEmits\u8FD4\u56DE\u4E00\u4E2A\u89E6\u53D1\u5668\uFF0C\u7528\u4E8E\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u5177\u4F53\u4E8B\u4EF6\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u4F20\u9012\u7684\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7236\u7EC4\u4EF6
&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import ChildComponent from &#39;./ChildComponent.vue&#39;

const count = ref(0)
const changeFn = (val: number) =&gt; {
  console.log(val)
  count.value = count.value + val
}
&lt;/script&gt;
&lt;template&gt;
  &lt;ChildComponent :count=&quot;count&quot; @add=&quot;changeFn&quot;&gt;&lt;/ChildComponent&gt;
&lt;/template&gt;
  
//\u5B50\u7EC4\u4EF6
&lt;script setup lang=&quot;ts&quot;&gt;
const props = defineProps({
  count: Number
})
const emit = defineEmits([&#39;add&#39;])
const change = () =&gt; {
  emit(&#39;add&#39;, 1)
}
&lt;/script&gt;
&lt;template&gt;
  &lt;div&gt;
    {{ props.count }}
  &lt;/div&gt;
  &lt;button @click=&quot;change&quot;&gt;+&lt;/button&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u7528\u7684\u6700\u591A\u7684\uFF0C\u8FD8\u662Fv-model\u53CC\u5411\u7ED1\u5B9A\u7684\u95EE\u9898\uFF0C\u89E3\u51B3\u529E\u6CD5\u5C31\u662FdefineProps\u914D\u5408defineEmits\u4F7F\u7528\uFF0C\u5B9E\u73B0\u7236\u5B50\u76F8\u4E92\u8D4B\u503C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F8\u5173\u4EE3\u7801\u5982\u4E0B:</p>`,7),d=[s];function v(a,u){return e(),i("div",null,d)}var r=n(l,[["render",v],["__file","vue3\u4E0B\u901A\u8FC7ts\u7684defineProps\u7236\u5B50\u4F20\u503C.html.vue"]]);export{r as default};
