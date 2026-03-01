import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>symfony之twig模板:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 Twig 模板语法中,{%- -%}中的 - 是用来去除前后多余的空白字符(包括空格、制表符和换行符)的语法。具体来说:</span>
<span class="line"></span>
<span class="line">{%- 表示从该标记开始,去除它前面的所有空白字符,直到遇到第一个非空白字符为止。</span>
<span class="line">-%} 表示从该标记结束,去除它后面的所有空白字符,直到遇到第一个非空白字符为止。</span>
<span class="line">使用这种语法的主要目的是为了减小输出的 HTML/CSS/JS 代码体积,提高加载速度。它经常被用于控制流程语句中,比如{% block %}、{% for %}等,以确保生成的标记不会因为多余的空白字符而影响页面布局。</span>
<span class="line">  </span>
<span class="line">使用:</span>
<span class="line">&lt;div&gt;</span>
<span class="line">    {%- block foo -%}</span>
<span class="line">        &lt;span&gt;foo&lt;/span&gt;&lt;span&gt;bar&lt;/span&gt;</span>
<span class="line">    {%- endblock -%}</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">上面代码中的{%- block foo -%}\`\`{%- endblock -%}就去除了块前后的所有空白字符,确保输出时&lt;span&gt;元素之间没有多余空格。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",t],["__file","symfony之twig模板.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Btwig%E6%A8%A1%E6%9D%BF.html","title":"symfony之twig模板","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之twig模板","description":"symfony之twig模板"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之twig模板.md"}');export{p as comp,r as data};
