import{_ as m,o as r,c as e,g as n}from"./app.b04686bd.js";const s={},i=n(`<p>\u591A\u6B21leftjoin\u4EE5\u53CA\u805A\u5408\u67E5\u8BE2\u5BFC\u81F4\u6570\u636E\u4E0D\u51C6\u7684\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u539Fsql:
SELECT mmr_ID, mmr_projectName, SUM(mmr_hoursWorked.mmr_hoursWorked_hours) AS sumHours
FROM mmr 
LEFT JOIN mmr_hoursWorked
ON mmr.mmr_ID = mmr_hoursWorked.mmr_hoursWorked_project AND mmr_hoursWorked.mmr_hoursWorked_mm = &quot;P90826&quot;
LEFT JOIN mmr_notes
ON mmr.mmr_ID = mmr_notes.mmr_notes_MMR_ref AND mmr_notes.mmr_notes_author = &quot;P90826&quot;
WHERE mmr_mmAssigned = &quot;P90826&quot; AND mmr_projectStatus != 1 OR mmr_notes.mmr_notes_author = &quot;P90826&quot; AND mmr_projectStatus != 1 
GROUP BY mmr_ID


\u7531\u4E8EJOIN\u8BED\u53E5\u8FD4\u56DE\u4E86\u7ED3\u679C\u7EC4\u5408\uFF0C\u56E0\u6B64\u5E94\u8BE5\u5206\u522B\u5904\u7406\u805A\u5408\u548C\u8FDE\u63A5

\u65B0sql:
SELECT t.*
FROM
(
    SELECT mmr_ID, mmr_projectName, SUM(mmr_hoursWorked.mmr_hoursWorked_hours) AS sumHours
    FROM mmr 
    LEFT JOIN mmr_hoursWorked
    ON mmr.mmr_ID = mmr_hoursWorked.mmr_hoursWorked_project AND mmr_hoursWorked.mmr_hoursWorked_mm = &#39;P90826&#39;
    WHERE mmr_projectStatus != 1 AND mmr_mmAssigned = &#39;P90826&#39;
    GROUP BY mmr_ID, mmr_projectName, mmr_mmAssigned
) t
LEFT JOIN mmr_notes
ON t.mmr_ID = mmr_notes.mmr_notes_MMR_ref 
WHERE mmr_notes.mmr_notes_author = &#39;P90826&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[i];function _(o,l){return r(),e("div",null,d)}var t=m(s,[["render",_],["__file","\u591A\u6B21leftjoin\u4EE5\u53CA\u805A\u5408\u67E5\u8BE2\u5BFC\u81F4\u6570\u636E\u4E0D\u51C6\u7684\u95EE\u9898.html.vue"]]);export{t as default};
