import{_ as s,c as e,f as l,o as i}from"./app-BB_BIQV8.js";const a={};function c(p,n){return i(),e("div",null,n[0]||(n[0]=[l(`<p>vue3下复制到剪贴板:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;font-normal flex&quot;&gt;</span>
<span class="line">    &lt;!-- 链接容器 --&gt;</span>
<span class="line">    &lt;div ref=&quot;linkText&quot; class=&quot;max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap&quot;&gt;</span>
<span class="line">      https://github.com/gspgsp</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;!-- 图标按钮 --&gt;</span>
<span class="line">    &lt;MIcon name=&quot;content_copy&quot; size=&quot;sm&quot; @click=&quot;copyToClipboard&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">&lt;script setup lang=ts&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;;</span>
<span class="line">  </span>
<span class="line">// 用于获取链接内容的 ref</span>
<span class="line">const linkText = ref(null);</span>
<span class="line">  </span>
<span class="line">// 复制到剪贴板的方法</span>
<span class="line">const copyToClipboard = () =&gt; {</span>
<span class="line">  if (linkText.value) {</span>
<span class="line">    // 获取链接的文本内容</span>
<span class="line">    const textToCopy = linkText.value.textContent;</span>
<span class="line">    // 使用 Clipboard API 复制文本</span>
<span class="line">    navigator.clipboard.writeText(textToCopy)</span>
<span class="line">      .then(() =&gt; {</span>
<span class="line">        alert(&#39;链接已复制到剪贴板！&#39;);</span>
<span class="line">      })</span>
<span class="line">      .catch(err =&gt; {</span>
<span class="line">        console.error(&#39;复制失败：&#39;, err);</span>
<span class="line">      });</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">分析:</span>
<span class="line">navigator.clipboard.writeText 是 Web Clipboard API 的一部分，用于将文本写入用户的剪贴板。这是一个现代浏览器中提供的异步方法，可以安全、便捷地完成剪贴板操作。</span>
<span class="line">  </span>
<span class="line">参数</span>
<span class="line">text: 要复制到剪贴板的字符串。</span>
<span class="line">  </span>
<span class="line">返回值</span>
<span class="line">Promise&lt;void&gt;: 返回一个 Promise，表示复制操作的完成状态。</span>
<span class="line">如果成功，Promise 会被解析。</span>
<span class="line">如果失败，Promise 会被拒绝，并返回错误。</span>
<span class="line">  </span>
<span class="line">将上面的方法封装到utils里:</span>
<span class="line">// /utils/clipboard.ts</span>
<span class="line">export const copyToClipboard = async (text: string): Promise&lt;boolean&gt; =&gt; {</span>
<span class="line">  try {</span>
<span class="line">    await navigator.clipboard.writeText(text);</span>
<span class="line">    return true;</span>
<span class="line">  } catch (err: any) {</span>
<span class="line">    console.error(&quot;copy failed:&quot;, err);</span>
<span class="line">    return false;</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">使用:</span>
<span class="line">import { copyToClipboard } from &#39;@/utils/clipboard&#39;;</span>
<span class="line">  </span>
<span class="line">const isToastVisible = ref(false);</span>
<span class="line">const linkText = ref(null);</span>
<span class="line">const handleCopy = async () =&gt; {</span>
<span class="line">  if (linkText.value) {</span>
<span class="line">    const textToCopy = linkText.value.textContent || &quot;&quot;;</span>
<span class="line">    const result = await copyToClipboard(textToCopy);</span>
<span class="line">    if (result) {</span>
<span class="line">      isToastVisible.value = true;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">分析:</span>
<span class="line">Promise&lt;boolean&gt; 是对一个 返回值类型为 boolean 的 Promise 的声明，表示函数是异步的，并且会返回一个带有 boolean 类型值的 Promise。</span>
<span class="line">  </span>
<span class="line">具体含义</span>
<span class="line">Promise:</span>
<span class="line">  </span>
<span class="line">是 JavaScript 中表示异步操作结果的对象。</span>
<span class="line">它的状态可以是 pending（进行中）、fulfilled（已成功） 或 rejected（已失败）。</span>
<span class="line">boolean 类型:</span>
<span class="line">  </span>
<span class="line">这里 boolean 指定了 Promise 被 fulfilled（成功）时解析的值是 true 或 false。</span>
<span class="line">如果 Promise 被 rejected（失败），它不会返回 boolean 值，而是进入 catch 块。</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">关于Promise拓展:</span>
<span class="line">function getData(condition: boolean): Promise&lt;string&gt; {</span>
<span class="line">  if (condition) {</span>
<span class="line">    return Promise.resolve(&quot;Immediate response&quot;); // 如果满足条件，直接返回完成的 Promise</span>
<span class="line">  } else {</span>
<span class="line">    return new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&quot;Delayed response&quot;), 1000)); // 模拟异步</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">// 使用</span>
<span class="line">getData(true).then(console.log); // 输出: Immediate response</span>
<span class="line">getData(false).then(console.log); // 1 秒后输出: Delayed response</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=s(a,[["render",c],["__file","vue3下复制到剪贴板.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/vue3%E4%B8%8B%E5%A4%8D%E5%88%B6%E5%88%B0%E5%89%AA%E8%B4%B4%E6%9D%BF.html","title":"vue3下复制到剪贴板","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3下复制到剪贴板","head":[["meta",{"name":"title","content":"vue3下复制到剪贴板"}],["meta",{"name":"description","content":"vue3下复制到剪贴板"}],["meta",{"name":"keywords","content":"vue3"}],["meta",{"property":"og:title","content":"vue3下复制到剪贴板"}],["meta",{"property":"og:description","content":"vue3下复制到剪贴板"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3下复制到剪贴板.md"}');export{t as comp,v as data};
