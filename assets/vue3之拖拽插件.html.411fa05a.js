import{_ as e,o as n,c as i,g as l}from"./app.d66d8774.js";const s={},d=l(`<p>vue3\u4E4B\u62D6\u62FD\u63D2\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B89\u88C5: npm install vue-draggable-plus
\u4F7F\u7528:
&lt;template&gt;
    &lt;VueDraggable ref=&quot;el&quot; v-model=&quot;list&quot;&gt;
      &lt;div v-for=&quot;item in list&quot; :key=&quot;item.id&quot;&gt;
        {{ item.name }}
      &lt;/div&gt;
    &lt;/VueDraggable&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { VueDraggable } from &#39;vue-draggable-plus&#39;

const list = ref([
  {
    name: &#39;Joao&#39;,
    id: 1
  },
  {
    name: &#39;Jean&#39;,
    id: 2
  },
  {
    name: &#39;Johanna&#39;,
    id: 3
  },
  {
    name: &#39;Juan&#39;,
    id: 4
  }
])
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u63D2\u4EF6\u975E\u5E38\u597D\u7528\uFF0C\u53EA\u8981\u5305\u88F9\u4F4F\u76EE\u6807\u5185\u5BB9\uFF0C\u5373\u53EF\u5B9E\u73B0\u62D6\u62FD\u529F\u80FD</p><p>\u6392\u5E8F\u4E8B\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import {
  VueDraggable,
  type DraggableEvent,
  type SortableEvent,
} from &quot;vue-draggable-plus&quot;;

const onSort = async (event: SortableEvent) =&gt; {
  const draggableEvent = event as DraggableEvent;
  console.log(&quot;event id is:&quot;, draggableEvent.data.id);
  console.log(&quot;event sort is:&quot;, draggableEvent.newIndex);
};


&lt;VueDraggable
            v-model=&quot;sessionList&quot;
            class=&quot;mb-8 flex flex-col gap-xl&quot;
            @sort=&quot;onSort&quot;
&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue-draggable-plus\u53EF\u4EE5\u5B9A\u4E49\u62D6\u62FD\u70B9\uFF0C\u800C\u4E0D\u5FC5\u6574\u4E2A\u9875\u9762\u751F\u6548:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://vue-draggable-plus.pages.dev/demo/handle/
  
\u4E5F\u53EF\u4EE5\u505A\u8868\u683C\u62D6\u62FD:
https://vue-draggable-plus.pages.dev/demo/target-container/
  
\u5178\u578B issue:
https://github.com/Alfred-Skyblue/vue-draggable-plus/issues/86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v=[d];function a(t,u){return n(),i("div",null,v)}var c=e(s,[["render",a],["__file","vue3\u4E4B\u62D6\u62FD\u63D2\u4EF6.html.vue"]]);export{c as default};
