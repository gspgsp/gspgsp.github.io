import{_ as e,o as n,c as i,g as s}from"./app.dd03cafd.js";const l={},t=s(`<p>ubuntu\u4E0B\u591A\u7248\u672CPHP\u5207\u6362\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@k8s-server:$ update-alternatives --config php 
There are 2 choices for the alternative php (providing /usr/bin/php).

  Selection    Path             Priority   Status
------------------------------------------------------------
  0            /usr/bin/php8.1   81        auto mode
* 1            /usr/bin/php7.4   74        manual mode
  2            /usr/bin/php8.1   81        manual mode
  
Press &lt;enter&gt; to keep the current choice[*], or type selection number: 1
update-alternatives: using /usr/bin/php7.4 to provide /usr/bin/php (php) in manual mode

\u7136\u540E\u67E5\u770B/usr/bin/php\uFF0C\u5176\u5BF9\u5E94\u7684\u8F6F\u8FDE\u63A5\u4E3A /etc/alternatives/php\uFF0C\u8BF4\u660E\u662F\u53EF\u9009\u62E9\u7684
/usr/bin/php----&gt;/etc/alternatives/php
  
\u67E5\u770B/etc/alternatives/php\uFF0C\u53D1\u73B0\u53C8\u4F1A\u6307\u5411\u771F\u6B63\u8BBE\u7F6E\u7684\u7248\u672C:
$ ls -l /etc/alternatives/php
lrwxrwxrwx 1 root root 15 12\u6708 12 09:39 /etc/alternatives/php -&gt; /usr/bin/php7.4
  
\u6216\u8005\u901A\u8FC7 readlink \u547D\u4EE4\u67E5\u770B:
$ readlink -f /etc/alternatives/php
/usr/bin/php7.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u540C\u7248\u672Cphp\u72B6\u6001\u67E5\u770B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ systemctl status php8.1-fpm
$ systemctl status php7.4-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[t];function a(d,v){return n(),i("div",null,r)}var c=e(l,[["render",a],["__file","ubuntu\u4E0B\u591A\u7248\u672CPHP\u5207\u6362.html.vue"]]);export{c as default};
