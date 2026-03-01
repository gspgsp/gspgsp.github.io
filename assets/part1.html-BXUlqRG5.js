import{_ as n,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h4 id="由于本项目是一个前后端分离项目-所以使用jwt认证" tabindex="-1"><a class="header-anchor" href="#由于本项目是一个前后端分离项目-所以使用jwt认证"><span>由于本项目是一个前后端分离项目，所以使用JWT认证</span></a></h4><h5 id="_1-使用到的-composer-包" tabindex="-1"><a class="header-anchor" href="#_1-使用到的-composer-包"><span>1.使用到的 composer 包</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&quot;doctrine/dbal&quot;: &quot;^3&quot;,</span>
<span class="line">&quot;doctrine/doctrine-bundle&quot;: &quot;^2.14&quot;,</span>
<span class="line">&quot;doctrine/doctrine-migrations-bundle&quot;: &quot;^3.4&quot;,</span>
<span class="line">&quot;doctrine/orm&quot;: &quot;^3.3&quot;,</span>
<span class="line">&quot;doctrine/persistence&quot;: &quot;^3.0&quot;,</span>
<span class="line"></span>
<span class="line">&quot;gesdinet/jwt-refresh-token-bundle&quot;: &quot;^1.3&quot;,</span>
<span class="line">&quot;lexik/jwt-authentication-bundle&quot;: &quot;^3.1&quot;,</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-doctrine相关的包用于数据库操作" tabindex="-1"><a class="header-anchor" href="#_2-doctrine相关的包用于数据库操作"><span>2.doctrine相关的包用于数据库操作</span></a></h5><h5 id="_3-lexik-jwt-authentication-bundle-包用于jwt-token的认证" tabindex="-1"><a class="header-anchor" href="#_3-lexik-jwt-authentication-bundle-包用于jwt-token的认证"><span>3.lexik/jwt-authentication-bundle 包用于jwt token的认证</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">执行完: composer require &quot;lexik/jwt-authentication-bundle&quot;</span>
<span class="line"></span>
<span class="line">再次执行:</span>
<span class="line"># php bin/console lexik:jwt:generate-keypair</span>
<span class="line">Available options:</span>
<span class="line">--skip-if-exists will silently do nothing if keys already exist.</span>
<span class="line">--overwrite will overwrite your keys if they already exist.</span>
<span class="line"></span>
<span class="line">这会在 ~/config/jwt下生成一对 private.pem 和 public.pem</span>
<span class="line"></span>
<span class="line">在 .env 下生成:</span>
<span class="line">###&gt; lexik/jwt-authentication-bundle ###</span>
<span class="line">JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem</span>
<span class="line">JWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem</span>
<span class="line">JWT_PASSPHRASE=e6ff1a4be458abe9da450aeac31b23768f400369529878c9758f93303de5750d</span>
<span class="line">###&lt; lexik/jwt-authentication-bundle ###</span>
<span class="line"></span>
<span class="line">将上面的配置复制到 .env.local下</span>
<span class="line"></span>
<span class="line">详细配置参考官网:</span>
<span class="line">https://symfony.com/bundles/LexikJWTAuthenticationBundle/current/index.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-lexik-jwt-authentication-bundle-包用于刷新access-token" tabindex="-1"><a class="header-anchor" href="#_4-lexik-jwt-authentication-bundle-包用于刷新access-token"><span>4.lexik/jwt-authentication-bundle 包用于刷新access_token</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">执行: composer require gesdinet/jwt-refresh-token-bundle</span>
<span class="line">这个默认会装^0.1版本，太底了，和上面的 lexik/jwt-authentication-bundle&quot; 冲突，需要手动指定版本，如下</span>
<span class="line"></span>
<span class="line">composer require gesdinet/jwt-refresh-token-bundle &quot;^1.3&quot;</span>
<span class="line">然而还是会报其它错误:</span>
<span class="line">Problem 1</span>
<span class="line">    - Root composer.json requires gesdinet/jwt-refresh-token-bundle ^1.3 -&gt; satisfiable by gesdinet/jwt-refresh-token-bundle[v1.3.0, v1.4.0].</span>
<span class="line">    - gesdinet/jwt-refresh-token-bundle[v1.3.0, ..., v1.4.0] require doctrine/persistence ^1.3.3|^2.0|^3.0 -&gt; found doctrine/persistence[1.3.3, ..., 1.3.8, 2.0.0, ..., 2.5.7, 3.0.0, ..., 3.4.0] but the package is fixed to 4.0.0 (lock file version) by </span>
<span class="line">    a partial update and that version does not match. Make sure you list it as an argument for the update command.</span>
<span class="line"></span>
<span class="line">执行: composer require &quot;doctrine/persistence&quot;: &quot;^3.0&quot;</span>
<span class="line"></span>
<span class="line">然后再次执行： composer require gesdinet/jwt-refresh-token-bundle &quot;^1.3&quot;</span>
<span class="line"></span>
<span class="line">详细配置参考官网: </span>
<span class="line">https://packagist.org/packages/gesdinet/jwt-refresh-token-bundle 配置即可</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const c=n(l,[["render",t],["__file","part1.html.vue"]]),o=JSON.parse('{"path":"/project/symfony/part3/part1.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"project/symfony/part3/part1.md"}');export{c as comp,o as data};
