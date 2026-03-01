import{_ as s,c as e,f as a,o as t}from"./app-BB_BIQV8.js";const i={};function l(p,n){return t(),e("div",null,n[0]||(n[0]=[a(`<h5 id="一段典型的typescript代码" tabindex="-1"><a class="header-anchor" href="#一段典型的typescript代码"><span>一段典型的typeScript代码</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export function useDataTable&lt;T&gt;(input: MaybeRef&lt;UseDataTableOptions&lt;T&gt;&gt;) {</span>
<span class="line">  const options = computed(() =&gt; toValue(input));</span>
<span class="line">  const withoutPagination = computed(() =&gt; options.value.pagination === false);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">typeScript的自动类型推导:</span>
<span class="line">在调用 useDataTable 的时候，可以不用传递T的类型，可以通过参数 input 自动推断出 T 的类型，前提是 input 定义了类型或者ts很容易推导出类型</span>
<span class="line"></span>
<span class="line">关于MaybeRef&lt;T&gt;: 根据官网可以知道这是 T | Ref&lt;T&gt; 的别名, 原文: MaybeRef&lt;T&gt;: Alias for T | Ref&lt;T&gt;</span>
<span class="line">针对上面的， input可以是 UseDataTableOptions&lt;T&gt; 类型，也可以是 Ref&lt;UseDataTableOptions&lt;T&gt;&gt; 类型, 比如是一个computed 的 UseDataTableOptions&lt;T&gt; 对象</span>
<span class="line"></span>
<span class="line">关于tovalue:</span>
<span class="line">将值/引用/获取器规范化为值。(Normalizes values / refs / getters to values.)</span>
<span class="line"></span>
<span class="line">官方定义:</span>
<span class="line">function toValue&lt;T&gt;(source: T | Ref&lt;T&gt; | (() =&gt; T)): T</span>
<span class="line"></span>
<span class="line">例子:</span>
<span class="line">toValue(1) //       --&gt; 1</span>
<span class="line">toValue(ref(1)) //  --&gt; 1</span>
<span class="line">toValue(() =&gt; 1) // --&gt; 1</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">相关参考:</span>
<span class="line">https://vuejs.org/api/utility-types#mayberef</span>
<span class="line">https://vuejs.org/api/reactivity-utilities.html#tovalue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(i,[["render",l],["__file","一段典型的typeScript代码.html.vue"]]),d=JSON.parse('{"path":"/content/front/js/%E4%B8%80%E6%AE%B5%E5%85%B8%E5%9E%8B%E7%9A%84typeScript%E4%BB%A3%E7%A0%81.html","title":"一段典型的typeScript代码","lang":"en-US","frontmatter":{"sidebar":false,"title":"一段典型的typeScript代码","head":[["meta",{"name":"title","content":"一段典型的typeScript代码"}],["meta",{"name":"description","content":"一段典型的typeScript代码"}],["meta",{"name":"keywords","content":"typeScript"}],["meta",{"property":"og:title","content":"一段典型的typeScript代码"}],["meta",{"property":"og:description","content":"一段典型的typeScript代码"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/一段典型的typeScript代码.md"}');export{r as comp,d as data};
