import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>mysql之数据库外键约束的配置:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">关于数据库外键约束的配置，常见的会给 onDelete 配置一些操作，比如: onDelete: &#39;CASCADE&#39;</span>
<span class="line"></span>
<span class="line">CASCADE:</span>
<span class="line">在数据库中，外键（foreign key）是指一个表中的字段，它关联到另一个表中的主键（primary key）。当在一个表中定义了外键，并且设置了 onDelete: &#39;CASCADE&#39;，这意味着当参考的行（被外键引用的行）被删除时，将会自动删除包含该外键的行，以维持数据的完整性和一致性。</span>
<span class="line">  </span>
<span class="line">如果不想在删除关联的行时自动删除包含外键的行,可以按下面的配置:</span>
<span class="line">  </span>
<span class="line">RESTRICT:</span>
<span class="line">当被引用的行被删除时，会阻止删除包含外键的行，除非没有任何引用该行的行存在。</span>
<span class="line">  </span>
<span class="line">NO ACTION: </span>
<span class="line">类似于 RESTRICT，当被引用的行被删除时，不会执行任何操作，除非没有任何引用该行的行存在。</span>
<span class="line">  </span>
<span class="line">SET NULL: </span>
<span class="line">当被引用的行被删除时，外键列将被设置为 NULL 值。</span>
<span class="line">  </span>
<span class="line">SET DEFAULT:</span>
<span class="line">当被引用的行被删除时，外键列将被设置为其默认值。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql8删除数据，由于外键约束的问题：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Cannot delete or update a parent row: a foreign key constraint fails (sciforum_dev.event_person_affiliations, CONSTRAINT FK_296B1A6AA7EE857A FOREIGN KEY (event_person_id) REFERENCES event_persons (id))</span>
<span class="line"></span>
<span class="line">SET FOREIGN_KEY_CHECKS = 0;</span>
<span class="line">DELETE FROM event_persons WHERE session_id IS NULL;</span>
<span class="line">SET FOREIGN_KEY_CHECKS = 1;</span>
<span class="line"></span>
<span class="line">可以临时设置不检查外键约束,删除即可</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const p=n(l,[["render",d],["__file","mysql之数据库外键约束的配置.html.vue"]]),r=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E5%A4%96%E9%94%AE%E7%BA%A6%E6%9D%9F%E7%9A%84%E9%85%8D%E7%BD%AE.html","title":"mysql之数据库外键约束的配置","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之数据库外键约束的配置","description":"mysql之数据库外键约束的配置"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之数据库外键约束的配置.md"}');export{p as comp,r as data};
