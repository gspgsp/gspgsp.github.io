import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>Nuxt3下使用@sidebase_nuxt-auth管理用户登录信息操作:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  auth: {</span>
<span class="line">    baseURL: &quot;/api/auth&quot;,</span>
<span class="line">    // https://sidebase.io/nuxt-auth/configuration/nuxt-config -&gt; local provider</span>
<span class="line">    provider: {</span>
<span class="line">      type: &quot;refresh&quot;, //这里把 local 改为 refresh 即可有 无状态刷新 token 的功能</span>
<span class="line">      endpoints: {</span>
<span class="line">        signIn: { path: &quot;/login&quot;, method: &quot;post&quot; },</span>
<span class="line">        getSession: { path: &quot;/user&quot;, method: &quot;get&quot; },</span>
<span class="line">        // signOut: { path: &quot;/logout&quot;, method: &quot;get&quot; },</span>
<span class="line">        refresh: { path: &quot;/refresh&quot;, method: &quot;post&quot; }, // 这个需要打开，如果使用 local 的话，这个可以注释掉, 对应的下面的也要注释掉</span>
<span class="line">      },</span>
<span class="line">      pages: {</span>
<span class="line">        login: &quot;/auth/login&quot;,</span>
<span class="line">      },</span>
<span class="line">      token: {</span>
<span class="line">        signInResponseTokenPointer: &quot;/token/accessToken&quot;,</span>
<span class="line">        sameSiteAttribute: &quot;lax&quot;,</span>
<span class="line">      },</span>
<span class="line">      // refresh 下这个也需要打开</span>
<span class="line">      refreshToken: {</span>
<span class="line">        signInResponseRefreshTokenPointer: &quot;/token/refreshToken&quot;,</span>
<span class="line">      },</span>
<span class="line">      // 这个就是 data 数据， 可以通过 getSession() 重新获取最新的用户数据</span>
<span class="line">      sessionDataType: {</span>
<span class="line">        id: &quot;string&quot;,</span>
<span class="line">        email: &quot;string&quot;,</span>
<span class="line">        first_name: &quot;string&quot;,</span>
<span class="line">        last_name: &quot;string&quot;,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">  </span>
<span class="line">server/api/refresh.post.ts文件:</span>
<span class="line"></span>
<span class="line">  export default defineEventHandler(async (event) =&gt; {</span>
<span class="line">  const config = useRuntimeConfig();</span>
<span class="line"></span>
<span class="line">  const body = await readBody(event);</span>
<span class="line"></span>
<span class="line">  const unauthenticatedResponse = {</span>
<span class="line">    token: {</span>
<span class="line">      accessToken: &quot;&quot;,</span>
<span class="line">      refreshToken: &quot;&quot;,</span>
<span class="line">    },</span>
<span class="line">  };</span>
<span class="line">  </span>
<span class="line">  if (!body.refreshToken) {</span>
<span class="line">    return unauthenticatedResponse;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  try {</span>
<span class="line">    const data = await $fetch&lt;{ token: string; refresh_token: string }&gt;(</span>
<span class="line">      &quot;/api/token/refresh&quot;,</span>
<span class="line">      {</span>
<span class="line">        method: &quot;POST&quot;,</span>
<span class="line">        headers: { &quot;X-API-TOKEN&quot;: config.duoxiaozhan.apiToken },</span>
<span class="line">        body: {</span>
<span class="line">          refresh_token: body.refreshToken,</span>
<span class="line">        },</span>
<span class="line">        baseURL: config.duoxiaozhan.baseUrl,</span>
<span class="line">      }</span>
<span class="line">    );</span>
<span class="line">    </span>
<span class="line">    return {</span>
<span class="line">      token: {</span>
<span class="line">        accessToken: data.token,</span>
<span class="line">        refreshToken: data.refresh_token,</span>
<span class="line">      },</span>
<span class="line">    };</span>
<span class="line">  } catch (error: any) {</span>
<span class="line">    return unauthenticatedResponse;</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">参考: https://sidebase.io/nuxt-auth/getting-started/quick-start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",t],["__file","Nuxt3下使用sidebase_nuxt_auth管理用户登录信息操作.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/Nuxt3%E4%B8%8B%E4%BD%BF%E7%94%A8sidebase_nuxt_auth%E7%AE%A1%E7%90%86%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95%E4%BF%A1%E6%81%AF%E6%93%8D%E4%BD%9C.html","title":"Nuxt3下使用@sidebase_nuxt-auth管理用户登录信息操作","lang":"en-US","frontmatter":{"sidebar":false,"title":"Nuxt3下使用@sidebase_nuxt-auth管理用户登录信息操作","description":"Nuxt3下使用@sidebase_nuxt-auth管理用户登录信息操作"},"headers":[],"git":{},"filePathRelative":"content/front/js/Nuxt3下使用sidebase_nuxt_auth管理用户登录信息操作.md"}');export{p as comp,u as data};
