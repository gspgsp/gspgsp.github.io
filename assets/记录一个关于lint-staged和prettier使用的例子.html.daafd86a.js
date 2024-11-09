import{_ as i,o as e,c as n,g as s}from"./app.66ae8700.js";const t={},d=s(`<p>\u8BB0\u5F55\u4E00\u4E2A\u5173\u4E8Elint-staged \u914D\u5408 prettier\u4F7F\u7528\u7684\u4F8B\u5B50:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u5728package.json\u4E0B\u6DFB\u52A0\u5982\u4E0B\u4F9D\u8D56
&quot;lint-staged&quot;: &quot;^13.3.0&quot;,
&quot;prettier&quot;: &quot;^3.2.5&quot;,

\u7136\u540E\u5B89\u88C5\u4F9D\u8D56 npm install
  
2&gt;\u5728 .husky\u4E0B\u7684 pre-commit\u6587\u4EF6\u4E0B\u52A0\u5982\u4E0B\u5185\u5BB9(\u65E0\u9700\u5728package.json\u7684 scripts \u4E0B\u6DFB\u52A0 &quot;lint-staged&quot;: &quot;lint-staged&quot;)
#!/usr/bin/env sh
. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;

npx lint-staged
  
3&gt;\u914D\u7F6E .lintstagedrc.js \u6587\u4EF6 // \u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528\u7684\u662F\u6807\u51C6\u7684 JavaScript \u6A21\u5757\u8BED\u6CD5 (module.exports)\u3002
module.exports = {
  &quot;*.{js,ts,vue}&quot;: [&quot;prettier --write&quot;, &quot;eslint --cache --fix&quot;],
  &quot;*.{scss, md}&quot;: [&quot;prettier --write&quot;],
};


\u6216\u8005 .lintstagedrc.mjs // \u8FD9\u662F\u4E00\u4E2A ECMAScript \u6A21\u5757 (ES \u6A21\u5757)
export default {
  &quot;*.{js,ts,vue}&quot;: [&quot;prettier --write&quot;, &quot;eslint --cache --fix&quot;],
  &quot;*.{scss,md}&quot;: [&quot;prettier --write&quot;],
}

.mjs \u540E\u7F00\u540D\u8868\u793A\u8FD9\u662F\u4E00\u4E2A ECMAScript \u6A21\u5757 (ES \u6A21\u5757)\u3002ES \u6A21\u5757\u662F JavaScript \u6A21\u5757\u7CFB\u7EDF\u7684\u5B98\u65B9\u6807\u51C6\u5316\u7248\u672C,\u5B83\u5177\u6709\u4EE5\u4E0B\u7279\u70B9:

\u5BFC\u5165/\u5BFC\u51FA\u8BED\u6CD5\u4E0D\u540C: ES \u6A21\u5757\u4F7F\u7528 import \u548C export \u8BED\u6CD5,\u800C\u4E0D\u662F require() \u548C module.exports\u3002
\u6587\u4EF6\u6269\u5C55\u540D: \u5177\u6709 .mjs \u6269\u5C55\u540D\u7684\u6587\u4EF6\u88AB\u8BA4\u4E3A\u662F ES \u6A21\u5757\u3002\u8FD9\u6709\u52A9\u4E8E\u4E0E\u65E7\u7248\u672C\u7684 Node.js \u533A\u5206\u5F00\u6765\u3002
\u4E25\u683C\u6A21\u5F0F: ES \u6A21\u5757\u81EA\u52A8\u8FD0\u884C\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\u3002
\u9876\u5C42 this \u4E3A undefined: \u5728 ES \u6A21\u5757\u7684\u9876\u5C42\u4F5C\u7528\u57DF\u4E2D, this \u7684\u503C\u4E3A undefined\u3002
\u65E0\u8282\u70B9\u73AF\u5883\u6C61\u67D3: ES \u6A21\u5757\u901A\u8FC7\u5404\u81EA\u7684\u547D\u540D\u7A7A\u95F4\u6765\u7EC4\u7EC7\u5176\u5185\u90E8\u5143\u7D20\u3002

\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F\u8F83\u65B0\u7248\u672C\u7684 Node.js (&gt;12 \u7248\u672C),\u5E76\u4E14\u60F3\u8981\u5C1D\u8BD5\u4F7F\u7528 ES \u6A21\u5757\u8BED\u6CD5,\u53EF\u4EE5\u4E3A\u914D\u7F6E\u6587\u4EF6\u6307\u5B9A .mjs \u6269\u5C55\u540D\u3002\u7136\u540E\u60A8\u53EF\u4EE5\u4F7F\u7528 import/export \u8BED\u6CD5\u6765\u5B9A\u4E49\u914D\u7F6E,\u800C\u4E0D\u662F module.exports\u3002
  
  
4&gt;\u4FEE\u6539\u4EE3\u7801
\u53EA\u662F\u4FEE\u6539\u4E00\u4E9B\u683C\u5F0F\u7684\u8BDD\uFF0C\u63D0\u4EA4\u4F1A\u62A5\u4E0B\u9762\u7684\u9519\u8BEF
\u62A5:lint-staged prevented an empty git commit \u95EE\u9898
\u539F\u56E0\u662F:
lint-stage error out saying it was an empty git commit - a commit with no changes. No changes because all the changes I made were formatting changes, which were wrong according to prettier and it fixed it back and on doing so, there was no changes left to even be committed to git.
\u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F:
lint-stage \u51FA\u9519\uFF0C\u8BF4\u8FD9\u662F\u4E00\u4E2A\u7A7A\u7684 git \u63D0\u4EA4--\u4E00\u4E2A\u6CA1\u6709\u6539\u52A8\u7684\u63D0\u4EA4\u3002\u6CA1\u6709\u6539\u52A8\u662F\u56E0\u4E3A\u6211\u505A\u7684\u6240\u6709\u6539\u52A8\u90FD\u662F\u683C\u5F0F\u4E0A\u7684\u6539\u52A8\uFF0C\u800C\u6839\u636E prettier\uFF0C\u8FD9\u4E9B\u6539\u52A8\u90FD\u662F\u9519\u8BEF\u7684\uFF0C\u5B83\u628A\u8FD9\u4E9B\u6539\u52A8\u90FD\u6539\u56DE\u6765\u4E86\uFF0C\u8FD9\u6837\u4E00\u6765\uFF0C\u5C31\u6CA1\u6709\u4EFB\u4F55\u6539\u52A8\u53EF\u4EE5\u63D0\u4EA4\u5230 git \u4E86\u3002

\u6240\u4EE5\u9A8C\u9A8C\u8BC1 lint-staged \u662F\u5426\u751F\u6548\uFF0C\u4E0D\u8981\u53EA\u4FEE\u6539\u4EE3\u7801\u683C\u5F0F\uFF0C\u6BD4\u5982\u6545\u610F\u6572\u7A7A\u683C\u4EC0\u4E48\u7684\uFF0C\u8981\u771F\u6B63\u7684\u4FEE\u6539\u4EE3\u7801\u5185\u5BB9\uFF0C\u540C\u65F6\u5982\u679C\u5728\u4FEE\u6539\u4E86\u4EE3\u7801\u5185\u5BB9\u7684\u65F6\u5019\uFF0C\u6539\u4E86\u4EE3\u7801\u683C\u5F0F\u7684\u8BDD\uFF0Clint-staged \u5C31\u4F1A\u751F\u6548\uFF0C\u81EA\u52A8\u683C\u5F0F\u5316\u4EE3\u7801\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u62A5\u9519
  
  
\u53C2\u8003:
https://stackoverflow.com/questions/71420124/how-do-i-solve-this-empty-git-commit-warning
https://karuppiah7890.github.io/blog/posts/lint-staged-lint-your-staged-files/
https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---no-verify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function r(a,v){return e(),n("div",null,l)}var c=i(t,[["render",r],["__file","\u8BB0\u5F55\u4E00\u4E2A\u5173\u4E8Elint-staged\u548Cprettier\u4F7F\u7528\u7684\u4F8B\u5B50.html.vue"]]);export{c as default};
