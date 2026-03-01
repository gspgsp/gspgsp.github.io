import{_ as n,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function d(p,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>mysql之optimize表:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">用法： optimize table &#39;表名&#39;</span>
<span class="line"></span>
<span class="line">show index from d_japan_products;</span>
<span class="line"></span>
<span class="line">索引信息中的列的信息说明：</span>
<span class="line">Table :表的名称。</span>
<span class="line">Non_unique:如果索引不能包括重复词，则为0。如果可以，则为1。</span>
<span class="line">Key_name:索引的名称。</span>
<span class="line">Seq_in_index:索引中的列序列号，从1开始。</span>
<span class="line">Column_name:列名称。</span>
<span class="line">Collation:列以什么方式存储在索引中。在MySQLSHOW INDEX语法中，有值’A’（升序）或NULL（无分类）。</span>
<span class="line">Cardinality:索引中唯一值的数目的估计值。通过运行ANALYZE TABLE或myisamchk -a可以更新。基数根据被存储为整数的统计数据来计数，所以即使对于小型表，该值也没有必要是精确的。基数越大，当进行联合时，MySQL使用该索引的机会就越大。</span>
<span class="line">Sub_part:如果列只是被部分地编入索引，则为被编入索引的字符的数目。如果整列被编入索引，则为NULL。</span>
<span class="line">Packed:指示关键字如何被压缩。如果没有被压缩，则为NULL。</span>
<span class="line">Null:如果列含有NULL，则含有YES。如果没有，则为空。</span>
<span class="line">Index_type：存储索引数据结构方法（BTREE, FULLTEXT, HASH, RTREE）</span>
<span class="line"></span>
<span class="line">作用： 当你删除数据时，mysql并不会回收已删除的数据所占据的存储空间(包括数据文件和索引文件)，以及索引位。而是空在那里，而是等待新的数据来弥补这个空缺，这样就有一个缺少，如果一时半会，没有数据来填</span>
<span class="line">补这个空缺，那这样就太浪费资源了。所以对于写比较频繁的表，要定期进行optimize，一个月一次，看实际情况而定了。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=n(l,[["render",d],["__file","mysql之optimize表.html.vue"]]),m=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8Boptimize%E8%A1%A8.html","title":"mysql之optimize表","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之optimize表","description":"mysql之optimize表"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之optimize表.md"}');export{c as comp,m as data};
