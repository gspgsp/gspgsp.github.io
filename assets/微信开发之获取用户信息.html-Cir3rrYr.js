import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function p(c,s){return i(),a("div",null,s[0]||(s[0]=[e(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在做项目的时候，经常会涉及到获取微信用户信息，主要有如下两种方法实现:</span>
<span class="line">①通过网页授权的方式获取，步骤如下:</span>
<span class="line">1 第一步：用户同意授权，获取code</span>
<span class="line">请求链接为：</span>
<span class="line">在确保微信公众账号拥有授权作用域（scope参数）的权限的前提下（已认证服务号，默认拥有 scope 参数中的snsapi_base和snsapi_userinfo 权限），引导关注者打开如下页面：</span>
<span class="line">https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&amp;redirect_uri=REDIRECT_URI&amp;response_type=code&amp;scope=SCOPE&amp;state=STATE#wechat_redirect</span>
<span class="line"></span>
<span class="line">2 第二步：通过 code 换取网页授权access_token 和openid(不管 scope为snsapi_base和snsapi_userinfo中的哪种方式，都会有值，只是为snsapi_base的时候，没有了第四步操作)</span>
<span class="line">获取 code 后，请求以下链接获取access_token：</span>
<span class="line">https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&amp;secret=SECRET&amp;code=CODE&amp;grant_type=authorization_code</span>
<span class="line"></span>
<span class="line">3 第三步：刷新access_token（如果需要）</span>
<span class="line">获取第二步的refresh_token后，请求以下链接获取access_token：</span>
<span class="line">https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=APPID&amp;grant_type=refresh_token&amp;refresh_token=REFRESH_TOKEN</span>
<span class="line"></span>
<span class="line">4 第四步：拉取用户信息(需 scope 为 snsapi_userinfo)，通过access_token 和openid</span>
<span class="line">http：GET（请使用 https 协议）：</span>
<span class="line">https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&amp;openid=OPENID&amp;lang=zh_CN</span>
<span class="line"></span>
<span class="line">5 附：检验授权凭证（access_token）是否有效</span>
<span class="line">http：GET（请使用 https 协议）：</span>
<span class="line">https://api.weixin.qq.com/sns/auth?access_token=ACCESS_TOKEN&amp;openid=OPENID</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">②通过UnionID机制</span>
<span class="line">这个机制的原理是：在关注者与公众号产生消息交互后，公众号可获得关注者的OpenID（加密后的微信号，每个用户对每个公众号的 OpenID 是唯一的。对于不同公众号，同一用户的 openid 不同）。</span>
<span class="line">公众号可通过本接口来根据 OpenID 获取用户基本信息，包括语言和关注时间。</span>
<span class="line"></span>
<span class="line">开发者可通过 OpenID 来获取用户基本信息。请使用 https 协议。</span>
<span class="line">接口调用请求说明 http请求方式: GET https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&amp;openid=OPENID&amp;lang=zh_CN</span>
<span class="line"></span>
<span class="line">这里的 access_token 是 调用接口凭证(和网页授权的那个不一样，就是全局唯一的那个access_token，通过https请求方式: GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&amp;appid=APPID&amp;secret=APPSECRET 获取) ，</span>
<span class="line">openid 是 普通用户的标识，对当前公众号唯一</span>
<span class="line"></span>
<span class="line">但是种方式，2021年12月27日之后，不再输出头像、昵称信息。如果要获取 必须经过用户网页授权才能拿到。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">所有文档见：</span>
<span class="line">https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html</span>
<span class="line">https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html#UinonId</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"></span>
<span class="line">    <span class="token comment">//在开发过程中经常会有下面的用法，来验证获取用户信息的方式</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required_without:access_token|string&#39;</span><span class="token punctuation">,</span> <span class="token comment">//第一种</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;access_token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required_without:code|string&#39;</span><span class="token punctuation">,</span> <span class="token comment">//第二种</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;openid&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required_with:access_token|string&#39;</span><span class="token punctuation">,</span> <span class="token comment">//第二种</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",p],["__file","微信开发之获取用户信息.html.vue"]]),o=JSON.parse('{"path":"/content/other/spread/%E5%BE%AE%E4%BF%A1%E5%BC%80%E5%8F%91%E4%B9%8B%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF.html","title":"微信开发之获取用户信息","lang":"en-US","frontmatter":{"sidebar":false,"title":"微信开发之获取用户信息","description":"微信开发之获取用户信息"},"headers":[],"git":{},"filePathRelative":"content/other/spread/微信开发之获取用户信息.md"}');export{d as comp,o as data};
