import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>js的两种模块的写法区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ESM（ECMAScript 模块）和 CommonJS 是两种 JavaScript 模块系统的实现方式，它们有几个关键的区别：</span>
<span class="line">  </span>
<span class="line">语法差异：</span>
<span class="line"></span>
<span class="line">ESM 使用 import 和 export 关键字来导入和导出模块。</span>
<span class="line">CommonJS 使用 require() 函数来导入模块，并使用 module.exports 或 exports 对象来导出模块。</span>
<span class="line">  </span>
<span class="line">加载时机：</span>
<span class="line"></span>
<span class="line">ESM 是静态加载的，模块在代码解析阶段就会被加载。</span>
<span class="line">CommonJS 是动态加载的，模块在代码执行阶段才会被加载。</span>
<span class="line">  </span>
<span class="line">模块加载方式：</span>
<span class="line"></span>
<span class="line">ESM 是异步加载的，因此模块加载的顺序是不确定的，它们在需要时才会被加载。</span>
<span class="line">CommonJS 是同步加载的，模块加载的顺序是确定的，它们在代码执行时立即加载。</span>
<span class="line">  </span>
<span class="line">作用域：</span>
<span class="line"></span>
<span class="line">ESM 模块默认是严格模式的，且每个模块都有自己的作用域。</span>
<span class="line">CommonJS 模块默认不是严格模式的，且所有模块共享同一个顶级作用域。</span>
<span class="line">  </span>
<span class="line">浏览器兼容性：</span>
<span class="line"></span>
<span class="line">ESM 目前在现代浏览器中得到了广泛支持，但在旧版浏览器中可能需要使用工具进行转换。</span>
<span class="line">CommonJS 通常需要使用工具（如 Browserify、Webpack 等）将模块转换成浏览器可执行的代码。</span>
<span class="line">总的来说，ESM 更符合现代 JavaScript 语言的发展趋势，它的静态加载和模块作用域使得代码更加清晰和可靠。CommonJS 则是 Node.js 长期以来使用的模块系统，在服务器端开发中仍然具有重要的地位。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(l,[["render",c],["__file","js的两种模块的写法区别.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/js%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%A8%A1%E5%9D%97%E7%9A%84%E5%86%99%E6%B3%95%E5%8C%BA%E5%88%AB.html","title":"js的两种模块的写法区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"js的两种模块的写法区别","description":"js的两种模块的写法区别"},"headers":[],"git":{},"filePathRelative":"content/front/js/js的两种模块的写法区别.md"}');export{r as comp,v as data};
