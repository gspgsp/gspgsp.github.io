import{_ as n,c as a,f as l,o as e}from"./app-BB_BIQV8.js";const i={};function d(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<p>vue3之拖拽插件:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">安装: npm install vue-draggable-plus</span>
<span class="line">使用:</span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;VueDraggable ref=&quot;el&quot; v-model=&quot;list&quot;&gt;</span>
<span class="line">      &lt;div v-for=&quot;item in list&quot; :key=&quot;item.id&quot;&gt;</span>
<span class="line">        {{ item.name }}</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/VueDraggable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import { VueDraggable } from &#39;vue-draggable-plus&#39;</span>
<span class="line"></span>
<span class="line">const list = ref([</span>
<span class="line">  {</span>
<span class="line">    name: &#39;Joao&#39;,</span>
<span class="line">    id: 1</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    name: &#39;Jean&#39;,</span>
<span class="line">    id: 2</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    name: &#39;Johanna&#39;,</span>
<span class="line">    id: 3</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    name: &#39;Juan&#39;,</span>
<span class="line">    id: 4</span>
<span class="line">  }</span>
<span class="line">])</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个插件非常好用，只要包裹住目标内容，即可实现拖拽功能</p><p>排序事件:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import {</span>
<span class="line">  VueDraggable,</span>
<span class="line">  type DraggableEvent,</span>
<span class="line">  type SortableEvent,</span>
<span class="line">} from &quot;vue-draggable-plus&quot;;</span>
<span class="line"></span>
<span class="line">const onSort = async (event: SortableEvent) =&gt; {</span>
<span class="line">  const draggableEvent = event as DraggableEvent;</span>
<span class="line">  console.log(&quot;event id is:&quot;, draggableEvent.data.id);</span>
<span class="line">  console.log(&quot;event sort is:&quot;, draggableEvent.newIndex);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;VueDraggable</span>
<span class="line">            v-model=&quot;sessionList&quot;</span>
<span class="line">            class=&quot;mb-8 flex flex-col gap-xl&quot;</span>
<span class="line">            @sort=&quot;onSort&quot;</span>
<span class="line">&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue-draggable-plus可以定义拖拽点，而不必整个页面生效:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">https://vue-draggable-plus.pages.dev/demo/handle/</span>
<span class="line">  </span>
<span class="line">也可以做表格拖拽:</span>
<span class="line">https://vue-draggable-plus.pages.dev/demo/target-container/</span>
<span class="line">  </span>
<span class="line">典型 issue:</span>
<span class="line">https://github.com/Alfred-Skyblue/vue-draggable-plus/issues/86</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想实现表格的部分列拖拽，而不是所有列，可以按照如下方式处理:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">允许部分td 拖拽，而不必整行都拖拽</span>
<span class="line">import { VueDraggable } from &quot;vue-draggable-plus&quot;;</span>
<span class="line">  </span>
<span class="line">&lt;VueDraggable</span>
<span class="line">  v-model=&quot;addonsList&quot;</span>
<span class="line">  target=&quot;.handle-addons&quot;</span>
<span class="line">  filter=&quot;.unable-drag&quot;</span>
<span class="line">&gt;</span>
<span class="line">  &lt;AppTable class=&quot;w-full&quot;&gt;</span>
<span class="line">    &lt;thead&gt;</span>
<span class="line">      &lt;tr class=&quot;h-12&quot;&gt;</span>
<span class="line">        &lt;AppTableHeading</span>
<span class="line">          class=&quot;w-[35rem]&quot;</span>
<span class="line">          title=&quot;Name&quot;</span>
<span class="line">        /&gt;</span>
<span class="line">        &lt;AppTableHeading</span>
<span class="line">          class=&quot;w-[12.5rem]&quot;</span>
<span class="line">          title=&quot;Price (CHF)&quot;</span>
<span class="line">        /&gt;</span>
<span class="line">        &lt;AppTableHeading</span>
<span class="line">          class=&quot;w-[12.5rem]&quot;</span>
<span class="line">          title=&quot;Issued&quot;</span>
<span class="line">        /&gt;</span>
<span class="line">        &lt;AppTableHeading</span>
<span class="line">          class=&quot;w-[28rem]&quot;</span>
<span class="line">          title=&quot;Available to&quot;</span>
<span class="line">        /&gt;</span>
<span class="line">        &lt;AppTableHeading</span>
<span class="line">          class=&quot;w-[12.5rem]&quot;</span>
<span class="line">          title=&quot;Action&quot;</span>
<span class="line">        /&gt;</span>
<span class="line">      &lt;/tr&gt;</span>
<span class="line">    &lt;/thead&gt;</span>
<span class="line">    &lt;tbody class=&quot;handle-addons text-xs&quot;&gt;</span>
<span class="line">      &lt;tr</span>
<span class="line">        v-for=&quot;addons in addonsList&quot;</span>
<span class="line">        :key=&quot;\`\${addons.name}_\${addons.id}\`&quot;</span>
<span class="line">        class=&quot;select-text&quot;</span>
<span class="line">      &gt;</span>
<span class="line">        &lt;td&gt;</span>
<span class="line">          {{ addons.name }}</span>
<span class="line">        &lt;/td&gt;</span>
<span class="line">        &lt;td class=&quot;unable-drag&quot;&gt;</span>
<span class="line">          {{ addons.price }}</span>
<span class="line">        &lt;/td&gt;</span>
<span class="line">        &lt;td class=&quot;unable-drag&quot;&gt;{{ addons.issued }}&lt;/td&gt;</span>
<span class="line">        &lt;td class=&quot;unable-drag&quot;&gt;</span>
<span class="line">          {{ addons.availableTo }}</span>
<span class="line">        &lt;/td&gt;</span>
<span class="line">        &lt;td class=&quot;unable-drag&quot;&gt;</span>
<span class="line">          &lt;EventSettingsRegistrationTicketsAction</span>
<span class="line">            :id=&quot;addons.id&quot;</span>
<span class="line">            @edit=&quot;showEditAddons&quot;</span>
<span class="line">            @delete=&quot;showDeleteAddons&quot;</span>
<span class="line">          /&gt;</span>
<span class="line">        &lt;/td&gt;</span>
<span class="line">      &lt;/tr&gt;</span>
<span class="line">    &lt;/tbody&gt;</span>
<span class="line">  &lt;/AppTable&gt;</span>
<span class="line">&lt;/VueDraggable&gt;</span>
<span class="line">  </span>
<span class="line">主要是通过 filter 属性定义的class来排除; 同时给每个tr添加 class=&quot;select-text&quot; , 这样可以选中td中的文字，否则选不了，但是和 filter 一起使用的时候，会发现，只有可 drag 的元素才能被选中，被过滤的还是不能被选中，非常蛋疼.</span>
<span class="line">  </span>
<span class="line">关于 vue-draggable-plus 插件的几个属性，可以参考，虽然不是一个包，但是都用了sortable.js:</span>
<span class="line">https://github.com/SortableJS/Sortable  //这里面也有介绍</span>
<span class="line">  </span>
<span class="line">结论：</span>
<span class="line">1&gt;无论哪种drag插件，最后都是 sortable.js, 并且 vuedraggable@next 是 sortable.js的 vue3实现方式， 这个 vue-draggable-plus 文档说 sortable.js不支持vue3是错误的</span>
<span class="line">2&gt;select-text 属性还是没有在 不是drag 元素上实现，怎么测试都不行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原生的drag库:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">https://interactjs.io/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,11)]))}const c=n(i,[["render",d],["__file","vue3之拖拽插件.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/vue3%E4%B9%8B%E6%8B%96%E6%8B%BD%E6%8F%92%E4%BB%B6.html","title":"vue3之拖拽插件","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3之拖拽插件","description":"vue3之拖拽插件"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3之拖拽插件.md"}');export{c as comp,v as data};
