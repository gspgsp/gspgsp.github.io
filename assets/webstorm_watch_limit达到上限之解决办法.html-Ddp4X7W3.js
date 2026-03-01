import{_ as s,c as n,f as t,o as i}from"./app-BB_BIQV8.js";const a={};function l(c,e){return i(),n("div",null,e[0]||(e[0]=[t(`<p>webstorm_watch_limit达到上限之解决办法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">To prevent this situation it is recommended to increase the watches limit (to, say, 512K):</span>
<span class="line"></span>
<span class="line">1&gt;.Add the following line to a new *.conf file (e.g. idea.conf) under /etc/sysctl.d/ directory:</span>
<span class="line">fs.inotify.max_user_watches = 524288</span>
<span class="line"></span>
<span class="line">2&gt;.Then run this command to apply the change:</span>
<span class="line">sudo sysctl -p --system</span>
<span class="line"></span>
<span class="line">3&gt;.And don&#39;t forget to restart your IDE.</span>
<span class="line"></span>
<span class="line">Note: the watch limit is per-account setting. If there are other programs running under the same account that also use inotify, the limit should be raised high enough to suit the needs of all of them.</span>
<span class="line"></span>
<span class="line">https://intellij-support.jetbrains.com/hc/en-us/articles/15268113529362-Inotify-Watches-Limit-Linux</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(a,[["render",l],["__file","webstorm_watch_limit达到上限之解决办法.html.vue"]]),d=JSON.parse('{"path":"/content/tool/front/webstorm_watch_limit%E8%BE%BE%E5%88%B0%E4%B8%8A%E9%99%90%E4%B9%8B%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html","title":"webstorm_watch_limit达到上限之解决办法","lang":"en-US","frontmatter":{"sidebar":false,"title":"webstorm_watch_limit达到上限之解决办法","description":"webstorm_watch_limit达到上限之解决办法"},"headers":[],"git":{},"filePathRelative":"content/tool/front/webstorm_watch_limit达到上限之解决办法.md"}');export{o as comp,d as data};
