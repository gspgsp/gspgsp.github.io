import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function d(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>经常会使用到这些概念，记录一下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IP地址分类/IP地址10开头和172开头和192开头的区别/判断是否同一网段</span>
<span class="line"></span>
<span class="line">简单来说在公司或企业内部看到的就基本都是内网IP，ABC三类IP地址里的常见IP段。</span>
<span class="line"></span>
<span class="line">每个IP地址都包含两部分，即网络号和主机号。 </span>
<span class="line">InterNIC将IP地址分为五类:</span>
<span class="line">A类保留给ZF或大型企业，</span>
<span class="line">B类分配给中等规模的公司，</span>
<span class="line">C类分配给小公司或个人，</span>
<span class="line">D类用于组播，</span>
<span class="line">E类用于实验，</span>
<span class="line">注：各类可容纳的地址数目不同。</span>
<span class="line"></span>
<span class="line">A、B、C三类IP地址的特征：当将IP地址写成二进制形式时，</span>
<span class="line">A类地址的第一位总是O，如，10.0.0.1==00001010-00000000-00000000-00000001</span>
<span class="line">==》1.0.0.0-127.255.255.255，默认子网掩码为255.0.0.0，最多可容纳16777215台计算机</span>
<span class="line">B类地址的前两位总是10，如，172.16.0.1==10101100-00010000-00000000-00000001</span>
<span class="line">==》128.0.0.0-191.255.255.255，默认子网掩码为255.255.0.0，最多可容纳65535台计算机</span>
<span class="line">C类地址的前三位总是110。如，192.168.0.1==11000000-10101000-00000000-00000001</span>
<span class="line">==》192.0.0.0-223.255.255.255，默认子网掩码是255.255.255.0，最多可容纳254台计算机</span>
<span class="line"></span>
<span class="line">IP地址中保留地址：主机部分全为0的IP地址保留用于网络地址，主机部分全为1的IP地址保留为广播地址，224--255部分保留作为组播和实验目的。 同时注意IP地址分配时不能使用最末位为0和255的地址，因为这是广播地址，普通计算机上不能使用，但可用于网关和路由器上。</span>
<span class="line"></span>
<span class="line">专用IP地址： 就是我们在3类地址中常见到内网的IP段。</span>
<span class="line"></span>
<span class="line">10.0.0.0--10.255.255.255</span>
<span class="line">172.16.0.0--172.31.255.255 </span>
<span class="line">192.168.0.0--192.168.255.255 </span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">内网的计算机以NAT（网络地址转换）协议，通过一个公共的网关访问Internet。内网的计算机可向Internet上的其他计算机发送连接请求，但Internet上其他的计算机无法向内网的计算机发送连接请求。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const v=s(l,[["render",d],["__file","IP地址.html.vue"]]),r=JSON.parse('{"path":"/content/other/spread/IP%E5%9C%B0%E5%9D%80.html","title":"IP地址","lang":"en-US","frontmatter":{"sidebar":false,"title":"IP地址","description":"IP地址"},"headers":[],"git":{},"filePathRelative":"content/other/spread/IP地址.md"}');export{v as comp,r as data};
