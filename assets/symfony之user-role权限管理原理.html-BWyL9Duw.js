import{_ as e,c as n,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(r,s){return a(),n("div",null,s[0]||(s[0]=[i(`<p>symfony之user-role权限管理原理:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">symfony的用户角色权限管理和java的差不多，都是通过 注释路由 来控制的，我还是觉得像 laravel下的 RBAC 权限控制系统比较好，更全面</span>
<span class="line">通过 注释路由 来控制， 感觉太简单粗暴，适合简单的权限分配。</span>
<span class="line"></span>
<span class="line">下面说一下这个验证过程:</span>
<span class="line">symfony的默认权限验证 authenticate 调用的是 vendor/symfony/security-http/Firewall/AccessListener.php  中的 authenticate 方法</span>
<span class="line">其中：</span>
<span class="line">if (!$this-&gt;accessDecisionManager-&gt;decide($token, $attributes, $request, true)) {</span>
<span class="line">           throw $this-&gt;createAccessDeniedException($request, $attributes);</span>
<span class="line">       }</span>
<span class="line">       </span>
<span class="line">decide 调用的是  vendor/symfony/security-core/Authorization/AccessDecisionManager.php 中的 decide 方法</span>
<span class="line"></span>
<span class="line">其中:</span>
<span class="line">return $this-&gt;strategy-&gt;decide(</span>
<span class="line">           $this-&gt;collectResults($token, $attributes, $object)</span>
<span class="line">       );</span>
<span class="line"></span>
<span class="line">collectResults 中的 $voter-&gt;vote($token, $object, $attributes); 调用的是  vendor/symfony/security-core/Authorization/Voter/RoleVoter.php 中的 vote 方法, 这个 vote 方法的逻辑很简单就是对比 $token里的</span>
<span class="line">用户角色信息 和 当前路由需要的权限信息，用了两个 foreach 实现，如果有相等的，那么就可以验证通过.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=e(l,[["render",t],["__file","symfony之user-role权限管理原理.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Buser-role%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E5%8E%9F%E7%90%86.html","title":"symfony之user-role权限管理原理","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之user-role权限管理原理","description":"symfony之user-role权限管理原理"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之user-role权限管理原理.md"}');export{o as comp,d as data};
