import{_ as n,o as s,c as a,g as t}from"./app.66ae8700.js";const e={},p=t(`<p>php\u4E4Bfirst_class_callable_syntax\u7684\u4F7F\u7528:</p><ul><li>\u58F0\u660E\u4E00\u4E2ATest\u7C7B</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Controller<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Closure</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u58F0\u660E\u4E00\u4E2ATest\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getPrivateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Closure</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Closure</span><span class="token operator">::</span><span class="token function">fromCallable</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;privateMethod&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//8.1\u4E4B\u524D</span>
        <span class="token comment">//return $this-&gt;privateMethod(...);//8.1\u4E4B\u540E</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./3.txt&#39;</span><span class="token punctuation">,</span> <span class="token constant">__METHOD__</span><span class="token operator">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728\u8FD9\u4E2A\u63A7\u5236\u5668\u91CC \u8C03\u7528 Test\u7C7B</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Controller<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Bundle<span class="token punctuation">\\</span>FrameworkBundle<span class="token punctuation">\\</span>Controller<span class="token punctuation">\\</span>AbstractController</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Routing<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * \u5728\u8FD9\u4E2A\u63A7\u5236\u5668\u91CC \u8C03\u7528 Test\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">IndexController</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractController</span>
<span class="token punctuation">{</span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/admin&#39;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">name</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u521D\u59CB\u5316\u7C7B</span>
        <span class="token variable">$test</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8C03\u7528\u7C7B\u91CC\u7684\u79C1\u6709\u5316\u65B9\u6CD5,\u5F97\u5230\u4E00\u4E2AClosure</span>
        <span class="token variable">$privateMethod</span> <span class="token operator">=</span> <span class="token variable">$test</span><span class="token operator">-&gt;</span><span class="token function">getPrivateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u6267\u884C\u8FD9\u4E2A Closure</span>
        <span class="token variable">$privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">renderForm</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin/index.html.twig&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003(https://wiki.php.net/rfc/first_class_callable_syntax)</p><p>\u5404\u4E2A\u7248\u672C\u7684PHP\u7684wiki(https://wiki.php.net/rfc#php_83)<br> RFC\u89E3\u91CA:request for comments(\u5F81\u6C42\u610F\u89C1)\uFF0C\u5E94\u8BE5\u662Fphp\u7684\u793E\u533A\u7248</p>`,7),c=[p];function o(l,i){return s(),a("div",null,c)}var r=n(e,[["render",o],["__file","php\u4E4Bfirst_class_callable_syntax\u7684\u4F7F\u7528.html.vue"]]);export{r as default};
