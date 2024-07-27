import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const d={},a=s(`<p>\u6700\u8FD1\u505A\u9879\u76EE\uFF0C\u62A5node\u7248\u672C\u8FC7\u4F4E\u7684\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vagrant@homestead:~/code/duoxiaozhan-www$ yarn install
yarn install v1.22.17
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
error @vue-macros/common@1.3.3: The engine &quot;node&quot; is incompatible with this module. Expected version &quot;&gt;=16.14.0&quot;. Got &quot;14.19.0&quot; //\u7248\u672C\u8FC7\u4F4E
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5347\u7EA7nodeJs\u64CD\u4F5C:<br> Node.js\u5B98\u65B9\u63D0\u4F9B\u4E86\u4E00\u79CD\u547D\u4EE4\u884C\u5DE5\u5177n\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u5DE5\u5177\u65B9\u4FBF\u5730\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\u7684Node.js\u3002</p><ul><li>\u5B89\u88C5 n \u547D\u4EE4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vagrant@homestead:~/code/duoxiaozhan-www$ sudo npm install n -g

added 1 package, and audited 2 packages in 7s

found 0 vulnerabilities
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5\u8981\u5347\u7EA7\u7684\u7248\u672C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vagrant@homestead:~/code/duoxiaozhan-www$ sudo n latest //\u8FD9\u91CC\u76F4\u63A5\u5230\u6700\u65B0\u7248\u672C\uFF0C\u53EF\u4EE5\u6307\u5B9A\uFF0C\u6BD4\u5982: 18.1.0
  installing : node-v20.2.0
       mkdir : /usr/local/n/versions/node/20.2.0
       fetch : https://nodejs.org/dist/v20.2.0/node-v20.2.0-linux-x64.tar.xz
     copying : node/20.2.0
   installed : v20.2.0 (with npm 9.6.6)

Note: the node command changed location and the old location may be remembered in your current shell.
         old : /usr/bin/node
         new : /usr/local/bin/node
If &quot;node --version&quot; shows the old version then start a new shell, or reset the location hash with:
hash -r  (for bash, zsh, ash, dash, and ksh)
rehash   (for csh and tcsh)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u4E0A\u9762\u7684 Note\uFF0C\u6309\u7167\u63D0\u793A\u64CD\u4F5C\u4E00\u904D\u5373\u53EF\u89E3\u51B3\u95EE\u9898\uFF0C\u6211\u76F4\u63A5\u65B0\u5F00\u4E00\u4E2Aterminal \u7136\u540E\u6267\u884C hash -r \u5373\u53EF</p>`,8),l=[a];function o(t,r){return n(),i("div",null,l)}var v=e(d,[["render",o],["__file","nodeJs\u7248\u672C\u5347\u7EA7.html.vue"]]);export{v as default};
