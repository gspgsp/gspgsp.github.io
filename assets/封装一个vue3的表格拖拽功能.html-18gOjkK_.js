import{_ as s,c as a,f as l,o as i}from"./app-BB_BIQV8.js";const e={};function d(c,n){return i(),a("div",null,n[0]||(n[0]=[l(`<p>封装一个vue3的表格拖拽功能:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.在utils下创建dragDropManager.ts</span>
<span class="line">interface DragConfig {</span>
<span class="line">  draggableColumns?: string[]; // 可拖拽列的名称</span>
<span class="line">  undraggableRows?: number[];  // 禁止拖拽的行索引</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">export class TableDragManager&lt;T&gt; {</span>
<span class="line">  private list: T[]; // 数据源</span>
<span class="line">  private config: DragConfig; // 拖拽配置</span>
<span class="line">  private draggingIndex: number | null = null; //当前拖动元素的索引</span>
<span class="line">  private onDropCallback?: (draggedId: number, newList: any[]) =&gt; void; //回调</span>
<span class="line">  </span>
<span class="line">  constructor(list: T[], config: DragConfig) {</span>
<span class="line">    this.list = list;</span>
<span class="line">    this.config = config;</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 设置拖拽完成之后的回调方法，用于调用API，保存拖拽之后的数据</span>
<span class="line">  setOnDropCallback(callback: (draggedId: number, newList: any[]) =&gt; void) {</span>
<span class="line">    this.onDropCallback = callback;</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  onDragStart(index: number, column: string | null, event: DragEvent): void {</span>
<span class="line">    if (this.config.undraggableRows?.includes(index)) {</span>
<span class="line">      event.preventDefault();</span>
<span class="line">      return;</span>
<span class="line">    }</span>
<span class="line">  </span>
<span class="line">    if (column &amp;&amp; this.config.draggableColumns &amp;&amp; !this.config.draggableColumns.includes(column)) {</span>
<span class="line">      event.preventDefault();</span>
<span class="line">      return;</span>
<span class="line">    }</span>
<span class="line">  </span>
<span class="line">    this.draggingIndex = index;</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // targetIndex： 将要拖动到的位置的索引  event： 拖拽事件  canDrop：用于判断能否拖拽到指定位置(因为有些行不允许拖拽，也就意味着别的行也不能拖拽到对应位置)</span>
<span class="line">  onDrop(targetIndex: number, event: DragEvent, canDrop: (index: number) =&gt; boolean): void {</span>
<span class="line">    event.preventDefault();</span>
<span class="line">  </span>
<span class="line">    console.log(&quot;targetIndex is:&quot;, targetIndex);</span>
<span class="line">    console.log(&quot;draggingIndex is:&quot;, this.draggingIndex);</span>
<span class="line">  </span>
<span class="line">    if (this.draggingIndex !== null &amp;&amp; this.draggingIndex !== targetIndex &amp;&amp; canDrop(targetIndex)) {</span>
<span class="line">      const draggedItem = this.list[this.draggingIndex];</span>
<span class="line">      this.list.splice(this.draggingIndex, 1);</span>
<span class="line">      this.list.splice(targetIndex, 0, draggedItem);</span>
<span class="line">  </span>
<span class="line">      if (this.onDropCallback) {</span>
<span class="line">        this.onDropCallback(draggedItem.id, this.list);</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  </span>
<span class="line">    this.draggingIndex = null;</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  onDragOver(event: DragEvent): void {</span>
<span class="line">    event.preventDefault(); // 必须阻止默认行为以允许放置</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">2.在vue3页面test.vue调用</span>
<span class="line">1&gt;禁止部分行拖拽以及指定字段可拖拽</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { TableDragManager } from &#39;~/utils/dragDropManager&#39;;</span>
<span class="line">  </span>
<span class="line">interface TableRow {</span>
<span class="line">  id: number;</span>
<span class="line">  name: string;</span>
<span class="line">  age: number;</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">const list = ref&lt;TableRow[]&gt;([</span>
<span class="line">  { id: 1, name: &#39;Row 1&#39;, age: 25 },</span>
<span class="line">  { id: 2, name: &#39;Row 2&#39;, age: 30 },</span>
<span class="line">  { id: 3, name: &#39;Row 3&#39;, age: 35 },</span>
<span class="line">  { id: 4, name: &#39;Row 4&#39;, age: 55 },</span>
<span class="line">]);</span>
<span class="line">  </span>
<span class="line">// 配置</span>
<span class="line">const config = {</span>
<span class="line">  draggableColumns: [&#39;id&#39;], // 仅允许 ID 列拖拽</span>
<span class="line">  undraggableRows: [0,1],     // 第 0 1 行禁止拖拽 (默认按顺序禁止)</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">// 实例化拖拽管理器</span>
<span class="line">const dragManager = new TableDragManager(list.value, config);</span>
<span class="line">  </span>
<span class="line">const canDrop = (index: number) =&gt; {</span>
<span class="line">  </span>
<span class="line">  // 禁止前两行行拖拽</span>
<span class="line">  if (config.undraggableRows &amp;&amp; index &lt; config.undraggableRows.length) {</span>
<span class="line">    return false;</span>
<span class="line">  }</span>
<span class="line">  return true;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">const handleDrop = (draggedId: number, newList: any[]) =&gt; {</span>
<span class="line">  console.log(&quot;draggedId is:&quot;, draggedId);</span>
<span class="line">  console.log(&quot;newList is:&quot;, newList);</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">onMounted(() =&gt; {</span>
<span class="line">  dragManager.setOnDropCallback(handleDrop);</span>
<span class="line">});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;table&gt;</span>
<span class="line">    &lt;thead&gt;</span>
<span class="line">    &lt;tr&gt;</span>
<span class="line">      &lt;th&gt;ID&lt;/th&gt;</span>
<span class="line">      &lt;th&gt;Name&lt;/th&gt;</span>
<span class="line">      &lt;th&gt;Age&lt;/th&gt;</span>
<span class="line">    &lt;/tr&gt;</span>
<span class="line">    &lt;/thead&gt;</span>
<span class="line">    &lt;tbody&gt;</span>
<span class="line">    &lt;tr</span>
<span class="line">      v-for=&quot;(row, index) in list&quot;</span>
<span class="line">      :key=&quot;row.id&quot;</span>
<span class="line">    &gt;</span>
<span class="line">      &lt;td</span>
<span class="line">        :draggable=&quot;true&quot;</span>
<span class="line">        @dragstart=&quot;dragManager.onDragStart(index, &#39;id&#39;, $event)&quot;</span>
<span class="line">        @dragover=&quot;dragManager.onDragOver($event)&quot;</span>
<span class="line">        @drop=&quot;dragManager.onDrop(index, $event, canDrop)&quot;</span>
<span class="line">      &gt;</span>
<span class="line">        {{ row.id }}</span>
<span class="line">      &lt;/td&gt;</span>
<span class="line">      &lt;td&gt;{{ row.name }}&lt;/td&gt;</span>
<span class="line">      &lt;td&gt;{{ row.age }}&lt;/td&gt;</span>
<span class="line">    &lt;/tr&gt;</span>
<span class="line">    &lt;/tbody&gt;</span>
<span class="line">  &lt;/table&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">2&gt;常规拖拽(没有任何限制)</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { TableDragManager } from &#39;~/utils/dragDropManager&#39;;</span>
<span class="line">  </span>
<span class="line">interface TableRow {</span>
<span class="line">  id: number;</span>
<span class="line">  name: string;</span>
<span class="line">  age: number;</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">const list = ref&lt;TableRow[]&gt;([</span>
<span class="line">  { id: 1, name: &#39;Row 1&#39;, age: 25 },</span>
<span class="line">  { id: 2, name: &#39;Row 2&#39;, age: 30 },</span>
<span class="line">  { id: 3, name: &#39;Row 3&#39;, age: 35 },</span>
<span class="line">  { id: 4, name: &#39;Row 4&#39;, age: 55 },</span>
<span class="line">]);</span>
<span class="line">  </span>
<span class="line">// 配置</span>
<span class="line">const config = {</span>
<span class="line">  draggableColumns: [], // 仅允许 ID 列拖拽</span>
<span class="line">  undraggableRows: [],     // 第 0 1 行禁止拖拽 (默认按顺序禁止)</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">// 实例化拖拽管理器</span>
<span class="line">const dragManager = new TableDragManager(list.value, config);</span>
<span class="line">  </span>
<span class="line">const canDrop = (index: number) =&gt; {</span>
<span class="line"></span>
<span class="line">  // 禁止前两行行拖拽</span>
<span class="line">  if (config.undraggableRows &amp;&amp; index &lt; config.undraggableRows.length) {</span>
<span class="line">    return false;</span>
<span class="line">  }</span>
<span class="line">  return true;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">const handleDrop = (draggedId: number, newList: any[]) =&gt; {</span>
<span class="line">  console.log(&quot;draggedId is:&quot;, draggedId);</span>
<span class="line">  console.log(&quot;newList is:&quot;, newList);</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">onMounted(() =&gt; {</span>
<span class="line">  dragManager.setOnDropCallback(handleDrop);</span>
<span class="line">});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;table&gt;</span>
<span class="line">    &lt;thead&gt;</span>
<span class="line">    &lt;tr&gt;</span>
<span class="line">      &lt;th&gt;ID&lt;/th&gt;</span>
<span class="line">      &lt;th&gt;Name&lt;/th&gt;</span>
<span class="line">      &lt;th&gt;Age&lt;/th&gt;</span>
<span class="line">    &lt;/tr&gt;</span>
<span class="line">    &lt;/thead&gt;</span>
<span class="line">    &lt;tbody&gt;</span>
<span class="line">    &lt;tr</span>
<span class="line">      v-for=&quot;(row, index) in list&quot;</span>
<span class="line">      :key=&quot;row.id&quot;</span>
<span class="line">      :draggable=&quot;true&quot;</span>
<span class="line">      @dragstart=&quot;dragManager.onDragStart(index, null, $event)&quot;</span>
<span class="line">      @dragover=&quot;dragManager.onDragOver($event)&quot;</span>
<span class="line">      @drop=&quot;dragManager.onDrop(index, $event, canDrop)&quot;</span>
<span class="line">    &gt;</span>
<span class="line">      &lt;td</span>
<span class="line">      &gt;</span>
<span class="line">        {{ row.id }}</span>
<span class="line">      &lt;/td&gt;</span>
<span class="line">      &lt;td&gt;{{ row.name }}&lt;/td&gt;</span>
<span class="line">      &lt;td&gt;{{ row.age }}&lt;/td&gt;</span>
<span class="line">    &lt;/tr&gt;</span>
<span class="line">    &lt;/tbody&gt;</span>
<span class="line">  &lt;/table&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">3&gt;关于splice的使用分析</span>
<span class="line">//</span>
<span class="line">let lists = [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;];</span>
<span class="line">// 假设要把 &#39;B&#39; 移动到 &#39;D&#39; 前面</span>
<span class="line">  </span>
<span class="line">// 1. 保存 &#39;B&#39;</span>
<span class="line">const draggedItem = lists[1]; // &#39;B&#39;</span>
<span class="line">  </span>
<span class="line">// 2. 删除索引1的 &#39;B&#39;</span>
<span class="line">lists.splice(1, 1); // list 现在是 [&#39;A&#39;, &#39;C&#39;, &#39;D&#39;]</span>
<span class="line">  </span>
<span class="line">// 3. 在索引2处插入 &#39;B&#39;</span>
<span class="line">lists.splice(2, 0, draggedItem); // list 变成 [&#39;A&#39;, &#39;C&#39;, &#39;B&#39;, &#39;D&#39;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const v=s(e,[["render",d],["__file","封装一个vue3的表格拖拽功能.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/%E5%B0%81%E8%A3%85%E4%B8%80%E4%B8%AAvue3%E7%9A%84%E8%A1%A8%E6%A0%BC%E6%8B%96%E6%8B%BD%E5%8A%9F%E8%83%BD.html","title":"封装一个vue3的表格拖拽功能","lang":"en-US","frontmatter":{"sidebar":false,"title":"封装一个vue3的表格拖拽功能","description":"封装一个vue3的表格拖拽功能"},"headers":[],"git":{},"filePathRelative":"content/front/js/封装一个vue3的表格拖拽功能.md"}');export{v as comp,r as data};
