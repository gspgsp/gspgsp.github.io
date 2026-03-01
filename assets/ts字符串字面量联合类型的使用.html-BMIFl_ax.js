import{_ as n,c as e,f as t,o as i}from"./app-BB_BIQV8.js";const a={};function l(o,s){return i(),e("div",null,s[0]||(s[0]=[t(`<p>ts字符串字面量联合类型的使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">direction.ts:</span>
<span class="line">export type Direction = &quot;north&quot; | &quot;south&quot; | &quot;east&quot; | &quot;west&quot;; // 在 TypeScript 中有一个专业术语来描述它：字符串字面量联合类型（String Literal Union Type）</span>
<span class="line">  </span>
<span class="line">export const directions: Direction[] = [&quot;north&quot;,&quot;south&quot;,&quot;east&quot;,&quot;west&quot;];</span>
<span class="line">  </span>
<span class="line">分析：</span>
<span class="line">这里，&quot;north&quot;、&quot;south&quot;、&quot;east&quot; 和 &quot;west&quot; 都是字符串字面量类型。</span>
<span class="line">  </span>
<span class="line">与 const 断言的结合：</span>
<span class="line">从 TypeScript 3.4 开始，你还可以使用 as const 来创建只读的字符串字面量联合类型：</span>
<span class="line">const directions = [&quot;north&quot;,&quot;south&quot;,&quot;east&quot;,&quot;west&quot;] as const;</span>
<span class="line">export type Direction = typeof directions[number];</span>
<span class="line">  </span>
<span class="line">这种方法的优点：</span>
<span class="line">类型安全：只允许使用预定义的方向。</span>
<span class="line">自动完成：IDE 可以提供方向的自动完成。</span>
<span class="line">单一数据源：数组和类型定义在一起，易于维护。</span>
<span class="line">可扩展：添加新方向只需修改数组。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(a,[["render",l],["__file","ts字符串字面量联合类型的使用.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/ts%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"ts字符串字面量联合类型的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"ts字符串字面量联合类型的使用","description":"ts字符串字面量联合类型的使用"},"headers":[],"git":{},"filePathRelative":"content/front/js/ts字符串字面量联合类型的使用.md"}');export{r as comp,u as data};
