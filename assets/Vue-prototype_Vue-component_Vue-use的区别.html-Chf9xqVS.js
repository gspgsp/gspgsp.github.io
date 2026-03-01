import{_ as e,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(p,s){return i(),n("div",null,s[0]||(s[0]=[a(`<p>Vue.prototype和Vue.use的区别:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line">import Vue from &#39;vue&#39;</span>
<span class="line">import Element from &#39;element-ui&#39;</span>
<span class="line">Vue.use(Element)</span>
<span class="line">import echarts from &#39;echarts&#39;</span>
<span class="line">vue.prototype.$echarts = echarts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这样的代码我们肯定很熟悉， 但是对于Vue.use和Vue.prototype的区别是什么，</span>
<span class="line">可能还不一定完全清楚。Vue为什么要提高两个注册插件的方式？他们各自有什么</span>
<span class="line">优点和联系？</span>
<span class="line">  </span>
<span class="line">先说结论，Vue.use和Vue.prototype没有本质区别，Vue.use就</span>
<span class="line">是在Vue.prototype基础上又封装了一层而已，他们实现的原理都是</span>
<span class="line">在Vue.prototype上添加了一个方法，Vue.prototype适合于注册Vue生态</span>
<span class="line">外的插件，Vue.use适合于注册Vue生态内的插件.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue.prototype的用法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">如果需要设置全局变量，在main.js中，Vue实例化的代码里添加。 这种情况下，你可以通过在 原型 上定义它们使其在每个Vue实例中可用。</span>
<span class="line">  </span>
<span class="line">vue.prototype.$echarts = echarts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue.use()的 用法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.通过全局方法 Vue.use() 使用插件</span>
<span class="line">2.Vue.use 会自动阻止多次注册相同插件</span>
<span class="line">3.它需要在你调用 new Vue() 启动应用之前完成</span>
<span class="line">4.Vue.use() 方法至少传入一个参数，该参数类型必须是 Object 或 Function，如果是 Object 那么这个 Object 需要定义一个 install 方法，如果是 Function 那么这个函数就被当做 install 方法。在 Vue.use() 执行时 install 会默认执行，当 install 执行时第一个参数就是 Vue，其他参数是 Vue.use() 执行时传入的其他参数。</span>
<span class="line">  </span>
<span class="line">import Vue from &#39;vue&#39;</span>
<span class="line">import Element from &#39;element-ui&#39;</span>
<span class="line">Vue.use(Element)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line">Vue.use = function (plugin) {</span>
<span class="line">  if (plugin.installed) {</span>
<span class="line">    return;</span>
<span class="line">  }</span>
<span class="line">  // additional parameters</span>
<span class="line">  var args = toArray(arguments, 1);</span>
<span class="line">  args.unshift(this);</span>
<span class="line">  if (typeof plugin.install === &#39;function&#39;) {</span>
<span class="line">    plugin.install.apply(plugin, args);</span>
<span class="line">  } else {</span>
<span class="line">    plugin.apply(null, args);</span>
<span class="line">  }</span>
<span class="line">  plugin.installed = true;</span>
<span class="line">  return this;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 准备好 install 方法 给 Vue.use() 使用</span>
<span class="line">const install = function (Vue) {</span>
<span class="line">  if (install.installed) return;</span>
<span class="line">  install.installed = true;</span>
<span class="line"></span>
<span class="line">  // 将包装好的 toast 挂到Vue的原型上，作为 Vue 实例上的方法</span>
<span class="line">  Vue.prototype.$toast = toast;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 默认导出 install</span>
<span class="line">export default {</span>
<span class="line">  install,</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看了源码才知道原来Vue.use主要是执行install方法，而install主要也是执行Vue.prototype方法。所以，其实Vue.use()方法的核心就是Vue.prototype，只不过又封装了一层,更加的灵活，扩展性更好。</p><p>不同之处是使用vue.prototype，插件不需要实现install方法，简单粗暴，拿来就用，但是灵活性不如Vue.use(), 而Vue.use()，却要求插件必须实现instal方法或者该插件本身就是函数，在install方法可以完成自己的逻辑， 所以Vue.use()的方式更加的强大，灵活，扩展性更好。</p>`,11)]))}const r=e(l,[["render",t],["__file","Vue-prototype_Vue-component_Vue-use的区别.html.vue"]]),d=JSON.parse('{"path":"/content/front/html/Vue-prototype_Vue-component_Vue-use%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"Vue-prototype+Vue-use的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"Vue-prototype+Vue-use的区别","description":"Vue-prototype+Vue-use的区别"},"headers":[],"git":{},"filePathRelative":"content/front/html/Vue-prototype+Vue-component+Vue-use的区别.md"}');export{r as comp,d as data};
