import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<p>\u4E00\u76F4\u4EE5\u6765\uFF0C\u5BF9\u4E8Echan\u7684\u4E24\u4E2A\u65B9\u5411\u6709\u4E00\u4E9B\u5B9A\u4E49\u4E0A\u7684\u6A21\u7CCA\uFF0C\u6709\u8BF4\u5199/\u8BFB\uFF0C\u4F46\u662F\u5B98\u7F51\u4E0A\u4E00\u76F4\u5B9A\u4E49\u7684\u662F send-only type/receive-only type\uFF0C\u90A3\u4E48\u5C31\u6765\u89E3\u91CA\u4E00\u4E0B\u8FD9\u4E24\u4E2A\u7684\u7531\u6765</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
send-only type:
\u6BD4\u5982\uFF1Achan&lt;- int

\u6211\u8FD9\u91CC\u58F0\u660E\u4E00\u4E2Achan
rsc := make(chan&lt;- int )

\u90A3\u4E48\u5C31\u53EA\u80FD rsc &lt;- rand.Int() // \u8FD9\u4E2Asend\u76F8\u5BF9\u4E8E rand.Int() \u6765\u8BB2\u5C31\u662Fsend

receive-only type:
\u6BD4\u5982\uFF1A&lt;-chan int

\u6211\u8FD9\u91CC\u58F0\u660E\u4E00\u4E2Achan
rsc := make(&lt;-chan int )

\u90A3\u4E48\u5C31\u53EA\u80FD intVal := &lt;-rsc // \u8FD9\u4E2Areceive\u76F8\u5BF9\u4E8E intVal \u6765\u8BB2\u5C31\u662Freceive

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[d];function a(r,v){return n(),i("div",null,c)}var m=e(l,[["render",a],["__file","go\u4E4Bchan\u7684send\u4E0Ereceive.html.vue"]]);export{m as default};
