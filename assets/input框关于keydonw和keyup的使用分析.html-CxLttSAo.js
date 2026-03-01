import{_ as e,c as s,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(p,n){return l(),s("div",null,n[0]||(n[0]=[a(`<p>input框关于keydonw和keyup的使用分析:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@keydown=&quot;handleKeyDown($event)&quot;</span>
<span class="line">@keyup=&quot;handleKeyUp($event)&quot;</span>
<span class="line"></span>
<span class="line">const handleKeyDown = (event: KeyboardEvent) =&gt; {</span>
<span class="line">  //这个打印，不会打印出当前输入数据，比如输入1，会打印空，在输入2，会打印1，在输入3，会打印12</span>
<span class="line">  console.log(&quot;model.value is:&quot;, model.value);</span>
<span class="line">}</span>
<span class="line">const handleKeyUp = (event: KeyboardEvent) =&gt; {</span>
<span class="line">//这个打印，会打印出当前输入数据，比如输入1，会打印1，在输入2，会打印12，在输入3，会打印123</span>
<span class="line">  console.log(&quot;model.value is:&quot;, model.value);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">这是keyDown和keyUp的一个重要不同，非常感谢实用，keyDown相当于可以保留之前的输入数据，不会立即更新，但是keyUp可以实时更新. 在做input数据验证的时候非常有用:</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">如下(这个案例只是其中一种场景，假设用户输入的是整数, 用来禁止用户输入超过指定值的数据，比如不能超过100):</span>
<span class="line">const handleKeyDown = (event: KeyboardEvent) =&gt; {</span>
<span class="line">  lastInputValue.value = model.value || &quot;&quot;;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">const handleInteger = (event: InputEvent) =&gt; {</span>
<span class="line">  const currentValue = (event.target as HTMLInputElement).value || &quot;&quot;;</span>
<span class="line">  if (currentValue &gt; props.maxNumber) {</span>
<span class="line">    (event.target as HTMLInputElement).value = lastInputValue.value; //由于lastInputValue.value 保留了props.maxNumber之前的数据，所以这里把之前的数据赋值给model.value，实现了禁止输入大于指定值的数据</span>
<span class="line">    model.value = lastInputValue.value;</span>
<span class="line">    event.preventDefault();</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">  &lt;input</span>
<span class="line">    v-model=&quot;model as string | number&quot;</span>
<span class="line">    @keydown=&quot;handleKeyDown($event)&quot;</span>
<span class="line">    @input=&quot;handleInteger($event)&quot;</span>
<span class="line">  &gt;</span>
<span class="line"></span>
<span class="line">总结:</span>
<span class="line">@keydown 事件是在 按键按下 的时候触发的，此时输入框的内容 还没有更新，也就是说，model 的值是 按键按下之前的值。</span>
<span class="line">@keyup 事件是在 按键松开 的时候触发的，此时输入框的内容 已经更新，所以 model 的值会是你当前输入的值。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const u=e(i,[["render",t],["__file","input框关于keydonw和keyup的使用分析.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/input%E6%A1%86%E5%85%B3%E4%BA%8Ekeydonw%E5%92%8Ckeyup%E7%9A%84%E4%BD%BF%E7%94%A8%E5%88%86%E6%9E%90.html","title":"input框关于keydonw和keyup的使用分析","lang":"en-US","frontmatter":{"sidebar":false,"title":"input框关于keydonw和keyup的使用分析","head":[["meta",{"name":"title","content":"input框关于keydonw和keyup的使用分析"}],["meta",{"name":"description","content":"input框关于keydonw和keyup的使用分析"}],["meta",{"name":"keywords","content":"input,key"}],["meta",{"property":"og:title","content":"input框关于keydonw和keyup的使用分析"}],["meta",{"property":"og:description","content":"input框关于keydonw和keyup的使用分析"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/input框关于keydonw和keyup的使用分析.md"}');export{u as comp,c as data};
