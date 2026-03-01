import{_ as s,c as n,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(r,e){return l(),n("div",null,e[0]||(e[0]=[a(`<p>vue3下使用ref调用子组件方法的时候对ts类型的判断:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//paraernt.vue下调用子组件 UserDashboardEventSeriesTable.vue</span>
<span class="line"></span>
<span class="line">const eventSeriesTable = ref&lt;InstanceType&lt;</span>
<span class="line">  typeof UserDashboardEventSeriesTable</span>
<span class="line">&gt; | null&gt;(null);</span>
<span class="line"></span>
<span class="line">&lt;UserDashboardEventSeriesTable</span>
<span class="line">        ref=&quot;eventSeriesTable&quot;</span>
<span class="line">        :query-content=&quot;search&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">对于 eventSeriesTable 这个常量，我开始是这样定义类型的:</span>
<span class="line">interface ChildComponentMethod {</span>
<span class="line">  getEventSeriesItems: () =&gt; void;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">然后:</span>
<span class="line">const eventSeriesTable = ref&lt;ChildComponentMethod | null&gt;(null);</span>
<span class="line"></span>
<span class="line">但是后来，发现可以直接通过 typeof 获取组件类型，当然为了更安全，可以通过 InstanceType 实现</span>
<span class="line"></span>
<span class="line">官方文档:https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(i,[["render",t],["__file","vue3下使用ref调用子组件方法的时候对ts类型的判断.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/vue3%E4%B8%8B%E4%BD%BF%E7%94%A8ref%E8%B0%83%E7%94%A8%E5%AD%90%E7%BB%84%E4%BB%B6%E6%96%B9%E6%B3%95%E7%9A%84%E6%97%B6%E5%80%99%E5%AF%B9ts%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%88%A4%E6%96%AD.html","title":"vue3下使用ref调用子组件方法的时候对ts类型的判断","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3下使用ref调用子组件方法的时候对ts类型的判断","description":"vue3下使用ref调用子组件方法的时候对ts类型的判断"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3下使用ref调用子组件方法的时候对ts类型的判断.md"}');export{d as comp,p as data};
