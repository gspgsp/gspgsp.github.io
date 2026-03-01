import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h4 id="测试登陆功能" tabindex="-1"><a class="header-anchor" href="#测试登陆功能"><span>测试登陆功能</span></a></h4><h5 id="_1-通过命令生成测试用户" tabindex="-1"><a class="header-anchor" href="#_1-通过命令生成测试用户"><span>1.通过命令生成测试用户</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">邮箱可以自定义，这里定义为：</span>
<span class="line">gspgsp@gmail.com</span>
<span class="line"></span>
<span class="line">密码可以通过如下命令生成：</span>
<span class="line">php bin/console security:hash-password</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-postman测试" tabindex="-1"><a class="header-anchor" href="#_2-postman测试"><span>2.postman测试</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">请求地址:</span>
<span class="line">http://symfony.api.local/api/login_check</span>
<span class="line"></span>
<span class="line">参数:</span>
<span class="line">{</span>
<span class="line">    &quot;username&quot;: &quot;gspgsp@gmail.com&quot;,</span>
<span class="line">    &quot;password&quot;: &quot;123qwe&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">响应:</span>
<span class="line">{</span>
<span class="line">	&quot;access_token&quot;: &quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3NDY2MjkzOTMsImV4cCI6MTc0NjYzMjk5Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMjI0OTg3NTk4MEBxcS5jb20ifQ.JkvLwXl77DEUr5TUYQN2Zq5CuMJDk7gnPCsdtukQdiOEjaH5v4jJNIkHJJuEYPE-lkdcIqNVOhbIB_DCqdW2GniOuQYPRdDF02FpGy92h3WCMmrCfJYMfvWZiG-OG1BeM0R-R9Feusar4AlqAFN8fI_YIsslJgJlyaG6Fx4ZrcVX6wD7TkWLBetTzSmoaC8fuNpTACUdtyLxYYZqodpcYHsbxgZITRWgn0xps28GqijnBlo0DVUPdSBoygkdJEDUOXyBCAknz6EbSbyWITaRYs62VjwwwyXxijKi5HltMvbwvVk8ffutHqtrElbBFF11glalK8ISYiXW9tgrOvpG8w&quot;,</span>
<span class="line">	&quot;refresh_token&quot;: &quot;rt_cc72bbbde650e9c5b365e2c1a397c0c0a7d4d23811288af3d8528a88bc7bba4d86f564a7feda1c43&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">证明请求成功</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const p=n(l,[["render",t],["__file","part4.html.vue"]]),r=JSON.parse('{"path":"/project/symfony/part3/part4.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"project/symfony/part3/part4.md"}');export{p as comp,r as data};
