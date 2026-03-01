import{_ as s,c as e,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(c,n){return a(),e("div",null,n[0]||(n[0]=[l(`<p>CORS的工作流程:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">浏览器发起请求，当检测到跨域请求时，浏览器会自动发送一个预检请求（OPTIONS 请求），询问目标服务器是否允许跨域。</span>
<span class="line">服务器响应：如果服务器在响应中包含了正确的 CORS 头（如 Access-Control-Allow-Origin: * 或指定的域名），浏览器才会允许跨域请求的实际数据交互。</span>
<span class="line">  </span>
<span class="line">关键点：</span>
<span class="line">1&gt;CORS 是浏览器层的限制，用于保护用户免受潜在的恶意跨域请求攻击。</span>
<span class="line">2&gt;服务器端通信不受 CORS 限制：如果客户端不是浏览器（如服务器端代码、Postman、curl），跨域限制不适用。</span>
<span class="line">3&gt;服务器配置 CORS 响应头：通过服务器设置正确的 Access-Control-Allow-Origin 头，浏览器就能允许合法的跨域请求。</span>
<span class="line">  </span>
<span class="line">如何解决跨域问题？</span>
<span class="line">1&gt;服务器设置 CORS 头：通过在服务器响应中添加 Access-Control-Allow-Origin，可以允许特定源或所有源访问资源。</span>
<span class="line">2&gt;使用代理服务器：在开发环境中，本地代理服务可以转发请求，绕过浏览器的同源策略。</span>
<span class="line">3&gt;开发时禁用 CORS：可以启动浏览器时禁用 CORS 安全检查，或者使用浏览器插件来临时关闭跨域限制。// google 使用  CORS Unblock</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(i,[["render",t],["__file","CORS的工作流程.html.vue"]]),p=JSON.parse('{"path":"/content/other/spread/CORS%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B.html","title":"CORS的工作流程","lang":"en-US","frontmatter":{"sidebar":false,"title":"CORS的工作流程","description":"CORS的工作流程"},"headers":[],"git":{},"filePathRelative":"content/other/spread/CORS的工作流程.md"}');export{d as comp,p as data};
