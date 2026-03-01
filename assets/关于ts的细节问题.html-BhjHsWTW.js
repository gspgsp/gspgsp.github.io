import{_ as s,c as i,f as a,o as e}from"./app-BB_BIQV8.js";const l={};function t(c,n){return e(),i("div",null,n[0]||(n[0]=[a(`<p>关于ts的细节问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;元数组</span>
<span class="line">元组类型是一种表示具有固定数量的元素及其相应类型的数组的类型。元组类型以固定顺序强制执行特定数量的元素及其各自的类型。当您想要表示具有特定类型的值的集合时，元组类型非常有用，其中数组中每个元素的位置都有特定的含义。</span>
<span class="line"></span>
<span class="line">例子:</span>
<span class="line">type Point = [number, string, string];</span>
<span class="line"></span>
<span class="line">const aa: Point = [123, &quot;456&quot;] // 必须三个参数</span>
<span class="line">const bb: Point = [123, &quot;456&quot;, 789] //数据类型必须为string</span>
<span class="line">const cc: Point = [123, &quot;456&quot;, &quot;789&quot;]</span>
<span class="line"></span>
<span class="line">2&gt;在使用泛型的时候，函数形式的话可以用 &lt;T&gt;或者&lt;T,&gt;，但是对于箭头函数必须要用&lt;T,&gt;否则报错</span>
<span class="line">// function identity&lt;T&gt;(arg: T): T {</span>
<span class="line">//     return arg;</span>
<span class="line">// }</span>
<span class="line"></span>
<span class="line">function identity&lt;T,&gt;(arg: T): T {</span>
<span class="line">    return arg;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// const identity = &lt;T,&gt;(arg: T): T =&gt; arg</span>
<span class="line"></span>
<span class="line">const a = identity(&#39;x&#39;);</span>
<span class="line">console.log(&quot;a is:&quot;, a)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",t],["__file","关于ts的细节问题.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/%E5%85%B3%E4%BA%8Ets%E7%9A%84%E7%BB%86%E8%8A%82%E9%97%AE%E9%A2%98.html","title":"关于ts的细节问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于ts的细节问题","description":"关于ts的细节问题"},"headers":[],"git":{},"filePathRelative":"content/front/js/关于ts的细节问题.md"}');export{r as comp,p as data};
