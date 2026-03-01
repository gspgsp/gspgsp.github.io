import{_ as s,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function p(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="symfony-7-autowireiterator-特性总结" tabindex="-1"><a class="header-anchor" href="#symfony-7-autowireiterator-特性总结"><span>Symfony 7 AutowireIterator 特性总结</span></a></h1><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h2><p><code>#[AutowireIterator]</code> 是 Symfony 6.1+ 引入的依赖注入属性，它能够<strong>自动收集所有标记了特定标签的服务，并将其作为可迭代集合注入</strong>。</p><h2 id="三个关键要素" tabindex="-1"><a class="header-anchor" href="#三个关键要素"><span>三个关键要素</span></a></h2><table><thead><tr><th>要素</th><th>说明</th></tr></thead><tbody><tr><td><strong>服务自动扫描</strong></td><td>通过 <code>resource</code> 配置自动发现并注册服务</td></tr><tr><td><strong>服务标签化</strong></td><td>通过 <code>tags</code> 给服务分类标记</td></tr><tr><td><strong>自动注入集合</strong></td><td>通过 <code>#[AutowireIterator]</code> 注入所有同标签的服务</td></tr></tbody></table><h2 id="实现模式" tabindex="-1"><a class="header-anchor" href="#实现模式"><span>实现模式</span></a></h2><p>这是一个 <strong>策略模式 + 注册表模式</strong> 的完美实现：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># services.yaml - 服务自动扫描和标签化</span></span>
<span class="line"><span class="token key atrule">App\\Service\\UserBuilder\\PageSaver\\</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">resource</span><span class="token punctuation">:</span> <span class="token string">&#39;../src/Service/UserBuilder/PageSaver/*&#39;</span></span>
<span class="line">  <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;app.page_saver&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment">// PageSaveResolver.php - 自动注入所有标签服务</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">PageSaveResolver</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">AutowireIterator</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;app.page_saver&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span></span>
<span class="line">        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token keyword type-declaration">iterable</span> <span class="token variable">$handlers</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">resolve</span><span class="token punctuation">(</span><span class="token class-name type-declaration">UserBuilderPage</span> <span class="token variable">$page</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">UserSaveHandlerInterface</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">handlers</span> <span class="token keyword">as</span> <span class="token variable">$handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$handler</span><span class="token operator">-&gt;</span><span class="token function">supports</span><span class="token punctuation">(</span><span class="token variable">$page</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token variable">$handler</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>RuntimeException</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;No handler found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="核心优势" tabindex="-1"><a class="header-anchor" href="#核心优势"><span>核心优势</span></a></h2><ol><li><p><strong>开闭原则</strong>：对扩展开放，对修改关闭</p><ul><li>添加新的 handler 无需修改现有代码</li></ul></li><li><p><strong>自动发现</strong>：零配置扩展</p><ul><li>新 handler 只需实现接口，Symfony 自动发现</li></ul></li><li><p><strong>解耦合</strong>：依赖抽象而非具体</p><ul><li>Resolver 不关心有多少个具体实现</li></ul></li><li><p><strong>类型安全</strong>：编译时检查</p><ul><li>使用泛型 <code>iterable&lt;UserSaveHandlerInterface&gt;</code> 声明</li></ul></li></ol><h2 id="对比传统方式" tabindex="-1"><a class="header-anchor" href="#对比传统方式"><span>对比传统方式</span></a></h2><table><thead><tr><th>方式</th><th>手动注入</th><th>AutowireIterator</th></tr></thead><tbody><tr><td>新增 handler</td><td>需要修改类</td><td>自动发现</td></tr><tr><td>代码耦合度</td><td>高</td><td>低</td></tr><tr><td>可维护性</td><td>差</td><td>好</td></tr><tr><td>扩展性</td><td>需要改动现有代码</td><td>只需新增文件</td></tr></tbody></table><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><ul><li>✅ 事件处理器集合</li><li>✅ 验证器/格式化器集合</li><li>✅ 导出器/导入器工厂</li><li>✅ 支付网关集合</li><li>✅ 日志通道集合</li><li>✅ 任何需要多个实现的策略模式</li></ul><h2 id="关键特性说明" tabindex="-1"><a class="header-anchor" href="#关键特性说明"><span>关键特性说明</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">#<span class="token punctuation">[</span><span class="token function">AutowireIterator</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;app.page_saver&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">// 参数说明：</span></span>
<span class="line"><span class="token comment">// - 标签名称：&#39;app.page_saver&#39;（和 services.yaml 中的 tags 对应）</span></span>
<span class="line"><span class="token comment">// - 注入结果：所有标记该标签的服务的可迭代集合</span></span>
<span class="line"><span class="token comment">// - 类型保证：通过注释声明 iterable&lt;UserSaveHandlerInterface&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ol><li>需要 Symfony 6.1+</li><li>所有注入的服务必须实现相同接口或继承相同基类（虽然不强制，但推荐）</li><li>通过 <code>foreach</code> 迭代使用，每个 handler 负责通过 <code>supports()</code> 方法判断自己是否适用</li><li>注入的是 iterable，可以遍历但不能直接索引（如需索引，用数组或 ArrayCollection）</li></ol><h2 id="通过如下两种方式查看自动打标签的服务" tabindex="-1"><a class="header-anchor" href="#通过如下两种方式查看自动打标签的服务"><span>通过如下两种方式查看自动打标签的服务</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># php bin/console debug:container --tag=app.page_saver</span>
<span class="line"></span>
<span class="line">Symfony Container Services Tagged with &quot;app.page_saver&quot; Tag</span>
<span class="line">===========================================================</span>
<span class="line"></span>
<span class="line"> ---------------------------------------------------------------------------- ---------------------------------------------------------------------------- </span>
<span class="line">Service ID                                                                   Class name</span>
<span class="line"> ---------------------------------------------------------------------------- ---------------------------------------------------------------------------- </span>
<span class="line">App\\Service\\UserBuilder\\PageSaver\\ContactPageSaveHandler                  App\\Service\\UserBuilder\\PageSaver\\ContactPageSaveHandler                 </span>
<span class="line">App\\Service\\UserBuilder\\PageSaver\\EventAwardsPageSaveHandler              App\\Service\\UserBuilder\\PageSaver\\EventAwardsPageSaveHandler             </span>
<span class="line">App\\Service\\UserBuilder\\PageSaver\\EventSeriesPageSaveHandler              App\\Service\\UserBuilder\\PageSaver\\EventSeriesPageSaveHandler             </span>
<span class="line"> ---------------------------------------------------------------------------- ---------------------------------------------------------------------------- </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># grep -r &quot;app.page_saver&quot; var/cache/dev/</span>
<span class="line">var/cache/dev/App_KernelDevDebugContainer.xml:      &lt;argument type=&quot;tagged_iterator&quot; tag=&quot;app.page_saver&quot;/&gt;</span>
<span class="line">var/cache/dev/App_KernelDevDebugContainer.xml:      &lt;tag name=&quot;app.page_saver&quot;/&gt;</span>
<span class="line">var/cache/dev/App_KernelDevDebugContainer.xml:      &lt;tag name=&quot;app.page_saver&quot;/&gt;</span>
<span class="line">var/cache/dev/App_KernelDevDebugContainer.xml:      &lt;tag name=&quot;app.page_saver&quot;/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="symfony-缓存检查时机-深度解析" tabindex="-1"><a class="header-anchor" href="#symfony-缓存检查时机-深度解析"><span>Symfony 缓存检查时机 - 深度解析</span></a></h1><h2 id="核心问题" tabindex="-1"><a class="header-anchor" href="#核心问题"><span>核心问题</span></a></h2><p><strong>Q: 开发环境，只要创建文件，Symfony 就会启动 - 检查缓存容器吗？</strong></p><p><strong>A: 不是 &quot;创建文件就检查&quot;，而是 &quot;有请求时检查&quot;</strong></p><hr><h2 id="时间线澄清" tabindex="-1"><a class="header-anchor" href="#时间线澄清"><span>时间线澄清</span></a></h2><h3 id="❌-误解" tabindex="-1"><a class="header-anchor" href="#❌-误解"><span>❌ 误解</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">创建文件 → Symfony 立即启动 → 检查缓存 → 重新编译</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="✓-正确" tabindex="-1"><a class="header-anchor" href="#✓-正确"><span>✓ 正确</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">创建文件</span>
<span class="line">    ↓</span>
<span class="line">你访问应用（发送 HTTP 请求）</span>
<span class="line">    ↓</span>
<span class="line">Symfony 启动</span>
<span class="line">    ↓</span>
<span class="line">检查缓存容器</span>
<span class="line">    ↓</span>
<span class="line">发现文件变化</span>
<span class="line">    ↓</span>
<span class="line">重新编译</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="详细工作流" tabindex="-1"><a class="header-anchor" href="#详细工作流"><span>详细工作流</span></a></h2><h3 id="第-1-步-创建文件" tabindex="-1"><a class="header-anchor" href="#第-1-步-创建文件"><span>第 1 步：创建文件</span></a></h3><p>你在本地创建了 <code>VideoPageSaver.php</code>：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">touch</span> src/Service/UserBuilder/PageSaver/VideoPageSaver.php</span>
<span class="line"><span class="token comment"># 或者在编辑器中创建</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时：</strong> Symfony 还没有启动，什么都没发生！</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">创建后的状态：</span>
<span class="line">- 磁盘上有新文件 ✓</span>
<span class="line">- Symfony 缓存容器 (var/cache/dev/) 仍然是旧的 ← 不知道新文件</span>
<span class="line">- 应用仍在运行旧容器</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第-2-步-触发请求" tabindex="-1"><a class="header-anchor" href="#第-2-步-触发请求"><span>第 2 步：触发请求</span></a></h3><p>你在浏览器访问应用，或者运行 CLI 命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 访问应用</span></span>
<span class="line"><span class="token function">curl</span> http://localhost:8000/api/pages</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或运行命令</span></span>
<span class="line">php bin/console cache:clear</span>
<span class="line">php bin/console debug:container</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或运行测试</span></span>
<span class="line">php bin/phpunit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这一刻，Symfony 才会启动！</strong></p><h3 id="第-3-步-symfony-启动-执行缓存检查" tabindex="-1"><a class="header-anchor" href="#第-3-步-symfony-启动-执行缓存检查"><span>第 3 步：Symfony 启动 - 执行缓存检查</span></a></h3><p>当 Symfony 应用被激活时（HTTP 请求、CLI 命令等），它会：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment">// 伪代码：symfony/http-kernel/Kernel.php 的启动过程</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Kernel</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">booted</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span>  <span class="token comment">// 已经启动过，跳过</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 第一次启动时的检查：</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 1. 检查缓存容器是否存在</span></span>
<span class="line">        <span class="token variable">$containerCachePath</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;var/cache/dev/App_KernelDevDebugContainer.php&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$containerCachePath</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 缓存不存在，编译</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">compileContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">booted</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 2. 缓存存在，检查是否有效</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">isCacheValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 缓存无效，重新编译</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">compileContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 3. 加载缓存容器</span></span>
<span class="line">        <span class="token keyword">require</span> <span class="token variable">$containerCachePath</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">booted</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">isCacheValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 这是关键部分！</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 读取上次编译时的依赖文件列表和哈希值</span></span>
<span class="line">        <span class="token variable">$dependencies</span> <span class="token operator">=</span> <span class="token keyword">require</span> <span class="token string single-quoted-string">&#39;var/cache/dev/App_KernelDevDebugContainer.dependencies.php&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// dependencies.php 内容示例：</span></span>
<span class="line">        <span class="token comment">// [</span></span>
<span class="line">        <span class="token comment">//     &#39;config/services.yaml&#39; =&gt; &#39;hash1&#39;,</span></span>
<span class="line">        <span class="token comment">//     &#39;src/Service/UserBuilder/PageSaver/BlogPageSaver.php&#39; =&gt; &#39;hash2&#39;,</span></span>
<span class="line">        <span class="token comment">//     &#39;src/Service/UserBuilder/PageSaver/ProductPageSaver.php&#39; =&gt; &#39;hash3&#39;,</span></span>
<span class="line">        <span class="token comment">//     &#39;src/Service/UserBuilder/PageSaver/ContactPageSaver.php&#39; =&gt; &#39;hash4&#39;,</span></span>
<span class="line">        <span class="token comment">//     // 注意：VideoPageSaver.php 还不在这里！</span></span>
<span class="line">        <span class="token comment">// ]</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$dependencies</span> <span class="token keyword">as</span> <span class="token variable">$file</span> <span class="token operator">=&gt;</span> <span class="token variable">$expectedHash</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 检查文件是否存在</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>  <span class="token comment">// ← 文件被删除</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 检查文件内容是否改变</span></span>
<span class="line">            <span class="token variable">$actualHash</span> <span class="token operator">=</span> <span class="token function">md5_file</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$actualHash</span> <span class="token operator">!==</span> <span class="token variable">$expectedHash</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>  <span class="token comment">// ← 文件被修改</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 检查是否有新增文件（这是关键！）</span></span>
<span class="line">        <span class="token variable">$actualFiles</span> <span class="token operator">=</span> <span class="token function">glob</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;src/Service/UserBuilder/PageSaver/*.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$cachedFiles</span> <span class="token operator">=</span> <span class="token function">array_filter</span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token function">array_keys</span><span class="token punctuation">(</span><span class="token variable">$dependencies</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">strpos</span><span class="token punctuation">(</span><span class="token variable">$f</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;PageSaver/&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token constant boolean">false</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$actualFiles</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$cachedFiles</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>  <span class="token comment">// ← 文件数量不同，说明有新增或删除</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// 缓存有效</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第-4-步-缓存无效-→-重新编译" tabindex="-1"><a class="header-anchor" href="#第-4-步-缓存无效-→-重新编译"><span>第 4 步：缓存无效 → 重新编译</span></a></h3><p>如果检查发现缓存无效（比如发现了新的 <code>VideoPageSaver.php</code>）：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">private function compileContainer() {</span>
<span class="line">    // 1. 读取 services.yaml</span>
<span class="line">    $config = $this-&gt;loadConfig();</span>
<span class="line"></span>
<span class="line">    // 2. 实例化 ContainerBuilder</span>
<span class="line">    $container = new ContainerBuilder();</span>
<span class="line"></span>
<span class="line">    // 3. 处理 resource 配置</span>
<span class="line">    $resourcePattern = &#39;src/Service/UserBuilder/PageSaver/*&#39;;</span>
<span class="line">    $files = glob($resourcePattern);  // ← 现在会找到 VideoPageSaver.php！</span>
<span class="line"></span>
<span class="line">    // 4. 为每个文件创建服务定义</span>
<span class="line">    foreach ($files as $file) {</span>
<span class="line">        $class = $this-&gt;parseClass($file);</span>
<span class="line">        $definition = new Definition($class);</span>
<span class="line">        $definition-&gt;addTag(&#39;app.page_saver&#39;);</span>
<span class="line">        $container-&gt;setDefinition($class, $definition);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 5. 编译生成 PHP 代码</span>
<span class="line">    $containerCode = $this-&gt;generateCode($container);</span>
<span class="line"></span>
<span class="line">    // 6. 保存编译结果</span>
<span class="line">    file_put_contents(&#39;var/cache/dev/App_KernelDevDebugContainer.php&#39;, $containerCode);</span>
<span class="line"></span>
<span class="line">    // 7. 记录此次编译的依赖文件</span>
<span class="line">    $newDependencies = [];</span>
<span class="line">    foreach ($files as $file) {</span>
<span class="line">        $newDependencies[$file] = md5_file($file);</span>
<span class="line">    }</span>
<span class="line">    file_put_contents(</span>
<span class="line">        &#39;var/cache/dev/App_KernelDevDebugContainer.dependencies.php&#39;,</span>
<span class="line">        &#39;&lt;?php return &#39; . var_export($newDependencies, true) . &#39;;&#39;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="时间点总结" tabindex="-1"><a class="header-anchor" href="#时间点总结"><span>时间点总结</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">13:00:00 - 你创建文件</span>
<span class="line">          (Symfony 不知道，继续使用旧缓存)</span>
<span class="line"></span>
<span class="line">13:00:05 - 你访问 http://localhost:8000/api/pages</span>
<span class="line">          ↓</span>
<span class="line">          HTTP 请求到达服务器</span>
<span class="line">          ↓</span>
<span class="line">          public/index.php 被执行</span>
<span class="line">          ↓</span>
<span class="line">          Kernel::boot() 被调用</span>
<span class="line">          ↓</span>
<span class="line">          检查缓存有效性</span>
<span class="line">          ↓</span>
<span class="line">          发现 VideoPageSaver.php 是新文件</span>
<span class="line">          ↓</span>
<span class="line">          缓存标记为无效</span>
<span class="line">          ↓</span>
<span class="line">          重新编译容器（耗时几百毫秒）</span>
<span class="line">          ↓</span>
<span class="line">          加载编译后的容器</span>
<span class="line">          ↓</span>
<span class="line">          应用继续执行，响应请求</span>
<span class="line"></span>
<span class="line">13:00:05.500ms - 用户看到响应（可能有点慢）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="关键细节-缓存检查的触发条件" tabindex="-1"><a class="header-anchor" href="#关键细节-缓存检查的触发条件"><span>关键细节：缓存检查的触发条件</span></a></h2><h3 id="_1-缓存检查发生在哪里" tabindex="-1"><a class="header-anchor" href="#_1-缓存检查发生在哪里"><span>1. 缓存检查发生在哪里？</span></a></h3><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment">// public/index.php 或其他入口点</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">require_once</span> <span class="token function">dirname</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/vendor/autoload_runtime.php&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 这个函数执行时，Kernel 会启动</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Kernel</span><span class="token punctuation">(</span><span class="token variable">$context</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;APP_ENV&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword type-casting">bool</span><span class="token punctuation">)</span> <span class="token variable">$context</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;APP_DEBUG&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// ↑ Kernel 构造函数会触发 boot() 调用</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment">// symfony/http-kernel/HttpKernel.php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">HttpKernel</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 在处理请求之前，会检查容器</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">kernel</span><span class="token operator">-&gt;</span><span class="token function">isBooted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">kernel</span><span class="token operator">-&gt;</span><span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// ← 缓存检查发生在这里！</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 继续处理请求...</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-什么时候触发缓存检查" tabindex="-1"><a class="header-anchor" href="#_2-什么时候触发缓存检查"><span>2. 什么时候触发缓存检查？</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">✓ 触发检查：</span>
<span class="line">  - HTTP 请求到达</span>
<span class="line">  - 运行 CLI 命令（php bin/console ...）</span>
<span class="line">  - 运行测试（phpunit）</span>
<span class="line">  - 访问应用的任何页面</span>
<span class="line"></span>
<span class="line">✗ 不触发检查：</span>
<span class="line">  - 仅仅创建文件</span>
<span class="line">  - 仅仅修改配置</span>
<span class="line">  - 仅仅编辑代码</span>
<span class="line">  - 应用没有被调用</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-多个请求的情况" tabindex="-1"><a class="header-anchor" href="#_3-多个请求的情况"><span>3. 多个请求的情况</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">第一个请求 (13:00:05.1):</span>
<span class="line">  ├─ Kernel 启动 (boot)</span>
<span class="line">  ├─ 检查缓存有效性</span>
<span class="line">  ├─ 发现新文件 → 缓存无效</span>
<span class="line">  ├─ 重新编译容器（耗时）</span>
<span class="line">  └─ 处理请求</span>
<span class="line"></span>
<span class="line">第二个请求 (13:00:05.6):</span>
<span class="line">  ├─ Kernel 启动 (boot)</span>
<span class="line">  ├─ 检查缓存有效性 ← 现在缓存有效！</span>
<span class="line">  ├─ 跳过重新编译（快！）</span>
<span class="line">  └─ 处理请求</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="为什么会这样设计" tabindex="-1"><a class="header-anchor" href="#为什么会这样设计"><span>为什么会这样设计？</span></a></h2><h3 id="开发环境的权衡" tabindex="-1"><a class="header-anchor" href="#开发环境的权衡"><span>开发环境的权衡</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">设计选择：</span>
<span class="line">- ✓ 自动发现新文件</span>
<span class="line">- ✓ 不需要手动 cache:clear</span>
<span class="line">- ✗ 第一个请求可能慢（编译需要时间）</span>
<span class="line">- ✗ 每次启动都需要检查依赖文件</span>
<span class="line"></span>
<span class="line">优点：</span>
<span class="line">- 开发体验好，改代码后立即生效</span>
<span class="line">- 不容易忘记清除缓存</span>
<span class="line"></span>
<span class="line">缺点：</span>
<span class="line">- 启动时检查所有依赖文件（有性能开销）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替代方案-为什么不选" tabindex="-1"><a class="header-anchor" href="#替代方案-为什么不选"><span>替代方案（为什么不选？）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">选项 1：文件系统 Watch 自动编译</span>
<span class="line">- 优点：立即编译，体验最好</span>
<span class="line">- 缺点：需要额外的后台进程，复杂度高</span>
<span class="line"></span>
<span class="line">选项 2：禁用缓存检查（生产环境模式）</span>
<span class="line">- 优点：性能最好</span>
<span class="line">- 缺点：新文件不会自动发现，需要手动 cache:clear</span>
<span class="line"></span>
<span class="line">选项 3：当前方案（启动时检查）✓</span>
<span class="line">- 优点：简单可靠，开发体验还不错</span>
<span class="line">- 缺点：启动稍慢，但可以接受</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="实际验证" tabindex="-1"><a class="header-anchor" href="#实际验证"><span>实际验证</span></a></h2><h3 id="方式-1-添加调试日志" tabindex="-1"><a class="header-anchor" href="#方式-1-添加调试日志"><span>方式 1：添加调试日志</span></a></h3><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment">// src/Kernel.php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpKernel<span class="token punctuation">\\</span>Kernel</span> <span class="token keyword">as</span> BaseKernel<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Kernel</span> <span class="token keyword">extends</span> <span class="token class-name">BaseKernel</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">booted</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;[DEBUG] Kernel boot started at &quot;</span> <span class="token operator">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;H:i:s.u&#39;</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ... 原始代码 ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;[DEBUG] Kernel boot finished at &quot;</span> <span class="token operator">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;H:i:s.u&#39;</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;[DEBUG] Container cache: var/cache/&quot;</span> <span class="token operator">.</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">environment</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;/\\n&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在浏览器访问，你会看到时间戳和调试信息。</p><h3 id="方式-2-检查时间戳" tabindex="-1"><a class="header-anchor" href="#方式-2-检查时间戳"><span>方式 2：检查时间戳</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建文件前</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-l</span> var/cache/dev/App_KernelDevDebugContainer.php</span>
<span class="line"><span class="token comment"># -rw-r--r--  1 user  staff  12345 11:00:00</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建文件（但不请求）</span></span>
<span class="line"><span class="token function">touch</span> src/Service/UserBuilder/PageSaver/VideoPageSaver.php</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再查看，时间戳没变！</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-l</span> var/cache/dev/App_KernelDevDebugContainer.php</span>
<span class="line"><span class="token comment"># -rw-r--r--  1 user  staff  12345 11:00:00  ← 仍然是旧的</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 现在访问应用</span></span>
<span class="line"><span class="token function">curl</span> http://localhost:8000/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再查看，时间戳更新了！</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-l</span> var/cache/dev/App_KernelDevDebugContainer.php</span>
<span class="line"><span class="token comment"># -rw-r--r--  1 user  staff  12800 11:00:05  ← 新的！</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="特殊情况" tabindex="-1"><a class="header-anchor" href="#特殊情况"><span>特殊情况</span></a></h2><h3 id="情况-1-使用-symfony-web-server-php-s" tabindex="-1"><a class="header-anchor" href="#情况-1-使用-symfony-web-server-php-s"><span>情况 1：使用 Symfony Web Server（php -S）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 启动内置服务器</span></span>
<span class="line">php <span class="token parameter variable">-S</span> localhost:8000 <span class="token parameter variable">-t</span> public</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 此时服务器在后台运行，监听请求</span></span>
<span class="line"><span class="token comment"># 创建新文件不会触发检查</span></span>
<span class="line"><span class="token comment"># 直到有请求到达才会检查</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="情况-2-使用-php-fpm-nginx" tabindex="-1"><a class="header-anchor" href="#情况-2-使用-php-fpm-nginx"><span>情况 2：使用 PHP-FPM + Nginx</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">配置：</span>
<span class="line">- Nginx 监听 80 端口</span>
<span class="line">- PHP-FPM 处理 PHP 请求</span>
<span class="line">- 每个请求都会启动一个新的 PHP 进程</span>
<span class="line"></span>
<span class="line">流程：</span>
<span class="line">1. 创建文件</span>
<span class="line">2. 用户访问网站</span>
<span class="line">3. Nginx 将请求转发给 PHP-FPM</span>
<span class="line">4. PHP-FPM 启动新进程</span>
<span class="line">5. 进程启动时检查缓存</span>
<span class="line">6. 编译容器</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="情况-3-使用-php-bin-console-命令" tabindex="-1"><a class="header-anchor" href="#情况-3-使用-php-bin-console-命令"><span>情况 3：使用 php bin/console 命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建文件</span></span>
<span class="line"><span class="token function">touch</span> src/Service/UserBuilder/PageSaver/VideoPageSaver.php</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 立即运行命令</span></span>
<span class="line">php bin/console debug:container <span class="token parameter variable">--tag</span><span class="token operator">=</span>app.page_saver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Symfony 会在命令启动时检查缓存</span></span>
<span class="line"><span class="token comment"># 发现新文件，重新编译</span></span>
<span class="line"><span class="token comment"># 然后显示包含新 Provider 的列表</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="开发流程实例" tabindex="-1"><a class="header-anchor" href="#开发流程实例"><span>开发流程实例</span></a></h2><h3 id="场景-你正在开发" tabindex="-1"><a class="header-anchor" href="#场景-你正在开发"><span>场景：你正在开发</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">11:00 开始工作</span>
<span class="line">├─ 启动内置服务器</span>
<span class="line">│  └─ php -S localhost:8000</span>
<span class="line">│</span>
<span class="line">11:05 修改 services.yaml</span>
<span class="line">├─ 保存文件</span>
<span class="line">└─ 应用不知道（还没有请求）</span>
<span class="line"></span>
<span class="line">11:06 在浏览器刷新页面 ← 第一个请求</span>
<span class="line">├─ HTTP 请求到达</span>
<span class="line">├─ Kernel::boot() 检查缓存</span>
<span class="line">├─ 发现 services.yaml 被修改</span>
<span class="line">├─ 缓存无效，重新编译</span>
<span class="line">├─ 页面加载（可能稍慢）</span>
<span class="line">└─ 修改已生效</span>
<span class="line"></span>
<span class="line">11:10 再次刷新页面 ← 第二个请求</span>
<span class="line">├─ HTTP 请求到达</span>
<span class="line">├─ Kernel::boot() 检查缓存</span>
<span class="line">├─ 缓存有效（自上次编译以来没有变化）</span>
<span class="line">├─ 直接加载缓存</span>
<span class="line">└─ 页面加载（快速）</span>
<span class="line"></span>
<span class="line">11:15 创建新的 Provider</span>
<span class="line">├─ 创建 VideoPageSaver.php</span>
<span class="line">└─ 应用不知道（还没有请求）</span>
<span class="line"></span>
<span class="line">11:16 在浏览器刷新页面 ← 第三个请求</span>
<span class="line">├─ HTTP 请求到达</span>
<span class="line">├─ Kernel::boot() 检查缓存</span>
<span class="line">├─ 发现新文件 VideoPageSaver.php</span>
<span class="line">├─ 缓存无效，重新编译</span>
<span class="line">├─ 新 Provider 被注册</span>
<span class="line">├─ 页面加载（可能稍慢）</span>
<span class="line">└─ 新 Provider 立即可用！</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="性能影响" tabindex="-1"><a class="header-anchor" href="#性能影响"><span>性能影响</span></a></h2><h3 id="缓存检查的开销" tabindex="-1"><a class="header-anchor" href="#缓存检查的开销"><span>缓存检查的开销</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">检查缓存有效性：1-5ms</span>
<span class="line">├─ 读取 dependencies.php 文件</span>
<span class="line">├─ 遍历依赖文件列表</span>
<span class="line">├─ 检查每个文件的哈希值或修改时间</span>
<span class="line">└─ 比较结果</span>
<span class="line"></span>
<span class="line">如果缓存有效：快速（直接加载编译的 PHP 代码）</span>
<span class="line">如果缓存无效：慢速（需要重新编译）</span>
<span class="line"></span>
<span class="line">编译容器：200-500ms（取决于项目大小）</span>
<span class="line">├─ 扫描目录</span>
<span class="line">├─ 解析 PHP 文件</span>
<span class="line">├─ 生成代码</span>
<span class="line">└─ 保存到磁盘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么生产环境需要手动-cache-clear" tabindex="-1"><a class="header-anchor" href="#为什么生产环境需要手动-cache-clear"><span>为什么生产环境需要手动 cache:clear？</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">生产环境的做法：</span>
<span class="line">1. 部署代码</span>
<span class="line">2. 运行：php bin/console cache:clear --env=prod</span>
<span class="line">3. 原因：</span>
<span class="line">   - 生产环境通常有多个 PHP 进程或服务器</span>
<span class="line">   - 不能依赖单个进程的缓存检查机制</span>
<span class="line">   - 确保所有进程都使用最新的编译容器</span>
<span class="line">   - 避免缓存一致性问题</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><table><thead><tr><th>问题</th><th>答案</th></tr></thead><tbody><tr><td>创建文件后立即检查？</td><td>❌ 不会，需要请求</td></tr><tr><td>什么时候检查？</td><td>HTTP 请求或 CLI 命令执行时</td></tr><tr><td>检查什么？</td><td>依赖文件列表和哈希值</td></tr><tr><td>如果有变化？</td><td>重新编译容器</td></tr><tr><td>下个请求会怎样？</td><td>使用新编译的容器</td></tr><tr><td>有什么办法加速？</td><td>没有，这是设计权衡</td></tr><tr><td>生产环境呢？</td><td>需要手动 cache:clear</td></tr></tbody></table><hr><h2 id="关键认知" tabindex="-1"><a class="header-anchor" href="#关键认知"><span>关键认知</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">创建文件</span>
<span class="line">    ↓</span>
<span class="line">（等待请求...）</span>
<span class="line">    ↓</span>
<span class="line">有人访问应用</span>
<span class="line">    ↓</span>
<span class="line">Symfony 启动</span>
<span class="line">    ↓</span>
<span class="line">检查缓存</span>
<span class="line">    ↓</span>
<span class="line">发现变化 → 编译</span>
<span class="line">    ↓</span>
<span class="line">使用新容器</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不是 &quot;创建文件就检查&quot;，而是 &quot;请求时检查&quot;！</strong></p>`,99)]))}const d=s(i,[["render",p],["__file","Symfony7自动发现机制.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/Symfony7%E8%87%AA%E5%8A%A8%E5%8F%91%E7%8E%B0%E6%9C%BA%E5%88%B6.html","title":"Symfony7自动发现机制","lang":"en-US","frontmatter":{"sidebar":false,"title":"Symfony7自动发现机制","head":[["meta",{"name":"title","content":"Symfony7自动发现机制"}],["meta",{"name":"description","content":"Symfony7自动发现机制"}],["meta",{"name":"keywords","content":"Symfony7自动发现机制"}],["meta",{"property":"og:title","content":"Symfony7自动发现机制"}],["meta",{"property":"og:description","content":"Symfony7自动发现机制"}]]},"headers":[{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":2,"title":"三个关键要素","slug":"三个关键要素","link":"#三个关键要素","children":[]},{"level":2,"title":"实现模式","slug":"实现模式","link":"#实现模式","children":[]},{"level":2,"title":"核心优势","slug":"核心优势","link":"#核心优势","children":[]},{"level":2,"title":"对比传统方式","slug":"对比传统方式","link":"#对比传统方式","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":2,"title":"关键特性说明","slug":"关键特性说明","link":"#关键特性说明","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"通过如下两种方式查看自动打标签的服务","slug":"通过如下两种方式查看自动打标签的服务","link":"#通过如下两种方式查看自动打标签的服务","children":[]},{"level":2,"title":"核心问题","slug":"核心问题","link":"#核心问题","children":[]},{"level":2,"title":"时间线澄清","slug":"时间线澄清","link":"#时间线澄清","children":[{"level":3,"title":"❌ 误解","slug":"❌-误解","link":"#❌-误解","children":[]},{"level":3,"title":"✓ 正确","slug":"✓-正确","link":"#✓-正确","children":[]}]},{"level":2,"title":"详细工作流","slug":"详细工作流","link":"#详细工作流","children":[{"level":3,"title":"第 1 步：创建文件","slug":"第-1-步-创建文件","link":"#第-1-步-创建文件","children":[]},{"level":3,"title":"第 2 步：触发请求","slug":"第-2-步-触发请求","link":"#第-2-步-触发请求","children":[]},{"level":3,"title":"第 3 步：Symfony 启动 - 执行缓存检查","slug":"第-3-步-symfony-启动-执行缓存检查","link":"#第-3-步-symfony-启动-执行缓存检查","children":[]},{"level":3,"title":"第 4 步：缓存无效 → 重新编译","slug":"第-4-步-缓存无效-→-重新编译","link":"#第-4-步-缓存无效-→-重新编译","children":[]}]},{"level":2,"title":"时间点总结","slug":"时间点总结","link":"#时间点总结","children":[]},{"level":2,"title":"关键细节：缓存检查的触发条件","slug":"关键细节-缓存检查的触发条件","link":"#关键细节-缓存检查的触发条件","children":[{"level":3,"title":"1. 缓存检查发生在哪里？","slug":"_1-缓存检查发生在哪里","link":"#_1-缓存检查发生在哪里","children":[]},{"level":3,"title":"2. 什么时候触发缓存检查？","slug":"_2-什么时候触发缓存检查","link":"#_2-什么时候触发缓存检查","children":[]},{"level":3,"title":"3. 多个请求的情况","slug":"_3-多个请求的情况","link":"#_3-多个请求的情况","children":[]}]},{"level":2,"title":"为什么会这样设计？","slug":"为什么会这样设计","link":"#为什么会这样设计","children":[{"level":3,"title":"开发环境的权衡","slug":"开发环境的权衡","link":"#开发环境的权衡","children":[]},{"level":3,"title":"替代方案（为什么不选？）","slug":"替代方案-为什么不选","link":"#替代方案-为什么不选","children":[]}]},{"level":2,"title":"实际验证","slug":"实际验证","link":"#实际验证","children":[{"level":3,"title":"方式 1：添加调试日志","slug":"方式-1-添加调试日志","link":"#方式-1-添加调试日志","children":[]},{"level":3,"title":"方式 2：检查时间戳","slug":"方式-2-检查时间戳","link":"#方式-2-检查时间戳","children":[]}]},{"level":2,"title":"特殊情况","slug":"特殊情况","link":"#特殊情况","children":[{"level":3,"title":"情况 1：使用 Symfony Web Server（php -S）","slug":"情况-1-使用-symfony-web-server-php-s","link":"#情况-1-使用-symfony-web-server-php-s","children":[]},{"level":3,"title":"情况 2：使用 PHP-FPM + Nginx","slug":"情况-2-使用-php-fpm-nginx","link":"#情况-2-使用-php-fpm-nginx","children":[]},{"level":3,"title":"情况 3：使用 php bin/console 命令","slug":"情况-3-使用-php-bin-console-命令","link":"#情况-3-使用-php-bin-console-命令","children":[]}]},{"level":2,"title":"开发流程实例","slug":"开发流程实例","link":"#开发流程实例","children":[{"level":3,"title":"场景：你正在开发","slug":"场景-你正在开发","link":"#场景-你正在开发","children":[]}]},{"level":2,"title":"性能影响","slug":"性能影响","link":"#性能影响","children":[{"level":3,"title":"缓存检查的开销","slug":"缓存检查的开销","link":"#缓存检查的开销","children":[]},{"level":3,"title":"为什么生产环境需要手动 cache:clear？","slug":"为什么生产环境需要手动-cache-clear","link":"#为什么生产环境需要手动-cache-clear","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"关键认知","slug":"关键认知","link":"#关键认知","children":[]}],"git":{},"filePathRelative":"content/php/symfony/Symfony7自动发现机制.md"}');export{d as comp,r as data};
