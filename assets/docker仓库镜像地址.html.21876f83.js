import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const d={},l=s(`<p>docker\u4ED3\u5E93\u955C\u50CF\u5730\u5740:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528aliyun\u955C\u50CF\u5DE5\u5177:
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
&quot;registry-mirrors&quot;: [&quot;https://ohvr36te.mirror.aliyuncs.com&quot;] //\u8FD9\u4E2A\u73B0\u5728\u4E5F\u4E0D\u80FD\u7528\u4E86\uFF0C\u6240\u4EE5 aliyun \u7684\u8DEF\u5B50\u8D70\u4E0D\u901A\u4E86
}
EOF
  
\u4E0B\u9762\u8FD9\u4E2A\u53EF\u4EE5\uFF0C\u4F46\u662F\u8FD8\u662F\u9700\u8981\u5F00VPN:
{
  &quot;registry-mirrors&quot;: [
        &quot;https://dockerhub.icu&quot;,
        &quot;https://docker.awsl9527.cn&quot;
    ]
}
\u4E0A\u9762(\u5904\u7406\u540E)\u7684\u76F4\u63A5\u8BBF\u95EE\u53EA\u6709\uFF1A
&quot;https://dockerhub.icu&quot;,
&quot;https://docker.awsl9527.cn&quot; // \u6709\u7F51\u7AD9\uFF1Ahttps://docker.awsl9527.cn/  \u535A\u5BA2\uFF1Ahttps://songxwn.com/ (\u503C\u5F97\u501F\u9274)
  
\u4E0B\u9762\u8FD9\u4E2A\u4E5F\u53EF\u4EE5\uFF1A  
{
    &quot;registry-mirrors&quot;: [
        &quot;https://docker.m.daocloud.io&quot;,
    ]
}
  
\u914D\u7F6E\u597D\u4EE5\u540E\u6267\u884C:
sudo systemctl daemon-reload
sudo systemctl restart docker
  
\u76F8\u5173\u94FE\u63A5:
https://blog.csdn.net/weixin_50160384/article/details/139861337 //docker\u6E90\u8BF7\u6C42\u8D85\u65F6, \u5199\u7684\u6BD4\u8F83\u591A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function c(t,u){return i(),n("div",null,r)}var o=e(d,[["render",c],["__file","docker\u4ED3\u5E93\u955C\u50CF\u5730\u5740.html.vue"]]);export{o as default};
