import{_ as n,o as s,c as a,g as i}from"./app.66ae8700.js";const e={},l=i(`<p>git\u4EE3\u7801\u63D0\u4EA4\u5BF9commit-msg\u7684\u89C4\u8303:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728 .husky \u4E0B\u914D\u7F6E commit-msg\u811A\u672C\uFF0C\u5185\u5BB9\u5982\u4E0B:
npx --no -- commitlint --edit $1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5206\u6790:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx --no -- commitlint --edit <span class="token variable">$1</span>


\u8BA9\u6211\u4EEC\u9010\u90E8\u5206\u8BE6\u7EC6\u5206\u6790\u8FD9\u4E2A\u547D\u4EE4:
  
<span class="token number">1</span>. <span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span><span class="token builtin class-name">:</span>
   - \u8FD9\u662FNode.js\u751F\u6001\u7CFB\u7EDF\u4E2D\u7684\u4E00\u4E2A\u5DE5\u5177,\u7528\u4E8E\u6267\u884Cnpm\u5305\u4E2D\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002
   - \u4F7F\u7528<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>\u7684\u597D\u5904\u662F,\u5B83\u53EF\u4EE5\u6267\u884C\u672C\u5730\u5B89\u88C5\u7684\u5305,\u800C\u4E0D\u9700\u8981\u5168\u5C40\u5B89\u88C5\u6216\u76F4\u63A5\u4FEE\u6539<span class="token environment constant">PATH</span>\u3002
   - \u5728\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u4E2D,\u5B83\u7528\u6765\u8FD0\u884C<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u547D\u4EE4\u3002
  
<span class="token number">2</span>. <span class="token variable"><span class="token variable">\`</span>--no --<span class="token variable">\`</span></span><span class="token builtin class-name">:</span>
   - \u8FD9\u662F<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>\u7684\u4E00\u4E2A\u7279\u6B8A\u9009\u9879\u3002
   - <span class="token variable"><span class="token variable">\`</span>--no<span class="token variable">\`</span></span>\u544A\u8BC9<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>\u4E0D\u8981\u81EA\u52A8\u5B89\u88C5\u7F3A\u5931\u7684\u5305\u3002
   - \u53CC\u7834\u6298\u53F7<span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span>--<span class="token variable">\`</span></span><span class="token punctuation">)</span>\u662F\u4E00\u4E2Ashell\u7EA6\u5B9A,\u7528\u6765\u8868\u793A\u9009\u9879\u7684\u7ED3\u675F\u3002\u8FD9\u786E\u4FDD\u540E\u9762\u7684\u6240\u6709\u5185\u5BB9\u90FD\u88AB\u89C6\u4E3A\u547D\u4EE4\u53C2\u6570,\u800C\u4E0D\u662F<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>\u7684\u9009\u9879\u3002
  
<span class="token number">3</span>. <span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span><span class="token builtin class-name">:</span>
   - \u8FD9\u662F\u5B9E\u9645\u8981\u6267\u884C\u7684\u547D\u4EE4\u3002
   - <span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u662F\u4E00\u4E2A\u7528\u4E8E\u68C0\u67E5Git\u63D0\u4EA4\u4FE1\u606F\u662F\u5426\u7B26\u5408\u7279\u5B9A\u683C\u5F0F\u7684\u5DE5\u5177\u3002// \u8FD9\u91CC\u5176\u5B9E\u5C31\u662F @commitlint/cli \u8FD9\u4E2A\u5DE5\u5177, \u53EF\u4EE5\u8FD0\u884C npx commitlint --help \u67E5\u770B\u652F\u6301\u7684\u53C2\u6570
  
<span class="token number">4</span>. <span class="token variable"><span class="token variable">\`</span>--edit $1<span class="token variable">\`</span></span><span class="token builtin class-name">:</span>
   - <span class="token variable"><span class="token variable">\`</span>--edit<span class="token variable">\`</span></span>\u662F<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u7684\u4E00\u4E2A\u9009\u9879,\u6307\u793A\u5B83\u5E94\u8BE5\u68C0\u67E5\u4E00\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u3002
   - <span class="token variable"><span class="token variable">\`</span>$1<span class="token variable">\`</span></span>\u662F\u4E00\u4E2Ashell\u53D8\u91CF,\u4EE3\u8868\u4F20\u9012\u7ED9\u811A\u672C\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002
   - \u5728Git hooks\u4E0A\u4E0B\u6587\u4E2D,<span class="token variable"><span class="token variable">\`</span>$1<span class="token variable">\`</span></span>\u901A\u5E38\u662FGit\u81EA\u52A8\u521B\u5EFA\u7684\u4E34\u65F6\u6587\u4EF6\u7684\u8DEF\u5F84,\u8BE5\u6587\u4EF6\u5305\u542B\u4E86\u63D0\u4EA4\u4FE1\u606F\u3002
  
\u8FD9\u4E2A\u547D\u4EE4\u7684\u6267\u884C\u6D41\u7A0B:
<span class="token number">1</span>. \u5F53\u5F00\u53D1\u8005\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684Git\u63D0\u4EA4\u65F6,Husky\u4F1A\u89E6\u53D1\u8FD9\u4E2Ahook\u3002
<span class="token number">2</span>. Git\u4F1A\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u6587\u4EF6,\u5305\u542B\u63D0\u4EA4\u4FE1\u606F,\u5E76\u5C06\u5176\u8DEF\u5F84\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9hook\u811A\u672C\u3002
<span class="token number">3</span>. Hook\u811A\u672C\u4F7F\u7528<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>\u6765\u8FD0\u884C\u672C\u5730\u5B89\u88C5\u7684<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u3002
<span class="token number">4</span>. <span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u8BFB\u53D6\u5E76\u68C0\u67E5Git\u63D0\u4F9B\u7684\u63D0\u4EA4\u4FE1\u606F\u6587\u4EF6\u3002
<span class="token number">5</span>. \u5982\u679C\u63D0\u4EA4\u4FE1\u606F\u7B26\u5408\u9884\u5B9A\u4E49\u7684\u89C4\u5219,<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u4F1A\u5141\u8BB8\u63D0\u4EA4<span class="token punctuation">;</span>\u5426\u5219,\u5B83\u4F1A\u963B\u6B62\u63D0\u4EA4\u5E76\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3002
  
\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u7684\u4F18\u70B9:
- \u786E\u4FDD\u4F7F\u7528\u9879\u76EE\u672C\u5730\u5B89\u88C5\u7684<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u7248\u672C,\u907F\u514D\u5168\u5C40\u7248\u672C\u53EF\u80FD\u9020\u6210\u7684\u4E0D\u4E00\u81F4\u3002
- \u4E0D\u9700\u8981\u4FEE\u6539<span class="token environment constant">PATH</span>\u6216\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u6765\u6267\u884C<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u3002
- <span class="token variable"><span class="token variable">\`</span>--no<span class="token variable">\`</span></span>\u9009\u9879\u9632\u6B62<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>\u5728<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u4E0D\u5B58\u5728\u65F6\u5C1D\u8BD5\u5B89\u88C5\u5B83,\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u610F\u5916\u884C\u4E3A\u3002

\u8FD9\u4E2A\u8BBE\u7F6E\u5E2E\u52A9\u56E2\u961F\u7EF4\u62A4\u4E00\u81F4\u7684\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F,\u63D0\u9AD8\u4EE3\u7801\u5E93\u7684\u53EF\u7EF4\u62A4\u6027\u548C\u53EF\u8BFB\u6027\u3002\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u5982\u4F55\u81EA\u5B9A\u4E49<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>\u89C4\u5219\u6216\u6574\u5408\u5230\u5176\u4ED6\u5DE5\u4F5C\u6D41\u7A0B\u4E2D,\u6211\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>commit-msg hook \u7ED9\u4E86\u6211\u4EEC\u4E00\u4E2A\u673A\u4F1A\u5728\u63D0\u4EA4\u5B8C\u6210\u4E4B\u524D\u68C0\u67E5\u548Cpotentially\u4FEE\u6539\u63D0\u4EA4\u4FE1\u606F\u3002
commit-msg hook \u5B9E\u9645\u4E0A\u662F\u5728 pre-commit hook \u4E4B\u540E\u8FD0\u884C\u7684\u3002\u5B83\u7684\u4E3B\u8981\u76EE\u7684\u662F\u68C0\u67E5\u63D0\u4EA4\u4FE1\u606F\u7684\u683C\u5F0F\u548C\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u68C0\u67E5\u4EE3\u7801\u672C\u8EAB\u3002
\u8FD9\u79CD\u8BBE\u8BA1\u5141\u8BB8\u6211\u4EEC\uFF1A
\u9996\u5148\u68C0\u67E5\u4EE3\u7801\u8D28\u91CF\uFF08\u5728 pre-commit \u4E2D\uFF09
\u7136\u540E\u4FDD\u8BC1\u63D0\u4EA4\u4FE1\u606F\u7684\u8D28\u91CF\uFF08\u5728 commit-msg \u4E2D\uFF09
\u8FD9\u6837\u7684\u987A\u5E8F\u786E\u4FDD\u4E86both\u4EE3\u7801\u548C\u63D0\u4EA4\u4FE1\u606F\u90FD\u7B26\u5408\u9879\u76EE\u7684\u6807\u51C6before\u5B8C\u6210\u63D0\u4EA4\u3002
\u76F8\u5173\u914D\u7F6E\uFF1A
1&gt;\u53EF\u4EE5\u76F4\u63A5\u5728package.json\u4E0B\u914D\u7F6E
&quot;commitlint&quot;: {
  &quot;rules&quot;: { // \u66F4\u591A\u89C4\u5219\u53C2\u8003: https://commitlint.js.org/reference/rules.html
    &quot;subject-case&quot;: [
      0, // \u63D0\u793A\u7EA7\u522B
      &quot;always&quot; // \u672C\u6765\u8FD8\u5E94\u8BE5\u6709\u7B2C\u4E09\u4E2A\u53C2\u6570\u7684\uFF0C\u5C31\u662Fsubject-case \u652F\u6301\u7684value, \u56E0\u4E3A\u914D\u7F6E\u4E86 0 \uFF0C\u6240\u4EE5\u5C31\u4E0D\u7528\u914D\u7F6E\u4E86
    ]
  },
  &quot;extends&quot;: [
    &quot;@commitlint/config-conventional&quot; // \u5173\u4E8E conventional \u89C4\u5219\u53C2\u8003 https://www.conventionalcommits.org/en/v1.0.0/
  ]
}

2&gt;\u53EF\u4EE5\u751F\u6210\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6commitlint.config.js
{
  &quot;commitlint&quot;: {
    &quot;rules&quot;: {
      &quot;subject-case&quot;: [0, &quot;always&quot;]
    },
    &quot;extends&quot;: [
      &quot;@commitlint/config-conventional&quot;
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u914D\u7F6E\u5206\u6790: \u8FD9\u4E2A\u914D\u7F6E\u5B9A\u4E49\u4E86\u9879\u76EE\u4E2Dcommitlint\u7684\u884C\u4E3A\u3002\u8BA9\u6211\u89E3\u91CA\u4E00\u4E0B\u8FD9\u4E2A\u914D\u7F6E\u7684\u5404\u4E2A\u90E8\u5206\uFF1A</p><ol><li><p><code>&quot;rules&quot;</code> \u5BF9\u8C61\uFF1A \u8FD9\u91CC\u5B9A\u4E49\u4E86\u7279\u5B9A\u7684commitlint\u89C4\u5219\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u53EA\u6709\u4E00\u4E2A\u89C4\u5219\u88AB\u663E\u5F0F\u5B9A\u4E49\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;subject-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;always&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&quot;subject-case&quot;</code> \u662F\u89C4\u5219\u7684\u540D\u79F0\uFF0C\u5B83\u63A7\u5236\u63D0\u4EA4\u6D88\u606F\u4E3B\u9898\uFF08\u7B2C\u4E00\u884C\uFF09\u7684\u5927\u5C0F\u5199\u3002</li><li><code>[0, &quot;always&quot;]</code> \u662F\u89C4\u5219\u7684\u914D\u7F6E\uFF1A <ul><li><code>0</code> \u8868\u793A\u8FD9\u4E2A\u89C4\u5219\u88AB\u7981\u7528\uFF080 = off, 1 = warning, 2 = error\uFF09</li><li><code>&quot;always&quot;</code> \u662F\u89C4\u5219\u7684\u9644\u52A0\u914D\u7F6E\uFF0C\u4F46\u56E0\u4E3A\u89C4\u5219\u88AB\u7981\u7528\uFF0C\u6240\u4EE5\u8FD9\u91CC\u6CA1\u6709\u5B9E\u9645\u6548\u679C</li></ul></li></ul><p>\u8FD9\u4E2A\u914D\u7F6E\u5B9E\u9645\u4E0A\u662F\u5173\u95ED\u4E86\u5BF9\u4E3B\u9898\u884C\u5927\u5C0F\u5199\u7684\u9650\u5236\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u4F7F\u7528\u4EFB\u4F55\u5927\u5C0F\u5199\u683C\u5F0F\u3002</p></li><li><p><code>&quot;extends&quot;</code> \u6570\u7EC4\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;@commitlint/config-conventional&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u8868\u793A\u9879\u76EE\u7684commitlint\u914D\u7F6E\u6269\u5C55\u4E86 <code>@commitlint/config-conventional</code> \u5305\u3002\u8FD9\u662F\u4E00\u4E2A\u5E38\u7528\u7684\u9884\u8BBE\u914D\u7F6E\uFF0C\u5B83\u5B9E\u65BD\u4E86Conventional Commits\u89C4\u8303\u3002</p><p>Conventional Commits\u662F\u4E00\u79CD\u63D0\u4EA4\u6D88\u606F\u7684\u683C\u5F0F\u7EA6\u5B9A\uFF0C\u901A\u5E38\u770B\u8D77\u6765\u50CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;type&gt;[optional scope]: &lt;description&gt;

[optional body]

[optional footer(s)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>\u7EFC\u5408\u5206\u6790\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u8FD9\u4E2A\u9879\u76EE\u4F7F\u7528\u4E86Conventional Commits\u89C4\u8303\u4F5C\u4E3A\u57FA\u7840\u3002
2. \u4F46\u662F\uFF0C\u5B83\u5173\u95ED\u4E86\u5BF9\u4E3B\u9898\u884C\u5927\u5C0F\u5199\u7684\u9650\u5236\uFF0C\u8FD9\u53EF\u80FD\u662F\u4E3A\u4E86\u7ED9\u5F00\u53D1\u8005\u66F4\u591A\u7684\u7075\u6D3B\u6027\u3002
3. \u9664\u4E86 \`subject-case\` \u89C4\u5219\uFF0C\u5176\u4ED6\u6240\u6709\u6765\u81EA \`@commitlint/config-conventional\` \u7684\u89C4\u5219\u90FD\u4F1A\u88AB\u5E94\u7528\u3002

\u5B98\u65B9\u6587\u6863: https://commitlint.js.org/

\u603B\u7ED3:
commitlint \u7684\u6838\u5FC3\u529F\u80FD\u548C\u7528\u9014\uFF1A
  
1. \u4E3B\u8981\u529F\u80FD\uFF1A
   - commitlint \u4E3B\u8981\u7528\u4E8E\u68C0\u67E5 Git \u63D0\u4EA4\u4FE1\u606F\uFF08commit messages\uFF09\u7684\u683C\u5F0F\u548C\u5185\u5BB9\u3002
  
2. \u76EE\u7684\uFF1A
   - \u786E\u4FDD\u9879\u76EE\u4E2D\u6240\u6709\u7684\u63D0\u4EA4\u4FE1\u606F\u9075\u5FAA\u4E00\u81F4\u7684\u683C\u5F0F\u548C\u7EA6\u5B9A\u3002
   - \u63D0\u9AD8\u4EE3\u7801\u5E93\u7684\u53EF\u7EF4\u62A4\u6027\u548C\u53EF\u8BFB\u6027\u3002
   - \u4FBF\u4E8E\u81EA\u52A8\u5316\u5DE5\u5177\uFF08\u5982\u751F\u6210\u66F4\u65B0\u65E5\u5FD7\uFF09\u5904\u7406\u63D0\u4EA4\u5386\u53F2\u3002
  
3. \u5DE5\u4F5C\u539F\u7406\uFF1A
   - \u901A\u5E38\u901A\u8FC7 Git hooks\uFF08\u7279\u522B\u662F commit-msg hook\uFF09\u96C6\u6210\u5230\u5DE5\u4F5C\u6D41\u4E2D\u3002
   - \u5728\u6BCF\u6B21\u63D0\u4EA4\u65F6\u81EA\u52A8\u8FD0\u884C\uFF0C\u68C0\u67E5\u63D0\u4EA4\u4FE1\u606F\u662F\u5426\u7B26\u5408\u9884\u5B9A\u4E49\u7684\u89C4\u5219\u3002
  
4. \u5E38\u89C1\u7528\u9014\uFF1A
   - \u5F3A\u5236\u5B9E\u65BD Conventional Commits \u89C4\u8303\u3002
   - \u786E\u4FDD\u63D0\u4EA4\u4FE1\u606F\u5305\u542B\u5FC5\u8981\u7684\u4FE1\u606F\uFF08\u5982\u7C7B\u578B\u3001\u8303\u56F4\u3001\u63CF\u8FF0\u7B49\uFF09\u3002
   - \u9650\u5236\u63D0\u4EA4\u4FE1\u606F\u7684\u957F\u5EA6\u3001\u683C\u5F0F\u6216\u4F7F\u7528\u7684\u8BCD\u8BED\u3002
  
5. \u53EF\u914D\u7F6E\u6027\uFF1A
   - \u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\uFF08\u5982\u6211\u4EEC\u4E4B\u524D\u8BA8\u8BBA\u7684 package.json \u6216 commitlint.config.js\uFF09\u81EA\u5B9A\u4E49\u89C4\u5219\u3002
   - \u53EF\u4EE5\u6269\u5C55\u9884\u8BBE\u914D\u7F6E\uFF08\u5982 @commitlint/config-conventional\uFF09\u5E76\u8986\u76D6\u7279\u5B9A\u89C4\u5219\u3002
  
6. \u4E0E\u5176\u4ED6\u5DE5\u5177\u96C6\u6210\uFF1A
   - \u7ECF\u5E38\u4E0E Husky \u7B49\u5DE5\u5177\u914D\u5408\u4F7F\u7528\uFF0C\u4EE5\u81EA\u52A8\u5316\u6267\u884C\u68C0\u67E5\u3002
   - \u53EF\u4EE5\u96C6\u6210\u5230 CI/CD \u6D41\u7A0B\u4E2D\uFF0C\u786E\u4FDD\u6240\u6709\u63D0\u4EA4\uFF08\u5305\u62EC\u901A\u8FC7 UI \u521B\u5EFA\u7684\uFF09\u90FD\u7B26\u5408\u89C4\u8303\u3002
  
7. \u597D\u5904\uFF1A
   - \u5E2E\u52A9\u56E2\u961F\u4FDD\u6301\u4E00\u81F4\u7684\u63D0\u4EA4\u98CE\u683C\u3002
   - \u4F7F\u5F97\u7406\u89E3\u9879\u76EE\u5386\u53F2\u548C\u751F\u6210\u53D8\u66F4\u65E5\u5FD7\u53D8\u5F97\u66F4\u5BB9\u6613\u3002
   - \u4FC3\u8FDB\u66F4\u597D\u7684\u534F\u4F5C\u548C\u4EE3\u7801\u5BA1\u67E5\u6D41\u7A0B\u3002

\u603B\u7684\u6765\u8BF4\uFF0Ccommitlint \u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u5DE5\u5177\uFF0C\u7528\u4E8E\u7EF4\u62A4\u9AD8\u8D28\u91CF\u3001\u4E00\u81F4\u7684 Git \u63D0\u4EA4\u5386\u53F2\u3002\u5B83\u4E0D\u4EC5\u4EC5\u662F\u7B80\u5355\u7684\u68C0\u67E5\uFF0C\u800C\u662F\u5E2E\u52A9\u56E2\u961F\u5EFA\u7ACB\u66F4\u597D\u7684\u6C9F\u901A\u548C\u534F\u4F5C\u5B9E\u8DF5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003\u5B98\u7F51: https://commitlint.js.org/reference/configuration.html (\u4E3B\u8981\u4E24\u79CD\u65B9\u5F0F\uFF0C\u672C\u6587\u91C7\u7528\u7684\u662F\u7B2C\u4E8C\u79CD)</p>`,10),c=[l];function t(v,o){return s(),a("div",null,c)}var r=n(e,[["render",t],["__file","git\u4EE3\u7801\u63D0\u4EA4\u5BF9commit-msg\u7684\u89C4\u8303.html.vue"]]);export{r as default};
