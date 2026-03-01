import{_ as n,c as a,f as l,o as i}from"./app-BB_BIQV8.js";const e={};function c(p,s){return i(),a("div",null,s[0]||(s[0]=[l(`<p>当子元素被限定在父元素以内，想要突破父元素的约束，可以按照下面的方式解决</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;AppSeparator class=&quot;-mx-[4.5rem] w-[calc(100%+9rem)]&quot; /&gt;</span>
<span class="line">  </span>
<span class="line">如果只有w属性是不行的,如:</span>
<span class="line">&lt;AppSeparator class=&quot;w-[calc(100%+9rem)]&quot; /&gt;</span>
<span class="line">  </span>
<span class="line">分析:</span>
<span class="line">只使用 w-[calc(100%+144px)] 而不配合负外边距时会发生的情况。让我们更详细地分析一下这种情况：</span>
<span class="line">  </span>
<span class="line">1&gt;默认对齐：</span>
<span class="line">HTML 元素默认是左对齐的。当你增加元素的宽度而不改变其位置时，它会向右扩展。</span>
<span class="line">  </span>
<span class="line">2&gt;宽度计算：</span>
<span class="line">w-[calc(100%+144px)] 使元素宽度等于父元素宽度加上144px。这额外的宽度会全部添加到右侧。</span>
<span class="line">  </span>
<span class="line">3&gt;视觉效果：</span>
<span class="line">左侧：元素的左边缘与父元素的左边缘完全对齐。</span>
<span class="line">右侧：元素的右边缘会超出父元素右边缘144px。</span>
<span class="line">  </span>
<span class="line">4&gt;潜在问题：</span>
<span class="line">可能导致水平滚动条出现。</span>
<span class="line">可能干扰页面上其他元素的布局。</span>
<span class="line">右侧内容可能被截断或隐藏，取决于父元素的 overflow 属性设置。</span>
<span class="line">  </span>
<span class="line">要实现两侧均匀扩展的效果，我们需要配合使用负外边距：</span>
<span class="line">class=&quot;w-[calc(100%+144px)] -mx-[72px]&quot;</span>
<span class="line">  </span>
<span class="line">这个组合做到了：</span>
<span class="line">1&gt;增加总宽度（通过 w-[calc(100%+144px)]）</span>
<span class="line">2&gt;向左移动72px（通过 -mx-[72px] 的左侧负外边距）</span>
<span class="line">3&gt;向右扩展72px（通过宽度增加和右侧负外边距的组合效果）</span>
<span class="line">  </span>
<span class="line">结果是元素看起来向两侧各扩展了72px，同时保持了中心对齐。</span>
<span class="line">  </span>
<span class="line">注意:只使用 -ml-[72px] 也可以解决问题，但是为了方便维护代码，还是左右两边都加.与 -ml-[4.5rem] 的对比：</span>
<span class="line">负左外边距会直接影响元素的位置，使其向左移动。</span>
<span class="line">负右外边距通常不会改变元素的位置，除非有特定的布局情况</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const v=n(e,[["render",c],["__file","css之负边距的使用.html.vue"]]),r=JSON.parse('{"path":"/content/front/html/css%E4%B9%8B%E8%B4%9F%E8%BE%B9%E8%B7%9D%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"css之负边距的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"css之负边距的使用","description":"css之负边距的使用"},"headers":[],"git":{},"filePathRelative":"content/front/html/css之负边距的使用.md"}');export{v as comp,r as data};
