import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h4 id="网络请求流程" tabindex="-1"><a class="header-anchor" href="#网络请求流程"><span>网络请求流程:</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">资源信息:</span>
<span class="line">本机IP:192.168.5.17 </span>
<span class="line">默认网关:192.168.5.1(这个一般也是路由器的地址)</span>
<span class="line"></span>
<span class="line">流程说明：</span>
<span class="line"></span>
<span class="line">1&gt;发起请求：</span>
<span class="line">当你的计算机向外部服务器发起请求时，假设请求的目标 IP 地址是 203.0.113.5（一个网站的 IP 地址），而你的计算机的本地 IP 地址是 192.168.5.17。</span>
<span class="line">计算机会将数据包的源地址设置为 192.168.5.17，目标地址设置为 203.0.113.5，然后将数据包通过 wlp2s0（无线网卡）发送到路由器。</span>
<span class="line"></span>
<span class="line">2&gt;路由器的处理：</span>
<span class="line">路由器收到这个数据包后，会看到源地址是 192.168.5.17（本地计算机的 IP 地址），并将数据包的源地址替换为路由器的 IP 地址（比如 192.168.5.1）。然后，路由器会把数据包转发到外部网络（即 203.0.113.5）并等待响应。</span>
<span class="line"></span>
<span class="line">3&gt;外部服务器响应：</span>
<span class="line">当外部服务器（例如网站服务器）收到请求并处理后，会生成响应并将其返回给请求的源 IP 地址，即路由器的 公网 IP（例如 203.0.113.1）。服务器会把响应数据包的目标地址设置为路由器的公网 IP。</span>
<span class="line"></span>
<span class="line">4&gt;路由器将响应转发回本地设备：</span>
<span class="line">外部网络响应回到路由器的公网 IP 后，路由器会根据 网络地址转换（NAT） 技术，将响应数据包转发给正确的本地设备。</span>
<span class="line">路由器会检查数据包，并发现它是响应从 本地 IP 192.168.5.17 发出的请求的。</span>
<span class="line">路由器将数据包的目标地址修改为本地 IP 地址 192.168.5.17，然后通过 wlp2s0 将数据包发送回你的计算机。</span>
<span class="line"></span>
<span class="line">5&gt;最终到达计算机：</span>
<span class="line">最终，计算机收到外部服务器的响应数据包，并根据内容进行处理。你看到网页加载完成，或者其他请求的结果。</span>
<span class="line"></span>
<span class="line">总结：</span>
<span class="line">外部网络的响应数据包通过 路由器的公网 IP 地址 返回到路由器。</span>
<span class="line">路由器使用 NAT 功能，检查这个数据包，确认它是哪个本地设备发出的请求。</span>
<span class="line">路由器将数据包转发给正确的本地设备（例如 192.168.5.17），确保响应到达正确的计算机。</span>
<span class="line">因此，路由器不仅仅负责将数据包从本地网络转发到外部网络，也负责确保外部响应能够正确地送回到发起请求的本地设备。</span>
<span class="line"></span>
<span class="line">这个过程的关键点：</span>
<span class="line">源 IP 地址 和 目标 IP 地址 的作用：发起请求时，源 IP 是本地设备的 IP 地址，目标 IP 是外部服务器的 IP 地址；而响应时，外部服务器的目标 IP 是路由器的公网 IP，最终路由器通过 NAT 把数据转发到本地设备。</span>
<span class="line">网络地址转换（NAT）：路由器通过 NAT 功能，把从本地设备发出的请求的源地址和端口号与外部服务器进行匹配，确保响应可以准确返回到正确的设备。</span>
<span class="line">这个流程就是我们日常网络通信背后的基础，确保了设备可以和外部服务器进行正常的请求与响应交换。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下面是我本地ip-route-输出" tabindex="-1"><a class="header-anchor" href="#下面是我本地ip-route-输出"><span>下面是我本地ip route 输出</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ip r</span>
<span class="line">default via 192.168.5.1 dev wlp2s0 proto dhcp metric 600 </span>
<span class="line">169.254.0.0/16 dev wlp2s0 scope link metric 1000 </span>
<span class="line">172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 </span>
<span class="line">172.18.0.0/16 dev br-7cbb16a986d6 proto kernel scope link src 172.18.0.1 </span>
<span class="line">172.19.0.0/16 dev br-fab0b27bf071 proto kernel scope link src 172.19.0.1 </span>
<span class="line">172.20.0.0/16 dev br-e6742f9d2eb1 proto kernel scope link src 172.20.0.1 </span>
<span class="line">192.168.5.0/24 dev wlp2s0 proto kernel scope link src 192.168.5.17 metric 600 </span>
<span class="line">192.168.49.0/24 dev br-331156baf737 proto kernel scope link src 192.168.49.1 linkdown </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重点解释-default-via-192-168-5-1-dev-wlp2s0-proto-dhcp-metric-600" tabindex="-1"><a class="header-anchor" href="#重点解释-default-via-192-168-5-1-dev-wlp2s0-proto-dhcp-metric-600"><span>重点解释 default via 192.168.5.1 dev wlp2s0 proto dhcp metric 600</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">default：表示默认网关，意味着所有无法匹配具体路由的流量都会走这个路径。</span>
<span class="line">via 192.168.5.1：表示流量通过 192.168.5.1 这个网关发送。</span>
<span class="line">dev wlp2s0：流量通过 wlp2s0（你的无线网卡）发送。(需要无限网卡和路由器通信,这个192.168.5.1其实是路由器的IP，只有这样才能找到路由器)</span>
<span class="line">proto dhcp：表示这条路由是通过 DHCP 服务器获取的。</span>
<span class="line">metric 600：路由优先级，较小的 metric 优先级更高。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker-和桥接网络" tabindex="-1"><a class="header-anchor" href="#docker-和桥接网络"><span>Docker 和桥接网络</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 </span>
<span class="line">172.18.0.0/16 dev br-7cbb16a986d6 proto kernel scope link src 172.18.0.1 </span>
<span class="line">172.19.0.0/16 dev br-fab0b27bf071 proto kernel scope link src 172.19.0.1 </span>
<span class="line">172.20.0.0/16 dev br-e6742f9d2eb1 proto kernel scope link src 172.20.0.1 </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const p=n(l,[["render",d],["__file","网络请求流程.html.vue"]]),t=JSON.parse('{"path":"/content/other/spread/%E7%BD%91%E7%BB%9C%E8%AF%B7%E6%B1%82%E6%B5%81%E7%A8%8B.html","title":"网络请求流程","lang":"en-US","frontmatter":{"sidebar":false,"title":"网络请求流程","head":[["meta",{"name":"title","content":"网络请求流程"}],["meta",{"name":"description","content":"网络请求流程"}],["meta",{"name":"keywords","content":"网络请求流程"}],["meta",{"property":"og:title","content":"网络请求流程"}],["meta",{"property":"og:description","content":"网络请求流程"}]]},"headers":[],"git":{},"filePathRelative":"content/other/spread/网络请求流程.md"}');export{p as comp,t as data};
