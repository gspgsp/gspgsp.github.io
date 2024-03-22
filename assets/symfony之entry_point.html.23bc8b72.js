import{_ as n,o as s,c as a,g as e}from"./app.b04686bd.js";const t={},i=e(`<p>\u6709\u65F6\uFF0C\u4E00\u4E2A\u9632\u706B\u5899\u6709\u591A\u79CD\u8BA4\u8BC1\u65B9\u5F0F[\u5C31\u4F1A\u6709\u591A\u4E2A authenticator]\uFF08\u4F8B\u5982\uFF0C\u65E2\u6709\u8868\u5355\u767B\u5F55[form_login]\uFF0C\u53C8\u6709API\u4EE4\u724C\u8BA4\u8BC1[json_login]\uFF09\u3002\u5728\u8FD9\u4E9B\u60C5\u51B5\u4E0B\uFF0C \u73B0\u5728\u9700\u8981\u914D\u7F6E\u8BA4\u8BC1\u5165\u53E3\u70B9\u3002\u8BE5\u5165\u53E3\u70B9\u7528\u4E8E\u5728\u7528\u6237\u5C1A\u672A\u8BA4\u8BC1\u4F46\u8BD5\u56FE\u8BBF\u95EE\u9700\u8981\u8BA4\u8BC1\u7684\u9875\u9762\u65F6\u751F\u6210\u4E00\u4E2A \u54CD\u5E94\u3002\u4F8B\u5982\uFF0C\u8FD9\u53EF\u4EE5\u7528\u6765\u5C06\u7528\u6237\u91CD\u5B9A\u5411\u5230\u767B\u5F55\u9875\u9762\u3002</p><p>\u6BD4\u5982:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># config/packages/security.yaml</span>
security<span class="token punctuation">:</span>
    enable_authenticator_manager<span class="token punctuation">:</span> <span class="token constant boolean">true</span>

    <span class="token comment"># ...</span>
    firewalls<span class="token punctuation">:</span>
        main<span class="token punctuation">:</span>
            <span class="token comment"># allow authentication using a form or HTTP basic</span>
            form_login<span class="token punctuation">:</span> <span class="token operator">~</span>
            http_basic<span class="token punctuation">:</span> <span class="token operator">~</span>

            <span class="token comment"># configure the form authentication as the entry point for unauthenticated users</span>
            entry_point<span class="token punctuation">:</span> form_login


\u53EF\u4EE5\u5C06\u67D0\u4E2A\u6388\u6743\u65B9\u5F0F\u914D\u7F6E\u4E3A<span class="token constant boolean">false</span>\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6388\u6743\u65B9\u5F0F\u5373\u4E3A\u4E0D\u53EF\u7528\uFF0C\u5982<span class="token punctuation">:</span> form_login<span class="token punctuation">:</span> <span class="token constant boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[i];function c(l,p){return s(),a("div",null,o)}var u=n(t,[["render",c],["__file","symfony\u4E4Bentry_point.html.vue"]]);export{u as default};
