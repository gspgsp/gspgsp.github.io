import{_ as n,o as s,c as a,g as e}from"./app.6e4bf74b.js";const p={},t=e(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token doc-comment comment">/**
 * \u6D4B\u8BD5\u7C7B
 *
 * Created by PhpStorm.
 * User: guoshipeng
 * Date: 2022/10/20
 * Time: 10:43
 */</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>Test</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u6590\u6CE2\u62C9\u4E14
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getFb</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        dd($this-&gt;other(5));</span>
<span class="token comment">//        dd($this-&gt;getDieDai(5));</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u9012\u5F52\u8C03\u7528\u5B9E\u73B0-\u6590\u6CE2\u62C9\u4E14
     *
     * <span class="token keyword">@param</span> <span class="token parameter">$n</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">int</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">getFb</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token variable">$n</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getFb</span><span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getFb</span><span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8FED\u4EE3\u5B9E\u73B0-\u6590\u6CE2\u62C9\u4E14
     *
     * <span class="token keyword">@param</span> <span class="token parameter">$n</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">int</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">getDieDai</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$sum</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token variable">$pre</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token variable">$prepare</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$j</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token variable">$j</span> <span class="token operator">&lt;=</span> <span class="token variable">$n</span><span class="token punctuation">;</span> <span class="token variable">$j</span><span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token variable">$total</span> <span class="token operator">=</span> <span class="token variable">$pre</span> <span class="token operator">+</span> <span class="token variable">$prepare</span><span class="token punctuation">;</span>
            <span class="token variable">$prepare</span> <span class="token operator">=</span> <span class="token variable">$pre</span><span class="token punctuation">;</span>
            <span class="token variable">$pre</span> <span class="token operator">=</span> <span class="token variable">$total</span><span class="token punctuation">;</span>

            <span class="token comment">//\u5F53\u524D\u6700\u65B0\u503C</span>
            <span class="token keyword">echo</span> <span class="token variable">$total</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span>

            <span class="token comment">//\u6240\u6709\u7D2F\u8BA1\u548C</span>
            <span class="token variable">$sum</span> <span class="token operator">+=</span> <span class="token variable">$total</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token variable">$sum</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u975E\u9012\u5F52\u5B9E\u73B0-\u6590\u6CE2\u62C9\u4E14
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">other</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token variable">$n</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token variable">$i</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token variable">$i</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token variable">$arr</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function l(c,i){return s(),a("div",null,o)}var u=n(p,[["render",l],["__file","php\u5B9E\u73B0\u6590\u6CE2\u62C9\u5207.html.vue"]]);export{u as default};
