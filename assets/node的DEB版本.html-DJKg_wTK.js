import{_ as s,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(c,e){return i(),n("div",null,e[0]||(e[0]=[a(`<p>node的DEB版本:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">站点:https://deb.nodesource.com/</span>
<span class="line">  </span>
<span class="line">对于 setup_20.x 中的 x 不需要更改。让我解释一下原因：</span>
<span class="line">NodeSource 的脚本命名约定:</span>
<span class="line">NodeSource（Node.js 的一个主要分发渠道）使用 setup_XX.x 的格式来指代 Node.js 的主要版本。这里的 x 是一个通配符，代表该主要版本下的所有次要版本和补丁版本。</span>
<span class="line">自动更新到最新次要版本:</span>
<span class="line">使用 setup_20.x 可以确保您总是安装 Node.js 20 系列的最新稳定版本。这包括所有的次要版本更新和安全补丁。</span>
<span class="line">灵活性和维护性:</span>
<span class="line">保持 x 可以让您的 Dockerfile 更加灵活。当 Node.js 发布新的 20.x 版本时（比如从 20.1 到 20.2），您不需要更新 Dockerfile。</span>
<span class="line">  </span>
<span class="line">官方推荐:</span>
<span class="line">这是 NodeSource 官方推荐的安装方法，用于获取特定主要版本的最新稳定版。</span>
<span class="line">因此，您应该保持 setup_20.x 不变。这样的设置意味着：</span>
<span class="line">当您第一次构建 Docker 镜像时，它会安装当时 Node.js 20 系列的最新版本。</span>
<span class="line">如果您之后重新构建镜像，它会安装那时 Node.js 20 系列的最新版本。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",d],["__file","node的DEB版本.html.vue"]]),p=JSON.parse('{"path":"/content/other/spread/node%E7%9A%84DEB%E7%89%88%E6%9C%AC.html","title":"node的DEB版本","lang":"en-US","frontmatter":{"sidebar":false,"title":"node的DEB版本","description":"node的DEB版本"},"headers":[],"git":{},"filePathRelative":"content/other/spread/node的DEB版本.md"}');export{r as comp,p as data};
