import{_ as n,c as s,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(c,e){return a(),s("div",null,e[0]||(e[0]=[l(`<p>curl命令自定义解析:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">root@tvm:~$ curl --header &quot;Host: academy.web.test&quot; 127.0.0.1 //本地将不同域名解析到同一个ip上的测试访问，格式： curl --header &quot;Host: www.mydomain.com&quot; SERVER_IP_HERE</span>
<span class="line"></span>
<span class="line">这种方法在 HTTPS 的世界里会出现各种问题,解决办法是添加 --resolve 参数：</span>
<span class="line"></span>
<span class="line">语法:</span>
<span class="line">curl http[https]://www.mydomain.com --resolve www.mydomain.com[* 解析所有域名]:80[443]:&lt;EXTERNAL-IP&gt;</span>
<span class="line"></span>
<span class="line">使用:</span>
<span class="line">curl http://example.com/version --resolve example.com:80:127.0.0.1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(i,[["render",t],["__file","curl命令自定义解析.html.vue"]]),o=JSON.parse('{"path":"/content/linux/command/curl%E5%91%BD%E4%BB%A4%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%A3%E6%9E%90.html","title":"curl命令自定义解析","lang":"en-US","frontmatter":{"sidebar":false,"title":"curl命令自定义解析","description":"curl命令自定义解析"},"headers":[],"git":{},"filePathRelative":"content/linux/command/curl命令自定义解析.md"}');export{d as comp,o as data};
