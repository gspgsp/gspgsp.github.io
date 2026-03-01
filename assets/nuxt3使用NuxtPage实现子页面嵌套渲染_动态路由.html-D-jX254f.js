import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>nuxt3使用NuxtPage实现子页面嵌套渲染_动态路由:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">-| pages/</span>
<span class="line">---| parent/</span>
<span class="line">------| child.vue</span>
<span class="line">---| parent.vue</span>
<span class="line">  </span>
<span class="line">最终渲染后的route:</span>
<span class="line">[</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/parent&#39;,</span>
<span class="line">    component: &#39;~/pages/parent.vue&#39;,</span>
<span class="line">    name: &#39;parent&#39;,</span>
<span class="line">    children: [</span>
<span class="line">      {</span>
<span class="line">        path: &#39;child&#39;,</span>
<span class="line">        component: &#39;~/pages/parent/child.vue&#39;,</span>
<span class="line">        name: &#39;parent-child&#39;</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line">上面这个有一个非常好用的场景就是，当站点有sidebar的时候，可以把sidebar定义为上面这种格式，通过不同的child去渲染页面</span>
<span class="line">  </span>
<span class="line">//To display the child.vue component, you have to insert the &lt;NuxtPage&gt; component inside pages/parent.vue</span>
<span class="line">pages/parent.vue:</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;h1&gt;I am the parent view&lt;/h1&gt;</span>
<span class="line">    &lt;NuxtPage :foobar=&quot;123&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">pages/parent/child.vue:</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">const props = defineProps([&#39;foobar&#39;])</span>
<span class="line">  </span>
<span class="line">console.log(props.foobar)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">参考：https://nuxt.com/docs/guide/directory-structure/pages</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(l,[["render",t],["__file","nuxt3使用NuxtPage实现子页面嵌套渲染_动态路由.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/nuxt3%E4%BD%BF%E7%94%A8NuxtPage%E5%AE%9E%E7%8E%B0%E5%AD%90%E9%A1%B5%E9%9D%A2%E5%B5%8C%E5%A5%97%E6%B8%B2%E6%9F%93_%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1.html","title":"nuxt3使用NuxtPage实现子页面嵌套渲染_动态路由","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3使用NuxtPage实现子页面嵌套渲染_动态路由","description":"nuxt3使用NuxtPage实现子页面嵌套渲染_动态路由"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3使用NuxtPage实现子页面嵌套渲染_动态路由.md"}');export{d as comp,r as data};
