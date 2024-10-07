import{_ as e,o as i,c as l,g as s}from"./app.d66d8774.js";const n={},t=s(`<p>\u7ECF\u5E38\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4F1A\u770B\u5230\u4E00\u4E2Arobots.txt\u6587\u4EF6\uFF0C\u4ECA\u5929\u5C31\u6765\u666E\u53CA\u4E00\u4E0B\u5B83\u7684\u4F5C\u7528</p><ul><li>\u4ECB\u7ECD</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>robots.txt \u6587\u4EF6\u89C4\u5B9A\u4E86\u641C\u7D22\u5F15\u64CE\u6293\u53D6\u5DE5\u5177\u53EF\u4EE5\u8BBF\u95EE\u60A8\u7F51\u7AD9\u4E0A\u7684\u54EA\u4E9B\u7F51\u5740\u3002 \u6B64\u6587\u4EF6
\u4E3B\u8981\u7528\u4E8E\u907F\u514D\u60A8\u7684\u7F51\u7AD9\u6536\u5230\u8FC7\u591A\u8BF7\u6C42\uFF1B\u5B83\u5E76\u4E0D\u662F\u4E00\u79CD\u963B\u6B62 Google \u6293\u53D6\u67D0\u4E2A\u7F51\u9875\u7684
\u673A\u5236\u3002\u82E5\u60F3\u963B\u6B62 Google \u8BBF\u95EE\u67D0\u4E2A\u7F51\u9875\uFF0C\u8BF7\u4F7F\u7528 noindex \u7981\u6B62\u5C06\u5176\u7F16\u5165\u7D22\u5F15\uFF0C\u6216
\u4F7F\u7528\u5BC6\u7801\u4FDD\u62A4\u8BE5\u7F51\u9875\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7528\u9014</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>robots.txt \u6587\u4EF6\u4E3B\u8981\u7528\u4E8E\u7BA1\u7406\u6D41\u5411\u60A8\u7F51\u7AD9\u7684\u6293\u53D6\u5DE5\u5177\u6D41\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u7F16\u5199</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>robots.txt \u6587\u4EF6\u5E94\u4F4D\u4E8E\u7F51\u7AD9\u7684\u6839\u76EE\u5F55\u4E0B\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u7F51\u7AD9 www.example.com\uFF0Crobots.txt \u6587\u4EF6
\u7684\u8DEF\u5F84\u5E94\u4E3A www.example.com/robots.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5305\u542B\u4E24\u6761\u89C4\u5219\u7684\u7B80\u5355 robots.txt \u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>User-agent: *
Allow: /
Sitemap: https://www.example.com/sitemap.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u66F4\u65B0 robots.txt \u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B9E\u9645\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u7AD9\u70B9\u5185\u5BB9\u53EF\u80FD\u4F1A\u4E0D\u505C\u7684\u66F4\u65B0\uFF0C\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5B9A\u671F\u4FEE\u6539\u6587\u4EF6\u5185\u5BB9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u8003(https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=zh-cn)</p>`,14),d=[t];function a(r,o){return i(),l("div",null,d)}var v=e(n,[["render",a],["__file","google\u641C\u7D22\u4E4Brobots\u6587\u4EF6.html.vue"]]);export{v as default};
