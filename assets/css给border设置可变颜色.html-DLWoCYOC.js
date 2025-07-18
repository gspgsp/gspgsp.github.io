import{_ as n,c as e,d as a,o as i}from"./app-B4P9BclZ.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>css给border设置可变颜色:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@keyframes borderColorChange {</span>
<span class="line">  0% {</span>
<span class="line">    border-bottom-color: #d0d7de; /* 起始颜色 */</span>
<span class="line">  }</span>
<span class="line">  16% {</span>
<span class="line">    border-bottom-color: #ff6347; /* 16%的时间点 */</span>
<span class="line">  }</span>
<span class="line">  33% {</span>
<span class="line">    border-bottom-color: #32cd32; /* 33%的时间点 */</span>
<span class="line">  }</span>
<span class="line">  50% {</span>
<span class="line">    border-bottom-color: #1e90ff; /* 50%的时间点 */</span>
<span class="line">  }</span>
<span class="line">  66% {</span>
<span class="line">    border-bottom-color: #ff1493; /* 66%的时间点 */</span>
<span class="line">  }</span>
<span class="line">  83% {</span>
<span class="line">    border-bottom-color: #ffcc00; /* 83%的时间点 */</span>
<span class="line">  }</span>
<span class="line">  100% {</span>
<span class="line">    border-bottom-color: #8a2be2; /* 100%的时间点 */</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.bordered-element {</span>
<span class="line">  padding: 20px;</span>
<span class="line">  font-size: 18px;</span>
<span class="line">  border-bottom: 1px solid #d0d7de; //主要是设置这个border的颜色</span>
<span class="line">  animation: borderColorChange 5s infinite;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">0%：动画开始的初始状态。在这里，边框颜色是 #d0d7de（一种淡灰色）。这意味着当动画开始时，元素的 border-bottom 会显示这个颜色。</span>
<span class="line">  </span>
<span class="line">16%：动画执行了 16% 的时间时，边框颜色变为 #ff6347（番茄色）。动画的进度到达 16% 时，边框颜色会从上一个颜色（#d0d7de）变到番茄色。</span>
<span class="line">  </span>
<span class="line">33%：动画执行了 33% 的时间时，边框颜色变为 #32cd32（黄绿色）。</span>
<span class="line">  </span>
<span class="line">50%：动画执行了 50% 的时间时，边框颜色变为 #1e90ff（道奇蓝）。</span>
<span class="line">  </span>
<span class="line">66%：动画执行了 66% 的时间时，边框颜色变为 #ff1493（深粉色）。</span>
<span class="line">  </span>
<span class="line">83%：动画执行了 83% 的时间时，边框颜色变为 #ffcc00（金色）。</span>
<span class="line">  </span>
<span class="line">100%：动画执行了 100% 的时间时，边框颜色变为 #8a2be2（蓝紫色）。这意味着在动画的结束时，边框颜色会变为这个颜色。</span>
<span class="line">  </span>
<span class="line">animation: borderColorChange 5s infinite</span>
<span class="line">这个语句控制了动画的执行方式：</span>
<span class="line">  </span>
<span class="line">borderColorChange：指定应用的动画名称，对应上面定义的 @keyframes 名称。</span>
<span class="line">5s：指定动画的时长是 5 秒，意思是从动画开始到结束，需要 5 秒的时间，所有的颜色变化都会在 5 秒内完成。</span>
<span class="line">infinite：动画会无限次地循环播放。也就是说，动画从头到尾播放一次后，会立即重新开始。</span>
<span class="line">  </span>
<span class="line">总结</span>
<span class="line">百分比：表示动画在指定时长（5秒）内的不同时间点，每个时间点定义了元素的样式（在这个例子中是边框的颜色）。</span>
<span class="line">0% 到 100%：分别代表动画的开始和结束，通过这些时间点，你可以精确地控制元素在动画过程中如何变化。</span>
<span class="line">希望这个解释能帮你更好地理解 @keyframes 中的百分比作用以及如何使用 animation 来控制动画的执行。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const p=n(l,[["render",d],["__file","css给border设置可变颜色.html.vue"]]),v=JSON.parse('{"path":"/content/front/html/css%E7%BB%99border%E8%AE%BE%E7%BD%AE%E5%8F%AF%E5%8F%98%E9%A2%9C%E8%89%B2.html","title":"css给border设置可变颜色","lang":"en-US","frontmatter":{"sidebar":false,"title":"css给border设置可变颜色","description":"css给border设置可变颜色"},"headers":[],"git":{},"filePathRelative":"content/front/html/css给border设置可变颜色.md"}');export{p as comp,v as data};
