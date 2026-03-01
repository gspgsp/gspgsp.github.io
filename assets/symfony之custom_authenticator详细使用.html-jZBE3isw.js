import{_ as s,c as e,f as a,o as t}from"./app-BB_BIQV8.js";const i={};function l(c,n){return t(),e("div",null,n[0]||(n[0]=[a(`<p>之前记录了一点关于login_form的，其中说到了authenticator，这里再记录几个注意点:</p><p>修改security.yaml<br> 设置:enable_authenticator_manager: true</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">form_login</span><span class="token punctuation">:</span> <span class="token comment">#这个会调用内置的 Symfony\\Component\\Security\\Http\\Authenticator\\FormLoginAuthenticator</span></span>
<span class="line">    <span class="token key atrule">success_handler</span><span class="token punctuation">:</span> App\\Security\\LoginSuccessHandler <span class="token comment">#由于不能直接修改 内置Authenticator的 onAuthenticationSucces 回调事件，可以通过form_login的success_handler来定义，如写 用户cookie信息</span></span>
<span class="line">    <span class="token key atrule">username_parameter</span><span class="token punctuation">:</span> email</span>
<span class="line">    <span class="token key atrule">password_parameter</span><span class="token punctuation">:</span> password</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印输出:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">provider	security.user.provider.concrete.main  #这个其实是UserEntity</span>
<span class="line">context	main</span>
<span class="line">entry_point	security.authenticator.form_login.main</span>
<span class="line">user_checker	security.user_checker</span>
<span class="line">access_denied_handler	(none)</span>
<span class="line">access_denied_url	(none)</span>
<span class="line">authenticators	</span>
<span class="line">[▼</span>
<span class="line">  &quot;form_login&quot;</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释掉 form_login，然后添加自定义Authenticator<br> custom_authenticator: App\\Security\\FormLoginAuthenticator #可以在这个 onAuthenticationSucces 里添加 授权成功以后的事件操作，如写 用户cookie信息<br> 打印输出:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">provider  security.user.provider.concrete.main #这个其实是UserEntity</span>
<span class="line">context main</span>
<span class="line">entry_point App\\Security\\FormLoginAuthenticator</span>
<span class="line">user_checker  security.user_checker</span>
<span class="line">access_denied_handler (none)</span>
<span class="line">access_denied_url (none)</span>
<span class="line">authenticators  </span>
<span class="line">[▼</span>
<span class="line">  &quot;App\\Security\\FormLoginAuthenticator&quot;</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一个firewall下，上面两个Authenticator不能同时存在，否则会报错:<br> Because you have multiple authenticators in firewall &quot;main&quot;, you need to set the &quot;entry_point&quot; key to one of your authenticators (&quot;App\\Security\\FormLoginAuthenticator&quot;, &quot;form_login&quot;) or a service ID impleme<br> nting &quot;Symfony\\Component\\Security\\Http\\EntryPoint\\AuthenticationEntryPointInterface&quot;. The &quot;entry_point&quot; determines what should happen (e.g. redirect to &quot;/login&quot;) when an anonymous user tries to access a pro<br> tected page<br> 需要手动设置entry_point，来定义使用哪个Authenticator</p><p>另一种定义了多个 authenticator 的场景，extends 自不同的Authenticator，而不指定 entry_point 是可以的</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line">        <span class="token key atrule">main</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token comment">#            lazy: true</span></span>
<span class="line">            <span class="token key atrule">pattern</span><span class="token punctuation">:</span> ^/</span>
<span class="line">            <span class="token key atrule">provider</span><span class="token punctuation">:</span> main</span>
<span class="line"><span class="token comment">#            form_login:</span></span>
<span class="line"><span class="token comment">#                success_handler: App\\Security\\LoginSuccessHandler</span></span>
<span class="line"><span class="token comment">#                username_parameter: email</span></span>
<span class="line"><span class="token comment">#                password_parameter: password</span></span>
<span class="line"><span class="token comment">#            custom_authenticator: App\\Security\\FormLoginAuthenticator  #当只有一个自定义的 authenticator 的时候，可以直接这样key value 定义，多个的话就用下面的数组定义</span></span>
<span class="line">            <span class="token key atrule">custom_authenticators</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token punctuation">-</span> App\\Security\\FormLoginAuthenticator  <span class="token comment"># AbstractLoginFormAuthenticator</span></span>
<span class="line">                <span class="token punctuation">-</span> App\\Security\\RedirectAuthenticator <span class="token comment"># AbstractAuthenticator</span></span>
<span class="line"><span class="token comment">#            entry_point: App\\Security\\FormLoginAuthenticator</span></span>
<span class="line">            <span class="token key atrule">logout</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">invalidate_session</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">                <span class="token key atrule">path</span><span class="token punctuation">:</span> /logout</span>
<span class="line">            <span class="token key atrule">security</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看指定 firewall下的配置信息: php bin/console debug:firewall main<br> 关于Authenticator的调用源码:Symfony\\Component\\Security\\Http\\Authentication\\AuthenticatorManager # 重点在 147行 executeAuthenticators</p>`,11)]))}const r=s(i,[["render",l],["__file","symfony之custom_authenticator详细使用.html.vue"]]),p=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Bcustom_authenticator%E8%AF%A6%E7%BB%86%E4%BD%BF%E7%94%A8.html","title":"symfony之custom_authenticator详细使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之custom_authenticator详细使用","description":"symfony之custom_authenticator详细使用"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之custom_authenticator详细使用.md"}');export{r as comp,p as data};
