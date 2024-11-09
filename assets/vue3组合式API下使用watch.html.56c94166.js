import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>vue3\u7EC4\u5408\u5F0FAPI\u4E0B\u4F7F\u7528watch:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let router = useRouter()
   // \u76D1\u542C\u5F53\u524D\u8DEF\u7531\u53D8\u5316
    watch(
      () =&gt; router.currentRoute.value,
      () =&gt; {
       	console.log(&quot;\u8DEF\u7531\u53D8\u5316\u4E86&quot;)
      }
    );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u6709\u4E00\u4E2A\u6CE8\u610F\u70B9:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vue3\u7684watch\u7EC6\u8282:
watch(
  () =&gt; props.isOverflowVisible,
  (val) =&gt; {
    console.log(&quot;props is:&quot;, val)
  },
  { immediate: true }
)
\u8FD9\u79CD\u5199\u6CD5\u6709\u4EE5\u4E0B\u51E0\u70B9\u9700\u8981\u6CE8\u610F\uFF1A
  
\u6211\u4EEC\u4F7F\u7528\u4E86\u4E00\u4E2A\u51FD\u6570 () =&gt; props.isOverflowVisible \u6765\u8FD4\u56DE\u8981\u76D1\u89C6\u7684\u503C\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F20\u9012 props.isOverflowVisible\u3002\u8FD9\u662F\u56E0\u4E3A\u5728\u7EC4\u5408\u5F0F API \u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u51FD\u6570\u6765\u8BBF\u95EE reactive \u5BF9\u8C61\u7684\u5C5E\u6027\u3002
\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u56DE\u8C03\u51FD\u6570\uFF0C\u5B83\u4F1A\u5728\u76D1\u89C6\u7684\u503C\u53D8\u5316\u65F6\u88AB\u8C03\u7528\u3002
\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u9009\u9879\u5BF9\u8C61\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u8BBE\u7F6E immediate: true\u3002
  
\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0Cwatch \u5C06\u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\u7ACB\u5373\u6267\u884C\u4E00\u6B21\uFF0C\u8F93\u51FA\u5F53\u524D\u7684 isOverflowVisible \u503C\uFF0C\u7136\u540E\u5728\u6BCF\u6B21 isOverflowVisible \u6539\u53D8\u65F6\u518D\u6B21\u6267\u884C\u3002
\u8FD9\u5BF9\u4E8E\u8C03\u8BD5\u5F88\u6709\u7528\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u7ACB\u5373\u770B\u5230\u521D\u59CB\u503C\uFF0C\u800C\u4E0D\u9700\u8981\u7B49\u5F85\u503C\u7684\u7B2C\u4E00\u6B21\u53D8\u5316\u3002\u5B83\u4E5F\u9002\u7528\u4E8E\u90A3\u4E9B\u4F60\u9700\u8981\u57FA\u4E8E prop \u7684\u521D\u59CB\u503C\u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\u7684\u573A\u666F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[d];function r(a,t){return i(),n("div",null,v)}var u=e(l,[["render",r],["__file","vue3\u7EC4\u5408\u5F0FAPI\u4E0B\u4F7F\u7528watch.html.vue"]]);export{u as default};
