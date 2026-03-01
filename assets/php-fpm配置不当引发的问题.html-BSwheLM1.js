import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function p(r,n){return a(),e("div",null,n[0]||(n[0]=[i(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">最近在配置 php 环境的时候，遇到一个问题，明明配置了 nginx 的user和group，也配置了 php-fpm的 user和group，为什么还是会</span>
<span class="line">报 502 错误呢</span>
<span class="line"></span>
<span class="line">分析原因如下 当我们在 配置php-fm的配置文件的时候，如果listen 配置了tcp连接 如：listen = 127.0.0.1:9000 ，按上面的配置</span>
<span class="line">运行不会有什么问题，但是如果配置了socket连接，那么就会有问题，需要配置 listen.owner和listen.group = nobody这两个参数，</span>
<span class="line">这两个参数的解释如下：</span>
<span class="line"></span>
<span class="line">; Set permissions for unix socket, if one is used. In Linux, read/write</span>
<span class="line">; permissions must be set in order to allow connections from a web server.</span>
<span class="line">; Default Values: user and group are set as the running user</span>
<span class="line">;                 mode is set to 0660</span>
<span class="line">;listen.owner = nobody</span>
<span class="line">;listen.group = nobody</span>
<span class="line">;listen.mode = 0660</span>
<span class="line"></span>
<span class="line">翻译过来就是：sock文件的读写用户 都必须和 web服务器的一致，这里就是要和nginx的用户一致，所以把这里配置一下，重启fpm和nginx</span>
<span class="line">就可以了</span>
<span class="line"></span>
<span class="line">那么 user/group 和 listen.owner/listen.group的区别是啥，前者是php-fpm启动的用户和用户组，后者是sock连接的用户和用户组，当</span>
<span class="line">为 TCP 连接的时候 ，这个就不会有影响了。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const d=s(l,[["render",p],["__file","php-fpm配置不当引发的问题.html.vue"]]),c=JSON.parse('{"path":"/content/php/base/php-fpm%E9%85%8D%E7%BD%AE%E4%B8%8D%E5%BD%93%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"php-fpm配置不当引发的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"php-fpm配置不当引发的问题","description":"php-fpm配置不当引发的问题"},"headers":[],"git":{},"filePathRelative":"content/php/base/php-fpm配置不当引发的问题.md"}');export{d as comp,c as data};
