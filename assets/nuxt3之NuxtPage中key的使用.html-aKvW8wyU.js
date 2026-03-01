import{_ as n,c as s,f as a,o as t}from"./app-BB_BIQV8.js";const i={};function l(u,e){return t(),s("div",null,e[0]||(e[0]=[a(`<p>nuxt3之NuxtPage中key的使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">For example, passing static key, NuxtPage component is rendered only once when it is mounted.</span>
<span class="line">  </span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;NuxtLayout</span>
<span class="line">    name=&quot;event-subpage&quot;</span>
<span class="line">    :can-display-sidebar</span>
<span class="line">  &gt;</span>
<span class="line">    &lt;NuxtPage page-key=&quot;static&quot; /&gt;</span>
<span class="line">  &lt;/NuxtLayout&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;NuxtPage&gt;: 这是Nuxt.js中用于渲染当前路由页面内容的组件。</span>
<span class="line">  </span>
<span class="line">page-key=&quot;static&quot;: 这个属性用于强制组件重新渲染。设置为&quot;static&quot;意味着 &lt;NuxtPage&gt; 组件实例保持不变，但它内部的路由匹配逻辑仍然正常工作，允许子页面根据路由变化而更新。</span>
<span class="line">当在 parent.vue 中使用 &lt;NuxtPage page-key=&quot;static&quot; /&gt; 时，整个 parent.vue 组件应该也不会重新渲染。</span>
<span class="line">这包括 parent.vue 中的所有静态内容和 &lt;NuxtPage&gt; 组件本身。</span>
<span class="line">  </span>
<span class="line">参考: https://nuxt.com/docs/api/components/nuxt-page</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(i,[["render",l],["__file","nuxt3之NuxtPage中key的使用.html.vue"]]),d=JSON.parse('{"path":"/content/front/js/nuxt3%E4%B9%8BNuxtPage%E4%B8%ADkey%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"nuxt3之NuxtPage中key的使用_动态路由","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3之NuxtPage中key的使用_动态路由","description":"nuxt3之NuxtPage中key的使用_动态路由"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3之NuxtPage中key的使用.md"}');export{p as comp,d as data};
