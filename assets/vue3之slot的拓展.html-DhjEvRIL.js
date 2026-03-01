import{_ as n,c as a,f as l,o as e}from"./app-BB_BIQV8.js";const i={};function t(p,s){return e(),a("div",null,s[0]||(s[0]=[l(`<p>vue3之slot的拓展:<br> 1.通过slot获取slot属性</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//父组件</span>
<span class="line">&lt;div&gt;</span>
<span class="line">    &lt;AppDashboardFloatingFilters</span>
<span class="line">      v-if=&quot;dashboardFilters&quot;</span>
<span class="line">      v-slot=&quot;slotProps&quot;</span>
<span class="line">    &gt;</span>
<span class="line">      &lt;MyDashboardEventProposalsFilters</span>
<span class="line">        v-model:search=&quot;searchModel&quot;</span>
<span class="line">        :query-params</span>
<span class="line">        :status-types=&quot;statusItems&quot;</span>
<span class="line">        :is-floating=&quot;slotProps.isFloating&quot;</span>
<span class="line">        @change-status=&quot;changeStatus&quot;</span>
<span class="line">        @change-search=&quot;changeSearch&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">    &lt;/AppDashboardFloatingFilters&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">//子组件 AppDashboardFloatingFilters.vue</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;transition</span>
<span class="line">    enter-from-class=&quot;-translate-y-[100%]&quot;</span>
<span class="line">    leave-to-class=&quot;-translate-y-[100%]&quot;</span>
<span class="line">    enter-active-class=&quot;transition-transform duration-[.5s]&quot;</span>
<span class="line">    leave-active-class=&quot;transition-transform duration-[.5s]&quot;</span>
<span class="line">  &gt;</span>
<span class="line">    &lt;div</span>
<span class="line">      v-if=&quot;!dashboardProposalFiltersVisible &amp;&amp; !isMobileViewport()&quot;</span>
<span class="line">      class=&quot;fixed right-0 top-[4.3rem] z-1 bg-white px-5 shadow-md&quot;</span>
<span class="line">      :style=&quot;[\`left: \${sidebarWidth}\`]&quot;</span>
<span class="line">    &gt;</span>
<span class="line">      &lt;slot :is-floating=&quot;true&quot; /&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/transition&gt;</span>
<span class="line"></span>
<span class="line">  &lt;slot</span>
<span class="line">    v-if=&quot;dashboardProposalFiltersVisible || isMobileViewport()&quot;</span>
<span class="line">    :is-floating=&quot;false&quot;</span>
<span class="line">  /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">分析:  </span>
<span class="line">上面的 v-slot=&quot;slotProps&quot; 作用是，通过 slotProps 获取组件自身定义的 slot 属性(有个前提，必须是可以展示的slot), 如果有多个slot, 可以获取每个slot的共同属性，也可以获取各自特有的属性, 然后拿到这个属性在后面的代码里使用，如 :is-floating=&quot;slotProps.isFloating&quot;, 这种场景只有在 只有default slot的时候才能这么用,如下补充说明</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.通过slot判断组件定义的slot使用情况</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//组件</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">//ts</span>
<span class="line">const slots = defineSlots&lt;{</span>
<span class="line">  default: () =&gt; void;</span>
<span class="line">  loader: () =&gt; void;</span>
<span class="line">  noData: () =&gt; void;</span>
<span class="line">  footer: () =&gt; void;</span>
<span class="line">  footerLeft: () =&gt; void;</span>
<span class="line">  footerRight: () =&gt; void;</span>
<span class="line">  pagination: () =&gt; void;</span>
<span class="line">}&gt;();</span>
<span class="line"></span>
<span class="line">const hasAnyFooterSlots = computed(() =&gt; {</span>
<span class="line">  return (</span>
<span class="line">    !!slots.footer ||</span>
<span class="line">    !!slots.footerLeft ||</span>
<span class="line">    !!slots.footerRight ||</span>
<span class="line">    !!slots.pagination</span>
<span class="line">  );</span>
<span class="line">});</span>
<span class="line">  </span>
<span class="line">//页面信息</span>
<span class="line">&lt;slot</span>
<span class="line">      v-if=&quot;hasAnyFooterSlots&quot;</span>
<span class="line">      name=&quot;footer&quot;</span>
<span class="line">    &gt;</span>
<span class="line">      &lt;div</span>
<span class="line">        class=&quot;mt-11 flex w-full flex-wrap items-center justify-center gap-2 text-sm empty:hidden lg:min-h-16&quot;</span>
<span class="line">      &gt;</span>
<span class="line">        &lt;div</span>
<span class="line">          v-if=&quot;$slots.footerLeft&quot;</span>
<span class="line">          class=&quot;flex flex-wrap items-center justify-center gap-2 lg:mr-auto&quot;</span>
<span class="line">        &gt;</span>
<span class="line">          &lt;slot name=&quot;footerLeft&quot; /&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;div</span>
<span class="line">          v-if=&quot;$slots.footerRight || $slots.pagination&quot;</span>
<span class="line">          class=&quot;flex flex-wrap items-center justify-center gap-2 lg:ml-auto&quot;</span>
<span class="line">        &gt;</span>
<span class="line">          &lt;slot name=&quot;footerRight&quot;&gt;</span>
<span class="line">            &lt;slot</span>
<span class="line">              v-if=&quot;hasTableData&quot;</span>
<span class="line">              name=&quot;pagination&quot;</span>
<span class="line">            /&gt;</span>
<span class="line">          &lt;/slot&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/slot&gt;</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">  </span>
<span class="line">分析:</span>
<span class="line">上面的 defineSlots 用来定义当前组件内所有的 slot信息，然后可以通过 slots 获取指定的slot, 用来做判断，比如计算属性 hasAnyFooterSlots，以及后面的代码里使用 v-if=&quot;$slots.footerLeft&quot; 进行动态判断</span>
<span class="line">  </span>
<span class="line">订正一下:</span>
<span class="line">上面的 defineSlots 用来定义当前组件内所有的 slot信息，然后可以通过 slots 获取指定的slot, 用来做判断，比如计算属性 hasAnyFooterSlots，以及后面的代码里使用 v-if=&quot;$slots.footerLeft&quot; 进行动态判断，注意 v-if=&quot;$slots.footerLeft&quot; 中的 $slots 并不是前面定义的 slots, 前面那个课取任何名称。但是后面的 $slots 是 Vue 中的一个对象，包含了所有传递到当前组件的插槽。</span>
<span class="line">  </span>
<span class="line">关于 $slots 对象:</span>
<span class="line">如果某个插槽被父组件填充了，$slots[&#39;插槽名&#39;] 会返回一个内容函数（Vue 渲染函数）。</span>
<span class="line">如果插槽未被填充，$slots[&#39;插槽名&#39;] 通常是 undefined</span>
<span class="line">v-if=&quot;$slots[&#39;left-icon&#39;]&quot; 的作用</span>
<span class="line">v-if=&quot;$slots[&#39;left-icon&#39;]&quot; 用来检查：</span>
<span class="line">  </span>
<span class="line">当前组件是否接收到了一个名为 left-icon 的插槽。</span>
<span class="line">如果接收到了，则渲染对应的模板。</span>
<span class="line">这段代码确保只有当父组件提供了 left-icon 插槽时，组件才会尝试渲染 #left-icon 的 &lt;template&gt; 内容。</span>
<span class="line">  </span>
<span class="line">两种写法:</span>
<span class="line">v-if=&quot;$slots.left-icon&quot; 的写法是完全合法的，并且常用于动态判断插槽是否存在。</span>
<span class="line">使用 $slots[&#39;left-icon&#39;] 比 $slots.left-icon 更加通用，因为它适用于所有插槽名称，而不仅限于固定名称。</span>
<span class="line">  </span>
<span class="line">对于有 ts 类型检查的项目，需要先声明slot，如下:</span>
<span class="line">defineSlots&lt;{</span>
<span class="line">  &quot;left-icon&quot;?: () =&gt; void;</span>
<span class="line">  &quot;right-icon&quot;?: () =&gt; void;</span>
<span class="line">}&gt;();</span>
<span class="line">  </span>
<span class="line">如果没有 ts 类型检查，可以不用声明，完全可以正常运行。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最新测试表明，还需要注意如下问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vue3中 v-slot=&quot;slotProps&quot; 的用法:</span>
<span class="line"></span>
<span class="line">\`v-slot\`指令是Vue 3中用于接收插槽内容的一种方式。当一个组件传递数据到它的插槽时,我们可以使用\`v-slot\`来访问这些数据。</span>
<span class="line"></span>
<span class="line">这里是一个简单的例子来说明它的用法:</span>
<span class="line"></span>
<span class="line">\`\`\`vue</span>
<span class="line">&lt;!-- 父组件 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;ChildComponent&gt;</span>
<span class="line">    &lt;template v-slot=&quot;slotProps&quot;&gt;</span>
<span class="line">      {{ slotProps.item }}</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/ChildComponent&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 子组件 (ChildComponent) --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;slot :item=&quot;{ name: &#39;Vue 3&#39;, version: &#39;3.0&#39; }&quot;&gt;&lt;/slot&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中:</p><ol><li><p>子组件(<code>ChildComponent</code>)定义了一个插槽,并通过<code>:item</code>属性向插槽传递了一个对象。</p></li><li><p>父组件使用<code>v-slot=&quot;slotProps&quot;</code>来接收这个传递的数据。<code>slotProps</code>是一个包含所有插槽属性的对象。</p></li><li><p>然后,我们可以在父组件中通过<code>slotProps.item</code>来访问子组件传递的数据。</p></li></ol><p><code>v-slot</code>指令还有一些其他的用法:</p><ol><li><p>具名插槽:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>headerProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  {{ headerProps.title }}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解构插槽 prop:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ item }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  {{ item.name }}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>缩写语法 (#):</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ item }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  {{ item.name }}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>这就是<code>v-slot=&quot;slotProps&quot;</code>的基本使用方法。它允许我们在使用组件时,灵活地接收和使用组件传递给插槽的数据。</p><p>还有一种非常特殊的用法:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token comment">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    //这个时候可以拿到子组件中 slot 属性的值，在调用子组件里面的任何地方使用</span>
<span class="line">    {{ slotProps.item }}</span>
<span class="line"></span>
<span class="line">    // 如果又调用了其它组件，可以把 slotProps.item 传递到 其它组件的props里面</span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ChildComponent</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 子组件 (ChildComponent) --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ name: &#39;Vue 3&#39;, version: &#39;3.0&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">上面这种适用于，子组件只有一个 default solt 的情况，并且这个default slot 没有名称，如果子组件有多个slot, 那么上面的写法就会报错: Codegen node is missing for element/if/for node. Apply appropriate transforms first.</span>
<span class="line">并且 slotProps 可以换成任何有意义的名称，比如上面的 headerProps，这只是一个名称.</span>
<span class="line">  </span>
<span class="line">注意:  </span>
<span class="line">1&gt; 父组件通过 props 向子组件传值(包括子组件中的 slot的参数值)  </span>
<span class="line">2&gt; 子组件中的 slot, 可以通过 上面的三种 v-slot 用法给父组件传值，注意：不能直接在 &lt;template&gt; 里给slot 传值，因为只能通过 slot 给父组件传值，这个是单向的. 这个问题困扰了我很久，我发现是我想的简单了。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const o=n(i,[["render",t],["__file","vue3之slot的拓展.html.vue"]]),d=JSON.parse('{"path":"/content/front/js/vue3%E4%B9%8Bslot%E7%9A%84%E6%8B%93%E5%B1%95.html","title":"vue3之slot的拓展","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3之slot的拓展","description":"vue3之slot的拓展"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3之slot的拓展.md"}');export{o as comp,d as data};
