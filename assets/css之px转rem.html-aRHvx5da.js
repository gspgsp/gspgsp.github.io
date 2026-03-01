import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(t,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>在nuxt3中使用scss定于全局的计算属性，转rem</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">定义一个common.scss</span>
<span class="line">第一个版本：</span>
<span class="line"></span>
<span class="line">@charset &quot;utf-8&quot;;</span>
<span class="line">$defaultSize: 16px !default;</span>
<span class="line">$font-base: 1rem;</span>
<span class="line">@function rem($px){</span>
<span class="line">  @return $px / $defaultSize * $font-base;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">使用:</span>
<span class="line">&lt;style lang=&quot;scss&quot; scoped&gt;</span>
<span class="line">@import &quot;assets/scss/common.scss&quot;;</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">&lt;/style &gt;</span>
<span class="line"></span>
<span class="line">执行报错：</span>
<span class="line">vite:css] [sass] 40.6875rem/px isn&#39;t a valid CSS value</span>
<span class="line"></span>
<span class="line">修改后的版本:</span>
<span class="line">@charset &quot;utf-8&quot;;</span>
<span class="line">$defaultSize: 16 !default;</span>
<span class="line">$font-base: 1rem;</span>
<span class="line">@function rem($px){</span>
<span class="line">  @return calc($px / $defaultSize * $font-base);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">主要是把这个16px改为16即可</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(i,[["render",c],["__file","css之px转rem.html.vue"]]),r=JSON.parse('{"path":"/content/front/html/css%E4%B9%8Bpx%E8%BD%ACrem.html","title":"css之px转rem","lang":"en-US","frontmatter":{"sidebar":false,"title":"css之px转rem","description":"css之px转rem"},"headers":[],"git":{},"filePathRelative":"content/front/html/css之px转rem.md"}');export{d as comp,r as data};
