import{_ as s,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(u,n){return l(),e("div",null,n[0]||(n[0]=[a(`<p>ubuntu22设置golang环境变量:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#PATH</span>
<span class="line">export GOROOT=/usr/local/go</span>
<span class="line">export GOPATH=/usr/local/go-project</span>
<span class="line">export PATH=$PATH:$GOROOT/bin:$GOPATH/bin</span>
<span class="line">  </span>
<span class="line">运行 sudo go mod init xxx ,报:sudo: go: command not found</span>
<span class="line">  </span>
<span class="line">我们使用 sudo 时，使用的配置文件是 /etc/sudoers。</span>
<span class="line">配置 /etc/sudoers 文件中的 Defaults secure_path 这一项。将 $GOROOT/bin 目录加入进去</span>
<span class="line">Defaults secure_path 这一行：</span>
<span class="line">Defaults        secure_path=&quot;/usr/local/go/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(i,[["render",t],["__file","ubuntu22设置golang环境变量.html.vue"]]),r=JSON.parse('{"path":"/content/go/base/ubuntu22%E8%AE%BE%E7%BD%AEgolang%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html","title":"ubuntu22设置golang环境变量","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu22设置golang环境变量","description":"ubuntu22设置golang环境变量"},"headers":[],"git":{},"filePathRelative":"content/go/base/ubuntu22设置golang环境变量.md"}');export{c as comp,r as data};
