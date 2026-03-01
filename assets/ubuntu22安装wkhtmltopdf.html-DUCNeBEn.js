import{_ as s,c as l,f as e,o as a}from"./app-BB_BIQV8.js";const i={};function t(d,n){return a(),l("div",null,n[0]||(n[0]=[e(`<p>ubuntu22安装wkhtmltopdf:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;选择系统合适版本 https://wkhtmltopdf.org/downloads.html</span>
<span class="line"></span>
<span class="line">2&gt;安装</span>
<span class="line">$ sudo dpkg -i ~/Downloads/wkhtmltox_0.12.6.1-2.jammy_amd64.deb</span>
<span class="line">报:</span>
<span class="line">dpkg: dependency problems prevent configuration of wkhtmltox:</span>
<span class="line"> wkhtmltox depends on xfonts-75dpi; however:</span>
<span class="line">  Package xfonts-75dpi is not installed</span>
<span class="line">解决:</span>
<span class="line">$ sudo apt-get install xfonts-75dpi</span>
<span class="line"></span>
<span class="line">版本:</span>
<span class="line">$ wkhtmltopdf --version</span>
<span class="line">wkhtmltopdf 0.12.6.1 (with patched qt)</span>
<span class="line"></span>
<span class="line">$ /usr/local/bin/wkhtmltopdf --version //默认安装位置在/usr/local/bin下</span>
<span class="line">wkhtmltopdf 0.12.6.1 (with patched qt)</span>
<span class="line"></span>
<span class="line">php下使用: </span>
<span class="line">exec(&quot;{$this-&gt;wkhtmltopdf} --image-quality 100 --margin-left 17.5mm --margin-right 17.5mm --margin-top 17.5mm $htmlFile $pdfFile&quot;);</span>
<span class="line">unlink($htmlFile);</span>
<span class="line"></span>
<span class="line">使用参考:https://segmentfault.com/a/1190000018988358</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(i,[["render",t],["__file","ubuntu22安装wkhtmltopdf.html.vue"]]),m=JSON.parse('{"path":"/content/tool/back/ubuntu22%E5%AE%89%E8%A3%85wkhtmltopdf.html","title":"ubuntu22安装wkhtmltopdf","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu22安装wkhtmltopdf","description":"ubuntu22安装wkhtmltopdf"},"headers":[],"git":{},"filePathRelative":"content/tool/back/ubuntu22安装wkhtmltopdf.md"}');export{c as comp,m as data};
