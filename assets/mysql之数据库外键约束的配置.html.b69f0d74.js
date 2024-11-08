import{_ as e,o as n,c as i,g as s}from"./app.dfcb50a9.js";const l={},d=s(`<p>mysql\u4E4B\u6570\u636E\u5E93\u5916\u952E\u7EA6\u675F\u7684\u914D\u7F6E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5173\u4E8E\u6570\u636E\u5E93\u5916\u952E\u7EA6\u675F\u7684\u914D\u7F6E\uFF0C\u5E38\u89C1\u7684\u4F1A\u7ED9 onDelete \u914D\u7F6E\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u6BD4\u5982: onDelete: &#39;CASCADE&#39;

CASCADE:
\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u5916\u952E\uFF08foreign key\uFF09\u662F\u6307\u4E00\u4E2A\u8868\u4E2D\u7684\u5B57\u6BB5\uFF0C\u5B83\u5173\u8054\u5230\u53E6\u4E00\u4E2A\u8868\u4E2D\u7684\u4E3B\u952E\uFF08primary key\uFF09\u3002\u5F53\u5728\u4E00\u4E2A\u8868\u4E2D\u5B9A\u4E49\u4E86\u5916\u952E\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u4E86 onDelete: &#39;CASCADE&#39;\uFF0C\u8FD9\u610F\u5473\u7740\u5F53\u53C2\u8003\u7684\u884C\uFF08\u88AB\u5916\u952E\u5F15\u7528\u7684\u884C\uFF09\u88AB\u5220\u9664\u65F6\uFF0C\u5C06\u4F1A\u81EA\u52A8\u5220\u9664\u5305\u542B\u8BE5\u5916\u952E\u7684\u884C\uFF0C\u4EE5\u7EF4\u6301\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\u3002
  
\u5982\u679C\u4E0D\u60F3\u5728\u5220\u9664\u5173\u8054\u7684\u884C\u65F6\u81EA\u52A8\u5220\u9664\u5305\u542B\u5916\u952E\u7684\u884C,\u53EF\u4EE5\u6309\u4E0B\u9762\u7684\u914D\u7F6E:
  
RESTRICT:
\u5F53\u88AB\u5F15\u7528\u7684\u884C\u88AB\u5220\u9664\u65F6\uFF0C\u4F1A\u963B\u6B62\u5220\u9664\u5305\u542B\u5916\u952E\u7684\u884C\uFF0C\u9664\u975E\u6CA1\u6709\u4EFB\u4F55\u5F15\u7528\u8BE5\u884C\u7684\u884C\u5B58\u5728\u3002
  
NO ACTION: 
\u7C7B\u4F3C\u4E8E RESTRICT\uFF0C\u5F53\u88AB\u5F15\u7528\u7684\u884C\u88AB\u5220\u9664\u65F6\uFF0C\u4E0D\u4F1A\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u9664\u975E\u6CA1\u6709\u4EFB\u4F55\u5F15\u7528\u8BE5\u884C\u7684\u884C\u5B58\u5728\u3002
  
SET NULL: 
\u5F53\u88AB\u5F15\u7528\u7684\u884C\u88AB\u5220\u9664\u65F6\uFF0C\u5916\u952E\u5217\u5C06\u88AB\u8BBE\u7F6E\u4E3A NULL \u503C\u3002
  
SET DEFAULT:
\u5F53\u88AB\u5F15\u7528\u7684\u884C\u88AB\u5220\u9664\u65F6\uFF0C\u5916\u952E\u5217\u5C06\u88AB\u8BBE\u7F6E\u4E3A\u5176\u9ED8\u8BA4\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql8\u5220\u9664\u6570\u636E\uFF0C\u7531\u4E8E\u5916\u952E\u7EA6\u675F\u7684\u95EE\u9898\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cannot delete or update a parent row: a foreign key constraint fails (sciforum_dev.event_person_affiliations, CONSTRAINT FK_296B1A6AA7EE857A FOREIGN KEY (event_person_id) REFERENCES event_persons (id))

SET FOREIGN_KEY_CHECKS = 0;
DELETE FROM event_persons WHERE session_id IS NULL;
SET FOREIGN_KEY_CHECKS = 1;

\u53EF\u4EE5\u4E34\u65F6\u8BBE\u7F6E\u4E0D\u68C0\u67E5\u5916\u952E\u7EA6\u675F,\u5220\u9664\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[d];function a(r,c){return n(),i("div",null,v)}var m=e(l,[["render",a],["__file","mysql\u4E4B\u6570\u636E\u5E93\u5916\u952E\u7EA6\u675F\u7684\u914D\u7F6E.html.vue"]]);export{m as default};
