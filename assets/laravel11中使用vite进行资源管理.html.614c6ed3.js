import{_ as i,o as e,c as n,g as l}from"./app.66ae8700.js";const s={},d=l(`<p>laravel11\u4E2D\u4F7F\u7528vite\u8FDB\u884C\u8D44\u6E90\u7BA1\u7406:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@vite(&#39;resources/css/welcome.css&#39;)
\u5BF9\u4E8E\u4E0D\u540C\u7684\u6253\u5305\u65B9\u5F0F\uFF0C npm run dev \u548C npm run build, \u90A3\u4E48\u8D44\u6E90\u8BBF\u95EE\u662F\u4E0D\u4E00\u6837\u7684:
  
1. \u5F00\u53D1\u73AF\u5883 (\`npm run dev\`):
   \u5F53\u4F60\u8FD0\u884C\`npm run dev\`\u65F6\uFF0CVite\u542F\u52A8\u4E00\u4E2A\u5F00\u53D1\u670D\u52A1\u5668\u3002\u8FD9\u4E2A\u670D\u52A1\u5668\u4F1A:
   - \u76D1\u542C\u4F60\u7684\u6E90\u6587\u4EF6\u53D8\u5316
   - \u63D0\u4F9B\u70ED\u6A21\u5757\u66FF\u6362(HMR)
   - \u6309\u9700\u7F16\u8BD1\u6587\u4EF6
  
   \u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\`@vite()\`\u6307\u4EE4\u4F1A:
  
   - \u6CE8\u5165Vite\u7684\u5BA2\u6237\u7AEF\u811A\u672C
   - \u521B\u5EFA\u4E00\u4E2A\`&lt;script&gt;\`\u6807\u7B7E\uFF0C\u6307\u5411Vite\u5F00\u53D1\u670D\u52A1\u5668\u4E0A\u7684\u5165\u53E3\u6587\u4EF6
   - \u521B\u5EFA\u4E00\u4E2A\`&lt;link&gt;\`\u6807\u7B7E\uFF0C\u6307\u5411CSS\u6587\u4EF6(\u5982\u679C\u662F\u72EC\u7ACB\u7684CSS\u6587\u4EF6)

   \u8FD9\u6837\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u4ECEVite\u5F00\u53D1\u670D\u52A1\u5668\u8BF7\u6C42\u5E76\u52A0\u8F7D\u8D44\u6E90\uFF0C\u5B9E\u73B0\u5FEB\u901F\u7684\u5F00\u53D1\u4F53\u9A8C\u3002
  
2. \u751F\u4EA7\u73AF\u5883 (\`npm run build\`):
   \u5F53\u4F60\u8FD0\u884C\`npm run build\`\u65F6\uFF0CVite\u4F1A:

   - \u7F16\u8BD1\u3001\u538B\u7F29\u3001\u4F18\u5316\u6240\u6709\u8D44\u6E90
   - \u751F\u6210\u5E26\u6709\u54C8\u5E0C\u7684\u6587\u4EF6\u540D\uFF0C\u7528\u4E8E\u7F13\u5B58\u7834\u574F
   - \u521B\u5EFA\u4E00\u4E2Amanifest.json\u6587\u4EF6\uFF0C\u6620\u5C04\u539F\u59CB\u6587\u4EF6\u540D\u5230\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u540D
  
   \u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\`@vite()\`\u6307\u4EE4\u4F1A:
   
   - \u8BFB\u53D6manifest.json\u6587\u4EF6
   - \u6839\u636Emanifest\u4E2D\u7684\u6620\u5C04\uFF0C\u8F93\u51FA\u6B63\u786E\u7684\`&lt;script&gt;\`\u548C\`&lt;link&gt;\`\u6807\u7B7E\uFF0C\u6307\u5411\u7F16\u8BD1\u540E\u7684\u6587\u4EF6
  
\u8FD9\u79CD\u65B9\u6CD5\u5141\u8BB8Laravel\u5728\u5F00\u53D1\u548C\u751F\u4EA7\u73AF\u5883\u4E2D\u90FD\u80FD\u6B63\u786E\u5730\u5F15\u7528\u548C\u52A0\u8F7D\u8D44\u6E90\uFF0C\u800C\u4E0D\u9700\u8981\u66F4\u6539\u4F60\u7684\u4EE3\u7801\u3002
\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0CLaravel\u7684\`vite.php\`\u914D\u7F6E\u6587\u4EF6\u548C\`Vite\`facade\u5904\u7406\u4E86\u5927\u90E8\u5206\u590D\u6742\u6027\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u8F7B\u677E\u5730\u5728Laravel\u9879\u76EE\u4E2D\u96C6\u6210\u548C\u4F7F\u7528Vite\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return e(),n("div",null,v)}var u=i(s,[["render",a],["__file","laravel11\u4E2D\u4F7F\u7528vite\u8FDB\u884C\u8D44\u6E90\u7BA1\u7406.html.vue"]]);export{u as default};
