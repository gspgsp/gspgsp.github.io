import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>mysql之coalesce:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 MySQL 8 中，COALESCE 函数用于返回表达式列表中第一个非 NULL 的值。如果所有表达式都是 NULL，那么 COALESCE 返回 NULL。它通常用于在查询中处理可能包含 NULL 值的列。</span>
<span class="line">使用:</span>
<span class="line">COALESCE(expression1, expression2, ..., expressionN)</span>
<span class="line">  </span>
<span class="line">expression1, expression2, ..., expressionN 是要检查的表达式。</span>
<span class="line">它会从左到右依次检查，返回第一个非 NULL 的表达式值。</span>
<span class="line">如果所有表达式都是 NULL，则返回 NULL</span>
<span class="line">  </span>
<span class="line">例子:</span>
<span class="line">SELECT user_id, </span>
<span class="line">       COALESCE(address1, address2, address3, &#39;No Address&#39;) AS primary_address</span>
<span class="line">FROM users;</span>
<span class="line">  </span>
<span class="line">有时候可以和IFNULL起到相同的作用.</span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">https://dev.mysql.com/doc/refman/8.4/en/comparison-operators.html#function_coalesce</span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">mysql之concat-ws:</span>
<span class="line">这个方法默认的doctrine不支持，在symfony框架下使用需要安装: composer require beberlei/doctrineextensions 拓展, 同时需要配置，参考: https://symfony.com/doc/current/doctrine/custom_dql_functions.html</span>
<span class="line">  </span>
<span class="line">https://dev.mysql.com/doc/refman/8.4/en/string-functions.html#function_concat-ws</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=n(i,[["render",c],["__file","mysql之coalesce.html.vue"]]),p=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8Bcoalesce.html","title":"mysql之coalesce","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之coalesce","description":"mysql之coalesce"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之coalesce.md"}');export{t as comp,p as data};
