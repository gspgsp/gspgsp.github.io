import{_ as e,c as s,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(d,n){return a(),s("div",null,n[0]||(n[0]=[i(`<p>获取window的宽度的两种方法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">正常情况下两个的值是一样的，但是在做h5屏幕和pc屏幕切换的时候，innerWidth会和实际相等，而screenWidth会小于屏幕大小</span>
<span class="line">let screenWidth = doc.documentElement.clientWidth</span>
<span class="line">  </span>
<span class="line">const { innerWidth, innerHeight } = window</span>
<span class="line">  </span>
<span class="line">我这里在width 为768的时候做了屏幕切换，实际处处结果如下:</span>
<span class="line">ex:</span>
<span class="line">screenWidth: 750 innerWidth: 765</span>
<span class="line">  </span>
<span class="line">适配时的大小指的是分辨率点数</span>
<span class="line">  </span>
<span class="line">分辨率点数和分辨率像素，浏览器调试的时候看的是分辨率点数  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=e(l,[["render",t],["__file","获取window的宽度的两种方法.html.vue"]]),p=JSON.parse('{"path":"/content/front/html/%E8%8E%B7%E5%8F%96window%E7%9A%84%E5%AE%BD%E5%BA%A6%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%B3%95.html","title":"获取window的宽度的两种方法","lang":"en-US","frontmatter":{"sidebar":false,"title":"获取window的宽度的两种方法","description":"获取window的宽度的两种方法"},"headers":[],"git":{},"filePathRelative":"content/front/html/获取window的宽度的两种方法.md"}');export{r as comp,p as data};
