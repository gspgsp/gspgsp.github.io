import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(r,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>大部分时候，需要自定义wangeditor上传以后的json返回值的格式,注意本版号，下面这个是基于V4版本:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//默认格式</span>
<span class="line">return $this-&gt;json([</span>
<span class="line">            &#39;errno&#39; =&gt; 0,</span>
<span class="line">            &#39;data&#39; =&gt; [$prefix . $url],</span>
<span class="line">        ]);</span>
<span class="line">//自定义格式        </span>
<span class="line">return $this-&gt;json([</span>
<span class="line">            &#39;code&#39; =&gt; 0,</span>
<span class="line">            &#39;msg&#39; =&gt; &#39;operate success&#39;,</span>
<span class="line">            &#39;data&#39; =&gt; [&#39;url&#39; =&gt; $prefix . $url],</span>
<span class="line">        ]);</span>
<span class="line">        </span>
<span class="line">//自定义返回格式，需要修改customInsert 这个方法 中对result的取值方式   </span>
<span class="line">this.editor.config.uploadImgHooks = {</span>
<span class="line">  // 上传图片之前</span>
<span class="line">  before: function(xhr) {</span>
<span class="line">    console.log(xhr)</span>
<span class="line"></span>
<span class="line">    // 可阻止图片上传</span>
<span class="line">    // return {</span>
<span class="line">    //   prevent: true,</span>
<span class="line">    //   msg: &#39;需要提示给用户的错误信息&#39;</span>
<span class="line">    // }</span>
<span class="line">  },</span>
<span class="line">  // 图片上传并返回了结果，图片插入已成功</span>
<span class="line">  success: function(xhr) {</span>
<span class="line">    console.log(&#39;success&#39;, xhr)</span>
<span class="line">  },</span>
<span class="line">  // 图片上传并返回了结果，但图片插入时出错了</span>
<span class="line">  fail: function(xhr, editor, resData) {</span>
<span class="line">    console.log(&#39;fail&#39;, resData)</span>
<span class="line">  },</span>
<span class="line">  // 上传图片出错，一般为 http 请求的错误</span>
<span class="line">  error: function(xhr, editor, resData) {</span>
<span class="line">    console.log(&#39;error&#39;, xhr, resData)</span>
<span class="line">  },</span>
<span class="line">  // 上传图片超时</span>
<span class="line">  timeout: function(xhr) {</span>
<span class="line">    console.log(&#39;timeout&#39;)</span>
<span class="line">  },</span>
<span class="line">  // 图片上传并返回了结果，想要自己把图片插入到编辑器中</span>
<span class="line">  // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert</span>
<span class="line">  customInsert: function(insertImgFn, result) {</span>
<span class="line">    // result 即服务端返回的接口</span>
<span class="line">    console.log(&#39;customInsert&#39;, result)</span>
<span class="line"></span>
<span class="line">    // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可</span>
<span class="line">    insertImgFn(result.data.url)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",c],["__file","wangeditor上传图片.html.vue"]]),t=JSON.parse('{"path":"/content/front/js/wangeditor%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87.html","title":"wangeditor上传图片","lang":"en-US","frontmatter":{"sidebar":false,"title":"wangeditor上传图片","description":"wangeditor上传图片"},"headers":[],"git":{},"filePathRelative":"content/front/js/wangeditor上传图片.md"}');export{p as comp,t as data};
