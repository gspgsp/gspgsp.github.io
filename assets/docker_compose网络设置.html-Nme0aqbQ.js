import{_ as s,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function r(p,n){return l(),e("div",null,n[0]||(n[0]=[a(`<p>docker_compose网络设置:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">通过分析docker-compose.yml文件发现其中有关于网络设置，如下:</span>
<span class="line">networks:</span>
<span class="line">  network-laravel-internal:</span>
<span class="line">  network-laravel-front:</span>
<span class="line">分析:</span>
<span class="line">这个地方创建的两个网络，都是在docker compose内部创建的，用于服务之间的通信，但是通过 docker network inspect docker-network-laravel-internal 发现其中的 Internal 为 false，以下是相关说明:</span>
<span class="line">让我解释一下为什么在 \`docker network inspect\` 的输出中，即使对于内部通信网络，\`&quot;Internal&quot;\` 字段也显示为 \`false\`：</span>
<span class="line">1. Docker 网络的 &quot;Internal&quot; 标志：</span>
<span class="line">   - 这个标志并不是指网络是否用于内部通信。</span>
<span class="line">   - 它实际上表示这个网络是否完全隔离于外部网络（包括宿主机）。</span>
<span class="line">2. 默认行为：</span>
<span class="line">   - 当你在 Docker Compose 中创建一个网络而不指定 \`internal: true\` 时，Docker 会创建一个非内部（\`&quot;Internal&quot;: false\`）的网络。</span>
<span class="line">   - 这种网络允许容器访问外部网络（如互联网），同时也允许容器之间相互通信。</span>
<span class="line">3. 真正的内部网络：</span>
<span class="line">   - 如果你确实想创建一个完全隔离的内部网络（\`&quot;Internal&quot;: true\`），你需要在 Docker Compose 文件中明确指定：</span>
<span class="line"></span>
<span class="line">     \`\`\`yaml</span>
<span class="line">     networks:</span>
<span class="line">       internal:</span>
<span class="line">         internal: true</span>
<span class="line">     \`\`\`</span>
<span class="line">4. 用途区别：</span>
<span class="line">   - 非内部网络（\`&quot;Internal&quot;: false\`）：适用于大多数场景，允许容器访问外部资源，同时也能相互通信。</span>
<span class="line">   - 内部网络（\`&quot;Internal&quot;: true\`）：用于创建完全隔离的网络环境，容器无法访问外部资源，只能在网络内部通信。</span>
<span class="line">5. 您的使用场景：</span>
<span class="line">   - 对于大多数应用，包括您描述的 PHP 项目，通常不需要完全隔离的内部网络。</span>
<span class="line">   - 允许容器访问外部资源（如下载更新、连接外部 API 等）通常是有益的。</span>
<span class="line">6. 安全性：</span>
<span class="line">   - 即使 \`&quot;Internal&quot;\` 为 \`false\`，您的服务仍然是安全的，因为它们默认不会暴露端口到宿主机，除非您明确配置。</span>
<span class="line">总结：</span>
<span class="line">\`&quot;Internal&quot;: false\` 并不意味着这个网络不适合内部通信。它只是表示这个网络不是完全隔离的。对于大多数应用场景，包括服务间的内部通信，这种配置是完全适合且推荐的。</span>
<span class="line">如果您有特殊的安全需求，需要完全隔离某些服务，那么您可以考虑创建一个真正的内部网络。但在大多数情况下，当前的配置已经足够安全和实用了。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对上面的，假如我暴露了端口给宿主机，那么我是可以通过宿主机访问这个服务的，和 networks中的网络没有关系，即使它设置 internal: true，原因如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 网络的 \`Internal: true\` 配置：</span>
<span class="line">   - 当一个 Docker 网络被设置为 internal（内部的），它会完全隔离该网络中的容器，使它们无法直接访问外部网络。</span>
<span class="line">   - 这主要影响容器内部的网络通信能力。</span>
<span class="line"></span>
<span class="line">2. 端口映射（\`ports\`）：</span>
<span class="line">   - 端口映射是在 Docker 主机级别进行的，不受容器所连接的网络的 internal 设置直接影响。</span>
<span class="line">   - 即使容器连接到一个 internal 网络，只要配置了端口映射，外部仍然可以通过映射的端口访问容器。</span>
<span class="line"></span>
<span class="line">3. 在您的场景中：</span>
<span class="line">   - 如果您将 \`network-internal\` 配置为 \`internal: true\`，并且保留了 \`ports\` 映射：</span>
<span class="line">     \`\`\`yaml</span>
<span class="line">     nginx:</span>
<span class="line">       ports:</span>
<span class="line">         - &quot;\${APP_PORT}:80&quot;</span>
<span class="line">       networks:</span>
<span class="line">         - network-internal</span>
<span class="line">     </span>
<span class="line">     networks:</span>
<span class="line">       network-internal:</span>
<span class="line">         internal: true</span>
<span class="line">     \`\`\`</span>
<span class="line">   - 外部仍然可以通过 \`\${APP_PORT}\` 访问 Nginx 容器。</span>
<span class="line">   - 但是，Nginx 容器本身将无法访问外部网络（如果它需要的话, 比如 curl wget apt-get update、yum update 等命令, 也不能访问外部API, 也就是说断网了）</span>
<span class="line"></span>
<span class="line">4. 影响：</span>
<span class="line">   - 内部服务（如 PHP、MySQL 等）之间的通信不受影响。</span>
<span class="line">   - Nginx 容器可能无法进行外部网络操作（如下载更新）。</span>
<span class="line">   - 其他连接到这个内部网络的服务也将无法访问外部网络。</span>
<span class="line"></span>
<span class="line">5. 使用场景：</span>
<span class="line">   - 完全 internal 的网络通常用于高度安全敏感的环境，где您希望确保某些服务完全与外部网络隔离。</span>
<span class="line">   - 对于大多数 Web 应用程序架构，完全 internal 的网络可能过于限制。</span>
<span class="line"></span>
<span class="line">6. 建议：</span>
<span class="line">   - 除非您有特殊的安全需求，否则通常不需要将网络设置为 \`internal: true\`。</span>
<span class="line">   - 标准的 Docker 网络配置（\`internal: false\`）已经提供了足够的隔离性，同时保持了必要的灵活性。</span>
<span class="line"></span>
<span class="line">总结：</span>
<span class="line">即使将网络设置为 \`internal: true\`，只要配置了端口映射，外部仍然可以通过暴露的端口访问服务。但这会限制容器的出站连接能力。在大多数情况下，保持默认的网络配置（非 internal）就足够了，除非您有特殊的安全隔离需求。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过命令行创建的网络, 如： docker network ls | grep laravel-dev-v2-network &gt; /dev/null || docker network create laravel-dev-v2-network</p><p>分析: 通过命令行创建 Docker 网络确实有许多优势。让我们详细探讨一下这些好处：</p><ol><li>灵活性和精确控制： <ul><li>可以精确指定网络的各种参数，如子网、网关、IP 范围等。</li><li>能够创建不同类型的网络（bridge, overlay, macvlan 等）以满足特定需求。</li></ul></li><li>可重用性： <ul><li>创建的网络可以被多个项目或容器共享，不局限于单个 Docker Compose 文件。</li></ul></li><li>持久性： <ul><li>命令行创建的网络独立于任何特定的应用或服务，即使所有容器停止，网络仍然存在。</li></ul></li><li>适合全局或跨项目使用： <ul><li>特别适合需要在多个项目间共享的网络，如全局代理网络。</li></ul></li><li>动态管理： <ul><li>可以随时添加、删除或修改网络，而不需要修改 Docker Compose 文件。</li></ul></li><li>配合 Docker Swarm： <ul><li>在使用 Docker Swarm 时，命令行创建的网络更容易管理和扩展。</li></ul></li><li>脚本化和自动化： <ul><li>可以轻松地将网络创建集成到脚本或 CI/CD 流程中。</li></ul></li><li>调试和测试： <ul><li>便于快速创建临时网络进行测试或故障排除。</li></ul></li><li>更好的可视性： <ul><li>使用 <code>docker network ls</code> 和 <code>docker network inspect</code> 可以方便地查看和管理所有网络。</li></ul></li><li>与外部工具集成： <ul><li>命令行创建的网络更容易与外部网络管理工具和监控系统集成。</li></ul></li><li>学习和理解 Docker 网络： <ul><li>通过命令行操作，可以更深入地理解 Docker 网络的工作原理。</li></ul></li><li>特殊配置： <ul><li>某些高级网络配置（如配置 IPAM 驱动）在命令行中更容易实现。</li></ul></li></ol><p>实际应用示例：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建一个自定义网桥网络</span></span>
<span class="line"><span class="token function">docker</span> network create <span class="token parameter variable">--driver</span> bridge <span class="token parameter variable">--subnet</span> <span class="token number">172.18</span>.0.0/16 my-custom-net</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建一个覆盖网络（用于 Swarm）</span></span>
<span class="line"><span class="token function">docker</span> network create <span class="token parameter variable">--driver</span> overlay my-overlay-net</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建一个带有自定义选项的网络</span></span>
<span class="line"><span class="token function">docker</span> network create <span class="token parameter variable">--opt</span> <span class="token assign-left variable">com.docker.network.bridge.name</span><span class="token operator">=</span>my-bridge my-opt-net</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法特别适合您之前提到的全局 nginx-proxy 设置。您可以创建一个专门的网络用于代理，然后在不同的项目中重复使用它：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> network create proxy-network</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后在您的 Docker Compose 文件中引用这个网络：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">proxy-network</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法为您的多项目环境提供了一个一致和可管理的网络结构。</p><p>补充: 对于docker-compose.yml内，如果有如下格式的网络设置的话: networks: proxy-network: external: true 表示这个 proxy-network 网络需要在docker compsoe外部创建之后才能使用，当我们在 Docker Compose 文件中将网络标记为 <code>external: true</code> 时，我们需要预先创建这个网络。 具体来说：</p><ol><li>需要预先创建： 在运行使用这个外部网络的 Docker Compose 项目之前，我们必须手动创建这个网络。</li><li>创建方法： 我们可以使用以下 Docker 命令来创建网络：<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker network create proxy-network</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>创建时机： 这个网络创建操作只需要执行一次。之后，所有需要使用这个网络的项目都可以直接引用它。</li><li>如果网络不存在： 如果我们在没有预先创建网络的情况下尝试启动标记了 <code>external: true</code> 的 Compose 项目，Docker Compose 会报错，提示找不到指定的网络。</li><li>检查现有网络： 我们可以使用 <code>docker network ls</code> 命令来查看当前系统中已存在的网络。</li><li>持久性： 这个外部创建的网络不会随着 Compose 项目的停止而被删除，除非我们手动删除它。 所以，对于您的全局 nginx-proxy 设置，正确的步骤顺序是：</li><li>创建网络：<code>docker network create proxy-network</code></li><li>启动包含 nginx-proxy 的 Docker Compose 项目</li><li>启动其他需要使用这个代理的项目 这种方法确保了网络的一致性和可重用性，非常适合您的跨项目共享 nginx-proxy 的需求。</li></ol><p>不管是通过命令行（外部）还是在 Docker Compose 文件（内部）中创建网络，都可以设置 <code>Internal</code> 属性。让我们详细比较这两种方法：</p><ol><li><p>命令行创建网络（外部）：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建标准网络（默认 Internal: false）</span></span>
<span class="line"><span class="token function">docker</span> network create my-network</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建内部网络（Internal: true）</span></span>
<span class="line"><span class="token function">docker</span> network create <span class="token parameter variable">--internal</span> my-internal-network</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Docker Compose 文件中创建网络（内部）：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">my-network</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 默认 Internal: false</span></span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">my-internal-network</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">internal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>关键点：</p><ol><li>灵活性： <ul><li>两种方法都允许您控制网络是否为内部网络。</li></ul></li><li>默认行为： <ul><li>无论使用哪种方法，默认情况下创建的都是非内部网络（<code>Internal: false</code>）。</li></ul></li><li>使用场景： <ul><li>命令行创建适合全局或跨项目使用的网络。</li><li>Compose 文件创建适合特定项目或应用的网络。</li></ul></li><li>持久性： <ul><li>命令行创建的网络在 Docker 环境中持续存在，除非手动删除。</li><li>Compose 文件创建的网络通常随项目的启动和停止而创建和删除。</li></ul></li><li>复用性： <ul><li>命令行创建的网络更容易在多个项目间共享。</li><li>Compose 文件中的网络主要用于单个项目内部。</li></ul></li><li>管理方式： <ul><li>命令行创建的网络可以通过 Docker CLI 直接管理。</li><li>Compose 文件中的网络主要通过 Docker Compose 命令管理。 实际应用建议：</li></ul></li><li>全局共享网络： 使用命令行创建，例如您之前提到的代理网络：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> network create proxy-network</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>项目特定网络： 在 Docker Compose 文件中定义：<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">backend</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">internal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>混合使用： 在 Compose 文件中引用外部创建的网络：<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">proxy-network</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">backend</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">internal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>这种灵活性允许您根据具体需求选择最合适的网络配置方法。对于您的 PHP 项目，您可能会发现混合使用这两种方法是最有效的：使用命令行创建共享的代理网络，同时在 Compose 文件中定义项目特定的内部网络。</p>`,21)]))}const t=s(i,[["render",r],["__file","docker_compose网络设置.html.vue"]]),d=JSON.parse('{"path":"/content/service/docker/docker_compose%E7%BD%91%E7%BB%9C%E8%AE%BE%E7%BD%AE.html","title":"docker_compose网络设置","lang":"en-US","frontmatter":{"sidebar":false,"title":"docker_compose网络设置","description":"docker_compose网络设置"},"headers":[],"git":{},"filePathRelative":"content/service/docker/docker_compose网络设置.md"}');export{t as comp,d as data};
