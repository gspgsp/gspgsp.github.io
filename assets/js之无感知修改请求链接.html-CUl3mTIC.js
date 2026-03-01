import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>js之无感知修改请求链接:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$(document).on(&#39;mouseenter&#39;, &quot;#subscribe_user_comment&quot;, function () {</span>
<span class="line">        let userId = $(this).data(&quot;user&quot;);</span>
<span class="line">        if (&#39;&#39; === userId) {</span>
<span class="line">            let searchParams = window.location.search;</span>
<span class="line">            searchParams = searchParams.split(&#39;?&#39;)[0];</span>
<span class="line"></span>
<span class="line">            searchParams = updateSearchParams(searchParams, &#39;subscribe_comment&#39;, true);</span>
<span class="line">            window.history.pushState(&#39;&#39;, &#39;&#39;, searchParams);</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">//window.history.pushState(&#39;&#39;, &#39;&#39;, searchParams); 是 JavaScript 中用于修改浏览器历史记录的方法之一。这个方法是 HTML5 中引入的，它允许你在不刷新页面的情况下改变浏览器的 URL 和历史记录状态。  </span>
<span class="line">      </span>
<span class="line">function subscribeComment(){</span>
<span class="line">    if (-1 !== window.location.search.indexOf(&quot;subscribe_comment&quot;)){</span>
<span class="line">        let ele = $(&quot;#subscribe_user_comment&quot;);</span>
<span class="line">        $(&#39;html, body&#39;).animate({</span>
<span class="line">            scrollTop: ele.offset().top</span>
<span class="line">        }, 500);</span>
<span class="line"></span>
<span class="line">        ele.trigger(&quot;click&quot;);</span>
<span class="line"></span>
<span class="line">        removeSubscribeCommentParam()</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">function removeSubscribeCommentParam() {</span>
<span class="line">    let currentUrl = window.location.href;</span>
<span class="line"></span>
<span class="line">    let updatedUrl = currentUrl.replace(/([?&amp;])subscribe_comment=[^&amp;]*(&amp;|$)/, function(match, p1, p2) {</span>
<span class="line">        return p1 === &#39;?&#39; ? p2 : &#39;&#39;;</span>
<span class="line">    });</span>
<span class="line"></span>
<span class="line">    if (updatedUrl !== currentUrl) {</span>
<span class="line">        window.history.replaceState({}, document.title, updatedUrl);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//window.history.replaceState 的作用是将当前浏览器历史记录条目的状态修改为提供的状态，并将当前页面的 URL 修改为新的 URL，但并不会导致页面重新加载。这对于在不刷新整个页面的情况下更新 URL 很有用。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>window.history.pushState和window.history.replaceState有相似的作用，就上面的需求而言，可以达到相同的效果.</p>`,3)]))}const d=n(l,[["render",c],["__file","js之无感知修改请求链接.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/js%E4%B9%8B%E6%97%A0%E6%84%9F%E7%9F%A5%E4%BF%AE%E6%94%B9%E8%AF%B7%E6%B1%82%E9%93%BE%E6%8E%A5.html","title":"js之无感知修改请求链接","lang":"en-US","frontmatter":{"sidebar":false,"title":"js之无感知修改请求链接","description":"js之无感知修改请求链接"},"headers":[],"git":{},"filePathRelative":"content/front/js/js之无感知修改请求链接.md"}');export{d as comp,p as data};
