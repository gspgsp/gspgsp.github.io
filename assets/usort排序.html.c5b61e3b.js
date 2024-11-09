import{_ as n,o as s,c as a,g as e}from"./app.66ae8700.js";const t={},p=e(`<p>\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u5BF9\u6570\u7EC4\u6216\u8005\u5BF9\u8C61\u6839\u636E\u6307\u5B9A\u7684\u5C5E\u6027\u6392\u5E8F,\u90A3\u4E48\u901A\u8FC7php\u7684usort\u6392\u5E8F\u662F\u975E\u5E38\u597D\u7528\u7684</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

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
     * \u6D4B\u8BD5,\u901A\u8FC7usort\u914D\u5408\u7EC4\u5408\u6BD4\u8F83\u8FDB\u884C\u6392\u5E8F
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u8FD9\u91CC\u7B80\u5355\u7684\u7528\u4E00\u4E2A\u666E\u901A\u6570\u7EC4\u6392\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982\u8BF4\u5E74\u9F84\u6392\u5E8F\uFF0C\u76F4\u63A5\u5C31\u662F $a-&gt;age &lt;=&gt; $b-&gt;age</span>
        <span class="token comment">//\u5B98\u65B9\u6587\u6863\u6709\u5F88\u597D\u7684\u8BF4\u660E\u4E86: https://www.php.net/manual/en/function.usort.php</span>
        <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">usort</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;cmp&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[1,2,3,4,5,6]</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u7EC4\u5408\u6BD4\u8F83 &lt;=&gt;
     *
     * <span class="token keyword">@param</span> <span class="token parameter">$a</span>
     * <span class="token keyword">@param</span> <span class="token parameter">$b</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">int</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">cmp</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// \u592A\u7A7A\u7B26\uFF0C\u76F4\u63A5\u6BD4\u8F83</span>
        <span class="token comment">//return $a &lt;=&gt; $b;</span>

        <span class="token comment">// \u539F\u751F\u4E09\u76EE\u8FD0\u7B97</span>
        <span class="token comment">//return $a &gt; $b ? 1 : ( $a==$b ? 0 : -1 );</span>

        <span class="token comment">//return an integer that is either &quot;less than, equal to, or greater than zero&quot;. There is no requirement to restrict the value returned to -1, 0, 1.</span>
        <span class="token comment">//\u4E0D\u4E00\u5B9A\u8981\u8FD4\u56DE 1 0 -1\uFF0C\u53EA\u8981\u662F\u6709\u533A\u5206\u5EA6\u7684\u4E09\u4E2A\u503C\u90FD\u53EF\u4EE5</span>
        <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">-</span> <span class="token variable">$b</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function l(c,o){return s(),a("div",null,i)}var r=n(t,[["render",l],["__file","usort\u6392\u5E8F.html.vue"]]);export{r as default};
