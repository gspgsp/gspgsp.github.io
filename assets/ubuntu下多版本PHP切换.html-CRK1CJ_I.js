import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>ubuntu下多版本PHP切换：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">root@k8s-server:$ update-alternatives --config php </span>
<span class="line">There are 2 choices for the alternative php (providing /usr/bin/php).</span>
<span class="line"></span>
<span class="line">  Selection    Path             Priority   Status</span>
<span class="line">------------------------------------------------------------</span>
<span class="line">  0            /usr/bin/php8.1   81        auto mode</span>
<span class="line">* 1            /usr/bin/php7.4   74        manual mode</span>
<span class="line">  2            /usr/bin/php8.1   81        manual mode</span>
<span class="line">  </span>
<span class="line">Press &lt;enter&gt; to keep the current choice[*], or type selection number: 1</span>
<span class="line">update-alternatives: using /usr/bin/php7.4 to provide /usr/bin/php (php) in manual mode</span>
<span class="line"></span>
<span class="line">然后查看/usr/bin/php，其对应的软连接为 /etc/alternatives/php，说明是可选择的</span>
<span class="line">/usr/bin/php----&gt;/etc/alternatives/php</span>
<span class="line">  </span>
<span class="line">查看/etc/alternatives/php，发现又会指向真正设置的版本:</span>
<span class="line">$ ls -l /etc/alternatives/php</span>
<span class="line">lrwxrwxrwx 1 root root 15 12月 12 09:39 /etc/alternatives/php -&gt; /usr/bin/php7.4</span>
<span class="line">  </span>
<span class="line">或者通过 readlink 命令查看:</span>
<span class="line">$ readlink -f /etc/alternatives/php</span>
<span class="line">/usr/bin/php7.4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同版本php状态查看:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ systemctl status php8.1-fpm</span>
<span class="line">$ systemctl status php7.4-fpm</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const c=s(l,[["render",t],["__file","ubuntu下多版本PHP切换.html.vue"]]),d=JSON.parse('{"path":"/content/linux/command/ubuntu%E4%B8%8B%E5%A4%9A%E7%89%88%E6%9C%ACPHP%E5%88%87%E6%8D%A2.html","title":"ubuntu下多版本PHP切换","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu下多版本PHP切换","description":"ubuntu下多版本PHP切换"},"headers":[],"git":{},"filePathRelative":"content/linux/command/ubuntu下多版本PHP切换.md"}');export{c as comp,d as data};
