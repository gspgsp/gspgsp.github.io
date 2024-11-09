import{_ as n,o as i,c as e,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>nuxt3\u4E4Bauth\u7EC4\u4EF6\u7684\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u9700\u8981\u767B\u5F55\u7684\u9875\u9762
&lt;script setup lang=&quot;ts&quot;&gt;
definePageMeta({
  middleware: &quot;auth&quot;, // \u6CA1\u6709\u5BF9 auth \u518D\u8FDB\u884C\u914D\u7F6E
});
&lt;/script&gt;
  
2.\u767B\u5F55\u9875\u9762
&lt;script setup lang=&quot;ts&quot;&gt;
definePageMeta({
  middleware: &quot;auth&quot;,
  auth: { //\u8FD9\u662F\u4E00\u4E2A\u5BF9\u5F53\u524D\u4F7F\u7528 auth \u4E2D\u95F4\u4EF6\u7684\u4E00\u4E2A\u914D\u7F6E\uFF0C\u53EA\u5BF9\u5F53\u524D\u9875\u9762\u751F\u6548
    unauthenticatedOnly: true, // \u8BF4\u660E \u53EA\u6709\u65E0\u767B\u5F55\u7684\u7528\u6237\u624D\u80FD\u8BBF\u95EE\u8FD9\u4E2A\u9875\u9762
    navigateAuthenticatedTo: &quot;/account/profile&quot;, // \u5F53\u5DF2\u767B\u5F55\u7684\u7528\u6237\u518D\u6B21\u8BBF\u95EE\u8FD9\u4E2A\u9875\u9762\u7684\u65F6\u5019\uFF0C\u8DF3\u8F6C\u5230 \u4E2A\u4EBAprofile\u9875\u9762
  },
});
&lt;/script&gt;
  
3.auth\u4E2D\u95F4\u4EF6
export default defineNuxtRouteMiddleware(async (to, from) =&gt; {
  if (process.server) return
  const { isLoggedIn } = useAuthUtils();

  const authConfig = to.meta.auth || {};
  const unauthenticatedOnly = authConfig.unauthenticatedOnly === true;
  const navigateAuthenticatedTo = authConfig.navigateAuthenticatedTo || &#39;/&#39;;

  const isAuthPage = to.path.startsWith(&#39;/auth/&#39;);

  if (!isLoggedIn.value &amp;&amp; !isAuthPage) {
    return navigateTo(\`/auth/login?target=\${to.fullPath}\`);
  }else if (isLoggedIn.value &amp;&amp; unauthenticatedOnly) {
    return navigateTo(navigateAuthenticatedTo);
  }
})
  
\u5982\u679C\u4E0D\u60F3\u8FD9\u4E48\u7EC6\u7C92\u5EA6\u7684\u63A7\u5236\u767B\u5F55\u7684\u8BDD\uFF0C\u76F4\u63A5\u5904\u7406target\u60C5\u51B5\u5C31\u53EF\u4EE5\u4E86
export default defineNuxtRouteMiddleware(async (to, from) =&gt; {
  if (process.server) return
  const { isLoggedIn } = useAuthUtils();
  const isAuthPage = to.path.startsWith(&#39;/auth/&#39;);
  if (!isLoggedIn.value &amp;&amp; !isAuthPage) {
    return navigateTo(\`/auth/login?target=\${to.fullPath}\`);
  }
})
  
\u518D\u6B21\u6539\u8FDB\u7248\u672C:
export default defineNuxtRouteMiddleware(async (to) =&gt; {
  if (i<wbr>mport.meta.server) return;
  const { isLoggedIn } = useAuthUtils();
  const isAuthPage = to.path.startsWith(&quot;/auth/&quot;);
  if (!isLoggedIn.value &amp;&amp; !isAuthPage) {
    return navigateTo(\`/auth/login?target=\${to.fullPath}\`, { 
      replace: true,
      external: true
    });
  }
});
  
\u6539\u8FDB\u539F\u56E0:  
\u5F53\u7528\u6237\u8BD5\u56FE\u8BBF\u95EE\u9700\u8981\u8BA4\u8BC1\u7684\u9875\u9762\uFF08target \u9875\u9762\uFF09\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u5C06\u4ED6\u4EEC\u91CD\u5B9A\u5411\u5230\u767B\u5F55\u9875\u9762\u3002\u7136\u800C\uFF0C\u5982\u679C\u4E0D\u8FDB\u884C\u7279\u6B8A\u5904\u7406\uFF0C\u767B\u5F55\u9875\u9762\u4F1A\u7EE7\u627F\u76EE\u6807\u9875\u9762\u7684\u5E03\u5C40\uFF0C\u5BFC\u81F4\u767B\u5F55\u9875\u9762\u7684\u663E\u793A\u51FA\u73B0\u95EE\u9898\u3002\u8FD9\u4E2A\u662F\u5B9E\u9645\u5F00\u53D1\u4E2D\u9047\u5230\u7684\u95EE\u9898.
navigateTo\u8C61\u5305\u542B\u4E24\u4E2A\u5C5E\u6027\uFF1A
replace: true\uFF1A\u8FD9\u4F1A\u4F7F\u7528\u65B0\u7684 URL \u66FF\u6362\u5F53\u524D\u7684\u5386\u53F2\u8BB0\u5F55\u6761\u76EE\uFF0C\u800C\u4E0D\u662F\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u3002
external: true\uFF1A\u8FD9\u544A\u8BC9 Nuxt \u5C06\u5BFC\u822A\u89C6\u4E3A\u5916\u90E8\u5BFC\u822A\uFF0C\u8FD9\u5C06\u5BFC\u81F4\u9875\u9762\u5237\u65B0\u3002
  
4. to.path\u548C to.fullPath \u533A\u522B
to.path \u548C to.fullPath \u662F Vue Router \u4E2D\u4E24\u4E2A\u4E0D\u540C\u7684\u5C5E\u6027\uFF0C\u5B83\u4EEC\u63D0\u4F9B\u4E86\u5173\u4E8E\u76EE\u6807\u8DEF\u7531\u7684\u4E0D\u540C\u4FE1\u606F
  
to.path:
\u53EA\u5305\u542B URL \u7684\u8DEF\u5F84\u90E8\u5206\u3002
\u4E0D\u5305\u542B\u67E5\u8BE2\u53C2\u6570\u548C\u54C8\u5E0C\u3002
\u4F8B\u5982\uFF0C\u5BF9\u4E8E URL &quot;/users/profile?id=123#info&quot;\uFF0Cto.path \u5C06\u53EA\u8FD4\u56DE &quot;/users/profile&quot;\u3002
  
to.fullPath:
\u5305\u542B\u5B8C\u6574\u7684 URL\uFF0C\u5305\u62EC\u8DEF\u5F84\u3001\u67E5\u8BE2\u53C2\u6570\u548C\u54C8\u5E0C\u3002
\u662F URL \u7684\u5B8C\u6574\u8868\u793A\uFF0C\u4E0D\u5305\u62EC\u57DF\u540D\u548C\u534F\u8BAE\u3002
\u5BF9\u4E8E\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0Cto.fullPath \u5C06\u8FD4\u56DE &quot;/users/profile?id=123#info&quot;\u3002
  
\u533A\u522B\u603B\u7ED3\uFF1A
path \u53EA\u5173\u6CE8 URL \u7684\u8DEF\u5F84\u90E8\u5206\u3002
fullPath \u5305\u542B\u8DEF\u5F84\u3001\u67E5\u8BE2\u53C2\u6570\u548C\u54C8\u5E0C
  
\u4F7F\u7528\u573A\u666F\uFF1A
  
\u4F7F\u7528 to.path \u7684\u60C5\u51B5\uFF1A
\u5F53\u60A8\u53EA\u9700\u8981\u77E5\u9053\u9875\u9762\u7684\u57FA\u672C\u8DEF\u5F84\u65F6\u3002
\u5728\u4E0D\u5173\u5FC3\u67E5\u8BE2\u53C2\u6570\u548C\u54C8\u5E0C\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u8DEF\u7531\u5339\u914D\u3002
  
\u4F7F\u7528 to.fullPath \u7684\u60C5\u51B5\uFF1A
\u5F53\u60A8\u9700\u8981\u5B8C\u6574\u7684 URL \u4FE1\u606F\uFF0C\u5305\u62EC\u67E5\u8BE2\u53C2\u6570\u548C\u54C8\u5E0C\u3002
\u5728\u9700\u8981\u4FDD\u7559\u6240\u6709 URL \u4FE1\u606F\u8FDB\u884C\u91CD\u5B9A\u5411\u65F6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function a(u,v){return i(),e("div",null,t)}var c=n(l,[["render",a],["__file","nuxt3\u4E4Bauth\u7EC4\u4EF6\u7684\u4F7F\u7528.html.vue"]]);export{c as default};
