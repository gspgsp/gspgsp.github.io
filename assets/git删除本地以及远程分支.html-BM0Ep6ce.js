import{_ as n,c as s,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(d,e){return a(),s("div",null,e[0]||(e[0]=[i(`<p>git删除本地以及远程分支:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">删除远程分支:</span>
<span class="line">duo@k8s:~/code/test git push origin --delete m_guoshipeng #可以不用在本地切换到对应的分支，比如本地是dev, 可以删除远程的dev_feature_1分支</span>
<span class="line">remote: Sending mail...</span>
<span class="line">remote: ignoring branch delete</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">删除本地分支:</span>
<span class="line">duo@k8s:~/code/test git branch -d m_guoshipeng</span>
<span class="line">error: The branch &#39;m_guoshipeng&#39; is not fully merged.</span>
<span class="line">If you are sure you want to delete it, run &#39;git branch -D m_guoshipeng&#39;.</span>
<span class="line">duo@k8s:~/code/test git branch -D m_guoshipeng</span>
<span class="line">Deleted branch m_guoshipeng (was c0db2e5).</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">两者的区别:</span>
<span class="line">git branch -d 会在删除前检查merge状态（其与上游分支或者与head）。</span>
<span class="line">git branch -D 是git branch --delete --force的简写，它会直接删除。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const c=n(l,[["render",t],["__file","git删除本地以及远程分支.html.vue"]]),p=JSON.parse('{"path":"/content/other/git/git%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E4%BB%A5%E5%8F%8A%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html","title":"git删除本地以及远程分支","lang":"en-US","frontmatter":{"sidebar":false,"title":"git删除本地以及远程分支","description":"git删除本地以及远程分支"},"headers":[],"git":{},"filePathRelative":"content/other/git/git删除本地以及远程分支.md"}');export{c as comp,p as data};
