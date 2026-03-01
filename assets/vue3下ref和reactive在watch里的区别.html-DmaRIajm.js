import{_ as n,c as a,f as t,o as s}from"./app-BB_BIQV8.js";const c={};function i(l,e){return s(),a("div",null,e[0]||(e[0]=[t(`<p>vue3下ref和reactive在watch里的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Vue 会自动解包 ref，所以可以直接 watch(count)，不需要 watch(() =&gt; count.value)</span>
<span class="line">1.ref 在 watch 里可以省略 .value:</span>
<span class="line">const count = ref(0);</span>
<span class="line">watch(count, (newValue) =&gt; {</span>
<span class="line">  console.log(&quot;Count changed:&quot;, newValue);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">2.reactive 需要 watch 某个具体属性:</span>
<span class="line">const state = reactive({ count: 0 });</span>
<span class="line">watch(() =&gt; state.count, (newValue) =&gt; {</span>
<span class="line">  console.log(&quot;State.count changed:&quot;, newValue);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const v=n(c,[["render",i],["__file","vue3下ref和reactive在watch里的区别.html.vue"]]),o=JSON.parse('{"path":"/content/front/js/vue3%E4%B8%8Bref%E5%92%8Creactive%E5%9C%A8watch%E9%87%8C%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"vue3下ref和reactive在watch里的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3下ref和reactive在watch里的区别","head":[["meta",{"name":"title","content":"vue3下ref和reactive在watch里的区别"}],["meta",{"name":"description","content":"vue3下ref和reactive在watch里的区别"}],["meta",{"name":"keywords","content":"ref,reactive,watch"}],["meta",{"property":"og:title","content":"vue3下ref和reactive在watch里的区别"}],["meta",{"property":"og:description","content":"vue3下ref和reactive在watch里的区别"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3下ref和reactive在watch里的区别.md"}');export{v as comp,o as data};
