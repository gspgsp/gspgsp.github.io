import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>nuxt3.5下的后端请求代理配置和之前不同，最近使用了最新的nuxt3版本，当初使用v3.0的时候，代理和vue下的使用差不多，但是 到了v3.5之后，就彻底不一样了,最新的配置如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">nitro:{</span>
<span class="line">        devProxy: {</span>
<span class="line">            &quot;/api&quot;: { //client发送请求的时候，要用相对地址，以/api开头，否则请求走不到这里，不能被代理，之前测试的这时候直接用的是http://localhost:8088/api/common/upload, 一直请求不通</span>
<span class="line">                target: &#39;http://localhost:8088/api&#39;,</span>
<span class="line">                prependPath: true,</span>
<span class="line">                changeOrigin: true,</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">参考链接如下:</span>
<span class="line">https://juejin.cn/post/7201099253498036279</span>
<span class="line">https://nitro.unjs.io/config //nitro网络配置    </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",t],["__file","nuxt3.5下的后端请求代理配置和之前不同.html.vue"]]),d=JSON.parse('{"path":"/content/front/js/nuxt3.5%E4%B8%8B%E7%9A%84%E5%90%8E%E7%AB%AF%E8%AF%B7%E6%B1%82%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE%E5%92%8C%E4%B9%8B%E5%89%8D%E4%B8%8D%E5%90%8C.html","title":"nuxt3.5下的后端请求代理配置和之前不同","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3.5下的后端请求代理配置和之前不同","description":"nuxt3.5下的后端请求代理配置和之前不同"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3.5下的后端请求代理配置和之前不同.md"}');export{r as comp,d as data};
