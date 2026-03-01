import{_ as n,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const t={};function l(c,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>当commit了，然后push，结果puash失败，就想撤销commit,但是保留代码,可以通过--soft参数实现:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">HEAD^的意思是上一个版本，也可以写成HEAD~1</span>
<span class="line">如果你进行了2次commit，想都撤回，可以使用HEAD~2</span>
<span class="line"></span>
<span class="line">命令格式：git reset [--soft | --mixed | --hard] [&lt;commit&gt;]</span>
<span class="line">至于这几个参数：</span>
<span class="line">--mixed </span>
<span class="line">意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作</span>
<span class="line">这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。</span>
<span class="line"></span>
<span class="line">--soft  </span>
<span class="line">不删除工作空间改动代码，撤销commit，不撤销git add . </span>
<span class="line"></span>
<span class="line">--hard</span>
<span class="line">删除工作空间改动代码，撤销commit，撤销git add . </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const m=n(t,[["render",l],["__file","git之本地push失败，撤销commit.html.vue"]]),r=JSON.parse('{"path":"/content/other/git/git%E4%B9%8B%E6%9C%AC%E5%9C%B0push%E5%A4%B1%E8%B4%A5%EF%BC%8C%E6%92%A4%E9%94%80commit.html","title":"git之本地push失败，撤销commit","lang":"en-US","frontmatter":{"sidebar":false,"title":"git之本地push失败，撤销commit","description":"git之本地push失败，撤销commit"},"headers":[],"git":{},"filePathRelative":"content/other/git/git之本地push失败，撤销commit.md"}');export{m as comp,r as data};
