import{_ as e,c as n,f as t,o as i}from"./app-BB_BIQV8.js";const a={};function l(d,s){return i(),n("div",null,s[0]||(s[0]=[t(`<p>postgressql的基本使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">简单的几个使用sql语句：</span>
<span class="line">select id,username from &quot;user&quot;; // 这个 user 表 一定要用 双引号引起来，不然查询报错</span>
<span class="line"></span>
<span class="line">select * from &quot;dict&quot; left join &quot;dict_type&quot; on &quot;dict&quot;.dict_type_id = &quot;dict_type&quot;.id where &quot;dict_type&quot;.id = 1;</span>
<span class="line"></span>
<span class="line">update &quot;dict&quot; set value = 2 where id = 1;</span>
<span class="line"></span>
<span class="line">// postgres 和mysql 一样 都有 distinct 函数，但是这个函数只能查所有select的字段同时不重复，为此 postgres</span>
<span class="line">// 有一个distinct on 实现单个字段去重,如果加了 order by  那么第一个order by的字段 一定是 on 里面的字段，不然报错</span>
<span class="line">select distinct on(dict_type_id)id, name, dict_type_id from &quot;dict&quot; order by dict_type_id desc, id desc;</span>
<span class="line"></span>
<span class="line">关于 distinct on的官方介绍：</span>
<span class="line">用法：</span>
<span class="line">　　DISTINCT ON ( expression [, …] ) keeps only the first row of each set of rows where the given expressions evaluate to equal. […]。 Note that the “first row” of each set is unpredictable unless ORDER BY is used to ensure that the desired row appears first. […]。 The DISTINCT ON expression(s) must match the leftmost ORDER BY expression(s)。</span>
<span class="line">　　意思是DISTINCT ON ( expression [, …] )把记录根据[, …]的值进行分组，分组之后仅返回每一组的第一行。需要注意的是，如果你不指定ORDER BY子句，返回的第一条的不确定的。如果你使用了ORDER BY 子句，那么[, …]里面的值必须靠近ORDER BY子句的最左边。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=e(a,[["render",l],["__file","postgressql的基本使用.html.vue"]]),c=JSON.parse('{"path":"/content/database/postgressql/postgressql%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","title":"postgressql的基本使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"postgressql的基本使用","description":"postgressql的基本使用"},"headers":[],"git":{},"filePathRelative":"content/database/postgressql/postgressql的基本使用.md"}');export{o as comp,c as data};
