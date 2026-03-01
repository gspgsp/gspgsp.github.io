import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><h3 id="_1-由于使用的是go-module-所以在任何目录下都可以直接创建项目-我这里就直在-目录下创建" tabindex="-1"><a class="header-anchor" href="#_1-由于使用的是go-module-所以在任何目录下都可以直接创建项目-我这里就直在-目录下创建"><span>1.由于使用的是go Module, 所以在任何目录下都可以直接创建项目，我这里就直在 ~ 目录下创建</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir -p ~/go-project/go-gateway-demo</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-dockerfile" tabindex="-1"><a class="header-anchor" href="#_4-3-dockerfile"><span>4.3 <code>Dockerfile</code></span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">FROM golang:1.25-alpine AS builder</span>
<span class="line">WORKDIR /app</span>
<span class="line"></span>
<span class="line"># COPY go.mod</span>
<span class="line">COPY go.mod ./</span>
<span class="line"></span>
<span class="line"># 下载依赖（如果有的话）</span>
<span class="line">RUN go mod download</span>
<span class="line"></span>
<span class="line">COPY . .</span>
<span class="line">RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o app ./cmd/server</span>
<span class="line"></span>
<span class="line">FROM gcr.io/distroless/base-debian12</span>
<span class="line">WORKDIR /app</span>
<span class="line">COPY --from=builder /app/app /app/app</span>
<span class="line"></span>
<span class="line">EXPOSE 8080</span>
<span class="line">USER nonroot:nonroot</span>
<span class="line">ENTRYPOINT [&quot;/app/app&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-deploy-deployment-yaml" tabindex="-1"><a class="header-anchor" href="#_4-4-deploy-deployment-yaml"><span>4.4 <code>deploy/deployment.yaml</code></span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apiVersion: apps/v1</span>
<span class="line">kind: Deployment</span>
<span class="line">metadata:</span>
<span class="line">  name: go-demo</span>
<span class="line">spec:</span>
<span class="line">  replicas: 1</span>
<span class="line">  selector:</span>
<span class="line">    matchLabels:</span>
<span class="line">      app: go-demo</span>
<span class="line">  template:</span>
<span class="line">    metadata:</span>
<span class="line">      labels:</span>
<span class="line">        app: go-demo</span>
<span class="line">    spec:</span>
<span class="line">      containers:</span>
<span class="line">        - name: app</span>
<span class="line">          image: go-gateway-demo:0.1</span>
<span class="line">          imagePullPolicy: IfNotPresent</span>
<span class="line">          ports:</span>
<span class="line">            - containerPort: 8080</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-deploy-service-yaml" tabindex="-1"><a class="header-anchor" href="#_4-5-deploy-service-yaml"><span>4.5 <code>deploy/service.yaml</code></span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apiVersion: v1</span>
<span class="line">kind: Service</span>
<span class="line">metadata:</span>
<span class="line">  name: go-demo</span>
<span class="line">spec:</span>
<span class="line">  selector:</span>
<span class="line">    app: go-demo</span>
<span class="line">  ports:</span>
<span class="line">    - port: 80</span>
<span class="line">      targetPort: 8080</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-deploy-gateway-yaml" tabindex="-1"><a class="header-anchor" href="#_4-6-deploy-gateway-yaml"><span>4.6 <code>deploy/gateway.yaml</code></span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># ---------- GatewayClass ----------</span>
<span class="line">apiVersion: gateway.networking.k8s.io/v1</span>
<span class="line">kind: GatewayClass</span>
<span class="line">metadata:</span>
<span class="line">  name: demo-gateway-class</span>
<span class="line">spec:</span>
<span class="line">  controllerName: istio.io/gateway-controller # 如果你用 Envoy Gateway 或 Traefik 要改这里</span>
<span class="line"></span>
<span class="line">---</span>
<span class="line"></span>
<span class="line"># ---------- Gateway ----------</span>
<span class="line">apiVersion: gateway.networking.k8s.io/v1</span>
<span class="line">kind: Gateway</span>
<span class="line">metadata:</span>
<span class="line">  name: demo-gateway</span>
<span class="line">spec:</span>
<span class="line">  gatewayClassName: demo-gateway-class</span>
<span class="line">  listeners:</span>
<span class="line">    - name: http</span>
<span class="line">      protocol: HTTP</span>
<span class="line">      port: 80</span>
<span class="line"></span>
<span class="line">---</span>
<span class="line"></span>
<span class="line"># ---------- HTTPRoute ----------</span>
<span class="line">apiVersion: gateway.networking.k8s.io/v1</span>
<span class="line">kind: HTTPRoute</span>
<span class="line">metadata:</span>
<span class="line">  name: go-demo-route</span>
<span class="line">spec:</span>
<span class="line">  parentRefs:</span>
<span class="line">    - name: demo-gateway</span>
<span class="line">  hostnames:</span>
<span class="line">    - demo.local</span>
<span class="line">  rules:</span>
<span class="line">    - matches:</span>
<span class="line">        - path:</span>
<span class="line">            type: PathPrefix</span>
<span class="line">            value: &quot;/&quot;</span>
<span class="line">      backendRefs:</span>
<span class="line">        - name: go-demo</span>
<span class="line">          port: 80</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const r=s(l,[["render",d],["__file","part2.html.vue"]]),t=JSON.parse('{"path":"/project/k8s/part2.html","title":"","lang":"en-US","frontmatter":{"sidebarDepth":0},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[{"level":3,"title":"1.由于使用的是go Module, 所以在任何目录下都可以直接创建项目，我这里就直在 ~ 目录下创建","slug":"_1-由于使用的是go-module-所以在任何目录下都可以直接创建项目-我这里就直在-目录下创建","link":"#_1-由于使用的是go-module-所以在任何目录下都可以直接创建项目-我这里就直在-目录下创建","children":[]},{"level":3,"title":"2.初始化项目","slug":"_2-初始化项目","link":"#_2-初始化项目","children":[]},{"level":3,"title":"3.项目结构","slug":"_3-项目结构","link":"#_3-项目结构","children":[]},{"level":3,"title":"4.代码","slug":"_4-代码","link":"#_4-代码","children":[]}]}],"git":{},"filePathRelative":"project/k8s/part2.md"}');export{r as comp,t as data};
