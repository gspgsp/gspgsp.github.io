import{_ as i,o as e,c as n,g as l}from"./app.6e4bf74b.js";const s={},t=l(`<p>css\u4E4Bfill\u5C5E\u6027:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5BF9\u4E8E\u5F62\u72B6\u5143\u7D20\u548C\u6587\u672C\uFF0Cfill \u5C5E\u6027\u662F\u5916\u89C2\u5C5E\u6027\uFF0C\u7528\u6765\u5B9A\u4E49\u7ED9\u5B9A\u56FE\u5F62\u5143\u7D20\u5185\u90E8\u7684\u989C\u8272\u3002\u54EA\u4E00\u5757\u7B97\u662F\u201C\u5185\u90E8\u201D\u53D6\u51B3\u4E8E\u5F62\u72B6\u672C\u8EAB\u4EE5\u53CAfill-rule \u5C5E\u6027\u7684\u503C\u3002\u4F5C\u4E3A\u4E00\u4E2A\u5916\u89C2\u5C5E\u6027\uFF0C\u5B83\u53EF\u4EE5\u76F4\u63A5\u7528\u4F5C CSS \u6837\u5F0F\u8868\u5185\u90E8\u7684\u5C5E\u6027\u3002
  
https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill
https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule
  
\u5176\u4E2D\u6BD4\u8F83\u91CD\u8981\u7684:
\u4E0B\u5217\u5143\u7D20\u53EF\u4EE5\u4F7F\u7528fill\u5C5E\u6027\uFF1A
\u52A8\u753B\u5143\u7D20 
\u5F62\u72B6\u5143\u7D20 
\u6587\u672C\u5185\u5BB9\u5143\u7D20:\u5305\u62EC https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element#textcontent, \u5C31\u4ECB\u7ECD\u4E86svg\u5143\u7D20
  
\u91CD\u8981\u7684\u7ED3\u8BBA: \u53EF\u4EE5\u7ED9 svg\u5143\u7D20\u8BBE\u7F6E color,\u90A3\u4E48\u5C31\u4F1A\u6539\u53D8 svg\u56FE\u7247\u5185\u5BB9\u7684\u989C\u8272\uFF0C\u8FD9\u4E2A\u4E5F\u662F\u548Csvg\u56FE\u7247\u7684fill\u5C5E\u6027\u76F8\u5173\u7684.
\u4E3E\u4E2A\u4F8B\u5B50:
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot;&gt;
  &lt;path fill=&quot;currentColor&quot; d=&quot;M17 23v-4H7q-.825 0-1.412-.587T5 17V7H1V5h4V1h2v16h16v2h-4v4zm0-8V7H9V5h8q.825 0 1.413.588T19 7v8z&quot;&gt;&lt;/path&gt;
&lt;/svg&gt;
  
\u6837\u5F0F:
.icon-container:hover :deep(svg) {
  @apply text-purple-600;
}

\u5728\u8FD9\u4E2A SVG \u4EE3\u7801\u4E2D,&lt;path&gt; \u5143\u7D20\u7684 fill \u5C5E\u6027\u88AB\u8BBE\u7F6E\u4E3A currentColor\u3002\u8FD9\u610F\u5473\u7740\u5B83\u4F1A\u7EE7\u627F\u5F53\u524D\u5143\u7D20\u7684 color \u503C\u4F5C\u4E3A\u586B\u5145\u989C\u8272\u3002\u56E0\u6B64,\u5F53\u6211\u4EEC\u5C06 text-purple-600 \u5E94\u7528\u4E8E SVG \u5143\u7D20\u65F6,\u5B83\u5B9E\u9645\u4E0A\u662F\u5C06 color \u503C\u8BBE\u7F6E\u4E3A\u7D2B\u8272,\u4ECE\u800C\u5BFC\u81F4 &lt;path&gt; \u5143\u7D20\u7684\u586B\u5145\u989C\u8272\u4E5F\u53D8\u4E3A\u7D2B\u8272\u3002
\u6240\u4EE5,\u867D\u7136 text-purple-600 \u7684\u547D\u540D\u770B\u8D77\u6765\u50CF\u662F\u7528\u4E8E\u8BBE\u7F6E\u6587\u672C\u989C\u8272,\u4F46\u5B83\u540C\u65F6\u4E5F\u53EF\u4EE5\u5E94\u7528\u4E8E SVG \u5143\u7D20,\u4ECE\u800C\u6539\u53D8 SVG \u56FE\u5F62\u7684\u989C\u8272\u3002\u8FD9\u79CD\u673A\u5236\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684 CSS \u7C7B\u6765\u8BBE\u7F6E\u6587\u672C\u548C SVG \u56FE\u5F62\u7684\u989C\u8272,\u63D0\u9AD8\u4E86\u4EE3\u7801\u7684\u4E00\u81F4\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002

\u4E0B\u9762\u662F\u4E00\u4E2A\u5B98\u65B9\u5B9E\u4F8B:
&lt;svg viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;100%&quot;&gt;
  &lt;path
    fill=&quot;red&quot;
    d=&quot;M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,80
           Q 10,60 10,30 z&quot; /&gt;
&lt;/svg&gt;
  
https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/path, \u8FD9\u91CC\u6211\u76F4\u63A5\u901A\u8FC7fill \u8BBE\u7F6E\u989C\u8272\uFF0C\u7ED3\u679C\u53EF\u4EE5\u751F\u6548\uFF0C\u8BC1\u660E\u4E0A\u9762\u7684\u7406\u8BBA\u662F\u6B63\u786E\u7684.
  
\u89E3\u91CA\uFF1A svg\u4E2D xmlns=&quot;http://www.w3.org/2000/svg&quot;\u7684\u4F5C\u7528:
xmlns=&quot;http://www.w3.org/2000/svg&quot; \u8FD9\u4E2A\u5C5E\u6027\u662F\u7528\u6765\u5B9A\u4E49 SVG \u547D\u540D\u7A7A\u95F4\u7684\u3002
\u547D\u540D\u7A7A\u95F4\u662F\u4E00\u79CD\u7528\u6765\u907F\u514D\u5143\u7D20\u540D\u79F0\u51B2\u7A81\u7684\u65B9\u6CD5\u3002\u7531\u4E8E XML \u5141\u8BB8\u7EC4\u5408\u4E0D\u540C\u7684 XML \u6587\u6863,\u56E0\u6B64\u6709\u53EF\u80FD\u5728\u540C\u4E00\u4E2A XML \u6587\u6863\u4E2D\u51FA\u73B0\u76F8\u540C\u7684\u5143\u7D20\u540D\u79F0,\u4F46\u5177\u6709\u4E0D\u540C\u7684\u542B\u4E49\u548C\u7528\u9014\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898,XML \u547D\u540D\u7A7A\u95F4\u5C31\u5E94\u8FD0\u800C\u751F\u3002
SVG \u662F\u57FA\u4E8E XML \u7684\u77E2\u91CF\u56FE\u5F62\u8BED\u8A00,\u56E0\u6B64\u5B83\u4E5F\u9700\u8981\u4F7F\u7528\u547D\u540D\u7A7A\u95F4\u6765\u786E\u4FDD\u5143\u7D20\u540D\u79F0\u5728 XML \u6587\u6863\u4E2D\u7684\u552F\u4E00\u6027\u3002xmlns=&quot;http://www.w3.org/2000/svg&quot; \u8FD9\u4E2A\u5C5E\u6027\u5C31\u662F\u7528\u6765\u58F0\u660E SVG \u5143\u7D20\u6240\u5C5E\u7684\u547D\u540D\u7A7A\u95F4\u3002
\u5176\u4E2D:
xmlns \u662F &quot;XML Namespace&quot; \u7684\u7F29\u5199,\u8868\u793A\u8FD9\u662F\u4E00\u4E2A XML \u547D\u540D\u7A7A\u95F4\u58F0\u660E\u3002
http://www.w3.org/2000/svg \u662F SVG \u547D\u540D\u7A7A\u95F4\u7684 URI(Uniform Resource Identifier),\u8FD9\u4E2A URI \u662F\u7531 W3C(World Wide Web Consortium) \u5B9A\u4E49\u7684,\u7528\u4E8E\u552F\u4E00\u6807\u8BC6 SVG \u547D\u540D\u7A7A\u95F4\u3002
  
\u901A\u8FC7\u8FD9\u4E2A\u547D\u540D\u7A7A\u95F4\u58F0\u660E,\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u6B63\u786E\u5730\u8BC6\u522B\u548C\u89E3\u6790 SVG \u5143\u7D20,\u907F\u514D\u4E0E\u5176\u4ED6 XML \u8BED\u8A00\u4E2D\u7684\u5143\u7D20\u53D1\u751F\u51B2\u7A81\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[t];function d(r,u){return e(),n("div",null,v)}var c=i(s,[["render",d],["__file","css\u4E4Bfill\u5C5E\u6027.html.vue"]]);export{c as default};
