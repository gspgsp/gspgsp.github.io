import{_ as i,o as n,c as e,g as l}from"./app.264f0052.js";const s={},d=l(`<p>k8s\u90E8\u7F72golang\u9879\u76EE\u4E4B\u83B7\u53D6\u9879\u76EE\u4F9D\u8D56\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker build golang\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u9700\u8981\u83B7\u53D6go\u7A0B\u5E8F\u7684\u4F9D\u8D56\uFF0C\u53EF\u80FD\u4F1A\u6709\u5982\u4E0B\u7684\u95EE\u9898:
[root@k8smaster k8s-hello]# docker build -t chetaixian/hello-wolrd:v1.0.3 .
...
...
Step 5/6 : RUN go build -o main .
 ---&gt; Running in 9ac63e6c09eb
go: downloading github.com/spf13/viper v1.13.0
cmd/config.go:5:2: github.com/spf13/viper@v1.13.0: Get &quot;https://proxy.golang.org/github.com/spf13/viper/@v/v1.13.0.zip&quot;: dial tcp 142.251.42.241:443: i/o timeout
The command &#39;/bin/sh -c go build -o main .&#39; returned a non-zero code: 1


\u5728\u8FD9\u91CC\u5982\u679CDockerfile\u91CC\u9762\u6CA1\u6709\u914D\u7F6E go proxy\uFF0C\u90A3\u4E48\u5C31\u4F1A\u4ECE\u56FD\u5916\u7AD9\u70B9\u62C9\u53D6go\u9879\u76EE\u4F9D\u8D56\uFF0C\u4E00\u822C\u662F\u62C9\u53D6\u4E0D\u6210\u529F\u7684\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EF\u4EE5\u52A0\u4E0A go proxy:
FROM golang:alpine
RUN mkdir /hello-world
COPY . /hello-world
WORKDIR /hello-world
#\u8BBE\u7F6E\u4EE3\u7406
RUN GOPROXY=&quot;https://goproxy.cn&quot; GO111MODULE=on go build -o main .
#RUN go build -o main .
CMD [&quot;/hello-world/main&quot;, &quot;--config&quot;, &quot;/etc/app/config.yaml&quot;]

\u8FD9\u6837\u57FA\u672C\u5C31\u4E0D\u4F1A\u6709\u95EE\u9898

//\u6709\u65F6\u5019\u9700\u8981\u5F15\u5165\u79C1\u6709\u4ED3\u5E93\uFF0C\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4
go env -w GOPRIVATE=gitee.com

//\u5047\u5982\u8FD9\u4E2A\u79C1\u6709\u4ED3\u5E93\u662Fhttp\u7684\uFF0C\u800C\u975Ehttps\uFF0C\u9700\u8981\u52A0\u5165insecure\u91CC
go env -w GOINSECURE=go.qinhongzs.com

//\u7531\u4E8E\u914D\u7F6E\u4E86\u79C1\u6709\u4ED3\u5E93\uFF0C\u90A3\u4E48\u5728 go mod tidy \u6216\u8005 go get \u7684\u65F6\u5019 \u9700\u8981\u767B\u5F55 \u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u8FD9\u4E2A\u5728\u81EA\u52A8\u53D1\u5E03\u9879\u76EE\u5C31\u4F1A\u6709\u95EE\u9898\uFF0C\u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u5728 ~/.netrc \u6587\u4EF6\u91CC\u8BB0\u5F55\u79C1
\u6709\u4ED3\u5E93\u7684\u767B\u5F55\u4FE1\u606F\uFF0C\u5982\u4E0B\u5C31\u662F\u8BB0\u5F55\u4E86 gitee\u4E0B\u7684\u8D26\u53F7\u4FE1\u606F\uFF0C\u5982\u679C\u6267\u884C git pull \u5C31\u4E0D\u7528\u518D\u8F93\u5165\u8D26\u53F7\u5BC6\u7801\u4FE1\u606F\uFF1Bgo mod tidy \u6216\u8005 go get \u5B9E\u9645\u4E0A\u4E5F\u662F\u8C03\u7528 git \u547D\u4EE4\u62C9\u53D6\u76F8\u5173\u7684
\u4F9D\u8D56\uFF0C\u4E5F\u5C31\u4E0D\u7528\u518D\u8F93\u5165\u8D26\u53F7\u5BC6\u7801\u4FE1\u606F\u4E86\uFF0C\u8FD9\u4E2A\u5728\u505A k8s \u7684\u9879\u76EE\u81EA\u52A8\u53D1\u5E03\u7684\u65F6\u5019\u5F88\u6709\u7528\uFF0C\u540E\u9762\u5F97\u5206\u9879\u76EE\u6211\u4F1A\u7528\u5927
[root@k8smaster ~]# vim ~/.netrc
machine gitee.com
login xxxxx@qq.com
password xxxyyyx=zzz


\u5982\u679C\u6709\u591A\u4E2A server \u5C31\u91CD\u590D\u4E0A\u9762\u7684\u4E09\u884C\uFF0C \u5206\u522B\u8F93\u5165\u5BF9\u5E94\u7684\u670D\u52A1\u5668\u3001 \u7528\u6237\u540D\u548C\u5BC6\u7801\u5373\u53EF.

\u4E5F\u53EF\u4EE5\u628A\u8FD9\u4E09\u884C\u5199\u5728\u540C\u4E00\u884C\uFF1Amachine gitee.com login xxxxx@qq.com password xxxyyyx=zzz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[d];function v(c,r){return n(),e("div",null,o)}var m=i(s,[["render",v],["__file","k8s\u90E8\u7F72golang\u9879\u76EE\u4E4B\u83B7\u53D6\u9879\u76EE\u4F9D\u8D56\u95EE\u9898.html.vue"]]);export{m as default};
