import{_ as n,c as s,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(r,e){return a(),s("div",null,e[0]||(e[0]=[l(`<p>form表单上传的时候获取file对象的方法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">我有如下vue3的upload方法</span>
<span class="line">const upload = (newFiles: File[] | null) =&gt; {</span>
<span class="line">  if (!newFiles || newFiles.length === 0) {</span>
<span class="line">    return;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  const uploadedFile = newFiles[0];</span>
<span class="line">  const formData = new FormData();</span>
<span class="line">  formData.append(&quot;file&quot;, uploadedFile);</span>
<span class="line"></span>
<span class="line">  console.log(&quot;formData is:&quot;, formData) // 打印出来为空</span>
<span class="line">  console.log(&#39;file: &#39;, formData.get(&#39;file&#39;)); // 可以打印出数据，这个很重要</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(i,[["render",t],["__file","form表单上传的时候获取file对象的方法.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/form%E8%A1%A8%E5%8D%95%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%97%B6%E5%80%99%E8%8E%B7%E5%8F%96file%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95.html","title":"form表单上传的时候获取file对象的方法","lang":"en-US","frontmatter":{"sidebar":false,"title":"form表单上传的时候获取file对象的方法","description":"form表单上传的时候获取file对象的方法"},"headers":[],"git":{},"filePathRelative":"content/front/js/form表单上传的时候获取file对象的方法.md"}');export{d as comp,c as data};
