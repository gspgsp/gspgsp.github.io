import{_ as s,c as e,f as a,o as t}from"./app-BB_BIQV8.js";const i={};function l(p,n){return t(),e("div",null,n[0]||(n[0]=[a(`<p>问题：又是或需要获取对象信息，但是获取到null 数据，同时会报：<strong>isInitialized</strong>: false问题</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> *解决办法就是再Entity 的属性上加上：fetch=&quot;EAGER 就可以获取到数据了</span>
<span class="line"> * @ORM\\ManyToOne(targetEntity=&quot;App\\Entity\\Event&quot;, inversedBy=&quot;situs&quot;, fetch=&quot;EAGER&quot;)</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token variable">$event</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(i,[["render",l],["__file","symfony5修改Entity的默认lazy属性.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/symfony5%E4%BF%AE%E6%94%B9Entity%E7%9A%84%E9%BB%98%E8%AE%A4lazy%E5%B1%9E%E6%80%A7.html","title":"symfony5修改Entity的默认lazy属性","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony5修改Entity的默认lazy属性","description":"symfony5修改Entity的默认lazy属性"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony5修改Entity的默认lazy属性.md"}');export{c as comp,r as data};
