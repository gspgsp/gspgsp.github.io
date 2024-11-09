import{_ as e,o as n,c as i,g as l}from"./app.66ae8700.js";const s={},d=l(`<p>js\u81EA\u5B9A\u4E49\u7684\u6EDA\u52A8\u6761:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u81EA\u5B9A\u4E49\u4E00\u4E2A\u5F00\u5173\u6EDA\u52A8\u6761

&lt;script setup lang=&quot;ts&quot;&gt;
const volume = ref(10)
const updateVolume = (val) =&gt; {
  console.log(&quot;val is:&quot;, val)
}
&lt;/script&gt;
&lt;template&gt;
    &lt;div class=&quot;volume-container&quot;&gt;
      &lt;div class=&quot;volume-controls&quot;&gt;
        &lt;span class=&quot;volume-control&quot;&gt;-&lt;/span&gt;
        &lt;span class=&quot;volume-control&quot;&gt;+&lt;/span&gt;
      &lt;/div&gt;
      &lt;input
        type=&quot;range&quot;
        min=&quot;10&quot;
        max=&quot;20&quot;
        v-model=&quot;volume&quot;
        @input=&quot;updateVolume&quot;
        class=&quot;volume-slider&quot;
      /&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;style scoped&gt;
.volume-container{
  max-width: 180px;
  width: 100%;
  margin: 60px auto;
}
.volume-controls{
display: flex;
justify-content: space-between;
align-items: center;
  height: 8px;
  margin-bottom: 4px;
}
.volume-slider{
max-width: 100%;
  width: 100%;
}
&lt;/style&gt;

\u5B98\u65B9\u4F8B\u5B50\u4EE3\u7801:https://github.com/advanced-cropper/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/circle-example.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function v(a,u){return n(),i("div",null,t)}var r=e(s,[["render",v],["__file","js\u81EA\u5B9A\u4E49\u7684\u6EDA\u52A8\u6761.html.vue"]]);export{r as default};
