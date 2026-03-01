import{_ as e,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,s){return i(),n("div",null,s[0]||(s[0]=[a(`<p>k8s集群配置HTTPS访问: 主要是要配置一个Secret的资源，通过yaml文件配置(不想通过命令行)，格式如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apiVersion: v1</span>
<span class="line">kind: Secret</span>
<span class="line">metadata:</span>
<span class="line">  name: k8s-secret-tls</span>
<span class="line">  namespace: hello-api-namespace</span>
<span class="line">data:</span>
<span class="line">  tls.crt: 文件内容</span>
<span class="line">  tls.key: 文件内容</span>
<span class="line">type: kubernetes.io/tls</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=e(l,[["render",t],["__file","k8s集群配置HTTPS访问.html.vue"]]),p=JSON.parse('{"path":"/content/service/k8s/k8s%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AEHTTPS%E8%AE%BF%E9%97%AE.html","title":"k8s集群配置HTTPS访问","lang":"en-US","frontmatter":{"sidebar":false,"title":"k8s集群配置HTTPS访问","description":"k8s集群配置HTTPS访问"},"headers":[],"git":{},"filePathRelative":"content/service/k8s/k8s集群配置HTTPS访问.md"}');export{d as comp,p as data};
