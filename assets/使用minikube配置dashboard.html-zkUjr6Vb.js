import{_ as n,c as e,d as a,o as i}from"./app-C7j_h9cy.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>使用minikube配置dashboard:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//前置条件</span>
<span class="line">清理掉docker cli 代理配置</span>
<span class="line">sudo vim ~/.docker/config.json</span>
<span class="line">{</span>
<span class="line">  &quot;proxies&quot;: {}</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">恢复 /etc/resolve.conf里的配置 (之前加了dns 8.8.8.8，没用)</span>
<span class="line">sudo vim /etc/resolve.conf</span>
<span class="line">nameserver 127.0.0.53</span>
<span class="line">options edns0 trust-ad</span>
<span class="line">search .</span>
<span class="line">  </span>
<span class="line">恢复 /etc/hosts下的配置 (修改过本地hostname的解析，没用)</span>
<span class="line">$ hostname</span>
<span class="line">tianyi510s</span>
<span class="line">  </span>
<span class="line">最后修改了 daemon.json的配置:</span>
<span class="line">sudo vim /etc/docker/daemon.json</span>
<span class="line">{</span>
<span class="line">&quot;registry-mirrors&quot;: [</span>
<span class="line">&quot;https://docker.unsee.tech&quot;,</span>
<span class="line">&quot;https://dockerpull.org&quot;,</span>
<span class="line">&quot;https://dockerhub.icu&quot;</span>
<span class="line">]</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">记得执行: sudo systemctl daemon-reload &amp;&amp; sudo systemctl restart docker</span>
<span class="line">  </span>
<span class="line">这几个镜像加速配置的链接信息(镜像加速查询集合): https://www.cnblogs.com/alex-oos/p/18417200</span>
<span class="line">  </span>
<span class="line">重点: 其实docker的镜像配置，无论是 daemon 还是cli(虽然cli的可以通过最上面的方式配置)的，直接配置 /etc/docker/daemon.json 对两种方式都生效，根本不需要配置docker.service.d/http-proxy.conf，完全扯蛋的.</span>
<span class="line">  </span>
<span class="line">//正式开始</span>
<span class="line">$ minikube dashboard</span>
<span class="line">🤔  Verifying dashboard health ...</span>
<span class="line">🚀  Launching proxy ...</span>
<span class="line">🤔  Verifying proxy health ...</span>
<span class="line">  </span>
<span class="line">//查看pod状态:</span>
<span class="line">$ kubectl get pods -n kubernetes-dashboard</span>
<span class="line">NAME                                        READY   STATUS              RESTARTS   AGE</span>
<span class="line">dashboard-metrics-scraper-c5db448b4-9wxtf   0/1     ImagePullBackOff    0          117s</span>
<span class="line">kubernetes-dashboard-695b96c756-ftld6       0/1     ErrImagePull        0          117s</span>
<span class="line">kubernetes-dashboard-6b9d555977-rltvk       0/1     ContainerCreating   0          10s</span>
<span class="line">  </span>
<span class="line">//然后就计划拉取镜像到本地，然后load到minikube(主要就是下面这两个镜像)</span>
<span class="line">$ docker pull kubernetesui/dashboard:v2.7.0</span>
<span class="line">v2.7.0: Pulling from kubernetesui/dashboard</span>
<span class="line">Digest: sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93</span>
<span class="line">Status: Downloaded newer image for kubernetesui/dashboard:v2.7.0</span>
<span class="line">docker.io/kubernetesui/dashboard:v2.7.0</span>
<span class="line">  </span>
<span class="line">$ docker pull kubernetesui/metrics-scraper:v1.0.8</span>
<span class="line">v1.0.8: Pulling from kubernetesui/metrics-scraper</span>
<span class="line">978be80e3ee3: Pull complete </span>
<span class="line">5866d2c04d96: Pull complete </span>
<span class="line">Digest: sha256:76049887f07a0476dc93efc2d3569b9529bf982b22d29f356092ce206e98765c</span>
<span class="line">Status: Downloaded newer image for kubernetesui/metrics-scraper:v1.0.8</span>
<span class="line">docker.io/kubernetesui/metrics-scraper:v1.0.8</span>
<span class="line">  </span>
<span class="line">//加载镜像到Minikube</span>
<span class="line">minikube image load kubernetesui/dashboard:v2.7.0</span>
<span class="line">minikube image load kubernetesui/metrics-scraper:v1.0.8</span>
<span class="line">  </span>
<span class="line">//重新启动 Kubernetes Dashboard</span>
<span class="line">kubectl rollout restart deployment kubernetes-dashboard -n kubernetes-dashboard</span>
<span class="line">  </span>
<span class="line">//执行下面命令查看pods状态，还是有问题</span>
<span class="line">$ kubectl get pods -n kubernetes-dashboard</span>
<span class="line">NAME                                        READY   STATUS              RESTARTS   AGE</span>
<span class="line">dashboard-metrics-scraper-c5db448b4-9wxtf   0/1     ImagePullBackOff    0          117s</span>
<span class="line">kubernetes-dashboard-695b96c756-ftld6       0/1     ErrImagePull        0          117s</span>
<span class="line">kubernetes-dashboard-6b9d555977-rltvk       0/1     ContainerCreating   0          10s</span>
<span class="line">  </span>
<span class="line">//然后执行命令查看 kubernetes-dashboard 命名空间下的pod描述信息</span>
<span class="line">$ kubectl describe pod -n kubernetes-dashboard</span>
<span class="line">Name:             dashboard-metrics-scraper-c5db448b4-9wxtf</span>
<span class="line">Namespace:        kubernetes-dashboard</span>
<span class="line">Priority:         0</span>
<span class="line">Service Account:  kubernetes-dashboard</span>
<span class="line">Node:             minikube/192.168.49.2</span>
<span class="line">Start Time:       Tue, 10 Dec 2024 22:48:35 +0800</span>
<span class="line">Labels:           k8s-app=dashboard-metrics-scraper</span>
<span class="line">                  pod-template-hash=c5db448b4</span>
<span class="line">Annotations:      seccomp.security.alpha.kubernetes.io/pod: runtime/default</span>
<span class="line">Status:           Pending</span>
<span class="line">IP:               10.244.0.4</span>
<span class="line">IPs:</span>
<span class="line">  IP:           10.244.0.4</span>
<span class="line">Controlled By:  ReplicaSet/dashboard-metrics-scraper-c5db448b4</span>
<span class="line">Containers:</span>
<span class="line">  dashboard-metrics-scraper:</span>
<span class="line">    Container ID:   </span>
<span class="line">    Image:          docker.io/kubernetesui/metrics-scraper:v1.0.8@sha256:76049887f07a0476dc93efc2d3569b9529bf982b22d29f356092ce206e98765c</span>
<span class="line">    Image ID:       </span>
<span class="line">    Port:           8000/TCP</span>
<span class="line">    Host Port:      0/TCP</span>
<span class="line">    State:          Waiting</span>
<span class="line">      Reason:       ImagePullBackOff</span>
<span class="line">    Ready:          False</span>
<span class="line">    Restart Count:  0</span>
<span class="line">    Liveness:       http-get http://:8000/ delay=30s timeout=30s period=10s #success=1 #failure=3</span>
<span class="line">    Environment:    &lt;none&gt;</span>
<span class="line">    Mounts:</span>
<span class="line">      /tmp from tmp-volume (rw)</span>
<span class="line">      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-6t9pr (ro)</span>
<span class="line">Conditions:</span>
<span class="line">  Type                        Status</span>
<span class="line">  PodReadyToStartContainers   True </span>
<span class="line">  Initialized                 True </span>
<span class="line">  Ready                       False </span>
<span class="line">  ContainersReady             False </span>
<span class="line">  PodScheduled                True </span>
<span class="line">Volumes:</span>
<span class="line">  tmp-volume:</span>
<span class="line">    Type:       EmptyDir (a temporary directory that shares a pod&#39;s lifetime)</span>
<span class="line">    Medium:     </span>
<span class="line">    SizeLimit:  &lt;unset&gt;</span>
<span class="line">  kube-api-access-6t9pr:</span>
<span class="line">    Type:                    Projected (a volume that contains injected data from multiple sources)</span>
<span class="line">    TokenExpirationSeconds:  3607</span>
<span class="line">    ConfigMapName:           kube-root-ca.crt</span>
<span class="line">    ConfigMapOptional:       &lt;nil&gt;</span>
<span class="line">    DownwardAPI:             true</span>
<span class="line">QoS Class:                   BestEffort</span>
<span class="line">Node-Selectors:              kubernetes.io/os=linux</span>
<span class="line">Tolerations:                 node-role.kubernetes.io/master:NoSchedule</span>
<span class="line">                             node.kubernetes.io/not-ready:NoExecute op=Exists for 300s</span>
<span class="line">                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s</span>
<span class="line">Events:</span>
<span class="line">  Type     Reason     Age                    From               Message</span>
<span class="line">  ----     ------     ----                   ----               -------</span>
<span class="line">  Normal   Scheduled  8m15s                  default-scheduler  Successfully assigned kubernetes-dashboard/dashboard-metrics-scraper-c5db448b4-9wxtf to minikube</span>
<span class="line">  Normal   Pulling    5m42s (x4 over 8m12s)  kubelet            Pulling image &quot;docker.io/kubernetesui/metrics-scraper:v1.0.8@sha256:76049887f07a0476dc93efc2d3569b9529bf982b22d29f356092ce206e98765c&quot;</span>
<span class="line">  Warning  Failed     5m18s (x4 over 7m42s)  kubelet            Failed to pull image &quot;docker.io/kubernetesui/metrics-scraper:v1.0.8@sha256:76049887f07a0476dc93efc2d3569b9529bf982b22d29f356092ce206e98765c&quot;: Error response from daemon: Get &quot;https://registry-1.docker.io/v2/&quot;: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)</span>
<span class="line">  Warning  Failed     5m18s (x4 over 7m42s)  kubelet            Error: ErrImagePull</span>
<span class="line">  Warning  Failed     5m8s (x6 over 7m42s)   kubelet            Error: ImagePullBackOff</span>
<span class="line">  Normal   BackOff    3m5s (x13 over 7m42s)  kubelet            Back-off pulling image &quot;docker.io/kubernetesui/metrics-scraper:v1.0.8@sha256:76049887f07a0476dc93efc2d3569b9529bf982b22d29f356092ce206e98765c&quot;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Name:             kubernetes-dashboard-68df97dbb4-gsfwg</span>
<span class="line">Namespace:        kubernetes-dashboard</span>
<span class="line">Priority:         0</span>
<span class="line">Service Account:  kubernetes-dashboard</span>
<span class="line">Node:             minikube/192.168.49.2</span>
<span class="line">Start Time:       Tue, 10 Dec 2024 22:56:05 +0800</span>
<span class="line">Labels:           gcp-auth-skip-secret=true</span>
<span class="line">                  k8s-app=kubernetes-dashboard</span>
<span class="line">                  pod-template-hash=68df97dbb4</span>
<span class="line">Annotations:      kubectl.kubernetes.io/restartedAt: 2024-12-10T22:56:05+08:00</span>
<span class="line">Status:           Pending</span>
<span class="line">IP:               10.244.0.6</span>
<span class="line">IPs:</span>
<span class="line">  IP:           10.244.0.6</span>
<span class="line">Controlled By:  ReplicaSet/kubernetes-dashboard-68df97dbb4</span>
<span class="line">Containers:</span>
<span class="line">  kubernetes-dashboard:</span>
<span class="line">    Container ID:  </span>
<span class="line">    Image:         docker.io/kubernetesui/dashboard:v2.7.0@sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93</span>
<span class="line">    Image ID:      </span>
<span class="line">    Port:          9090/TCP</span>
<span class="line">    Host Port:     0/TCP</span>
<span class="line">    Args:</span>
<span class="line">      --namespace=kubernetes-dashboard</span>
<span class="line">      --enable-skip-login</span>
<span class="line">      --disable-settings-authorizer</span>
<span class="line">    State:          Waiting</span>
<span class="line">      Reason:       ImagePullBackOff</span>
<span class="line">    Ready:          False</span>
<span class="line">    Restart Count:  0</span>
<span class="line">    Liveness:       http-get http://:9090/ delay=30s timeout=30s period=10s #success=1 #failure=3</span>
<span class="line">    Environment:    &lt;none&gt;</span>
<span class="line">    Mounts:</span>
<span class="line">      /tmp from tmp-volume (rw)</span>
<span class="line">      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-pgfqd (ro)</span>
<span class="line">Conditions:</span>
<span class="line">  Type                        Status</span>
<span class="line">  PodReadyToStartContainers   True </span>
<span class="line">  Initialized                 True </span>
<span class="line">  Ready                       False </span>
<span class="line">  ContainersReady             False </span>
<span class="line">  PodScheduled                True </span>
<span class="line">Volumes:</span>
<span class="line">  tmp-volume:</span>
<span class="line">    Type:       EmptyDir (a temporary directory that shares a pod&#39;s lifetime)</span>
<span class="line">    Medium:     </span>
<span class="line">    SizeLimit:  &lt;unset&gt;</span>
<span class="line">  kube-api-access-pgfqd:</span>
<span class="line">    Type:                    Projected (a volume that contains injected data from multiple sources)</span>
<span class="line">    TokenExpirationSeconds:  3607</span>
<span class="line">    ConfigMapName:           kube-root-ca.crt</span>
<span class="line">    ConfigMapOptional:       &lt;nil&gt;</span>
<span class="line">    DownwardAPI:             true</span>
<span class="line">QoS Class:                   BestEffort</span>
<span class="line">Node-Selectors:              kubernetes.io/os=linux</span>
<span class="line">Tolerations:                 node-role.kubernetes.io/master:NoSchedule</span>
<span class="line">                             node.kubernetes.io/not-ready:NoExecute op=Exists for 300s</span>
<span class="line">                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s</span>
<span class="line">Events:</span>
<span class="line">  Type     Reason     Age               From               Message</span>
<span class="line">  ----     ------     ----              ----               -------</span>
<span class="line">  Normal   Scheduled  45s               default-scheduler  Successfully assigned kubernetes-dashboard/kubernetes-dashboard-68df97dbb4-gsfwg to minikube</span>
<span class="line">  Warning  Failed     20s               kubelet            Failed to pull image &quot;docker.io/kubernetesui/dashboard:v2.7.0@sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93&quot;: Error response from daemon: Get &quot;https://registry-1.docker.io/v2/&quot;: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)</span>
<span class="line">  Warning  Failed     20s               kubelet            Error: ErrImagePull</span>
<span class="line">  Normal   BackOff    20s               kubelet            Back-off pulling image &quot;docker.io/kubernetesui/dashboard:v2.7.0@sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93&quot;</span>
<span class="line">  Warning  Failed     20s               kubelet            Error: ImagePullBackOff</span>
<span class="line">  Normal   Pulling    6s (x2 over 42s)  kubelet            Pulling image &quot;docker.io/kubernetesui/dashboard:v2.7.0@sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93&quot;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Name:             kubernetes-dashboard-6b9d555977-rltvk</span>
<span class="line">Namespace:        kubernetes-dashboard</span>
<span class="line">Priority:         0</span>
<span class="line">Service Account:  kubernetes-dashboard</span>
<span class="line">Node:             minikube/192.168.49.2</span>
<span class="line">Start Time:       Tue, 10 Dec 2024 22:50:22 +0800</span>
<span class="line">Labels:           gcp-auth-skip-secret=true</span>
<span class="line">                  k8s-app=kubernetes-dashboard</span>
<span class="line">                  pod-template-hash=6b9d555977</span>
<span class="line">Annotations:      kubectl.kubernetes.io/restartedAt: 2024-12-10T22:50:22+08:00</span>
<span class="line">Status:           Pending</span>
<span class="line">IP:               10.244.0.5</span>
<span class="line">IPs:</span>
<span class="line">  IP:           10.244.0.5</span>
<span class="line">Controlled By:  ReplicaSet/kubernetes-dashboard-6b9d555977</span>
<span class="line">Containers:</span>
<span class="line">  kubernetes-dashboard:</span>
<span class="line">    Container ID:  </span>
<span class="line">    Image:         docker.io/kubernetesui/dashboard:v2.7.0@sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93</span>
<span class="line">    Image ID:      </span>
<span class="line">    Port:          9090/TCP</span>
<span class="line">    Host Port:     0/TCP</span>
<span class="line">    Args:</span>
<span class="line">      --namespace=kubernetes-dashboard</span>
<span class="line">      --enable-skip-login</span>
<span class="line">      --disable-settings-authorizer</span>
<span class="line">    State:          Waiting</span>
<span class="line">      Reason:       ImagePullBackOff</span>
<span class="line">    Ready:          False</span>
<span class="line">    Restart Count:  0</span>
<span class="line">    Liveness:       http-get http://:9090/ delay=30s timeout=30s period=10s #success=1 #failure=3</span>
<span class="line">    Environment:    &lt;none&gt;</span>
<span class="line">    Mounts:</span>
<span class="line">      /tmp from tmp-volume (rw)</span>
<span class="line">      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-mtg6l (ro)</span>
<span class="line">Conditions:</span>
<span class="line">  Type                        Status</span>
<span class="line">  PodReadyToStartContainers   True </span>
<span class="line">  Initialized                 True </span>
<span class="line">  Ready                       False </span>
<span class="line">  ContainersReady             False </span>
<span class="line">  PodScheduled                True </span>
<span class="line">Volumes:</span>
<span class="line">  tmp-volume:</span>
<span class="line">    Type:       EmptyDir (a temporary directory that shares a pod&#39;s lifetime)</span>
<span class="line">    Medium:     </span>
<span class="line">    SizeLimit:  &lt;unset&gt;</span>
<span class="line">  kube-api-access-mtg6l:</span>
<span class="line">    Type:                    Projected (a volume that contains injected data from multiple sources)</span>
<span class="line">    TokenExpirationSeconds:  3607</span>
<span class="line">    ConfigMapName:           kube-root-ca.crt</span>
<span class="line">    ConfigMapOptional:       &lt;nil&gt;</span>
<span class="line">    DownwardAPI:             true</span>
<span class="line">QoS Class:                   BestEffort</span>
<span class="line">Node-Selectors:              kubernetes.io/os=linux</span>
<span class="line">Tolerations:                 node-role.kubernetes.io/master:NoSchedule</span>
<span class="line">                             node.kubernetes.io/not-ready:NoExecute op=Exists for 300s</span>
<span class="line">                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s</span>
<span class="line">Events:</span>
<span class="line">  Type     Reason     Age                    From               Message</span>
<span class="line">  ----     ------     ----                   ----               -------</span>
<span class="line">  Normal   Scheduled  6m28s                  default-scheduler  Successfully assigned kubernetes-dashboard/kubernetes-dashboard-6b9d555977-rltvk to minikube</span>
<span class="line">  Normal   Pulling    4m2s (x4 over 6m26s)   kubelet            Pulling image &quot;docker.io/kubernetesui/dashboard:v2.7.0@sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93&quot;</span>
<span class="line">  Warning  Failed     3m46s (x4 over 6m11s)  kubelet            Failed to pull image &quot;docker.io/kubernetesui/dashboard:v2.7.0@sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93&quot;: Error response from daemon: Get &quot;https://registry-1.docker.io/v2/&quot;: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)</span>
<span class="line">  Warning  Failed     3m46s (x4 over 6m11s)  kubelet            Error: ErrImagePull</span>
<span class="line">  Warning  Failed     3m36s (x6 over 6m11s)  kubelet            Error: ImagePullBackOff</span>
<span class="line">  Normal   BackOff    78s (x14 over 6m11s)   kubelet            Back-off pulling image &quot;docker.io/kubernetesui/dashboard:v2.7.0@sha256:2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93&quot;</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">//执行之后和上面一样的结果！！！！！</span>
<span class="line">minikube dashboard</span>
<span class="line">  </span>
<span class="line">//经过上面的操作，原来以为可以了，但是还是不行，最后查看了deployment的资源信息，做了如下操作，就可以了，不明白为什么，其实hash值和我手动拉取的hash值是一样的，我想了一下可能是我在执行 minikube image load 的时候，没有加hash的缘故.</span>
<span class="line">  </span>
<span class="line">//编辑deployment文件(这个文件在我第一次执行minikube dashboard的时候就生成了)</span>
<span class="line">kubectl edit deployment kubernetes-dashboard -n kubernetes-dashboard</span>
<span class="line">然后把 image后的 2e500d29e9d5f4a086b908eb8dfe7ecac57d2ab09d65b24f588b1d449841ef93 hash字符串删掉</span>
<span class="line">  </span>
<span class="line">//编辑deployment文件(这个文件在我第一次执行minikube dashboard的时候就生成了)</span>
<span class="line">kubectl edit deployment dashboard-metrics-scraper -n kubernetes-dashboard</span>
<span class="line">然后把 image后的 76049887f07a0476dc93efc2d3569b9529bf982b22d29f356092ce206e98765c hash字符串删掉</span>
<span class="line">  </span>
<span class="line">//重新启动 Kubernetes Dashboard:</span>
<span class="line">$ kubectl rollout restart deployment kubernetes-dashboard -n kubernetes-dashboard</span>
<span class="line">deployment.apps/kubernetes-dashboard restarted</span>
<span class="line">  </span>
<span class="line">//检查 Pod 的状态:</span>
<span class="line">$ kubectl get pods -n kubernetes-dashboard</span>
<span class="line">NAME                                         READY   STATUS    RESTARTS   AGE</span>
<span class="line">dashboard-metrics-scraper-59d59485fd-bw2mw   1/1     Running   0          18s</span>
<span class="line">kubernetes-dashboard-548cb8f845-j8f85        1/1     Running   0          7s</span>
<span class="line">  </span>
<span class="line">//确定所有Pod都进入Running状态后，启动Dashboard:</span>
<span class="line">$ minikube dashboard</span>
<span class="line">🤔  Verifying dashboard health ...</span>
<span class="line">🚀  Launching proxy ...</span>
<span class="line">🤔  Verifying proxy health ...</span>
<span class="line">🎉  Opening http://127.0.0.1:40351/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/ in your default browser...</span>
<span class="line">Opening in existing browser session.</span>
<span class="line">  </span>
<span class="line">终于成功了!!!!!!!!!!!!!!!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(l,[["render",d],["__file","使用minikube配置dashboard.html.vue"]]),v=JSON.parse('{"path":"/content/service/k8s/%E4%BD%BF%E7%94%A8minikube%E9%85%8D%E7%BD%AEdashboard.html","title":"使用minikube配置dashboard","lang":"en-US","frontmatter":{"sidebar":false,"title":"使用minikube配置dashboard","description":"使用minikube配置dashboard"},"headers":[],"git":{},"filePathRelative":"content/service/k8s/使用minikube配置dashboard.md"}');export{p as comp,v as data};
