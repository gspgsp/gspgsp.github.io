import{_ as n,o as s,c as a,g as e}from"./app.6e4bf74b.js";const t={},i=e(`<p>symfony\u5904\u7406\u56FE\u7247\u7684bundle\uFF0C\u5176\u4E2D\u6BD4\u8F83\u6709\u7528\u7684\u5C31\u662F\u751F\u6210\u7F29\u7565\u56FE\uFF0C\u4EE5\u53CA\u5C06\u56FE\u7247\u7F13\u5B58</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>composer <span class="token keyword">require</span> liip<span class="token operator">/</span>imagine<span class="token operator">-</span>bundle

\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u4F1A\u8BA9\u7528\u6237\u9009\u62E9\uFF0C\u8FD9\u91CC\u9009\u62E9y
\u7136\u540E\u9879\u76EE\u4F1A\u81EA\u52A8\u6CE8\u5165\u4F9D\u8D56\uFF0C\u914D\u7F6E\u6587\u4EF6\u7B49\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165

\u6700\u540E\u7684\u914D\u7F6E\u6587\u4EF6\u5728\uFF1A  app<span class="token operator">/</span>config<span class="token operator">/</span>packages<span class="token operator">/</span>liip_imagine<span class="token operator">.</span>yaml \u800C\u4E0D\u662Fdemo\u91CC\u7684 app<span class="token operator">/</span>config<span class="token operator">/</span>config<span class="token operator">.</span>yml

<span class="token comment">//liip_imagine.yaml \u6DFB\u52A0\u9700\u8981\u7684\u914D\u7F6E\u5982\u4E0B</span>
<span class="token comment"># Documentation on how to configure the bundle can be found at: https://symfony.com/doc/current/bundles/LiipImagineBundle/basic-usage.html</span>
liip_imagine<span class="token punctuation">:</span>
    <span class="token comment"># valid drivers options include &quot;gd&quot; or &quot;gmagick&quot; or &quot;imagick&quot;</span>
    driver<span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;imagick&quot;</span>
    webp<span class="token punctuation">:</span>
        generate<span class="token punctuation">:</span> <span class="token constant boolean">true</span>
    filter_sets<span class="token punctuation">:</span>
        squared_thumbnail_small<span class="token punctuation">:</span>
            filters<span class="token punctuation">:</span>
                thumbnail<span class="token punctuation">:</span>
                    size<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span>
                    mode<span class="token punctuation">:</span> outbound
                    allow_upscale<span class="token punctuation">:</span> <span class="token constant boolean">true</span>
    loaders<span class="token punctuation">:</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            filesystem<span class="token punctuation">:</span>
                data_root<span class="token punctuation">:</span>
                    <span class="token operator">-</span> <span class="token string double-quoted-string">&quot;%kernel.project_dir%/public&quot;</span>


twig\u6A21\u677F\u4F7F\u7528\uFF1Asrc<span class="token operator">=</span>&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">asset</span><span class="token punctuation">(</span>course<span class="token operator">.</span>coverPicture<span class="token punctuation">)</span><span class="token operator">|</span><span class="token class-name">imagine_filter</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;squared_thumbnail_small&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[i];function p(l,c){return s(),a("div",null,o)}var r=n(t,[["render",p],["__file","symfony\u4E4B\u56FE\u7247\u5904\u7406bundle.html.vue"]]);export{r as default};
