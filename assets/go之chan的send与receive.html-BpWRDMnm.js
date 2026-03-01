import{_ as e,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(t,n){return i(),s("div",null,n[0]||(n[0]=[a(`<p>一直以来，对于chan的两个方向有一些定义上的模糊，有说写/读，但是官网上一直定义的是 send-only type/receive-only type，那么就来解释一下这两个的由来</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">send-only type:</span>
<span class="line">比如：chan&lt;- int</span>
<span class="line"></span>
<span class="line">我这里声明一个chan</span>
<span class="line">rsc := make(chan&lt;- int )</span>
<span class="line"></span>
<span class="line">那么就只能 rsc &lt;- rand.Int() // 这个send相对于 rand.Int() 来讲就是send</span>
<span class="line"></span>
<span class="line">receive-only type:</span>
<span class="line">比如：&lt;-chan int</span>
<span class="line"></span>
<span class="line">我这里声明一个chan</span>
<span class="line">rsc := make(&lt;-chan int )</span>
<span class="line"></span>
<span class="line">那么就只能 intVal := &lt;-rsc // 这个receive相对于 intVal 来讲就是receive</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=e(l,[["render",c],["__file","go之chan的send与receive.html.vue"]]),p=JSON.parse('{"path":"/content/go/base/go%E4%B9%8Bchan%E7%9A%84send%E4%B8%8Ereceive.html","title":"go之chan的send与receive","lang":"en-US","frontmatter":{"sidebar":false,"title":"go之chan的send与receive","description":"go之chan的send与receive"},"headers":[],"git":{},"filePathRelative":"content/go/base/go之chan的send与receive.md"}');export{r as comp,p as data};
