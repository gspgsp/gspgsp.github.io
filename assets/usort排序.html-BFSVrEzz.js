import{_ as s,c as a,f as e,o as p}from"./app-BB_BIQV8.js";const l={};function t(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>在实际开发过程中，可能会对数组或者对象根据指定的属性排序,那么通过php的usort排序是非常好用的</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
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
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 测试,通过usort配合组合比较进行排序</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//这里简单的用一个普通数组排序，也可以对一个对象中的属性，比如说年龄排序，直接就是 $a-&gt;age &lt;=&gt; $b-&gt;age</span></span>
<span class="line">        <span class="token comment">//官方文档有很好的说明了: https://www.php.net/manual/en/function.usort.php</span></span>
<span class="line">        <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">usort</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;cmp&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[1,2,3,4,5,6]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 组合比较 &lt;=&gt;</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">$a</span></span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">$b</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">int</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">cmp</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 太空符，直接比较</span></span>
<span class="line">        <span class="token comment">//return $a &lt;=&gt; $b;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 原生三目运算</span></span>
<span class="line">        <span class="token comment">//return $a &gt; $b ? 1 : ( $a==$b ? 0 : -1 );</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//return an integer that is either &quot;less than, equal to, or greater than zero&quot;. There is no requirement to restrict the value returned to -1, 0, 1.</span></span>
<span class="line">        <span class="token comment">//不一定要返回 1 0 -1，只要是有区分度的三个值都可以</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">-</span> <span class="token variable">$b</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(l,[["render",t],["__file","usort排序.html.vue"]]),u=JSON.parse('{"path":"/content/php/base/usort%E6%8E%92%E5%BA%8F.html","title":"usort排序","lang":"en-US","frontmatter":{"sidebar":false,"title":"usort排序","description":"usort排序"},"headers":[],"git":{},"filePathRelative":"content/php/base/usort排序.md"}');export{o as comp,u as data};
