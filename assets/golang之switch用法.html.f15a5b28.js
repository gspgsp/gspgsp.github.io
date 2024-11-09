import{_ as p,o as e,c,a as n,g as o,r as s}from"./app.66ae8700.js";const i={},l=o(`<p>golang\u4E4Bswitch\u7528\u6CD5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//switch \u5E26\u8868\u8FBE\u5F0F\uFF0Cswitch n \u8981\u548Ccase \u503C\u76F8\u7B49 \u624D\u4F1A\u6267\u884C\uFF0Ccase \u91CC\u53EF\u4EE5\u8DDF\u591A\u4E2A\u503C\uFF0C\u6BD4\u5982 case 1,2,3:</span>
    <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">:=</span> <span class="token number">2</span>
        <span class="token keyword">switch</span> n <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;n = &quot;</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;n = &quot;</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;n = &quot;</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default case&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token comment">//switch \u5E26\u8868\u8FBE\u5F0F\uFF0C\u901A\u8FC7switch\u505A\u7C7B\u578B\u5224\u65AD</span>
    <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> t <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">switch</span> t<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;float64&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default interface&quot;</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token comment">//switch\u901A\u8FC7 fallthrough \u7A7F\u900F\uFF0C\u4E0B\u9762\u7684 n := 2 \uFF0C\u4F1A\u8F93\u51FA\uFF1A 1,2 3,4 5,6 \u53EA\u8981\u9047\u5230 fallthrough  \u5C31\u4F1A\u7EE7\u7EED\u5411\u4E0B\u6267\u884C,\u800C\u4E0D\u7BA1\u6761\u4EF6\u6210\u4E0D\u6210\u7ACB</span>
    <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        n <span class="token operator">:=</span> <span class="token number">2</span>
        <span class="token keyword">switch</span> n <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1,2&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">fallthrough</span>
        <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;3,4&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">fallthrough</span>
        <span class="token keyword">case</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;5,6&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">fallthrough</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default case&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token comment">//switch \u4E0D\u5E26\u8868\u8FBE\u5F0F\uFF0C\u8FD9\u79CD\u7528\u6CD5\u76F8\u5F53\u4E8E switch true\uFF0Ccase \u540E\u8868\u8FBE\u5F0F\u4E5F\u8981\u4E3A true \u624D\u4F1A\u6267\u884C</span>
    <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">:=</span> <span class="token number">1</span>
        <span class="token keyword">switch</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;n = &quot;</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
        <span class="token keyword">case</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;n = &quot;</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
        <span class="token keyword">case</span> n <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;n = &quot;</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default case&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(k,r){const a=s("BackBtn"),t=s("CommentService");return e(),c("div",null,[l,n(a),n(t)])}var v=p(i,[["render",u],["__file","golang\u4E4Bswitch\u7528\u6CD5.html.vue"]]);export{v as default};
