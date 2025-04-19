import{_ as n,c as i,d as e,o as a}from"./app-C7j_h9cy.js";const l={};function t(c,s){return a(),i("div",null,s[0]||(s[0]=[e(`<p>github上拉取自己的私有项目，现在不允许使用 password方式，改用ssh方式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;将自己主机上的 ~/.ssh/id_rsa.pub 复制出来，粘贴到github的个人settings下的 ssh key下</span>
<span class="line">2&gt;直接 git clone git@github.com:xxx/vue-blog.git</span>
<span class="line">可能会报:</span>
<span class="line">Cloning into &#39;vue-blog&#39;...</span>
<span class="line">ssh: connect to host github.com port 22: Connection timed out</span>
<span class="line">fatal: Could not read from remote repository.</span>
<span class="line"></span>
<span class="line">Please make sure you have the correct access rights</span>
<span class="line">and the repository exists.</span>
<span class="line"></span>
<span class="line">这个可能是本机的22端口被屏蔽(通过 telnet github.com 22 测试一下，大概率超时)，解决方案使用443：</span>
<span class="line">$ sudo vim ~/.ssh/config</span>
<span class="line">在里面配置如下内容(port也可以配置为22，然后试一试):</span>
<span class="line">Host github.com</span>
<span class="line">Hostname ssh.github.com</span>
<span class="line">User git</span>
<span class="line">Port 443</span>
<span class="line">IdentityFile ~/.ssh/id_rsa</span>
<span class="line"></span>
<span class="line">然后保存，通过下面的命令测试是否可以连接github</span>
<span class="line">$ ssh -T git@github.com</span>
<span class="line">Hi gspgsp! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span>
<span class="line"></span>
<span class="line">3&gt;再次执行 git clone git@github.com:xxx/vue-blog.git 就可以拉下代码</span>
<span class="line"></span>
<span class="line">4&gt;配置分析</span>
<span class="line">User git 这一行表示 连接 GitHub 时使用 git 用户，这是 GitHub SSH 访问的标准方式。</span>
<span class="line">在 ~/.ssh/config 里，User git 告诉 SSH 连接 GitHub 时使用 git 用户</span>
<span class="line">相当于让 SSH 在执行 ssh git@github.com 时 默认使用 git 作为用户名。</span>
<span class="line">ssh -T git@github.com</span>
<span class="line">这里等价于</span>
<span class="line">ssh -T github.com</span>
<span class="line">因为 ~/.ssh/config 里已经指定 User git</span>
<span class="line"></span>
<span class="line">5&gt;如果需要重新生成ssh-key,可以执行</span>
<span class="line">ssh-keygen -t rsa -b 4096 -C &quot;your-email@example.com&quot;</span>
<span class="line">也可以执行</span>
<span class="line">ssh-keygen -t ed25519 -C &quot;your_email@example.com&quot;</span>
<span class="line"></span>
<span class="line">二者对比:</span>
<span class="line">RSA:</span>
<span class="line">算法：RSA（Rivest–Shamir–Adleman）</span>
<span class="line">密钥长度：你指定了 -b 4096（推荐，默认是 2048）</span>
<span class="line">兼容性：适用于所有 SSH 服务器和旧系统（兼容性最好）</span>
<span class="line">安全性：4096 位密钥仍然安全，但 RSA 算法随着计算能力提升，未来可能不如更现代的算法</span>
<span class="line">速度：相比 Ed25519，RSA 密钥较长，加密/解密稍慢</span>
<span class="line">适用场景：如果你需要在一些 旧系统（比如老版本 OpenSSH） 上使用 SSH，建议选 RSA</span>
<span class="line"></span>
<span class="line">Ed25519（更现代的算法):</span>
<span class="line">算法：Ed25519（基于椭圆曲线）</span>
<span class="line">密钥长度：固定 256 位（更短，但安全性比 4096 位 RSA 还强）</span>
<span class="line">兼容性：需要 OpenSSH 6.5+（2014 年之后的系统一般都支持）</span>
<span class="line">安全性：比 RSA 2048/4096 更安全，抗量子攻击能力更强</span>
<span class="line">速度：更快（计算效率高，适合高并发）</span>
<span class="line">适用场景：适用于 GitHub、GitLab、服务器 SSH 登录，如果你不需要支持 非常旧的 SSH 服务器，推荐使用 Ed25519</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(l,[["render",t],["__file","github上拉取自己的私有项目.html.vue"]]),v=JSON.parse('{"path":"/content/other/git/github%E4%B8%8A%E6%8B%89%E5%8F%96%E8%87%AA%E5%B7%B1%E7%9A%84%E7%A7%81%E6%9C%89%E9%A1%B9%E7%9B%AE.html","title":"github上拉取自己的私有项目","lang":"en-US","frontmatter":{"sidebar":false,"title":"github上拉取自己的私有项目","head":[["meta",{"name":"title","content":"github上拉取自己的私有项目"}],["meta",{"name":"description","content":"github上拉取自己的私有项目"}],["meta",{"name":"keywords","content":"github,ssh"}],["meta",{"property":"og:title","content":"github上拉取自己的私有项目"}],["meta",{"property":"og:description","content":"github上拉取自己的私有项目"}]]},"headers":[],"git":{},"filePathRelative":"content/other/git/github上拉取自己的私有项目.md"}');export{p as comp,v as data};
