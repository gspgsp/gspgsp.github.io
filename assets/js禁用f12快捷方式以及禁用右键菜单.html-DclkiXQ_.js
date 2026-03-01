import{_ as s,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(p,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h3 id="js禁用f12快捷方式以及禁用右键菜单" tabindex="-1"><a class="header-anchor" href="#js禁用f12快捷方式以及禁用右键菜单"><span>js禁用f12快捷方式以及禁用右键菜单</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;禁止 F12 示例&lt;/title&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        // 禁用右键菜单</span>
<span class="line">        document.addEventListener(&#39;contextmenu&#39;, e =&gt; e.preventDefault());</span>
<span class="line"></span>
<span class="line">        // 禁用常用开发者工具快捷键</span>
<span class="line">        document.addEventListener(&#39;keydown&#39;, function(e) {</span>
<span class="line">            // F12</span>
<span class="line">            if (e.key === &#39;F12&#39;) e.preventDefault();</span>
<span class="line"></span>
<span class="line">            // Ctrl+Shift+I</span>
<span class="line">            if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; e.key.toUpperCase() === &#39;I&#39;) e.preventDefault();</span>
<span class="line"></span>
<span class="line">            // Ctrl+Shift+C</span>
<span class="line">            if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; e.key.toUpperCase() === &#39;C&#39;) e.preventDefault();</span>
<span class="line"></span>
<span class="line">            // Ctrl+Shift+J</span>
<span class="line">            if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; e.key.toUpperCase() === &#39;J&#39;) e.preventDefault();</span>
<span class="line"></span>
<span class="line">            // Ctrl+U 查看源码</span>
<span class="line">            if (e.ctrlKey &amp;&amp; e.key.toUpperCase() === &#39;U&#39;) e.preventDefault();</span>
<span class="line">        });</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;h1&gt;这是一个示例页面&lt;/h1&gt;</span>
<span class="line">    &lt;p&gt;尝试右键或者按 F12，你会发现被禁止了&lt;/p&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(i,[["render",t],["__file","js禁用f12快捷方式以及禁用右键菜单.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/js%E7%A6%81%E7%94%A8f12%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F%E4%BB%A5%E5%8F%8A%E7%A6%81%E7%94%A8%E5%8F%B3%E9%94%AE%E8%8F%9C%E5%8D%95.html","title":"js禁用f12快捷方式以及禁用右键菜单","lang":"en-US","frontmatter":{"sidebar":false,"title":"js禁用f12快捷方式以及禁用右键菜单","head":[["meta",{"name":"title","content":"js禁用f12快捷方式以及禁用右键菜单"}],["meta",{"name":"description","content":"js禁用f12快捷方式以及禁用右键菜单"}],["meta",{"name":"keywords","content":"禁用f12"}],["meta",{"property":"og:title","content":"js禁用f12快捷方式以及禁用右键菜单"}],["meta",{"property":"og:description","content":"js禁用f12快捷方式以及禁用右键菜单"}]]},"headers":[{"level":3,"title":"js禁用f12快捷方式以及禁用右键菜单","slug":"js禁用f12快捷方式以及禁用右键菜单","link":"#js禁用f12快捷方式以及禁用右键菜单","children":[]}],"git":{},"filePathRelative":"content/front/js/js禁用f12快捷方式以及禁用右键菜单.md"}');export{d as comp,r as data};
