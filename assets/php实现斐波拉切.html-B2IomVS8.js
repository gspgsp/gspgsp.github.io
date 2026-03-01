import{_ as s,c as a,f as p,o as e}from"./app-BB_BIQV8.js";const l={};function t(c,n){return e(),a("div",null,n[0]||(n[0]=[p(`<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 测试类</span>
<span class="line"> *</span>
<span class="line"> * Created by PhpStorm.</span>
<span class="line"> * User: guoshipeng</span>
<span class="line"> * Date: 2022/10/20</span>
<span class="line"> * Time: 10:43</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>Test</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">TestController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 获取斐波拉且</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getFb</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//        dd($this-&gt;other(5));</span></span>
<span class="line"><span class="token comment">//        dd($this-&gt;getDieDai(5));</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 递归调用实现-斐波拉且</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">$n</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">int</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">getFb</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token variable">$n</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getFb</span><span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getFb</span><span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 迭代实现-斐波拉且</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">$n</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">int</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">getDieDai</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token variable">$sum</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$pre</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$prepare</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$j</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token variable">$j</span> <span class="token operator">&lt;=</span> <span class="token variable">$n</span><span class="token punctuation">;</span> <span class="token variable">$j</span><span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$total</span> <span class="token operator">=</span> <span class="token variable">$pre</span> <span class="token operator">+</span> <span class="token variable">$prepare</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$prepare</span> <span class="token operator">=</span> <span class="token variable">$pre</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$pre</span> <span class="token operator">=</span> <span class="token variable">$total</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//当前最新值</span></span>
<span class="line">            <span class="token keyword">echo</span> <span class="token variable">$total</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//所有累计和</span></span>
<span class="line">            <span class="token variable">$sum</span> <span class="token operator">+=</span> <span class="token variable">$total</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$sum</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 非递归实现-斐波拉且</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">other</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token variable">$n</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token variable">$i</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token variable">$i</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$arr</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const o=s(l,[["render",t],["__file","php实现斐波拉切.html.vue"]]),r=JSON.parse('{"path":"/content/php/base/php%E5%AE%9E%E7%8E%B0%E6%96%90%E6%B3%A2%E6%8B%89%E5%88%87.html","title":"php实现斐波拉切","lang":"en-US","frontmatter":{"sidebar":false,"title":"php实现斐波拉切","description":"php实现斐波拉切"},"headers":[],"git":{},"filePathRelative":"content/php/base/php实现斐波拉切.md"}');export{o as comp,r as data};
