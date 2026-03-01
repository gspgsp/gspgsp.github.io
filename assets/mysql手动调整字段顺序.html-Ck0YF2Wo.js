import{_ as s,c as n,f as a,o as l}from"./app-BB_BIQV8.js";const t={};function i(r,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h5 id="mysql手动调整字段顺序" tabindex="-1"><a class="header-anchor" href="#mysql手动调整字段顺序"><span>mysql手动调整字段顺序</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER TABLE orders MODIFY COLUMN id int NOT NULL AUTO_INCREMENT AFTER title;//这样是可以的</span>
<span class="line"></span>
<span class="line">ALTER TABLE orders MODIFY COLUMN id int NOT NULL AUTO_INCREMENT BEFORE title;//mysql没有before调整，只有after</span>
<span class="line">  </span>
<span class="line">ALTER TABLE orders MODIFY COLUMN id int NOT NULL AUTO_INCREMENT FIRST;//mysql支持放到首尾，直接 first</span>
<span class="line"></span>
<span class="line">总结:</span>
<span class="line">MySQL 用于调整字段顺序的语法只有两个关键位置指定方式，这两个是唯一支持的调整顺序的关键字：</span>
<span class="line">FIRST — 把字段放到表的第一个位置</span>
<span class="line">AFTER column_name — 把字段放到指定列的后面</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const m=s(t,[["render",i],["__file","mysql手动调整字段顺序.html.vue"]]),c=JSON.parse('{"path":"/content/database/mysql/mysql%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%AD%97%E6%AE%B5%E9%A1%BA%E5%BA%8F.html","title":"mysql手动调整字段顺序","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql手动调整字段顺序","head":[["meta",{"name":"title","content":"mysql手动调整字段顺序"}],["meta",{"name":"description","content":"mysql手动调整字段顺序"}],["meta",{"name":"keywords","content":"mysql"}],["meta",{"property":"og:title","content":"mysql手动调整字段顺序"}],["meta",{"property":"og:description","content":"mysql手动调整字段顺序"}]]},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql手动调整字段顺序.md"}');export{m as comp,c as data};
