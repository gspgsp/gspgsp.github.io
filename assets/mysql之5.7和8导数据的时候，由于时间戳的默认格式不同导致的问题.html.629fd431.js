import{_ as e,o as n,c as i,g as l}from"./app.6e4bf74b.js";const _={},s=l(`<p>mysql\u4E4B5.7\u548C8\u5BFC\u6570\u636E\u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u65F6\u95F4\u6233\u7684\u9ED8\u8BA4\u683C\u5F0F\u4E0D\u540C\u5BFC\u81F4\u7684\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MySql 8.0\u4E2D\u8F93\u5165\u4EE3\u7801\uFF1A

alter table actor add column create_date datetime not null default &#39;0000-00-00 00:00:00&#39;;

\u62A5\u9519\uFF0C\u63D0\u793A\u9ED8\u8BA4\u65F6\u671F\u683C\u5F0F&#39;0000-00-00 00:00:00&#39;\u6709\u8BEF\u3002\u8FD9\u4E2A\u5728mysql5.7\u4E0B\u662F\u6CA1\u6709\u95EE\u9898\u7684\uFF0C\u67E5\u770B\u95EE\u9898\u5728sql mod\u914D\u7F6E\u91CC:

\u67E5\u770B\u914D\u7F6E:
select @@sql_mode; -- \u67E5\u770B\u5168\u5C40sql_mode\u7684\u503C

ONLY_FULL_GROUP_BY, STRICT_TRANS_TABLES, NO_ZERO_IN_DATE, NO_ZERO_DATE, 
ERROR_FOR_DIVISION_BY_ZERO, and NO_ENGINE_SUBSTITUTION


\u5176\u4E2DNO_ZERO_IN_DATE, NO_ZERO_DATE\u4E24\u4E2A\u9009\u9879\u7981\u6B62\u4E860000\u8FD9\u6837\u7684\u65E5\u671F\u548C\u65F6\u95F4

\u91CD\u65B0\u914D\u7F6Esql mod\uFF0C\u53BB\u6389\u8FD9\u4E24\u4E2A\u7EA6\u675F\uFF0C\u7136\u540E\u91CD\u542Fmysql\u5373\u53EF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[s];function a(c,v){return n(),i("div",null,d)}var m=e(_,[["render",a],["__file","mysql\u4E4B5.7\u548C8\u5BFC\u6570\u636E\u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u65F6\u95F4\u6233\u7684\u9ED8\u8BA4\u683C\u5F0F\u4E0D\u540C\u5BFC\u81F4\u7684\u95EE\u9898.html.vue"]]);export{m as default};
