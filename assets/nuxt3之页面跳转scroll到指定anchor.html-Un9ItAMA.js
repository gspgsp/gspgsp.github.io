import{_ as n,c as e,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(c,s){return a(),e("div",null,s[0]||(s[0]=[l(`<p>nuxt3之页面跳转scroll到指定anchor: 开始看了:https://stackoverflow.com/questions/73932280/nuxt-3-smooth-scrolling-with-hash-links<br> 但是上面这个方法并没有生效</p><p>最后自己想到一个好的方法:<br> 在 created 下定义</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">if (process.client) {</span>
<span class="line">	if (_.has(this.$route, &#39;hash&#39;) &amp;&amp; this.$route.hash){</span>
<span class="line">          window.scrollTo({top: this.getTop(this.$route.hash)})</span>
<span class="line">        }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 methods下定义如下获取指定anchor元素距离顶部的offSet值</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">getTop(hash){</span>
<span class="line">      const el = document.querySelector(hash)</span>
<span class="line">      return el.offsetTop</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以解决，页面跳转到指定anchor的问题，其实在上面的链接里面，核心的也就是获取元素的offSet的值，单独拿出来看看:</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">import { defineNuxtPlugin } from &quot;#app&quot;;</span>
<span class="line"></span>
<span class="line">export default defineNuxtPlugin((nuxtApp) =&gt; {</span>
<span class="line">  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) =&gt; {</span>
<span class="line">    if (savedPosition) {</span>
<span class="line">      return savedPosition;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    const findEl = async (hash, x = 0) =&gt; {</span>
<span class="line">      return (</span>
<span class="line">        document.querySelector(hash) ||</span>
<span class="line">        new Promise((resolve) =&gt; {</span>
<span class="line">          if (x &gt; 0) {</span>
<span class="line">            return resolve(document.querySelector(&quot;#app&quot;));</span>
<span class="line">          }</span>
<span class="line">          setTimeout(() =&gt; {</span>
<span class="line">            resolve(findEl(hash, 1));</span>
<span class="line">          }, 300);</span>
<span class="line">        })</span>
<span class="line">      );</span>
<span class="line">    };</span>
<span class="line"></span>
<span class="line">    if (to.hash) {</span>
<span class="line">      const el = await findEl(to.hash);</span>
<span class="line"></span>
<span class="line">      if (&quot;scrollBehavior&quot; in document.documentElement.style) {</span>
<span class="line">        console.log(&quot;hash path hit scroll to&quot;);</span>
<span class="line">        return window.scrollTo({ top: el.offsetTop, behavior: &quot;smooth&quot; });</span>
<span class="line">      } else {</span>
<span class="line">        return window.scrollTo(0, el.offsetTop);</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">    return { left: 0, top: 0, behaviour: &quot;smooth&quot; };</span>
<span class="line">  };</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const d=n(i,[["render",t],["__file","nuxt3之页面跳转scroll到指定anchor.html.vue"]]),o=JSON.parse('{"path":"/content/front/js/nuxt3%E4%B9%8B%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%ACscroll%E5%88%B0%E6%8C%87%E5%AE%9Aanchor.html","title":"nuxt3之页面跳转scroll到指定anchor","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3之页面跳转scroll到指定anchor","description":"nuxt3之页面跳转scroll到指定anchor"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3之页面跳转scroll到指定anchor.md"}');export{d as comp,o as data};
