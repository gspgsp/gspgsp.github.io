import{_ as s,c as n,d as a,o as i}from"./app-C7j_h9cy.js";const l={};function t(c,e){return i(),n("div",null,e[0]||(e[0]=[a(`<p>关于git的reset无效的场景:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">关于 git reset --hard HEAD^ 无效的一种场景:</span>
<span class="line">commit a5e7e31afcef015ee0d26e714a9233e8a450a42b (HEAD -&gt; feat/HUIYI-1156_base-feature-event-settings-registration, origin/feat/HUIYI-1156_base-feature-event-settings-registration)</span>
<span class="line">Merge: b9acf56a 2c3e3942</span>
<span class="line">Author: guoshipeng &lt;shipeng.guo@qinhong.com&gt;</span>
<span class="line">Date:   Thu Nov 28 13:40:32 2024 +0800</span>
<span class="line"></span>
<span class="line">    fix(): merge conflict</span>
<span class="line"></span>
<span class="line">commit 2c3e394267c2a55c3aca2bdc87509d20ed1932a0 (origin/version_1_0_0, version_1_0_0)</span>
<span class="line">Author: Shipeng Guo &lt;shipeng.guo@qinhong.com&gt;</span>
<span class="line">Date:   Thu Nov 28 03:34:14 2024 +0000</span>
<span class="line"></span>
<span class="line">    Resolve HUIYI-1494 &quot;Feat/ update mui version&quot;</span>
<span class="line"></span>
<span class="line">commit 3b678c619b9ce372a7ec4d944be6562144c96271</span>
<span class="line">Author: Yaqi Deng &lt;yaqi.deng@qinhong.com&gt;</span>
<span class="line">Date:   Tue Nov 26 13:17:33 2024 +0800</span>
<span class="line"></span>
<span class="line">    feat: HUIYI-1288 add presentation video settings</span>
<span class="line"></span>
<span class="line">commit b9acf56a23962c2c7cc6baea003a8c5c021545d3</span>
<span class="line">Author: Shipeng Guo &lt;shipeng.guo@qinhong.com&gt;</span>
<span class="line">Date:   Thu Nov 28 01:48:55 2024 +0000</span>
<span class="line"></span>
<span class="line">    Resolve HUIYI-1206 &quot;Feat/ registration tickets&quot;</span>
<span class="line">  </span>
<span class="line">分析:</span>
<span class="line">commit a5e7e31afcef015ee0d26e714a9233e8a450a42b (HEAD -&gt; feat/HUIYI-1156_base-feature-event-settings-registration, origin/feat/HUIYI-1156_base-feature-event-settings-registration)</span>
<span class="line">Merge: b9acf56a 2c3e3942</span>
<span class="line">  </span>
<span class="line">从提供的 Git 提交记录：</span>
<span class="line">  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>commit a5e7e31afcef015ee0d26e714a9233e8a450a42b (HEAD -&gt; feat/HUIYI-1156_base-feature-event-settings-registration, origin/feat/HUIYI-1156_base-feature-event-settings-registration) Merge: b9acf56a 2c3e3942</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">我们可以解析出以下信息：</span>
<span class="line">  </span>
<span class="line">### 1. **当前的 \`HEAD\`**</span>
<span class="line">- \`HEAD -&gt; feat/HUIYI-1156_base-feature-event-settings-registration\`：</span>
<span class="line">  - \`HEAD\` 指向的是 \`feat/HUIYI-1156_base-feature-event-settings-registration\` 分支。</span>
<span class="line">  - 这个分支当前处于提交 \`a5e7e31afcef015ee0d26e714a9233e8a450a42b\`，并且是 \`origin/feat/HUIYI-1156_base-feature-event-settings-registration\`（即远程分支）的当前状态。</span>
<span class="line">  </span>
<span class="line">### 2. **合并提交（Merge Commit）**</span>
<span class="line">- \`Merge: b9acf56a 2c3e3942\`：</span>
<span class="line">  - 这表明 \`a5e7e31afcef015ee0d26e714a9233e8a450a42b\` 是一个 **合并提交**（merge commit），它有两个父提交：</span>
<span class="line">    - 第一个父提交是 \`b9acf56a23962c2c7cc6baea003a8c5c021545d3\`，这是一个之前的提交，可能来自分支 \`feat/HUIYI-1156_base-feature-event-settings-registration\`。</span>
<span class="line">    - 第二个父提交是 \`2c3e394267c2a55c3aca2bdc87509d20ed1932a0\`，这可能来自另一分支（如 \`version_1_0_0\`）或是被合并的分支。</span>
<span class="line">  </span>
<span class="line">### 3. **远程和本地分支**</span>
<span class="line">- \`origin/feat/HUIYI-1156_base-feature-event-settings-registration\` 表示远程仓库的 \`feat/HUIYI-1156_base-feature-event-settings-registration\` 分支，指向同一个提交（\`a5e7e31afcef015ee0d26e714a9233e8a450a42b\`）。</span>
<span class="line">- \`HEAD\` 指向本地分支 \`feat/HUIYI-1156_base-feature-event-settings-registration\`，这表明你正在该分支上工作。</span>
<span class="line">  </span>
<span class="line">### 结论</span>
<span class="line">- 当前的 \`HEAD\` 指向 \`feat/HUIYI-1156_base-feature-event-settings-registration\` 分支的合并提交 \`a5e7e31afcef015ee0d26e714a9233e8a450a42b\`。</span>
<span class="line">- 合并提交有两个父提交：\`b9acf56a23962c2c7cc6baea003a8c5c021545d3\` 和 \`2c3e394267c2a55c3aca2bdc87509d20ed1932a0\`。</span>
<span class="line">  </span>
<span class="line">为什么 git reset --hard HEAD^ 可能无效</span>
<span class="line">合并提交有多个父提交：当你执行 git merge 时，它会生成一个合并提交，该提交通常有两个父提交。在这种情况下，HEAD^ 只会回退到合并提交的第一个父提交，而不是你希望回退到的版本。</span>
<span class="line">回退到更早的提交：如果你想回到合并操作之前的状态，并且合并提交的第一个父提交已经包含了许多更早的提交，HEAD^ 可能会把你带到一个意外的提交，而不是直接回到你预期的版本。</span>
<span class="line">  </span>
<span class="line">解决办法明确指定你希望回退到的提交哈希值，通过 git reset --hard &lt;commit-hash&gt; 来回退到正确的提交。git log --oneline 查看完整的hash值。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=s(l,[["render",t],["__file","关于git的reset无效的场景.html.vue"]]),v=JSON.parse('{"path":"/content/other/git/%E5%85%B3%E4%BA%8Egit%E7%9A%84reset%E6%97%A0%E6%95%88%E7%9A%84%E5%9C%BA%E6%99%AF.html","title":"关于git的reset无效的场景","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于git的reset无效的场景","description":"关于git的reset无效的场景"},"headers":[],"git":{},"filePathRelative":"content/other/git/关于git的reset无效的场景.md"}');export{d as comp,v as data};
