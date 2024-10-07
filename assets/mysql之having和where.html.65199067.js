import{_ as e,o as i,c as n,g as s}from"./app.d66d8774.js";const r={},a=s(`<p>mysql\u4E4Bhaving\u548Cwhere\u5C0F\u533A\u522B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7ED3\u8BBA\uFF1Ahaving\u662F\u4ECE\u524D\u7B5B\u9009\u7684\u5B57\u6BB5\u518D\u7B5B\u9009\uFF0C\u800Cwhere\u662F\u4ECE\u6570\u636E\u8868\u4E2D\u7684\u5B57\u6BB5\u76F4\u63A5\u8FDB\u884C\u7684\u7B5B\u9009\u7684

\u6BD4\u5982\u6211\u6709   

select id, usrer_id,name,age from d_users where age &gt; 10;
select id, usrer_id,name,age from d_users having age &gt; 10;
  
\u4E0A\u9762\u4E24\u4E2A\u662F\u7B49\u6548\u7684\uFF0C\u4F46\u662F\u5982\u679C\u6211\u628A\u7B2C\u4E8C\u4E2A\u6539\u4E3A select id, usrer_id,name from d_users having age &gt; 10; \u5C31\u4F1A\u62A5\u9519\uFF0C\u539F\u56E0\u5C31\u662F\u4E0A\u9762\u8BF4\u7684\u7ED3\u8BBA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function l(t,c){return i(),n("div",null,d)}var m=e(r,[["render",l],["__file","mysql\u4E4Bhaving\u548Cwhere.html.vue"]]);export{m as default};
