import{_ as n,c as s,f as i,o as l}from"./app-BB_BIQV8.js";const a={};function t(c,e){return l(),s("div",null,e[0]||(e[0]=[i(`<p>git pull 分支报错 fatal: Need to specify how to reconcile divergent branches...</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">分析：这是由于你拉取pull分支前，进行过merge合并更新分支操作，而其他人在你之前已经push过一个版本，导致版本不一致</span>
<span class="line">第一种解决方法：比较简单</span>
<span class="line"></span>
<span class="line">执行git config pull.rebase false</span>
<span class="line">默认将pull下来的代码与现有改动的代码进行合并</span>
<span class="line">但是可能会造成代码冲突，需要处理下这个问题，代码冲突如果2个人都改了同一个文件，需要联系之前push的同学，看看这块代码怎么保存</span>
<span class="line"></span>
<span class="line">第二种解决方法：回退到合并之前的代码，在进行pull拉取最新代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git pull 语法记录:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git pull &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;</span>
<span class="line">例如执行下面语句：</span>
<span class="line"></span>
<span class="line">git pull origin master:brantest</span>
<span class="line"></span>
<span class="line">将远程主机origin的master分支拉取过来，与本地的brantest分支合并。</span>
<span class="line"></span>
<span class="line">后面的冒号可以省略：</span>
<span class="line"></span>
<span class="line">git pull origin master //这种方式在之前公司里，新手特别喜欢使用</span>
<span class="line"></span>
<span class="line">表示将远程origin主机的master分支拉取过来和本地的当前分支进行合并。</span>
<span class="line"></span>
<span class="line">上面的pull操作用fetch表示为：</span>
<span class="line"></span>
<span class="line">git fetch origin master:brantest</span>
<span class="line"></span>
<span class="line">git merge brantest</span>
<span class="line"></span>
<span class="line">相比起来git fetch更安全一些，因为在merge前，我们可以查看更新情况，然后再决定是否合并。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const r=n(a,[["render",t],["__file","git之pull分支报错fatalNeedToSpecifyHowToReconcileDivergentBranches.html.vue"]]),d=JSON.parse('{"path":"/content/other/git/git%E4%B9%8Bpull%E5%88%86%E6%94%AF%E6%8A%A5%E9%94%99fatalNeedToSpecifyHowToReconcileDivergentBranches.html","title":"git之pull分支报错fatalNeedToSpecifyHowToReconcileDivergentBranches","lang":"en-US","frontmatter":{"sidebar":false,"title":"git之pull分支报错fatalNeedToSpecifyHowToReconcileDivergentBranches","description":"git之pull分支报错fatalNeedToSpecifyHowToReconcileDivergentBranches"},"headers":[],"git":{},"filePathRelative":"content/other/git/git之pull分支报错fatalNeedToSpecifyHowToReconcileDivergentBranches.md"}');export{r as comp,d as data};
