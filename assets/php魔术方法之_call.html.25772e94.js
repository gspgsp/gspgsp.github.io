import{_ as n,o as s,c as a,g as e}from"./app.66ae8700.js";const t={},p=e(`<p>\u5728\u5BF9\u8C61\u4E2D\u8C03\u7528\u4E00\u4E2A\u4E0D\u53EF\u8BBF\u95EE\u7684\u65B9\u6CD5\u65F6\uFF0C__call() \u4F1A\u88AB\u8C03\u7528\u3002\u5B83\u662F PHP \u9B54\u672F\u65B9\u6CD5 \u4E2D\u7684\u4E00\u79CD\u3002</p><p>\u8BED\u6CD5\uFF1A __call ( string $name , array $arguments )</p><p>$name \u53C2\u6570\u662F\u8981\u8C03\u7528\u7684\u65B9\u6CD5\u540D\u79F0\u3002 $arguments \u53C2\u6570\u662F\u4E00\u4E2A\u679A\u4E3E\u6570\u7EC4\uFF0C\u5305\u542B\u7740\u8981\u4F20\u9012\u7ED9\u65B9\u6CD5 $name \u7684\u53C2\u6570\u3002</p><p>\u8C03\u7528\u53D7\u9650\u65B9\u6CD5\uFF1A \u5982\u679C\u4E00\u4E2A\u7C7B\u6CA1\u6709\u8BBE\u7F6E __call() \uFF0C\u5BF9\u8C61\u65E0\u6CD5\u8C03\u7528\u53D7\u9650\u65B9\u6CD5\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Person</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">eat</span><span class="token punctuation">(</span><span class="token variable">$arg</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

\u5F53\u5BF9\u8C61\u8C03\u7528\u53D7\u9650\u65B9\u6CD5\u65F6\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u9519\u8BEF\u4FE1\u606F<span class="token punctuation">:</span>
<span class="token variable">$person</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//error: Uncaught Error: Call to protected method Person::eat()</span>
<span class="token variable">$person</span><span class="token operator">-&gt;</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;milk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

\u8BBE\u7F6E\u9B54\u672F\u65B9\u6CD5 <span class="token function">__call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Person</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">eat</span><span class="token punctuation">(</span><span class="token variable">$args</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$args</span> <span class="token keyword">as</span> <span class="token variable">$arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;Do you like eating, &#39;</span> <span class="token operator">.</span> <span class="token variable">$arg</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;?&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__call</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$arguments</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u7C7B\u4E2D\u6709\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5C31\u8C03\u7528</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$name</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;eat&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token variable">$arguments</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;Calling unavailable function &#39;</span> <span class="token operator">.</span> <span class="token variable">$name</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;().&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$person</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Do you like eating, Jack?</span>
<span class="token comment">// Do you like eating, Rose?</span>
<span class="token variable">$person</span><span class="token operator">-&gt;</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Rose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


\u8C03\u7528\u4E0D\u5B58\u5728\u7684\u65B9\u6CD5<span class="token punctuation">,</span>\u7ED9\u51FA\u8C03\u7528\u65E0\u6548\u65B9\u6CD5\u7684\u4FE1\u606F\u63D0\u793A<span class="token punctuation">:</span>
<span class="token comment">//Calling unavailable function drink().</span>
<span class="token variable">$person</span><span class="token operator">-&gt;</span><span class="token function">drink</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Rose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function i(l,c){return s(),a("div",null,o)}var r=n(t,[["render",i],["__file","php\u9B54\u672F\u65B9\u6CD5\u4E4B_call.html.vue"]]);export{r as default};
