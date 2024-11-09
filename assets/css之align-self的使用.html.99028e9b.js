import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>css\u4E4Balign-self\u7684\u4F7F\u7528:</p><ul><li>\u5728\u4ECB\u7ECD\u8FD9\u4E2A\u4E4B\u524D\uFF0C\u6709\u5FC5\u8981\u91CD\u65B0\u56DE\u987E\u53CA\u5404\u77E5\u8BC6\u70B9</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cross axis(\u4EA4\u53C9\u8F74) \u548C main axis(\u4E3B\u8F74) \u7684\u5173\u7CFB\uFF0C\u5982\u679C\u4E3B\u8F74\u662Fx,\u90A3\u4E48\u4EA4\u53C9\u8F74\u5C31\u662Fy; \u53CD\u8FC7\u6765\uFF0C\u5982\u679C\u4E3B\u8F74\u662Fy\uFF0C\u90A3\u4E48\u4EA4\u53C9\u8F74\u5C31\u662Fx,
\u539F\u6587:
The cross axis in flexbox runs perpendicular to the main axis, therefore if your flex-direction is either row or row-reverse then the cross axis runs down the columns.
  
If your main axis is column or column-reverse then the cross axis runs along the rows.
  
\u53C2\u8003: https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>align-self\u7684\u4F5C\u7528</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>align-self CSS\u5C5E\u6027\u8986\u76D6grid\u6216flex\u9879\u76EE\u7684align-items\u503C\u3002\u5728\u7F51\u683C\u4E2D\uFF0C\u5B83\u5728\u7F51\u683C\u533A\u57DF\u5185\u5BF9\u9F50\u9879\u76EE\u3002\u5728flexbox\u4E2D\uFF0C\u5B83\u5728\u4EA4\u53C9\u8F74\u4E0A\u5BF9\u9F50\u9879\u76EE\u3002(\u91CD\u70B9\u662F \u8986\u76D6)
  
\u539F\u6587:
The align-self CSS property overrides a grid or flex item&#39;s align-items value. In grid, it aligns the item inside the grid area. In flexbox, it aligns the item on the cross axis.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B98\u65B9\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.html
&lt;section&gt;
  &lt;div&gt;Item #1&lt;/div&gt;
  &lt;div&gt;Item #2&lt;/div&gt;
  &lt;div&gt;Item #3&lt;/div&gt;
&lt;/section&gt;

2.css
section {
  display: flex;
  align-items: center;
  height: 120px;
  background: beige;
}

div {
  height: 60px;
  background: cyan;
  margin: 5px;
}

div:nth-child(3) {
  align-self: stretch;
  background: pink;
}

\u6548\u679C\u5C31\u662FItem #3 \u4F1A\u5728section\u8FD9\u4E2Abox\u7684\u9876\u90E8\u5F00\u59CB\u5E03\u5C40\uFF0C\u4E8C\u5176\u5B83\u4E24\u4E2A\u5219\u662F\u5782\u76F4\u5267\u4E2D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E38\u7528\u5C5E\u6027\u503C(\u8FD8\u6709\u5176\u5B83\u7684\uFF0C\u4F46\u662F\u6211\u8BA4\u4E3A\u4E0D\u5E38\u7528)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>align-self: center; /* Put the item around the center */
align-self: start; /* Put the item at the start */
align-self: end; /* Put the item at the end */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7279\u522B\u6CE8\u610F\u4E24\u4E2A\u7279\u522B\u5C5E\u6027\u503C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>align-self: auto; // Computes to the parent&#39;s align-items value.
align-self: normal; //For flex items, the keyword behaves as stretch.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11),a=[d];function t(r,v){return i(),n("div",null,a)}var u=e(l,[["render",t],["__file","css\u4E4Balign-self\u7684\u4F7F\u7528.html.vue"]]);export{u as default};
