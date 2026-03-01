import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h5 id="typescript下定义-export-enum-和-export-const-enum-哪个好" tabindex="-1"><a class="header-anchor" href="#typescript下定义-export-enum-和-export-const-enum-哪个好"><span>Typescript下定义 export enum 和 export const enum 哪个好</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export enum 和 export const enum 都用于定义枚举，但它们之间有几个关键区别:</span>
<span class="line"></span>
<span class="line">export const enum Status {</span>
<span class="line">  SUCCESS = &quot;success&quot;,</span>
<span class="line">  ERROR = &quot;error&quot;,</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 编译后，这行会直接变成：</span>
<span class="line">console.log(&quot;success&quot;); //实际上可以能到值</span>
<span class="line">console.log(Object.values(Status)); // ❌ Status is not defined， 实际上也可以拿到值</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">export enum Status {</span>
<span class="line">  SUCCESS = &quot;success&quot;,</span>
<span class="line">  ERROR = &quot;error&quot;,</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">console.log(Object.values(Status)); // ✅ [&quot;success&quot;, &quot;error&quot;]</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">但是实际上两种定义都可以获取到枚举值，没有报错，</span>
<span class="line"></span>
<span class="line">但是理论上:</span>
<span class="line">编译时：TypeScript → JavaScript，做类型检查、值替换等</span>
<span class="line">运行时：JS 代码开始执行的阶段，浏览器或 Node.js 运行</span>
<span class="line">const enum 的所有值在 编译时就被替换掉了，所以 运行时根本没有那个枚举对象</span>
<span class="line">只有普通的 enum 才能在运行时用 Object.values()、console.log(Status) 等方式访问</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">运行时 ≠ 编译过程</span>
<span class="line">阶段     描述                                          举例说明</span>
<span class="line">编译时   TypeScript 被转成 JavaScript 的阶段（ts → js）  Status.SUCCESS → &quot;success&quot;</span>
<span class="line">运行时   最终 JavaScript 被浏览器或 Node.js 执行的阶段    console.log(Status.SUCCESS) 会输出什么？</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",t],["__file","symfony7下关于关于DateTime使用clone.html.vue"]]),o=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B8%8B%E5%85%B3%E4%BA%8E%E5%85%B3%E4%BA%8EDateTime%E4%BD%BF%E7%94%A8clone.html","title":"Typescript下定义 export enum 和  export const enum 哪个好","lang":"en-US","frontmatter":{"sidebar":false,"title":"Typescript下定义 export enum 和  export const enum 哪个好","head":[["meta",{"name":"title","content":"Typescript下定义 export enum 和  export const enum 哪个好"}],["meta",{"name":"description","content":"Typescript下定义 export enum 和  export const enum 哪个好"}],["meta",{"name":"keywords","content":"Typescript"}],["meta",{"property":"og:title","content":"Typescript下定义 export enum 和  export const enum 哪个好"}],["meta",{"property":"og:description","content":"Typescript下定义 export enum 和  export const enum 哪个好"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7下关于关于DateTime使用clone.md"}');export{r as comp,o as data};
