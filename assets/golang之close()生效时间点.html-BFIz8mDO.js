import{_ as s,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const t={};function p(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function">TestCodeRes</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span></span>
<span class="line">	require <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span></span>
<span class="line">		require <span class="token operator">&lt;-</span> i</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//关闭 require</span></span>
<span class="line">	<span class="token function">close</span><span class="token punctuation">(</span>require<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//设置定时器控制读取速率</span></span>
<span class="line">	ti <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//直接range只会读取值，缓冲区无数据会读取默认零值，chan关闭，则退出range</span></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> require <span class="token punctuation">{</span></span>
<span class="line">		<span class="token operator">&lt;-</span>ti</span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;i: %d time: %v\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//	=== RUN   TestCodeRes</span></span>
<span class="line">    <span class="token comment">// i: 0 time: 2022-10-23 20:06:52.6746003 +0800 CST m=+1.026004901</span></span>
<span class="line">    <span class="token comment">// i: 1 time: 2022-10-23 20:06:53.6702704 +0800 CST m=+2.021675001</span></span>
<span class="line">    <span class="token comment">// i: 2 time: 2022-10-23 20:06:54.6643626 +0800 CST m=+3.015767201</span></span>
<span class="line">    <span class="token comment">// i: 3 time: 2022-10-23 20:06:55.6645058 +0800 CST m=+4.015910401</span></span>
<span class="line">    <span class="token comment">// i: 4 time: 2022-10-23 20:06:56.6647772 +0800 CST m=+5.016181801</span></span>
<span class="line">    <span class="token comment">//	--- PASS: TestCodeRes (5.01s)</span></span>
<span class="line">    <span class="token comment">//	PASS</span></span>
<span class="line"></span>
<span class="line">    结论：<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，会在最后一个send的值被receive了以后执行，这里就是 <span class="token keyword">for</span> <span class="token keyword">range</span> 循环完以后执行。通过官方文档的介绍也是可以知道的</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// The close built-in function closes a channel, which must be either</span></span>
<span class="line">    <span class="token comment">// bidirectional or send-only. It should be executed only by the sender,</span></span>
<span class="line">    <span class="token comment">// never the receiver, and has the effect of shutting down the channel after</span></span>
<span class="line">    <span class="token comment">// the last sent value is received. After the last value has been received</span></span>
<span class="line">    <span class="token comment">// from a closed channel c, any receive from c will succeed without</span></span>
<span class="line">    <span class="token comment">// blocking, returning the zero value for the channel element. The form</span></span>
<span class="line">    <span class="token comment">//	x, ok := &lt;-c</span></span>
<span class="line">    <span class="token comment">// will also set ok to false for a closed channel.</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function">close</span><span class="token punctuation">(</span>c <span class="token keyword">chan</span><span class="token operator">&lt;-</span> Type<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const o=s(t,[["render",p],["__file","golang之close()生效时间点.html.vue"]]),u=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8Bclose()%E7%94%9F%E6%95%88%E6%97%B6%E9%97%B4%E7%82%B9.html","title":"golang之close()生效时间点","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之close()生效时间点","description":"golang之close()生效时间点"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之close()生效时间点.md"}');export{o as comp,u as data};
