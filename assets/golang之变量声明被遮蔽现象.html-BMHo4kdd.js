import{_ as s,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function t(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<p>golang之变量声明被遮蔽现象:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在Go语言中，&quot;shadows declaration&quot;（变量声明被遮蔽）是指在同一作用域内使用了相同名称的变量，导致内部变量（在更小的作用域中声明的变量）&quot;遮蔽&quot;了</span>
<span class="line">外部变量（在更大的作用域中声明的变量）。这意味着在内部作用域中，访问该变量时将只能看到内部变量，而无法访问外部变量。</span>
<span class="line">  </span>
<span class="line">当编译器检测到变量被遮蔽时，它会发出&quot;shadows declaration&quot;警告或提示。这个警告的目的是为了提醒开发者可能存在的问题，以免在代码中引入不必要的混淆和错误。</span>
<span class="line">  </span>
<span class="line">例如，考虑以下代码示例：</span>
<span class="line">package main</span>
<span class="line"></span>
<span class="line">import &quot;fmt&quot;</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">    x := 10</span>
<span class="line">    fmt.Println(x) // 输出: 10</span>
<span class="line"></span>
<span class="line">    if x := 20; x &gt; 0 {</span>
<span class="line">        fmt.Println(x) // 输出: 20</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    fmt.Println(x) // 输出: 10</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(i,[["render",t],["__file","golang之变量声明被遮蔽现象.html.vue"]]),r=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8B%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E%E8%A2%AB%E9%81%AE%E8%94%BD%E7%8E%B0%E8%B1%A1.html","title":"golang之变量声明被遮蔽现象","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之变量声明被遮蔽现象","description":"golang之变量声明被遮蔽现象"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之变量声明被遮蔽现象.md"}');export{p as comp,r as data};
