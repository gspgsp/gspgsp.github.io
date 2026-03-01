import{_ as e,c as s,f as i,o as l}from"./app-BB_BIQV8.js";const a={};function t(d,n){return l(),s("div",null,n[0]||(n[0]=[i(`<h5 id="vue3下自定义一个file对象" tabindex="-1"><a class="header-anchor" href="#vue3下自定义一个file对象"><span>vue3下自定义一个File对象:</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在实际香红木开发过程中，有时候会用到 File 类型做文件的上传，一个标准的 File 对象，一般包含如下信息:</span>
<span class="line">属性名 | 类型 | 说明</span>
<span class="line">name | string | 文件名，例如 example.jpg</span>
<span class="line">lastModified | number | 文件最后修改时间的时间戳（毫秒）</span>
<span class="line">lastModifiedDate | Date（已废弃） | 已废弃的属性，请使用 lastModified</span>
<span class="line">webkitRelativePath | string | 如果通过 &lt;input webkitdirectory&gt; 选择目录时的相对路径</span>
<span class="line">size | number | 文件大小（字节数）</span>
<span class="line">type | string | 文件 MIME 类型，例如 image/png、application/pdf</span>
<span class="line">arrayBuffer() | Promise&lt;ArrayBuffer&gt; | 获取文件内容的 ArrayBuffer 表示</span>
<span class="line">slice() | 方法 | 用于从文件中提取部分内容</span>
<span class="line">stream() | 方法 | 返回一个可读的 ReadableStream，用于流式读取内容</span>
<span class="line">text() | Promise&lt;string&gt; | 返回文件内容的文本形式（例如 .txt 文件）</span>
<span class="line"></span>
<span class="line">但是有时候，我们可能需要自己定义一个 File 类型，比如定义了了一个其它的属性name2，这样代码是可以执行的，但是 ts 类型检查会报错，因为类型不一致. 为了解决这个问题，可以通过如下方式解决，</span>
<span class="line">function createFakeFileWithSize(name: string, size: number, type: string): File {</span>
<span class="line">  const blobContent = new Uint8Array(size); // 此时的array大小就是这个 size 的大小</span>
<span class="line">  console.log(&quot;blobContent:&quot;, blobContent);</span>
<span class="line">  return new File([blobContent], name, {</span>
<span class="line">    type,</span>
<span class="line">    lastModified: Date.now(), // 可以不要，默认就是当前时间</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">console.log(&quot;fakeFile is:&quot;, createFakeFileWithSize(&quot;placeholder.pdf&quot;, 2048, &quot;application/pdf&quot;));</span>
<span class="line"></span>
<span class="line">主要逻辑就是，将自定义的File, 重新伪造一个标准的File对象，这里通过 Uint8Array 生成一个 blod 对象，主要用来保存这个 size 的大小，不能之间诶给File对象传递sise,这个size和content大小，他表示的是[内容]数组的大小</span>
<span class="line">所以这里通过这个blob对象模拟一个相同大小的size对象, 上面的 placeholder.pdf(可以是name2，这里赋值给标准File) 其实就是标准File的名称，application/pdf 为文件类型</span>
<span class="line"></span>
<span class="line">//使用 Blod 声明一个blob对象</span>
<span class="line">const blob = new Blob([&quot;Hello World&quot;], {</span>
<span class="line">  type: &quot;text/plain&quot;</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">console.log(&quot;blob is:&quot;, blob)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=e(a,[["render",t],["__file","vue3下自定义一个File对象.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/vue3%E4%B8%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AAFile%E5%AF%B9%E8%B1%A1.html","title":"vue3下自定义一个File对象","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3下自定义一个File对象","head":[["meta",{"name":"title","content":"vue3下自定义一个File对象"}],["meta",{"name":"description``","content":"vue3下自定义一个File对象"}],["meta",{"name":"keywords","content":"vue3,file"}],["meta",{"property":"og:title","content":"vue3下自定义一个File对象"}],["meta",{"property":"og:description","content":"vue3下自定义一个File对象"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3下自定义一个File对象.md"}');export{r as comp,p as data};
