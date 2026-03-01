import{_ as n,c as l,f as i,o as e}from"./app-BB_BIQV8.js";const a={};function t(p,s){return e(),l("div",null,s[0]||(s[0]=[i(`<p>css之fill属性:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">对于形状元素和文本，fill 属性是外观属性，用来定义给定图形元素内部的颜色。哪一块算是“内部”取决于形状本身以及fill-rule 属性的值。作为一个外观属性，它可以直接用作 CSS 样式表内部的属性。</span>
<span class="line">  </span>
<span class="line">https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill</span>
<span class="line">https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule</span>
<span class="line">  </span>
<span class="line">其中比较重要的:</span>
<span class="line">下列元素可以使用fill属性：</span>
<span class="line">动画元素 </span>
<span class="line">形状元素 </span>
<span class="line">文本内容元素:包括 https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element#textcontent, 就介绍了svg元素</span>
<span class="line">  </span>
<span class="line">重要的结论: 可以给 svg元素设置 color,那么就会改变 svg图片内容的颜色，这个也是和svg图片的fill属性相关的.</span>
<span class="line">举个例子:</span>
<span class="line">&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot;&gt;</span>
<span class="line">  &lt;path fill=&quot;currentColor&quot; d=&quot;M17 23v-4H7q-.825 0-1.412-.587T5 17V7H1V5h4V1h2v16h16v2h-4v4zm0-8V7H9V5h8q.825 0 1.413.588T19 7v8z&quot;&gt;&lt;/path&gt;</span>
<span class="line">&lt;/svg&gt;</span>
<span class="line">  </span>
<span class="line">样式:</span>
<span class="line">.icon-container:hover :deep(svg) {</span>
<span class="line">  @apply text-purple-600;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">在这个 SVG 代码中,&lt;path&gt; 元素的 fill 属性被设置为 currentColor。这意味着它会继承当前元素的 color 值作为填充颜色。因此,当我们将 text-purple-600 应用于 SVG 元素时,它实际上是将 color 值设置为紫色,从而导致 &lt;path&gt; 元素的填充颜色也变为紫色。</span>
<span class="line">所以,虽然 text-purple-600 的命名看起来像是用于设置文本颜色,但它同时也可以应用于 SVG 元素,从而改变 SVG 图形的颜色。这种机制使得我们可以使用相同的 CSS 类来设置文本和 SVG 图形的颜色,提高了代码的一致性和可维护性。</span>
<span class="line"></span>
<span class="line">下面是一个官方实例:</span>
<span class="line">&lt;svg viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;100%&quot;&gt;</span>
<span class="line">  &lt;path</span>
<span class="line">    fill=&quot;red&quot;</span>
<span class="line">    d=&quot;M 10,30</span>
<span class="line">           A 20,20 0,0,1 50,30</span>
<span class="line">           A 20,20 0,0,1 90,30</span>
<span class="line">           Q 90,60 50,80</span>
<span class="line">           Q 10,60 10,30 z&quot; /&gt;</span>
<span class="line">&lt;/svg&gt;</span>
<span class="line">  </span>
<span class="line">https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/path, 这里我直接通过fill 设置颜色，结果可以生效，证明上面的理论是正确的.</span>
<span class="line">  </span>
<span class="line">解释： svg中 xmlns=&quot;http://www.w3.org/2000/svg&quot;的作用:</span>
<span class="line">xmlns=&quot;http://www.w3.org/2000/svg&quot; 这个属性是用来定义 SVG 命名空间的。</span>
<span class="line">命名空间是一种用来避免元素名称冲突的方法。由于 XML 允许组合不同的 XML 文档,因此有可能在同一个 XML 文档中出现相同的元素名称,但具有不同的含义和用途。为了解决这个问题,XML 命名空间就应运而生。</span>
<span class="line">SVG 是基于 XML 的矢量图形语言,因此它也需要使用命名空间来确保元素名称在 XML 文档中的唯一性。xmlns=&quot;http://www.w3.org/2000/svg&quot; 这个属性就是用来声明 SVG 元素所属的命名空间。</span>
<span class="line">其中:</span>
<span class="line">xmlns 是 &quot;XML Namespace&quot; 的缩写,表示这是一个 XML 命名空间声明。</span>
<span class="line">http://www.w3.org/2000/svg 是 SVG 命名空间的 URI(Uniform Resource Identifier),这个 URI 是由 W3C(World Wide Web Consortium) 定义的,用于唯一标识 SVG 命名空间。</span>
<span class="line">  </span>
<span class="line">通过这个命名空间声明,浏览器就可以正确地识别和解析 SVG 元素,避免与其他 XML 语言中的元素发生冲突。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(a,[["render",t],["__file","css之fill属性.html.vue"]]),v=JSON.parse('{"path":"/content/front/html/css%E4%B9%8Bfill%E5%B1%9E%E6%80%A7.html","title":"css之fill属性","lang":"en-US","frontmatter":{"sidebar":false,"title":"css之fill属性","description":"css之fill属性"},"headers":[],"git":{},"filePathRelative":"content/front/html/css之fill属性.md"}');export{d as comp,v as data};
