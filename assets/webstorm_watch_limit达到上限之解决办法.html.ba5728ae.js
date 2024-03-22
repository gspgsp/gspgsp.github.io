import{_ as e,o as i,c as t,g as n}from"./app.b04686bd.js";const s={},a=n(`<p>webstorm_watch_limit\u8FBE\u5230\u4E0A\u9650\u4E4B\u89E3\u51B3\u529E\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>To prevent this situation it is recommended to increase the watches limit (to, say, 512K):

1&gt;.Add the following line to a new *.conf file (e.g. idea.conf) under /etc/sysctl.d/ directory:
fs.inotify.max_user_watches = 524288

2&gt;.Then run this command to apply the change:
sudo sysctl -p --system

3&gt;.And don&#39;t forget to restart your IDE.

Note: the watch limit is per-account setting. If there are other programs running under the same account that also use inotify, the limit should be raised high enough to suit the needs of all of them.

https://intellij-support.jetbrains.com/hc/en-us/articles/15268113529362-Inotify-Watches-Limit-Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[a];function r(c,d){return i(),t("div",null,l)}var m=e(s,[["render",r],["__file","webstorm_watch_limit\u8FBE\u5230\u4E0A\u9650\u4E4B\u89E3\u51B3\u529E\u6CD5.html.vue"]]);export{m as default};
