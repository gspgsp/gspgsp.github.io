import{_ as p,c as i,a as n,f as t,o as c,r as a}from"./app-BB_BIQV8.js";const o={};function d(r,s){const e=a("DocSearchInPage"),l=a("InArticleAd");return c(),i("div",null,[n(e),n(l),s[0]||(s[0]=t(`<h1 id="kubernetes-标签完整参考手册" tabindex="-1"><a class="header-anchor" href="#kubernetes-标签完整参考手册"><span>Kubernetes 标签完整参考手册</span></a></h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ol><li><a href="#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5">核心概念</a></li><li><a href="#node-%E6%A0%87%E7%AD%BE%E6%93%8D%E4%BD%9C">Node 标签操作</a></li><li><a href="#pod-%E6%A0%87%E7%AD%BE%E6%93%8D%E4%BD%9C">Pod 标签操作</a></li><li><a href="#%E6%A0%87%E7%AD%BE%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF">标签使用场景</a></li><li><a href="#%E5%AE%8C%E6%95%B4%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A4%BA%E4%BE%8B">完整工作流示例</a></li><li><a href="#%E6%9F%A5%E8%AF%A2%E5%92%8C%E8%B0%83%E8%AF%95">查询和调试</a></li><li><a href="#%E6%A0%87%E7%AD%BE%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5">标签最佳实践</a></li></ol><hr><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h2><h3 id="什么是标签" tabindex="-1"><a class="header-anchor" href="#什么是标签"><span>什么是标签？</span></a></h3><p>标签是 Kubernetes 资源上的键值对，用于组织和选择资源。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">标签格式：key=value</span>
<span class="line"></span>
<span class="line">例如：</span>
<span class="line">  workload=compute    （key: workload, value: compute）</span>
<span class="line">  app=go-demo         （key: app, value: go-demo）</span>
<span class="line">  env=production      （key: env, value: production）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标签的三层应用" tabindex="-1"><a class="header-anchor" href="#标签的三层应用"><span>标签的三层应用</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">第一层：标记资源</span>
<span class="line">  Node 标签：标记不同类型的节点</span>
<span class="line">  Pod 标签：标记不同类型的 Pod</span>
<span class="line"></span>
<span class="line">第二层：选择资源</span>
<span class="line">  nodeAffinity：使用 Node 标签选择节点</span>
<span class="line">  Service selector：使用 Pod 标签选择 Pod</span>
<span class="line">  podAffinity：使用 Pod 标签选择 Pod</span>
<span class="line"></span>
<span class="line">第三层：查询和管理</span>
<span class="line">  kubectl get pods -l key=value</span>
<span class="line">  kubectl delete pods -l key=value</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node-标签-vs-pod-标签" tabindex="-1"><a class="header-anchor" href="#node-标签-vs-pod-标签"><span>Node 标签 vs Pod 标签</span></a></h3><table><thead><tr><th>特性</th><th>Node 标签</th><th>Pod 标签</th></tr></thead><tbody><tr><td><strong>位置</strong></td><td>Node 节点</td><td>Deployment/Pod metadata</td></tr><tr><td><strong>添加方式</strong></td><td><code>kubectl label nodes</code></td><td><code>template.metadata.labels</code></td></tr><tr><td><strong>主要用途</strong></td><td>nodeAffinity 选择节点</td><td>Service selector + podAffinity</td></tr><tr><td><strong>修改频率</strong></td><td>较少（节点相对稳定）</td><td>较多（Pod 经常更新）</td></tr><tr><td><strong>示例</strong></td><td><code>workload=compute, zone=zone-a</code></td><td><code>app=go-demo, env=prod, version=v1</code></td></tr></tbody></table><hr><h2 id="node-标签操作" tabindex="-1"><a class="header-anchor" href="#node-标签操作"><span>Node 标签操作</span></a></h2><h3 id="_1-查看-node-标签" tabindex="-1"><a class="header-anchor" href="#_1-查看-node-标签"><span>1. 查看 Node 标签</span></a></h3><h4 id="查看所有-node-和标签" tabindex="-1"><a class="header-anchor" href="#查看所有-node-和标签"><span>查看所有 Node 和标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 显示所有 Node 和它们的标签</span></span>
<span class="line">kubectl get nodes --show-labels</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># NAME      STATUS   ROLES           AGE    VERSION   LABELS</span></span>
<span class="line"><span class="token comment"># master    Ready    control-plane   10d    v1.28.0   kubernetes.io/hostname=master,...</span></span>
<span class="line"><span class="token comment"># worker1   Ready    &lt;none&gt;          9d     v1.28.0   kubernetes.io/hostname=worker1,...</span></span>
<span class="line"><span class="token comment"># worker2   Ready    &lt;none&gt;          9d     v1.28.0   kubernetes.io/hostname=worker2,...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="只显示自定义标签列" tabindex="-1"><a class="header-anchor" href="#只显示自定义标签列"><span>只显示自定义标签列</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 显示 Node 和指定标签列</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-L</span> workload,zone,storage</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># NAME      STATUS   WORKLOAD   ZONE     STORAGE</span></span>
<span class="line"><span class="token comment"># master    Ready    </span></span>
<span class="line"><span class="token comment"># worker1   Ready    compute    zone-a   </span></span>
<span class="line"><span class="token comment"># worker2   Ready    compute    zone-b   </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看特定-node-的详细标签" tabindex="-1"><a class="header-anchor" href="#查看特定-node-的详细标签"><span>查看特定 Node 的详细标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看 worker1 的所有标签</span></span>
<span class="line">kubectl describe <span class="token function">node</span> worker1 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-A</span> <span class="token number">10</span> Labels</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># Labels:</span></span>
<span class="line"><span class="token comment">#   beta.kubernetes.io/arch=amd64</span></span>
<span class="line"><span class="token comment">#   beta.kubernetes.io/instance-type=t2.large</span></span>
<span class="line"><span class="token comment">#   beta.kubernetes.io/os=linux</span></span>
<span class="line"><span class="token comment">#   kubernetes.io/hostname=worker1</span></span>
<span class="line"><span class="token comment">#   workload=compute</span></span>
<span class="line"><span class="token comment">#   zone=zone-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用-yaml-查看标签" tabindex="-1"><a class="header-anchor" href="#用-yaml-查看标签"><span>用 YAML 查看标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 以 YAML 格式查看 Node 标签</span></span>
<span class="line">kubectl get <span class="token function">node</span> worker1 <span class="token parameter variable">-o</span> yaml <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-A</span> <span class="token number">10</span> labels</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># labels:</span></span>
<span class="line"><span class="token comment">#   kubernetes.io/hostname: worker1</span></span>
<span class="line"><span class="token comment">#   workload: compute</span></span>
<span class="line"><span class="token comment">#   zone: zone-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_2-添加-node-标签" tabindex="-1"><a class="header-anchor" href="#_2-添加-node-标签"><span>2. 添加 Node 标签</span></a></h3><h4 id="添加单个标签" tabindex="-1"><a class="header-anchor" href="#添加单个标签"><span>添加单个标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 给 worker1 添加一个标签</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-L</span> workload</span>
<span class="line"><span class="token comment"># NAME      WORKLOAD</span></span>
<span class="line"><span class="token comment"># worker1   compute</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加多个标签" tabindex="-1"><a class="header-anchor" href="#添加多个标签"><span>添加多个标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 一次添加多个标签（空格分隔）</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute <span class="token assign-left variable">zone</span><span class="token operator">=</span>zone-a storage-type<span class="token operator">=</span>ssd <span class="token assign-left variable">performance</span><span class="token operator">=</span>high</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get nodes worker1 --show-labels <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;workload=\\|zone=\\|storage-type=\\|performance=&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="批量添加标签" tabindex="-1"><a class="header-anchor" href="#批量添加标签"><span>批量添加标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 给多个 Node 添加相同标签</span></span>
<span class="line">kubectl label nodes worker1 worker2 worker3 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给选中的 Node 添加标签（使用选择器）</span></span>
<span class="line">kubectl label nodes <span class="token parameter variable">-l</span> kubernetes.io/hostname<span class="token operator">=</span>worker1 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给所有 Worker Node 添加标签</span></span>
<span class="line">kubectl label nodes <span class="token parameter variable">-l</span> <span class="token string">&#39;!node-role.kubernetes.io/control-plane&#39;</span> <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3-修改-node-标签" tabindex="-1"><a class="header-anchor" href="#_3-修改-node-标签"><span>3. 修改 Node 标签</span></a></h3><h4 id="修改现有标签" tabindex="-1"><a class="header-anchor" href="#修改现有标签"><span>修改现有标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 修改 worker1 的 workload 标签值</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">workload</span><span class="token operator">=</span>storage <span class="token parameter variable">--overwrite</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-L</span> workload</span>
<span class="line"><span class="token comment"># NAME      WORKLOAD</span></span>
<span class="line"><span class="token comment"># worker1   storage    # 已改为 storage</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原地修改-使用-patch" tabindex="-1"><a class="header-anchor" href="#原地修改-使用-patch"><span>原地修改（使用 patch）</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 用 patch 修改标签</span></span>
<span class="line">kubectl patch <span class="token function">node</span> worker1 <span class="token parameter variable">-p</span> <span class="token string">&#39;{&quot;metadata&quot;:{&quot;labels&quot;:{&quot;workload&quot;:&quot;batch&quot;}}}&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-L</span> workload</span>
<span class="line"><span class="token comment"># NAME      WORKLOAD</span></span>
<span class="line"><span class="token comment"># worker1   batch</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_4-删除-node-标签" tabindex="-1"><a class="header-anchor" href="#_4-删除-node-标签"><span>4. 删除 Node 标签</span></a></h3><h4 id="删除单个标签" tabindex="-1"><a class="header-anchor" href="#删除单个标签"><span>删除单个标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 删除 worker1 的 workload 标签</span></span>
<span class="line">kubectl label nodes worker1 workload-</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-L</span> workload</span>
<span class="line"><span class="token comment"># NAME      WORKLOAD</span></span>
<span class="line"><span class="token comment"># worker1   &lt;none&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除多个标签" tabindex="-1"><a class="header-anchor" href="#删除多个标签"><span>删除多个标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 删除多个标签</span></span>
<span class="line">kubectl label nodes worker1 workload- zone- storage-type-</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get nodes worker1 --show-labels</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_5-node-标签的规范" tabindex="-1"><a class="header-anchor" href="#_5-node-标签的规范"><span>5. Node 标签的规范</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 标签命名规范：</span></span>
<span class="line"><span class="token comment"># - 只能包含：字母、数字、-、.、_</span></span>
<span class="line"><span class="token comment"># - 必须以字母或数字开头</span></span>
<span class="line"><span class="token comment"># - 最长 63 字符</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ✓ 有效标签</span></span>
<span class="line"><span class="token assign-left variable">workload</span><span class="token operator">=</span>compute</span>
<span class="line"><span class="token assign-left variable">zone</span><span class="token operator">=</span>zone-a</span>
<span class="line"><span class="token assign-left variable">storage.type</span><span class="token operator">=</span>ssd</span>
<span class="line"><span class="token assign-left variable">node_type</span><span class="token operator">=</span>gpu</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ❌ 无效标签</span></span>
<span class="line"><span class="token assign-left variable">Workload</span><span class="token operator">=</span>compute       <span class="token comment"># 大写不允许</span></span>
<span class="line"><span class="token assign-left variable">workload_type</span><span class="token operator">=</span>compute  <span class="token comment"># 下划线允许，但通常用 -</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="pod-标签操作" tabindex="-1"><a class="header-anchor" href="#pod-标签操作"><span>Pod 标签操作</span></a></h2><h3 id="_1-在-deployment-中定义-pod-标签" tabindex="-1"><a class="header-anchor" href="#_1-在-deployment-中定义-pod-标签"><span>1. 在 Deployment 中定义 Pod 标签</span></a></h3><h4 id="标签定义位置" tabindex="-1"><a class="header-anchor" href="#标签定义位置"><span>标签定义位置</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line">  <span class="token key atrule">labels</span><span class="token punctuation">:</span>                              <span class="token comment"># ← Deployment 的标签（可选）</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">    <span class="token key atrule">version</span><span class="token punctuation">:</span> v1</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo                    <span class="token comment"># ← 必须和下面 template.labels 匹配</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span>                          <span class="token comment"># ← Pod 的标签（必须有！）</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo                   <span class="token comment"># 必须包含在 selector 中</span></span>
<span class="line">        <span class="token key atrule">version</span><span class="token punctuation">:</span> v1                    <span class="token comment"># 可选，额外的标签</span></span>
<span class="line">        <span class="token key atrule">tier</span><span class="token punctuation">:</span> backend                  <span class="token comment"># 可选</span></span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span> production                <span class="token comment"># 可选</span></span>
<span class="line">        <span class="token key atrule">component</span><span class="token punctuation">:</span> api                 <span class="token comment"># 可选</span></span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">0.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键规则</strong>：</p><ul><li><code>selector.matchLabels</code> 的标签必须在 <code>template.metadata.labels</code> 中</li><li><code>template.metadata.labels</code> 可以有额外的标签</li><li>不能在 selector 中有 <code>template.metadata.labels</code> 没有的标签</li></ul><hr><h3 id="_2-查看-pod-标签" tabindex="-1"><a class="header-anchor" href="#_2-查看-pod-标签"><span>2. 查看 Pod 标签</span></a></h3><h4 id="查看所有-pod-和标签" tabindex="-1"><a class="header-anchor" href="#查看所有-pod-和标签"><span>查看所有 Pod 和标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 显示所有 Pod 和它们的标签</span></span>
<span class="line">kubectl get pods --show-labels</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># NAME                         READY   STATUS    LABELS</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod1       1/1     Running   app=go-demo,env=prod,tier=backend,version=v1</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod2       1/1     Running   app=go-demo,env=prod,tier=backend,version=v1</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod3       1/1     Running   app=go-demo,env=prod,tier=backend,version=v1</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod4       1/1     Running   app=go-demo,env=prod,tier=backend,version=v1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="只显示特定标签列" tabindex="-1"><a class="header-anchor" href="#只显示特定标签列"><span>只显示特定标签列</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 显示指定的标签列</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-L</span> app,version,env,tier</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># NAME                         READY   STATUS    APP       VERSION   ENV    TIER</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod1       1/1     Running   go-demo   v1        prod   backend</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod2       1/1     Running   go-demo   v1        prod   backend</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod3       1/1     Running   go-demo   v1        staging backend</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod4       1/1     Running   go-demo   v1        staging backend</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看特定-pod-的标签" tabindex="-1"><a class="header-anchor" href="#查看特定-pod-的标签"><span>查看特定 Pod 的标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看单个 Pod 的标签</span></span>
<span class="line">kubectl get pod go-demo-v1-abc123-pod1 <span class="token parameter variable">-o</span> yaml <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-A</span> <span class="token number">10</span> labels</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或者</span></span>
<span class="line">kubectl describe pod go-demo-v1-abc123-pod1 <span class="token operator">|</span> <span class="token function">grep</span> Labels</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3-添加-pod-标签" tabindex="-1"><a class="header-anchor" href="#_3-添加-pod-标签"><span>3. 添加 Pod 标签</span></a></h3><h4 id="给已有的-pod-添加标签" tabindex="-1"><a class="header-anchor" href="#给已有的-pod-添加标签"><span>给已有的 Pod 添加标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 给单个 Pod 添加标签</span></span>
<span class="line">kubectl label pods go-demo-v1-abc123-pod1 <span class="token assign-left variable">region</span><span class="token operator">=</span>asia</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给多个 Pod 添加标签</span></span>
<span class="line">kubectl label pods go-demo-v1-abc123-pod1 go-demo-v1-abc123-pod2 <span class="token assign-left variable">region</span><span class="token operator">=</span>asia</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给多个 Pod 批量添加标签（使用选择器）</span></span>
<span class="line">kubectl label pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo <span class="token assign-left variable">region</span><span class="token operator">=</span>asia</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给所有 Pod 添加标签</span></span>
<span class="line">kubectl label pods <span class="token parameter variable">--all</span> <span class="token assign-left variable">region</span><span class="token operator">=</span>asia</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-namespace-内给-pod-添加标签" tabindex="-1"><a class="header-anchor" href="#在-namespace-内给-pod-添加标签"><span>在 Namespace 内给 Pod 添加标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 给特定 namespace 内的 Pod 添加标签</span></span>
<span class="line">kubectl label pods <span class="token parameter variable">-n</span> kube-system <span class="token parameter variable">-l</span> k8s-app<span class="token operator">=</span>kube-dns <span class="token assign-left variable">monitored</span><span class="token operator">=</span>true</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给多个 namespace 的 Pod 添加标签</span></span>
<span class="line">kubectl label pods --all-namespaces <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx <span class="token assign-left variable">tier</span><span class="token operator">=</span>frontend</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_4-修改-pod-标签" tabindex="-1"><a class="header-anchor" href="#_4-修改-pod-标签"><span>4. 修改 Pod 标签</span></a></h3><h4 id="修改已有的-pod-标签" tabindex="-1"><a class="header-anchor" href="#修改已有的-pod-标签"><span>修改已有的 Pod 标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 修改 Pod 的标签值</span></span>
<span class="line">kubectl label pods go-demo-v1-abc123-pod1 <span class="token assign-left variable">env</span><span class="token operator">=</span>staging <span class="token parameter variable">--overwrite</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get pods go-demo-v1-abc123-pod1 --show-labels</span>
<span class="line"><span class="token comment"># 输出会显示 env=staging（已改）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="批量修改标签" tabindex="-1"><a class="header-anchor" href="#批量修改标签"><span>批量修改标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 修改所有 app=go-demo 的 Pod 的标签</span></span>
<span class="line">kubectl label pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo <span class="token assign-left variable">env</span><span class="token operator">=</span>staging <span class="token parameter variable">--overwrite</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo <span class="token parameter variable">-L</span> <span class="token function">env</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_5-删除-pod-标签" tabindex="-1"><a class="header-anchor" href="#_5-删除-pod-标签"><span>5. 删除 Pod 标签</span></a></h3><h4 id="删除-pod-标签" tabindex="-1"><a class="header-anchor" href="#删除-pod-标签"><span>删除 Pod 标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 删除单个 Pod 的标签</span></span>
<span class="line">kubectl label pods go-demo-v1-abc123-pod1 env-</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除多个 Pod 的标签</span></span>
<span class="line">kubectl label pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo region-</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo --show-labels</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="标签使用场景" tabindex="-1"><a class="header-anchor" href="#标签使用场景"><span>标签使用场景</span></a></h2><h3 id="场景-1-用-node-标签控制-pod-调度-nodeaffinity" tabindex="-1"><a class="header-anchor" href="#场景-1-用-node-标签控制-pod-调度-nodeaffinity"><span>场景 1：用 Node 标签控制 Pod 调度（nodeAffinity）</span></a></h3><h4 id="第一步-给-node-打标签" tabindex="-1"><a class="header-anchor" href="#第一步-给-node-打标签"><span>第一步：给 Node 打标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 给计算节点打标签</span></span>
<span class="line">kubectl label nodes worker1 worker2 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给存储节点打标签</span></span>
<span class="line">kubectl label nodes worker3 <span class="token assign-left variable">workload</span><span class="token operator">=</span>storage</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-L</span> workload</span>
<span class="line"><span class="token comment"># NAME      WORKLOAD</span></span>
<span class="line"><span class="token comment"># master    </span></span>
<span class="line"><span class="token comment"># worker1   compute</span></span>
<span class="line"><span class="token comment"># worker2   compute</span></span>
<span class="line"><span class="token comment"># worker3   storage</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-在-deployment-中使用-node-标签" tabindex="-1"><a class="header-anchor" href="#第二步-在-deployment-中使用-node-标签"><span>第二步：在 Deployment 中使用 Node 标签</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>compute</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">      <span class="token key atrule">type</span><span class="token punctuation">:</span> compute</span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">        <span class="token key atrule">type</span><span class="token punctuation">:</span> compute</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 使用 nodeAffinity 和 Node 标签</span></span>
<span class="line">      <span class="token key atrule">affinity</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> workload        <span class="token comment"># ← Node 标签的 key</span></span>
<span class="line">                    <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                    <span class="token key atrule">values</span><span class="token punctuation">:</span></span>
<span class="line">                      <span class="token punctuation">-</span> compute          <span class="token comment"># ← Node 标签的 value</span></span>
<span class="line">      </span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">0.1</span></span>
<span class="line">          <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三步-部署和验证" tabindex="-1"><a class="header-anchor" href="#第三步-部署和验证"><span>第三步：部署和验证</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 部署</span></span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> deployment.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证 Pod 只在 compute 节点上</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-o</span> wide <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo</span>
<span class="line"><span class="token comment"># NAME                              READY   NODE</span></span>
<span class="line"><span class="token comment"># go-demo-compute-abc123-pod1       1/1     worker1  ✓ compute 节点</span></span>
<span class="line"><span class="token comment"># go-demo-compute-abc123-pod2       1/1     worker2  ✓ compute 节点</span></span>
<span class="line"><span class="token comment"># go-demo-compute-abc123-pod3       1/1     worker1</span></span>
<span class="line"><span class="token comment"># go-demo-compute-abc123-pod4       1/1     worker2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="场景-2-用-pod-标签让-service-选择-pod" tabindex="-1"><a class="header-anchor" href="#场景-2-用-pod-标签让-service-选择-pod"><span>场景 2：用 Pod 标签让 Service 选择 Pod</span></a></h3><h4 id="第一步-定义有标签的-pod-deployment" tabindex="-1"><a class="header-anchor" href="#第一步-定义有标签的-pod-deployment"><span>第一步：定义有标签的 Pod（Deployment）</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo          <span class="token comment"># ← Pod 标签</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo        <span class="token comment"># ← Pod 标签</span></span>
<span class="line">        <span class="token key atrule">version</span><span class="token punctuation">:</span> v1</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">0.1</span></span>
<span class="line">          <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-创建-service-用-pod-标签选择" tabindex="-1"><a class="header-anchor" href="#第二步-创建-service-用-pod-标签选择"><span>第二步：创建 Service，用 Pod 标签选择</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo          <span class="token comment"># ← 选择所有有 app=go-demo 的 Pod</span></span>
<span class="line">  <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span></span>
<span class="line">      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line">  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三步-部署和验证-1" tabindex="-1"><a class="header-anchor" href="#第三步-部署和验证-1"><span>第三步：部署和验证</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 部署</span></span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> deployment.yaml</span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> service.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 Service 选择了哪些 Pod</span></span>
<span class="line">kubectl describe <span class="token function">service</span> go-demo-v1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># Name:              go-demo-v1</span></span>
<span class="line"><span class="token comment"># Endpoints:         10.244.0.5:8080,10.244.0.6:8080,10.244.0.7:8080,10.244.0.8:8080</span></span>
<span class="line"><span class="token comment">#                                    （4 个 Pod 都被选中）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证 Pod 有正确的标签</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-L</span> app,version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="场景-3-用-pod-标签控制-pod-分散-podantiaffinity" tabindex="-1"><a class="header-anchor" href="#场景-3-用-pod-标签控制-pod-分散-podantiaffinity"><span>场景 3：用 Pod 标签控制 Pod 分散（podAntiAffinity）</span></a></h3><h4 id="第一步-定义-pod-标签" tabindex="-1"><a class="header-anchor" href="#第一步-定义-pod-标签"><span>第一步：定义 Pod 标签</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo      <span class="token comment"># ← 用于 podAntiAffinity</span></span>
<span class="line">        <span class="token key atrule">tier</span><span class="token punctuation">:</span> backend</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">affinity</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 用 Pod 标签让 Pod 分散</span></span>
<span class="line">        <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span></span>
<span class="line">              <span class="token key atrule">podAffinityTerm</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> app        <span class="token comment"># ← Pod 标签的 key</span></span>
<span class="line">                      <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                      <span class="token key atrule">values</span><span class="token punctuation">:</span></span>
<span class="line">                        <span class="token punctuation">-</span> go<span class="token punctuation">-</span>demo     <span class="token comment"># ← Pod 标签的 value</span></span>
<span class="line">                <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname</span>
<span class="line">      </span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">0.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-部署和验证" tabindex="-1"><a class="header-anchor" href="#第二步-部署和验证"><span>第二步：部署和验证</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 部署</span></span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> deployment.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 Pod 分布（应该分散）</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-o</span> wide</span>
<span class="line"><span class="token comment"># NAME                              READY   NODE</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod1            1/1     worker1</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod2            1/1     worker2</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod3            1/1     worker3</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod4            1/1     worker1  # 没有第 4 个节点，重复</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="场景-4-多环境部署-prod-vs-staging" tabindex="-1"><a class="header-anchor" href="#场景-4-多环境部署-prod-vs-staging"><span>场景 4：多环境部署（Prod vs Staging）</span></a></h3><h4 id="第一步-给-node-打环境标签" tabindex="-1"><a class="header-anchor" href="#第一步-给-node-打环境标签"><span>第一步：给 Node 打环境标签</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 生产节点</span></span>
<span class="line">kubectl label nodes worker1 worker2 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute <span class="token assign-left variable">env</span><span class="token operator">=</span>prod</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试节点</span></span>
<span class="line">kubectl label nodes worker3 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute <span class="token assign-left variable">env</span><span class="token operator">=</span>staging</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-L</span> <span class="token function">env</span></span>
<span class="line"><span class="token comment"># NAME      ENV</span></span>
<span class="line"><span class="token comment"># master    </span></span>
<span class="line"><span class="token comment"># worker1   prod</span></span>
<span class="line"><span class="token comment"># worker2   prod</span></span>
<span class="line"><span class="token comment"># worker3   staging</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-部署生产应用" tabindex="-1"><a class="header-anchor" href="#第二步-部署生产应用"><span>第二步：部署生产应用</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># go-demo-prod.yaml</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>prod</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">      <span class="token key atrule">env</span><span class="token punctuation">:</span> prod</span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span> prod          <span class="token comment"># ← Pod 环境标签</span></span>
<span class="line">        <span class="token key atrule">version</span><span class="token punctuation">:</span> v1</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">affinity</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> env</span>
<span class="line">                    <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                    <span class="token key atrule">values</span><span class="token punctuation">:</span></span>
<span class="line">                      <span class="token punctuation">-</span> prod    <span class="token comment"># ← 必须在 prod 节点</span></span>
<span class="line">        </span>
<span class="line">        <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span></span>
<span class="line">              <span class="token key atrule">podAffinityTerm</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> app</span>
<span class="line">                      <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                      <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>go<span class="token punctuation">-</span>demo<span class="token punctuation">]</span></span>
<span class="line">                <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname</span>
<span class="line">      </span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">1.0</span></span>
<span class="line">          <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三步-部署测试应用" tabindex="-1"><a class="header-anchor" href="#第三步-部署测试应用"><span>第三步：部署测试应用</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># go-demo-staging.yaml</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>staging</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">      <span class="token key atrule">env</span><span class="token punctuation">:</span> staging</span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span> staging       <span class="token comment"># ← Pod 环境标签</span></span>
<span class="line">        <span class="token key atrule">version</span><span class="token punctuation">:</span> latest</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">affinity</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> env</span>
<span class="line">                    <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                    <span class="token key atrule">values</span><span class="token punctuation">:</span></span>
<span class="line">                      <span class="token punctuation">-</span> staging  <span class="token comment"># ← 必须在 staging 节点</span></span>
<span class="line">        </span>
<span class="line">        <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span></span>
<span class="line">              <span class="token key atrule">podAffinityTerm</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> app</span>
<span class="line">                      <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                      <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>go<span class="token punctuation">-</span>demo<span class="token punctuation">]</span></span>
<span class="line">                <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname</span>
<span class="line">      </span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span>latest</span>
<span class="line">          <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第四步-部署和验证" tabindex="-1"><a class="header-anchor" href="#第四步-部署和验证"><span>第四步：部署和验证</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 部署</span></span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> go-demo-prod.yaml</span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> go-demo-staging.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证 Pod 分布</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-o</span> wide <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo</span>
<span class="line"><span class="token comment"># NAME                              NODE       LABELS</span></span>
<span class="line"><span class="token comment"># go-demo-prod-abc123-pod1          worker1    app=go-demo,env=prod</span></span>
<span class="line"><span class="token comment"># go-demo-prod-abc123-pod2          worker2    app=go-demo,env=prod</span></span>
<span class="line"><span class="token comment"># go-demo-prod-abc123-pod3          worker1    app=go-demo,env=prod</span></span>
<span class="line"><span class="token comment"># go-demo-prod-abc123-pod4          worker2    app=go-demo,env=prod</span></span>
<span class="line"><span class="token comment"># go-demo-staging-xyz789-pod1       worker3    app=go-demo,env=staging</span></span>
<span class="line"><span class="token comment"># go-demo-staging-xyz789-pod2       worker3    app=go-demo,env=staging</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看只有生产的 Pod</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo,env<span class="token operator">=</span>prod</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看只有测试的 Pod</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo,env<span class="token operator">=</span>staging</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="完整工作流示例" tabindex="-1"><a class="header-anchor" href="#完整工作流示例"><span>完整工作流示例</span></a></h2><h3 id="从零开始的完整步骤" tabindex="-1"><a class="header-anchor" href="#从零开始的完整步骤"><span>从零开始的完整步骤</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># ========== 第一步：准备集群 ==========</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1. 查看当前 Node</span></span>
<span class="line">kubectl get nodes</span>
<span class="line"><span class="token comment"># OUTPUT:</span></span>
<span class="line"><span class="token comment"># NAME      STATUS   ROLES           AGE</span></span>
<span class="line"><span class="token comment"># master    Ready    control-plane   5d</span></span>
<span class="line"><span class="token comment"># worker1   Ready    &lt;none&gt;          5d</span></span>
<span class="line"><span class="token comment"># worker2   Ready    &lt;none&gt;          5d</span></span>
<span class="line"><span class="token comment"># worker3   Ready    &lt;none&gt;          5d</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ========== 第二步：给 Node 打标签 ==========</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 给 worker1、worker2 打计算标签</span></span>
<span class="line">kubectl label nodes worker1 worker2 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute <span class="token assign-left variable">zone</span><span class="token operator">=</span>zone-a</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 给 worker3 打存储标签</span></span>
<span class="line">kubectl label nodes worker3 <span class="token assign-left variable">workload</span><span class="token operator">=</span>storage <span class="token assign-left variable">zone</span><span class="token operator">=</span>zone-b</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 验证标签</span></span>
<span class="line">kubectl get nodes --show-labels</span>
<span class="line"><span class="token comment"># OUTPUT:</span></span>
<span class="line"><span class="token comment"># NAME      WORKLOAD   ZONE</span></span>
<span class="line"><span class="token comment"># master    </span></span>
<span class="line"><span class="token comment"># worker1   compute    zone-a</span></span>
<span class="line"><span class="token comment"># worker2   compute    zone-a</span></span>
<span class="line"><span class="token comment"># worker3   storage    zone-b</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ========== 第三步：创建带标签的 Deployment ==========</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 创建 deployment.yaml（见下面的完整配置）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6. 部署</span></span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> deployment.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 7. 验证 Pod 标签</span></span>
<span class="line">kubectl get pods --show-labels</span>
<span class="line"><span class="token comment"># OUTPUT:</span></span>
<span class="line"><span class="token comment"># NAME                         LABELS</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod1       app=go-demo,env=prod,tier=backend,version=v1</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod2       app=go-demo,env=prod,tier=backend,version=v1</span></span>
<span class="line"><span class="token comment"># ...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ========== 第四步：验证调度结果 ==========</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 8. 验证 Pod 在正确的 Node 上</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-o</span> wide</span>
<span class="line"><span class="token comment"># OUTPUT:</span></span>
<span class="line"><span class="token comment"># NAME                         NODE</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod1       worker1  ✓</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod2       worker2  ✓</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod3       worker1  ✓</span></span>
<span class="line"><span class="token comment"># go-demo-v1-abc123-pod4       worker2  ✓</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ========== 第五步：创建 Service ==========</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 9. 创建 service.yaml（见下面的完整配置）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 10. 部署 Service</span></span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> service.yaml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 11. 验证 Service 选择了正确的 Pod</span></span>
<span class="line">kubectl describe <span class="token function">service</span> go-demo-v1</span>
<span class="line"><span class="token comment"># OUTPUT:</span></span>
<span class="line"><span class="token comment"># Endpoints: 10.244.0.5:8080,10.244.0.6:8080,10.244.0.7:8080,10.244.0.8:8080</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ========== 第六步：使用标签查询 ==========</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 12. 查询特定环境的 Pod</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">env</span><span class="token operator">=</span>prod</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 13. 查询特定版本的 Pod</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">version</span><span class="token operator">=</span>v1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 14. 查询多个条件的 Pod</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo,env<span class="token operator">=</span>prod</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 15. 查询有某个标签的 Pod</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> app</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 16. 查询没有某个标签的 Pod</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token string">&#39;!env&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整配置文件" tabindex="-1"><a class="header-anchor" href="#完整配置文件"><span>完整配置文件</span></a></h3><p><strong>deployment.yaml</strong>：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line">  <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span></span>
<span class="line">  <span class="token key atrule">strategy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate</span>
<span class="line">    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line">      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">        <span class="token key atrule">version</span><span class="token punctuation">:</span> v1</span>
<span class="line">        <span class="token key atrule">tier</span><span class="token punctuation">:</span> backend</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span> prod</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">affinity</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> workload</span>
<span class="line">                    <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                    <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>compute<span class="token punctuation">]</span></span>
<span class="line">          </span>
<span class="line">          <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span></span>
<span class="line">              <span class="token key atrule">preference</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> zone</span>
<span class="line">                    <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                    <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>zone<span class="token punctuation">-</span>a<span class="token punctuation">]</span></span>
<span class="line">        </span>
<span class="line">        <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span></span>
<span class="line">              <span class="token key atrule">podAffinityTerm</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span></span>
<span class="line">                  <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span></span>
<span class="line">                    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> app</span>
<span class="line">                      <span class="token key atrule">operator</span><span class="token punctuation">:</span> In</span>
<span class="line">                      <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>go<span class="token punctuation">-</span>demo<span class="token punctuation">]</span></span>
<span class="line">                <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname</span>
<span class="line">      </span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app</span>
<span class="line">          <span class="token key atrule">image</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">0.1</span></span>
<span class="line">          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent</span>
<span class="line">          <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line">          <span class="token key atrule">resources</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">requests</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 250m</span>
<span class="line">              <span class="token key atrule">memory</span><span class="token punctuation">:</span> 256Mi</span>
<span class="line">            <span class="token key atrule">limits</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m</span>
<span class="line">              <span class="token key atrule">memory</span><span class="token punctuation">:</span> 512Mi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>service.yaml</strong>：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>v1</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line">  <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span></span>
<span class="line">      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span></span>
<span class="line">  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="查询和调试" tabindex="-1"><a class="header-anchor" href="#查询和调试"><span>查询和调试</span></a></h2><h3 id="标签查询语法" tabindex="-1"><a class="header-anchor" href="#标签查询语法"><span>标签查询语法</span></a></h3><h4 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询"><span>基本查询</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查询有特定标签的资源</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">key</span><span class="token operator">=</span>value</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询多个标签（AND 关系）</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">key1</span><span class="token operator">=</span>value1,key2<span class="token operator">=</span>value2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询有某个标签的资源（不检查值）</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> key</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询没有某个标签的资源</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token string">&#39;!key&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级查询" tabindex="-1"><a class="header-anchor" href="#高级查询"><span>高级查询</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># IN 查询（标签值在列表中）</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token string">&#39;env in (prod,staging)&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># NOT IN 查询（标签值不在列表中）</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token string">&#39;env notin (dev)&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 组合查询（括号）</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token string">&#39;app=go-demo,env in (prod,staging)&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Node 标签查询</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-l</span> <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调试常见问题" tabindex="-1"><a class="header-anchor" href="#调试常见问题"><span>调试常见问题</span></a></h3><h4 id="问题-1-pod-pending-无法调度" tabindex="-1"><a class="header-anchor" href="#问题-1-pod-pending-无法调度"><span>问题 1：Pod Pending（无法调度）</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看 Pod 为什么 Pending</span></span>
<span class="line">kubectl describe pod <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 寻找 Events 部分的错误信息，常见：</span></span>
<span class="line"><span class="token comment"># - 0/4 nodes are available: 2 Insufficient memory, 2 node(s) don&#39;t have matching labels.</span></span>
<span class="line"><span class="token comment">#   → Node 标签不匹配</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解决：检查 Node 标签</span></span>
<span class="line">kubectl get nodes <span class="token parameter variable">-L</span> workload,zone</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果标签不对，添加标签</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute <span class="token parameter variable">--overwrite</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="问题-2-service-没有选择到-pod" tabindex="-1"><a class="header-anchor" href="#问题-2-service-没有选择到-pod"><span>问题 2：Service 没有选择到 Pod</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看 Service 的 Endpoints</span></span>
<span class="line">kubectl describe <span class="token function">service</span> <span class="token operator">&lt;</span>service-name<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果 Endpoints 为空：</span></span>
<span class="line"><span class="token comment"># → Pod 标签和 Service selector 不匹配</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解决：检查 Pod 标签</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-L</span> app</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查 Service selector</span></span>
<span class="line">kubectl get <span class="token function">service</span> <span class="token operator">&lt;</span>service-name<span class="token operator">&gt;</span> <span class="token parameter variable">-o</span> yaml <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-A</span> <span class="token number">5</span> selector</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果不匹配，修改 Pod 标签</span></span>
<span class="line">kubectl label pods <span class="token parameter variable">-l</span> old-app <span class="token assign-left variable">app</span><span class="token operator">=</span>correct-app <span class="token parameter variable">--overwrite</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="问题-3-pod-没有正确分散" tabindex="-1"><a class="header-anchor" href="#问题-3-pod-没有正确分散"><span>问题 3：Pod 没有正确分散</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看 Pod 分布</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-o</span> wide</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果 Pod 没有分散：</span></span>
<span class="line"><span class="token comment"># → podAntiAffinity 可能设置为 required（会导致 Pending）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解决：检查 Deployment 的 affinity</span></span>
<span class="line">kubectl get deployment <span class="token operator">&lt;</span>deployment-name<span class="token operator">&gt;</span> <span class="token parameter variable">-o</span> yaml <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-A</span> <span class="token number">20</span> podAntiAffinity</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 改为 preferred 而不是 required</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="标签最佳实践" tabindex="-1"><a class="header-anchor" href="#标签最佳实践"><span>标签最佳实践</span></a></h2><h3 id="_1-标签命名规范" tabindex="-1"><a class="header-anchor" href="#_1-标签命名规范"><span>1. 标签命名规范</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">推荐的标签名：</span>
<span class="line">- app：应用名（必须）</span>
<span class="line">- version：版本号</span>
<span class="line">- tier：应用层级（web、backend、db）</span>
<span class="line">- component：组件（api、worker、scheduler）</span>
<span class="line">- env：环境（prod、staging、dev）</span>
<span class="line">- team：团队名</span>
<span class="line">- managed-by：管理工具</span>
<span class="line"></span>
<span class="line">标签命名规则：</span>
<span class="line">- 只能包含：字母、数字、-、.、_</span>
<span class="line">- 必须以字母或数字开头和结尾</span>
<span class="line">- 最长 63 字符</span>
<span class="line"></span>
<span class="line">✓ 有效标签：</span>
<span class="line">  app=go-demo</span>
<span class="line">  version=v1.0.0</span>
<span class="line">  tier=backend</span>
<span class="line">  env=production</span>
<span class="line"></span>
<span class="line">❌ 无效标签：</span>
<span class="line">  App=go-demo          # 大写不允许</span>
<span class="line">  version.1=1.0.0      # . 不能用在 key 中</span>
<span class="line">  -app=go-demo         # 不能以 - 开头</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-node-标签最佳实践" tabindex="-1"><a class="header-anchor" href="#_2-node-标签最佳实践"><span>2. Node 标签最佳实践</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># ✓ DO：按功能分类</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute</span>
<span class="line">kubectl label nodes worker2 <span class="token assign-left variable">workload</span><span class="token operator">=</span>storage</span>
<span class="line">kubectl label nodes worker3 <span class="token assign-left variable">workload</span><span class="token operator">=</span>gpu</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ✓ DO：按地理位置分类</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">zone</span><span class="token operator">=</span>zone-a</span>
<span class="line">kubectl label nodes worker2 <span class="token assign-left variable">zone</span><span class="token operator">=</span>zone-b</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ✓ DO：组合多个维度</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">workload</span><span class="token operator">=</span>compute <span class="token assign-left variable">zone</span><span class="token operator">=</span>zone-a</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ❌ DON&#39;T：创建太多维度</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">label1</span><span class="token operator">=</span>value1 <span class="token assign-left variable">label2</span><span class="token operator">=</span>value2 <span class="token punctuation">..</span>. <span class="token assign-left variable">label20</span><span class="token operator">=</span>value20</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ❌ DON&#39;T：使用 Pod-specific 的标签给 Node 打</span></span>
<span class="line">kubectl label nodes worker1 <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo  <span class="token comment"># 这样很容易混淆</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-pod-标签最佳实践" tabindex="-1"><a class="header-anchor" href="#_3-pod-标签最佳实践"><span>3. Pod 标签最佳实践</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># ✓ DO：合理设计标签</span></span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo          <span class="token comment"># 应用名（Service selector 使用）</span></span>
<span class="line">    <span class="token key atrule">version</span><span class="token punctuation">:</span> v1           <span class="token comment"># 版本（查询用）</span></span>
<span class="line">    <span class="token key atrule">tier</span><span class="token punctuation">:</span> backend         <span class="token comment"># 层级（组织用）</span></span>
<span class="line">    <span class="token key atrule">env</span><span class="token punctuation">:</span> prod             <span class="token comment"># 环境（查询用）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ❌ DON&#39;T：标签太多</span></span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">label1</span><span class="token punctuation">:</span> value1</span>
<span class="line">    <span class="token key atrule">label2</span><span class="token punctuation">:</span> value2</span>
<span class="line">    <span class="token punctuation">...</span></span>
<span class="line">    <span class="token key atrule">label50</span><span class="token punctuation">:</span> value50</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ❌ DON&#39;T：selector 和 template.labels 不匹配</span></span>
<span class="line"><span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo</span>
<span class="line"><span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>old    <span class="token comment"># ❌ 不匹配！</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-标签更新最佳实践" tabindex="-1"><a class="header-anchor" href="#_4-标签更新最佳实践"><span>4. 标签更新最佳实践</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># ✓ DO：先测试后应用</span></span>
<span class="line"><span class="token comment"># 先查询受影响的 Pod</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> old-label<span class="token operator">=</span>value --dry-run<span class="token operator">=</span>client</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再修改标签</span></span>
<span class="line">kubectl label pods <span class="token parameter variable">-l</span> old-label<span class="token operator">=</span>value new-label<span class="token operator">=</span>value <span class="token parameter variable">--overwrite</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ✓ DO：使用 --overwrite 避免冲突</span></span>
<span class="line">kubectl label pods <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span> <span class="token assign-left variable">env</span><span class="token operator">=</span>staging <span class="token parameter variable">--overwrite</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ❌ DON&#39;T：删除重要的 Deployment selector 标签</span></span>
<span class="line">kubectl label pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo app-  <span class="token comment"># ❌ 删除后 Deployment 会重新创建 Pod！</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-标签查询最佳实践" tabindex="-1"><a class="header-anchor" href="#_5-标签查询最佳实践"><span>5. 标签查询最佳实践</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># ✓ DO：使用简洁的标签进行查询</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ✓ DO：使用多个条件进行精确查询</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo,env<span class="token operator">=</span>prod</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ✓ DO：结合 -L 显示标签列</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>go-demo <span class="token parameter variable">-L</span> env,version</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ❌ DON&#39;T：过于复杂的查询语句</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token string">&#39;env in (prod,staging,dev),!deprecated,version=v1&#39;</span></span>
<span class="line"><span class="token comment"># （可能存在逻辑混淆）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 建议拆分：</span></span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">env</span><span class="token operator">=</span>prod</span>
<span class="line">kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">env</span><span class="token operator">=</span>prod,version<span class="token operator">=</span>v1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="快速参考表" tabindex="-1"><a class="header-anchor" href="#快速参考表"><span>快速参考表</span></a></h2><h3 id="node-标签操作快速表" tabindex="-1"><a class="header-anchor" href="#node-标签操作快速表"><span>Node 标签操作快速表</span></a></h3><table><thead><tr><th>操作</th><th>命令</th></tr></thead><tbody><tr><td>查看所有 Node 标签</td><td><code>kubectl get nodes --show-labels</code></td></tr><tr><td>添加单个标签</td><td><code>kubectl label nodes worker1 key=value</code></td></tr><tr><td>添加多个标签</td><td><code>kubectl label nodes worker1 key1=val1 key2=val2</code></td></tr><tr><td>批量添加标签</td><td><code>kubectl label nodes worker1 worker2 key=value</code></td></tr><tr><td>修改标签</td><td><code>kubectl label nodes worker1 key=newvalue --overwrite</code></td></tr><tr><td>删除标签</td><td><code>kubectl label nodes worker1 key-</code></td></tr><tr><td>只显示指定标签列</td><td><code>kubectl get nodes -L key1,key2</code></td></tr></tbody></table><h3 id="pod-标签操作快速表" tabindex="-1"><a class="header-anchor" href="#pod-标签操作快速表"><span>Pod 标签操作快速表</span></a></h3><table><thead><tr><th>操作</th><th>命令</th></tr></thead><tbody><tr><td>查看所有 Pod 标签</td><td><code>kubectl get pods --show-labels</code></td></tr><tr><td>给 Pod 添加标签</td><td><code>kubectl label pods &lt;pod-name&gt; key=value</code></td></tr><tr><td>批量添加标签</td><td><code>kubectl label pods -l app=go-demo key=value</code></td></tr><tr><td>修改 Pod 标签</td><td><code>kubectl label pods &lt;pod-name&gt; key=newvalue --overwrite</code></td></tr><tr><td>删除 Pod 标签</td><td><code>kubectl label pods &lt;pod-name&gt; key-</code></td></tr><tr><td>只显示指定标签列</td><td><code>kubectl get pods -L key1,key2</code></td></tr><tr><td>查询带标签的 Pod</td><td><code>kubectl get pods -l key=value</code></td></tr><tr><td>查询多标签 Pod</td><td><code>kubectl get pods -l key1=val1,key2=val2</code></td></tr></tbody></table><h3 id="标签使用位置快速表" tabindex="-1"><a class="header-anchor" href="#标签使用位置快速表"><span>标签使用位置快速表</span></a></h3><table><thead><tr><th>位置</th><th>用途</th><th>示例</th></tr></thead><tbody><tr><td>nodeAffinity</td><td>选择 Node</td><td><code>matchExpressions: - key: workload, values: [compute]</code></td></tr><tr><td>Service selector</td><td>选择 Pod</td><td><code>selector: app: go-demo</code></td></tr><tr><td>podAffinity</td><td>选择 Pod</td><td><code>labelSelector: matchExpressions: - key: app, values: [go-demo]</code></td></tr><tr><td>kubectl 查询</td><td>查找资源</td><td><code>kubectl get pods -l app=go-demo</code></td></tr></tbody></table><hr><h2 id="总结清单" tabindex="-1"><a class="header-anchor" href="#总结清单"><span>总结清单</span></a></h2><ul><li>[ ] 了解 Node 标签和 Pod 标签的区别</li><li>[ ] 能够用 <code>kubectl label</code> 给 Node 添加和修改标签</li><li>[ ] 能够在 Deployment 的 <code>template.metadata.labels</code> 中定义 Pod 标签</li><li>[ ] 能够在 <code>nodeAffinity</code> 中使用 Node 标签选择节点</li><li>[ ] 能够在 Service <code>selector</code> 中使用 Pod 标签选择 Pod</li><li>[ ] 能够在 <code>podAffinity</code> 中使用 Pod 标签控制 Pod 分布</li><li>[ ] 能够用 <code>kubectl get -l</code> 查询特定标签的资源</li><li>[ ] 了解标签命名规范和最佳实践</li><li>[ ] 能够调试标签相关的问题（Pod Pending、Service Endpoints 为空等）</li></ul>`,156))])}const v=p(o,[["render",d],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/books/kubernetes-label-handbook/","title":"Kubernetes 标签完整参考手册","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[{"level":3,"title":"什么是标签？","slug":"什么是标签","link":"#什么是标签","children":[]},{"level":3,"title":"标签的三层应用","slug":"标签的三层应用","link":"#标签的三层应用","children":[]},{"level":3,"title":"Node 标签 vs Pod 标签","slug":"node-标签-vs-pod-标签","link":"#node-标签-vs-pod-标签","children":[]}]},{"level":2,"title":"Node 标签操作","slug":"node-标签操作","link":"#node-标签操作","children":[{"level":3,"title":"1. 查看 Node 标签","slug":"_1-查看-node-标签","link":"#_1-查看-node-标签","children":[]},{"level":3,"title":"2. 添加 Node 标签","slug":"_2-添加-node-标签","link":"#_2-添加-node-标签","children":[]},{"level":3,"title":"3. 修改 Node 标签","slug":"_3-修改-node-标签","link":"#_3-修改-node-标签","children":[]},{"level":3,"title":"4. 删除 Node 标签","slug":"_4-删除-node-标签","link":"#_4-删除-node-标签","children":[]},{"level":3,"title":"5. Node 标签的规范","slug":"_5-node-标签的规范","link":"#_5-node-标签的规范","children":[]}]},{"level":2,"title":"Pod 标签操作","slug":"pod-标签操作","link":"#pod-标签操作","children":[{"level":3,"title":"1. 在 Deployment 中定义 Pod 标签","slug":"_1-在-deployment-中定义-pod-标签","link":"#_1-在-deployment-中定义-pod-标签","children":[]},{"level":3,"title":"2. 查看 Pod 标签","slug":"_2-查看-pod-标签","link":"#_2-查看-pod-标签","children":[]},{"level":3,"title":"3. 添加 Pod 标签","slug":"_3-添加-pod-标签","link":"#_3-添加-pod-标签","children":[]},{"level":3,"title":"4. 修改 Pod 标签","slug":"_4-修改-pod-标签","link":"#_4-修改-pod-标签","children":[]},{"level":3,"title":"5. 删除 Pod 标签","slug":"_5-删除-pod-标签","link":"#_5-删除-pod-标签","children":[]}]},{"level":2,"title":"标签使用场景","slug":"标签使用场景","link":"#标签使用场景","children":[{"level":3,"title":"场景 1：用 Node 标签控制 Pod 调度（nodeAffinity）","slug":"场景-1-用-node-标签控制-pod-调度-nodeaffinity","link":"#场景-1-用-node-标签控制-pod-调度-nodeaffinity","children":[]},{"level":3,"title":"场景 2：用 Pod 标签让 Service 选择 Pod","slug":"场景-2-用-pod-标签让-service-选择-pod","link":"#场景-2-用-pod-标签让-service-选择-pod","children":[]},{"level":3,"title":"场景 3：用 Pod 标签控制 Pod 分散（podAntiAffinity）","slug":"场景-3-用-pod-标签控制-pod-分散-podantiaffinity","link":"#场景-3-用-pod-标签控制-pod-分散-podantiaffinity","children":[]},{"level":3,"title":"场景 4：多环境部署（Prod vs Staging）","slug":"场景-4-多环境部署-prod-vs-staging","link":"#场景-4-多环境部署-prod-vs-staging","children":[]}]},{"level":2,"title":"完整工作流示例","slug":"完整工作流示例","link":"#完整工作流示例","children":[{"level":3,"title":"从零开始的完整步骤","slug":"从零开始的完整步骤","link":"#从零开始的完整步骤","children":[]},{"level":3,"title":"完整配置文件","slug":"完整配置文件","link":"#完整配置文件","children":[]}]},{"level":2,"title":"查询和调试","slug":"查询和调试","link":"#查询和调试","children":[{"level":3,"title":"标签查询语法","slug":"标签查询语法","link":"#标签查询语法","children":[]},{"level":3,"title":"调试常见问题","slug":"调试常见问题","link":"#调试常见问题","children":[]}]},{"level":2,"title":"标签最佳实践","slug":"标签最佳实践","link":"#标签最佳实践","children":[{"level":3,"title":"1. 标签命名规范","slug":"_1-标签命名规范","link":"#_1-标签命名规范","children":[]},{"level":3,"title":"2. Node 标签最佳实践","slug":"_2-node-标签最佳实践","link":"#_2-node-标签最佳实践","children":[]},{"level":3,"title":"3. Pod 标签最佳实践","slug":"_3-pod-标签最佳实践","link":"#_3-pod-标签最佳实践","children":[]},{"level":3,"title":"4. 标签更新最佳实践","slug":"_4-标签更新最佳实践","link":"#_4-标签更新最佳实践","children":[]},{"level":3,"title":"5. 标签查询最佳实践","slug":"_5-标签查询最佳实践","link":"#_5-标签查询最佳实践","children":[]}]},{"level":2,"title":"快速参考表","slug":"快速参考表","link":"#快速参考表","children":[{"level":3,"title":"Node 标签操作快速表","slug":"node-标签操作快速表","link":"#node-标签操作快速表","children":[]},{"level":3,"title":"Pod 标签操作快速表","slug":"pod-标签操作快速表","link":"#pod-标签操作快速表","children":[]},{"level":3,"title":"标签使用位置快速表","slug":"标签使用位置快速表","link":"#标签使用位置快速表","children":[]}]},{"level":2,"title":"总结清单","slug":"总结清单","link":"#总结清单","children":[]}],"git":{},"filePathRelative":"books/kubernetes-label-handbook/index.md"}');export{v as comp,m as data};
