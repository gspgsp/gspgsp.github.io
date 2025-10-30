import{_ as n,c as l,d as i,o as a}from"./app-CHrRue27.js";const e={};function t(d,s){return a(),l("div",null,s[0]||(s[0]=[i(`<p>tailwindcss自定义css样式覆盖:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">有如下自定义样式:</span>
<span class="line">addUtilities({</span>
<span class="line">        &quot;.all-initial&quot;: { all: &quot;initial&quot; },</span>
<span class="line">        &quot;.all-inherit&quot;: { all: &quot;inherit&quot; },</span>
<span class="line">        &quot;.all-revert&quot;: { all: &quot;revert&quot; },</span>
<span class="line">        &quot;.all-unset&quot;: { all: &quot;unset&quot; },</span>
<span class="line">      });</span>
<span class="line">      </span>
<span class="line">这段代码定义了 4 个新的 CSS 工具类，每个类都对应 CSS all 属性的不同值。</span>
<span class="line">all 属性可以同时作用于所有 CSS 规则（如 color、margin、padding、display 等），避免单独重置多个属性。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">类名	             等效 CSS	       说明</span>
<span class="line">.all-initial    all: initial;       将所有继承和非继承属性重置为默认值（与浏览器的初始样式一致）。</span>
<span class="line">.all-inherit    all: inherit;       让所有属性继承父元素的样式（包括默认不会继承的属性，如 margin）。</span>
<span class="line">.all-revert     all: revert;        让样式回退到浏览器的用户代理样式表或父级的样式规则。</span>
<span class="line">.all-unset      ll:  unset;         对 继承属性（如 color）应用 inherit，对 非继承属性（如 display）应用 initial。</span>
<span class="line"></span>
<span class="line">什么是用户代理（UA）样式表？</span>
<span class="line">用户代理（User Agent）样式表 就是浏览器默认提供的 CSS 规则，比如：</span>
<span class="line">&lt;h1&gt; 默认是 加粗 且 比普通文本大。</span>
<span class="line">&lt;button&gt; 默认有 边框、背景颜色 和 内边距。</span>
<span class="line">&lt;ul&gt; 默认带有 列表项圆点（bullet points）。</span>
<span class="line"></span>
<span class="line">👉 这些默认样式就是浏览器的 UA 样式表 提供的。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;ul&gt;</span>
<span class="line">  &lt;li&gt;默认样式&lt;/li&gt;</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span>
<span class="line">&lt;ul class=&quot;no-style&quot;&gt;</span>
<span class="line">  &lt;li&gt;自定义无样式&lt;/li&gt;</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span>
<span class="line">&lt;ul class=&quot;no-style revert&quot;&gt;</span>
<span class="line">  &lt;li&gt;恢复默认样式&lt;/li&gt;</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span>
<span class="line">.no-style {</span>
<span class="line">  list-style: none;</span>
<span class="line">  padding: 0;</span>
<span class="line">  margin: 0;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.revert {</span>
<span class="line">  all: revert;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">默认样式 → 带 • 圆点</span>
<span class="line">自定义无样式 → 没有 • 圆点</span>
<span class="line">恢复默认样式 → 重新带回 • 圆点</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么时候用 revert？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">撤销项目里写的 CSS，让元素回归浏览器默认的行为。</span>
<span class="line">想要去掉框架样式（比如 Bootstrap、Tailwind 可能会覆盖默认样式）。</span>
<span class="line">想保留继承关系，但又不想用 unset 影响非继承属性</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const p=n(e,[["render",t],["__file","tailwindcss自定义css样式覆盖.html.vue"]]),r=JSON.parse('{"path":"/content/front/html/tailwindcss%E8%87%AA%E5%AE%9A%E4%B9%89css%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96.html","title":"tailwindcss自定义css样式覆盖","lang":"en-US","frontmatter":{"sidebar":false,"title":"tailwindcss自定义css样式覆盖","head":[["meta",{"name":"title","content":"tailwindcss自定义css样式覆盖"}],["meta",{"name":"description","content":"tailwindcss自定义css样式覆盖"}],["meta",{"name":"keywords","content":"tailwindcss,css"}],["meta",{"property":"og:title","content":"tailwindcss自定义css样式覆盖"}],["meta",{"property":"og:description","content":"tailwindcss自定义css样式覆盖"}]]},"headers":[],"git":{},"filePathRelative":"content/front/html/tailwindcss自定义css样式覆盖.md"}');export{p as comp,r as data};
