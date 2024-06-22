import{_ as e,o as n,c as s,g as i}from"./app.dd03cafd.js";const d={},l=i(`<p>pm2\u91CD\u65B0\u52A0\u8F7D\u547D\u4EE4:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pm2 delete ecosystem.config.js
\u5F53\u4F60\u8FD0\u884C pm2 delete ecosystem.config.js \u65F6\uFF0CPM2 \u4F1A\u67E5\u627E\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u6240\u6709\u8FDB\u7A0B\uFF0C\u5E76\u5C06\u5176\u505C\u6B62\u5E76\u4ECE\u8FDB\u7A0B\u5217\u8868\u4E2D\u5220\u9664\u3002\u8FD9\u4E2A\u547D\u4EE4\u5BF9\u4E8E\u6E05\u7406\u4E0D\u518D\u9700\u8981\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u6216\u8005\u91CD\u65B0\u542F\u52A8\u5E94\u7528\u7A0B\u5E8F\u65F6\u975E\u5E38\u6709\u7528\u3002
pm2 start ecosystem.config.js //\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u547D\u4EE4\u518D\u6267\u884C\u8FD9\u4E2A\u5C31\u53EF\u4EE5\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u4E86

pm2 reload ecosystem.config.js
\u5982\u679C\u4FEE\u6539\u4E86 PM2 \u7684\u914D\u7F6E\u6587\u4EF6\uFF08\u6BD4\u5982 ecosystem.config.js\uFF09\uFF0C\u7136\u540E\u60F3\u8981\u8BA9\u65B0\u7684\u914D\u7F6E\u751F\u6548\uFF0C\u53EF\u80FD\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6216\u8005\u91CD\u542F PM2 \u8FDB\u7A0B\u7BA1\u7406\u5668\u3002\u76F4\u63A5\u4F7F\u7528 pm2 stop \u7136\u540E pm2 start \u5E76\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u56E0\u6B64\u65B0\u7684\u914D\u7F6E\u4E0D\u4F1A\u751F\u6548\u3002
\u4E00\u79CD\u66F4\u7B80\u5355\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 pm2 reload \u547D\u4EE4\uFF0C\u5B83\u4F1A\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u800C\u4E0D\u9700\u8981\u5148\u505C\u6B62\u518D\u542F\u52A8\u8FDB\u7A0B\u3002

pm2 restart ecosystem.config.js\uFF0C\u8FD9\u4E2A\u548C pm2 stop \u7136\u540E pm2 start\u6548\u679C\u4E00\u6837\uFF0C\u90FD\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4F55\u4F7F\u7528pm2\u7BA1\u7406\u591A\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684ecosystem.config.js\u6587\u4EF6\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5206\u6790\u5982\u4E0Becosystem.config.js.js\u6587\u4EF6
module.exports = {
  apps: [{
    name: &#39;app1&#39;,
    \u811A\u672C&#39;./app1/index.js&#39;,
    watch: true,
    ignore_watch\uFF1A[&#39;node_modules&#39;],
    env: {
      NODE_ENV: &#39;production&#39;,
      port\uFF1A 3001
    }
  }]
}

\u8981\u60F3\u5B9E\u73B0\u7BA1\u7406\u591A\u4E2A\u5E94\u7528\u5C31\u9700\u8981\u4E3A\u6BCF\u4E2A\u5E94\u7528\u4E0D\u540C\u7684\u547D\u540D
\u7136\u540E\u5728\u7BA1\u7406\u5E94\u7528\u7684\u65F6\u5019\u52A0\u4E0A --name\u53C2\u6570\uFF0C\u6BD4\u5982\u8FD9\u91CC\u7684\u542F\u52A8\u6307\u5B9A\u5E94\u7528 pm2 start ecosystem.config.js --name=&quot;app1&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function a(m,t){return n(),s("div",null,c)}var v=e(d,[["render",a],["__file","pm2\u91CD\u65B0\u52A0\u8F7D\u547D\u4EE4.html.vue"]]);export{v as default};
