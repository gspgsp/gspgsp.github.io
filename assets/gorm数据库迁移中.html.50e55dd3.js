import{_ as n,o as s,c as a,g as t}from"./app.d66d8774.js";const e={},o=t(`<p>gorm\u6570\u636E\u5E93\u8FC1\u79FB\u4E2D:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>	<span class="token comment">//\u591A\u5BF9\u591A\u6570\u636E\u5E93\u8FC1\u79FB</span>
	<span class="token keyword">type</span> Article <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		Id             <span class="token builtin">uint</span>       <span class="token string">\`gorm:&quot;primarykey;not null;auto_increment;column:id;&quot;\`</span>
		Title          <span class="token builtin">string</span>     <span class="token string">\`gorm:&quot;type:varchar(15);default:NULL;column:title;comment:\u6807\u9898&quot;\`</span>
		Detail         <span class="token builtin">string</span>     <span class="token string">\`gorm:&quot;type:varchar(15);default:NULL;column:detail;comment:\u8BE6\u60C5&quot;\`</span>
		Categories     <span class="token punctuation">[</span><span class="token punctuation">]</span>Category <span class="token string">\`gorm:&quot;many2many:article_has_categories;&quot;\`</span>
		CreatedAt      time<span class="token punctuation">.</span>Time  <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:created_at;comment:\u521B\u5EFA\u65F6\u95F4&quot;\`</span>
		DeletedAt      time<span class="token punctuation">.</span>Time  <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:deleted_at;comment:\u521B\u5EFA\u65F6\u95F4&quot;\`</span>
		UpdatedAt      time<span class="token punctuation">.</span>Time  <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:updated_at;comment:\u66F4\u65B0\u65F6\u95F4&quot;\`</span>
		CreatedAdminId <span class="token builtin">int</span>        <span class="token string">\`gorm:&quot;type:int;default:NULL;column:created_admin_id;comment:\u521B\u5EFA\u4EBAID&quot;\`</span>
		UpdatedAdminId <span class="token builtin">int</span>        <span class="token string">\`gorm:&quot;type:int;default:NULL;column:updated_admin_id;comment:\u66F4\u65B0\u4EBAID&quot;\`</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">type</span> Category <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		Id             <span class="token builtin">uint</span>      <span class="token string">\`gorm:&quot;primarykey;not null;auto_increment;column:id;&quot;\`</span>
		Name           <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(15);default:NULL;comment:\u540D\u79F0&quot;\`</span>
		Articles       <span class="token punctuation">[</span><span class="token punctuation">]</span>Article <span class="token string">\`gorm:&quot;many2many:article_has_categories;&quot;\`</span>
		CreatedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:created_at;comment:\u521B\u5EFA\u65F6\u95F4&quot;\`</span>
		DeletedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:deleted_at;comment:\u521B\u5EFA\u65F6\u95F4&quot;\`</span>
		UpdatedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:updated_at;comment:\u66F4\u65B0\u65F6\u95F4&quot;\`</span>
		CreatedAdminId <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:created_admin_id;comment:\u521B\u5EFA\u4EBAID&quot;\`</span>
		UpdatedAdminId <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:updated_admin_id;comment:\u66F4\u65B0\u4EBAID&quot;\`</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u2460\u901A\u8FC7 AutoMigrate \u5B9E\u73B0\u7684\u6570\u636E\u5E93\u8FC1\u79FB\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8868\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u6BD4\u5982\u6211\u8FD9\u91CC\u7684 Category \u91CC\u5B9A\u4E49\u4E86 many2many tag,\u901A\u8FC7 AutoMigrate \u53EF\u4EE5\u81EA\u52A8\u521B\u5EFA\u4E09\u5F20\u8868:</span>
	<span class="token comment">//categories\u8868 article_has_categories\u8868 articles\u8868</span>
	<span class="token comment">//\u2461\u4E0D\u80FD\u901A\u8FC7\u624B\u52A8\u8FC1\u79FB\u6570\u636E\u5E93\u521B\u5EFA\u8FD9\u6837\u7684\u8868</span>
	<span class="token comment">//err := common.Db.AutoMigrate(&amp;model.Category{})</span>
	<span class="token comment">//if err != nil {</span>
	<span class="token comment">//	fmt.Println(&quot;\u8FC1\u79FB\u9519\u8BEF:&quot;, err)</span>
	<span class="token comment">//}</span>
	<span class="token comment">//</span>
	<span class="token comment">//fmt.Println(&quot;\u8FC1\u79FB\u5B8C\u6210&quot;)</span>

	<span class="token comment">//\u591A\u5BF9\u591A\u67E5\u8BE2\uFF0C\u6211\u53D1\u73B0\u53EA\u80FD\u901A\u8FC7Preload\u67E5\u8BE2\uFF0CAssociation\u4E0D\u751F\u6548</span>
	<span class="token comment">//var categories []model.Category</span>
	<span class="token comment">//err := common.Db.Preload(&quot;Articles&quot;).Find(&amp;categories).Error</span>
	<span class="token comment">//if err != nil {</span>
	<span class="token comment">//	fmt.Println(&quot;err is:&quot;, err)</span>
	<span class="token comment">//}</span>
	<span class="token comment">//</span>
	<span class="token comment">//fmt.Printf(&quot;categories are:%+v\\n&quot;, categories)</span>


	<span class="token comment">//\u591A\u5BF9\u591A\u66F4\u65B0</span>
	<span class="token comment">//common.Db.Model(model.Category{}).Where(&quot;id = ?&quot;, 1).Update(&quot;name&quot;, &quot;\u5206\u7C7B111&quot;)</span>

	<span class="token comment">//\u591A\u5BF9\u591A\u5220\u9664\uFF0C\u8FD9\u4E2A\u5F97\u5148\u5220\u9664\u4E2D\u95F4\u8868\u7684\u6570\u636E\uFF0C\u518D\u5220\u9664\u4E3B\u8868\u7684\u6570\u636E(\u6700\u7136\u4E3B\u8868\u6570\u636E\u5B9A\u4E49\u4E86deleted_at \u5B57\u6BB5\uFF0C\u4F46\u662F\u4F1A\u88AB\u786C\u5220\u9664\uFF0C\u800C\u4E0D\u4F1A\u8F6F\u5220\u9664\uFF0C\u8FD9\u70B9\u548Claravel\u8FD8\u662F\u6709\u533A\u522B\u7684)</span>
	<span class="token comment">//\u8FD9\u4E2A\u8FC7\u7A0B\u9700\u8981\u4E8B\u52A1\u64CD\u4F5C\uFF1A\u2460 \u81EA\u52A8\u4E8B\u52A1(\u548Claravel\u5F88\u50CF\uFF0C\u5F88\u65B9\u4FBF) \u2461 \u624B\u52A8\u4E8B\u52A1</span>
	err <span class="token operator">:=</span> common<span class="token punctuation">.</span>Db<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>tx <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>

		<span class="token comment">//tx.Exec(&quot;&quot;),\u672C\u6765\u60F3\u5BF9\u4E2D\u95F4\u8868\u6267\u884C\u539F\u751Fsql\u5220\u9664\u7684\uFF0C\u4E0D\u60F3\u5B9A\u4E49\u4E2D\u95F4\u8868\u7684model\uFF0C\u5B9E\u9645\u4E0A\u4E5F\u4E0D\u9700\u8981\uFF0C\u4F46\u662F\u6211\u8FD8\u662F\u5B9A\u4E49\u4E86</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;category_id = ?&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>model<span class="token punctuation">.</span>ArticleHasCategory<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id = ?&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>model<span class="token punctuation">.</span>Category<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5220\u9664\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5220\u9664\u6210\u529F&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[o];function p(c,l){return s(),a("div",null,i)}var r=n(e,[["render",p],["__file","gorm\u6570\u636E\u5E93\u8FC1\u79FB\u4E2D.html.vue"]]);export{r as default};
