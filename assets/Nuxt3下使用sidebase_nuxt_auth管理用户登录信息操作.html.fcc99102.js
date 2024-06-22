import{_ as n,o as e,c as i,g as s}from"./app.dd03cafd.js";const d={},l=s(`<p>Nuxt3\u4E0B\u4F7F\u7528@sidebase_nuxt-auth\u7BA1\u7406\u7528\u6237\u767B\u5F55\u4FE1\u606F\u64CD\u4F5C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  auth: {
    baseURL: &quot;/api/auth&quot;,
    // https://sidebase.io/nuxt-auth/configuration/nuxt-config -&gt; local provider
    provider: {
      type: &quot;refresh&quot;, //\u8FD9\u91CC\u628A local \u6539\u4E3A refresh \u5373\u53EF\u6709 \u65E0\u72B6\u6001\u5237\u65B0 token \u7684\u529F\u80FD
      endpoints: {
        signIn: { path: &quot;/login&quot;, method: &quot;post&quot; },
        getSession: { path: &quot;/user&quot;, method: &quot;get&quot; },
        // signOut: { path: &quot;/logout&quot;, method: &quot;get&quot; },
        refresh: { path: &quot;/refresh&quot;, method: &quot;post&quot; }, // \u8FD9\u4E2A\u9700\u8981\u6253\u5F00\uFF0C\u5982\u679C\u4F7F\u7528 local \u7684\u8BDD\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u6CE8\u91CA\u6389, \u5BF9\u5E94\u7684\u4E0B\u9762\u7684\u4E5F\u8981\u6CE8\u91CA\u6389
      },
      pages: {
        login: &quot;/auth/login&quot;,
      },
      token: {
        signInResponseTokenPointer: &quot;/token/accessToken&quot;,
        sameSiteAttribute: &quot;lax&quot;,
      },
      // refresh \u4E0B\u8FD9\u4E2A\u4E5F\u9700\u8981\u6253\u5F00
      refreshToken: {
        signInResponseRefreshTokenPointer: &quot;/token/refreshToken&quot;,
      },
      // \u8FD9\u4E2A\u5C31\u662F data \u6570\u636E\uFF0C \u53EF\u4EE5\u901A\u8FC7 getSession() \u91CD\u65B0\u83B7\u53D6\u6700\u65B0\u7684\u7528\u6237\u6570\u636E
      sessionDataType: {
        id: &quot;string&quot;,
        email: &quot;string&quot;,
        first_name: &quot;string&quot;,
        last_name: &quot;string&quot;,
      },
    },
  },
  
server/api/refresh.post.ts\u6587\u4EF6:

  export default defineEventHandler(async (event) =&gt; {
  const config = useRuntimeConfig();

  const body = await readBody(event);

  const unauthenticatedResponse = {
    token: {
      accessToken: &quot;&quot;,
      refreshToken: &quot;&quot;,
    },
  };
  
  if (!body.refreshToken) {
    return unauthenticatedResponse;
  }

  try {
    const data = await $fetch&lt;{ token: string; refresh_token: string }&gt;(
      &quot;/api/token/refresh&quot;,
      {
        method: &quot;POST&quot;,
        headers: { &quot;X-API-TOKEN&quot;: config.duoxiaozhan.apiToken },
        body: {
          refresh_token: body.refreshToken,
        },
        baseURL: config.duoxiaozhan.baseUrl,
      }
    );
    
    return {
      token: {
        accessToken: data.token,
        refreshToken: data.refresh_token,
      },
    };
  } catch (error: any) {
    return unauthenticatedResponse;
  }
});

  
\u53C2\u8003: https://sidebase.io/nuxt-auth/getting-started/quick-start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function u(a,v){return e(),i("div",null,t)}var o=n(d,[["render",u],["__file","Nuxt3\u4E0B\u4F7F\u7528sidebase_nuxt_auth\u7BA1\u7406\u7528\u6237\u767B\u5F55\u4FE1\u606F\u64CD\u4F5C.html.vue"]]);export{o as default};
