import{_ as n,o as s,c as a,g as e}from"./app.dd03cafd.js";const t={},p=e(`<p>\u5982\u4F55\u83B7\u53D6app/config/services.yaml\u7684\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Bundle<span class="token punctuation">\\</span>FrameworkBundle<span class="token punctuation">\\</span>Controller<span class="token punctuation">\\</span>AbstractController</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>

<span class="token comment">// 1. Include the ParameterBagInterface class</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>DependencyInjection<span class="token punctuation">\\</span>ParameterBag<span class="token punctuation">\\</span>ParameterBagInterface</span><span class="token punctuation">;</span>

<span class="token comment">// 2. Basically what we do is autoinject the ParameterBagInterface as argument</span>
<span class="token comment">//    inside the method where you need to obtain a parameter from the services.yaml file</span>
<span class="token comment">//    and then, using the get method you can retrieve a specific parameter.</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyController</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">ParameterBagInterface</span> <span class="token variable">$params</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$uploadsDirectory</span> <span class="token operator">=</span> <span class="token variable">$params</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;uploads_directory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// ... or retrieve them all with $params-&gt;all()</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","symfony5\u83B7\u53D6Yaml\u914D\u7F6E\u53C2\u6570.html.vue"]]);export{r as default};
