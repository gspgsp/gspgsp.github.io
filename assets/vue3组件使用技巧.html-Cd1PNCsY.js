import{_ as n,c as l,f as i,o as a}from"./app-BB_BIQV8.js";const e={};function p(d,s){return a(),l("div",null,s[0]||(s[0]=[i(`<p>vue3组件使用技巧:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//有如下自组件，假如为 Child.vue</span>
<span class="line">withDefaults(</span>
<span class="line">  defineProps&lt;{</span>
<span class="line">    isOverflowVisible?: boolean;</span>
<span class="line">  }&gt;(),</span>
<span class="line">  {</span>
<span class="line">    isOverflowVisible: false,</span>
<span class="line">  }</span>
<span class="line">);</span>
<span class="line">  </span>
<span class="line">  &lt;TModal</span>
<span class="line">    v-model=&quot;isModalVisible&quot;</span>
<span class="line">    :max-width</span>
<span class="line">    class=&quot;app-modal [&amp;_.m-modal\\_\\_panel]:gap-md&quot;</span>
<span class="line">    :class=&quot;{</span>
<span class="line">      &#39;app-modal--visible&#39;: isOverflowVisible,</span>
<span class="line">    }&quot;</span>
<span class="line">    :hide-close-icon</span>
<span class="line">    :persistent</span>
<span class="line">  &gt;</span>
<span class="line">  ...</span>
<span class="line">  ...</span>
<span class="line">  &lt;/TModal&gt;</span>
<span class="line"></span>
<span class="line">  &lt;style lang=&quot;scss&quot;&gt;</span>
<span class="line">    .app-modal {</span>
<span class="line">      &amp;--visible {</span>
<span class="line">        .m-modal__panel {</span>
<span class="line">          @apply overflow-visible;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">  </span>
<span class="line">//父组件使用</span>
<span class="line">&lt;template&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child is-overflow-visible&gt;</span>
<span class="line"></span>
<span class="line">&lt;/Child&gt;</span>
<span class="line"></span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">这里直接使用 is-overflow-visible， 而没有定义相关的变量(比如定义一个 isOverflowVisible, 用来赋值， 类似 :is-overflow-visible=isOverflowVisible)，这样的话子组件里的 isOverflowVisible 会渲染为 true, 这是一个很有用的细节，对于一个 bool 类型的 prop，如果父组件没有通过属性赋值，那么会被熏染为 true.</span>
<span class="line">  </span>
<span class="line">上面的例子还有一个细节，就是:</span>
<span class="line">:class=&quot;{</span>
<span class="line">      &#39;app-modal--visible&#39;: isOverflowVisible,</span>
<span class="line">    }&quot;</span>
<span class="line">  </span>
<span class="line">这个主要是动态加载 app-modal--visible 这个类，注意命名，有个前缀 app-modal, 后面是 --visible, 这种风格的命名，有个好处是，在scss文件里，可以实现样式嵌套，如下:</span>
<span class="line">  &lt;style lang=&quot;scss&quot;&gt;</span>
<span class="line">    .app-modal {</span>
<span class="line">      &amp;--visible {// 这里虽然有两级，但是实际上还是改的父级样式, 这个主要是用于动态修改同级元素的样式的时候； 也可以用于子元素， 当子元素也以相同的前缀开始的话，在样式里就可以直接使用过 &amp; 开头定义样式</span>
<span class="line">        .m-modal__panel {</span>
<span class="line">          @apply overflow-visible;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=n(e,[["render",p],["__file","vue3组件使用技巧.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/vue3%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7.html","title":"vue3组件使用技巧","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3组件使用技巧","description":"vue3组件使用技巧"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3组件使用技巧.md"}');export{c as comp,r as data};
