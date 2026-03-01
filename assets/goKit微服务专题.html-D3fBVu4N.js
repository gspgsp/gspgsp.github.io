import{_ as n,c as i,f as l,o as a}from"./app-BB_BIQV8.js";const e={};function c(p,s){return a(),i("div",null,s[0]||(s[0]=[l(`<p>goKit微服务专题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;go get 超时问题，主要是用了sudo的问题</span>
<span class="line">https://github.com/goproxy/goproxy.cn/issues/93</span>
<span class="line"></span>
<span class="line">2&gt;三大模块: 传输层（Transport layer） 端点层（Endpoint layer） 服务层（Service layer）</span>
<span class="line"></span>
<span class="line">3&gt;consul配置</span>
<span class="line">我的计划是单独跑一个服务注册的实例，比如 127.0.0.1:8010, 当有新的后端服务实例启动的时候，比如 这里有个127.0.0.1:8000 启动了，那么就向 127.0.0.1:8010 发一个消息，告诉它有新的服务启动了，需要consul注册这个后端服务实例</span>
<span class="line"></span>
<span class="line">127.0.0.1:8010 的主要功能如下:</span>
<span class="line"></span>
<span class="line">serverIp := 127.0.0.1 // 后端服务ip，通过消息获取</span>
<span class="line">port := 8000 // 后端服务端口，通过消息获取，也可能是8001 8002 8003 等，也可以是不同ip相同端口</span>
<span class="line"></span>
<span class="line">err := Tool.RegService(&quot;127.0.0.1:8500&quot;, &quot;1&quot;, &quot;测试&quot;, serverIp, port, &quot;5s&quot;, &quot;http://192.168.8.176:8000/health&quot;, &quot;test&quot;)</span>
<span class="line">		if err != nil {</span>
<span class="line">			errChan &lt;- err</span>
<span class="line">		}</span>
<span class="line">		_ = http.ListenAndServe(&quot;0.0.0.0:8000&quot;, r)</span>
<span class="line">  </span>
<span class="line">这样就把服务注册和后端服务提供分开了，总的来说就是下面这些步骤:</span>
<span class="line">具体步骤可以如下：</span>
<span class="line"></span>
<span class="line">3-1&gt;部署Consul：在你的生产环境中部署Consul服务器（通常以集群方式运行），并确保其高可用性。Consul服务器将用于存储服务的注册信息和提供服务发现。</span>
<span class="line"></span>
<span class="line">3-2&gt;创建服务注册组件：创建一个独立的组件，它负责注册新的后端服务实例到Consul中。这个组件可以监听一个消息队列或接收HTTP请求来获取要注册的服务实例的信息（如IP地址、端口、健康检查URL等），然后使用Consul的API将服务实例信息注册到Consul中。</span>
<span class="line"></span>
<span class="line">3-3&gt;后端服务：后端服务提供实际的服务功能，并在启动时通知服务注册组件。服务注册组件会将这些服务实例信息注册到Consul中。</span>
<span class="line"></span>
<span class="line">3-4&gt;客户端服务：客户端应用程序使用Consul的API来查询服务注册中心，获取可用的服务实例地址，并将请求发送到这些实例。客户端应用程序不需要了解服务注册的细节，只需使用Consul提供的接口。</span>
<span class="line"></span>
<span class="line">这种方式将服务注册和服务提供分开，确保了可维护性和灵活性。服务注册组件可以独立运行，而后端服务只需启动时通知它即可。</span>
<span class="line"></span>
<span class="line">总之，你可以使用Consul来管理服务的注册和发现，然后将服务注册的逻辑封装到独立的组件中，以实现你所期望的架构。这种方式可以将服务注册的功能集中在一个地方，提高管理和维护的效率。</span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">将服务注册组件独立运行的好处包括：</span>
<span class="line"></span>
<span class="line">高可用性：独立的服务注册组件可以部署为集群，以确保在节点故障时仍能提供服务注册的功能。这提高了整个服务注册和发现系统的可用性。</span>
<span class="line">  </span>
<span class="line">维护和管理：独立运行的服务注册组件更容易进行维护和管理。你可以为这个组件配置独立的监控、日志记录和警报，而不会影响后端服务。</span>
<span class="line">  </span>
<span class="line">扩展性：如果你的系统规模增大，你可以轻松地扩展服务注册组件的能力，以应对更多的服务实例注册请求。</span>
<span class="line">  </span>
<span class="line">隔离风险：将服务注册组件与后端服务分离，降低了彼此之间相互影响的风险。例如，后端服务的故障不会影响服务注册。</span>
<span class="line">  </span>
<span class="line">总之，在生产环境中，将服务注册组件独立运行是一种常见的做法，以确保整个服务注册和发现系统的稳定性和可扩展性。这使得服务注册的管理变得更加灵活，有助于应对不同规模的系统需求。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=n(e,[["render",c],["__file","goKit微服务专题.html.vue"]]),v=JSON.parse('{"path":"/content/service/micro/goKit%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B8%93%E9%A2%98.html","title":"goKit微服务专题","lang":"en-US","frontmatter":{"sidebar":false,"title":"goKit微服务专题","description":"goKit微服务专题"},"headers":[],"git":{},"filePathRelative":"content/service/micro/goKit微服务专题.md"}');export{t as comp,v as data};
