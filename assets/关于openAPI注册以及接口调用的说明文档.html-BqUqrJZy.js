import{_ as s,c as a,d as l,o as i}from"./app-B4P9BclZ.js";const e={};function u(o,n){return i(),a("div",null,n[0]||(n[0]=[l(`<p>最近chat-gpt很火，于是花了点时间也注册了账号，下面是我的操作步骤：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.访问openapi官网：https://platform.openai.com/  </span>
<span class="line"></span>
<span class="line">2.google账号登录  </span>
<span class="line"></span>
<span class="line">3.第一次注册需要手机号验证，必须为国外手机号，所以通过 sms-active 生成手机号：60+(113)9314146 发送验证码 </span>
<span class="line">注意 使用 sms-active 服务的时候，最好选择主流国家，不要选择不入流的国家，因为可能收不到验证码，或者收到验证码，但是前面的地区号 不一致 导致没法使用</span>
<span class="line">这个是报的错误：We&#39;ve detected suspicious behavior from phone numbers similar to yours. Please try again later or contact us through our help center at help.openai.com</span>
<span class="line"></span>
<span class="line">4.注册成功以后，就可有 登陆了，会在个人中心生成一个API Key，用来调用接口，保存好这个Key，只会生成一次</span>
<span class="line"></span>
<span class="line">5.直接访问 https://platform.openai.com/playground 可以看到一个对话框，直接体验</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">6.也可以访问下面这个链接，但是一般会报错：</span>
<span class="line">  访问：https://chat.openai.com/</span>
<span class="line">  </span>
<span class="line">  Access denied</span>
<span class="line">  You do not have access to chat.openai.com.</span>
<span class="line">  </span>
<span class="line">  The site owner may have set restrictions that prevent you from accessing the</span>
<span class="line">  </span>
<span class="line">7.还可以通过PostMan 调用接口</span>
<span class="line">接口调用一定要配合 Key 使用：</span>
<span class="line">header头需要这个认证参数:Authorization:Bearer sk-dfasfasdfdgdfdsfgdgfdhgfhgfjhgjhgj</span>
<span class="line">比如我调用了获取模型的接口：</span>
<span class="line"></span>
<span class="line">url: get  https://api.openai.com/v1/models</span>
<span class="line"></span>
<span class="line">返回:</span>
<span class="line">{</span>
<span class="line">    &quot;object&quot;: &quot;list&quot;,</span>
<span class="line">    &quot;data&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: &quot;babbage&quot;,</span>
<span class="line">            &quot;object&quot;: &quot;model&quot;,</span>
<span class="line">            &quot;created&quot;: 1649358449,</span>
<span class="line">            &quot;owned_by&quot;: &quot;openai&quot;,</span>
<span class="line">            &quot;permission&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: &quot;modelperm-49FUp5v084tBB49tC4z8LPH5&quot;,</span>
<span class="line">                    &quot;object&quot;: &quot;model_permission&quot;,</span>
<span class="line">                    &quot;created&quot;: 1669085501,</span>
<span class="line">                    &quot;allow_create_engine&quot;: false,</span>
<span class="line">                    &quot;allow_sampling&quot;: true,</span>
<span class="line">                    &quot;allow_logprobs&quot;: true,</span>
<span class="line">                    &quot;allow_search_indices&quot;: false,</span>
<span class="line">                    &quot;allow_view&quot;: true,</span>
<span class="line">                    &quot;allow_fine_tuning&quot;: false,</span>
<span class="line">                    &quot;organization&quot;: &quot;*&quot;,</span>
<span class="line">                    &quot;group&quot;: null,</span>
<span class="line">                    &quot;is_blocking&quot;: false</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            &quot;root&quot;: &quot;babbage&quot;,</span>
<span class="line">            &quot;parent&quot;: null</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: &quot;davinci&quot;,</span>
<span class="line">            &quot;object&quot;: &quot;model&quot;,</span>
<span class="line">            &quot;created&quot;: 1649359874,</span>
<span class="line">            &quot;owned_by&quot;: &quot;openai&quot;,</span>
<span class="line">            &quot;permission&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: &quot;modelperm-U6ZwlyAd0LyMk4rcMdz33Yc3&quot;,</span>
<span class="line">                    &quot;object&quot;: &quot;model_permission&quot;,</span>
<span class="line">                    &quot;created&quot;: 1669066355,</span>
<span class="line">                    &quot;allow_create_engine&quot;: false,</span>
<span class="line">                    &quot;allow_sampling&quot;: true,</span>
<span class="line">                    &quot;allow_logprobs&quot;: true,</span>
<span class="line">                    &quot;allow_search_indices&quot;: false,</span>
<span class="line">                    &quot;allow_view&quot;: true,</span>
<span class="line">                    &quot;allow_fine_tuning&quot;: false,</span>
<span class="line">                    &quot;organization&quot;: &quot;*&quot;,</span>
<span class="line">                    &quot;group&quot;: null,</span>
<span class="line">                    &quot;is_blocking&quot;: false</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            &quot;root&quot;: &quot;davinci&quot;,</span>
<span class="line">            &quot;parent&quot;: null</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: &quot;gpt-3.5-turbo-0301&quot;,</span>
<span class="line">            &quot;object&quot;: &quot;model&quot;,</span>
<span class="line">            &quot;created&quot;: 1677649963,</span>
<span class="line">            &quot;owned_by&quot;: &quot;openai&quot;,</span>
<span class="line">            &quot;permission&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: &quot;modelperm-ms2DpLH5OCOZpUikJ4sRQNkh&quot;,</span>
<span class="line">                    &quot;object&quot;: &quot;model_permission&quot;,</span>
<span class="line">                    &quot;created&quot;: 1677691853,</span>
<span class="line">                    &quot;allow_create_engine&quot;: false,</span>
<span class="line">                    &quot;allow_sampling&quot;: true,</span>
<span class="line">                    &quot;allow_logprobs&quot;: true,</span>
<span class="line">                    &quot;allow_search_indices&quot;: false,</span>
<span class="line">                    &quot;allow_view&quot;: true,</span>
<span class="line">                    &quot;allow_fine_tuning&quot;: false,</span>
<span class="line">                    &quot;organization&quot;: &quot;*&quot;,</span>
<span class="line">                    &quot;group&quot;: null,</span>
<span class="line">                    &quot;is_blocking&quot;: false</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            &quot;root&quot;: &quot;gpt-3.5-turbo-0301&quot;,</span>
<span class="line">            &quot;parent&quot;: null</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: &quot;text-davinci-003&quot;,</span>
<span class="line">            &quot;object&quot;: &quot;model&quot;,</span>
<span class="line">            &quot;created&quot;: 1669599635,</span>
<span class="line">            &quot;owned_by&quot;: &quot;openai-internal&quot;,</span>
<span class="line">            &quot;permission&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: &quot;modelperm-6CAfTW5IbFpnlziQKoDilahq&quot;,</span>
<span class="line">                    &quot;object&quot;: &quot;model_permission&quot;,</span>
<span class="line">                    &quot;created&quot;: 1677793558,</span>
<span class="line">                    &quot;allow_create_engine&quot;: false,</span>
<span class="line">                    &quot;allow_sampling&quot;: true,</span>
<span class="line">                    &quot;allow_logprobs&quot;: true,</span>
<span class="line">                    &quot;allow_search_indices&quot;: false,</span>
<span class="line">                    &quot;allow_view&quot;: true,</span>
<span class="line">                    &quot;allow_fine_tuning&quot;: false,</span>
<span class="line">                    &quot;organization&quot;: &quot;*&quot;,</span>
<span class="line">                    &quot;group&quot;: null,</span>
<span class="line">                    &quot;is_blocking&quot;: false</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            &quot;root&quot;: &quot;text-davinci-003&quot;,</span>
<span class="line">            &quot;parent&quot;: null</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">} </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(e,[["render",u],["__file","关于openAPI注册以及接口调用的说明文档.html.vue"]]),p=JSON.parse('{"path":"/content/other/spread/%E5%85%B3%E4%BA%8EopenAPI%E6%B3%A8%E5%86%8C%E4%BB%A5%E5%8F%8A%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8%E7%9A%84%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.html","title":"关于openAPI注册以及接口调用的说明文档","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于openAPI注册以及接口调用的说明文档","description":"关于openAPI注册以及接口调用的说明文档"},"headers":[],"git":{},"filePathRelative":"content/other/spread/关于openAPI注册以及接口调用的说明文档.md"}');export{c as comp,p as data};
