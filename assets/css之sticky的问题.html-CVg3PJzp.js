import{_ as i,c as a,f as l,b as n,h as t,o as c}from"./app-BB_BIQV8.js";const o={},d=["src"];function r(e,s){return c(),a("div",null,[s[1]||(s[1]=l(`<p>css之sticky的问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">粘性容器 —— 是包装粘性元素的 HTML 元素。 这是粘性元素可以浮动的最大区域。</span>
<span class="line">当你定义一个具有 position:sticky 样式的元素时，具有滚动属性[简单来讲，就是出现滚动条的那个]的最近的父元素会被自动定义为粘性容器！</span>
<span class="line">记住这一点非常重要！ 容器是粘性元素的范围，并且该元素无法离开其所在的粘性容器。</span>
<span class="line">  </span>
<span class="line">根据官网的解释：</span>
<span class="line">The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements.</span>
<span class="line"></span>
<span class="line">This value always creates a new stacking context. Note that a sticky element &quot;sticks&quot; to its nearest ancestor that has a &quot;scrolling mechanism&quot; (created when overflow is hidden, scroll, auto, or overlay), even if that ancestor isn&#39;t the nearest actually scrolling ancestor.</span>
<span class="line"></span>
<span class="line">翻译过来就是：</span>
<span class="line">该元素根据文档的正常流程定位，然后根据顶部、右侧、底部和左侧的值，相对于其最近的滚动祖先和包含块（最近的块级祖先）进行偏移，包括与表格相关的元素。偏移不会影响任何其他元素的位置。</span>
<span class="line"></span>
<span class="line">该值始终会创建一个新的堆叠上下文。请注意，粘性元素会 &quot;粘附 &quot;到离它最近的、具有 &quot;滚动机制&quot;（在溢出为隐藏、滚动、自动或叠加时创建）的祖先上，即使该祖先不是离它最近的、实际滚动的祖先。</span>
<span class="line">  </span>
<span class="line">结论就是: 滚动祖先(大于等于三层结构)：overflow必须不能是visible; 但是有一种情况就是  sticky 外的直接父元素的overflow必须要设置为visible,设置成其它值会让sticky失效</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">补充:overflow 默认值是 visible</span>
<span class="line"></span>
<span class="line">为便于理解粘性定位，这里引入四个元素：视口元素，容器元素，粘性约束元素 和 sticky 元素。它们的关系如下：</span>
<span class="line">1.视口元素：显示内容的区域。会设置宽，高。一般会设置 overflow:hidden。</span>
<span class="line">2.容器元素：离 sticky 元素最近的能滚动的祖先元素。</span>
<span class="line">3.粘性约束元素：粘性定位的父元素。有时，也会出现粘性约束元素就是容器元素的情况。</span>
<span class="line">4.sticky 元素：设置了 position: sticky; 的元素。</span>
<span class="line">  </span>
<span class="line">滚动时，sticky 元素设置的 left, right, top, bottom 的值相对的是容器元素。当粘性约束元素滚出视口时，sticky 元素也会滚出视口。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("p",null,[s[0]||(s[0]=t("图解如下: ")),n("img",{src:e.$withBase("/images/front/css/sticky.png"),style:{width:"100%"}},null,8,d)]),s[2]||(s[2]=n("p",null,"参考链接：https://www.qinglite.cn/doc/45946476585e34db9 // 这里面的那张图很经典 , 同时这个网站参考",-1))])}const v=i(o,[["render",r],["__file","css之sticky的问题.html.vue"]]),m=JSON.parse('{"path":"/content/front/html/css%E4%B9%8Bsticky%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"css之sticky的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"css之sticky的问题","description":"css之sticky的问题"},"headers":[],"git":{},"filePathRelative":"content/front/html/css之sticky的问题.md"}');export{v as comp,m as data};
