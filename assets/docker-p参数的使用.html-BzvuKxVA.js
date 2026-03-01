import{_ as n,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function c(d,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>docker -p 参数的使用:</p><ul><li>问题： 两个laravel11项目，分别通过docker管理，都有如下配置</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker compose build nginx</span>
<span class="line">docker compose build php</span>
<span class="line">docker compose build solr</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是当一个运行起来之后，就会停止另一个项目的container,并且image也只有一份，我也设置了不同的APP_NAME，按道理说会有两套运行的container以及对应的image才是，但是结果不是这样</p><ul><li>如下是和docker-compose.yml同级的start.sh脚本</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#!/bin/bash</span>
<span class="line">set -u</span>
<span class="line"></span>
<span class="line">cd &quot;$(dirname &quot;$0&quot;)&quot;</span>
<span class="line"></span>
<span class="line"># the local user&#39;s UID &amp; GID are required to build the php Docker container</span>
<span class="line">export USER_ID=$(id -u)</span>
<span class="line">export GROUP_ID=$(id -g)</span>
<span class="line"></span>
<span class="line"># Delete all untagged images</span>
<span class="line">if [[ $(docker images -q --filter &quot;dangling=true&quot;) ]]; then</span>
<span class="line">    echo &quot;Removing untagged Docker images...&quot;</span>
<span class="line">    docker rmi $(docker images -q --filter &quot;dangling=true&quot;)</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"># create docker networks if not existing yet, 这个地方相当于在docker compose 外部创建了网络，作为全局服务之间的通信</span>
<span class="line">echo &quot;Creating Docker networks...&quot;</span>
<span class="line"></span>
<span class="line"># build images (will actually only build if images not yet built or if something changed)</span>
<span class="line">echo &quot;Building Docker images...&quot;</span>
<span class="line">docker compose build nginx</span>
<span class="line">docker compose build php</span>
<span class="line">docker compose build solr</span>
<span class="line"></span>
<span class="line"># compose up the stack in detached mode and start to follow the logs output</span>
<span class="line">echo &quot;Starting Docker Compose stack in detached mode...&quot;</span>
<span class="line">#clear</span>
<span class="line">docker compose up -d</span>
<span class="line"></span>
<span class="line">/bin/bash ./start-monitor.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>改进一下:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#!/bin/bash</span>
<span class="line">set -eu</span>
<span class="line"></span>
<span class="line">cd &quot;$(dirname &quot;$0&quot;)&quot;</span>
<span class="line"></span>
<span class="line"># 加载 .env 文件</span>
<span class="line">if [ -f .env ]; then</span>
<span class="line">    export $(grep -v &#39;^#&#39; .env | xargs)</span>
<span class="line">else</span>
<span class="line">    echo &quot;.env file not found&quot;</span>
<span class="line">    exit 1</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"># 确保 APP_NAME 被设置</span>
<span class="line">if [ -z &quot;\${APP_NAME:-}&quot; ]; then</span>
<span class="line">    echo &quot;APP_NAME is not set in .env file&quot;</span>
<span class="line">    exit 1</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">export USER_ID=$(id -u)</span>
<span class="line">export GROUP_ID=$(id -g)</span>
<span class="line"></span>
<span class="line"># 清理属于这个项目的悬空镜像</span>
<span class="line">if [[ $(docker images -q --filter &quot;dangling=true&quot; --filter &quot;label=project=\${APP_NAME}&quot;) ]]; then</span>
<span class="line">    echo &quot;Removing untagged Docker images for \${APP_NAME}...&quot;</span>
<span class="line">    docker rmi $(docker images -q --filter &quot;dangling=true&quot; --filter &quot;label=project=\${APP_NAME}&quot;)</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"># 停止并移除现有容器</span>
<span class="line">docker compose -p \${APP_NAME} down --remove-orphans</span>
<span class="line"></span>
<span class="line"># 构建镜像</span>
<span class="line">echo &quot;Building Docker images for \${APP_NAME}...&quot;</span>
<span class="line">docker compose -p \${APP_NAME} build nginx || { echo &quot;Failed to build nginx&quot;; exit 1; }</span>
<span class="line">docker compose -p \${APP_NAME} build php || { echo &quot;Failed to build php&quot;; exit 1; }</span>
<span class="line">docker compose -p \${APP_NAME} build solr || { echo &quot;Failed to build solr&quot;; exit 1; }</span>
<span class="line"></span>
<span class="line"># 启动栈</span>
<span class="line">echo &quot;Starting Docker Compose stack for \${APP_NAME} in detached mode...&quot;</span>
<span class="line">docker compose -p \${APP_NAME} up -d</span>
<span class="line"></span>
<span class="line"># 启动监控</span>
<span class="line">/bin/bash ./start-monitor.sh \${APP_NAME}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面主要的改动为 添加了读取 .env环境变量的代码，以及通过 -p 使用这个环境变量。再次运行，这个时候两个项目的image会单独生成，对应的container也互相不影响</p><ul><li>还有一个stop.sh脚本</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#!/bin/bash</span>
<span class="line">set -u -e</span>
<span class="line"></span>
<span class="line">cd &quot;$(dirname &quot;$0&quot;)&quot;</span>
<span class="line"></span>
<span class="line">export USER_ID=$(id -u)</span>
<span class="line">export GROUP_ID=$(id -g)</span>
<span class="line"></span>
<span class="line">docker compose down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也需要添加 环境变量以及 -p 参数:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#!/bin/bash</span>
<span class="line">set -eu</span>
<span class="line"></span>
<span class="line">cd &quot;$(dirname &quot;$0&quot;)&quot;</span>
<span class="line"></span>
<span class="line"># 加载 .env 文件</span>
<span class="line">if [ -f .env ]; then</span>
<span class="line">    export $(grep -v &#39;^#&#39; .env | xargs)</span>
<span class="line">else</span>
<span class="line">    echo &quot;.env file not found&quot;</span>
<span class="line">    exit 1</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"># 确保 APP_NAME 被设置</span>
<span class="line">if [ -z &quot;\${APP_NAME:-}&quot; ]; then</span>
<span class="line">    echo &quot;APP_NAME is not set in .env file&quot;</span>
<span class="line">    exit 1</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">export USER_ID=$(id -u)</span>
<span class="line">export GROUP_ID=$(id -g)</span>
<span class="line"></span>
<span class="line">echo &quot;Stopping Docker Compose stack for \${APP_NAME}...&quot;</span>
<span class="line">docker compose -p \${APP_NAME} down</span>
<span class="line">  </span>
<span class="line">//</span>
<span class="line">这个修改后的 stop.sh 脚本做了以下改进：</span>
<span class="line">  </span>
<span class="line">加载 .env 文件，确保我们有 APP_NAME 和其他必要的环境变量。</span>
<span class="line">检查 APP_NAME 是否被正确设置。</span>
<span class="line">使用 docker compose -p \${APP_NAME} down 命令，这确保我们只停止和删除属于特定项目的容器和网络。</span>
<span class="line">  </span>
<span class="line">使用 -p \${APP_NAME} 参数的好处是：</span>
<span class="line">  </span>
<span class="line">它只会影响属于该特定项目的容器和网络。</span>
<span class="line">如果您在同一台机器上运行多个项目，这可以防止意外停止其他项目的容器。</span>
<span class="line">它与 start.sh 中的 up 命令保持一致，确保您启动和停止的是同一组容器。</span>
<span class="line">  </span>
<span class="line">这个方法更安全，因为它只会影响特定项目的 Docker 资源，而不是停止所有以某个前缀开头的容器</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>疑问: 为什么我明明在通过APP_NAME对两个项目的container做了区分，为什么还会有问题，加了 -p 参数就没问题了</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">详细解释一下 \`-p\` 参数的作用，以及为什么即使 \`APP_NAME\` 只作为容器名称的前缀也能生效：</span>
<span class="line">  </span>
<span class="line">1. Docker Compose 项目名称：</span>
<span class="line">   \`-p\` 参数设置 Docker Compose 项目名称。这个名称用于给 Docker Compose 创建的所有资源（容器、网络、卷等）添加一个命名空间。</span>
<span class="line">  </span>
<span class="line">2. 资源前缀：</span>
<span class="line">   当您使用 \`-p\` 参数时，Docker Compose 会自动将项目名称作为前缀添加到它创建的所有资源名称中，除非您在 docker-compose.yml 文件中明确指定了完整的名称。</span>
<span class="line">  </span>
<span class="line">3. 容器命名：</span>
<span class="line">   - 如果您在 docker-compose.yml 中没有指定 \`container_name\`，Docker Compose 会使用 &quot;项目名称_服务名称_数字&quot; 的格式来命名容器。</span>
<span class="line">   - 如果您指定了 \`container_name\`，Docker Compose 会使用您指定的名称，但仍然会将这个容器与项目关联。</span>
<span class="line">  </span>
<span class="line">4. 项目隔离：</span>
<span class="line">   使用 \`-p\` 参数可以创建逻辑上独立的项目，即使它们使用相同的 docker-compose.yml 文件。</span>
<span class="line">  </span>
<span class="line">5. 为什么它仍然有效：</span>
<span class="line">   即使您的 \`APP_NAME\` 只是作为容器名称的前缀，\`-p\` 参数仍然有效，因为：</span>
<span class="line">   - Docker Compose 内部会记录哪些容器属于哪个项目。</span>
<span class="line">   - 当您运行 \`docker compose -p \${APP_NAME} down\` 时，它会查找所有与该项目名称关联的资源，而不仅仅是依赖容器名称。</span>
<span class="line">  </span>
<span class="line">6. 实际工作原理：</span>
<span class="line">   - Docker Compose 使用标签（labels）来跟踪项目中的资源。</span>
<span class="line">   - 每个由 Docker Compose 创建的资源都会带有 \`com.docker.compose.project\` 标签，其值为项目名称。</span>
<span class="line">   - 当您使用 \`-p\` 参数时，Docker Compose 会查找带有对应项目标签的所有资源。</span>
<span class="line">  </span>
<span class="line">7. 额外好处：</span>
<span class="line">   使用 \`-p\` 参数可以让您在同一台机器上运行多个相同配置的项目实例，而不会发生命名冲突。</span>
<span class="line">  </span>
<span class="line">举例说明：</span>
<span class="line">假设您有两个项目，\`APP_NAME\` 分别为 &quot;project1&quot; 和 &quot;project2&quot;：</span>
<span class="line">  </span>
<span class="line">docker compose -p project1 up -d</span>
<span class="line">docker compose -p project2 up -d</span>
<span class="line">  </span>
<span class="line">即使容器名称可能类似（如 &quot;project1-nginx&quot; 和 &quot;project2-nginx&quot;），Docker Compose 仍然能够正确地管理这两个独立的项目。</span>
<span class="line">  </span>
<span class="line">总结：</span>
<span class="line">虽然 \`APP_NAME\` 主要用作容器名称的前缀，但使用 \`-p \${APP_NAME}\` 参数可以确保 Docker Compose 正确地管理和隔离不同项目的资源，即使它们使用相似的配置。这提供了更好的项目隔离和管理能力。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>总结:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">使用 \`-p\` 参数确实起到了命名空间的作用：</span>
<span class="line"></span>
<span class="line">1. 命名空间的作用：</span>
<span class="line">   - \`-p\` 参数为 Docker Compose 项目创建了一个逻辑上的命名空间。</span>
<span class="line">   - 这个命名空间确保了不同项目之间的资源隔离，即使它们使用相似或相同的服务名称。</span>
<span class="line"></span>
<span class="line">2. 问题的根源：</span>
<span class="line">   - 之前没有使用 \`-p\` 参数时，多个项目可能在 Docker 的默认命名空间中发生冲突。</span>
<span class="line">   - 这可能导致一个项目的操作意外影响到另一个项目的容器或资源。</span>
<span class="line"></span>
<span class="line">3. 解决方案的效果：</span>
<span class="line">   - 使用 \`-p \${APP_NAME}\` 后，每个项目都在自己的命名空间中运行。</span>
<span class="line">   - 这确保了启动、停止、或其他操作只影响指定项目的容器和资源。</span>
<span class="line"></span>
<span class="line">4. 增强的项目管理：</span>
<span class="line">   - 现在可以在同一台机器上并行运行多个项目，而不会相互干扰。</span>
<span class="line">   - 每个项目的资源（容器、网络、卷等）都被清晰地分组和标识。</span>
<span class="line"></span>
<span class="line">5. 一致性和可维护性：</span>
<span class="line">   - 结合使用 \`container_name: &quot;\${APP_NAME}-servicename&quot;\` 和 \`-p \${APP_NAME}\` 提供了双重保障。</span>
<span class="line">   - 容器名称直观可读，而项目级别的隔离则由 Docker Compose 在底层管理。</span>
<span class="line"></span>
<span class="line">6. 最佳实践：</span>
<span class="line">   - 始终在 Docker Compose 命令中使用 \`-p\` 参数（例如：\`docker compose -p \${APP_NAME} up -d\`）。</span>
<span class="line">   - 在 CI/CD 流程或脚本中也要确保包含这个参数。</span>
<span class="line"></span>
<span class="line">7. 额外好处：</span>
<span class="line">   - 更容易进行项目级别的操作，如一次性停止或删除所有相关资源。</span>
<span class="line">   - 简化了多环境部署（如开发、测试、预生产环境）的管理。</span>
<span class="line"></span>
<span class="line">这个发现强调了在使用 Docker Compose 管理多项目环境时，正确使用项目名称（通过 \`-p\` 参数）的重要性。它不仅解决了您之前遇到的问题，还为未来的项目管理和扩展提供了更健壮的基础。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const r=n(l,[["render",c],["__file","docker-p参数的使用.html.vue"]]),v=JSON.parse('{"path":"/content/service/docker/docker-p%E5%8F%82%E6%95%B0%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"docker -p 参数的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"docker -p 参数的使用","description":"docker -p 参数的使用"},"headers":[],"git":{},"filePathRelative":"content/service/docker/docker-p参数的使用.md"}');export{r as comp,v as data};
