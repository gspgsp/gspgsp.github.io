import{_ as n,o as s,c as a,g as e}from"./app.b04686bd.js";const t={},p=e(`<p>\u4E3B\u8981\u662Fvue3\u4EE5\u540E\uFF0C\u4E0D\u80FD\u901A\u8FC7 params \u4F20\u9012\u53C2\u6570\uFF0C\u4EE5\u524D\u8DEF\u7531\u8DF3\u8F6C\u7684\u65F6\u5019\uFF0C\u901A\u8FC7 params \u4F20\u9012\u53C2\u6570\u5F88\u597D\u7528\uFF0C\u5B98\u65B9\u5EFA\u8BAE\u7528pinia</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCourseVideoStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;toCourseVideo&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">courseId</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">setCourseId</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>courseId <span class="token operator">=</span> val
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getCourseId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>courseId
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//\u4F7F\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCourseVideoStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;~/store/course-video&#39;</span>

<span class="token keyword">const</span> courseVideoStore <span class="token operator">=</span> <span class="token function">useCourseVideoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      courseVideoStore<span class="token punctuation">.</span><span class="token function">setCourseId</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
      
<span class="token keyword">const</span> courseVideoStore <span class="token operator">=</span> <span class="token function">useCourseVideoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> courseId  <span class="token operator">=</span> courseVideoStore<span class="token punctuation">.</span>getCourseId
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","nuxt3\u4F7F\u7528pinia\u5B58\u50A8\u6570\u636E.html.vue"]]);export{r as default};
