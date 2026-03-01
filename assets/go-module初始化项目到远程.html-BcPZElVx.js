import{_ as l,c,f as d,a as s,o as p,r as e}from"./app-BB_BIQV8.js";const m={};function o(t,n){const i=e("BackBtn"),a=e("CommentService");return p(),c("div",null,[n[0]||(n[0]=d(`<p>实现go module的初始化：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.生成包</span>
<span class="line">在正式了解Golang Modules之前，我们先速览一下其使用方式。</span>
<span class="line">在$GOPATH之外的任意地方，创建一个文件夹：</span>
<span class="line">$ mkdir -p /tmp/hello</span>
<span class="line">$ cd /tmp/hello</span>
<span class="line"></span>
<span class="line">然后初始化一个新的Module：</span>
<span class="line">$ go mod init github.com/gspgsp/el-api</span>
<span class="line"></span>
<span class="line">输出：</span>
<span class="line">go: creating new go.mod: module github.com/gspgsp/el-api</span>
<span class="line"></span>
<span class="line">go.mod内容为：</span>
<span class="line">module github.com/gspgsp/el-api //代表项目的根目录，这里是一个远程地址，而不是之前的本地地址，这样可以让别的项目调用，如果是gitlab的话，就可以私有化了</span>
<span class="line"></span>
<span class="line">go 1.17</span>
<span class="line"></span>
<span class="line">然后git init 生成git文件，再提交到远程地址即可</span>
<span class="line"></span>
<span class="line">2.调用github.com/gspgsp/el-api</span>
<span class="line">在其它项目中先 import ,然后 go mod tidy 即可</span>
<span class="line"></span>
<span class="line">3.如果是私有仓库或者是提交了但是国内仓库代理没有及时拉取你的仓库到镜像，那么可以直接配置：</span>
<span class="line">export GOPRIVATE=gitlab.com/xxx 或者github.com/xxx即可</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">4.由于配置了私有仓库，那么在 go mod tidy 或者 go get 的时候 需要登录 输入用户名和密码，这个在自动发布项目就会有问题，解决办法就是在 ~/.netrc 文件里记录私</span>
<span class="line">有仓库的登录信息，如下就是记录了 gitee下的账号信息，如果执行 git pull 就不用再输入账号密码信息；go mod tidy 或者 go get 实际上也是调用 git 命令拉取相关的</span>
<span class="line">依赖，也就不用再输入账号密码信息了，这个在做 k8s 的项目自动发布的时候很有用，后面得分项目我会用大</span>
<span class="line">[root@k8smaster ~]# vim ~/.netrc</span>
<span class="line">machine gitee.com</span>
<span class="line">login xxxxx@qq.com</span>
<span class="line">password xxxyyyx=zzz</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">如果有多个 server 就重复上面的三行， 分别输入对应的服务器、 用户名和密码即可.</span>
<span class="line"></span>
<span class="line">也可以把这三行写在同一行：machine gitee.com login xxxxx@qq.com password xxxyyyx=zzz</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),s(i),s(a)])}const r=l(m,[["render",o],["__file","go-module初始化项目到远程.html.vue"]]),u=JSON.parse('{"path":"/content/go/base/go-module%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE%E5%88%B0%E8%BF%9C%E7%A8%8B.html","title":"go-module初始化项目到远程","lang":"en-US","frontmatter":{"sidebar":false,"title":"go-module初始化项目到远程","description":"go-module初始化项目到远程"},"headers":[],"git":{},"filePathRelative":"content/go/base/go-module初始化项目到远程.md"}');export{r as comp,u as data};
