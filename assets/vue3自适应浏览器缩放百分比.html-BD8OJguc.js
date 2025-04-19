import{_ as s,c as a,d as t,o as p}from"./app-C7j_h9cy.js";const e={};function l(o,n){return p(),a("div",null,n[0]||(n[0]=[t(`<ul><li>在实际项目开发过程中，如果做了div约束或者自适应的话，页面的缩放可能没有问题，但是直接设置为100%的话，页面缩放可能就有问题了 解决办法就是，实时计算页面缩放的百分比，然后将当前div的宽度设置为对应的百分比，代码如下:</li></ul><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>course-list-wrapper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{&#39;width&#39;: courseListWidth}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>course-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">	      <span class="token literal-property property">courseListWidth</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span></span>
<span class="line">	    <span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">windowZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	    window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">windowZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">windowZoom</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	      <span class="token keyword">let</span> ratio <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">	          screen <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">,</span></span>
<span class="line">	          ua <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	      <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	        ratio <span class="token operator">=</span> window<span class="token punctuation">.</span>devicePixelRatio<span class="token punctuation">;</span></span>
<span class="line">	      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">~</span>ua<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;msie&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	        <span class="token keyword">if</span> <span class="token punctuation">(</span>screen<span class="token punctuation">.</span>deviceXDPI <span class="token operator">&amp;&amp;</span> screen<span class="token punctuation">.</span>logicalXDPI<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	          ratio <span class="token operator">=</span> screen<span class="token punctuation">.</span>deviceXDPI <span class="token operator">/</span> screen<span class="token punctuation">.</span>logicalXDPI<span class="token punctuation">;</span></span>
<span class="line">	        <span class="token punctuation">}</span></span>
<span class="line">	      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>outerWidth <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	        ratio <span class="token operator">=</span> window<span class="token punctuation">.</span>outerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span></span>
<span class="line">	      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	      <span class="token keyword">if</span> <span class="token punctuation">(</span>ratio<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	        ratio <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>ratio <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	      <span class="token punctuation">}</span></span>
<span class="line">	      <span class="token keyword">this</span><span class="token punctuation">.</span>courseListWidth <span class="token operator">=</span> ratio<span class="token operator">+</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span></span>
<span class="line">	    <span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关于 window.devicePixelRatio</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Window接口的devicePixelRatio返回当前显示设备的物理像素分辨率与CSS像素分辨率的比率。</span>
<span class="line"></span>
<span class="line">这个值也可以理解为像素大小的比率：一个CSS像素的大小与一个物理像素的大小。更简单地说，这告诉浏览器应该用多少屏幕上的实际像素来绘制一个CSS像素。</span>
<span class="line"></span>
<span class="line">这在处理标准显示器与HiDPI或Retina显示器的渲染差异时非常有用，后者使用更多的屏幕像素来绘制相同的对象，从而使图像更清晰。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const i=s(e,[["render",l],["__file","vue3自适应浏览器缩放百分比.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/vue3%E8%87%AA%E9%80%82%E5%BA%94%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%A9%E6%94%BE%E7%99%BE%E5%88%86%E6%AF%94.html","title":"vue3自适应浏览器缩放百分比","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3自适应浏览器缩放百分比","description":"vue3自适应浏览器缩放百分比"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3自适应浏览器缩放百分比.md"}');export{i as comp,u as data};
