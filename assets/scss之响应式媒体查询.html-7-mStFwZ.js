import{_ as s,c as a,f as e,o as p}from"./app-BB_BIQV8.js";const l={};function i(c,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>scss之自适应媒体查询:</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token comment">//feature.scss</span></span>
<span class="line"><span class="token selector">div </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 10px 0<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token selector">bp-small </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">padding-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">padding-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token selector">bp-medium </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">padding-left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">padding-right</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token selector">bp-large </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">padding-left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">padding-right</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//common.scss:</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">bp-small </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 40em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">bp-medium </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 40.063em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">bp-large </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token atrule"><span class="token rule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 60em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//上面两个scss文件在同级目录下</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码分析:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这段样式和 SCSS 代码使用了响应式设计的思想，根据不同屏幕宽度应用不同的样式。这里使用了 mixin 来定义媒体查询，然后在 div 元素的样式中调用这些 mixin。下面是对代码的分析：</span>
<span class="line"></span>
<span class="line">div { ... }: 这是一个选择器，应用于所有 div 元素。</span>
<span class="line"></span>
<span class="line">text-align: right;: 设置文本在 div 中右对齐。</span>
<span class="line"></span>
<span class="line">margin: 0 0 10px 0;: 设置 div 的上、右、下、左边距为0、0、10px、0。</span>
<span class="line"></span>
<span class="line">嵌套了三个媒体查询 mixin，分别是 bp-small、bp-medium、bp-large。</span>
<span class="line"></span>
<span class="line">@include bp-small { ... }: 当屏幕宽度小于等于40em时，应用以下样式。</span>
<span class="line"></span>
<span class="line">padding-left: 20px;: 在小屏幕上设置左内边距为20px。</span>
<span class="line">padding-right: 20px;: 在小屏幕上设置右内边距为20px。</span>
<span class="line">@include bp-medium { ... }: 当屏幕宽度大于40.063em时，应用以下样式。</span>
<span class="line"></span>
<span class="line">padding-left: 50px;: 在中等屏幕上设置左内边距为50px。</span>
<span class="line">padding-right: 50px;: 在中等屏幕上设置右内边距为50px。</span>
<span class="line">@include bp-large { ... }: 当屏幕宽度大于60em时，应用以下样式。</span>
<span class="line"></span>
<span class="line">padding-left: 50px;: 在大屏幕上设置左内边距为50px。</span>
<span class="line">padding-right: 50px;: 在大屏幕上设置右内边距为50px。</span>
<span class="line">这样的设计使得在不同屏幕尺寸上都能有合适的内边距，提升页面在不同设备上的可读性和用户体验。 mixin 中定义的媒体查询允许在多个地方重用相同的屏幕宽度条件，提高了代码的可维护性。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=s(l,[["render",i],["__file","scss之响应式媒体查询.html.vue"]]),o=JSON.parse('{"path":"/content/front/html/scss%E4%B9%8B%E5%93%8D%E5%BA%94%E5%BC%8F%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2.html","title":"scss之自适应媒体查询","lang":"en-US","frontmatter":{"sidebar":false,"title":"scss之自适应媒体查询","description":"scss之自适应媒体查询"},"headers":[],"git":{},"filePathRelative":"content/front/html/scss之响应式媒体查询.md"}');export{d as comp,o as data};
