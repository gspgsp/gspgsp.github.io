import{_ as e,o as i,c as n,g as l}from"./app.dd03cafd.js";const s={},d=l(`<p>git pull \u5206\u652F\u62A5\u9519 fatal: Need to specify how to reconcile divergent branches...</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5206\u6790\uFF1A\u8FD9\u662F\u7531\u4E8E\u4F60\u62C9\u53D6pull\u5206\u652F\u524D\uFF0C\u8FDB\u884C\u8FC7merge\u5408\u5E76\u66F4\u65B0\u5206\u652F\u64CD\u4F5C\uFF0C\u800C\u5176\u4ED6\u4EBA\u5728\u4F60\u4E4B\u524D\u5DF2\u7ECFpush\u8FC7\u4E00\u4E2A\u7248\u672C\uFF0C\u5BFC\u81F4\u7248\u672C\u4E0D\u4E00\u81F4
\u7B2C\u4E00\u79CD\u89E3\u51B3\u65B9\u6CD5\uFF1A\u6BD4\u8F83\u7B80\u5355

\u6267\u884Cgit config pull.rebase false
\u9ED8\u8BA4\u5C06pull\u4E0B\u6765\u7684\u4EE3\u7801\u4E0E\u73B0\u6709\u6539\u52A8\u7684\u4EE3\u7801\u8FDB\u884C\u5408\u5E76
\u4F46\u662F\u53EF\u80FD\u4F1A\u9020\u6210\u4EE3\u7801\u51B2\u7A81\uFF0C\u9700\u8981\u5904\u7406\u4E0B\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4EE3\u7801\u51B2\u7A81\u5982\u679C2\u4E2A\u4EBA\u90FD\u6539\u4E86\u540C\u4E00\u4E2A\u6587\u4EF6\uFF0C\u9700\u8981\u8054\u7CFB\u4E4B\u524Dpush\u7684\u540C\u5B66\uFF0C\u770B\u770B\u8FD9\u5757\u4EE3\u7801\u600E\u4E48\u4FDD\u5B58

\u7B2C\u4E8C\u79CD\u89E3\u51B3\u65B9\u6CD5\uFF1A\u56DE\u9000\u5230\u5408\u5E76\u4E4B\u524D\u7684\u4EE3\u7801\uFF0C\u5728\u8FDB\u884Cpull\u62C9\u53D6\u6700\u65B0\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git pull \u8BED\u6CD5\u8BB0\u5F55:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git pull &lt;\u8FDC\u7A0B\u4E3B\u673A\u540D&gt; &lt;\u8FDC\u7A0B\u5206\u652F\u540D&gt;:&lt;\u672C\u5730\u5206\u652F\u540D&gt;
\u4F8B\u5982\u6267\u884C\u4E0B\u9762\u8BED\u53E5\uFF1A

git pull origin master:brantest

\u5C06\u8FDC\u7A0B\u4E3B\u673Aorigin\u7684master\u5206\u652F\u62C9\u53D6\u8FC7\u6765\uFF0C\u4E0E\u672C\u5730\u7684brantest\u5206\u652F\u5408\u5E76\u3002

\u540E\u9762\u7684\u5192\u53F7\u53EF\u4EE5\u7701\u7565\uFF1A

git pull origin master //\u8FD9\u79CD\u65B9\u5F0F\u5728\u4E4B\u524D\u516C\u53F8\u91CC\uFF0C\u65B0\u624B\u7279\u522B\u559C\u6B22\u4F7F\u7528

\u8868\u793A\u5C06\u8FDC\u7A0Borigin\u4E3B\u673A\u7684master\u5206\u652F\u62C9\u53D6\u8FC7\u6765\u548C\u672C\u5730\u7684\u5F53\u524D\u5206\u652F\u8FDB\u884C\u5408\u5E76\u3002

\u4E0A\u9762\u7684pull\u64CD\u4F5C\u7528fetch\u8868\u793A\u4E3A\uFF1A

git fetch origin master:brantest

git merge brantest

\u76F8\u6BD4\u8D77\u6765git fetch\u66F4\u5B89\u5168\u4E00\u4E9B\uFF0C\u56E0\u4E3A\u5728merge\u524D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u67E5\u770B\u66F4\u65B0\u60C5\u51B5\uFF0C\u7136\u540E\u518D\u51B3\u5B9A\u662F\u5426\u5408\u5E76\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[d];function r(t,c){return i(),n("div",null,a)}var u=e(s,[["render",r],["__file","git\u4E4Bpull\u5206\u652F\u62A5\u9519fatalNeedToSpecifyHowToReconcileDivergentBranches.html.vue"]]);export{u as default};
