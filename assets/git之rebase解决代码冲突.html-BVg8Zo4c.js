import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>开发过程中经常要进行代码的合并，然而合并的时候会有冲突，下面通过rebase实现冲突的解决，这个目前是最好的方式:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git rebase 解决分支冲突的操作[适用于很多分支，很多功能一起开发的场景，前提是在已经知道有冲突的情况下，通过这种方式解决冲突，比如 gitlab下新增了merge request]</span>
<span class="line">k8s@root:~/code/sciforum.net$ git rebase origin/dev</span>
<span class="line">fatal: It seems that there is already a rebase-merge directory, and</span>
<span class="line">I wonder if you are in the middle of another rebase.  If that is the</span>
<span class="line">case, please try</span>
<span class="line">        git rebase (--continue | --abort | --skip)</span>
<span class="line">If that is not the case, please</span>
<span class="line">        rm -fr &quot;.git/rebase-merge&quot;</span>
<span class="line">and run me again.  I am stopping in case you still have something</span>
<span class="line">valuable there.</span>
<span class="line"></span>
<span class="line">#如果报上面的提示，可能之前执行过rebase,这里我就执行 rm -fr &quot;.git/rebase-merge&quot;，然后再次执行git rebase origin/dev，那么就会提示哪些地方冲突了，直接修改文件，解决冲突</span>
<span class="line"></span>
<span class="line">#当冲突解决完了，直接 [git add .]  然后， git commit -m &#39;fix conflict&#39; [如果是首次提交的话，需要 add， 如果已经将分支推送到远程仓库，那就直接commit]</span>
<span class="line"></span>
<span class="line">k8s@root:~/code/sciforum.net$ git rebase --continue  //必须要执行</span>
<span class="line">dropping 43672c0b5a9a08108cd72e6ea07cf7c6f79047a2 SCIF-211 -- patch contents already upstream</span>
<span class="line">Successfully rebased and updated refs/heads/SCIF-211-t.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">#再执行 git push --force origin &lt;分支名&gt;，[如果你已经将分支推送到远程仓库，并且之后对该分支进行了 git rebase 操作，那么你必须使用 --force 标志来覆盖远程分支上的历史记录。这是因为 rebase 会修改提交历史，不允许通过普通推送来更新远程分支。如果这里不用 forece的话，通过普通的push,可能会报本地和远程对应的分支冲突，需要merge，所以直接forece最好了，因为就是想把本地的应用到对应的远程.]</span>
<span class="line"></span>
<span class="line">#注意事项:</span>
<span class="line">在使用这个命令的过程中，我发现一个问题，有如下场景:</span>
<span class="line">比如说我的代码分值为 tt, 修改了如下内容:</span>
<span class="line">$a = &quot;hello world&quot;,</span>
<span class="line">然后我执行  git rebase origin/dev</span>
<span class="line">然后提示冲突，对比文件发现</span>
<span class="line">左边$a=&quot;say no&quot;,右边为$a=&quot;say yes&quot;,我希望看到的是 左边为我当前的修改 $a=&quot;hello world&quot;,但是现在不是，那就没办法直接进行比对操作</span>
<span class="line"></span>
<span class="line">解决办法是：只能删除&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD和=======之间的行，以及&gt;&gt;&gt;&gt;&gt;&gt;&gt; origin/dev之后的行，然后手动把 $a=&quot;hello world&quot; 写到这个位置</span>
<span class="line"></span>
<span class="line">针对这个问题，我通过Chat-GPT了解到如下内容:</span>
<span class="line">问：</span>
<span class="line">但是就是不明白为什么会出现这种情况，那不是我最新的修改在解决冲突的时候，有被覆盖的风险吗</span>
<span class="line">答：</span>
<span class="line">你的困惑是理解git rebase过程中的冲突解决方式的一个常见问题。在git rebase过程中，Git会将你的本地提交按顺序应用到目标分支（在你的情况下是origin/dev），因此冲突发生时，Git会尝试合并两个不同的更改。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">问：</span>
<span class="line">这句 在git rebase过程中，Git会将你的本地提交按顺序应用到目标分支  其中按顺序是什么意思，为什么不是最新提交呢</span>
<span class="line">答：</span>
<span class="line">在Git中，git rebase命令将会将你的本地提交按照它们的提交顺序（时间顺序）依次应用到目标分支上。这意味着git rebase会从你当前分支的最旧提交开始，然后逐个应用你的本地提交，直到最新的提交。因此，它会按照提交历史中的时间顺序应用这些提交，而不是按照它们在分支上的顺序。</span>
<span class="line"></span>
<span class="line">这个行为的原因是为了确保在目标分支上的提交历史中，你的本地提交按照它们在时间上的顺序排列，以保持提交历史的一致性和可读性。这样，目标分支上的提交历史将会看起来好像你的更改是在最初的基础上按照顺序逐个应用的。</span>
<span class="line"></span>
<span class="line">如果git rebase按照最新提交的顺序应用本地提交，可能会导致一些问题，因为这可能会破坏提交历史的顺序性，使提交历史变得混乱难以理解。</span>
<span class="line"></span>
<span class="line">所以，虽然你的最新提交可能会在git rebase过程中被处理，但它会在其他提交之后。当有冲突时，Git会停下来等待你解决冲突，以确保在合并过程中不会丢失任何信息。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">问：</span>
<span class="line">也就是说 我上面的问题 :</span>
<span class="line">$a = &quot;hello world&quot;,</span>
<span class="line">然后我执行  git rebase origin/dev</span>
<span class="line">然后提示冲突，对比文件发现</span>
<span class="line">左边$a=&quot;say no&quot;,右边为$a=&quot;say yes&quot;</span>
<span class="line"></span>
<span class="line">这个$a=&quot;say no&quot; 是我之前的某一次旧的提交，和dev 冲突了吗，然后 我最新的提交 $a = &quot;hello world&quot;, 还没有被应用</span>
<span class="line"></span>
<span class="line">答：</span>
<span class="line">是的，根据你的描述，$a=&quot;say no&quot; 是你之前的某一次旧的提交，而$a = &quot;hello world&quot; 是你的最新提交。当你执行git rebase origin/dev时，Git 将尝试将你的本地提交按照它们的提交顺序应用到 origin/dev 分支上。</span>
<span class="line"></span>
<span class="line">在这个过程中，Git 首先会尝试应用旧的提交$a=&quot;say no&quot;，然后应用你的最新提交 $a = &quot;hello world&quot;。如果在这两个提交之间存在冲突，Git 会停止重播过程并提示你解决这些冲突。</span>
<span class="line"></span>
<span class="line">所以，$a=&quot;say no&quot; 与 origin/dev 分支上的某些提交冲突，导致了冲突的发生。在冲突解决之前，你的最新提交 $a = &quot;hello world&quot; 尚未被应用到 origin/dev 分支上。你需要手动解决冲突并继续重播过程，以确保你的最新修改被正确地应用到最终的分支状态中。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">其实上面出现的旧代码，并不是我们需要的，实际上我们只需要把最新的版本和目标版本比较就可以了，可以通过下面的方法实现:</span>
<span class="line">执行: $ git rebase -i  origin/dev ， 加上-i参数，会发现如下信息:</span>
<span class="line">pick ee14fc5fa scif-309</span>
<span class="line">pick d53e200e1 scif-309</span>
<span class="line">pick 00dd45cee scif-309</span>
<span class="line">pick 44ba1cb64 scif-309</span>
<span class="line">pick 794e04704 scif-309</span>
<span class="line">pick c8e8284aa scif-309  //这个是最新一次提交的内容</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">我们要选择:pick c8e8284aa scif-309 进行rebase, 需要如下操作:</span>
<span class="line">可以直接编辑,改为</span>
<span class="line">drop ee14fc5fa scif-309</span>
<span class="line">drop d53e200e1 scif-309</span>
<span class="line">drop 00dd45cee scif-309</span>
<span class="line">drop 44ba1cb64 scif-309</span>
<span class="line">drop 794e04704 scif-309</span>
<span class="line">pick c8e8284aa scif-309</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">^G Help          ^O Write Out     ^W Where Is      ^K Cut           ^T Execute       ^C Location      M-U Undo         M-A Set Mark     M-] To Bracket   M-Q Previous     ^B Back          ^◂ Prev Word     ^A Home</span>
<span class="line">^X Exit          ^R Read File     ^\\ Replace       ^U Paste         ^J Justify       ^/ Go To Line    M-E Redo         M-6 Copy         ^Q Where Was     M-W Next         ^F Forward       ^▸ Next Word     ^E End</span>
<span class="line"></span>
<span class="line">然后下面又有这么多命令，我要选择哪个保存呢，选择 ^O Write Out [ctrl+O]即可，当执行了ctrl+O以后，会出现下面的信息:</span>
<span class="line">File Name to Write: /home/k8s/code/sciforum.net/.git/rebase-merge/git-rebase-todo //这里也是可以输入信息的，默认可以不输入，直接点击 Enter 键就可以了 [必须要敲enter]                                                                                                                                      </span>
<span class="line">^G Help                                                   M-D DOS Format                                            M-A Append                                                M-B Backup File</span>
<span class="line">^C Cancel                                                 M-M Mac Format                                            M-P Prepend                                               ^T Browse</span>
<span class="line"></span>
<span class="line">然后再ctrl+X 即可完成当前rebase.</span>
<span class="line"></span>
<span class="line">大概率会出现如下信息, 下面的就是合并[最新的代码]的过程，以及冲突:</span>
<span class="line">Auto-merging src/Controller/Admin/DashboardController.php</span>
<span class="line">Auto-merging src/Entity/Submission.php</span>
<span class="line">CONFLICT (content): Merge conflict in src/Entity/Submission.php</span>
<span class="line">error: could not apply c8e8284aa... scif-309</span>
<span class="line">hint: Resolve all conflicts manually, mark them as resolved with</span>
<span class="line">hint: &quot;git add/rm &lt;conflicted_files&gt;&quot;, then run &quot;git rebase --continue&quot;.</span>
<span class="line">hint: You can instead skip this commit: run &quot;git rebase --skip&quot;.</span>
<span class="line">hint: To abort and get back to the state before &quot;git rebase&quot;, run &quot;git rebase --abort&quot;.</span>
<span class="line">Could not apply c8e8284aa... scif-309</span>
<span class="line"></span>
<span class="line">然后就是手动解决冲突,然后提交，注意这里只用 commit，不要push</span>
<span class="line"></span>
<span class="line">然后再执行:$ git rebase --continue</span>
<span class="line">Successfully rebased and updated refs/heads/SCIF-309-t. //因为我们已经选择了最新的版本，所以这个 continue 不会再继续rebase了，直接给结果</span>
<span class="line"></span>
<span class="line">这样整个冲突就解决完了，最后将当前分支直接覆盖到远程:</span>
<span class="line">$ git push --force origin SCIF-309-t</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="更新-feature-分支-使它基于最新-base-分支-同时整理分支-使用rebase-x-实现" tabindex="-1"><a class="header-anchor" href="#更新-feature-分支-使它基于最新-base-分支-同时整理分支-使用rebase-x-实现"><span>更新 feature 分支，使它基于最新 base 分支， 同时整理分支， 使用rebase -X 实现</span></a></h5><h5 id="🔄-流程解释" tabindex="-1"><a class="header-anchor" href="#🔄-流程解释"><span>🔄 流程解释</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> fetch origin</span>
<span class="line"><span class="token function">git</span> rebase <span class="token parameter variable">-X</span> ours origin/base-branch</span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">--force</span> origin feature-branch</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p><strong><code>git fetch origin</code></strong></p><ul><li>拉取远程仓库最新的提交到本地引用。</li><li>不改动你当前分支，只更新 <code>origin/base-branch</code> 等远程分支信息。</li></ul></li><li><p><strong><code>git rebase -X ours origin/base-branch</code></strong></p><ul><li>把当前分支（<code>feature-branch</code>）的提交 <strong>重新应用在 <code>origin/base-branch</code> 最新提交上</strong>。</li><li><code>-X ours</code>：如果发生冲突，优先保留你的 <code>feature-branch</code> 改动。</li><li>最终结果：你的 feature 分支基于最新的 base 分支，同时保留你的修改。</li></ul></li><li><p><strong><code>git push --force origin feature-branch</code></strong></p><ul><li><p>因为 rebase 改写了提交历史，所以必须强制推送。</p></li><li><p>更新远程 <code>feature-branch</code>，远程 <code>base-branch</code> 不受影响。</p></li><li><p>更安全做法：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> push --force-with-lease origin feature-branch</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>避免意外覆盖别人提交。</p></li></ul></li></ol><h5 id="💡-场景总结" tabindex="-1"><a class="header-anchor" href="#💡-场景总结"><span>💡 场景总结</span></a></h5><ul><li><strong>用途</strong>：保持 feature 分支基于最新 base 分支开发，同时整理提交历史。</li><li><strong>特点</strong>：不会产生 merge commit，提交历史整洁。</li><li><strong>注意事项</strong>： <ul><li>仅适用于个人的 feature 分支，如果多人共用，需要注意强推风险。</li></ul></li></ul>`,9)]))}const p=n(l,[["render",c],["__file","git之rebase解决代码冲突.html.vue"]]),t=JSON.parse('{"path":"/content/other/git/git%E4%B9%8Brebase%E8%A7%A3%E5%86%B3%E4%BB%A3%E7%A0%81%E5%86%B2%E7%AA%81.html","title":"git之rebase解决代码冲突","lang":"en-US","frontmatter":{"sidebar":false,"title":"git之rebase解决代码冲突","description":"git之rebase解决代码冲突"},"headers":[],"git":{},"filePathRelative":"content/other/git/git之rebase解决代码冲突.md"}');export{p as comp,t as data};
