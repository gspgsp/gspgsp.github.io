import{_ as n,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const t={};function l(r,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h5 id="symfony之jwt的使用" tabindex="-1"><a class="header-anchor" href="#symfony之jwt的使用"><span>Symfony之jwt的使用:</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">gesdinet/jwt-refresh-token-bundle 和 lexik/jwt-authentication-bundle 一起使用实现 生成token和 refresh_token操作</span>
<span class="line">参考文档: https://github.com/markitosgv/JWTRefreshTokenBundle</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="symfony7下关于-lexik-jwt-authentication-bundle-的补充" tabindex="-1"><a class="header-anchor" href="#symfony7下关于-lexik-jwt-authentication-bundle-的补充"><span>symfony7下关于 lexik/jwt-authentication-bundle 的补充</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">直接执行 $ php bin/console lexik:jwt:generate-keypair 的时候，会生成 private.pem 和 public.pem, (实际上带有test)这是没有问题的.</span>
<span class="line"></span>
<span class="line">然后通过环境变量读取:</span>
<span class="line">JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem</span>
<span class="line">JWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem</span>
<span class="line">JWT_PASSPHRASE=</span>
<span class="line"></span>
<span class="line">使用验证，但是这样的 private.pem 是不安全的(测试环境当然是没问题的)，所以还有个配置 JWT_PASSPHRASE, 这个参数是在执行 php bin/console lexik:jwt:generate-keypair 之前，手动配置的，比如 JWT_PASSPHRASE=c8f13be9d73a48f2e97ef11bbfdf7e1e589ca45d2a679c37e0bc431c4fe12591，</span>
<span class="line">然后再执行 php bin/console lexik:jwt:generate-keypair, 此时 private.pem 就是加密的.</span>
<span class="line"></span>
<span class="line">可以用 openssl 验证一下私钥是否被加密:</span>
<span class="line">$ openssl rsa -in config/jwt/private-test.pem</span>
<span class="line">它会提示输入 pass phrase，说明私钥已经被加密保护。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const c=n(t,[["render",l],["__file","Symfony之jwt的使用.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/Symfony%E4%B9%8Bjwt%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"Symfony之jwt的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"Symfony之jwt的使用","description":"Symfony之jwt的使用"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/Symfony之jwt的使用.md"}');export{c as comp,d as data};
