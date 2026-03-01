import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(r,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>nginx反向代理配置:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#pass requests to port 4444 which is used by the Dockerized version of the Web App v2</span>
<span class="line">server{</span>
<span class="line">    listen 80;</span>
<span class="line">    server_name qinhong-v2.test;</span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">        proxy_set_header Host $host;</span>
<span class="line">        proxy_pass http://127.0.0.1:4448;</span>
<span class="line">        proxy_http_version 1.1;</span>
<span class="line">        proxy_set_header Upgrade $http_upgrade;</span>
<span class="line">        proxy_set_header Connection &quot;upgrade&quot;;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",t],["__file","nginx反向代理配置.html.vue"]]),c=JSON.parse('{"path":"/content/linux/nginx/nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE.html","title":"nginx反向代理配置","lang":"en-US","frontmatter":{"sidebar":false,"title":"nginx反向代理配置","description":"nginx反向代理配置"},"headers":[],"git":{},"filePathRelative":"content/linux/nginx/nginx反向代理配置.md"}');export{p as comp,c as data};
