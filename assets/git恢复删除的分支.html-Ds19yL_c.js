import{_ as n,c as s,f as i,o as a}from"./app-BB_BIQV8.js";const t={};function l(r,e){return a(),s("div",null,e[0]||(e[0]=[i(`<p>git恢复删除的分支:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ git remote show origin</span>
<span class="line"></span>
<span class="line">Remote branches:</span>
<span class="line">    dev                            tracked</span>
<span class="line">    docs                           tracked</span>
<span class="line">    m_guoshipeng                   tracked</span>
<span class="line">    master                         tracked</span>
<span class="line">    refs/remotes/origin/guoshipeng stale (use &#39;git remote prune&#39; to remove)</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">发现我的远程分支，处于上面这个状态，说明远程我的分支被删除了,但是记录还在，执行 git remote prune origin 就会把这个记录删除，但是本地还是有这个分支的代码，执行 git branch -d [分支名称] 就可以删除。</span>
<span class="line">我的分支被删除，可能是因为之前merge 到 master的时候，选择了 merge 之后删除源代码的选项。</span>
<span class="line">遇到这种情况，如果自己的分支还要继续使用，那么就不要执行git remote prune origin，而是在本地代码做一个小的改动，然后提交，那么会在远程自动创建一个新的 guoshipeng 分支。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(t,[["render",l],["__file","git恢复删除的分支.html.vue"]]),p=JSON.parse('{"path":"/content/other/git/git%E6%81%A2%E5%A4%8D%E5%88%A0%E9%99%A4%E7%9A%84%E5%88%86%E6%94%AF.html","title":"git恢复删除的分支","lang":"en-US","frontmatter":{"sidebar":false,"title":"git恢复删除的分支","description":"git恢复删除的分支"},"headers":[],"git":{},"filePathRelative":"content/other/git/git恢复删除的分支.md"}');export{d as comp,p as data};
