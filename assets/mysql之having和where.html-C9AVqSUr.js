import{_ as s,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function r(t,e){return i(),n("div",null,e[0]||(e[0]=[a(`<p>mysql之having和where小区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">结论：having是从前筛选的字段再筛选，而where是从数据表中的字段直接进行的筛选的</span>
<span class="line"></span>
<span class="line">比如我有   </span>
<span class="line"></span>
<span class="line">select id, usrer_id,name,age from d_users where age &gt; 10;</span>
<span class="line">select id, usrer_id,name,age from d_users having age &gt; 10;</span>
<span class="line">  </span>
<span class="line">上面两个是等效的，但是如果我把第二个改为 select id, usrer_id,name from d_users having age &gt; 10; 就会报错，原因就是上面说的结论</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(l,[["render",r],["__file","mysql之having和where.html.vue"]]),m=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8Bhaving%E5%92%8Cwhere.html","title":"mysql之having和where","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之having和where","description":"mysql之having和where"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之having和where.md"}');export{c as comp,m as data};
