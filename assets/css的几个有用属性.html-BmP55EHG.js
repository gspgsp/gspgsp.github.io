import{_ as n,c as l,f as e,o as i}from"./app-BB_BIQV8.js";const a={};function c(d,s){return i(),l("div",null,s[0]||(s[0]=[e(`<p>css的几个有用属性:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.css content 属性:</span>
<span class="line">content 属性通常只对伪元素（如 ::before 或 ::after）生效，而不是直接作用于 HTML 元素本身。在您的情况下，您试图直接修改一个 div 元素的内容，这是不会生效的。</span>
<span class="line">  </span>
<span class="line">错误用法:</span>
<span class="line">:deep(.select-none){</span>
<span class="line">    content: &#39;No results match your search.&#39;;</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">正确用法:</span>
<span class="line">:deep(.select-none){</span>
<span class="line">    font-size: 0;// 元素的字体大小设置为 0, 实际效果是隐藏了元素的原始文本内容，因为文字大小为 0 就不可见了, 但是，元素本身及其尺寸和其他样式属性仍然保持不变.</span>
<span class="line">    &amp;:before{</span>
<span class="line">      font-size: 1rem; // 这样做是为了确保新的文本内容是可见的，因为父元素的字体大小是 0.</span>
<span class="line">      content: &#39;No results match your search.&#39;; // 设置伪元素的内容为指定的文本, 这个文本将会显示在元素中，替代原来的内容.</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">2.css fit-content使用:</span>
<span class="line">这个属性很有用,如下代码:</span>
<span class="line">&lt;div class=&quot;flex w-full flex-col gap-2.5&quot;&gt;</span>
<span class="line">&lt;div</span>
<span class="line">  v-for=&quot;(item, index) in selectedItems&quot;</span>
<span class="line">  :key=&quot;index&quot;</span>
<span class="line">  class=&quot;flex items-center rounded border border-color-info bg-brand-subtler hover:border-color-success w-fit&quot;</span>
<span class="line">&gt;</span>
<span class="line">  &lt;MText class=&quot;flex-1&quot;&gt;</span>
<span class="line">    {{ item.label }}</span>
<span class="line">  &lt;/MText&gt;</span>
<span class="line">  &lt;MIcon</span>
<span class="line">    name=&quot;close&quot;</span>
<span class="line">    size=&quot;sm&quot;</span>
<span class="line">    class=&quot;cursor-pointer hover:rounded hover:bg-brand-subtle&quot;</span>
<span class="line">    @click=&quot;removeItem(item.value)&quot;</span>
<span class="line">  /&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">这个实现的是: 父级 100%宽度，但是子元素会根据子级内容的宽度自动伸缩，包括自动换行</span>
<span class="line">https://developer.mozilla.org/zh-CN/docs/Web/CSS/fit-content</span>
<span class="line">  </span>
<span class="line">下面这个:</span>
<span class="line">&lt;div class=&quot;flex w-full flex-col gap-2.5&quot;&gt;</span>
<span class="line">&lt;div</span>
<span class="line">  v-for=&quot;(item, index) in selectedItems&quot;</span>
<span class="line">  :key=&quot;index&quot;</span>
<span class="line">  class=&quot;flex items-center justify-between rounded border border-color-info bg-brand-subtler hover:border-color-success&quot;</span>
<span class="line">&gt;</span>
<span class="line">  &lt;MText class=&quot;flex-1&quot;&gt;</span>
<span class="line">    {{ item.label }}</span>
<span class="line">  &lt;/MText&gt;</span>
<span class="line">  &lt;MIcon</span>
<span class="line">    name=&quot;close&quot;</span>
<span class="line">    size=&quot;sm&quot;</span>
<span class="line">    class=&quot;cursor-pointer hover:rounded hover:bg-brand-subtle&quot;</span>
<span class="line">    @click=&quot;removeItem(item.value)&quot;</span>
<span class="line">  /&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">实现的是，父级 100%宽度，但是子元素会占据除去MICon元素，剩余的所有宽度，同时可以自动换行</span>
<span class="line">  </span>
<span class="line">3.flex-wrap是用于flex容器的,而不是子元素</span>
<span class="line">  </span>
<span class="line">4.css对子元素设置flex属性:</span>
<span class="line">可以使用一个，两个或三个值来指定 flex 属性</span>
<span class="line"></span>
<span class="line">单值语法：值必须是以下之一：</span>
<span class="line">一个 &lt;flex-grow&gt; 的有效值：此时简写会扩展为 flex: &lt;flex-grow&gt; 1 0。</span>
<span class="line">一个 &lt;flex-basis&gt; 的有效值：此时简写会扩展为 flex: 1 1 &lt;flex-basis&gt;。</span>
<span class="line">关键字 none 或者全局关键字之一。 // 注意 flex: none 对应， flex-grow: 0; flex-shrink: 0; flex-basis: auto;</span>
<span class="line">  </span>
<span class="line">如:</span>
<span class="line">/* 单值，无单位数字：flex-grow</span>
<span class="line">flex-basis 此时等于 0。 */</span>
<span class="line">flex: 2; // 即为: flex: 2 1 0</span>
<span class="line"></span>
<span class="line">/* 单值，宽度/高度：flex-basis */</span>
<span class="line">flex: 10em;</span>
<span class="line">flex: 30px; // 即为: flex: 1 1 30px;</span>
<span class="line">flex: min-content;</span>
<span class="line">  </span>
<span class="line">双值语法：</span>
<span class="line">第一个值必须是一个 flex-grow 的有效值。</span>
<span class="line">第二个值必须是以下之一：</span>
<span class="line">一个 flex-shrink 的有效值：此时简写会扩展为 flex: &lt;flex-grow&gt; &lt;flex-shrink&gt; 0。</span>
<span class="line">一个 flex-basis 的有效值：此时简写会扩展为 flex: &lt;flex-grow&gt; 1 &lt;flex-basis&gt;。</span>
<span class="line">  </span>
<span class="line">三值语法：值必须按照以下顺序指定：</span>
<span class="line">一个 flex-grow 的有效值。</span>
<span class="line">一个 flex-shrink 的有效值。</span>
<span class="line">一个 flex-basis 的有效值。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(a,[["render",c],["__file","css的几个有用属性.html.vue"]]),t=JSON.parse('{"path":"/content/front/html/css%E7%9A%84%E5%87%A0%E4%B8%AA%E6%9C%89%E7%94%A8%E5%B1%9E%E6%80%A7.html","title":"css的几个有用属性","lang":"en-US","frontmatter":{"sidebar":false,"title":"css的几个有用属性","description":"css的几个有用属性"},"headers":[],"git":{},"filePathRelative":"content/front/html/css的几个有用属性.md"}');export{p as comp,t as data};
