import{_ as s,c as i,f as e,o as a}from"./app-BB_BIQV8.js";const l={};function t(p,n){return a(),i("div",null,n[0]||(n[0]=[e(`<p>nuxt3引用报错解决办法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.执行</span>
<span class="line">$ npx nuxi dev</span>
<span class="line">报错:</span>
<span class="line">✘ [ERROR] Could not resolve &quot;#build/app.config.mjs&quot;</span>
<span class="line"></span>
<span class="line">    node_modules/nuxt/dist/app/config.mjs:3:24:</span>
<span class="line">      3 │ import __appConfig from &quot;#build/app.config.mjs&quot;;</span>
<span class="line">        ╵                         ~~~~~~~~~~~~~~~~~~~~~~~</span>
<span class="line"></span>
<span class="line">  The package import &quot;#build/app.config.mjs&quot; is not defined in this &quot;imports&quot; map:</span>
<span class="line"></span>
<span class="line">    node_modules/nuxt/package.json:23:13:</span>
<span class="line">      23 │   &quot;imports&quot;: {</span>
<span class="line">         ╵              ^</span>
<span class="line"></span>
<span class="line">  You can mark the path &quot;#build/app.config.mjs&quot; as external to exclude it from the bundle, which</span>
<span class="line">  will remove this error.</span>
<span class="line"></span>
<span class="line">原因：</span>
<span class="line">在我的utils/utils.js下引入了nuxt/app</span>
<span class="line">import {useCookie} from &quot;nuxt/app&quot;;</span>
<span class="line"></span>
<span class="line">解决办法:</span>
<span class="line">import {useCookie} from &quot;#imports&quot;;</span>
<span class="line"></span>
<span class="line">这样再次执行就不会报错了,不明白为什么</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(l,[["render",t],["__file","nuxt3引用报错解决办法.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/nuxt3%E5%BC%95%E7%94%A8%E6%8A%A5%E9%94%99%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html","title":"nuxt3引用报错解决办法","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3引用报错解决办法","description":"nuxt3引用报错解决办法"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3引用报错解决办法.md"}');export{c as comp,u as data};
