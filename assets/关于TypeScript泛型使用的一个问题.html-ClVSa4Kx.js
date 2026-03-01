import{_ as n,c as e,f as l,o as i}from"./app-BB_BIQV8.js";const a={};function t(p,s){return i(),e("div",null,s[0]||(s[0]=[l(`<h3 id="关于typescript泛型使用的一个问题" tabindex="-1"><a class="header-anchor" href="#关于typescript泛型使用的一个问题"><span>关于TypeScript泛型使用的一个问题</span></a></h3><ul><li>.定义了如下类型文件</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export type AppTab = { label: string; }; export type AppBlockTab&lt;T extends string | number = string&gt; = AppTab &amp; { value: T; };</span>
<span class="line"></span>
<span class="line">含义就是：</span>
<span class="line">AppTab有一个 label</span>
<span class="line">AppBlockTab&lt;T&gt; 继承 AppTab 并额外加了 value</span>
<span class="line">value 默认是 string，也可以变成 &quot;id&quot; 或 number</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>.组件中使用</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;script setup lang=&quot;ts&quot;&gt; import type { AppBlockTab } from &quot;~/types/app&quot;; const selectedItem = defineModel&lt;AppBlockTab&gt;({ required: true }); defineProps&lt;{ items: AppBlockTab[]; }&gt;(); &lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3.分析</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">AppBlockTab 默认 value 是 string 因为没有指定泛型，所以等于:</span>
<span class="line">AppBlockTab&lt;string&gt;</span>
<span class="line"></span>
<span class="line">如果items是: [{ label: &quot;A&quot;, value: 1 }], 然后 ts 会报错，因为 value: 1 不是 string</span>
<span class="line"></span>
<span class="line">所以在这种场景下需要这样定义:</span>
<span class="line">defineProps&lt;{</span>
<span class="line">items: AppBlockTab&lt;number&gt;[];</span>
<span class="line">}&gt;();</span>
<span class="line"></span>
<span class="line">const selectedItem = defineModel&lt;AppBlockTab&lt;number&gt;&gt;({ required: true });</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">如果希望 &quot;items 类型是什么，selectedItem 就是什么&quot;</span>
<span class="line">可以写成 泛型组件：</span>
<span class="line">&lt;script setup lang=&quot;ts&quot; generic=&quot;T extends string | number&quot;&gt;</span>
<span class="line">import type { AppBlockTab } from &quot;~/types/app&quot;;</span>
<span class="line"></span>
<span class="line">const selectedItem = defineModel&lt;AppBlockTab&lt;T&gt;&gt;({ required: true });</span>
<span class="line"></span>
<span class="line">defineProps&lt;{</span>
<span class="line">  items: AppBlockTab&lt;T&gt;[];</span>
<span class="line">}&gt;();</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">在使用时: &lt;AppBlock items=&quot;[{ label: &#39;A&#39;, value: 1 }]&quot; v-model=&quot;selected&quot; /&gt;  TS 会自动推断出 T 为string。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">还有一种情况:</span>
<span class="line">&lt;AppBlock :items=&quot;[]&quot; v-model=&quot;selected&quot; /&gt;</span>
<span class="line">现在 TS 无法推断 T，结果： T = never, 就会报错</span>
<span class="line"></span>
<span class="line">如果希望组件在没传 items 时也不报错，可以给一个默认类型：generic=&quot;T extends string | number = string&quot;</span>
<span class="line">即:</span>
<span class="line">&lt;script setup lang=&quot;ts&quot; generic=&quot;T extends string | number = string&quot;&gt;</span>
<span class="line">import type { AppBlockTab } from &quot;~/types/app&quot;;</span>
<span class="line"></span>
<span class="line">const selectedItem = defineModel&lt;AppBlockTab&lt;T&gt;&gt;({ required: true });</span>
<span class="line"></span>
<span class="line">defineProps&lt;{</span>
<span class="line">  items: AppBlockTab&lt;T&gt;[];</span>
<span class="line">}&gt;();</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">✅ 完全是 TypeScript 定义函数类型的标准写法。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const r=n(a,[["render",t],["__file","关于TypeScript泛型使用的一个问题.html.vue"]]),d=JSON.parse('{"path":"/content/front/js/%E5%85%B3%E4%BA%8ETypeScript%E6%B3%9B%E5%9E%8B%E4%BD%BF%E7%94%A8%E7%9A%84%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98.html","title":"关于TypeScript泛型使用的一个问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于TypeScript泛型使用的一个问题","head":[["meta",{"name":"title","content":"关于TypeScript泛型使用的一个问题"}],["meta",{"name":"description","content":"关于TypeScript泛型使用的一个问题"}],["meta",{"name":"keywords","content":"关于TypeScript泛型使用的一个问题"}],["meta",{"property":"og:title","content":"关于TypeScript泛型使用的一个问题"}],["meta",{"property":"og:description","content":"关于TypeScript泛型使用的一个问题"}]]},"headers":[{"level":3,"title":"关于TypeScript泛型使用的一个问题","slug":"关于typescript泛型使用的一个问题","link":"#关于typescript泛型使用的一个问题","children":[]}],"git":{},"filePathRelative":"content/front/js/关于TypeScript泛型使用的一个问题.md"}');export{r as comp,d as data};
