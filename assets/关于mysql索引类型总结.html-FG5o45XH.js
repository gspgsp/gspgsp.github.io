import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function d(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h5 id="关于mysql索引类型总结" tabindex="-1"><a class="header-anchor" href="#关于mysql索引类型总结"><span>关于mysql索引类型总结</span></a></h5><h5 id="这里主要拿innob分析-就目前来看-默认都是用innodb-myisam-现在使用很少-过去总是一直说这个索引-其实呢-按适用类型来分的话-就两种" tabindex="-1"><a class="header-anchor" href="#这里主要拿innob分析-就目前来看-默认都是用innodb-myisam-现在使用很少-过去总是一直说这个索引-其实呢-按适用类型来分的话-就两种"><span>这里主要拿innob分析，就目前来看，默认都是用innodb, myisam 现在使用很少, 过去总是一直说这个索引，其实呢，按适用类型来分的话，就两种:</span></a></h5><ul><li>主键索引(聚簇索引（Clustered Index）)</li><li>辅助索引(辅助索引包含很多: 前缀索引 组合索引 全文索引等)</li></ul><h5 id="主键索引的结构" tabindex="-1"><a class="header-anchor" href="#主键索引的结构"><span>主键索引的结构:</span></a></h5><ul><li>索引数据和表的行数据存放在一起。</li><li>主键索引的叶子节点包含了完整的行数据（数据页）。</li></ul><p><code>如下:</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[ 50 ]                     ← 内部节点（索引键）</span>
<span class="line">/      \\</span>
<span class="line">+----------------+    +---------------------+</span>
<span class="line">| [10, 20, 30]   |    | [50, 70, 90]        |   ← 叶子节点（含整行数据）</span>
<span class="line">+----------------+    +---------------------+</span>
<span class="line">↓                         ↓</span>
<span class="line">+-----------------+       +-----------------+</span>
<span class="line">| PK=10, Row1     |       | PK=50, Row4     |</span>
<span class="line">| name: &#39;A&#39;       |       | name: &#39;D&#39;       |</span>
<span class="line">| age: 20         |       | age: 30         |</span>
<span class="line">+-----------------+       +-----------------+</span>
<span class="line"></span>
<span class="line">        +-----------------+       +-----------------+</span>
<span class="line">        | PK=20, Row2     |       | PK=70, Row5     |</span>
<span class="line">        | name: &#39;B&#39;       |       | name: &#39;E&#39;       |</span>
<span class="line">        | age: 25         |       | age: 22         |</span>
<span class="line">        +-----------------+       +-----------------+</span>
<span class="line"></span>
<span class="line">        +-----------------+       +-----------------+</span>
<span class="line">        | PK=30, Row3     |       | PK=90, Row6     |</span>
<span class="line">        | name: &#39;C&#39;       |       | name: &#39;F&#39;       |</span>
<span class="line">        | age: 28         |       | age: 24         |</span>
<span class="line">        +-----------------+       +-----------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="辅助索引的结构" tabindex="-1"><a class="header-anchor" href="#辅助索引的结构"><span>辅助索引的结构:</span></a></h5><ul><li>辅助索引的叶子节点 <strong>只包含索引列 + 主键列</strong></li><li>并不包含整行数据（与聚簇索引不同！）</li><li>查询时，如果你要获取其他字段，就必须 <strong>“回表”</strong></li></ul><p><code>如下:</code></p><h5 id="✅-场景设定-继续使用原表结构" tabindex="-1"><a class="header-anchor" href="#✅-场景设定-继续使用原表结构"><span>✅ 场景设定（继续使用原表结构）：</span></a></h5><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> users <span class="token punctuation">(</span></span>
<span class="line">    id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span></span>
<span class="line">    name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    age <span class="token keyword">INT</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">INDEX</span> idx_name<span class="token punctuation">(</span>name<span class="token punctuation">)</span>  <span class="token comment">-- 辅助索引！</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>age</th></tr></thead><tbody><tr><td>10</td><td>Alice</td><td>22</td></tr><tr><td>20</td><td>Bob</td><td>25</td></tr><tr><td>30</td><td>Carol</td><td>28</td></tr><tr><td>40</td><td>Dave</td><td>30</td></tr></tbody></table><hr><h5 id="🎯-图一-辅助索引结构图-idx-name" tabindex="-1"><a class="header-anchor" href="#🎯-图一-辅助索引结构图-idx-name"><span>🎯 图一：<strong>辅助索引结构图（idx_name）</strong></span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">                    [ Carol ]</span>
<span class="line">                    /      \\</span>
<span class="line">     +----------------+     +-------------------+</span>
<span class="line">     | Alice | Bob    |     | Carol | Dave      |   ← 叶子节点</span>
<span class="line">     +----------------+     +-------------------+</span>
<span class="line">           ↓                      ↓</span>
<span class="line">     +-------------+       +-------------+</span>
<span class="line">     | name=Alice  |       | name=Carol  |</span>
<span class="line">     | PK=10       |       | PK=30       |</span>
<span class="line">     +-------------+       +-------------+</span>
<span class="line">     | name=Bob    |       | name=Dave   |</span>
<span class="line">     | PK=20       |       | PK=40       |</span>
<span class="line">     +-------------+       +-------------+</span>
<span class="line"></span>
<span class="line">             ←←←←←←←←←←   双向链表连接   →→→→→→→→→→</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="🔁-图二-辅助索引-→-回表过程" tabindex="-1"><a class="header-anchor" href="#🔁-图二-辅助索引-→-回表过程"><span>🔁 图二：<strong>辅助索引 → 回表过程</strong></span></a></h5><p>执行 SQL：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> age <span class="token keyword">FROM</span> users <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;Carol&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行流程图 👇</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Step 1:</span>
<span class="line">     🔎 辅助索引 idx_name 查 name=&#39;Carol&#39;</span>
<span class="line">         ↓</span>
<span class="line">     → 定位到主键值 PK=30</span>
<span class="line"></span>
<span class="line">Step 2:</span>
<span class="line">     🔁 回到主键 B+树（聚簇索引）</span>
<span class="line">         ↓</span>
<span class="line">     → 从聚簇索引叶子节点中根据 PK=30 取出整行数据（包含 age 字段）</span>
<span class="line"></span>
<span class="line">Step 3:</span>
<span class="line">     🎯 返回结果：age=28</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🧠 注意：如果 SELECT 中已经包含 name（即索引字段），那就不用回表。</p><hr><p><code>二者对比, 聚簇索引 vs 辅助索引:</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">| 特性       | 聚簇索引（主键）       | 辅助索引（非主键字段）         |</span>
<span class="line">| -------- | -------------- | ------------------- |</span>
<span class="line">| 叶子节点内容   | ✅ 主键值 + 整行数据   | ✅ 索引字段 + 主键值（无其他字段） |</span>
<span class="line">| 是否需要回表   | ❌ 不需要（行数据在叶子中） | ✅ 需要（除非查询字段只包含索引字段） |</span>
<span class="line">| 查找效率     | 高              | 稍慢（需要两次树查找）         |</span>
<span class="line">| 索引字段可否重复 | 不可重复（主键）       | 可重复（索引允许重复）         |</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="✅-优化建议" tabindex="-1"><a class="header-anchor" href="#✅-优化建议"><span>✅ 优化建议：</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">| 场景                   | 优化方式                       |</span>
<span class="line">| -------------------- | -------------------------- |</span>
<span class="line">| 经常根据 name 查询，并只查 id  | ✅ 使用覆盖索引，避免回表              |</span>
<span class="line">| 经常根据 name 查询 + 查 age | 考虑建立**联合索引** (\`name, age\`) |</span>
<span class="line">| 查询字段包含非索引列           | ✅ 回表不可避免，考虑是否值得            |</span>
<span class="line">| name 很长，性能低          | 可用 \`name(10)\` 前缀索引 + hash  |</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>📣 你还可以用 <code>EXPLAIN FORMAT=JSON</code> 看 MySQL 是否进行了回表操作，字段是：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;using_index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token property">&quot;using_index_condition&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="额外说明" tabindex="-1"><a class="header-anchor" href="#额外说明"><span>额外说明：</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">MyISAM 引擎：主键索引和辅助索引都是普通的B树索引，数据和索引是分开的。</span>
<span class="line">B树索引的含义:</span>
<span class="line">MyISAM 的索引结构是 B树（而不是 B+树），也是一种平衡多路查找树。</span>
<span class="line">索引文件里记录的是索引键值和指向数据文件中对应行的指针（偏移量）。</span>
<span class="line"></span>
<span class="line">InnoDB 引擎：主键索引是聚簇索引，辅助索引的叶子节点存的是主键值。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const c=s(l,[["render",d],["__file","关于mysql索引类型总结.html.vue"]]),r=JSON.parse('{"path":"/content/database/mysql/%E5%85%B3%E4%BA%8Emysql%E7%B4%A2%E5%BC%95%E7%B1%BB%E5%9E%8B%E6%80%BB%E7%BB%93.html","title":"关于mysql索引类型总结","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于mysql索引类型总结","head":[["meta",{"name":"title","content":"关于mysql索引类型总结"}],["meta",{"name":"description","content":"关于mysql索引类型总结"}],["meta",{"name":"keywords","content":"mysql"}],["meta",{"property":"og:title","content":"关于mysql索引类型总结"}],["meta",{"property":"og:description","content":"关于mysql索引类型总结"}]]},"headers":[],"git":{},"filePathRelative":"content/database/mysql/关于mysql索引类型总结.md"}');export{c as comp,r as data};
