import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function p(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h5 id="vue3定义一个指令" tabindex="-1"><a class="header-anchor" href="#vue3定义一个指令"><span>vue3定义一个指令</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 使用vue3定义一个 dompurify 指令 utils/directives/dompurify-html.ts</span>
<span class="line">import type { App, Plugin } from &quot;vue&quot;;</span>
<span class="line">import { buildVueDompurifyHTMLDirective } from &quot;vue-dompurify-html&quot;;</span>
<span class="line"></span>
<span class="line">export const vDompurifyHtml = buildVueDompurifyHTMLDirective({</span>
<span class="line">  namedConfigurations: {</span>
<span class="line">    removeClasses: {</span>
<span class="line">      FORBID_ATTR: [&quot;class&quot;, &quot;className&quot;],</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">export const dompurifyHtmlPlugin: Plugin = {</span>
<span class="line">  install(app: App) {</span>
<span class="line">    app.directive(&quot;dompurify-html&quot;, vDompurifyHtml);</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 在Nuxt3下作为插件引入</span>
<span class="line">export default defineNuxtPlugin((nuxtApp) =&gt; {</span>
<span class="line">  nuxtApp.vueApp.directive(&#39;dompurify-html&#39;, vDompurifyHtml)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">export default defineNuxtPlugin((nuxtApp) =&gt; {</span>
<span class="line">  nuxtApp.vueApp.use(dompurifyHtmlPlugin)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//传统应用中</span>
<span class="line">import { createApp } from &quot;vue&quot;;</span>
<span class="line">import App from &quot;./App.vue&quot;;</span>
<span class="line">import { dompurifyHtmlPlugin } from &quot;./path-to-plugin&quot;;</span>
<span class="line"></span>
<span class="line">const app = createApp(App);</span>
<span class="line">app.use(dompurifyHtmlPlugin);</span>
<span class="line">app.mount(&quot;#app&quot;);</span>
<span class="line">\`\`\`</span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(l,[["render",p],["__file","vue3定义一个指令.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/vue3%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA%E6%8C%87%E4%BB%A4.html","title":"vue3定义一个指令","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3定义一个指令","head":[["meta",{"name":"title","content":"vue3定义一个指令"}],["meta",{"name":"description","content":"vue3定义一个指令"}],["meta",{"name":"keywords","content":"vue3"}],["meta",{"property":"og:title","content":"vue3定义一个指令"}],["meta",{"property":"og:description","content":"vue3定义一个指令"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3定义一个指令.md"}');export{d as comp,c as data};
