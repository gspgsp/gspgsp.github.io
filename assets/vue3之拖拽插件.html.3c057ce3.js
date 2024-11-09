import{_ as e,o as n,c as i,g as l}from"./app.66ae8700.js";const s={},d=l(`<p>vue3\u4E4B\u62D6\u62FD\u63D2\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B89\u88C5: npm install vue-draggable-plus
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u5B9E\u73B0\u8868\u683C\u7684\u90E8\u5206\u5217\u62D6\u62FD\uFF0C\u800C\u4E0D\u662F\u6240\u6709\u5217\uFF0C\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u5904\u7406:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5141\u8BB8\u90E8\u5206td \u62D6\u62FD\uFF0C\u800C\u4E0D\u5FC5\u6574\u884C\u90FD\u62D6\u62FD
import { VueDraggable } from &quot;vue-draggable-plus&quot;;
  
&lt;VueDraggable
  v-model=&quot;addonsList&quot;
  target=&quot;.handle-addons&quot;
  filter=&quot;.unable-drag&quot;
&gt;
  &lt;AppTable class=&quot;w-full&quot;&gt;
    &lt;thead&gt;
      &lt;tr class=&quot;h-12&quot;&gt;
        &lt;AppTableHeading
          class=&quot;w-[35rem]&quot;
          title=&quot;Name&quot;
        /&gt;
        &lt;AppTableHeading
          class=&quot;w-[12.5rem]&quot;
          title=&quot;Price (CHF)&quot;
        /&gt;
        &lt;AppTableHeading
          class=&quot;w-[12.5rem]&quot;
          title=&quot;Issued&quot;
        /&gt;
        &lt;AppTableHeading
          class=&quot;w-[28rem]&quot;
          title=&quot;Available to&quot;
        /&gt;
        &lt;AppTableHeading
          class=&quot;w-[12.5rem]&quot;
          title=&quot;Action&quot;
        /&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody class=&quot;handle-addons text-xs&quot;&gt;
      &lt;tr
        v-for=&quot;addons in addonsList&quot;
        :key=&quot;\`\${addons.name}_\${addons.id}\`&quot;
        class=&quot;select-text&quot;
      &gt;
        &lt;td&gt;
          {{ addons.name }}
        &lt;/td&gt;
        &lt;td class=&quot;unable-drag&quot;&gt;
          {{ addons.price }}
        &lt;/td&gt;
        &lt;td class=&quot;unable-drag&quot;&gt;{{ addons.issued }}&lt;/td&gt;
        &lt;td class=&quot;unable-drag&quot;&gt;
          {{ addons.availableTo }}
        &lt;/td&gt;
        &lt;td class=&quot;unable-drag&quot;&gt;
          &lt;EventSettingsRegistrationTicketsAction
            :id=&quot;addons.id&quot;
            @edit=&quot;showEditAddons&quot;
            @delete=&quot;showDeleteAddons&quot;
          /&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/AppTable&gt;
&lt;/VueDraggable&gt;
  
\u4E3B\u8981\u662F\u901A\u8FC7 filter \u5C5E\u6027\u5B9A\u4E49\u7684class\u6765\u6392\u9664; \u540C\u65F6\u7ED9\u6BCF\u4E2Atr\u6DFB\u52A0 class=&quot;select-text&quot; , \u8FD9\u6837\u53EF\u4EE5\u9009\u4E2Dtd\u4E2D\u7684\u6587\u5B57\uFF0C\u5426\u5219\u9009\u4E0D\u4E86\uFF0C\u4F46\u662F\u548C filter \u4E00\u8D77\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4F1A\u53D1\u73B0\uFF0C\u53EA\u6709\u53EF drag \u7684\u5143\u7D20\u624D\u80FD\u88AB\u9009\u4E2D\uFF0C\u88AB\u8FC7\u6EE4\u7684\u8FD8\u662F\u4E0D\u80FD\u88AB\u9009\u4E2D\uFF0C\u975E\u5E38\u86CB\u75BC.
  
\u5173\u4E8E vue-draggable-plus \u63D2\u4EF6\u7684\u51E0\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u53C2\u8003\uFF0C\u867D\u7136\u4E0D\u662F\u4E00\u4E2A\u5305\uFF0C\u4F46\u662F\u90FD\u7528\u4E86sortable.js:
https://github.com/SortableJS/Sortable  //\u8FD9\u91CC\u9762\u4E5F\u6709\u4ECB\u7ECD
  
\u7ED3\u8BBA\uFF1A
1&gt;\u65E0\u8BBA\u54EA\u79CDdrag\u63D2\u4EF6\uFF0C\u6700\u540E\u90FD\u662F sortable.js, \u5E76\u4E14 vuedraggable@next \u662F sortable.js\u7684 vue3\u5B9E\u73B0\u65B9\u5F0F\uFF0C \u8FD9\u4E2A vue-draggable-plus \u6587\u6863\u8BF4 sortable.js\u4E0D\u652F\u6301vue3\u662F\u9519\u8BEF\u7684
2&gt;select-text \u5C5E\u6027\u8FD8\u662F\u6CA1\u6709\u5728 \u4E0D\u662Fdrag \u5143\u7D20\u4E0A\u5B9E\u73B0\uFF0C\u600E\u4E48\u6D4B\u8BD5\u90FD\u4E0D\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u751F\u7684drag\u5E93:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://interactjs.io/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),t=[d];function a(v,u){return n(),i("div",null,t)}var c=e(s,[["render",a],["__file","vue3\u4E4B\u62D6\u62FD\u63D2\u4EF6.html.vue"]]);export{c as default};
