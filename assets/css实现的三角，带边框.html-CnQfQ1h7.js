import{_ as n,c as a,f as l,o as e}from"./app-BB_BIQV8.js";const i={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<p>css实现的三角，带边框:</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>copy-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>copy-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>copy-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            Copy Link</span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>triangle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>triangle-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">#copy-button{</span>
<span class="line">        display: none;</span>
<span class="line">        color: #000;</span>
<span class="line">        position: absolute;</span>
<span class="line">        left: 50%;</span>
<span class="line">        transform: translateX(-50%);</span>
<span class="line">        bottom: -70px;</span>
<span class="line">        border: none;</span>
<span class="line">        border-radius: 5px;</span>
<span class="line">        box-shadow: 0 0 10px 6px rgb(0 0 0 / 10%);</span>
<span class="line">        z-index: 3;</span>
<span class="line">        background-color: #fff;</span>
<span class="line">}</span>
<span class="line">#copy-link:hover #copy-button{</span>
<span class="line">    display: block;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.copy-box{</span>
<span class="line">    box-sizing: border-box;</span>
<span class="line">    width: 203px;</span>
<span class="line">    height: 37px;</span>
<span class="line">    padding: 8px;</span>
<span class="line">    margin: 10px 14px;</span>
<span class="line">    font-weight: normal;</span>
<span class="line">    border: 1px solid #1a8d8d;</span>
<span class="line">    border-radius: 4px;</span>
<span class="line">    color: #1a8d8d;</span>
<span class="line">    font-size: 14px;</span>
<span class="line">}</span>
<span class="line">.triangle {</span>
<span class="line">    width: 0;</span>
<span class="line">    height: 0;</span>
<span class="line">    border-left: 10px solid transparent;</span>
<span class="line">    border-right: 10px solid transparent;</span>
<span class="line">    border-bottom: 10px solid #cecece;</span>
<span class="line">    position: absolute;</span>
<span class="line">    top: -10px;</span>
<span class="line">    left: 50%;</span>
<span class="line">    transform: translateX(-50%);</span>
<span class="line">}</span>
<span class="line">.triangle-border{</span>
<span class="line">    position: absolute;</span>
<span class="line">    top: -16px;</span>
<span class="line">    left: 50%;</span>
<span class="line">    transform: translate(-50%,0);</span>
<span class="line">    border-left: 8px solid transparent;</span>
<span class="line">    border-right: 8px solid transparent;</span>
<span class="line">    border-top: 8px solid transparent;</span>
<span class="line">    border-bottom: 8px solid #fff;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=n(i,[["render",p],["__file","css实现的三角，带边框.html.vue"]]),d=JSON.parse('{"path":"/content/front/html/css%E5%AE%9E%E7%8E%B0%E7%9A%84%E4%B8%89%E8%A7%92%EF%BC%8C%E5%B8%A6%E8%BE%B9%E6%A1%86.html","title":"css实现的三角，带边框","lang":"en-US","frontmatter":{"sidebar":false,"title":"css实现的三角，带边框","description":"css实现的三角，带边框"},"headers":[],"git":{},"filePathRelative":"content/front/html/css实现的三角，带边框.md"}');export{o as comp,d as data};
