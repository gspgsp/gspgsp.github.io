import{_ as e,o as i,c as n,g as l}from"./app.b04686bd.js";const s={},r=l(`<p>golang\u58F0\u660E\u4E00\u4E2A\u7A7A\u7684\u5B57\u7B26\u4E32\u5207\u7247: \u6709\u65F6\u5019\u9700\u8981\u904D\u5386\u4E00\u4E2Aslice\uFF0C\u5904\u7406\u5B8C\u4EE5\u540E \u5B58\u5230\u4E00\u4E2A\u65B0\u7684slice\u91CC\u9762\uFF0C\u90A3\u4E48\u9700\u8981\u521D\u59CB\u5316\u4E00\u4E2A\u7A7A\u7684\u5B57\u7B26\u4E32\u5207\u7247\uFF0C\u800C\u4E0D\u662Fnil\u5B57\u7B26\u4E32\u5207\u7247\uFF0C\u7A7A\u548Cnil\u6709\u5F88\u5927\u7684\u533A\u522B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var list = []string{&quot;&quot;} // \u81F3\u5C11\u6709\u4E00\u4E2A\u5143\u7D20\uFF0C\u4E00\u822C\u8BBE\u4E3A&quot;&quot;\uFF0C\u76F8\u5F53\u4E8E\u6709\u4E00\u4E2A\u7A7A\u7684slice\uFF0C\u6700\u540E\u901A\u8FC7 list[1:] \u6392\u9664\u8FD9\u4E2A &quot;&quot; \u5143\u7D20

\u5982\u679C\u58F0\u660E\u4E3A\u5982\u4E0B\u683C\u5F0F\uFF1A
var list = []string{} // \u5176\u5B9E\u8FD9\u548C var list []string \u6CA1\u6709\u533A\u522B\uFF0C\u662F\u4E00\u4E2Anil\u7684slice\uFF0C\u6240\u4EE5\u76F4\u63A5\u9002\u7528\u4F1A\u62A5\u4E0B\u9762\u7684\u9519\u8BEF: out of range ...
\u901A\u8FC7 recover \u53EF\u4EE5\u6355\u83B7\u5982\u4E0B\u9519\u8BEF\uFF1A
defer func() {
        if r := recover(); r != nil {
            common.Log.Println(&quot;\u9519\u8BEF:&quot;, r)
        }
    }()

[api_request]2022/09/16 15:38:00 duplicateString.go:79: \u9519\u8BEF: runtime error: index out of range [0] with length 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[r];function a(d,c){return i(),n("div",null,t)}var u=e(s,[["render",a],["__file","golang\u58F0\u660E\u4E00\u4E2A\u7A7A\u7684\u5B57\u7B26\u4E32\u5207\u7247.html.vue"]]);export{u as default};
