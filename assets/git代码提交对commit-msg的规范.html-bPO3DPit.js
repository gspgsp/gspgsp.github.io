import{_ as n,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<p>git代码提交对commit-msg的规范:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 .husky 下配置 commit-msg脚本，内容如下:</span>
<span class="line">npx --no -- commitlint --edit $1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>分析:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">npx <span class="token parameter variable">--no</span> -- commitlint <span class="token parameter variable">--edit</span> <span class="token variable">$1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">让我们逐部分详细分析这个命令:</span>
<span class="line">  </span>
<span class="line"><span class="token number">1</span>. <span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span><span class="token builtin class-name">:</span></span>
<span class="line">   - 这是Node.js生态系统中的一个工具,用于执行npm包中的二进制文件。</span>
<span class="line">   - 使用<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>的好处是,它可以执行本地安装的包,而不需要全局安装或直接修改<span class="token environment constant">PATH</span>。</span>
<span class="line">   - 在这个上下文中,它用来运行<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>命令。</span>
<span class="line">  </span>
<span class="line"><span class="token number">2</span>. <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--no</span> --<span class="token variable">\`</span></span><span class="token builtin class-name">:</span></span>
<span class="line">   - 这是<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>的一个特殊选项。</span>
<span class="line">   - <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--no</span><span class="token variable">\`</span></span>告诉<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>不要自动安装缺失的包。</span>
<span class="line">   - 双破折号<span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span>--<span class="token variable">\`</span></span><span class="token punctuation">)</span>是一个shell约定,用来表示选项的结束。这确保后面的所有内容都被视为命令参数,而不是<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>的选项。</span>
<span class="line">  </span>
<span class="line"><span class="token number">3</span>. <span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span><span class="token builtin class-name">:</span></span>
<span class="line">   - 这是实际要执行的命令。</span>
<span class="line">   - <span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>是一个用于检查Git提交信息是否符合特定格式的工具。// 这里其实就是 @commitlint/cli 这个工具, 可以运行 npx commitlint <span class="token parameter variable">--help</span> 查看支持的参数</span>
<span class="line">  </span>
<span class="line"><span class="token number">4</span>. <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--edit</span> $1<span class="token variable">\`</span></span><span class="token builtin class-name">:</span></span>
<span class="line">   - <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--edit</span><span class="token variable">\`</span></span>是<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>的一个选项,指示它应该检查一个文件的内容。</span>
<span class="line">   - <span class="token variable"><span class="token variable">\`</span>$1<span class="token variable">\`</span></span>是一个shell变量,代表传递给脚本的第一个参数。</span>
<span class="line">   - 在Git hooks上下文中,<span class="token variable"><span class="token variable">\`</span>$1<span class="token variable">\`</span></span>通常是Git自动创建的临时文件的路径,该文件包含了提交信息。</span>
<span class="line">  </span>
<span class="line">这个命令的执行流程:</span>
<span class="line"><span class="token number">1</span>. 当开发者创建一个新的Git提交时,Husky会触发这个hook。</span>
<span class="line"><span class="token number">2</span>. Git会创建一个临时文件,包含提交信息,并将其路径作为第一个参数传递给hook脚本。</span>
<span class="line"><span class="token number">3</span>. Hook脚本使用<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>来运行本地安装的<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>。</span>
<span class="line"><span class="token number">4</span>. <span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>读取并检查Git提供的提交信息文件。</span>
<span class="line"><span class="token number">5</span>. 如果提交信息符合预定义的规则,<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>会允许提交<span class="token punctuation">;</span>否则,它会阻止提交并显示错误信息。</span>
<span class="line">  </span>
<span class="line">使用这种方式的优点:</span>
<span class="line">- 确保使用项目本地安装的<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>版本,避免全局版本可能造成的不一致。</span>
<span class="line">- 不需要修改<span class="token environment constant">PATH</span>或使用相对路径来执行<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>。</span>
<span class="line">- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--no</span><span class="token variable">\`</span></span>选项防止<span class="token variable"><span class="token variable">\`</span>npx<span class="token variable">\`</span></span>在<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>不存在时尝试安装它,这可能会导致意外行为。</span>
<span class="line"></span>
<span class="line">这个设置帮助团队维护一致的提交信息格式,提高代码库的可维护性和可读性。如果你想了解如何自定义<span class="token variable"><span class="token variable">\`</span>commitlint<span class="token variable">\`</span></span>规则或整合到其他工作流程中,我可以提供更多信息。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">commit-msg hook 给了我们一个机会在提交完成之前检查和potentially修改提交信息。</span>
<span class="line">commit-msg hook 实际上是在 pre-commit hook 之后运行的。它的主要目的是检查提交信息的格式和内容，而不是检查代码本身。</span>
<span class="line">这种设计允许我们：</span>
<span class="line">首先检查代码质量（在 pre-commit 中）</span>
<span class="line">然后保证提交信息的质量（在 commit-msg 中）</span>
<span class="line">这样的顺序确保了both代码和提交信息都符合项目的标准before完成提交。</span>
<span class="line">相关配置：</span>
<span class="line">1&gt;可以直接在package.json下配置</span>
<span class="line">&quot;commitlint&quot;: {</span>
<span class="line">  &quot;rules&quot;: { // 更多规则参考: https://commitlint.js.org/reference/rules.html</span>
<span class="line">    &quot;subject-case&quot;: [</span>
<span class="line">      0, // 提示级别</span>
<span class="line">      &quot;always&quot; // 本来还应该有第三个参数的，就是subject-case 支持的value, 因为配置了 0 ，所以就不用配置了</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  &quot;extends&quot;: [</span>
<span class="line">    &quot;@commitlint/config-conventional&quot; // 关于 conventional 规则参考 https://www.conventionalcommits.org/en/v1.0.0/</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">2&gt;可以生成一个配置文件commitlint.config.js</span>
<span class="line">{</span>
<span class="line">  &quot;commitlint&quot;: {</span>
<span class="line">    &quot;rules&quot;: {</span>
<span class="line">      &quot;subject-case&quot;: [0, &quot;always&quot;]</span>
<span class="line">    },</span>
<span class="line">    &quot;extends&quot;: [</span>
<span class="line">      &quot;@commitlint/config-conventional&quot;</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置分析: 这个配置定义了项目中commitlint的行为。让我解释一下这个配置的各个部分：</p><ol><li><p><code>&quot;rules&quot;</code> 对象： 这里定义了特定的commitlint规则。在这个例子中，只有一个规则被显式定义：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;subject-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;always&quot;</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&quot;subject-case&quot;</code> 是规则的名称，它控制提交消息主题（第一行）的大小写。</li><li><code>[0, &quot;always&quot;]</code> 是规则的配置： <ul><li><code>0</code> 表示这个规则被禁用（0 = off, 1 = warning, 2 = error）</li><li><code>&quot;always&quot;</code> 是规则的附加配置，但因为规则被禁用，所以这里没有实际效果</li></ul></li></ul><p>这个配置实际上是关闭了对主题行大小写的限制，允许开发者使用任何大小写格式。</p></li><li><p><code>&quot;extends&quot;</code> 数组：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">&quot;@commitlint/config-conventional&quot;</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示项目的commitlint配置扩展了 <code>@commitlint/config-conventional</code> 包。这是一个常用的预设配置，它实施了Conventional Commits规范。</p><p>Conventional Commits是一种提交消息的格式约定，通常看起来像：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;type&gt;[optional scope]: &lt;description&gt;</span>
<span class="line"></span>
<span class="line">[optional body]</span>
<span class="line"></span>
<span class="line">[optional footer(s)]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>综合分析：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 这个项目使用了Conventional Commits规范作为基础。</span>
<span class="line">2. 但是，它关闭了对主题行大小写的限制，这可能是为了给开发者更多的灵活性。</span>
<span class="line">3. 除了 \`subject-case\` 规则，其他所有来自 \`@commitlint/config-conventional\` 的规则都会被应用。</span>
<span class="line"></span>
<span class="line">官方文档: https://commitlint.js.org/</span>
<span class="line"></span>
<span class="line">总结:</span>
<span class="line">commitlint 的核心功能和用途：</span>
<span class="line">  </span>
<span class="line">1. 主要功能：</span>
<span class="line">   - commitlint 主要用于检查 Git 提交信息（commit messages）的格式和内容。</span>
<span class="line">  </span>
<span class="line">2. 目的：</span>
<span class="line">   - 确保项目中所有的提交信息遵循一致的格式和约定。</span>
<span class="line">   - 提高代码库的可维护性和可读性。</span>
<span class="line">   - 便于自动化工具（如生成更新日志）处理提交历史。</span>
<span class="line">  </span>
<span class="line">3. 工作原理：</span>
<span class="line">   - 通常通过 Git hooks（特别是 commit-msg hook）集成到工作流中。</span>
<span class="line">   - 在每次提交时自动运行，检查提交信息是否符合预定义的规则。</span>
<span class="line">  </span>
<span class="line">4. 常见用途：</span>
<span class="line">   - 强制实施 Conventional Commits 规范。</span>
<span class="line">   - 确保提交信息包含必要的信息（如类型、范围、描述等）。</span>
<span class="line">   - 限制提交信息的长度、格式或使用的词语。</span>
<span class="line">  </span>
<span class="line">5. 可配置性：</span>
<span class="line">   - 可以通过配置文件（如我们之前讨论的 package.json 或 commitlint.config.js）自定义规则。</span>
<span class="line">   - 可以扩展预设配置（如 @commitlint/config-conventional）并覆盖特定规则。</span>
<span class="line">  </span>
<span class="line">6. 与其他工具集成：</span>
<span class="line">   - 经常与 Husky 等工具配合使用，以自动化执行检查。</span>
<span class="line">   - 可以集成到 CI/CD 流程中，确保所有提交（包括通过 UI 创建的）都符合规范。</span>
<span class="line">  </span>
<span class="line">7. 好处：</span>
<span class="line">   - 帮助团队保持一致的提交风格。</span>
<span class="line">   - 使得理解项目历史和生成变更日志变得更容易。</span>
<span class="line">   - 促进更好的协作和代码审查流程。</span>
<span class="line"></span>
<span class="line">总的来说，commitlint 是一个强大的工具，用于维护高质量、一致的 Git 提交历史。它不仅仅是简单的检查，而是帮助团队建立更好的沟通和协作实践。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考官网: https://commitlint.js.org/reference/configuration.html (主要两种方式，本文采用的是第二种)</p>`,10)]))}const o=n(i,[["render",p],["__file","git代码提交对commit-msg的规范.html.vue"]]),v=JSON.parse('{"path":"/content/other/git/git%E4%BB%A3%E7%A0%81%E6%8F%90%E4%BA%A4%E5%AF%B9commit-msg%E7%9A%84%E8%A7%84%E8%8C%83.html","title":"git代码提交对commit-msg的规范","lang":"en-US","frontmatter":{"sidebar":false,"title":"git代码提交对commit-msg的规范","description":"git代码提交对commit-msg的规范"},"headers":[],"git":{},"filePathRelative":"content/other/git/git代码提交对commit-msg的规范.md"}');export{o as comp,v as data};
