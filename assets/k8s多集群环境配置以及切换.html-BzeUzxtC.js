import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>kubectl操作多个k8s集群的方法：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt" data-title="txt"><pre><code><span class="line">需要合并 kubeconfig，如下操作就可以了，后面只用一个 --flatten即可，不要 --merge，否则，后面的会覆盖之前的config，血泪教训，因为腾讯的 serveless 文档就是这么操作的，非常坑</span>
<span class="line">[root@k8smaster tmp]# cp ~/.kube/config ~/.kube/config.bak //一定要先备份之前的config，方便还原</span>
<span class="line">[root@k8smaster tmp]# KUBECONFIG=~/.kube/config:/usr/local/k8s_tencent_kubeconfig/cls-m3mx4sot-config kubectl config view --flatten &gt; /tmp/config</span>
<span class="line">[root@k8smaster tmp]# mv /tmp/config ~/.kube/config</span>
<span class="line">[root@k8smaster tmp]# export KUBECONFIG=~/.kube/config</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看集群下所有config的内容:</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt" data-title="txt"><pre><code><span class="line">[root@k8smaster tmp]# kubectl config view</span>
<span class="line">apiVersion: v1</span>
<span class="line">clusters:</span>
<span class="line">- cluster:</span>
<span class="line">    certificate-authority-data: DATA+OMITTED</span>
<span class="line">    server: https://xx.xx.xx.xx:443/</span>
<span class="line">  name: cls-m3mx4sot</span>
<span class="line">- cluster:</span>
<span class="line">    certificate-authority-data: DATA+OMITTED</span>
<span class="line">    server: https://xx.xx.xx.xx:6443</span>
<span class="line">  name: kubernetes</span>
<span class="line">contexts:</span>
<span class="line">- context:</span>
<span class="line">    cluster: cls-m3mx4sot</span>
<span class="line">    user: &quot;100021763219&quot;</span>
<span class="line">  name: cls-m3mx4sot-100021763219-context-default</span>
<span class="line">- context:</span>
<span class="line">    cluster: kubernetes</span>
<span class="line">    user: kubernetes-admin</span>
<span class="line">  name: kubernetes-admin@kubernetes</span>
<span class="line">current-context: cls-m3mx4sot-100021763219-context-default</span>
<span class="line">kind: Config</span>
<span class="line">preferences: {}</span>
<span class="line">users:</span>
<span class="line">- name: &quot;100021763219&quot;</span>
<span class="line">  user:</span>
<span class="line">    client-certificate-data: REDACTED</span>
<span class="line">    client-key-data: REDACTED</span>
<span class="line">- name: kubernetes-admin</span>
<span class="line">  user:</span>
<span class="line">    client-certificate-data: REDACTED</span>
<span class="line">    client-key-data: REDACTED</span>
<span class="line">[root@k8smaster tmp]#</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取多个集群环境：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt" data-title="txt"><pre><code><span class="line">[root@k8smaster tmp]# kubectl config get-contexts</span>
<span class="line"></span>
<span class="line">[root@k8smaster tmp]# kubectl config current-context</span>
<span class="line">cls-m3mx4sot-100021763219-context-default</span>
<span class="line">[root@k8smaster tmp]#</span>
<span class="line"></span>
<span class="line">切换k8s集群环境:</span>
<span class="line">[root@k8smaster tmp]# kubectl config use-context cls-3jju4zdc-context-default</span>
<span class="line"></span>
<span class="line">测试以下默认名称空间下的node:</span>
<span class="line">[root@k8smaster tmp]# kubectl get node</span>
<span class="line"></span>
<span class="line">实际应用中其实是这么操作的:</span>
<span class="line">kubectl 使用 --kubeconfig 指定 config 文件地址访问不同的集群</span>
<span class="line">比如下面的操作:</span>
<span class="line">[root@k8smaster ~]# kubectl --kubeconfig ~/.kube/config get nodes  // ~/.kube/config 为集群配置文件(config文件路劲可以任意定义，这里只是用了默认的路径)，这里可能是腾讯云上的 A 集群配置，也可以是腾讯云上的 B 集群配置，也可以是其它的</span>
<span class="line">[root@k8smaster ~]# kubectl --kubeconfig ~/.kube/config apply -f service.yaml // 在指定集群下启动服务</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const r=n(l,[["render",c],["__file","k8s多集群环境配置以及切换.html.vue"]]),p=JSON.parse('{"path":"/content/service/k8s/k8s%E5%A4%9A%E9%9B%86%E7%BE%A4%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E4%BB%A5%E5%8F%8A%E5%88%87%E6%8D%A2.html","title":"kubectl操作多个k8s集群的方法","lang":"en-US","frontmatter":{"sidebar":false,"title":"kubectl操作多个k8s集群的方法","description":"kubectl操作多个k8s集群的方法"},"headers":[],"git":{},"filePathRelative":"content/service/k8s/k8s多集群环境配置以及切换.md"}');export{r as comp,p as data};
