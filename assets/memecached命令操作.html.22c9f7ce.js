import{_ as e,o as i,c as n,g as s}from"./app.dd03cafd.js";const d={},l=s(`<p>memecached\u547D\u4EE4\u64CD\u4F5C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u8FDE\u63A5\u5BA2\u6237\u7AEF
$ telnet 127.0.0.1 11211
  
2.\u67E5\u770Bmemcached\u72B6\u6001
$ stats
  
3.\u67E5\u770B\u6240\u6709\u7684items
$ stats items
  
4.\u67E5\u770B\u6307\u5B9Aitem\uFF0C\u901A\u8FC7\u547D\u4EE4stats cachedump id 0\u83B7\u5F97key\u7684\u503C\u30020\u8868\u793A\u5168\u90E8\u5217\u51FA
$ stats cachedump 7 0
  
5.\u83B7\u53D6\u77E5\u9053\u4F60\u529F\u592Bkey\u5BF9\u5E94\u7684\u503C
$ get 15711150681vc //get\u547D\u4EE4\u83B7\u5F97key\u7684\u503C
  
6.\u5220\u9664key
flush_all

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function a(v,t){return i(),n("div",null,c)}var r=e(d,[["render",a],["__file","memecached\u547D\u4EE4\u64CD\u4F5C.html.vue"]]);export{r as default};
