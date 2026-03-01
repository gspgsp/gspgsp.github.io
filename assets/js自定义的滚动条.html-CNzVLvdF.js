import{_ as n,c as l,f as a,o as e}from"./app-BB_BIQV8.js";const i={};function t(c,s){return e(),l("div",null,s[0]||(s[0]=[a(`<p>js自定义的滚动条:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//自定义一个开关滚动条</span>
<span class="line"></span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">const volume = ref(10)</span>
<span class="line">const updateVolume = (val) =&gt; {</span>
<span class="line">  console.log(&quot;val is:&quot;, val)</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div class=&quot;volume-container&quot;&gt;</span>
<span class="line">      &lt;div class=&quot;volume-controls&quot;&gt;</span>
<span class="line">        &lt;span class=&quot;volume-control&quot;&gt;-&lt;/span&gt;</span>
<span class="line">        &lt;span class=&quot;volume-control&quot;&gt;+&lt;/span&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;input</span>
<span class="line">        type=&quot;range&quot;</span>
<span class="line">        min=&quot;10&quot;</span>
<span class="line">        max=&quot;20&quot;</span>
<span class="line">        v-model=&quot;volume&quot;</span>
<span class="line">        @input=&quot;updateVolume&quot;</span>
<span class="line">        class=&quot;volume-slider&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.volume-container{</span>
<span class="line">  max-width: 180px;</span>
<span class="line">  width: 100%;</span>
<span class="line">  margin: 60px auto;</span>
<span class="line">}</span>
<span class="line">.volume-controls{</span>
<span class="line">display: flex;</span>
<span class="line">justify-content: space-between;</span>
<span class="line">align-items: center;</span>
<span class="line">  height: 8px;</span>
<span class="line">  margin-bottom: 4px;</span>
<span class="line">}</span>
<span class="line">.volume-slider{</span>
<span class="line">max-width: 100%;</span>
<span class="line">  width: 100%;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line">官方例子代码:https://github.com/advanced-cropper/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/circle-example.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(i,[["render",t],["__file","js自定义的滚动条.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/js%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E6%BB%9A%E5%8A%A8%E6%9D%A1.html","title":"js自定义的滚动条","lang":"en-US","frontmatter":{"sidebar":false,"title":"js自定义的滚动条","description":"js自定义的滚动条"},"headers":[],"git":{},"filePathRelative":"content/front/js/js自定义的滚动条.md"}');export{d as comp,v as data};
