import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function c(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">golang当中提供了两种常用的锁。</span>
<span class="line"></span>
<span class="line">一种是 sync.Mutex （互斥锁） 另外一种是 sync.RWMutex （读写锁）</span>
<span class="line"></span>
<span class="line">Mutex，它就是最简单最基础的同步锁，当一个goroutine持有锁的时候，其他的goroutine只能等待到锁释放之后才可以尝试持有。</span>
<span class="line"></span>
<span class="line">RWMutex 是读写锁的意思，它支持一写多读，也就是说允许支持多个goroutine同时持有读锁，而只允许一个goroutine持有写锁。当有goroutine持有读锁的时候，会阻止写操作。当有goroutine持有写锁的时候，无论读写都会被堵塞。</span>
<span class="line"></span>
<span class="line">假设我们当前有多个goroutine，但是我们只希望持有锁的goroutine执行，我们可以这么写：</span>
<span class="line">var lock sync.Mutex</span>
<span class="line"></span>
<span class="line">for i := 0; i &lt; 10; i++ {</span>
<span class="line">    go func() {</span>
<span class="line">        lock.Lock()</span>
<span class="line">        defer lock.Unlock()</span>
<span class="line">        // do something</span>
<span class="line">    }()</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">RWMutex分为读写锁，所以我们一共会有4个api，分别是Lock, Unlock, RLock, RUnlock。Lock和Unlock是写锁的加锁以及解锁，而RLock和RUnlock就是读锁的加锁和解锁了。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const o=s(l,[["render",c],["__file","go常用锁.html.vue"]]),r=JSON.parse('{"path":"/content/go/base/go%E5%B8%B8%E7%94%A8%E9%94%81.html","title":"go常用锁","lang":"en-US","frontmatter":{"sidebar":false,"title":"go常用锁","description":"go常用锁"},"headers":[],"git":{},"filePathRelative":"content/go/base/go常用锁.md"}');export{o as comp,r as data};
