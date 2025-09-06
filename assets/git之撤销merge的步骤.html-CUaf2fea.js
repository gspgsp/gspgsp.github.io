import{_ as n,c as e,e as i,o as a}from"./app-DhQfOs3H.js";const l={};function t(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>git之撤销merge的步骤(也适用于普通的提交):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;git status</span>
<span class="line">这会显示当前的分支状态和是否有未推送的提交</span>
<span class="line">  </span>
<span class="line">2&gt;如果合并已经提交，但还没有推送，可以使用 reset 命令来撤销最后一次提交： git reset --hard HEAD~1 或者 git reset --hard HEAD^</span>
<span class="line">ex:</span>
<span class="line">$ git reset --hard HEAD^</span>
<span class="line">HEAD is now at 20312c8f fix(): create problems</span>
<span class="line">  </span>
<span class="line">这会将您的分支回退到合并之前的状态。注意，这将删除合并提交以及合并带来的所有更改</span>
<span class="line">  </span>
<span class="line">3&gt;如果想保留您的工作目录中的更改，可以使用 --soft 选项替代 --hard</span>
<span class="line">git reset --soft HEAD~1</span>
<span class="line">  </span>
<span class="line">这会撤销提交，但保留更改在工作目录中</span>
<span class="line">  </span>
<span class="line">4&gt;如果合并还没有提交，只是在暂存区，您可以使用(只是add 但是没有 commit)</span>
<span class="line">git reset --merge</span>
<span class="line">  </span>
<span class="line">这会取消合并操作，并将文件恢复到合并前的状态</span>
<span class="line">  </span>
<span class="line">5&gt;操作完，执行 git status 查看分支状态</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=n(l,[["render",t],["__file","git之撤销merge的步骤.html.vue"]]),p=JSON.parse('{"path":"/content/other/git/git%E4%B9%8B%E6%92%A4%E9%94%80merge%E7%9A%84%E6%AD%A5%E9%AA%A4.html","title":"git之撤销merge的步骤","lang":"en-US","frontmatter":{"sidebar":false,"title":"git之撤销merge的步骤","description":"git之撤销merge的步骤"},"headers":[],"git":{},"filePathRelative":"content/other/git/git之撤销merge的步骤.md"}');export{c as comp,p as data};
