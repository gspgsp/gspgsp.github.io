import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const d={},l=s(`<p>git\u4E4B\u64A4\u9500merge\u7684\u6B65\u9AA4(\u4E5F\u9002\u7528\u4E8E\u666E\u901A\u7684\u63D0\u4EA4):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;git status
\u8FD9\u4F1A\u663E\u793A\u5F53\u524D\u7684\u5206\u652F\u72B6\u6001\u548C\u662F\u5426\u6709\u672A\u63A8\u9001\u7684\u63D0\u4EA4
  
2&gt;\u5982\u679C\u5408\u5E76\u5DF2\u7ECF\u63D0\u4EA4\uFF0C\u4F46\u8FD8\u6CA1\u6709\u63A8\u9001\uFF0C\u53EF\u4EE5\u4F7F\u7528 reset \u547D\u4EE4\u6765\u64A4\u9500\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\uFF1A git reset --hard HEAD~1 \u6216\u8005 git reset --hard HEAD^
ex:
$ git reset --hard HEAD^
HEAD is now at 20312c8f fix(): create problems
  
\u8FD9\u4F1A\u5C06\u60A8\u7684\u5206\u652F\u56DE\u9000\u5230\u5408\u5E76\u4E4B\u524D\u7684\u72B6\u6001\u3002\u6CE8\u610F\uFF0C\u8FD9\u5C06\u5220\u9664\u5408\u5E76\u63D0\u4EA4\u4EE5\u53CA\u5408\u5E76\u5E26\u6765\u7684\u6240\u6709\u66F4\u6539
  
3&gt;\u5982\u679C\u60F3\u4FDD\u7559\u60A8\u7684\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u7684\u66F4\u6539\uFF0C\u53EF\u4EE5\u4F7F\u7528 --soft \u9009\u9879\u66FF\u4EE3 --hard
git reset --soft HEAD~1
  
\u8FD9\u4F1A\u64A4\u9500\u63D0\u4EA4\uFF0C\u4F46\u4FDD\u7559\u66F4\u6539\u5728\u5DE5\u4F5C\u76EE\u5F55\u4E2D
  
4&gt;\u5982\u679C\u5408\u5E76\u8FD8\u6CA1\u6709\u63D0\u4EA4\uFF0C\u53EA\u662F\u5728\u6682\u5B58\u533A\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528(\u53EA\u662Fadd \u4F46\u662F\u6CA1\u6709 commit)
git reset --merge
  
\u8FD9\u4F1A\u53D6\u6D88\u5408\u5E76\u64CD\u4F5C\uFF0C\u5E76\u5C06\u6587\u4EF6\u6062\u590D\u5230\u5408\u5E76\u524D\u7684\u72B6\u6001
  
5&gt;\u64CD\u4F5C\u5B8C\uFF0C\u6267\u884C git status \u67E5\u770B\u5206\u652F\u72B6\u6001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function r(a,v){return i(),n("div",null,t)}var m=e(d,[["render",r],["__file","git\u4E4B\u64A4\u9500merge\u7684\u6B65\u9AA4.html.vue"]]);export{m as default};
