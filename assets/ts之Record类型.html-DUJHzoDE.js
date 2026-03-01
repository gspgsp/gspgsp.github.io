import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>ts之Record类型:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Record是TypeScript中的一个实用工具类型。它用于创建一个对象类型，其属性键为K类型，属性值为T类型。Record的基本语法如下：</span>
<span class="line">  </span>
<span class="line">语法:</span>
<span class="line">Record&lt;K, T&gt;</span>
<span class="line">  </span>
<span class="line">使用:</span>
<span class="line">type Product = {</span>
<span class="line">    name: string;</span>
<span class="line">    price: number;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">const products: Record&lt;string, Product&gt; = {</span>
<span class="line">    apple: { name: &#39;Apple&#39;, price: 0.5 },</span>
<span class="line">    banana: { name: &#39;Banana&#39;, price: 0.25 },</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">console.log(products.apple); // { name: &#39;Apple&#39;, price: 0.5 }</span>
<span class="line"></span>
<span class="line">参考:</span>
<span class="line">https://gibbok.github.io/typescript-book/zh-cn/book/type-manipulation/ //类型操作</span>
<span class="line">https://gibbok.github.io/typescript-book/zh-cn/book/generics/</span>
<span class="line">  </span>
<span class="line">https://sourcegraph.com/github.com/wangdoc/typescript-tutorial/-/blob/docs/utility.md //很多md文档语法可以参考</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",c],["__file","ts之Record类型.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/ts%E4%B9%8BRecord%E7%B1%BB%E5%9E%8B.html","title":"ts之Record类型","lang":"en-US","frontmatter":{"sidebar":false,"title":"ts之Record类型","description":"ts之Record类型"},"headers":[],"git":{},"filePathRelative":"content/front/js/ts之Record类型.md"}');export{d as comp,r as data};
