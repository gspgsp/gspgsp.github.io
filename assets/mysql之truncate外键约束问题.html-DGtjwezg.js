import{_ as n,c as t,d as s,o as a}from"./app-C7j_h9cy.js";const l={};function i(r,e){return a(),t("div",null,e[0]||(e[0]=[s(`<p>mysql之truncate外键约束问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Cannot truncate a table referenced in a foreign key constraint</span>
<span class="line">解决办法，通过命令行操作:</span>
<span class="line">SET foreign_key_checks = 0;</span>
<span class="line">truncate event_series;</span>
<span class="line">SET foreign_key_checks = 1;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",i],["__file","mysql之truncate外键约束问题.html.vue"]]),m=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8Btruncate%E5%A4%96%E9%94%AE%E7%BA%A6%E6%9D%9F%E9%97%AE%E9%A2%98.html","title":"mysql之truncate外键约束问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之truncate外键约束问题","description":"mysql之truncate外键约束问题"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之truncate外键约束问题.md"}');export{d as comp,m as data};
