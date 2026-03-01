import{_ as e,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h5 id="mysql之inner和left的区别" tabindex="-1"><a class="header-anchor" href="#mysql之inner和left的区别"><span>mysql之inner和left的区别</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// inner join(这个是inner join)</span>
<span class="line">SELECT *</span>
<span class="line">FROM</span>
<span class="line">    email_template_action_contents AS etac</span>
<span class="line">    INNER JOIN email_template_actions AS eta ON etac.template_action_id = eta.id </span>
<span class="line">    AND eta.template_category_id = 4 </span>
<span class="line">    AND etac.status_from = 1;</span>
<span class="line"></span>
<span class="line">// left join 不生效, 和上面的inner join效果一样</span>
<span class="line">SELECT *</span>
<span class="line">FROM email_template_action_contents AS etac</span>
<span class="line">LEFT JOIN email_template_actions AS eta</span>
<span class="line">  ON etac.template_action_id = eta.id</span>
<span class="line">WHERE etac.status_from = 1 AND eta.template_category_id = 4;</span>
<span class="line"></span>
<span class="line">// left join 生效</span>
<span class="line">SELECT *</span>
<span class="line">FROM email_template_action_contents AS etac</span>
<span class="line">LEFT JOIN email_template_actions AS eta</span>
<span class="line">  ON etac.template_action_id = eta.id AND eta.template_category_id = 4</span>
<span class="line">WHERE etac.status_from = 1;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">但此时要注意：LEFT JOIN 加 WHERE eta.xxx = yyy 会失效“左连接保留全部”的特性，结果跟 INNER JOIN 一样。</span>
<span class="line">想保留主表全量，条件必须放在 ON 子句中</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=e(l,[["render",t],["__file","mysql之inner和left的区别.html.vue"]]),m=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8Binner%E5%92%8Cleft%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"mysql之inner和left的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之inner和left的区别","head":[["meta",{"name":"title","content":"mysql之inner和left的区别"}],["meta",{"name":"description","content":"mysql之inner和left的区别"}],["meta",{"name":"keywords","content":"mysql,inner,left"}],["meta",{"property":"og:title","content":"mysql之inner和left的区别"}],["meta",{"property":"og:description","content":"mysql之inner和left的区别"}]]},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之inner和left的区别.md"}');export{r as comp,m as data};
