import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function p(t,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>npm下prepare和postinstall的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;这两个钩子都是在npm install 完成之后执行</span>
<span class="line">2&gt;prepare 会在 postinstall 后面执行，这是因为 postinstall 是在依赖包被安装后立即执行，而 prepare 则在 postinstall 之后执行。这样的执行顺序设计是为了确保在 postinstall 阶段完成了所有必要的初始化操作之后，再执行 prepare 钩子.</span>
<span class="line"></span>
<span class="line">下面是我实际运行的结果:</span>
<span class="line">npm install</span>
<span class="line"></span>
<span class="line">&gt; postinstall //先执行</span>
<span class="line">&gt; nuxt prepare</span>
<span class="line"></span>
<span class="line">✔ Types generated in .nuxt                                                                                                                                                                                                10:42:54 AM</span>
<span class="line"></span>
<span class="line">&gt; prepare //后执行</span>
<span class="line">&gt; husky install</span>
<span class="line"></span>
<span class="line">husky - Git hooks installed</span>
<span class="line"></span>
<span class="line">added 120 packages, removed 4 packages, and changed 8 packages in 5m</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(i,[["render",p],["__file","npm下prepare和postinstall的区别.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/npm%E4%B8%8Bprepare%E5%92%8Cpostinstall%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"npm下prepare和postinstall的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"npm下prepare和postinstall的区别","description":"npm下prepare和postinstall的区别"},"headers":[],"git":{},"filePathRelative":"content/front/js/npm下prepare和postinstall的区别.md"}');export{d as comp,c as data};
