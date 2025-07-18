import{_ as s,c as n,d as a,o as i}from"./app-B4P9BclZ.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<p>关于Pod: Pod是一个或多个容器的组合，这些容器共享存储、网络和命名空间，以及如何运行的规范。Pod是Kubernetes的最小可部署单元。Pod的中文译词是豌豆荚，docker容器就像是豆子运行在豌豆荚内。</p><p>关于ReplicaSet: 这个参数主要是定义Pod运行的副本数</p><p>关于Deployment: Deployment用于管理Pod、ReplicaSet，可实现滚动升级和回滚应用、扩容和缩容。</p><p>关于Service:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">k8s的Service定义了一个服务的访问入口地址，前端的应用通过这个入口地址访问其背后的一组由Pod副本组成的集群实例，来自外部的访问请求被负载均衡到后端的各个容器应用上。Service与其后端Pod副本集群之间则是通过Label Selector实现关联。</span>
<span class="line"></span>
<span class="line">关于Service的type选择，官方文档对type的说明如下[注：直接 运行kubectl explain KindName]：</span>
<span class="line">kubectl explain Service.spec.type</span>
<span class="line">type	&lt;string&gt;</span>
<span class="line">     type determines how the Service is exposed. Defaults to ClusterIP. Valid</span>
<span class="line">     options are ExternalName, ClusterIP, NodePort, and LoadBalancer.</span>
<span class="line">     &quot;ExternalName&quot; maps to the specified externalName. &quot;ClusterIP&quot; allocates a</span>
<span class="line">     cluster-internal IP address for load-balancing to endpoints. Endpoints are</span>
<span class="line">     determined by the selector or if that is not specified, by manual</span>
<span class="line">     construction of an Endpoints object. If clusterIP is &quot;None&quot;, no virtual IP</span>
<span class="line">     is allocated and the endpoints are published as a set of endpoints rather</span>
<span class="line">     than a stable IP. &quot;NodePort&quot; builds on ClusterIP and allocates a port on</span>
<span class="line">     every node which routes to the clusterIP. &quot;LoadBalancer&quot; builds on NodePort</span>
<span class="line">     and creates an external load-balancer (if supported in the current cloud)</span>
<span class="line">     which routes to the clusterIP. More info:</span>
<span class="line">     https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types</span>
<span class="line">简单来说：type包括四种类型 ExternalName ClusterIP(默认) NodePort LoadBalancer，其中用的比较多的就是 ClusterIP 和 NodePort，在实际应用中，假如没有用阿里云或者腾讯云，就是自己纯手工配置的话，当选择 ClusterIP</span>
<span class="line">以后可能还需要配合 ingress 才能让外网访问，我就是用了 nginx-ingress(用 istio 没有配置成功,但是 istio 是最好的方案)，但是发现很鸡肋，因为nginx-ingress也会使用NodePort形式暴露端口，而且只能是 30000-32767 之间</span>
<span class="line">的端口。这就有个问题没法使用80/443，所以后来我就没有使用这个方案，选择了 NodePort 方案，这种方案可以通过ip:port访问，如何配置域名访问，那就很简单了，直接通过 nginx 反向代理就可以了，实现80/443端口访问。当然</span>
<span class="line">如果使用阿里云或者腾讯云这都不是问题了，后面我会在腾讯云上跑这个流程。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于端口: ①port是k8s集群内部访问service的端口，即通过clusterIP: port可以访问到某个service ②nodePort是外部访问k8s集群中service的端口，通过nodeIP: nodePort可以从外部访问到某个service // 注意:如果启用nodePort，那么会在所有node上都会启用这个端口，包括worker节点和master节点 ③targetPort是pod的端口，从port和nodePort来的流量经过kube-proxy流入到后端pod的targetPort上，最后进入容器 ④containerPort是pod内部容器的端口，targetPort映射到containerPort</p>`,6)]))}const d=s(t,[["render",l],["__file","k8s各对象之间的关系.html.vue"]]),c=JSON.parse('{"path":"/content/service/k8s/k8s%E5%90%84%E5%AF%B9%E8%B1%A1%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB.html","title":"k8s各对象之间的关系","lang":"en-US","frontmatter":{"sidebar":false,"title":"k8s各对象之间的关系","description":"k8s各对象之间的关系"},"headers":[],"git":{},"filePathRelative":"content/service/k8s/k8s各对象之间的关系.md"}');export{d as comp,c as data};
