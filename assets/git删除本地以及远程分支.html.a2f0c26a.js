import{_ as e,o as i,c as n,g as d}from"./app.6e4bf74b.js";const s={},l=d(`<p>git\u5220\u9664\u672C\u5730\u4EE5\u53CA\u8FDC\u7A0B\u5206\u652F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5220\u9664\u8FDC\u7A0B\u5206\u652F:
duo@k8s:~/code/test git push origin --delete m_guoshipeng #\u53EF\u4EE5\u4E0D\u7528\u5728\u672C\u5730\u5207\u6362\u5230\u5BF9\u5E94\u7684\u5206\u652F\uFF0C\u6BD4\u5982\u672C\u5730\u662Fdev, \u53EF\u4EE5\u5220\u9664\u8FDC\u7A0B\u7684dev_feature_1\u5206\u652F
remote: Sending mail...
remote: ignoring branch delete
...
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5220\u9664\u672C\u5730\u5206\u652F:
duo@k8s:~/code/test git branch -d m_guoshipeng
error: The branch &#39;m_guoshipeng&#39; is not fully merged.
If you are sure you want to delete it, run &#39;git branch -D m_guoshipeng&#39;.
duo@k8s:~/code/test git branch -D m_guoshipeng
Deleted branch m_guoshipeng (was c0db2e5).
...
...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E24\u8005\u7684\u533A\u522B:
git branch -d \u4F1A\u5728\u5220\u9664\u524D\u68C0\u67E5merge\u72B6\u6001\uFF08\u5176\u4E0E\u4E0A\u6E38\u5206\u652F\u6216\u8005\u4E0Ehead\uFF09\u3002
git branch -D \u662Fgit branch --delete --force\u7684\u7B80\u5199\uFF0C\u5B83\u4F1A\u76F4\u63A5\u5220\u9664\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function r(t,c){return i(),n("div",null,a)}var v=e(s,[["render",r],["__file","git\u5220\u9664\u672C\u5730\u4EE5\u53CA\u8FDC\u7A0B\u5206\u652F.html.vue"]]);export{v as default};
