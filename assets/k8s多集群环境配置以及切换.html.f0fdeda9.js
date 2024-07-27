import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},t=s(`<p>kubectl\u64CD\u4F5C\u591A\u4E2Ak8s\u96C6\u7FA4\u7684\u65B9\u6CD5\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>\u9700\u8981\u5408\u5E76 kubeconfig\uFF0C\u5982\u4E0B\u64CD\u4F5C\u5C31\u53EF\u4EE5\u4E86\uFF0C\u540E\u9762\u53EA\u7528\u4E00\u4E2A --flatten\u5373\u53EF\uFF0C\u4E0D\u8981 --merge\uFF0C\u5426\u5219\uFF0C\u540E\u9762\u7684\u4F1A\u8986\u76D6\u4E4B\u524D\u7684config\uFF0C\u8840\u6CEA\u6559\u8BAD\uFF0C\u56E0\u4E3A\u817E\u8BAF\u7684 serveless \u6587\u6863\u5C31\u662F\u8FD9\u4E48\u64CD\u4F5C\u7684\uFF0C\u975E\u5E38\u5751
[root@k8smaster tmp]# cp ~/.kube/config ~/.kube/config.bak //\u4E00\u5B9A\u8981\u5148\u5907\u4EFD\u4E4B\u524D\u7684config\uFF0C\u65B9\u4FBF\u8FD8\u539F
[root@k8smaster tmp]# KUBECONFIG=~/.kube/config:/usr/local/k8s_tencent_kubeconfig/cls-m3mx4sot-config kubectl config view --flatten &gt; /tmp/config
[root@k8smaster tmp]# mv /tmp/config ~/.kube/config
[root@k8smaster tmp]# export KUBECONFIG=~/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u96C6\u7FA4\u4E0B\u6240\u6709config\u7684\u5185\u5BB9:</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>[root@k8smaster tmp]# kubectl config view
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: DATA+OMITTED
    server: https://xx.xx.xx.xx:443/
  name: cls-m3mx4sot
- cluster:
    certificate-authority-data: DATA+OMITTED
    server: https://xx.xx.xx.xx:6443
  name: kubernetes
contexts:
- context:
    cluster: cls-m3mx4sot
    user: &quot;100021763219&quot;
  name: cls-m3mx4sot-100021763219-context-default
- context:
    cluster: kubernetes
    user: kubernetes-admin
  name: kubernetes-admin@kubernetes
current-context: cls-m3mx4sot-100021763219-context-default
kind: Config
preferences: {}
users:
- name: &quot;100021763219&quot;
  user:
    client-certificate-data: REDACTED
    client-key-data: REDACTED
- name: kubernetes-admin
  user:
    client-certificate-data: REDACTED
    client-key-data: REDACTED
[root@k8smaster tmp]#

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u83B7\u53D6\u591A\u4E2A\u96C6\u7FA4\u73AF\u5883\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>[root@k8smaster tmp]# kubectl config get-contexts

[root@k8smaster tmp]# kubectl config current-context
cls-m3mx4sot-100021763219-context-default
[root@k8smaster tmp]#

\u5207\u6362k8s\u96C6\u7FA4\u73AF\u5883:
[root@k8smaster tmp]# kubectl config use-context cls-3jju4zdc-context-default

\u6D4B\u8BD5\u4EE5\u4E0B\u9ED8\u8BA4\u540D\u79F0\u7A7A\u95F4\u4E0B\u7684node:
[root@k8smaster tmp]# kubectl get node

\u5B9E\u9645\u5E94\u7528\u4E2D\u5176\u5B9E\u662F\u8FD9\u4E48\u64CD\u4F5C\u7684:
kubectl \u4F7F\u7528 --kubeconfig \u6307\u5B9A config \u6587\u4EF6\u5730\u5740\u8BBF\u95EE\u4E0D\u540C\u7684\u96C6\u7FA4
\u6BD4\u5982\u4E0B\u9762\u7684\u64CD\u4F5C:
[root@k8smaster ~]# kubectl --kubeconfig ~/.kube/config get nodes  // ~/.kube/config \u4E3A\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6(config\u6587\u4EF6\u8DEF\u52B2\u53EF\u4EE5\u4EFB\u610F\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u53EA\u662F\u7528\u4E86\u9ED8\u8BA4\u7684\u8DEF\u5F84)\uFF0C\u8FD9\u91CC\u53EF\u80FD\u662F\u817E\u8BAF\u4E91\u4E0A\u7684 A \u96C6\u7FA4\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u662F\u817E\u8BAF\u4E91\u4E0A\u7684 B \u96C6\u7FA4\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u5B83\u7684
[root@k8smaster ~]# kubectl --kubeconfig ~/.kube/config apply -f service.yaml // \u5728\u6307\u5B9A\u96C6\u7FA4\u4E0B\u542F\u52A8\u670D\u52A1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[t];function d(r,a){return n(),i("div",null,c)}var u=e(l,[["render",d],["__file","k8s\u591A\u96C6\u7FA4\u73AF\u5883\u914D\u7F6E\u4EE5\u53CA\u5207\u6362.html.vue"]]);export{u as default};
