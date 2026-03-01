import{_ as e,c as n,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(d,s){return l(),n("div",null,s[0]||(s[0]=[a(`<p>mysql之sql-mode设置:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mysql8的默认sql_mode:</span>
<span class="line">select @@sql_mode;</span>
<span class="line">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span>
<span class="line">  </span>
<span class="line">这个 ONLY_FULL_GROUP_BY 会在sql的select查询的时候报错，一般需要去掉,原因如下:</span>
<span class="line">Reject queries for which the select list, HAVING condition, or ORDER BY list refer to nonaggregated columns that are neither named in the GROUP BY clause nor are functionally dependent on (uniquely determined by) GROUP BY columns.</span>
<span class="line">对于选择列表、HAVING条件或ORDER BY列表中提到的非分组列的查询都会被拒绝，这些列既没有在GROUP BY子句中命名，也没有在功能上依赖于（由GROUP BY列唯一决定）的查询。</span>
<span class="line">  </span>
<span class="line">在配置文件 /etc/mysql/my.cnf 中 [mysqld] 下面加上一行</span>
<span class="line">设置: sql_mode =&#39;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION&#39;</span>
<span class="line">  </span>
<span class="line">对于STRICT_TRANS_TABLES：严格模式 一般也是要禁用的(大部分时候都只是禁用了ONLY_FULL_GROUP_BY)，原因如下:</span>
<span class="line">Strict mode controls how MySQL handles invalid or missing values in data-change statements such as INSERT or UPDATE. A value can be invalid for several reasons. For example, it might have the wrong data type for the column, or it might be out of range. A value is missing when a new row to be inserted does not contain a value for a non-NULL column that has no explicit DEFAULT clause in its definition. (For a NULL column, NULL is inserted if the value is missing.) Strict mode also affects DDL statements such as CREATE TABLE.</span>
<span class="line">严格模式控制MySQL如何处理数据变更语句（如INSERT或UPDATE）中的无效或缺失值。一个值可能因为几个原因而无效。例如，它可能有错误的列的数据类型，或者它可能超出了范围。当要插入的新行不包含一个非NULL列的值时，一个值就会丢失，该列在其定义中没有明确的DEFAULT子句。(对于一个NULL列，如果数值缺失，则插入NULL。) 严格模式也影响到DDL语句，如CREATE TABLE。</span>
<span class="line">  </span>
<span class="line">生产上可以直接 sql_mode = &#39;&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=e(i,[["render",t],["__file","mysql之sql-mode设置.html.vue"]]),r=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8Bsql-mode%E8%AE%BE%E7%BD%AE.html","title":"mysql之sql-mode设置","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之sql-mode设置","description":"mysql之sql-mode设置"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之sql-mode设置.md"}');export{o as comp,r as data};
