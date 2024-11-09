import{_ as n,o as e,c as i,g as d}from"./app.66ae8700.js";const s={},l=d(`<p>css\u7ED9border\u8BBE\u7F6E\u53EF\u53D8\u989C\u8272:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@keyframes borderColorChange {
  0% {
    border-bottom-color: #d0d7de; /* \u8D77\u59CB\u989C\u8272 */
  }
  16% {
    border-bottom-color: #ff6347; /* 16%\u7684\u65F6\u95F4\u70B9 */
  }
  33% {
    border-bottom-color: #32cd32; /* 33%\u7684\u65F6\u95F4\u70B9 */
  }
  50% {
    border-bottom-color: #1e90ff; /* 50%\u7684\u65F6\u95F4\u70B9 */
  }
  66% {
    border-bottom-color: #ff1493; /* 66%\u7684\u65F6\u95F4\u70B9 */
  }
  83% {
    border-bottom-color: #ffcc00; /* 83%\u7684\u65F6\u95F4\u70B9 */
  }
  100% {
    border-bottom-color: #8a2be2; /* 100%\u7684\u65F6\u95F4\u70B9 */
  }
}

.bordered-element {
  padding: 20px;
  font-size: 18px;
  border-bottom: 1px solid #d0d7de; //\u4E3B\u8981\u662F\u8BBE\u7F6E\u8FD9\u4E2Aborder\u7684\u989C\u8272
  animation: borderColorChange 5s infinite;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u91CA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>0%\uFF1A\u52A8\u753B\u5F00\u59CB\u7684\u521D\u59CB\u72B6\u6001\u3002\u5728\u8FD9\u91CC\uFF0C\u8FB9\u6846\u989C\u8272\u662F #d0d7de\uFF08\u4E00\u79CD\u6DE1\u7070\u8272\uFF09\u3002\u8FD9\u610F\u5473\u7740\u5F53\u52A8\u753B\u5F00\u59CB\u65F6\uFF0C\u5143\u7D20\u7684 border-bottom \u4F1A\u663E\u793A\u8FD9\u4E2A\u989C\u8272\u3002
  
16%\uFF1A\u52A8\u753B\u6267\u884C\u4E86 16% \u7684\u65F6\u95F4\u65F6\uFF0C\u8FB9\u6846\u989C\u8272\u53D8\u4E3A #ff6347\uFF08\u756A\u8304\u8272\uFF09\u3002\u52A8\u753B\u7684\u8FDB\u5EA6\u5230\u8FBE 16% \u65F6\uFF0C\u8FB9\u6846\u989C\u8272\u4F1A\u4ECE\u4E0A\u4E00\u4E2A\u989C\u8272\uFF08#d0d7de\uFF09\u53D8\u5230\u756A\u8304\u8272\u3002
  
33%\uFF1A\u52A8\u753B\u6267\u884C\u4E86 33% \u7684\u65F6\u95F4\u65F6\uFF0C\u8FB9\u6846\u989C\u8272\u53D8\u4E3A #32cd32\uFF08\u9EC4\u7EFF\u8272\uFF09\u3002
  
50%\uFF1A\u52A8\u753B\u6267\u884C\u4E86 50% \u7684\u65F6\u95F4\u65F6\uFF0C\u8FB9\u6846\u989C\u8272\u53D8\u4E3A #1e90ff\uFF08\u9053\u5947\u84DD\uFF09\u3002
  
66%\uFF1A\u52A8\u753B\u6267\u884C\u4E86 66% \u7684\u65F6\u95F4\u65F6\uFF0C\u8FB9\u6846\u989C\u8272\u53D8\u4E3A #ff1493\uFF08\u6DF1\u7C89\u8272\uFF09\u3002
  
83%\uFF1A\u52A8\u753B\u6267\u884C\u4E86 83% \u7684\u65F6\u95F4\u65F6\uFF0C\u8FB9\u6846\u989C\u8272\u53D8\u4E3A #ffcc00\uFF08\u91D1\u8272\uFF09\u3002
  
100%\uFF1A\u52A8\u753B\u6267\u884C\u4E86 100% \u7684\u65F6\u95F4\u65F6\uFF0C\u8FB9\u6846\u989C\u8272\u53D8\u4E3A #8a2be2\uFF08\u84DD\u7D2B\u8272\uFF09\u3002\u8FD9\u610F\u5473\u7740\u5728\u52A8\u753B\u7684\u7ED3\u675F\u65F6\uFF0C\u8FB9\u6846\u989C\u8272\u4F1A\u53D8\u4E3A\u8FD9\u4E2A\u989C\u8272\u3002
  
animation: borderColorChange 5s infinite
\u8FD9\u4E2A\u8BED\u53E5\u63A7\u5236\u4E86\u52A8\u753B\u7684\u6267\u884C\u65B9\u5F0F\uFF1A
  
borderColorChange\uFF1A\u6307\u5B9A\u5E94\u7528\u7684\u52A8\u753B\u540D\u79F0\uFF0C\u5BF9\u5E94\u4E0A\u9762\u5B9A\u4E49\u7684 @keyframes \u540D\u79F0\u3002
5s\uFF1A\u6307\u5B9A\u52A8\u753B\u7684\u65F6\u957F\u662F 5 \u79D2\uFF0C\u610F\u601D\u662F\u4ECE\u52A8\u753B\u5F00\u59CB\u5230\u7ED3\u675F\uFF0C\u9700\u8981 5 \u79D2\u7684\u65F6\u95F4\uFF0C\u6240\u6709\u7684\u989C\u8272\u53D8\u5316\u90FD\u4F1A\u5728 5 \u79D2\u5185\u5B8C\u6210\u3002
infinite\uFF1A\u52A8\u753B\u4F1A\u65E0\u9650\u6B21\u5730\u5FAA\u73AF\u64AD\u653E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u52A8\u753B\u4ECE\u5934\u5230\u5C3E\u64AD\u653E\u4E00\u6B21\u540E\uFF0C\u4F1A\u7ACB\u5373\u91CD\u65B0\u5F00\u59CB\u3002
  
\u603B\u7ED3
\u767E\u5206\u6BD4\uFF1A\u8868\u793A\u52A8\u753B\u5728\u6307\u5B9A\u65F6\u957F\uFF085\u79D2\uFF09\u5185\u7684\u4E0D\u540C\u65F6\u95F4\u70B9\uFF0C\u6BCF\u4E2A\u65F6\u95F4\u70B9\u5B9A\u4E49\u4E86\u5143\u7D20\u7684\u6837\u5F0F\uFF08\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u662F\u8FB9\u6846\u7684\u989C\u8272\uFF09\u3002
0% \u5230 100%\uFF1A\u5206\u522B\u4EE3\u8868\u52A8\u753B\u7684\u5F00\u59CB\u548C\u7ED3\u675F\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u65F6\u95F4\u70B9\uFF0C\u4F60\u53EF\u4EE5\u7CBE\u786E\u5730\u63A7\u5236\u5143\u7D20\u5728\u52A8\u753B\u8FC7\u7A0B\u4E2D\u5982\u4F55\u53D8\u5316\u3002
\u5E0C\u671B\u8FD9\u4E2A\u89E3\u91CA\u80FD\u5E2E\u4F60\u66F4\u597D\u5730\u7406\u89E3 @keyframes \u4E2D\u7684\u767E\u5206\u6BD4\u4F5C\u7528\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528 animation \u6765\u63A7\u5236\u52A8\u753B\u7684\u6267\u884C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[l];function v(a,c){return e(),i("div",null,r)}var o=n(s,[["render",v],["__file","css\u7ED9border\u8BBE\u7F6E\u53EF\u53D8\u989C\u8272.html.vue"]]);export{o as default};
