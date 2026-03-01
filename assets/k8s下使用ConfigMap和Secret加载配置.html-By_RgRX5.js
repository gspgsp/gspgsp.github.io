import{_ as s,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function p(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h2 id="k8s下使用configmap和secret加载配置" tabindex="-1"><a class="header-anchor" href="#k8s下使用configmap和secret加载配置"><span>k8s下使用ConfigMap和Secret加载配置</span></a></h2><h3 id="_1-configmap-存储非敏感配置" tabindex="-1"><a class="header-anchor" href="#_1-configmap-存储非敏感配置"><span>1. ConfigMap - 存储非敏感配置</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apiVersion: v1</span>
<span class="line">kind: ConfigMap</span>
<span class="line">metadata:</span>
<span class="line">  name: go-demo-config</span>
<span class="line">  namespace: default</span>
<span class="line">data:</span>
<span class="line">  # 环境变量方式</span>
<span class="line">  LOG_LEVEL: &quot;info&quot;</span>
<span class="line">  SERVER_PORT: &quot;8080&quot;</span>
<span class="line">  DATABASE_HOST: &quot;postgres.default.svc.cluster.local&quot;</span>
<span class="line">  DATABASE_PORT: &quot;5432&quot;</span>
<span class="line">  DATABASE_NAME: &quot;myapp&quot;</span>
<span class="line">  </span>
<span class="line">  # 配置文件方式（YAML/JSON格式）</span>
<span class="line">  app.yaml: |</span>
<span class="line">    server:</span>
<span class="line">      port: 8080</span>
<span class="line">      timeout: 30s</span>
<span class="line">      readTimeout: 10s</span>
<span class="line">      writeTimeout: 10s</span>
<span class="line">    database:</span>
<span class="line">      host: postgres.default.svc.cluster.local</span>
<span class="line">      port: 5432</span>
<span class="line">      name: myapp</span>
<span class="line">      maxConnections: 20</span>
<span class="line">    logging:</span>
<span class="line">      level: info</span>
<span class="line">      format: json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_2-secret-存储敏感数据" tabindex="-1"><a class="header-anchor" href="#_2-secret-存储敏感数据"><span>2. Secret - 存储敏感数据</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apiVersion: v1</span>
<span class="line">kind: Secret</span>
<span class="line">metadata:</span>
<span class="line">  name: go-demo-secret</span>
<span class="line">  namespace: default</span>
<span class="line">type: Opaque</span>
<span class="line">stringData:  # 用 stringData 可以直接写明文，k8s 会自动 base64 编码</span>
<span class="line">  DATABASE_USER: &quot;postgres&quot;</span>
<span class="line">  DATABASE_PASSWORD: &quot;your-secure-password-123&quot;</span>
<span class="line">  API_KEY: &quot;secret-api-key-abc123xyz&quot;</span>
<span class="line">  REDIS_PASSWORD: &quot;redis-password&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3-增强的-deployment-集成-configmap-和-secret" tabindex="-1"><a class="header-anchor" href="#_3-增强的-deployment-集成-configmap-和-secret"><span>3. 增强的 Deployment - 集成 ConfigMap 和 Secret</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apiVersion: apps/v1</span>
<span class="line">kind: Deployment</span>
<span class="line">metadata:</span>
<span class="line">  name: go-demo-v1</span>
<span class="line">  namespace: default</span>
<span class="line">spec:</span>
<span class="line">  replicas: 4</span>
<span class="line">  strategy:</span>
<span class="line">    type: RollingUpdate</span>
<span class="line">    rollingUpdate:</span>
<span class="line">      maxSurge: 1</span>
<span class="line">      maxUnavailable: 1</span>
<span class="line">  selector:</span>
<span class="line">    matchLabels:</span>
<span class="line">      app: go-demo-v1</span>
<span class="line">  template:</span>
<span class="line">    metadata:</span>
<span class="line">      labels:</span>
<span class="line">        app: go-demo-v1</span>
<span class="line">    spec:</span>
<span class="line">      # 优雅关闭</span>
<span class="line">      terminationGracePeriodSeconds: 30</span>
<span class="line">      </span>
<span class="line">      containers:</span>
<span class="line">        - name: app</span>
<span class="line">          image: go-gateway-demo:0.1</span>
<span class="line">          imagePullPolicy: IfNotPresent</span>
<span class="line">          ports:</span>
<span class="line">            - containerPort: 8080</span>
<span class="line">              name: http</span>
<span class="line">          </span>
<span class="line">          # 方式 1: 从 ConfigMap 注入单个环境变量</span>
<span class="line">          env:</span>
<span class="line">            - name: LOG_LEVEL</span>
<span class="line">              valueFrom:</span>
<span class="line">                configMapKeyRef:</span>
<span class="line">                  name: go-demo-config</span>
<span class="line">                  key: LOG_LEVEL</span>
<span class="line">            - name: SERVER_PORT</span>
<span class="line">              valueFrom:</span>
<span class="line">                configMapKeyRef:</span>
<span class="line">                  name: go-demo-config</span>
<span class="line">                  key: SERVER_PORT</span>
<span class="line">            - name: DATABASE_HOST</span>
<span class="line">              valueFrom:</span>
<span class="line">                configMapKeyRef:</span>
<span class="line">                  name: go-demo-config</span>
<span class="line">                  key: DATABASE_HOST</span>
<span class="line">            - name: DATABASE_PORT</span>
<span class="line">              valueFrom:</span>
<span class="line">                configMapKeyRef:</span>
<span class="line">                  name: go-demo-config</span>
<span class="line">                  key: DATABASE_PORT</span>
<span class="line">            - name: DATABASE_NAME</span>
<span class="line">              valueFrom:</span>
<span class="line">                configMapKeyRef:</span>
<span class="line">                  name: go-demo-config</span>
<span class="line">                  key: DATABASE_NAME</span>
<span class="line">            </span>
<span class="line">            # 从 Secret 注入敏感数据</span>
<span class="line">            - name: DATABASE_USER</span>
<span class="line">              valueFrom:</span>
<span class="line">                secretKeyRef:</span>
<span class="line">                  name: go-demo-secret</span>
<span class="line">                  key: DATABASE_USER</span>
<span class="line">            - name: DATABASE_PASSWORD</span>
<span class="line">              valueFrom:</span>
<span class="line">                secretKeyRef:</span>
<span class="line">                  name: go-demo-secret</span>
<span class="line">                  key: DATABASE_PASSWORD</span>
<span class="line">            - name: API_KEY</span>
<span class="line">              valueFrom:</span>
<span class="line">                secretKeyRef:</span>
<span class="line">                  name: go-demo-secret</span>
<span class="line">                  key: API_KEY</span>
<span class="line">          </span>
<span class="line">          # 方式 2: 挂载 ConfigMap 为文件（用于配置文件）</span>
<span class="line">          volumeMounts:</span>
<span class="line">            - name: config-volume</span>
<span class="line">              mountPath: /etc/config</span>
<span class="line">              readOnly: true</span>
<span class="line">          </span>
<span class="line">          # 资源限制</span>
<span class="line">          resources:</span>
<span class="line">            requests:</span>
<span class="line">              memory: &quot;128Mi&quot;</span>
<span class="line">              cpu: &quot;100m&quot;</span>
<span class="line">            limits:</span>
<span class="line">              memory: &quot;256Mi&quot;</span>
<span class="line">              cpu: &quot;500m&quot;</span>
<span class="line">          </span>
<span class="line">          # 存活探针（检测容器是否还活着）</span>
<span class="line">          livenessProbe:</span>
<span class="line">            httpGet:</span>
<span class="line">              path: /health</span>
<span class="line">              port: 8080</span>
<span class="line">            initialDelaySeconds: 10</span>
<span class="line">            periodSeconds: 10</span>
<span class="line">            timeoutSeconds: 3</span>
<span class="line">            failureThreshold: 3</span>
<span class="line">          </span>
<span class="line">          # 就绪探针（检测容器是否准备好接收流量）</span>
<span class="line">          readinessProbe:</span>
<span class="line">            httpGet:</span>
<span class="line">              path: /ready</span>
<span class="line">              port: 8080</span>
<span class="line">            initialDelaySeconds: 5</span>
<span class="line">            periodSeconds: 5</span>
<span class="line">            timeoutSeconds: 2</span>
<span class="line">            failureThreshold: 2</span>
<span class="line">      </span>
<span class="line">      # 定义卷</span>
<span class="line">      volumes:</span>
<span class="line">        - name: config-volume</span>
<span class="line">          configMap:</span>
<span class="line">            name: go-demo-config</span>
<span class="line">            items:</span>
<span class="line">              - key: app.yaml</span>
<span class="line">                path: app.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>volumeMounts 的核心作用：</p><blockquote><p>把 ConfigMap/Secret 中的数据挂载成容器内的真实文件</p></blockquote><p>对比理解:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">env（环境变量）:</span>
<span class="line">  LOG_LEVEL=info</span>
<span class="line">  ↓</span>
<span class="line">  应用通过 os.Getenv(&quot;LOG_LEVEL&quot;) 读取</span>
<span class="line"></span>
<span class="line">volumeMounts（文件挂载）:</span>
<span class="line">  ConfigMap.data.app.yaml</span>
<span class="line">  ↓</span>
<span class="line">  /etc/config/app.yaml（容器内的真实文件）</span>
<span class="line">  ↓</span>
<span class="line">  应用通过 ioutil.ReadFile(&quot;/etc/config/app.yaml&quot;) 读取</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键优势：</p><blockquote><p>适合复杂配置文件 - 你的 ConfigMap 中有 YAML/JSON，挂载后就是可用的文件<br> 支持热更新 - 修改 ConfigMap，文件会在 1 分钟内自动更新，无需重启 Pod<br> 权限控制 - 可以设置 readOnly: true 防止容器修改配置<br> 文件操作 - 应用可以用标准的文件读取方法，就像读取本地文件一样</p></blockquote><hr><h2 id="go程序如何读取mountpath中的文件详解" tabindex="-1"><a class="header-anchor" href="#go程序如何读取mountpath中的文件详解"><span>Go程序如何读取mountPath中的文件详解</span></a></h2><h2 id="单文件的情况" tabindex="-1"><a class="header-anchor" href="#单文件的情况"><span>单文件的情况</span></a></h2><h3 id="step-1-定义-configmap" tabindex="-1"><a class="header-anchor" href="#step-1-定义-configmap"><span>Step 1: 定义 ConfigMap</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> app<span class="token punctuation">-</span>config</span>
<span class="line"><span class="token key atrule">data</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">app.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">    server:</span>
<span class="line">      port: 8080</span>
<span class="line">      host: 0.0.0.0</span>
<span class="line">    database:</span>
<span class="line">      name: mydb</span>
<span class="line">      host: localhost</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="step-2-deployment-中挂载" tabindex="-1"><a class="header-anchor" href="#step-2-deployment-中挂载"><span>Step 2: Deployment 中挂载</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">0.1</span></span>
<span class="line">          </span>
<span class="line">          <span class="token comment"># ← 挂载这里</span></span>
<span class="line">          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume</span>
<span class="line">              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/config</span>
<span class="line">              <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">      </span>
<span class="line">      <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume</span>
<span class="line">          <span class="token key atrule">configMap</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> app<span class="token punctuation">-</span>config</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="step-3-容器内的文件结构" tabindex="-1"><a class="header-anchor" href="#step-3-容器内的文件结构"><span>Step 3: 容器内的文件结构</span></a></h3><p>当 Pod 启动后，容器内会有：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/</span>
<span class="line">├── etc/</span>
<span class="line">│   ├── config/</span>
<span class="line">│   │   └── app.yaml         ← 这个文件就是 ConfigMap 中的 app.yaml</span>
<span class="line">│   ├── passwd</span>
<span class="line">│   └── ...</span>
<span class="line">├── home/</span>
<span class="line">├── var/</span>
<span class="line">└── ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="step-4-go-程序读取" tabindex="-1"><a class="header-anchor" href="#step-4-go-程序读取"><span>Step 4: Go 程序读取</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">// main.go</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;fmt&quot;</span></span>
<span class="line">  <span class="token string">&quot;io/ioutil&quot;</span></span>
<span class="line">  <span class="token string">&quot;log&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 直接读取挂载的文件</span></span>
<span class="line">  content<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;/etc/config/app.yaml&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 输出：</span></span>
<span class="line">  <span class="token comment">// server:</span></span>
<span class="line">  <span class="token comment">//   port: 8080</span></span>
<span class="line">  <span class="token comment">//   host: 0.0.0.0</span></span>
<span class="line">  <span class="token comment">// database:</span></span>
<span class="line">  <span class="token comment">//   name: mydb</span></span>
<span class="line">  <span class="token comment">//   host: localhost</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="多个文件的情况" tabindex="-1"><a class="header-anchor" href="#多个文件的情况"><span>多个文件的情况</span></a></h2><h3 id="configmap-中有多个文件" tabindex="-1"><a class="header-anchor" href="#configmap-中有多个文件"><span>ConfigMap 中有多个文件</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> app<span class="token punctuation">-</span>config</span>
<span class="line"><span class="token key atrule">data</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">app.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">    server:</span>
<span class="line">      port: 8080</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">database.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">    host: postgres.local</span>
<span class="line">    port: 5432</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">redis.conf</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">    maxmemory: 1gb</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="挂载配置" tabindex="-1"><a class="header-anchor" href="#挂载配置"><span>挂载配置</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume</span>
<span class="line">    <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/config</span>
<span class="line">    <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器内的文件结构" tabindex="-1"><a class="header-anchor" href="#容器内的文件结构"><span>容器内的文件结构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/etc/config/</span>
<span class="line">├── app.yaml        ← ConfigMap 的 key: app.yaml</span>
<span class="line">├── database.yaml   ← ConfigMap 的 key: database.yaml</span>
<span class="line">└── redis.conf      ← ConfigMap 的 key: redis.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go-程序读取" tabindex="-1"><a class="header-anchor" href="#go-程序读取"><span>Go 程序读取</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;io/ioutil&quot;</span></span>
<span class="line">  <span class="token string">&quot;log&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 读取第一个文件</span></span>
<span class="line">  app<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;/etc/config/app.yaml&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;App config: %s&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 读取第二个文件</span></span>
<span class="line">  db<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;/etc/config/database.yaml&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Database config: %s&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 读取第三个文件</span></span>
<span class="line">  redis<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;/etc/config/redis.conf&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Redis config: %s&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>redis<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="实际-http-服务器示例" tabindex="-1"><a class="header-anchor" href="#实际-http-服务器示例"><span>实际 HTTP 服务器示例</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">  &quot;fmt&quot;</span>
<span class="line">  &quot;io/ioutil&quot;</span>
<span class="line">  &quot;log&quot;</span>
<span class="line">  &quot;net/http&quot;</span>
<span class="line">  &quot;os&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">  // 启动时读取配置</span>
<span class="line">  configData, err := ioutil.ReadFile(&quot;/etc/config/app.yaml&quot;)</span>
<span class="line">  if err != nil {</span>
<span class="line">    log.Printf(&quot;Warning: no config file found, using defaults&quot;)</span>
<span class="line">  } else {</span>
<span class="line">    log.Printf(&quot;Loaded config: %s&quot;, string(configData))</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 设置路由</span>
<span class="line">  http.HandleFunc(&quot;/&quot;, func(w http.ResponseWriter, r *http.Request) {</span>
<span class="line">    fmt.Fprintf(w, &quot;Hello from Go App\\n&quot;)</span>
<span class="line">    fmt.Fprintf(w, &quot;Config:\\n%s&quot;, string(configData))</span>
<span class="line">  })</span>
<span class="line">  </span>
<span class="line">  // 配置读取端点（用于验证）</span>
<span class="line">  http.HandleFunc(&quot;/config&quot;, func(w http.ResponseWriter, r *http.Request) {</span>
<span class="line">    data, _ := ioutil.ReadFile(&quot;/etc/config/app.yaml&quot;)</span>
<span class="line">    w.Header().Set(&quot;Content-Type&quot;, &quot;application/yaml&quot;)</span>
<span class="line">    fmt.Fprintf(w, &quot;%s&quot;, string(data))</span>
<span class="line">  })</span>
<span class="line">  </span>
<span class="line">  // 健康检查</span>
<span class="line">  http.HandleFunc(&quot;/health&quot;, func(w http.ResponseWriter, r *http.Request) {</span>
<span class="line">    // 检查配置文件是否可访问</span>
<span class="line">    _, err := os.Stat(&quot;/etc/config/app.yaml&quot;)</span>
<span class="line">    if err != nil {</span>
<span class="line">      w.WriteHeader(http.StatusInternalServerError)</span>
<span class="line">      fmt.Fprintf(w, &quot;config file not accessible&quot;)</span>
<span class="line">      return</span>
<span class="line">    }</span>
<span class="line">    w.WriteHeader(http.StatusOK)</span>
<span class="line">    fmt.Fprintf(w, &quot;healthy&quot;)</span>
<span class="line">  })</span>
<span class="line">  </span>
<span class="line">  port := &quot;:8080&quot;</span>
<span class="line">  log.Printf(&quot;Server starting on %s&quot;, port)</span>
<span class="line">  log.Fatal(http.ListenAndServe(port, nil))</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="关键要点" tabindex="-1"><a class="header-anchor" href="#关键要点"><span>关键要点</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. ✅ mountPath: /etc/config 就是容器内的真实路径</span>
<span class="line">2. ✅ ConfigMap 中的每个 key 都会变成一个文件</span>
<span class="line">3. ✅ Go 程序用标准的文件读取函数就能读</span>
<span class="line">4. ✅ 就像读取本地文件一样简单</span>
<span class="line">5. ✅ 可以用 os.Stat() 检查文件是否存在</span>
<span class="line">6. ✅ 可以用 ioutil.ReadFile() 读取内容</span>
<span class="line">7. ✅ 如果是 YAML/JSON，可以用对应的库解析</span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47)]))}const d=s(i,[["render",p],["__file","k8s下使用ConfigMap和Secret加载配置.html.vue"]]),o=JSON.parse('{"path":"/content/service/k8s/k8s%E4%B8%8B%E4%BD%BF%E7%94%A8ConfigMap%E5%92%8CSecret%E5%8A%A0%E8%BD%BD%E9%85%8D%E7%BD%AE.html","title":"k8s下使用ConfigMap和Secret加载配置","lang":"en-US","frontmatter":{"sidebar":false,"title":"k8s下使用ConfigMap和Secret加载配置","head":[["meta",{"name":"title","content":"k8s下使用ConfigMap和Secret加载配置"}],["meta",{"name":"description","content":"k8s下使用ConfigMap和Secret加载配置"}],["meta",{"name":"keywords","content":"k8s下使用ConfigMap和Secret加载配置"}],["meta",{"property":"og:title","content":"k8s下使用ConfigMap和Secret加载配置"}],["meta",{"property":"og:description","content":"k8s下使用ConfigMap和Secret加载配置"}]]},"headers":[{"level":2,"title":"k8s下使用ConfigMap和Secret加载配置","slug":"k8s下使用configmap和secret加载配置","link":"#k8s下使用configmap和secret加载配置","children":[{"level":3,"title":"1. ConfigMap - 存储非敏感配置","slug":"_1-configmap-存储非敏感配置","link":"#_1-configmap-存储非敏感配置","children":[]},{"level":3,"title":"2. Secret - 存储敏感数据","slug":"_2-secret-存储敏感数据","link":"#_2-secret-存储敏感数据","children":[]},{"level":3,"title":"3. 增强的 Deployment - 集成 ConfigMap 和 Secret","slug":"_3-增强的-deployment-集成-configmap-和-secret","link":"#_3-增强的-deployment-集成-configmap-和-secret","children":[]}]},{"level":2,"title":"Go程序如何读取mountPath中的文件详解","slug":"go程序如何读取mountpath中的文件详解","link":"#go程序如何读取mountpath中的文件详解","children":[]},{"level":2,"title":"单文件的情况","slug":"单文件的情况","link":"#单文件的情况","children":[{"level":3,"title":"Step 1: 定义 ConfigMap","slug":"step-1-定义-configmap","link":"#step-1-定义-configmap","children":[]},{"level":3,"title":"Step 2: Deployment 中挂载","slug":"step-2-deployment-中挂载","link":"#step-2-deployment-中挂载","children":[]},{"level":3,"title":"Step 3: 容器内的文件结构","slug":"step-3-容器内的文件结构","link":"#step-3-容器内的文件结构","children":[]},{"level":3,"title":"Step 4: Go 程序读取","slug":"step-4-go-程序读取","link":"#step-4-go-程序读取","children":[]}]},{"level":2,"title":"多个文件的情况","slug":"多个文件的情况","link":"#多个文件的情况","children":[{"level":3,"title":"ConfigMap 中有多个文件","slug":"configmap-中有多个文件","link":"#configmap-中有多个文件","children":[]},{"level":3,"title":"挂载配置","slug":"挂载配置","link":"#挂载配置","children":[]},{"level":3,"title":"容器内的文件结构","slug":"容器内的文件结构","link":"#容器内的文件结构","children":[]},{"level":3,"title":"Go 程序读取","slug":"go-程序读取","link":"#go-程序读取","children":[]}]},{"level":2,"title":"实际 HTTP 服务器示例","slug":"实际-http-服务器示例","link":"#实际-http-服务器示例","children":[]},{"level":2,"title":"关键要点","slug":"关键要点","link":"#关键要点","children":[]}],"git":{},"filePathRelative":"content/service/k8s/k8s下使用ConfigMap和Secret加载配置.md"}');export{d as comp,o as data};
