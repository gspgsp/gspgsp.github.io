import{_ as n,c as l,f as e,o as a}from"./app-BB_BIQV8.js";const i={};function t(c,s){return a(),l("div",null,s[0]||(s[0]=[e(`<p>mysql之XProtocol:</p><ul><li>缘起</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">如下是我的mysql container 端口展示:</span>
<span class="line">33060/tcp, 0.0.0.0:3307-&gt;3306/tcp, :::3307-&gt;3306/tcp</span>
<span class="line">我想知道我设置的是3307---&gt;3306, 但是前面的33060是什么意思</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解释</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">您提供的MySQL容器端口映射信息中包含了三个部分：</span>
<span class="line">  </span>
<span class="line">1. \`33060/tcp\`: </span>
<span class="line">   这是MySQL的X Protocol端口。X Protocol是MySQL 5.7.12及更高版本引入的一个新的协议，用于支持MySQL文档存储等新特性。这个端口默认是暴露的，但没有被映射到主机上。</span>
<span class="line">  </span>
<span class="line">2. \`0.0.0.0:3307-&gt;3306/tcp\`:</span>
<span class="line">   这是您设置的端口映射。它表示容器内的3306端口（MySQL的默认端口）被映射到主机的3307端口上。0.0.0.0意味着它在主机的所有网络接口上都可以访问。</span>
<span class="line">  </span>
<span class="line">3. \`:::3307-&gt;3306/tcp\`:</span>
<span class="line">   这与第二项本质上是相同的，但是针对IPv6。:::是IPv6的简写形式，表示所有IPv6接口。</span>
<span class="line">  </span>
<span class="line">总结：</span>
<span class="line">- 33060是MySQL的X Protocol端口，但没有被映射到主机上。</span>
<span class="line">- 3306是MySQL的主要端口，您将它映射到了主机的3307端口上。</span>
<span class="line">- 这个映射同时适用于IPv4（0.0.0.0）和IPv6（:::）。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(i,[["render",t],["__file","mysql之XProtocol.html.vue"]]),p=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8BXProtocol.html","title":"mysql之XProtocol","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之XProtocol","description":"mysql之XProtocol"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之XProtocol.md"}');export{r as comp,p as data};
