import{_ as e,o as n,c as i,g as s}from"./app.d66d8774.js";const t={},a=s(`<p>\u4E00\u76F4\u5728\u5B9A\u4E49 \u76D1\u542C\u6216\u8005\u8BA2\u9605 \u7684\u914D\u7F6E\u6587\u4EF6\u7528\u5230\u8FD9\u4E2A\uFF0C\u5C31\u8BB0\u5F55\u4E00\u4E0B \u8FD9\u4E2A\u53C2\u6570\u7684\u610F\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Service tags are a way to tell Symfony or other third-party bundles that your service should be registered in some special way. Take the following example:
# config/services.yaml
services:
    App\\Twig\\AppExtension:
        tags: [&#39;twig.extension&#39;]

Services tagged with the twig.extension tag are collected during the initialization of TwigBundle and added to Twig as extensions.

Other tags are used to integrate your services into other systems. For a list of all the tags available in the core Symfony Framework, check out Built-in 
Symfony Service Tags(\u4E0B\u9762\u7684\u94FE\u63A5,\u67E5\u770B\u6240\u6709\u7684tag). Each of these has a different effect on your service and many tags require additional arguments (beyond the name parameter).

\u53C2\u8003:https://symfony.com/doc/current/service_container/tags.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u6240\u6709\u7684tag(\u4EE5\u53CA\u6BCF\u4E2Atag\u4E0B\u7ED1\u5B9A\u7684services/hooks):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php bin/console debug:container --tags

\u6BD4\u5982\uFF1A
tag: kernel.event_listener
Purpose: To listen to different events/hooks in Symfony (\u8981\u5728Symfony\u4E2D\u76D1\u542C\u4E0D\u540C\u7684\u4E8B\u4EF6/\u94A9\u5B50)

ref:https://symfony.com/doc/current/reference/dic_tags.html
\u5185\u7F6E\u6838\u5FC3\u4E8B\u4EF6:https://symfony.com/doc/current/reference/events.html#kernel-events

\u5B89\u5168\u4E8B\u4EF6\u4E2D\u7684 dispatcher\u5B9A\u4E49:

security.event_dispatcher.FIREWALLNAME

https://symfony.com/doc/current/security.html#security-events

\u9A8C\u8BC1\u53D1\u73B0\u4E0A\u9762\u7684 AuthenticationSuccessEvent \u53EF\u4EE5\u89E6\u53D1, \u4F46\u662F LoginSuccessEvent \u65E0\u6CD5\u89E6\u53D1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[a];function d(l,c){return n(),i("div",null,r)}var o=e(t,[["render",d],["__file","symfony\u4E4Btags\u8BE6\u89E3.html.vue"]]);export{o as default};
