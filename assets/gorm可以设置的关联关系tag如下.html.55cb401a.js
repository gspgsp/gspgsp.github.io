import{_ as e,o as i,c as n,g as s}from"./app.6e4bf74b.js";const a={},l=s(`<p>gorm\u53EF\u4EE5\u8BBE\u7F6E\u7684\u5173\u8054\u5173\u7CFBtag\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
many2many                             \u6307\u5B9A\u8FDE\u63A5\u8868
foreignkey                            \u8BBE\u7F6E\u5916\u952E //\u8FD9\u4E2A\u7528\u7684\u6BD4\u8F83\u591A,\u5176\u5B9E\u662F\u7ED9\u88AB\u5173\u8054\u8868\u8BBE\u7F6E\u5916\u952E \u6216\u8005 \u901A\u8FC7\u8FD9\u4E2A\u5916\u952E\u8FDB\u884C\u5173\u8054\u67E5\u8BE2\uFF0C\u9ED8\u8BA4\u662F \u4E3B\u8868\u6A21\u578B_id\u3002\u6BD4\u5982\uFF1Auser\u8868 user_profile\u8868\uFF0C\u5C31\u9700\u8981\u5C06user\u8868\u7684id\u548Cuser_profile\u8868\u7684user_id\u5173\u8054
references                            \u6307\u5B9A\u5F15\u7528\u7684\u8868\u4E2D\u7684\u5B57\u6BB5 //\u8FD9\u4E2A\u7528\u7684\u4E5F\u6BD4\u8F83\u591A\uFF0C\u5176\u5B9E\u662F\u7ED9\u4E3B\u8868\u8BBE\u7F6E\u548C\u88AB\u5173\u8054\u8868\u5916\u952E\u76F8\u5173\u7684\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u9ED8\u8BA4\u662Fid
association_foreignKey                \u8BBE\u7F6E\u5F53\u524D\u8868\u4E2D\u5173\u8054\u7684\u5916\u952E\u5B57\u6BB5//
polymorphic                           \u6307\u5B9A\u591A\u6001\u7C7B\u578B
polymorphic_value                     \u6307\u5B9A\u591A\u6001\u503C
jointable_foreignkey                  \u6307\u5B9A\u8FDE\u63A5\u8868\u7684\u5916\u952E
association_jointable_foreignkey      \u6307\u5B9A\u8FDE\u63A5\u8868\u7684\u5173\u8054\u5916\u952E
save_associations                     \u662F\u5426\u81EA\u52A8\u5B8C\u6210 save \u7684\u76F8\u5173\u64CD\u4F5C
association_autoupdate                \u662F\u5426\u81EA\u52A8\u5B8C\u6210 update \u7684\u76F8\u5173\u64CD\u4F5C
association_autocreate                \u662F\u5426\u81EA\u52A8\u5B8C\u6210 create \u7684\u76F8\u5173\u64CD\u4F5C
association_save_reference            \u662F\u5426\u81EA\u52A8\u5B8C\u6210\u5F15\u7528\u7684 save \u7684\u76F8\u5173\u64CD\u4F5C


Tag	Description
foreignKey	Specifies column name of the current model that is used as a foreign key to the join table
references	Specifies column name of the reference\u2019s table that is mapped to the foreign key of the join table
polymorphic	Specifies polymorphic type such as model name
polymorphicValue	Specifies polymorphic value, default table name
many2many	Specifies join table name
joinForeignKey	Specifies foreign key column name of join table that maps to the current table
joinReferences	Specifies foreign key column name of join table that maps to the reference\u2019s table
constraint	Relations constraint, e.g: OnUpdate,OnDelete

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function r(o,c){return i(),n("div",null,t)}var m=e(a,[["render",r],["__file","gorm\u53EF\u4EE5\u8BBE\u7F6E\u7684\u5173\u8054\u5173\u7CFBtag\u5982\u4E0B.html.vue"]]);export{m as default};
