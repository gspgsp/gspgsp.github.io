import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">defer概述:</span>
<span class="line">defer用来声明一个延迟函数，把这个函数放入到一个栈上，当外部的包含方法return之前，返回参数到调用方法之前调用，</span>
<span class="line">也可以说是运行到最外层方法体时调用，我们经常用他来做一些资源的释放，比如关闭io操作。</span>
<span class="line"></span>
<span class="line">defer特性:</span>
<span class="line">1.defer定义的延迟函数参数在defer语句定义时就已经确定下来了</span>
<span class="line">2.defer定义顺序与实际执行顺序相反，即先进后出</span>
<span class="line"></span>
<span class="line">return特性:</span>
<span class="line">return不是原子操作，执行过程是：保存返回值(若有)--&gt;执行defer（若有）--&gt;执行ret跳转，具体过程如下：</span>
<span class="line">关键字return不是一个原子操作，实际上return只代理汇编指令ret，即将跳转程序执行。return i，实际上分两步进行，</span>
<span class="line">即将i值存入栈中作为返回值，然后执行跳转，而defer的执行时机正是跳转前，所以说defer执行时还是有机会操作返回值的。</span>
<span class="line"></span>
<span class="line">defer使用：</span>
<span class="line">在申请资源后调用defer关闭资源</span>
<span class="line">返回前通过defer写日志或者发送通知</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于defer的细节:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">defer return 返回值 三者的执行顺序:</span>
<span class="line">  </span>
<span class="line">1.return 赋值 最先执行，即先将结果写入返回值中；</span>
<span class="line">2.接着defer开始执行一些收尾工作；</span>
<span class="line">3.最后函数携带当前返回值退出（即返回值）。</span>
<span class="line">  </span>
<span class="line">所以结论是：第一步先return赋值，第二步再执行defer，第三步执行空的return。但是在有名与无名的函数返回值的情况下会有些区别：</span>
<span class="line">如果函数的返回值是无名的（不带命名返回值）如上例中的f2()，则go语言会在执行return指令时,创建一个临时变量保存返回值，最后返回,如下返回 1:</span>
<span class="line">// 这里返回值是无名</span>
<span class="line">func f2() int {</span>
<span class="line">  // 第一步:return赋值；创建了一个临时变量保存返回值</span>
<span class="line">	n := 1</span>
<span class="line">  // 后续defer对n操作，这里的n并不是返回值变量</span>
<span class="line">	defer func() {</span>
<span class="line">		n++</span>
<span class="line">	}()</span>
<span class="line">  // 空的return,这一步是将第一步中的临时变量保存的值返回</span>
<span class="line">	return </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">有名返回值的函数,由于返回值变量已经提前定义，所以运行过程中并不会再创建临时变量，后续defer操作的变量都是返回值变量,如下返回 2:</span>
<span class="line">// 定义了返回值变量</span>
<span class="line">func f1() (n int) {</span>
<span class="line">  // 直接操作返回值</span>
<span class="line">	n = 1</span>
<span class="line">	defer func() {</span>
<span class="line">  // 这里操作的也是返回值</span>
<span class="line">		n++</span>
<span class="line">	}()</span>
<span class="line">	return n</span>
<span class="line">}  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接: http://liuqh.icu/2023/05/18/go/bottom/6-defer/</p>`,4)]))}const p=s(l,[["render",d],["__file","go关于defer-func.html.vue"]]),v=JSON.parse('{"path":"/content/go/base/go%E5%85%B3%E4%BA%8Edefer-func.html","title":"go关于defer-func","lang":"en-US","frontmatter":{"sidebar":false,"title":"go关于defer-func","description":"go关于defer-func"},"headers":[],"git":{},"filePathRelative":"content/go/base/go关于defer-func.md"}');export{p as comp,v as data};
