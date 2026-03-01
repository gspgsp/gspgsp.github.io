import{_ as n,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<p>MySQL有两种常用的引擎类型：MyISAM和InnoDB。目前只有InnoDB引擎类型支持外键约束。InnoDB中外键约束定义的语法如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER TABLE tbl_name</span>
<span class="line">    ADD [CONSTRAINT [symbol]] FOREIGN KEY</span>
<span class="line">    [index_name] (index_col_name, ...)</span>
<span class="line">    REFERENCES tbl_name (index_col_name,...)</span>
<span class="line">    [ON DELETE reference_option]</span>
<span class="line">    [ON UPDATE reference_option]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加foreignKey:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER TABLE \`user_resource\` CONSTRAINT \`FKEEAF1E02D82D57F9\` FOREIGN KEY (\`user_Id\`) REFERENCES \`user\` (\`Id\`)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>向上面这样没有显式指定reference_option，默认就是 NO ACTION</p><p>也可以像下面这样显式指定reference_option：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER TABLE user_resource ADD CONSTRAINT FK_8A4A6B07591CC992 FOREIGN KEY (course_id) REFERENCES user (id) ON DELETE CASCADE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面是几个reference_option的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CASCADE</span>
<span class="line">在父表上update/delete记录时，同步update/delete掉子表的匹配记录 （硬删除用的比较多）</span>
<span class="line"></span>
<span class="line">SET NULL</span>
<span class="line">在父表上update/delete记录时，将子表上匹配记录的列设为null (要注意子表的外键列不能为not null)  </span>
<span class="line"></span>
<span class="line">NO ACTION</span>
<span class="line">如果子表中有匹配的记录,则不允许对父表对应候选键进行update/delete操作  </span>
<span class="line"></span>
<span class="line">RESTRICT</span>
<span class="line">同no action, 都是立即检查外键约束</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql忽略外键约束:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SET FOREIGN_KEY_CHECKS = 0;</span>
<span class="line">DROP TABLE user_articles;</span>
<span class="line">SET FOREIGN_KEY_CHECKS = 1;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const c=n(l,[["render",t],["__file","mysql外键关联以及约束.html.vue"]]),p=JSON.parse('{"path":"/content/database/mysql/mysql%E5%A4%96%E9%94%AE%E5%85%B3%E8%81%94%E4%BB%A5%E5%8F%8A%E7%BA%A6%E6%9D%9F.html","title":"mysql外键关联以及约束","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql外键关联以及约束","description":"mysql外键关联以及约束"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql外键关联以及约束.md"}');export{c as comp,p as data};
