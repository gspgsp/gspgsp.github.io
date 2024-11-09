import{_ as n,o as i,c as e,g as s}from"./app.66ae8700.js";const t={},l=s(`<p>\u5173\u4E8Ets\u7684\u7EC6\u8282\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u5143\u6570\u7EC4
\u5143\u7EC4\u7C7B\u578B\u662F\u4E00\u79CD\u8868\u793A\u5177\u6709\u56FA\u5B9A\u6570\u91CF\u7684\u5143\u7D20\u53CA\u5176\u76F8\u5E94\u7C7B\u578B\u7684\u6570\u7EC4\u7684\u7C7B\u578B\u3002\u5143\u7EC4\u7C7B\u578B\u4EE5\u56FA\u5B9A\u987A\u5E8F\u5F3A\u5236\u6267\u884C\u7279\u5B9A\u6570\u91CF\u7684\u5143\u7D20\u53CA\u5176\u5404\u81EA\u7684\u7C7B\u578B\u3002\u5F53\u60A8\u60F3\u8981\u8868\u793A\u5177\u6709\u7279\u5B9A\u7C7B\u578B\u7684\u503C\u7684\u96C6\u5408\u65F6\uFF0C\u5143\u7EC4\u7C7B\u578B\u975E\u5E38\u6709\u7528\uFF0C\u5176\u4E2D\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\u90FD\u6709\u7279\u5B9A\u7684\u542B\u4E49\u3002

\u4F8B\u5B50:
type Point = [number, string, string];

const aa: Point = [123, &quot;456&quot;] // \u5FC5\u987B\u4E09\u4E2A\u53C2\u6570
const bb: Point = [123, &quot;456&quot;, 789] //\u6570\u636E\u7C7B\u578B\u5FC5\u987B\u4E3Astring
const cc: Point = [123, &quot;456&quot;, &quot;789&quot;]

2&gt;\u5728\u4F7F\u7528\u6CDB\u578B\u7684\u65F6\u5019\uFF0C\u51FD\u6570\u5F62\u5F0F\u7684\u8BDD\u53EF\u4EE5\u7528 &lt;T&gt;\u6216\u8005&lt;T,&gt;\uFF0C\u4F46\u662F\u5BF9\u4E8E\u7BAD\u5934\u51FD\u6570\u5FC5\u987B\u8981\u7528&lt;T,&gt;\u5426\u5219\u62A5\u9519
// function identity&lt;T&gt;(arg: T): T {
//     return arg;
// }

function identity&lt;T,&gt;(arg: T): T {
    return arg;
}

// const identity = &lt;T,&gt;(arg: T): T =&gt; arg

const a = identity(&#39;x&#39;);
console.log(&quot;a is:&quot;, a)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function r(a,c){return i(),e("div",null,d)}var u=n(t,[["render",r],["__file","\u5173\u4E8Ets\u7684\u7EC6\u8282\u95EE\u9898.html.vue"]]);export{u as default};
