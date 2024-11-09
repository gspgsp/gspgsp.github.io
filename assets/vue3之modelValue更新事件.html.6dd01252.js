import{_ as e,o as n,c as l,g as t}from"./app.66ae8700.js";const i={},d=t(`<p>vue3\u4E4BmodelValue\u66F4\u65B0\u4E8B\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u4F20\u9012\u53C2\u6570(\u539F\u751F\u5199\u6CD5)
&lt;template&gt;
  &lt;MyComponent v-model=&quot;modelValue&quot; @update:model-value=&quot;(value) =&gt; onValueChange(ticket.id, value)&quot; /&gt;
&lt;/template&gt;
  
2&gt;\u4F20\u9012\u53C2\u6570(\u7B80\u6D01\u5199\u6CD5)
&lt;template&gt;
  &lt;MyComponent v-model=&quot;modelValue&quot; @update:model-value=&quot;onValueChange(ticket.id, $event)&quot; /&gt;
&lt;/template&gt;
  
3&gt;\u5982\u679C\u6CA1\u6709\u81EA\u5B9A\u4E49\u53C2\u6570\u53EF\u4EE5\u76F4\u63A5\u4F20\u9012 $event \u6216\u8005 \u4EC0\u4E48\u53C2\u6570\u4E5F\u4E0D\u4F20\u9012\uFF0C\u9ED8\u8BA4\u5C31\u662F $event, \u5728onValueChange \u65B9\u6CD5\u4E2D\u76F4\u63A5\u53EF\u4EE5\u83B7\u53D6
&lt;template&gt;
  &lt;MyComponent v-model=&quot;modelValue&quot; @update:model-value=&quot;onValueChange($event)&quot; /&gt;
&lt;/template&gt;
\u6216
&lt;template&gt;
  &lt;MyComponent v-model=&quot;modelValue&quot; @update:model-value=&quot;onValueChange&quot; /&gt;
&lt;/template&gt;
  
\u5BF9\u5E94\u65B9\u6CD5:
&lt;script setup&gt;
const onSectionCheckboxChanged = (id: number, value: boolean) =&gt; {
  console.log(&quot;section is:&quot;, id);
  console.log(&quot;section checked:&quot;, value)
};
&lt;/script&gt;
  
&lt;script setup&gt;
const onSectionCheckboxChanged = (value: boolean) =&gt; {
  console.log(&quot;section is:&quot;, id);
  console.log(&quot;section checked:&quot;, value)
};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[d];function u(o,a){return n(),l("div",null,s)}var c=e(i,[["render",u],["__file","vue3\u4E4BmodelValue\u66F4\u65B0\u4E8B\u4EF6.html.vue"]]);export{c as default};
