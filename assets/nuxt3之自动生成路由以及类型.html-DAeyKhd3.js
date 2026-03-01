import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>nuxt3之自动生成路由以及类型:<br> 1&gt; 缘起 在使用nuxt3开发项目的时候，一般不需要自己定义路由的，框架会自动根据页面(pages)目录生成相关的路由信息这需要安装特定的包: nuxt-typed-router</p><p>2&gt; 使用以及分析</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import type { RoutesNamedLocations, RoutesNamesList } from &quot;@typed-router&quot;;</span>
<span class="line">  </span>
<span class="line">// 分析</span>
<span class="line">RoutesNamesList的作用:</span>
<span class="line">RoutesNamesList 是从 @typed-router 库中导入的类型，其主要作用是定义项目中所有路由名称的字符串集合。它通常用于为项目中的路由名称提供类型检查，确保代码在访问路由时使用的名称是有效且类型安全的。</span>
<span class="line">  </span>
<span class="line">具体作用：</span>
<span class="line">1.限制路由名称：</span>
<span class="line">RoutesNamesList 的作用是限制开发者只能使用预定义的路由名称。这可以防止在代码中使用不存在或拼写错误的路由名称，减少运行时错误的可能性。</span>
<span class="line">  </span>
<span class="line">2.自动补全和类型检查：</span>
<span class="line">当你使用 RoutesNamesList 作为路由名称的类型时，IDE 会为你提供自动补全功能，并在你尝试使用无效的路由名称时发出警告。这大大提高了开发效率和代码的可靠性。</span>
<span class="line">  </span>
<span class="line">3.路由名称集中管理：</span>
<span class="line">使用 RoutesNamesList 可以集中管理项目中的所有路由名称，使得项目结构更清晰。如果需要添加、删除或重命名某个路由，更新这个类型定义可以使整个项目统一反映这个变化。</span>
<span class="line">  </span>
<span class="line">示例说明：</span>
<span class="line">假设 RoutesNamesList 的定义类似如下：</span>
<span class="line">1.假设 RoutesNamesList 的定义类似如下：</span>
<span class="line">type RoutesNamesList = &quot;home&quot; | &quot;about&quot; | &quot;contact&quot;;</span>
<span class="line">  </span>
<span class="line">当使用 RoutesNamesList 作为类型时，只能使用 home、about 或 contact 作为合法的路由名称</span>
<span class="line">  </span>
<span class="line">let routeName: RoutesNamesList;</span>
<span class="line"></span>
<span class="line">routeName = &quot;home&quot;;    // 合法</span>
<span class="line">routeName = &quot;contact&quot;; // 合法</span>
<span class="line">routeName = &quot;login&quot;;   // 错误，&quot;login&quot; 不在 RoutesNamesList 中</span>
<span class="line">  </span>
<span class="line">//重命名路由</span>
<span class="line">export { type RoutesNamesList as AppRouteList } from &quot;@typed-router&quot;;</span>
<span class="line">这里将 RoutesNamesList 重新导出为 AppRouteList，这样项目中的其他部分可以使用 AppRouteList 来作为路由名称的类型。它确保了任何使用该类型的地方都只能使用预定义的路由名称。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 分析</span>
<span class="line">RoutesNamedLocations的作用</span>
<span class="line">RoutesNamedLocations 是从 @typed-router 导入的另一个类型，通常用于定义与路由名称相关的具体路由对象。它不仅包含了路由的名称，还可以包含路由参数、查询参数等信息，帮助你以类型安全的方式构建路由对象。</span>
<span class="line">  </span>
<span class="line">具体作用：</span>
<span class="line">1.类型安全的路由导航：</span>
<span class="line">RoutesNamedLocations 的作用是为你提供类型化的路由对象，用于路由导航。这样你在生成路由路径时，不仅能指定路由名称，还可以确保传入的参数符合该路由的要求（如动态参数或查询参数）。</span>
<span class="line">  </span>
<span class="line">2.参数类型检查：</span>
<span class="line">对于带有动态参数的路由，RoutesNamedLocations 允许你通过类型来明确要求的参数。例如，如果某个路由需要一个 id 参数，这个类型会强制你在导航时提供 id，否则会抛出编译错误，确保导航的路径和参数是正确的。</span>
<span class="line">  </span>
<span class="line">3.导航时的自动补全：</span>
<span class="line">使用 RoutesNamedLocations 作为路由对象的类型时，IDE 可以为你提供智能提示，自动补全路由名称以及相关的参数。这使得在编写导航代码时，不仅能快速选择正确的路由，还能避免传递错误或缺失的参数。</span>
<span class="line">  </span>
<span class="line">示例说明：</span>
<span class="line">假设你有一组路由配置，比如：</span>
<span class="line">// 假设的路由配置</span>
<span class="line">type RoutesNamedLocations = {</span>
<span class="line">  home: {};</span>
<span class="line">  about: {};</span>
<span class="line">  user: { params: { id: string }; query?: { referrer?: string } };</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">home 和 about 路由没有参数要求，而 user 路由需要一个 id 参数，并且可以有一个可选的 query 参数 referrer。</span>
<span class="line">  </span>
<span class="line">你可以这样使用：</span>
<span class="line">let route: RoutesNamedLocations;</span>
<span class="line"></span>
<span class="line">// 合法：没有参数要求</span>
<span class="line">route = { name: &quot;home&quot; };</span>
<span class="line">route = { name: &quot;about&quot; };</span>
<span class="line"></span>
<span class="line">// 合法：提供了必需的参数</span>
<span class="line">route = { name: &quot;user&quot;, params: { id: &quot;123&quot; } };</span>
<span class="line"></span>
<span class="line">// 合法：还可以包含可选的查询参数</span>
<span class="line">route = { name: &quot;user&quot;, params: { id: &quot;123&quot; }, query: { referrer: &quot;homepage&quot; } };</span>
<span class="line"></span>
<span class="line">// 错误：缺少 id 参数</span>
<span class="line">route = { name: &quot;user&quot; }; // TypeScript 报错</span>
<span class="line">  </span>
<span class="line">// 混合使用</span>
<span class="line">export type AppGenericRoute = RoutesNamedLocations | string;</span>
<span class="line">AppGenericRoute 可以是类型化的 RoutesNamedLocations，也可以是简单的字符串。这意味着在某些场景下你可以使用类型化路由，也可以只使用字符串形式的路由名称。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3&gt; 说明</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.独立使用 @typed-router：如果你不使用 Nuxt.js，而是一个普通的 Vue Router 项目，可以直接安装和使用 @typed-router 来为项目添加类型安全的路由支持。</span>
<span class="line">  </span>
<span class="line">2.在 Nuxt.js 中在安装了 nuxt-typed-router之后，你不需要直接安装 @typed-router，因为 nuxt-typed-router 已经基于它构建并提供了所有功能。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const c=n(l,[["render",t],["__file","nuxt3之自动生成路由以及类型.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/nuxt3%E4%B9%8B%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E8%B7%AF%E7%94%B1%E4%BB%A5%E5%8F%8A%E7%B1%BB%E5%9E%8B.html","title":"nuxt3之自动生成路由以及类型","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3之自动生成路由以及类型","description":"nuxt3之自动生成路由以及类型"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3之自动生成路由以及类型.md"}');export{c as comp,u as data};
