import{_ as s,c as l,f as a,o as e}from"./app-BB_BIQV8.js";const i={};function t(d,n){return e(),l("div",null,n[0]||(n[0]=[a(`<p>golang之go get和go install的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">go get 和 go install 是 Go 语言中的两个常用命令，它们用于获取和安装依赖包或将代码编译为可执行文件。它们的区别如下：</span>
<span class="line"></span>
<span class="line">1、go get：</span>
<span class="line"></span>
<span class="line">go get 用于获取、更新和安装远程依赖包。它会自动从远程代码库（如 GitHub、GitLab）下载依赖包，并将其安装到 GOPATH 的pkg目录中。</span>
<span class="line"></span>
<span class="line">当您执行 go get 命令时，它会下载指定的包及其依赖项，并将其放置在正确的目录结构中，以供项目引用。</span>
<span class="line"></span>
<span class="line">通常，go get 会自动安装依赖项，无需手动执行 go install。</span>
<span class="line"></span>
<span class="line">2、go install：</span>
<span class="line"></span>
<span class="line">go install 用于编译并安装 Go 语言的可执行程序。它将 Go 代码编译成二进制文件，并将其安装到 GOPATH 的bin目录中，以供后续执行。</span>
<span class="line"></span>
<span class="line">当您执行 go install 命令时，它会在当前包的目录中执行编译过程，并将生成的可执行文件放置在 bin 目录中。</span>
<span class="line"></span>
<span class="line">通过 go install 安装的可执行文件可以通过命令行直接运行，无需指定文件路径。</span>
<span class="line"></span>
<span class="line">总结：</span>
<span class="line"></span>
<span class="line">go get 主要用于获取和更新依赖包，将其下载并安装到正确的目录结构中。</span>
<span class="line"></span>
<span class="line">go install 主要用于将 Go 代码编译为可执行文件，并将其安装到 bin 目录中，以便执行。</span>
<span class="line"></span>
<span class="line">需要注意的是，在 Go 1.16 版本之后，模块模式（go mod）成为默认的包管理方式，取代了旧的 GOPATH 方式。因此，在使用 Go 1.16 及更高版本时，go get 和 go install 命令会根据项目的模块文件（go.mod）来确定包的下载和安装位置。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(i,[["render",t],["__file","golang之go-get和go-install的区别.html.vue"]]),g=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8Bgo-get%E5%92%8Cgo-install%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"golang之go-get和go-install的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之go-get和go-install的区别","description":"golang之go-get和go-install的区别"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之go-get和go-install的区别.md"}');export{c as comp,g as data};
