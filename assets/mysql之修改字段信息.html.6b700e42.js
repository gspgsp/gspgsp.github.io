import{_ as e,o as i,c as n,g as l}from"./app.d66d8774.js";const s={},a=l(`<ul><li>\u4FEE\u6539\u5B57\u6BB5\u7C7B\u578B<br> \u8BED\u6CD5:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER TABLE \u8868\u540D MODIFY [COLUMN] \u5B57\u6BB5\u540D \u65B0\u6570\u636E\u7C7B\u578B \u65B0\u7C7B\u578B\u957F\u5EA6 \u65B0\u9ED8\u8BA4\u503C \u65B0\u6CE8\u91CA;  --- COLUMN \u5173\u952E\u5B57\u53EF\u4EE5\u5FFD\u7565\u4E0D\u5C51

\u4F8B\u5982:
alter table d_slides modify column created_at TIMESTAMP DEFAULT NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4FEE\u6539\u5B57\u6BB5\u540D\u79F0<br> \u8BED\u6CD5:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER TABLE \u8868\u540D CHANGE [COLUMN] \u65E7\u5B57\u6BB5\u540D \u65B0\u5B57\u6BB5\u540D \u65B0\u6570\u636E\u7C7B\u578B;

\u4F8B\u5982:
alter table d_users change nickname nick_name varchar(100) DEFAULT NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[a];function r(t,c){return i(),n("div",null,d)}var v=e(s,[["render",r],["__file","mysql\u4E4B\u4FEE\u6539\u5B57\u6BB5\u4FE1\u606F.html.vue"]]);export{v as default};
