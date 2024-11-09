import{_ as i,o as n,c as e,g as s}from"./app.66ae8700.js";const d={},l=s(`<p>css\u4E4B@media\u548C@supports\u7684\u533A\u522B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@media \u4E3B\u8981\u7528\u4E8E\u5728\u4E0D\u540C\u7684\u5A92\u4F53\u73AF\u5883\u4E0B\u5E94\u7528\u4E0D\u540C\u7684 CSS \u89C4\u5219\u3002\u5B83\u901A\u5E38\u4E0E\u5A92\u4F53\u67E5\u8BE2(media queries)\u4E00\u8D77\u4F7F\u7528,\u6839\u636E\u8BBE\u5907\u7684\u7279\u5F81(\u5982\u5C4F\u5E55\u5C3A\u5BF8\u3001\u5206\u8FA8\u7387\u3001\u65B9\u5411\u7B49)\u6765\u5E94\u7528\u4E0D\u540C\u7684\u6837\u5F0F\u3002\u8FD9\u4F7F\u5F97\u7F51\u7AD9\u548C\u5E94\u7528\u7A0B\u5E8F\u80FD\u591F\u6709\u54CD\u5E94\u5F0F\u548C\u81EA\u9002\u5E94\u7684\u5E03\u5C40\u3002
\u4F8B\u5B50:
/* \u5728\u5C4F\u5E55\u5BBD\u5EA6\u5C0F\u4E8E 768px \u65F6\u5E94\u7528\u8FD9\u4E9B\u6837\u5F0F */
@media (max-width: 767px) {
  .container {
    flex-direction: column;
  }
}
  
@supports \u7528\u4E8E\u68C0\u6D4B\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301\u67D0\u4E2A CSS \u5C5E\u6027\u6216\u8005\u503C\u3002\u5982\u679C\u652F\u6301,\u5219\u5E94\u7528\u76F8\u5E94\u7684 CSS \u89C4\u5219;\u5982\u679C\u4E0D\u652F\u6301,\u5219\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u540E\u5907\u65B9\u6848\u6216\u8005\u66FF\u4EE3\u6837\u5F0F\u3002\u8FD9\u4E2A\u7279\u6027\u53EF\u4EE5\u8BA9\u4F60\u5728\u7F16\u5199 CSS \u65F6\u5229\u7528\u6700\u65B0\u7684\u7279\u6027,\u540C\u65F6\u53C8\u80FD\u786E\u4FDD\u5728\u65E7\u7684\u6D4F\u89C8\u5668\u4E2D\u6B63\u5E38\u5DE5\u4F5C\u3002
\u4F8B\u5B50:
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@supports not (display: grid) {
  .container {
    display: flex;
    flex-wrap: wrap;
  }
}

  
    
\u9AD8\u7EA7\u7528\u6CD5:
&lt;button type=&quot;button&quot; class=&quot;[@media(any-hover:hover){&amp;:hover}]:opacity-100&quot;&gt;
  &lt;!-- ... --&gt;
&lt;/button&gt;
  
\u5206\u6790\uFF1A
\u8FD9\u6BB5\u4EE3\u7801\u4F7F\u7528\u4E86 Tailwind CSS \u7684\u51E0\u4E2A\u9AD8\u7EA7\u7279\u6027,\u8BA9\u6211\u4EEC\u6765\u5206\u6790\u4E00\u4E0B:

[@media(any-hover:hover){&amp;:hover}]

\u8FD9\u662F\u4E00\u4E2A Tailwind \u7684 arbitrary variants(\u4EFB\u610F\u53D8\u4F53)\u8BED\u6CD5\u3002\u5B83\u5141\u8BB8\u4F60\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u6837\u5F0F\u53D8\u4F53,\u5E76\u5728\u7C7B\u540D\u4E2D\u4F7F\u7528\u5B83\u3002
@media(any-hover:hover) \u90E8\u5206\u6307\u5B9A\u4E86\u8FD9\u4E2A\u65B0\u53D8\u4F53\u53EA\u5728\u8BBE\u5907\u652F\u6301 hover \u4EA4\u4E92\u65F6\u624D\u751F\u6548\u3002any-hover \u662F\u4E00\u4E2A\u5A92\u4F53\u67E5\u8BE2,\u7528\u4E8E\u68C0\u6D4B\u8BBE\u5907\u662F\u5426\u652F\u6301\u4EFB\u4F55\u5F62\u5F0F\u7684 hover \u4EA4\u4E92,\u5982\u9F20\u6807\u60AC\u505C\u6216\u901A\u8FC7\u952E\u76D8\u5BFC\u822A\u60AC\u505C\u3002
{&amp;:hover} \u90E8\u5206\u5B9A\u4E49\u4E86\u8FD9\u4E2A\u65B0\u53D8\u4F53\u7684\u5177\u4F53\u6837\u5F0F,\u5373\u5F53\u5143\u7D20\u5904\u4E8E hover \u72B6\u6001\u65F6\u5E94\u7528\u7684\u6837\u5F0F\u3002&amp; \u4EE3\u8868\u5F53\u524D\u5143\u7D20\u3002

:opacity-100

\u8FD9\u662F\u4E00\u4E2A Tailwind \u7684\u5B9E\u7528\u7A0B\u5E8F\u7C7B,\u7528\u4E8E\u8BBE\u7F6E\u5143\u7D20\u7684\u4E0D\u900F\u660E\u5EA6\u4E3A 100%,\u5373\u5B8C\u5168\u4E0D\u900F\u660E\u3002
\u7EFC\u5408\u8FD9\u4E24\u90E8\u5206,\u5F53\u9F20\u6807\u60AC\u505C\u5728\u8FD9\u4E2A\u6309\u94AE\u4E0A\u65F6(\u6216\u8005\u5728\u652F\u6301 hover \u7684\u8BBE\u5907\u4E0A\u901A\u8FC7\u952E\u76D8\u5BFC\u822A\u60AC\u505C\u5728\u6309\u94AE\u4E0A),\u6309\u94AE\u7684\u4E0D\u900F\u660E\u5EA6\u5C06\u53D8\u4E3A 100%,\u5373\u5B8C\u5168\u4E0D\u900F\u660E\u3002
\u8FD9\u79CD\u5199\u6CD5\u7684\u597D\u5904\u662F:
 
\u5B83\u5229\u7528\u4E86 Tailwind \u7684\u5F3A\u5927\u529F\u80FD,\u4F7F\u7528\u7B80\u6D01\u7684\u7C7B\u540D\u5C31\u80FD\u5B9E\u73B0\u590D\u6742\u7684\u6837\u5F0F\u6548\u679C\u3002
\u5B83\u5B9E\u73B0\u4E86\u6E10\u8FDB\u589E\u5F3A,\u53EA\u5728\u652F\u6301 hover \u4EA4\u4E92\u7684\u8BBE\u5907\u4E0A\u5E94\u7528\u60AC\u505C\u6548\u679C,\u4ECE\u800C\u63D0\u9AD8\u4E86\u53EF\u8BBF\u95EE\u6027\u3002
\u5B83\u5C06\u6837\u5F0F\u548C HTML \u5206\u79BB,\u4F7F\u4EE3\u7801\u66F4\u52A0\u6A21\u5757\u5316\u548C\u6613\u4E8E\u7EF4\u62A4\u3002
  
\u8FD9\u79CD\u5229\u7528 Tailwind \u7684\u4EFB\u610F\u53D8\u4F53\u548C\u5A92\u4F53\u67E5\u8BE2\u7684\u5199\u6CD5,\u4F53\u73B0\u4E86 Tailwind \u5728\u5B9E\u7528\u7A0B\u5E8F\u4F18\u5148\u7684 CSS \u65B9\u6CD5\u4E2D\u6240\u63D0\u4F9B\u7684\u7075\u6D3B\u6027\u548C\u53EF\u5B9A\u5236\u6027\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(r,c){return n(),e("div",null,v)}var u=i(d,[["render",a],["__file","css\u4E4B@media\u548C@supports\u7684\u533A\u522B.html.vue"]]);export{u as default};
