import{_,o as l,c as d,a as e,g as a,r as n}from"./app.264f0052.js";const c={},r=a(`<p>mysql8\u89E3\u51B3\u5206\u7EC4\u62A5only_full_group_by\u7684\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql8\u4E0B\u6267\u884Cgroup\u64CD\u4F5C\uFF0C\u4F1A\u62A5\u4E0B\u9762\u7684\u9519\u8BEF\uFF0C5.7\u4EE5\u4E0A\u90FD\u4F1A\uFF0C\u53EA\u662Fsql_mode\u7684\u53C2\u6570\u7565\u6709\u4E0D\u540C,\u5177\u4F53\u770B\u4E0B\u9762\u7684\u6CE8\u91CA
Error 1055: Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column &#39;age-club-db.d_inner_products.id&#39; which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by

\u5148\u6267\u884C\uFF1A
select @@sql_mode;

\u8F93\u51FA\uFF1A
ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION

\u5220\u9664ONLY_FULL_GROUP_BY\uFF1A
STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION //\u6CE8\u610F mysql8 \u662F\u6CA1\u6709 NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION \u53C2\u6570\u7684\uFF0C\u6240\u4EE5\u53EA\u7528\u628A ONLY_FULL_GROUP_BY \u53BB\u6389\uFF0C\u5269\u4E0B\u7684\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5426\u5219\u91CD\u542F\u4EE5\u540E\u62A5\u9519

vagrant@homestead:~$ sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf

\u5728 [mysqld]\u6700\u540E\u6DFB\u52A0\u4E0B\u9762\u7684\u914D\u7F6E\uFF0C\u7136\u540E\u91CD\u542F\uFF1A
sql_mode=&quot;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION

vagrant@homestead:~$ sudo service mysql restart //\u91CD\u542F

vagrant@homestead:~$ service mysql status //\u67E5\u770B\u7ED3\u679C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function o(m,t){const s=n("BackBtn"),i=n("CommentService");return l(),d("div",null,[r,e(s),e(i)])}var u=_(c,[["render",o],["__file","mysql\u89E3\u51B3\u5206\u7EC4\u62A5only_full_group_by\u7684\u95EE\u9898.html.vue"]]);export{u as default};
