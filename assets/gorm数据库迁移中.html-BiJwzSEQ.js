import{_ as s,c as a,f as t,o as e}from"./app-BB_BIQV8.js";const p={};function l(i,n){return e(),a("div",null,n[0]||(n[0]=[t(`<p>gorm数据库迁移中:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">	<span class="token comment">//多对多数据库迁移</span></span>
<span class="line">	<span class="token keyword">type</span> Article <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">		Id             <span class="token builtin">uint</span>       <span class="token string">\`gorm:&quot;primarykey;not null;auto_increment;column:id;&quot;\`</span></span>
<span class="line">		Title          <span class="token builtin">string</span>     <span class="token string">\`gorm:&quot;type:varchar(15);default:NULL;column:title;comment:标题&quot;\`</span></span>
<span class="line">		Detail         <span class="token builtin">string</span>     <span class="token string">\`gorm:&quot;type:varchar(15);default:NULL;column:detail;comment:详情&quot;\`</span></span>
<span class="line">		Categories     <span class="token punctuation">[</span><span class="token punctuation">]</span>Category <span class="token string">\`gorm:&quot;many2many:article_has_categories;&quot;\`</span></span>
<span class="line">		CreatedAt      time<span class="token punctuation">.</span>Time  <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:created_at;comment:创建时间&quot;\`</span></span>
<span class="line">		DeletedAt      time<span class="token punctuation">.</span>Time  <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:deleted_at;comment:创建时间&quot;\`</span></span>
<span class="line">		UpdatedAt      time<span class="token punctuation">.</span>Time  <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:updated_at;comment:更新时间&quot;\`</span></span>
<span class="line">		CreatedAdminId <span class="token builtin">int</span>        <span class="token string">\`gorm:&quot;type:int;default:NULL;column:created_admin_id;comment:创建人ID&quot;\`</span></span>
<span class="line">		UpdatedAdminId <span class="token builtin">int</span>        <span class="token string">\`gorm:&quot;type:int;default:NULL;column:updated_admin_id;comment:更新人ID&quot;\`</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">type</span> Category <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">		Id             <span class="token builtin">uint</span>      <span class="token string">\`gorm:&quot;primarykey;not null;auto_increment;column:id;&quot;\`</span></span>
<span class="line">		Name           <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(15);default:NULL;comment:名称&quot;\`</span></span>
<span class="line">		Articles       <span class="token punctuation">[</span><span class="token punctuation">]</span>Article <span class="token string">\`gorm:&quot;many2many:article_has_categories;&quot;\`</span></span>
<span class="line">		CreatedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:created_at;comment:创建时间&quot;\`</span></span>
<span class="line">		DeletedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:deleted_at;comment:创建时间&quot;\`</span></span>
<span class="line">		UpdatedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:updated_at;comment:更新时间&quot;\`</span></span>
<span class="line">		CreatedAdminId <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:created_admin_id;comment:创建人ID&quot;\`</span></span>
<span class="line">		UpdatedAdminId <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:updated_admin_id;comment:更新人ID&quot;\`</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//①通过 AutoMigrate 实现的数据库迁移，可以实现表之间的关系，比如我这里的 Category 里定义了 many2many tag,通过 AutoMigrate 可以自动创建三张表:</span></span>
<span class="line">	<span class="token comment">//categories表 article_has_categories表 articles表</span></span>
<span class="line">	<span class="token comment">//②不能通过手动迁移数据库创建这样的表</span></span>
<span class="line">	<span class="token comment">//err := common.Db.AutoMigrate(&amp;model.Category{})</span></span>
<span class="line">	<span class="token comment">//if err != nil {</span></span>
<span class="line">	<span class="token comment">//	fmt.Println(&quot;迁移错误:&quot;, err)</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//fmt.Println(&quot;迁移完成&quot;)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//多对多查询，我发现只能通过Preload查询，Association不生效</span></span>
<span class="line">	<span class="token comment">//var categories []model.Category</span></span>
<span class="line">	<span class="token comment">//err := common.Db.Preload(&quot;Articles&quot;).Find(&amp;categories).Error</span></span>
<span class="line">	<span class="token comment">//if err != nil {</span></span>
<span class="line">	<span class="token comment">//	fmt.Println(&quot;err is:&quot;, err)</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//fmt.Printf(&quot;categories are:%+v\\n&quot;, categories)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//多对多更新</span></span>
<span class="line">	<span class="token comment">//common.Db.Model(model.Category{}).Where(&quot;id = ?&quot;, 1).Update(&quot;name&quot;, &quot;分类111&quot;)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//多对多删除，这个得先删除中间表的数据，再删除主表的数据(最然主表数据定义了deleted_at 字段，但是会被硬删除，而不会软删除，这点和laravel还是有区别的)</span></span>
<span class="line">	<span class="token comment">//这个过程需要事务操作：① 自动事务(和laravel很像，很方便) ② 手动事务</span></span>
<span class="line">	err <span class="token operator">:=</span> common<span class="token punctuation">.</span>Db<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>tx <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//tx.Exec(&quot;&quot;),本来想对中间表执行原生sql删除的，不想定义中间表的model，实际上也不需要，但是我还是定义了</span></span>
<span class="line">		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;category_id = ?&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>model<span class="token punctuation">.</span>ArticleHasCategory<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> err</span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id = ?&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>model<span class="token punctuation">.</span>Category<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> err</span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;数据删除失败&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;数据删除成功&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(p,[["render",l],["__file","gorm数据库迁移中.html.vue"]]),u=JSON.parse('{"path":"/content/go/base/gorm%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%81%E7%A7%BB%E4%B8%AD.html","title":"gorm数据库迁移中","lang":"en-US","frontmatter":{"sidebar":false,"title":"gorm数据库迁移中","description":"gorm数据库迁移中"},"headers":[],"git":{},"filePathRelative":"content/go/base/gorm数据库迁移中.md"}');export{c as comp,u as data};
