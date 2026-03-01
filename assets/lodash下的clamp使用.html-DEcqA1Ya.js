import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(c,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h5 id="lodash下的clamp使用" tabindex="-1"><a class="header-anchor" href="#lodash下的clamp使用"><span>lodash下的clamp使用</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">watch(</span>
<span class="line">  isActive,</span>
<span class="line">  (active) =&gt; {</span>
<span class="line">    const el = textareaRef.value;</span>
<span class="line">    if (!el) return;</span>
<span class="line">    el.style.height = active ? &quot;&quot; : \`\${clamp(24, el.scrollHeight, 381)}px\`;</span>
<span class="line">  },</span>
<span class="line">  { flush: &quot;post&quot; },</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="代码分析" tabindex="-1"><a class="header-anchor" href="#代码分析"><span>代码分析</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Lodash 的 clamp 函数定义如下：</span>
<span class="line"></span>
<span class="line">clamp(number, lower, upper)</span>
<span class="line"></span>
<span class="line">它的作用是将 number 限制在 lower 和 upper 之间：</span>
<span class="line">如果 number &lt; lower，返回 lower</span>
<span class="line">如果 number &gt; upper，返回 upper</span>
<span class="line">否则返回 number 本身</span>
<span class="line"></span>
<span class="line">{ flush: &quot;post&quot; }:</span>
<span class="line">表示在 DOM 更新之后 再触发 watch 的回调函数。</span>
<span class="line">用于确保 DOM 变更（例如 v-if, v-show 的切换）已经完成，从而能正确读取 el.scrollHeight。</span>
<span class="line"></span>
<span class="line">这个 watch 的主要作用是:</span>
<span class="line">动态调整 &lt;textarea&gt; 的高度，根据是否“激活”来控制。</span>
<span class="line">如果 isActive 为 false，则将 &lt;textarea&gt; 的高度设为其内容高度（受限于 24～381px）。</span>
<span class="line">如果 isActive 为 true，则清除固定高度，让其恢复自动调整（例如用于用户输入时自动扩展）。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const p=n(i,[["render",t],["__file","lodash下的clamp使用.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/lodash%E4%B8%8B%E7%9A%84clamp%E4%BD%BF%E7%94%A8.html","title":"lodash下的clamp使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"lodash下的clamp使用","head":[["meta",{"name":"title","content":"lodash下的clamp使用"}],["meta",{"name":"description","content":"lodash下的clamp使用"}],["meta",{"name":"keywords","content":"vue3,lodash,clamp"}],["meta",{"property":"og:title","content":"lodash下的clamp使用"}],["meta",{"property":"og:description","content":"lodash下的clamp使用"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/lodash下的clamp使用.md"}');export{p as comp,r as data};
