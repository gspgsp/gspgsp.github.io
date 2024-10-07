import{_ as e,o as n,c as i,g as l}from"./app.d66d8774.js";const s={},a=l(`<p>form\u8868\u5355\u4E0A\u4F20\u7684\u65F6\u5019\u83B7\u53D6file\u5BF9\u8C61\u7684\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6211\u6709\u5982\u4E0Bvue3\u7684upload\u65B9\u6CD5
const upload = (newFiles: File[] | null) =&gt; {
  if (!newFiles || newFiles.length === 0) {
    return;
  }

  const uploadedFile = newFiles[0];
  const formData = new FormData();
  formData.append(&quot;file&quot;, uploadedFile);

  console.log(&quot;formData is:&quot;, formData) // \u6253\u5370\u51FA\u6765\u4E3A\u7A7A
  console.log(&#39;file: &#39;, formData.get(&#39;file&#39;)); // \u53EF\u4EE5\u6253\u5370\u51FA\u6570\u636E\uFF0C\u8FD9\u4E2A\u5F88\u91CD\u8981
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function o(t,r){return n(),i("div",null,d)}var u=e(s,[["render",o],["__file","form\u8868\u5355\u4E0A\u4F20\u7684\u65F6\u5019\u83B7\u53D6file\u5BF9\u8C61\u7684\u65B9\u6CD5.html.vue"]]);export{u as default};
