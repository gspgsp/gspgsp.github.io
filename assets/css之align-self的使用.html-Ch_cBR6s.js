import{_ as n,c as e,f as i,o as l}from"./app-BB_BIQV8.js";const a={};function t(d,s){return l(),e("div",null,s[0]||(s[0]=[i(`<p>css之align-self的使用:</p><ul><li>在介绍这个之前，有必要重新回顾及各知识点</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cross axis(交叉轴) 和 main axis(主轴) 的关系，如果主轴是x,那么交叉轴就是y; 反过来，如果主轴是y，那么交叉轴就是x,</span>
<span class="line">原文:</span>
<span class="line">The cross axis in flexbox runs perpendicular to the main axis, therefore if your flex-direction is either row or row-reverse then the cross axis runs down the columns.</span>
<span class="line">  </span>
<span class="line">If your main axis is column or column-reverse then the cross axis runs along the rows.</span>
<span class="line">  </span>
<span class="line">参考: https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>align-self的作用</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">align-self CSS属性覆盖grid或flex项目的align-items值。在网格中，它在网格区域内对齐项目。在flexbox中，它在交叉轴上对齐项目。(重点是 覆盖)</span>
<span class="line">  </span>
<span class="line">原文:</span>
<span class="line">The align-self CSS property overrides a grid or flex item&#39;s align-items value. In grid, it aligns the item inside the grid area. In flexbox, it aligns the item on the cross axis.</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>官方使用案例</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.html</span>
<span class="line">&lt;section&gt;</span>
<span class="line">  &lt;div&gt;Item #1&lt;/div&gt;</span>
<span class="line">  &lt;div&gt;Item #2&lt;/div&gt;</span>
<span class="line">  &lt;div&gt;Item #3&lt;/div&gt;</span>
<span class="line">&lt;/section&gt;</span>
<span class="line"></span>
<span class="line">2.css</span>
<span class="line">section {</span>
<span class="line">  display: flex;</span>
<span class="line">  align-items: center;</span>
<span class="line">  height: 120px;</span>
<span class="line">  background: beige;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">div {</span>
<span class="line">  height: 60px;</span>
<span class="line">  background: cyan;</span>
<span class="line">  margin: 5px;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">div:nth-child(3) {</span>
<span class="line">  align-self: stretch;</span>
<span class="line">  background: pink;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">效果就是Item #3 会在section这个box的顶部开始布局，二其它两个则是垂直剧中</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常用属性值(还有其它的，但是我认为不常用)</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">align-self: center; /* Put the item around the center */</span>
<span class="line">align-self: start; /* Put the item at the start */</span>
<span class="line">align-self: end; /* Put the item at the end */</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>特别注意两个特别属性值</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">align-self: auto; // Computes to the parent&#39;s align-items value.</span>
<span class="line">align-self: normal; //For flex items, the keyword behaves as stretch.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const c=n(a,[["render",t],["__file","css之align-self的使用.html.vue"]]),p=JSON.parse('{"path":"/content/front/html/css%E4%B9%8Balign-self%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"css之align-self的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"css之align-self的使用","description":"css之align-self的使用"},"headers":[],"git":{},"filePathRelative":"content/front/html/css之align-self的使用.md"}');export{c as comp,p as data};
