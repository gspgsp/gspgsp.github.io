import{_ as s,c as a,d as p,o as e}from"./app-C7j_h9cy.js";const t={};function l(c,n){return e(),a("div",null,n[0]||(n[0]=[p(`<p>php的匿名函数的bindTo()方法<br> 简单来说这个方法主要是修改匿名函数的作用于范围的</p><p>比如:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">A</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$val</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">val</span> <span class="token operator">=</span> <span class="token variable">$val</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function-definition function">getClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//returns closure bound to this object and scope</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">val</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$ob1</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$ob2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$cl</span> <span class="token operator">=</span> <span class="token variable">$ob1</span><span class="token operator">-&gt;</span><span class="token function">getClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$cl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$cl</span> <span class="token operator">=</span> <span class="token variable">$cl</span><span class="token operator">-&gt;</span><span class="token function">bindTo</span><span class="token punctuation">(</span><span class="token variable">$ob2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$cl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token delimiter important">?&gt;</span></span></span>
<span class="line"></span>
<span class="line">会输出:</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const i=s(t,[["render",l],["__file","php之bindTo函数.html.vue"]]),u=JSON.parse('{"path":"/content/php/base/php%E4%B9%8BbindTo%E5%87%BD%E6%95%B0.html","title":"php之bindTo函数","lang":"en-US","frontmatter":{"sidebar":false,"title":"php之bindTo函数","description":"php之bindTo函数"},"headers":[],"git":{},"filePathRelative":"content/php/base/php之bindTo函数.md"}');export{i as comp,u as data};
