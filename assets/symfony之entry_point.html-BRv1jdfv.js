import{_ as s,c as a,f as e,o as t}from"./app-BB_BIQV8.js";const i={};function l(p,n){return t(),a("div",null,n[0]||(n[0]=[e(`<p>有时，一个防火墙有多种认证方式[就会有多个 authenticator]（例如，既有表单登录[form_login]，又有API令牌认证[json_login]）。在这些情况下， 现在需要配置认证入口点。该入口点用于在用户尚未认证但试图访问需要认证的页面时生成一个 响应。例如，这可以用来将用户重定向到登录页面。</p><p>比如:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment"># config/packages/security.yaml</span></span>
<span class="line">security<span class="token punctuation">:</span></span>
<span class="line">    enable_authenticator_manager<span class="token punctuation">:</span> <span class="token constant boolean">true</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># ...</span></span>
<span class="line">    firewalls<span class="token punctuation">:</span></span>
<span class="line">        main<span class="token punctuation">:</span></span>
<span class="line">            <span class="token comment"># allow authentication using a form or HTTP basic</span></span>
<span class="line">            form_login<span class="token punctuation">:</span> <span class="token operator">~</span></span>
<span class="line">            http_basic<span class="token punctuation">:</span> <span class="token operator">~</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment"># configure the form authentication as the entry point for unauthenticated users</span></span>
<span class="line">            entry_point<span class="token punctuation">:</span> form_login</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">可以将某个授权方式配置为<span class="token constant boolean">false</span>，那么这个授权方式即为不可用，如<span class="token punctuation">:</span> form_login<span class="token punctuation">:</span> <span class="token constant boolean">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=s(i,[["render",l],["__file","symfony之entry_point.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Bentry_point.html","title":"symfony之entry_point","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之entry_point","description":"symfony之entry_point"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之entry_point.md"}');export{c as comp,r as data};
