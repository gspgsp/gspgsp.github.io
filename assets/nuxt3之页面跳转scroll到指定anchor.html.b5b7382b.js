import{_ as e,o as n,c as i,g as s}from"./app.dd03cafd.js";const l={},d=s(`<p>nuxt3\u4E4B\u9875\u9762\u8DF3\u8F6Cscroll\u5230\u6307\u5B9Aanchor: \u5F00\u59CB\u770B\u4E86:https://stackoverflow.com/questions/73932280/nuxt-3-smooth-scrolling-with-hash-links<br> \u4F46\u662F\u4E0A\u9762\u8FD9\u4E2A\u65B9\u6CD5\u5E76\u6CA1\u6709\u751F\u6548</p><p>\u6700\u540E\u81EA\u5DF1\u60F3\u5230\u4E00\u4E2A\u597D\u7684\u65B9\u6CD5:<br> \u5728 created \u4E0B\u5B9A\u4E49</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>if (process.client) {
	if (_.has(this.$route, &#39;hash&#39;) &amp;&amp; this.$route.hash){
          window.scrollTo({top: this.getTop(this.$route.hash)})
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 methods\u4E0B\u5B9A\u4E49\u5982\u4E0B\u83B7\u53D6\u6307\u5B9Aanchor\u5143\u7D20\u8DDD\u79BB\u9876\u90E8\u7684offSet\u503C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>getTop(hash){
      const el = document.querySelector(hash)
      return el.offsetTop
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u89E3\u51B3\uFF0C\u9875\u9762\u8DF3\u8F6C\u5230\u6307\u5B9Aanchor\u7684\u95EE\u9898\uFF0C\u5176\u5B9E\u5728\u4E0A\u9762\u7684\u94FE\u63A5\u91CC\u9762\uFF0C\u6838\u5FC3\u7684\u4E5F\u5C31\u662F\u83B7\u53D6\u5143\u7D20\u7684offSet\u7684\u503C\uFF0C\u5355\u72EC\u62FF\u51FA\u6765\u770B\u770B:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>import { defineNuxtPlugin } from &quot;#app&quot;;

export default defineNuxtPlugin((nuxtApp) =&gt; {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) =&gt; {
    if (savedPosition) {
      return savedPosition;
    }

    const findEl = async (hash, x = 0) =&gt; {
      return (
        document.querySelector(hash) ||
        new Promise((resolve) =&gt; {
          if (x &gt; 0) {
            return resolve(document.querySelector(&quot;#app&quot;));
          }
          setTimeout(() =&gt; {
            resolve(findEl(hash, 1));
          }, 300);
        })
      );
    };

    if (to.hash) {
      const el = await findEl(to.hash);

      if (&quot;scrollBehavior&quot; in document.documentElement.style) {
        console.log(&quot;hash path hit scroll to&quot;);
        return window.scrollTo({ top: el.offsetTop, behavior: &quot;smooth&quot; });
      } else {
        return window.scrollTo(0, el.offsetTop);
      }
    }
    return { left: 0, top: 0, behaviour: &quot;smooth&quot; };
  };
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=[d];function t(o,a){return n(),i("div",null,r)}var c=e(l,[["render",t],["__file","nuxt3\u4E4B\u9875\u9762\u8DF3\u8F6Cscroll\u5230\u6307\u5B9Aanchor.html.vue"]]);export{c as default};
