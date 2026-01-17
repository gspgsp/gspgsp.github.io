import{_ as e,c as s,f as a,o as i}from"./app-CpoMCvnG.js";const l={};function t(d,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><h3 id="_1-由于使用的是go-module-所以在任何目录下都可以直接创建项目-我这里就直在-目录下创建" tabindex="-1"><a class="header-anchor" href="#_1-由于使用的是go-module-所以在任何目录下都可以直接创建项目-我这里就直在-目录下创建"><span>1.由于使用的是go Module, 所以在任何目录下都可以直接创建项目，我这里就直在 ~ 目录下创建</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir -p ~/go-project/go-gateway-demo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-初始化项目" tabindex="-1"><a class="header-anchor" href="#_2-初始化项目"><span>2.初始化项目</span></a></h3><p>在 <code>go-gateway-demo</code> 下执行</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">go mod init go-gateway-demo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-项目结构" tabindex="-1"><a class="header-anchor" href="#_3-项目结构"><span>3.项目结构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">go-gateway-demo/</span>
<span class="line">├── cmd/</span>
<span class="line">│   └── server/</span>
<span class="line">│       └── main.go</span>
<span class="line">├── internal/</span>
<span class="line">│   └── httpserver/</span>
<span class="line">│       └── server.go</span>
<span class="line">├── go.mod</span>
<span class="line">├── Dockerfile</span>
<span class="line">└── deploy/</span>
<span class="line">    ├── deployment.yaml</span>
<span class="line">    ├── service.yaml</span>
<span class="line">    └── gateway.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-代码" tabindex="-1"><a class="header-anchor" href="#_4-代码"><span>4.代码</span></a></h3><h4 id="_4-1-main-go" tabindex="-1"><a class="header-anchor" href="#_4-1-main-go"><span>4.1 <code>main.go</code></span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">	&quot;log&quot;</span>
<span class="line">	&quot;net/http&quot;</span>
<span class="line"></span>
<span class="line">	&quot;go-gateway-demo/internal/httpserver&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">	handler := httpserver.New()</span>
<span class="line"></span>
<span class="line">	log.Println(&quot;listening on :8080&quot;)</span>
<span class="line">	if err := http.ListenAndServe(&quot;:8080&quot;, handler); err != nil {</span>
<span class="line">		log.Fatal(err)</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-server-go" tabindex="-1"><a class="header-anchor" href="#_4-2-server-go"><span>4.2 <code>server.go</code></span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">package httpserver</span>
<span class="line"></span>
<span class="line">import &quot;net/http&quot;</span>
<span class="line"></span>
<span class="line">func New() http.Handler {</span>
<span class="line">	mux := http.NewServeMux()</span>
<span class="line"></span>
<span class="line">	mux.HandleFunc(&quot;/health&quot;, func(w http.ResponseWriter, _ *http.Request) {</span>
<span class="line">		w.WriteHeader(http.StatusOK)</span>
<span class="line">		w.Write([]byte(&quot;ok&quot;))</span>
<span class="line">	})</span>
<span class="line"></span>
<span class="line">	mux.HandleFunc(&quot;/&quot;, func(w http.ResponseWriter, _ *http.Request) {</span>
<span class="line">		w.Write([]byte(&quot;hello from go on k8s + gateway api&quot;))</span>
<span class="line">	})</span>
<span class="line"></span>
<span class="line">	return mux</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const c=e(l,[["render",t],["__file","part2.html.vue"]]),p=JSON.parse('{"path":"/project/k8s/part2.html","title":"","lang":"en-US","frontmatter":{"sidebarDepth":0},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[{"level":3,"title":"1.由于使用的是go Module, 所以在任何目录下都可以直接创建项目，我这里就直在 ~ 目录下创建","slug":"_1-由于使用的是go-module-所以在任何目录下都可以直接创建项目-我这里就直在-目录下创建","link":"#_1-由于使用的是go-module-所以在任何目录下都可以直接创建项目-我这里就直在-目录下创建","children":[]},{"level":3,"title":"2.初始化项目","slug":"_2-初始化项目","link":"#_2-初始化项目","children":[]},{"level":3,"title":"3.项目结构","slug":"_3-项目结构","link":"#_3-项目结构","children":[]},{"level":3,"title":"4.代码","slug":"_4-代码","link":"#_4-代码","children":[]}]}],"git":{},"filePathRelative":"project/k8s/part2.md"}');export{c as comp,p as data};
