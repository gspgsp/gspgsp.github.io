import{_ as n,c as a,f as l,o as i}from"./app-BB_BIQV8.js";const e={};function t(d,s){return i(),a("div",null,s[0]||(s[0]=[l(`<h2 id="tailwindcss在普通html页面中的使用" tabindex="-1"><a class="header-anchor" href="#tailwindcss在普通html页面中的使用"><span>tailwindcss在普通html页面中的使用</span></a></h2><h3 id="完整代码如下" tabindex="-1"><a class="header-anchor" href="#完整代码如下"><span>完整代码如下</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;zh-CN&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">  &lt;meta charset=&quot;UTF-8&quot; /&gt;</span>
<span class="line">  &lt;title&gt;Dot Before Layout Demo&lt;/title&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- Tailwind CDN --&gt;</span>
<span class="line">  &lt;script src=&quot;https://cdn.tailwindcss.com&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 自定义样式 --&gt;</span>
<span class="line">  &lt;style type=&quot;text/tailwindcss&quot;&gt;</span>
<span class="line">    .dot-before {</span>
<span class="line">      @apply relative font-semibold pl-4;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .dot-before::before {</span>
<span class="line">      @apply absolute left-0 top-1/2 -mt-px size-1.5 -translate-y-1/2 rounded-full bg-black content-[&#39;&#39;];</span>
<span class="line">    }</span>
<span class="line">  &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line"></span>
<span class="line">&lt;body class=&quot;bg-gray-50 text-gray-800&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;mx-auto max-w-3xl px-6 py-16&quot;&gt;</span>
<span class="line">    &lt;!-- 页面标题 --&gt;</span>
<span class="line">    &lt;h1 class=&quot;mb-10 text-3xl font-bold tracking-tight&quot;&gt;</span>
<span class="line">      Dot Before 样式页面布局示例</span>
<span class="line">    &lt;/h1&gt;</span>
<span class="line"></span>
<span class="line">    &lt;!-- Section 1 --&gt;</span>
<span class="line">    &lt;section class=&quot;mb-10&quot;&gt;</span>
<span class="line">      &lt;h2 class=&quot;dot-before mb-4 text-xl&quot;&gt;</span>
<span class="line">        Conference Information</span>
<span class="line">      &lt;/h2&gt;</span>
<span class="line"></span>
<span class="line">      &lt;div class=&quot;space-y-3 pl-6&quot;&gt;</span>
<span class="line">        &lt;p class=&quot;dot-before font-normal&quot;&gt;</span>
<span class="line">          Call for Papers</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">        &lt;p class=&quot;dot-before font-normal&quot;&gt;</span>
<span class="line">          Important Dates</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">        &lt;p class=&quot;dot-before font-normal&quot;&gt;</span>
<span class="line">          Submission Guidelines</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/section&gt;</span>
<span class="line"></span>
<span class="line">    &lt;!-- Section 2 --&gt;</span>
<span class="line">    &lt;section class=&quot;mb-10&quot;&gt;</span>
<span class="line">      &lt;h2 class=&quot;dot-before mb-4 text-xl&quot;&gt;</span>
<span class="line">        Program Structure</span>
<span class="line">      &lt;/h2&gt;</span>
<span class="line"></span>
<span class="line">      &lt;div class=&quot;space-y-3 pl-6&quot;&gt;</span>
<span class="line">        &lt;p class=&quot;dot-before font-normal&quot;&gt;</span>
<span class="line">          Keynote Sessions</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">        &lt;p class=&quot;dot-before font-normal&quot;&gt;</span>
<span class="line">          Parallel Sections</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">        &lt;p class=&quot;dot-before font-normal&quot;&gt;</span>
<span class="line">          Panel Discussions</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/section&gt;</span>
<span class="line"></span>
<span class="line">    &lt;!-- Section 3 --&gt;</span>
<span class="line">    &lt;section&gt;</span>
<span class="line">      &lt;h2 class=&quot;dot-before mb-4 text-xl&quot;&gt;</span>
<span class="line">        Additional Information</span>
<span class="line">      &lt;/h2&gt;</span>
<span class="line"></span>
<span class="line">      &lt;div class=&quot;space-y-3 pl-6&quot;&gt;</span>
<span class="line">        &lt;p class=&quot;dot-before font-normal&quot;&gt;</span>
<span class="line">          Registration</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">        &lt;p class=&quot;dot-before font-normal&quot;&gt;</span>
<span class="line">          Venue &amp; Accommodation</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/section&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h3><ul><li><code>&lt;script src=&quot;https://cdn.tailwindcss.com&quot;&gt;&lt;/script&gt;</code>的作用<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">https://cdn.tailwindcss.com 并不是“预先写好的 Tailwind CSS 样式文件”，而是一个 在浏览器里动态生成 Tailwind CSS 的运行时工具</span>
<span class="line"></span>
<span class="line">并不是过去我们从bootstrap下引用的CDN样式，如：</span>
<span class="line">&lt;link rel=&quot;stylesheet&quot; href=&quot;tailwind.min.css&quot;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>cdn.tailwindcss.com</code> 到底是什么？<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">它是一个 JS 脚本，不是 CSS 文件</span>
<span class="line">1.扫描页面里的 HTML</span>
<span class="line">  找到所有 class，例如：</span>
<span class="line">  class=&quot;px-6 py-4 text-xl&quot;</span>
<span class="line">2.根据 Tailwind 的规则</span>
<span class="line">  动态生成对应的 CSS</span>
<span class="line">3.注入 &lt;style&gt; 标签</span>
<span class="line">  把生成的样式插入到页面里</span>
<span class="line"></span>
<span class="line">所以在 DevTools 里看到的 .px-6，不是 CDN 里写好的，而是运行时生成的</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>为什么 Tailwind 不提供一个「全量 CSS 文件」？<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">理论上可以，但实际不可行。</span>
<span class="line">Tailwind 的 class 数量有多夸张</span>
<span class="line"></span>
<span class="line">仅一个 padding:</span>
<span class="line">px-0 ... px-96</span>
<span class="line">py-0 ... py-96</span>
<span class="line"></span>
<span class="line">还有很多其它的属性，最终 CSS 体积会是几十 MB</span>
<span class="line"></span>
<span class="line">Tailwind 官方对 CDN 的定位是：仅用于：Demo 原型 本地快速验证样式 教学 / 文档示例</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>&lt;style type=&quot;text/tailwindcss&quot;&gt;</code>的作用<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这不是普通 CSS，而是交给 Tailwind runtime 编译的“类 Tailwind 语法”</span>
<span class="line"></span>
<span class="line">.dot-before {</span>
<span class="line"> @apply relative font-semibold pl-4;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">实际上会被转换成真正的 CSS 规则。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="tailwind-jit-just-in-time-编译原理" tabindex="-1"><a class="header-anchor" href="#tailwind-jit-just-in-time-编译原理"><span>Tailwind JIT（Just-In-Time）编译原理</span></a></h3><h4 id="_1️⃣-传统-css-早期-tailwind-的问题" tabindex="-1"><a class="header-anchor" href="#_1️⃣-传统-css-早期-tailwind-的问题"><span>1️⃣ 传统 CSS / 早期 Tailwind 的问题</span></a></h4><p>以前（Tailwind v1 / v2 早期）：</p><ul><li>预生成<strong>所有可能的 class</strong></li><li>再用 PurgeCSS 删除没用的</li></ul><p>问题是：</p><ul><li>构建慢</li><li>配置复杂</li><li>动态 class 容易被误删</li></ul><hr><h4 id="_2️⃣-jit-的核心思想-一句话" tabindex="-1"><a class="header-anchor" href="#_2️⃣-jit-的核心思想-一句话"><span>2️⃣ JIT 的核心思想（一句话）</span></a></h4><blockquote><p><strong>你写一个 class，我就只为这个 class 生成 CSS</strong></p></blockquote><p>不是提前生成，而是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">源码 → 扫描 class → 即时生成 CSS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h4 id="_3️⃣-jit-在不同环境的表现" tabindex="-1"><a class="header-anchor" href="#_3️⃣-jit-在不同环境的表现"><span>3️⃣ JIT 在不同环境的表现</span></a></h4><h4 id="cdn-模式" tabindex="-1"><a class="header-anchor" href="#cdn-模式"><span>CDN 模式</span></a></h4><ul><li>浏览器运行时扫描 DOM</li><li>动态注入 <code>&lt;style&gt;</code></li></ul><h4 id="vite-nuxt-cli" tabindex="-1"><a class="header-anchor" href="#vite-nuxt-cli"><span>Vite / Nuxt / CLI</span></a></h4><ul><li>构建期扫描源码（<code>.vue / .ts / .twig</code>）</li><li>生成最终 CSS 文件</li></ul><p><strong>原理一样，只是执行时机不同</strong></p><hr><h4 id="_4️⃣-为什么-jit-才让-tailwind-真正-封神" tabindex="-1"><a class="header-anchor" href="#_4️⃣-为什么-jit-才让-tailwind-真正-封神"><span>4️⃣ 为什么 JIT 才让 Tailwind 真正“封神”</span></a></h4><ul><li>✅ 任意值（arbitrary value）</li><li>✅ 几乎 0 冗余 CSS</li><li>✅ 极速热更新</li><li>✅ 不再需要 Purge 配置</li></ul><hr><h3 id="cdn-模式-vs-构建模式-非常重要" tabindex="-1"><a class="header-anchor" href="#cdn-模式-vs-构建模式-非常重要"><span>CDN 模式 vs 构建模式（非常重要）</span></a></h3><h4 id="_1️⃣-cdn-模式-你刚刚用的" tabindex="-1"><a class="header-anchor" href="#_1️⃣-cdn-模式-你刚刚用的"><span>1️⃣ CDN 模式（你刚刚用的）</span></a></h4><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.tailwindcss.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h4><ul><li>JS 运行时生成 CSS</li><li>扫描 DOM</li><li>动态注入 <code>&lt;style&gt;</code></li></ul><h4 id="适合" tabindex="-1"><a class="header-anchor" href="#适合"><span>适合</span></a></h4><ul><li>Demo</li><li>教学</li><li>你刚才那种「本地看看效果」</li></ul><h4 id="不适合" tabindex="-1"><a class="header-anchor" href="#不适合"><span>不适合</span></a></h4><ul><li>❌ 生产环境</li><li>❌ 大型页面</li><li>❌ 性能敏感场景</li></ul><hr><h4 id="_2️⃣-构建模式-vue-nuxt-symfony" tabindex="-1"><a class="header-anchor" href="#_2️⃣-构建模式-vue-nuxt-symfony"><span>2️⃣ 构建模式（Vue / Nuxt / Symfony）</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">npx tailwindcss <span class="token parameter variable">-i</span> input.css <span class="token parameter variable">-o</span> output.css</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或 Vite / Nuxt 集成。</p><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点</span></a></h4><ul><li>构建期生成 CSS</li><li>只有用到的 class</li><li>CSS 是<strong>静态文件</strong></li></ul><h4 id="适合-1" tabindex="-1"><a class="header-anchor" href="#适合-1"><span>适合</span></a></h4><ul><li>正式项目</li><li>SSR</li><li>SEO</li><li>大规模应用</li></ul><hr><h4 id="_3️⃣-一个直观对比" tabindex="-1"><a class="header-anchor" href="#_3️⃣-一个直观对比"><span>3️⃣ 一个直观对比</span></a></h4><table><thead><tr><th>项目</th><th>CDN</th><th>构建</th></tr></thead><tbody><tr><td>CSS 生成</td><td>浏览器</td><td>构建期</td></tr><tr><td>性能</td><td>❌</td><td>✅</td></tr><tr><td>可控性</td><td>❌</td><td>✅</td></tr><tr><td>生产可用</td><td>❌</td><td>✅</td></tr></tbody></table>`,48)]))}const p=n(e,[["render",t],["__file","tailwindcss在普通html页面中的使用.html.vue"]]),r=JSON.parse('{"path":"/content/front/html/tailwindcss%E5%9C%A8%E6%99%AE%E9%80%9Ahtml%E9%A1%B5%E9%9D%A2%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"tailwindcss在普通html页面中的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"tailwindcss在普通html页面中的使用","head":[["meta",{"name":"title","content":"tailwindcss在普通html页面中的使用"}],["meta",{"name":"description","content":"tailwindcss在普通html页面中的使用"}],["meta",{"name":"keywords","content":"tailwindcss"}],["meta",{"property":"og:title","content":"tailwindcss在普通html页面中的使用"}],["meta",{"property":"og:description","content":"tailwindcss在普通html页面中的使用"}]]},"headers":[{"level":2,"title":"tailwindcss在普通html页面中的使用","slug":"tailwindcss在普通html页面中的使用","link":"#tailwindcss在普通html页面中的使用","children":[{"level":3,"title":"完整代码如下","slug":"完整代码如下","link":"#完整代码如下","children":[]},{"level":3,"title":"分析","slug":"分析","link":"#分析","children":[]},{"level":3,"title":"Tailwind JIT（Just-In-Time）编译原理","slug":"tailwind-jit-just-in-time-编译原理","link":"#tailwind-jit-just-in-time-编译原理","children":[]},{"level":3,"title":"CDN 模式 vs 构建模式（非常重要）","slug":"cdn-模式-vs-构建模式-非常重要","link":"#cdn-模式-vs-构建模式-非常重要","children":[]}]}],"git":{},"filePathRelative":"content/front/html/tailwindcss在普通html页面中的使用.md"}');export{p as comp,r as data};
