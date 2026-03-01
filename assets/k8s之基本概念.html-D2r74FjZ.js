import{_ as e,c as n,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function d(r,s){return a(),n("div",null,s[0]||(s[0]=[l(`<ul><li>Cluster、Master、Node、 Namespace 介绍</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.Cluster</span>
<span class="line">Cluster（集群） 是计算、存储和网络资源的集合，Kubernetes 利用这些资源运行各种基于容器的应用。</span>
<span class="line">最简单的 Cluster 可以只有一台主机（它既是 Mater 也是 Node）</span>
<span class="line"> </span>
<span class="line">2.Master</span>
<span class="line">Master 是 Cluster 的大脑，它的主要职责是调度，即决定将应用放在哪里运行。</span>
<span class="line">Master 运行 Linux 操作系统，可以是物理机或者虚拟机。</span>
<span class="line">为了实现高可用，可以运行多个 Master。</span>
<span class="line"> </span>
<span class="line">3.Node</span>
<span class="line">Node 的职责是运行容器应用。</span>
<span class="line">Node 由 Master 管理，Node 负责监控并汇报容器的状态，并根据 Master 的要求管理容器的生命周期。</span>
<span class="line">Node 运行在 Linux 操作系统，可以是物理机或者是虚拟机。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Namespace</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.在Kubernetes中，命名空间提供了一种机制来隔离单个集群中的资源组。资源的名称在一个命名空间内</span>
<span class="line">需要是唯一的，但在不同的命名空间之间不需要。基于命名空间的范围只适用于命名空间的对象（如部署、服务等），</span>
<span class="line">而不适用于集群范围的对象（如StorageClass、Nodes、PersistentVolumes等）</span>
<span class="line"></span>
<span class="line">2.何时使用多个命名空间</span>
<span class="line">命名空间是为了在有许多用户分布在多个团队或项目的环境中使用。对于只有几个到几十个用户的集群，你应该根本不需要创建或考虑命名空间。当你需要命名空间提供的功能时，开始使用命名空间。</span>
<span class="line"></span>
<span class="line">命名空间提供了一个名字的范围。资源的名称在一个命名空间内需要是唯一的，但在不同的命名空间之间不需要。命名空间不能相互嵌套，每个Kubernetes资源只能在一个命名空间中。</span>
<span class="line"></span>
<span class="line">命名空间是在多个用户之间划分集群资源的一种方式（通过资源配额）。</span>
<span class="line"></span>
<span class="line">没有必要使用多个命名空间来分隔略有不同的资源，例如同一软件的不同版本：使用标签来区分同一命名空间内的资源</span>
<span class="line"></span>
<span class="line">3.Kubernetes 默认创建了四个 Namespace:</span>
<span class="line">default: 创建资源时如果不指定，将被放到这个 Namespace 中。</span>
<span class="line"></span>
<span class="line">kube-node-lease: 这个命名空间持有与每个节点相关的租约对象。节点租赁允许kubelet发送心跳，以便控制平面能够检测到节点故障。</span>
<span class="line"></span>
<span class="line">kube-public: 这个命名空间可以被所有的客户（包括那些未经认证的客户）阅读。这个命名空间主要保留给集群使用，因为有些资源应</span>
<span class="line">该在整个集群中公开可见和可读。这个命名空间的公共性只是一个惯例，而不是一个要求。</span>
<span class="line"></span>
<span class="line">kube-system: Kubernetes 自己创建的系统资源将放到这个 Namespace 中。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Controller</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 K8s 中，用户通过声明式 API 定义资源的“预期状态”，Controller 则负责监视资源的实际状态，当资源的</span>
<span class="line">实际状态和“预期状态”不一致时，Controller 则对系统进行必要的更改，以确保两者一致，这个过程被称之为调</span>
<span class="line">谐（Reconcile）。</span>
<span class="line"></span>
<span class="line">K8s 中有多种类型的 Controller，例如 Deployment Controller、ReplicaSet Controller 和 StatefulSet Controller等。</span>
<span class="line">每个控制器都有不同的工作原理和适用场景，但它们的基本原理都是相同的。我们也可以根据需要编写 Controller 来实现自定义的业</span>
<span class="line">务逻辑。</span>
<span class="line"></span>
<span class="line">有时候 Controller 也被叫做 Operator。这两个术语的混用有时让人感到迷惑。Controller 是一个通用的术语，凡是遵循 “Watch K8s </span>
<span class="line">资源并根据资源变化进行调谐” 模式的控制程序都可以叫做 Controller。而 Operator 是一种专用的 Controller，用于在 Kubernetes </span>
<span class="line">中管理一些复杂的，有状态的应用程序。例如在 Kubernetes 中管理 MySQL 数据库的 MySQL Operator。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Service</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">问题: Deployment 可以部署多个副本，每个 Pod 都有自己的 IP。而 Pod 很可能会被频繁地销毁和重启，它们的 IP 会发生变化，用 IP 来访问 Deployment 副本不太现实。</span>
<span class="line">解决: Service 定义了外界访问一组特定 Pod 的方式。Service 有自己的 IP 和端口，Service 为 Pod 提供了负载均衡。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Pod 介绍</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.Pod 是 Kubernetes 的最小工作单元。</span>
<span class="line">2.每个 Pod 包含一个或多个容器。Pod 中的容器会作为一个整体被 Master 调度到一个 Node 上运行。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const c=e(i,[["render",d],["__file","k8s之基本概念.html.vue"]]),p=JSON.parse('{"path":"/content/service/k8s/k8s%E4%B9%8B%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","title":"k8s之基本概念","lang":"en-US","frontmatter":{"sidebar":false,"title":"k8s之基本概念","description":"k8s之基本概念"},"headers":[],"git":{},"filePathRelative":"content/service/k8s/k8s之基本概念.md"}');export{c as comp,p as data};
