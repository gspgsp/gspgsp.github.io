import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h2 id="_1-运行minikube" tabindex="-1"><a class="header-anchor" href="#_1-运行minikube"><span>1.运行minikube</span></a></h2><blockquote><p>$ minikube start</p></blockquote><p>运行结果如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">😄  minikube v1.34.0 on Kylin V10</span>
<span class="line">✨  Using the docker driver based on existing profile</span>
<span class="line">❗  Local proxy ignored: not passing HTTP_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTPS_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTP_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTPS_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">👍  Starting &quot;minikube&quot; primary control-plane node in &quot;minikube&quot; cluster</span>
<span class="line">🚜  Pulling base image v0.0.45 ...</span>
<span class="line">    &gt; index.docker.io/kicbase/sta...:  487.90 MiB / 487.90 MiB  100.00% 558.69 </span>
<span class="line">❗  minikube was unable to download gcr.io/k8s-minikube/kicbase:v0.0.45, but successfully downloaded docker.io/kicbase/stable:v0.0.45 as a fallback image</span>
<span class="line">🤷  docker &quot;minikube&quot; container is missing, will recreate.</span>
<span class="line">🔥  Creating docker container (CPUs=2, Memory=7900MB) ...</span>
<span class="line">❗  Local proxy ignored: not passing HTTP_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTPS_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTP_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTPS_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTP_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTPS_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTP_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">❗  Local proxy ignored: not passing HTTPS_PROXY=http://127.0.0.1:7890/ to docker env.</span>
<span class="line">🌐  Found network options:</span>
<span class="line">    ▪ HTTP_PROXY=http://127.0.0.1:7890/</span>
<span class="line">❗  You appear to be using a proxy, but your NO_PROXY environment does not include the minikube IP (192.168.49.2).</span>
<span class="line">📘  Please see https://minikube.sigs.k8s.io/docs/handbook/vpn_and_proxy/ for more details</span>
<span class="line">    ▪ HTTPS_PROXY=http://127.0.0.1:7890/</span>
<span class="line">    ▪ NO_PROXY=localhost,127.0.0.0/8,::1</span>
<span class="line">    ▪ HTTP_PROXY=http://127.0.0.1:7890/</span>
<span class="line">    ▪ HTTPS_PROXY=http://127.0.0.1:7890/</span>
<span class="line">    ▪ NO_PROXY=localhost,127.0.0.0/8,::1</span>
<span class="line">❗  Failing to connect to https://registry.k8s.io/ from both inside the minikube container and host machine</span>
<span class="line">💡  To pull new external images, you may need to configure a proxy: https://minikube.sigs.k8s.io/docs/reference/networking/proxy/</span>
<span class="line">🐳  Preparing Kubernetes v1.31.0 on Docker 27.2.0 ...</span>
<span class="line">    ▪ env NO_PROXY=localhost,127.0.0.0/8,::1</span>
<span class="line">    ▪ Generating certificates and keys ...</span>
<span class="line">    ▪ Booting up control plane ...</span>
<span class="line">    ▪ Configuring RBAC rules ...</span>
<span class="line">🔗  Configuring bridge CNI (Container Networking Interface) ...</span>
<span class="line">🔎  Verifying Kubernetes components...</span>
<span class="line">    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5</span>
<span class="line">🌟  Enabled addons: storage-provisioner, default-storageclass</span>
<span class="line">💡  kubectl not found. If you need it, try: &#39;minikube kubectl -- get pods -A&#39;</span>
<span class="line">🏄  Done! kubectl is now configured to use &quot;minikube&quot; cluster and &quot;default&quot; namespace by default</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在的问题是:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Failing to connect to https://registry.k8s.io/ from both inside the minikube container and host machine</span>
<span class="line">这个问题基本上无解，只能通过手动pull 然后 load的方式解决.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-go项目发布" tabindex="-1"><a class="header-anchor" href="#_2-go项目发布"><span>2.go项目发布</span></a></h2><h3 id="_2-1-进入项目" tabindex="-1"><a class="header-anchor" href="#_2-1-进入项目"><span>2.1 进入项目</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ cd go-gateway-demo</span>
<span class="line">$ docker build -t go-gateway-demo:0.1 .</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-加载本地镜像到minikube容器" tabindex="-1"><a class="header-anchor" href="#_2-2-加载本地镜像到minikube容器"><span>2.2 加载本地镜像到minikube容器</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ minikube image load go-gateway-demo:0.1</span>
<span class="line"></span>
<span class="line">//查看是否加载成功</span>
<span class="line">$ minikube image ls | grep go-gateway-demo</span>
<span class="line">docker.io/library/go-gateway-demo:0.1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-部署deployment-service" tabindex="-1"><a class="header-anchor" href="#_2-3-部署deployment-service"><span>2.3 部署Deployment + Service</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">kubectl apply -f deploy/deployment.yaml</span>
<span class="line">kubectl apply -f deploy/service.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-部署gateway" tabindex="-1"><a class="header-anchor" href="#_2-4-部署gateway"><span>2.4 部署gateway</span></a></h3><h4 id="_2-4-1-这个需要-gateway-api-crd-和-gateway-istio-控制平面" tabindex="-1"><a class="header-anchor" href="#_2-4-1-这个需要-gateway-api-crd-和-gateway-istio-控制平面"><span>2.4.1 这个需要 Gateway API CRD 和 Gateway Istio 控制平面</span></a></h4><p>安装CRD</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">kubectl apply -k github.com/kubernetes-sigs/gateway-api/config/crd?ref=v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装Istio</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl -L https://istio.io/downloadIstio | sh -</span>
<span class="line">cd istio-*</span>
<span class="line">./bin/istioctl install --set profile=demo -y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可能会有如下错误:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ./bin/istioctl install --set profile=demo -y</span>
<span class="line">        |\\          </span>
<span class="line">        | \\         </span>
<span class="line">        |  \\        </span>
<span class="line">        |   \\       </span>
<span class="line">      /||    \\      </span>
<span class="line">     / ||     \\     </span>
<span class="line">    /  ||      \\    </span>
<span class="line">   /   ||       \\   </span>
<span class="line">  /    ||        \\  </span>
<span class="line"> /     ||         \\ </span>
<span class="line">/______||__________\\</span>
<span class="line">____________________</span>
<span class="line">  \\__       _____/  </span>
<span class="line">     \\_____/        </span>
<span class="line"></span>
<span class="line">✔ Istio core installed ⛵️                                                                                                                                                                                          </span>
<span class="line">✘ Istiod encountered an error: failed to wait for resource: resources not ready after 5m0s: context deadline exceeded                                                                                              </span>
<span class="line">  Deployment/istio-system/istiod (container failed to start: ImagePullBackOff: Back-off pulling image &quot;docker.io/istio/pilot:1.28.2&quot;)</span>
<span class="line">✘ Egress gateways encountered an error: failed to wait for resource: resources not ready after 5m0s: context deadline exceededent/istio-system/istio-ingressgateway                                                </span>
<span class="line">  Deployment/istio-system/istio-egressgateway (container failed to start: ContainerCreating: )</span>
<span class="line">✘ Ingress gateways encountered an error: failed to wait for resource: resources not ready after 5m0s: context deadline exceeded</span>
<span class="line">  Deployment/istio-system/istio-ingressgateway (container failed to start: ContainerCreating: )</span>
<span class="line">Error: failed to install manifests: 3 errors occurred:</span>
<span class="line">  * failed to wait for resource: resources not ready after 5m0s: context deadline exceeded</span>
<span class="line">  Deployment/istio-system/istiod (container failed to start: ImagePullBackOff: Back-off pulling image &quot;docker.io/istio/pilot:1.28.2&quot;)</span>
<span class="line">  * failed to wait for resource: resources not ready after 5m0s: context deadline exceeded</span>
<span class="line">  Deployment/istio-system/istio-egressgateway (container failed to start: ContainerCreating: )</span>
<span class="line">  * failed to wait for resource: resources not ready after 5m0s: context deadline exceeded</span>
<span class="line">  Deployment/istio-system/istio-ingressgateway (container failed to start: ContainerCreating: )</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是老问题，minikube 里的docker无法pull image, 只能手动操作</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 列出 Istio 1.28.2 需要的所有镜像</span>
<span class="line">docker pull docker.io/istio/pilot:1.28.2</span>
<span class="line">docker pull docker.io/istio/proxyv2:1.28.2</span>
<span class="line">docker pull docker.io/istio/install-cni:1.28.2</span>
<span class="line"></span>
<span class="line">minikube image load docker.io/istio/pilot:1.28.2</span>
<span class="line">minikube image load docker.io/istio/proxyv2:1.28.2</span>
<span class="line">minikube image load docker.io/istio/install-cni:1.28.2</span>
<span class="line"></span>
<span class="line">minikube image ls | grep istio</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次执行:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ./bin/istioctl install --set profile=demo -y</span>
<span class="line">|\\          </span>
<span class="line">| \\         </span>
<span class="line">|  \\        </span>
<span class="line">|   \\       </span>
<span class="line">/||    \\      </span>
<span class="line">/ ||     \\     </span>
<span class="line">/  ||      \\    </span>
<span class="line">/   ||       \\   </span>
<span class="line">/    ||        \\  </span>
<span class="line">/     ||         \\</span>
<span class="line">/______||__________\\</span>
<span class="line">____________________</span>
<span class="line">\\__       _____/  </span>
<span class="line">\\_____/</span>
<span class="line"></span>
<span class="line">✔ Istio core installed ⛵️                                                                                                                                                                                          </span>
<span class="line">✔ Istiod installed 🧠                                                                                                                                                                                              </span>
<span class="line">✔ Egress gateways installed 🛫                                                                                                                                                                                     </span>
<span class="line">✔ Ingress gateways installed 🛬                                                                                                                                                                                    </span>
<span class="line">✔ Installation complete  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单验证:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ kubectl get pods -n istio-system</span>
<span class="line">NAME                                   READY   STATUS    RESTARTS   AGE</span>
<span class="line">istio-egressgateway-75496bf7d-lhbrj    1/1     Running   0          23m</span>
<span class="line">istio-ingressgateway-79b788656-hqqwc   1/1     Running   0          23m</span>
<span class="line">istiod-696d4c8c9f-8nfnj                1/1     Running   0          28m</span>
<span class="line"></span>
<span class="line">$ kubectl get gatewayclass</span>
<span class="line">NAME           CONTROLLER                    ACCEPTED   AGE</span>
<span class="line">istio          istio.io/gateway-controller   True       4m44s</span>
<span class="line">istio-remote   istio.io/unmanaged-gateway    True       4m44s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>继续执行:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ kubectl apply -f deploy/gateway.yaml</span>
<span class="line">gatewayclass.gateway.networking.k8s.io/demo-gateway-class unchanged</span>
<span class="line">gateway.gateway.networking.k8s.io/demo-gateway configured</span>
<span class="line">httproute.gateway.networking.k8s.io/go-demo-route created</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok，非常完美的解决问题！</p><p>配置hosts文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ minikube ip</span>
<span class="line">192.168.49.2</span>
<span class="line"></span>
<span class="line">192.168.49.2 demo.local</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问:</p><blockquote><p>curl http://demo.local/ 没有任何输出，应该是上面的资源有问题</p></blockquote><p>分析：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ kubectl describe gateway demo-gateway</span>
<span class="line">Name:         demo-gateway</span>
<span class="line">Namespace:    default</span>
<span class="line">Labels:       &lt;none&gt;</span>
<span class="line">Annotations:  &lt;none&gt;</span>
<span class="line">API Version:  gateway.networking.k8s.io/v1</span>
<span class="line">Kind:         Gateway</span>
<span class="line">Metadata:</span>
<span class="line">Creation Timestamp:  2026-01-12T04:13:00Z</span>
<span class="line">Generation:          1</span>
<span class="line">Resource Version:    22475</span>
<span class="line">UID:                 6fca25f4-f94c-4cd0-8868-0cc07756edd2</span>
<span class="line">Spec:</span>
<span class="line">Gateway Class Name:  demo-gateway-class</span>
<span class="line">Listeners:</span>
<span class="line">Allowed Routes:</span>
<span class="line">Namespaces:</span>
<span class="line">From:  Same</span>
<span class="line">Name:      http</span>
<span class="line">Port:      80</span>
<span class="line">Protocol:  HTTP</span>
<span class="line">Status:</span>
<span class="line">Conditions:</span>
<span class="line">Last Transition Time:  2026-01-12T04:13:00Z</span>
<span class="line">Message:               Resource accepted</span>
<span class="line">Observed Generation:   1</span>
<span class="line">Reason:                Accepted</span>
<span class="line">Status:                True</span>
<span class="line">Type:                  Accepted</span>
<span class="line">Last Transition Time:  2026-01-12T04:13:00Z</span>
<span class="line">Message:               Assigned to service(s) demo-gateway-demo-gateway-class.default.svc.cluster.local:80, but failed to assign to all requested addresses: address pending for hostname &quot;demo-gateway-demo-gateway-class.default.svc.cluster.local&quot;</span>
<span class="line">Observed Generation:   1</span>
<span class="line">Reason:                AddressNotAssigned</span>
<span class="line">Status:                False</span>
<span class="line">Type:                  Programmed</span>
<span class="line">Listeners:</span>
<span class="line">Attached Routes:  1</span>
<span class="line">Conditions:</span>
<span class="line">Last Transition Time:  2026-01-12T04:13:00Z</span>
<span class="line">Message:               No errors found</span>
<span class="line">Observed Generation:   1</span>
<span class="line">Reason:                Accepted</span>
<span class="line">Status:                True</span>
<span class="line">Type:                  Accepted</span>
<span class="line">Last Transition Time:  2026-01-12T04:13:00Z</span>
<span class="line">Message:               No errors found</span>
<span class="line">Observed Generation:   1</span>
<span class="line">Reason:                NoConflicts</span>
<span class="line">Status:                False</span>
<span class="line">Type:                  Conflicted</span>
<span class="line">Last Transition Time:  2026-01-12T04:13:00Z</span>
<span class="line">Message:               No errors found</span>
<span class="line">Observed Generation:   1</span>
<span class="line">Reason:                Programmed</span>
<span class="line">Status:                True</span>
<span class="line">Type:                  Programmed</span>
<span class="line">Last Transition Time:  2026-01-12T04:13:00Z</span>
<span class="line">Message:               No errors found</span>
<span class="line">Observed Generation:   1</span>
<span class="line">Reason:                ResolvedRefs</span>
<span class="line">Status:                True</span>
<span class="line">Type:                  ResolvedRefs</span>
<span class="line">Name:                    http</span>
<span class="line">Supported Kinds:</span>
<span class="line">Group:  gateway.networking.k8s.io</span>
<span class="line">Kind:   HTTPRoute</span>
<span class="line">Group:  gateway.networking.k8s.io</span>
<span class="line">Kind:   GRPCRoute</span>
<span class="line">Events:       &lt;none&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的Message分析可以知道, LoadBalancer 的 EXTERNAL-IP 一直是 <code>&lt;pending&gt;</code>，在 Minikube 环境中 LoadBalancer 无法获得外部 IP。</p><p>执行:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ minikube tunnel</span>
<span class="line">Status:</span>
<span class="line">machine: minikube</span>
<span class="line">pid: 65675</span>
<span class="line">route: 10.96.0.0/12 -&gt; 192.168.49.2</span>
<span class="line">minikube: Running</span>
<span class="line">services: [demo-gateway-demo-gateway-class, istio-ingressgateway]</span>
<span class="line">errors:</span>
<span class="line">minikube: no errors</span>
<span class="line">router: no errors</span>
<span class="line">loadbalancer emulator: no errors</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令会让 Minikube 的 LoadBalancer 服务获得 IP 地址。运行后可以看到输出，然后保持这个终端开放。</p><p>然后检查 Service 的 EXTERNAL-IP：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ kubectl get svc demo-gateway-demo-gateway-class</span>
<span class="line">NAME                              TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)                        AGE</span>
<span class="line">demo-gateway-demo-gateway-class   LoadBalancer   10.96.233.91   10.96.233.91   15021:30819/TCP,80:30195/TCP   92m</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真的有效，EXTERNAL-IP 有数据了, 不再是pending</p><hr><p>直接测试go-demo是否工作:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ kubectl port-forward svc/go-demo 8080:80</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后在另一个终端:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ curl http://localhost:8080</span>
<span class="line"></span>
<span class="line">说明go-demo服务是可以正常工作的</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试Host:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ curl http://10.96.233.91 -H &quot;Host: demo.local&quot; -v</span>
<span class="line">* Uses proxy env variable no_proxy == &#39;localhost,127.0.0.0/8,::1&#39;</span>
<span class="line">* Uses proxy env variable http_proxy == &#39;http://127.0.0.1:7890/&#39;</span>
<span class="line">*   Trying 127.0.0.1:7890...</span>
<span class="line">* Connected to (nil) (127.0.0.1) port 7890 (#0)</span>
<span class="line">&gt; GET http://10.96.233.91/ HTTP/1.1</span>
<span class="line">&gt; Host: demo.local</span>
<span class="line">&gt; User-Agent: curl/7.81.0</span>
<span class="line">&gt; Accept: */*</span>
<span class="line">&gt; Proxy-Connection: Keep-Alive</span>
<span class="line">&gt;</span>
<span class="line">* Mark bundle as not supporting multiuse</span>
<span class="line">  &lt; HTTP/1.1 502 Bad Gateway</span>
<span class="line">  &lt; Connection: keep-alive</span>
<span class="line">  &lt; Keep-Alive: timeout=4</span>
<span class="line">  &lt; Proxy-Connection: keep-alive</span>
<span class="line">  &lt; Content-Length: 0</span>
<span class="line">  &lt;</span>
<span class="line">* Connection #0 to host (nil) left intact</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于10.96.233.91走了代理，所以报错</p><p>直接在当前终端:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ unset http_proxy</span>
<span class="line">unset https_proxy</span>
<span class="line">unset HTTP_PROXY</span>
<span class="line">unset HTTPS_PROXY</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ curl http://10.96.233.91 -H &quot;Host: demo.local&quot; -v</span>
<span class="line">* Uses proxy env variable no_proxy == &#39;localhost,127.0.0.0/8,::1&#39;</span>
<span class="line">*   Trying 10.96.233.91:80...</span>
<span class="line">* Connected to 10.96.233.91 (10.96.233.91) port 80 (#0)</span>
<span class="line">&gt; GET / HTTP/1.1</span>
<span class="line">&gt; Host: demo.local</span>
<span class="line">&gt; User-Agent: curl/7.81.0</span>
<span class="line">&gt; Accept: */*</span>
<span class="line">&gt;</span>
<span class="line">* Mark bundle as not supporting multiuse</span>
<span class="line">  &lt; HTTP/1.1 200 OK</span>
<span class="line">  &lt; date: Mon, 12 Jan 2026 05:52:48 GMT</span>
<span class="line">  &lt; content-length: 34</span>
<span class="line">  &lt; content-type: text/plain; charset=utf-8</span>
<span class="line">  &lt; x-envoy-upstream-service-time: 0</span>
<span class="line">  &lt; server: istio-envoy</span>
<span class="line">  &lt;</span>
<span class="line">* Connection #0 to host 10.96.233.91 left intact</span>
<span class="line">  hello from go on k8s + gateway api</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现可以正常访问</p><p>继续用之前配置</p><blockquote><p>curl http://demo.local访问, 发现还是访问不了</p></blockquote><p>原因如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">demo.local → 192.168.49.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Gateway 实际监听的是</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">demo-gateway-demo-gateway-class (Service: LoadBalancer)</span>
<span class="line">CLUSTER-IP: 10.96.233.91</span>
<span class="line">PORT: 80</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl http://demo.local</span>
<span class="line">   ↓</span>
<span class="line">192.168.49.2:80   ❌ 没有 Gateway 在这里监听</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以得到的结果只能是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Connection refused</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>192.168.49.2 是谁？ 这是 <strong>minikube VM 的 Node IP</strong>，不是 Gateway。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">minikube ip</span>
<span class="line"># 输出：192.168.49.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>但注意一个关键点👇</p><blockquote><p><strong>现在的 Gateway 并不是 NodePort</strong></p><p>它是 <code>Service type: LoadBalancer</code></p></blockquote><p>所以：</p><table><thead><tr><th>IP</th><th>角色</th><th>是否监听 80</th></tr></thead><tbody><tr><td><code>192.168.49.2</code></td><td>minikube 节点</td><td>❌</td></tr><tr><td><code>10.96.233.91</code></td><td>LB 虚拟 IP</td><td>✅（通过 tunnel）</td></tr></tbody></table><p>现在的路由:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">本机</span>
<span class="line">  └── 路由表</span>
<span class="line">       └── 10.96.0.0/12 → 192.168.49.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以解决办法, 在本机的 /etc/hosts下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">10.96.233.91 demo.local</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再次访问: http://demo.local 发现访问成功</p><p>注意：</p><blockquote><p>Clash工具配置no_proxy，根本上解决代理问题: localhost, 127.0.0.0/8, ::1, demo.local, 10.96.0.0/12</p></blockquote>`,80)]))}const r=n(l,[["render",d],["__file","part3.html.vue"]]),p=JSON.parse('{"path":"/project/k8s/part3.html","title":"","lang":"en-US","frontmatter":{"sidebarDepth":0},"headers":[{"level":2,"title":"1.运行minikube","slug":"_1-运行minikube","link":"#_1-运行minikube","children":[]},{"level":2,"title":"2.go项目发布","slug":"_2-go项目发布","link":"#_2-go项目发布","children":[{"level":3,"title":"2.1 进入项目","slug":"_2-1-进入项目","link":"#_2-1-进入项目","children":[]},{"level":3,"title":"2.2 加载本地镜像到minikube容器","slug":"_2-2-加载本地镜像到minikube容器","link":"#_2-2-加载本地镜像到minikube容器","children":[]},{"level":3,"title":"2.3 部署Deployment + Service","slug":"_2-3-部署deployment-service","link":"#_2-3-部署deployment-service","children":[]},{"level":3,"title":"2.4 部署gateway","slug":"_2-4-部署gateway","link":"#_2-4-部署gateway","children":[]}]}],"git":{},"filePathRelative":"project/k8s/part3.md"}');export{r as comp,p as data};
