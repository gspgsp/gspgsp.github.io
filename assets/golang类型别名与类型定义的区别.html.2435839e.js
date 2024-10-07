import{_ as e,o as n,c as i,g as s}from"./app.d66d8774.js";const l={},t=s(`<p>golang\u7C7B\u578B\u522B\u540D\u4E0E\u7C7B\u578B\u5B9A\u4E49\u7684\u533A\u522B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7C7B\u578B\u522B\u540D \u662F Go 1.9 \u7248\u672C\u6DFB\u52A0\u7684\u65B0\u529F\u80FD\u3002\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u8981\u6DFB\u52A0\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5B98\u65B9\u6587\u6863\uFF1Ahttps://go.dev/talks/2016/refactor.article \u6709\u8BF4\u660E\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\uFF1A\u4E3A\u4E86\u5728\u4EE3\u7801\u5E93\u91CD\u6784\u671F\u95F4\u5B9E\u73B0\u9010\u6B65\u7684\u4EE3\u7801\u4FEE\u590D\uFF0C\u5FC5\u987B\u80FD\u591F\u4E3A\u5E38\u91CF\u3001\u51FD\u6570\u3001\u53D8\u91CF\u6216\u7C7B\u578B\u521B\u5EFA\u66FF\u4EE3\u540D\u79F0\u3002

\u7C7B\u578B\u522B\u540D\u7684\u8BED\u6CD5\uFF1A
type OldAPI = NewPackage.API

\u7C7B\u578B\u5B9A\u4E49\u7684\u8BED\u6CD5:
type OldAPI  NewPackage.API

\u8FD9\u4FE9\u7684\u6700\u5927\u533A\u522B\u662F\uFF0C\u7C7B\u578B\u522B\u540D\u548C\u6E90\u7C7B\u578B\u662F\u76F8\u540C\u7684\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u4EE5\u53CA\u6E90\u7C7B\u578B\u81EA\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4E0D\u5141\u8BB8\u81EA\u5B9A\u4E49\u6E90\u7C7B\u578B\u6CA1\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1B\u800C\u7C7B\u578B\u5B9A\u4E49 \u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\u548C\u4ECE\u8BED\u6CD5\u4E0A\u662F\u4E0D\u76F8\u7B49\u7684\uFF0C\u4E0D\u80FD\u7528\u4E8E\u8D4B\u503C \u6BD4\u8F83\u7B49\u64CD\u4F5C
\u6BD4\u5982\u4E0B\u9762\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u5B9E\u73B0\u5BF9time\u7684\u683C\u5F0F\u5316\u8F93\u51FA\uFF1A

type JsonTime = time.Time

func (j JsonTime) MarshalJSON() ([]byte, error) { //\u8FD9\u91CC\u5C31\u4F1A\u62A5:  Cannot define new methods on the non-local type &#39;time.Time&#39;
	var stamp = fmt.Sprintf(\`&quot;%s&quot;\`, time.Time(j).Format(&quot;2006-01-02 15:04:05&quot;))
	return []byte(stamp), nil
}

\u6240\u4EE5\u5C31\u9700\u8981\u901A\u8FC7\u7C7B\u578B\u5B9A\u4E49\u6765\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD:
type JsonTime  time.Time // \u628A = \u53F7\u53BB\u6389

func (j JsonTime) MarshalJSON() ([]byte, error) {
	var stamp = fmt.Sprintf(\`&quot;%s&quot;\`, time.Time(j).Format(&quot;2006-01-02 15:04:05&quot;))
	return []byte(stamp), nil
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[t];function a(r,v){return n(),i("div",null,d)}var c=e(l,[["render",a],["__file","golang\u7C7B\u578B\u522B\u540D\u4E0E\u7C7B\u578B\u5B9A\u4E49\u7684\u533A\u522B.html.vue"]]);export{c as default};
