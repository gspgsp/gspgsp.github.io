import{_ as e,o as i,c as n,g as s}from"./app.d66d8774.js";const d={},l=s(`<p>ts\u4E4BRecord\u7C7B\u578B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Record\u662FTypeScript\u4E2D\u7684\u4E00\u4E2A\u5B9E\u7528\u5DE5\u5177\u7C7B\u578B\u3002\u5B83\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5176\u5C5E\u6027\u952E\u4E3AK\u7C7B\u578B\uFF0C\u5C5E\u6027\u503C\u4E3AT\u7C7B\u578B\u3002Record\u7684\u57FA\u672C\u8BED\u6CD5\u5982\u4E0B\uFF1A
  
\u8BED\u6CD5:
Record&lt;K, T&gt;
  
\u4F7F\u7528:
type Product = {
    name: string;
    price: number;
};
  
const products: Record&lt;string, Product&gt; = {
    apple: { name: &#39;Apple&#39;, price: 0.5 },
    banana: { name: &#39;Banana&#39;, price: 0.25 },
};
  
console.log(products.apple); // { name: &#39;Apple&#39;, price: 0.5 }

\u53C2\u8003:
https://gibbok.github.io/typescript-book/zh-cn/book/type-manipulation/ //\u7C7B\u578B\u64CD\u4F5C
https://gibbok.github.io/typescript-book/zh-cn/book/generics/
  
https://sourcegraph.com/github.com/wangdoc/typescript-tutorial/-/blob/docs/utility.md //\u5F88\u591Amd\u6587\u6863\u8BED\u6CD5\u53EF\u4EE5\u53C2\u8003
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function r(t,a){return i(),n("div",null,c)}var v=e(d,[["render",r],["__file","ts\u4E4BRecord\u7C7B\u578B.html.vue"]]);export{v as default};
