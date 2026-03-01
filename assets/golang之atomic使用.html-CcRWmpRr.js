import{_ as s,c as a,f as p,o as t}from"./app-BB_BIQV8.js";const e={};function i(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<p>golang的另一种锁竞争解决方案,基于atomic</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">/**</span>
<span class="line">atomic 原子操作，只针对go中的一些基本数据类型使用：int32、int64、uint32、uint64、uintptr(uintptr 是 Go 内置类型，表示无符号整数，可存储一个完整的地址)</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token punctuation">(</span></span>
<span class="line">	x <span class="token builtin">int64</span></span>
<span class="line">	wg sync<span class="token punctuation">.</span>WaitGroup</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">AmAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//通过 atomic 原子操作，保证数据操作的原子性，结果一定是500</span></span>
<span class="line">	atomic<span class="token punctuation">.</span><span class="token function">AddInt64</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">//直接x++，非原子操作，数据结果不准确，得到的结果可能是400多</span></span>
<span class="line">	<span class="token comment">//x++</span></span>
<span class="line">	<span class="token comment">//还可以通过sync.Mutex同步锁实现，加锁性能开销大</span></span>
<span class="line">	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">TestAtomic</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span></span>
<span class="line">	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span></span>
<span class="line">		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token keyword">go</span> <span class="token function">AmAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 原子操作版Add函数，是并发安全的，性能优于加锁版</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Seconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">atomic和mutex的区别</span>
<span class="line"></span>
<span class="line"><span class="token number">1</span><span class="token punctuation">.</span>atomic的包处于sync<span class="token operator">/</span>atomic，mutex则是sync下的包</span>
<span class="line"></span>
<span class="line"><span class="token number">2</span><span class="token punctuation">.</span>atomic是对cpu底层进行原子操作，不能通过程序干预。而mutex则是在语言层面的，操作自由度较高。</span>
<span class="line"></span>
<span class="line"><span class="token number">3</span><span class="token punctuation">.</span>atomic省去了lock和unlock的操作，代码比较简洁</span>
<span class="line"></span>
<span class="line"><span class="token number">4</span><span class="token punctuation">.</span>atomic因为其在底层就已封装好的特性，所以它在goroutine下的运行表现是连续不间断的；而mutex则在goroutine运行间由于锁的等待或持有等情况，断断续续地执行</span>
<span class="line"></span>
<span class="line"><span class="token number">5</span><span class="token punctuation">.</span>atomic总体运行较快，但是如果存储数据的非常巨大，它的性能会大打折扣。因为每次更新atomic的数据，都会进行一次数据复制，数据越大效率下降越大</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(e,[["render",i],["__file","golang之atomic使用.html.vue"]]),u=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8Batomic%E4%BD%BF%E7%94%A8.html","title":"golang之atomic使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之atomic使用","description":"golang之atomic使用"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之atomic使用.md"}');export{o as comp,u as data};
