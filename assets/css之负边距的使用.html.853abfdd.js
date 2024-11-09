import{_ as n,o as i,c as e,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>\u5F53\u5B50\u5143\u7D20\u88AB\u9650\u5B9A\u5728\u7236\u5143\u7D20\u4EE5\u5185\uFF0C\u60F3\u8981\u7A81\u7834\u7236\u5143\u7D20\u7684\u7EA6\u675F\uFF0C\u53EF\u4EE5\u6309\u7167\u4E0B\u9762\u7684\u65B9\u5F0F\u89E3\u51B3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;AppSeparator class=&quot;-mx-[4.5rem] w-[calc(100%+9rem)]&quot; /&gt;
  
\u5982\u679C\u53EA\u6709w\u5C5E\u6027\u662F\u4E0D\u884C\u7684,\u5982:
&lt;AppSeparator class=&quot;w-[calc(100%+9rem)]&quot; /&gt;
  
\u5206\u6790:
\u53EA\u4F7F\u7528 w-[calc(100%+144px)] \u800C\u4E0D\u914D\u5408\u8D1F\u5916\u8FB9\u8DDD\u65F6\u4F1A\u53D1\u751F\u7684\u60C5\u51B5\u3002\u8BA9\u6211\u4EEC\u66F4\u8BE6\u7EC6\u5730\u5206\u6790\u4E00\u4E0B\u8FD9\u79CD\u60C5\u51B5\uFF1A
  
1&gt;\u9ED8\u8BA4\u5BF9\u9F50\uFF1A
HTML \u5143\u7D20\u9ED8\u8BA4\u662F\u5DE6\u5BF9\u9F50\u7684\u3002\u5F53\u4F60\u589E\u52A0\u5143\u7D20\u7684\u5BBD\u5EA6\u800C\u4E0D\u6539\u53D8\u5176\u4F4D\u7F6E\u65F6\uFF0C\u5B83\u4F1A\u5411\u53F3\u6269\u5C55\u3002
  
2&gt;\u5BBD\u5EA6\u8BA1\u7B97\uFF1A
w-[calc(100%+144px)] \u4F7F\u5143\u7D20\u5BBD\u5EA6\u7B49\u4E8E\u7236\u5143\u7D20\u5BBD\u5EA6\u52A0\u4E0A144px\u3002\u8FD9\u989D\u5916\u7684\u5BBD\u5EA6\u4F1A\u5168\u90E8\u6DFB\u52A0\u5230\u53F3\u4FA7\u3002
  
3&gt;\u89C6\u89C9\u6548\u679C\uFF1A
\u5DE6\u4FA7\uFF1A\u5143\u7D20\u7684\u5DE6\u8FB9\u7F18\u4E0E\u7236\u5143\u7D20\u7684\u5DE6\u8FB9\u7F18\u5B8C\u5168\u5BF9\u9F50\u3002
\u53F3\u4FA7\uFF1A\u5143\u7D20\u7684\u53F3\u8FB9\u7F18\u4F1A\u8D85\u51FA\u7236\u5143\u7D20\u53F3\u8FB9\u7F18144px\u3002
  
4&gt;\u6F5C\u5728\u95EE\u9898\uFF1A
\u53EF\u80FD\u5BFC\u81F4\u6C34\u5E73\u6EDA\u52A8\u6761\u51FA\u73B0\u3002
\u53EF\u80FD\u5E72\u6270\u9875\u9762\u4E0A\u5176\u4ED6\u5143\u7D20\u7684\u5E03\u5C40\u3002
\u53F3\u4FA7\u5185\u5BB9\u53EF\u80FD\u88AB\u622A\u65AD\u6216\u9690\u85CF\uFF0C\u53D6\u51B3\u4E8E\u7236\u5143\u7D20\u7684 overflow \u5C5E\u6027\u8BBE\u7F6E\u3002
  
\u8981\u5B9E\u73B0\u4E24\u4FA7\u5747\u5300\u6269\u5C55\u7684\u6548\u679C\uFF0C\u6211\u4EEC\u9700\u8981\u914D\u5408\u4F7F\u7528\u8D1F\u5916\u8FB9\u8DDD\uFF1A
class=&quot;w-[calc(100%+144px)] -mx-[72px]&quot;
  
\u8FD9\u4E2A\u7EC4\u5408\u505A\u5230\u4E86\uFF1A
1&gt;\u589E\u52A0\u603B\u5BBD\u5EA6\uFF08\u901A\u8FC7 w-[calc(100%+144px)]\uFF09
2&gt;\u5411\u5DE6\u79FB\u52A872px\uFF08\u901A\u8FC7 -mx-[72px] \u7684\u5DE6\u4FA7\u8D1F\u5916\u8FB9\u8DDD\uFF09
3&gt;\u5411\u53F3\u6269\u5C5572px\uFF08\u901A\u8FC7\u5BBD\u5EA6\u589E\u52A0\u548C\u53F3\u4FA7\u8D1F\u5916\u8FB9\u8DDD\u7684\u7EC4\u5408\u6548\u679C\uFF09
  
\u7ED3\u679C\u662F\u5143\u7D20\u770B\u8D77\u6765\u5411\u4E24\u4FA7\u5404\u6269\u5C55\u4E8672px\uFF0C\u540C\u65F6\u4FDD\u6301\u4E86\u4E2D\u5FC3\u5BF9\u9F50\u3002
  
\u6CE8\u610F:\u53EA\u4F7F\u7528 -ml-[72px] \u4E5F\u53EF\u4EE5\u89E3\u51B3\u95EE\u9898\uFF0C\u4F46\u662F\u4E3A\u4E86\u65B9\u4FBF\u7EF4\u62A4\u4EE3\u7801\uFF0C\u8FD8\u662F\u5DE6\u53F3\u4E24\u8FB9\u90FD\u52A0.\u4E0E -ml-[4.5rem] \u7684\u5BF9\u6BD4\uFF1A
\u8D1F\u5DE6\u5916\u8FB9\u8DDD\u4F1A\u76F4\u63A5\u5F71\u54CD\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u4F7F\u5176\u5411\u5DE6\u79FB\u52A8\u3002
\u8D1F\u53F3\u5916\u8FB9\u8DDD\u901A\u5E38\u4E0D\u4F1A\u6539\u53D8\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u9664\u975E\u6709\u7279\u5B9A\u7684\u5E03\u5C40\u60C5\u51B5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function c(a,r){return i(),e("div",null,v)}var u=n(l,[["render",c],["__file","css\u4E4B\u8D1F\u8FB9\u8DDD\u7684\u4F7F\u7528.html.vue"]]);export{u as default};
