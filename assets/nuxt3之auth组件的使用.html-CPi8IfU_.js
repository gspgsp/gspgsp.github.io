import{_ as s,c as a,f as i,o as e}from"./app-BB_BIQV8.js";const l={};function t(d,n){return e(),a("div",null,n[0]||(n[0]=[i(`<p>nuxt3之auth组件的使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.需要登录的页面</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">definePageMeta({</span>
<span class="line">  middleware: &quot;auth&quot;, // 没有对 auth 再进行配置</span>
<span class="line">});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">2.登录页面</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">definePageMeta({</span>
<span class="line">  middleware: &quot;auth&quot;,</span>
<span class="line">  auth: { //这是一个对当前使用 auth 中间件的一个配置，只对当前页面生效</span>
<span class="line">    unauthenticatedOnly: true, // 说明 只有无登录的用户才能访问这个页面</span>
<span class="line">    navigateAuthenticatedTo: &quot;/account/profile&quot;, // 当已登录的用户再次访问这个页面的时候，跳转到 个人profile页面</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">3.auth中间件</span>
<span class="line">export default defineNuxtRouteMiddleware(async (to, from) =&gt; {</span>
<span class="line">  if (process.server) return</span>
<span class="line">  const { isLoggedIn } = useAuthUtils();</span>
<span class="line"></span>
<span class="line">  const authConfig = to.meta.auth || {};</span>
<span class="line">  const unauthenticatedOnly = authConfig.unauthenticatedOnly === true;</span>
<span class="line">  const navigateAuthenticatedTo = authConfig.navigateAuthenticatedTo || &#39;/&#39;;</span>
<span class="line"></span>
<span class="line">  const isAuthPage = to.path.startsWith(&#39;/auth/&#39;);</span>
<span class="line"></span>
<span class="line">  if (!isLoggedIn.value &amp;&amp; !isAuthPage) {</span>
<span class="line">    return navigateTo(\`/auth/login?target=\${to.fullPath}\`);</span>
<span class="line">  }else if (isLoggedIn.value &amp;&amp; unauthenticatedOnly) {</span>
<span class="line">    return navigateTo(navigateAuthenticatedTo);</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line">  </span>
<span class="line">如果不想这么细粒度的控制登录的话，直接处理target情况就可以了</span>
<span class="line">export default defineNuxtRouteMiddleware(async (to, from) =&gt; {</span>
<span class="line">  if (process.server) return</span>
<span class="line">  const { isLoggedIn } = useAuthUtils();</span>
<span class="line">  const isAuthPage = to.path.startsWith(&#39;/auth/&#39;);</span>
<span class="line">  if (!isLoggedIn.value &amp;&amp; !isAuthPage) {</span>
<span class="line">    return navigateTo(\`/auth/login?target=\${to.fullPath}\`);</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line">  </span>
<span class="line">再次改进版本:</span>
<span class="line">export default defineNuxtRouteMiddleware(async (to) =&gt; {</span>
<span class="line">  if (import.meta.server) return;</span>
<span class="line">  const { isLoggedIn } = useAuthUtils();</span>
<span class="line">  const isAuthPage = to.path.startsWith(&quot;/auth/&quot;);</span>
<span class="line">  if (!isLoggedIn.value &amp;&amp; !isAuthPage) {</span>
<span class="line">    return navigateTo(\`/auth/login?target=\${to.fullPath}\`, { </span>
<span class="line">      replace: true,</span>
<span class="line">      external: true</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line">  </span>
<span class="line">改进原因:  </span>
<span class="line">当用户试图访问需要认证的页面（target 页面）时，系统会将他们重定向到登录页面。然而，如果不进行特殊处理，登录页面会继承目标页面的布局，导致登录页面的显示出现问题。这个是实际开发中遇到的问题.</span>
<span class="line">navigateTo象包含两个属性：</span>
<span class="line">replace: true：这会使用新的 URL 替换当前的历史记录条目，而不是添加一个新的。</span>
<span class="line">external: true：这告诉 Nuxt 将导航视为外部导航，这将导致页面刷新。</span>
<span class="line">  </span>
<span class="line">4. to.path和 to.fullPath 区别</span>
<span class="line">to.path 和 to.fullPath 是 Vue Router 中两个不同的属性，它们提供了关于目标路由的不同信息</span>
<span class="line">  </span>
<span class="line">to.path:</span>
<span class="line">只包含 URL 的路径部分。</span>
<span class="line">不包含查询参数和哈希。</span>
<span class="line">例如，对于 URL &quot;/users/profile?id=123#info&quot;，to.path 将只返回 &quot;/users/profile&quot;。</span>
<span class="line">  </span>
<span class="line">to.fullPath:</span>
<span class="line">包含完整的 URL，包括路径、查询参数和哈希。</span>
<span class="line">是 URL 的完整表示，不包括域名和协议。</span>
<span class="line">对于上面的例子，to.fullPath 将返回 &quot;/users/profile?id=123#info&quot;。</span>
<span class="line">  </span>
<span class="line">区别总结：</span>
<span class="line">path 只关注 URL 的路径部分。</span>
<span class="line">fullPath 包含路径、查询参数和哈希</span>
<span class="line">  </span>
<span class="line">使用场景：</span>
<span class="line">  </span>
<span class="line">使用 to.path 的情况：</span>
<span class="line">当您只需要知道页面的基本路径时。</span>
<span class="line">在不关心查询参数和哈希的情况下进行路由匹配。</span>
<span class="line">  </span>
<span class="line">使用 to.fullPath 的情况：</span>
<span class="line">当您需要完整的 URL 信息，包括查询参数和哈希。</span>
<span class="line">在需要保留所有 URL 信息进行重定向时。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",t],["__file","nuxt3之auth组件的使用.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/nuxt3%E4%B9%8Bauth%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"nuxt3之auth组件的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3之auth组件的使用","description":"nuxt3之auth组件的使用"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3之auth组件的使用.md"}');export{p as comp,u as data};
