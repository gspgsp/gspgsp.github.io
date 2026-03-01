import{_ as n,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(c,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>使用symfony的时候，经常会判断用户角色，常见的就是 是否登录</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ROLE_ADMIN # 一般会自定义这样一个角色</span>
<span class="line">ROLE_USER # 一般会自定义这样一个角色，Entity 初始化完成以后，会自动生成</span>
<span class="line"></span>
<span class="line">PUBLIC_ACCESS</span>
<span class="line">IS_AUTHENTICATED_ANONYMOUSLY  #Deprecated: since Symfony 5.4</span>
<span class="line">IS_AUTHENTICATED_FULLY</span>
<span class="line"></span>
<span class="line">namespace Symfony\\Component\\Security\\Core\\Authorization\\Voter;</span>
<span class="line">AuthenticatedVoter</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">User Deprecated: Since symfony/security-core 5.4: </span>
<span class="line">The &quot;IS_AUTHENTICATED_ANONYMOUSLY&quot; security attribute is deprecated, </span>
<span class="line">use &quot;PUBLIC_ACCESS&quot; for public resources, otherwise use &quot;IS_AUTHENTICATED&quot; or &quot;IS_AUTHENTICATED_FULLY&quot; instead if you want to check if the request is (fully) authenticated.  </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">参考：https://symfony.com/doc/current/security.html#allowing-unsecured-access-i-e-anonymous-users，中 Checking to see if a User is Logged In 部分</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",t],["__file","symfony之内置的角色.html.vue"]]),o=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8B%E5%86%85%E7%BD%AE%E7%9A%84%E8%A7%92%E8%89%B2.html","title":"symfony之内置的角色","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之内置的角色","description":"symfony之内置的角色"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之内置的角色.md"}');export{d as comp,o as data};
