import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function t(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h3 id="symfony7之nelmioapidocbundle的使用" tabindex="-1"><a class="header-anchor" href="#symfony7之nelmioapidocbundle的使用"><span>symfony7之NelmioApiDocBundle的使用</span></a></h3><ul><li><p>链接:https://github.com/nelmio/NelmioApiDocBundle</p></li><li><p>主要使用如下composer包:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">nelmio/api-doc-bundle</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>这个包会依赖:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">zircote/swagger-php</span>
<span class="line"></span>
<span class="line">在nelmio/api-doc-bundle的composer.json下有定义</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="项目中使用" tabindex="-1"><a class="header-anchor" href="#项目中使用"><span>项目中使用:</span></a></h4><h5 id="_1-定义配置文件-nelmio-api-doc-yaml" tabindex="-1"><a class="header-anchor" href="#_1-定义配置文件-nelmio-api-doc-yaml"><span>1.定义配置文件(nelmio_api_doc.yaml)</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">nelmio_api_doc</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">documentation</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">info</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> Qinhong</span>
<span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> Event platform provided by QH AG</span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0.0</span>
<span class="line"><span class="token key atrule">components</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">securitySchemes</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">qinHongHeaderApiKey</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">type</span><span class="token punctuation">:</span> apiKey</span>
<span class="line"><span class="token key atrule">in</span><span class="token punctuation">:</span> header</span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> X<span class="token punctuation">-</span>QINHONG<span class="token punctuation">-</span>API<span class="token punctuation">-</span>TOKEN</span>
<span class="line"><span class="token key atrule">Bearer</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">type</span><span class="token punctuation">:</span> http</span>
<span class="line"><span class="token key atrule">scheme</span><span class="token punctuation">:</span> bearer</span>
<span class="line"><span class="token key atrule">in</span><span class="token punctuation">:</span> header</span>
<span class="line"><span class="token key atrule">bearerFormat</span><span class="token punctuation">:</span> JWT</span>
<span class="line"><span class="token key atrule">security</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">Bearer</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">areas</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">path_patterns</span><span class="token punctuation">:</span> <span class="token comment"># an array of regexps (document only routes under /api, except /api/doc)</span></span>
<span class="line"><span class="token punctuation">-</span> ^/api(<span class="token punctuation">?</span><span class="token tag">!/doc$)</span></span>
<span class="line"><span class="token key atrule">documentation</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token key atrule">security</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">qinHongHeaderApiKey</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">Bearer</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">info 定义了基本的信息</span>
<span class="line">securitySchemes 定义了几种接口认证方式</span>
<span class="line">security 定义了默认全局的认证方式</span>
<span class="line">areas 定义了接口作用域</span>
<span class="line">areas.path_patterns 定义了哪些路由将会生成接口</span>
<span class="line">areas.documentation.security 定义了当前area下要使用的认证方式</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-控制器下使用" tabindex="-1"><a class="header-anchor" href="#_2-控制器下使用"><span>2.控制器下使用</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">use Nelmio\\ApiDocBundle\\Annotation\\Model;</span>
<span class="line">use OpenApi\\Attributes as OA; //定义在zircote/swagger-php</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">#[Route(&#39;/country-distribution-count&#39;, name: &#39;country_distribution_count&#39;, methods: [&#39;GET&#39;])]</span>
<span class="line">#[OA\\Response(</span>
<span class="line">response: 200,</span>
<span class="line">description: &#39;Return all country distribution count&#39;,</span>
<span class="line">content: new Model(type: Dto\\Query\\Statistic\\DistributionCountDto::class)</span>
<span class="line">)]</span>
<span class="line">public function test(</span>
<span class="line">Service\\\\RegistrationService $statisticsService,</span>
<span class="line">): JsonResponse {</span>
<span class="line">return $this-&gt;apiResponse-&gt;response($statisticsService-&gt;test());</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">当然还有其它的注释类可以使用，这里使用的是 OA\\Response</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const o=s(l,[["render",t],["__file","symfony7之NelmioApiDocBundle的使用.html.vue"]]),u=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B9%8BNelmioApiDocBundle%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"symfony7之NelmioApiDocBundle的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7之NelmioApiDocBundle的使用","head":[["meta",{"name":"title","content":"symfony7之NelmioApiDocBundle的使用"}],["meta",{"name":"description","content":"symfony7之NelmioApiDocBundle的使用"}],["meta",{"name":"keywords","content":"symfony7"}],["meta",{"property":"og:title","content":"symfony7之NelmioApiDocBundle的使用"}],["meta",{"property":"og:description","content":"symfony7之NelmioApiDocBundle的使用"}]]},"headers":[{"level":3,"title":"symfony7之NelmioApiDocBundle的使用","slug":"symfony7之nelmioapidocbundle的使用","link":"#symfony7之nelmioapidocbundle的使用","children":[]}],"git":{},"filePathRelative":"content/php/symfony/symfony7之NelmioApiDocBundle的使用.md"}');export{o as comp,u as data};
