import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function c(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>vue3几种for循环对比:</p><blockquote></blockquote><p>vue3 对数据列表循环,修改指定下标的值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;forEach循环</span>
<span class="line">const setItemsInactive = (index: number) =&gt; {</span>
<span class="line">  list.value.forEach((item, idx) =&gt; {</span>
<span class="line">    if (idx !== index) {</span>
<span class="line">      item.isActive = false;</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">2&gt;for...of循环</span>
<span class="line">const showSectionAction = (index: number) =&gt; {</span>
<span class="line">  for (const [idx, item] of ticketList.value.entries()) {</span>
<span class="line">    if (idx !== index) {</span>
<span class="line">      item.showAction = false;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  ticketList.value[index].showAction = !ticketList.value[index].showAction;</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="foreach-和-for-of-的对比" tabindex="-1"><a class="header-anchor" href="#foreach-和-for-of-的对比"><span><code>forEach</code> 和 <code>for...of</code> 的对比</span></a></h6><ul><li><strong><code>forEach</code> 简洁性</strong>：在需要遍历每个元素并访问索引的情况下，<code>forEach</code> 确实更简洁，不需要解构。</li><li><strong><code>for...of</code> 的灵活性</strong>：在某些场景下，<code>for...of</code> 提供了更多控制流的灵活性。比如，可以在循环中使用 <code>break</code> 和 <code>continue</code>，而 <code>forEach</code> 不支持这些控制流操作（如果需要提前退出循环时，<code>for...of</code> 更方便）。</li></ul><h6 id="选择的建议" tabindex="-1"><a class="header-anchor" href="#选择的建议"><span>选择的建议</span></a></h6><p>如果遍历逻辑简单而且不涉及复杂的控制流（如提前退出），<code>forEach</code> 是非常好的选择。您可以放心地使用 <code>forEach</code>，除非项目的 lint 或格式化工具有特定的要求。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">3&gt;经典的for循环</span>
<span class="line">for(let i = 0; i &lt; list.value.length;i++){</span>
<span class="line">//逻辑</span>
<span class="line">}</span>
<span class="line">原生 for 循环可以避免迭代器创建（如 forEach 或 for...of 循环），在处理大量数据时性能稍有提升，特别适合对性能要求高的项目。</span>
<span class="line">  </span>
<span class="line">4&gt;for...in循环</span>
<span class="line">适用于：主要用于遍历对象的可枚举属性，不推荐用于数组，因为它遍历的是属性名而不是数组值。</span>
<span class="line">特性：遍历对象的键（属性名），可用于对象的动态属性操作。</span>
<span class="line">局限性：for...in 会遍历对象原型链上的所有可枚举属性（除非使用 hasOwnProperty 进行检查），可能带来意外结果。</span>
<span class="line">const obj = { a: 1, b: 2, c: 3 };</span>
<span class="line">for (const key in obj) {</span>
<span class="line">  if (obj.hasOwnProperty(key)) {</span>
<span class="line">    // 逻辑</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">选择建议</span>
<span class="line">数组遍历：优先考虑 forEach 或 for...of，尤其是在写法简洁性和可读性更重要的情况下。</span>
<span class="line">复杂控制流：当需要在循环中提前退出或跳过某些元素时，for...of 更合适。</span>
<span class="line">对象遍历：如果是普通对象，推荐使用 for...in 或 Object.keys 结合 forEach。</span>
<span class="line">性能和灵活性：在高性能要求的场景下，传统的 for 循环（for (let i = 0; i &lt; length; i++)）依然是一个非常好的选择。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const t=s(l,[["render",c],["__file","vue3几种for循环对比.html.vue"]]),o=JSON.parse('{"path":"/content/front/js/vue3%E5%87%A0%E7%A7%8Dfor%E5%BE%AA%E7%8E%AF%E5%AF%B9%E6%AF%94.html","title":"vue3几种for循环对比","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3几种for循环对比","description":"vue3几种for循环对比"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3几种for循环对比.md"}');export{t as comp,o as data};
