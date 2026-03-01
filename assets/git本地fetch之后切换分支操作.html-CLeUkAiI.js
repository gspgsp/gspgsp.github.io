import{_ as n,c as s,f as i,o as t}from"./app-BB_BIQV8.js";const a={};function l(c,e){return t(),s("div",null,e[0]||(e[0]=[i(`<p>git本地fetch之后切换分支操作:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.一般会在本地执行git fetch, 会把远程最新的分支拉下来</span>
<span class="line">2.本地想切换到想查看的远程新分支,可以有三种方式</span>
<span class="line">1&gt;直接通过编辑器， checkout 指定分支</span>
<span class="line"></span>
<span class="line">2&gt;git checkout -b feature-branch origin/feature-branch</span>
<span class="line"></span>
<span class="line">3&gt;git switch -c feature-branch origin/feature-branch</span>
<span class="line">-c：是 git switch 命令的一个选项，用于创建新的本地分支。即使您指定了远程分支，-c 也会确保本地分支创建，并且您会自动切换到该分支。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git本地切换分支的几种方式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#q切换一存在的分支</span>
<span class="line">git checkout feature-branch </span>
<span class="line">git switch feature-branch</span>
<span class="line"></span>
<span class="line">#新增并切换到分支</span>
<span class="line">git checkout -b my-branch</span>
<span class="line">git switch -c my-branch</span>
<span class="line"></span>
<span class="line">注意，加 -b 或者 -c 到一个已经存在的分支，会报错</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=n(a,[["render",l],["__file","git本地fetch之后切换分支操作.html.vue"]]),p=JSON.parse('{"path":"/content/other/git/git%E6%9C%AC%E5%9C%B0fetch%E4%B9%8B%E5%90%8E%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF%E6%93%8D%E4%BD%9C.html","title":"git本地fetch之后切换分支操作","lang":"en-US","frontmatter":{"sidebar":false,"title":"git本地fetch之后切换分支操作","head":[["meta",{"name":"title","content":"git本地fetch之后切换分支操作"}],["meta",{"name":"description","content":"git本地fetch之后切换分支操作"}],["meta",{"name":"keywords","content":"git,fetch"}],["meta",{"property":"og:title","content":"git本地fetch之后切换分支操作"}],["meta",{"property":"og:description","content":"git本地fetch之后切换分支操作"}]]},"headers":[],"git":{},"filePathRelative":"content/other/git/git本地fetch之后切换分支操作.md"}');export{d as comp,p as data};
