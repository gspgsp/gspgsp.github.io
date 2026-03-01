import{_ as i,c as _,f as c,a as n,o as t,r as l}from"./app-BB_BIQV8.js";const d={};function r(o,s){const e=l("BackBtn"),a=l("CommentService");return t(),_("div",null,[s[0]||(s[0]=c(`<p>mysql8解决分组报only_full_group_by的问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mysql8下执行group操作，会报下面的错误，5.7以上都会，只是sql_mode的参数略有不同,具体看下面的注释</span>
<span class="line">Error 1055: Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column &#39;age-club-db.d_inner_products.id&#39; which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by</span>
<span class="line"></span>
<span class="line">先执行：</span>
<span class="line">select @@sql_mode;</span>
<span class="line"></span>
<span class="line">输出：</span>
<span class="line">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span>
<span class="line"></span>
<span class="line">删除ONLY_FULL_GROUP_BY：</span>
<span class="line">STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION //注意 mysql8 是没有 NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION 参数的，所以只用把 ONLY_FULL_GROUP_BY 去掉，剩下的就可以了，否则重启以后报错</span>
<span class="line"></span>
<span class="line">vagrant@homestead:~$ sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf</span>
<span class="line"></span>
<span class="line">在 [mysqld]最后添加下面的配置，然后重启：</span>
<span class="line">sql_mode=&quot;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span>
<span class="line"></span>
<span class="line">vagrant@homestead:~$ sudo service mysql restart //重启</span>
<span class="line"></span>
<span class="line">vagrant@homestead:~$ service mysql status //查看结果</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n(e),n(a)])}const m=i(d,[["render",r],["__file","mysql解决分组报only_full_group_by的问题.html.vue"]]),u=JSON.parse('{"path":"/content/database/mysql/mysql%E8%A7%A3%E5%86%B3%E5%88%86%E7%BB%84%E6%8A%A5only_full_group_by%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"mysql8解决分组报only_full_group_by的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql8解决分组报only_full_group_by的问题","description":"mysql8解决分组报only_full_group_by的问题"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql解决分组报only_full_group_by的问题.md"}');export{m as comp,u as data};
