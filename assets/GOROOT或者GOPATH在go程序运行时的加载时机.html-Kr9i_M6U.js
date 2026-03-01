import{_ as n,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="goroot或者gopath在go程序运行时的加载时机" tabindex="-1"><a class="header-anchor" href="#goroot或者gopath在go程序运行时的加载时机"><span>GOROOT或者GOPATH在go程序运行时的加载时机</span></a></h2><p><strong>简短回答：</strong></p><ul><li><strong>编译时（<code>go build</code>）：</strong> 需要 <code>GOROOT</code> 和 <code>GOPATH</code>/<code>GOMODCACHE</code></li><li><strong>运行时（执行编译后的二进制文件）：</strong> 不需要</li></ul><hr><p><strong>详细说明：</strong></p><h3 id="_1-go-build-编译时" tabindex="-1"><a class="header-anchor" href="#_1-go-build-编译时"><span>1. <code>go build</code> 编译时</span></a></h3><p><strong>需要的环境变量：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go build</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Go 编译器会读取：</span></span>
<span class="line"><span class="token comment"># ✅ GOROOT       → 找 Go 标准库（fmt、os 等）</span></span>
<span class="line"><span class="token comment"># ✅ GOMODCACHE   → 找第三方依赖包（如 github.com/xxx）</span></span>
<span class="line"><span class="token comment"># ✅ GO111MODULE  → 决定是否使用 go.mod</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实际例子：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 假设你的项目使用了第三方包</span></span>
<span class="line"><span class="token function">cat</span> main.go</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&quot;fmt&quot;</span></span>
<span class="line">    <span class="token string">&quot;github.com/some/package&quot;</span>  <span class="token comment">// ← 第三方包</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># go build 时会：</span></span>
<span class="line"><span class="token comment"># 1. 在 GOROOT 中找 fmt（标准库）</span></span>
<span class="line"><span class="token comment"># 2. 在 GOMODCACHE 中找 github.com/some/package</span></span>
<span class="line"></span>
<span class="line">go build  <span class="token comment"># ✅ 需要 GOROOT 和 GOMODCACHE</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果缺少环境变量：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 删除 GOPATH/GOMODCACHE</span></span>
<span class="line"><span class="token builtin class-name">unset</span> GOPATH</span>
<span class="line"><span class="token builtin class-name">unset</span> GOMODCACHE</span>
<span class="line"></span>
<span class="line">go build</span>
<span class="line"><span class="token comment"># Error: cannot find module providing package github.com/some/package</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_2-运行二进制文件时" tabindex="-1"><a class="header-anchor" href="#_2-运行二进制文件时"><span>2. 运行二进制文件时</span></a></h3><p><strong>不需要任何 Go 环境变量！</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 编译生成可执行文件</span></span>
<span class="line">go build <span class="token parameter variable">-o</span> myapp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行编译后的二进制文件</span></span>
<span class="line">./myapp  <span class="token comment"># ✅ 不需要 GOROOT、GOPATH、GOMODCACHE</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 甚至删除所有 Go 环境变量也能运行</span></span>
<span class="line"><span class="token builtin class-name">unset</span> GOROOT</span>
<span class="line"><span class="token builtin class-name">unset</span> GOPATH</span>
<span class="line"><span class="token builtin class-name">unset</span> GOMODCACHE</span>
<span class="line">./myapp  <span class="token comment"># ✅ 仍然可以运行！</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在没有安装 Go 的机器上也能运行</span></span>
<span class="line"><span class="token comment"># 只需要同一个系统（Linux、Windows 等）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3-服务器上运行-go-程序" tabindex="-1"><a class="header-anchor" href="#_3-服务器上运行-go-程序"><span>3. 服务器上运行 Go 程序</span></a></h3><p><strong>两种场景：</strong></p><p><strong>场景 A：只运行编译好的二进制文件</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 本地编译</span></span>
<span class="line">go build <span class="token parameter variable">-o</span> myapp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 上传到服务器</span></span>
<span class="line"><span class="token function">scp</span> myapp user@server:/home/user/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 服务器上运行</span></span>
<span class="line"><span class="token function">ssh</span> user@server</span>
<span class="line">./myapp  <span class="token comment"># ✅ 不需要安装 Go，不需要 GOROOT/GOPATH</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>场景 B：在服务器上编译和运行</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 服务器上需要安装 Go</span></span>
<span class="line">go build  <span class="token comment"># ✅ 需要 GOROOT 和 GOPATH/GOMODCACHE</span></span>
<span class="line"></span>
<span class="line">./myapp   <span class="token comment"># ✅ 不需要这些变量</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_4-实际测试" tabindex="-1"><a class="header-anchor" href="#_4-实际测试"><span>4. 实际测试</span></a></h3><p><strong>测试编译时是否需要变量：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 当前有 GOPATH</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$GOPATH</span>  <span class="token comment"># /home/qinhong/go</span></span>
<span class="line"></span>
<span class="line">go build  <span class="token comment"># ✅ 成功</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除 GOPATH</span></span>
<span class="line"><span class="token builtin class-name">unset</span> GOPATH</span>
<span class="line"></span>
<span class="line">go build  <span class="token comment"># ❌ 失败（如果项目有第三方依赖）</span></span>
<span class="line"><span class="token comment"># Error: cannot find module...</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复 GOPATH</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/go</span>
<span class="line"></span>
<span class="line">go build  <span class="token comment"># ✅ 成功</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试运行时是否需要变量：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 先编译</span></span>
<span class="line">go build <span class="token parameter variable">-o</span> myapp</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有 Go 相关变量</span></span>
<span class="line"><span class="token builtin class-name">unset</span> GOROOT</span>
<span class="line"><span class="token builtin class-name">unset</span> GOPATH</span>
<span class="line"><span class="token builtin class-name">unset</span> GOMODCACHE</span>
<span class="line"><span class="token builtin class-name">unset</span> GO111MODULE</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行编译好的二进制文件</span></span>
<span class="line">./myapp  <span class="token comment"># ✅ 完全正常，不受影响！</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="总结表" tabindex="-1"><a class="header-anchor" href="#总结表"><span>总结表</span></a></h3><table><thead><tr><th>操作</th><th>GOROOT</th><th>GOPATH/GOMODCACHE</th><th>GO111MODULE</th></tr></thead><tbody><tr><td><code>go build</code></td><td>✅ 需要</td><td>✅ 需要</td><td>⚠️ 有 go.mod 时不需要</td></tr><tr><td><code>go run</code></td><td>✅ 需要</td><td>✅ 需要</td><td>⚠️ 有 go.mod 时不需要</td></tr><tr><td><code>go mod download</code></td><td>✅ 需要</td><td>✅ 需要</td><td>⚠️ 有 go.mod 时不需要</td></tr><tr><td>运行二进制文件 <code>./myapp</code></td><td>❌ 不需要</td><td>❌ 不需要</td><td>❌ 不需要</td></tr><tr><td>Systemd 运行 Go 服务</td><td>❌ 不需要</td><td>❌ 不需要</td><td>❌ 不需要</td></tr></tbody></table><hr><h3 id="你的场景" tabindex="-1"><a class="header-anchor" href="#你的场景"><span>你的场景</span></a></h3><p><strong>在服务器上运行 Go 程序：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 本地开发环境需要这些配置</span></span>
<span class="line"><span class="token comment"># ~/.bashrc</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/local/go</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/go</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOROOT</span>/bin:<span class="token variable">$GOPATH</span>/bin</span>
<span class="line"></span>
<span class="line">go build  <span class="token comment"># ✅ 编译时需要</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编译后上传到服务器</span></span>
<span class="line"><span class="token function">scp</span> myapp server:/home/user/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 服务器上运行</span></span>
<span class="line"><span class="token function">ssh</span> user@server</span>
<span class="line">./myapp  <span class="token comment"># ✅ 运行时不需要！</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果服务器上用 systemd 运行</span></span>
<span class="line"><span class="token comment"># /etc/systemd/system/myapp.service</span></span>
<span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>My Go App</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>simple</span>
<span class="line"><span class="token assign-left variable">User</span><span class="token operator">=</span>myuser</span>
<span class="line"><span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/home/myuser</span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/myuser/myapp</span>
<span class="line"><span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 也 ❌ 不需要 GOROOT/GOPATH 配置</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>简单说：</strong> 编译时需要 Go 环境，运行时完全不需要。所以你可以在开发机上有 Go 环境，在服务器上只部署编译好的二进制文件。</p>`,39)]))}const d=n(i,[["render",p],["__file","GOROOT或者GOPATH在go程序运行时的加载时机.html.vue"]]),o=JSON.parse('{"path":"/content/go/base/GOROOT%E6%88%96%E8%80%85GOPATH%E5%9C%A8go%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E6%97%B6%E7%9A%84%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%9C%BA.html","title":"GOROOT或者GOPATH在go程序运行时的加载时机","lang":"en-US","frontmatter":{"sidebar":false,"title":"GOROOT或者GOPATH在go程序运行时的加载时机","head":[["meta",{"name":"title","content":"GOROOT或者GOPATH在go程序运行时的加载时机"}],["meta",{"name":"description","content":"GOROOT或者GOPATH在go程序运行时的加载时机"}],["meta",{"name":"keywords","content":"GOROOT或者GOPATH在go程序运行时的加载时机"}],["meta",{"property":"og:title","content":"GOROOT或者GOPATH在go程序运行时的加载时机"}],["meta",{"property":"og:description","content":"GOROOT或者GOPATH在go程序运行时的加载时机"}]]},"headers":[{"level":2,"title":"GOROOT或者GOPATH在go程序运行时的加载时机","slug":"goroot或者gopath在go程序运行时的加载时机","link":"#goroot或者gopath在go程序运行时的加载时机","children":[{"level":3,"title":"1. go build 编译时","slug":"_1-go-build-编译时","link":"#_1-go-build-编译时","children":[]},{"level":3,"title":"2. 运行二进制文件时","slug":"_2-运行二进制文件时","link":"#_2-运行二进制文件时","children":[]},{"level":3,"title":"3. 服务器上运行 Go 程序","slug":"_3-服务器上运行-go-程序","link":"#_3-服务器上运行-go-程序","children":[]},{"level":3,"title":"4. 实际测试","slug":"_4-实际测试","link":"#_4-实际测试","children":[]},{"level":3,"title":"总结表","slug":"总结表","link":"#总结表","children":[]},{"level":3,"title":"你的场景","slug":"你的场景","link":"#你的场景","children":[]}]}],"git":{},"filePathRelative":"content/go/base/GOROOT或者GOPATH在go程序运行时的加载时机.md"}');export{d as comp,o as data};
