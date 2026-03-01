import{_ as a,c as s,f as n,o as l}from"./app-BB_BIQV8.js";const t={};function i(c,e){return l(),s("div",null,e[0]||(e[0]=[n(`<h4 id="vue3关于watch和watcheffect的不同" tabindex="-1"><a class="header-anchor" href="#vue3关于watch和watcheffect的不同"><span>vue3关于watch和watchEffect的不同</span></a></h4><p>最近在检查代码的时候，发现有人使用watchEffect，导致县把灌木有一些奇怪的问题，如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">watchEffect(() =&gt; {</span>
<span class="line">  if (selectedRoleItem.value &amp;&amp; roles.value.length) {</span>
<span class="line">    fetchTableData();</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">分析:</span>
<span class="line">watchEffect：</span>
<span class="line">watchEffect 是 Vue 3 中用于响应式数据变化的 API。当其依赖的响应式数据发生变化时，传入的函数会被重新执行。在这个例子中，watchEffect 会观察 selectedRoleItem.value 和 roles.value 的变化。</span>
<span class="line"></span>
<span class="line">selectedRoleItem.value：</span>
<span class="line">这是一个响应式的引用变量（可能是通过 ref 或 reactive 创建的）。selectedRoleItem.value 会是某个选中的角色项，可能是从角色列表中选择的当前角色。</span>
<span class="line"></span>
<span class="line">roles.value.length：</span>
<span class="line">这是另一个响应式数据，代表角色列表的长度。它检查当前角色列表中是否有角色。</span>
<span class="line"></span>
<span class="line">fetchTableData()：</span>
<span class="line">这是在条件满足时调用的一个函数。fetchTableData 很可能是一个异步函数，用于获取与当前选中的角色相关的表格数据。它在 selectedRoleItem.value 有值且 roles.value 数组非空时被触发。</span>
<span class="line"></span>
<span class="line">逻辑:</span>
<span class="line">这段代码的核心逻辑是：当 selectedRoleItem 选择了一个角色且 roles 列表非空时，会触发 fetchTableData() 函数来加载表格数据。</span>
<span class="line">依赖项：watchEffect 会在 selectedRoleItem.value 和 roles.value 的值发生变化时重新执行。如果 selectedRoleItem 发生变化，或者 roles 数组的长度变化，watchEffect 会重新执行其内部函数。</span>
<span class="line"></span>
<span class="line">问题:</span>
<span class="line">当我点击页面上的跳转按钮的时候，调到其它页面，watchEffect里的当法仍然会被调用，导致错误的请求</span>
<span class="line"></span>
<span class="line">原因分析:</span>
<span class="line">watchEffect 是一个自动依赖收集的工具。它会监视所有在它内部访问的响应式数据。这个特性意味着，如果在页面跳转后，selectedRoleItem 或 roles 的值发生变化，即便页面内容已经更新，它也会再次执行 fetchTableData()。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决办法-使用watch" tabindex="-1"><a class="header-anchor" href="#解决办法-使用watch"><span>解决办法,使用watch</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">当使用 watch 时，可以显式地指定你关注的依赖数据，并且 只在这些数据变化时执行 特定的副作用（比如 fetchTableData()）。这样，只有当你显式传入的响应式数据发生变化时，fetchTableData() 才会被调用，避免了页面跳转后不必要的调用。</span>
<span class="line"></span>
<span class="line">watch([selectedRoleItem, roles], ([currentRole, availableRoles]) =&gt; {</span>
<span class="line">  if (currentRole &amp;&amp; availableRoles.length) {</span>
<span class="line">    fetchTableData();</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watcheffect-vs-watch" tabindex="-1"><a class="header-anchor" href="#watcheffect-vs-watch"><span>watchEffect vs watch</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">自动依赖收集 vs 显式依赖声明：</span>
<span class="line">watchEffect 会自动追踪其内部访问的所有响应式数据，并在这些数据发生变化时重新执行。它不需要显式声明需要观察的依赖，Vue 会自动帮你做。</span>
<span class="line">watch 需要你显式声明依赖的变量，只有在这些变量发生变化时，watch 才会触发回调。</span>
<span class="line"></span>
<span class="line">触发时机：</span>
<span class="line">watchEffect 会在组件初始化时立即执行一次，然后随着依赖变化重新执行。这意味着它是即时响应依赖变化的。</span>
<span class="line">watch 默认不会立即执行，除非你显式设置了 immediate: true，它会等待监听的值变化才执行回调。</span>
<span class="line"></span>
<span class="line">回到你的问题：</span>
<span class="line">在你使用 watchEffect 时，你并没有显式声明需要监控的变量，而是让 watchEffect 自动依赖 selectedRoleItem 和 roles。当其中一个发生变化时，watchEffect 会自动触发并调用 fetchTableData()。</span>
<span class="line">但如果页面跳转时，你发现 fetchTableData() 被多次调用，这很可能是由于 watchEffect 会监控到 selectedRoleItem 或 roles 的任何变化，甚至是页面的重新渲染，也会触发不必要的调用。即便页面的 selectedRoleItem 或 roles 发生了变化，它也会重新触发副作用。</span>
<span class="line"></span>
<span class="line">为什么 watch 更适合你的需求：</span>
<span class="line">watch 允许你显式指定依赖项，并且你可以控制何时触发副作用。通过比较新旧值，你可以避免页面跳转时的重复请求（如果不需要），并且能更精确地控制哪些变量变化时需要执行回调。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用watch的优点" tabindex="-1"><a class="header-anchor" href="#使用watch的优点"><span>使用watch的优点</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">精确控制触发条件：通过明确判断 newRole 和 newRoles.length，可以确保只有在这两个值都有效时才执行数据加载。这可以避免在无效或空数据的情况下发起不必要的请求。</span>
<span class="line">自动依赖更新：由于使用了 watch，它会自动跟踪 selectedRoleItem 和 roles 的变化，确保在这两个变量变化时及时触发回调。</span>
<span class="line">多依赖项的监控：watch 可以接受一个数组作为第一个参数，表示对多个变量进行监听，确保在多个响应式数据变化时都有适当的反应。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watcheffect-最适合的场景是" tabindex="-1"><a class="header-anchor" href="#watcheffect-最适合的场景是"><span>watchEffect 最适合的场景是：</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">自动依赖收集：当你不想显式声明要监控的响应式数据，只想让它自动跟踪并在数据变化时执行副作用。</span>
<span class="line">简化副作用管理：适合简单的副作用，尤其是当你不关心数据变化的具体顺序时。</span>
<span class="line">快速开发：在快速开发和原型阶段，watchEffect 提供了一个简洁的方式来处理响应式数据变化引起的副作用。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="watcheffect返回值" tabindex="-1"><a class="header-anchor" href="#watcheffect返回值"><span>watchEffect返回值：</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const stop = watchEffect(() =&gt; {})</span>
<span class="line">const { stop, pause, resume } = watchEffect(() =&gt; {}) (3.5之后才有的,之前就是一个stop)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考链接:https://vuejs.org/api/reactivity-core.html#watcheffect</p></blockquote>`,15)]))}const r=a(t,[["render",i],["__file","vue3关于watch和watchEffect的不同.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/vue3%E5%85%B3%E4%BA%8Ewatch%E5%92%8CwatchEffect%E7%9A%84%E4%B8%8D%E5%90%8C.html","title":"vue3关于watch和watchEffect的不同","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3关于watch和watchEffect的不同","head":[["meta",{"name":"title","content":"vue3关于watch和watchEffect的不同"}],["meta",{"name":"description","content":"vue3关于watch和watchEffect的不同"}],["meta",{"name":"keywords","content":"vue3,watch,watchEffect"}],["meta",{"property":"og:title","content":"vue3关于watch和watchEffect的不同"}],["meta",{"property":"og:description","content":"vue3关于watch和watchEffect的不同"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3关于watch和watchEffect的不同.md"}');export{r as comp,p as data};
