import{_ as e,o as n,c as t,g as s}from"./app.dd03cafd.js";const c={},i=s(`<p>mysql\u4E4Btruncate\u5916\u952E\u7EA6\u675F\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cannot truncate a table referenced in a foreign key constraint
\u89E3\u51B3\u529E\u6CD5\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u64CD\u4F5C:
SET foreign_key_checks = 0;
truncate event_series;
SET foreign_key_checks = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[i];function r(l,_){return n(),t("div",null,a)}var o=e(c,[["render",r],["__file","mysql\u4E4Btruncate\u5916\u952E\u7EA6\u675F\u95EE\u9898.html.vue"]]);export{o as default};
