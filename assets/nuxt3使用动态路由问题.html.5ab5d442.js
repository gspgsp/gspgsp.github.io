import{_ as n,o as i,c as e,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>nuxt3\u4F7F\u7528\u52A8\u6001\u8DEF\u7531\u7684\u65F6\u5019\uFF0C\u9047\u5230\u4E00\u4E2A\u86CB\u75BC\u7684\u95EE\u9898\uFF0C\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>navigateTo({
    name: &quot;user-dashboard-event-series-edit-detail-id&quot;,
    params:{
      id: id
    }
  })
  
\u4F7F\u7528 nuxtlink\u7684\u65F6\u5019\u4E00\u76F4\u62A5\u9519\uFF0C\u540E\u6765\u53D1\u73B0 to \u53C2\u6570\u91CC\u4E5F\u662F\u9700\u8981 params\u7684
&lt;NuxtLink
      :to=&quot;{ name: &#39;user-dashboard-event-series-edit-detail-id&#39;}&quot;
      class=&quot;flex items-center gap-2 hover:text-color-link-bolder&quot;
      :class=&quot;index === 0 ? &#39;font-semibold&#39; : &#39;ml-5&#39;&quot;
    &gt;
      &lt;MIcon
        v-if=&quot;linkItem.icon&quot;
        :name=&quot;linkItem.icon&quot;
        size=&quot;sm&quot;
      /&gt;
      &lt;span class=&quot;text-sm transition-colors&quot;&gt;
        {{ linkItem.name }}
      &lt;/span&gt;
    &lt;/NuxtLink&gt;
  
\u6539\u4E3A:
const route = useRoute()
const id = route.params.id

&lt;NuxtLink
      :to=&quot;{ name: &#39;user-dashboard-event-series-edit-detail-id&#39;, params: { id: id }}&quot;
      class=&quot;flex items-center gap-2 hover:text-color-link-bolder&quot;
      :class=&quot;index === 0 ? &#39;font-semibold&#39; : &#39;ml-5&#39;&quot;
    &gt;
      &lt;MIcon
        v-if=&quot;linkItem.icon&quot;
        :name=&quot;linkItem.icon&quot;
        size=&quot;sm&quot;
      /&gt;
      &lt;span class=&quot;text-sm transition-colors&quot;&gt;
        {{ linkItem.name }}
      &lt;/span&gt;
    &lt;/NuxtLink&gt;
\u5C31\u4E0D\u62A5\u9519\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function a(v,u){return i(),e("div",null,t)}var o=n(l,[["render",a],["__file","nuxt3\u4F7F\u7528\u52A8\u6001\u8DEF\u7531\u95EE\u9898.html.vue"]]);export{o as default};
