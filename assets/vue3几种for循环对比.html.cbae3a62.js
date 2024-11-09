import{_ as e,o as i,c as n,g as d}from"./app.66ae8700.js";const s={},l=d(`<p>vue3\u51E0\u79CDfor\u5FAA\u73AF\u5BF9\u6BD4:</p><blockquote></blockquote><p>vue3 \u5BF9\u6570\u636E\u5217\u8868\u5FAA\u73AF,\u4FEE\u6539\u6307\u5B9A\u4E0B\u6807\u7684\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;forEach\u5FAA\u73AF
const setItemsInactive = (index: number) =&gt; {
  list.value.forEach((item, idx) =&gt; {
    if (idx !== index) {
      item.isActive = false;
    }
  });
};
  
2&gt;for...of\u5FAA\u73AF
const showSectionAction = (index: number) =&gt; {
  for (const [idx, item] of ticketList.value.entries()) {
    if (idx !== index) {
      item.showAction = false;
    }
  }
  ticketList.value[index].showAction = !ticketList.value[index].showAction;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="foreach-\u548C-for-of-\u7684\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#foreach-\u548C-for-of-\u7684\u5BF9\u6BD4" aria-hidden="true">#</a> <code>forEach</code> \u548C <code>for...of</code> \u7684\u5BF9\u6BD4</h6><ul><li><strong><code>forEach</code> \u7B80\u6D01\u6027</strong>\uFF1A\u5728\u9700\u8981\u904D\u5386\u6BCF\u4E2A\u5143\u7D20\u5E76\u8BBF\u95EE\u7D22\u5F15\u7684\u60C5\u51B5\u4E0B\uFF0C<code>forEach</code> \u786E\u5B9E\u66F4\u7B80\u6D01\uFF0C\u4E0D\u9700\u8981\u89E3\u6784\u3002</li><li><strong><code>for...of</code> \u7684\u7075\u6D3B\u6027</strong>\uFF1A\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C<code>for...of</code> \u63D0\u4F9B\u4E86\u66F4\u591A\u63A7\u5236\u6D41\u7684\u7075\u6D3B\u6027\u3002\u6BD4\u5982\uFF0C\u53EF\u4EE5\u5728\u5FAA\u73AF\u4E2D\u4F7F\u7528 <code>break</code> \u548C <code>continue</code>\uFF0C\u800C <code>forEach</code> \u4E0D\u652F\u6301\u8FD9\u4E9B\u63A7\u5236\u6D41\u64CD\u4F5C\uFF08\u5982\u679C\u9700\u8981\u63D0\u524D\u9000\u51FA\u5FAA\u73AF\u65F6\uFF0C<code>for...of</code> \u66F4\u65B9\u4FBF\uFF09\u3002</li></ul><h6 id="\u9009\u62E9\u7684\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u7684\u5EFA\u8BAE" aria-hidden="true">#</a> \u9009\u62E9\u7684\u5EFA\u8BAE</h6><p>\u5982\u679C\u904D\u5386\u903B\u8F91\u7B80\u5355\u800C\u4E14\u4E0D\u6D89\u53CA\u590D\u6742\u7684\u63A7\u5236\u6D41\uFF08\u5982\u63D0\u524D\u9000\u51FA\uFF09\uFF0C<code>forEach</code> \u662F\u975E\u5E38\u597D\u7684\u9009\u62E9\u3002\u60A8\u53EF\u4EE5\u653E\u5FC3\u5730\u4F7F\u7528 <code>forEach</code>\uFF0C\u9664\u975E\u9879\u76EE\u7684 lint \u6216\u683C\u5F0F\u5316\u5DE5\u5177\u6709\u7279\u5B9A\u7684\u8981\u6C42\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>3&gt;\u7ECF\u5178\u7684for\u5FAA\u73AF
for(let i = 0; i &lt; list.value.length;i++){
//\u903B\u8F91
}
\u539F\u751F for \u5FAA\u73AF\u53EF\u4EE5\u907F\u514D\u8FED\u4EE3\u5668\u521B\u5EFA\uFF08\u5982 forEach \u6216 for...of \u5FAA\u73AF\uFF09\uFF0C\u5728\u5904\u7406\u5927\u91CF\u6570\u636E\u65F6\u6027\u80FD\u7A0D\u6709\u63D0\u5347\uFF0C\u7279\u522B\u9002\u5408\u5BF9\u6027\u80FD\u8981\u6C42\u9AD8\u7684\u9879\u76EE\u3002
  
4&gt;for...in\u5FAA\u73AF
\u9002\u7528\u4E8E\uFF1A\u4E3B\u8981\u7528\u4E8E\u904D\u5386\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u5C5E\u6027\uFF0C\u4E0D\u63A8\u8350\u7528\u4E8E\u6570\u7EC4\uFF0C\u56E0\u4E3A\u5B83\u904D\u5386\u7684\u662F\u5C5E\u6027\u540D\u800C\u4E0D\u662F\u6570\u7EC4\u503C\u3002
\u7279\u6027\uFF1A\u904D\u5386\u5BF9\u8C61\u7684\u952E\uFF08\u5C5E\u6027\u540D\uFF09\uFF0C\u53EF\u7528\u4E8E\u5BF9\u8C61\u7684\u52A8\u6001\u5C5E\u6027\u64CD\u4F5C\u3002
\u5C40\u9650\u6027\uFF1Afor...in \u4F1A\u904D\u5386\u5BF9\u8C61\u539F\u578B\u94FE\u4E0A\u7684\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\uFF08\u9664\u975E\u4F7F\u7528 hasOwnProperty \u8FDB\u884C\u68C0\u67E5\uFF09\uFF0C\u53EF\u80FD\u5E26\u6765\u610F\u5916\u7ED3\u679C\u3002
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    // \u903B\u8F91
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9009\u62E9\u5EFA\u8BAE
\u6570\u7EC4\u904D\u5386\uFF1A\u4F18\u5148\u8003\u8651 forEach \u6216 for...of\uFF0C\u5C24\u5176\u662F\u5728\u5199\u6CD5\u7B80\u6D01\u6027\u548C\u53EF\u8BFB\u6027\u66F4\u91CD\u8981\u7684\u60C5\u51B5\u4E0B\u3002
\u590D\u6742\u63A7\u5236\u6D41\uFF1A\u5F53\u9700\u8981\u5728\u5FAA\u73AF\u4E2D\u63D0\u524D\u9000\u51FA\u6216\u8DF3\u8FC7\u67D0\u4E9B\u5143\u7D20\u65F6\uFF0Cfor...of \u66F4\u5408\u9002\u3002
\u5BF9\u8C61\u904D\u5386\uFF1A\u5982\u679C\u662F\u666E\u901A\u5BF9\u8C61\uFF0C\u63A8\u8350\u4F7F\u7528 for...in \u6216 Object.keys \u7ED3\u5408 forEach\u3002
\u6027\u80FD\u548C\u7075\u6D3B\u6027\uFF1A\u5728\u9AD8\u6027\u80FD\u8981\u6C42\u7684\u573A\u666F\u4E0B\uFF0C\u4F20\u7EDF\u7684 for \u5FAA\u73AF\uFF08for (let i = 0; i &lt; length; i++)\uFF09\u4F9D\u7136\u662F\u4E00\u4E2A\u975E\u5E38\u597D\u7684\u9009\u62E9\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[l];function r(o,a){return i(),n("div",null,c)}var t=e(s,[["render",r],["__file","vue3\u51E0\u79CDfor\u5FAA\u73AF\u5BF9\u6BD4.html.vue"]]);export{t as default};
