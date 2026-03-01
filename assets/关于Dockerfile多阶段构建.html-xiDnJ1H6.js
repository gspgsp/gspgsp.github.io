import{_ as n,c as s,f as l,o as i}from"./app-BB_BIQV8.js";const o={};function d(c,e){return i(),s("div",null,e[0]||(e[0]=[l(`<p>关于Dockerfile多阶段构建: 示例 Dockerfile</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">FROM node:hydrogen-alpine AS builder</span>
<span class="line"></span>
<span class="line">ARG GITLAB_TOKEN</span>
<span class="line"></span>
<span class="line"># update and install dependency for build stage</span>
<span class="line">RUN apk update &amp;&amp; apk upgrade</span>
<span class="line">RUN apk add git</span>
<span class="line"></span>
<span class="line"># copy source code into image, note .dockerignore</span>
<span class="line">WORKDIR /app</span>
<span class="line">COPY . .</span>
<span class="line"></span>
<span class="line"># create temp npmrc with npm auth token, install dependencies, prune for production</span>
<span class="line">RUN rm -rf ./node_modules/*</span>
<span class="line">RUN npm cache clean --force</span>
<span class="line">RUN cp /app/.npmrc.local /app/.npmrc</span>
<span class="line">RUN npm ci</span>
<span class="line">RUN npm run postinstall</span>
<span class="line">RUN rm /app/.npmrc</span>
<span class="line">RUN npm run build</span>
<span class="line">RUN npm prune --production</span>
<span class="line"></span>
<span class="line">FROM node:hydrogen-alpine</span>
<span class="line"></span>
<span class="line">WORKDIR /app</span>
<span class="line"></span>
<span class="line"># copy from build stage</span>
<span class="line">COPY --from=builder /app/package.json ./</span>
<span class="line">COPY --from=builder /app/package-lock.json ./</span>
<span class="line">COPY --from=builder /app/ecosystem.config.cjs ./</span>
<span class="line">COPY --from=builder /app/.output ./.output</span>
<span class="line">COPY --from=builder /app/node_modules ./node_modules</span>
<span class="line"># COPY --from=builder /app/ci-scripts/entrypoint.sh ./entrypoint.sh</span>
<span class="line"></span>
<span class="line"># RUN apk add bash</span>
<span class="line"># RUN chmod +x /app/entrypoint.sh</span>
<span class="line"># ENTRYPOINT [&quot;/bin/bash&quot;, &quot;/app/entrypoint.sh&quot;]</span>
<span class="line"></span>
<span class="line"># install PM2 process manager</span>
<span class="line">RUN npm install pm2 -g</span>
<span class="line"># install git and nginx</span>
<span class="line"># RUN apk add nginx</span>
<span class="line"># COPY --from=builder /app/nginx-template.conf /etc/nginx/templates/nginx-template.conf</span>
<span class="line"></span>
<span class="line">ENV NITRO_PORT=3000</span>
<span class="line">ENV NITRO_HOST=0.0.0.0</span>
<span class="line"></span>
<span class="line">EXPOSE 3000</span>
<span class="line"></span>
<span class="line"># start app with PM2 process manager</span>
<span class="line">CMD [ &quot;pm2-runtime&quot;, &quot;/app/ecosystem.config.cjs&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本分析: 这个 Dockerfile 使用了多阶段构建(multi-stage build)的方式,这是一个常见的 Docker 构建模式。它包含两个主要阶段:</p><ol><li><p><strong>构建阶段(Builder Stage):</strong></p><ul><li>这个阶段用于构建应用程序。它使用 <code>node:hydrogen-alpine</code> 作为基础镜像,执行以下操作: <ul><li>安装构建所需的依赖项,如 <code>git</code>。</li><li>复制源代码到镜像中。</li><li>安装 npm 依赖并执行构建命令。</li><li>优化最终的依赖项,只保留生产所需的包。</li></ul></li><li>这个阶段的输出是一个优化过的构建结果,包括应用程序代码和生产依赖项。</li></ul></li><li><p><strong>运行阶段(Runtime Stage):</strong></p><ul><li>这个阶段用于运行应用程序。它同样使用 <code>node:hydrogen-alpine</code> 作为基础镜像,但不再包含构建时的工具和依赖项。</li><li>它从构建阶段复制所需的文件,如 <code>package.json</code>、<code>package-lock.json</code>、应用程序输出文件和 <code>node_modules</code> 文件夹。</li><li>安装 <code>pm2</code> 进程管理器,用于运行应用程序。</li><li>设置运行时的环境变量,如 <code>NITRO_PORT</code> 和 <code>NITRO_HOST</code>。</li><li>最终,使用 <code>pm2-runtime</code> 命令启动应用程序。</li></ul></li></ol><p>这种多阶段构建的好处是:</p><ol><li><strong>优化镜像大小:</strong> 构建阶段包含了所有构建依赖项,但在运行阶段,只有应用程序运行所需的文件和依赖项被复制到最终镜像中,减小了镜像体积。</li><li><strong>分离构建和运行:</strong> 构建和运行阶段被分离,使得每个阶段都能专注于自己的任务,提高了灵活性和可维护性。</li></ol><p>总之,这个 Dockerfile 采用了多阶段构建的模式,将构建和运行阶段分离,以优化最终 Docker 镜像的大小和结构。</p><p>多阶段构建中 AS builder的作用: 在多阶段构建中使用 <code>AS &lt;name&gt;</code> 语法是可选的,但通常被认为是一种最佳实践。</p><p>在这个 Dockerfile 中,使用 <code>AS builder</code> 是为了给第一个构建阶段命名为 &quot;builder&quot;。这样做有以下好处:</p><ol><li><p><strong>可读性</strong>: 给每个阶段起名字可以让 Dockerfile 更加清晰易懂。在后续的 <code>COPY --from=builder</code> 语句中,可以清楚地知道它是从哪个阶段复制文件。</p></li><li><p><strong>复用性</strong>: 如果在 Dockerfile 中需要多次引用同一个构建阶段,使用命名可以让引用更加简单直观。</p></li><li><p><strong>可维护性</strong>: 当 Dockerfile 变得复杂时,给构建阶段命名可以让代码更加模块化和可读。这有助于理解 Dockerfile 的结构和工作原理。</p></li></ol><p>所以虽然 <code>AS &lt;name&gt;</code> 语法不是必须的,但它通常被认为是一种良好的实践,可以提高 Dockerfile 的可读性和可维护性。但如果你的 Dockerfile 非常简单,不使用命名也是可以的。</p><p>怎么知道是Runtime阶段: 在多阶段构建的 Dockerfile 中,通常最后一个 <code>FROM</code> 语句所定义的阶段就是运行时阶段(Runtime Stage)。</p><p>让我们来看看这个 Dockerfile 的结构:</p><ol><li>第一个 <code>FROM</code> 语句使用 <code>node:hydrogen-alpine</code> 作为基础镜像,并标记为 <code>AS builder</code>。这是构建阶段(Builder Stage)。</li><li>最后一个 <code>FROM</code> 语句同样使用 <code>node:hydrogen-alpine</code> 作为基础镜像。这个没有任何 <code>AS</code> 标记,所以它就是最终的运行时阶段(Runtime Stage)。</li></ol><p>通常情况下,多阶段构建的最后一个阶段就是运行时阶段。这个阶段只包含应用程序运行所需的内容,而不包含构建工具和依赖项。</p><p>所以在这个 Dockerfile 中,当看到最后一个 <code>FROM</code> 语句使用 <code>node:hydrogen-alpine</code> 作为基础镜像时,我们就可以确定这就是运行时阶段。</p><p>总的来说,通过观察 Dockerfile 中 <code>FROM</code> 语句的顺序和是否有 <code>AS</code> 标记,可以很容易地识别出构建阶段和运行时阶段。最后一个 <code>FROM</code> 语句定义的就是最终的运行时阶段。</p><p>RUN npm ci的作用: <code>RUN npm ci</code> 是这个 Dockerfile 中的一个重要命令,它的作用是安装应用程序的依赖项。让我们更详细地解释这条命令:</p><ol><li><p><strong><code>RUN</code></strong>: 这是 Dockerfile 中的一个关键词,它表示在构建镜像过程中需要执行的命令。</p></li><li><p><strong><code>npm ci</code></strong>: 这是 npm 命令行工具提供的一个子命令。<code>ci</code> 代表 &quot;clean install&quot;，它与常见的 <code>npm install</code> 命令有一些区别:</p><ul><li><code>npm ci</code> 会严格按照 <code>package-lock.json</code> 文件中的版本信息安装依赖项,而不会自动升级依赖的版本。这有助于确保构建的可重复性。</li><li><code>npm ci</code> 会首先删除 <code>node_modules</code> 文件夹,然后从头开始安装依赖项。这确保了一个干净的依赖安装环境。</li><li><code>npm ci</code> 比 <code>npm install</code> 更快,因为它省略了一些额外的检查和处理步骤。</li></ul></li></ol><p>综合起来,在 Dockerfile 的构建阶段使用 <code>RUN npm ci</code> 可以确保应用程序的依赖项被可靠地安装,并且构建过程更加高效和可重复。这有助于确保最终生成的 Docker 镜像的一致性和可靠性。</p><p>这个脚本在执行 ci 之前先执行了 RUN rm -rf ./node_modules/*的作用: 在运行 <code>npm ci</code> 命令之前,Dockerfile 中有一行 <code>RUN rm -rf ./node_modules/*</code>。这个命令的作用是:</p><ol><li><strong>删除</strong> - <code>rm</code> 命令用于删除文件或目录。</li><li><strong>递归删除</strong> - <code>-rf</code> 选项表示递归地删除目录及其内容。</li><li><strong>./node_modules/</strong>* - 这个路径指的是删除 <code>/app/node_modules</code> 目录下的所有内容。</li></ol><p>为什么要在运行 <code>npm ci</code> 之前先删除 <code>node_modules</code> 目录呢?主要有以下几个原因:</p><ol><li><p><strong>清理环境</strong> - 删除旧的 <code>node_modules</code> 文件夹可以确保在安装依赖时从一个干净的环境开始,避免遗留的依赖项干扰新的安装过程。</p></li><li><p><strong>强制重新安装</strong> - 通过删除 <code>node_modules</code>，强制 <code>npm ci</code> 命令从头开始安装所有依赖项,而不是尝试使用缓存的依赖项。这有助于确保完整和正确的依赖安装。</p></li><li><p><strong>镜像大小优化</strong> - 在多阶段构建中,删除旧的 <code>node_modules</code> 可以减小最终 Docker 镜像的体积,因为只有新安装的生产依赖项会被复制到运行时镜像中。</p></li></ol><p>总之,这行 <code>RUN rm -rf ./node_modules/*</code> 命令是为了确保在安装依赖项之前,构建环境是干净和一致的,有助于提高构建过程的可靠性和最终镜像的质量。是的,你注意到了这个细节。在运行 <code>npm ci</code> 命令之前,Dockerfile 中有一行 <code>RUN rm -rf ./node_modules/*</code>。这个命令的作用是:</p><ol><li><strong>删除</strong> - <code>rm</code> 命令用于删除文件或目录。</li><li><strong>递归删除</strong> - <code>-rf</code> 选项表示递归地删除目录及其内容。</li><li><strong>./node_modules/</strong>* - 这个路径指的是删除 <code>/app/node_modules</code> 目录下的所有内容。</li></ol><p>为什么要在运行 <code>npm ci</code> 之前先删除 <code>node_modules</code> 目录呢?主要有以下几个原因:</p><ol><li><p><strong>清理环境</strong> - 删除旧的 <code>node_modules</code> 文件夹可以确保在安装依赖时从一个干净的环境开始,避免遗留的依赖项干扰新的安装过程。</p></li><li><p><strong>强制重新安装</strong> - 通过删除 <code>node_modules</code>，强制 <code>npm ci</code> 命令从头开始安装所有依赖项,而不是尝试使用缓存的依赖项。这有助于确保完整和正确的依赖安装。</p></li><li><p><strong>镜像大小优化</strong> - 在多阶段构建中,删除旧的 <code>node_modules</code> 可以减小最终 Docker 镜像的体积,因为只有新安装的生产依赖项会被复制到运行时镜像中。</p></li></ol><p>总之,这行 <code>RUN rm -rf ./node_modules/*</code> 命令是为了确保在安装依赖项之前,构建环境是干净和一致的,有助于提高构建过程的可靠性和最终镜像的质量。</p>`,29)]))}const p=n(o,[["render",d],["__file","关于Dockerfile多阶段构建.html.vue"]]),r=JSON.parse('{"path":"/content/service/docker/%E5%85%B3%E4%BA%8EDockerfile%E5%A4%9A%E9%98%B6%E6%AE%B5%E6%9E%84%E5%BB%BA.html","title":"关于Dockerfile多阶段构建","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于Dockerfile多阶段构建","description":"关于Dockerfile多阶段构建"},"headers":[],"git":{},"filePathRelative":"content/service/docker/关于Dockerfile多阶段构建.md"}');export{p as comp,r as data};
