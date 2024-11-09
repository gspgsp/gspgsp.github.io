import{_ as n,o as s,c as a,g as e}from"./app.66ae8700.js";const t={},c=e(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestCodeRes</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	require <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		require <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>

    <span class="token comment">//\u5173\u95ED require</span>
	<span class="token function">close</span><span class="token punctuation">(</span>require<span class="token punctuation">)</span>

	<span class="token comment">//\u8BBE\u7F6E\u5B9A\u65F6\u5668\u63A7\u5236\u8BFB\u53D6\u901F\u7387</span>
	ti <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

	<span class="token comment">//\u76F4\u63A5range\u53EA\u4F1A\u8BFB\u53D6\u503C\uFF0C\u7F13\u51B2\u533A\u65E0\u6570\u636E\u4F1A\u8BFB\u53D6\u9ED8\u8BA4\u96F6\u503C\uFF0Cchan\u5173\u95ED\uFF0C\u5219\u9000\u51FArange</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> require <span class="token punctuation">{</span>
		<span class="token operator">&lt;-</span>ti
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;i: %d time: %v\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//	=== RUN   TestCodeRes</span>
    <span class="token comment">// i: 0 time: 2022-10-23 20:06:52.6746003 +0800 CST m=+1.026004901</span>
    <span class="token comment">// i: 1 time: 2022-10-23 20:06:53.6702704 +0800 CST m=+2.021675001</span>
    <span class="token comment">// i: 2 time: 2022-10-23 20:06:54.6643626 +0800 CST m=+3.015767201</span>
    <span class="token comment">// i: 3 time: 2022-10-23 20:06:55.6645058 +0800 CST m=+4.015910401</span>
    <span class="token comment">// i: 4 time: 2022-10-23 20:06:56.6647772 +0800 CST m=+5.016181801</span>
    <span class="token comment">//	--- PASS: TestCodeRes (5.01s)</span>
    <span class="token comment">//	PASS</span>

    \u7ED3\u8BBA\uFF1A<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF0C\u4F1A\u5728\u6700\u540E\u4E00\u4E2Asend\u7684\u503C\u88ABreceive\u4E86\u4EE5\u540E\u6267\u884C\uFF0C\u8FD9\u91CC\u5C31\u662F <span class="token keyword">for</span> <span class="token keyword">range</span> \u5FAA\u73AF\u5B8C\u4EE5\u540E\u6267\u884C\u3002\u901A\u8FC7\u5B98\u65B9\u6587\u6863\u7684\u4ECB\u7ECD\u4E5F\u662F\u53EF\u4EE5\u77E5\u9053\u7684


    <span class="token comment">// The close built-in function closes a channel, which must be either</span>
    <span class="token comment">// bidirectional or send-only. It should be executed only by the sender,</span>
    <span class="token comment">// never the receiver, and has the effect of shutting down the channel after</span>
    <span class="token comment">// the last sent value is received. After the last value has been received</span>
    <span class="token comment">// from a closed channel c, any receive from c will succeed without</span>
    <span class="token comment">// blocking, returning the zero value for the channel element. The form</span>
    <span class="token comment">//	x, ok := &lt;-c</span>
    <span class="token comment">// will also set ok to false for a closed channel.</span>
    <span class="token keyword">func</span> <span class="token function">close</span><span class="token punctuation">(</span>c <span class="token keyword">chan</span><span class="token operator">&lt;-</span> Type<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[c];function i(p,l){return s(),a("div",null,o)}var r=n(t,[["render",i],["__file","golang\u4E4Bclose()\u751F\u6548\u65F6\u95F4\u70B9.html.vue"]]);export{r as default};
