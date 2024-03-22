import{_ as n,o as s,c as a,g as e}from"./app.b04686bd.js";const p={},t=e(`<p>php\u4E4B\u53CC\u91CDfor\u5FAA\u5E8F\u4E0Breturn\u548Cbreak\u7684\u533A\u522B:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">int</span></span>
     *
     * \u4E0B\u9762\u7684\u65B9\u6CD5\u8C03\u7528  \u5982\u679C\u662F  return $val, \u90A3\u4E48\u6267\u884C test \u65B9\u6CD5\uFF0C\u4F1A\u5F97\u5230 2\uFF1B \u5982\u679C\u662F break ,\u90A3\u4E48\u6267\u884C test \u65B9\u6CD5\uFF0C\u4F1A\u5F97\u5230 0\uFF1B
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$a1</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$a2</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$a2</span> <span class="token keyword">as</span> <span class="token variable">$val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$a1</span> <span class="token keyword">as</span> <span class="token variable">$v</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$val</span> <span class="token operator">==</span> <span class="token variable">$v</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token variable">$val</span><span class="token punctuation">;</span>
<span class="token comment">//                    break;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3: return \u4F1A\u7ED3\u675F\u6240\u6709\u7684\u5FAA\u73AF\uFF0C\u800C break \u53EA\u4F1A\u7ED3\u675F\u5F53\u524D\u5FAA\u73AF</p>`,3),c=[t];function o(l,i){return s(),a("div",null,c)}var r=n(p,[["render",o],["__file","php\u4E4B\u53CC\u91CDfor\u5FAA\u5E8F\u4E0Breturn\u548Cbreak\u7684\u533A\u522B.html.vue"]]);export{r as default};
