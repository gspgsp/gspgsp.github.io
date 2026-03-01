import{_ as e,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const t={};function l(d,s){return i(),n("div",null,s[0]||(s[0]=[a(`<p>ts用法总计:</p><ul><li>高级写法: const headers = (options.headers ||= {})</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这一行代码是一个逻辑表达式，其目的是确保在获取 options.headers 前将其初始化为空对象（如果它尚未定义），以避免后续操作中出现 undefined 或 null 引发的错误。</span>
<span class="line">让我们逐步解释这个表达式：</span>
<span class="line">  </span>
<span class="line">options.headers 是一个对象，用于存储请求的头部信息。</span>
<span class="line">||= 是一个赋值操作符，表示如果左侧的值为假（例如 null、undefined 或者 false），则将右侧的值赋给左侧变量。</span>
<span class="line">因此，(options.headers ||= {}) 的含义是，如果 options.headers 为假（即未定义或者为空），则将一个空对象 {} 赋给 headers 变量，否则将保持 options.headers 的原有值。</span>
<span class="line">这样做的目的是确保在设置请求头部信息之前，headers 变量始终指向一个对象，以便后续的操作不会因为 headers 为 undefined 或者 null 而出错。</span>
<span class="line">                  </span>
<span class="line">nuxt3的 $fetch 是基于 https://github.com/unjs/ofetch</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=e(t,[["render",l],["__file","ts用法总计.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/ts%E7%94%A8%E6%B3%95%E6%80%BB%E8%AE%A1.html","title":"ts用法总计","lang":"en-US","frontmatter":{"sidebar":false,"title":"ts用法总计","description":"ts用法总计"},"headers":[],"git":{},"filePathRelative":"content/front/js/ts用法总计.md"}');export{c as comp,p as data};
