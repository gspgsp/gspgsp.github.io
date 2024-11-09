import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const l={},t=s(`<p>\u4F7F\u7528husky\u7EDF\u4E00\u7BA1\u7406git-hooks,\u5B9E\u73B0git commit\u4E4B\u524D\u6821\u9A8Ceslint\uFF0C\u901A\u8FC7\u624D\u80FDcommit\u6210\u529F:</p><ul><li>1.\u5B89\u88C5husky</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install husky --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>2.\u521D\u59CB\u5316husky</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm run prepare
  
\u6267\u884C\u5B8C\u4E0A\u8FF0\u5B89\u88C5\u547D\u4EE4\u540E\uFF0C\u5C06\u4F1A\u53D1\u751F\u5982\u4E0B\u51E0\u4E2A\u53D8\u5316\uFF1A
\u5728.git\u540C\u7EA7\u76EE\u5F55\u751F\u6210.husky\u6587\u4EF6\u5939\uFF0C\u6587\u4EF6\u5939\u4E0B\u6709\u4E00\u4E2A\u53EF\u4EE5\u7F16\u8F91\u7684\u793A\u4F8Bpre-commit\u94A9\u5B50
\u5728package.json\u4E2D\u7684scripts\u4E2D\u6DFB\u52A0\u4E86&quot;prepare&quot;: &quot;husky install&quot;
\u66F4\u6539.git\u6587\u4EF6\u4E0B\u9762\u7684config\u6587\u4EF6\uFF0C\u914D\u7F6E\u9879 core.hooksPath \u4E3A .husky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.\u521B\u5EFA\u4E00\u4E2Ahook</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8981\u6DFB\u52A0\u53E6\u4E00\u4E2A\u94A9\u5B50\uFF0C\u8BF7\u4F7F\u7528husky add
\u5982\uFF1A npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.\u66F4\u65B0hooks\u811A\u672C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4FEE\u6539.husky\u6587\u4EF6\u5939\u4E0B\u7684hooks\u811A\u672C\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>5.\u5378\u8F7D\u5E76\u8FD8\u539Fhusky</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm uninstall husky
// \u5220\u9664.husky\u6587\u4EF6\u5939\uFF0C\u5E76\u4E14\u91CD\u7F6Ecore.hooksPath
rm -rf .husky &amp;&amp; git config --unset core.hooksPath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>6.\u5B9E\u6218</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9879\u76EE\u4E2Dcommit\u7684\u65F6\u5019\uFF0C\u6821\u9A8Ceslint, \u8B66\u544A\u548C\u9519\u8BEF\u90FD\u4E0D\u53EF\u4EE5commit
  1&gt;\u5B89\u88C5\u597D husky \u4E4B\u540E\uFF0C\u7F16\u8F91.husky/pre-commit\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF0C\u800Cpre-push\u4E0D\u7528\u5904\u7406\uFF0C\u5C31\u7528\u9ED8\u8BA4\u5185\u5BB9
  npx lint-staged
  2&gt;\u5B89\u88C5lint-staged\uFF0Clint-stated\u5C31\u662F\u9488\u5BF9Git\u6682\u5B58\u533A\u7684\u6587\u4EF6\u505A\u6821\u9A8C\u7684\u4E00\u4E2A\u5DE5\u5177\u3002\u7531\u4E8E\u5728commit\u4E4B\u524D\uFF0C\u6211\u4EEC\u8981\u63D0\u4EA4\u7684\u6587\u4EF6\u662F\u5728\u6682\u5B58\u533A\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u5DE5\u5177\u6765\u6821\u9A8C\u6211\u4EEC\u5373\u5C06commit\u7684\u6587\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u6821\u9A8C\u5176\u5B83\u7684\u6587\u4EF6
  npm install lint-staged --save-dev
  3&gt;\u914D\u7F6Elint-staged
  // package.json
  {
      &quot;lint-staged&quot;: {
          &quot;*.{js,ts,vue}&quot;: [
            &quot;prettier --write&quot;,
            &quot;eslint --cache --fix&quot; // \u4E5F\u53EF\u4EE5\u6DFB\u52A0\u8FD9\u4E2A\u53C2\u6570 eslint --max-warnings 0
          ],
          &quot;*.{scss, md}&quot;: [
            &quot;prettier --write&quot;
          ]
       }
  }
  4&gt;\u63D0\u4EA4 commit \u7684\u65F6\u5019\uFF0C\u89E6\u53D1\u4E86 pre-commit\u7684gitHook, \u5C31\u6267\u884C\u4E86\u91CC\u9762\u7684\u811A\u672C lint-staged, \u7136\u540E\u6267\u884C\u4E86 eslint --max-warnings 0, \u6700\u7EC8eslint 0 \u8B66\u544A 0 \u9519\u8BEF\u5C31\u53EF\u4EE5commit\u6210\u529F\uFF0C\u53CD\u4E4B\u4E0D\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=[t];function a(u,r){return i(),n("div",null,d)}var v=e(l,[["render",a],["__file","husky\u4F7F\u7528.html.vue"]]);export{v as default};
