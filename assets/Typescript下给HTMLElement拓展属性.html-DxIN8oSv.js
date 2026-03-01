import{_ as s,c as e,f as l,o as i}from"./app-BB_BIQV8.js";const a={};function p(t,n){return i(),e("div",null,n[0]||(n[0]=[l(`<h5 id="typescript下给htmlelement拓展属性" tabindex="-1"><a class="header-anchor" href="#typescript下给htmlelement拓展属性"><span>Typescript下给HTMLElement拓展属性</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">如下代码:</span>
<span class="line">declare global {</span>
<span class="line">  interface HTMLElement {</span>
<span class="line">    _tooltipHandlers?: {</span>
<span class="line">      mouseenter: (event: MouseEvent) =&gt; void;</span>
<span class="line">      mouseleave: () =&gt; void;</span>
<span class="line">    };</span>
<span class="line">    _tooltipOptions?: TooltipOptions;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">解释:</span>
<span class="line">这段 TypeScript 代码的作用是扩展全局的 HTMLElement 接口，为 HTML 元素对象添加两个可选的自定义属性，用于实现 tooltip（工具提示）功能相关的逻辑。所有 HTML 元素（即所有实现了 HTMLElement 接口的元素）在 TypeScript 类型系统中都会“自动具备”你添加的这两个可选属性。</span>
<span class="line"></span>
<span class="line">关键词解析:</span>
<span class="line">declare global</span>
<span class="line">这是 TypeScript 的声明合并语法，用于在全局作用域中扩展已有的类型定义。这段代码通常出现在 .d.ts 类型声明文件中或模块中用于类型扩展。</span>
<span class="line">interface HTMLElement</span>
<span class="line">这是对浏览器内建的 HTMLElement 接口进行扩展。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">添加的两个属性:</span>
<span class="line">HTMLElement._tooltipHandlers?</span>
<span class="line">_tooltipHandlers?: {</span>
<span class="line">  mouseenter: (event: MouseEvent) =&gt; void;</span>
<span class="line">  mouseleave: () =&gt; void;</span>
<span class="line">};</span>
<span class="line">一个对象，包含两个事件处理函数：mouseenter 和 mouseleave。</span>
<span class="line">用于手动绑定和解绑 tooltip 的事件监听器。</span>
<span class="line">? 表示该属性是可选的。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">HTMLElement._tooltipOptions?</span>
<span class="line">_tooltipOptions?: TooltipOptions;</span>
<span class="line">也是一个可选属性，用于存储与 tooltip 相关的配置项。</span>
<span class="line">TooltipOptions 是一个类型（可能在其他地方声明），用于定义 tooltip 的行为，如延迟时间、位置、内容等。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">使用场景</span>
<span class="line">这段代码通常出现在一个实现自定义 tooltip 的系统中，例如:</span>
<span class="line">const el = document.querySelector(&#39;.has-tooltip&#39;) as HTMLElement;</span>
<span class="line"></span>
<span class="line">el._tooltipOptions = {</span>
<span class="line">  content: &#39;Hello Tooltip&#39;,</span>
<span class="line">  delay: 300,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">el._tooltipHandlers = {</span>
<span class="line">  mouseenter: (e) =&gt; showTooltip(el, e),</span>
<span class="line">  mouseleave: () =&gt; hideTooltip(el),</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">el.addEventListener(&#39;mouseenter&#39;, el._tooltipHandlers.mouseenter);</span>
<span class="line">el.addEventListener(&#39;mouseleave&#39;, el._tooltipHandlers.mouseleave);</span>
<span class="line"></span>
<span class="line">总结</span>
<span class="line">这段代码的目的：</span>
<span class="line">✅ 在不修改 DOM 标准接口的前提下，为 tooltip 实现绑定事件处理器和配置项提供了一个干净、类型安全的方式。</span>
<span class="line">✅ 使用可选属性和扩展接口的方式，确保不会对现有代码造成破坏，且保留 TypeScript 类型检查的优势。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(a,[["render",p],["__file","Typescript下给HTMLElement拓展属性.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/Typescript%E4%B8%8B%E7%BB%99HTMLElement%E6%8B%93%E5%B1%95%E5%B1%9E%E6%80%A7.html","title":"Typescript下给HTMLElement拓展属性","lang":"en-US","frontmatter":{"sidebar":false,"title":"Typescript下给HTMLElement拓展属性","head":[["meta",{"name":"title","content":"Typescript下给HTMLElement拓展属性"}],["meta",{"name":"description","content":"Typescript下给HTMLElement拓展属性"}],["meta",{"name":"keywords","content":"Typescript"}],["meta",{"property":"og:title","content":"Typescript下给HTMLElement拓展属性"}],["meta",{"property":"og:description","content":"Typescript下给HTMLElement拓展属性"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/Typescript下给HTMLElement拓展属性.md"}');export{d as comp,v as data};
