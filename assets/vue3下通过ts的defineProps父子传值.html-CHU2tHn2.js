import{_ as s,c as e,f as i,o as l}from"./app-BB_BIQV8.js";const a={};function t(p,n){return l(),e("div",null,n[0]||(n[0]=[i(`<p>父组件向子组件传值: defineProps 是 Vue3 中一种新的组件数据传递方式，可以用于在子组件中定义接收哪些父组件的 props。当父组件的 props 发生变化时，子组件也会随之响应。 在子组件中可以使用 defineProps 声明该组件需要接收的 props，示例如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//父组件</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import ChildComponent from &#39;./ChildComponent.vue&#39;</span>
<span class="line"></span>
<span class="line">const count = ref(0)</span>
<span class="line">const add = () =&gt; {</span>
<span class="line">  count.value++</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;button @click=&quot;add&quot;&gt;+&lt;/button&gt;</span>
<span class="line">  &lt;ChildComponent :count=&quot;count&quot;&gt;&lt;/ChildComponent&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">//子组件</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">const props = defineProps({</span>
<span class="line">  count: Number</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    {{ props.count }}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件向夫组件传值: defineEmits用于在setup中注册自定义事件，是一个宏函数，使用时无需导入 defineEmits接受一个数组，元素为自定义事件名 defineEmits返回一个触发器，用于触发事件，第一个参数是具体事件，第二个是传递的值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//父组件</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import ChildComponent from &#39;./ChildComponent.vue&#39;</span>
<span class="line"></span>
<span class="line">const count = ref(0)</span>
<span class="line">const changeFn = (val: number) =&gt; {</span>
<span class="line">  console.log(val)</span>
<span class="line">  count.value = count.value + val</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;ChildComponent :count=&quot;count&quot; @add=&quot;changeFn&quot;&gt;&lt;/ChildComponent&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">//子组件</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">const props = defineProps({</span>
<span class="line">  count: Number</span>
<span class="line">})</span>
<span class="line">const emit = defineEmits([&#39;add&#39;])</span>
<span class="line">const change = () =&gt; {</span>
<span class="line">  emit(&#39;add&#39;, 1)</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    {{ props.count }}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;button @click=&quot;change&quot;&gt;+&lt;/button&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实用的最多的，还是v-model双向绑定的问题，解决办法就是defineProps配合defineEmits使用，实现父子相互赋值:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">v-model cannot be used on a prop, because local prop bindings are not writable.</span>
<span class="line">Use a v-bind binding combined with a v-on listener that emits update:x event instead.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>相关代码如下:</p>`,7)]))}const c=s(a,[["render",t],["__file","vue3下通过ts的defineProps父子传值.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/vue3%E4%B8%8B%E9%80%9A%E8%BF%87ts%E7%9A%84defineProps%E7%88%B6%E5%AD%90%E4%BC%A0%E5%80%BC.html","title":"vue3下通过ts的defineProps父子传值","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3下通过ts的defineProps父子传值","description":"vue3下通过ts的defineProps父子传值"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3下通过ts的defineProps父子传值.md"}');export{c as comp,r as data};
