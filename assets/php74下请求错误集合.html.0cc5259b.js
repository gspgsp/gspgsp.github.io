import{_ as e,o as i,c as n,g as t}from"./app.b04686bd.js";const s={},l=t(`<p>php74\u4E0B\u8BF7\u6C42\u9519\u8BEF\u96C6\u5408\uFF1A</p><ul><li>php7.4 \u63D0\u4EA4post\u8BF7\u6C42\uFF0C\u7ED3\u679C\u62A5\u4E0B\u9762\u7684\u9519\u8BEF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2023/09/20 15:51:48 [error] 1044#1044: *1194 FastCGI sent in stderr: &quot;PHP message: PHP Fatal error:  Allowed memory size of 134217728 bytes exhausted (tried to allocate 20480 bytes) in /home/k8s/code/test.com/vendor/doctrine/orm/lib/Doctrine/ORM/Internal/Hydration/AbstractHydrator.php on line 447PHP message: 
PHP Fatal error:  Allowed memory size of 134217728 bytes exhausted (tried to allocate 65536 bytes) in /home/k8s/code/test.com/vendor/symfony/error-handler/DebugClassLoader.php on line 349&quot; while reading response header from upstream, client: 127.0.0.1, server: test.local, request: &quot;POST /event/proposal/create/04d4a042b713404738d190ce39875f7f HTTP/1.1&quot;, 
upstream: &quot;fastcgi://unix:/run/php/php7.4-fpm.sock:&quot;, host: &quot;test.local&quot;, referrer: &quot;http://test.local/event/proposal/create/04d4a042b713404738d190ce39875f7f&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u80AF\u5B9A\u662F\u8981\u4FEE\u6539memory_limit\u7684\u503C\uFF0C\u6709\u4E24\u4E2A\u5730\u65B9\u6709php.ini
\u4E00\u4E2A\u662F: /etc/php/7.4/fpm\u4E0B\u7684php.ini,\u8FD8\u6709\u4E00\u4E2A\u662F:/etc/php/7.4/cli \u4E0B\u7684php.ini\uFF0C\u6211\u4E48\u5E94\u8BE5\u4FEE\u6539fpm\u4E0B\u7684php.ini\u7684memory_limit=1024M,\u800C\u4E0D\u662Fcli\u7684\u90A3\u4E2A\uFF0C\u5426\u5219\u4E0D\u751F\u6548\u3002

\u8FD8\u662F\u90A3\u4E2A\u95EE\u9898: cli\u7528\u4E8E\u547D\u4EE4\u884C\uFF0Cfpm \u7528\u6237web\u8BF7\u6C42.
\u5982\u4E0B\u547D\u4EE4\u884C\u53EF\u4EE5\u4EE5\u4F53\u73B0:
k8s@HPDEV-31:/etc/php/7.4$ php --ini
Configuration File (php.ini) Path: /etc/php/7.4/cli
Loaded Configuration File:         /etc/php/7.4/cli/php.ini
Scan for additional .ini files in: /etc/php/7.4/cli/conf.d
Additional .ini files parsed:      /etc/php/7.4/cli/conf.d/10-mysqlnd.ini,
/etc/php/7.4/cli/conf.d/10-opcache.ini,
/etc/php/7.4/cli/conf.d/10-pdo.ini,
...
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[l];function d(a,o){return i(),n("div",null,r)}var p=e(s,[["render",d],["__file","php74\u4E0B\u8BF7\u6C42\u9519\u8BEF\u96C6\u5408.html.vue"]]);export{p as default};
