import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h3 id="安装文档" tabindex="-1"><a class="header-anchor" href="#安装文档"><span>安装文档</span></a></h3><blockquote><p>https://go.dev/doc/install</p></blockquote><h3 id="步骤如下" tabindex="-1"><a class="header-anchor" href="#步骤如下"><span>步骤如下</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.Remove any previous Go installation by deleting the /usr/local/go folder (if it exists), then extract the archive you just downloaded into /usr/local, creating a fresh Go tree in /usr/local/go:</span>
<span class="line">$ rm -rf /usr/local/go &amp;&amp; tar -C /usr/local -xzf go1.25.5.linux-amd64.tar.gz</span>
<span class="line"></span>
<span class="line">(You may need to run each command separately with the necessary permissions, as root or through sudo.)</span>
<span class="line"></span>
<span class="line">Do not untar the archive into an existing /usr/local/go tree. This is known to produce broken Go installations.</span>
<span class="line"></span>
<span class="line">2.Add /usr/local/go/bin to the PATH environment variable.</span>
<span class="line">You can do this by adding the following line to your $HOME/.profile or /etc/profile (for a system-wide installation):</span>
<span class="line"></span>
<span class="line">export PATH=$PATH:/usr/local/go/bin</span>
<span class="line"></span>
<span class="line">Note: Changes made to a profile file may not apply until the next time you log into your computer. To apply the changes immediately, just run the shell commands directly or execute them from the profile using a command such as source $HOME/.profile.</span>
<span class="line"></span>
<span class="line">3.Verify that you&#39;ve installed Go by opening a command prompt and typing the following command:</span>
<span class="line">$ go version</span>
<span class="line"></span>
<span class="line">4.Confirm that the command prints the installed version of Go.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地执行-查看go-版本信息" tabindex="-1"><a class="header-anchor" href="#本地执行-查看go-版本信息"><span>本地执行，查看go 版本信息</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ go env</span>
<span class="line">AR=&#39;ar&#39;</span>
<span class="line">CC=&#39;gcc&#39;</span>
<span class="line">CGO_CFLAGS=&#39;-O2 -g&#39;</span>
<span class="line">CGO_CPPFLAGS=&#39;&#39;</span>
<span class="line">CGO_CXXFLAGS=&#39;-O2 -g&#39;</span>
<span class="line">CGO_ENABLED=&#39;1&#39;</span>
<span class="line">CGO_FFLAGS=&#39;-O2 -g&#39;</span>
<span class="line">CGO_LDFLAGS=&#39;-O2 -g&#39;</span>
<span class="line">CXX=&#39;g++&#39;</span>
<span class="line">GCCGO=&#39;gccgo&#39;</span>
<span class="line">GO111MODULE=&#39;&#39;</span>
<span class="line">GOAMD64=&#39;v1&#39;</span>
<span class="line">GOARCH=&#39;amd64&#39;</span>
<span class="line">GOAUTH=&#39;netrc&#39;</span>
<span class="line">GOBIN=&#39;&#39;</span>
<span class="line">GOCACHE=&#39;/home/qinhong/.cache/go-build&#39;</span>
<span class="line">GOCACHEPROG=&#39;&#39;</span>
<span class="line">GODEBUG=&#39;&#39;</span>
<span class="line">GOENV=&#39;/home/qinhong/.config/go/env&#39;</span>
<span class="line">GOEXE=&#39;&#39;</span>
<span class="line">GOEXPERIMENT=&#39;&#39;</span>
<span class="line">GOFIPS140=&#39;off&#39;</span>
<span class="line">GOFLAGS=&#39;&#39;</span>
<span class="line">GOGCCFLAGS=&#39;-fPIC -m64 -pthread -Wl,--no-gc-sections -fmessage-length=0 -ffile-prefix-map=/tmp/go-build1405963632=/tmp/go-build -gno-record-gcc-switches&#39;</span>
<span class="line">GOHOSTARCH=&#39;amd64&#39;</span>
<span class="line">GOHOSTOS=&#39;linux&#39;</span>
<span class="line">GOINSECURE=&#39;&#39;</span>
<span class="line">GOMOD=&#39;/dev/null&#39;</span>
<span class="line">GOMODCACHE=&#39;/usr/local/go-project/pkg/mod&#39;</span>
<span class="line">GONOPROXY=&#39;&#39;</span>
<span class="line">GONOSUMDB=&#39;&#39;</span>
<span class="line">GOOS=&#39;linux&#39;</span>
<span class="line">GOPATH=&#39;/usr/local/go-project&#39;</span>
<span class="line">GOPRIVATE=&#39;&#39;</span>
<span class="line">GOPROXY=&#39;https://goproxy.cn,direct&#39;</span>
<span class="line">GOROOT=&#39;/usr/local/go&#39;</span>
<span class="line">GOSUMDB=&#39;off&#39;</span>
<span class="line">GOTELEMETRY=&#39;local&#39;</span>
<span class="line">GOTELEMETRYDIR=&#39;/home/qinhong/.config/go/telemetry&#39;</span>
<span class="line">GOTMPDIR=&#39;&#39;</span>
<span class="line">GOTOOLCHAIN=&#39;auto&#39;</span>
<span class="line">GOTOOLDIR=&#39;/usr/local/go/pkg/tool/linux_amd64&#39;</span>
<span class="line">GOVCS=&#39;&#39;</span>
<span class="line">GOVERSION=&#39;go1.25.5&#39;</span>
<span class="line">GOWORK=&#39;&#39;</span>
<span class="line">PKG_CONFIG=&#39;pkg-config&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现先，即使新安装了go,但是还是会加载之前的就版本关于GOROOT和GOPATH等的配置，这是有问题的，因为新版本不需要手动配置这些</p><h3 id="查找哪里有相关的配置" tabindex="-1"><a class="header-anchor" href="#查找哪里有相关的配置"><span>查找哪里有相关的配置</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.在整个 home 目录搜索</span>
<span class="line">$ grep -r &quot;GOPATH&quot; ~ --include=&quot;.*&quot; --exclude-dir=.cache --exclude-dir=.config 2&gt;/dev/null | grep -v &quot;.git&quot; | grep -v &quot;node_modules&quot;</span>
<span class="line">/home/qinhong/.viminfo:    GOPATH=</span>
<span class="line">/home/qinhong/.viminfo:|3,1,1,1,1,0,1767076533,&quot;GOPATH=&quot;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">2./etc下查找</span>
<span class="line">$ grep -r &quot;GOPATH&quot; /etc/profile* /etc/bash* 2&gt;/dev/null</span>
<span class="line">/etc/bash.bashrc:export GOPATH=/usr/local/go-project</span>
<span class="line">/etc/bash.bashrc:export PATH=$PATH:$GOROOT/bin:$GOPATH/bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最后发现在-etc-bash-bashrc下配置" tabindex="-1"><a class="header-anchor" href="#最后发现在-etc-bash-bashrc下配置"><span>最后发现在/etc/bash.bashrc下配置</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ sudo vim /etc/bash.bashrc</span>
<span class="line">全部注释掉或者删除，我这里注释掉</span>
<span class="line">#export GOROOT=/usr/local/go</span>
<span class="line">#export GOPATH=/usr/local/go-project</span>
<span class="line">#export PATH=$PATH:$GOROOT/bin:$GOPATH/bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重新执行" tabindex="-1"><a class="header-anchor" href="#重新执行"><span>重新执行:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ export PATH=$PATH:/usr/local/go/bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="然后" tabindex="-1"><a class="header-anchor" href="#然后"><span>然后</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ go env</span>
<span class="line">AR=&#39;ar&#39;</span>
<span class="line">CC=&#39;gcc&#39;</span>
<span class="line">CGO_CFLAGS=&#39;-O2 -g&#39;</span>
<span class="line">CGO_CPPFLAGS=&#39;&#39;</span>
<span class="line">CGO_CXXFLAGS=&#39;-O2 -g&#39;</span>
<span class="line">CGO_ENABLED=&#39;1&#39;</span>
<span class="line">CGO_FFLAGS=&#39;-O2 -g&#39;</span>
<span class="line">CGO_LDFLAGS=&#39;-O2 -g&#39;</span>
<span class="line">CXX=&#39;g++&#39;</span>
<span class="line">GCCGO=&#39;gccgo&#39;</span>
<span class="line">GO111MODULE=&#39;&#39;</span>
<span class="line">GOAMD64=&#39;v1&#39;</span>
<span class="line">GOARCH=&#39;amd64&#39;</span>
<span class="line">GOAUTH=&#39;netrc&#39;</span>
<span class="line">GOBIN=&#39;&#39;</span>
<span class="line">GOCACHE=&#39;/home/qinhong/.cache/go-build&#39;</span>
<span class="line">GOCACHEPROG=&#39;&#39;</span>
<span class="line">GODEBUG=&#39;&#39;</span>
<span class="line">GOENV=&#39;/home/qinhong/.config/go/env&#39;</span>
<span class="line">GOEXE=&#39;&#39;</span>
<span class="line">GOEXPERIMENT=&#39;&#39;</span>
<span class="line">GOFIPS140=&#39;off&#39;</span>
<span class="line">GOFLAGS=&#39;&#39;</span>
<span class="line">GOGCCFLAGS=&#39;-fPIC -m64 -pthread -Wl,--no-gc-sections -fmessage-length=0 -ffile-prefix-map=/tmp/go-build3964680977=/tmp/go-build -gno-record-gcc-switches&#39;</span>
<span class="line">GOHOSTARCH=&#39;amd64&#39;</span>
<span class="line">GOHOSTOS=&#39;linux&#39;</span>
<span class="line">GOINSECURE=&#39;&#39;</span>
<span class="line">GOMOD=&#39;/dev/null&#39;</span>
<span class="line">GOMODCACHE=&#39;/home/qinhong/go/pkg/mod&#39;</span>
<span class="line">GONOPROXY=&#39;&#39;</span>
<span class="line">GONOSUMDB=&#39;&#39;</span>
<span class="line">GOOS=&#39;linux&#39;</span>
<span class="line">GOPATH=&#39;/home/qinhong/go&#39;</span>
<span class="line">GOPRIVATE=&#39;&#39;</span>
<span class="line">GOPROXY=&#39;https://goproxy.cn,direct&#39;</span>
<span class="line">GOROOT=&#39;/usr/local/go&#39;</span>
<span class="line">GOSUMDB=&#39;off&#39;</span>
<span class="line">GOTELEMETRY=&#39;local&#39;</span>
<span class="line">GOTELEMETRYDIR=&#39;/home/qinhong/.config/go/telemetry&#39;</span>
<span class="line">GOTMPDIR=&#39;&#39;</span>
<span class="line">GOTOOLCHAIN=&#39;auto&#39;</span>
<span class="line">GOTOOLDIR=&#39;/usr/local/go/pkg/tool/linux_amd64&#39;</span>
<span class="line">GOVCS=&#39;&#39;</span>
<span class="line">GOVERSION=&#39;go1.25.5&#39;</span>
<span class="line">GOWORK=&#39;&#39;</span>
<span class="line">PKG_CONFIG=&#39;pkg-config&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现正常展示了</p><h3 id="持久化配置" tabindex="-1"><a class="header-anchor" href="#持久化配置"><span>持久化配置</span></a></h3><p>vim /etc/profile 添加</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export PATH=/usr/local/go/bin:$PATH</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重启设备</p>`,20)]))}const r=s(l,[["render",c],["__file","ubuntu22安装最新go环境.html.vue"]]),t=JSON.parse('{"path":"/content/go/base/ubuntu22%E5%AE%89%E8%A3%85%E6%9C%80%E6%96%B0go%E7%8E%AF%E5%A2%83.html","title":"ubuntu22安装最新go环境","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu22安装最新go环境","head":[["meta",{"name":"title","content":"ubuntu22安装最新go环境"}],["meta",{"name":"description","content":"ubuntu22安装最新go环境"}],["meta",{"name":"keywords","content":"ubuntu22安装最新go环境"}],["meta",{"property":"og:title","content":"ubuntu22安装最新go环境"}],["meta",{"property":"og:description","content":"ubuntu22安装最新go环境"}]]},"headers":[{"level":3,"title":"安装文档","slug":"安装文档","link":"#安装文档","children":[]},{"level":3,"title":"步骤如下","slug":"步骤如下","link":"#步骤如下","children":[]},{"level":3,"title":"本地执行，查看go 版本信息","slug":"本地执行-查看go-版本信息","link":"#本地执行-查看go-版本信息","children":[]},{"level":3,"title":"查找哪里有相关的配置","slug":"查找哪里有相关的配置","link":"#查找哪里有相关的配置","children":[]},{"level":3,"title":"最后发现在/etc/bash.bashrc下配置","slug":"最后发现在-etc-bash-bashrc下配置","link":"#最后发现在-etc-bash-bashrc下配置","children":[]},{"level":3,"title":"重新执行:","slug":"重新执行","link":"#重新执行","children":[]},{"level":3,"title":"然后","slug":"然后","link":"#然后","children":[]},{"level":3,"title":"持久化配置","slug":"持久化配置","link":"#持久化配置","children":[]}],"git":{},"filePathRelative":"content/go/base/ubuntu22安装最新go环境.md"}');export{r as comp,t as data};
