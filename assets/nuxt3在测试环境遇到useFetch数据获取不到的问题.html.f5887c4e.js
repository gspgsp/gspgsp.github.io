import{_ as n,o as s,c as a,g as t}from"./app.dd03cafd.js";const e={},p=t(`<p>nuxt3 \u83B7\u53D6\u63A5\u53E3\u6570\u636E\u9047\u5230\u7684\u95EE\u9898\uFF0C\u901A\u8FC7useFetch \u5728\u6D4B\u8BD5\u670D\u52A1\u5668\u6CA1\u6CD5\u83B7\u53D6\u5230\u6570\u636E\uFF0C\u4F46\u662F $fetch \u53EF\u4EE5\uFF1B\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\uFF0C\u8BBE\u7F6Eserver:false\u7684\u65F6\u5019 \u662F\u53EF\u4EE5\u62FF\u5230\u6570\u636E\u7684\uFF0C\u672C\u5730\u73AF\u5883 dev/build \u90FD\u662F\u6CA1\u95EE\u9898\u7684\uFF0C\u4F46\u662F\u653E\u5230\u6D4B\u8BD5\u670D\u52A1\u5668\u5C31\u6709\u95EE\u9898\uFF0C\u4E0D\u77E5\u9053\u662F\u4E0D\u662F\u548Cnodejs \u7248\u672C\u6709\u5173\uFF0C\u6211\u672C\u5730\u662F\uFF1Av19.3.0 \u6D4B\u8BD5\u73AF\u5883\u662F:v18.15.0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCourseDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token function-variable function">getCourseDetail</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">$fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api/course/&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span>

       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

       <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">this</span><span class="token punctuation">.</span>courseDetail<span class="token punctuation">.</span>id <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>id
               <span class="token keyword">this</span><span class="token punctuation">.</span>courseDetail<span class="token punctuation">.</span>title <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>title
         <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
           <span class="token keyword">this</span><span class="token punctuation">.</span>$toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>$toast<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;require api failed&#39;</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>

       <span class="token comment">// const {data, error} = await useFetch(&#39;/api/course/&#39; + this.$route.params.id, {</span>
       <span class="token comment">//   method: &#39;get&#39;,</span>
       <span class="token comment">//   headers: {&#39;X-Requested-With&#39;: &#39;XMLHttpRequest&#39;},</span>
       <span class="token comment">// })</span>

       <span class="token comment">// if (error._value) {</span>
       <span class="token comment">//   this.$toast.error(error._value.data.msg)</span>
       <span class="token comment">// } else {</span>
       <span class="token comment">//   if (data._value.code === 0) {</span>
       <span class="token comment">//     console.log(11111)</span>
       <span class="token comment">//     this.courseDetail.id = data._value.data.id</span>
       <span class="token comment">//     this.courseDetail.title = data._value.data.title</span>
       <span class="token comment">//   } else {</span>
       <span class="token comment">//     this.$toast.info(data._value.msg)</span>
       <span class="token comment">//   }</span>
       <span class="token comment">// }</span>
     <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","nuxt3\u5728\u6D4B\u8BD5\u73AF\u5883\u9047\u5230useFetch\u6570\u636E\u83B7\u53D6\u4E0D\u5230\u7684\u95EE\u9898.html.vue"]]);export{r as default};
