import{_ as n,c as i,f as a,o as l}from"./app-BB_BIQV8.js";const e={};function d(c,s){return l(),i("div",null,s[0]||(s[0]=[a(`<p>tailwindcss之动态添加屏幕类的坑:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;本来想动态修改 lg 条件下，div的宽度, 如下，但是不生效</span>
<span class="line">withDefaults(</span>
<span class="line">  defineProps&lt;{</span>
<span class="line">    isNotificationVisible?: boolean;</span>
<span class="line">    content?: string;</span>
<span class="line">    maxWidth?: string;</span>
<span class="line">  }&gt;(),</span>
<span class="line">  {</span>
<span class="line">    isNotificationVisible: false,</span>
<span class="line">    content: &quot;&quot;,</span>
<span class="line">    maxWidth: &quot;25rem&quot;,</span>
<span class="line">  }</span>
<span class="line">);</span>
<span class="line">  </span>
<span class="line">&lt;div</span>
<span class="line">    class=&quot;w-full&quot;</span>
<span class="line">    :class=&quot;\`lg:max-w-[\${maxWidth}]\`&quot;</span>
<span class="line">  &gt;</span>
<span class="line">  </span>
<span class="line">2&gt;通过style可以加载这个动态宽度，但是没法使用 lg 条件</span>
<span class="line">&lt;div</span>
<span class="line">    class=&quot;w-full&quot;</span>
<span class="line">    :style=&quot;{ maxWidth: maxWidth }&quot;</span>
<span class="line">  &gt;</span>
<span class="line">也可以直接这样:</span>
<span class="line">&lt;div</span>
<span class="line">    class=&quot;w-full&quot;</span>
<span class="line">    :style=&quot;{ maxWidth }&quot;</span>
<span class="line">  &gt;</span>
<span class="line">  </span>
<span class="line">3&gt;解决 lg 问题</span>
<span class="line">// 使用媒体查询，也不生效</span>
<span class="line">&lt;div</span>
<span class="line">    class=&quot;w-full&quot;</span>
<span class="line">    :style=&quot;{ &#39;@media (min-width: 1024px)&#39;: { maxWidth: maxWidth } }&quot;</span>
<span class="line">  &gt;</span>
<span class="line">  </span>
<span class="line">//下面的方法是可行的</span>
<span class="line">定义:</span>
<span class="line">@layer utilities {</span>
<span class="line">  .lg-dynamic-max-w {</span>
<span class="line">    @apply lg:max-w-[var(--max-width)];</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">使用:</span>
<span class="line">&lt;div</span>
<span class="line">    class=&quot;w-full lg-dynamic-max-w&quot;</span>
<span class="line">    :style=&quot;{ &#39;--max-width&#39;: maxWidth }&quot;</span>
<span class="line">  &gt;</span>
<span class="line">原理:</span>
<span class="line">①</span>
<span class="line">@layer utilities 告诉 Tailwind 这是一个自定义工具类。</span>
<span class="line">@apply 指令允许您在自定义类中使用 Tailwind 的原子类。</span>
<span class="line">lg:max-w-[var(--max-width)] 是一个响应式类，它在大屏幕（lg）断点上应用最大宽度。</span>
<span class="line">var(--max-width) 是一个 CSS 变量，它的值可以动态设置。</span>
<span class="line">  </span>
<span class="line">②</span>
<span class="line">class=&quot;w-full lg-dynamic-max-w&quot; 应用了我们自定义的响应式类。</span>
<span class="line">:style=&quot;{ &#39;--max-width&#39;: maxWidth }&quot; 动态设置 CSS 变量的值。</span>
<span class="line">  </span>
<span class="line">③</span>
<span class="line">当屏幕宽度达到 lg 断点时，Tailwind 的响应式系统激活 lg: 前缀的样式。</span>
<span class="line">此时，max-w-[var(--max-width)] 开始生效。</span>
<span class="line">var(--max-width) 的值是通过 Vue 的 :style 绑定动态设置的。</span>
<span class="line">结果是，在大屏幕上，元素获得了一个动态的最大宽度。</span>
<span class="line">  </span>
<span class="line">④</span>
<span class="line">它利用了 Tailwind 的 JIT（即时编译）模式，允许使用任意值。</span>
<span class="line">它结合了 Tailwind 的响应式设计和 CSS 变量的动态性。</span>
<span class="line">通过 @apply，我们创建了一个可重用的类，它既包含 Tailwind 的功能，又允许动态值。</span>
<span class="line">  </span>
<span class="line">⑤</span>
<span class="line">保持了 Tailwind 的响应式特性。</span>
<span class="line">允许动态设置最大宽度。</span>
<span class="line">将响应式逻辑保留在 CSS 中，而不是 JavaScript。</span>
<span class="line">可以在多个组件中重用自定义类。</span>
<span class="line"></span>
<span class="line">总结: 这种方法之所以有效，是因为它巧妙地在 Tailwind 的静态类系统和 CSS 变量的动态特性之间架起了一座桥梁。它允许您在保持 Tailwind 工作流程的同时，引入动态值的灵活性。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const v=n(e,[["render",d],["__file","tailwindcss之动态添加屏幕类的坑.html.vue"]]),t=JSON.parse('{"path":"/content/front/html/tailwindcss%E4%B9%8B%E5%8A%A8%E6%80%81%E6%B7%BB%E5%8A%A0%E5%B1%8F%E5%B9%95%E7%B1%BB%E7%9A%84%E5%9D%91.html","title":"tailwindcss之动态添加屏幕类的坑","lang":"en-US","frontmatter":{"sidebar":false,"title":"tailwindcss之动态添加屏幕类的坑","description":"tailwindcss之动态添加屏幕类的坑"},"headers":[],"git":{},"filePathRelative":"content/front/html/tailwindcss之动态添加屏幕类的坑.md"}');export{v as comp,t as data};
