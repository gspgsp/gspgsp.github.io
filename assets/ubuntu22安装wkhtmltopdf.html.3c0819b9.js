import{_ as n,o as e,c as i,g as l}from"./app.d66d8774.js";const d={},t=l(`<p>ubuntu22\u5B89\u88C5wkhtmltopdf:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u9009\u62E9\u7CFB\u7EDF\u5408\u9002\u7248\u672C https://wkhtmltopdf.org/downloads.html

2&gt;\u5B89\u88C5
$ sudo dpkg -i ~/Downloads/wkhtmltox_0.12.6.1-2.jammy_amd64.deb
\u62A5:
dpkg: dependency problems prevent configuration of wkhtmltox:
 wkhtmltox depends on xfonts-75dpi; however:
  Package xfonts-75dpi is not installed
\u89E3\u51B3:
$ sudo apt-get install xfonts-75dpi

\u7248\u672C:
$ wkhtmltopdf --version
wkhtmltopdf 0.12.6.1 (with patched qt)

$ /usr/local/bin/wkhtmltopdf --version //\u9ED8\u8BA4\u5B89\u88C5\u4F4D\u7F6E\u5728/usr/local/bin\u4E0B
wkhtmltopdf 0.12.6.1 (with patched qt)

php\u4E0B\u4F7F\u7528: 
exec(&quot;{$this-&gt;wkhtmltopdf} --image-quality 100 --margin-left 17.5mm --margin-right 17.5mm --margin-top 17.5mm $htmlFile $pdfFile&quot;);
unlink($htmlFile);

\u4F7F\u7528\u53C2\u8003:https://segmentfault.com/a/1190000018988358
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[t];function a(m,v){return e(),i("div",null,s)}var r=n(d,[["render",a],["__file","ubuntu22\u5B89\u88C5wkhtmltopdf.html.vue"]]);export{r as default};
