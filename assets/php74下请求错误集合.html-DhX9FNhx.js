import{_ as n,c as s,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(p,e){return a(),s("div",null,e[0]||(e[0]=[i(`<p>php74下请求错误集合：</p><ul><li>php7.4 提交post请求，结果报下面的错误</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">2023/09/20 15:51:48 [error] 1044#1044: *1194 FastCGI sent in stderr: &quot;PHP message: PHP Fatal error:  Allowed memory size of 134217728 bytes exhausted (tried to allocate 20480 bytes) in /home/k8s/code/test.com/vendor/doctrine/orm/lib/Doctrine/ORM/Internal/Hydration/AbstractHydrator.php on line 447PHP message: </span>
<span class="line">PHP Fatal error:  Allowed memory size of 134217728 bytes exhausted (tried to allocate 65536 bytes) in /home/k8s/code/test.com/vendor/symfony/error-handler/DebugClassLoader.php on line 349&quot; while reading response header from upstream, client: 127.0.0.1, server: test.local, request: &quot;POST /event/proposal/create/04d4a042b713404738d190ce39875f7f HTTP/1.1&quot;, </span>
<span class="line">upstream: &quot;fastcgi://unix:/run/php/php7.4-fpm.sock:&quot;, host: &quot;test.local&quot;, referrer: &quot;http://test.local/event/proposal/create/04d4a042b713404738d190ce39875f7f&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">肯定是要修改memory_limit的值，有两个地方有php.ini</span>
<span class="line">一个是: /etc/php/7.4/fpm下的php.ini,还有一个是:/etc/php/7.4/cli 下的php.ini，我么应该修改fpm下的php.ini的memory_limit=1024M,而不是cli的那个，否则不生效。</span>
<span class="line"></span>
<span class="line">还是那个问题: cli用于命令行，fpm 用户web请求.</span>
<span class="line">如下命令行可以以体现:</span>
<span class="line">k8s@HPDEV-31:/etc/php/7.4$ php --ini</span>
<span class="line">Configuration File (php.ini) Path: /etc/php/7.4/cli</span>
<span class="line">Loaded Configuration File:         /etc/php/7.4/cli/php.ini</span>
<span class="line">Scan for additional .ini files in: /etc/php/7.4/cli/conf.d</span>
<span class="line">Additional .ini files parsed:      /etc/php/7.4/cli/conf.d/10-mysqlnd.ini,</span>
<span class="line">/etc/php/7.4/cli/conf.d/10-opcache.ini,</span>
<span class="line">/etc/php/7.4/cli/conf.d/10-pdo.ini,</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const c=n(l,[["render",t],["__file","php74下请求错误集合.html.vue"]]),d=JSON.parse('{"path":"/content/php/base/php74%E4%B8%8B%E8%AF%B7%E6%B1%82%E9%94%99%E8%AF%AF%E9%9B%86%E5%90%88.html","title":"php74下请求错误集合","lang":"en-US","frontmatter":{"sidebar":false,"title":"php74下请求错误集合","description":"php74下请求错误集合"},"headers":[],"git":{},"filePathRelative":"content/php/base/php74下请求错误集合.md"}');export{c as comp,d as data};
