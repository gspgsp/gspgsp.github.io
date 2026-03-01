import{_ as a,c as t,f as n,o as s}from"./app-BB_BIQV8.js";const i={};function l(d,e){return s(),t("div",null,e[0]||(e[0]=[n(`<h5 id="vee-validate下meta的使用" tabindex="-1"><a class="header-anchor" href="#vee-validate下meta的使用"><span>vee-validate下meta的使用</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const password = useField&lt;string&gt;(&quot;password&quot;);</span>
<span class="line"></span>
<span class="line">const passwordHint = computed(() =&gt; {</span>
<span class="line">  if (password.meta.dirty) {</span>
<span class="line">    return &quot;&quot;;</span>
<span class="line">  }</span>
<span class="line">  return &quot;This should contain 8 to 128 characters with a mix of uppercase letters, lowercase letters and numbers.&quot;;</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">可以通过 password.meta.dirty 来判断 password输入是否发生改变,这两个属性是vee-validate提供的.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=a(i,[["render",l],["__file","vee-validate下meta的使用.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/vee-validate%E4%B8%8Bmeta%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"vee-validate下meta的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"vee-validate下meta的使用","head":[["meta",{"name":"title","content":"vee-validate下meta的使用"}],["meta",{"name":"description","content":"vee-validate下meta的使用"}],["meta",{"name":"keywords","content":"vue3,vee-validate"}],["meta",{"property":"og:title","content":"vee-validate下meta的使用"}],["meta",{"property":"og:description","content":"vee-validate下meta的使用"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vee-validate下meta的使用.md"}');export{c as comp,v as data};
