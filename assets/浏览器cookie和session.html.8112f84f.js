import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>\u6D4F\u89C8\u5668cookie\u548Csession:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5173\u4E8Ecookie\u7684\u8BBE\u7F6E\u95EE\u9898:
1&gt;\u540E\u7AEFsymfony7

// \u521B\u5EFA Cookie \u5BF9\u8C61
        $cookie = Cookie::create(&#39;user_tt_token&#39;)
            -&gt;withValue(&#39;fdsfssdfsdfsdfsdfsdf&#39;)
            -&gt;withExpires(strtotime(&#39;tomorrow&#39;))
            -&gt;withPath(&#39;/&#39;)
            -&gt;withDomain(&#39;localhost&#39;)  // \u8BBE\u7F6E\u57DF\u540D
            -&gt;withSecure(false)            // \u662F\u5426\u4EC5\u5728 HTTPS \u4E0B\u4F20\u8F93
            -&gt;withHttpOnly(false)       // \u662F\u5426\u7981\u6B62 JavaScript \u8BBF\u95EE
            -&gt;withSameSite(&#39;lax&#39;);


// $response \u4E3A\u4E00\u4E2AjsonResponse\u5BF9\u8C61
        $response-&gt;headers-&gt;setCookie($cookie);

2&gt;\u524D\u7AEF\u662F\u4E00\u4E2A nuxt3\u7684SSR\u7684 get \u8BF7\u6C42
  try {
    let res = await $fetch&lt;SessionTermDetailResponse&gt;.raw(
      \`/api/admin/events/\${id}/event-session/term\`,
      {
        headers: {
          &quot;X-SCIFORUM-API-TOKEN&quot;: config.sciforum.apiToken,
          &quot;X-Switch-User&quot;: event.headers.get(&quot;X-Switch-User&quot;) ?? &quot;&quot;,
          authorization: event.headers.get(&quot;authorization&quot;) ?? &quot;&quot;,
        },
        baseURL: config.sciforum.apiBaseUrl,
      }
    );


    let cc =  getCookie(event, &quot;user_tt_token&quot;)
    console.log(&quot;cc is:&quot;, cc)
    return res;
  } catch (error: any) {
    return errorHandler(error);
  }

\u7ECF\u6D4B\u8BD5\uFF0C\u5F53 sameSite\u4E3Alax,\u540C\u65F6\u8BF7\u6C42\u4E3A get \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6210\u529F\u5C06cookie\u8BBE\u7F6E\u5230\u6D4F\u89C8\u5668\uFF0C \u4F46\u662F\u5B9E\u9645\u4E0A\u9700\u8981\u8DE8\u57DF\u8BBE\u7F6Ecookie\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u662F\u4E0D\u884C\u7684\uFF0C\u9700\u8981\u5982\u4E0B\u4FEE\u6539

// \u521B\u5EFA Cookie \u5BF9\u8C61
        $cookie = Cookie::create(&#39;user_tt_token&#39;)
            -&gt;withValue(&#39;fdsfssdfsdfsdfsdfsdf&#39;)
            -&gt;withExpires(strtotime(&#39;tomorrow&#39;))
            -&gt;withPath(&#39;/&#39;)
            -&gt;withDomain(&#39;localhost&#39;)  // \u8BBE\u7F6E\u57DF\u540D
            -&gt;withSecure(true)            // \u662F\u5426\u4EC5\u5728 HTTPS \u4E0B\u4F20\u8F93
            -&gt;withHttpOnly(false)       // \u662F\u5426\u7981\u6B62 JavaScript \u8BBF\u95EE
            -&gt;withSameSite(&#39;none&#39;);


// $response \u4E3A\u4E00\u4E2AjsonResponse\u5BF9\u8C61
        $response-&gt;headers-&gt;setCookie($cookie);

\u5373 SameSite \u4E3A none, \u540C\u65F6 Secure \u4E3A true\uFF0C\u4F46\u662F\u8FD9\u4E2A\u9700\u8981 https \u73AF\u5883\uFF0C\u76EE\u524D\u8FD8\u6CA1\u6709\u6D4B\u8BD5. \u770B\u4E86\u5176\u5B83\u7684\u7F51\u7AD9\uFF0C\u90FD\u662F\u8FD9\u4E48\u5904\u7406\u7684\uFF0C\u8FD9\u4E5F\u53EF\u4EE5\u53EB\u5141\u8BB8\u4E09\u65B9\u7F51\u7AD9cookie\u3002

\u8FD8\u6709\u9700\u8981\u6CE8\u610F\u7684\u662F
1&gt; $fetch \u8BF7\u6C42\uFF0C\u9700\u8981 raw \u8BF7\u6C42\uFF0C\u8FD9\u6837\u624D\u80FD\u6709 cookie \u76F8\u5173\u7684response\u3002
2&gt;\u5982\u679C\u5728\u4E0D\u6307\u5B9A expires \u6216 maxAge \u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u5C06\u5176\u89C6\u4E3A\u4E00\u4E2A Session Cookie\u3002\u8FD9\u7C7B Cookie \u7684\u751F\u547D\u5468\u671F\u4EC5\u9650\u4E8E\u5F53\u524D\u7684\u6D4F\u89C8\u5668\u4F1A\u8BDD\u3002\u5F53\u7528\u6237\u5173\u95ED\u6D4F\u89C8\u5668\u540E\uFF0CSession Cookie \u4F1A\u88AB\u79FB\u9664\u3002\u4E5F\u5C31\u662F\u8BF4cookie\u6309\u7167\u8FC7\u671F\u65F6\u95F4\u53EF\u4EE5\u5206\u4E3A\u4E24\u7C7B:
Session Cookie\uFF1A\u5982\u679C\u672A\u8BBE\u7F6E expires \u6216 maxAge \u5C5E\u6027\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u8BE5 Cookie \u5F53\u4F5C Session Cookie\u3002\u8FD9\u7C7B Cookie \u7684\u751F\u547D\u5468\u671F\u4EC5\u9650\u4E8E\u5F53\u524D\u7684\u6D4F\u89C8\u5668\u4F1A\u8BDD\u3002\u5F53\u7528\u6237\u5173\u95ED\u6D4F\u89C8\u5668\u540E\uFF0CSession Cookie \u4F1A\u88AB\u79FB\u9664\u3002
\u6301\u4E45\u6027 Cookie\uFF1A\u5982\u679C\u8BBE\u7F6E\u4E86 expires\uFF08\u6307\u5B9A\u8FC7\u671F\u65E5\u671F\uFF09\u6216 maxAge\uFF08\u6307\u5B9A\u4ECE\u5F53\u524D\u65F6\u95F4\u8D77\u7684\u79D2\u6570\uFF09\uFF0C\u5219 Cookie \u4F1A\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u4E4B\u540E\u8FC7\u671F\uFF0C\u65E0\u8BBA\u6D4F\u89C8\u5668\u4F1A\u8BDD\u662F\u5426\u4ECD\u5728\u8FDB\u884C\u3002



\u4F55\u65F6\u4F7F\u7528 Session Cookie
Session Cookie \u5E38\u7528\u4E8E\u654F\u611F\u4FE1\u606F\uFF08\u5982\u767B\u5F55\u4F1A\u8BDD\uFF09\uFF0C\u56E0\u4E3A\u5F53\u7528\u6237\u5173\u95ED\u6D4F\u89C8\u5668\u65F6\uFF0C\u6570\u636E\u4F1A\u88AB\u81EA\u52A8\u6E05\u9664\uFF0C\u4ECE\u800C\u63D0\u4F9B\u989D\u5916\u7684\u5B89\u5168\u6027\u3002

\u4F55\u65F6\u4F7F\u7528\u6301\u4E45\u6027 Cookie
\u5982\u679C\u60A8\u5E0C\u671B\u7528\u6237\u5728\u5173\u95ED\u6D4F\u89C8\u5668\u540E\u4FDD\u6301\u767B\u5F55\u72B6\u6001\uFF0C\u6216\u5E0C\u671B\u4FDD\u5B58\u67D0\u4E9B\u504F\u597D\u8BBE\u7F6E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u6301\u4E45\u6027 Cookie\uFF0C\u5E76\u4E3A\u5176\u8BBE\u7F6E\u5177\u4F53\u7684\u8FC7\u671F\u65F6\u95F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[d];function v(r,t){return i(),n("div",null,o)}var c=e(l,[["render",v],["__file","\u6D4F\u89C8\u5668cookie\u548Csession.html.vue"]]);export{c as default};
