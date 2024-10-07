import{_ as n,o as i,c as e,g as s}from"./app.d66d8774.js";const l={},d=s(`<p>nuxt3\u9879\u76EE\u6700\u5168\u76EE\u5F55\u7ED3\u6784:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Nuxt3
\u251C\u2500\u2500 .husky                        # Git hooks \u5DE5\u5177\u914D\u7F6E
\u251C\u2500\u2500 .vscode                       # vscode\u914D\u7F6E
\u251C\u2500\u2500 doc                           # \u9879\u76EE\u6587\u6863
\u251C\u2500\u2500 build                         # \u5DE5\u7A0B\u5316\u6784\u5EFA\u76F8\u5173\u914D\u7F6E
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 api                       # \u63A5\u53E3\u8BF7\u6C42\u670D\u52A1\u7BA1\u7406
\u2502   \u2502  \u2514\u2500\u2500 modules                # \u63A5\u53E3\u6A21\u5757
\u2502   \u251C\u2500\u2500 assets                    # \u5DE5\u7A0B\u5316\u5904\u7406\u7684\u9759\u6001\u8D44\u6E90
\u2502   \u251C\u2500\u2500 components                # \u9879\u76EE\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 composables               # \u54CD\u5E94\u5F0F\u5171\u4EAB\u72B6\u6001
\u2502   \u251C\u2500\u2500 enums                     # \u679A\u4E3E\u7BA1\u7406
\u2502   \u251C\u2500\u2500 layouts                   # \u5E03\u5C40\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 middleware                # \u8DEF\u7531\u4E2D\u95F4\u4EF6
\u2502   \u251C\u2500\u2500 pages                     # \u9875\u9762\u89C6\u56FE
\u2502   \u251C\u2500\u2500 plugins                   # \u9879\u76EE\u516C\u5171\u63D2\u4EF6
\u2502   \u251C\u2500\u2500 public                    # \u4E0D\u9700\u8981\u5DE5\u7A0B\u5316\u5904\u7406\u7684\u9759\u6001\u8D44\u6E90
\u2502   \u251C\u2500\u2500 store                     # \u72B6\u6001\u7BA1\u7406
\u2502   \u251C\u2500\u2500 utils                     # \u9759\u6001\u5DE5\u5177\u51FD\u6570
\u2502   \u2514\u2500\u2500 app.vue                   # \u5165\u53E3\u9875\u9762
\u251C\u2500\u2500 .commitlintrc.json            # git\u63D0\u4EA4\u89C4\u8303\u68C0\u67E5\u914D\u7F6E
\u251C\u2500\u2500 .editorconfig                 # \u7F16\u8F91\u5668\u914D\u7F6E
\u251C\u2500\u2500 .env                          # \u73AF\u5883\u53D8\u91CF(\u9ED8\u8BA4/\u5F00\u53D1\u73AF\u5883)
\u251C\u2500  .env.local                    # \u672C\u5730\u73AF\u5883\u53D8\u91CF
\u251C\u2500\u2500 .env.pre                      # \u9884\u53D1\u5E03\u73AF\u5883\u53D8\u91CF
\u251C\u2500\u2500 .env.prod                     # \u751F\u4EA7\u73AF\u5883\u53D8\u91CF
\u251C\u2500\u2500 .env.test                     # \u6D4B\u8BD5\u73AF\u5883\u53D8\u91CF
\u251C\u2500\u2500 .eslintignore                 # eslint\u5FFD\u7565\u6587\u4EF6\u68C0\u67E5\u7684\u914D\u7F6E
\u251C\u2500\u2500 .eslintrc.js                  # eslint\u4EE3\u7801\u89C4\u8303\u68C0\u67E5\u914D\u7F6E
\u251C\u2500\u2500 .gitignore                    # git\u4ED3\u5E93\u63D0\u4EA4\u5FFD\u7565\u914D\u7F6E
\u251C\u2500\u2500 .lintstagedrc.js              # git\u63D0\u4EA4\u4EE3\u7801\u89C4\u8303\u68C0\u67E5\u914D\u7F6E
\u251C\u2500\u2500 .ls-lint.yml                  # \u6587\u4EF6\u547D\u540D\u68C0\u67E5\u914D\u7F6E
\u251C\u2500\u2500 .prettierignore               # prettier\u5FFD\u7565\u683C\u5F0F\u5316\u7684\u914D\u7F6E
\u251C\u2500\u2500 .prettierrc.js                # prettier\u683C\u5F0F\u5316\u914D\u7F6E
\u251C\u2500\u2500 .stylelintignore              # \u6837\u5F0F\u89C4\u8303\u5FFD\u7565\u68C0\u67E5\u7684\u914D\u7F6E
\u251C\u2500\u2500 .stylelintrc.js               # \u6837\u5F0F\u89C4\u8303\u68C0\u67E5\u914D\u7F6E
\u251C\u2500\u2500 nuxt.config.ts                # Vite \u6784\u5EFA\u914D\u7F6E\u5165\u53E3
\u251C\u2500\u2500 package.json                  # \u9879\u76EE\u5305\u7BA1\u7406\u6587\u4EF6
\u251C\u2500\u2500 pnpm-lock.yaml                # pnpm\u5305\u7248\u672C\u7BA1\u7406\u9501\u5B9A
\u251C\u2500\u2500 postcss.config.js             # postcss\u914D\u7F6E
\u251C\u2500\u2500 README.md                     # \u9879\u76EE\u8BF4\u660E
\u251C\u2500\u2500 tailwind.config.js            # tailwind\u914D\u7F6E
\u2514\u2500\u2500 tsconfig.json                 # TS\u7F16\u8BD1\u7684\u914D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003\uFF1Ahttps://juejin.cn/post/7236635191379509308</p>`,3),v=[d];function c(r,a){return i(),e("div",null,v)}var u=n(l,[["render",c],["__file","nuxt3\u9879\u76EE\u6700\u5168\u76EE\u5F55\u7ED3\u6784.html.vue"]]);export{u as default};
