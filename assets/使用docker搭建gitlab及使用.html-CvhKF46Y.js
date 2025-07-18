import{_ as n,c as e,d as a,o as i}from"./app-B4P9BclZ.js";const l={};function d(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h3 id="使用docker搭建gitlab-ce" tabindex="-1"><a class="header-anchor" href="#使用docker搭建gitlab-ce"><span>使用docker搭建gitlab-ce:</span></a></h3><h4 id="三大步骤" tabindex="-1"><a class="header-anchor" href="#三大步骤"><span>三大步骤:</span></a></h4><p>1&gt;配置镜像</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker pull docker.1ms.run/gitlab/gitlab-ce:latest</span>
<span class="line">$ docker image tag docker.1ms.run/gitlab/gitlab-ce:latest gitlab/gitlab-ce:latest</span>
<span class="line">$ docker rmi docker.1ms.run/gitlab/gitlab-ce:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2&gt;安装</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">然后:</span>
<span class="line">docker run --detach \\</span>
<span class="line">--hostname gitlab.example.com \\</span>
<span class="line">--publish 9080:80 --publish 9443:443 --publish 9022:22 \\</span>
<span class="line">--name gitlab \\</span>
<span class="line">--restart always \\</span>
<span class="line">--volume /srv/gitlab/config:/etc/gitlab \\</span>
<span class="line">--volume /srv/gitlab/logs:/var/log/gitlab \\</span>
<span class="line">--volume /srv/gitlab/data:/var/opt/gitlab \\</span>
<span class="line">gitlab/gitlab-ce:latest</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">先进入到容器:</span>
<span class="line">docker exec -it gitlab bash</span>
<span class="line">修改配置:</span>
<span class="line">root@gitlab:/# vi /etc/gitlab/gitlab.rb</span>
<span class="line">找到 external_url &#39;http://gitlab.example.com&#39;</span>
<span class="line">改为 external_url &#39;http://gitlab.example.com:9080&#39;  //注意如果使用https, external_url &#39;https://gitlab.example.com:9443&#39;</span>
<span class="line"></span>
<span class="line">然后执行:</span>
<span class="line">root@gitlab:/# gitlab-ctl reconfigure</span>
<span class="line"></span>
<span class="line">看到如下信息，代表配置完成</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">Running handlers:</span>
<span class="line">[2025-02-06T16:14:56+00:00] INFO: Running report handlers</span>
<span class="line">Running handlers complete</span>
<span class="line">[2025-02-06T16:14:56+00:00] INFO: Report handlers complete</span>
<span class="line">Infra Phase complete, 34/868 resources updated in 42 seconds</span>
<span class="line"></span>
<span class="line">Deprecations:</span>
<span class="line">* git_data_dirs has been deprecated since 17.8 and will be removed in 18.0. See https://docs.gitlab.com/omnibus/settings/configuration.html#migrating-from-git_data_dirs for migration instructions.</span>
<span class="line"></span>
<span class="line">Update the configuration in your gitlab.rb file or GITLAB_OMNIBUS_CONFIG environment.</span>
<span class="line"></span>
<span class="line">gitlab Reconfigured!</span>
<span class="line">root@gitlab:/#</span>
<span class="line">root@gitlab:/# exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3&gt;宿主机配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">宿主机上，添加hosts文件:</span>
<span class="line">127.0.0.1 gitlab.example.com</span>
<span class="line"></span>
<span class="line">访问:</span>
<span class="line">http://gitlab.example.com:9080</span>
<span class="line"></span>
<span class="line">首次登录，使用 root 账户，密码存储在：</span>
<span class="line">docker exec -it gitlab cat /etc/gitlab/initial_root_password</span>
<span class="line"></span>
<span class="line">$ docker exec -it gitlab cat /etc/gitlab/initial_root_password</span>
<span class="line"># WARNING: This value is valid only in the following conditions</span>
<span class="line">#          1. If provided manually (either via \`GITLAB_ROOT_PASSWORD\` environment variable or via \`gitlab_rails[&#39;initial_root_password&#39;]\` setting in \`gitlab.rb\`, it was provided before database was seeded for the first time (usually, the first reconfigure run).</span>
<span class="line">#          2. Password hasn&#39;t been changed manually, either via UI or via command line.</span>
<span class="line">#</span>
<span class="line">#          If the password shown here doesn&#39;t work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.</span>
<span class="line"></span>
<span class="line">Password: kICRKydbHX69mkbeqgeA7fPbWDPdaLHl/5GnPRLSKks=</span>
<span class="line"></span>
<span class="line">然后就登进去了...</span>
<span class="line"></span>
<span class="line">http://gitlab.example.com:9080/admin //可以查看管理面板</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>维护 GitLab</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">操作	命令</span>
<span class="line">查看容器状态	docker ps -a</span>
<span class="line">启动 GitLab	docker start gitlab</span>
<span class="line">停止 GitLab	docker stop gitlab</span>
<span class="line">重新启动 GitLab	docker restart gitlab</span>
<span class="line">删除 GitLab 容器	docker rm -f gitlab</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4&gt;使用这个gitlab-ce</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ git clone git@gitlab.example.com:root/laravel-14.git</span>
<span class="line">Cloning into &#39;laravel-14&#39;...</span>
<span class="line">ssh: connect to host gitlab.example.com port 22: Connection refused</span>
<span class="line">fatal: Could not read from remote repository.</span>
<span class="line"></span>
<span class="line">Please make sure you have the correct access rights</span>
<span class="line">and the repository exists.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">$ docker ps | grep gitlab</span>
<span class="line">8a4f7a01b396   gitlab/gitlab-ce:latest     &quot;/assets/wrapper&quot;        23 hours ago   Up 40 minutes (healthy)   0.0.0.0:9022-&gt;22/tcp, :::9022-&gt;22/tcp, 0.0.0.0:9080-&gt;80/tcp, :::9080-&gt;80/tcp, 0.0.0.0:9443-&gt;443/tcp, :::9443-&gt;443/tcp   gitlab</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 22</span>
<span class="line">打开默认注释,配置为:</span>
<span class="line">gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 9022</span>
<span class="line"></span>
<span class="line">root@gitlab:/# gitlab-ctl reconfigure</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">Running handlers:</span>
<span class="line">[2025-02-07T15:30:13+00:00] INFO: Running report handlers</span>
<span class="line">Running handlers complete</span>
<span class="line">[2025-02-07T15:30:13+00:00] INFO: Report handlers complete</span>
<span class="line">Infra Phase complete, 6/818 resources updated in 38 seconds</span>
<span class="line"></span>
<span class="line">Deprecations:</span>
<span class="line">* git_data_dirs has been deprecated since 17.8 and will be removed in 18.0. See https://docs.gitlab.com/omnibus/settings/configuration.html#migrating-from-git_data_dirs for migration instructions.</span>
<span class="line"></span>
<span class="line">Update the configuration in your gitlab.rb file or GITLAB_OMNIBUS_CONFIG environment.</span>
<span class="line"></span>
<span class="line">gitlab Reconfigured!</span>
<span class="line"></span>
<span class="line">root@gitlab:/# gitlab-ctl restart</span>
<span class="line">ok: run: alertmanager: (pid 3572) 1s</span>
<span class="line">ok: run: gitaly: (pid 3590) 0s</span>
<span class="line">ok: run: gitlab-exporter: (pid 3618) 0s</span>
<span class="line">ok: run: gitlab-kas: (pid 3630) 0s</span>
<span class="line">ok: run: gitlab-workhorse: (pid 3640) 0s</span>
<span class="line">ok: run: logrotate: (pid 3665) 0s</span>
<span class="line">ok: run: nginx: (pid 3672) 0s</span>
<span class="line">ok: run: postgres-exporter: (pid 3696) 1s</span>
<span class="line">ok: run: postgresql: (pid 3705) 0s</span>
<span class="line">ok: run: prometheus: (pid 3716) 0s</span>
<span class="line">ok: run: puma: (pid 3725) 0s</span>
<span class="line">ok: run: redis: (pid 3738) 0s</span>
<span class="line">ok: run: redis-exporter: (pid 3747) 0s</span>
<span class="line">ok: run: registry: (pid 3754) 0s</span>
<span class="line">ok: run: sidekiq: (pid 3781) 0s</span>
<span class="line">ok: run: sshd: (pid 3791) 0s</span>
<span class="line"></span>
<span class="line">退出gitlab容器</span>
<span class="line"></span>
<span class="line">在宿主机 ~/.ssh/config 新增配置:</span>
<span class="line">Host gitlab.example.com</span>
<span class="line">HostName gitlab.example.com</span>
<span class="line">User git</span>
<span class="line">Port 9022</span>
<span class="line">IdentityFile ~/.ssh/id_rsa</span>
<span class="line"></span>
<span class="line">虽然之前已经添加了github的，仍然可以在后面继续添加</span>
<span class="line"></span>
<span class="line">测试一下:</span>
<span class="line">$ ssh -T git@gitlab.example.com</span>
<span class="line">The authenticity of host &#39;[gitlab.example.com]:9022 ([127.0.0.1]:9022)&#39; can&#39;t be established.</span>
<span class="line">ED25519 key fingerprint is SHA256:79UEk9sTgEkSKjTbJ5qdzc2iYRyYHMYr1z13GSngLIo.</span>
<span class="line">This key is not known by any other names</span>
<span class="line">Are you sure you want to continue connecting (yes/no/[fingerprint])? yes</span>
<span class="line">Warning: Permanently added &#39;[gitlab.example.com]:9022&#39; (ED25519) to the list of known hosts.</span>
<span class="line">Welcome to GitLab, @root!</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">然后就就可以clone代码了:</span>
<span class="line">$ git clone git@gitlab.example.com:root/laravel-14.git</span>
<span class="line">Cloning into &#39;laravel-14&#39;...</span>
<span class="line">remote: Enumerating objects: 3, done.</span>
<span class="line">remote: Counting objects: 100% (3/3), done.</span>
<span class="line">remote: Compressing objects: 100% (2/2), done.</span>
<span class="line">remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)</span>
<span class="line">Receiving objects: 100% (3/3), done.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">其实也可以直接这样，不用在~/.ssh/config下添加配置，适合临时执行的:</span>
<span class="line">GIT_SSH_COMMAND=&quot;ssh -p 9022&quot; git clone git@gitlab.example.com:root/laravel-14.git</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">对于已经存在的项目，想使用新的remote 连接，可以改为:</span>
<span class="line">git remote set-url origin ssh://git@gitlab.example.com:9022/root/laravel-14.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户邮箱注册流程:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;到登陆页面注册</span>
<span class="line">guoshipengdss@gmail.com</span>
<span class="line">rx7UJjznL@W57iU</span>
<span class="line"></span>
<span class="line">2&gt;注册完成后还不能登陆，需要管理员统一</span>
<span class="line">http://gitlab.example.com:9080/admin 下的users目录下的Pending approval可以看到等待通过的用户</span>
<span class="line"></span>
<span class="line">3&gt;点击edit之后，选择Approval即可通过新注册的用户</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为gitlab设置新的Group</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;管理员登陆</span>
<span class="line">http://gitlab.example.com:9080/admin 下的Groups目录下可以选择创建新的group，比如 dev， 那么就会有</span>
<span class="line">http://gitlab.example.com:9080/dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const r=n(l,[["render",d],["__file","使用docker搭建gitlab及使用.html.vue"]]),p=JSON.parse('{"path":"/content/service/docker/%E4%BD%BF%E7%94%A8docker%E6%90%AD%E5%BB%BAgitlab%E5%8F%8A%E4%BD%BF%E7%94%A8.html","title":"使用docker搭建gitlab及使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"使用docker搭建gitlab及使用","head":[["meta",{"name":"title","content":"使用docker搭建gitlab及使用"}],["meta",{"name":"description","content":"使用docker搭建gitlab及使用"}],["meta",{"name":"keywords","content":"gitlab,docker"}],["meta",{"property":"og:title","content":"使用docker搭建gitlab及使用"}],["meta",{"property":"og:description","content":"使用docker搭建gitlab及使用"}]]},"headers":[{"level":3,"title":"使用docker搭建gitlab-ce:","slug":"使用docker搭建gitlab-ce","link":"#使用docker搭建gitlab-ce","children":[]}],"git":{},"filePathRelative":"content/service/docker/使用docker搭建gitlab及使用.md"}');export{r as comp,p as data};
