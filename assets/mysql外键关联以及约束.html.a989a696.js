import{_ as e,o as n,c as i,g as d}from"./app.6e4bf74b.js";const s={},l=d(`<p>MySQL\u6709\u4E24\u79CD\u5E38\u7528\u7684\u5F15\u64CE\u7C7B\u578B\uFF1AMyISAM\u548CInnoDB\u3002\u76EE\u524D\u53EA\u6709InnoDB\u5F15\u64CE\u7C7B\u578B\u652F\u6301\u5916\u952E\u7EA6\u675F\u3002InnoDB\u4E2D\u5916\u952E\u7EA6\u675F\u5B9A\u4E49\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER TABLE tbl_name
    ADD [CONSTRAINT [symbol]] FOREIGN KEY
    [index_name] (index_col_name, ...)
    REFERENCES tbl_name (index_col_name,...)
    [ON DELETE reference_option]
    [ON UPDATE reference_option]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0foreignKey:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER TABLE \`user_resource\` CONSTRAINT \`FKEEAF1E02D82D57F9\` FOREIGN KEY (\`user_Id\`) REFERENCES \`user\` (\`Id\`)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5411\u4E0A\u9762\u8FD9\u6837\u6CA1\u6709\u663E\u5F0F\u6307\u5B9Areference_option\uFF0C\u9ED8\u8BA4\u5C31\u662F NO ACTION</p><p>\u4E5F\u53EF\u4EE5\u50CF\u4E0B\u9762\u8FD9\u6837\u663E\u5F0F\u6307\u5B9Areference_option\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER TABLE user_resource ADD CONSTRAINT FK_8A4A6B07591CC992 FOREIGN KEY (course_id) REFERENCES user (id) ON DELETE CASCADE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u51E0\u4E2Areference_option\u7684\u533A\u522B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CASCADE
\u5728\u7236\u8868\u4E0Aupdate/delete\u8BB0\u5F55\u65F6\uFF0C\u540C\u6B65update/delete\u6389\u5B50\u8868\u7684\u5339\u914D\u8BB0\u5F55 \uFF08\u786C\u5220\u9664\u7528\u7684\u6BD4\u8F83\u591A\uFF09

SET NULL
\u5728\u7236\u8868\u4E0Aupdate/delete\u8BB0\u5F55\u65F6\uFF0C\u5C06\u5B50\u8868\u4E0A\u5339\u914D\u8BB0\u5F55\u7684\u5217\u8BBE\u4E3Anull (\u8981\u6CE8\u610F\u5B50\u8868\u7684\u5916\u952E\u5217\u4E0D\u80FD\u4E3Anot null)  

NO ACTION
\u5982\u679C\u5B50\u8868\u4E2D\u6709\u5339\u914D\u7684\u8BB0\u5F55,\u5219\u4E0D\u5141\u8BB8\u5BF9\u7236\u8868\u5BF9\u5E94\u5019\u9009\u952E\u8FDB\u884Cupdate/delete\u64CD\u4F5C  

RESTRICT
\u540Cno action, \u90FD\u662F\u7ACB\u5373\u68C0\u67E5\u5916\u952E\u7EA6\u675F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[l];function r(t,c){return n(),i("div",null,a)}var v=e(s,[["render",r],["__file","mysql\u5916\u952E\u5173\u8054\u4EE5\u53CA\u7EA6\u675F.html.vue"]]);export{v as default};
