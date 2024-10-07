import{_ as e,o as i,c as n,g as l}from"./app.d66d8774.js";const s={},d=l(`<p>mysql\u4E4BXProtocol:</p><ul><li>\u7F18\u8D77</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u4E0B\u662F\u6211\u7684mysql container \u7AEF\u53E3\u5C55\u793A:
33060/tcp, 0.0.0.0:3307-&gt;3306/tcp, :::3307-&gt;3306/tcp
\u6211\u60F3\u77E5\u9053\u6211\u8BBE\u7F6E\u7684\u662F3307---&gt;3306, \u4F46\u662F\u524D\u9762\u768433060\u662F\u4EC0\u4E48\u610F\u601D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u89E3\u91CA</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u60A8\u63D0\u4F9B\u7684MySQL\u5BB9\u5668\u7AEF\u53E3\u6620\u5C04\u4FE1\u606F\u4E2D\u5305\u542B\u4E86\u4E09\u4E2A\u90E8\u5206\uFF1A
  
1. \`33060/tcp\`: 
   \u8FD9\u662FMySQL\u7684X Protocol\u7AEF\u53E3\u3002X Protocol\u662FMySQL 5.7.12\u53CA\u66F4\u9AD8\u7248\u672C\u5F15\u5165\u7684\u4E00\u4E2A\u65B0\u7684\u534F\u8BAE\uFF0C\u7528\u4E8E\u652F\u6301MySQL\u6587\u6863\u5B58\u50A8\u7B49\u65B0\u7279\u6027\u3002\u8FD9\u4E2A\u7AEF\u53E3\u9ED8\u8BA4\u662F\u66B4\u9732\u7684\uFF0C\u4F46\u6CA1\u6709\u88AB\u6620\u5C04\u5230\u4E3B\u673A\u4E0A\u3002
  
2. \`0.0.0.0:3307-&gt;3306/tcp\`:
   \u8FD9\u662F\u60A8\u8BBE\u7F6E\u7684\u7AEF\u53E3\u6620\u5C04\u3002\u5B83\u8868\u793A\u5BB9\u5668\u5185\u76843306\u7AEF\u53E3\uFF08MySQL\u7684\u9ED8\u8BA4\u7AEF\u53E3\uFF09\u88AB\u6620\u5C04\u5230\u4E3B\u673A\u76843307\u7AEF\u53E3\u4E0A\u30020.0.0.0\u610F\u5473\u7740\u5B83\u5728\u4E3B\u673A\u7684\u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u4E0A\u90FD\u53EF\u4EE5\u8BBF\u95EE\u3002
  
3. \`:::3307-&gt;3306/tcp\`:
   \u8FD9\u4E0E\u7B2C\u4E8C\u9879\u672C\u8D28\u4E0A\u662F\u76F8\u540C\u7684\uFF0C\u4F46\u662F\u9488\u5BF9IPv6\u3002:::\u662FIPv6\u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u8868\u793A\u6240\u6709IPv6\u63A5\u53E3\u3002
  
\u603B\u7ED3\uFF1A
- 33060\u662FMySQL\u7684X Protocol\u7AEF\u53E3\uFF0C\u4F46\u6CA1\u6709\u88AB\u6620\u5C04\u5230\u4E3B\u673A\u4E0A\u3002
- 3306\u662FMySQL\u7684\u4E3B\u8981\u7AEF\u53E3\uFF0C\u60A8\u5C06\u5B83\u6620\u5C04\u5230\u4E86\u4E3B\u673A\u76843307\u7AEF\u53E3\u4E0A\u3002
- \u8FD9\u4E2A\u6620\u5C04\u540C\u65F6\u9002\u7528\u4E8EIPv4\uFF080.0.0.0\uFF09\u548CIPv6\uFF08:::\uFF09\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[d];function t(v,r){return i(),n("div",null,c)}var o=e(s,[["render",t],["__file","mysql\u4E4BXProtocol.html.vue"]]);export{o as default};
