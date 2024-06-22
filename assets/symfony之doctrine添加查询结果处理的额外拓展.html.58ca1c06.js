import{_ as n,o as s,c as a,g as e}from"./app.dd03cafd.js";const t={},p=e(`<p>symfony\u4E4Bdoctrine\u6DFB\u52A0\u67E5\u8BE2\u7ED3\u679C\u5904\u7406\u7684\u989D\u5916\u62D3\u5C55:</p><p>\u573A\u666F\uFF1A\u73B0\u5728\u9700\u8981\u628A\u67E5\u8BE2\u5230\u7684\u7ED3\u679C\u96C6\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5339\u914D\u5230\u7684\u6570\u636E\u7684id\u6570\u7EC4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u5B9E\u73B0</p><ul><li>\u5728 App\\Extensions\\DoctrineHydrators \u76EE\u5F55\u4E0B\u521B\u5EFA\u5982\u4E0B\u7C7B:</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Extensions<span class="token punctuation">\\</span>DoctrineHydrators</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>DBAL<span class="token punctuation">\\</span>Exception</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Internal<span class="token punctuation">\\</span>Hydration<span class="token punctuation">\\</span>AbstractHydrator</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">PluckHydrator</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHydrator</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token constant">HYDRATE_PLUCK</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;hydrate_pluck&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name">list</span>&lt;mixed&gt;
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">hydrateAllData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token variable">$pluckValues</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">statement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">fetchFirstColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token variable">$pluckValues</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5C06 PluckHydrator \u914D\u7F6E\u5230 doctrine.yaml \u6587\u4EF6\u91CC</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">doctrine</span><span class="token punctuation">:</span>
    <span class="token key atrule">dbal</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;%env(resolve:DATABASE_URL)%&#39;</span>

        <span class="token comment"># IMPORTANT: You MUST configure your server version,</span>
        <span class="token comment"># either here or in the DATABASE_URL env var (see .env file)</span>
        <span class="token comment">#server_version: &#39;13&#39;</span>
    <span class="token key atrule">orm</span><span class="token punctuation">:</span>
        <span class="token key atrule">auto_generate_proxy_classes</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">naming_strategy</span><span class="token punctuation">:</span> doctrine.orm.naming_strategy.underscore_number_aware
        <span class="token key atrule">auto_mapping</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">mappings</span><span class="token punctuation">:</span>
            <span class="token key atrule">App</span><span class="token punctuation">:</span>
                <span class="token key atrule">is_bundle</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
                <span class="token key atrule">dir</span><span class="token punctuation">:</span> <span class="token string">&#39;%kernel.project_dir%/src/Entity&#39;</span>
                <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&#39;App\\Entity&#39;</span>
                <span class="token key atrule">alias</span><span class="token punctuation">:</span> App
        <span class="token comment">#\u6DFB\u52A0\u4E0B\u9762\u8FD9\u884C\u914D\u7F6E\u5373\u53EF        </span>
        <span class="token key atrule">hydrators</span><span class="token punctuation">:</span>
            <span class="token key atrule">hydrate_pluck</span><span class="token punctuation">:</span> App\\Extensions\\DoctrineHydrators\\PluckHydrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">createQueryBuilder</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;c&quot;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">getQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token class-name static-context">PluckHydrator</span><span class="token operator">::</span><span class="token constant">HYDRATE_PLUCK</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u6A21\u5F0F\u8FD4\u56DE\u60F3\u8981\u7684\u6570\u636E\uFF0C\u4E0D\u9700\u8981\u5148\u8FD4\u56DE\u7ED3\u679C\u96C6\uFF0C\u518D\u53BB\u5904\u7406\u5F97\u5230\u60F3\u8981\u7684\u6570\u636E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[p];function c(o,i){return s(),a("div",null,l)}var r=n(t,[["render",c],["__file","symfony\u4E4Bdoctrine\u6DFB\u52A0\u67E5\u8BE2\u7ED3\u679C\u5904\u7406\u7684\u989D\u5916\u62D3\u5C55.html.vue"]]);export{r as default};
