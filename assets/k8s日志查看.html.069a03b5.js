import{_ as e,o as n,c as i,g as l}from"./app.d66d8774.js";const s={},a=l(`<p>k8s\u65E5\u5FD7\u67E5\u770B\uFF0C\u6CE8\u610F\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u67E5\u770B\u6307\u5B9Apod\u7684\u8FD0\u884C\u65E5\u5FD7
[root@k8smaster k8s-cluster]# kubectl logs -f pods/user-develop-76ff85f7d5-4vm4s -n hello-api-namespace
2022/10/10 04:56:08 server listening at 127.0.0.1:8066
^C
[root@k8smaster k8s-cluster]# kubectl logs -f pods/hello-api-app-75cf6d7bd-22zzk -n hello-api-namespace
2022/10/10 05:44:50 rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial tcp 0.0.0.0:8066: connect: connection refused&quot;
2022/10/10 05:44:53 rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial tcp 0.0.0.0:8066: connect: connection refused&quot;
2022/10/10 05:45:24 rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial tcp 0.0.0.0:8066: connect: connection refused&quot;

2.\u67E5\u770B\u6307\u5B9Apod\u7684\u6784\u5EFA\u65E5\u5FD7
[root@k8smaster k8s-cluster]# kubectl describe  pods hello-api-app-75cf6d7bd-22zzk -n hello-api-namespace
Name:         hello-api-app-75cf6d7bd-22zzk
Namespace:    hello-api-namespace
Priority:     0
Node:         worker1/124.221.202.241
Start Time:   Mon, 10 Oct 2022 13:40:09 +0800
Labels:       app.kubernetes.io/name=hello-api-app
              pod-template-hash=75cf6d7bd
Annotations:  &lt;none&gt;
Status:       Running
IP:           10.244.1.75
IPs:
  IP:           10.244.1.75
Controlled By:  ReplicaSet/hello-api-app-75cf6d7bd
Containers:
  hello-api-app:
    Container ID:   docker://ea31cfdeee37f348166766caff00b4c42e492de19887759052fe9e89f4cb25ba
    Image:          chetaixian/k8s-cluster:v1.0.5
    Image ID:       docker-pullable://chetaixian/k8s-cluster@sha256:b8ae14bb0267db523d4f7a602aadb144e49678877ab39bceab14ea13710beac0
    Port:           8082/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 10 Oct 2022 13:40:41 +0800
    Ready:          True
    Restart Count:  0
    Environment:    &lt;none&gt;
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-9t8rf (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-9t8rf:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-9t8rf
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  &lt;none&gt;
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  28m   default-scheduler  Successfully assigned hello-api-namespace/hello-api-app-75cf6d7bd-22zzk to worker1
  Normal  Pulling    28m   kubelet            Pulling image &quot;chetaixian/k8s-cluster:v1.0.5&quot;
  Normal  Pulled     27m   kubelet            Successfully pulled image &quot;chetaixian/k8s-cluster:v1.0.5&quot;
  Normal  Created    27m   kubelet            Created container hello-api-app
  Normal  Started    27m   kubelet            Started container hello-api-app

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function r(c,t){return n(),i("div",null,d)}var v=e(s,[["render",r],["__file","k8s\u65E5\u5FD7\u67E5\u770B.html.vue"]]);export{v as default};
