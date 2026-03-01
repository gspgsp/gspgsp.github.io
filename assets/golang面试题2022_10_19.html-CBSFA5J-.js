import{_ as l,c as e,f as s,b as i,o as p}from"./app-BB_BIQV8.js";const c={},t=["src"],d=["src"],v=["src"],u=["src"];function r(a,n){return p(),e("div",null,[n[0]||(n[0]=s(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.什么是协程泄露(goroutine leak)?</span>
<span class="line">协程泄露是指，在程序运行过程中，有一些协程由于某些原因，无法正常退出。</span>
<span class="line"></span>
<span class="line">2.协程泄露的危害?</span>
<span class="line">协程的运行是需要占用内存和 CPU 时间的，一旦这种协程越来越多，会导致内存无端被浪费，CPU 时间片被占用，程序会越来越卡。</span>
<span class="line"></span>
<span class="line">3.协程泄露的原因?</span>
<span class="line">goroutine由于channel的读/写端退出而一直阻塞，导致goroutine一直占用资源，而无法退出。</span>
<span class="line">goroutine由于nil channel而阻塞。</span>
<span class="line">goroutine进入死循环中，导致资源一直无法释放。</span>
<span class="line">goroutine同步锁(mutex)操作不当导致</span>
<span class="line">goroutine waitgroup Add的数量和Done的数量不一致，导致一直Wait</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是几种场景：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> test</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;fmt&quot;</span></span>
<span class="line">	<span class="token string">&quot;math/rand&quot;</span></span>
<span class="line">	<span class="token string">&quot;os&quot;</span></span>
<span class="line">	<span class="token string">&quot;runtime&quot;</span></span>
<span class="line">	<span class="token string">&quot;testing&quot;</span></span>
<span class="line">	<span class="token string">&quot;time&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line">泄露场景1-以及解决办法</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">TestChanLeak</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	randomStream <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>done <span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">{</span></span>
<span class="line">		rsc <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;当前协程结束...&quot;</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>rsc<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">			<span class="token keyword">for</span>  <span class="token punctuation">{</span></span>
<span class="line">				<span class="token keyword">select</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token keyword">case</span> x<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span></span>
<span class="line">					<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span></span>
<span class="line">						fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x is:&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token comment">// x is: &lt;nil&gt;</span></span>
<span class="line">					<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">					<span class="token keyword">return</span></span>
<span class="line">				<span class="token keyword">case</span> rsc <span class="token operator">&lt;-</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>send 阻塞</span>
<span class="line">				<span class="token punctuation">}</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">return</span> rsc</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//channel关闭，也可以通过 contextWithCancel 来结束 goroutine</span></span>
<span class="line">	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//调用</span></span>
<span class="line">	rst <span class="token operator">:=</span> <span class="token function">randomStream</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;start...&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;rand is:&quot;</span><span class="token punctuation">,</span><span class="token operator">&lt;-</span>rst<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// close的特性</span></span>
<span class="line">	<span class="token comment">// After the last value has been received</span></span>
<span class="line">	<span class="token comment">// from a closed channel c, any receive from c will succeed without</span></span>
<span class="line">	<span class="token comment">// blocking, returning the zero value for the channel element. The form</span></span>
<span class="line">	<span class="token comment">//	x, ok := &lt;-c</span></span>
<span class="line">	<span class="token comment">// will also set ok to false for a closed channel.</span></span>
<span class="line">	<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">//模拟一个耗时操作，10秒的延迟，在这期间  rst 还在阻塞</span></span>
<span class="line">	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line">泄露场景2-以及解决办法(这个解决办法就是主协程退出)</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">routineTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//进入入死循环</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;开启goroutine&quot;</span><span class="token punctuation">)</span></span>
<span class="line">		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">TestChan</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;开始...&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//通过 runtime.NumGoroutine() 获取当前运行的goroutine的数量</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">go</span> <span class="token function">routineTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;结束...&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line">泄露场景3-nil channel</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">TestNilChan</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the number of goroutines: &quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//ch 就是一个 nil channel, 因为只是声明，但是没有初始化这个ch就直接使用了</span></span>
<span class="line">	<span class="token keyword">var</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span></span>
<span class="line">	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token operator">&lt;-</span>ch <span class="token comment">// receive nil channel</span></span>
<span class="line">		<span class="token comment">// ch&lt;- // send nil channel</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//defer func() {</span></span>
<span class="line">	<span class="token comment">//	time.Sleep(time.Second)</span></span>
<span class="line">	<span class="token comment">//	fmt.Println(&quot;the number1 of goroutines: &quot;, runtime.NumGoroutine())</span></span>
<span class="line">	<span class="token comment">//}()</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//done := make(chan struct{})</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//var ch chan int</span></span>
<span class="line">	<span class="token comment">//go func() {</span></span>
<span class="line">	<span class="token comment">//	fmt.Println(&quot;the number2 of goroutines: &quot;, runtime.NumGoroutine())</span></span>
<span class="line">	<span class="token comment">//	defer close(done)</span></span>
<span class="line">	<span class="token comment">//}()</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">////fatal error: all goroutines are asleep - deadlock!</span></span>
<span class="line">	<span class="token comment">//select {</span></span>
<span class="line">	<span class="token comment">//case &lt;-ch:// The receive operation might block a goroutine because of the &#39;nil&#39; channel</span></span>
<span class="line">	<span class="token comment">//case &lt;-done:</span></span>
<span class="line">	<span class="token comment">//	return</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line">泄露场景4-waitGroup</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">TestWaitGroup</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the number1 of goroutines: &quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 无法退出</span></span>
<span class="line">	<span class="token keyword">go</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">4.无缓冲的channel和有缓冲的channel的区别?</span>
<span class="line"></span>
<span class="line">之前以为有缓冲与无缓冲的区别是 无缓冲的缓冲为 1 的缓冲式 ，其实不是的，无缓冲 就是缓冲为0，</span>
<span class="line"></span>
<span class="line">func TestCacheChannel(t *testing.T)  {</span>
<span class="line">	c := make(chan int, 0) // 或者 make(chan int)</span>
<span class="line">	//不带缓冲的channel可以通过Goroutine给当前channel的发送数据，不会阻塞线程，这个是什么原因还在研究，唯一的解释就是 不带缓冲的channel，的send 和 receive 不能是同一个 goroutine，必须要重新起一个goroutine</span>
<span class="line">    //go func() {</span>
<span class="line">    //	c &lt;- 1</span>
<span class="line">    //}()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	//c := make(chan int, 1)</span>
<span class="line">	//c &lt;- 1 //不带缓冲的channel 这里会阻塞，但是带缓冲就不会阻塞</span>
<span class="line"></span>
<span class="line">	fmt.Println(&lt;-c)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">二者区别就是一个会阻塞另一个不会阻塞(或者  同步与非同步的区别)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">5.channel 底层数据原理?</span>
<span class="line">通过var声明或者make函数创建的channel变量是一个存储在栈上的指针，占用8个字节，指向堆上的hchan结构体，该结构体在src/runtime/chan.go中</span>
<span class="line"></span>
<span class="line">type hchan struct {</span>
<span class="line">	qcount   uint           // total data in the queue</span>
<span class="line">	dataqsiz uint           // size of the circular queue</span>
<span class="line">	buf      unsafe.Pointer // points to an array of dataqsiz elements</span>
<span class="line">	elemsize uint16</span>
<span class="line">	closed   uint32</span>
<span class="line">	elemtype *_type // element type</span>
<span class="line">	sendx    uint   // send index</span>
<span class="line">	recvx    uint   // receive index</span>
<span class="line">	recvq    waitq  // list of recv waiters</span>
<span class="line">	sendq    waitq  // list of send waiters</span>
<span class="line"></span>
<span class="line">	// lock protects all fields in hchan, as well as several</span>
<span class="line">	// fields in sudogs blocked on this channel.</span>
<span class="line">	//</span>
<span class="line">	// Do not change another G&#39;s status while holding this lock</span>
<span class="line">	// (in particular, do not ready a G), as this can deadlock</span>
<span class="line">	// with stack shrinking.</span>
<span class="line">	lock mutex</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//G1</span>
<span class="line"></span>
<span class="line">func main(){</span>
<span class="line"></span>
<span class="line">    ...</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    for _, task :=  range hellaTasks {</span>
<span class="line"></span>
<span class="line">        ch &lt;- task     //sender</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    ...</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//G2</span>
<span class="line"></span>
<span class="line">func worker(ch  chan Task){</span>
<span class="line"></span>
<span class="line">    for {</span>
<span class="line"></span>
<span class="line">       //接受任务</span>
<span class="line"></span>
<span class="line">       task := &lt;- ch   //recevier</span>
<span class="line"></span>
<span class="line">       //假设设立会护理很长时间，那么 G1可能会阻塞</span>
<span class="line">       process(task)</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">其中G1是发送者，G2是接收，因为ch是长度为3的带缓冲channel，初始的时候hchan结构体的buf为空，sendx和recvx都为0，当G1向ch里发送数据的时候，会首先对buf加锁，然后将要发送的数据copy到buf里，并增加sendx的值，</span>
<span class="line">最后释放buf的锁。然后G2消费的时候首先对buf加锁，然后将buf里的数据copy到task变量对应的内存里，增加recvx，最后释放锁。整个过程，G1和G2没有共享的内存，底层通过hchan结构体的buf，使用copy内存的方式进行通信，</span>
<span class="line">最后达到了共享内存的目的，这完全符合CSP的设计理念。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">CSP 是 Communicating Sequential Process 的简称，中文可以叫做通信顺序进程，是一种并发编程模型。</span>
<span class="line">Golang，其实只用到了 CSP 的很小一部分，即理论中的 Process/Channel（对应到语言中的 goroutine/channel）</span>
<span class="line"></span>
<span class="line">G1和G2的调用涉及到golang的GPM模型</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">6.GPM模型原理?</span>
<span class="line">了解GPM模型之前，先分析一下线程的三种模型: 用户级线程模型、内核级线程模型和两级线程模型（也称混合型线程模型）</span>
<span class="line">它们之间最大的差异就在于用户线程与内核调度实体（KSE，Kernel Scheduling Entity）之间的对应关系上。而所谓的内核调度实体 KSE 就是指可以被操作系统内核调度器调度的对象实体。简单来说 KSE 就是内核级线程，</span>
<span class="line">是操作系统内核的最小调度单元，也就是我们写代码的时候通俗理解上的线程了。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">用户级线程模型:</span>
<span class="line">用户线程与内核线程 KSE 是一对一（1 : 1）的映射模型，也就是每一个用户线程绑定一个实际的内核线程，而线程的调度则完全交付给操作系统内核去做，应用程序对线程的创建、终止以及同步都基于内核提供的系统调用来完</span>
<span class="line">成，大部分编程语言的线程库(比如 Java 的 java.lang.Thread、C++11 的 std::thread 等等)都是对操作系统的线程（内核级线程）的一层封装，创建出来的每个线程与一个独立的 KSE 静态绑定，因此其调度完全由操作</span>
<span class="line">系统内核调度器去做，也就是说，一个进程里创建出来的多个线程每一个都绑定一个 KSE。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)),i("img",{src:a.$withBase("/images/interview/user_thread.png"),style:{width:"100%"}},null,8,t),n[1]||(n[1]=s(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">内核级线程模型:</span>
<span class="line">用户线程与内核线程 KSE 是多对一（N : 1）的映射模型，多个用户线程的一般从属于单个进程并且多线程的调度是由用户自己的线程库来完成，线程的创建、销毁以及多线程之间的协调等操作都是由用户自己的线程库来负责而</span>
<span class="line">无须借助系统调用来实现。一个进程中所有创建的线程都只和同一个 KSE 在运行时动态绑定，也就是说，操作系统只知道用户进程而对其中的线程是无感知的，内核的所有调度都是基于用户进程。这种实现方式相比内核级线程可</span>
<span class="line">以做的很轻量级，对系统资源的消耗会小很多，因此可以创建的线程数量与上下文切换所花费的代价也会小得多。但该模型有个原罪：并不能做到真正意义上的并发，假设在某个用户进程上的某个用户线程因为一个阻塞调用（比如</span>
<span class="line">I/O 阻塞）而被 CPU 给中断（抢占式调度）了，那么该进程内的所有线程都被阻塞（因为单个用户进程内的线程自调度是没有 CPU 时钟中断的，从而没有轮转调度），整个进程被挂起。即便是多 CPU 的机器，也无济于事，因</span>
<span class="line">为在用户级线程模型下，一个 CPU 关联运行的是整个用户进程，进程内的子线程绑定到 CPU 执行是由用户进程调度的，内部线程对 CPU 是不可见的，此时可以理解为 CPU 的调度单位是用户进程。所以很多的协程库会把自己一</span>
<span class="line">些阻塞的操作重新封装为完全的非阻塞形式，然后在以前要阻塞的点上，主动让出自己，并通过某种方式通知或唤醒其他待执行的用户线程在该 KSE 上运行，从而避免了内核调度器由于 KSE 阻塞而做上下文切换，这样整个进程</span>
<span class="line">也不会被阻塞了。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),i("img",{src:a.$withBase("/images/interview/inner_thread.png"),style:{width:"100%"}},null,8,d),n[2]||(n[2]=s(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">两级线程模型:</span>
<span class="line">用户线程与内核 KSE 是多对多（N : M）的映射模型：首先，区别于用户级线程模型，两级线程模型中的一个进程可以与多个内核线程 KSE 关联，也就是说一个进程内的多个线程可以分别绑定一个自己的 KSE，这点和内核级线</span>
<span class="line">程模型相似；其次，又区别于内核级线程模型，它的进程里的线程并不与 KSE 唯一绑定，而是可以多个用户线程映射到同一个 KSE，当某个 KSE 因为其绑定的线程的阻塞操作被内核调度出 CPU 时，其关联的进程中其余用户线</span>
<span class="line">程可以重新与其他 KSE 绑定运行。即用户调度器实现用户线程到 KSE 的『调度』，内核调度器实现 KSE 到 CPU 上的『调度』。Go语言中的并发就是使用的这种实现方式，Go为了实现该模型自己实现了一个运行时调度器来负</span>
<span class="line">责Go中的&quot;线程&quot;与KSE的动态关联。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),i("img",{src:a.$withBase("/images/interview/mix_thread.png"),style:{width:"100%"}},null,8,v),n[3]||(n[3]=s(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GPM模型:</span>
<span class="line">在 Go 语言中，每一个 goroutine 是一个独立的执行单元，相较于每个 OS 线程固定分配 2M 内存的模式，goroutine 的栈采取了动态扩容方式， 初始时仅为2KB，随着任务执行按需增长，最大可达 1GB（64 位机器最大是 1G，</span>
<span class="line">32 位机器最大是 256M），且完全由 golang 自己的调度器 Go Scheduler 来调度。此外，GC 还会周期性地将不再使用的内存回收，收缩栈空间。 因此，Go 程序可以同时并发成千上万个 goroutine 是得益于它强劲的调度器和</span>
<span class="line">高效的内存模型。</span>
<span class="line"></span>
<span class="line">G: 表示 Goroutine，每个 Goroutine 对应一个 G 结构体，G 存储 Goroutine 的运行堆栈、状态以及任务函数，可重用。G 并非执行体，每个 G 需要绑定到 P 才能被调度执行。</span>
<span class="line"></span>
<span class="line">P: Processor，表示逻辑处理器， 对 G 来说，P 相当于 CPU 核，G 只有绑定到 P(在 P 的 local runq 中)才能被调度。对 M 来说，P 提供了相关的执行环境(Context)，如内</span>
<span class="line">存分配状态(mcache)，任务队列(G)等，P 的数量决定了系统内最大可并行的 G 的数量（前提：物理 CPU 核数 &gt;= P 的数量），P 的数量由用户设置的 GOMAXPROCS 决定，但是不论</span>
<span class="line"> GOMAXPROCS 设置为多大，P 的数量最大为 256。</span>
<span class="line"></span>
<span class="line">M: Machine，OS 线程抽象，代表着真正执行计算的资源，在绑定有效的 P 后，进入 schedule 循环；而 schedule 循环的机制大致是从 Global 队列、P 的 Local 队列以及 wait</span>
<span class="line">队列中获取 G，切换到 G 的执行栈上并执行 G 的函数，调用 goexit 做清理工作并回到 M，如此反复。M 并不保留 G 状态，这是 G 可以跨 M 调度的基础，M 的数量是不定的，由</span>
<span class="line">Go Runtime 调整，为了防止创建过多 OS 线程导致系统调度不过来，目前默认最大限制为 10000 个。</span>
<span class="line"></span>
<span class="line">每个 P 维护一个 G 的本地队列；</span>
<span class="line">当一个 G 被创建出来，或者变为可执行状态时，就把他放到 P 的本地可执行队列中，如果满了则放入Global；</span>
<span class="line">当一个 G 在 M 里执行结束后，P 会从队列中把该 G 取出；如果此时 P 的队列为空，即没有其他 G 可以执行， M 就随机选择另外一个 P，从其可执行的 G 队列中取走一半。</span>
<span class="line"></span>
<span class="line">调度算法如下:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),i("img",{src:a.$withBase("/images/interview/gpm_schedule.png"),style:{width:"100%"}},null,8,u),n[4]||(n[4]=s(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">调度过程:</span>
<span class="line">当通过 go 关键字创建一个新的 goroutine 的时候，它会优先被放入 P 的本地队列。为了运行 goroutine，M 需要持有（绑定）一个 P，接着 M 会启动一个 OS 线程，循环从 P 的本地</span>
<span class="line">队列里取出一个 goroutine 并执行。执行调度算法：当 M 执行完了当前 P 的 Local 队列里的所有 G 后，P 也不会就这么在那划水啥都不干，它会先尝试从 Global 队列寻找 G 来执行，</span>
<span class="line">如果 Global 队列为空，它会随机挑选另外一个 P，从它的队列里中拿走一半的 G 到自己的队列中执行。</span>
<span class="line"></span>
<span class="line">参考：</span>
<span class="line">https://www.minazuki.cn/post/blog_os/blog_os-1btagnqm2aabq/blog_os-1bti5cvfu5of1/ //理论</span>
<span class="line">https://blog.csdn.net/guoafite/article/details/114833136 //理论</span>
<span class="line"></span>
<span class="line">https://www.kuangstudy.com/bbs/1359135859894509570 //理论</span>
<span class="line"></span>
<span class="line">https://blog.csdn.net/u010853261/article/details/85887948 //gopark()[用于协程的切换], goready()[主要功能就是唤醒某一个goroutine，该协程转换到runnable的状态，并将其放入P的local queue，等待调度]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">7.什么是rune类型?</span>
<span class="line">rune 是 int32的别名，主要用具计算不同字符下字符串的真实长度。(参考另一篇文章：go之rune关键字)</span>
<span class="line"></span>
<span class="line">8.struct能不能比较?</span>
<span class="line">回答这个问题之前先看一下golang中哪些数据类型可以比较哪些不可以比较</span>
<span class="line">可比较：Integer，Floating，String，Boolean，Complex(复数型)，Pointer，Channel，Interface，Array</span>
<span class="line">不可比较：Slice，Map，Function</span>
<span class="line"></span>
<span class="line">func TestCompare(t *testing.T) {</span>
<span class="line">	//都是可比较成员</span>
<span class="line">	type S struct {</span>
<span class="line">		Name    string</span>
<span class="line">		Age     int</span>
<span class="line">		Address *int</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	//没有初始化的时候 都是nil</span>
<span class="line">	//var a S</span>
<span class="line">	//var b S</span>
<span class="line"></span>
<span class="line">	//=== RUN   TestCompare</span>
<span class="line">	//true</span>
<span class="line">	//--- PASS: TestCompare (0.00s)</span>
<span class="line">	//PASS</span>
<span class="line">	//fmt.Println(a == b)</span>
<span class="line"></span>
<span class="line">	// 分别初始化</span>
<span class="line">	var n = 1</span>
<span class="line">	var m = 2</span>
<span class="line">	a := S{</span>
<span class="line">		Name:    &quot;aa&quot;,</span>
<span class="line">		Age:     1,</span>
<span class="line">		Address: &amp;n,</span>
<span class="line">	}</span>
<span class="line">	b := S{</span>
<span class="line">		Name:    &quot;aa&quot;,</span>
<span class="line">		Age:     1,</span>
<span class="line">		Address: &amp;m, // 若是&amp;n,就返回true, 如是&amp;m,就返回false,因为 指针指向的地址不一样</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	//=== RUN   TestCompare</span>
<span class="line">	//true</span>
<span class="line">	//--- PASS: TestCompare (0.00s)</span>
<span class="line">	//PASS</span>
<span class="line">	fmt.Println(a == b)</span>
<span class="line"></span>
<span class="line">	//结论：golang中 Slice，Map，Function 这三种数据类型是不可以直接比较的。我们再看看S结构体，该结构体并没有包含不可比较的成员变量，所以该结构体是可以直接比较的。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	//包含不可比较成员</span>
<span class="line">	type S2 struct {</span>
<span class="line">		Name    string</span>
<span class="line">		Age     int</span>
<span class="line">		Address *int</span>
<span class="line">		Data    []int</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	a2 := S2{</span>
<span class="line">		Name:    &quot;aa&quot;,</span>
<span class="line">		Age:     1,</span>
<span class="line">		Address: new(int),</span>
<span class="line">		Data:    []int{1, 2, 3},</span>
<span class="line">	}</span>
<span class="line">	b2 := S2{</span>
<span class="line">		Name:    &quot;aa&quot;,</span>
<span class="line">		Age:     1,</span>
<span class="line">		Address: new(int),</span>
<span class="line">		Data:    []int{1, 2, 3},</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	//这样 直接编辑器报错，因为 S2包含不可比较类型</span>
<span class="line">	//fmt.Println(a2 == b2)</span>
<span class="line"></span>
<span class="line">	//通过 reflect.DeepEqual  反射中的函数进行比较是可以的</span>
<span class="line">	//=== RUN   TestCompare</span>
<span class="line">	//true</span>
<span class="line">	//--- PASS: TestCompare (0.00s)</span>
<span class="line">	//PASS</span>
<span class="line">	fmt.Println(reflect.DeepEqual(a2, b2))</span>
<span class="line"></span>
<span class="line">	//拓展：</span>
<span class="line">	//DeepEqual函数用来判断两个值是否深度一致。具体比较规则如下：</span>
<span class="line">	//</span>
<span class="line">	//不同类型的值永远不会深度相等当两个数组的元素对应深度相等时，两个数组深度相等当两个相同结构体的所有字段对应深度相等的时候，两个结构体深度相等当两个函数都为nil时，两个函数深度相等，其他情况不相等（相同函数也不相等）当两个interface的真实值深度相等时，两个interface深度相等map的比较需要同时满足以下几个</span>
<span class="line">	//</span>
<span class="line">	//两个map都为nil或者都不为nil，并且长度要相等相同的map对象或者所有key要对应相同map对应的value也要深度相等</span>
<span class="line">	//指针，满足以下其一即是深度相等</span>
<span class="line">	//</span>
<span class="line">	//两个指针满足go的==操作符两个指针指向的值是深度相等的</span>
<span class="line">	//切片，需要同时满足以下几点才是深度相等</span>
<span class="line">	//</span>
<span class="line">	//两个切片都为nil或者都不为nil，并且长度要相等两个切片底层数据指向的第一个位置要相同或者底层的元素要深度相等注意：空的切片跟nil切片是不深度相等的</span>
<span class="line">	//其他类型的值（numbers, bools, strings, channels）如果满足go的==操作符，则是深度相等的。要注意不是所有的值都深度相等于自己，例如函数，以及嵌套包含这些值的结构体，数组等</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	//两个不同的结构体实例,如果S3 S4成员不同，一定也是不能比较的</span>
<span class="line">	type S3 struct {</span>
<span class="line">		Name string</span>
<span class="line">		Age  int</span>
<span class="line">		Arr  [2]bool</span>
<span class="line">		ptr  *int</span>
<span class="line">	}</span>
<span class="line">	type S4 struct {</span>
<span class="line">		Name string</span>
<span class="line">		Age  int</span>
<span class="line">		Arr  [2]bool</span>
<span class="line">		ptr  *int</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	var k = 1</span>
<span class="line">	var j = 2</span>
<span class="line">	var a3 = S3{</span>
<span class="line">		Name: &quot;aa&quot;,</span>
<span class="line">		Age:  1,</span>
<span class="line">		Arr:  [2]bool{true, false},</span>
<span class="line">		ptr:  &amp;k,</span>
<span class="line">	}</span>
<span class="line">	var b3 = S4{</span>
<span class="line">		Name: &quot;aa&quot;,</span>
<span class="line">		Age:  1,</span>
<span class="line">		Arr:  [2]bool{true, false},</span>
<span class="line">		ptr:  &amp;j,//若是&amp;k,就返回true, 如是&amp;j,就返回false,因为 指针指向的地址不一样</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	//由于结构体类型不一样，编辑器报错，不能比较</span>
<span class="line">	//fmt.Println(a3 == b3)</span>
<span class="line"></span>
<span class="line">	//类型强转以后，就可以比较了</span>
<span class="line">	//=== RUN   TestCompare</span>
<span class="line">	//false</span>
<span class="line">	//--- PASS: TestCompare (0.00s)</span>
<span class="line">	//PASS</span>
<span class="line">	fmt.Println(a3 == S3(b3))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">根据上面的论证可以知道：结构体能不能比较是要分情况的</span>
<span class="line"></span>
<span class="line">9.struct可以作为map的key吗?</span>
<span class="line">func TestMapKey(t *testing.T)  {</span>
<span class="line">	type S1 struct {</span>
<span class="line">		Name  string</span>
<span class="line">		Age   int</span>
<span class="line">		Arr   [2]bool</span>
<span class="line">		ptr   *int</span>
<span class="line">		slice []int</span>
<span class="line">		map1  map[string]string</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	type S2 struct {</span>
<span class="line">		Name string</span>
<span class="line">		Age  int</span>
<span class="line">		Arr  [2]bool</span>
<span class="line">		ptr  *int</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	n := make(map[S2]string, 0) // 无报错</span>
<span class="line">	//=== RUN   TestMapKey</span>
<span class="line">	//map[]--- PASS: TestMapKey (0.00s)</span>
<span class="line">	//PASS</span>
<span class="line">	fmt.Print(n)</span>
<span class="line"></span>
<span class="line">	//m := make(map[S1]string, 0)//Invalid map key type: comparison operators == and != must be fully defined for the key type</span>
<span class="line">	//fmt.Println(m)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">根据上面的论证可以知道：struct必须是可比较的，才能作为key，否则编译时报错</span>
<span class="line"></span>
<span class="line">10.如何判断map中是否包含某个key?</span>
<span class="line"></span>
<span class="line">func TestMapKeyExist(t *testing.T){</span>
<span class="line">	demo := map[string]string{</span>
<span class="line">		&quot;age&quot;: &quot;12345&quot;,</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	//判断方法</span>
<span class="line">	if v, ok := demo[&quot;age&quot;]; ok {</span>
<span class="line">		fmt.Println(v)</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">11.map如何顺序读取?</span>
<span class="line">解决方案：通过sort中的排序包进行对map中的key进行排序。然后遍历key</span>
<span class="line">func TestMapOrder(t *testing.T){</span>
<span class="line">	var m = map[string]int{</span>
<span class="line">		&quot;9&quot;: 0,</span>
<span class="line">		&quot;2&quot;: 1,</span>
<span class="line">		&quot;5&quot;: 2,</span>
<span class="line">		&quot;1&quot;: 3,</span>
<span class="line">	}</span>
<span class="line">	var keys []string</span>
<span class="line">	for k := range m {</span>
<span class="line">		keys = append(keys, k)</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	sort.Strings(keys)      //升序</span>
<span class="line">	for _, k := range keys {</span>
<span class="line">		fmt.Println(&quot;Key:&quot;, k, &quot;Value:&quot;, m[k])</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">=== RUN   TestMapOrder</span>
<span class="line">Key: 1 Value: 3</span>
<span class="line">Key: 2 Value: 1</span>
<span class="line">Key: 5 Value: 2</span>
<span class="line">Key: 9 Value: 0</span>
<span class="line">--- PASS: TestMapOrder (0.00s)</span>
<span class="line">PASS</span>
<span class="line"></span>
<span class="line">12.关于switch语句，下面说法正确的是？</span>
<span class="line">   A. 单个case中，可以出现多个结果的选项；</span>
<span class="line">   B. 需要使用break来明确退出一个case；</span>
<span class="line">   C. 只有在case中明确添加fallthrought关键字，才会继续执行紧跟的下一个case；</span>
<span class="line">   D. 条件表达式必须为常量或者整数。</span>
<span class="line"></span>
<span class="line">   AC</span>
<span class="line"></span>
<span class="line">   分析：</span>
<span class="line">   支持多条件匹配，使用逗号分隔，例如：case val1,val2,val3</span>
<span class="line">   不同的case之间不使用break分隔，默认自带break，只会执行一个case;</span>
<span class="line">   如果想要执行多个case，需要使用fallthrought关键字，且不会判断下一个case的表达式是否 为true;也可以使用break终止。</span>
<span class="line">   switch语句还可以被用于type-switch来判断某个interface变量中实际存储的变量类型。如：switch i := x.(type){}</span>
<span class="line"></span>
<span class="line">13.下面的代码会打印什么?</span>
<span class="line">func TestSwitch(t *testing.T) {</span>
<span class="line">	switch alwaysFalse()</span>
<span class="line">	{</span>
<span class="line">	case true:</span>
<span class="line">		fmt.Println(true)</span>
<span class="line">	case false:</span>
<span class="line">		fmt.Println(false)</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	// 代码中，switch后面没有跟{，而是另起了一行，在这种情况下，alwaysFalse后自动添加了分号&quot;；&quot;，上述代码等价于：</span>
<span class="line">	//switch alwaysFalse(); true {</span>
<span class="line">	//case true: fmt.Println(&quot;true&quot;)</span>
<span class="line">	//case false: fmt.Println(&quot;false&quot;)</span>
<span class="line">	//}</span>
<span class="line">	// 所以会返回 true，如果 { 没有换行 就返回 false</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">14.下面的代码会打印什么?</span>
<span class="line">func print()  {</span>
<span class="line">	//这里相当于吧 GPM 中的P 设置为1,所以</span>
<span class="line">	// for 循环的时候 会先执行main 里的 for，在执行 go func，就是先主协程再子协程，最后全部输出10</span>
<span class="line">	//这实际是一个 协程引用循环变量的问题</span>
<span class="line">	// 解决办法是，再声明一个变量 i2 := i，将 i2传给 func；或者 给func 传递参数，将 i 传递</span>
<span class="line">	runtime.GOMAXPROCS(1)</span>
<span class="line"></span>
<span class="line">	wg := sync.WaitGroup{}</span>
<span class="line">	wg.Add(20)</span>
<span class="line"></span>
<span class="line">	for i := 0; i &lt; 10; i++ {</span>
<span class="line">		go func() {</span>
<span class="line">			fmt.Println(i)</span>
<span class="line">			wg.Done()</span>
<span class="line">		}()</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	for j := 0; j &lt; 10; j++ {</span>
<span class="line">		go func() {</span>
<span class="line">			fmt.Println(j)</span>
<span class="line">			wg.Done()</span>
<span class="line">		}()</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	wg.Wait()</span>
<span class="line">}</span>
<span class="line">func TestWt(t *testing.T)  {</span>
<span class="line">	print()</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">=== RUN   TestWt</span>
<span class="line">2</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">10</span>
<span class="line">--- PASS: TestWt (0.00s)</span>
<span class="line">PASS</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">15.下面的代码会打印什么?</span>
<span class="line">func TestDefer(t *testing.T){</span>
<span class="line"></span>
<span class="line">	//这个简单，defer 肯定最后执行,所以是31</span>
<span class="line">	if true {</span>
<span class="line">		defer fmt.Println(&quot;1&quot;)</span>
<span class="line">	}else {</span>
<span class="line">		defer fmt.Println(&quot;2&quot;)</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	fmt.Println(&quot;3&quot;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">=== RUN   TestDefer</span>
<span class="line">3</span>
<span class="line">1</span>
<span class="line">--- PASS: TestDefer (0.00s)</span>
<span class="line">PASS</span>
<span class="line"></span>
<span class="line">16.golang中大多数数据类型都可以转化为有效的JSON文本，下面几种类型除外（）</span>
<span class="line"></span>
<span class="line">A 指针</span>
<span class="line"></span>
<span class="line">B channel</span>
<span class="line"></span>
<span class="line">C complex</span>
<span class="line"></span>
<span class="line">D 函数</span>
<span class="line"></span>
<span class="line">BCD</span>
<span class="line"></span>
<span class="line">分析：</span>
<span class="line">golang 中的类型比如：channel（通道）、complex（复数类型）、func（函数）均不能进行 JSON 格式化。</span>
<span class="line">有疑问的地方可能是在A选项指针。</span>
<span class="line">其实 Pointer（指针）也是能被 JSON 格式化的，因为指针会被系统隐式转换为指针所指向的具体对象值，具体的对象值是可以被JSON格式化的。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">17.下面的代码会打印什么?</span>
<span class="line">func printEx(x int) (func(), func()) {</span>
<span class="line">	return func() {</span>
<span class="line">		println(x)</span>
<span class="line">		x += 10</span>
<span class="line">		},</span>
<span class="line">		func() {</span>
<span class="line">			println(x)</span>
<span class="line">		}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func TestCodeExec(t *testing.T)  {</span>
<span class="line">	a, b := printEx(1)</span>
<span class="line">	a()</span>
<span class="line">	b()</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//结果如下</span>
<span class="line">//=== RUN   TestCodeExec</span>
<span class="line">//1</span>
<span class="line">//11</span>
<span class="line">//--- PASS: TestCodeExec (0.00s)</span>
<span class="line">//PASS</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">18.下面的代码会打印什么?</span>
<span class="line">func TestCodeExec(t *testing.T)  {</span>
<span class="line">	defer func() {</span>
<span class="line">		if err := recover(); err != nil {</span>
<span class="line">			fmt.Println(&quot;++++&quot;)</span>
<span class="line">			f := err.(func() string) // err 是一个func类型，打印出一个 0x894040 说明 func是引用类型</span>
<span class="line">			fmt.Println(err,&quot;--&quot;, f(),&quot;--&quot;, reflect.TypeOf(err).Kind().String())</span>
<span class="line">		}else {</span>
<span class="line">			fmt.Println(&quot;fatal&quot;)</span>
<span class="line">		}</span>
<span class="line">	}()</span>
<span class="line"></span>
<span class="line">	//这个defer 会比上面的先执行</span>
<span class="line">	defer func() {</span>
<span class="line">		panic(func() string {</span>
<span class="line">			return &quot;defer panic&quot;</span>
<span class="line">		})</span>
<span class="line">	}()</span>
<span class="line"></span>
<span class="line">	//这个defer 会比上面的先执行</span>
<span class="line">	defer func() {</span>
<span class="line">		panic(func() string {</span>
<span class="line">			return &quot;defer panic2&quot;</span>
<span class="line">		})</span>
<span class="line">	}()</span>
<span class="line"></span>
<span class="line">	//最先执行</span>
<span class="line">	panic(&quot;panic&quot;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	//=== RUN   TestCodeExec</span>
<span class="line">	//++++</span>
<span class="line">	//0x894040 -- defer panic -- func</span>
<span class="line">	//--- PASS: TestCodeExec (0.00s)</span>
<span class="line">	//PASS</span>
<span class="line"></span>
<span class="line">	结论：</span>
<span class="line">	如果过有多个panic,那么最终 recover 会拦截最后的那个panic的错误</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">19.golang中的引用类型包括（）</span>
<span class="line">A.数组</span>
<span class="line"></span>
<span class="line">B.map</span>
<span class="line"></span>
<span class="line">C.channel</span>
<span class="line"></span>
<span class="line">D.interface</span>
<span class="line"></span>
<span class="line">BCD</span>
<span class="line"></span>
<span class="line">解析：go中引用类型有:指针、slice切片、管道channel、接口interface、map、函数等</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const m=l(c,[["render",r],["__file","golang面试题2022_10_19.html.vue"]]),b=JSON.parse('{"path":"/content/interview/golang/golang%E9%9D%A2%E8%AF%95%E9%A2%982022_10_19.html","title":"golang面试题2022_10_19","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang面试题2022_10_19","description":"golang面试题2022_10_19"},"headers":[],"git":{},"filePathRelative":"content/interview/golang/golang面试题2022_10_19.md"}');export{m as comp,b as data};
