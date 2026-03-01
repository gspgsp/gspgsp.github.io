import{_ as s,c as e,f as l,o as i}from"./app-BB_BIQV8.js";const a={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[l(`<h5 id="vue3下filter和map联合使用" tabindex="-1"><a class="header-anchor" href="#vue3下filter和map联合使用"><span>vue3下filter和map联合使用</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//通过map实现遍历返回数组对象</span>
<span class="line">const meals = mealOptions.value.map(({ id, title }) =&gt; ({ id, title }));</span>
<span class="line"></span>
<span class="line">//通过filter实现数据的过滤，这里是过滤掉title为空的对象</span>
<span class="line">const meals = mealOptions.value.filter(({ title }) =&gt; title).map(({ id, title }) =&gt; ({ id, title }));</span>
<span class="line"></span>
<span class="line">//上面的filter实际上可以展开为如下内容</span>
<span class="line">(item) =&gt; {</span>
<span class="line">  const title = item.title;</span>
<span class="line">  return title;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//分析</span>
<span class="line">const arr = [</span>
<span class="line">  { title: &#39;Hello&#39; },</span>
<span class="line">  { title: &#39;&#39; },</span>
<span class="line">  { title: &#39;World&#39; },</span>
<span class="line">  { title: null },</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">const result = arr.filter(item =&gt; {</span>
<span class="line">  const title = item.title;</span>
<span class="line">  return title; // 实际上会被转成 Boolean(title)</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">console.log(result);</span>
<span class="line">输出: [ { title: &#39;Hello&#39; }, { title: &#39;World&#39; } ]</span>
<span class="line"></span>
<span class="line">//原理</span>
<span class="line">因为 filter 的机制是这样的：</span>
<span class="line">array.filter(callback) // callback 要返回 true（保留）或 false（过滤掉）</span>
<span class="line"></span>
<span class="line">//以下是转换结果</span>
<span class="line">Boolean(&#39;abc&#39;)       // true</span>
<span class="line">Boolean(&#39;&#39;)          // false</span>
<span class="line">Boolean(null)        // false</span>
<span class="line">Boolean(undefined)   // false</span>
<span class="line">Boolean(0)           // false</span>
<span class="line">Boolean(1)           // true</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//关于解构和返回值</span>
<span class="line">filter(({ title }) =&gt; title) // 参数其实是item对象的展开, 这里只需要title, 返回普通值（比如字符串、布尔、数字、变量）不用括号</span>
<span class="line"></span>
<span class="line">map(({ id, title }) =&gt; ({ id, title })) // 参数其实是item对象的展开，这里需要id 和 title, 返回“对象字面量”要加括号 { id, title }  等给于 { id:id, title:title }</span>
<span class="line"></span>
<span class="line">//原理</span>
<span class="line">JavaScript 对象属性的简写规则：</span>
<span class="line">当你写对象字面量时，如果：键名和变量名相同，就可以省略 key: value 中的 value</span>
<span class="line"></span>
<span class="line">解构是按需取字段，不需要全取；</span>
<span class="line">解构对象时字段顺序无所谓；</span>
<span class="line">没有解构的字段就不会创建变量，省内存、提性能，也更干净！</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//直接赋值使用obj1 和 obj2 内容是等价的</span>
<span class="line">const id = 1;</span>
<span class="line">const title = &#39;Hello&#39;;</span>
<span class="line"></span>
<span class="line">const obj1 = { id, title };</span>
<span class="line">const obj2 = { id: id, title: title };</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(a,[["render",t],["__file","vue3下filter和map联合使用.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/vue3%E4%B8%8Bfilter%E5%92%8Cmap%E8%81%94%E5%90%88%E4%BD%BF%E7%94%A8.html","title":"vue3下filter和map联合使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3下filter和map联合使用","head":[["meta",{"name":"title","content":"vue3下filter和map联合使用"}],["meta",{"name":"description","content":"vue3下filter和map联合使用"}],["meta",{"name":"keywords","content":"vue3,map,filter"}],["meta",{"property":"og:title","content":"vue3下filter和map联合使用"}],["meta",{"property":"og:description","content":"vue3下filter和map联合使用"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3下filter和map联合使用.md"}');export{p as comp,v as data};
