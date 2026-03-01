import{_ as e,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function p(t,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h5 id="php之构造函数属性提升" tabindex="-1"><a class="header-anchor" href="#php之构造函数属性提升"><span>php之构造函数属性提升</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public function __construct(</span>
<span class="line">    public readonly ?EmailDto $email,</span>
<span class="line">) {</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">这段代码等效为:</span>
<span class="line">public readonly ?EmailDto $email;</span>
<span class="line"></span>
<span class="line">public function __construct(?EmailDto $email)</span>
<span class="line">{</span>
<span class="line">    $this-&gt;email = $email;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">其中 readonly 是php8.1引入的, 使用的是 constructor property promotion（构造函数属性提升）语法</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=e(l,[["render",p],["__file","php之构造函数属性提升.html.vue"]]),d=JSON.parse('{"path":"/content/php/base/php%E4%B9%8B%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%B1%9E%E6%80%A7%E6%8F%90%E5%8D%87.html","title":"php之构造函数属性提升","lang":"en-US","frontmatter":{"sidebar":false,"title":"php之构造函数属性提升","head":[["meta",{"name":"title","content":"php之构造函数属性提升"}],["meta",{"name":"description","content":"php之构造函数属性提升"}],["meta",{"name":"keywords","content":"php"}],["meta",{"property":"og:title","content":"php之构造函数属性提升"}],["meta",{"property":"og:description","content":"php之构造函数属性提升"}]]},"headers":[],"git":{},"filePathRelative":"content/php/base/php之构造函数属性提升.md"}');export{r as comp,d as data};
