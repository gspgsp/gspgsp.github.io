import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function p(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>通过执行以下命令能够查看某个依赖包的最新版本:</p><div class="language-vim line-numbers-mode" data-highlighter="prismjs" data-ext="vim" data-title="vim"><pre><code><span class="line"># 查看某个 package 的注册信息</span>
<span class="line">npm <span class="token keyword">view</span> <span class="token operator">&lt;</span>package<span class="token operator">-</span>name<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"># 查看某个 package 的最新版本</span>
<span class="line">npm <span class="token keyword">view</span> <span class="token operator">&lt;</span>package<span class="token operator">-</span>name<span class="token operator">&gt;</span> <span class="token keyword">version</span></span>
<span class="line"></span>
<span class="line"># 查看某个 package 在 npm 服务器上所发布过的版本</span>
<span class="line">npm <span class="token keyword">view</span> <span class="token operator">&lt;</span>package<span class="token operator">-</span>name<span class="token operator">&gt;</span> versions</span>
<span class="line"></span>
<span class="line"># 查看仓库依赖树上所有包的版本信息</span>
<span class="line">npm <span class="token keyword">ls</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm 中的包模块版本都需要遵循 SemVer（Semantic Version，语义化版本）规范，这是由 Github 起草的一个具有指导意义的，统一的版本号表示规则.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SemVer 规范的标准版本号采用 X.Y.Z 的格式，其中 X、Y 和 Z 为非负的整数，且禁止在数字前方补零。X 是主版本号、Y 是次版本号、而 Z 为修订号。每个元素必须以数值来递增。</span>
<span class="line"></span>
<span class="line">主版本号（major）：当你做了不兼容的 API 修改</span>
<span class="line">次版本号（minor）：当你做了向下兼容的功能性新增</span>
<span class="line">修订号（patch）：当你做了向下兼容的问题修正。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本号标签:<br> 版本号标签 语义 说明<br> latest 默认 不指定版本情况下默认安装的最新版本<br> alpha 内测 内部测试版，一般不向外部发布，会有很多 BUG，一般只有测试人员使用<br> beta 公测 也是测试版本，这个阶段的版本会一直加入新的功能，在 Alpha 版之后推出<br> next 下一个 rc 候选 Release Candidate 系统平台上就是发行候选版本。RC 版不会再加入新的功能了，主要着重于除错<br> experimental 实验</p><p>给版本号添加标签的方式有两种:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 第一种方式：在发布时指定标签</span>
<span class="line"># 1. version-tag 替换为版本号标签的名称</span>
<span class="line">npm publish --tag &lt;version-tag&gt;</span>
<span class="line"></span>
<span class="line"># 示例</span>
<span class="line">npm publish --tag next react@18.0.0</span>
<span class="line">npm publish --tag experimental vue@3.2.0</span>
<span class="line"></span>
<span class="line"># 第二种方式：发布后执行以下命令</span>
<span class="line"># 1. package-name 替换为 npm 包名字</span>
<span class="line"># 2. version 替换为 npm 包的指定版本</span>
<span class="line"># 3. version-tag 替换为版本号标签的名称</span>
<span class="line">npm dist-tag add &lt;package-name&gt;@&lt;version&gt; &lt;version-tag&gt;</span>
<span class="line"></span>
<span class="line"># 示例</span>
<span class="line">npm dist-tag add react@18.0.0 alpha</span>
<span class="line">npm dist-tag add vue@3.2.0 next</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本号操作工具:semver，可以通过 npm 安装，npm install semver</p><p>版本号特殊字符:<br> 版本号包可能包含 ~ 和 ^ 符号：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">~：当安装依赖时获取到有最新版本时，安装到 x.y.z 中 z 的最新版本。即保持主版本号、次版本号不变的情况下，保持修订号的最新版本</span>
<span class="line">^：当安装依赖时获取到由最新版本时，安装到 x.y.z 中 y 和 z 都为最新版本。即保持主版本号不变的情况下，保持次版本号、修订版本号为最新版本。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>除此以外，还包含以下规则：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt;：接受高于指定版本的任何版本</span>
<span class="line">&gt;= 接受等于或高于指定版本的任何版本</span>
<span class="line">&lt;=：接受等于或低于指定版本的任何版本</span>
<span class="line">&lt;：接受低于指定版本的任何版本</span>
<span class="line">=：接受确切的版本</span>
<span class="line">-：接受一定范围的版本，例如 2.1.0 - 2.4.1</span>
<span class="line">||：组合集合，例如 &lt; 2.2 || &gt; 2.4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const r=s(l,[["render",p],["__file","npm版本号规则.html.vue"]]),c=JSON.parse('{"path":"/content/other/spread/npm%E7%89%88%E6%9C%AC%E5%8F%B7%E8%A7%84%E5%88%99.html","title":"npm版本号规则","lang":"en-US","frontmatter":{"sidebar":false,"title":"npm版本号规则","description":"npm版本号规则"},"headers":[],"git":{},"filePathRelative":"content/other/spread/npm版本号规则.md"}');export{r as comp,c as data};
