import{_ as e,c as s,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(d,n){return a(),s("div",null,n[0]||(n[0]=[l(`<p>vue3之modelValue更新事件:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;传递参数(原生写法)</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;MyComponent v-model=&quot;modelValue&quot; @update:model-value=&quot;(value) =&gt; onValueChange(ticket.id, value)&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">2&gt;传递参数(简洁写法)</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;MyComponent v-model=&quot;modelValue&quot; @update:model-value=&quot;onValueChange(ticket.id, $event)&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">3&gt;如果没有自定义参数可以直接传递 $event 或者 什么参数也不传递，默认就是 $event, 在onValueChange 方法中直接可以获取</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;MyComponent v-model=&quot;modelValue&quot; @update:model-value=&quot;onValueChange($event)&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">或</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;MyComponent v-model=&quot;modelValue&quot; @update:model-value=&quot;onValueChange&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">对应方法:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">const onSectionCheckboxChanged = (id: number, value: boolean) =&gt; {</span>
<span class="line">  console.log(&quot;section is:&quot;, id);</span>
<span class="line">  console.log(&quot;section checked:&quot;, value)</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">const onSectionCheckboxChanged = (value: boolean) =&gt; {</span>
<span class="line">  console.log(&quot;section is:&quot;, id);</span>
<span class="line">  console.log(&quot;section checked:&quot;, value)</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=e(i,[["render",t],["__file","vue3之modelValue更新事件.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/vue3%E4%B9%8BmodelValue%E6%9B%B4%E6%96%B0%E4%BA%8B%E4%BB%B6.html","title":"vue3之modelValue更新事件","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3之modelValue更新事件","description":"vue3之modelValue更新事件"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3之modelValue更新事件.md"}');export{o as comp,u as data};
