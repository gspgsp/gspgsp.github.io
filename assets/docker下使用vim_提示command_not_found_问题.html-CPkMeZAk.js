import{_ as e,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const t={};function l(d,n){return i(),s("div",null,n[0]||(n[0]=[a(`<p>docker下使用vim，提示 command not found 问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># vim qh.conf.template </span>
<span class="line">bash: vim: command not found</span>
<span class="line">  </span>
<span class="line">root@d9212faa2c32:/etc/nginx# apt-get install vim</span>
<span class="line">Reading package lists... Done</span>
<span class="line">Building dependency tree... Done</span>
<span class="line">Reading state information... Done</span>
<span class="line">E: Unable to locate package vim</span>
<span class="line">  </span>
<span class="line">这时候需要敲：apt-get update，这个命令的作用是：同步 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的索引，这样才能获取到最新的软件包。</span>
<span class="line">  </span>
<span class="line">执行了 apt-get install 之后，就可以再次运行 apt-get install vim 安装vim了</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=e(t,[["render",l],["__file","docker下使用vim_提示command_not_found_问题.html.vue"]]),m=JSON.parse('{"path":"/content/service/docker/docker%E4%B8%8B%E4%BD%BF%E7%94%A8vim_%E6%8F%90%E7%A4%BAcommand_not_found_%E9%97%AE%E9%A2%98.html","title":"docker下使用vim_提示command_not_found_问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"docker下使用vim_提示command_not_found_问题","description":"docker下使用vim_提示command_not_found_问题"},"headers":[],"git":{},"filePathRelative":"content/service/docker/docker下使用vim_提示command_not_found_问题.md"}');export{o as comp,m as data};
