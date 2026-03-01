import{_ as n,c as e,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function d(t,s){return a(),e("div",null,s[0]||(s[0]=[l(`<p>mysql之5.7和8导数据的时候，由于时间戳的默认格式不同导致的问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">MySql 8.0中输入代码：</span>
<span class="line"></span>
<span class="line">alter table actor add column create_date datetime not null default &#39;0000-00-00 00:00:00&#39;;</span>
<span class="line"></span>
<span class="line">报错，提示默认时期格式&#39;0000-00-00 00:00:00&#39;有误。这个在mysql5.7下是没有问题的，查看问题在sql mod配置里:</span>
<span class="line"></span>
<span class="line">查看配置:</span>
<span class="line">select @@sql_mode; -- 查看全局sql_mode的值</span>
<span class="line"></span>
<span class="line">ONLY_FULL_GROUP_BY, STRICT_TRANS_TABLES, NO_ZERO_IN_DATE, NO_ZERO_DATE, </span>
<span class="line">ERROR_FOR_DIVISION_BY_ZERO, and NO_ENGINE_SUBSTITUTION</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">其中NO_ZERO_IN_DATE, NO_ZERO_DATE两个选项禁止了0000这样的日期和时间</span>
<span class="line"></span>
<span class="line">重新配置sql mod，去掉这两个约束，然后重启mysql即可</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=n(i,[["render",d],["__file","mysql之5.7和8导数据的时候，由于时间戳的默认格式不同导致的问题.html.vue"]]),m=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8B5.7%E5%92%8C8%E5%AF%BC%E6%95%B0%E6%8D%AE%E7%9A%84%E6%97%B6%E5%80%99%EF%BC%8C%E7%94%B1%E4%BA%8E%E6%97%B6%E9%97%B4%E6%88%B3%E7%9A%84%E9%BB%98%E8%AE%A4%E6%A0%BC%E5%BC%8F%E4%B8%8D%E5%90%8C%E5%AF%BC%E8%87%B4%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"mysql之5.7和8导数据的时候，由于时间戳的默认格式不同导致的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之5.7和8导数据的时候，由于时间戳的默认格式不同导致的问题","description":"mysql之5.7和8导数据的时候，由于时间戳的默认格式不同导致的问题"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之5.7和8导数据的时候，由于时间戳的默认格式不同导致的问题.md"}');export{c as comp,m as data};
