import{_ as n,o as i,c as e,g as s}from"./app.dd03cafd.js";const l={},d=s(`<p>golang\u4E4B\u53D8\u91CF\u58F0\u660E\u88AB\u906E\u853D\u73B0\u8C61:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728Go\u8BED\u8A00\u4E2D\uFF0C&quot;shadows declaration&quot;\uFF08\u53D8\u91CF\u58F0\u660E\u88AB\u906E\u853D\uFF09\u662F\u6307\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u5185\u4F7F\u7528\u4E86\u76F8\u540C\u540D\u79F0\u7684\u53D8\u91CF\uFF0C\u5BFC\u81F4\u5185\u90E8\u53D8\u91CF\uFF08\u5728\u66F4\u5C0F\u7684\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF09&quot;\u906E\u853D&quot;\u4E86
\u5916\u90E8\u53D8\u91CF\uFF08\u5728\u66F4\u5927\u7684\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF09\u3002\u8FD9\u610F\u5473\u7740\u5728\u5185\u90E8\u4F5C\u7528\u57DF\u4E2D\uFF0C\u8BBF\u95EE\u8BE5\u53D8\u91CF\u65F6\u5C06\u53EA\u80FD\u770B\u5230\u5185\u90E8\u53D8\u91CF\uFF0C\u800C\u65E0\u6CD5\u8BBF\u95EE\u5916\u90E8\u53D8\u91CF\u3002
  
\u5F53\u7F16\u8BD1\u5668\u68C0\u6D4B\u5230\u53D8\u91CF\u88AB\u906E\u853D\u65F6\uFF0C\u5B83\u4F1A\u53D1\u51FA&quot;shadows declaration&quot;\u8B66\u544A\u6216\u63D0\u793A\u3002\u8FD9\u4E2A\u8B66\u544A\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u63D0\u9192\u5F00\u53D1\u8005\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898\uFF0C\u4EE5\u514D\u5728\u4EE3\u7801\u4E2D\u5F15\u5165\u4E0D\u5FC5\u8981\u7684\u6DF7\u6DC6\u548C\u9519\u8BEF\u3002
  
\u4F8B\u5982\uFF0C\u8003\u8651\u4EE5\u4E0B\u4EE3\u7801\u793A\u4F8B\uFF1A
package main

import &quot;fmt&quot;

func main() {
    x := 10
    fmt.Println(x) // \u8F93\u51FA: 10

    if x := 20; x &gt; 0 {
        fmt.Println(x) // \u8F93\u51FA: 20
    }

    fmt.Println(x) // \u8F93\u51FA: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(t,c){return i(),e("div",null,a)}var u=n(l,[["render",v],["__file","golang\u4E4B\u53D8\u91CF\u58F0\u660E\u88AB\u906E\u853D\u73B0\u8C61.html.vue"]]);export{u as default};
