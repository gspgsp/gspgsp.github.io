import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const t={};function l(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>首先看一下OSI(Open Systems Interconnection)网络体系结构:</p><p><img src="https://img.qinhongzs.com/blog/http.png" alt="图片"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">TCP</span>
<span class="line"></span>
<span class="line">按层次分，TCP处于传输层，提供可靠的字节流服务，主要解决数据如何在网络中传输。</span>
<span class="line">字节流服务（Byte Stream Service）：为了方便运输，将大块数据分割成报文段（segment）为单位的数据包进行管理。可靠的传输服务是指能够把数据准确可靠地传给对方。</span>
<span class="line">TCP协议为了更容易传送大数据才把数据分割，而且TCP协议能够确认数据最终是否送达给对方。</span>
<span class="line">TCP采用了三次握手（three-way handshaking）策略和四次挥手策略 来确认数据是否送达给对方。</span>
<span class="line"></span>
<span class="line">HTTP</span>
<span class="line">按层次分，HTTP处于应用层，用于客户端和服务端之间的通信，主要是解决如何包装数据。</span>
<span class="line">HTTP协议能够明确区分哪端是客户端，哪端是服务端。</span>
<span class="line">HTTP是不保存状态的协议，即无状态协议。</span>
<span class="line">HTTP协议是建立在TCP之上的。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=s(t,[["render",l],["__file","http和tcp网络的区别.html.vue"]]),d=JSON.parse('{"path":"/content/other/spread/http%E5%92%8Ctcp%E7%BD%91%E7%BB%9C%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"http和tcp网络的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"http和tcp网络的区别","description":"http和tcp网络的区别"},"headers":[],"git":{},"filePathRelative":"content/other/spread/http和tcp网络的区别.md"}');export{r as comp,d as data};
