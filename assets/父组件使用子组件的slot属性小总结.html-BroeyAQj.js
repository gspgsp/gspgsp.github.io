import{_ as n,c as l,f as e,o as a}from"./app-BB_BIQV8.js";const t={};function i(d,s){return a(),l("div",null,s[0]||(s[0]=[e(`<h3 id="父组件使用子组件的slot属性小总结" tabindex="-1"><a class="header-anchor" href="#父组件使用子组件的slot属性小总结"><span>父组件使用子组件的slot属性小总结</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">只有一个default slot的时候</span>
<span class="line">v-slot=&quot;slotProps&quot;</span>
<span class="line">注意: slotProps 只是一个名字，可以按需求命名，可以任意</span>
<span class="line">或</span>
<span class="line">v-slot=&quot;{ rounds, isEditing, quitEditing }&quot;</span>
<span class="line">直接解构出slot属性</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">多个slot的时候，如果还这么用的话，可能得:</span>
<span class="line">&lt;Child v-slot=&quot;slots&quot;&gt;</span>
<span class="line">  {{ slots.default.rounds }}</span>
<span class="line">  {{ slots.footer.info }}</span>
<span class="line">&lt;/Child&gt;</span>
<span class="line"></span>
<span class="line">但是大部分情况会这么用:</span>
<span class="line">&lt;Child&gt;</span>
<span class="line">  &lt;template #default=&quot;{ rounds }&quot;&gt;</span>
<span class="line">    {{ rounds }}</span>
<span class="line">  &lt;/template&gt;</span>
<span class="line"></span>
<span class="line">  &lt;template #footer=&quot;{ info }&quot;&gt;</span>
<span class="line">    {{ info }}</span>
<span class="line">  &lt;/template&gt;</span>
<span class="line">&lt;/Child&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=n(t,[["render",i],["__file","父组件使用子组件的slot属性小总结.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/%E7%88%B6%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84slot%E5%B1%9E%E6%80%A7%E5%B0%8F%E6%80%BB%E7%BB%93.html","title":"父组件使用子组件的slot属性小总结","lang":"en-US","frontmatter":{"sidebar":false,"title":"父组件使用子组件的slot属性小总结","head":[["meta",{"name":"title","content":"父组件使用子组件的slot属性小总结"}],["meta",{"name":"description","content":"父组件使用子组件的slot属性小总结"}],["meta",{"name":"keywords","content":"父组件使用子组件的slot属性小总结"}],["meta",{"property":"og:title","content":"父组件使用子组件的slot属性小总结"}],["meta",{"property":"og:description","content":"父组件使用子组件的slot属性小总结"}]]},"headers":[{"level":3,"title":"父组件使用子组件的slot属性小总结","slug":"父组件使用子组件的slot属性小总结","link":"#父组件使用子组件的slot属性小总结","children":[]}],"git":{},"filePathRelative":"content/front/js/父组件使用子组件的slot属性小总结.md"}');export{c as comp,p as data};
