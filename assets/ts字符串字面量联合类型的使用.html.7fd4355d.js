import{_ as t,o as e,c as n,g as i}from"./app.66ae8700.js";const s={},o=i(`<p>ts\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u8054\u5408\u7C7B\u578B\u7684\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>direction.ts:
export type Direction = &quot;north&quot; | &quot;south&quot; | &quot;east&quot; | &quot;west&quot;; // \u5728 TypeScript \u4E2D\u6709\u4E00\u4E2A\u4E13\u4E1A\u672F\u8BED\u6765\u63CF\u8FF0\u5B83\uFF1A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u8054\u5408\u7C7B\u578B\uFF08String Literal Union Type\uFF09
  
export const directions: Direction[] = [&quot;north&quot;,&quot;south&quot;,&quot;east&quot;,&quot;west&quot;];
  
\u5206\u6790\uFF1A
\u8FD9\u91CC\uFF0C&quot;north&quot;\u3001&quot;south&quot;\u3001&quot;east&quot; \u548C &quot;west&quot; \u90FD\u662F\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u3002
  
\u4E0E const \u65AD\u8A00\u7684\u7ED3\u5408\uFF1A
\u4ECE TypeScript 3.4 \u5F00\u59CB\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528 as const \u6765\u521B\u5EFA\u53EA\u8BFB\u7684\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u8054\u5408\u7C7B\u578B\uFF1A
const directions = [&quot;north&quot;,&quot;south&quot;,&quot;east&quot;,&quot;west&quot;] as const;
export type Direction = typeof directions[number];
  
\u8FD9\u79CD\u65B9\u6CD5\u7684\u4F18\u70B9\uFF1A
\u7C7B\u578B\u5B89\u5168\uFF1A\u53EA\u5141\u8BB8\u4F7F\u7528\u9884\u5B9A\u4E49\u7684\u65B9\u5411\u3002
\u81EA\u52A8\u5B8C\u6210\uFF1AIDE \u53EF\u4EE5\u63D0\u4F9B\u65B9\u5411\u7684\u81EA\u52A8\u5B8C\u6210\u3002
\u5355\u4E00\u6570\u636E\u6E90\uFF1A\u6570\u7EC4\u548C\u7C7B\u578B\u5B9A\u4E49\u5728\u4E00\u8D77\uFF0C\u6613\u4E8E\u7EF4\u62A4\u3002
\u53EF\u6269\u5C55\uFF1A\u6DFB\u52A0\u65B0\u65B9\u5411\u53EA\u9700\u4FEE\u6539\u6570\u7EC4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=[o];function d(r,c){return e(),n("div",null,u)}var a=t(s,[["render",d],["__file","ts\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u8054\u5408\u7C7B\u578B\u7684\u4F7F\u7528.html.vue"]]);export{a as default};
