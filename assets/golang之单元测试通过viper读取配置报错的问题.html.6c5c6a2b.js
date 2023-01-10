import{_ as n,o as e,c as i,g as s}from"./app.264f0052.js";const d={},t=s(`<p>golang\u4E4B\u5355\u5143\u6D4B\u8BD5\u901A\u8FC7viper\u8BFB\u53D6\u914D\u7F6E\u62A5\u9519\u7684\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2460\u5728\u9879\u76EE\u7684\u4EFB\u610F\u76EE\u5F55\u4E0B\u521B\u5EFA xxx_test.go\u6587\u4EF6\uFF0C\u6211\u8FD9\u91CC\u662F gorm_test.go\u6587\u4EF6
\u5185\u5BB9\u5982\u4E0B\uFF1A
package product

import (
	&quot;common&quot;
	&quot;model&quot;
	&quot;testing&quot;
)

func TestGormOperation(t *testing.T) {

	//create
	product :=model.Product{}
	product.Name = &quot;\u8D85\u7EA7\u5927\u7684\u6ED1\u96EA\u573A\u51AC\u5B63\u5FC5\u5907&quot;
	product.Kind = &quot;\u65C5\u6E38&quot;

	common.Db.Create(product)
}

\u4E00\u8FD0\u884C\u62A5\u9519\u4E86\uFF0C\u539F\u6765\u662Fcommon\u4E0B\u901A\u8FC7viper\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\uFF0C\u8DEF\u52B2\u9519\u4E86\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u5728 test\u4E0B\uFF0Cviper\u8BFB\u53D6\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u76F8\u5BF9\u8DEF\u5F84\u4E0D\u662F\u9879\u76EE\u7684\u6839\u76EE\u5F55\uFF0C\u800C\u662F\u5F53\u524D\u76EE\u5F55\uFF0C\u6240\u7CFB\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u901A\u8FC7 ../../ \u8BBF\u95EE\u914D\u7F6E\u6587\u4EF6
\u6211\u8FD9\u91CC\uFF1A
	//configPathW = &quot;./config/&quot;
	configPathW = &quot;../../config/&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function c(v,r){return e(),i("div",null,l)}var a=n(d,[["render",c],["__file","golang\u4E4B\u5355\u5143\u6D4B\u8BD5\u901A\u8FC7viper\u8BFB\u53D6\u914D\u7F6E\u62A5\u9519\u7684\u95EE\u9898.html.vue"]]);export{a as default};
