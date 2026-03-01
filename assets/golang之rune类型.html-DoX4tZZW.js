import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function c(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>golang之rune类型:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">字符串中的每一个元素叫做“字符”，在遍历或者单个获取字符串元素时可以获得字符</span>
<span class="line">  </span>
<span class="line">Go语言的字符有以下两种：</span>
<span class="line">一种是byte 类型，代表了 ASCII 码的一个字符。byte等价于uint8类型</span>
<span class="line">另一种是 rune 类型，代表一个Unicode字符，当需要处理中文、日文或者其他复合字符时，则需要用到 rune 类型。rune 类型等价于 int32 类型</span>
<span class="line">  </span>
<span class="line">// byte is an alias for uint8 and is equivalent to uint8 in all ways. It is</span>
<span class="line">// used, by convention, to distinguish byte values from 8-bit unsigned</span>
<span class="line">// integer values.</span>
<span class="line">type byte = uint8</span>
<span class="line">  </span>
<span class="line">// rune is an alias for int32 and is equivalent to int32 in all ways. It is</span>
<span class="line">// used, by convention, to distinguish character values from integer values.</span>
<span class="line">type rune = int32</span>
<span class="line">  </span>
<span class="line">关于rune的几个点:https://juejin.cn/post/7068726981159829541</span>
<span class="line">rune的使用场景:https://learnku.com/articles/23411/the-difference-between-rune-and-byte-of-go</span>
<span class="line">  </span>
<span class="line">int的各个单位大小:https://clickhouse.com/docs/en/sql-reference/data-types/int-uint</span>
<span class="line">  </span>
<span class="line">unicode和ascii的区别主要体现在:</span>
<span class="line">1.编码范围不同</span>
<span class="line">ASCII的编码范围是0-127，主要用于表示英语字母；而Unicode的编码范围广阔得多，可以表示几乎所有的语言字符。</span>
<span class="line">  </span>
<span class="line">2.存储空间不同</span>
<span class="line">ASCII编码通常使用1个字节来存储一个字符，而Unicode编码可能使用2个或更多的字节来存储一个字符。</span>
<span class="line">  </span>
<span class="line">3.兼容性不同</span>
<span class="line">ASCII编码是Unicode编码的一部分，也就是说，所有的ASCII字符在Unicode编码中都有对应的编码。这也意味着ASCII编码的文本可以直接转换为Unicode编码，而不会丢失任何信息。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",c],["__file","golang之rune类型.html.vue"]]),p=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8Brune%E7%B1%BB%E5%9E%8B.html","title":"golang之rune类型","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之rune类型","description":"golang之rune类型"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之rune类型.md"}');export{r as comp,p as data};
