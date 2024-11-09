import{_ as n,o as i,c as e,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>\u5927\u90E8\u5206\u65F6\u5019\uFF0C\u9700\u8981\u81EA\u5B9A\u4E49wangeditor\u4E0A\u4F20\u4EE5\u540E\u7684json\u8FD4\u56DE\u503C\u7684\u683C\u5F0F,\u6CE8\u610F\u672C\u7248\u53F7\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u662F\u57FA\u4E8EV4\u7248\u672C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u9ED8\u8BA4\u683C\u5F0F
return $this-&gt;json([
            &#39;errno&#39; =&gt; 0,
            &#39;data&#39; =&gt; [$prefix . $url],
        ]);
//\u81EA\u5B9A\u4E49\u683C\u5F0F        
return $this-&gt;json([
            &#39;code&#39; =&gt; 0,
            &#39;msg&#39; =&gt; &#39;operate success&#39;,
            &#39;data&#39; =&gt; [&#39;url&#39; =&gt; $prefix . $url],
        ]);
        
//\u81EA\u5B9A\u4E49\u8FD4\u56DE\u683C\u5F0F\uFF0C\u9700\u8981\u4FEE\u6539customInsert \u8FD9\u4E2A\u65B9\u6CD5 \u4E2D\u5BF9result\u7684\u53D6\u503C\u65B9\u5F0F   
this.editor.config.uploadImgHooks = {
  // \u4E0A\u4F20\u56FE\u7247\u4E4B\u524D
  before: function(xhr) {
    console.log(xhr)

    // \u53EF\u963B\u6B62\u56FE\u7247\u4E0A\u4F20
    // return {
    //   prevent: true,
    //   msg: &#39;\u9700\u8981\u63D0\u793A\u7ED9\u7528\u6237\u7684\u9519\u8BEF\u4FE1\u606F&#39;
    // }
  },
  // \u56FE\u7247\u4E0A\u4F20\u5E76\u8FD4\u56DE\u4E86\u7ED3\u679C\uFF0C\u56FE\u7247\u63D2\u5165\u5DF2\u6210\u529F
  success: function(xhr) {
    console.log(&#39;success&#39;, xhr)
  },
  // \u56FE\u7247\u4E0A\u4F20\u5E76\u8FD4\u56DE\u4E86\u7ED3\u679C\uFF0C\u4F46\u56FE\u7247\u63D2\u5165\u65F6\u51FA\u9519\u4E86
  fail: function(xhr, editor, resData) {
    console.log(&#39;fail&#39;, resData)
  },
  // \u4E0A\u4F20\u56FE\u7247\u51FA\u9519\uFF0C\u4E00\u822C\u4E3A http \u8BF7\u6C42\u7684\u9519\u8BEF
  error: function(xhr, editor, resData) {
    console.log(&#39;error&#39;, xhr, resData)
  },
  // \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6
  timeout: function(xhr) {
    console.log(&#39;timeout&#39;)
  },
  // \u56FE\u7247\u4E0A\u4F20\u5E76\u8FD4\u56DE\u4E86\u7ED3\u679C\uFF0C\u60F3\u8981\u81EA\u5DF1\u628A\u56FE\u7247\u63D2\u5165\u5230\u7F16\u8F91\u5668\u4E2D
  // \u4F8B\u5982\u670D\u52A1\u5668\u7AEF\u8FD4\u56DE\u7684\u4E0D\u662F { errno: 0, data: [...] } \u8FD9\u79CD\u683C\u5F0F\uFF0C\u53EF\u4F7F\u7528 customInsert
  customInsert: function(insertImgFn, result) {
    // result \u5373\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u63A5\u53E3
    console.log(&#39;customInsert&#39;, result)

    // insertImgFn \u53EF\u628A\u56FE\u7247\u63D2\u5165\u5230\u7F16\u8F91\u5668\uFF0C\u4F20\u5165\u56FE\u7247 src \uFF0C\u6267\u884C\u51FD\u6570\u5373\u53EF
    insertImgFn(result.data.url)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function v(c,a){return i(),e("div",null,r)}var t=n(l,[["render",v],["__file","wangeditor\u4E0A\u4F20\u56FE\u7247.html.vue"]]);export{t as default};
