import{_ as s,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(p,n){return l(),e("div",null,n[0]||(n[0]=[a(`<p>vue3下input框限制只允许输入数字和小数:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export const filterInvalidCharacters = (value: string): string =&gt; {</span>
<span class="line">  const reg = /[^0-9.]/g;</span>
<span class="line">  return value.replaceAll(reg, &quot;&quot;);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">[^0-9.]：表示匹配所有不是数字（0-9）和小数点（.）的字符。</span>
<span class="line">replaceAll：将所有匹配的非法字符替换为空字符，从而实现过滤。</span>
<span class="line"></span>
<span class="line">但是这个还有问题，就是如果使用中文输入法，比如搜狗，在windows操作系统下，还是可以输入汉字，以及拼音。解决办法就是加一个 @compositionend 事件</span>
<span class="line"></span>
<span class="line">实际使用:</span>
<span class="line">const handleInteger = (event: InputEvent) =&gt; {</span>
<span class="line">  const currentValue = (event.target as HTMLInputElement).value || &quot;&quot;;</span>
<span class="line"></span>
<span class="line">  const filterValue = filterInvalidCharacters(currentValue);</span>
<span class="line">  if (filterValue === currentValue) {</span>
<span class="line">    const currentNumberValue = Number(currentValue) || 0;</span>
<span class="line">    if (props.maxNumber &amp;&amp; currentNumberValue &gt; props.maxNumber) {</span>
<span class="line">      (event.target as HTMLInputElement).value = lastInputValue.value;</span>
<span class="line">      model.value = lastInputValue.value;</span>
<span class="line">      event.preventDefault();</span>
<span class="line">    }</span>
<span class="line">  } else {</span>
<span class="line">    event.preventDefault();</span>
<span class="line">    model.value = filterValue;</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">const handleInput = (event: InputEvent) =&gt; {</span>
<span class="line">  const currentValue = (event.target as HTMLInputElement).value || &quot;&quot;;</span>
<span class="line"></span>
<span class="line">  const filterValue = filterInvalidCharacters(currentValue);</span>
<span class="line">  if (filterValue !== currentValue) {</span>
<span class="line">    event.preventDefault();</span>
<span class="line">    model.value = filterValue;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  if (currentValue.includes(&quot;.&quot;)) {</span>
<span class="line">    const numbersAfterDecimalPoint = currentValue.split(&quot;.&quot;)[1];</span>
<span class="line">    if (numbersAfterDecimalPoint.length &gt; props.decimalPlaces) {</span>
<span class="line">      (event.target as HTMLInputElement).value = lastInputValue.value;</span>
<span class="line">      model.value = lastInputValue.value;</span>
<span class="line">      event.preventDefault();</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;MInput</span>
<span class="line">  v-model=&quot;model as string | number&quot;</span>
<span class="line">  outlined</span>
<span class="line">  hide-state-icons</span>
<span class="line">  type=&quot;text&quot;</span>
<span class="line">  :name</span>
<span class="line">  :label</span>
<span class="line">  :disabled</span>
<span class="line">  :placeholder</span>
<span class="line">  :hint=&quot;field?.errorMessage.value || hint&quot;</span>
<span class="line">  :state</span>
<span class="line">  :class=&quot;dynamicClasses&quot;</span>
<span class="line">  :autocomplete</span>
<span class="line">  @keydown=&quot;handleKeyDown($event)&quot;</span>
<span class="line">  @keyup.enter=&quot;emit(&#39;enter&#39;)&quot;</span>
<span class="line">  @input=&quot;onlyInteger ? handleInteger($event) : handleInput($event)&quot;</span>
<span class="line">  @compositionend=&quot;onlyInteger ? handleInteger($event) : handleInput($event)&quot;</span>
<span class="line">/&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@compositionend 是什么？</span>
<span class="line">@compositionend 是 Vue 绑定的 compositionend 事件，它在 输入法（IME）输入完成后 触发，通常用于处理拼音输入、日语假名输入等情况。</span>
<span class="line">作用：</span>
<span class="line">用于监听输入法输入完成的时机</span>
<span class="line">防止输入法候选字符未完全提交时触发 @input</span>
<span class="line">解决 @input 在部分输入法（如 Windows 下的搜狗输入法）中的兼容性问题</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">为什么 @compositionend 很重要？</span>
<span class="line">在 Windows 系统（特别是中文输入法）中：</span>
<span class="line"></span>
<span class="line">用户在输入 &quot;你好&quot; 时，输入法会先输入 n，然后 i，但这时输入框内的值 还未最终确定，候选框还在变化。</span>
<span class="line">直到用户按下 空格或回车，才会提交最终的「你好」。</span>
<span class="line">但 @input 可能会在未完成拼写时触发，导致错误的处理。</span>
<span class="line">在 Linux/macOS 上，一些输入法在输入过程中不会触发 @input，导致字符无法正确过滤。</span>
<span class="line"></span>
<span class="line">为了解决这个问题，我们可以监听 compositionend 事件，在输入法输入完成后再进行处理。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const u=s(i,[["render",t],["__file","vue3下input框限制只允许输入数字和小数.html.vue"]]),d=JSON.parse('{"path":"/content/front/js/vue3%E4%B8%8Binput%E6%A1%86%E9%99%90%E5%88%B6%E5%8F%AA%E5%85%81%E8%AE%B8%E8%BE%93%E5%85%A5%E6%95%B0%E5%AD%97%E5%92%8C%E5%B0%8F%E6%95%B0.html","title":"vue3下input框限制只允许输入数字和小数","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3下input框限制只允许输入数字和小数","head":[["meta",{"name":"title","content":"vue3下input框限制只允许输入数字和小数"}],["meta",{"name":"description","content":"vue3下input框限制只允许输入数字和小数"}],["meta",{"name":"keywords","content":"vue3,input"}],["meta",{"property":"og:title","content":"vue3下input框限制只允许输入数字和小数"}],["meta",{"property":"og:description","content":"vue3下input框限制只允许输入数字和小数"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3下input框限制只允许输入数字和小数.md"}');export{u as comp,d as data};
