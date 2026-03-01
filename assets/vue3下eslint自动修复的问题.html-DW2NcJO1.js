import{_ as s,c as e,f as i,o as l}from"./app-BB_BIQV8.js";const a={};function c(t,n){return l(),e("div",null,n[0]||(n[0]=[i(`<h5 id="vue3下eslint自动修复的问题" tabindex="-1"><a class="header-anchor" href="#vue3下eslint自动修复的问题"><span>vue3下eslint自动修复的问题</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vue3有如下代码:</span>
<span class="line">watch(eventInSeries.value, (value) =&gt; {</span>
<span class="line">  if (value?.value) {</span>
<span class="line">    const isExist = selectedItems.value.some(</span>
<span class="line">      (item) =&gt; item.value === value.value,</span>
<span class="line">    );</span>
<span class="line">    if (!isExist) {</span>
<span class="line">      selectedItems.value.push(value);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">通过如下命令:</span>
<span class="line">npx eslint path/to/file.vue --fix</span>
<span class="line"></span>
<span class="line">$ npx eslint ./components/UserForm.vue --fix</span>
<span class="line"></span>
<span class="line">会自动把上面的</span>
<span class="line">if (value?.value) {}</span>
<span class="line">修改为</span>
<span class="line">if (value.value) {}</span>
<span class="line"></span>
<span class="line">导致git提交一直报:</span>
<span class="line">⚠ lint-staged prevented an empty git commit.</span>
<span class="line">  Use the --allow-empty option to continue, or check your task configuration</span>
<span class="line">husky - pre-commit script failed (code 1)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">但是实际上我们需要判断value是否为null，否则value.value会报错</span>
<span class="line"></span>
<span class="line">解决办法:</span>
<span class="line">watch(eventInSeries.value, (value) =&gt; {</span>
<span class="line">  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition</span>
<span class="line">  if (value?.value) {</span>
<span class="line">    const isExist = selectedItems.value.some(</span>
<span class="line">      (item) =&gt; item.value === value.value,</span>
<span class="line">    );</span>
<span class="line">    if (!isExist) {</span>
<span class="line">      selectedItems.value.push(value);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">局部加上</span>
<span class="line">// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition</span>
<span class="line">说明就可以了</span>
<span class="line"></span>
<span class="line">全局配置:</span>
<span class="line">在eslint.config.mjs里( ESLint 的 Flat Config 模式（即新版配置方式），不是传统的 .eslintrc.js。)</span>
<span class="line">rules: {</span>
<span class="line">      &#39;@typescript-eslint/no-unnecessary-condition&#39;: &#39;off&#39;, // ✅ 关闭它！本来设置的是 &#39;@typescript-eslint/no-unnecessary-condition&#39;: &#39;error&#39;,</span>
<span class="line">    },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(a,[["render",c],["__file","vue3下eslint自动修复的问题.html.vue"]]),p=JSON.parse('{"path":"/content/tool/front/vue3%E4%B8%8Beslint%E8%87%AA%E5%8A%A8%E4%BF%AE%E5%A4%8D%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"vue3下eslint自动修复的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3下eslint自动修复的问题","head":[["meta",{"name":"title","content":"vue3下eslint自动修复的问题"}],["meta",{"name":"description","content":"vue3下eslint自动修复的问题"}],["meta",{"name":"keywords","content":"vue3,eslint"}],["meta",{"property":"og:title","content":"vue3下eslint自动修复的问题"}],["meta",{"property":"og:description","content":"vue3下eslint自动修复的问题"}]]},"headers":[],"git":{},"filePathRelative":"content/tool/front/vue3下eslint自动修复的问题.md"}');export{d as comp,p as data};
