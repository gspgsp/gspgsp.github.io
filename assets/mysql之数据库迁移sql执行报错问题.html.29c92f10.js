import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<p>mysql\u4E4B\u6570\u636E\u5E93\u8FC1\u79FBsql\u6267\u884C\u62A5\u9519\u95EE\u9898\uFF0C\u6709\u65F6\u5019\u9700\u8981\u6267\u884C\u5BFC\u51FA\u7684sql\u6587\u4EF6\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u62A5\u4E0B\u9762\u7684\u9519\u8BEF:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[ERR] 1118 - Row size too large (&gt; 8126). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89E3\u51B3\u529E\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5728mysql\u7684\u914D\u7F6E\u6587\u4EF6\u4E0B\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF0C\u518D\u91CD\u542F
innodb_file_per_table=1

innodb_file_format=Barracuda

innodb_file_format_check = ON

innodb_log_file_size = 512M

innodb_strict_mode = 0      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[d];function r(t,_){return n(),i("div",null,a)}var o=e(l,[["render",r],["__file","mysql\u4E4B\u6570\u636E\u5E93\u8FC1\u79FBsql\u6267\u884C\u62A5\u9519\u95EE\u9898.html.vue"]]);export{o as default};
