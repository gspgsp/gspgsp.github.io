import{_ as s,c as i,f as l,o as a}from"./app-BB_BIQV8.js";const e={};function c(d,n){return a(),i("div",null,n[0]||(n[0]=[l(`<p>k8s部署golang项目之获取项目依赖问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker build golang项目的时候，需要获取go程序的依赖，可能会有如下的问题:</span>
<span class="line">[root@k8smaster k8s-hello]# docker build -t chetaixian/hello-wolrd:v1.0.3 .</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">Step 5/6 : RUN go build -o main .</span>
<span class="line"> ---&gt; Running in 9ac63e6c09eb</span>
<span class="line">go: downloading github.com/spf13/viper v1.13.0</span>
<span class="line">cmd/config.go:5:2: github.com/spf13/viper@v1.13.0: Get &quot;https://proxy.golang.org/github.com/spf13/viper/@v/v1.13.0.zip&quot;: dial tcp 142.251.42.241:443: i/o timeout</span>
<span class="line">The command &#39;/bin/sh -c go build -o main .&#39; returned a non-zero code: 1</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">在这里如果Dockerfile里面没有配置 go proxy，那么就会从国外站点拉取go项目依赖，一般是拉取不成功的，为了解决这个问题，可以加上 go proxy:</span>
<span class="line">FROM golang:alpine</span>
<span class="line">RUN mkdir /hello-world</span>
<span class="line">COPY . /hello-world</span>
<span class="line">WORKDIR /hello-world</span>
<span class="line">#设置代理</span>
<span class="line">RUN GOPROXY=&quot;https://goproxy.cn&quot; GO111MODULE=on go build -o main .</span>
<span class="line">#RUN go build -o main .</span>
<span class="line">CMD [&quot;/hello-world/main&quot;, &quot;--config&quot;, &quot;/etc/app/config.yaml&quot;]</span>
<span class="line"></span>
<span class="line">这样基本就不会有问题</span>
<span class="line"></span>
<span class="line">//有时候需要引入私有仓库，通过下面的命令</span>
<span class="line">go env -w GOPRIVATE=gitee.com</span>
<span class="line"></span>
<span class="line">//假如这个私有仓库是http的，而非https，需要加入insecure里</span>
<span class="line">go env -w GOINSECURE=go.qinhongzs.com</span>
<span class="line"></span>
<span class="line">//由于配置了私有仓库，那么在 go mod tidy 或者 go get 的时候 需要登录 输入用户名和密码，这个在自动发布项目就会有问题，解决办法就是在 ~/.netrc 文件里记录私</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(e,[["render",c],["__file","k8s部署golang项目之获取项目依赖问题.html.vue"]]),v=JSON.parse('{"path":"/content/service/k8s/k8s%E9%83%A8%E7%BD%B2golang%E9%A1%B9%E7%9B%AE%E4%B9%8B%E8%8E%B7%E5%8F%96%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E9%97%AE%E9%A2%98.html","title":"k8s部署golang项目之获取项目依赖问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"k8s部署golang项目之获取项目依赖问题","description":"k8s部署golang项目之获取项目依赖问题"},"headers":[],"git":{},"filePathRelative":"content/service/k8s/k8s部署golang项目之获取项目依赖问题.md"}');export{o as comp,v as data};
