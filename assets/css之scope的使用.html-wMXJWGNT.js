import{_ as n,c as l,f as e,o as a}from"./app-BB_BIQV8.js";const i={};function t(c,s){return a(),l("div",null,s[0]||(s[0]=[e(`<p>css之:scope的使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">html中 talbe 中的 scope的使用:</span>
<span class="line">&lt;table&gt;</span>
<span class="line">  &lt;thead&gt;</span>
<span class="line">    &lt;tr&gt;</span>
<span class="line">      &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;</span>
<span class="line">      &lt;th scope=&quot;col&quot;&gt;Age&lt;/th&gt;</span>
<span class="line">    &lt;/tr&gt;</span>
<span class="line">  &lt;/thead&gt;</span>
<span class="line">  &lt;tbody&gt;</span>
<span class="line">    &lt;tr&gt;</span>
<span class="line">      &lt;th scope=&quot;row&quot;&gt;Alice&lt;/th&gt;</span>
<span class="line">      &lt;td&gt;25&lt;/td&gt;</span>
<span class="line">    &lt;/tr&gt;</span>
<span class="line">    &lt;tr&gt;</span>
<span class="line">      &lt;th scope=&quot;row&quot;&gt;Bob&lt;/th&gt;</span>
<span class="line">      &lt;td&gt;30&lt;/td&gt;</span>
<span class="line">    &lt;/tr&gt;</span>
<span class="line">  &lt;/tbody&gt;</span>
<span class="line">&lt;/table&gt;</span>
<span class="line">  </span>
<span class="line">在这个例子中：</span>
<span class="line">  </span>
<span class="line">&quot;Name&quot; 和 &quot;Age&quot; 是列标题，所以使用 scope=&quot;col&quot;</span>
<span class="line">&quot;Alice&quot; 和 &quot;Bob&quot; 是行标题，所以使用 scope=&quot;row&quot;</span>
<span class="line">  </span>
<span class="line">虽然在视觉上可能看不出差别，但这种结构化信息对于使用辅助技术的用户非常重要，能够帮助他们更好地理解表格的组织结构。</span>
<span class="line">  </span>
<span class="line">&lt;td&gt; 标签代表 &quot;table data&quot;（表格数据），是 HTML 表格中最基本和最常用的元素之一。它用于创建表格中的标准单元格，包含表格的实际数据。</span>
<span class="line">&lt;td&gt; 标签代表 &quot;table data&quot;（表格数据），是 HTML 表格中最基本和最常用的元素之一。它用于创建表格中的标准单元格，包含表格的实际数据。</span>
<span class="line">&lt;tr&gt; 标签代表 &quot;table row&quot;（表格行），用于在 HTML 表格中创建一行。它是构建表格结构的关键元素之一。</span>
<span class="line">  </span>
<span class="line">table相关文档: </span>
<span class="line">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table</span>
<span class="line">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tr</span>
<span class="line">  </span>
<span class="line">其它关于css的 :scope的使用，下面主要是限定样式生效的范围</span>
<span class="line">https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope</span>
<span class="line">https://liruifengv.com/posts/css-scope/</span>
<span class="line"></span>
<span class="line">和上面的th中的使用是不一样的</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(i,[["render",t],["__file","css之scope的使用.html.vue"]]),o=JSON.parse('{"path":"/content/front/html/css%E4%B9%8Bscope%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"css之scope的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"css之scope的使用","description":"css之scope的使用"},"headers":[],"git":{},"filePathRelative":"content/front/html/css之scope的使用.md"}');export{d as comp,o as data};
