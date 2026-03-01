import{_ as i,c as s,f as e,o as a}from"./app-BB_BIQV8.js";const l={};function t(d,n){return a(),s("div",null,n[0]||(n[0]=[e(`<p>git之创建项目的几种方式:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Git global setup</span>
<span class="line">git config --global user.name &quot;shipeng guo&quot;</span>
<span class="line">git config --global user.email &quot;shipeng.guo@qinhong.com&quot;</span>
<span class="line">  </span>
<span class="line">1.Create a new repository</span>
<span class="line">git clone ssh://git@gitlab.qinhong.com:9922/dev/sciforum-frontend-v2.git</span>
<span class="line">cd sciforum-frontend-v2</span>
<span class="line">git switch -c main //这个命令用于在Git版本控制系统中创建一个新的分支并切换到该分支</span>
<span class="line">touch README.md</span>
<span class="line">git add README.md</span>
<span class="line">git commit -m &quot;add README&quot;</span>
<span class="line">  </span>
<span class="line">2.Push an existing folder</span>
<span class="line">cd existing_folder</span>
<span class="line">git init --initial-branch=main //在当前文件夹中初始化一个新的Git仓库，并指定初始分支为 &quot;main&quot;。这个命令将创建一个.git子文件夹，其中包含Git仓库的配置和历史信息。</span>
<span class="line">git remote add origin ssh://git@gitlab.qinhong.com:9922/dev/sciforum-frontend-v2.git</span>
<span class="line">git add .</span>
<span class="line">git commit -m &quot;Initial commit&quot;</span>
<span class="line">  </span>
<span class="line">3.Push an existing Git repository</span>
<span class="line">cd existing_repo</span>
<span class="line">git remote rename origin old-origin // 将原始的远程仓库名称 &quot;origin&quot; 重命名为 &quot;old-origin&quot;。这是一种更改本地仓库关联的远程仓库名称的方式，以便你可以保留之前的配置，同时为新的远程仓库添加一个新的名称。这个命令不会对远程仓库本身产生影响，也不会改变其他用户的配置。它只是为了方便本地工作目录中的Git仓库更改远程仓库的别名，而不影响远程仓库的状态。</span>
<span class="line">git remote add origin ssh://git@gitlab.qinhong.com:9922/dev/sciforum-frontend-v2.git // 添加一个新的远程仓库地址，并将其命名为 &quot;origin&quot;。这样，Git就会关联到新的远程仓库地址，而不再使用之前的 &quot;old-origin&quot;。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=i(l,[["render",t],["__file","git之创建项目的几种方式.html.vue"]]),r=JSON.parse('{"path":"/content/other/git/git%E4%B9%8B%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"git之创建项目的几种方式","lang":"en-US","frontmatter":{"sidebar":false,"title":"git之创建项目的几种方式","description":"git之创建项目的几种方式"},"headers":[],"git":{},"filePathRelative":"content/other/git/git之创建项目的几种方式.md"}');export{c as comp,r as data};
