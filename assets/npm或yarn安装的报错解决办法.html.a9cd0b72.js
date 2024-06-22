import{_ as l,o as d,c as a,a as e,g as r,r as n}from"./app.dd03cafd.js";const t={},c=r(`<p>\u5728\u6211\u4EEC\u62C9\u53D6\u5230\u524D\u7AEF\u7684\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u9700\u8981\u6267\u884Cnpm install \u6216\u8005 yarn install\uFF0C\u5B89\u88C5\u5FC5\u987B\u7684\u4F9D\u8D56\uFF0C\u5176\u4E2D\u4F1A\u6709\u5404\u79CD\u95EE\u9898\uFF0C\u4E0B\u9762\u6211\u5C31\u5217\u51FA\u51E0\u4E2A\u5E38\u89C1\u7684\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u89E3\u51B3\u529E\u6CD5:</p><p>1.&#39;vue-cli-service&#39; \u4E0D\u662F\u5185\u90E8\u6216\u5916\u90E8\u547D\u4EE4\uFF0C\u8FD9\u4E2A\u95EE\u9898\u4E00\u822C\u9700\u8981\u5B89\u88C5\u4F9D\u8D56</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vagrant@homestead:~/code/xxx.net$ npm install -g @vue/cli
vagrant@homestead:~/code/xxx.net$ npm install -g @vue/cli-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u80FD\u4F1A\u62A5\u4E0B\u9762\u7684\u9519\u8BEF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/lib/node_modules/@vue
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir &#39;/usr/lib/node_modules/@vue&#39;
...
...

\u89E3\u51B3\u529E\u6CD5\u662F\u52A0\u4E0A sudo\uFF0Cvagrant@homestead:~/xxx.net$ sudo npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u6267\u884C npm run serve\u7684\u65F6\u5019\u62A5\uFF1AtranspileDependencies.map is not a function\uFF0C\u89E3\u51B3\u529E\u6CD5\u5982\u4E0B\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u9879\u76EE\u7684 vue.config.js\u914D\u7F6E\u6587\u4EF6\u91CC\uFF0C\u505A\u5982\u4E0B\u4FEE\u6539
module.exports = {
    ...
    transpileDependencies: [] //\u52A0\u4E0A\u8FD9\u4E2A\u7A7A\u7684\u4F9D\u8D56\u5373\u53EF\u89E3\u51B3\u95EE\u9898
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,o){const i=n("BackBtn"),s=n("CommentService");return d(),a("div",null,[c,e(i),e(s)])}var p=l(t,[["render",v],["__file","npm\u6216yarn\u5B89\u88C5\u7684\u62A5\u9519\u89E3\u51B3\u529E\u6CD5.html.vue"]]);export{p as default};
