import{_ as e,c as s,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(o,n){return a(),s("div",null,n[0]||(n[0]=[i(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">golang之goroutine退出时间点：</span>
<span class="line">原先自以为在自定义函数里面开辟一个新的协程，函数退出，开辟的协程也会强制退出，直到跟公司项目，看大佬写的调度才发现只有一种情况正在运行的goroutine会因为其他goroutine的结束被终止，就是main函数的退出或程序停止执行。</span>
<span class="line"></span>
<span class="line">goroutine的调度是由 Golang 运行时进行管理的。同一个程序中的所有 goroutine 共享同一个地址空间。goroutine设计的退出机制是由goroutine自己退出，不能在外部强制结束一个正在执行的goroutine(只有一种情况正在运行的goroutine会因为其他goroutine的结束被终止，就是main函数退出或程序停止执行)。</span>
<span class="line"></span>
<span class="line">①进程/main函数退出</span>
<span class="line"></span>
<span class="line">②通过channel退出</span>
<span class="line"></span>
<span class="line">③通过context退出</span>
<span class="line"></span>
<span class="line">④通过Panic退出</span>
<span class="line"></span>
<span class="line">⑤等待自己退出</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const c=e(l,[["render",t],["__file","golang之goroutine的退出场景.html.vue"]]),d=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8Bgoroutine%E7%9A%84%E9%80%80%E5%87%BA%E5%9C%BA%E6%99%AF.html","title":"goroutine的退出场景","lang":"en-US","frontmatter":{"sidebar":false,"title":"goroutine的退出场景","description":"goroutine的退出场景"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之goroutine的退出场景.md"}');export{c as comp,d as data};
