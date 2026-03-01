import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function c(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>使用docker搭建gitlab-runner及使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;拉取镜像</span>
<span class="line">guoshipeng@tianyi510s:~$ docker pull docker.1ms.run/gitlab/gitlab-runner:latest</span>
<span class="line">latest: Pulling from gitlab/gitlab-runner</span>
<span class="line">86e5016c2693: Pull complete </span>
<span class="line">5194af8da5c7: Pull complete </span>
<span class="line">fdb3ce38ee35: Pull complete </span>
<span class="line">7225e83a9762: Pull complete </span>
<span class="line">Digest: sha256:5e6a430ca17726c0fa67d4bde6faeb32e1eeb7f3a53284b2fb2952ccf2f12f35</span>
<span class="line">Status: Downloaded newer image for docker.1ms.run/gitlab/gitlab-runner:latest</span>
<span class="line">docker.1ms.run/gitlab/gitlab-runner:latest</span>
<span class="line">guoshipeng@tianyi510s:~$ docker image tag docker.1ms.run/gitlab/gitlab-runner:latest gitlab/gitlab-runner:latest</span>
<span class="line">guoshipeng@tianyi510s:~$ docker rmi docker.1ms.run/gitlab/gitlab-runner:latest</span>
<span class="line"></span>
<span class="line">2&gt;安装命令</span>
<span class="line">docker run -d --name gitlab-runner --restart always \\</span>
<span class="line">  -v /srv/gitlab-runner/config:/etc/gitlab-runner \\</span>
<span class="line">  -v /var/run/docker.sock:/var/run/docker.sock \\</span>
<span class="line">  gitlab/gitlab-runner:latest</span>
<span class="line"></span>
<span class="line">3&gt;查看运行状态</span>
<span class="line">docker ps | grep gitlab-runner</span>
<span class="line"></span>
<span class="line">4&gt;注册runner(和gitlab关联), 官方镜像一直提示放弃使用registration-token，而使用AUTHENTICATION_TOKEN，但是一直没有找到AUTHENTICATION_TOKEN在呢里配置的</span>
<span class="line">  docker exec -it gitlab-runner gitlab-runner register \\</span>
<span class="line">  --url &quot;YOUR_GITLAB_SERVER&quot; \\</span>
<span class="line">  --token &quot;YOUR_AUTHENTICATION_TOKEN&quot; \\</span>
<span class="line">  --executor &quot;docker&quot; \\</span>
<span class="line">  --docker-image &quot;alpine:latest&quot;</span>
<span class="line"></span>
<span class="line">--url：你的 GitLab 地址（改成你自己的）</span>
<span class="line">--token：在 GitLab 界面复制的 Authentication Token</span>
<span class="line">--executor：GitLab Runner 的执行模式（如 docker、shell）</span>
<span class="line">--docker-image：指定使用的 Docker 镜像（这里用 alpine:latest，你可以换成 ubuntu:latest 或其他）</span>
<span class="line"></span>
<span class="line">关于token:</span>
<span class="line">https://docs.gitlab.com/ee/security/tokens/index.html#runner-authentication-tokens-also-called-runner-tokens  </span>
<span class="line"></span>
<span class="line">只能尝试还是使用registration-token：</span>
<span class="line">guoshipeng@tianyi510s:~$ docker exec -it gitlab-runner gitlab-runner register \\</span>
<span class="line">  --url &quot;http://gitlab.example.com:9080/&quot; \\</span>
<span class="line">  --registration-token a_RVyNwT6bNN9DvH2bvm \\</span>
<span class="line">  --executor &quot;docker&quot; \\</span>
<span class="line">  --docker-image &quot;alpine:latest&quot;</span>
<span class="line">Runtime platform                                    arch=amd64 os=linux pid=24 revision=690ce25c version=17.8.3</span>
<span class="line">Running in system-mode.                            </span>
<span class="line">                                                   </span>
<span class="line">Enter the GitLab instance URL (for example, https://gitlab.com/):</span>
<span class="line">[http://gitlab.example.com:9080/]: </span>
<span class="line">Enter the registration token:</span>
<span class="line">[a_RVyNwT6bNN9DvH2bvm]: </span>
<span class="line">Enter a description for the runner:</span>
<span class="line">[8446a748968a]: a runner for local gitlab</span>
<span class="line">Enter tags for the runner (comma-separated):</span>
<span class="line">tag1</span>
<span class="line">Enter optional maintenance note for the runner:</span>
<span class="line"></span>
<span class="line">WARNING: Support for registration tokens and runner parameters in the &#39;register&#39; command has been deprecated in GitLab Runner 15.6 and will be replaced with support for authentication tokens. For more information, see https://docs.gitlab.com/ee/ci/runners/new_creation_workflow </span>
<span class="line">ERROR: Registering runner... failed                 runner=a_RVyNwT status=couldn&#39;t execute POST against http://gitlab.example.com:9080/api/v4/runners: Post &quot;http://gitlab.example.com:9080/api/v4/runners&quot;: dial tcp: lookup gitlab.example.com on 192.168.5.1:53: no such host</span>
<span class="line">PANIC: Failed to register the runner.  </span>
<span class="line">         </span>
<span class="line">这里尝试把url改为gitlab的容器地址:</span>
<span class="line">$ docker inspect -f &#39;{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39; gitlab</span>
<span class="line">172.17.0.4</span>
<span class="line"></span>
<span class="line">$ docker exec -it gitlab-runner gitlab-runner register \\</span>
<span class="line">  --url &quot;http://172.20.0.4:9080/&quot; \\</span>
<span class="line">  --registration-token a_RVyNwT6bNN9DvH2bvm \\</span>
<span class="line">  --executor &quot;docker&quot; \\</span>
<span class="line">  --docker-image &quot;alpine:latest&quot;</span>
<span class="line"></span>
<span class="line">还是有问题，查看docker网络</span>
<span class="line">$ docker network ls</span>
<span class="line">NETWORK ID     NAME                                      DRIVER    SCOPE</span>
<span class="line">fb9d0551c552   bridge                                    bridge    local</span>
<span class="line">5319aeb64a2e   host                                      host      local</span>
<span class="line">7cbb16a986d6   laravel-dev-v2-external                   bridge    local</span>
<span class="line">fab0b27bf071   laravel-dev-v2_network-laravel-internal   bridge    local</span>
<span class="line">e6742f9d2eb1   meta-dev-v2_network-meta-internal         bridge    local</span>
<span class="line">331156baf737   minikube                                  bridge    local</span>
<span class="line">62128f5c9c7c   none                                      null      local</span>
<span class="line"></span>
<span class="line">分别查看gitlab和gitlab-runner的网络，发现都是bridge,但是就是不能互相通信</span>
<span class="line">$ docker inspect gitlab | grep -A 5 &quot;Networks&quot;</span>
<span class="line">            &quot;Networks&quot;: {</span>
<span class="line">                &quot;bridge&quot;: {</span>
<span class="line">                    &quot;IPAMConfig&quot;: null,</span>
<span class="line">                    &quot;Links&quot;: null,</span>
<span class="line">                    &quot;Aliases&quot;: [</span>
<span class="line">                        &quot;8a4f7a01b396&quot;,</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ docker inspect gitlab-runner | grep -A 5 &quot;Networks&quot;</span>
<span class="line">            &quot;Networks&quot;: {</span>
<span class="line">                &quot;bridge&quot;: {</span>
<span class="line">                    &quot;IPAMConfig&quot;: null,</span>
<span class="line">                    &quot;Links&quot;: null,</span>
<span class="line">                    &quot;Aliases&quot;: [</span>
<span class="line">                        &quot;8446a748968a&quot;</span>
<span class="line"></span>
<span class="line">$ docker network inspect bridge</span>
<span class="line">[</span>
<span class="line">    {</span>
<span class="line">        &quot;Name&quot;: &quot;bridge&quot;,</span>
<span class="line">        &quot;Id&quot;: &quot;fb9d0551c552356cfa4995b2ef3b08ab9ed0a047ccb3718bc5cc86c741e827b7&quot;,</span>
<span class="line">        &quot;Created&quot;: &quot;2025-02-09T21:16:38.148797896+08:00&quot;,</span>
<span class="line">        &quot;Scope&quot;: &quot;local&quot;,</span>
<span class="line">        &quot;Driver&quot;: &quot;bridge&quot;,</span>
<span class="line">        &quot;EnableIPv6&quot;: false,</span>
<span class="line">        &quot;IPAM&quot;: {</span>
<span class="line">            &quot;Driver&quot;: &quot;default&quot;,</span>
<span class="line">            &quot;Options&quot;: null,</span>
<span class="line">            &quot;Config&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;Subnet&quot;: &quot;172.17.0.0/16&quot;,</span>
<span class="line">                    &quot;Gateway&quot;: &quot;172.17.0.1&quot;</span>
<span class="line">                }</span>
<span class="line">            ]</span>
<span class="line">        },</span>
<span class="line">        &quot;Internal&quot;: false,</span>
<span class="line">        &quot;Attachable&quot;: false,</span>
<span class="line">        &quot;Ingress&quot;: false,</span>
<span class="line">        &quot;ConfigFrom&quot;: {</span>
<span class="line">            &quot;Network&quot;: &quot;&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;ConfigOnly&quot;: false,</span>
<span class="line">        &quot;Containers&quot;: {</span>
<span class="line">            &quot;710c1256ac29156deb5c550f20ab450bce5ac64eb15524ea8f7d08964b058ada&quot;: {</span>
<span class="line">                &quot;Name&quot;: &quot;alist&quot;,</span>
<span class="line">                &quot;EndpointID&quot;: &quot;9761e9b19ef6ba76934e4c31f02b2baca1e2bd006fba5d22a4b923337e028897&quot;,</span>
<span class="line">                &quot;MacAddress&quot;: &quot;02:42:ac:11:00:02&quot;,</span>
<span class="line">                &quot;IPv4Address&quot;: &quot;172.17.0.2/16&quot;,</span>
<span class="line">                &quot;IPv6Address&quot;: &quot;&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;8446a748968a0deecb2fc212192716c4c6e184ef480fac02c421b09de9a2c79d&quot;: {</span>
<span class="line">                &quot;Name&quot;: &quot;gitlab-runner&quot;,</span>
<span class="line">                &quot;EndpointID&quot;: &quot;bf49157aeddc10d1527b18f02fb0456a55202fa0a217d3b6b22cd83f3f1af1a6&quot;,</span>
<span class="line">                &quot;MacAddress&quot;: &quot;02:42:ac:11:00:04&quot;,</span>
<span class="line">                &quot;IPv4Address&quot;: &quot;172.17.0.3/16&quot;,</span>
<span class="line">                &quot;IPv6Address&quot;: &quot;&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;8a4f7a01b396f322bafa16d67702eda8b71094bc814aa961b4544ba64a90b105&quot;: {</span>
<span class="line">                &quot;Name&quot;: &quot;gitlab&quot;,</span>
<span class="line">                &quot;EndpointID&quot;: &quot;e193a83211c18a7e2ee65b2b55f889f9266a2b3bbdea969ea6344c78984f5ad6&quot;,</span>
<span class="line">                &quot;MacAddress&quot;: &quot;02:42:ac:11:00:03&quot;,</span>
<span class="line">                &quot;IPv4Address&quot;: &quot;172.17.0.4/16&quot;,</span>
<span class="line">                &quot;IPv6Address&quot;: &quot;&quot;</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        &quot;Options&quot;: {</span>
<span class="line">            &quot;com.docker.network.bridge.default_bridge&quot;: &quot;true&quot;,</span>
<span class="line">            &quot;com.docker.network.bridge.enable_icc&quot;: &quot;true&quot;,</span>
<span class="line">            &quot;com.docker.network.bridge.enable_ip_masquerade&quot;: &quot;true&quot;,</span>
<span class="line">            &quot;com.docker.network.bridge.host_binding_ipv4&quot;: &quot;0.0.0.0&quot;,</span>
<span class="line">            &quot;com.docker.network.bridge.name&quot;: &quot;docker0&quot;,</span>
<span class="line">            &quot;com.docker.network.driver.mtu&quot;: &quot;1500&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;Labels&quot;: {}</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">5&gt;网络问题分析</span>
<span class="line">后来查询得知，在linux下,，需要把url配置为宿主机在局域网下的ip地址，通过如下命令可以获取本机的所有 IP 地址（IPv4 和 IPv6），但 不包括回环地址（如 127.0.0.1）。</span>
<span class="line">$ hostname -I</span>
<span class="line">192.168.5.17 192.168.49.1 172.17.0.1 172.18.0.1 172.20.0.1 172.19.0.1</span>
<span class="line"></span>
<span class="line">通过 ip a 命令可以查看，这些 ip 对应的网卡:</span>
<span class="line">$ ip a</span>
<span class="line">1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000</span>
<span class="line">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span>
<span class="line">    inet 127.0.0.1/8 scope host lo</span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line">    inet6 ::1/128 scope host </span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line">2: enp3s0: &lt;NO-CARRIER,BROADCAST,MULTICAST,UP&gt; mtu 1500 qdisc fq_codel state DOWN group default qlen 1000</span>
<span class="line">    link/ether f4:6b:8c:89:58:f6 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">3: wlp2s0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue state UP group default qlen 1000</span>
<span class="line">    link/ether e0:0a:f6:78:3b:1d brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    inet 192.168.5.17/24 brd 192.168.5.255 scope global dynamic noprefixroute wlp2s0</span>
<span class="line">       valid_lft 77836sec preferred_lft 77836sec</span>
<span class="line">    inet6 fe80::76cf:e344:df5b:cd7d/64 scope link noprefixroute </span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line">4: br-331156baf737: &lt;NO-CARRIER,BROADCAST,MULTICAST,UP&gt; mtu 1500 qdisc noqueue state DOWN group default </span>
<span class="line">    link/ether 02:42:39:32:14:79 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    inet 192.168.49.1/24 brd 192.168.49.255 scope global br-331156baf737</span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">可以确定:</span>
<span class="line">wlp2s0（无线网卡）:</span>
<span class="line">192.168.5.17 是当前设备在 局域网 (Wi-Fi) 中的 IP 地址。</span>
<span class="line">这个地址是 动态分配的（dynamic），说明可能是从 DHCP 服务器（如你的路由器）获取的。</span>
<span class="line">你可以使用 ping 192.168.5.17 从其他设备（同一局域网内）测试它是否可达。</span>
<span class="line"></span>
<span class="line">br-331156baf737（Docker 网络桥）:</span>
<span class="line">192.168.49.1 是 Docker 创建的网桥 (bridge network)，用于容器之间的通信。</span>
<span class="line">可以用 docker network ls 确认它属于哪个 Docker 网络：</span>
<span class="line">$ docker network ls | grep 331156baf737</span>
<span class="line">331156baf737   minikube                                  bridge    local</span>
<span class="line">可以看到</span>
<span class="line">192.168.49.1 IP 地址是 Minikube 创建的 Docker 桥接网络 (bridge network)，通常用于 Minikube 虚拟机与本机的通信。</span>
<span class="line">运行:</span>
<span class="line">$ docker network inspect minikube</span>
<span class="line">[</span>
<span class="line">    {</span>
<span class="line">        &quot;Name&quot;: &quot;minikube&quot;,</span>
<span class="line">        &quot;Id&quot;: &quot;331156baf737418aef246012c7ae1d0cbd10e92e005873b8b0054651e679656b&quot;,</span>
<span class="line">        &quot;Created&quot;: &quot;2024-12-10T22:25:56.520372769+08:00&quot;,</span>
<span class="line">        &quot;Scope&quot;: &quot;local&quot;,</span>
<span class="line">        &quot;Driver&quot;: &quot;bridge&quot;,</span>
<span class="line">        &quot;EnableIPv6&quot;: false,</span>
<span class="line">        &quot;IPAM&quot;: {</span>
<span class="line">            &quot;Driver&quot;: &quot;default&quot;,</span>
<span class="line">            &quot;Options&quot;: {},</span>
<span class="line">            &quot;Config&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;Subnet&quot;: &quot;192.168.49.0/24&quot;,</span>
<span class="line">                    &quot;Gateway&quot;: &quot;192.168.49.1&quot;</span>
<span class="line">                }</span>
<span class="line">            ]</span>
<span class="line">        },</span>
<span class="line">        &quot;Internal&quot;: false,</span>
<span class="line">        &quot;Attachable&quot;: false,</span>
<span class="line">        &quot;Ingress&quot;: false,</span>
<span class="line">        &quot;ConfigFrom&quot;: {</span>
<span class="line">            &quot;Network&quot;: &quot;&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;ConfigOnly&quot;: false,</span>
<span class="line">        &quot;Containers&quot;: {},</span>
<span class="line">        &quot;Options&quot;: {</span>
<span class="line">            &quot;--icc&quot;: &quot;&quot;,</span>
<span class="line">            &quot;--ip-masq&quot;: &quot;&quot;,</span>
<span class="line">            &quot;com.docker.network.driver.mtu&quot;: &quot;1500&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;Labels&quot;: {</span>
<span class="line">            &quot;created_by.minikube.sigs.k8s.io&quot;: &quot;true&quot;,</span>
<span class="line">            &quot;name.minikube.sigs.k8s.io&quot;: &quot;minikube&quot;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line">会发现 &quot;Gateway&quot;: &quot;192.168.49.1&quot;， 说明这个是minikube和宿主机通信的地址，关于上面的配置分析如下:</span>
<span class="line">192.168.49.1 作为 Minikube 内部网络的网关，主要用于 Minikube 虚拟机（或容器）与宿主机之间的通信。</span>
<span class="line"></span>
<span class="line">通信原理</span>
<span class="line">Minikube 在 192.168.49.0/24 子网内创建一个网络：</span>
<span class="line"></span>
<span class="line">网关地址：192.168.49.1</span>
<span class="line">Minikube 虚拟机的 IP（通常是 192.168.49.2）</span>
<span class="line">运行在 Minikube 内部的 Pod 可能分配到 192.168.49.x 其他地址</span>
<span class="line">宿主机如何访问 Minikube 内部？</span>
<span class="line"></span>
<span class="line">Ubuntu 主机 可以通过 192.168.49.1 访问 Minikube 虚拟机，前提是 Minikube 正在运行。</span>
<span class="line">总结:</span>
<span class="line">192.168.49.1 是 Minikube 内部网络的网关，Minikube 及其 Pod 通过它访问宿主机。</span>
<span class="line">宿主机可以访问 Minikube 虚拟机的 minikube ip，Minikube 内部可以通过 192.168.49.1 访问宿主机。</span>
<span class="line"></span>
<span class="line">6&gt;使用下面的命令试一试</span>
<span class="line">docker exec -it gitlab-runner gitlab-runner register \\</span>
<span class="line">  --url &quot;http://192.168.5.17:9080/&quot; \\</span>
<span class="line">  --registration-token a_RVyNwT6bNN9DvH2bvm \\</span>
<span class="line">  --executor &quot;docker&quot; \\</span>
<span class="line">  --docker-image &quot;alpine:latest&quot;</span>
<span class="line"></span>
<span class="line">执行:</span>
<span class="line">$ docker exec -it gitlab-runner gitlab-runner register \\</span>
<span class="line">  --url &quot;http://192.168.5.17:9080/&quot; \\</span>
<span class="line">  --registration-token a_RVyNwT6bNN9DvH2bvm \\</span>
<span class="line">  --executor &quot;docker&quot; \\</span>
<span class="line">  --docker-image &quot;alpine:latest&quot;</span>
<span class="line">Runtime platform                                    arch=amd64 os=linux pid=91 revision=690ce25c version=17.8.3</span>
<span class="line">Running in system-mode.                            </span>
<span class="line">                                                   </span>
<span class="line">Enter the GitLab instance URL (for example, https://gitlab.com/):</span>
<span class="line">[http://192.168.5.17:9080/]: </span>
<span class="line">Enter the registration token:</span>
<span class="line">[a_RVyNwT6bNN9DvH2bvm]: </span>
<span class="line">Enter a description for the runner:</span>
<span class="line">[8446a748968a]: a runner for local gitlab</span>
<span class="line">Enter tags for the runner (comma-separated):</span>
<span class="line">tag1</span>
<span class="line">Enter optional maintenance note for the runner:</span>
<span class="line"></span>
<span class="line">WARNING: Support for registration tokens and runner parameters in the &#39;register&#39; command has been deprecated in GitLab Runner 15.6 and will be replaced with support for authentication tokens. For more information, see https://docs.gitlab.com/ee/ci/runners/new_creation_workflow </span>
<span class="line">Registering runner... succeeded                     runner=a_RVyNwT</span>
<span class="line">Enter an executor: kubernetes, instance, custom, shell, docker, docker-windows, docker+machine, ssh, parallels, virtualbox, docker-autoscaler:</span>
<span class="line">[docker]: </span>
<span class="line">Enter the default Docker image (for example, ruby:2.7):</span>
<span class="line">[alpine:latest]: </span>
<span class="line">Runner registered successfully. Feel free to start it, but if it&#39;s running already the config should be automatically reloaded!</span>
<span class="line"> </span>
<span class="line">Configuration (with the authentication token) was saved in &quot;/etc/gitlab-runner/config.toml&quot; </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ docker exec -it gitlab-runner gitlab-runner verify</span>
<span class="line">Runtime platform                                    arch=amd64 os=linux pid=114 revision=690ce25c version=17.8.3</span>
<span class="line">Running in system-mode.                            </span>
<span class="line">                                                   </span>
<span class="line">Verifying runner... is alive                        runner=t1_UNMMA</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">上面的配置说明 gitlab-runner 已经注册成功，我直接打开gitlab CI/CD runners的时候，发现拉取runners失败，重启调脑，就可以了，说明要重启一个gitlab才行，下次注意</span>
<span class="line">也可能是，我之前直接在gitlab CI/CD runners 下创建了一个runner(其实这个runner只是有一个初始信息，并没有和gitlab-runner关联，没什么实际意义，唯一的可能是，可以直接在gitlab-runner上关联这个命名好的runner吧，但是没有测试过。其实可以直接在启动的gitlab-runner上通过命令注册的，如下面所说), 后来又通过gitlab-runner注册的，通过gitlab-runner注册的,也可以填写一些关于runner的信息，我感觉这两种方式有冲突，导致的问题.</span>
<span class="line"></span>
<span class="line">7&gt;由于实际项目中，使用shell作为executor，所以这里要修改</span>
<span class="line"># docker exec -it gitlab-runner /bin/bash</span>
<span class="line"># apt update &amp;&amp; apt install -y vim  //已经是root用户，不需要sudo</span>
<span class="line"># vim /etc/gitlab-runner/config.toml</span>
<span class="line">concurrent = 1</span>
<span class="line">check_interval = 0</span>
<span class="line">shutdown_timeout = 0</span>
<span class="line"></span>
<span class="line">[session_server]</span>
<span class="line">  session_timeout = 1800</span>
<span class="line"></span>
<span class="line">[[runners]]</span>
<span class="line">  name = &quot;a runner for local gitlab&quot;</span>
<span class="line">  url = &quot;http://192.168.5.17:9080/&quot;</span>
<span class="line">  id = 4</span>
<span class="line">  token = &quot;t1_UNMMAbUzz1k-_5zyzyQa&quot;</span>
<span class="line">  token_obtained_at = 2025-02-09T14:42:54Z</span>
<span class="line">  token_expires_at = 0001-01-01T00:00:00Z</span>
<span class="line">  executor = &quot;docker&quot;</span>
<span class="line">  [runners.custom_build_dir]</span>
<span class="line">  [runners.cache]</span>
<span class="line">    MaxUploadedArchiveSize = 0</span>
<span class="line">    [runners.cache.s3]</span>
<span class="line">    [runners.cache.gcs]</span>
<span class="line">    [runners.cache.azure]</span>
<span class="line">  [runners.docker]</span>
<span class="line">    tls_verify = false</span>
<span class="line">    image = &quot;alpine:latest&quot;</span>
<span class="line">    privileged = false</span>
<span class="line">    disable_entrypoint_overwrite = false</span>
<span class="line">    oom_kill_disable = false</span>
<span class="line">    disable_cache = false</span>
<span class="line">    volumes = [&quot;/cache&quot;]</span>
<span class="line">    shm_size = 0</span>
<span class="line">    network_mtu = 0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">修改后为:</span>
<span class="line">[[runners]]</span>
<span class="line">  name = &quot;your-runner-name&quot;</span>
<span class="line">  url = &quot;http://your-gitlab-url&quot;</span>
<span class="line">  token = &quot;your-registration-token&quot;</span>
<span class="line">  executor = &quot;shell&quot;   # 更改为 shell</span>
<span class="line"></span>
<span class="line">同时把runners.docker 相关的删除</span>
<span class="line"></span>
<span class="line">保存,重启gitlab-runner:</span>
<span class="line">docker restart gitlab-runner</span>
<span class="line"></span>
<span class="line">8&gt;实际使用过程中，gitlab的pipelines的job一直报</span>
<span class="line">Running with gitlab-runner 17.8.3 (690ce25c)</span>
<span class="line">  on a runner for local gitlab t1_UNMMA, system ID: r_iTJKxTxte9W9</span>
<span class="line">Preparing the &quot;shell&quot; executor</span>
<span class="line">00:00</span>
<span class="line">Using Shell (bash) executor...</span>
<span class="line">Preparing environment</span>
<span class="line">00:00</span>
<span class="line">Running on 8446a748968a...</span>
<span class="line">Getting source from Git repository</span>
<span class="line">00:00</span>
<span class="line">Fetching changes with git depth set to 20...</span>
<span class="line">Reinitialized existing Git repository in /home/gitlab-runner/builds/t1_UNMMA/0/front/laravel-15/.git/</span>
<span class="line">fatal: unable to access &#39;http://gitlab.example.com/front/laravel-15.git/&#39;: Could not resolve host: gitlab.example.com</span>
<span class="line">Cleaning up project directory and file based variables</span>
<span class="line">00:00</span>
<span class="line">ERROR: Job failed: exit status 1</span>
<span class="line"></span>
<span class="line">设个问题说明tilab-runner在拉取gitlab的代码的时候，出了问题，重新进入到gitlab-runner容器，修改config.toml配置</span>
<span class="line"># vim /etc/gitlab-runner/config.toml</span>
<span class="line">concurrent = 1</span>
<span class="line">check_interval = 0</span>
<span class="line">shutdown_timeout = 0</span>
<span class="line"></span>
<span class="line">[session_server]</span>
<span class="line">  session_timeout = 1800</span>
<span class="line"></span>
<span class="line">[[runners]]</span>
<span class="line">  name = &quot;a runner for local gitlab&quot;</span>
<span class="line">  url = &quot;http://192.168.5.17:9080/&quot;</span>
<span class="line">  id = 4</span>
<span class="line">  token = &quot;t1_UNMMAbUzz1k-_5zyzyQa&quot;</span>
<span class="line">  token_obtained_at = 2025-02-09T14:42:54Z</span>
<span class="line">  token_expires_at = 0001-01-01T00:00:00Z</span>
<span class="line">  executor = &quot;shell&quot;</span>
<span class="line">  clone_url = &quot;http://192.168.5.17:9080/&quot; # 确保拉取代码时使用正确的 URL，加了这个确实可以了</span>
<span class="line">  [runners.custom_build_dir]</span>
<span class="line">  [runners.cache]</span>
<span class="line">    MaxUploadedArchiveSize = 0</span>
<span class="line">    [runners.cache.s3]</span>
<span class="line">    [runners.cache.gcs]</span>
<span class="line">    [runners.cache.azure]</span>
<span class="line"></span>
<span class="line">现在pipelines中的job运行成功:</span>
<span class="line">//默认的main分支</span>
<span class="line">Running with gitlab-runner 17.8.3 (690ce25c)</span>
<span class="line">  on a runner for local gitlab t1_UNMMA, system ID: r_iTJKxTxte9W9</span>
<span class="line">Preparing the &quot;shell&quot; executor</span>
<span class="line">00:00</span>
<span class="line">Using Shell (bash) executor...</span>
<span class="line">Preparing environment</span>
<span class="line">00:00</span>
<span class="line">Running on 8446a748968a...</span>
<span class="line">Getting source from Git repository</span>
<span class="line">00:04</span>
<span class="line">Fetching changes with git depth set to 20...</span>
<span class="line">Reinitialized existing Git repository in /home/gitlab-runner/builds/t1_UNMMA/0/front/laravel-15/.git/</span>
<span class="line">Checking out 24a2c686 as detached HEAD (ref is main)...</span>
<span class="line">Skipping Git submodules setup</span>
<span class="line">Executing &quot;step_script&quot; stage of the job script</span>
<span class="line">00:10</span>
<span class="line">$ echo &quot;Linting code... This will take about 10 seconds.&quot;</span>
<span class="line">Linting code... This will take about 10 seconds.</span>
<span class="line">$ sleep 10</span>
<span class="line">$ echo &quot;No lint issues found.&quot;</span>
<span class="line">No lint issues found.</span>
<span class="line">Cleaning up project directory and file based variables</span>
<span class="line">00:00</span>
<span class="line">Job succeeded</span>
<span class="line"></span>
<span class="line">//新增一个 feat/1001_get-user 分支</span>
<span class="line">Running with gitlab-runner 17.8.3 (690ce25c)</span>
<span class="line">  on a runner for local gitlab t1_UNMMA, system ID: r_iTJKxTxte9W9</span>
<span class="line">Preparing the &quot;shell&quot; executor</span>
<span class="line">00:00</span>
<span class="line">Using Shell (bash) executor...</span>
<span class="line">Preparing environment</span>
<span class="line">00:00</span>
<span class="line">Running on 8446a748968a...</span>
<span class="line">Getting source from Git repository</span>
<span class="line">00:01</span>
<span class="line">Fetching changes with git depth set to 20...</span>
<span class="line">Reinitialized existing Git repository in /home/gitlab-runner/builds/t1_UNMMA/0/front/laravel-15/.git/</span>
<span class="line">Checking out c1367898 as detached HEAD (ref is feat/1001_get-user)...</span>
<span class="line">Skipping Git submodules setup</span>
<span class="line">Executing &quot;step_script&quot; stage of the job script</span>
<span class="line">00:00</span>
<span class="line">$ echo &quot;Compiling the code...&quot;</span>
<span class="line">Compiling the code...</span>
<span class="line">$ echo &quot;Compile complete.&quot;</span>
<span class="line">Compile complete.</span>
<span class="line">Cleaning up project directory and file based variables</span>
<span class="line">00:00</span>
<span class="line">Job succeeded</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，gitlab-runner成功运行起来，这是是一个基本的使用，还有关于网络部分的配置分析，我想重新来一个篇幅，还有配合=自定义的docker registory 使用的</p>`,3)]))}const u=s(l,[["render",c],["__file","使用docker搭建gitlab-runner及使用.html.vue"]]),t=JSON.parse('{"path":"/content/service/docker/%E4%BD%BF%E7%94%A8docker%E6%90%AD%E5%BB%BAgitlab-runner%E5%8F%8A%E4%BD%BF%E7%94%A8.html","title":"使用docker搭建gitlab-runner及使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"使用docker搭建gitlab-runner及使用","head":[["meta",{"name":"title","content":"使用docker搭建gitlab-runner及使用"}],["meta",{"name":"description","content":"使用docker搭建gitlab-runner及使用"}],["meta",{"name":"keywords","content":"gitlab,docker,gitlab-runner"}],["meta",{"property":"og:title","content":"使用docker搭建gitlab-runner及使用"}],["meta",{"property":"og:description","content":"使用docker搭建gitlab-runner及使用"}]]},"headers":[],"git":{},"filePathRelative":"content/service/docker/使用docker搭建gitlab-runner及使用.md"}');export{u as comp,t as data};
