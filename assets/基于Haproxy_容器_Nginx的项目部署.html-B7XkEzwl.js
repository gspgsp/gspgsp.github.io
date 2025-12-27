import{_ as n,c as s,f as a,o as d}from"./app-CZhJCr9M.js";const i={};function t(l,e){return d(),s("div",null,e[0]||(e[0]=[a(`<h5 id="基于haproxy-容器-nginx的项目部署" tabindex="-1"><a class="header-anchor" href="#基于haproxy-容器-nginx的项目部署"><span>基于Haproxy+容器+Nginx的项目部署:</span></a></h5><p>最近在看项目部署相关的东西，这些都是实际工作中用到的.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">首先做了如下部署：</span>
<span class="line">ha 里面做了 http--&gt;https的转发到 duo_staging_backend</span>
<span class="line"></span>
<span class="line">duo_staging_backend 即为后台服务: 10.10.0.121:4431-----docker容器映射------&gt; nginx 443 服务，staging.duo.com</span>
<span class="line"></span>
<span class="line">staging.duo.com 绑定的公网IP就是这个 175.63.194.210</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="再看下面这段代码就知道了这么部署的原理" tabindex="-1"><a class="header-anchor" href="#再看下面这段代码就知道了这么部署的原理"><span>再看下面这段代码就知道了这么部署的原理:</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">frontend http_frontend</span>
<span class="line">    bind *:80</span>
<span class="line">    mode http</span>
<span class="line">    option httplog</span>
<span class="line">    redirect scheme https code 301 if !{ ssl_fc }</span>
<span class="line">  </span>
<span class="line">frontend https_frontend</span>
<span class="line">    bind *:443 ssl crt /etc/haproxy/certs/your_domain.pem</span>
<span class="line">    mode http</span>
<span class="line">    option httplog</span>
<span class="line">    default_backend https_backend</span>
<span class="line">    </span>
<span class="line">    //这里其实还可以使用 ACL（Access Control List）检查请求的 &quot;Host&quot; 头部是否为 www.hello.test。如果是，将使用 https_backend 后端。</span>
<span class="line">    acl is_hello_test hdr(host) -i www.hello.test</span>
<span class="line">    use_backend https_backend if is_hello_test</span>
<span class="line">      </span>
<span class="line">backend https_backend</span>
<span class="line">    mode http</span>
<span class="line">    option httplog</span>
<span class="line">    server backend_server 192.168.1.2:8443 ssl verify none</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="上面配置分析" tabindex="-1"><a class="header-anchor" href="#上面配置分析"><span>上面配置分析</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在上述配置中：</span>
<span class="line">1.http_frontend 是一个前端，监听80端口，通过 HTTP 转发到 HTTPS。</span>
<span class="line">2.redirect scheme https code 301 if !{ ssl_fc } 将所有 HTTP 请求重定向到 HTTPS。</span>
<span class="line">3.https_frontend 是另一个前端，监听443端口，用于终止 SSL/TLS，使用 /etc/haproxy/certs/your_domain.pem 证书文件进行 SSL 处理。</span>
<span class="line">4.default_backend https_backend 将 HTTPS 请求转发到后端的 HTTPS 服务器。</span>
<span class="line">5.这里 192.168.1.2:8443 是一个后端服务器，IP 地址是 192.168.1.2，端口是 8443。ssl 关键字表示使用 SSL/TLS 连接。verify none 表示不进行证书验证，这在测试环境中可能可以接受。</span>
<span class="line">然后，你需要确保在你的容器环境中，将容器的443端口正确映射到主机的 192.168.1.2:8443 地址上。</span>
<span class="line"></span>
<span class="line">6.当然了，192.168.1.2:8443 也可以映射到容器的80端口，aca 项目的第一次配置就是这么配置的，相当于haproxy做了一次 80---&gt;443---&gt;80的转换，但是这样导致，项目代母里面获取到的总是http协议，而不是https协议，就会报下面的错误:</span>
<span class="line">7037.a1ad5b79.js:1 Mixed Content: The page at &#39;https://staging.duo.com/admin/course/manage/list/1&#39; was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint &#39;http://staging.duo.com/admin/course/quiz?course_id=1&#39;. This request has been blocked; the content must be served over HTTPS.</span>
<span class="line"></span>
<span class="line">所以后来和运维讨论了这个问题，他就把 192.168.1.2:8443 映射到了容器的443端口(当然又重新配置了https证书)</span>
<span class="line"></span>
<span class="line">7.上面这种配置是一种常见的做法，可以将外部请求通过 HAProxy 转发到内部容器的安全端口，从而实现隔离和安全性。</span>
<span class="line"></span>
<span class="line">8.上面有个 acl 配置，这里的 www.hello.test，DNS 解析为宿主机的公网IP，但是使用的时候  www.hello.test 配置在 容器的 nginx server_name 里面的，这样配置有个使用前提：需要在主机上运行一个 HTTP 服务器来处理 www.hello.test 域名的请求，这里就是使用了 haproxy 来处理的。所以整个过程配合的十分巧妙。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">细节可以参考： chatGPT下的 nginx服务 对话，感觉  chatGPT 还是很强大的，直接帮我验证了这一理论。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="这个配置还是很实用的-实际上的backend可以有多个-通过haproxy做负载均衡-如下所示" tabindex="-1"><a class="header-anchor" href="#这个配置还是很实用的-实际上的backend可以有多个-通过haproxy做负载均衡-如下所示"><span>这个配置还是很实用的，实际上的backend可以有多个，通过Haproxy做负载均衡，如下所示:</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">backend nginx_backend</span>
<span class="line">    mode http</span>
<span class="line">    option httplog</span>
<span class="line">    balance roundrobin  # 使用循环算法进行负载均衡</span>
<span class="line">    server container_server1 172.17.0.2:80 check</span>
<span class="line">    server container_server2 172.17.0.3:80 check</span>
<span class="line">    server container_server3 172.17.0.4:80 check</span>
<span class="line"></span>
<span class="line">//当然 container_server1 container_server2 container_server3 对应的容器服务里的 nginx server_name配置也要是相同的的</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>上面没有使用 KeepAlived，原因是，已经够用了，当然如果使用 KeepAlived，那就会更复杂有些</p></blockquote><hr><h5 id="haproxy-acl-常用-fetch-方法-匹配运算符表" tabindex="-1"><a class="header-anchor" href="#haproxy-acl-常用-fetch-方法-匹配运算符表"><span>HAProxy ACL 常用 fetch 方法 + 匹配运算符表</span></a></h5><table><thead><tr><th>fetch 方法</th><th>作用</th></tr></thead><tbody><tr><td><code>hdr(&lt;name&gt;)</code></td><td>取请求头 <code>&lt;name&gt;</code>，比如 <code>hdr(User-Agent)</code></td></tr><tr><td><code>path</code></td><td>取 URL 的 path 部分（不含 query string）</td></tr><tr><td><code>url_param(&lt;name&gt;)</code></td><td>取 URL 参数 <code>&lt;name&gt;</code> 的值</td></tr><tr><td><code>method</code></td><td>取 HTTP 方法，如 <code>GET</code>、<code>POST</code></td></tr><tr><td><code>src</code></td><td>取客户端 IP 地址</td></tr><tr><td><code>dst</code></td><td>取目标服务器 IP 地址</td></tr><tr><td><code>ssl_fc</code></td><td>判断是否是 SSL 前端连接 (true/false)</td></tr><tr><td><code>nbsrv(&lt;backend&gt;)</code></td><td>获取某个 backend 当前可用的 server 数量</td></tr><tr><td><code>req_len</code></td><td>请求报文大小</td></tr><tr><td><code>resp_len</code></td><td>响应报文大小</td></tr></tbody></table><h5 id="🟡-常用匹配运算符" tabindex="-1"><a class="header-anchor" href="#🟡-常用匹配运算符"><span>🟡 常用匹配运算符</span></a></h5><table><thead><tr><th>运算符 / 简写</th><th>含义</th></tr></thead><tbody><tr><td><code>-m sub</code> → <code>_sub</code></td><td>子串匹配（包含）</td></tr><tr><td><code>-m beg</code> → <code>_beg</code></td><td>前缀匹配（以…开头）</td></tr><tr><td><code>-m end</code> → <code>_end</code></td><td>后缀匹配（以…结尾）</td></tr><tr><td><code>-m reg</code> → <code>_reg</code></td><td>正则匹配</td></tr><tr><td><code>-i</code></td><td>忽略大小写（可和上面组合）</td></tr><tr><td><code>eq</code> / <code>lt</code> / <code>gt</code></td><td>数值比较（等于 / 小于 / 大于）</td></tr><tr><td><code>len</code></td><td>长度比较</td></tr></tbody></table><h5 id="🔵-组合示例" tabindex="-1"><a class="header-anchor" href="#🔵-组合示例"><span>🔵 组合示例</span></a></h5><ul><li><p><strong>匹配移动端 UA</strong></p><div class="language-haproxy line-numbers-mode" data-highlighter="prismjs" data-ext="haproxy" data-title="haproxy"><pre><code><span class="line">acl is_mobile hdr_sub(User-Agent) -i mobile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>→ <code>hdr(User-Agent)</code> + <code>sub</code>，检查 UA 里是否包含 <code>mobile</code>（忽略大小写）。</p></li><li><p><strong>匹配 <code>/api/</code> 开头的路径</strong></p><div class="language-haproxy line-numbers-mode" data-highlighter="prismjs" data-ext="haproxy" data-title="haproxy"><pre><code><span class="line">acl is_api path_beg /api/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>→ <code>path</code> + <code>beg</code>，检查 URL path 是否以 <code>/api/</code> 开头。</p></li><li><p><strong>判断来源 IP 是否内网</strong></p><div class="language-haproxy line-numbers-mode" data-highlighter="prismjs" data-ext="haproxy" data-title="haproxy"><pre><code><span class="line">acl is_admin src 192.168.1.0/24</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>判断后端存活数是否 &lt; 2</strong></p><div class="language-haproxy line-numbers-mode" data-highlighter="prismjs" data-ext="haproxy" data-title="haproxy"><pre><code><span class="line">acl high_load nbsrv(web_backend) lt 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul>`,17)]))}const c=n(i,[["render",t],["__file","基于Haproxy_容器_Nginx的项目部署.html.vue"]]),p=JSON.parse('{"path":"/content/service/deploy/%E5%9F%BA%E4%BA%8EHaproxy_%E5%AE%B9%E5%99%A8_Nginx%E7%9A%84%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2.html","title":"基于Haproxy容器Nginx的项目部署","lang":"en-US","frontmatter":{"sidebar":false,"title":"基于Haproxy容器Nginx的项目部署","description":"基于Haproxy容器Nginx的项目部署"},"headers":[],"git":{},"filePathRelative":"content/service/deploy/基于Haproxy+容器+Nginx的项目部署.md"}');export{c as comp,p as data};
