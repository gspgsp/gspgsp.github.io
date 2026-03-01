import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>npm的两个配置文件npmrc和nvmrc:</p><p>npmrc相关:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npmrc，可以理解成npm running cnfiguration, 即npm运行时配置文件。我们知道，npm最大的作用就是帮助开发者安装需要的依赖包，但是要从哪里下载？下载哪一个版本的包，把包下载到电脑的哪个路径下？</span>
<span class="line">这些都可以在.npmrc中进行配置。</span>
<span class="line">在设置.npmrc之前，我们需要知道：在你的电脑上，不止存在一个.npmrc文件，而是有多个。在我们安装包的时候，npm按照如下顺序读取这些配置文件:  </span>
<span class="line"></span>
<span class="line">项目配置文件：你可以在项目的根目录下创建一个.npmrc文件，只用于管理这个项目的npm安装。</span>
<span class="line">用户配置文件：在你使用一个账号登陆的电脑的时候，可以为当前用户创建一个.npmrc文件，之后用该用户登录电脑，就可以使用该配置文件。可以通过 npm config get userconfig 来获取该文件的位置。</span>
<span class="line">全局配置文件： 一台电脑可能有多个用户，在这些用户之上，你可以设置一个公共的.npmrc文件，供所有用户使用。该文件的路径为：$PREFIX/etc/npmrc，使用 npm config get prefix 获取$PREFIX。如果你不曾配置过全局文件，该文件不存在。</span>
<span class="line">npm内嵌配置文件：最后还有npm内置配置文件，基本上用不到，不用过度关注。</span>
<span class="line"></span>
<span class="line">用户配置文件:</span>
<span class="line">qinhong@HPDEV-31:~$ npm config get userconfig</span>
<span class="line">/home/qinhong/.npmrc</span>
<span class="line"></span>
<span class="line">打开这个配置文件发现是我之前配置的仓库地址:</span>
<span class="line">registry=https://registry.npm.taobao.org</span>
<span class="line"></span>
<span class="line">还可以在项目下配置:</span>
<span class="line">#包路劲地址</span>
<span class="line">@qinhong-ui:registry=&#39;https://gitlab.qinhong.com:8081/api/v4/projects/800/packages/npm/&#39;</span>
<span class="line"></span>
<span class="line">#授权地址信息</span>
<span class="line">&#39;//gitlab.qinhong.com:8081/api/v4/projects/800/packages/npm/:_authToken&#39;=ddfr78dsfdggVCd</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">You should now be able to run npm install @qinhong-ui/design-system to install the package. </span>
<span class="line"></span>
<span class="line">IMPORTANT: DO NOT COMMIT THIS AUTH TOKEN TO THE REPOSITORY. </span>
<span class="line"></span>
<span class="line">1. To make the install work in CI, in your Gitlab repository for the project go to Settings =&gt; CI/CD =&gt; Expand the variables section =&gt; add variable.</span>
<span class="line"></span>
<span class="line">2. Add a variable of GITLAB_TOKEN with your secret project token.</span>
<span class="line"></span>
<span class="line">3. In your gitlab-ci.yml file you can now create a variable that reads this token in CI and will be used during the npm install. </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  variables:</span>
<span class="line">    GITLAB_TOKEN: $GITLAB_TOKEN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nvmrc相关:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Node.js 版本更新速度极快，但未必所有套件都能对应于新的版本，可以通过 nvmrc文件定义当前项目的Node.js版本</span>
<span class="line"></span>
<span class="line">cd project-a</span>
<span class="line">touch .nvmrc</span>
<span class="line">echo &quot;12&quot; &gt;&gt; .nvmrc</span>
<span class="line"></span>
<span class="line">cd ..</span>
<span class="line">cd project-b</span>
<span class="line">touch .nvmrc</span>
<span class="line">echo &quot;16&quot; &gt;&gt; .nvmrc</span>
<span class="line"></span>
<span class="line">像我本地的 .nvmrc 文件内容是: lts/hydrogen  #这是一个v18的长期维护本版,https://nodejs.org/en/blog/release/v18.12.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const d=s(l,[["render",c],["__file","npm的两个配置文件npmrc和nvmrc.html.vue"]]),t=JSON.parse('{"path":"/content/front/js/npm%E7%9A%84%E4%B8%A4%E4%B8%AA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6npmrc%E5%92%8Cnvmrc.html","title":"npm的两个配置文件npmrc和nvmrc","lang":"en-US","frontmatter":{"sidebar":false,"title":"npm的两个配置文件npmrc和nvmrc","description":"npm的两个配置文件npmrc和nvmrc"},"headers":[],"git":{},"filePathRelative":"content/front/js/npm的两个配置文件npmrc和nvmrc.md"}');export{d as comp,t as data};
