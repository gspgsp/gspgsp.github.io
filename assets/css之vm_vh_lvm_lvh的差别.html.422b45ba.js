import{_ as i,o as e,c as n,g as v}from"./app.6e4bf74b.js";const s={},l=v(`<p>css\u4E4Bvm_vh_lvm_lvh\u7684\u5DEE\u522B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5927\u90E8\u5206\u524D\u7AEF\u90FD\u77E5\u9053\uFF0C\u5728 CSS \u4E16\u754C\u4E2D\uFF0C\u6709 vw\u3001vh\u3001vmax\u3001vmin \u8FD9\u51E0\u4E2A\u4E0E\u89C6\u53E3 Viewport \u76F8\u5173\u7684\u5355\u4F4D\u3002
\u6B63\u5E38\u800C\u8A00\uFF1A
  
1vw \u7B49\u4E8E1/100\u7684\u89C6\u53E3\u5BBD\u5EA6 \uFF08Viewport Width\uFF09
1vh \u7B49\u4E8E1/100\u7684\u89C6\u53E3\u9AD8\u5EA6 \uFF08Viewport Height\uFF09
vmin \u2014 vmin \u7684\u503C\u662F\u5F53\u524D vw \u548C vh \u4E2D\u8F83\u5C0F\u7684\u503C
vmax \u2014 vw \u548C vh \u4E2D\u8F83\u5927\u7684\u503C
  
\u4F46\u662F\uFF0C\u5728\u79FB\u52A8\u7AEF\uFF0C\u60C5\u51B5\u5C31\u4E0D\u592A\u4E00\u6837\u4E86\u3002100vh \u4E0D\u603B\u662F\u7B49\u4E8E\u4E00\u5C4F\u5E55\u7684\u9AD8\u5EA6\u3002\u6709\u7684\u65F6\u5019\uFF0C100vh \u9AD8\u5EA6\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761\u3002
\u6839\u56E0\u5728\u4E8E\uFF1A
\u5F88\u591A\u6D4F\u89C8\u5668\uFF0C\u5728\u8BA1\u7B97 100vh \u7684\u9AD8\u5EA6\u7684\u65F6\u5019\uFF0C\u4F1A\u628A\u5730\u5740\u680F\u7B49\u76F8\u5173\u63A7\u4EF6\u7684\u9AD8\u5EA6\u8BA1\u7B97\u5728\u51852
\u540C\u65F6\uFF0C\u5F88\u591A\u65F6\u5019\uFF0C\u7531\u4E8E\u4F1A\u5F39\u51FA\u8F6F\u952E\u76D8\u7B49\u64CD\u4F5C\uFF0C\u5728\u5F39\u51FA\u7684\u8FC7\u7A0B\u4E2D\uFF0C100vh \u7684\u8BA1\u7B97\u503C\u5E76\u4E0D\u4F1A\u5B9E\u65F6\u53D1\u751F\u53D8\u5316\uFF01
  
\u65B0\u89C6\u53E3\u76F8\u5173\u5355\u4F4D\u4E4B lvh\u3001svh\u3001dvh
\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u7684\u95EE\u9898\uFF0C\u89C4\u8303\u65B0\u63A8\u51FA\u4E86\u4E09\u7C7B\u5355\u4F4D\uFF0C\u5206\u522B\u662F\uFF1A

The large viewport units\uFF08\u5927\u89C6\u53E3\u5355\u4F4D\uFF09\uFF1Alvw,lvh, lvi, lvb, lvmin, and lvmax
The small viewport units\uFF08\u5C0F\u89C6\u53E3\u5355\u4F4D\uFF09\uFF1Asvw, svh, svi, svb, svmin, and svmax
The dynamic viewport units\uFF08\u52A8\u6001\u89C6\u53E3\u5355\u4F4D\uFF09\uFF1Advw, dvh, dvi, dvb, dvmin, and dvmax
\u522B\u770B\u770B\u4E0A\u53BB\u5F88\u591A\uFF0C\u5176\u5B9E\u5F88\u597D\u8BB0\u5FC6\uFF0Cvw/vw/vmax/vmin \u7684\u524D\u7F00\u662F v\uFF0C\u800C\uFF1A
  
\u5927\u89C6\u53E3\u5355\u4F4D\u7684\u524D\u7F00\u662F lv\uFF0C\u610F\u4E3A large viewport
\u5C0F\u89C6\u53E3\u5355\u4F4D\u7684\u524D\u7F00\u662F sv\uFF0C\u610F\u4E3A small viewport
\u52A8\u6001\u89C6\u53E3\u5355\u4F4D\u7684\u524D\u7F00\u662F dv\uFF0C\u610F\u4E3A dynamic viewport
\u8FD9\u91CC\u6211\u4EEC\u7740\u91CD\u5173\u6CE8 lvh\u3001svh\u3001dvh\u3002\u5B83\u4EEC\u4E09\u8005\u4E0E vh \u6709\u4EC0\u4E48\u5F02\u540C\u5462\uFF1F
  
\u5148\u6765\u770B\u5927\u89C6\u53E3\u4E0E\u5C0F\u89C6\u53E3\uFF0C\u89C4\u8303\u5BF9\u5B83\u4EEC\u7684\u5B9A\u4E49\u662F\uFF1A
Large Viewport: The viewport sized assuming any UA interfaces that are dynamically expanded and retracted to be retracted.
Small Viewport: The viewport sized assuming any UA interfaces that are dynamically expanded and retracted to be expanded.
\u7FFB\u8BD1\u4E00\u4E0B\uFF1A
  
\u5927\u89C6\u53E3\uFF08Large Viewport\uFF09\uFF1A\u89C6\u53E3\u5927\u5C0F\u5047\u8BBE\u4EFB\u4F55\u52A8\u6001\u6269\u5C55\u548C\u7F29\u56DE\u7684 UA \u754C\u9762\u90FD\u6CA1\u6709\u5C55\u5F00
\u5C0F\u89C6\u53E3\uFF08Small Viewport\uFF09\uFF1A\u89C6\u53E3\u5927\u5C0F\u5047\u8BBE\u4EFB\u4F55\u52A8\u6001\u6269\u5C55\u548C\u7F29\u56DE\u7684 UA \u754C\u9762\u90FD\u5C55\u5F00\u4E86
  
\u53C2\u8003\u94FE\u63A5:https://www.cnblogs.com/coco1s/p/17078218.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function a(r,m){return e(),n("div",null,d)}var t=i(s,[["render",a],["__file","css\u4E4Bvm_vh_lvm_lvh\u7684\u5DEE\u522B.html.vue"]]);export{t as default};
