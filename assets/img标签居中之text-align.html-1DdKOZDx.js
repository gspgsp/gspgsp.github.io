import{_ as s,c as l,f as i,o as e}from"./app-BB_BIQV8.js";const a={};function t(c,n){return e(),l("div",null,n[0]||(n[0]=[i(`<p>img标签居中之text-align: \`\`\`text\` 重要的一点，需要将img的样式设置:display: inline-block;或者 display: inline;不能设置为display: block; text-align只对文字，行内元素（inline），行内块元素（inline-block）起作用，对块元素（block）不起作用。</p><p>官方文档:https://developer.mozilla.org/en-US/docs/Web/CSS/text-align The text-align CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.</p><p>补充:关于img标签 <img> 是一个可替换元素。它的 display 属性的默认值是 inline，但是它的默认分辨率是由被嵌入的图片的原始宽高来确定的，使得它就像 inline-block 一样。你可以为 <img> 设置 border/border-radius、padding/margin、width、height 等 CSS 属性。</p><p>补充:vertical-align https://www.cnblogs.com/fsg6/p/12711341.html // 这个里面有代码代码可实现 图+文字垂直居中(图片底部空白，可以通过设置父级的font-size：0;解决:https://www.cnblogs.com/goloving/p/8526095.html):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line"></span>
<span class="line">图片文字居中的案例:</span>
<span class="line">\`\`\`html</span>
<span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;Document&lt;/title&gt;</span>
<span class="line"></span>
<span class="line">    &lt;style&gt;</span>
<span class="line"></span>
<span class="line">    .a{</span>
<span class="line">        width: 600px;</span>
<span class="line">        height: 600px;</span>
<span class="line">        background-color: #bfa;</span>
<span class="line">        &lt;-----这里可以设置line-height:600px;使整个页面的内容垂直居中 -----&gt;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    img{</span>
<span class="line">        vertical-align: middle;//是图片设置vertical-align属性，而不是文字</span>
<span class="line">        width: 20%;</span>
<span class="line">        height: 20%;</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div class=&quot;a&quot;&gt;</span>
<span class="line">        &lt;img src=&quot;https://image.helixlife.cn/edu-cn/package/202003/qyuJO6dp2L9gWZwXwVaV1G4698Y73Ua1ptnm3bi4.png&quot; alt=&quot;&quot;&gt;</span>
<span class="line">    	&lt;span&gt;nioifhiughi&lt;/span&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在线运行css+html平台: https://developer.mozilla.org/en-US/play</p>`,6)]))}const p=s(a,[["render",t],["__file","img标签居中之text-align.html.vue"]]),r=JSON.parse('{"path":"/content/front/html/img%E6%A0%87%E7%AD%BE%E5%B1%85%E4%B8%AD%E4%B9%8Btext-align.html","title":"img标签居中之text-align","lang":"en-US","frontmatter":{"sidebar":false,"title":"img标签居中之text-align","description":"img标签居中之text-align"},"headers":[],"git":{},"filePathRelative":"content/front/html/img标签居中之text-align.md"}');export{p as comp,r as data};
