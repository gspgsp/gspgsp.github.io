import{_ as n,o as e,c as t,g as s}from"./app.d66d8774.js";const a={},i=s(`<p>\u4E4B\u524D\u8BB0\u5F55\u4E86\u4E00\u70B9\u5173\u4E8Elogin_form\u7684\uFF0C\u5176\u4E2D\u8BF4\u5230\u4E86authenticator\uFF0C\u8FD9\u91CC\u518D\u8BB0\u5F55\u51E0\u4E2A\u6CE8\u610F\u70B9:</p><p>\u4FEE\u6539security.yaml<br> \u8BBE\u7F6E:enable_authenticator_manager: true</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">form_login</span><span class="token punctuation">:</span> <span class="token comment">#\u8FD9\u4E2A\u4F1A\u8C03\u7528\u5185\u7F6E\u7684 Symfony\\Component\\Security\\Http\\Authenticator\\FormLoginAuthenticator</span>
    <span class="token key atrule">success_handler</span><span class="token punctuation">:</span> App\\Security\\LoginSuccessHandler <span class="token comment">#\u7531\u4E8E\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539 \u5185\u7F6EAuthenticator\u7684 onAuthenticationSucces \u56DE\u8C03\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7form_login\u7684success_handler\u6765\u5B9A\u4E49\uFF0C\u5982\u5199 \u7528\u6237cookie\u4FE1\u606F</span>
    <span class="token key atrule">username_parameter</span><span class="token punctuation">:</span> email
    <span class="token key atrule">password_parameter</span><span class="token punctuation">:</span> password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5370\u8F93\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>provider	security.user.provider.concrete.main  #\u8FD9\u4E2A\u5176\u5B9E\u662FUserEntity
context	main
entry_point	security.authenticator.form_login.main
user_checker	security.user_checker
access_denied_handler	(none)
access_denied_url	(none)
authenticators	
[\u25BC
  &quot;form_login&quot;
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u91CA\u6389 form_login\uFF0C\u7136\u540E\u6DFB\u52A0\u81EA\u5B9A\u4E49Authenticator<br> custom_authenticator: App\\Security\\FormLoginAuthenticator #\u53EF\u4EE5\u5728\u8FD9\u4E2A onAuthenticationSucces \u91CC\u6DFB\u52A0 \u6388\u6743\u6210\u529F\u4EE5\u540E\u7684\u4E8B\u4EF6\u64CD\u4F5C\uFF0C\u5982\u5199 \u7528\u6237cookie\u4FE1\u606F<br> \u6253\u5370\u8F93\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>provider  security.user.provider.concrete.main #\u8FD9\u4E2A\u5176\u5B9E\u662FUserEntity
context main
entry_point App\\Security\\FormLoginAuthenticator
user_checker  security.user_checker
access_denied_handler (none)
access_denied_url (none)
authenticators  
[\u25BC
  &quot;App\\Security\\FormLoginAuthenticator&quot;
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u4E00\u4E2Afirewall\u4E0B\uFF0C\u4E0A\u9762\u4E24\u4E2AAuthenticator\u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF0C\u5426\u5219\u4F1A\u62A5\u9519:<br> Because you have multiple authenticators in firewall &quot;main&quot;, you need to set the &quot;entry_point&quot; key to one of your authenticators (&quot;App\\Security\\FormLoginAuthenticator&quot;, &quot;form_login&quot;) or a service ID impleme<br> nting &quot;Symfony\\Component\\Security\\Http\\EntryPoint\\AuthenticationEntryPointInterface&quot;. The &quot;entry_point&quot; determines what should happen (e.g. redirect to &quot;/login&quot;) when an anonymous user tries to access a pro<br> tected page<br> \u9700\u8981\u624B\u52A8\u8BBE\u7F6Eentry_point\uFF0C\u6765\u5B9A\u4E49\u4F7F\u7528\u54EA\u4E2AAuthenticator</p><p>\u53E6\u4E00\u79CD\u5B9A\u4E49\u4E86\u591A\u4E2A authenticator \u7684\u573A\u666F\uFF0Cextends \u81EA\u4E0D\u540C\u7684Authenticator\uFF0C\u800C\u4E0D\u6307\u5B9A entry_point \u662F\u53EF\u4EE5\u7684</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>        <span class="token key atrule">main</span><span class="token punctuation">:</span>
<span class="token comment">#            lazy: true</span>
            <span class="token key atrule">pattern</span><span class="token punctuation">:</span> ^/
            <span class="token key atrule">provider</span><span class="token punctuation">:</span> main
<span class="token comment">#            form_login:</span>
<span class="token comment">#                success_handler: App\\Security\\LoginSuccessHandler</span>
<span class="token comment">#                username_parameter: email</span>
<span class="token comment">#                password_parameter: password</span>
<span class="token comment">#            custom_authenticator: App\\Security\\FormLoginAuthenticator  #\u5F53\u53EA\u6709\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 authenticator \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FD9\u6837key value \u5B9A\u4E49\uFF0C\u591A\u4E2A\u7684\u8BDD\u5C31\u7528\u4E0B\u9762\u7684\u6570\u7EC4\u5B9A\u4E49</span>
            <span class="token key atrule">custom_authenticators</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> App\\Security\\FormLoginAuthenticator  <span class="token comment"># AbstractLoginFormAuthenticator</span>
                <span class="token punctuation">-</span> App\\Security\\RedirectAuthenticator <span class="token comment"># AbstractAuthenticator</span>
<span class="token comment">#            entry_point: App\\Security\\FormLoginAuthenticator</span>
            <span class="token key atrule">logout</span><span class="token punctuation">:</span>
                <span class="token key atrule">invalidate_session</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                <span class="token key atrule">path</span><span class="token punctuation">:</span> /logout
            <span class="token key atrule">security</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u6307\u5B9A firewall\u4E0B\u7684\u914D\u7F6E\u4FE1\u606F: php bin/console debug:firewall main<br> \u5173\u4E8EAuthenticator\u7684\u8C03\u7528\u6E90\u7801:Symfony\\Component\\Security\\Http\\Authentication\\AuthenticatorManager # \u91CD\u70B9\u5728 147\u884C executeAuthenticators</p>`,11),o=[i];function c(r,u){return e(),t("div",null,o)}var p=n(a,[["render",c],["__file","symfony\u4E4Bcustom_authenticator\u8BE6\u7EC6\u4F7F\u7528.html.vue"]]);export{p as default};
