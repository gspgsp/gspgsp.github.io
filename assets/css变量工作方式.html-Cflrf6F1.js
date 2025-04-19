import{_ as n,c as a,d as e,o as t}from"./app-C7j_h9cy.js";const l={};function i(c,s){return t(),a("div",null,s[0]||(s[0]=[e(`<p>css变量工作方式:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">如下样式:</span>
<span class="line">.m-checkbox__control--indeterminate:before {</span>
<span class="line">    --tw-scale-x: 1 !important;</span>
<span class="line">    --tw-scale-y: 1 !important;</span>
<span class="line">    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) </span>
<span class="line">                rotate(var(--tw-rotate)) </span>
<span class="line">                skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) </span>
<span class="line">                scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析: 变量的定义： --tw-scale-x: 1 和 --tw-scale-y: 1 定义了 scaleX 和 scaleY 的默认缩放值为 1，表示没有缩放效果。</p><p>变量的使用： 在 transform 属性中，通过 scaleX(var(--tw-scale-x)) 和 scaleY(var(--tw-scale-y)) 来引用这些变量，并将它们的值应用到 transform 中。 如果需要动态调整缩放比例，可以通过修改这些变量的值（例如通过 JavaScript 或其他 CSS 规则）来实现。</p><p>是的，像 <code>--tw-scale-x</code> 这样的 CSS 变量通常是用来为其他样式属性提供值的，它们的作用类似于“占位符”，方便在不同的地方复用这些值或动态设置它们。</p><hr><h5 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span><strong>优点</strong></span></a></h5><ol><li><p><strong>复用性：</strong><br> 使用变量可以让样式更容易复用或更新。例如，只需要改动变量值，就可以更新所有使用该变量的样式。</p></li><li><p><strong>动态性：</strong><br> CSS 变量支持运行时修改，可以通过 JavaScript 动态改变变量的值。例如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--tw-scale-x&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>响应式设计：</strong><br> 通过配合媒体查询等，可以为变量定义不同的值，从而实现响应式的设计。例如：</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--tw-scale-x</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><h5 id="在-tailwind-css-中的应用" tabindex="-1"><a class="header-anchor" href="#在-tailwind-css-中的应用"><span><strong>在 Tailwind CSS 中的应用</strong></span></a></h5><p>这是 Tailwind CSS 的内部实现机制之一，许多 Tailwind 的功能（如缩放、平移、旋转等）会依赖于这些变量。<br> 例如，当你使用 <code>scale-150</code> 类时，它实际上是修改了 <code>--tw-scale-x</code> 和 <code>--tw-scale-y</code> 的值：</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.scale-150</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--tw-scale-x</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--tw-scale-y</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式，Tailwind 提供了高度灵活的样式生成能力。</p>`,13)]))}const r=n(l,[["render",i],["__file","css变量工作方式.html.vue"]]),o=JSON.parse('{"path":"/content/front/html/css%E5%8F%98%E9%87%8F%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F.html","title":"css变量工作方式","lang":"en-US","frontmatter":{"sidebar":false,"title":"css变量工作方式","head":[["meta",{"name":"title","content":"css变量工作方式"}],["meta",{"name":"description","content":"css变量工作方式"}],["meta",{"name":"keywords","content":"css变量工作方式"}],["meta",{"property":"og:title","content":"css变量工作方式"}],["meta",{"property":"og:description","content":"css变量工作方式"}]]},"headers":[],"git":{},"filePathRelative":"content/front/html/css变量工作方式.md"}');export{r as comp,o as data};
