import{_ as e,c as s,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(p,n){return a(),s("div",null,n[0]||(n[0]=[l(`<h2 id="实用npm包分享" tabindex="-1"><a class="header-anchor" href="#实用npm包分享"><span>实用npm包分享</span></a></h2><blockquote><p>rollup-plugin-delete</p></blockquote><p>作用:</p><blockquote><p>在 Rollup 构建过程中，自动删除指定的文件 / 目录。</p></blockquote><p>常见用来：</p><blockquote><p>构建前清理旧产物<br> 构建后删除中间文件<br> 多 target 构建时清掉不需要的输出</p></blockquote><p>使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//rollup.config.js</span>
<span class="line">import del from &#39;rollup-plugin-delete&#39;;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">input: &#39;src/index.js&#39;,</span>
<span class="line">output: {</span>
<span class="line">file: &#39;dist/bundle.js&#39;,</span>
<span class="line">format: &#39;esm&#39;</span>
<span class="line">},</span>
<span class="line">plugins: [</span>
<span class="line">del({</span>
<span class="line">targets: &#39;dist/*&#39;</span>
<span class="line">})</span>
<span class="line">]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个意思是：每次 build 时，先把 dist 清空</p><p>在package.json的scripts下添加配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">&quot;rollup:plugin&quot;: &quot;rollup -c rollup.config.js&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const r=e(i,[["render",t],["__file","实用npm包分享.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/%E5%AE%9E%E7%94%A8npm%E5%8C%85%E5%88%86%E4%BA%AB.html","title":"实用npm包分享","lang":"en-US","frontmatter":{"sidebar":false,"title":"实用npm包分享","head":[["meta",{"name":"title","content":"实用npm包分享"}],["meta",{"name":"description","content":"实用npm包分享"}],["meta",{"name":"keywords","content":"实用npm包分享"}],["meta",{"property":"og:title","content":"实用npm包分享"}],["meta",{"property":"og:description","content":"实用npm包分享"}]]},"headers":[{"level":2,"title":"实用npm包分享","slug":"实用npm包分享","link":"#实用npm包分享","children":[]}],"git":{},"filePathRelative":"content/front/js/实用npm包分享.md"}');export{r as comp,c as data};
