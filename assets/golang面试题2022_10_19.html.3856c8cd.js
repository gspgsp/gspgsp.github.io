import{_ as e,o as a,c as l,d as i,g as n}from"./app.d66d8774.js";const t={},d=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u4EC0\u4E48\u662F\u534F\u7A0B\u6CC4\u9732(goroutine leak)?
\u534F\u7A0B\u6CC4\u9732\u662F\u6307\uFF0C\u5728\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u6709\u4E00\u4E9B\u534F\u7A0B\u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\uFF0C\u65E0\u6CD5\u6B63\u5E38\u9000\u51FA\u3002

2.\u534F\u7A0B\u6CC4\u9732\u7684\u5371\u5BB3?
\u534F\u7A0B\u7684\u8FD0\u884C\u662F\u9700\u8981\u5360\u7528\u5185\u5B58\u548C CPU \u65F6\u95F4\u7684\uFF0C\u4E00\u65E6\u8FD9\u79CD\u534F\u7A0B\u8D8A\u6765\u8D8A\u591A\uFF0C\u4F1A\u5BFC\u81F4\u5185\u5B58\u65E0\u7AEF\u88AB\u6D6A\u8D39\uFF0CCPU \u65F6\u95F4\u7247\u88AB\u5360\u7528\uFF0C\u7A0B\u5E8F\u4F1A\u8D8A\u6765\u8D8A\u5361\u3002

3.\u534F\u7A0B\u6CC4\u9732\u7684\u539F\u56E0?
goroutine\u7531\u4E8Echannel\u7684\u8BFB/\u5199\u7AEF\u9000\u51FA\u800C\u4E00\u76F4\u963B\u585E\uFF0C\u5BFC\u81F4goroutine\u4E00\u76F4\u5360\u7528\u8D44\u6E90\uFF0C\u800C\u65E0\u6CD5\u9000\u51FA\u3002
goroutine\u7531\u4E8Enil channel\u800C\u963B\u585E\u3002
goroutine\u8FDB\u5165\u6B7B\u5FAA\u73AF\u4E2D\uFF0C\u5BFC\u81F4\u8D44\u6E90\u4E00\u76F4\u65E0\u6CD5\u91CA\u653E\u3002
goroutine\u540C\u6B65\u9501(mutex)\u64CD\u4F5C\u4E0D\u5F53\u5BFC\u81F4
goroutine waitgroup Add\u7684\u6570\u91CF\u548CDone\u7684\u6570\u91CF\u4E0D\u4E00\u81F4\uFF0C\u5BFC\u81F4\u4E00\u76F4Wait

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u662F\u51E0\u79CD\u573A\u666F\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math/rand&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">/**
\u6CC4\u9732\u573A\u666F1-\u4EE5\u53CA\u89E3\u51B3\u529E\u6CD5
 */</span>
<span class="token keyword">func</span> <span class="token function">TestChanLeak</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span>

	randomStream <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">{</span>
		rsc <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">)</span>

		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u534F\u7A0B\u7ED3\u675F...&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>rsc<span class="token punctuation">)</span>

			<span class="token keyword">for</span>  <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> x<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
					<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
						fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x is:&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token comment">// x is: &lt;nil&gt;</span>
					<span class="token punctuation">}</span>

					<span class="token keyword">return</span>
				<span class="token keyword">case</span> rsc <span class="token operator">&lt;-</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>send \u963B\u585E
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> rsc
	<span class="token punctuation">}</span>

	<span class="token comment">//channel\u5173\u95ED\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 contextWithCancel \u6765\u7ED3\u675F goroutine</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//\u8C03\u7528</span>
	rst <span class="token operator">:=</span> <span class="token function">randomStream</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;start...&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;rand is:&quot;</span><span class="token punctuation">,</span><span class="token operator">&lt;-</span>rst<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// close\u7684\u7279\u6027</span>
	<span class="token comment">// After the last value has been received</span>
	<span class="token comment">// from a closed channel c, any receive from c will succeed without</span>
	<span class="token comment">// blocking, returning the zero value for the channel element. The form</span>
	<span class="token comment">//	x, ok := &lt;-c</span>
	<span class="token comment">// will also set ok to false for a closed channel.</span>
	<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
	<span class="token comment">//\u6A21\u62DF\u4E00\u4E2A\u8017\u65F6\u64CD\u4F5C\uFF0C10\u79D2\u7684\u5EF6\u8FDF\uFF0C\u5728\u8FD9\u671F\u95F4  rst \u8FD8\u5728\u963B\u585E</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>


	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">/**
\u6CC4\u9732\u573A\u666F2-\u4EE5\u53CA\u89E3\u51B3\u529E\u6CD5(\u8FD9\u4E2A\u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u4E3B\u534F\u7A0B\u9000\u51FA)
*/</span>
<span class="token keyword">func</span> <span class="token function">routineTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u8FDB\u5165\u5165\u6B7B\u5FAA\u73AF</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u542Fgoroutine&quot;</span><span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestChan</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u59CB...&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">//\u901A\u8FC7 runtime.NumGoroutine() \u83B7\u53D6\u5F53\u524D\u8FD0\u884C\u7684goroutine\u7684\u6570\u91CF</span>
	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token function">routineTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u675F...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
\u6CC4\u9732\u573A\u666F3-nil channel
*/</span>
<span class="token keyword">func</span> <span class="token function">TestNilChan</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the number of goroutines: &quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//ch \u5C31\u662F\u4E00\u4E2A nil channel, \u56E0\u4E3A\u53EA\u662F\u58F0\u660E\uFF0C\u4F46\u662F\u6CA1\u6709\u521D\u59CB\u5316\u8FD9\u4E2Ach\u5C31\u76F4\u63A5\u4F7F\u7528\u4E86</span>
	<span class="token keyword">var</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token operator">&lt;-</span>ch <span class="token comment">// receive nil channel</span>
		<span class="token comment">// ch&lt;- // send nil channel</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>




	<span class="token comment">//defer func() {</span>
	<span class="token comment">//	time.Sleep(time.Second)</span>
	<span class="token comment">//	fmt.Println(&quot;the number1 of goroutines: &quot;, runtime.NumGoroutine())</span>
	<span class="token comment">//}()</span>
	<span class="token comment">//</span>
	<span class="token comment">//done := make(chan struct{})</span>
	<span class="token comment">//</span>
	<span class="token comment">//var ch chan int</span>
	<span class="token comment">//go func() {</span>
	<span class="token comment">//	fmt.Println(&quot;the number2 of goroutines: &quot;, runtime.NumGoroutine())</span>
	<span class="token comment">//	defer close(done)</span>
	<span class="token comment">//}()</span>
	<span class="token comment">//</span>
	<span class="token comment">////fatal error: all goroutines are asleep - deadlock!</span>
	<span class="token comment">//select {</span>
	<span class="token comment">//case &lt;-ch:// The receive operation might block a goroutine because of the &#39;nil&#39; channel</span>
	<span class="token comment">//case &lt;-done:</span>
	<span class="token comment">//	return</span>
	<span class="token comment">//}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
\u6CC4\u9732\u573A\u666F4-waitGroup
*/</span>
<span class="token keyword">func</span> <span class="token function">TestWaitGroup</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the number1 of goroutines: &quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// \u65E0\u6CD5\u9000\u51FA</span>
	<span class="token keyword">go</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>4.\u65E0\u7F13\u51B2\u7684channel\u548C\u6709\u7F13\u51B2\u7684channel\u7684\u533A\u522B?

\u4E4B\u524D\u4EE5\u4E3A\u6709\u7F13\u51B2\u4E0E\u65E0\u7F13\u51B2\u7684\u533A\u522B\u662F \u65E0\u7F13\u51B2\u7684\u7F13\u51B2\u4E3A 1 \u7684\u7F13\u51B2\u5F0F \uFF0C\u5176\u5B9E\u4E0D\u662F\u7684\uFF0C\u65E0\u7F13\u51B2 \u5C31\u662F\u7F13\u51B2\u4E3A0\uFF0C

func TestCacheChannel(t *testing.T)  {
	c := make(chan int, 0) // \u6216\u8005 make(chan int)
	//\u4E0D\u5E26\u7F13\u51B2\u7684channel\u53EF\u4EE5\u901A\u8FC7Goroutine\u7ED9\u5F53\u524Dchannel\u7684\u53D1\u9001\u6570\u636E\uFF0C\u4E0D\u4F1A\u963B\u585E\u7EBF\u7A0B\uFF0C\u8FD9\u4E2A\u662F\u4EC0\u4E48\u539F\u56E0\u8FD8\u5728\u7814\u7A76\uFF0C\u552F\u4E00\u7684\u89E3\u91CA\u5C31\u662F \u4E0D\u5E26\u7F13\u51B2\u7684channel\uFF0C\u7684send \u548C receive \u4E0D\u80FD\u662F\u540C\u4E00\u4E2A goroutine\uFF0C\u5FC5\u987B\u8981\u91CD\u65B0\u8D77\u4E00\u4E2Agoroutine
    //go func() {
    //	c &lt;- 1
    //}()


	//c := make(chan int, 1)
	//c &lt;- 1 //\u4E0D\u5E26\u7F13\u51B2\u7684channel \u8FD9\u91CC\u4F1A\u963B\u585E\uFF0C\u4F46\u662F\u5E26\u7F13\u51B2\u5C31\u4E0D\u4F1A\u963B\u585E

	fmt.Println(&lt;-c)
}

\u4E8C\u8005\u533A\u522B\u5C31\u662F\u4E00\u4E2A\u4F1A\u963B\u585E\u53E6\u4E00\u4E2A\u4E0D\u4F1A\u963B\u585E(\u6216\u8005  \u540C\u6B65\u4E0E\u975E\u540C\u6B65\u7684\u533A\u522B)


5.channel \u5E95\u5C42\u6570\u636E\u539F\u7406?
\u901A\u8FC7var\u58F0\u660E\u6216\u8005make\u51FD\u6570\u521B\u5EFA\u7684channel\u53D8\u91CF\u662F\u4E00\u4E2A\u5B58\u50A8\u5728\u6808\u4E0A\u7684\u6307\u9488\uFF0C\u5360\u75288\u4E2A\u5B57\u8282\uFF0C\u6307\u5411\u5806\u4E0A\u7684hchan\u7ED3\u6784\u4F53\uFF0C\u8BE5\u7ED3\u6784\u4F53\u5728src/runtime/chan.go\u4E2D

type hchan struct {
	qcount   uint           // total data in the queue
	dataqsiz uint           // size of the circular queue
	buf      unsafe.Pointer // points to an array of dataqsiz elements
	elemsize uint16
	closed   uint32
	elemtype *_type // element type
	sendx    uint   // send index
	recvx    uint   // receive index
	recvq    waitq  // list of recv waiters
	sendq    waitq  // list of send waiters

	// lock protects all fields in hchan, as well as several
	// fields in sudogs blocked on this channel.
	//
	// Do not change another G&#39;s status while holding this lock
	// (in particular, do not ready a G), as this can deadlock
	// with stack shrinking.
	lock mutex
}

//G1

func main(){

    ...



    for _, task :=  range hellaTasks {

        ch &lt;- task     //sender

    }



    ...

}



//G2

func worker(ch  chan Task){

    for {

       //\u63A5\u53D7\u4EFB\u52A1

       task := &lt;- ch   //recevier

       //\u5047\u8BBE\u8BBE\u7ACB\u4F1A\u62A4\u7406\u5F88\u957F\u65F6\u95F4\uFF0C\u90A3\u4E48 G1\u53EF\u80FD\u4F1A\u963B\u585E
       process(task)

    }

}

\u5176\u4E2DG1\u662F\u53D1\u9001\u8005\uFF0CG2\u662F\u63A5\u6536\uFF0C\u56E0\u4E3Ach\u662F\u957F\u5EA6\u4E3A3\u7684\u5E26\u7F13\u51B2channel\uFF0C\u521D\u59CB\u7684\u65F6\u5019hchan\u7ED3\u6784\u4F53\u7684buf\u4E3A\u7A7A\uFF0Csendx\u548Crecvx\u90FD\u4E3A0\uFF0C\u5F53G1\u5411ch\u91CC\u53D1\u9001\u6570\u636E\u7684\u65F6\u5019\uFF0C\u4F1A\u9996\u5148\u5BF9buf\u52A0\u9501\uFF0C\u7136\u540E\u5C06\u8981\u53D1\u9001\u7684\u6570\u636Ecopy\u5230buf\u91CC\uFF0C\u5E76\u589E\u52A0sendx\u7684\u503C\uFF0C
\u6700\u540E\u91CA\u653Ebuf\u7684\u9501\u3002\u7136\u540EG2\u6D88\u8D39\u7684\u65F6\u5019\u9996\u5148\u5BF9buf\u52A0\u9501\uFF0C\u7136\u540E\u5C06buf\u91CC\u7684\u6570\u636Ecopy\u5230task\u53D8\u91CF\u5BF9\u5E94\u7684\u5185\u5B58\u91CC\uFF0C\u589E\u52A0recvx\uFF0C\u6700\u540E\u91CA\u653E\u9501\u3002\u6574\u4E2A\u8FC7\u7A0B\uFF0CG1\u548CG2\u6CA1\u6709\u5171\u4EAB\u7684\u5185\u5B58\uFF0C\u5E95\u5C42\u901A\u8FC7hchan\u7ED3\u6784\u4F53\u7684buf\uFF0C\u4F7F\u7528copy\u5185\u5B58\u7684\u65B9\u5F0F\u8FDB\u884C\u901A\u4FE1\uFF0C
\u6700\u540E\u8FBE\u5230\u4E86\u5171\u4EAB\u5185\u5B58\u7684\u76EE\u7684\uFF0C\u8FD9\u5B8C\u5168\u7B26\u5408CSP\u7684\u8BBE\u8BA1\u7406\u5FF5\u3002


CSP \u662F Communicating Sequential Process \u7684\u7B80\u79F0\uFF0C\u4E2D\u6587\u53EF\u4EE5\u53EB\u505A\u901A\u4FE1\u987A\u5E8F\u8FDB\u7A0B\uFF0C\u662F\u4E00\u79CD\u5E76\u53D1\u7F16\u7A0B\u6A21\u578B\u3002
Golang\uFF0C\u5176\u5B9E\u53EA\u7528\u5230\u4E86 CSP \u7684\u5F88\u5C0F\u4E00\u90E8\u5206\uFF0C\u5373\u7406\u8BBA\u4E2D\u7684 Process/Channel\uFF08\u5BF9\u5E94\u5230\u8BED\u8A00\u4E2D\u7684 goroutine/channel\uFF09

G1\u548CG2\u7684\u8C03\u7528\u6D89\u53CA\u5230golang\u7684GPM\u6A21\u578B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>6.GPM\u6A21\u578B\u539F\u7406?
\u4E86\u89E3GPM\u6A21\u578B\u4E4B\u524D\uFF0C\u5148\u5206\u6790\u4E00\u4E0B\u7EBF\u7A0B\u7684\u4E09\u79CD\u6A21\u578B: \u7528\u6237\u7EA7\u7EBF\u7A0B\u6A21\u578B\u3001\u5185\u6838\u7EA7\u7EBF\u7A0B\u6A21\u578B\u548C\u4E24\u7EA7\u7EBF\u7A0B\u6A21\u578B\uFF08\u4E5F\u79F0\u6DF7\u5408\u578B\u7EBF\u7A0B\u6A21\u578B\uFF09
\u5B83\u4EEC\u4E4B\u95F4\u6700\u5927\u7684\u5DEE\u5F02\u5C31\u5728\u4E8E\u7528\u6237\u7EBF\u7A0B\u4E0E\u5185\u6838\u8C03\u5EA6\u5B9E\u4F53\uFF08KSE\uFF0CKernel Scheduling Entity\uFF09\u4E4B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB\u4E0A\u3002\u800C\u6240\u8C13\u7684\u5185\u6838\u8C03\u5EA6\u5B9E\u4F53 KSE \u5C31\u662F\u6307\u53EF\u4EE5\u88AB\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u8C03\u5EA6\u5668\u8C03\u5EA6\u7684\u5BF9\u8C61\u5B9E\u4F53\u3002\u7B80\u5355\u6765\u8BF4 KSE \u5C31\u662F\u5185\u6838\u7EA7\u7EBF\u7A0B\uFF0C
\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u7684\u6700\u5C0F\u8C03\u5EA6\u5355\u5143\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u5199\u4EE3\u7801\u7684\u65F6\u5019\u901A\u4FD7\u7406\u89E3\u4E0A\u7684\u7EBF\u7A0B\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7528\u6237\u7EA7\u7EBF\u7A0B\u6A21\u578B:
\u7528\u6237\u7EBF\u7A0B\u4E0E\u5185\u6838\u7EBF\u7A0B KSE \u662F\u4E00\u5BF9\u4E00\uFF081 : 1\uFF09\u7684\u6620\u5C04\u6A21\u578B\uFF0C\u4E5F\u5C31\u662F\u6BCF\u4E00\u4E2A\u7528\u6237\u7EBF\u7A0B\u7ED1\u5B9A\u4E00\u4E2A\u5B9E\u9645\u7684\u5185\u6838\u7EBF\u7A0B\uFF0C\u800C\u7EBF\u7A0B\u7684\u8C03\u5EA6\u5219\u5B8C\u5168\u4EA4\u4ED8\u7ED9\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u53BB\u505A\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5BF9\u7EBF\u7A0B\u7684\u521B\u5EFA\u3001\u7EC8\u6B62\u4EE5\u53CA\u540C\u6B65\u90FD\u57FA\u4E8E\u5185\u6838\u63D0\u4F9B\u7684\u7CFB\u7EDF\u8C03\u7528\u6765\u5B8C
\u6210\uFF0C\u5927\u90E8\u5206\u7F16\u7A0B\u8BED\u8A00\u7684\u7EBF\u7A0B\u5E93(\u6BD4\u5982 Java \u7684 java.lang.Thread\u3001C++11 \u7684 std::thread \u7B49\u7B49)\u90FD\u662F\u5BF9\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7EBF\u7A0B\uFF08\u5185\u6838\u7EA7\u7EBF\u7A0B\uFF09\u7684\u4E00\u5C42\u5C01\u88C5\uFF0C\u521B\u5EFA\u51FA\u6765\u7684\u6BCF\u4E2A\u7EBF\u7A0B\u4E0E\u4E00\u4E2A\u72EC\u7ACB\u7684 KSE \u9759\u6001\u7ED1\u5B9A\uFF0C\u56E0\u6B64\u5176\u8C03\u5EA6\u5B8C\u5168\u7531\u64CD\u4F5C
\u7CFB\u7EDF\u5185\u6838\u8C03\u5EA6\u5668\u53BB\u505A\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u91CC\u521B\u5EFA\u51FA\u6765\u7684\u591A\u4E2A\u7EBF\u7A0B\u6BCF\u4E00\u4E2A\u90FD\u7ED1\u5B9A\u4E00\u4E2A KSE\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=["src"],v=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5185\u6838\u7EA7\u7EBF\u7A0B\u6A21\u578B:
\u7528\u6237\u7EBF\u7A0B\u4E0E\u5185\u6838\u7EBF\u7A0B KSE \u662F\u591A\u5BF9\u4E00\uFF08N : 1\uFF09\u7684\u6620\u5C04\u6A21\u578B\uFF0C\u591A\u4E2A\u7528\u6237\u7EBF\u7A0B\u7684\u4E00\u822C\u4ECE\u5C5E\u4E8E\u5355\u4E2A\u8FDB\u7A0B\u5E76\u4E14\u591A\u7EBF\u7A0B\u7684\u8C03\u5EA6\u662F\u7531\u7528\u6237\u81EA\u5DF1\u7684\u7EBF\u7A0B\u5E93\u6765\u5B8C\u6210\uFF0C\u7EBF\u7A0B\u7684\u521B\u5EFA\u3001\u9500\u6BC1\u4EE5\u53CA\u591A\u7EBF\u7A0B\u4E4B\u95F4\u7684\u534F\u8C03\u7B49\u64CD\u4F5C\u90FD\u662F\u7531\u7528\u6237\u81EA\u5DF1\u7684\u7EBF\u7A0B\u5E93\u6765\u8D1F\u8D23\u800C
\u65E0\u987B\u501F\u52A9\u7CFB\u7EDF\u8C03\u7528\u6765\u5B9E\u73B0\u3002\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u6240\u6709\u521B\u5EFA\u7684\u7EBF\u7A0B\u90FD\u53EA\u548C\u540C\u4E00\u4E2A KSE \u5728\u8FD0\u884C\u65F6\u52A8\u6001\u7ED1\u5B9A\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u53EA\u77E5\u9053\u7528\u6237\u8FDB\u7A0B\u800C\u5BF9\u5176\u4E2D\u7684\u7EBF\u7A0B\u662F\u65E0\u611F\u77E5\u7684\uFF0C\u5185\u6838\u7684\u6240\u6709\u8C03\u5EA6\u90FD\u662F\u57FA\u4E8E\u7528\u6237\u8FDB\u7A0B\u3002\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u76F8\u6BD4\u5185\u6838\u7EA7\u7EBF\u7A0B\u53EF
\u4EE5\u505A\u7684\u5F88\u8F7B\u91CF\u7EA7\uFF0C\u5BF9\u7CFB\u7EDF\u8D44\u6E90\u7684\u6D88\u8017\u4F1A\u5C0F\u5F88\u591A\uFF0C\u56E0\u6B64\u53EF\u4EE5\u521B\u5EFA\u7684\u7EBF\u7A0B\u6570\u91CF\u4E0E\u4E0A\u4E0B\u6587\u5207\u6362\u6240\u82B1\u8D39\u7684\u4EE3\u4EF7\u4E5F\u4F1A\u5C0F\u5F97\u591A\u3002\u4F46\u8BE5\u6A21\u578B\u6709\u4E2A\u539F\u7F6A\uFF1A\u5E76\u4E0D\u80FD\u505A\u5230\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u5E76\u53D1\uFF0C\u5047\u8BBE\u5728\u67D0\u4E2A\u7528\u6237\u8FDB\u7A0B\u4E0A\u7684\u67D0\u4E2A\u7528\u6237\u7EBF\u7A0B\u56E0\u4E3A\u4E00\u4E2A\u963B\u585E\u8C03\u7528\uFF08\u6BD4\u5982
I/O \u963B\u585E\uFF09\u800C\u88AB CPU \u7ED9\u4E2D\u65AD\uFF08\u62A2\u5360\u5F0F\u8C03\u5EA6\uFF09\u4E86\uFF0C\u90A3\u4E48\u8BE5\u8FDB\u7A0B\u5185\u7684\u6240\u6709\u7EBF\u7A0B\u90FD\u88AB\u963B\u585E\uFF08\u56E0\u4E3A\u5355\u4E2A\u7528\u6237\u8FDB\u7A0B\u5185\u7684\u7EBF\u7A0B\u81EA\u8C03\u5EA6\u662F\u6CA1\u6709 CPU \u65F6\u949F\u4E2D\u65AD\u7684\uFF0C\u4ECE\u800C\u6CA1\u6709\u8F6E\u8F6C\u8C03\u5EA6\uFF09\uFF0C\u6574\u4E2A\u8FDB\u7A0B\u88AB\u6302\u8D77\u3002\u5373\u4FBF\u662F\u591A CPU \u7684\u673A\u5668\uFF0C\u4E5F\u65E0\u6D4E\u4E8E\u4E8B\uFF0C\u56E0
\u4E3A\u5728\u7528\u6237\u7EA7\u7EBF\u7A0B\u6A21\u578B\u4E0B\uFF0C\u4E00\u4E2A CPU \u5173\u8054\u8FD0\u884C\u7684\u662F\u6574\u4E2A\u7528\u6237\u8FDB\u7A0B\uFF0C\u8FDB\u7A0B\u5185\u7684\u5B50\u7EBF\u7A0B\u7ED1\u5B9A\u5230 CPU \u6267\u884C\u662F\u7531\u7528\u6237\u8FDB\u7A0B\u8C03\u5EA6\u7684\uFF0C\u5185\u90E8\u7EBF\u7A0B\u5BF9 CPU \u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u6B64\u65F6\u53EF\u4EE5\u7406\u89E3\u4E3A CPU \u7684\u8C03\u5EA6\u5355\u4F4D\u662F\u7528\u6237\u8FDB\u7A0B\u3002\u6240\u4EE5\u5F88\u591A\u7684\u534F\u7A0B\u5E93\u4F1A\u628A\u81EA\u5DF1\u4E00
\u4E9B\u963B\u585E\u7684\u64CD\u4F5C\u91CD\u65B0\u5C01\u88C5\u4E3A\u5B8C\u5168\u7684\u975E\u963B\u585E\u5F62\u5F0F\uFF0C\u7136\u540E\u5728\u4EE5\u524D\u8981\u963B\u585E\u7684\u70B9\u4E0A\uFF0C\u4E3B\u52A8\u8BA9\u51FA\u81EA\u5DF1\uFF0C\u5E76\u901A\u8FC7\u67D0\u79CD\u65B9\u5F0F\u901A\u77E5\u6216\u5524\u9192\u5176\u4ED6\u5F85\u6267\u884C\u7684\u7528\u6237\u7EBF\u7A0B\u5728\u8BE5 KSE \u4E0A\u8FD0\u884C\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u5185\u6838\u8C03\u5EA6\u5668\u7531\u4E8E KSE \u963B\u585E\u800C\u505A\u4E0A\u4E0B\u6587\u5207\u6362\uFF0C\u8FD9\u6837\u6574\u4E2A\u8FDB\u7A0B
\u4E5F\u4E0D\u4F1A\u88AB\u963B\u585E\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),u=["src"],r=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E24\u7EA7\u7EBF\u7A0B\u6A21\u578B:
\u7528\u6237\u7EBF\u7A0B\u4E0E\u5185\u6838 KSE \u662F\u591A\u5BF9\u591A\uFF08N : M\uFF09\u7684\u6620\u5C04\u6A21\u578B\uFF1A\u9996\u5148\uFF0C\u533A\u522B\u4E8E\u7528\u6237\u7EA7\u7EBF\u7A0B\u6A21\u578B\uFF0C\u4E24\u7EA7\u7EBF\u7A0B\u6A21\u578B\u4E2D\u7684\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u4E0E\u591A\u4E2A\u5185\u6838\u7EBF\u7A0B KSE \u5173\u8054\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E00\u4E2A\u8FDB\u7A0B\u5185\u7684\u591A\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u5206\u522B\u7ED1\u5B9A\u4E00\u4E2A\u81EA\u5DF1\u7684 KSE\uFF0C\u8FD9\u70B9\u548C\u5185\u6838\u7EA7\u7EBF
\u7A0B\u6A21\u578B\u76F8\u4F3C\uFF1B\u5176\u6B21\uFF0C\u53C8\u533A\u522B\u4E8E\u5185\u6838\u7EA7\u7EBF\u7A0B\u6A21\u578B\uFF0C\u5B83\u7684\u8FDB\u7A0B\u91CC\u7684\u7EBF\u7A0B\u5E76\u4E0D\u4E0E KSE \u552F\u4E00\u7ED1\u5B9A\uFF0C\u800C\u662F\u53EF\u4EE5\u591A\u4E2A\u7528\u6237\u7EBF\u7A0B\u6620\u5C04\u5230\u540C\u4E00\u4E2A KSE\uFF0C\u5F53\u67D0\u4E2A KSE \u56E0\u4E3A\u5176\u7ED1\u5B9A\u7684\u7EBF\u7A0B\u7684\u963B\u585E\u64CD\u4F5C\u88AB\u5185\u6838\u8C03\u5EA6\u51FA CPU \u65F6\uFF0C\u5176\u5173\u8054\u7684\u8FDB\u7A0B\u4E2D\u5176\u4F59\u7528\u6237\u7EBF
\u7A0B\u53EF\u4EE5\u91CD\u65B0\u4E0E\u5176\u4ED6 KSE \u7ED1\u5B9A\u8FD0\u884C\u3002\u5373\u7528\u6237\u8C03\u5EA6\u5668\u5B9E\u73B0\u7528\u6237\u7EBF\u7A0B\u5230 KSE \u7684\u300E\u8C03\u5EA6\u300F\uFF0C\u5185\u6838\u8C03\u5EA6\u5668\u5B9E\u73B0 KSE \u5230 CPU \u4E0A\u7684\u300E\u8C03\u5EA6\u300F\u3002Go\u8BED\u8A00\u4E2D\u7684\u5E76\u53D1\u5C31\u662F\u4F7F\u7528\u7684\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF0CGo\u4E3A\u4E86\u5B9E\u73B0\u8BE5\u6A21\u578B\u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u4E2A\u8FD0\u884C\u65F6\u8C03\u5EA6\u5668\u6765\u8D1F
\u8D23Go\u4E2D\u7684&quot;\u7EBF\u7A0B&quot;\u4E0EKSE\u7684\u52A8\u6001\u5173\u8054\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=["src"],p=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GPM\u6A21\u578B:
\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u6BCF\u4E00\u4E2A goroutine \u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6267\u884C\u5355\u5143\uFF0C\u76F8\u8F83\u4E8E\u6BCF\u4E2A OS \u7EBF\u7A0B\u56FA\u5B9A\u5206\u914D 2M \u5185\u5B58\u7684\u6A21\u5F0F\uFF0Cgoroutine \u7684\u6808\u91C7\u53D6\u4E86\u52A8\u6001\u6269\u5BB9\u65B9\u5F0F\uFF0C \u521D\u59CB\u65F6\u4EC5\u4E3A2KB\uFF0C\u968F\u7740\u4EFB\u52A1\u6267\u884C\u6309\u9700\u589E\u957F\uFF0C\u6700\u5927\u53EF\u8FBE 1GB\uFF0864 \u4F4D\u673A\u5668\u6700\u5927\u662F 1G\uFF0C
32 \u4F4D\u673A\u5668\u6700\u5927\u662F 256M\uFF09\uFF0C\u4E14\u5B8C\u5168\u7531 golang \u81EA\u5DF1\u7684\u8C03\u5EA6\u5668 Go Scheduler \u6765\u8C03\u5EA6\u3002\u6B64\u5916\uFF0CGC \u8FD8\u4F1A\u5468\u671F\u6027\u5730\u5C06\u4E0D\u518D\u4F7F\u7528\u7684\u5185\u5B58\u56DE\u6536\uFF0C\u6536\u7F29\u6808\u7A7A\u95F4\u3002 \u56E0\u6B64\uFF0CGo \u7A0B\u5E8F\u53EF\u4EE5\u540C\u65F6\u5E76\u53D1\u6210\u5343\u4E0A\u4E07\u4E2A goroutine \u662F\u5F97\u76CA\u4E8E\u5B83\u5F3A\u52B2\u7684\u8C03\u5EA6\u5668\u548C
\u9AD8\u6548\u7684\u5185\u5B58\u6A21\u578B\u3002

G: \u8868\u793A Goroutine\uFF0C\u6BCF\u4E2A Goroutine \u5BF9\u5E94\u4E00\u4E2A G \u7ED3\u6784\u4F53\uFF0CG \u5B58\u50A8 Goroutine \u7684\u8FD0\u884C\u5806\u6808\u3001\u72B6\u6001\u4EE5\u53CA\u4EFB\u52A1\u51FD\u6570\uFF0C\u53EF\u91CD\u7528\u3002G \u5E76\u975E\u6267\u884C\u4F53\uFF0C\u6BCF\u4E2A G \u9700\u8981\u7ED1\u5B9A\u5230 P \u624D\u80FD\u88AB\u8C03\u5EA6\u6267\u884C\u3002

P: Processor\uFF0C\u8868\u793A\u903B\u8F91\u5904\u7406\u5668\uFF0C \u5BF9 G \u6765\u8BF4\uFF0CP \u76F8\u5F53\u4E8E CPU \u6838\uFF0CG \u53EA\u6709\u7ED1\u5B9A\u5230 P(\u5728 P \u7684 local runq \u4E2D)\u624D\u80FD\u88AB\u8C03\u5EA6\u3002\u5BF9 M \u6765\u8BF4\uFF0CP \u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u6267\u884C\u73AF\u5883(Context)\uFF0C\u5982\u5185
\u5B58\u5206\u914D\u72B6\u6001(mcache)\uFF0C\u4EFB\u52A1\u961F\u5217(G)\u7B49\uFF0CP \u7684\u6570\u91CF\u51B3\u5B9A\u4E86\u7CFB\u7EDF\u5185\u6700\u5927\u53EF\u5E76\u884C\u7684 G \u7684\u6570\u91CF\uFF08\u524D\u63D0\uFF1A\u7269\u7406 CPU \u6838\u6570 &gt;= P \u7684\u6570\u91CF\uFF09\uFF0CP \u7684\u6570\u91CF\u7531\u7528\u6237\u8BBE\u7F6E\u7684 GOMAXPROCS \u51B3\u5B9A\uFF0C\u4F46\u662F\u4E0D\u8BBA
 GOMAXPROCS \u8BBE\u7F6E\u4E3A\u591A\u5927\uFF0CP \u7684\u6570\u91CF\u6700\u5927\u4E3A 256\u3002

M: Machine\uFF0COS \u7EBF\u7A0B\u62BD\u8C61\uFF0C\u4EE3\u8868\u7740\u771F\u6B63\u6267\u884C\u8BA1\u7B97\u7684\u8D44\u6E90\uFF0C\u5728\u7ED1\u5B9A\u6709\u6548\u7684 P \u540E\uFF0C\u8FDB\u5165 schedule \u5FAA\u73AF\uFF1B\u800C schedule \u5FAA\u73AF\u7684\u673A\u5236\u5927\u81F4\u662F\u4ECE Global \u961F\u5217\u3001P \u7684 Local \u961F\u5217\u4EE5\u53CA wait
\u961F\u5217\u4E2D\u83B7\u53D6 G\uFF0C\u5207\u6362\u5230 G \u7684\u6267\u884C\u6808\u4E0A\u5E76\u6267\u884C G \u7684\u51FD\u6570\uFF0C\u8C03\u7528 goexit \u505A\u6E05\u7406\u5DE5\u4F5C\u5E76\u56DE\u5230 M\uFF0C\u5982\u6B64\u53CD\u590D\u3002M \u5E76\u4E0D\u4FDD\u7559 G \u72B6\u6001\uFF0C\u8FD9\u662F G \u53EF\u4EE5\u8DE8 M \u8C03\u5EA6\u7684\u57FA\u7840\uFF0CM \u7684\u6570\u91CF\u662F\u4E0D\u5B9A\u7684\uFF0C\u7531
Go Runtime \u8C03\u6574\uFF0C\u4E3A\u4E86\u9632\u6B62\u521B\u5EFA\u8FC7\u591A OS \u7EBF\u7A0B\u5BFC\u81F4\u7CFB\u7EDF\u8C03\u5EA6\u4E0D\u8FC7\u6765\uFF0C\u76EE\u524D\u9ED8\u8BA4\u6700\u5927\u9650\u5236\u4E3A 10000 \u4E2A\u3002

\u6BCF\u4E2A P \u7EF4\u62A4\u4E00\u4E2A G \u7684\u672C\u5730\u961F\u5217\uFF1B
\u5F53\u4E00\u4E2A G \u88AB\u521B\u5EFA\u51FA\u6765\uFF0C\u6216\u8005\u53D8\u4E3A\u53EF\u6267\u884C\u72B6\u6001\u65F6\uFF0C\u5C31\u628A\u4ED6\u653E\u5230 P \u7684\u672C\u5730\u53EF\u6267\u884C\u961F\u5217\u4E2D\uFF0C\u5982\u679C\u6EE1\u4E86\u5219\u653E\u5165Global\uFF1B
\u5F53\u4E00\u4E2A G \u5728 M \u91CC\u6267\u884C\u7ED3\u675F\u540E\uFF0CP \u4F1A\u4ECE\u961F\u5217\u4E2D\u628A\u8BE5 G \u53D6\u51FA\uFF1B\u5982\u679C\u6B64\u65F6 P \u7684\u961F\u5217\u4E3A\u7A7A\uFF0C\u5373\u6CA1\u6709\u5176\u4ED6 G \u53EF\u4EE5\u6267\u884C\uFF0C M \u5C31\u968F\u673A\u9009\u62E9\u53E6\u5916\u4E00\u4E2A P\uFF0C\u4ECE\u5176\u53EF\u6267\u884C\u7684 G \u961F\u5217\u4E2D\u53D6\u8D70\u4E00\u534A\u3002

\u8C03\u5EA6\u7B97\u6CD5\u5982\u4E0B:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=["src"],b=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8C03\u5EA6\u8FC7\u7A0B:
\u5F53\u901A\u8FC7 go \u5173\u952E\u5B57\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 goroutine \u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u4F18\u5148\u88AB\u653E\u5165 P \u7684\u672C\u5730\u961F\u5217\u3002\u4E3A\u4E86\u8FD0\u884C goroutine\uFF0CM \u9700\u8981\u6301\u6709\uFF08\u7ED1\u5B9A\uFF09\u4E00\u4E2A P\uFF0C\u63A5\u7740 M \u4F1A\u542F\u52A8\u4E00\u4E2A OS \u7EBF\u7A0B\uFF0C\u5FAA\u73AF\u4ECE P \u7684\u672C\u5730
\u961F\u5217\u91CC\u53D6\u51FA\u4E00\u4E2A goroutine \u5E76\u6267\u884C\u3002\u6267\u884C\u8C03\u5EA6\u7B97\u6CD5\uFF1A\u5F53 M \u6267\u884C\u5B8C\u4E86\u5F53\u524D P \u7684 Local \u961F\u5217\u91CC\u7684\u6240\u6709 G \u540E\uFF0CP \u4E5F\u4E0D\u4F1A\u5C31\u8FD9\u4E48\u5728\u90A3\u5212\u6C34\u5565\u90FD\u4E0D\u5E72\uFF0C\u5B83\u4F1A\u5148\u5C1D\u8BD5\u4ECE Global \u961F\u5217\u5BFB\u627E G \u6765\u6267\u884C\uFF0C
\u5982\u679C Global \u961F\u5217\u4E3A\u7A7A\uFF0C\u5B83\u4F1A\u968F\u673A\u6311\u9009\u53E6\u5916\u4E00\u4E2A P\uFF0C\u4ECE\u5B83\u7684\u961F\u5217\u91CC\u4E2D\u62FF\u8D70\u4E00\u534A\u7684 G \u5230\u81EA\u5DF1\u7684\u961F\u5217\u4E2D\u6267\u884C\u3002

\u53C2\u8003\uFF1A
https://www.minazuki.cn/post/blog_os/blog_os-1btagnqm2aabq/blog_os-1bti5cvfu5of1/ //\u7406\u8BBA
https://blog.csdn.net/guoafite/article/details/114833136 //\u7406\u8BBA

https://www.kuangstudy.com/bbs/1359135859894509570 //\u7406\u8BBA

https://blog.csdn.net/u010853261/article/details/85887948 //gopark()[\u7528\u4E8E\u534F\u7A0B\u7684\u5207\u6362], goready()[\u4E3B\u8981\u529F\u80FD\u5C31\u662F\u5524\u9192\u67D0\u4E00\u4E2Agoroutine\uFF0C\u8BE5\u534F\u7A0B\u8F6C\u6362\u5230runnable\u7684\u72B6\u6001\uFF0C\u5E76\u5C06\u5176\u653E\u5165P\u7684local queue\uFF0C\u7B49\u5F85\u8C03\u5EA6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>7.\u4EC0\u4E48\u662Frune\u7C7B\u578B?
rune \u662F int32\u7684\u522B\u540D\uFF0C\u4E3B\u8981\u7528\u5177\u8BA1\u7B97\u4E0D\u540C\u5B57\u7B26\u4E0B\u5B57\u7B26\u4E32\u7684\u771F\u5B9E\u957F\u5EA6\u3002(\u53C2\u8003\u53E6\u4E00\u7BC7\u6587\u7AE0\uFF1Ago\u4E4Brune\u5173\u952E\u5B57)

8.struct\u80FD\u4E0D\u80FD\u6BD4\u8F83?
\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\u4E4B\u524D\u5148\u770B\u4E00\u4E0Bgolang\u4E2D\u54EA\u4E9B\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u6BD4\u8F83\u54EA\u4E9B\u4E0D\u53EF\u4EE5\u6BD4\u8F83
\u53EF\u6BD4\u8F83\uFF1AInteger\uFF0CFloating\uFF0CString\uFF0CBoolean\uFF0CComplex(\u590D\u6570\u578B)\uFF0CPointer\uFF0CChannel\uFF0CInterface\uFF0CArray
\u4E0D\u53EF\u6BD4\u8F83\uFF1ASlice\uFF0CMap\uFF0CFunction

func TestCompare(t *testing.T) {
	//\u90FD\u662F\u53EF\u6BD4\u8F83\u6210\u5458
	type S struct {
		Name    string
		Age     int
		Address *int
	}

	//\u6CA1\u6709\u521D\u59CB\u5316\u7684\u65F6\u5019 \u90FD\u662Fnil
	//var a S
	//var b S

	//=== RUN   TestCompare
	//true
	//--- PASS: TestCompare (0.00s)
	//PASS
	//fmt.Println(a == b)

	// \u5206\u522B\u521D\u59CB\u5316
	var n = 1
	var m = 2
	a := S{
		Name:    &quot;aa&quot;,
		Age:     1,
		Address: &amp;n,
	}
	b := S{
		Name:    &quot;aa&quot;,
		Age:     1,
		Address: &amp;m, // \u82E5\u662F&amp;n,\u5C31\u8FD4\u56DEtrue, \u5982\u662F&amp;m,\u5C31\u8FD4\u56DEfalse,\u56E0\u4E3A \u6307\u9488\u6307\u5411\u7684\u5730\u5740\u4E0D\u4E00\u6837
	}

	//=== RUN   TestCompare
	//true
	//--- PASS: TestCompare (0.00s)
	//PASS
	fmt.Println(a == b)

	//\u7ED3\u8BBA\uFF1Agolang\u4E2D Slice\uFF0CMap\uFF0CFunction \u8FD9\u4E09\u79CD\u6570\u636E\u7C7B\u578B\u662F\u4E0D\u53EF\u4EE5\u76F4\u63A5\u6BD4\u8F83\u7684\u3002\u6211\u4EEC\u518D\u770B\u770BS\u7ED3\u6784\u4F53\uFF0C\u8BE5\u7ED3\u6784\u4F53\u5E76\u6CA1\u6709\u5305\u542B\u4E0D\u53EF\u6BD4\u8F83\u7684\u6210\u5458\u53D8\u91CF\uFF0C\u6240\u4EE5\u8BE5\u7ED3\u6784\u4F53\u662F\u53EF\u4EE5\u76F4\u63A5\u6BD4\u8F83\u7684\u3002



	//\u5305\u542B\u4E0D\u53EF\u6BD4\u8F83\u6210\u5458
	type S2 struct {
		Name    string
		Age     int
		Address *int
		Data    []int
	}

	a2 := S2{
		Name:    &quot;aa&quot;,
		Age:     1,
		Address: new(int),
		Data:    []int{1, 2, 3},
	}
	b2 := S2{
		Name:    &quot;aa&quot;,
		Age:     1,
		Address: new(int),
		Data:    []int{1, 2, 3},
	}

	//\u8FD9\u6837 \u76F4\u63A5\u7F16\u8F91\u5668\u62A5\u9519\uFF0C\u56E0\u4E3A S2\u5305\u542B\u4E0D\u53EF\u6BD4\u8F83\u7C7B\u578B
	//fmt.Println(a2 == b2)

	//\u901A\u8FC7 reflect.DeepEqual  \u53CD\u5C04\u4E2D\u7684\u51FD\u6570\u8FDB\u884C\u6BD4\u8F83\u662F\u53EF\u4EE5\u7684
	//=== RUN   TestCompare
	//true
	//--- PASS: TestCompare (0.00s)
	//PASS
	fmt.Println(reflect.DeepEqual(a2, b2))

	//\u62D3\u5C55\uFF1A
	//DeepEqual\u51FD\u6570\u7528\u6765\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u6DF1\u5EA6\u4E00\u81F4\u3002\u5177\u4F53\u6BD4\u8F83\u89C4\u5219\u5982\u4E0B\uFF1A
	//
	//\u4E0D\u540C\u7C7B\u578B\u7684\u503C\u6C38\u8FDC\u4E0D\u4F1A\u6DF1\u5EA6\u76F8\u7B49\u5F53\u4E24\u4E2A\u6570\u7EC4\u7684\u5143\u7D20\u5BF9\u5E94\u6DF1\u5EA6\u76F8\u7B49\u65F6\uFF0C\u4E24\u4E2A\u6570\u7EC4\u6DF1\u5EA6\u76F8\u7B49\u5F53\u4E24\u4E2A\u76F8\u540C\u7ED3\u6784\u4F53\u7684\u6240\u6709\u5B57\u6BB5\u5BF9\u5E94\u6DF1\u5EA6\u76F8\u7B49\u7684\u65F6\u5019\uFF0C\u4E24\u4E2A\u7ED3\u6784\u4F53\u6DF1\u5EA6\u76F8\u7B49\u5F53\u4E24\u4E2A\u51FD\u6570\u90FD\u4E3Anil\u65F6\uFF0C\u4E24\u4E2A\u51FD\u6570\u6DF1\u5EA6\u76F8\u7B49\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0D\u76F8\u7B49\uFF08\u76F8\u540C\u51FD\u6570\u4E5F\u4E0D\u76F8\u7B49\uFF09\u5F53\u4E24\u4E2Ainterface\u7684\u771F\u5B9E\u503C\u6DF1\u5EA6\u76F8\u7B49\u65F6\uFF0C\u4E24\u4E2Ainterface\u6DF1\u5EA6\u76F8\u7B49map\u7684\u6BD4\u8F83\u9700\u8981\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u51E0\u4E2A
	//
	//\u4E24\u4E2Amap\u90FD\u4E3Anil\u6216\u8005\u90FD\u4E0D\u4E3Anil\uFF0C\u5E76\u4E14\u957F\u5EA6\u8981\u76F8\u7B49\u76F8\u540C\u7684map\u5BF9\u8C61\u6216\u8005\u6240\u6709key\u8981\u5BF9\u5E94\u76F8\u540Cmap\u5BF9\u5E94\u7684value\u4E5F\u8981\u6DF1\u5EA6\u76F8\u7B49
	//\u6307\u9488\uFF0C\u6EE1\u8DB3\u4EE5\u4E0B\u5176\u4E00\u5373\u662F\u6DF1\u5EA6\u76F8\u7B49
	//
	//\u4E24\u4E2A\u6307\u9488\u6EE1\u8DB3go\u7684==\u64CD\u4F5C\u7B26\u4E24\u4E2A\u6307\u9488\u6307\u5411\u7684\u503C\u662F\u6DF1\u5EA6\u76F8\u7B49\u7684
	//\u5207\u7247\uFF0C\u9700\u8981\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u51E0\u70B9\u624D\u662F\u6DF1\u5EA6\u76F8\u7B49
	//
	//\u4E24\u4E2A\u5207\u7247\u90FD\u4E3Anil\u6216\u8005\u90FD\u4E0D\u4E3Anil\uFF0C\u5E76\u4E14\u957F\u5EA6\u8981\u76F8\u7B49\u4E24\u4E2A\u5207\u7247\u5E95\u5C42\u6570\u636E\u6307\u5411\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u8981\u76F8\u540C\u6216\u8005\u5E95\u5C42\u7684\u5143\u7D20\u8981\u6DF1\u5EA6\u76F8\u7B49\u6CE8\u610F\uFF1A\u7A7A\u7684\u5207\u7247\u8DDFnil\u5207\u7247\u662F\u4E0D\u6DF1\u5EA6\u76F8\u7B49\u7684
	//\u5176\u4ED6\u7C7B\u578B\u7684\u503C\uFF08numbers, bools, strings, channels\uFF09\u5982\u679C\u6EE1\u8DB3go\u7684==\u64CD\u4F5C\u7B26\uFF0C\u5219\u662F\u6DF1\u5EA6\u76F8\u7B49\u7684\u3002\u8981\u6CE8\u610F\u4E0D\u662F\u6240\u6709\u7684\u503C\u90FD\u6DF1\u5EA6\u76F8\u7B49\u4E8E\u81EA\u5DF1\uFF0C\u4F8B\u5982\u51FD\u6570\uFF0C\u4EE5\u53CA\u5D4C\u5957\u5305\u542B\u8FD9\u4E9B\u503C\u7684\u7ED3\u6784\u4F53\uFF0C\u6570\u7EC4\u7B49



	//\u4E24\u4E2A\u4E0D\u540C\u7684\u7ED3\u6784\u4F53\u5B9E\u4F8B,\u5982\u679CS3 S4\u6210\u5458\u4E0D\u540C\uFF0C\u4E00\u5B9A\u4E5F\u662F\u4E0D\u80FD\u6BD4\u8F83\u7684
	type S3 struct {
		Name string
		Age  int
		Arr  [2]bool
		ptr  *int
	}
	type S4 struct {
		Name string
		Age  int
		Arr  [2]bool
		ptr  *int
	}

	var k = 1
	var j = 2
	var a3 = S3{
		Name: &quot;aa&quot;,
		Age:  1,
		Arr:  [2]bool{true, false},
		ptr:  &amp;k,
	}
	var b3 = S4{
		Name: &quot;aa&quot;,
		Age:  1,
		Arr:  [2]bool{true, false},
		ptr:  &amp;j,//\u82E5\u662F&amp;k,\u5C31\u8FD4\u56DEtrue, \u5982\u662F&amp;j,\u5C31\u8FD4\u56DEfalse,\u56E0\u4E3A \u6307\u9488\u6307\u5411\u7684\u5730\u5740\u4E0D\u4E00\u6837
	}

	//\u7531\u4E8E\u7ED3\u6784\u4F53\u7C7B\u578B\u4E0D\u4E00\u6837\uFF0C\u7F16\u8F91\u5668\u62A5\u9519\uFF0C\u4E0D\u80FD\u6BD4\u8F83
	//fmt.Println(a3 == b3)

	//\u7C7B\u578B\u5F3A\u8F6C\u4EE5\u540E\uFF0C\u5C31\u53EF\u4EE5\u6BD4\u8F83\u4E86
	//=== RUN   TestCompare
	//false
	//--- PASS: TestCompare (0.00s)
	//PASS
	fmt.Println(a3 == S3(b3))
}

\u6839\u636E\u4E0A\u9762\u7684\u8BBA\u8BC1\u53EF\u4EE5\u77E5\u9053\uFF1A\u7ED3\u6784\u4F53\u80FD\u4E0D\u80FD\u6BD4\u8F83\u662F\u8981\u5206\u60C5\u51B5\u7684

9.struct\u53EF\u4EE5\u4F5C\u4E3Amap\u7684key\u5417?
func TestMapKey(t *testing.T)  {
	type S1 struct {
		Name  string
		Age   int
		Arr   [2]bool
		ptr   *int
		slice []int
		map1  map[string]string
	}

	type S2 struct {
		Name string
		Age  int
		Arr  [2]bool
		ptr  *int
	}

	n := make(map[S2]string, 0) // \u65E0\u62A5\u9519
	//=== RUN   TestMapKey
	//map[]--- PASS: TestMapKey (0.00s)
	//PASS
	fmt.Print(n)

	//m := make(map[S1]string, 0)//Invalid map key type: comparison operators == and != must be fully defined for the key type
	//fmt.Println(m)
}

\u6839\u636E\u4E0A\u9762\u7684\u8BBA\u8BC1\u53EF\u4EE5\u77E5\u9053\uFF1Astruct\u5FC5\u987B\u662F\u53EF\u6BD4\u8F83\u7684\uFF0C\u624D\u80FD\u4F5C\u4E3Akey\uFF0C\u5426\u5219\u7F16\u8BD1\u65F6\u62A5\u9519

10.\u5982\u4F55\u5224\u65ADmap\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E2Akey?

func TestMapKeyExist(t *testing.T){
	demo := map[string]string{
		&quot;age&quot;: &quot;12345&quot;,
	}

	//\u5224\u65AD\u65B9\u6CD5
	if v, ok := demo[&quot;age&quot;]; ok {
		fmt.Println(v)
	}
}

11.map\u5982\u4F55\u987A\u5E8F\u8BFB\u53D6?
\u89E3\u51B3\u65B9\u6848\uFF1A\u901A\u8FC7sort\u4E2D\u7684\u6392\u5E8F\u5305\u8FDB\u884C\u5BF9map\u4E2D\u7684key\u8FDB\u884C\u6392\u5E8F\u3002\u7136\u540E\u904D\u5386key
func TestMapOrder(t *testing.T){
	var m = map[string]int{
		&quot;9&quot;: 0,
		&quot;2&quot;: 1,
		&quot;5&quot;: 2,
		&quot;1&quot;: 3,
	}
	var keys []string
	for k := range m {
		keys = append(keys, k)
	}

	sort.Strings(keys)      //\u5347\u5E8F
	for _, k := range keys {
		fmt.Println(&quot;Key:&quot;, k, &quot;Value:&quot;, m[k])
	}
}

=== RUN   TestMapOrder
Key: 1 Value: 3
Key: 2 Value: 1
Key: 5 Value: 2
Key: 9 Value: 0
--- PASS: TestMapOrder (0.00s)
PASS

12.\u5173\u4E8Eswitch\u8BED\u53E5\uFF0C\u4E0B\u9762\u8BF4\u6CD5\u6B63\u786E\u7684\u662F\uFF1F
   A. \u5355\u4E2Acase\u4E2D\uFF0C\u53EF\u4EE5\u51FA\u73B0\u591A\u4E2A\u7ED3\u679C\u7684\u9009\u9879\uFF1B
   B. \u9700\u8981\u4F7F\u7528break\u6765\u660E\u786E\u9000\u51FA\u4E00\u4E2Acase\uFF1B
   C. \u53EA\u6709\u5728case\u4E2D\u660E\u786E\u6DFB\u52A0fallthrought\u5173\u952E\u5B57\uFF0C\u624D\u4F1A\u7EE7\u7EED\u6267\u884C\u7D27\u8DDF\u7684\u4E0B\u4E00\u4E2Acase\uFF1B
   D. \u6761\u4EF6\u8868\u8FBE\u5F0F\u5FC5\u987B\u4E3A\u5E38\u91CF\u6216\u8005\u6574\u6570\u3002

   AC

   \u5206\u6790\uFF1A
   \u652F\u6301\u591A\u6761\u4EF6\u5339\u914D\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u9694\uFF0C\u4F8B\u5982\uFF1Acase val1,val2,val3
   \u4E0D\u540C\u7684case\u4E4B\u95F4\u4E0D\u4F7F\u7528break\u5206\u9694\uFF0C\u9ED8\u8BA4\u81EA\u5E26break\uFF0C\u53EA\u4F1A\u6267\u884C\u4E00\u4E2Acase;
   \u5982\u679C\u60F3\u8981\u6267\u884C\u591A\u4E2Acase\uFF0C\u9700\u8981\u4F7F\u7528fallthrought\u5173\u952E\u5B57\uFF0C\u4E14\u4E0D\u4F1A\u5224\u65AD\u4E0B\u4E00\u4E2Acase\u7684\u8868\u8FBE\u5F0F\u662F\u5426 \u4E3Atrue;\u4E5F\u53EF\u4EE5\u4F7F\u7528break\u7EC8\u6B62\u3002
   switch\u8BED\u53E5\u8FD8\u53EF\u4EE5\u88AB\u7528\u4E8Etype-switch\u6765\u5224\u65AD\u67D0\u4E2Ainterface\u53D8\u91CF\u4E2D\u5B9E\u9645\u5B58\u50A8\u7684\u53D8\u91CF\u7C7B\u578B\u3002\u5982\uFF1Aswitch i := x.(type){}

13.\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u6253\u5370\u4EC0\u4E48?
func TestSwitch(t *testing.T) {
	switch alwaysFalse()
	{
	case true:
		fmt.Println(true)
	case false:
		fmt.Println(false)
	}

	// \u4EE3\u7801\u4E2D\uFF0Cswitch\u540E\u9762\u6CA1\u6709\u8DDF{\uFF0C\u800C\u662F\u53E6\u8D77\u4E86\u4E00\u884C\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CalwaysFalse\u540E\u81EA\u52A8\u6DFB\u52A0\u4E86\u5206\u53F7&quot;\uFF1B&quot;\uFF0C\u4E0A\u8FF0\u4EE3\u7801\u7B49\u4EF7\u4E8E\uFF1A
	//switch alwaysFalse(); true {
	//case true: fmt.Println(&quot;true&quot;)
	//case false: fmt.Println(&quot;false&quot;)
	//}
	// \u6240\u4EE5\u4F1A\u8FD4\u56DE true\uFF0C\u5982\u679C { \u6CA1\u6709\u6362\u884C \u5C31\u8FD4\u56DE false
}

14.\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u6253\u5370\u4EC0\u4E48?
func print()  {
	//\u8FD9\u91CC\u76F8\u5F53\u4E8E\u5427 GPM \u4E2D\u7684P \u8BBE\u7F6E\u4E3A1,\u6240\u4EE5
	// for \u5FAA\u73AF\u7684\u65F6\u5019 \u4F1A\u5148\u6267\u884Cmain \u91CC\u7684 for\uFF0C\u5728\u6267\u884C go func\uFF0C\u5C31\u662F\u5148\u4E3B\u534F\u7A0B\u518D\u5B50\u534F\u7A0B\uFF0C\u6700\u540E\u5168\u90E8\u8F93\u51FA10
	//\u8FD9\u5B9E\u9645\u662F\u4E00\u4E2A \u534F\u7A0B\u5F15\u7528\u5FAA\u73AF\u53D8\u91CF\u7684\u95EE\u9898
	// \u89E3\u51B3\u529E\u6CD5\u662F\uFF0C\u518D\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF i2 := i\uFF0C\u5C06 i2\u4F20\u7ED9 func\uFF1B\u6216\u8005 \u7ED9func \u4F20\u9012\u53C2\u6570\uFF0C\u5C06 i \u4F20\u9012
	runtime.GOMAXPROCS(1)

	wg := sync.WaitGroup{}
	wg.Add(20)

	for i := 0; i &lt; 10; i++ {
		go func() {
			fmt.Println(i)
			wg.Done()
		}()
	}

	for j := 0; j &lt; 10; j++ {
		go func() {
			fmt.Println(j)
			wg.Done()
		}()
	}

	wg.Wait()
}
func TestWt(t *testing.T)  {
	print()
}

=== RUN   TestWt
2
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
--- PASS: TestWt (0.00s)
PASS


15.\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u6253\u5370\u4EC0\u4E48?
func TestDefer(t *testing.T){

	//\u8FD9\u4E2A\u7B80\u5355\uFF0Cdefer \u80AF\u5B9A\u6700\u540E\u6267\u884C,\u6240\u4EE5\u662F31
	if true {
		defer fmt.Println(&quot;1&quot;)
	}else {
		defer fmt.Println(&quot;2&quot;)
	}

	fmt.Println(&quot;3&quot;)
}

=== RUN   TestDefer
3
1
--- PASS: TestDefer (0.00s)
PASS

16.golang\u4E2D\u5927\u591A\u6570\u6570\u636E\u7C7B\u578B\u90FD\u53EF\u4EE5\u8F6C\u5316\u4E3A\u6709\u6548\u7684JSON\u6587\u672C\uFF0C\u4E0B\u9762\u51E0\u79CD\u7C7B\u578B\u9664\u5916\uFF08\uFF09

A \u6307\u9488

B channel

C complex

D \u51FD\u6570

BCD

\u5206\u6790\uFF1A
golang \u4E2D\u7684\u7C7B\u578B\u6BD4\u5982\uFF1Achannel\uFF08\u901A\u9053\uFF09\u3001complex\uFF08\u590D\u6570\u7C7B\u578B\uFF09\u3001func\uFF08\u51FD\u6570\uFF09\u5747\u4E0D\u80FD\u8FDB\u884C JSON \u683C\u5F0F\u5316\u3002
\u6709\u7591\u95EE\u7684\u5730\u65B9\u53EF\u80FD\u662F\u5728A\u9009\u9879\u6307\u9488\u3002
\u5176\u5B9E Pointer\uFF08\u6307\u9488\uFF09\u4E5F\u662F\u80FD\u88AB JSON \u683C\u5F0F\u5316\u7684\uFF0C\u56E0\u4E3A\u6307\u9488\u4F1A\u88AB\u7CFB\u7EDF\u9690\u5F0F\u8F6C\u6362\u4E3A\u6307\u9488\u6240\u6307\u5411\u7684\u5177\u4F53\u5BF9\u8C61\u503C\uFF0C\u5177\u4F53\u7684\u5BF9\u8C61\u503C\u662F\u53EF\u4EE5\u88ABJSON\u683C\u5F0F\u5316\u7684\u3002


17.\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u6253\u5370\u4EC0\u4E48?
func printEx(x int) (func(), func()) {
	return func() {
		println(x)
		x += 10
		},
		func() {
			println(x)
		}
}

func TestCodeExec(t *testing.T)  {
	a, b := printEx(1)
	a()
	b()
}

//\u7ED3\u679C\u5982\u4E0B
//=== RUN   TestCodeExec
//1
//11
//--- PASS: TestCodeExec (0.00s)
//PASS


18.\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u6253\u5370\u4EC0\u4E48?
func TestCodeExec(t *testing.T)  {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println(&quot;++++&quot;)
			f := err.(func() string) // err \u662F\u4E00\u4E2Afunc\u7C7B\u578B\uFF0C\u6253\u5370\u51FA\u4E00\u4E2A 0x894040 \u8BF4\u660E func\u662F\u5F15\u7528\u7C7B\u578B
			fmt.Println(err,&quot;--&quot;, f(),&quot;--&quot;, reflect.TypeOf(err).Kind().String())
		}else {
			fmt.Println(&quot;fatal&quot;)
		}
	}()

	//\u8FD9\u4E2Adefer \u4F1A\u6BD4\u4E0A\u9762\u7684\u5148\u6267\u884C
	defer func() {
		panic(func() string {
			return &quot;defer panic&quot;
		})
	}()

	//\u8FD9\u4E2Adefer \u4F1A\u6BD4\u4E0A\u9762\u7684\u5148\u6267\u884C
	defer func() {
		panic(func() string {
			return &quot;defer panic2&quot;
		})
	}()

	//\u6700\u5148\u6267\u884C
	panic(&quot;panic&quot;)


	//=== RUN   TestCodeExec
	//++++
	//0x894040 -- defer panic -- func
	//--- PASS: TestCodeExec (0.00s)
	//PASS

	\u7ED3\u8BBA\uFF1A
	\u5982\u679C\u8FC7\u6709\u591A\u4E2Apanic,\u90A3\u4E48\u6700\u7EC8 recover \u4F1A\u62E6\u622A\u6700\u540E\u7684\u90A3\u4E2Apanic\u7684\u9519\u8BEF
}

19.golang\u4E2D\u7684\u5F15\u7528\u7C7B\u578B\u5305\u62EC\uFF08\uFF09
A.\u6570\u7EC4

B.map

C.channel

D.interface

BCD

\u89E3\u6790\uFF1Ago\u4E2D\u5F15\u7528\u7C7B\u578B\u6709:\u6307\u9488\u3001slice\u5207\u7247\u3001\u7BA1\u9053channel\u3001\u63A5\u53E3interface\u3001map\u3001\u51FD\u6570\u7B49

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(s,f){return a(),l("div",null,[d,i("img",{src:s.$withBase("/images/interview/user_thread.png"),style:{width:"100%"}},null,8,c),v,i("img",{src:s.$withBase("/images/interview/inner_thread.png"),style:{width:"100%"}},null,8,u),r,i("img",{src:s.$withBase("/images/interview/mix_thread.png"),style:{width:"100%"}},null,8,o),p,i("img",{src:s.$withBase("/images/interview/gpm_schedule.png"),style:{width:"100%"}},null,8,m),b])}var h=e(t,[["render",k],["__file","golang\u9762\u8BD5\u98982022_10_19.html.vue"]]);export{h as default};
