import{_ as n,c as i,f as s,o as a}from"./app-BB_BIQV8.js";const t={};function r(l,e){return a(),i("div",null,e[0]||(e[0]=[s(`<h2 id="git-冲突问题" tabindex="-1"><a class="header-anchor" href="#git-冲突问题"><span>git 冲突问题</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ git merge origin/scif-2761_builder_organizer</span>
<span class="line">Auto-merging src/Controller/Api/WebsiteBuilder/Organizer/OrganizerCategoryController.php</span>
<span class="line">CONFLICT (add/add): Merge conflict in src/Controller/Api/WebsiteBuilder/Organizer/OrganizerCategoryController.php</span>
<span class="line">Auto-merging src/Repository/EventOrganizerCategoryRepository.php</span>
<span class="line">CONFLICT (content): Merge conflict in src/Repository/EventOrganizerCategoryRepository.php</span>
<span class="line">Auto-merging src/Service/WebsiteBuilder/Organizer/OrganizerCategoryService.php</span>
<span class="line">CONFLICT (content): Merge conflict in src/Service/WebsiteBuilder/Organizer/OrganizerCategoryService.php</span>
<span class="line">Automatic merge failed; fix conflicts and then commit the result.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看git状态" tabindex="-1"><a class="header-anchor" href="#查看git状态"><span>查看git状态</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ git status</span>
<span class="line">On branch scif-3529_update-organizer-category</span>
<span class="line">Your branch is up to date with &#39;origin/scif-3529_update-organizer-category&#39;.</span>
<span class="line"></span>
<span class="line">All conflicts fixed but you are still merging.</span>
<span class="line">(use &quot;git commit&quot; to conclude merge)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动执行-git-commit" tabindex="-1"><a class="header-anchor" href="#手动执行-git-commit"><span>手动执行 <code>git commit</code></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ git commit (执行这个之前根据实际需要，看是否需要执行 git add .  大部分时间不用，因为文件基本上都在git追踪里，除非新建了文件)</span>
<span class="line">[scif-3529_update-organizer-category af9f1dd0] Merge remote-tracking branch &#39;origin/scif-2761_builder_organizer&#39; into scif-3529_update-organizer-category</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动执行-git-push" tabindex="-1"><a class="header-anchor" href="#手动执行-git-push"><span>手动执行 <code>git push</code></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ git push</span>
<span class="line">Enumerating objects: 1, done.</span>
<span class="line">Counting objects: 100% (1/1), done.</span>
<span class="line">Writing objects: 100% (1/1), 275 bytes | 275.00 KiB/s, done.</span>
<span class="line">Total 1 (delta 0), reused 0 (delta 0), pack-reused 0</span>
<span class="line">remote:</span>
<span class="line">remote: View merge request for scif-3529_update-organizer-category:</span>
<span class="line">remote:   https://gitlab.mdpi.com:8081/dev/sciforum-backend-v2/-/merge_requests/1576</span>
<span class="line">remote:</span>
<span class="line">remote: update project</span>
<span class="line">remote: Updating branch sciforum-backend-v2@scif-3529_update-organizer-category</span>
<span class="line">remote: Loading git hook: /var/www/gitlab-hooks/hooks/sciforum-backend-v2.sh</span>
<span class="line">remote: Warning: Permanently added &#39;[gitlab.mdpi.com]:9922&#39; (ED25519) to the list of known hosts.</span>
<span class="line">remote: From ssh://gitlab.mdpi.com:9922/dev/sciforum-backend-v2</span>
<span class="line">remote:  * branch              scif-3529_update-organizer-category -&gt; FETCH_HEAD</span>
<span class="line">remote:    7cbd28e4..af9f1dd0  scif-3529_update-organizer-category -&gt; origin/scif-3529_update-organizer-category</span>
<span class="line">remote: Updating 7cbd28e4..af9f1dd0</span>
<span class="line">remote: Fast-forward</span>
<span class="line">remote: Run npm install or composer install here, branch: scif-3529_update-organizer-category.</span>
<span class="line">To ssh://gitlab.mdpi.com:9922/dev/sciforum-backend-v2.git</span>
<span class="line">7cbd28e4..af9f1dd0  scif-3529_update-organizer-category -&gt; scif-3529_update-organizer-category</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个过程的问题是:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git merge 之后 不能通过编辑器操作 只能手动 commit 和 push，这就是 PHPStorm 在 Git merge 状态下的一个已知限制</span>
<span class="line"></span>
<span class="line">当 Git 处于 merge 状态（还没完成 merge）时：</span>
<span class="line">PHPStorm 的 Commit 界面识别不了文件改动</span>
<span class="line">无法通过编辑器的 UI 完成 commit 和 push</span>
<span class="line">必须回到命令行手动操作</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我以为是我merge的有问题，其实不是的，太坑了.</p></blockquote>`,11)]))}const d=n(t,[["render",r],["__file","phpstorm下git操作问题.html.vue"]]),o=JSON.parse('{"path":"/content/other/git/phpstorm%E4%B8%8Bgit%E6%93%8D%E4%BD%9C%E9%97%AE%E9%A2%98.html","title":"phpstorm下git操作问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"phpstorm下git操作问题","head":[["meta",{"name":"title","content":"phpstorm下git操作问题"}],["meta",{"name":"description","content":"phpstorm下git操作问题"}],["meta",{"name":"keywords","content":"git,phpstorm"}],["meta",{"property":"og:title","content":"phpstorm下git操作问题"}],["meta",{"property":"og:description","content":"phpstorm下git操作问题"}]]},"headers":[{"level":2,"title":"git 冲突问题","slug":"git-冲突问题","link":"#git-冲突问题","children":[]},{"level":2,"title":"查看git状态","slug":"查看git状态","link":"#查看git状态","children":[]},{"level":2,"title":"手动执行 git commit","slug":"手动执行-git-commit","link":"#手动执行-git-commit","children":[]},{"level":2,"title":"手动执行 git push","slug":"手动执行-git-push","link":"#手动执行-git-push","children":[]}],"git":{},"filePathRelative":"content/other/git/phpstorm下git操作问题.md"}');export{d as comp,o as data};
