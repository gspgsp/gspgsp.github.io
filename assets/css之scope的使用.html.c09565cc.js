import{_ as e,o as t,c as l,g as i}from"./app.6e4bf74b.js";const n={},s=i(`<p>css\u4E4B:scope\u7684\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>html\u4E2D talbe \u4E2D\u7684 scope\u7684\u4F7F\u7528:
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;Alice&lt;/th&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;Bob&lt;/th&gt;
      &lt;td&gt;30&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
  
\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF1A
  
&quot;Name&quot; \u548C &quot;Age&quot; \u662F\u5217\u6807\u9898\uFF0C\u6240\u4EE5\u4F7F\u7528 scope=&quot;col&quot;
&quot;Alice&quot; \u548C &quot;Bob&quot; \u662F\u884C\u6807\u9898\uFF0C\u6240\u4EE5\u4F7F\u7528 scope=&quot;row&quot;
  
\u867D\u7136\u5728\u89C6\u89C9\u4E0A\u53EF\u80FD\u770B\u4E0D\u51FA\u5DEE\u522B\uFF0C\u4F46\u8FD9\u79CD\u7ED3\u6784\u5316\u4FE1\u606F\u5BF9\u4E8E\u4F7F\u7528\u8F85\u52A9\u6280\u672F\u7684\u7528\u6237\u975E\u5E38\u91CD\u8981\uFF0C\u80FD\u591F\u5E2E\u52A9\u4ED6\u4EEC\u66F4\u597D\u5730\u7406\u89E3\u8868\u683C\u7684\u7EC4\u7EC7\u7ED3\u6784\u3002
  
&lt;td&gt; \u6807\u7B7E\u4EE3\u8868 &quot;table data&quot;\uFF08\u8868\u683C\u6570\u636E\uFF09\uFF0C\u662F HTML \u8868\u683C\u4E2D\u6700\u57FA\u672C\u548C\u6700\u5E38\u7528\u7684\u5143\u7D20\u4E4B\u4E00\u3002\u5B83\u7528\u4E8E\u521B\u5EFA\u8868\u683C\u4E2D\u7684\u6807\u51C6\u5355\u5143\u683C\uFF0C\u5305\u542B\u8868\u683C\u7684\u5B9E\u9645\u6570\u636E\u3002
&lt;td&gt; \u6807\u7B7E\u4EE3\u8868 &quot;table data&quot;\uFF08\u8868\u683C\u6570\u636E\uFF09\uFF0C\u662F HTML \u8868\u683C\u4E2D\u6700\u57FA\u672C\u548C\u6700\u5E38\u7528\u7684\u5143\u7D20\u4E4B\u4E00\u3002\u5B83\u7528\u4E8E\u521B\u5EFA\u8868\u683C\u4E2D\u7684\u6807\u51C6\u5355\u5143\u683C\uFF0C\u5305\u542B\u8868\u683C\u7684\u5B9E\u9645\u6570\u636E\u3002
&lt;tr&gt; \u6807\u7B7E\u4EE3\u8868 &quot;table row&quot;\uFF08\u8868\u683C\u884C\uFF09\uFF0C\u7528\u4E8E\u5728 HTML \u8868\u683C\u4E2D\u521B\u5EFA\u4E00\u884C\u3002\u5B83\u662F\u6784\u5EFA\u8868\u683C\u7ED3\u6784\u7684\u5173\u952E\u5143\u7D20\u4E4B\u4E00\u3002
  
table\u76F8\u5173\u6587\u6863: 
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tr
  
\u5176\u5B83\u5173\u4E8Ecss\u7684 :scope\u7684\u4F7F\u7528\uFF0C\u4E0B\u9762\u4E3B\u8981\u662F\u9650\u5B9A\u6837\u5F0F\u751F\u6548\u7684\u8303\u56F4
https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope
https://liruifengv.com/posts/css-scope/

\u548C\u4E0A\u9762\u7684th\u4E2D\u7684\u4F7F\u7528\u662F\u4E0D\u4E00\u6837\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[s];function v(c,o){return t(),l("div",null,d)}var r=e(n,[["render",v],["__file","css\u4E4Bscope\u7684\u4F7F\u7528.html.vue"]]);export{r as default};
