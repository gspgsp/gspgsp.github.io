import{_ as i,o as e,c as n,g as s}from"./app.d66d8774.js";const d={},l=s(`<p>Pina\u914D\u7F6EHMR\u70ED\u66F4\u65B0:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (i<wbr>mport.meta.hot) {
  i<wbr>mport.meta.hot.accept(
    acceptHMRUpdate(useEventDashboardStore, i<wbr>mport.meta.hot)
  );
}
\u8FD9\u6BB5\u4EE3\u7801\u662F\u4E0E\u70ED\u6A21\u5757\u66FF\u6362\uFF08Hot Module Replacement, HMR\uFF09\u76F8\u5173\u7684\uFF0C\u901A\u5E38\u7528\u5728 Vite \u6216\u7C7B\u4F3C\u7684\u73B0\u4EE3\u5F00\u53D1\u73AF\u5883\u4E2D\u3002\u8BA9\u6211\u4EEC\u9010\u90E8\u5206\u5206\u6790\uFF1A

1. \`i<wbr>mport.meta.hot\`:
   - \u8FD9\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u5728\u652F\u6301 HMR \u7684\u73AF\u5883\u4E2D\u53EF\u7528\u3002
   - \u5B83\u63D0\u4F9B\u4E86\u4E0E HMR API \u4EA4\u4E92\u7684\u65B9\u6CD5\u3002

2. \`if (i<wbr>mport.meta.hot)\`:
   - \u8FD9\u4E2A\u68C0\u67E5\u786E\u4FDD\u4EE3\u7801\u53EA\u5728\u652F\u6301 HMR \u7684\u73AF\u5883\u4E2D\u6267\u884C\u3002
   - \u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\`i<wbr>mport.meta.hot\` \u901A\u5E38\u662F undefined\uFF0C\u6240\u4EE5\u8FD9\u4E2A if \u5757\u4E0D\u4F1A\u6267\u884C\u3002

3. \`acceptHMRUpdate\`:
   - \u8FD9\u662F Pinia \u63D0\u4F9B\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u4F7F store \u652F\u6301\u70ED\u6A21\u5757\u66FF\u6362\u3002
   - \u5B83\u5141\u8BB8\u5728\u4E0D\u5237\u65B0\u6574\u4E2A\u9875\u9762\u7684\u60C5\u51B5\u4E0B\u66F4\u65B0 store \u7684\u5B9A\u4E49\u3002

4. \`useEventDashboardStore\`:
   - \u8FD9\u662F\u60A8\u7684 Pinia store \u51FD\u6570\u3002

5. \`i<wbr>mport.meta.hot.accept(...)\`:
   - \u8FD9\u4E2A\u65B9\u6CD5\u544A\u8BC9 HMR \u7CFB\u7EDF\u5982\u4F55\u5904\u7406\u8FD9\u4E2A\u6A21\u5757\u7684\u66F4\u65B0\u3002
   - \u5B83\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5728\u6A21\u5757\u66F4\u65B0\u65F6\u88AB\u8C03\u7528\u3002

6. \u6574\u4F53\u529F\u80FD:
   - \u5F53 \`useEventDashboardStore\` \u7684\u5B9A\u4E49\u53D1\u751F\u53D8\u5316\u65F6\uFF08\u4F8B\u5982\uFF0C\u60A8\u4FEE\u6539\u4E86 store \u6587\u4EF6\u5E76\u4FDD\u5B58\uFF09\uFF0C
   - HMR \u7CFB\u7EDF\u4F1A\u8C03\u7528 \`acceptHMRUpdate\`\uFF0C
   - \u8FD9\u4F1A\u66F4\u65B0 store \u7684\u5B9A\u4E49\uFF0C\u800C\u4E0D\u9700\u8981\u5237\u65B0\u6574\u4E2A\u9875\u9762\uFF0C
   - \u4ECE\u800C\u4FDD\u6301\u5E94\u7528\u7684\u5F53\u524D\u72B6\u6001\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002

\u8FD9\u6BB5\u4EE3\u7801\u7684\u4E3B\u8981\u4F5C\u7528\u662F:
1. \u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u542F\u7528 Pinia store \u7684\u70ED\u6A21\u5757\u66FF\u6362\u3002
2. \u5141\u8BB8\u60A8\u4FEE\u6539 store \u7684\u4EE3\u7801\u5E76\u7ACB\u5373\u770B\u5230\u6548\u679C\uFF0C\u65E0\u9700\u624B\u52A8\u5237\u65B0\u9875\u9762\u3002
3. \u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF0C\u4F7F\u5F97\u72B6\u6001\u7BA1\u7406\u7684\u8C03\u8BD5\u548C\u5F00\u53D1\u66F4\u52A0\u6D41\u7545\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8EHMR:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HMR\uFF08\u70ED\u6A21\u5757\u66FF\u6362\uFF09\u914D\u7F6E\u4E0E Vite \u5BC6\u5207\u76F8\u5173\uFF0C\u4F46\u4E0D\u5B8C\u5168\u9650\u4E8E Vite\u3002\u8BA9\u6211\u4EEC\u66F4\u8BE6\u7EC6\u5730\u63A2\u8BA8\u4E00\u4E0B\uFF1A

1. Vite \u7279\u6027\uFF1A
   - Vite \u786E\u5B9E\u9ED8\u8BA4\u652F\u6301\u5E76\u5927\u529B\u63A8\u5E7F\u8FD9\u79CD HMR \u914D\u7F6E\u3002
   - \`i<wbr>mport.meta.hot\` \u662F Vite \u539F\u751F\u652F\u6301\u7684\u4E00\u4E2A\u7279\u6027\u3002

2. \u5176\u4ED6\u6784\u5EFA\u5DE5\u5177\uFF1A
   - \u7C7B\u4F3C\u7684 HMR \u914D\u7F6E\u4E5F\u53EF\u4EE5\u5728\u5176\u4ED6\u73B0\u4EE3\u6784\u5EFA\u5DE5\u5177\u4E2D\u627E\u5230\uFF0C\u5982 Webpack\uFF08\u901A\u8FC7 \`module.hot\`\uFF09\u3002
   - \u4F46\u5177\u4F53\u8BED\u6CD5\u548C\u5B9E\u73B0\u53EF\u80FD\u7565\u6709\u4E0D\u540C\u3002

3. Pinia \u7684\u9002\u914D\uFF1A
   - Pinia \u8BBE\u8BA1\u4E86\u8FD9\u79CD HMR \u914D\u7F6E\u65B9\u5F0F\uFF0C\u4F7F\u5176\u80FD\u591F\u5F88\u597D\u5730\u4E0E Vite \u914D\u5408\u3002
   - \u4F46 Pinia \u4E5F\u652F\u6301\u5176\u4ED6\u6784\u5EFA\u5DE5\u5177\u7684 HMR\u3002

4. \u4E3A\u4EC0\u4E48\u5E38\u89C1\u4E8E Vite \u9879\u76EE\uFF1A
   - Vite \u4EE5\u5176\u5FEB\u901F\u7684\u5F00\u53D1\u670D\u52A1\u5668\u548C\u4F18\u79C0\u7684 HMR \u652F\u6301\u800C\u95FB\u540D\u3002
   - Vue 3 \u548C Pinia \u7684\u8BB8\u591A\u65B0\u9879\u76EE\u503E\u5411\u4E8E\u4F7F\u7528 Vite\uFF0C\u56E0\u6B64\u8FD9\u79CD\u914D\u7F6E\u5728 Vite \u9879\u76EE\u4E2D\u7279\u522B\u5E38\u89C1\u3002

5. \u901A\u7528\u6027\uFF1A
   - \u867D\u7136\u8BED\u6CD5\u53EF\u80FD\u9700\u8981\u8C03\u6574\uFF0C\u4F46\u7C7B\u4F3C\u7684 HMR \u6982\u5FF5\u53EF\u4EE5\u5E94\u7528\u4E8E\u5176\u4ED6\u6784\u5EFA\u7CFB\u7EDF\u3002

6. Vite \u7684\u4F18\u52BF\uFF1A
   - Vite \u7684 HMR \u5B9E\u73B0\u7279\u522B\u5FEB\u901F\u548C\u9AD8\u6548\uFF0C\u8FD9\u4F7F\u5F97\u8FD9\u79CD\u914D\u7F6E\u5728 Vite \u9879\u76EE\u4E2D\u7279\u522B\u6709\u4EF7\u503C\u3002

7. \u8DE8\u5E73\u53F0\u517C\u5BB9\u6027\uFF1A
   - Pinia \u7684\u8FD9\u79CD HMR \u914D\u7F6E\u8BBE\u8BA1\u8003\u8651\u4E86\u8DE8\u5E73\u53F0\u517C\u5BB9\u6027\uFF0C\u4F7F\u5F97\u540C\u4E00\u5957\u4EE3\u7801\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6784\u5EFA\u5DE5\u5177\u4E2D\u5DE5\u4F5C\u3002

\u603B\u7ED3\uFF1A
\u867D\u7136\u8FD9\u79CD HMR \u914D\u7F6E\u5728 Vite \u9879\u76EE\u4E2D\u6700\u4E3A\u5E38\u89C1\u548C\u6709\u6548\uFF0C\u4F46\u5B83\u5E76\u4E0D\u4E25\u683C\u9650\u4E8E Vite\u3002\u8FD9\u662F Pinia \u4E3A\u4E86\u63D0\u4F9B\u6700\u4F73\u5F00\u53D1\u4F53\u9A8C\u800C\u8BBE\u8BA1\u7684\u4E00\u79CD\u901A\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u652F\u6301 HMR \u7684\u5404\u79CD\u73B0\u4EE3\u6784\u5EFA\u5DE5\u5177\u4E2D\u4F7F\u7528\u3002\u5728 Vite \u4E2D\uFF0C\u5B83\u7684\u6548\u679C\u53EF\u80FD\u6700\u4E3A\u663E\u8457\uFF0C\u4F46\u8FD9\u4E2A\u6982\u5FF5\u662F\u53EF\u4EE5\u8DE8\u5E73\u53F0\u5E94\u7528\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[l];function a(r,c){return e(),n("div",null,v)}var m=i(d,[["render",a],["__file","Pina\u914D\u7F6EHMR\u70ED\u66F4\u65B0.html.vue"]]);export{m as default};
