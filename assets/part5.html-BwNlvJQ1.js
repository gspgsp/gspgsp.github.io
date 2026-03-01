import{_ as s,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function p(t,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h2 id="基于minikube的金丝雀发布" tabindex="-1"><a class="header-anchor" href="#基于minikube的金丝雀发布"><span>基于minikube的金丝雀发布</span></a></h2><h2 id="分别修改如下文件内容" tabindex="-1"><a class="header-anchor" href="#分别修改如下文件内容"><span>分别修改如下文件内容</span></a></h2><blockquote><p>deployment.yaml<br> service.yaml<br> gateway.yaml</p></blockquote><h3 id="具体修改如下" tabindex="-1"><a class="header-anchor" href="#具体修改如下"><span>具体修改如下</span></a></h3><ul><li>deployment.yaml<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span></span>
<span class="line">  <span class="token key atrule">strategy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate</span>
<span class="line">    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line">      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">0.1</span></span>
<span class="line">          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent</span>
<span class="line">          <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>deploymentv2.yaml<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v2</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v2</span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v2</span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">0.2</span></span>
<span class="line">          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent</span>
<span class="line">          <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>service.yaml<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line">  <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span></span>
<span class="line">      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>servicev2.yaml<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v2</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v2</span>
<span class="line">  <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span></span>
<span class="line">      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>gateway.yaml<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># ---------- GatewayClass ----------</span>
<span class="line">apiVersion: gateway.networking.k8s.io/v1</span>
<span class="line">kind: GatewayClass</span>
<span class="line">metadata:</span>
<span class="line">  name: demo-gateway-class</span>
<span class="line">spec:</span>
<span class="line">  controllerName: istio.io/gateway-controller # 如果你用 Envoy Gateway 或 Traefik 要改这里</span>
<span class="line"></span>
<span class="line">---</span>
<span class="line"></span>
<span class="line"># ---------- Gateway ----------</span>
<span class="line">apiVersion: gateway.networking.k8s.io/v1</span>
<span class="line">kind: Gateway</span>
<span class="line">metadata:</span>
<span class="line">  name: demo-gateway</span>
<span class="line">spec:</span>
<span class="line">  gatewayClassName: demo-gateway-class</span>
<span class="line">  listeners:</span>
<span class="line">    - name: http</span>
<span class="line">      protocol: HTTP</span>
<span class="line">      port: 80</span>
<span class="line"></span>
<span class="line">---</span>
<span class="line"></span>
<span class="line"># ---------- HTTPRoute ----------</span>
<span class="line">apiVersion: gateway.networking.k8s.io/v1</span>
<span class="line">kind: HTTPRoute</span>
<span class="line">metadata:</span>
<span class="line">  name: go-demo-route</span>
<span class="line">spec:</span>
<span class="line">  parentRefs:</span>
<span class="line">    - name: demo-gateway</span>
<span class="line">  hostnames:</span>
<span class="line">    - demo.local</span>
<span class="line">  rules:</span>
<span class="line">    - matches:</span>
<span class="line">        - path:</span>
<span class="line">            type: PathPrefix</span>
<span class="line">            value: &quot;/&quot;</span>
<span class="line">      backendRefs:</span>
<span class="line">        - name: go-demo-v1</span>
<span class="line">          port: 80</span>
<span class="line">          weight: 0</span>
<span class="line">        - name: go-demo-v2</span>
<span class="line">          port: 80</span>
<span class="line">          weight: 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="然后分别apply" tabindex="-1"><a class="header-anchor" href="#然后分别apply"><span>然后分别apply</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ kubectl apply -f deploy/deployment.yaml</span>
<span class="line">deployment.apps/go-demo-v1 created</span>
<span class="line"></span>
<span class="line">$ kubectl apply -f deploy/deploymentv2.yaml</span>
<span class="line">deployment.apps/go-demo-v2 created</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ kubectl apply -f deploy/service.yaml</span>
<span class="line">service/go-demo-v1 created</span>
<span class="line"></span>
<span class="line">$ kubectl apply -f deploy/servicev2.yaml</span>
<span class="line">service/go-demo-v2 created</span>
<span class="line"></span>
<span class="line">$ kubectl apply -f deploy/gateway.yaml</span>
<span class="line">gatewayclass.gateway.networking.k8s.io/demo-gateway-class unchanged</span>
<span class="line">gateway.gateway.networking.k8s.io/demo-gateway configured</span>
<span class="line">httproute.gateway.networking.k8s.io/go-demo-route configured</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看服务" tabindex="-1"><a class="header-anchor" href="#查看服务"><span>查看服务</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ kubectl get svc</span>
<span class="line">NAME                              TYPE           CLUSTER-IP      EXTERNAL-IP    PORT(S)                        AGE</span>
<span class="line">demo-gateway-demo-gateway-class   LoadBalancer   10.96.233.91    10.96.233.91   15021:30819/TCP,80:30195/TCP   17d</span>
<span class="line">go-demo                           ClusterIP      10.111.175.13   &lt;none&gt;         80/TCP                         17d</span>
<span class="line">go-demo-v1                        ClusterIP      10.101.125.48   &lt;none&gt;         80/TCP                         21m</span>
<span class="line">go-demo-v2                        ClusterIP      10.100.75.73    &lt;none&gt;         80/TCP                         21m</span>
<span class="line">kubernetes                        ClusterIP      10.96.0.1       &lt;none&gt;         443/TCP                        21d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看各个服务节点信息" tabindex="-1"><a class="header-anchor" href="#查看各个服务节点信息"><span>查看各个服务节点信息</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ kubectl get endpoints go-demo-v1</span>
<span class="line">NAME         ENDPOINTS                                                        AGE</span>
<span class="line">go-demo-v1   10.244.0.46:8080,10.244.0.47:8080,10.244.0.48:8080 + 1 more...   14s</span>
<span class="line"></span>
<span class="line">$ kubectl get endpoints go-demo-v2</span>
<span class="line">NAME         ENDPOINTS          AGE</span>
<span class="line">go-demo-v2   10.244.0.50:8080   22m</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试运行状态-请求结果是4-1-符合预期" tabindex="-1"><a class="header-anchor" href="#测试运行状态-请求结果是4-1-符合预期"><span>测试运行状态(请求结果是4:1，符合预期)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ for i in {1..10}; do curl http://demo.local/; echo; done</span>
<span class="line">hello from go on k8s + gateway api</span>
<span class="line">hello from go on k8s + gateway api</span>
<span class="line">hello from go on k8s + gateway api</span>
<span class="line">hello from go on k8s + gateway api go-demo-v2-67bbdf7f95-pq95g</span>
<span class="line">hello from go on k8s + gateway api go-demo-v2-67bbdf7f95-pq95g</span>
<span class="line">hello from go on k8s + gateway api</span>
<span class="line">hello from go on k8s + gateway api</span>
<span class="line">hello from go on k8s + gateway api</span>
<span class="line">hello from go on k8s + gateway api</span>
<span class="line">hello from go on k8s + gateway api</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const d=s(i,[["render",p],["__file","part5.html.vue"]]),o=JSON.parse('{"path":"/project/k8s/part5.html","title":"","lang":"en-US","frontmatter":{"sidebarDepth":0},"headers":[{"level":2,"title":"基于minikube的金丝雀发布","slug":"基于minikube的金丝雀发布","link":"#基于minikube的金丝雀发布","children":[]},{"level":2,"title":"分别修改如下文件内容","slug":"分别修改如下文件内容","link":"#分别修改如下文件内容","children":[{"level":3,"title":"具体修改如下","slug":"具体修改如下","link":"#具体修改如下","children":[]}]},{"level":2,"title":"然后分别apply","slug":"然后分别apply","link":"#然后分别apply","children":[]},{"level":2,"title":"查看服务","slug":"查看服务","link":"#查看服务","children":[]},{"level":2,"title":"查看各个服务节点信息","slug":"查看各个服务节点信息","link":"#查看各个服务节点信息","children":[]},{"level":2,"title":"测试运行状态(请求结果是4:1，符合预期)","slug":"测试运行状态-请求结果是4-1-符合预期","link":"#测试运行状态-请求结果是4-1-符合预期","children":[]}],"git":{},"filePathRelative":"project/k8s/part5.md"}');export{d as comp,o as data};
