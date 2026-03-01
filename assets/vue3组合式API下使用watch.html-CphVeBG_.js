import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>vue3组合式API下使用watch:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let router = useRouter()</span>
<span class="line">   // 监听当前路由变化</span>
<span class="line">    watch(</span>
<span class="line">      () =&gt; router.currentRoute.value,</span>
<span class="line">      () =&gt; {</span>
<span class="line">       	console.log(&quot;路由变化了&quot;)</span>
<span class="line">      }</span>
<span class="line">    );</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一个注意点:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vue3的watch细节:</span>
<span class="line">watch(</span>
<span class="line">  () =&gt; props.isOverflowVisible,</span>
<span class="line">  (val) =&gt; {</span>
<span class="line">    console.log(&quot;props is:&quot;, val)</span>
<span class="line">  },</span>
<span class="line">  { immediate: true }</span>
<span class="line">)</span>
<span class="line">这种写法有以下几点需要注意：</span>
<span class="line">  </span>
<span class="line">我们使用了一个函数 () =&gt; props.isOverflowVisible 来返回要监视的值，而不是直接传递 props.isOverflowVisible。这是因为在组合式 API 中，我们需要使用函数来访问 reactive 对象的属性。</span>
<span class="line">第二个参数是回调函数，它会在监视的值变化时被调用。</span>
<span class="line">第三个参数是一个选项对象，我们在这里设置 immediate: true。</span>
<span class="line">  </span>
<span class="line">使用这种方式，watch 将会在组件挂载时立即执行一次，输出当前的 isOverflowVisible 值，然后在每次 isOverflowVisible 改变时再次执行。</span>
<span class="line">这对于调试很有用，可以让你立即看到初始值，而不需要等待值的第一次变化。它也适用于那些你需要基于 prop 的初始值执行某些操作的场景。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=n(l,[["render",t],["__file","vue3组合式API下使用watch.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/vue3%E7%BB%84%E5%90%88%E5%BC%8FAPI%E4%B8%8B%E4%BD%BF%E7%94%A8watch.html","title":"vue3组合式API下使用watch","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3组合式API下使用watch","description":"vue3组合式API下使用watch"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3组合式API下使用watch.md"}');export{d as comp,p as data};
