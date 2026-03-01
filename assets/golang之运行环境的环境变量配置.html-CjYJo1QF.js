import{_ as e,c as s,f as a,o as l}from"./app-BB_BIQV8.js";const t={};function i(o,n){return l(),s("div",null,n[0]||(n[0]=[a(`<p>golang之运行环境的环境变量配置</p><p>主要是在通过 go enc -w 配置golang运行的环境变量的时候，会有下面的问题</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[root@k8smaster ~]# go env -w GO111MODULE=on</span>
<span class="line">[root@k8smaster ~]# go env -w GOPROXY=https://goproxy.cn,direct</span>
<span class="line">warning: go env -w GOPROXY=... does not override conflicting OS environment variable</span>
<span class="line"></span>
<span class="line">解决办法:</span>
<span class="line">[root@k8smaster ~]# unset GOPROXY</span>
<span class="line">[root@k8smaster ~]# go env -w GOPROXY=https://goproxy.cn,direct</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=e(t,[["render",i],["__file","golang之运行环境的环境变量配置.html.vue"]]),d=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8B%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83%E7%9A%84%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE.html","title":"golang之运行环境的环境变量配置","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之运行环境的环境变量配置","description":"golang之运行环境的环境变量配置"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之运行环境的环境变量配置.md"}');export{c as comp,d as data};
