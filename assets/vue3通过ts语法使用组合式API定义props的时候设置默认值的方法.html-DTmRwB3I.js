import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function p(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>vue3通过ts语法使用组合式API定义props的时候,设置默认值的方法：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export interface Props {</span>
<span class="line">  msg: string</span>
<span class="line">  labels: string[]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const props = withDefaults(defineProps&lt;Props&gt;(), {</span>
<span class="line">  msg: &#39;hello&#39;, //简单类型直接赋值</span>
<span class="line">  labels: () =&gt; [&#39;one&#39;, &#39;two&#39;] //由于是数组，所以可以直接这样赋值， 也可以通过匿名函数返回 [&#39;one&#39;, &#39;two&#39;]</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">//先定义MessageObj.ts</span>
<span class="line">export interface MessageObj{</span>
<span class="line">    variant: string,</span>
<span class="line">    message: string</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//使用</span>
<span class="line">interface MyComponentProps {</span>
<span class="line">  modelValue: boolean;</span>
<span class="line">  toastObj: MessageObj;</span>
<span class="line">  timeOut: number;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const props = withDefaults(defineProps&lt;MyComponentProps&gt;(), {</span>
<span class="line">  timeOut: 1500,//简单类型直接赋值</span>
<span class="line">  modelValue: false,//简单类型直接赋值</span>
<span class="line">  toastObj: () =&gt; { // 这里需要通过匿名函数的形式返回数据</span>
<span class="line">    return {</span>
<span class="line">      variant: &#39;accent&#39;,</span>
<span class="line">      message: &#39;请求成功&#39;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//错误使用代码</span>
<span class="line">const props = withDefaults(defineProps&lt;MyComponentProps&gt;(), {</span>
<span class="line">  timeOut: 1500,//简单类型直接赋值</span>
<span class="line">  modelValue: false,//简单类型直接赋值</span>
<span class="line">  toastObj: { // 这样是错误用法，我开始一直想这么用，但是一直报错，后来通过官网才找到解决办法，因为 defineProps 返回的是一个readonly类型的数据，不知道为什么，对于复杂类型，不能这么用，但是普通数据类型是可以的</span>
<span class="line">      variant: &#39;accent&#39;,</span>
<span class="line">      message: &#39;请求成功&#39;</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">总结就是:普通的数据类型，可以直接赋值，比如 bool string 等，对于复杂类型需要通过匿名函数返回，但是所有的类型都是可以通过匿名函数返回数据的.</span>
<span class="line">  </span>
<span class="line">完整解释:</span>
<span class="line">在这里，defineProps&lt;MyComponentProps&gt;() 返回一个包含了你定义的组件属性的只读属性对象。然后，withDefaults 函数被用来为这些属性提供默认值。</span>
<span class="line"></span>
<span class="line">关于 timeOut 和 modelValue，它们的默认值被设置为简单类型（1500 和 false），这是因为这些属性的默认值可以直接使用，而不会触发 TypeScript 的只读属性错误。你可以直接在属性对象上设置简单类型的默认值，这是 TypeScript 允许的。</span>
<span class="line"></span>
<span class="line">关于 toastObj，这是一个对象类型，你想为它提供默认值。但是，由于 TypeScript 的只读属性特性，如果你直接在对象中提供默认值，TypeScript 会认为这个对象是只读的，而不能被修改。</span>
<span class="line"></span>
<span class="line">为了绕开这个问题，你使用了一个匿名函数 () =&gt; {...} 来延迟 toastObj 的创建。这样，这个函数会在需要 toastObj 的默认值时被调用，生成一个新的对象。这个新对象并不是定义时的只读属性对象的一部分，因此不会触发 TypeScript 的只读属性错误。实际上，你是在运行时生成了 toastObj 的默认值，而不是在定义时。</span>
<span class="line"></span>
<span class="line">所以，总体来说，通过使用函数来延迟对象的创建，你规避了 TypeScript 对只读属性的限制，使得在需要时才生成对象的默认值。这是一种常见的解决方案，确保你能够为对象类型的属性提供默认值而不触发 TypeScript 的只读属性错误。</span>
<span class="line">  </span>
<span class="line">参考：https://cn.vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=n(l,[["render",p],["__file","vue3通过ts语法使用组合式API定义props的时候设置默认值的方法.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/vue3%E9%80%9A%E8%BF%87ts%E8%AF%AD%E6%B3%95%E4%BD%BF%E7%94%A8%E7%BB%84%E5%90%88%E5%BC%8FAPI%E5%AE%9A%E4%B9%89props%E7%9A%84%E6%97%B6%E5%80%99%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC%E7%9A%84%E6%96%B9%E6%B3%95.html","title":"vue3通过ts语法使用组合式API定义props的时候设置默认值的方法","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3通过ts语法使用组合式API定义props的时候设置默认值的方法","description":"vue3通过ts语法使用组合式API定义props的时候设置默认值的方法"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3通过ts语法使用组合式API定义props的时候设置默认值的方法.md"}');export{t as comp,r as data};
