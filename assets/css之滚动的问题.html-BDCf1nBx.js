import{_ as n,c as e,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function c(r,s){return a(),e("div",null,s[0]||(s[0]=[l(`<p>css之滚动的问题，在做项目的时候，一直对scroll属性有些疑问，特意记录一下，代码如下:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line">mounted() {</span>
<span class="line">    if (process.client){</span>
<span class="line">      window.addEventListener(&#39;scroll&#39;, this.handleScroll, true)</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">methods: {</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">    handleScroll: function (){</span>
<span class="line">      console.log(&#39;window的滚动距离:&#39;, window.scrollY) // 滚动条到顶部的距离</span>
<span class="line"></span>
<span class="line">      // HTMLElement.offsetParent 是一个只读属性，返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的 table, td, th, body 元素。当元素的 style.display 设置为 &quot;none&quot; 时，offsetParent 返回 null。offsetParent 很有用，因为 offsetTop 和 offsetLeft 都是相对于其内边距边界的。</span>
<span class="line">      // HTMLElement.offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部内边距的距离。</span>
<span class="line">      console.log(&#39;元素 articleWrapper offsetTop:&#39;, this.$refs.articleWrapper.offsetTop)</span>
<span class="line"></span>
<span class="line">      console.log(&#39;元素 articleWrapper scrollHeight:&#39;,this.$refs.articleWrapper.scrollHeight) // 整个内容的高度(包括了 滚动框之外的内容)</span>
<span class="line">      console.log(&#39;元素 articleWrapper clientHeight:&#39;, this.$refs.articleWrapper.clientHeight) // 客户端看到的高度(就会说滚动框里的内容)</span>
<span class="line">      console.log(&#39;元素 articleWrapper scrollTop:&#39;,this.$refs.articleWrapper.scrollTop) // 滚动条到顶部的距离</span>
<span class="line">    },</span>
<span class="line">    toTop: function (){</span>
<span class="line">      this.$refs.articleWrapper.scrollTo({top:0, behavior: &quot;smooth&quot;}) // 常见用法，点击 回到顶部</span>
<span class="line">    },</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(i,[["render",c],["__file","css之滚动的问题.html.vue"]]),d=JSON.parse('{"path":"/content/front/html/css%E4%B9%8B%E6%BB%9A%E5%8A%A8%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"css之滚动的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"css之滚动的问题","description":"css之滚动的问题"},"headers":[],"git":{},"filePathRelative":"content/front/html/css之滚动的问题.md"}');export{p as comp,d as data};
