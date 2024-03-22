import{_ as e,o as n,c as i,g as l}from"./app.b04686bd.js";const s={},r=l(`<p>css\u4E4B\u6EDA\u52A8\u7684\u95EE\u9898\uFF0C\u5728\u505A\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u4E00\u76F4\u5BF9scroll\u5C5E\u6027\u6709\u4E9B\u7591\u95EE\uFF0C\u7279\u610F\u8BB0\u5F55\u4E00\u4E0B\uFF0C\u4EE3\u7801\u5982\u4E0B:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>mounted() {
    if (process.client){
      window.addEventListener(&#39;scroll&#39;, this.handleScroll, true)
    }
  },

methods: {
...
...
    handleScroll: function (){
      console.log(&#39;window\u7684\u6EDA\u52A8\u8DDD\u79BB:&#39;, window.scrollY) // \u6EDA\u52A8\u6761\u5230\u9876\u90E8\u7684\u8DDD\u79BB

      // HTMLElement.offsetParent \u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u6700\u8FD1\u7684\uFF08\u6307\u5305\u542B\u5C42\u7EA7\u4E0A\u7684\u6700\u8FD1\uFF09\u5305\u542B\u8BE5\u5143\u7D20\u7684\u5B9A\u4F4D\u5143\u7D20\u6216\u8005\u6700\u8FD1\u7684 table, td, th, body \u5143\u7D20\u3002\u5F53\u5143\u7D20\u7684 style.display \u8BBE\u7F6E\u4E3A &quot;none&quot; \u65F6\uFF0CoffsetParent \u8FD4\u56DE null\u3002offsetParent \u5F88\u6709\u7528\uFF0C\u56E0\u4E3A offsetTop \u548C offsetLeft \u90FD\u662F\u76F8\u5BF9\u4E8E\u5176\u5185\u8FB9\u8DDD\u8FB9\u754C\u7684\u3002
      // HTMLElement.offsetTop \u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u5B83\u8FD4\u56DE\u5F53\u524D\u5143\u7D20\u76F8\u5BF9\u4E8E\u5176 offsetParent \u5143\u7D20\u7684\u9876\u90E8\u5185\u8FB9\u8DDD\u7684\u8DDD\u79BB\u3002
      console.log(&#39;\u5143\u7D20 articleWrapper offsetTop:&#39;, this.$refs.articleWrapper.offsetTop)

      console.log(&#39;\u5143\u7D20 articleWrapper scrollHeight:&#39;,this.$refs.articleWrapper.scrollHeight) // \u6574\u4E2A\u5185\u5BB9\u7684\u9AD8\u5EA6(\u5305\u62EC\u4E86 \u6EDA\u52A8\u6846\u4E4B\u5916\u7684\u5185\u5BB9)
      console.log(&#39;\u5143\u7D20 articleWrapper clientHeight:&#39;, this.$refs.articleWrapper.clientHeight) // \u5BA2\u6237\u7AEF\u770B\u5230\u7684\u9AD8\u5EA6(\u5C31\u4F1A\u8BF4\u6EDA\u52A8\u6846\u91CC\u7684\u5185\u5BB9)
      console.log(&#39;\u5143\u7D20 articleWrapper scrollTop:&#39;,this.$refs.articleWrapper.scrollTop) // \u6EDA\u52A8\u6761\u5230\u9876\u90E8\u7684\u8DDD\u79BB
    },
    toTop: function (){
      this.$refs.articleWrapper.scrollTo({top:0, behavior: &quot;smooth&quot;}) // \u5E38\u89C1\u7528\u6CD5\uFF0C\u70B9\u51FB \u56DE\u5230\u9876\u90E8
    },
...
...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[r];function d(o,t){return n(),i("div",null,c)}var v=e(s,[["render",d],["__file","css\u4E4B\u6EDA\u52A8\u7684\u95EE\u9898.html.vue"]]);export{v as default};
