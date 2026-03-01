import{_ as s,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(d,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h5 id="mysql8窗口函数-这只是其中两个窗口函数的使用-我只是觉得比较方便-所以记录一下" tabindex="-1"><a class="header-anchor" href="#mysql8窗口函数-这只是其中两个窗口函数的使用-我只是觉得比较方便-所以记录一下"><span>mysql8窗口函数, 这只是其中两个窗口函数的使用，，我只是觉得比较方便，所以记录一下</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.ROW_NUMBER</span>
<span class="line">使用案例:</span>
<span class="line">select * from (SELECT</span>
<span class="line">  id,</span>
<span class="line">  name,</span>
<span class="line">  age,</span>
<span class="line">  ROW_NUMBER() OVER (PARTITION BY age ORDER BY name DESC) AS rn</span>
<span class="line">FROM users) as raw_data where rn&lt;3;</span>
<span class="line"></span>
<span class="line">主要实现功能:</span>
<span class="line">用户按年龄分组，同时在每个组内按名字排序，只取每个组的前三位，这个和group by 有很大的不同，更方便</span>
<span class="line"></span>
<span class="line">ROW_NUMBER 必须配合 OVER 使用</span>
<span class="line"></span>
<span class="line">2.RANK</span>
<span class="line">使用案例:</span>
<span class="line">SELECT *</span>
<span class="line">FROM (</span>
<span class="line">  SELECT *,</span>
<span class="line">         RANK() OVER (PARTITION BY event_id ORDER BY price DESC) AS rnk</span>
<span class="line">  FROM tickets</span>
<span class="line">) AS t</span>
<span class="line">WHERE rnk = 1;</span>
<span class="line"></span>
<span class="line">主要实现功能:</span>
<span class="line">按event_id分组，获取每个event_id组内加个最高的数据</span>
<span class="line"></span>
<span class="line">二者很相似，但是对于price相同的时候，rank 会为相同排序值的行会获得相同的排名(同时会跳号，使用 DENSE_RANK 不会跳号)， 而ROW_NUMBER会连续编号（1、2、3、4...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(i,[["render",c],["__file","mysql8窗口函数.html.vue"]]),r=JSON.parse('{"path":"/content/database/mysql/mysql8%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0.html","title":"mysql8窗口函数","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql8窗口函数","head":[["meta",{"name":"title","content":"mysql8窗口函数"}],["meta",{"name":"description","content":"mysql8窗口函数"}],["meta",{"name":"keywords","content":"mysql8"}],["meta",{"property":"og:title","content":"mysql8窗口函数"}],["meta",{"property":"og:description","content":"mysql8窗口函数"}]]},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql8窗口函数.md"}');export{p as comp,r as data};
