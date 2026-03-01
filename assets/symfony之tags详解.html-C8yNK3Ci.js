import{_ as e,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,s){return i(),n("div",null,s[0]||(s[0]=[a(`<p>一直在定义 监听或者订阅 的配置文件用到这个，就记录一下 这个参数的意义</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Service tags are a way to tell Symfony or other third-party bundles that your service should be registered in some special way. Take the following example:</span>
<span class="line"># config/services.yaml</span>
<span class="line">services:</span>
<span class="line">    App\\Twig\\AppExtension:</span>
<span class="line">        tags: [&#39;twig.extension&#39;]</span>
<span class="line"></span>
<span class="line">Services tagged with the twig.extension tag are collected during the initialization of TwigBundle and added to Twig as extensions.</span>
<span class="line"></span>
<span class="line">Other tags are used to integrate your services into other systems. For a list of all the tags available in the core Symfony Framework, check out Built-in </span>
<span class="line">Symfony Service Tags(下面的链接,查看所有的tag). Each of these has a different effect on your service and many tags require additional arguments (beyond the name parameter).</span>
<span class="line"></span>
<span class="line">参考:https://symfony.com/doc/current/service_container/tags.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看所有的tag(以及每个tag下绑定的services/hooks):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">php bin/console debug:container --tags</span>
<span class="line"></span>
<span class="line">比如：</span>
<span class="line">tag: kernel.event_listener</span>
<span class="line">Purpose: To listen to different events/hooks in Symfony (要在Symfony中监听不同的事件/钩子)</span>
<span class="line"></span>
<span class="line">ref:https://symfony.com/doc/current/reference/dic_tags.html</span>
<span class="line">内置核心事件:https://symfony.com/doc/current/reference/events.html#kernel-events</span>
<span class="line"></span>
<span class="line">安全事件中的 dispatcher定义:</span>
<span class="line"></span>
<span class="line">security.event_dispatcher.FIREWALLNAME</span>
<span class="line"></span>
<span class="line">https://symfony.com/doc/current/security.html#security-events</span>
<span class="line"></span>
<span class="line">验证发现上面的 AuthenticationSuccessEvent 可以触发, 但是 LoginSuccessEvent 无法触发</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=e(l,[["render",t],["__file","symfony之tags详解.html.vue"]]),p=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Btags%E8%AF%A6%E8%A7%A3.html","title":"symfony之tags详解","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之tags详解","description":"symfony之tags详解"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之tags详解.md"}');export{d as comp,p as data};
