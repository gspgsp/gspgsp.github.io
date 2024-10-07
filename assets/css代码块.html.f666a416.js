import{_ as i,o as e,c as n,g as l}from"./app.d66d8774.js";const s={},d=l(`<p>css\u4EE3\u7801\u5757\uFF0C\u4E4B\u6240\u4EE5\u8D77\u8FD9\u4E2A\u540D\u5B57\uFF0C\u662F\u56E0\u4E3A\u6709\u65F6\u5019\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4F1A\u9047\u5230\u4E00\u4E9B\u5199\u7684\u6BD4\u8F83\u597D\u7684\u4EE3\u7801\uFF0C\u5C31\u60F3\u7EDF\u4E00\u7684\u8BB0\u5728\u8FD9\u91CC:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt; css\u4E4Bflex\u7EC6\u8282
\u7236\u7EA7 display: flex, \u9ED8\u8BA4\u4F1A\u5360\u7528\u6574\u884C\uFF0C\u5047\u5982\u5B50\u5143\u7D20\u53EA\u6709 120px, \u90A3\u4E48\u5982\u679C\u9700\u8981\u8BA9\u7236\u5143\u7D20\u548C\u5B50\u5143\u7D20\u5360\u7528\u4E00\u6837\u7684\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5C06\u7236\u7EA7 display: inline-flex
  
// tailwindcss \u6837\u5F0F\u63A7\u5236
&lt;div
        class=&quot;flex h-[calc(100vh-10rem)] flex-wrap justify-between gap-x-[4.4rem] gap-y-4 overflow-auto px-4 md:h-[calc(100vh-15rem)] md:flex-nowrap&quot;&gt;

&lt;/div&gt;
  
2&gt; text-[1.875rem] \u8BBE\u7F6E\u5B57\u4F53\u5927\u5C0F\u4E3A 1.875rem (30px), \u8BBE\u7F6E\u884C\u9AD8\u4E3A 2.4375rem (39px), \u5728 Tailwind \u4E2D,\u659C\u6760\u540E\u9762\u7684\u503C\u7528\u6765\u6307\u5B9A\u884C\u9AD8
&lt;div class=&quot;!text-[1.875rem]/[2.4375rem] font-semibold&quot;&gt;
        
&lt;/div&gt;
  
3&gt; \u7ED9ul \u4E0B\u7684 li \u524D\u8BBE\u7F6E\u65E0\u5E8F\u5217\u8868\u7B26\u53F7
ul {
    list-style-type: none;
    padding-left: 1.25rem;
    li::before {
      content: &quot;\\2022&quot;;
      color: black;
      font-weight: bold;
      display: inline-block;
      width: 1em; // \u8C03\u6574\u5706\u70B9\u548C\u6587\u672C\u4E4B\u95F4\u7684\u8DDD\u79BB
      margin-left: -1em; // \u8FD9\u4E2A\u4E3B\u8981\u662F\u8BBE\u7F6E \u5706\u70B9\u57281.25rem\u8303\u56F4\u5185\u7684\u4F4D\u7F6E, \u4E3B\u8981\u662F\u89E3\u51B3\u5706\u70B9\u60F3\u53F3\u8FB9\u6324\u538B\u6587\u672C\u7684\u95EE\u9898
    }
  }
  
// tailwindcss\u5199\u6CD5
.affiliation-box {
  ul {
    @apply pl-5;
    li::before {
      @apply content-[&#39;\\2022&#39;] text-color-default font-semibold inline-block w-4 -ml-4
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(c,r){return e(),n("div",null,v)}var m=i(s,[["render",a],["__file","css\u4EE3\u7801\u5757.html.vue"]]);export{m as default};
