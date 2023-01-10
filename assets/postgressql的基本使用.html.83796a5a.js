import{_ as e,o as s,c as i,g as t}from"./app.264f0052.js";const n={},d=t(`<p>postgressql\u7684\u57FA\u672C\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B80\u5355\u7684\u51E0\u4E2A\u4F7F\u7528sql\u8BED\u53E5\uFF1A
select id,username from &quot;user&quot;; // \u8FD9\u4E2A user \u8868 \u4E00\u5B9A\u8981\u7528 \u53CC\u5F15\u53F7\u5F15\u8D77\u6765\uFF0C\u4E0D\u7136\u67E5\u8BE2\u62A5\u9519

select * from &quot;dict&quot; left join &quot;dict_type&quot; on &quot;dict&quot;.dict_type_id = &quot;dict_type&quot;.id where &quot;dict_type&quot;.id = 1;

update &quot;dict&quot; set value = 2 where id = 1;

// postgres \u548Cmysql \u4E00\u6837 \u90FD\u6709 distinct \u51FD\u6570\uFF0C\u4F46\u662F\u8FD9\u4E2A\u51FD\u6570\u53EA\u80FD\u67E5\u6240\u6709select\u7684\u5B57\u6BB5\u540C\u65F6\u4E0D\u91CD\u590D\uFF0C\u4E3A\u6B64 postgres
// \u6709\u4E00\u4E2Adistinct on \u5B9E\u73B0\u5355\u4E2A\u5B57\u6BB5\u53BB\u91CD,\u5982\u679C\u52A0\u4E86 order by  \u90A3\u4E48\u7B2C\u4E00\u4E2Aorder by\u7684\u5B57\u6BB5 \u4E00\u5B9A\u662F on \u91CC\u9762\u7684\u5B57\u6BB5\uFF0C\u4E0D\u7136\u62A5\u9519
select distinct on(dict_type_id)id, name, dict_type_id from &quot;dict&quot; order by dict_type_id desc, id desc;

\u5173\u4E8E distinct on\u7684\u5B98\u65B9\u4ECB\u7ECD\uFF1A
\u7528\u6CD5\uFF1A
\u3000\u3000DISTINCT ON ( expression [, \u2026] ) keeps only the first row of each set of rows where the given expressions evaluate to equal. [\u2026]\u3002 Note that the \u201Cfirst row\u201D of each set is unpredictable unless ORDER BY is used to ensure that the desired row appears first. [\u2026]\u3002 The DISTINCT ON expression(s) must match the leftmost ORDER BY expression(s)\u3002
\u3000\u3000\u610F\u601D\u662FDISTINCT ON ( expression [, \u2026] )\u628A\u8BB0\u5F55\u6839\u636E[, \u2026]\u7684\u503C\u8FDB\u884C\u5206\u7EC4\uFF0C\u5206\u7EC4\u4E4B\u540E\u4EC5\u8FD4\u56DE\u6BCF\u4E00\u7EC4\u7684\u7B2C\u4E00\u884C\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u4F60\u4E0D\u6307\u5B9AORDER BY\u5B50\u53E5\uFF0C\u8FD4\u56DE\u7684\u7B2C\u4E00\u6761\u7684\u4E0D\u786E\u5B9A\u7684\u3002\u5982\u679C\u4F60\u4F7F\u7528\u4E86ORDER BY \u5B50\u53E5\uFF0C\u90A3\u4E48[, \u2026]\u91CC\u9762\u7684\u503C\u5FC5\u987B\u9760\u8FD1ORDER BY\u5B50\u53E5\u7684\u6700\u5DE6\u8FB9\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function o(l,c){return s(),i("div",null,r)}var a=e(n,[["render",o],["__file","postgressql\u7684\u57FA\u672C\u4F7F\u7528.html.vue"]]);export{a as default};
