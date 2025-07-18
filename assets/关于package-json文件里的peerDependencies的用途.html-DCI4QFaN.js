import{_ as s,c as e,d as a,o as i}from"./app-B4P9BclZ.js";const l={};function p(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h5 id="关于package-json下-peerdependencies-的用途" tabindex="-1"><a class="header-anchor" href="#关于package-json下-peerdependencies-的用途"><span>关于package.json下 peerDependencies 的用途</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">主要列出需要用户自己安装的依赖的列表，如vite包:</span>
<span class="line">&quot;peerDependencies&quot;: {</span>
<span class="line">  &quot;vue&quot;: &quot;^3.3.0&quot;,</span>
<span class="line">  &quot;sass&quot;: &quot;*&quot;</span>
<span class="line">},</span>
<span class="line">&quot;devDependencies&quot;: {</span>
<span class="line">  &quot;vue&quot;: &quot;^3.3.4&quot;,</span>
<span class="line">  &quot;sass&quot;: &quot;^1.77.0&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">但是一般，会在devDependencies下发现有依赖，这个是用来包自身测试用的，不是给用户用的</span>
<span class="line">关系图:</span>
<span class="line">┌────────────────────────────────────┐</span>
<span class="line">│     使用者项目（如 Nuxt 项目）     │</span>
<span class="line">│                                    │</span>
<span class="line">│  ┌────────────────────────────┐    │</span>
<span class="line">│  │       my-ui-lib            │◄───┤ ← 安装你的库</span>
<span class="line">│  │                            │    │</span>
<span class="line">│  │ dependencies:              │    │  ✔ 会被打包进生产代码中</span>
<span class="line">│  │   axios                    │    │</span>
<span class="line">│  │                            │    │</span>
<span class="line">│  │ peerDependencies:          │    │  ⚠️ 用户必须自己安装</span>
<span class="line">│  │   vue                      │    │     否则运行时报错</span>
<span class="line">│  │   sass                     │    │</span>
<span class="line">│  │                            │    │</span>
<span class="line">│  │ devDependencies:           │    │  🛠️ 仅开发和测试用</span>
<span class="line">│  │   vite, vitest, vue, sass  │    │</span>
<span class="line">│  │                            │    │</span>
<span class="line">│  │ optionalDependencies:      │    │  ❓ 可以用，但不是必须</span>
<span class="line">│  │   tailwindcss              │    │</span>
<span class="line">│  └────────────────────────────┘    │</span>
<span class="line">└────────────────────────────────────┘</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">可以通过如下命令查看npm安装的包的情况:</span>
<span class="line">如查看sass包和sass-embedded包的安装</span>
<span class="line">$ npm ls sass</span>
<span class="line">$ npm ls sass-embedded</span>
<span class="line"></span>
<span class="line">如上，如果用户没有自己安装，那么即使执行了上面的命令，也没有输出</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=s(l,[["render",p],["__file","关于package-json文件里的peerDependencies的用途.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/%E5%85%B3%E4%BA%8Epackage-json%E6%96%87%E4%BB%B6%E9%87%8C%E7%9A%84peerDependencies%E7%9A%84%E7%94%A8%E9%80%94.html","title":"关于package-json文件里的peerDependencies的用途","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于package-json文件里的peerDependencies的用途","head":[["meta",{"name":"title","content":"关于package-json文件里的peerDependencies的用途"}],["meta",{"name":"description","content":"关于package-json文件里的peerDependencies的用途"}],["meta",{"name":"keywords","content":"symfony,php,enum,cases"}],["meta",{"property":"og:title","content":"关于package-json文件里的peerDependencies的用途"}],["meta",{"property":"og:description","content":"关于package-json文件里的peerDependencies的用途"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/关于package-json文件里的peerDependencies的用途.md"}');export{t as comp,v as data};
