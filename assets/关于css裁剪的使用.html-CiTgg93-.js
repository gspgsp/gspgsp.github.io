import{_ as n,c as l,f as i,o as a}from"./app-BB_BIQV8.js";const e={};function c(p,s){return a(),l("div",null,s[0]||(s[0]=[i(`<p>关于css裁剪的使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;clip-path 介绍</span>
<span class="line">clip-path 是一种 CSS 属性，用于定义一个裁剪区域，只显示该区域内的内容，其余部分被裁剪掉，不会显示。</span>
<span class="line">  </span>
<span class="line">作用原理：</span>
<span class="line">它为元素定义了一个裁剪区域（例如矩形、圆形、多边形等）。</span>
<span class="line">只有在这个裁剪区域内部的内容会被渲染。</span>
<span class="line">剩余的部分被隐藏，但仍然存在于 DOM 中。</span>
<span class="line">  </span>
<span class="line">语法:</span>
<span class="line">clip-path: shape;</span>
<span class="line">  </span>
<span class="line">2&gt;举例子</span>
<span class="line">&lt;div class=&quot;example&quot;&gt;&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">.example {</span>
<span class="line">  width: 200px;</span>
<span class="line">  height: 100px;</span>
<span class="line">  background: linear-gradient(90deg, red, blue);</span>
<span class="line">  clip-path: polygon(20% 43%, 80% 43%, 80% 57%, 20% 57%);</span>
<span class="line">  transition: clip-path 0.3s ease;</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">原理解析：</span>
<span class="line">polygon() 定义了一个多边形，顶点的顺序是关键，按顺时针或逆时针连接点定义形状。</span>
<span class="line">坐标值的格式是 x y，分别表示水平（x）和垂直（y）的偏移。</span>
<span class="line">每个坐标点之间用逗号分隔，20% 43% 表示从元素左上角出发，水平偏移 20%，垂直偏移 43%。</span>
<span class="line">这个多边形的定义细节：</span>
<span class="line">第一点 (20% 43%): 多边形从左侧 20%，高度 43% 的点开始。</span>
<span class="line">第二点 (80% 43%): 延伸到右侧 80%，高度仍为 43%。</span>
<span class="line">第三点 (80% 57%): 向下延伸到高度 57%。</span>
<span class="line">第四点 (20% 57%): 左移回到左侧 20%，高度仍为 57%。</span>
<span class="line">这四个点连接起来，就形成了一个宽为 60%（80%-20%），高为 14%（57%-43%）的水平矩形。</span>
<span class="line">  </span>
<span class="line">裁剪后的视觉效果:</span>
<span class="line">元素只显示 clip-path 定义的矩形区域内的部分。</span>
<span class="line">矩形外部的内容会被裁剪掉，像是被一个“模板”遮住。</span>
<span class="line">  </span>
<span class="line">裁剪后的元素大小:</span>
<span class="line">即使元素被 clip-path 裁剪，它的实际布局区域（包括宽度和高度）仍然保留不变。元素的布局大小由 CSS 的 width 和 height（或其内容）决定，与裁剪后的形状无关。裁剪仅改变渲染效果，不会改变元素在文档流中的尺寸或占位。</span>
<span class="line">  </span>
<span class="line">3&gt;使用这个创建svg图片</span>
<span class="line">&lt;svg width=&quot;200&quot; height=&quot;100&quot;&gt;</span>
<span class="line">      &lt;defs&gt;</span>
<span class="line">        &lt;clipPath id=&quot;clip&quot;&gt;</span>
<span class="line">          &lt;polygon points=&quot;100,0 200,50 100,100 0,50&quot; /&gt;</span>
<span class="line">        &lt;/clipPath&gt;</span>
<span class="line">      &lt;/defs&gt;</span>
<span class="line">      &lt;rect width=&quot;200&quot; height=&quot;100&quot; fill=&quot;red&quot; clip-path=&quot;url(#clip)&quot; /&gt;</span>
<span class="line">    &lt;/svg&gt;</span>
<span class="line"></span>
<span class="line">这里：</span>
<span class="line">&lt;rect&gt; 标签：</span>
<span class="line">定义了一个宽为 200px、高为 100px 的矩形。</span>
<span class="line">fill=&quot;red&quot; 指定矩形的填充颜色为红色。</span>
<span class="line">  </span>
<span class="line">这个其实是定义了裁剪的外部区域，而不是以svg的width 和 height定义的，也可以设置 &lt;rect width=&quot;100&quot; height=&quot;50&quot; fill=&quot;red&quot; clip-path=&quot;url(#clip)&quot; /&gt;，就会发现另一种效果. 但是一般会和svg设置相同的width和height。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=n(e,[["render",c],["__file","关于css裁剪的使用.html.vue"]]),v=JSON.parse('{"path":"/content/front/html/%E5%85%B3%E4%BA%8Ecss%E8%A3%81%E5%89%AA%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"关于css裁剪的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于css裁剪的使用","description":"关于css裁剪的使用"},"headers":[],"git":{},"filePathRelative":"content/front/html/关于css裁剪的使用.md"}');export{t as comp,v as data};
