import{_ as n,o as s,c as e,g as i}from"./app.6e4bf74b.js";const a={},t=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u505A\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u4F1A\u6D89\u53CA\u5230\u83B7\u53D6\u5FAE\u4FE1\u7528\u6237\u4FE1\u606F\uFF0C\u4E3B\u8981\u6709\u5982\u4E0B\u4E24\u79CD\u65B9\u6CD5\u5B9E\u73B0:
\u2460\u901A\u8FC7\u7F51\u9875\u6388\u6743\u7684\u65B9\u5F0F\u83B7\u53D6\uFF0C\u6B65\u9AA4\u5982\u4E0B:
1 \u7B2C\u4E00\u6B65\uFF1A\u7528\u6237\u540C\u610F\u6388\u6743\uFF0C\u83B7\u53D6code
\u8BF7\u6C42\u94FE\u63A5\u4E3A\uFF1A
\u5728\u786E\u4FDD\u5FAE\u4FE1\u516C\u4F17\u8D26\u53F7\u62E5\u6709\u6388\u6743\u4F5C\u7528\u57DF\uFF08scope\u53C2\u6570\uFF09\u7684\u6743\u9650\u7684\u524D\u63D0\u4E0B\uFF08\u5DF2\u8BA4\u8BC1\u670D\u52A1\u53F7\uFF0C\u9ED8\u8BA4\u62E5\u6709 scope \u53C2\u6570\u4E2D\u7684snsapi_base\u548Csnsapi_userinfo \u6743\u9650\uFF09\uFF0C\u5F15\u5BFC\u5173\u6CE8\u8005\u6253\u5F00\u5982\u4E0B\u9875\u9762\uFF1A
https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&amp;redirect_uri=REDIRECT_URI&amp;response_type=code&amp;scope=SCOPE&amp;state=STATE#wechat_redirect

2 \u7B2C\u4E8C\u6B65\uFF1A\u901A\u8FC7 code \u6362\u53D6\u7F51\u9875\u6388\u6743access_token \u548Copenid(\u4E0D\u7BA1 scope\u4E3Asnsapi_base\u548Csnsapi_userinfo\u4E2D\u7684\u54EA\u79CD\u65B9\u5F0F\uFF0C\u90FD\u4F1A\u6709\u503C\uFF0C\u53EA\u662F\u4E3Asnsapi_base\u7684\u65F6\u5019\uFF0C\u6CA1\u6709\u4E86\u7B2C\u56DB\u6B65\u64CD\u4F5C)
\u83B7\u53D6 code \u540E\uFF0C\u8BF7\u6C42\u4EE5\u4E0B\u94FE\u63A5\u83B7\u53D6access_token\uFF1A
https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&amp;secret=SECRET&amp;code=CODE&amp;grant_type=authorization_code

3 \u7B2C\u4E09\u6B65\uFF1A\u5237\u65B0access_token\uFF08\u5982\u679C\u9700\u8981\uFF09
\u83B7\u53D6\u7B2C\u4E8C\u6B65\u7684refresh_token\u540E\uFF0C\u8BF7\u6C42\u4EE5\u4E0B\u94FE\u63A5\u83B7\u53D6access_token\uFF1A
https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=APPID&amp;grant_type=refresh_token&amp;refresh_token=REFRESH_TOKEN

4 \u7B2C\u56DB\u6B65\uFF1A\u62C9\u53D6\u7528\u6237\u4FE1\u606F(\u9700 scope \u4E3A snsapi_userinfo)\uFF0C\u901A\u8FC7access_token \u548Copenid
http\uFF1AGET\uFF08\u8BF7\u4F7F\u7528 https \u534F\u8BAE\uFF09\uFF1A
https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&amp;openid=OPENID&amp;lang=zh_CN

5 \u9644\uFF1A\u68C0\u9A8C\u6388\u6743\u51ED\u8BC1\uFF08access_token\uFF09\u662F\u5426\u6709\u6548
http\uFF1AGET\uFF08\u8BF7\u4F7F\u7528 https \u534F\u8BAE\uFF09\uFF1A
https://api.weixin.qq.com/sns/auth?access_token=ACCESS_TOKEN&amp;openid=OPENID


\u2461\u901A\u8FC7UnionID\u673A\u5236
\u8FD9\u4E2A\u673A\u5236\u7684\u539F\u7406\u662F\uFF1A\u5728\u5173\u6CE8\u8005\u4E0E\u516C\u4F17\u53F7\u4EA7\u751F\u6D88\u606F\u4EA4\u4E92\u540E\uFF0C\u516C\u4F17\u53F7\u53EF\u83B7\u5F97\u5173\u6CE8\u8005\u7684OpenID\uFF08\u52A0\u5BC6\u540E\u7684\u5FAE\u4FE1\u53F7\uFF0C\u6BCF\u4E2A\u7528\u6237\u5BF9\u6BCF\u4E2A\u516C\u4F17\u53F7\u7684 OpenID \u662F\u552F\u4E00\u7684\u3002\u5BF9\u4E8E\u4E0D\u540C\u516C\u4F17\u53F7\uFF0C\u540C\u4E00\u7528\u6237\u7684 openid \u4E0D\u540C\uFF09\u3002
\u516C\u4F17\u53F7\u53EF\u901A\u8FC7\u672C\u63A5\u53E3\u6765\u6839\u636E OpenID \u83B7\u53D6\u7528\u6237\u57FA\u672C\u4FE1\u606F\uFF0C\u5305\u62EC\u8BED\u8A00\u548C\u5173\u6CE8\u65F6\u95F4\u3002

\u5F00\u53D1\u8005\u53EF\u901A\u8FC7 OpenID \u6765\u83B7\u53D6\u7528\u6237\u57FA\u672C\u4FE1\u606F\u3002\u8BF7\u4F7F\u7528 https \u534F\u8BAE\u3002
\u63A5\u53E3\u8C03\u7528\u8BF7\u6C42\u8BF4\u660E http\u8BF7\u6C42\u65B9\u5F0F: GET https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&amp;openid=OPENID&amp;lang=zh_CN

\u8FD9\u91CC\u7684 access_token \u662F \u8C03\u7528\u63A5\u53E3\u51ED\u8BC1(\u548C\u7F51\u9875\u6388\u6743\u7684\u90A3\u4E2A\u4E0D\u4E00\u6837\uFF0C\u5C31\u662F\u5168\u5C40\u552F\u4E00\u7684\u90A3\u4E2Aaccess_token\uFF0C\u901A\u8FC7https\u8BF7\u6C42\u65B9\u5F0F: GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&amp;appid=APPID&amp;secret=APPSECRET \u83B7\u53D6) \uFF0C
openid \u662F \u666E\u901A\u7528\u6237\u7684\u6807\u8BC6\uFF0C\u5BF9\u5F53\u524D\u516C\u4F17\u53F7\u552F\u4E00

\u4F46\u662F\u79CD\u65B9\u5F0F\uFF0C2021\u5E7412\u670827\u65E5\u4E4B\u540E\uFF0C\u4E0D\u518D\u8F93\u51FA\u5934\u50CF\u3001\u6635\u79F0\u4FE1\u606F\u3002\u5982\u679C\u8981\u83B7\u53D6 \u5FC5\u987B\u7ECF\u8FC7\u7528\u6237\u7F51\u9875\u6388\u6743\u624D\u80FD\u62FF\u5230\u3002


\u6240\u6709\u6587\u6863\u89C1\uFF1A
https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html#UinonId

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
    <span class="token comment">//\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7ECF\u5E38\u4F1A\u6709\u4E0B\u9762\u7684\u7528\u6CD5\uFF0C\u6765\u9A8C\u8BC1\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684\u65B9\u5F0F</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required_without:access_token|string&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u7B2C\u4E00\u79CD</span>
            <span class="token string single-quoted-string">&#39;access_token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required_without:code|string&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u7B2C\u4E8C\u79CD</span>
            <span class="token string single-quoted-string">&#39;openid&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required_with:access_token|string&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u7B2C\u4E8C\u79CD</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function d(l,o){return s(),e("div",null,c)}var r=n(a,[["render",d],["__file","\u5FAE\u4FE1\u5F00\u53D1\u4E4B\u83B7\u53D6\u7528\u6237\u4FE1\u606F.html.vue"]]);export{r as default};
