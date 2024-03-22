import{_ as e,o as n,c as i,g as d}from"./app.b04686bd.js";const r={},s=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defer\u6982\u8FF0:
defer\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u5EF6\u8FDF\u51FD\u6570\uFF0C\u628A\u8FD9\u4E2A\u51FD\u6570\u653E\u5165\u5230\u4E00\u4E2A\u6808\u4E0A\uFF0C\u5F53\u5916\u90E8\u7684\u5305\u542B\u65B9\u6CD5return\u4E4B\u524D\uFF0C\u8FD4\u56DE\u53C2\u6570\u5230\u8C03\u7528\u65B9\u6CD5\u4E4B\u524D\u8C03\u7528\uFF0C
\u4E5F\u53EF\u4EE5\u8BF4\u662F\u8FD0\u884C\u5230\u6700\u5916\u5C42\u65B9\u6CD5\u4F53\u65F6\u8C03\u7528\uFF0C\u6211\u4EEC\u7ECF\u5E38\u7528\u4ED6\u6765\u505A\u4E00\u4E9B\u8D44\u6E90\u7684\u91CA\u653E\uFF0C\u6BD4\u5982\u5173\u95EDio\u64CD\u4F5C\u3002

defer\u7279\u6027:
1.defer\u5B9A\u4E49\u7684\u5EF6\u8FDF\u51FD\u6570\u53C2\u6570\u5728defer\u8BED\u53E5\u5B9A\u4E49\u65F6\u5C31\u5DF2\u7ECF\u786E\u5B9A\u4E0B\u6765\u4E86
2.defer\u5B9A\u4E49\u987A\u5E8F\u4E0E\u5B9E\u9645\u6267\u884C\u987A\u5E8F\u76F8\u53CD\uFF0C\u5373\u5148\u8FDB\u540E\u51FA

return\u7279\u6027:
return\u4E0D\u662F\u539F\u5B50\u64CD\u4F5C\uFF0C\u6267\u884C\u8FC7\u7A0B\u662F\uFF1A\u4FDD\u5B58\u8FD4\u56DE\u503C(\u82E5\u6709)--&gt;\u6267\u884Cdefer\uFF08\u82E5\u6709\uFF09--&gt;\u6267\u884Cret\u8DF3\u8F6C\uFF0C\u5177\u4F53\u8FC7\u7A0B\u5982\u4E0B\uFF1A
\u5173\u952E\u5B57return\u4E0D\u662F\u4E00\u4E2A\u539F\u5B50\u64CD\u4F5C\uFF0C\u5B9E\u9645\u4E0Areturn\u53EA\u4EE3\u7406\u6C47\u7F16\u6307\u4EE4ret\uFF0C\u5373\u5C06\u8DF3\u8F6C\u7A0B\u5E8F\u6267\u884C\u3002return i\uFF0C\u5B9E\u9645\u4E0A\u5206\u4E24\u6B65\u8FDB\u884C\uFF0C
\u5373\u5C06i\u503C\u5B58\u5165\u6808\u4E2D\u4F5C\u4E3A\u8FD4\u56DE\u503C\uFF0C\u7136\u540E\u6267\u884C\u8DF3\u8F6C\uFF0C\u800Cdefer\u7684\u6267\u884C\u65F6\u673A\u6B63\u662F\u8DF3\u8F6C\u524D\uFF0C\u6240\u4EE5\u8BF4defer\u6267\u884C\u65F6\u8FD8\u662F\u6709\u673A\u4F1A\u64CD\u4F5C\u8FD4\u56DE\u503C\u7684\u3002

defer\u4F7F\u7528\uFF1A
\u5728\u7533\u8BF7\u8D44\u6E90\u540E\u8C03\u7528defer\u5173\u95ED\u8D44\u6E90
\u8FD4\u56DE\u524D\u901A\u8FC7defer\u5199\u65E5\u5FD7\u6216\u8005\u53D1\u9001\u901A\u77E5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8Edefer\u7684\u7EC6\u8282:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defer return \u8FD4\u56DE\u503C \u4E09\u8005\u7684\u6267\u884C\u987A\u5E8F:
  
1.return \u8D4B\u503C \u6700\u5148\u6267\u884C\uFF0C\u5373\u5148\u5C06\u7ED3\u679C\u5199\u5165\u8FD4\u56DE\u503C\u4E2D\uFF1B
2.\u63A5\u7740defer\u5F00\u59CB\u6267\u884C\u4E00\u4E9B\u6536\u5C3E\u5DE5\u4F5C\uFF1B
3.\u6700\u540E\u51FD\u6570\u643A\u5E26\u5F53\u524D\u8FD4\u56DE\u503C\u9000\u51FA\uFF08\u5373\u8FD4\u56DE\u503C\uFF09\u3002
  
\u6240\u4EE5\u7ED3\u8BBA\u662F\uFF1A\u7B2C\u4E00\u6B65\u5148return\u8D4B\u503C\uFF0C\u7B2C\u4E8C\u6B65\u518D\u6267\u884Cdefer\uFF0C\u7B2C\u4E09\u6B65\u6267\u884C\u7A7A\u7684return\u3002\u4F46\u662F\u5728\u6709\u540D\u4E0E\u65E0\u540D\u7684\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u60C5\u51B5\u4E0B\u4F1A\u6709\u4E9B\u533A\u522B\uFF1A
\u5982\u679C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u65E0\u540D\u7684\uFF08\u4E0D\u5E26\u547D\u540D\u8FD4\u56DE\u503C\uFF09\u5982\u4E0A\u4F8B\u4E2D\u7684f2()\uFF0C\u5219go\u8BED\u8A00\u4F1A\u5728\u6267\u884Creturn\u6307\u4EE4\u65F6,\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u53D8\u91CF\u4FDD\u5B58\u8FD4\u56DE\u503C\uFF0C\u6700\u540E\u8FD4\u56DE,\u5982\u4E0B\u8FD4\u56DE 1:
// \u8FD9\u91CC\u8FD4\u56DE\u503C\u662F\u65E0\u540D
func f2() int {
  // \u7B2C\u4E00\u6B65:return\u8D4B\u503C\uFF1B\u521B\u5EFA\u4E86\u4E00\u4E2A\u4E34\u65F6\u53D8\u91CF\u4FDD\u5B58\u8FD4\u56DE\u503C
	n := 1
  // \u540E\u7EEDdefer\u5BF9n\u64CD\u4F5C\uFF0C\u8FD9\u91CC\u7684n\u5E76\u4E0D\u662F\u8FD4\u56DE\u503C\u53D8\u91CF
	defer func() {
		n++
	}()
  // \u7A7A\u7684return,\u8FD9\u4E00\u6B65\u662F\u5C06\u7B2C\u4E00\u6B65\u4E2D\u7684\u4E34\u65F6\u53D8\u91CF\u4FDD\u5B58\u7684\u503C\u8FD4\u56DE
	return 
}

  
\u6709\u540D\u8FD4\u56DE\u503C\u7684\u51FD\u6570,\u7531\u4E8E\u8FD4\u56DE\u503C\u53D8\u91CF\u5DF2\u7ECF\u63D0\u524D\u5B9A\u4E49\uFF0C\u6240\u4EE5\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u5E76\u4E0D\u4F1A\u518D\u521B\u5EFA\u4E34\u65F6\u53D8\u91CF\uFF0C\u540E\u7EEDdefer\u64CD\u4F5C\u7684\u53D8\u91CF\u90FD\u662F\u8FD4\u56DE\u503C\u53D8\u91CF,\u5982\u4E0B\u8FD4\u56DE 2:
// \u5B9A\u4E49\u4E86\u8FD4\u56DE\u503C\u53D8\u91CF
func f1() (n int) {
  // \u76F4\u63A5\u64CD\u4F5C\u8FD4\u56DE\u503C
	n = 1
	defer func() {
  // \u8FD9\u91CC\u64CD\u4F5C\u7684\u4E5F\u662F\u8FD4\u56DE\u503C
		n++
	}()
	return n
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003\u94FE\u63A5: http://liuqh.icu/2023/05/18/go/bottom/6-defer/</p>`,4),l=[s];function v(u,c){return n(),i("div",null,l)}var t=e(r,[["render",v],["__file","go\u5173\u4E8Edefer-func.html.vue"]]);export{t as default};
