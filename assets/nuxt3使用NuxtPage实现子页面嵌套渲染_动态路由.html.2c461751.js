import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>nuxt3\u4F7F\u7528NuxtPage\u5B9E\u73B0\u5B50\u9875\u9762\u5D4C\u5957\u6E32\u67D3_\u52A8\u6001\u8DEF\u7531:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-| pages/
---| parent/
------| child.vue
---| parent.vue
  
\u6700\u7EC8\u6E32\u67D3\u540E\u7684route:
[
  {
    path: &#39;/parent&#39;,
    component: &#39;~/pages/parent.vue&#39;,
    name: &#39;parent&#39;,
    children: [
      {
        path: &#39;child&#39;,
        component: &#39;~/pages/parent/child.vue&#39;,
        name: &#39;parent-child&#39;
      }
    ]
  }
]
\u4E0A\u9762\u8FD9\u4E2A\u6709\u4E00\u4E2A\u975E\u5E38\u597D\u7528\u7684\u573A\u666F\u5C31\u662F\uFF0C\u5F53\u7AD9\u70B9\u6709sidebar\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u628Asidebar\u5B9A\u4E49\u4E3A\u4E0A\u9762\u8FD9\u79CD\u683C\u5F0F\uFF0C\u901A\u8FC7\u4E0D\u540C\u7684child\u53BB\u6E32\u67D3\u9875\u9762
  
//To display the child.vue component, you have to insert the &lt;NuxtPage&gt; component inside pages/parent.vue
pages/parent.vue:
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;I am the parent view&lt;/h1&gt;
    &lt;NuxtPage :foobar=&quot;123&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
  
pages/parent/child.vue:
&lt;script setup lang=&quot;ts&quot;&gt;
const props = defineProps([&#39;foobar&#39;])
  
console.log(props.foobar)
&lt;/script&gt;
  
\u53C2\u8003\uFF1Ahttps://nuxt.com/docs/guide/directory-structure/pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function t(v,r){return n(),i("div",null,a)}var u=e(l,[["render",t],["__file","nuxt3\u4F7F\u7528NuxtPage\u5B9E\u73B0\u5B50\u9875\u9762\u5D4C\u5957\u6E32\u67D3_\u52A8\u6001\u8DEF\u7531.html.vue"]]);export{u as default};
