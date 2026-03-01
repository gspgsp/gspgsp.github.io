import{_ as e,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(r,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h4 id="由于使用了composer包-基本上不需要单独写认证的逻辑-主要是一些配置" tabindex="-1"><a class="header-anchor" href="#由于使用了composer包-基本上不需要单独写认证的逻辑-主要是一些配置"><span>由于使用了composer包，基本上不需要单独写认证的逻辑, 主要是一些配置</span></a></h4><h5 id="_1-相关包的配置" tabindex="-1"><a class="header-anchor" href="#_1-相关包的配置"><span>1.相关包的配置</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">my_project/</span>
<span class="line">├── bin/</span>
<span class="line">├── config/</span>
<span class="line">│   ├── packages/</span>
<span class="line">│        └── lexik_jwt_authentication.yaml</span>
<span class="line">│        └── gesdinet_jwt_refresh_token.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-lexik-jwt-authentication-配置如下" tabindex="-1"><a class="header-anchor" href="#_2-lexik-jwt-authentication-配置如下"><span>2.lexik_jwt_authentication 配置如下</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">具体内容:</span>
<span class="line">lexik_jwt_authentication:</span>
<span class="line">    secret_key: &#39;%kernel.project_dir%/config/jwt/private.pem&#39;</span>
<span class="line">    public_key: &#39;%kernel.project_dir%/config/jwt/public.pem&#39;</span>
<span class="line">    pass_phrase: &#39;%env(JWT_PASSPHRASE)%&#39;</span>
<span class="line">    token_ttl: 3600</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-gesdinet-jwt-refresh-token-配置如下" tabindex="-1"><a class="header-anchor" href="#_3-gesdinet-jwt-refresh-token-配置如下"><span>3.gesdinet_jwt_refresh_token 配置如下</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">具体内容:</span>
<span class="line">gesdinet_jwt_refresh_token:</span>
<span class="line">  refresh_token_class: App\\Entity\\RefreshToken #指定用哪个实体来保存 refresh token（自定义的）</span>
<span class="line">  ttl: 86400 #默认这个refresh_token有效期是一个月，这里配置为1天</span>
<span class="line">  ttl_update: true #每次使用 refresh token 成功刷新后，自动延长它的过期时间, 顺便说一下 ttl_update: true 的效果 当客户端用 refresh token 请求 /api/token/refresh 时，如果刷新成功，会自动把这个 refresh token 的 valid 时间 续期，也就是重新+1小时（或+1天，看你的 ttl 配置）。如果 ttl_update: false，那么 refresh token 用一次就快过期了（不续命）。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-路由配置" tabindex="-1"><a class="header-anchor" href="#_3-路由配置"><span>3.路由配置</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在~/config/routes.yaml下添加如下配置:</span>
<span class="line"></span>
<span class="line">api_login_check:</span>
<span class="line">    path: /api/login_check</span>
<span class="line">api_refresh_token:</span>
<span class="line">    path: /api/token/refresh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-firewalls-配置" tabindex="-1"><a class="header-anchor" href="#_4-firewalls-配置"><span>4.firewalls 配置</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在~/config/packages/security.yaml下添加如下配置:</span>
<span class="line"></span>
<span class="line">    providers:</span>
<span class="line">        app_user_provider:</span>
<span class="line">            entity:</span>
<span class="line">                class: App\\Entity\\User</span>
<span class="line">                # 这里定义了 property: email, 那么整个登陆过程就不会调用 User Entity 下的 getUserIdentifier， 实际上是 UserRepository 下的 loadUserByIdentifier, 而是直接使用 email 作为用户登陆的唯一标识</span>
<span class="line">                # 根据实际开发需求，需要在 loadUserByIdentifier 下，自定义用户登录库的验证逻辑(拦截验证)</span>
<span class="line">                # 这个配置告诉 Symfony 应该用哪个字段来查找用户， 两种方式 1.通过直接定义字段的凡是，比如这里的 email，2. 通过 loadUserByIdentifier</span>
<span class="line">                # property: email</span>
<span class="line">    firewalls:</span>
<span class="line">        login:</span>
<span class="line">            pattern: ^/api/(login|token/refresh)</span>
<span class="line">            stateless: true</span>
<span class="line">            json_login:</span>
<span class="line">                check_path: /api/login_check</span>
<span class="line">                success_handler: lexik_jwt_authentication.handler.authentication_success</span>
<span class="line">                failure_handler: lexik_jwt_authentication.handler.authentication_failure</span>
<span class="line">            refresh_jwt:</span>
<span class="line">                check_path: /api/token/refresh</span>
<span class="line">                provider: app_user_provider</span>
<span class="line">        api:</span>
<span class="line">            pattern: ^/api</span>
<span class="line">            stateless: true</span>
<span class="line">            jwt: ~</span>
<span class="line">        dev:</span>
<span class="line">            pattern: ^/(_(profiler|wdt)|css|images|js)/</span>
<span class="line">            security: false</span>
<span class="line"></span>
<span class="line">    # Easy way to control access for large sections of your site</span>
<span class="line">    # Note: Only the *first* access control that matches will be used</span>
<span class="line">    access_control:</span>
<span class="line">        - { path: ^/api/(login|token/refresh), roles: PUBLIC_ACCESS }</span>
<span class="line">        - { path: ^/api,       roles: IS_AUTHENTICATED_FULLY }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const c=e(l,[["render",t],["__file","part2.html.vue"]]),p=JSON.parse('{"path":"/project/symfony/part3/part2.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"project/symfony/part3/part2.md"}');export{c as comp,p as data};
