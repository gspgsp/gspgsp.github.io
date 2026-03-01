import{_ as s,c as i,f as e,o as a}from"./app-BB_BIQV8.js";const l={};function t(d,n){return a(),i("div",null,n[0]||(n[0]=[e(`<p>nuxt3使用动态路由的时候，遇到一个蛋疼的问题，如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">navigateTo({</span>
<span class="line">    name: &quot;user-dashboard-event-series-edit-detail-id&quot;,</span>
<span class="line">    params:{</span>
<span class="line">      id: id</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">  </span>
<span class="line">使用 nuxtlink的时候一直报错，后来发现 to 参数里也是需要 params的</span>
<span class="line">&lt;NuxtLink</span>
<span class="line">      :to=&quot;{ name: &#39;user-dashboard-event-series-edit-detail-id&#39;}&quot;</span>
<span class="line">      class=&quot;flex items-center gap-2 hover:text-color-link-bolder&quot;</span>
<span class="line">      :class=&quot;index === 0 ? &#39;font-semibold&#39; : &#39;ml-5&#39;&quot;</span>
<span class="line">    &gt;</span>
<span class="line">      &lt;MIcon</span>
<span class="line">        v-if=&quot;linkItem.icon&quot;</span>
<span class="line">        :name=&quot;linkItem.icon&quot;</span>
<span class="line">        size=&quot;sm&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;span class=&quot;text-sm transition-colors&quot;&gt;</span>
<span class="line">        {{ linkItem.name }}</span>
<span class="line">      &lt;/span&gt;</span>
<span class="line">    &lt;/NuxtLink&gt;</span>
<span class="line">  </span>
<span class="line">改为:</span>
<span class="line">const route = useRoute()</span>
<span class="line">const id = route.params.id</span>
<span class="line"></span>
<span class="line">&lt;NuxtLink</span>
<span class="line">      :to=&quot;{ name: &#39;user-dashboard-event-series-edit-detail-id&#39;, params: { id: id }}&quot;</span>
<span class="line">      class=&quot;flex items-center gap-2 hover:text-color-link-bolder&quot;</span>
<span class="line">      :class=&quot;index === 0 ? &#39;font-semibold&#39; : &#39;ml-5&#39;&quot;</span>
<span class="line">    &gt;</span>
<span class="line">      &lt;MIcon</span>
<span class="line">        v-if=&quot;linkItem.icon&quot;</span>
<span class="line">        :name=&quot;linkItem.icon&quot;</span>
<span class="line">        size=&quot;sm&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;span class=&quot;text-sm transition-colors&quot;&gt;</span>
<span class="line">        {{ linkItem.name }}</span>
<span class="line">      &lt;/span&gt;</span>
<span class="line">    &lt;/NuxtLink&gt;</span>
<span class="line">就不报错了</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",t],["__file","nuxt3使用动态路由问题.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/nuxt3%E4%BD%BF%E7%94%A8%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E9%97%AE%E9%A2%98.html","title":"nuxt3使用动态路由的时候，遇到一个蛋疼的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3使用动态路由的时候，遇到一个蛋疼的问题","description":"nuxt3使用动态路由的时候，遇到一个蛋疼的问题"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3使用动态路由问题.md"}');export{p as comp,u as data};
