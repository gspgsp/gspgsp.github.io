import{_ as n,c as s,f as a,o as t}from"./app-BB_BIQV8.js";const i={};function l(c,e){return t(),s("div",null,e[0]||(e[0]=[a(`<p>vee-validate验证之context使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vee-validate验证，通过context获取表单上下文信息:</span>
<span class="line">let schema = string();</span>
<span class="line">  </span>
<span class="line">schema = schema.test(</span>
<span class="line">        &quot;is-price-set-with-condition&quot;,</span>
<span class="line">        errorMessage,</span>
<span class="line">        function (value, context) {</span>
<span class="line">          console.log(&quot;context is:&quot;, context); // 打印出来是一个对象，其中有个 parent 属性，包括了当前表单的所有数据。还有path属性，这个path定义了当前验证字段名称</span>
<span class="line">          const fieldValue = context.parent[fieldForCondition];  // 也可以通过function的第二个参数 context 来获取，很有用</span>
<span class="line">          // const fieldValue = this.parent[fieldForCondition];  //之前用过 this.parent获取表单的其它字段</span>
<span class="line">          console.log(&quot;fieldValue is:&quot;, fieldValue)</span>
<span class="line">          return !(fieldValue &amp;&amp; !value);</span>
<span class="line">        },</span>
<span class="line">      );</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=n(i,[["render",l],["__file","vee-validate验证之context使用.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/vee-validate%E9%AA%8C%E8%AF%81%E4%B9%8Bcontext%E4%BD%BF%E7%94%A8.html","title":"vee-validate验证之context使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"vee-validate验证之context使用","description":"vee-validate验证之context使用"},"headers":[],"git":{},"filePathRelative":"content/front/js/vee-validate验证之context使用.md"}');export{o as comp,r as data};
