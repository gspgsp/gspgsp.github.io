import{_ as n,c as i,d as a,o as l}from"./app-C7j_h9cy.js";const e={};function p(t,s){return l(),i("div",null,s[0]||(s[0]=[a(`<p>typescript使用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 官网</span>
<span class="line">https://www.typescriptlang.org/</span>
<span class="line"></span>
<span class="line">2.在线运行环境</span>
<span class="line">https://www.typescriptlang.org/play</span>
<span class="line"></span>
<span class="line">3.官方文档</span>
<span class="line">https://gibbok.github.io/typescript-book/zh-cn/book/typescript-introduction/</span>
<span class="line"></span>
<span class="line">4.国产文档</span>
<span class="line">https://wangdoc.com/typescript/</span>
<span class="line"></span>
<span class="line">5.使用</span>
<span class="line">1&gt;安装</span>
<span class="line">tsc 是一个 npm 模块，使用下面的命令安装（必须先安装 npm）。</span>
<span class="line">$ sudo npm install -g typescript</span>
<span class="line"></span>
<span class="line">2&gt;查看版本</span>
<span class="line">$ tsc -v</span>
<span class="line">Version 5.3.2</span>
<span class="line"></span>
<span class="line">3&gt;使用</span>
<span class="line">TypeScript 允许将tsc的编译参数，写在配置文件tsconfig.json。只要当前目录有这个文件，tsc就会自动读取，所以运行时可以不写参数。</span>
<span class="line"></span>
<span class="line">$ tsc file1.ts file2.ts --outFile dist/app.js</span>
<span class="line"></span>
<span class="line">上面这个命令写成tsconfig.json，就是下面这样：</span>
<span class="line">{</span>
<span class="line">  &quot;files&quot;: [&quot;file1.ts&quot;, &quot;file2.ts&quot;],</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    &quot;outFile&quot;: &quot;dist/app.js&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">有了这个配置文件，编译时直接调用tsc命令就可以了：</span>
<span class="line">$ tsc</span>
<span class="line"></span>
<span class="line">4&gt;vue-tsc --noEmit的使用</span>
<span class="line">vue-tsc：Vue 官方提供的命令，用于执行 TS 的类型检查。它在执行时会根据项目中的 tsconfig.json 文件配置进行类型检查</span>
<span class="line">--noEmit：TS 编译器的选项，使用 --noEmit 选项后，编译器仅执行类型检查，而不会生成任何实际的编译输出</span>
<span class="line"></span>
<span class="line">一般配置在package.json的scripts下:</span>
<span class="line">&quot;build&quot;: &quot;vue-tsc --noEmit &amp;&amp; nuxt build&quot;,</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(e,[["render",p],["__file","typescript文档以及运行环境.html.vue"]]),v=JSON.parse('{"path":"/content/tool/front/typescript%E6%96%87%E6%A1%A3%E4%BB%A5%E5%8F%8A%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83.html","title":"typescript文档以及运行环境","lang":"en-US","frontmatter":{"sidebar":false,"title":"typescript文档以及运行环境","description":"typescript文档以及运行环境"},"headers":[],"git":{},"filePathRelative":"content/tool/front/typescript文档以及运行环境.md"}');export{d as comp,v as data};
