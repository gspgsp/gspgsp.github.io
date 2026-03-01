import{_ as e,c as n,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(d,s){return a(),n("div",null,s[0]||(s[0]=[l(`<p>mysql之数据库迁移sql执行报错问题，有时候需要执行导出的sql文件，但是可能会报下面的错误:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[ERR] 1118 - Row size too large (&gt; 8126). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解决办法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//在mysql的配置文件下添加如下配置，再重启</span>
<span class="line">innodb_file_per_table=1</span>
<span class="line"></span>
<span class="line">innodb_file_format=Barracuda</span>
<span class="line"></span>
<span class="line">innodb_file_format_check = ON</span>
<span class="line"></span>
<span class="line">innodb_log_file_size = 512M</span>
<span class="line"></span>
<span class="line">innodb_strict_mode = 0      </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const c=e(i,[["render",t],["__file","mysql之数据库迁移sql执行报错问题.html.vue"]]),m=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%81%E7%A7%BBsql%E6%89%A7%E8%A1%8C%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98.html","title":"mysql之数据库迁移sql执行报错问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之数据库迁移sql执行报错问题","description":"mysql之数据库迁移sql执行报错问题"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之数据库迁移sql执行报错问题.md"}');export{c as comp,m as data};
