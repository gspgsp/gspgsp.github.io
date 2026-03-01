import{_ as n,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,e){return i(),s("div",null,e[0]||(e[0]=[a(`<p>gorm可以设置的关联关系tag如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">many2many                             指定连接表</span>
<span class="line">foreignkey                            设置外键 //这个用的比较多,其实是给被关联表设置外键 或者 通过这个外键进行关联查询，默认是 主表模型_id。比如：user表 user_profile表，就需要将user表的id和user_profile表的user_id关联</span>
<span class="line">references                            指定引用的表中的字段 //这个用的也比较多，其实是给主表设置和被关联表外键相关的一个字段，默认是id</span>
<span class="line">association_foreignKey                设置当前表中关联的外键字段//</span>
<span class="line">polymorphic                           指定多态类型</span>
<span class="line">polymorphic_value                     指定多态值</span>
<span class="line">jointable_foreignkey                  指定连接表的外键</span>
<span class="line">association_jointable_foreignkey      指定连接表的关联外键</span>
<span class="line">save_associations                     是否自动完成 save 的相关操作</span>
<span class="line">association_autoupdate                是否自动完成 update 的相关操作</span>
<span class="line">association_autocreate                是否自动完成 create 的相关操作</span>
<span class="line">association_save_reference            是否自动完成引用的 save 的相关操作</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Tag	Description</span>
<span class="line">foreignKey	Specifies column name of the current model that is used as a foreign key to the join table</span>
<span class="line">references	Specifies column name of the reference’s table that is mapped to the foreign key of the join table</span>
<span class="line">polymorphic	Specifies polymorphic type such as model name</span>
<span class="line">polymorphicValue	Specifies polymorphic value, default table name</span>
<span class="line">many2many	Specifies join table name</span>
<span class="line">joinForeignKey	Specifies foreign key column name of join table that maps to the current table</span>
<span class="line">joinReferences	Specifies foreign key column name of join table that maps to the reference’s table</span>
<span class="line">constraint	Relations constraint, e.g: OnUpdate,OnDelete</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=n(l,[["render",t],["__file","gorm可以设置的关联关系tag如下.html.vue"]]),p=JSON.parse('{"path":"/content/go/base/gorm%E5%8F%AF%E4%BB%A5%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BBtag%E5%A6%82%E4%B8%8B.html","title":"gorm可以设置的关联关系tag如下","lang":"en-US","frontmatter":{"sidebar":false,"title":"gorm可以设置的关联关系tag如下","description":"gorm可以设置的关联关系tag如下"},"headers":[],"git":{},"filePathRelative":"content/go/base/gorm可以设置的关联关系tag如下.md"}');export{o as comp,p as data};
