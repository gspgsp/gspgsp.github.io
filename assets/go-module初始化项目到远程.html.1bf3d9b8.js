import{_ as l,o as d,c as v,a as i,g as c,r as e}from"./app.d66d8774.js";const m={},a=c(`<p>\u5B9E\u73B0go module\u7684\u521D\u59CB\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u751F\u6210\u5305
\u5728\u6B63\u5F0F\u4E86\u89E3Golang Modules\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u901F\u89C8\u4E00\u4E0B\u5176\u4F7F\u7528\u65B9\u5F0F\u3002
\u5728$GOPATH\u4E4B\u5916\u7684\u4EFB\u610F\u5730\u65B9\uFF0C\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF1A
$ mkdir -p /tmp/hello
$ cd /tmp/hello

\u7136\u540E\u521D\u59CB\u5316\u4E00\u4E2A\u65B0\u7684Module\uFF1A
$ go mod init github.com/gspgsp/el-api

\u8F93\u51FA\uFF1A
go: creating new go.mod: module github.com/gspgsp/el-api

go.mod\u5185\u5BB9\u4E3A\uFF1A
module github.com/gspgsp/el-api //\u4EE3\u8868\u9879\u76EE\u7684\u6839\u76EE\u5F55\uFF0C\u8FD9\u91CC\u662F\u4E00\u4E2A\u8FDC\u7A0B\u5730\u5740\uFF0C\u800C\u4E0D\u662F\u4E4B\u524D\u7684\u672C\u5730\u5730\u5740\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8BA9\u522B\u7684\u9879\u76EE\u8C03\u7528\uFF0C\u5982\u679C\u662Fgitlab\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u79C1\u6709\u5316\u4E86

go 1.17

\u7136\u540Egit init \u751F\u6210git\u6587\u4EF6\uFF0C\u518D\u63D0\u4EA4\u5230\u8FDC\u7A0B\u5730\u5740\u5373\u53EF

2.\u8C03\u7528github.com/gspgsp/el-api
\u5728\u5176\u5B83\u9879\u76EE\u4E2D\u5148 import ,\u7136\u540E go mod tidy \u5373\u53EF

3.\u5982\u679C\u662F\u79C1\u6709\u4ED3\u5E93\u6216\u8005\u662F\u63D0\u4EA4\u4E86\u4F46\u662F\u56FD\u5185\u4ED3\u5E93\u4EE3\u7406\u6CA1\u6709\u53CA\u65F6\u62C9\u53D6\u4F60\u7684\u4ED3\u5E93\u5230\u955C\u50CF\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E\uFF1A
export GOPRIVATE=gitlab.com/xxx \u6216\u8005github.com/xxx\u5373\u53EF


4.\u7531\u4E8E\u914D\u7F6E\u4E86\u79C1\u6709\u4ED3\u5E93\uFF0C\u90A3\u4E48\u5728 go mod tidy \u6216\u8005 go get \u7684\u65F6\u5019 \u9700\u8981\u767B\u5F55 \u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u8FD9\u4E2A\u5728\u81EA\u52A8\u53D1\u5E03\u9879\u76EE\u5C31\u4F1A\u6709\u95EE\u9898\uFF0C\u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u5728 ~/.netrc \u6587\u4EF6\u91CC\u8BB0\u5F55\u79C1
\u6709\u4ED3\u5E93\u7684\u767B\u5F55\u4FE1\u606F\uFF0C\u5982\u4E0B\u5C31\u662F\u8BB0\u5F55\u4E86 gitee\u4E0B\u7684\u8D26\u53F7\u4FE1\u606F\uFF0C\u5982\u679C\u6267\u884C git pull \u5C31\u4E0D\u7528\u518D\u8F93\u5165\u8D26\u53F7\u5BC6\u7801\u4FE1\u606F\uFF1Bgo mod tidy \u6216\u8005 go get \u5B9E\u9645\u4E0A\u4E5F\u662F\u8C03\u7528 git \u547D\u4EE4\u62C9\u53D6\u76F8\u5173\u7684
\u4F9D\u8D56\uFF0C\u4E5F\u5C31\u4E0D\u7528\u518D\u8F93\u5165\u8D26\u53F7\u5BC6\u7801\u4FE1\u606F\u4E86\uFF0C\u8FD9\u4E2A\u5728\u505A k8s \u7684\u9879\u76EE\u81EA\u52A8\u53D1\u5E03\u7684\u65F6\u5019\u5F88\u6709\u7528\uFF0C\u540E\u9762\u5F97\u5206\u9879\u76EE\u6211\u4F1A\u7528\u5927
[root@k8smaster ~]# vim ~/.netrc
machine gitee.com
login xxxxx@qq.com
password xxxyyyx=zzz


\u5982\u679C\u6709\u591A\u4E2A server \u5C31\u91CD\u590D\u4E0A\u9762\u7684\u4E09\u884C\uFF0C \u5206\u522B\u8F93\u5165\u5BF9\u5E94\u7684\u670D\u52A1\u5668\u3001 \u7528\u6237\u540D\u548C\u5BC6\u7801\u5373\u53EF.

\u4E5F\u53EF\u4EE5\u628A\u8FD9\u4E09\u884C\u5199\u5728\u540C\u4E00\u884C\uFF1Amachine gitee.com login xxxxx@qq.com password xxxyyyx=zzz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function o(r,t){const n=e("BackBtn"),s=e("CommentService");return d(),v("div",null,[a,i(n),i(s)])}var b=l(m,[["render",o],["__file","go-module\u521D\u59CB\u5316\u9879\u76EE\u5230\u8FDC\u7A0B.html.vue"]]);export{b as default};
