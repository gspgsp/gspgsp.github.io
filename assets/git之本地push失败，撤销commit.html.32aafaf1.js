import{_ as e,o as i,c as s,g as n}from"./app.66ae8700.js";const d={},t=n(`<p>\u5F53commit\u4E86\uFF0C\u7136\u540Epush\uFF0C\u7ED3\u679Cpuash\u5931\u8D25\uFF0C\u5C31\u60F3\u64A4\u9500commit,\u4F46\u662F\u4FDD\u7559\u4EE3\u7801,\u53EF\u4EE5\u901A\u8FC7--soft\u53C2\u6570\u5B9E\u73B0:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset --soft HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HEAD^\u7684\u610F\u601D\u662F\u4E0A\u4E00\u4E2A\u7248\u672C\uFF0C\u4E5F\u53EF\u4EE5\u5199\u6210HEAD~1
\u5982\u679C\u4F60\u8FDB\u884C\u4E862\u6B21commit\uFF0C\u60F3\u90FD\u64A4\u56DE\uFF0C\u53EF\u4EE5\u4F7F\u7528HEAD~2

\u547D\u4EE4\u683C\u5F0F\uFF1Agit reset [--soft | --mixed | --hard] [&lt;commit&gt;]
\u81F3\u4E8E\u8FD9\u51E0\u4E2A\u53C2\u6570\uFF1A
--mixed 
\u610F\u601D\u662F\uFF1A\u4E0D\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u5E76\u4E14\u64A4\u9500git add . \u64CD\u4F5C
\u8FD9\u4E2A\u4E3A\u9ED8\u8BA4\u53C2\u6570,git reset --mixed HEAD^ \u548C git reset HEAD^ \u6548\u679C\u662F\u4E00\u6837\u7684\u3002

--soft  
\u4E0D\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u4E0D\u64A4\u9500git add . 

--hard
\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u64A4\u9500git add . 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[t];function l(c,m){return i(),s("div",null,a)}var v=e(d,[["render",l],["__file","git\u4E4B\u672C\u5730push\u5931\u8D25\uFF0C\u64A4\u9500commit.html.vue"]]);export{v as default};
