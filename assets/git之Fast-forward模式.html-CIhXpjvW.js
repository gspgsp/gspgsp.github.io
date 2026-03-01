import{_ as e,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const r={};function t(l,s){return i(),n("div",null,s[0]||(s[0]=[a(`<p>git之Fast-forward模式:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 问题</span>
<span class="line">git merge branch 没有产生新的提交信息，而是直接将 dev branch 的提交信息直接迁移过去。如何才能 merge branch 的时候，产生一次新的提交呢？  </span>
<span class="line"></span>
<span class="line">2. 原因</span>
<span class="line">为什么直接 merge 没有产生一次新的提交呢？</span>
<span class="line">如果我们的祖先分支以 master 为例，再 checkout 一个新的分支（bugfix）后，产生了新的提交，与此同时，其他的开发分支没有往 master 合并新的提交。</span>
<span class="line">这样，新的分支与 master 分支的最新提交历史是共同的祖先。但这种模式下，删除分支后，会丢掉分支信息。</span>
<span class="line">此时，merge bugfix 分支后， master 拥有 bugfix 全部的提交，所以当合并到master 分支后，master 的 HEAD 会直接指向最新的 bugfix 提交历史上。不会产生新的提交。git 采用的模式即称为 fast-forward 模式（快进模式）  </span>
<span class="line"></span>
<span class="line">3. 解决方案</span>
<span class="line">在合并的时候，我们可以禁用 fast-forward 这种合并策略即可。操作指令如下：</span>
<span class="line"># --no-ff 即 no-fast-forward 禁用快进模式</span>
<span class="line">$ git merge --no-ff -m &quot;merge with no-ff&quot; dev  //这里将 dev 分支合并到 master 分支，同时启用 --no-ff 模式，这样就可以在master分支上看到一条新的合并记录</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">git之ort策略:</span>
<span class="line">在实际使用中，查看git log 会发现：merge dev: Merge made by the &#39;ort&#39; strategy，一时不知道这个ort策略是干啥的，所以记录一下</span>
<span class="line">ort 策略是 Git 发布v2.33.0 版本时新增的一种合并策略。</span>
<span class="line">ort 策略实际上是此前 recursive 策略（与之相对的另一种通常是 fast-forward策略）的重构，解决了一些功能问题和性能问题。</span>
<span class="line">GitHub 报告称 merge-ort 能够在有许多文件重命名场景的合并过程中加速超过 500 倍，在一些具有 rebase 操作的情况能加速 9000 倍。总而言之，这个 merge-ort 策略稳定地比现有的合并代码方案更高效。</span>
<span class="line"></span>
<span class="line">原文:</span>
<span class="line">Git 2.33 brings the latest patches around geometric repacking, &quot;merge-ort&quot; as a new merge strategy for handling Git merges across branches, and a number of bitmap-related optimizations. There is also the usual assortment of fixes and smaller items.</span>
<span class="line">Git&#39;s new merge-ort strategy is a scratch rewrite of its recursive strategy but addresses correctness and performance problems. GitHub reports merge-ort can be as much as a &quot;500x&quot; speed-up for large merges with many renames. Merge-ort for merges in a re-base operation can be a speed-up of over 9000x. The new merge-ort should perform consistently faster than the existing merge code.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=e(r,[["render",t],["__file","git之Fast-forward模式.html.vue"]]),o=JSON.parse('{"path":"/content/other/git/git%E4%B9%8BFast-forward%E6%A8%A1%E5%BC%8F.html","title":"git之Fast-forward模式","lang":"en-US","frontmatter":{"sidebar":false,"title":"git之Fast-forward模式","description":"git之Fast-forward模式"},"headers":[],"git":{},"filePathRelative":"content/other/git/git之Fast-forward模式.md"}');export{c as comp,o as data};
