import{_ as s,c as a,f as e,o as p}from"./app-BB_BIQV8.js";const l={};function i(t,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>symfony处理图片的bundle，其中比较有用的就是生成缩略图，以及将图片缓存</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">composer <span class="token keyword">require</span> liip<span class="token operator">/</span>imagine<span class="token operator">-</span>bundle</span>
<span class="line"></span>
<span class="line">安装过程中会让用户选择，这里选择y</span>
<span class="line">然后项目会自动注入依赖，配置文件等，不需要手动引入</span>
<span class="line"></span>
<span class="line">最后的配置文件在：  app<span class="token operator">/</span>config<span class="token operator">/</span>packages<span class="token operator">/</span>liip_imagine<span class="token operator">.</span>yaml 而不是demo里的 app<span class="token operator">/</span>config<span class="token operator">/</span>config<span class="token operator">.</span>yml</span>
<span class="line"></span>
<span class="line"><span class="token comment">//liip_imagine.yaml 添加需要的配置如下</span></span>
<span class="line"><span class="token comment"># Documentation on how to configure the bundle can be found at: https://symfony.com/doc/current/bundles/LiipImagineBundle/basic-usage.html</span></span>
<span class="line">liip_imagine<span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># valid drivers options include &quot;gd&quot; or &quot;gmagick&quot; or &quot;imagick&quot;</span></span>
<span class="line">    driver<span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;imagick&quot;</span></span>
<span class="line">    webp<span class="token punctuation">:</span></span>
<span class="line">        generate<span class="token punctuation">:</span> <span class="token constant boolean">true</span></span>
<span class="line">    filter_sets<span class="token punctuation">:</span></span>
<span class="line">        squared_thumbnail_small<span class="token punctuation">:</span></span>
<span class="line">            filters<span class="token punctuation">:</span></span>
<span class="line">                thumbnail<span class="token punctuation">:</span></span>
<span class="line">                    size<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span></span>
<span class="line">                    mode<span class="token punctuation">:</span> outbound</span>
<span class="line">                    allow_upscale<span class="token punctuation">:</span> <span class="token constant boolean">true</span></span>
<span class="line">    loaders<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token punctuation">:</span></span>
<span class="line">            filesystem<span class="token punctuation">:</span></span>
<span class="line">                data_root<span class="token punctuation">:</span></span>
<span class="line">                    <span class="token operator">-</span> <span class="token string double-quoted-string">&quot;%kernel.project_dir%/public&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">twig模板使用：src<span class="token operator">=</span>&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">asset</span><span class="token punctuation">(</span>course<span class="token operator">.</span>coverPicture<span class="token punctuation">)</span><span class="token operator">|</span><span class="token class-name">imagine_filter</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;squared_thumbnail_small&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(l,[["render",i],["__file","symfony之图片处理bundle.html.vue"]]),u=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8B%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86bundle.html","title":"symfony之图片处理bundle","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之图片处理bundle","description":"symfony之图片处理bundle"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之图片处理bundle.md"}');export{c as comp,u as data};
