import{_ as s,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(d,n){return l(),e("div",null,n[0]||(n[0]=[a(`<p>k8s日志查看，注意指定命名空间：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.查看指定pod的运行日志</span>
<span class="line">[root@k8smaster k8s-cluster]# kubectl logs -f pods/user-develop-76ff85f7d5-4vm4s -n hello-api-namespace</span>
<span class="line">2022/10/10 04:56:08 server listening at 127.0.0.1:8066</span>
<span class="line">^C</span>
<span class="line">[root@k8smaster k8s-cluster]# kubectl logs -f pods/hello-api-app-75cf6d7bd-22zzk -n hello-api-namespace</span>
<span class="line">2022/10/10 05:44:50 rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial tcp 0.0.0.0:8066: connect: connection refused&quot;</span>
<span class="line">2022/10/10 05:44:53 rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial tcp 0.0.0.0:8066: connect: connection refused&quot;</span>
<span class="line">2022/10/10 05:45:24 rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial tcp 0.0.0.0:8066: connect: connection refused&quot;</span>
<span class="line"></span>
<span class="line">2.查看指定pod的构建日志</span>
<span class="line">[root@k8smaster k8s-cluster]# kubectl describe  pods hello-api-app-75cf6d7bd-22zzk -n hello-api-namespace</span>
<span class="line">Name:         hello-api-app-75cf6d7bd-22zzk</span>
<span class="line">Namespace:    hello-api-namespace</span>
<span class="line">Priority:     0</span>
<span class="line">Node:         worker1/124.221.202.241</span>
<span class="line">Start Time:   Mon, 10 Oct 2022 13:40:09 +0800</span>
<span class="line">Labels:       app.kubernetes.io/name=hello-api-app</span>
<span class="line">              pod-template-hash=75cf6d7bd</span>
<span class="line">Annotations:  &lt;none&gt;</span>
<span class="line">Status:       Running</span>
<span class="line">IP:           10.244.1.75</span>
<span class="line">IPs:</span>
<span class="line">  IP:           10.244.1.75</span>
<span class="line">Controlled By:  ReplicaSet/hello-api-app-75cf6d7bd</span>
<span class="line">Containers:</span>
<span class="line">  hello-api-app:</span>
<span class="line">    Container ID:   docker://ea31cfdeee37f348166766caff00b4c42e492de19887759052fe9e89f4cb25ba</span>
<span class="line">    Image:          chetaixian/k8s-cluster:v1.0.5</span>
<span class="line">    Image ID:       docker-pullable://chetaixian/k8s-cluster@sha256:b8ae14bb0267db523d4f7a602aadb144e49678877ab39bceab14ea13710beac0</span>
<span class="line">    Port:           8082/TCP</span>
<span class="line">    Host Port:      0/TCP</span>
<span class="line">    State:          Running</span>
<span class="line">      Started:      Mon, 10 Oct 2022 13:40:41 +0800</span>
<span class="line">    Ready:          True</span>
<span class="line">    Restart Count:  0</span>
<span class="line">    Environment:    &lt;none&gt;</span>
<span class="line">    Mounts:</span>
<span class="line">      /var/run/secrets/kubernetes.io/serviceaccount from default-token-9t8rf (ro)</span>
<span class="line">Conditions:</span>
<span class="line">  Type              Status</span>
<span class="line">  Initialized       True</span>
<span class="line">  Ready             True</span>
<span class="line">  ContainersReady   True</span>
<span class="line">  PodScheduled      True</span>
<span class="line">Volumes:</span>
<span class="line">  default-token-9t8rf:</span>
<span class="line">    Type:        Secret (a volume populated by a Secret)</span>
<span class="line">    SecretName:  default-token-9t8rf</span>
<span class="line">    Optional:    false</span>
<span class="line">QoS Class:       BestEffort</span>
<span class="line">Node-Selectors:  &lt;none&gt;</span>
<span class="line">Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s</span>
<span class="line">                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s</span>
<span class="line">Events:</span>
<span class="line">  Type    Reason     Age   From               Message</span>
<span class="line">  ----    ------     ----  ----               -------</span>
<span class="line">  Normal  Scheduled  28m   default-scheduler  Successfully assigned hello-api-namespace/hello-api-app-75cf6d7bd-22zzk to worker1</span>
<span class="line">  Normal  Pulling    28m   kubelet            Pulling image &quot;chetaixian/k8s-cluster:v1.0.5&quot;</span>
<span class="line">  Normal  Pulled     27m   kubelet            Successfully pulled image &quot;chetaixian/k8s-cluster:v1.0.5&quot;</span>
<span class="line">  Normal  Created    27m   kubelet            Created container hello-api-app</span>
<span class="line">  Normal  Started    27m   kubelet            Started container hello-api-app</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(i,[["render",c],["__file","k8s日志查看.html.vue"]]),t=JSON.parse('{"path":"/content/service/k8s/k8s%E6%97%A5%E5%BF%97%E6%9F%A5%E7%9C%8B.html","title":"k8s日志查看","lang":"en-US","frontmatter":{"sidebar":false,"title":"k8s日志查看","description":"k8s日志查看"},"headers":[],"git":{},"filePathRelative":"content/service/k8s/k8s日志查看.md"}');export{p as comp,t as data};
