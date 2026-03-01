import{_ as n,c as e,f as i,o as l}from"./app-BB_BIQV8.js";const a={};function t(c,s){return l(),e("div",null,s[0]||(s[0]=[i(`<p>1.在线图片格式转换工具 [链接] https://www.aconvert.com/cn/image/png-to-svg/</p><p>2.在线颜色反转工具 [链接]<br> https://fontmeme.com/zh/invert-colors/</p><p>3.在线bcrypt加密数据 [链接]<br> https://bcrypt.online/</p><p>4.在线贝塞尔曲线计算( cubic-bezier ) [链接] https://cubic-bezier.com/</p><p>5.好用的富文本编辑器 TinyMCE [链接] https://www.tiny.cloud/</p><p>补充： https://www.tiny.cloud/docs/tinymce/6/creating-a-plugin/?_ga=2.45605092.1100574337.1686531043-87378848.1686272359#example-using-external_plugins //用户自定义plugins或者收费plugins的配置</p><p>https://www.tiny.cloud/docs/tinymce/6/vue-ref/#form-input-bindings-v-model //vue绑定不生效问题，主要是vue版本的问题 vue2和vue3不通用</p><p>https://www.tiny.cloud/docs/tinymce/6/toolbar-configuration-options/ //toolbar设置</p><p>自定义图片上传:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">上传图片完成以后报：Error: Errors: Failed path: (data &gt; src) Could not find valid 错误: 主要是tinyMCE版本的问题 6/5不一样</span>
<span class="line">v6:https://www.tiny.cloud/docs/tinymce/6/upload-images/#example-using-images_upload_handler</span>
<span class="line">images_upload_handler: async (blobInfo, success) =&gt; new Promise(async (resolve, reject) =&gt; {</span>
<span class="line">  const file = blobInfo.blob()</span>
<span class="line">  const {url} = await this.uploadFile(file, &#39;image&#39;)</span>
<span class="line">  console.log(url)</span>
<span class="line">  resolve(url);</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">v5:https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler</span>
<span class="line">images_upload_handler: async (blobInfo, success) =&gt; {</span>
<span class="line">const file = blobInfo.blob()</span>
<span class="line">const { url } = await this.uploadFile(file, &#39;image&#39;)</span>
<span class="line">console.log(url)</span>
<span class="line">success(url)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">自定义图片上传的时候，图片路径会被转换为相对路径的问题 ，这个问题只需要在初始化是添加一个参数即可解决  convert_urls: false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.在线颜色定义 [链接] https://convertingcolors.com/rgb-color-0_0_0.html?search=RGB(0,%200,%200)</p><p>7.谷歌站点验证 [链接] https://www.google.com/recaptcha/about/</p><p>8.在线生成 ics 日历文件 [链接] https://ical.marudot.com/</p><p>各平台对应日历格式参数: https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/tree/main/services</p><p>9.icon设计 [链接] https://www.iconfinder.com/</p><p>10.php自动发布工具deployer [链接] https://deployer.org/</p>`,16)]))}const o=n(a,[["render",t],["__file","在线工具.html.vue"]]),r=JSON.parse('{"path":"/content/other/spread/%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7.html","title":"在线工具","lang":"en-US","frontmatter":{"sidebar":false,"title":"在线工具","description":"在线工具"},"headers":[],"git":{},"filePathRelative":"content/other/spread/在线工具.md"}');export{o as comp,r as data};
