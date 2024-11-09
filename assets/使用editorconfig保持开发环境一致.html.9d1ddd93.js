import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>\u4F7F\u7528editorconfig\u4FDD\u6301\u5F00\u53D1\u73AF\u5883\u4E00\u81F4:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u5728webstorm\u4E2D\u7684\u4F7F\u7528
\u6253\u5F00webStrome &gt; File &gt; settings &gt; Plugins\uFF1B
\u5728Marketplace\u4E2D\u641C\u7D22EditorConfig\uFF08\u6B64\u65F6\u4F1A\u53D1\u73B0\u5DF2\u7ECF\u9ED8\u8BA4\u5B89\u88C5\uFF09
\u82E5\u6CA1\u6709\u5B89\u88C5\u70B9\u51FB\u5B89\u88C5

2.\u53EA\u8981\u521B\u5EFA\u4E86\u6587\u4EF6\u5E76\u4E14IDE\u4E5F\u5B89\u88C5\u5E76\u4F7F\u7528\u4E86\u5BF9\u5E94\u7684\u63D2\u4EF6\uFF0C\u6B64\u914D\u7F6E\u5C06\u4F1A\u5F3A\u5236\u81EA\u52A8\u751F\u6548
1&gt;\u521B\u5EFA .editorconfig \u6587\u4EF6
2&gt;\u914D\u7F6E\u4FE1\u606F\uFF0C\u66F4\u591A\u914D\u7F6E\u53EF\u67E5\u9605\u5B98\u7F51
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># http://editorconfig.org

root = true

[*] # \u8868\u793A\u6240\u6709\u6587\u4EF6\u9002\u7528
charset = utf-8 # \u8BBE\u7F6E\u6587\u4EF6\u5B57\u7B26\u96C6\u4E3A utf-8
indent_style = space # \u7F29\u8FDB\u98CE\u683C\uFF08tab | space\uFF09
indent_size = 4 # \u7F29\u8FDB\u5927\u5C0F
end_of_line = lf # \u63A7\u5236\u6362\u884C\u7C7B\u578B(lf | cr | crlf)
trim_trailing_whitespace = true # \u53BB\u9664\u884C\u5C3E\u7684\u4EFB\u610F\u7A7A\u767D\u5B57\u7B26
insert_final_newline = true # \u59CB\u7EC8\u5728\u6587\u4EF6\u672B\u5C3E\u63D2\u5165\u4E00\u4E2A\u65B0\u884C

[*.md] # \u8868\u793A\u4EC5 md \u6587\u4EF6\u9002\u7528\u4EE5\u4E0B\u89C4\u5219
max_line_length = off
trim_trailing_whitespace = false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[d];function r(a,c){return i(),n("div",null,t)}var u=e(l,[["render",r],["__file","\u4F7F\u7528editorconfig\u4FDD\u6301\u5F00\u53D1\u73AF\u5883\u4E00\u81F4.html.vue"]]);export{u as default};
