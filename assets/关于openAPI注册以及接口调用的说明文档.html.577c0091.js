import{_ as i,o as n,c as e,g as l}from"./app.d66d8774.js";const u={},o=l(`<p>\u6700\u8FD1chat-gpt\u5F88\u706B\uFF0C\u4E8E\u662F\u82B1\u4E86\u70B9\u65F6\u95F4\u4E5F\u6CE8\u518C\u4E86\u8D26\u53F7\uFF0C\u4E0B\u9762\u662F\u6211\u7684\u64CD\u4F5C\u6B65\u9AA4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u8BBF\u95EEopenapi\u5B98\u7F51\uFF1Ahttps://platform.openai.com/  

2.google\u8D26\u53F7\u767B\u5F55  

3.\u7B2C\u4E00\u6B21\u6CE8\u518C\u9700\u8981\u624B\u673A\u53F7\u9A8C\u8BC1\uFF0C\u5FC5\u987B\u4E3A\u56FD\u5916\u624B\u673A\u53F7\uFF0C\u6240\u4EE5\u901A\u8FC7 sms-active \u751F\u6210\u624B\u673A\u53F7\uFF1A60+(113)9314146 \u53D1\u9001\u9A8C\u8BC1\u7801 
\u6CE8\u610F \u4F7F\u7528 sms-active \u670D\u52A1\u7684\u65F6\u5019\uFF0C\u6700\u597D\u9009\u62E9\u4E3B\u6D41\u56FD\u5BB6\uFF0C\u4E0D\u8981\u9009\u62E9\u4E0D\u5165\u6D41\u7684\u56FD\u5BB6\uFF0C\u56E0\u4E3A\u53EF\u80FD\u6536\u4E0D\u5230\u9A8C\u8BC1\u7801\uFF0C\u6216\u8005\u6536\u5230\u9A8C\u8BC1\u7801\uFF0C\u4F46\u662F\u524D\u9762\u7684\u5730\u533A\u53F7 \u4E0D\u4E00\u81F4 \u5BFC\u81F4\u6CA1\u6CD5\u4F7F\u7528
\u8FD9\u4E2A\u662F\u62A5\u7684\u9519\u8BEF\uFF1AWe&#39;ve detected suspicious behavior from phone numbers similar to yours. Please try again later or contact us through our help center at help.openai.com

4.\u6CE8\u518C\u6210\u529F\u4EE5\u540E\uFF0C\u5C31\u53EF\u6709 \u767B\u9646\u4E86\uFF0C\u4F1A\u5728\u4E2A\u4EBA\u4E2D\u5FC3\u751F\u6210\u4E00\u4E2AAPI Key\uFF0C\u7528\u6765\u8C03\u7528\u63A5\u53E3\uFF0C\u4FDD\u5B58\u597D\u8FD9\u4E2AKey\uFF0C\u53EA\u4F1A\u751F\u6210\u4E00\u6B21

5.\u76F4\u63A5\u8BBF\u95EE https://platform.openai.com/playground \u53EF\u4EE5\u770B\u5230\u4E00\u4E2A\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u4F53\u9A8C


6.\u4E5F\u53EF\u4EE5\u8BBF\u95EE\u4E0B\u9762\u8FD9\u4E2A\u94FE\u63A5\uFF0C\u4F46\u662F\u4E00\u822C\u4F1A\u62A5\u9519\uFF1A
  \u8BBF\u95EE\uFF1Ahttps://chat.openai.com/
  
  Access denied
  You do not have access to chat.openai.com.
  
  The site owner may have set restrictions that prevent you from accessing the
  
7.\u8FD8\u53EF\u4EE5\u901A\u8FC7PostMan \u8C03\u7528\u63A5\u53E3
\u63A5\u53E3\u8C03\u7528\u4E00\u5B9A\u8981\u914D\u5408 Key \u4F7F\u7528\uFF1A
header\u5934\u9700\u8981\u8FD9\u4E2A\u8BA4\u8BC1\u53C2\u6570:Authorization:Bearer sk-dfasfasdfdgdfdsfgdgfdhgfhgfjhgjhgj
\u6BD4\u5982\u6211\u8C03\u7528\u4E86\u83B7\u53D6\u6A21\u578B\u7684\u63A5\u53E3\uFF1A

url: get  https://api.openai.com/v1/models

\u8FD4\u56DE:
{
    &quot;object&quot;: &quot;list&quot;,
    &quot;data&quot;: [
        {
            &quot;id&quot;: &quot;babbage&quot;,
            &quot;object&quot;: &quot;model&quot;,
            &quot;created&quot;: 1649358449,
            &quot;owned_by&quot;: &quot;openai&quot;,
            &quot;permission&quot;: [
                {
                    &quot;id&quot;: &quot;modelperm-49FUp5v084tBB49tC4z8LPH5&quot;,
                    &quot;object&quot;: &quot;model_permission&quot;,
                    &quot;created&quot;: 1669085501,
                    &quot;allow_create_engine&quot;: false,
                    &quot;allow_sampling&quot;: true,
                    &quot;allow_logprobs&quot;: true,
                    &quot;allow_search_indices&quot;: false,
                    &quot;allow_view&quot;: true,
                    &quot;allow_fine_tuning&quot;: false,
                    &quot;organization&quot;: &quot;*&quot;,
                    &quot;group&quot;: null,
                    &quot;is_blocking&quot;: false
                }
            ],
            &quot;root&quot;: &quot;babbage&quot;,
            &quot;parent&quot;: null
        },
        {
            &quot;id&quot;: &quot;davinci&quot;,
            &quot;object&quot;: &quot;model&quot;,
            &quot;created&quot;: 1649359874,
            &quot;owned_by&quot;: &quot;openai&quot;,
            &quot;permission&quot;: [
                {
                    &quot;id&quot;: &quot;modelperm-U6ZwlyAd0LyMk4rcMdz33Yc3&quot;,
                    &quot;object&quot;: &quot;model_permission&quot;,
                    &quot;created&quot;: 1669066355,
                    &quot;allow_create_engine&quot;: false,
                    &quot;allow_sampling&quot;: true,
                    &quot;allow_logprobs&quot;: true,
                    &quot;allow_search_indices&quot;: false,
                    &quot;allow_view&quot;: true,
                    &quot;allow_fine_tuning&quot;: false,
                    &quot;organization&quot;: &quot;*&quot;,
                    &quot;group&quot;: null,
                    &quot;is_blocking&quot;: false
                }
            ],
            &quot;root&quot;: &quot;davinci&quot;,
            &quot;parent&quot;: null
        },
        {
            &quot;id&quot;: &quot;gpt-3.5-turbo-0301&quot;,
            &quot;object&quot;: &quot;model&quot;,
            &quot;created&quot;: 1677649963,
            &quot;owned_by&quot;: &quot;openai&quot;,
            &quot;permission&quot;: [
                {
                    &quot;id&quot;: &quot;modelperm-ms2DpLH5OCOZpUikJ4sRQNkh&quot;,
                    &quot;object&quot;: &quot;model_permission&quot;,
                    &quot;created&quot;: 1677691853,
                    &quot;allow_create_engine&quot;: false,
                    &quot;allow_sampling&quot;: true,
                    &quot;allow_logprobs&quot;: true,
                    &quot;allow_search_indices&quot;: false,
                    &quot;allow_view&quot;: true,
                    &quot;allow_fine_tuning&quot;: false,
                    &quot;organization&quot;: &quot;*&quot;,
                    &quot;group&quot;: null,
                    &quot;is_blocking&quot;: false
                }
            ],
            &quot;root&quot;: &quot;gpt-3.5-turbo-0301&quot;,
            &quot;parent&quot;: null
        },
        {
            &quot;id&quot;: &quot;text-davinci-003&quot;,
            &quot;object&quot;: &quot;model&quot;,
            &quot;created&quot;: 1669599635,
            &quot;owned_by&quot;: &quot;openai-internal&quot;,
            &quot;permission&quot;: [
                {
                    &quot;id&quot;: &quot;modelperm-6CAfTW5IbFpnlziQKoDilahq&quot;,
                    &quot;object&quot;: &quot;model_permission&quot;,
                    &quot;created&quot;: 1677793558,
                    &quot;allow_create_engine&quot;: false,
                    &quot;allow_sampling&quot;: true,
                    &quot;allow_logprobs&quot;: true,
                    &quot;allow_search_indices&quot;: false,
                    &quot;allow_view&quot;: true,
                    &quot;allow_fine_tuning&quot;: false,
                    &quot;organization&quot;: &quot;*&quot;,
                    &quot;group&quot;: null,
                    &quot;is_blocking&quot;: false
                }
            ],
            &quot;root&quot;: &quot;text-davinci-003&quot;,
            &quot;parent&quot;: null
        }
    ]
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[o];function t(d,v){return n(),e("div",null,s)}var r=i(u,[["render",t],["__file","\u5173\u4E8EopenAPI\u6CE8\u518C\u4EE5\u53CA\u63A5\u53E3\u8C03\u7528\u7684\u8BF4\u660E\u6587\u6863.html.vue"]]);export{r as default};
