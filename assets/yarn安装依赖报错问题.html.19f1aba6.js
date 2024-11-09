import{_ as n,o as e,c as i,g as s}from"./app.66ae8700.js";const a={},l=s(`<p>\u5728\u505A\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u6BD4\u5982PHP \u4F1A\u6267\u884Cyarn\u547D\u4EE4\u5B89\u88C5\u76F8\u5173\u7684\u4F9D\u8D56\uFF0C\u4F46\u662F\u603B\u4F1A\u62A5\u5404\u79CD\u5404\u6837\u7684\u95EE\u9898\uFF0C\u5982\u4E0B\uFF1A</p><p>1.&quot;EPROTO: protocol error, symlink &#39;../../../parser/bin/babel-parser.js&#39;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6267\u884C\uFF1Ayarn install

vagrant@homestead:~/code/duoxiaozhan-admin$ yarn install
yarn install v1.22.17
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning &quot; &gt; sass-loader@7.3.1&quot; has unmet peer dependency &quot;webpack@^3.0.0 || ^4.0.0&quot;.
error An unexpected error occurred: &quot;EPROTO: protocol error, symlink &#39;../../../parser/bin/babel-parser.js&#39; -&gt; &#39;/home/vagrant/code/duoxiaozhan-admin/node_modules/@babel/core/node_modules/.bin/parser&#39;&quot;.
info If you think this is a bug, please open a bug report with the information provided in &quot;/home/vagrant/code/duoxiaozhan-admin/yarn-error.log&quot;.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.  

\u539F\u56E0\u5206\u6790\uFF1A
npm\u9ED8\u8BA4\u4F1A\u4F7F\u7528 symbolic links\u6765\u5B89\u88C5\u7EC4\u4EF6\uFF0C\u4E5F\u5373\u6211\u4EEC\u5728linux\u7CFB\u7EDF\u91CC\u7ECF\u5E38\u7528\u7684\u8F6F\u94FE\u63A5\uFF08ln -s\uFF09\u6216\u786C\u94FE\u63A5(ln)\uFF0C\u4F46\u662F\u6709\u4E9B\u6587\u4EF6\u7CFB\u7EDF\u4E0D\u652F\u6301\u6587\u4EF6\u94FE\u63A5\uFF0C\u6BD4\u5982 Windows\uFF08\u6216\u8005\u8BF4\u51FA\u4E8E\u5B89\u5168\u539F\u56E0\u7981\u7528\u4E86\uFF09\uFF0C\u6709\u65F6\u5019linux \u7CFB\u7EDF\u8FD0\u884C\u5728\u6709 windows\u5206\u533A\u7684\u786C\u76D8\u4E0A\u4E5F\u4E0D\u652F\u6301\u94FE\u63A5\uFF0C\u6BD4\u5982virtualbox\u5728windows\u4E3B\u673A\u4E0A\u9ED8\u8BA4\u7981\u6B62\u5728\u5171\u4EAB\u6587\u4EF6\u5939\u91CC\u4F7F\u7528 symbolic links ,\u5F53\u7136\u4E5F\u662F\u51FA\u4E8E\u5B89\u5168\u8003\u8651\u3002
\u90A3\u4E48 npm install \u9ED8\u8BA4\u9700\u8981\u4F7F\u7528 symbolic link\uFF0C\u800C\u4E14\u8FD9\u4E5F\u672C\u8EAB\u4E5F\u662F npm \u6BD4\u8F83\u91CD\u8981\u7684\u4E00\u4E2A\u7279\u6027\uFF0C\u4F46\u5982\u679C\u6211\u4EEC\u7684\u7CFB\u7EDF\u4E0D\u652F\u6301\u8FD9\u4E00\u5C5E\u6027\u7684\u8BDD\uFF0C\u5C31\u4F1A\u62A5\u4E0A\u9762\u7684\u9519\u8BEF\u4E86\u3002\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u6574\u4F53\u8BBE\u7F6E\u4E00\u4E0Bnpm\uFF0C\u8BA9\u5B83\u9ED8\u8BA4\u4E0D\u518D\u4F7F\u7528\u6587\u4EF6\u94FE\u63A5\u529F\u80FD\u4E86\uFF0C\u6267\u884C\uFF1A

\u8FD9\u6837\u4E86\u4EE5\u540E\uFF0C\u518D\u6267\u884C\u76F8\u5173\u547D\u4EE4\u5C31\u53EF\u4EE5\u4E0D\u7528\u5E26\u2013no-bin-links\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.yarn \u67E5\u770B\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\u3001\u67E5\u770B\u7248\u672C
yarn -v 

2\u3001\u67E5\u770B\u914D\u7F6E
yarn config list 

3\u3001\u914D\u7F6E\u6DD8\u5B9D\u955C\u50CF
yarn config set registry https://registry.npm.taobao.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[l];function d(o,t){return e(),i("div",null,r)}var v=n(a,[["render",d],["__file","yarn\u5B89\u88C5\u4F9D\u8D56\u62A5\u9519\u95EE\u9898.html.vue"]]);export{v as default};
