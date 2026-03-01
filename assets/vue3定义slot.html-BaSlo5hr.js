import{_ as s,c as n,f as t,o as l}from"./app-BB_BIQV8.js";const a={};function i(d,e){return l(),n("div",null,e[0]||(e[0]=[t(`<h5 id="vue3定义slot" tabindex="-1"><a class="header-anchor" href="#vue3定义slot"><span>vue3定义slot</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">defineSlots&lt;{</span>
<span class="line">  label?: () =&gt; string;</span>
<span class="line">  labelText?: () =&gt; string;</span>
<span class="line">  default?: () =&gt; string;</span>
<span class="line">}&gt;();</span>
<span class="line">不合理(虽然可以运行)，应该是</span>
<span class="line">defineSlots&lt;{</span>
<span class="line">  label?: () =&gt; VNode;</span>
<span class="line">  labelText?: () =&gt; VNode;</span>
<span class="line">  default?: () =&gt; VNode;</span>
<span class="line">}&gt;();</span>
<span class="line"></span>
<span class="line">slot的返回值最好是VNode，而不是其它，因为最后slot总是被渲染的</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(a,[["render",i],["__file","vue3定义slot.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/vue3%E5%AE%9A%E4%B9%89slot.html","title":"vue3定义slot","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3定义slot","head":[["meta",{"name":"title","content":"vue3定义slot"}],["meta",{"name":"description","content":"vue3定义slot"}],["meta",{"name":"keywords","content":"Typescript,vue3,slot"}],["meta",{"property":"og:title","content":"vue3定义slot"}],["meta",{"property":"og:description","content":"vue3定义slot"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3定义slot.md"}');export{c as comp,r as data};
