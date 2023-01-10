import{_ as n,o as s,c as a,g as t}from"./app.264f0052.js";const e={},i=t(`<p>\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u8F93\u51FA\u65F6\u95F4\uFF0C\u7531\u4E8E\u4E00\u822C\u5728Model\u7C7B\u91CC\u4F1A\u5B9A\u4E49\u5982\u4E0B\u7684\u5B57\u6BB5\uFF1A CreatedAt time.Time <code>gorm:&quot;type:timestamp;default:NULL;comment:\u521B\u5EFA\u65F6\u95F4&quot;</code> UpdatedAt time.Time <code>gorm:&quot;type:timestamp;default:NULL;comment:\u66F4\u65B0\u65F6\u95F4&quot;</code></p><p>\u8FD9\u5728\u8F93\u51FA\u4EE5\u540E\u57FA\u672C\u4E0A\u90FD\u662F\u5982\u4E0B\u683C\u5F0F\uFF1A &quot;created_at&quot;: &quot;2022-09-08T09:29:42+08:00&quot;</p><p>\u90A3\u4E48\u600E\u4E48\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C31\u9700\u8981\u901A\u8FC7\u81EA\u5B9A\u4E49\u7C7B\u578B\u89E3\u51B3\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>
<span class="token comment">//\u81EA\u5B9A\u4E49\u65F6\u95F4\u7C7B\u578B</span>
<span class="token keyword">type</span> JsonTime time<span class="token punctuation">.</span>Time

<span class="token keyword">func</span> <span class="token punctuation">(</span>j JsonTime<span class="token punctuation">)</span> <span class="token function">MarshalJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> stamp <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>\`<span class="token string">&quot;%s&quot;</span><span class="token string">\`, time.Time(j).Format(&quot;2006-01-02 15:04:05&quot;))
	return []byte(stamp), nil
}

//
type i struct {
	Id          uint              \`</span>json<span class="token punctuation">:</span><span class="token string">&quot;id&quot;</span><span class="token string">\`
	Name        string            \`</span>json<span class="token punctuation">:</span><span class="token string">&quot;name&quot;</span><span class="token string">\`
	CreatedAt   response.JsonTime \`</span>json<span class="token punctuation">:</span><span class="token string">&quot;created_at&quot;</span><span class="token string">\`
}

type val struct {
	ID          uint                    \`</span>gorm<span class="token punctuation">:</span><span class="token string">&quot;primarykey;column:id;&quot;</span><span class="token string">\`
	Name        string                  \`</span>gorm<span class="token punctuation">:</span><span class="token string">&quot;type:varchar(15);default:NULL;comment:\u540D\u79F0&quot;</span><span class="token string">\`
	CreatedAt   time.Time               \`</span>gorm<span class="token punctuation">:</span><span class="token string">&quot;type:timestamp;default:NULL;comment:\u521B\u5EFA\u65F6\u95F4&quot;</span><span class="token string">\`
	UpdatedAt   time.Time               \`</span>gorm<span class="token punctuation">:</span><span class="token string">&quot;type:timestamp;default:NULL;comment:\u66F4\u65B0\u65F6\u95F4&quot;</span>\`
<span class="token punctuation">}</span>

i<span class="token punctuation">.</span>CreatedAt <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">JsonTime</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>CreatedAt<span class="token punctuation">)</span> <span class="token comment">//\u8FD9\u91CC\u9700\u8981\u7C7B\u578B\u5F3A\u8F6C</span>

<span class="token comment">//\u518D\u901A\u8FC7json\u8FD4\u56DE\u6570\u636E i \u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u683C\u5F0F\u5316\u4E3A &quot;2006-01-02 15:04:05&quot; \u683C\u5F0F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[i];function p(c,l){return s(),a("div",null,o)}var r=n(e,[["render",p],["__file","golang\u683C\u5F0F\u5316\u8F93\u51FAtime.html.vue"]]);export{r as default};
