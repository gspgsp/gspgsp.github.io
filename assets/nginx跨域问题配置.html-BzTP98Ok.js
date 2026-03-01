import{_ as e,c as s,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(d,n){return a(),s("div",null,n[0]||(n[0]=[i(`<p>nginx跨域问题配置:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    # Virtual Host Configs</span>
<span class="line">    ##</span>
<span class="line"></span>
<span class="line">    add_header Access-Control-Allow-Origin *;</span>
<span class="line">    add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span>
<span class="line">    add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</span>
<span class="line"></span>
<span class="line">    include /etc/nginx/conf.d/*.conf;</span>
<span class="line">    include /etc/nginx/sites-enabled/*;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=e(l,[["render",t],["__file","nginx跨域问题配置.html.vue"]]),o=JSON.parse('{"path":"/content/linux/nginx/nginx%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98%E9%85%8D%E7%BD%AE.html","title":"nginx跨域问题配置","lang":"en-US","frontmatter":{"sidebar":false,"title":"nginx跨域问题配置","description":"nginx跨域问题配置"},"headers":[],"git":{},"filePathRelative":"content/linux/nginx/nginx跨域问题配置.md"}');export{r as comp,o as data};
