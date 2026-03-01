import{_ as n,c as s,f as a,o as t}from"./app-BB_BIQV8.js";const l={};function i(r,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h5 id="vue3-5支持组件使用-usetemplateref-来引用-ref" tabindex="-1"><a class="header-anchor" href="#vue3-5支持组件使用-usetemplateref-来引用-ref"><span>vue3.5支持组件使用 usetemplateref 来引用 ref</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">https://vuejs.org/api/composition-api-helpers.html#usetemplateref</span>
<span class="line">如:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { useTemplateRef, onMounted } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const inputRef = useTemplateRef(&#39;input&#39;)</span>
<span class="line"></span>
<span class="line">onMounted(() =&gt; {</span>
<span class="line">  inputRef.value.focus()</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;input ref=&quot;input&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">之前使用的是:</span>
<span class="line">import { ref, onMounted } from &#39;vue&#39;;</span>
<span class="line">const containerRef = ref&lt;HTMLElement | null&gt;(null);</span>
<span class="line"></span>
<span class="line">&lt;div ref=&quot;containerRef&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const u=n(l,[["render",i],["__file","vue3支持组件使用usetemplateref来引用ref.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/vue3%E6%94%AF%E6%8C%81%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8usetemplateref%E6%9D%A5%E5%BC%95%E7%94%A8ref.html","title":"vue3支持组件使用usetemplateref来引用ref","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3支持组件使用usetemplateref来引用ref","head":[["meta"],{"name":"title","content":"vue3支持组件使用usetemplateref来引用ref"},["meta"],{"name":"description","content":"vue3支持组件使用usetemplateref来引用ref"},["meta"],{"name":"keywords","content":"vue3,usetemplateref"},["meta"],{"property":"og:title","content":"vue3支持组件使用usetemplateref来引用ref"},["meta"],{"property":"og:description","content":"vue3支持组件使用usetemplateref来引用ref"}]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3支持组件使用usetemplateref来引用ref.md"}');export{u as comp,c as data};
