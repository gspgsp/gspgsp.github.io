import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">因为symfony没有vmiddleware的概念，但是提供了event的概念，可以做同样的事情:  </span>
<span class="line">https://stackoverflow.com/questions/48377175/how-to-add-middleware-for-one-or-two-controllers-in-symfony4</span>
<span class="line"></span>
<span class="line">自定义AccessDeniedException异常处理:  </span>
<span class="line">https://symfony.com/doc/current/security/access_denied_handler.html</span>
<span class="line"></span>
<span class="line">还有就是找到一个middleware的composer包，不过感觉用的人挺少：  </span>
<span class="line">https://github.com/kafkiansky/symfony-middleware</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">自定义authenticator，这个主要是为了定义多个firewall的时候用到，比如后台一套  接口一套:  </span>
<span class="line">https://symfony.com/doc/current/security/custom_authenticator.html，使用:https://symfony.com/doc/current/security/entry_point.html#multiple-authenticators-with-separate-entry-points</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">虽然不能直接在控制器里定义roles，但是可以通过 $this-&gt;denyAccessUnlessGranted(&#39;ROLE_USER&#39;); 来判断是否有 ROLE_USER 角色，进而判断用户是否登录，也可以通过 #[IsGranted(&#39;ROLE_ADMIN&#39;)] 来决定:  </span>
<span class="line">https://symfony.com/doc/current/security.html#security-securing-controller</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const d=n(l,[["render",t],["__file","symfony5使用middleware控制路由.html.vue"]]),m=JSON.parse('{"path":"/content/php/symfony/symfony5%E4%BD%BF%E7%94%A8middleware%E6%8E%A7%E5%88%B6%E8%B7%AF%E7%94%B1.html","title":"symfony5使用middleware控制路由","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony5使用middleware控制路由","description":"symfony5使用middleware控制路由"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony5使用middleware控制路由.md"}');export{d as comp,m as data};
