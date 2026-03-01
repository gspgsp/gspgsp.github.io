import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h4 id="object-entries-的作用" tabindex="-1"><a class="header-anchor" href="#object-entries-的作用"><span><code>Object.entries()</code> 的作用</span></a></h4><p><code>Object.entries()</code> 方法用于将对象的 <strong>键值对</strong> 转换为 <strong>二维数组</strong>，其中：</p><ul><li>每个键值对都会变成数组的一个元素</li><li>数组的第一项是 <strong>键（key）</strong>，第二项是 <strong>值（value）</strong></li></ul><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法：</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line">Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>参数：</strong></p><ul><li><code>obj</code>：要转换的对象。</li></ul><p><strong>返回值：</strong></p><ul><li>一个包含 <code>[key, value]</code> 数组的数组。</li></ul><hr><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例：</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  c<span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 输出: [[&#39;a&#39;, 1], [&#39;b&#39;, 2], [&#39;c&#39;, 3]]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景：</span></a></h4><p><code>Object.entries()</code> 适用于：</p><ul><li><strong>遍历对象</strong>：相比 <code>for...in</code>，它不会遍历原型链上的属性，适用于 <strong>纯数据对象</strong>。</li><li><strong>对象转换为数组</strong>：如果你要对对象的数据进行排序、映射等数组操作，可以先用 <code>Object.entries()</code> 转换。</li><li><strong>动态访问对象的 key-value</strong>：适用于<strong>键值未知</strong>的情况，如 API 响应。</li></ul><p><strong>类似方法：</strong></p><ul><li><code>Object.keys(obj)</code>: 只返回对象的 <strong>键数组</strong>。</li><li><code>Object.values(obj)</code>: 只返回对象的 <strong>值数组</strong>。</li></ul><hr><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结：</span></a></h4><p><code>Object.entries()</code> 可以把对象转换成一个 <strong>键值对数组</strong>，便于使用数组的方法（<code>map</code>、<code>filter</code>、<code>sort</code> 等）进行操作。</p><hr><h4 id="实际项目使用" tabindex="-1"><a class="header-anchor" href="#实际项目使用"><span>实际项目使用</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref, watch } from &#39;vue&#39;;</span>
<span class="line"></span>
<span class="line">const props = defineProps&lt;{</span>
<span class="line">  availableTo: string[]</span>
<span class="line">}&gt;();</span>
<span class="line"></span>
<span class="line">// 定义类型</span>
<span class="line">interface SectionData {</span>
<span class="line">  sectionName: string;</span>
<span class="line">  ticketNames: string[];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 初始化 groupedData</span>
<span class="line">const groupedData = ref&lt;Record&lt;string, string[]&gt;&gt;({</span>
<span class="line">  specialSection: [],</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// 初始化 dataList 和条件判断</span>
<span class="line">const dataList = ref&lt;SectionData[]&gt;([]);</span>
<span class="line">const hasSpecialSection = ref(false);</span>
<span class="line">const hasNonEmptySections = ref(false);</span>
<span class="line"></span>
<span class="line">// 每次 availableTo 更新时重新计算 groupedData 和相关数据</span>
<span class="line">watch(</span>
<span class="line">  () =&gt; props.availableTo,</span>
<span class="line">  (newAvailableTo) =&gt; {</span>
<span class="line">    // 重新计算 groupedData</span>
<span class="line">    groupedData.value = { specialSection: [] };</span>
<span class="line">    newAvailableTo.forEach(item =&gt; {</span>
<span class="line">      const parts = item.split(&#39; - &#39;);</span>
<span class="line"></span>
<span class="line">      if (parts.length === 2) {</span>
<span class="line">        const sectionName = parts[0].trim();</span>
<span class="line">        const ticketName = parts[1].trim();</span>
<span class="line"></span>
<span class="line">        if (!groupedData.value[sectionName]) {//sectionName是一个变量</span>
<span class="line">          groupedData.value[sectionName] = [];</span>
<span class="line">        }</span>
<span class="line">        groupedData.value[sectionName].push(ticketName);</span>
<span class="line">      } else {</span>
<span class="line">        groupedData.value.specialSection.push(item.trim());//specialSection是确定的</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line"></span>
<span class="line">    // 将 groupedData 转换为数组并排序</span>
<span class="line">    const sortedData = Object.entries(groupedData.value)</span>
<span class="line">      .map(([sectionName, ticketNames]) =&gt; ({ sectionName, ticketNames }))</span>
<span class="line">      .sort((currentSection, nextSection) =&gt; {</span>
<span class="line">        if (currentSection.sectionName === &#39;specialSection&#39;) {</span>
<span class="line">          return 1;  // specialSection 排到最后</span>
<span class="line">        }</span>
<span class="line">        if (nextSection.sectionName === &#39;specialSection&#39;) {</span>
<span class="line">          return -1; // specialSection 排到最后</span>
<span class="line">        }</span>
<span class="line">        return 0;</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">    // 更新 dataList</span>
<span class="line">    dataList.value = sortedData;</span>
<span class="line"></span>
<span class="line">    // 判断条件</span>
<span class="line">    hasSpecialSection.value = dataList.value.some(item =&gt;</span>
<span class="line">      item.sectionName === &quot;specialSection&quot; &amp;&amp; !item.ticketNames.includes(&#39;All tickets&#39;)</span>
<span class="line">    );</span>
<span class="line">    hasNonEmptySections.value = dataList.value.some(item =&gt;</span>
<span class="line">      item.sectionName !== &quot;specialSection&quot; &amp;&amp; item.ticketNames.length &gt; 0</span>
<span class="line">    );</span>
<span class="line">  },</span>
<span class="line">  { immediate: true } // 初始化时也执行一次</span>
<span class="line">);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">上面的代码分析:</span>
<span class="line">1&gt;groupedData是一个对象，为什么要使用 groupedData.value[sectionName] 判断，看起来像数组一样,而不是点操作符？</span>
<span class="line">在 JavaScript 中，访问对象的属性有两种方式：点操作符 (.) 和 方括号操作符 ([])，这两者有不同的用法和限制。</span>
<span class="line"></span>
<span class="line">点操作符 (groupedData.sectionName):</span>
<span class="line">点操作符用于访问对象的属性时，属性名必须是一个有效的标识符（例如，字母、数字、下划线或美元符号），并且不能是变量。如果属性名是一个动态的字符串或包含空格、特殊字符（如 -）等，无法直接使用点操作符访问。</span>
<span class="line"></span>
<span class="line">方括号操作符 (groupedData[sectionName]):</span>
<span class="line">方括号操作符允许访问对象的属性名，无论这个属性名是字符串、变量，还是包含空格、特殊字符等。</span>
<span class="line">你可以通过动态的方式访问属性，例如将 sectionName 作为变量传入。</span>
<span class="line"></span>
<span class="line">在你的代码中，sectionName 变量的值来自数据，所以它是一个动态的字符串。如果你直接使用 groupedData.sectionName，它会寻找字面量的 sectionName 属性，而不是变量 sectionName 的值。会找不到。</span>
<span class="line"></span>
<span class="line">总结：</span>
<span class="line">如果你访问的是一个固定的属性名（如 groupedData.nonSection），可以使用点操作符。</span>
<span class="line">如果属性名是动态的（如 groupedData[sectionName]），或者包含不符合标识符规则的字符（例如 -），必须使用方括号操作符。</span>
<span class="line"></span>
<span class="line">2&gt;细节解析</span>
<span class="line">假如groupedData获取到的数据如下:</span>
<span class="line">const groupedData = {</span>
<span class="line">  specialSection: [&#39;All tickets&#39;],</span>
<span class="line">  VIP: [&#39;Ticket A&#39;, &#39;Ticket B&#39;],</span>
<span class="line">  General: [&#39;Ticket C&#39;]</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">步骤 1：Object.entries(groupedData)</span>
<span class="line">返回</span>
<span class="line">[</span>
<span class="line">  [&#39;specialSection&#39;, [&#39;All tickets&#39;]],</span>
<span class="line">  [&#39;VIP&#39;, [&#39;Ticket A&#39;, &#39;Ticket B&#39;]],</span>
<span class="line">  [&#39;General&#39;, [&#39;Ticket C&#39;]]</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">可以看到，每个元素是 [key, value] 组成的数组：</span>
<span class="line"></span>
<span class="line">[&#39;specialSection&#39;, [&#39;All tickets&#39;]]</span>
<span class="line">[&#39;VIP&#39;, [&#39;Ticket A&#39;, &#39;Ticket B&#39;]]</span>
<span class="line">[&#39;General&#39;, [&#39;Ticket C&#39;]]</span>
<span class="line"></span>
<span class="line">步骤 2：map 解构赋值</span>
<span class="line">const dataList = Object.entries(groupedData).map(([sectionName, ticketNames]) =&gt; {</span>
<span class="line">  return { sectionName, ticketNames };</span>
<span class="line">});</span>
<span class="line">等价于</span>
<span class="line">const dataList = [</span>
<span class="line">  { sectionName: &#39;specialSection&#39;, ticketNames: [&#39;All tickets&#39;] },</span>
<span class="line">  { sectionName: &#39;VIP&#39;, ticketNames: [&#39;Ticket A&#39;, &#39;Ticket B&#39;] },</span>
<span class="line">  { sectionName: &#39;General&#39;, ticketNames: [&#39;Ticket C&#39;] }</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">在 map() 里：</span>
<span class="line">sectionName 对应对象的 key（比如 &quot;specialSection&quot;、&quot;VIP&quot;）。</span>
<span class="line">ticketNames 对应对象的 value（比如 [&#39;All tickets&#39;]、[&#39;Ticket A&#39;, &#39;Ticket B&#39;]）。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sort函数分析" tabindex="-1"><a class="header-anchor" href="#sort函数分析"><span>sort函数分析</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">上面的代码结构:</span>
<span class="line">.sort((a, b) =&gt; {</span>
<span class="line">  if (a.sectionName === &#39;nonSection&#39;) return 1; // &#39;nonSection&#39; 放到最后</span>
<span class="line">  if (b.sectionName === &#39;nonSection&#39;) return -1; // &#39;nonSection&#39; 放到最后</span>
<span class="line">  return 0; // 不改变其他项的顺序</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">分析:</span>
<span class="line">sort() 是一个用来对数组元素进行排序的 JavaScript 方法。它接受一个排序函数作为参数，这个排序函数决定了数组中元素的顺序。</span>
<span class="line"></span>
<span class="line">原理:</span>
<span class="line">sort() 接收的排序函数有两个参数：a 和 b。这两个参数 a 和 b 代表的是相邻的两个元素，用于比较它们的排序顺序。sort() 会根据它们的返回值来决定排序顺序。排序函数会被调用多次，直到所有的元素都按照一定的规则排序完成。</span>
<span class="line">如下:</span>
<span class="line">1&gt;数字排序</span>
<span class="line">array.sort((a, b) =&gt; {</span>
<span class="line">  return a - b;  // 升序排序</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">2&gt;对象数组排序</span>
<span class="line">const users = [</span>
<span class="line">  { name: &quot;Alice&quot;, age: 30 },</span>
<span class="line">  { name: &quot;Bob&quot;, age: 20 },</span>
<span class="line">  { name: &quot;Charlie&quot;, age: 25 }</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">// 按年龄升序排序</span>
<span class="line">users.sort((a, b) =&gt; a.age - b.age);</span>
<span class="line">console.log(users);</span>
<span class="line"></span>
<span class="line">// 按年龄降序排序</span>
<span class="line">users.sort((a, b) =&gt; b.age - a.age);</span>
<span class="line">console.log(users);</span>
<span class="line"></span>
<span class="line">返回值规则：</span>
<span class="line">如果返回值 小于 0（例如 -1），则 a 会排在 b 前面。</span>
<span class="line">如果返回值 大于 0（例如 1），则 b 会排在 a 前面。</span>
<span class="line">如果返回值 等于 0，则 a 和 b 的顺序不变。</span>
<span class="line"></span>
<span class="line">实例具体分析:</span>
<span class="line">第一条规则：if (a.sectionName === &#39;nonSection&#39;) return 1;</span>
<span class="line">这里是判断 a（当前正在比较的元素）的 sectionName 是否等于 &#39;nonSection&#39;。如果是，返回 1，表示 a 应该被排到 b 后面，也就是说 &quot;nonSection&quot; 会被排到最后。</span>
<span class="line"></span>
<span class="line">第二条规则：if (b.sectionName === &#39;nonSection&#39;) return -1;</span>
<span class="line">这里是判断 b（另一个正在比较的元素）的 sectionName 是否等于 &#39;nonSection&#39;。如果是，返回 -1，表示 b 应该被排到 a 后面，也就是说 &quot;nonSection&quot; 会被排到最后。</span>
<span class="line"></span>
<span class="line">第三条规则：return 0;</span>
<span class="line">如果 a 和 b 都不包含 &#39;nonSection&#39;，则返回 0，表示不改变它们的顺序。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="some-原理" tabindex="-1"><a class="header-anchor" href="#some-原理"><span>some()原理</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Array.prototype.some() 是 JavaScript 数组的一个方法，用于检查数组中是否 至少有一个元素 满足给定的测试条件。如果有一个元素满足条件，some() 会立即返回 true，否则返回 false。</span>
<span class="line">语法:</span>
<span class="line">array.some(callback(currentValue, index, array), thisArg);</span>
<span class="line">参数：</span>
<span class="line">callback：必需，函数，定义测试条件，接受以下参数：</span>
<span class="line">currentValue：当前元素的值。</span>
<span class="line">index：当前元素的索引（可选）。</span>
<span class="line">array：当前数组本身（可选）。</span>
<span class="line">thisArg：可选，callback 执行时的 this 值。</span>
<span class="line">返回值：</span>
<span class="line">true：如果回调函数对任意一个元素返回 true。</span>
<span class="line">false：如果回调函数对所有元素都返回 false。</span>
<span class="line"></span>
<span class="line">举例:</span>
<span class="line">const numbers = [1, 2, 3, 4, 5];</span>
<span class="line"></span>
<span class="line">// 判断是否存在大于 3 的数字</span>
<span class="line">const hasNumberGreaterThanThree = numbers.some(num =&gt; num &gt; 3);</span>
<span class="line"></span>
<span class="line">console.log(hasNumberGreaterThanThree); // true，4 和 5 满足条件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="every-原理" tabindex="-1"><a class="header-anchor" href="#every-原理"><span>every()原理</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Array.prototype.every() 是用于遍历数组的每个元素，并对每个元素应用指定的测试函数。它会返回一个布尔值，表示数组中的 所有 元素是否都满足指定的条件。</span>
<span class="line">举例:</span>
<span class="line">const array = [1, 2, 3, 4, 5];</span>
<span class="line"></span>
<span class="line">const allPositive = array.every(item =&gt; item &gt; 0);</span>
<span class="line"></span>
<span class="line">console.log(allPositive); // true，因为数组中的所有元素都是正数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30)]))}const d=n(l,[["render",c],["__file","js关于Object-entries的使用.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/js%E5%85%B3%E4%BA%8EObject-entries%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"js关于Object-entries的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"js关于Object-entries的使用","head":[["meta"],{"name":"title","content":"js关于Object-entries的使用"},["meta"],{"name":"description","content":"js关于Object-entries的使用"},["meta"],{"name":"keywords","content":"Object,entries"},["meta"],{"property":"og:title","content":"js关于Object-entries的使用"},["meta"],{"property":"og:description","content":"js关于Object-entries的使用"}]},"headers":[],"git":{},"filePathRelative":"content/front/js/js关于Object-entries的使用.md"}');export{d as comp,r as data};
