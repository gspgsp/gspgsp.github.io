import{_ as s,c as a,d as e,o as p}from"./app-C7j_h9cy.js";const t={};function l(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>symfony5目前有以下5种授权机制:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># ...</span>
<span class="line">x509:</span>
<span class="line"># ...</span>
<span class="line">remote_user:</span>
<span class="line"># ...</span>
<span class="line">guard:</span>
<span class="line"># ...</span>
<span class="line">form_login:</span>
<span class="line"># ...</span>
<span class="line">form_login_ldap:</span>
<span class="line"># ...</span>
<span class="line">json_login:</span>
<span class="line"># ...</span>
<span class="line">http_basic:</span>
<span class="line"># ...</span>
<span class="line">http_basic_ldap:</span>
<span class="line"># ...</span>
<span class="line">http_digest:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>symfony5.4以后和5.2是不一样的:</p><ul><li>https://symfony.com/doc/5.4/security/custom_authenticator.html //这个就是官方文档说的新的认证系统</li><li>https://symfony.com/doc/5.2/security/guard_authentication.html //旧的认证系统</li></ul><p>旧的认证系统:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line">config/security.yaml</span>
<span class="line"><span class="token key atrule">enable_authenticator_manager</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token key atrule">main</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">guard</span><span class="token punctuation">:</span></span>
<span class="line">     <span class="token key atrule">authenticators</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> App\\Security\\TokenAuthenticator //这个Authenticator 必须extends Guard相关的interface<span class="token punctuation">,</span>已经被弃用了</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新的认证系统:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line">config/security.yaml</span>
<span class="line"><span class="token key atrule">enable_authenticator_manager</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">main</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">custom_authenticators</span><span class="token punctuation">:</span></span>
<span class="line">     <span class="token punctuation">-</span> App\\Security\\TokenAuthenticator //这个Authenticator extends 自 AbstractAuthenticator</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面新旧两种方式，对于路由而言，加了#[IsGranted(&#39;ROLE_USER&#39;)]，生效的原理都是各自的Authenticator里的 supports 返回true, 后续验证[旧:checkCredentials 新:authenticate]成功， 只要返回成功，那么#[IsGranted(&#39;ROLE_USER&#39;)]就会生效,默认登录后的用户都有ROLE_USER这个角色.</p><p>//下面是一个新的认证的一个Authenticator</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">ApiTokenAuthenticator</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAuthenticator</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token class-name type-declaration">EntityManagerInterface</span> <span class="token variable">$em</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">supports</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">bool</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">headers</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;authorization&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// TODO: Implement supports() method.</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//本地测试发现，这个验证完成以后会向 session 写入用户token信息(UsernamePasswordToken)，</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">authenticate</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$apiToken</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">headers</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;authorization&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这里弄得比较简单，直接在authorization里传递了用户的 email 地址作为 apiToken</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">null</span> <span class="token operator">===</span> <span class="token variable">$apiToken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// The token header was empty, authentication fails with HTTP Status</span></span>
<span class="line">            <span class="token comment">// Code 401 &quot;Unauthorized&quot;</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomUserMessageAuthenticationException</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;No API token provided&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// TODO: Implement authenticate() method.</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">SelfValidatingPassport</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserBadge</span><span class="token punctuation">(</span><span class="token variable">$apiToken</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$token</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">em</span><span class="token operator">-&gt;</span><span class="token function">getRepository</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">findOneBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token operator">=&gt;</span><span class="token variable">$token</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">bindTo</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 匿名函数的参数$token 即为 $apiToken</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">onAuthenticationSuccess</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">TokenInterface</span> <span class="token variable">$token</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$firewallName</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name return-type">Response</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// TODO: Implement onAuthenticationSuccess() method.</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">onAuthenticationFailure</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">AuthenticationException</span> <span class="token variable">$exception</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name return-type">Response</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// TODO: Implement onAuthenticationFailure() method.</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于IsGranted:<br> 这个类是symfony的一个拓展，主要用于处理授权请求，可以有如下格式:<br> ①#[IsGranted(&#39;ROLE_USER&#39;, message: &#39;You are not allowed to access the admin dashboard.&#39;, statusCode: 421)]<br> ②其它用法是，还在研究中</p><p>通过异常监听可以捕获这个异常请求:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$throwable</span> <span class="token keyword">instanceof</span> <span class="token class-name">AccessDeniedException</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">isXmlHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">&#39;msg&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$throwable</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">setResponse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JsonResponse</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$throwable</span><span class="token operator">-&gt;</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const o=s(t,[["render",l],["__file","symfony之5种授权机制.html.vue"]]),u=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8B5%E7%A7%8D%E6%8E%88%E6%9D%83%E6%9C%BA%E5%88%B6.html","title":"symfony之5种授权机制","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之5种授权机制","description":"symfony之5种授权机制"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之5种授权机制.md"}');export{o as comp,u as data};
