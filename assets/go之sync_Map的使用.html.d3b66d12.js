import{_ as n,o as s,c as a,g as t}from"./app.b04686bd.js";const p={},e=t(`<p>\u666E\u901Amap\u5728\u5E76\u53D1\u5199\u7684\u573A\u666F\u4E0B\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u6240\u4EE5golang\u6709\u4E86sync.Map\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5F53\u7136\u8FD8\u6709\u8BFB\u5199\u9501</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>\u4F7F\u7528\u6848\u4F8B\u5982\u4E0B<span class="token punctuation">:</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//\u58F0\u660E scene\uFF0C\u7C7B\u578B\u4E3A sync.Map\uFF0C\u6CE8\u610F\uFF0Csync.Map \u4E0D\u80FD\u4F7F\u7528 make \u521B\u5EFA\u3002</span>
	<span class="token keyword">var</span> scene sync<span class="token punctuation">.</span>Map

	<span class="token comment">// \u5C06\u952E\u503C\u5BF9\u4FDD\u5B58\u5230sync.Map</span>
	scene<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>
	scene<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span>
	scene<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;wangwu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6E56\u5317\u6B66\u6C49&quot;</span><span class="token punctuation">)</span>
	scene<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;zhaoliu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4E0A\u6D77\u6D66\u4E1C&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// \u4ECEsync.Map\u4E2D\u6839\u636E\u952E\u53D6\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// \u6839\u636E\u952E\u5220\u9664\u5BF9\u5E94\u7684\u952E\u503C\u5BF9</span>
	scene<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// \u904D\u5386\u6240\u6709sync.Map\u4E2D\u7684\u952E\u503C\u5BF9</span>
	i <span class="token operator">:=</span> <span class="token number">0</span>
	scene<span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>

		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u904D\u5386syn_map====&gt;:&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token comment">//\u7EDF\u8BA1map\u7684\u5927\u5C0F</span>
		i<span class="token operator">++</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;syn_map\u5927\u5C0F\u4E3A:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(i,u){return s(),a("div",null,c)}var k=n(p,[["render",o],["__file","go\u4E4Bsync_Map\u7684\u4F7F\u7528.html.vue"]]);export{k as default};
