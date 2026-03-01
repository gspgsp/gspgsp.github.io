import{_ as n,c as e,f as a,o as m}from"./app-BB_BIQV8.js";const i={};function l(r,s){return m(),e("div",null,s[0]||(s[0]=[a(`<p>多次leftjoin以及聚合查询导致数据不准的问题</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">原sql:</span>
<span class="line">SELECT mmr_ID, mmr_projectName, SUM(mmr_hoursWorked.mmr_hoursWorked_hours) AS sumHours</span>
<span class="line">FROM mmr </span>
<span class="line">LEFT JOIN mmr_hoursWorked</span>
<span class="line">ON mmr.mmr_ID = mmr_hoursWorked.mmr_hoursWorked_project AND mmr_hoursWorked.mmr_hoursWorked_mm = &quot;P90826&quot;</span>
<span class="line">LEFT JOIN mmr_notes</span>
<span class="line">ON mmr.mmr_ID = mmr_notes.mmr_notes_MMR_ref AND mmr_notes.mmr_notes_author = &quot;P90826&quot;</span>
<span class="line">WHERE mmr_mmAssigned = &quot;P90826&quot; AND mmr_projectStatus != 1 OR mmr_notes.mmr_notes_author = &quot;P90826&quot; AND mmr_projectStatus != 1 </span>
<span class="line">GROUP BY mmr_ID</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">由于JOIN语句返回了结果组合，因此应该分别处理聚合和连接</span>
<span class="line"></span>
<span class="line">新sql:</span>
<span class="line">SELECT t.*</span>
<span class="line">FROM</span>
<span class="line">(</span>
<span class="line">    SELECT mmr_ID, mmr_projectName, SUM(mmr_hoursWorked.mmr_hoursWorked_hours) AS sumHours</span>
<span class="line">    FROM mmr </span>
<span class="line">    LEFT JOIN mmr_hoursWorked</span>
<span class="line">    ON mmr.mmr_ID = mmr_hoursWorked.mmr_hoursWorked_project AND mmr_hoursWorked.mmr_hoursWorked_mm = &#39;P90826&#39;</span>
<span class="line">    WHERE mmr_projectStatus != 1 AND mmr_mmAssigned = &#39;P90826&#39;</span>
<span class="line">    GROUP BY mmr_ID, mmr_projectName, mmr_mmAssigned</span>
<span class="line">) t</span>
<span class="line">LEFT JOIN mmr_notes</span>
<span class="line">ON t.mmr_ID = mmr_notes.mmr_notes_MMR_ref </span>
<span class="line">WHERE mmr_notes.mmr_notes_author = &#39;P90826&#39;;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(i,[["render",l],["__file","多次leftjoin以及聚合查询导致数据不准的问题.html.vue"]]),o=JSON.parse('{"path":"/content/database/mysql/%E5%A4%9A%E6%AC%A1leftjoin%E4%BB%A5%E5%8F%8A%E8%81%9A%E5%90%88%E6%9F%A5%E8%AF%A2%E5%AF%BC%E8%87%B4%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%86%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"多次leftjoin以及聚合查询导致数据不准的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"多次leftjoin以及聚合查询导致数据不准的问题","description":"多次leftjoin以及聚合查询导致数据不准的问题"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/多次leftjoin以及聚合查询导致数据不准的问题.md"}');export{d as comp,o as data};
