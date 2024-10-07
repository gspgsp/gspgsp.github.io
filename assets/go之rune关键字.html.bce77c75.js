import{_ as n,o as i,c as e,g as s}from"./app.d66d8774.js";const l={},v=s(`<p>\u4ECA\u5929\u5728\u770Bgo\u7684\u4E00\u4E2A\u6E90\u7801\u7684\u65F6\u5019\uFF0C\u770B\u5230\u4E86rune\uFF0C\u6240\u4EE5\u5C31\u60F3\u770B\u770B\u5B83\u7684\u4F7F\u7528\u573A\u666F\u3002 \u5B98\u7F51\u8BF4 rune \u662F int32\u7684\u522B\u540D \u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A\u6848\u4F8B\u8BF4\u660E\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package test

import (
	&quot;fmt&quot;
	&quot;testing&quot;
	&quot;unicode/utf8&quot;
)

func TestRune(t *testing.T) {
	var str = &quot;hello \u4E2D\u56FD&quot;

	//golang\u4E2Dstring\u5E95\u5C42\u662F\u901A\u8FC7byte\u6570\u7EC4\u5B9E\u73B0\u7684\u3002\u4E2D\u6587\u5B57\u7B26\u5728unicode\u4E0B\u53602\u4E2A\u5B57\u8282\uFF0C\u5728utf-8\u7F16\u7801\u4E0B\u53603\u4E2A\u5B57\u8282\uFF0C\u800Cgolang\u9ED8\u8BA4\u7F16\u7801\u6B63\u597D\u662Futf-8\u3002
	fmt.Println(&quot;len(str):&quot;, len(str))//\u8F93\u51FA 12


	//\u5982\u679C\u6211\u4EEC\u9884\u671F\u60F3\u5F97\u5230\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u5E95\u5C42\u5360\u5F97\u5B57\u8282\u957F\u5EA6\uFF0C\u90A3\u5C31\u53EF\u4EE5\u901A\u8FC7rune\u5B9E\u73B0
	//\u901A\u8FC7utf8\u7684RuneCountInString\u65B9\u6CD5\u5904\u7406
	fmt.Println(&quot;RuneCountInString:&quot;, utf8.RuneCountInString(str))//\u8F93\u51FA8
	//\u901A\u8FC7rune\u7C7B\u578B\u5904\u7406
	fmt.Println(&quot;rune:&quot;, len([]rune(str)))//\u8F93\u51FA8


	//for-range\u5FAA\u73AF\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B
	//k1= 0 v1= h
	//k1= 1 v1= e
	//k1= 2 v1= l
	//k1= 3 v1= l
	//k1= 4 v1= o
	//k1= 5 v1=
	//k1= 6 v1= \u4E2D
	//k1= 9 v1= \u56FD //\u8FD9\u91CC\u7D22\u5F15\u81EA\u52A8 +3

	//k2= 0 v2= h
	//k2= 1 v2= e
	//k2= 2 v2= l
	//k2= 3 v2= l
	//k2= 4 v2= o
	//k2= 5 v2=
	//k2= 6 v2= \u4E2D
	//k2= 7 v2= \u56FD //\u7D22\u5F15\u9012\u589E
	//--- PASS: TestRune (0.00s)
	//PASS
	s1 := &quot;hello \u4E2D\u56FD&quot;

	for k, v := range s1 {
		fmt.Println(&quot;k1=&quot;, k, &quot;v1=&quot;, string(v))
	}

	fmt.Println(&quot;&quot;)
	for k, v := range []rune(s1) {
		fmt.Println(&quot;k2=&quot;, k, &quot;v2=&quot;, string(v))
	}

	//rune \u7B49\u540C\u4E8Eint32,\u5E38\u7528\u6765\u5904\u7406unicode\u6216utf-8\u5B57\u7B26
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[v];function d(u,r){return i(),e("div",null,t)}var c=n(l,[["render",d],["__file","go\u4E4Brune\u5173\u952E\u5B57.html.vue"]]);export{c as default};
