import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>golang声明一个空的字符串切片: 有时候需要遍历一个slice，处理完以后 存到一个新的slice里面，那么需要初始化一个空的字符串切片，而不是nil字符串切片，空和nil有很大的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">var list = []string{&quot;&quot;} // 至少有一个元素，一般设为&quot;&quot;，相当于有一个空的slice，最后通过 list[1:] 排除这个 &quot;&quot; 元素</span>
<span class="line"></span>
<span class="line">如果声明为如下格式：</span>
<span class="line">var list = []string{} // 其实这和 var list []string 没有区别，是一个nil的slice，所以直接适用会报下面的错误: out of range ...</span>
<span class="line">通过 recover 可以捕获如下错误：</span>
<span class="line">defer func() {</span>
<span class="line">        if r := recover(); r != nil {</span>
<span class="line">            common.Log.Println(&quot;错误:&quot;, r)</span>
<span class="line">        }</span>
<span class="line">    }()</span>
<span class="line"></span>
<span class="line">[api_request]2022/09/16 15:38:00 duplicateString.go:79: 错误: runtime error: index out of range [0] with length 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(l,[["render",t],["__file","golang声明一个空的字符串切片.html.vue"]]),d=JSON.parse('{"path":"/content/go/base/golang%E5%A3%B0%E6%98%8E%E4%B8%80%E4%B8%AA%E7%A9%BA%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%88%87%E7%89%87.html","title":"golang声明一个空的字符串切片","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang声明一个空的字符串切片","description":"golang声明一个空的字符串切片"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang声明一个空的字符串切片.md"}');export{o as comp,d as data};
