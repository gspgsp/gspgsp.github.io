import{_ as n,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(d,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>使用husky统一管理git-hooks,实现git commit之前校验eslint，通过才能commit成功:</p><ul><li>1.安装husky</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm install husky --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>2.初始化husky</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm run prepare</span>
<span class="line">  </span>
<span class="line">执行完上述安装命令后，将会发生如下几个变化：</span>
<span class="line">在.git同级目录生成.husky文件夹，文件夹下有一个可以编辑的示例pre-commit钩子</span>
<span class="line">在package.json中的scripts中添加了&quot;prepare&quot;: &quot;husky install&quot;</span>
<span class="line">更改.git文件下面的config文件，配置项 core.hooksPath 为 .husky</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.创建一个hook</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">要添加另一个钩子，请使用husky add</span>
<span class="line">如： npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.更新hooks脚本</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">修改.husky文件夹下的hooks脚本即可</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>5.卸载并还原husky</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm uninstall husky</span>
<span class="line">// 删除.husky文件夹，并且重置core.hooksPath</span>
<span class="line">rm -rf .husky &amp;&amp; git config --unset core.hooksPath</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>6.实战</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">项目中commit的时候，校验eslint, 警告和错误都不可以commit</span>
<span class="line">  1&gt;安装好 husky 之后，编辑.husky/pre-commit，添加如下内容，而pre-push不用处理，就用默认内容</span>
<span class="line">  npx lint-staged</span>
<span class="line">  2&gt;安装lint-staged，lint-stated就是针对Git暂存区的文件做校验的一个工具。由于在commit之前，我们要提交的文件是在暂存区的，我们可以利用这个工具来校验我们即将commit的文件，而不会校验其它的文件</span>
<span class="line">  npm install lint-staged --save-dev</span>
<span class="line">  3&gt;配置lint-staged</span>
<span class="line">  // package.json</span>
<span class="line">  {</span>
<span class="line">      &quot;lint-staged&quot;: {</span>
<span class="line">          &quot;*.{js,ts,vue}&quot;: [</span>
<span class="line">            &quot;prettier --write&quot;,</span>
<span class="line">            &quot;eslint --cache --fix&quot; // 也可以添加这个参数 eslint --max-warnings 0</span>
<span class="line">          ],</span>
<span class="line">          &quot;*.{scss, md}&quot;: [</span>
<span class="line">            &quot;prettier --write&quot;</span>
<span class="line">          ]</span>
<span class="line">       }</span>
<span class="line">  }</span>
<span class="line">  4&gt;提交 commit 的时候，触发了 pre-commit的gitHook, 就执行了里面的脚本 lint-staged, 然后执行了 eslint --max-warnings 0, 最终eslint 0 警告 0 错误就可以commit成功，反之不行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const c=n(l,[["render",t],["__file","husky使用.html.vue"]]),u=JSON.parse('{"path":"/content/tool/front/husky%E4%BD%BF%E7%94%A8.html","title":"husky使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"husky使用","description":"husky使用"},"headers":[],"git":{},"filePathRelative":"content/tool/front/husky使用.md"}');export{c as comp,u as data};
