import{_ as i,o as n,c as e,g as d}from"./app.6e4bf74b.js";const s={},l=d(`<p>mysql\u4E4Bgroupby\u518D\u6392\u5E8F\u7684\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql group by + order by \u67E5\u8BE2\uFF0C\u83B7\u53D6money \u6700\u9AD8\u7684uid
  
//\u7B80\u5355\u65B9\u6CD5\uFF0C\u4F46\u662F\u4E0D\u80FD\u51C6\u786E\u83B7\u53D6\u5F53\u524D\u90A3\u4E00\u884C\u6570\u636E
SELECT id, uid,MAX(money) as cc, datatime FROM d_rewards GROUP BY uid ORDER BY cc DESC;
  
//\u4E0B\u9762\u8FD9\u4E2A\u5B50\u67E5\u8BE2\u7684\u7ED3\u679C\u6709\u4E86\uFF0C\u4F46\u662F \u5BF9\u4E8E group by \u5374\u6CA1\u6709\u751F\u6548
SELECT
	r.id,
	r.uid,
	r.money,
	r.datatime 
FROM
	( SELECT id, uid, money, datatime FROM d_rewards ORDER BY money DESC) r 
GROUP BY
	r.uid 
ORDER BY
	r.money DESC;

  
//\u52A0\u4E0A limit \u5C31\u53EF\u4EE5\u4E86\uFF0C\u539F\u56E0\u5F85\u5B9A...\uFF0C\u4F46\u662F limit \u7684\u503C\u662F\u4E00\u4E2A\u95EE\u9898
SELECT
	r.id,
	r.uid,
	r.money,
	r.datatime 
FROM
	( SELECT id, uid, money, datatime FROM d_rewards ORDER BY money DESC limit 8) r 
GROUP BY
	r.uid 
ORDER BY
	r.money DESC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function v(a,m){return n(),e("div",null,r)}var u=i(s,[["render",v],["__file","mysql\u4E4Bgroupby\u518D\u6392\u5E8F\u7684\u95EE\u9898.html.vue"]]);export{u as default};
