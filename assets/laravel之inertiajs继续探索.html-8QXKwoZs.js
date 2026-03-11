import{_ as n,c as a,f as e,o as i}from"./app-WR18URC5.js";const l={};function t(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>我发现 安装了这个框架之后，在resources/js 下还有actions routes 以及wayfinder 目录， 不知道干嘛的<br> 同时在.gitignore 下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/resources/js/actions</span>
<span class="line">/resources/js/routes</span>
<span class="line">/resources/js/wayfinder</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略了这几个目录</p><p>Laravel 12 + Inertia 新脚手架里确实多了 <strong>actions / routes / wayfinder</strong> 这些目录，而且 <code>.gitignore</code> 里忽略它们，这其实是 Laravel 最近在推的一个 <strong>前后端类型安全路由方案</strong>。我给你拆开讲。</p><hr><h1 id="_1️⃣-这些目录是谁生成的" tabindex="-1"><a class="header-anchor" href="#_1️⃣-这些目录是谁生成的"><span>1️⃣ 这些目录是谁生成的</span></a></h1><p>关键在你 <code>vite.config.ts</code> 里的这个插件：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> wayfinder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@laravel/vite-plugin-wayfinder&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个插件来自 Laravel Wayfinder</p><p>它的作用是：</p><blockquote><p><strong>把 Laravel 的 PHP 路由自动生成 TypeScript 代码给前端使用</strong></p></blockquote><p>这样 Vue / React 里就可以 <strong>类型安全地调用 Laravel 路由</strong>。</p><hr><h1 id="_2️⃣-为什么-gitignore-忽略这些目录" tabindex="-1"><a class="header-anchor" href="#_2️⃣-为什么-gitignore-忽略这些目录"><span>2️⃣ 为什么 <code>.gitignore</code> 忽略这些目录</span></a></h1><p>因为这些目录 <strong>是自动生成的代码</strong>。</p><p>类似：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">node_modules</span>
<span class="line">vendor</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>都是 <strong>build / generate 的产物</strong>。</p><p>Laravel 会通过命令或 Vite 生成：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">resources/js/actions</span>
<span class="line">resources/js/routes</span>
<span class="line">resources/js/wayfinder</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以 <code>.gitignore</code> 默认忽略。</p><hr><h1 id="_3️⃣-每个目录是干嘛的" tabindex="-1"><a class="header-anchor" href="#_3️⃣-每个目录是干嘛的"><span>3️⃣ 每个目录是干嘛的</span></a></h1><h2 id="routes" tabindex="-1"><a class="header-anchor" href="#routes"><span>routes</span></a></h2><p>生成 <strong>Laravel 路由的 TypeScript 映射</strong></p><p>例如 Laravel：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users/{user}&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">UserController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>前端自动生成：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line">routes<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>而不是写字符串：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line">axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users/1&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>优点：</p><ul><li>避免写错 URL</li><li>自动补全</li><li>类型安全</li></ul><hr><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>actions</span></a></h2><p>生成 <strong>表单 / POST 请求的封装</strong></p><p>例如 Laravel：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">StoreUserController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>前端可以直接：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> storeUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/actions/users&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">storeUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    email<span class="token operator">:</span> <span class="token string">&#39;john@test.com&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好处：</p><ul><li>表单参数类型安全</li><li>不用手写 axios</li></ul><hr><h2 id="wayfinder" tabindex="-1"><a class="header-anchor" href="#wayfinder"><span>wayfinder</span></a></h2><p>这个目录是 <strong>Wayfinder 的内部映射数据</strong>。</p><p>里面一般是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">route definitions</span>
<span class="line">metadata</span>
<span class="line">type definitions</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>供 <code>routes</code> / <code>actions</code> 使用。</p><hr><h1 id="_4️⃣-运行时如何生成" tabindex="-1"><a class="header-anchor" href="#_4️⃣-运行时如何生成"><span>4️⃣ 运行时如何生成</span></a></h1><p>通常通过：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php artisan wayfinder:generate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者 Vite build 时自动生成。</p><hr><h1 id="_5️⃣-为什么-laravel-最近在推这个" tabindex="-1"><a class="header-anchor" href="#_5️⃣-为什么-laravel-最近在推这个"><span>5️⃣ 为什么 Laravel 最近在推这个</span></a></h1><p>因为以前 Laravel + Vue 有几个问题：</p><p>前端写：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/users/1</span>
<span class="line">/api/posts</span>
<span class="line">/admin/login</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字符串 URL 很容易写错</strong>。</p><p>现在的思路是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Laravel route -&gt; 自动生成 TS -&gt; 前端调用</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>类似：</p><ul><li>tRPC</li><li>Next.js server actions</li></ul><p>这种 <strong>类型安全 API</strong> 的趋势。</p><hr><h1 id="_6️⃣-实际使用流行程度" tabindex="-1"><a class="header-anchor" href="#_6️⃣-实际使用流行程度"><span>6️⃣ 实际使用流行程度</span></a></h1><p>目前 Laravel 前端生态大概是：</p><table><thead><tr><th>方案</th><th>使用情况</th></tr></thead><tbody><tr><td>Blade + Alpine</td><td>传统 Laravel</td></tr><tr><td>Livewire</td><td>Laravel 官方偏好</td></tr><tr><td>Inertia + Vue</td><td>很多团队</td></tr><tr><td>Inertia + React</td><td>现代 SPA</td></tr><tr><td>Wayfinder</td><td><strong>Laravel 12 新功能，刚开始推广</strong></td></tr></tbody></table><p>所以你看到这些目录是 <strong>新脚手架的设计</strong>。</p><hr><h1 id="_7️⃣-你可以不用它" tabindex="-1"><a class="header-anchor" href="#_7️⃣-你可以不用它"><span>7️⃣ 你可以不用它</span></a></h1><p>如果你觉得复杂：</p><p>可以直接删掉：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vite.config.ts 里的 wayfinder 插件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>前端照样写：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完全没问题。</p><hr><p>✅ <strong>一句话总结</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">actions / routes / wayfinder</span>
<span class="line">= Laravel 12 自动生成的前端 API / 路由类型安全工具</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>Laravel 12 + Inertia + Vue3 的完整前端渲染架构图</strong>。理解这个之后，你基本就完全搞清楚 Laravel 现在的前端体系了。</p><h1 id="🧭-laravel-12-inertia-vue-架构" tabindex="-1"><a class="header-anchor" href="#🧭-laravel-12-inertia-vue-架构"><span>🧭 Laravel 12 + Inertia + Vue 架构</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Browser</span>
<span class="line">   │</span>
<span class="line">   │ HTTP Request</span>
<span class="line">   ▼</span>
<span class="line">Laravel Route</span>
<span class="line">(routes/web.php)</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">Controller</span>
<span class="line">   │</span>
<span class="line">   │ Inertia::render(&#39;Users/Index&#39;, $data)</span>
<span class="line">   ▼</span>
<span class="line">Inertia Response (JSON)</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">resources/views/app.blade.php</span>
<span class="line">   │</span>
<span class="line">   │ 只有一个入口</span>
<span class="line">   ▼</span>
<span class="line">&lt;div id=&quot;app&quot; data-page=&quot;...&quot;&gt;&lt;/div&gt;</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">resources/js/app.ts</span>
<span class="line">   │</span>
<span class="line">   │ createInertiaApp()</span>
<span class="line">   ▼</span>
<span class="line">加载 Vue 页面组件</span>
<span class="line">resources/js/pages/*.vue</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">Vue 页面渲染</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="📦-前端目录结构作用" tabindex="-1"><a class="header-anchor" href="#📦-前端目录结构作用"><span>📦 前端目录结构作用</span></a></h1><p>典型 Laravel 12 项目：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">resources</span>
<span class="line"> ├─ js</span>
<span class="line"> │   ├─ app.ts</span>
<span class="line"> │   ├─ ssr.ts</span>
<span class="line"> │   ├─ pages</span>
<span class="line"> │   │   ├─ Dashboard.vue</span>
<span class="line"> │   │   └─ Users/Index.vue</span>
<span class="line"> │   │</span>
<span class="line"> │   ├─ components</span>
<span class="line"> │   │   └─ Button.vue</span>
<span class="line"> │   │</span>
<span class="line"> │   ├─ layouts</span>
<span class="line"> │   │   └─ AppLayout.vue</span>
<span class="line"> │   │</span>
<span class="line"> │   ├─ actions</span>
<span class="line"> │   ├─ routes</span>
<span class="line"> │   └─ wayfinder</span>
<span class="line"> │</span>
<span class="line"> └─ views</span>
<span class="line">     └─ app.blade.php</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="_1️⃣-app-blade-php-唯一-blade" tabindex="-1"><a class="header-anchor" href="#_1️⃣-app-blade-php-唯一-blade"><span>1️⃣ app.blade.php（唯一 Blade）</span></a></h1><p>作用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">HTML 模板</span>
<span class="line">+</span>
<span class="line">Vue 挂载点</span>
<span class="line">+</span>
<span class="line">SEO head</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心代码：</p><div class="language-blade line-numbers-mode" data-highlighter="prismjs" data-ext="blade" data-title="blade"><pre><code><span class="line">@vite([&#39;resources/js/app.ts&#39;])</span>
<span class="line">@inertiaHead</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">    @inertia</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@inertia</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>会生成：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;div id=&quot;app&quot; data-page=&quot;...&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Vue 会挂载到这里。</p><hr><h1 id="_2️⃣-app-ts-vue-启动器" tabindex="-1"><a class="header-anchor" href="#_2️⃣-app-ts-vue-启动器"><span>2️⃣ app.ts（Vue 启动器）</span></a></h1><p>你之前贴的代码：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token function">createInertiaApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">resolve</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span>
<span class="line">        <span class="token function">resolvePageComponent</span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./pages/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.vue</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./pages/**/*.vue&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Laravel 返回页面名</span>
<span class="line">        ↓</span>
<span class="line">Inertia</span>
<span class="line">        ↓</span>
<span class="line">app.ts</span>
<span class="line">        ↓</span>
<span class="line">加载 pages/*.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Inertia::render(&#39;Users/Index&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>会加载：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">resources/js/pages/Users/Index.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h1 id="_3️⃣-pages-目录" tabindex="-1"><a class="header-anchor" href="#_3️⃣-pages-目录"><span>3️⃣ pages 目录</span></a></h1><p>这里是 <strong>真正的页面组件</strong>。</p><p>例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pages/</span>
<span class="line">   Dashboard.vue</span>
<span class="line">   Users/</span>
<span class="line">      Index.vue</span>
<span class="line">      Show.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应 Laravel：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Inertia::render(&#39;Users/Show&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h1 id="_4️⃣-layouts" tabindex="-1"><a class="header-anchor" href="#_4️⃣-layouts"><span>4️⃣ layouts</span></a></h1><p>Vue 页面 layout：</p><p>类似 Blade layout</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">AppLayout.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>用法：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> AppLayout <span class="token keyword">from</span> <span class="token string">&#39;@/layouts/AppLayout.vue&#39;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppLayout</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">   page content</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppLayout</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="_5️⃣-components" tabindex="-1"><a class="header-anchor" href="#_5️⃣-components"><span>5️⃣ components</span></a></h1><p>普通 Vue 组件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Button.vue</span>
<span class="line">Modal.vue</span>
<span class="line">Table.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="_6️⃣-routes-actions-wayfinder" tabindex="-1"><a class="header-anchor" href="#_6️⃣-routes-actions-wayfinder"><span>6️⃣ routes / actions / wayfinder</span></a></h1><p>Laravel 12 新功能：</p><table><thead><tr><th>目录</th><th>作用</th></tr></thead><tbody><tr><td>routes</td><td>Laravel route → TS</td></tr><tr><td>actions</td><td>Laravel action → API</td></tr><tr><td>wayfinder</td><td>route metadata</td></tr></tbody></table><p>例子：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> users <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/routes&#39;</span></span>
<span class="line"></span>
<span class="line">users<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代替：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/users/1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>避免 URL 写错。</p><hr><h1 id="_7️⃣-ssr-ts-可选" tabindex="-1"><a class="header-anchor" href="#_7️⃣-ssr-ts-可选"><span>7️⃣ ssr.ts（可选）</span></a></h1><p>如果开启 SSR：</p><p>流程变成：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Request</span>
<span class="line">   ↓</span>
<span class="line">Laravel</span>
<span class="line">   ↓</span>
<span class="line">ssr.ts</span>
<span class="line">   ↓</span>
<span class="line">Vue 渲染 HTML</span>
<span class="line">   ↓</span>
<span class="line">Browser</span>
<span class="line">   ↓</span>
<span class="line">app.ts hydrate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="🔥-完整请求流程" tabindex="-1"><a class="header-anchor" href="#🔥-完整请求流程"><span>🔥 完整请求流程</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Browser</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">Laravel Route</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">Controller</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">Inertia::render()</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">app.blade.php</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">app.ts</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">pages/*.vue</span>
<span class="line">   │</span>
<span class="line">   ▼</span>
<span class="line">Vue 渲染 UI</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="🚀-blade-vs-inertia-最大区别" tabindex="-1"><a class="header-anchor" href="#🚀-blade-vs-inertia-最大区别"><span>🚀 Blade vs Inertia 最大区别</span></a></h1><h3 id="blade" tabindex="-1"><a class="header-anchor" href="#blade"><span>Blade</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Controller</span>
<span class="line">   ↓</span>
<span class="line">Blade</span>
<span class="line">   ↓</span>
<span class="line">HTML</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inertia" tabindex="-1"><a class="header-anchor" href="#inertia"><span>Inertia</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Controller</span>
<span class="line">   ↓</span>
<span class="line">JSON</span>
<span class="line">   ↓</span>
<span class="line">Vue</span>
<span class="line">   ↓</span>
<span class="line">HTML</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="⭐-laravel-官方推荐架构" tabindex="-1"><a class="header-anchor" href="#⭐-laravel-官方推荐架构"><span>⭐ Laravel 官方推荐架构</span></a></h1><p>现在官方其实主推 3 套：</p><table><thead><tr><th>架构</th><th>技术</th></tr></thead><tbody><tr><td>传统</td><td>Blade + Alpine</td></tr><tr><td>现代</td><td>Inertia + Vue</td></tr><tr><td>全 Laravel</td><td>Livewire</td></tr></tbody></table><hr><h1 id="💡-一个很多人不知道的事实" tabindex="-1"><a class="header-anchor" href="#💡-一个很多人不知道的事实"><span>💡 一个很多人不知道的事实</span></a></h1><p>现在 <strong>Laravel SaaS 项目最多的是：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Inertia + Vue + Tailwind</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>而不是 React。</p>`,159)]))}const d=n(l,[["render",t],["__file","laravel之inertiajs继续探索.html.vue"]]),c=JSON.parse('{"path":"/content/php/laravel/laravel%E4%B9%8Binertiajs%E7%BB%A7%E7%BB%AD%E6%8E%A2%E7%B4%A2.html","title":"laravel之inertiajs继续探索","lang":"en-US","frontmatter":{"sidebar":false,"title":"laravel之inertiajs继续探索","head":[["meta",{"name":"title","content":"laravel之inertiajs继续探索"}],["meta",{"name":"description","content":"laravel之inertiajs继续探索"}],["meta",{"name":"keywords","content":"laravel,inertiajs"}],["meta",{"property":"og:title","content":"laravel之inertiajs继续探索"}],["meta",{"property":"og:description","content":"laravel之inertiajs继续探索"}]]},"headers":[{"level":2,"title":"routes","slug":"routes","link":"#routes","children":[]},{"level":2,"title":"actions","slug":"actions","link":"#actions","children":[]},{"level":2,"title":"wayfinder","slug":"wayfinder","link":"#wayfinder","children":[{"level":3,"title":"Blade","slug":"blade","link":"#blade","children":[]},{"level":3,"title":"Inertia","slug":"inertia","link":"#inertia","children":[]}]}],"git":{},"filePathRelative":"content/php/laravel/laravel之inertiajs继续探索.md"}');export{d as comp,c as data};
