import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h4 id="自定义handler-主要是自定义json-login的success-handler-和-failure-handler" tabindex="-1"><a class="header-anchor" href="#自定义handler-主要是自定义json-login的success-handler-和-failure-handler"><span>自定义handler, 主要是自定义json_login的success_handler 和 failure_handler</span></a></h4><h5 id="_1-修改security-yaml配置" tabindex="-1"><a class="header-anchor" href="#_1-修改security-yaml配置"><span>1.修改security.yaml配置</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    providers:</span>
<span class="line">#        users_in_memory: { memory: null }</span>
<span class="line">        app_user_provider:</span>
<span class="line">            entity:</span>
<span class="line">                class: App\\Entity\\User</span>
<span class="line">    firewalls:</span>
<span class="line">        login:</span>
<span class="line">            pattern: ^/api/(login|token/refresh)</span>
<span class="line">            stateless: true</span>
<span class="line">            json_login:</span>
<span class="line">                check_path: /api/login_check</span>
<span class="line">                success_handler: App\\Security\\CustomAuthenticationSuccessHandler</span>
<span class="line">                failure_handler: App\\Security\\CustomAuthenticationFailureHandler</span>
<span class="line">            refresh_jwt:</span>
<span class="line">                check_path: /api/token/refresh</span>
<span class="line">                provider: app_user_provider</span>
<span class="line">        api:</span>
<span class="line">            pattern: ^/api</span>
<span class="line">            stateless: true</span>
<span class="line">            jwt:</span>
<span class="line">                provider: app_user_provider</span>
<span class="line">                authenticator: app.custom_jwt_authenticator</span>
<span class="line">        dev:</span>
<span class="line">            pattern: ^/(_(profiler|wdt)|css|images|js)/</span>
<span class="line">            security: false</span>
<span class="line"></span>
<span class="line">    # Easy way to control access for large sections of your site</span>
<span class="line">    # Note: Only the *first* access control that matches will be used</span>
<span class="line">    access_control:</span>
<span class="line">        - { path: ^/api/login_check, roles: PUBLIC_ACCESS }</span>
<span class="line">        - { path: ^/api/(login|token/refresh), roles: PUBLIC_ACCESS }</span>
<span class="line">        - { path: ^/api,       roles: IS_AUTHENTICATED_FULLY }</span>
<span class="line">        </span>
<span class="line">主要修改内容为:</span>
<span class="line">修改了默认的 success_handler 和 failure_handler</span>
<span class="line">对于 api 防火墙，添加了自定义的jwt认证</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-定义-customauthenticationsuccesshandler-和-customauthenticationfailurehandler" tabindex="-1"><a class="header-anchor" href="#_2-定义-customauthenticationsuccesshandler-和-customauthenticationfailurehandler"><span>2.定义 <strong>CustomAuthenticationSuccessHandler</strong> 和 <strong>CustomAuthenticationFailureHandler</strong></span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//CustomAuthenticationSuccessHandler</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Security;</span>
<span class="line"></span>
<span class="line">use Gesdinet\\JWTRefreshTokenBundle\\Model\\RefreshTokenManagerInterface;</span>
<span class="line">use Gesdinet\\JWTRefreshTokenBundle\\Entity\\RefreshToken;</span>
<span class="line">use Lexik\\Bundle\\JWTAuthenticationBundle\\Services\\JWTTokenManagerInterface;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\JsonResponse;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Request;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface;</span>
<span class="line">use Symfony\\Component\\Security\\Http\\Authentication\\AuthenticationSuccessHandlerInterface;</span>
<span class="line">use Symfony\\Component\\DependencyInjection\\ParameterBag\\ParameterBagInterface;</span>
<span class="line"></span>
<span class="line">class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandlerInterface</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private JWTTokenManagerInterface $jwtManager,</span>
<span class="line">        private RefreshTokenManagerInterface $refreshTokenManager,</span>
<span class="line">        private ParameterBagInterface $params,</span>
<span class="line">    ) {}</span>
<span class="line"></span>
<span class="line">    public function onAuthenticationSuccess(Request $request, TokenInterface $token): JsonResponse</span>
<span class="line">    {</span>
<span class="line">        $user = $token-&gt;getUser();</span>
<span class="line">        $jwt = $this-&gt;jwtManager-&gt;create($user);</span>
<span class="line"></span>
<span class="line">        // 读取配置的 ttl</span>
<span class="line">        $ttl = $this-&gt;params-&gt;get(&#39;gesdinet_jwt_refresh_token.ttl&#39;);</span>
<span class="line">        $validUntil = (new \\DateTimeImmutable())-&gt;modify(&quot;+$ttl seconds&quot;);</span>
<span class="line"></span>
<span class="line">        $refreshTokenString = $this-&gt;generateSecureRefreshToken();</span>
<span class="line"></span>
<span class="line">        $refreshToken = new RefreshToken();</span>
<span class="line">        $refreshToken</span>
<span class="line">            -&gt;setRefreshToken($refreshTokenString)</span>
<span class="line">            -&gt;setUsername($user-&gt;getUserIdentifier())</span>
<span class="line">            -&gt;setValid($validUntil);</span>
<span class="line"></span>
<span class="line">        $this-&gt;refreshTokenManager-&gt;save($refreshToken);</span>
<span class="line"></span>
<span class="line">        return new JsonResponse([</span>
<span class="line">            &#39;access_token&#39; =&gt; $jwt,</span>
<span class="line">            &#39;refresh_token&#39; =&gt; $refreshTokenString,</span>
<span class="line">        ]);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    private function generateSecureRefreshToken(): string</span>
<span class="line">    {</span>
<span class="line">        try {</span>
<span class="line">            return &#39;rt_&#39; . bin2hex(random_bytes(40)); // 40 bytes = 80 hex chars</span>
<span class="line">        } catch (\\Exception $e) {</span>
<span class="line">            throw new \\RuntimeException(&#39;can not generate a security refresh token&#39;, 0, $e);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//CustomAuthenticationFailureHandler</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Security;</span>
<span class="line"></span>
<span class="line">use Symfony\\Component\\HttpFoundation\\JsonResponse;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Request;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\Exception\\AuthenticationException;</span>
<span class="line">use Symfony\\Component\\Security\\Http\\Authentication\\AuthenticationFailureHandlerInterface;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\Exception\\BadCredentialsException;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\Exception\\CustomUserMessageAuthenticationException;</span>
<span class="line"></span>
<span class="line">class CustomAuthenticationFailureHandler implements AuthenticationFailureHandlerInterface</span>
<span class="line">{</span>
<span class="line">    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): JsonResponse</span>
<span class="line">    {</span>
<span class="line">        $message = &#39;Authentication failed.&#39;;</span>
<span class="line"></span>
<span class="line">        if ($exception instanceof BadCredentialsException) {</span>
<span class="line">            $message = &#39;Invalid username or password.&#39;;</span>
<span class="line">        } elseif ($exception instanceof CustomUserMessageAuthenticationException) {</span>
<span class="line">            $message = $exception-&gt;getMessage();</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return new JsonResponse([&#39;status&#39; =&gt; 401, &#39;message&#39; =&gt; $message], JsonResponse::HTTP_UNAUTHORIZED);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-自定义-authenticator-app-custom-jwt-authenticator" tabindex="-1"><a class="header-anchor" href="#_3-自定义-authenticator-app-custom-jwt-authenticator"><span>3.自定义 authenticator: app.custom_jwt_authenticator</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//CustomJwtAuthenticator</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Security;</span>
<span class="line"></span>
<span class="line">use Lexik\\Bundle\\JWTAuthenticationBundle\\Security\\Authenticator\\JWTAuthenticator;</span>
<span class="line">use Lexik\\Bundle\\JWTAuthenticationBundle\\Services\\JWTTokenManagerInterface;</span>
<span class="line">use Lexik\\Bundle\\JWTAuthenticationBundle\\TokenExtractor\\TokenExtractorInterface;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Request;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\Exception\\AuthenticationException as SymfonyAuthenticationException;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\Exception\\CustomUserMessageAuthenticationException;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\User\\UserProviderInterface;</span>
<span class="line">use Symfony\\Component\\Security\\Http\\Authenticator\\Passport\\Passport;</span>
<span class="line">use Symfony\\Contracts\\EventDispatcher\\EventDispatcherInterface;</span>
<span class="line">use Symfony\\Contracts\\Translation\\TranslatorInterface;</span>
<span class="line"></span>
<span class="line">class CustomJwtAuthenticator extends JWTAuthenticator</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        JWTTokenManagerInterface $jwtManager,</span>
<span class="line">        EventDispatcherInterface $eventDispatcher,</span>
<span class="line">        TokenExtractorInterface $tokenExtractor,</span>
<span class="line">        UserProviderInterface $userProvider,</span>
<span class="line">        ?TranslatorInterface $translator = null,</span>
<span class="line">    ) {</span>
<span class="line">        parent::__construct($jwtManager, $eventDispatcher, $tokenExtractor, $userProvider, $translator);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function supports(Request $request): ?bool</span>
<span class="line">    {</span>
<span class="line">        return str_starts_with($request-&gt;getPathInfo(), &#39;/api/&#39;);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function authenticate(Request $request): Passport</span>
<span class="line">    {</span>
<span class="line">        try {</span>
<span class="line">            $passport = parent::authenticate($request);</span>
<span class="line">        } catch (\\LogicException $exception) {</span>
<span class="line">            throw new CustomUserMessageAuthenticationException(&quot;User not logged in. Please authenticate to proceed.:&quot;.$exception-&gt;getMessage());</span>
<span class="line">        } catch (SymfonyAuthenticationException $exception) {</span>
<span class="line">            throw new CustomUserMessageAuthenticationException(&quot;Login failed.:&quot;.$exception-&gt;getMessage());</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return $passport;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">然后在services.yaml下配置</span>
<span class="line">    app.custom_jwt_authenticator:</span>
<span class="line">        class: App\\Security\\CustomJwtAuthenticator</span>
<span class="line">        parent: lexik_jwt_authentication.security.jwt_authenticator</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-再次登陆测试-依然可以登陆成功" tabindex="-1"><a class="header-anchor" href="#_4-再次登陆测试-依然可以登陆成功"><span>4.再次登陆测试，依然可以登陆成功</span></a></h5><h5 id="_5-使用access-token访问指定的路由" tabindex="-1"><a class="header-anchor" href="#_5-使用access-token访问指定的路由"><span>5.使用access_token访问指定的路由</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">请求地址:</span>
<span class="line">http://symfony.api.local/api/lucky/number</span>
<span class="line"></span>
<span class="line">参数:</span>
<span class="line">header 参数</span>
<span class="line">Authorization:Bearer {{access_token}}</span>
<span class="line"></span>
<span class="line">响应:</span>
<span class="line">{</span>
<span class="line">	&quot;code&quot;: 401,</span>
<span class="line">	&quot;message&quot;: &quot;Login failed.:&quot;</span>
<span class="line">}</span>
<span class="line">发现是使用的是错误的token</span>
<span class="line"></span>
<span class="line">使用最新的access_token:</span>
<span class="line">&lt;html&gt;</span>
<span class="line">   &lt;body&gt;</span>
<span class="line">      Lucky number: 44</span>
<span class="line">   &lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span>
<span class="line">请求成功</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const p=s(l,[["render",c],["__file","part5.html.vue"]]),d=JSON.parse('{"path":"/project/symfony/part3/part5.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"project/symfony/part3/part5.md"}');export{p as comp,d as data};
