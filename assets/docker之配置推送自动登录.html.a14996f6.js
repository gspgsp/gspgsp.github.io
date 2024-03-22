import{_ as e,o as n,c as i,g as s}from"./app.b04686bd.js";const d={},r=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u53D1\u5E03\u955C\u50CF\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u8981\u5148\u6267\u884C docker login -u xxx -p xxx \u64CD\u4F5C\uFF0C\u4F46\u662F\u5728\u901A\u8FC7\u811A\u672C\u53D1\u5E03\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u6709\u95EE\u9898\uFF0C\u56E0\u4E3A\u4E0D\u80FD\u76F4\u63A5\u4EA4\u4E92\uFF0C
\u6240\u4EE5 \u53EF\u4EE5\u5728\u6267\u884C\u811A\u672C\u7684\u673A\u5668\u4E0A\u5148\u6267\u884C docker login -u xxx -p xxx \u8FD9\u4E2A\u662Fdocker \u4ED3\u5E93\u9ED8\u8BA4\u767B\u5F55\u64CD\u4F5C\uFF0C\u5982\u679C\u662F\u63A8\u9001\u5230\u81EA\u5DF1\u7684\u4ED3\u5E93\uFF0C\u90A3\u4E48\u9700
\u8981\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u6211\u63A8\u5230\u4E86\u963F\u91CC\u4E91\u7684\u955C\u50CF\u4ED3\u5E93:
[root@k8smaster .docker]# docker login --username=xxx registry.cn-qingdao.aliyuncs.com
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded

\u6267\u884C\u6309\u4EE5\u540E\u5C31\u53EF\u4EE5\u6267\u884C\u63A8\u9001\u547D\u4EE4\u4E86:
[root@k8smaster ~]# docker push registry.cn-qingdao.aliyuncs.com/xxx/httpd:v1.0.2

\u4EE5\u540E\u53EF\u4EE5\u76F4\u63A5 docker push \u5230\u6307\u5B9A\u4ED3\u5E93\uFF0C\u4E0D\u9700\u8981\u518D\u767B\u5F55\uFF0C\u539F\u56E0\u662F\u5728 /root/.docker/config.json (~/.docker/config.json) \u8FD9\u4E2A\u6587\u4EF6\u91CC\u9762\u4FDD\u5B58\u4E86\u4ED3\u5E93\u7684\u6388\u6743\u4FE1\u606F
\u683C\u5F0F\u5982\u4E0B\uFF1A
{
        &quot;auths&quot;: {
                &quot;https://index.docker.io/v1/&quot;: {
                        &quot;auth&quot;: &quot;faddsdsgdfgfddfssfdg&quot;
                },
                &quot;registry.cn-qingdao.aliyuncs.com&quot;: {
                        &quot;auth&quot;: &quot;zxvcfdsfegvbfbsdfsdsddsfd&quot;
                }
        }
}

\u540C\u65F6config.json\u91CC\u7684\u6388\u6743\u6587\u4EF6\u53EF\u4EE5\u590D\u5236\u5230\u5176\u5B83\u670D\u52A1\u5668\u4E0A\uFF0C\u4ECD\u7136\u6709\u6548\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u8FD9\u4E2A\u5728\u505Ak8s\u7684\u9879\u76EE\u81EA\u52A8\u6253\u5305\u53D1\u5E03\u7684\u65F6\u5019\u7279\u522B\u6709\u7528\uFF0C\u5728\u540E\u9762\u7684\u9879\u76EE\u91CC\u9762\u6211\u4F1A\u7528\u5230\u8FD9\u4E2A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[r];function l(o,a){return n(),i("div",null,c)}var u=e(d,[["render",l],["__file","docker\u4E4B\u914D\u7F6E\u63A8\u9001\u81EA\u52A8\u767B\u5F55.html.vue"]]);export{u as default};
