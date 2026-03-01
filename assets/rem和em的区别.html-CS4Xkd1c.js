import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function m(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h5 id="rem和em的区别" tabindex="-1"><a class="header-anchor" href="#rem和em的区别"><span>rem和em的区别</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rem 和 em 都是 CSS 中的相对单位，但它们的参考点不同：</span>
<span class="line">rem（Root EM）</span>
<span class="line">参考 根元素 &lt;html&gt; 的 font-size。</span>
<span class="line">1rem = html { font-size } 的值，默认是 16px（如果没有修改）。</span>
<span class="line">适用于全局统一的缩放，比如排版时确保不同组件的大小一致。</span>
<span class="line"></span>
<span class="line">例子:</span>
<span class="line">html {</span>
<span class="line">  font-size: 16px;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">p {</span>
<span class="line">  font-size: 2rem; /* 2 × 16px = 32px */</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">em（Element EM）</span>
<span class="line">参考 当前元素的 font-size。</span>
<span class="line">适用于相对于父元素的字体大小、边距、内边距等，适合局部调整。</span>
<span class="line">em 会 继承 父元素的 font-size，可能导致 嵌套放大（累积效应）。</span>
<span class="line"></span>
<span class="line">例子:</span>
<span class="line">div {</span>
<span class="line">  font-size: 16px;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">p {</span>
<span class="line">  font-size: 1.5em; /* 1.5 × 16px = 24px */</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">strong {</span>
<span class="line">  font-size: 1.2em; /* 1.2 × p 的 24px = 28.8px, 可能会越来越大 */</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=s(l,[["render",m],["__file","rem和em的区别.html.vue"]]),d=JSON.parse('{"path":"/content/front/html/rem%E5%92%8Cem%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"rem和em的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"rem和em的区别","head":[["meta",{"name":"title","content":"rem和em的区别"}],["meta",{"name":"description","content":"rem和em的区别"}],["meta",{"name":"keywords","content":"rem,em"}],["meta",{"property":"og:title","content":"rem和em的区别"}],["meta",{"property":"og:description","content":"rem和em的区别"}]]},"headers":[],"git":{},"filePathRelative":"content/front/html/rem和em的区别.md"}');export{t as comp,d as data};
