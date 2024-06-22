import{_ as e,o as n,c as s,g as a}from"./app.dd03cafd.js";const i={},l=a(`<p>\u901A\u8FC7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u80FD\u591F\u67E5\u770B\u67D0\u4E2A\u4F9D\u8D56\u5305\u7684\u6700\u65B0\u7248\u672C:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code># \u67E5\u770B\u67D0\u4E2A package \u7684\u6CE8\u518C\u4FE1\u606F
npm <span class="token keyword">view</span> <span class="token operator">&lt;</span>package<span class="token operator">-</span>name<span class="token operator">&gt;</span>

# \u67E5\u770B\u67D0\u4E2A package \u7684\u6700\u65B0\u7248\u672C
npm <span class="token keyword">view</span> <span class="token operator">&lt;</span>package<span class="token operator">-</span>name<span class="token operator">&gt;</span> <span class="token keyword">version</span>

# \u67E5\u770B\u67D0\u4E2A package \u5728 npm \u670D\u52A1\u5668\u4E0A\u6240\u53D1\u5E03\u8FC7\u7684\u7248\u672C
npm <span class="token keyword">view</span> <span class="token operator">&lt;</span>package<span class="token operator">-</span>name<span class="token operator">&gt;</span> versions

# \u67E5\u770B\u4ED3\u5E93\u4F9D\u8D56\u6811\u4E0A\u6240\u6709\u5305\u7684\u7248\u672C\u4FE1\u606F
npm <span class="token keyword">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm \u4E2D\u7684\u5305\u6A21\u5757\u7248\u672C\u90FD\u9700\u8981\u9075\u5FAA SemVer\uFF08Semantic Version\uFF0C\u8BED\u4E49\u5316\u7248\u672C\uFF09\u89C4\u8303\uFF0C\u8FD9\u662F\u7531 Github \u8D77\u8349\u7684\u4E00\u4E2A\u5177\u6709\u6307\u5BFC\u610F\u4E49\u7684\uFF0C\u7EDF\u4E00\u7684\u7248\u672C\u53F7\u8868\u793A\u89C4\u5219.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SemVer \u89C4\u8303\u7684\u6807\u51C6\u7248\u672C\u53F7\u91C7\u7528 X.Y.Z \u7684\u683C\u5F0F\uFF0C\u5176\u4E2D X\u3001Y \u548C Z \u4E3A\u975E\u8D1F\u7684\u6574\u6570\uFF0C\u4E14\u7981\u6B62\u5728\u6570\u5B57\u524D\u65B9\u8865\u96F6\u3002X \u662F\u4E3B\u7248\u672C\u53F7\u3001Y \u662F\u6B21\u7248\u672C\u53F7\u3001\u800C Z \u4E3A\u4FEE\u8BA2\u53F7\u3002\u6BCF\u4E2A\u5143\u7D20\u5FC5\u987B\u4EE5\u6570\u503C\u6765\u9012\u589E\u3002

\u4E3B\u7248\u672C\u53F7\uFF08major\uFF09\uFF1A\u5F53\u4F60\u505A\u4E86\u4E0D\u517C\u5BB9\u7684 API \u4FEE\u6539
\u6B21\u7248\u672C\u53F7\uFF08minor\uFF09\uFF1A\u5F53\u4F60\u505A\u4E86\u5411\u4E0B\u517C\u5BB9\u7684\u529F\u80FD\u6027\u65B0\u589E
\u4FEE\u8BA2\u53F7\uFF08patch\uFF09\uFF1A\u5F53\u4F60\u505A\u4E86\u5411\u4E0B\u517C\u5BB9\u7684\u95EE\u9898\u4FEE\u6B63\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7248\u672C\u53F7\u6807\u7B7E:<br> \u7248\u672C\u53F7\u6807\u7B7E \u8BED\u4E49 \u8BF4\u660E<br> latest \u9ED8\u8BA4 \u4E0D\u6307\u5B9A\u7248\u672C\u60C5\u51B5\u4E0B\u9ED8\u8BA4\u5B89\u88C5\u7684\u6700\u65B0\u7248\u672C<br> alpha \u5185\u6D4B \u5185\u90E8\u6D4B\u8BD5\u7248\uFF0C\u4E00\u822C\u4E0D\u5411\u5916\u90E8\u53D1\u5E03\uFF0C\u4F1A\u6709\u5F88\u591A BUG\uFF0C\u4E00\u822C\u53EA\u6709\u6D4B\u8BD5\u4EBA\u5458\u4F7F\u7528<br> beta \u516C\u6D4B \u4E5F\u662F\u6D4B\u8BD5\u7248\u672C\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u7684\u7248\u672C\u4F1A\u4E00\u76F4\u52A0\u5165\u65B0\u7684\u529F\u80FD\uFF0C\u5728 Alpha \u7248\u4E4B\u540E\u63A8\u51FA<br> next \u4E0B\u4E00\u4E2A rc \u5019\u9009 Release Candidate \u7CFB\u7EDF\u5E73\u53F0\u4E0A\u5C31\u662F\u53D1\u884C\u5019\u9009\u7248\u672C\u3002RC \u7248\u4E0D\u4F1A\u518D\u52A0\u5165\u65B0\u7684\u529F\u80FD\u4E86\uFF0C\u4E3B\u8981\u7740\u91CD\u4E8E\u9664\u9519<br> experimental \u5B9E\u9A8C</p><p>\u7ED9\u7248\u672C\u53F7\u6DFB\u52A0\u6807\u7B7E\u7684\u65B9\u5F0F\u6709\u4E24\u79CD:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u5728\u53D1\u5E03\u65F6\u6307\u5B9A\u6807\u7B7E
# 1. version-tag \u66FF\u6362\u4E3A\u7248\u672C\u53F7\u6807\u7B7E\u7684\u540D\u79F0
npm publish --tag &lt;version-tag&gt;

# \u793A\u4F8B
npm publish --tag next react@18.0.0
npm publish --tag experimental vue@3.2.0

# \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u53D1\u5E03\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4
# 1. package-name \u66FF\u6362\u4E3A npm \u5305\u540D\u5B57
# 2. version \u66FF\u6362\u4E3A npm \u5305\u7684\u6307\u5B9A\u7248\u672C
# 3. version-tag \u66FF\u6362\u4E3A\u7248\u672C\u53F7\u6807\u7B7E\u7684\u540D\u79F0
npm dist-tag add &lt;package-name&gt;@&lt;version&gt; &lt;version-tag&gt;

# \u793A\u4F8B
npm dist-tag add react@18.0.0 alpha
npm dist-tag add vue@3.2.0 next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7248\u672C\u53F7\u64CD\u4F5C\u5DE5\u5177:semver\uFF0C\u53EF\u4EE5\u901A\u8FC7 npm \u5B89\u88C5\uFF0Cnpm install semver</p><p>\u7248\u672C\u53F7\u7279\u6B8A\u5B57\u7B26:<br> \u7248\u672C\u53F7\u5305\u53EF\u80FD\u5305\u542B ~ \u548C ^ \u7B26\u53F7\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>~\uFF1A\u5F53\u5B89\u88C5\u4F9D\u8D56\u65F6\u83B7\u53D6\u5230\u6709\u6700\u65B0\u7248\u672C\u65F6\uFF0C\u5B89\u88C5\u5230 x.y.z \u4E2D z \u7684\u6700\u65B0\u7248\u672C\u3002\u5373\u4FDD\u6301\u4E3B\u7248\u672C\u53F7\u3001\u6B21\u7248\u672C\u53F7\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u4FDD\u6301\u4FEE\u8BA2\u53F7\u7684\u6700\u65B0\u7248\u672C
^\uFF1A\u5F53\u5B89\u88C5\u4F9D\u8D56\u65F6\u83B7\u53D6\u5230\u7531\u6700\u65B0\u7248\u672C\u65F6\uFF0C\u5B89\u88C5\u5230 x.y.z \u4E2D y \u548C z \u90FD\u4E3A\u6700\u65B0\u7248\u672C\u3002\u5373\u4FDD\u6301\u4E3B\u7248\u672C\u53F7\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u4FDD\u6301\u6B21\u7248\u672C\u53F7\u3001\u4FEE\u8BA2\u7248\u672C\u53F7\u4E3A\u6700\u65B0\u7248\u672C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u6B64\u4EE5\u5916\uFF0C\u8FD8\u5305\u542B\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt;\uFF1A\u63A5\u53D7\u9AD8\u4E8E\u6307\u5B9A\u7248\u672C\u7684\u4EFB\u4F55\u7248\u672C
&gt;= \u63A5\u53D7\u7B49\u4E8E\u6216\u9AD8\u4E8E\u6307\u5B9A\u7248\u672C\u7684\u4EFB\u4F55\u7248\u672C
&lt;=\uFF1A\u63A5\u53D7\u7B49\u4E8E\u6216\u4F4E\u4E8E\u6307\u5B9A\u7248\u672C\u7684\u4EFB\u4F55\u7248\u672C
&lt;\uFF1A\u63A5\u53D7\u4F4E\u4E8E\u6307\u5B9A\u7248\u672C\u7684\u4EFB\u4F55\u7248\u672C
=\uFF1A\u63A5\u53D7\u786E\u5207\u7684\u7248\u672C
-\uFF1A\u63A5\u53D7\u4E00\u5B9A\u8303\u56F4\u7684\u7248\u672C\uFF0C\u4F8B\u5982 2.1.0 - 2.4.1
||\uFF1A\u7EC4\u5408\u96C6\u5408\uFF0C\u4F8B\u5982 &lt; 2.2 || &gt; 2.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function r(v,t){return n(),s("div",null,d)}var p=e(i,[["render",r],["__file","npm\u7248\u672C\u53F7\u89C4\u5219.html.vue"]]);export{p as default};
