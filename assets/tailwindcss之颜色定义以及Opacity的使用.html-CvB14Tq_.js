import{_ as a,c as n,f as i,o as e}from"./app-BB_BIQV8.js";const l={};function t(c,s){return e(),n("div",null,s[0]||(s[0]=[i(`<p>tailwindcss之颜色定义以及Opacity的使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">自定义颜色</span>
<span class="line">:root{</span>
<span class="line">	 --color-white: 255, 255, 255;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">使用颜色变量:</span>
<span class="line">const withOpacity = (variableName) =&gt;</span>
<span class="line">  \`rgba(var(\${variableName}), &lt;alpha-value&gt;)\`;</span>
<span class="line"></span>
<span class="line">white: withOpacity(&quot;--color-white&quot;),</span>
<span class="line"></span>
<span class="line">说明： the special &lt;alpha-value&gt; placeholder that Tailwind will use to inject the alpha value when using an opacity modifier，实际上就是看这个 white 用在哪里，如果是bg的话，那么 alpha-value 的值就是 bg-opacity-100 (默认是100,也就是1)， 如果是text的话，就是 text-opacity-100，这些在 v2 版本下看的比较清楚. v3 下，默认没有展示这些属性，但是就是这么用的.</span>
<span class="line"></span>
<span class="line">参考: https://tailwindcss.com/docs/customizing-colors#using-css-variables</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=a(l,[["render",t],["__file","tailwindcss之颜色定义以及Opacity的使用.html.vue"]]),r=JSON.parse('{"path":"/content/front/html/tailwindcss%E4%B9%8B%E9%A2%9C%E8%89%B2%E5%AE%9A%E4%B9%89%E4%BB%A5%E5%8F%8AOpacity%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"tailwindcss之颜色定义以及Opacity的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"tailwindcss之颜色定义以及Opacity的使用","description":"tailwindcss之颜色定义以及Opacity的使用"},"headers":[],"git":{},"filePathRelative":"content/front/html/tailwindcss之颜色定义以及Opacity的使用.md"}');export{d as comp,r as data};
