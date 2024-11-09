import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const r={},l=s(`<p>js\u4E4B\u65E0\u611F\u77E5\u4FEE\u6539\u8BF7\u6C42\u94FE\u63A5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$(document).on(&#39;mouseenter&#39;, &quot;#subscribe_user_comment&quot;, function () {
        let userId = $(this).data(&quot;user&quot;);
        if (&#39;&#39; === userId) {
            let searchParams = window.location.search;
            searchParams = searchParams.split(&#39;?&#39;)[0];

            searchParams = updateSearchParams(searchParams, &#39;subscribe_comment&#39;, true);
            window.history.pushState(&#39;&#39;, &#39;&#39;, searchParams);
        }
    });
//window.history.pushState(&#39;&#39;, &#39;&#39;, searchParams); \u662F JavaScript \u4E2D\u7528\u4E8E\u4FEE\u6539\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u7684\u65B9\u6CD5\u4E4B\u4E00\u3002\u8FD9\u4E2A\u65B9\u6CD5\u662F HTML5 \u4E2D\u5F15\u5165\u7684\uFF0C\u5B83\u5141\u8BB8\u4F60\u5728\u4E0D\u5237\u65B0\u9875\u9762\u7684\u60C5\u51B5\u4E0B\u6539\u53D8\u6D4F\u89C8\u5668\u7684 URL \u548C\u5386\u53F2\u8BB0\u5F55\u72B6\u6001\u3002  
      
function subscribeComment(){
    if (-1 !== window.location.search.indexOf(&quot;subscribe_comment&quot;)){
        let ele = $(&quot;#subscribe_user_comment&quot;);
        $(&#39;html, body&#39;).animate({
            scrollTop: ele.offset().top
        }, 500);

        ele.trigger(&quot;click&quot;);

        removeSubscribeCommentParam()
    }
}
  
function removeSubscribeCommentParam() {
    let currentUrl = window.location.href;

    let updatedUrl = currentUrl.replace(/([?&amp;])subscribe_comment=[^&amp;]*(&amp;|$)/, function(match, p1, p2) {
        return p1 === &#39;?&#39; ? p2 : &#39;&#39;;
    });

    if (updatedUrl !== currentUrl) {
        window.history.replaceState({}, document.title, updatedUrl);
    }
}

//window.history.replaceState \u7684\u4F5C\u7528\u662F\u5C06\u5F53\u524D\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u6761\u76EE\u7684\u72B6\u6001\u4FEE\u6539\u4E3A\u63D0\u4F9B\u7684\u72B6\u6001\uFF0C\u5E76\u5C06\u5F53\u524D\u9875\u9762\u7684 URL \u4FEE\u6539\u4E3A\u65B0\u7684 URL\uFF0C\u4F46\u5E76\u4E0D\u4F1A\u5BFC\u81F4\u9875\u9762\u91CD\u65B0\u52A0\u8F7D\u3002\u8FD9\u5BF9\u4E8E\u5728\u4E0D\u5237\u65B0\u6574\u4E2A\u9875\u9762\u7684\u60C5\u51B5\u4E0B\u66F4\u65B0 URL \u5F88\u6709\u7528\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>window.history.pushState\u548Cwindow.history.replaceState\u6709\u76F8\u4F3C\u7684\u4F5C\u7528\uFF0C\u5C31\u4E0A\u9762\u7684\u9700\u6C42\u800C\u8A00\uFF0C\u53EF\u4EE5\u8FBE\u5230\u76F8\u540C\u7684\u6548\u679C.</p>`,3),a=[l];function d(c,t){return i(),n("div",null,a)}var v=e(r,[["render",d],["__file","js\u4E4B\u65E0\u611F\u77E5\u4FEE\u6539\u8BF7\u6C42\u94FE\u63A5.html.vue"]]);export{v as default};
