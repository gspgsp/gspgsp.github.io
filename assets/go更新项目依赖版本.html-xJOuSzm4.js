import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>go更新项目依赖版本:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">go mod 管理依赖，但是更新某个依赖的话 需要用到 go get 命令</span>
<span class="line"></span>
<span class="line">1:go get更新特定版本</span>
<span class="line">go get package@[@version]</span>
<span class="line">version可以是vx.y.z这种形式或者直接使用commit的checksum，也可以是master或者latest</span>
<span class="line"></span>
<span class="line">2：go get -u</span>
<span class="line">package会更新所有依赖该包的版本</span>
<span class="line"></span>
<span class="line">3：go get package</span>
<span class="line">package会更新当前包版本和所有依赖该包的版本</span>
<span class="line"></span>
<span class="line">4.通过这个包实现交互式更新操作</span>
<span class="line">在当前项目下执行:</span>
<span class="line">$ go get -u github.com/oligot/go-mod-upgrade</span>
<span class="line"></span>
<span class="line">$ go-mod-upgrade</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(l,[["render",c],["__file","go更新项目依赖版本.html.vue"]]),r=JSON.parse('{"path":"/content/go/base/go%E6%9B%B4%E6%96%B0%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E7%89%88%E6%9C%AC.html","title":"go更新项目依赖版本","lang":"en-US","frontmatter":{"sidebar":false,"title":"go更新项目依赖版本","description":"go更新项目依赖版本"},"headers":[],"git":{},"filePathRelative":"content/go/base/go更新项目依赖版本.md"}');export{p as comp,r as data};
