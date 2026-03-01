import{_ as n,c as s,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(c,e){return l(),s("div",null,e[0]||(e[0]=[a(`<h4 id="vue3数组引用传递的问题" tabindex="-1"><a class="header-anchor" href="#vue3数组引用传递的问题"><span>vue3数组引用传递的问题</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//如下定义了一个ref类型的数组:</span>
<span class="line">const selectedData = ref&lt;number[]&gt;([6, 7, 8, 9]);</span>
<span class="line"></span>
<span class="line">const modifySelectedData = (data: Ref&lt;number[]&gt;) =&gt; {</span>
<span class="line">  data.value.splice(1, 1);  // 修改了传入的 Ref 数组，删除一个元素</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">modifySelectedData(selectedData);</span>
<span class="line"></span>
<span class="line">console.log(selectedData.value);  // 结果是 [6, 8, 9]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何解决副作用" tabindex="-1"><a class="header-anchor" href="#如何解决副作用"><span>如何解决副作用</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const modifySelectedData = (data: Ref&lt;number[]&gt;) =&gt; {</span>
<span class="line">  const copiedData = [...data.value];  // 创建副本</span>
<span class="line">  copiedData.splice(1, 1);  // 修改副本</span>
<span class="line">  console.log(copiedData);  // 修改后的副本</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const selectedData = ref&lt;number[]&gt;([6, 7, 8, 9]);</span>
<span class="line"></span>
<span class="line">modifySelectedData(selectedData);</span>
<span class="line"></span>
<span class="line">console.log(selectedData.value);  // 原始数据未被修改 [6, 7, 8, 9]</span>
<span class="line">const modifySelectedData = (data: Ref&lt;number[]&gt;) =&gt; {</span>
<span class="line">  const copiedData = [...data.value];  // 创建副本，可以通过传递副本来避免这种副作用</span>
<span class="line">  copiedData.splice(1, 1);  // 修改副本</span>
<span class="line">  console.log(copiedData);  // 修改后的副本</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const selectedData = ref&lt;number[]&gt;([6, 7, 8, 9]);</span>
<span class="line"></span>
<span class="line">modifySelectedData(selectedData);</span>
<span class="line"></span>
<span class="line">console.log(selectedData.value);  // 原始数据未被修改 [6, 7, 8, 9]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const p=n(i,[["render",t],["__file","vue3数组引用传递的问题.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/vue3%E6%95%B0%E7%BB%84%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"vue3数组引用传递的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3数组引用传递的问题","head":[["meta",{"name":"title","content":"vue3数组引用传递的问题"}],["meta",{"name":"description","content":"vue3数组引用传递的问题"}],["meta",{"name":"keywords","content":"vue3,数组引用"}],["meta",{"property":"og:title","content":"vue3数组引用传递的问题"}],["meta",{"property":"og:description","content":"vue3数组引用传递的问题"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3数组引用传递的问题.md"}');export{p as comp,r as data};
