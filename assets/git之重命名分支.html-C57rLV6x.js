import{_ as e,c as s,d as i,o as a}from"./app-CKdWJ1Qk.js";const t={};function l(r,n){return a(),s("div",null,n[0]||(n[0]=[i(`<p>git重命名本地/远程分支</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">①先重命名本地分支</span>
<span class="line">git branch -m &lt;new_name&gt;</span>
<span class="line"></span>
<span class="line">②再删除远程分支，可以不用在本地切换到对应的分支，比如本地是dev, 可以删除远程的dev_feature_1分支</span>
<span class="line">git push origin --delete &lt;old_name&gt;</span>
<span class="line"></span>
<span class="line">③再将本地分支推到远程分支</span>
<span class="line">git push origin -u &lt;new_name&gt;</span>
<span class="line"></span>
<span class="line">④将本地和远程建立关系</span>
<span class="line">git branch --set-upstream-to=origin/&lt;new_name&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=e(t,[["render",l],["__file","git之重命名分支.html.vue"]]),p=JSON.parse('{"path":"/content/other/git/git%E4%B9%8B%E9%87%8D%E5%91%BD%E5%90%8D%E5%88%86%E6%94%AF.html","title":"git之重命名分支","lang":"en-US","frontmatter":{"sidebar":false,"title":"git之重命名分支","description":"git之重命名分支"},"headers":[],"git":{},"filePathRelative":"content/other/git/git之重命名分支.md"}');export{c as comp,p as data};
