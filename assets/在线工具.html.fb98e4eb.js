import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const l={},t=s(`<p>1.\u5728\u7EBF\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177 [\u94FE\u63A5] https://www.aconvert.com/cn/image/png-to-svg/</p><p>2.\u5728\u7EBF\u989C\u8272\u53CD\u8F6C\u5DE5\u5177 [\u94FE\u63A5]<br> https://fontmeme.com/zh/invert-colors/</p><p>3.\u5728\u7EBFbcrypt\u52A0\u5BC6\u6570\u636E [\u94FE\u63A5]<br> https://bcrypt.online/</p><p>4.\u5728\u7EBF\u8D1D\u585E\u5C14\u66F2\u7EBF\u8BA1\u7B97( cubic-bezier ) [\u94FE\u63A5] https://cubic-bezier.com/</p><p>5.\u597D\u7528\u7684\u5BCC\u6587\u672C\u7F16\u8F91\u5668 TinyMCE [\u94FE\u63A5] https://www.tiny.cloud/</p><p>\u8865\u5145\uFF1A https://www.tiny.cloud/docs/tinymce/6/creating-a-plugin/?_ga=2.45605092.1100574337.1686531043-87378848.1686272359#example-using-external_plugins //\u7528\u6237\u81EA\u5B9A\u4E49plugins\u6216\u8005\u6536\u8D39plugins\u7684\u914D\u7F6E</p><p>https://www.tiny.cloud/docs/tinymce/6/vue-ref/#form-input-bindings-v-model //vue\u7ED1\u5B9A\u4E0D\u751F\u6548\u95EE\u9898\uFF0C\u4E3B\u8981\u662Fvue\u7248\u672C\u7684\u95EE\u9898 vue2\u548Cvue3\u4E0D\u901A\u7528</p><p>https://www.tiny.cloud/docs/tinymce/6/toolbar-configuration-options/ //toolbar\u8BBE\u7F6E</p><p>\u81EA\u5B9A\u4E49\u56FE\u7247\u4E0A\u4F20:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0A\u4F20\u56FE\u7247\u5B8C\u6210\u4EE5\u540E\u62A5\uFF1AError: Errors: Failed path: (data &gt; src) Could not find valid \u9519\u8BEF: \u4E3B\u8981\u662FtinyMCE\u7248\u672C\u7684\u95EE\u9898 6/5\u4E0D\u4E00\u6837
v6:https://www.tiny.cloud/docs/tinymce/6/upload-images/#example-using-images_upload_handler
images_upload_handler: async (blobInfo, success) =&gt; new Promise(async (resolve, reject) =&gt; {
  const file = blobInfo.blob()
  const {url} = await this.uploadFile(file, &#39;image&#39;)
  console.log(url)
  resolve(url);
})


v5:https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
images_upload_handler: async (blobInfo, success) =&gt; {
const file = blobInfo.blob()
const { url } = await this.uploadFile(file, &#39;image&#39;)
console.log(url)
success(url)
}

\u81EA\u5B9A\u4E49\u56FE\u7247\u4E0A\u4F20\u7684\u65F6\u5019\uFF0C\u56FE\u7247\u8DEF\u5F84\u4F1A\u88AB\u8F6C\u6362\u4E3A\u76F8\u5BF9\u8DEF\u5F84\u7684\u95EE\u9898 \uFF0C\u8FD9\u4E2A\u95EE\u9898\u53EA\u9700\u8981\u5728\u521D\u59CB\u5316\u662F\u6DFB\u52A0\u4E00\u4E2A\u53C2\u6570\u5373\u53EF\u89E3\u51B3  convert_urls: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.\u5728\u7EBF\u989C\u8272\u5B9A\u4E49 [\u94FE\u63A5] https://convertingcolors.com/rgb-color-0_0_0.html?search=RGB(0,%200,%200)</p><p>7.\u8C37\u6B4C\u7AD9\u70B9\u9A8C\u8BC1 [\u94FE\u63A5] https://www.google.com/recaptcha/about/</p><p>8.\u5728\u7EBF\u751F\u6210 ics \u65E5\u5386\u6587\u4EF6 [\u94FE\u63A5] https://ical.marudot.com/</p><p>\u5404\u5E73\u53F0\u5BF9\u5E94\u65E5\u5386\u683C\u5F0F\u53C2\u6570: https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/tree/main/services</p><p>9.icon\u8BBE\u8BA1 [\u94FE\u63A5] https://www.iconfinder.com/</p><p>10.php\u81EA\u52A8\u53D1\u5E03\u5DE5\u5177deployer [\u94FE\u63A5] https://deployer.org/</p>`,16),o=[t];function c(a,d){return n(),i("div",null,o)}var p=e(l,[["render",c],["__file","\u5728\u7EBF\u5DE5\u5177.html.vue"]]);export{p as default};
