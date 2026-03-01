import{_ as n,c as l,f as e,o as i}from"./app-BB_BIQV8.js";const a={};function c(d,s){return i(),l("div",null,s[0]||(s[0]=[e(`<p>css代码块，之所以起这个名字，是因为有时候在开发过程中会遇到一些写的比较好的代码，就想统一的记在这里:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt; css之flex细节</span>
<span class="line">父级 display: flex, 默认会占用整行，假如子元素只有 120px, 那么如果需要让父元素和子元素占用一样的空间，可以将父级 display: inline-flex</span>
<span class="line">  </span>
<span class="line">// tailwindcss 样式控制</span>
<span class="line">&lt;div</span>
<span class="line">        class=&quot;flex h-[calc(100vh-10rem)] flex-wrap justify-between gap-x-[4.4rem] gap-y-4 overflow-auto px-4 md:h-[calc(100vh-15rem)] md:flex-nowrap&quot;&gt;</span>
<span class="line"></span>
<span class="line">&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">2&gt; text-[1.875rem] 设置字体大小为 1.875rem (30px), 设置行高为 2.4375rem (39px), 在 Tailwind 中,斜杠后面的值用来指定行高</span>
<span class="line">&lt;div class=&quot;!text-[1.875rem]/[2.4375rem] font-semibold&quot;&gt;</span>
<span class="line">        </span>
<span class="line">&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">3&gt; 给ul 下的 li 前设置无序列表符号</span>
<span class="line">ul {</span>
<span class="line">    list-style-type: none;</span>
<span class="line">    padding-left: 1.25rem;</span>
<span class="line">    li::before {</span>
<span class="line">      content: &quot;\\2022&quot;;</span>
<span class="line">      color: black;</span>
<span class="line">      font-weight: bold;</span>
<span class="line">      display: inline-block;</span>
<span class="line">      width: 1em; // 调整圆点和文本之间的距离</span>
<span class="line">      margin-left: -1em; // 这个主要是设置 圆点在1.25rem范围内的位置, 主要是解决圆点想右边挤压文本的问题</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">// tailwindcss写法</span>
<span class="line">.affiliation-box {</span>
<span class="line">  ul {</span>
<span class="line">    @apply pl-5;</span>
<span class="line">    li::before {</span>
<span class="line">      @apply content-[&#39;\\2022&#39;] text-color-default font-semibold inline-block w-4 -ml-4</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">4&gt;html的 details 标签 实现展开收起功能</span>
<span class="line">官方地址: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=n(a,[["render",c],["__file","css代码块.html.vue"]]),v=JSON.parse('{"path":"/content/front/html/css%E4%BB%A3%E7%A0%81%E5%9D%97.html","title":"css代码块","lang":"en-US","frontmatter":{"sidebar":false,"title":"css代码块","description":"css代码块"},"headers":[],"git":{},"filePathRelative":"content/front/html/css代码块.md"}');export{t as comp,v as data};
