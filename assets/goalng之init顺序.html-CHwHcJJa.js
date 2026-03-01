import{_ as t,c as l,f as c,a as i,o,r as e}from"./app-BB_BIQV8.js";const r={};function d(p,n){const a=e("BackBtn"),s=e("CommentService");return o(),l("div",null,[n[0]||(n[0]=c(`<p>实现go module的初始化：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">goalng之 init 顺序:</span>
<span class="line"></span>
<span class="line">1、在同一个 package 中，可以多个文件中定义 init 方法</span>
<span class="line">2、在同一个 go 文件中，可以重复定义 init 方法</span>
<span class="line">3、在同一个 package 中，不同文件中的 init 方法的执行按照文件名先后执行各个文件中的 init 方法 // 这个使用的还是很多的，尤其是在加载带有配置文件的init项目里</span>
<span class="line">4、在同一个文件中的多个 init 方法，按照在代码中编写的顺序依次执行不同的 init 方法</span>
<span class="line">5、对于不同的 package，如果不相互依赖的话，按照 main 包中 import 的顺序调用其包中的 init() 函数</span>
<span class="line">6、如果 package 存在依赖，调用顺序为最后被依赖的最先被初始化，例如：导入顺序 main –&gt; A –&gt; B –&gt; C，则初始化顺序为 C –&gt; B –&gt; A –&gt; main，一次执行对应的 init 方法。</span>
<span class="line"></span>
<span class="line">所有 init 函数都在同⼀个 goroutine 内执⾏。</span>
<span class="line">所有 init 函数结束后才会执⾏ main.main 函数。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),i(a),i(s)])}const g=t(r,[["render",d],["__file","goalng之init顺序.html.vue"]]),v=JSON.parse('{"path":"/content/go/base/goalng%E4%B9%8Binit%E9%A1%BA%E5%BA%8F.html","title":"golang之init顺序","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之init顺序","description":"golang之init顺序"},"headers":[],"git":{},"filePathRelative":"content/go/base/goalng之init顺序.md"}');export{g as comp,v as data};
