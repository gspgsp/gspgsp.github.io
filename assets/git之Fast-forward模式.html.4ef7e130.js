import{_ as e,o as r,c as s,g as i}from"./app.66ae8700.js";const n={},a=i(`<p>git\u4E4BFast-forward\u6A21\u5F0F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u95EE\u9898
git merge branch \u6CA1\u6709\u4EA7\u751F\u65B0\u7684\u63D0\u4EA4\u4FE1\u606F\uFF0C\u800C\u662F\u76F4\u63A5\u5C06 dev branch \u7684\u63D0\u4EA4\u4FE1\u606F\u76F4\u63A5\u8FC1\u79FB\u8FC7\u53BB\u3002\u5982\u4F55\u624D\u80FD merge branch \u7684\u65F6\u5019\uFF0C\u4EA7\u751F\u4E00\u6B21\u65B0\u7684\u63D0\u4EA4\u5462\uFF1F  

2. \u539F\u56E0
\u4E3A\u4EC0\u4E48\u76F4\u63A5 merge \u6CA1\u6709\u4EA7\u751F\u4E00\u6B21\u65B0\u7684\u63D0\u4EA4\u5462\uFF1F
\u5982\u679C\u6211\u4EEC\u7684\u7956\u5148\u5206\u652F\u4EE5 master \u4E3A\u4F8B\uFF0C\u518D checkout \u4E00\u4E2A\u65B0\u7684\u5206\u652F\uFF08bugfix\uFF09\u540E\uFF0C\u4EA7\u751F\u4E86\u65B0\u7684\u63D0\u4EA4\uFF0C\u4E0E\u6B64\u540C\u65F6\uFF0C\u5176\u4ED6\u7684\u5F00\u53D1\u5206\u652F\u6CA1\u6709\u5F80 master \u5408\u5E76\u65B0\u7684\u63D0\u4EA4\u3002
\u8FD9\u6837\uFF0C\u65B0\u7684\u5206\u652F\u4E0E master \u5206\u652F\u7684\u6700\u65B0\u63D0\u4EA4\u5386\u53F2\u662F\u5171\u540C\u7684\u7956\u5148\u3002\u4F46\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u5220\u9664\u5206\u652F\u540E\uFF0C\u4F1A\u4E22\u6389\u5206\u652F\u4FE1\u606F\u3002
\u6B64\u65F6\uFF0Cmerge bugfix \u5206\u652F\u540E\uFF0C master \u62E5\u6709 bugfix \u5168\u90E8\u7684\u63D0\u4EA4\uFF0C\u6240\u4EE5\u5F53\u5408\u5E76\u5230master \u5206\u652F\u540E\uFF0Cmaster \u7684 HEAD \u4F1A\u76F4\u63A5\u6307\u5411\u6700\u65B0\u7684 bugfix \u63D0\u4EA4\u5386\u53F2\u4E0A\u3002\u4E0D\u4F1A\u4EA7\u751F\u65B0\u7684\u63D0\u4EA4\u3002git \u91C7\u7528\u7684\u6A21\u5F0F\u5373\u79F0\u4E3A fast-forward \u6A21\u5F0F\uFF08\u5FEB\u8FDB\u6A21\u5F0F\uFF09  

3. \u89E3\u51B3\u65B9\u6848
\u5728\u5408\u5E76\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7981\u7528 fast-forward \u8FD9\u79CD\u5408\u5E76\u7B56\u7565\u5373\u53EF\u3002\u64CD\u4F5C\u6307\u4EE4\u5982\u4E0B\uFF1A
# --no-ff \u5373 no-fast-forward \u7981\u7528\u5FEB\u8FDB\u6A21\u5F0F
$ git merge --no-ff -m &quot;merge with no-ff&quot; dev  //\u8FD9\u91CC\u5C06 dev \u5206\u652F\u5408\u5E76\u5230 master \u5206\u652F\uFF0C\u540C\u65F6\u542F\u7528 --no-ff \u6A21\u5F0F\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728master\u5206\u652F\u4E0A\u770B\u5230\u4E00\u6761\u65B0\u7684\u5408\u5E76\u8BB0\u5F55




git\u4E4Bort\u7B56\u7565:
\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\uFF0C\u67E5\u770Bgit log \u4F1A\u53D1\u73B0\uFF1Amerge dev: Merge made by the &#39;ort&#39; strategy\uFF0C\u4E00\u65F6\u4E0D\u77E5\u9053\u8FD9\u4E2Aort\u7B56\u7565\u662F\u5E72\u5565\u7684\uFF0C\u6240\u4EE5\u8BB0\u5F55\u4E00\u4E0B
ort \u7B56\u7565\u662F Git \u53D1\u5E03v2.33.0 \u7248\u672C\u65F6\u65B0\u589E\u7684\u4E00\u79CD\u5408\u5E76\u7B56\u7565\u3002
ort \u7B56\u7565\u5B9E\u9645\u4E0A\u662F\u6B64\u524D recursive \u7B56\u7565\uFF08\u4E0E\u4E4B\u76F8\u5BF9\u7684\u53E6\u4E00\u79CD\u901A\u5E38\u662F fast-forward\u7B56\u7565\uFF09\u7684\u91CD\u6784\uFF0C\u89E3\u51B3\u4E86\u4E00\u4E9B\u529F\u80FD\u95EE\u9898\u548C\u6027\u80FD\u95EE\u9898\u3002
GitHub \u62A5\u544A\u79F0 merge-ort \u80FD\u591F\u5728\u6709\u8BB8\u591A\u6587\u4EF6\u91CD\u547D\u540D\u573A\u666F\u7684\u5408\u5E76\u8FC7\u7A0B\u4E2D\u52A0\u901F\u8D85\u8FC7 500 \u500D\uFF0C\u5728\u4E00\u4E9B\u5177\u6709 rebase \u64CD\u4F5C\u7684\u60C5\u51B5\u80FD\u52A0\u901F 9000 \u500D\u3002\u603B\u800C\u8A00\u4E4B\uFF0C\u8FD9\u4E2A merge-ort \u7B56\u7565\u7A33\u5B9A\u5730\u6BD4\u73B0\u6709\u7684\u5408\u5E76\u4EE3\u7801\u65B9\u6848\u66F4\u9AD8\u6548\u3002

\u539F\u6587:
Git 2.33 brings the latest patches around geometric repacking, &quot;merge-ort&quot; as a new merge strategy for handling Git merges across branches, and a number of bitmap-related optimizations. There is also the usual assortment of fixes and smaller items.
Git&#39;s new merge-ort strategy is a scratch rewrite of its recursive strategy but addresses correctness and performance problems. GitHub reports merge-ort can be as much as a &quot;500x&quot; speed-up for large merges with many renames. Merge-ort for merges in a re-base operation can be a speed-up of over 9000x. The new merge-ort should perform consistently faster than the existing merge code.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[a];function d(l,m){return r(),s("div",null,t)}var c=e(n,[["render",d],["__file","git\u4E4BFast-forward\u6A21\u5F0F.html.vue"]]);export{c as default};
