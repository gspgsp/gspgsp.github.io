import{_ as s,c as e,d as i,o as a}from"./app-B4P9BclZ.js";const l={};function t(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>git回滚某个文件的方法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.</span>
<span class="line">$ git log ./components/app/form/inputNumber/AppFormInputNumber.vue</span>
<span class="line">commit 006bbb98877ab03bfd024839a6db168300999fbb</span>
<span class="line">Author: Jun Fu &lt;jun.fu@mdpi.com&gt;</span>
<span class="line">Date:   Tue Mar 11 06:30:04 2025 +0000</span>
<span class="line"></span>
<span class="line">    Resolve SCIF-1616 &quot;Fix/ fix 0311&quot;</span>
<span class="line"></span>
<span class="line">commit 905d0957ea4022d2266fabdce7465dc5b0adea4d</span>
<span class="line">Author: guoshipeng &lt;shipeng.guo@mdpi.com&gt;</span>
<span class="line">Date:   Fri Feb 28 12:26:29 2025 +0800</span>
<span class="line"></span>
<span class="line">    fix: ticket problem</span>
<span class="line"></span>
<span class="line">2.</span>
<span class="line">$ git checkout 905d0957ea4022d2266fabdce7465dc5b0adea4d ./components/app/form/inputNumber/AppFormInputNumber.vue</span>
<span class="line">Updated 1 path from abbc66fd</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">参考:</span>
<span class="line">场景1：修改了文件/path/to/file，没有提交，但是觉得改的不好，想还原。</span>
<span class="line">解决：</span>
<span class="line">git checkout /path/to/file</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">场景2：修改了文件/path/to/file，已经提交，但是觉得改的不好，想还原到指定版本。</span>
<span class="line">解决：</span>
<span class="line">1. 首先查看文件的历史版本。git log /path/to/file</span>
<span class="line">2. 找到你想要还原的版本。如</span>
<span class="line">commit 052c0233bcaef35bbf6e6ebd43bfd6a648e3d93b</span>
<span class="line">Author: panww &lt;panww@gmail.com&gt;</span>
<span class="line">Date: Wed Nov 8 11:48:31 2017 +0800</span>
<span class="line">commit modify/path/to/file</span>
<span class="line">3. 将文件还原到你想要还原的版本。$ git checkout \${commit} /path/to/file。即$ git checkout 052c0233bcaef35bbf6e6ebd43bfd6a648e3d93b /path/to/file</span>
<span class="line">4. 这时查看文件，会发现文件已经还原了。（如果没有还原，请刷新再看。）</span>
<span class="line">5. commit、push。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",t],["__file","git回滚某个文件的方法.html.vue"]]),m=JSON.parse('{"path":"/content/other/git/git%E5%9B%9E%E6%BB%9A%E6%9F%90%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E6%96%B9%E6%B3%95.html","title":"git回滚某个文件的方法","lang":"en-US","frontmatter":{"sidebar":false,"title":"git回滚某个文件的方法","head":[["meta",{"name":"title","content":"git回滚某个文件的方法"}],["meta",{"name":"description","content":"git回滚某个文件的方法"}],["meta",{"name":"keywords","content":"gitlab,回滚"}],["meta",{"property":"og:title","content":"git回滚某个文件的方法"}],["meta",{"property":"og:description","content":"git回滚某个文件的方法"}]]},"headers":[],"git":{},"filePathRelative":"content/other/git/git回滚某个文件的方法.md"}');export{p as comp,m as data};
