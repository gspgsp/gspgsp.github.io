import{_ as e,o as i,c as n,g as s}from"./app.b04686bd.js";const l={},d=s(`<p>mysql\u4E4Bexplain\u67E5\u770Bsql\u6267\u884C\u4FE1\u606F: \u4E3B\u8981\u662F\u6BCF\u6B21\u505Asql\u4F18\u5316\u7684\u65F6\u5019\uFF0C\u603B\u4F1A\u67E5\u770Bexplain\u53C2\u6570\uFF0C\u6240\u4EE5\u8FD8\u662F\u8BB0\u5F55\u4E00\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u4E0Bsql:
explain SELECT \`id\`,\`name\`,\`cover_image\`,\`price\`,\`score\`,\`remark\`,\`brand\`,\`subclass\`,\`category_one\`,\`category_two\` FROM \`products\` WHERE (kind = &#39;\u5BB6\u5C45\u5BB6\u5177&#39; and (name like &#39;%\u4F53\u9A8C%&#39; or detail like &#39;%\u4F53\u9A8C%&#39;)) AND (EXISTS(SELECT id FROM product_attributes WHERE \`product_attributes\`.\`product_id\`  = \`products\`.\`id\` AND \`product_attributes\`.\`attribute_value\` like &#39;%\u9632\u6ED1%&#39;)) LIMIT 10;

id   | select_type     | table           | partitions    | type | possible_keys |  key     | key_len | ref  | rows | filtered | Extra
1	PRIMARY	            products		                   ref	    index_kind	 index_kind 	768	  const	  1202	  20.99	    Using where
2	DEPENDENT SUBQUERY  product_attributes		           ALL					                              37329	  1.11	    Using where

\u6211\u5728kind\u4E0A\u52A0\u4E86\u7D22\u5F15 index_kind\uFF0C\u73B0\u5728\u7684type \u53D8\u4E3Aref\uFF0C\u6CA1\u52A0\u4E4B\u524D\u662FALL\uFF0Cfiltered \u53D8\u4E3A 20.99\uFF0C\u6240\u4EE5\u67E5\u8BE2\u6548\u7387\u8FD8\u662F\u63D0\u9AD8\u4E86\u4E0D\u5C11\u7684

\u76F8\u5173\u53C2\u6570\u89E3\u91CA\uFF1A
id 	            SELECT\u8BC6\u522B\u7B26\u3002\u8FD9\u662FSELECT\u7684\u67E5\u8BE2\u5E8F\u5217\u53F7

select_type 	SELECT\u7C7B\u578B,\u53EF\u4EE5\u4E3A\u4EE5\u4E0B\u4EFB\u4F55\u4E00\u79CD:
                SIMPLE:\u7B80\u5355SELECT(\u4E0D\u4F7F\u7528UNION\u6216\u5B50\u67E5\u8BE2)
                PRIMARY:\u4E3B\u67E5\u8BE2\uFF0C\u5373\u6700\u5916\u9762\u7684\u67E5\u8BE2
                UNION:UNION\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u6216\u540E\u9762\u7684\u67E5\u8BE2\u8BED\u53E5
                DEPENDENT UNION:UNION\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u6216\u540E\u9762\u7684SELECT\u8BED\u53E5,\u53D6\u51B3\u4E8E\u5916\u9762\u7684\u67E5\u8BE2
                UNION RESULT:UNION \u7684\u7ED3\u679C
                SUBQUERY:\u5B50\u67E5\u8BE2\u4E2D\u7684\u7B2C\u4E00\u4E2ASELECT
                DEPENDENT SUBQUERY:\u5B50\u67E5\u8BE2\u4E2D\u7684\u7B2C\u4E00\u4E2ASELECT,\u53D6\u51B3\u4E8E\u5916\u9762\u7684\u67E5\u8BE2
                DERIVED:\u5BFC\u51FA\u8868\u7684SELECT(FROM\u5B50\u53E5\u7684\u5B50\u67E5\u8BE2)

table 	        \u8F93\u51FA\u7684\u884C\u6240\u5F15\u7528\u7684\u8868

type 	        \u8054\u63A5\u7C7B\u578B\u3002\u4E0B\u9762\u7ED9\u51FA\u5404\u79CD\u8054\u63A5\u7C7B\u578B,\u6309\u7167\u4ECE\u6700\u4F73\u7C7B\u578B\u5230\u6700\u574F\u7C7B\u578B\uFF08\u7531\u4E0A\u5230\u4E0B\u6027\u80FD\u9010\u6E10\u53D8\u5DEE\uFF09\u8FDB\u884C\u6392\u5E8F:
                system:\u8868\u4EC5\u6709\u4E00\u884C(=\u7CFB\u7EDF\u8868)\u3002\u8FD9\u662Fconst\u8054\u63A5\u7C7B\u578B\u7684\u4E00\u4E2A\u7279\u4F8B\u3002
                const:\u8868\u6700\u591A\u6709\u4E00\u4E2A\u5339\u914D\u884C,\u5B83\u5C06\u5728\u67E5\u8BE2\u5F00\u59CB\u65F6\u88AB\u8BFB\u53D6\u3002\u56E0\u4E3A\u4EC5\u6709\u4E00\u884C,\u5728\u8FD9\u884C\u7684\u5217\u503C\u53EF\u88AB\u4F18\u5316\u5668\u5269\u4F59\u90E8\u5206\u8BA4\u4E3A\u662F\u5E38\u6570\u3002const\u8868\u5F88\u5FEB,\u56E0\u4E3A\u5B83\u4EEC\u53EA\u8BFB\u53D6\u4E00\u6B21!
                eq_ref:\u7C7B\u4F3Cref\uFF0C\u533A\u522B\u5C31\u5728\u4F7F\u7528\u7684\u7D22\u5F15\u662F\u552F\u4E00\u7D22\u5F15\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u6765\u81EA\u4E8E\u524D\u9762\u7684\u8868\u7684\u884C\u7EC4\u5408,\u4ECE\u8BE5\u8868\u4E2D\u8BFB\u53D6\u4E00\u884C\uFF0C\u591A\u8868\u8FDE\u63A5\u4E2D\u4F7F\u7528unique index\u6216\u8005primary key\u4F5C\u4E3A\u5173\u8054\u6761\u4EF6\u3002\u8FD9\u53EF\u80FD\u662F\u6700\u597D\u7684\u8054\u63A5\u7C7B\u578B,\u9664\u4E86const\u7C7B\u578B\u3002
                ref:\u5BF9\u4E8E\u6BCF\u4E2A\u6765\u81EA\u4E8E\u524D\u9762\u7684\u8868\u7684\u884C\u7EC4\u5408,\u6240\u6709\u6709\u5339\u914D\u7D22\u5F15\u503C\u7684\u884C\u5C06\u4ECE\u8FD9\u5F20\u8868\u4E2D\u8BFB\u53D6(\u4F7F\u7528\u975E\u552F\u4E00\u7D22\u5F15\u626B\u63CF\u6216\u552F\u4E00\u7D22\u5F15\u7684\u524D\u7F00\u626B\u63CF\uFF0C\u8FD4\u56DE\u5339\u914D\u67D0\u4E2A\u5355\u72EC\u503C\u7684\u8BB0\u5F55\u884C)\u3002
                ref_or_null:\u8BE5\u8054\u63A5\u7C7B\u578B\u5982\u540Cref,\u4F46\u662F\u6DFB\u52A0\u4E86MySQL\u53EF\u4EE5\u4E13\u95E8\u641C\u7D22\u5305\u542BNULL\u503C\u7684\u884C\u3002
                index_merge:\u8BE5\u8054\u63A5\u7C7B\u578B\u8868\u793A\u4F7F\u7528\u4E86\u7D22\u5F15\u5408\u5E76\u4F18\u5316\u65B9\u6CD5\u3002
                unique_subquery:\u8BE5\u7C7B\u578B\u66FF\u6362\u4E86\u4E0B\u9762\u5F62\u5F0F\u7684IN\u5B50\u67E5\u8BE2\u7684ref: value IN (SELECT primary_key FROM single_table WHERE some_expr) unique_subquery\u662F\u4E00\u4E2A\u7D22\u5F15\u67E5\u627E\u51FD\u6570,\u53EF\u4EE5\u5B8C\u5168\u66FF\u6362\u5B50\u67E5\u8BE2,\u6548\u7387\u66F4\u9AD8\u3002
                index_subquery:\u8BE5\u8054\u63A5\u7C7B\u578B\u7C7B\u4F3C\u4E8Eunique_subquery\u3002\u53EF\u4EE5\u66FF\u6362IN\u5B50\u67E5\u8BE2,\u4F46\u53EA\u9002\u5408\u4E0B\u5217\u5F62\u5F0F\u7684\u5B50\u67E5\u8BE2\u4E2D\u7684\u975E\u552F\u4E00\u7D22\u5F15: value IN (SELECT key_column FROM single_table WHERE some_expr)
                range:\u53EA\u68C0\u7D22\u7ED9\u5B9A\u8303\u56F4\u7684\u884C,\u4F7F\u7528\u4E00\u4E2A\u7D22\u5F15\u6765\u9009\u62E9\u884C\uFF0C\u5E38\u89C1\u4E8E&lt;\uFF0C&lt;=\uFF0C&gt;\uFF0C&gt;=\uFF0Cbetween\u7B49\u64CD\u4F5C\u7B26\u3002
                index:\u8BE5\u8054\u63A5\u7C7B\u578B\u4E0EALL\u76F8\u540C,\u9664\u4E86\u53EA\u6709\u7D22\u5F15\u6811\u88AB\u626B\u63CF\u3002\u8FD9\u901A\u5E38\u6BD4ALL\u5FEB,\u56E0\u4E3A\u7D22\u5F15\u6587\u4EF6\u901A\u5E38\u6BD4\u6570\u636E\u6587\u4EF6\u5C0F\u3002
                ALL:\u5BF9\u4E8E\u6BCF\u4E2A\u6765\u81EA\u4E8E\u5148\u524D\u7684\u8868\u7684\u884C\u7EC4\u5408,\u8FDB\u884C\u5B8C\u6574\u7684\u8868\u626B\u63CF\uFF0C\u5168\u8868\u626B\u63CF\u3002
                fulltext:\u5168\u6587\u7D22\u5F15

possible_keys 	\u6307\u51FAMySQL\u80FD\u4F7F\u7528\u54EA\u4E2A\u7D22\u5F15\u5728\u8BE5\u8868\u4E2D\u627E\u5230\u884C\uFF0C\u8868\u793A\u67E5\u8BE2\u65F6\u53EF\u80FD\u4F7F\u7528\u7684\u7D22\u5F15\u3002

key 	        \u663E\u793AMySQL\u5B9E\u9645\u51B3\u5B9A\u4F7F\u7528\u7684\u952E(\u7D22\u5F15)\u3002\u5982\u679C\u6CA1\u6709\u9009\u62E9\u7D22\u5F15,\u952E\u662FNULL\u3002

key_len 	    \u663E\u793AMySQL\u51B3\u5B9A\u4F7F\u7528\u7684\u952E\u957F\u5EA6\u3002\u5982\u679C\u952E\u662FNULL,\u5219\u957F\u5EA6\u4E3ANULL\u3002

ref 	        \u663E\u793A\u4F7F\u7528\u54EA\u4E2A\u5217\u6216\u5E38\u6570\u4E0Ekey\u4E00\u8D77\u4ECE\u8868\u4E2D\u9009\u62E9\u884C\u3002

rows 	        \u663E\u793AMySQL\u8BA4\u4E3A\u5B83\u6267\u884C\u67E5\u8BE2\u65F6\u5FC5\u987B\u68C0\u67E5\u7684\u884C\u6570\u3002\u591A\u884C\u4E4B\u95F4\u7684\u6570\u636E\u76F8\u4E58\u53EF\u4EE5\u4F30\u7B97\u8981\u5904\u7406\u7684\u884C\u6570\u3002

filtered 	    \u663E\u793A\u4E86\u901A\u8FC7\u6761\u4EF6\u8FC7\u6EE4\u51FA\u7684\u884C\u6570\u7684\u767E\u5206\u6BD4\u4F30\u8BA1\u503C\u3002

Extra 	        \u8BE5\u5217\u5305\u542BMySQL\u89E3\u51B3\u67E5\u8BE2\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1A
                Distinct:MySQL\u53D1\u73B0\u7B2C1\u4E2A\u5339\u914D\u884C\u540E,\u505C\u6B62\u4E3A\u5F53\u524D\u7684\u884C\u7EC4\u5408\u641C\u7D22\u66F4\u591A\u7684\u884C\u3002
                Not exists:MySQL\u80FD\u591F\u5BF9\u67E5\u8BE2\u8FDB\u884CLEFT JOIN\u4F18\u5316,\u53D1\u73B01\u4E2A\u5339\u914DLEFT JOIN\u6807\u51C6\u7684\u884C\u540E,\u4E0D\u518D\u4E3A\u524D\u9762\u7684\u7684\u884C\u7EC4\u5408\u5728\u8BE5\u8868\u5185\u68C0\u67E5\u66F4\u591A\u7684\u884C\u3002
                range checked for each record (index map: #):MySQL\u6CA1\u6709\u53D1\u73B0\u597D\u7684\u53EF\u4EE5\u4F7F\u7528\u7684\u7D22\u5F15,\u4F46\u53D1\u73B0\u5982\u679C\u6765\u81EA\u524D\u9762\u7684\u8868\u7684\u5217\u503C\u5DF2\u77E5,\u53EF\u80FD\u90E8\u5206\u7D22\u5F15\u53EF\u4EE5\u4F7F\u7528\u3002
                Using filesort:MySQL\u9700\u8981\u989D\u5916\u7684\u4E00\u6B21\u4F20\u9012,\u4EE5\u627E\u51FA\u5982\u4F55\u6309\u6392\u5E8F\u987A\u5E8F\u68C0\u7D22\u884C\u3002
                Using index:\u4ECE\u53EA\u4F7F\u7528\u7D22\u5F15\u6811\u4E2D\u7684\u4FE1\u606F\u800C\u4E0D\u9700\u8981\u8FDB\u4E00\u6B65\u641C\u7D22\u8BFB\u53D6\u5B9E\u9645\u7684\u884C\u6765\u68C0\u7D22\u8868\u4E2D\u7684\u5217\u4FE1\u606F\u3002
                Using temporary:\u4E3A\u4E86\u89E3\u51B3\u67E5\u8BE2,MySQL\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u8868\u6765\u5BB9\u7EB3\u7ED3\u679C\u3002
                Using where:WHERE \u5B50\u53E5\u7528\u4E8E\u9650\u5236\u54EA\u4E00\u4E2A\u884C\u5339\u914D\u4E0B\u4E00\u4E2A\u8868\u6216\u53D1\u9001\u5230\u5BA2\u6237\u3002
                Using sort_union(...), Using union(...), Using intersect(...):\u8FD9\u4E9B\u51FD\u6570\u8BF4\u660E\u5982\u4F55\u4E3Aindex_merge\u8054\u63A5\u7C7B\u578B\u5408\u5E76\u7D22\u5F15\u626B\u63CF\u3002
                Using index for group-by:\u7C7B\u4F3C\u4E8E\u8BBF\u95EE\u8868\u7684Using index\u65B9\u5F0F,Using index for group-by\u8868\u793AMySQL\u53D1\u73B0\u4E86\u4E00\u4E2A\u7D22\u5F15,\u53EF\u4EE5\u7528\u6765\u67E5 \u8BE2GROUP BY\u6216DISTINCT\u67E5\u8BE2\u7684\u6240\u6709\u5217,\u800C\u4E0D\u8981\u989D\u5916\u641C\u7D22\u786C\u76D8\u8BBF\u95EE\u5B9E\u9645\u7684\u8868\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function v(t,a){return i(),n("div",null,r)}var c=e(l,[["render",v],["__file","mysql\u4E4Bexplain\u67E5\u770Bsql\u6267\u884C\u4FE1\u606F.html.vue"]]);export{c as default};
