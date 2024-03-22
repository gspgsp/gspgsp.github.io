import{_ as n,o as s,c as a,g as t}from"./app.b04686bd.js";const p={},e=t(`<p>golang\u7684\u53E6\u4E00\u79CD\u9501\u7ADE\u4E89\u89E3\u51B3\u65B9\u6848,\u57FA\u4E8Eatomic</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/**
atomic \u539F\u5B50\u64CD\u4F5C\uFF0C\u53EA\u9488\u5BF9go\u4E2D\u7684\u4E00\u4E9B\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4F7F\u7528\uFF1Aint32\u3001int64\u3001uint32\u3001uint64\u3001uintptr(uintptr \u662F Go \u5185\u7F6E\u7C7B\u578B\uFF0C\u8868\u793A\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u53EF\u5B58\u50A8\u4E00\u4E2A\u5B8C\u6574\u7684\u5730\u5740)
 */</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	x <span class="token builtin">int64</span>
	wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">AmAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u901A\u8FC7 atomic \u539F\u5B50\u64CD\u4F5C\uFF0C\u4FDD\u8BC1\u6570\u636E\u64CD\u4F5C\u7684\u539F\u5B50\u6027\uFF0C\u7ED3\u679C\u4E00\u5B9A\u662F500</span>
	atomic<span class="token punctuation">.</span><span class="token function">AddInt64</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token comment">//\u76F4\u63A5x++\uFF0C\u975E\u539F\u5B50\u64CD\u4F5C\uFF0C\u6570\u636E\u7ED3\u679C\u4E0D\u51C6\u786E\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u53EF\u80FD\u662F400\u591A</span>
	<span class="token comment">//x++</span>
	<span class="token comment">//\u8FD8\u53EF\u4EE5\u901A\u8FC7sync.Mutex\u540C\u6B65\u9501\u5B9E\u73B0\uFF0C\u52A0\u9501\u6027\u80FD\u5F00\u9500\u5927</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestAtomic</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">AmAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// \u539F\u5B50\u64CD\u4F5C\u7248Add\u51FD\u6570\uFF0C\u662F\u5E76\u53D1\u5B89\u5168\u7684\uFF0C\u6027\u80FD\u4F18\u4E8E\u52A0\u9501\u7248</span>
	<span class="token punctuation">}</span>

	end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Seconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>




atomic\u548Cmutex\u7684\u533A\u522B

<span class="token number">1</span><span class="token punctuation">.</span>atomic\u7684\u5305\u5904\u4E8Esync<span class="token operator">/</span>atomic\uFF0Cmutex\u5219\u662Fsync\u4E0B\u7684\u5305

<span class="token number">2</span><span class="token punctuation">.</span>atomic\u662F\u5BF9cpu\u5E95\u5C42\u8FDB\u884C\u539F\u5B50\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u901A\u8FC7\u7A0B\u5E8F\u5E72\u9884\u3002\u800Cmutex\u5219\u662F\u5728\u8BED\u8A00\u5C42\u9762\u7684\uFF0C\u64CD\u4F5C\u81EA\u7531\u5EA6\u8F83\u9AD8\u3002

<span class="token number">3</span><span class="token punctuation">.</span>atomic\u7701\u53BB\u4E86lock\u548Cunlock\u7684\u64CD\u4F5C\uFF0C\u4EE3\u7801\u6BD4\u8F83\u7B80\u6D01

<span class="token number">4</span><span class="token punctuation">.</span>atomic\u56E0\u4E3A\u5176\u5728\u5E95\u5C42\u5C31\u5DF2\u5C01\u88C5\u597D\u7684\u7279\u6027\uFF0C\u6240\u4EE5\u5B83\u5728goroutine\u4E0B\u7684\u8FD0\u884C\u8868\u73B0\u662F\u8FDE\u7EED\u4E0D\u95F4\u65AD\u7684\uFF1B\u800Cmutex\u5219\u5728goroutine\u8FD0\u884C\u95F4\u7531\u4E8E\u9501\u7684\u7B49\u5F85\u6216\u6301\u6709\u7B49\u60C5\u51B5\uFF0C\u65AD\u65AD\u7EED\u7EED\u5730\u6267\u884C

<span class="token number">5</span><span class="token punctuation">.</span>atomic\u603B\u4F53\u8FD0\u884C\u8F83\u5FEB\uFF0C\u4F46\u662F\u5982\u679C\u5B58\u50A8\u6570\u636E\u7684\u975E\u5E38\u5DE8\u5927\uFF0C\u5B83\u7684\u6027\u80FD\u4F1A\u5927\u6253\u6298\u6263\u3002\u56E0\u4E3A\u6BCF\u6B21\u66F4\u65B0atomic\u7684\u6570\u636E\uFF0C\u90FD\u4F1A\u8FDB\u884C\u4E00\u6B21\u6570\u636E\u590D\u5236\uFF0C\u6570\u636E\u8D8A\u5927\u6548\u7387\u4E0B\u964D\u8D8A\u5927

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function i(o,l){return s(),a("div",null,c)}var d=n(p,[["render",i],["__file","golang\u4E4Batomic\u4F7F\u7528.html.vue"]]);export{d as default};
