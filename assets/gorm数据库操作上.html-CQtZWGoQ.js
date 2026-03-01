import{_ as s,c as a,f as e,o as t}from"./app-BB_BIQV8.js";const l={};function i(o,n){return t(),a("div",null,n[0]||(n[0]=[e(`<p>gorm数据库操作上:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> product</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;testing&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">TestGormOperation</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//以下都是一对多操作</span></span>
<span class="line">	<span class="token comment">//新增，无关联</span></span>
<span class="line">	<span class="token comment">//Product :=model.Product{}</span></span>
<span class="line">	<span class="token comment">//Product.Name = &quot;超级大的滑雪场冬季必备&quot;</span></span>
<span class="line">	<span class="token comment">//Product.Kind = &quot;文娱旅游&quot;</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//common.Db.Set(&quot;gorm:save_associations&quot;, false).Create(&amp;Product)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//新僧，有关联</span></span>
<span class="line">	<span class="token comment">//Product := model.Product{}</span></span>
<span class="line">	<span class="token comment">//Product.Name = &quot;避暑的好地方&quot;</span></span>
<span class="line">	<span class="token comment">//Product.Kind = &quot;文娱旅游&quot;</span></span>
<span class="line">	<span class="token comment">//Product.Attributes = []model.ProductAttribute{</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;地点&quot;, AttributeValue: &quot;武汉&quot;},</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;地点&quot;, AttributeValue: &quot;成都&quot;},</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//common.Db.Create(&amp;Product)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//批量创建</span></span>
<span class="line">	<span class="token comment">//products := []model.Product{{Name: &quot;宝马&quot;, Kind: &quot;游戏&quot;, Attributes: []model.ProductAttribute{</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;大灯&quot;, AttributeValue: &quot;LED&quot;},</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;方向盘&quot;, AttributeValue: &quot;真皮&quot;},</span></span>
<span class="line">	<span class="token comment">//}}, {Name: &quot;奔驰&quot;, Kind: &quot;游戏&quot;, Attributes: []model.ProductAttribute{</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;大灯&quot;, AttributeValue: &quot;LED&quot;},</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;方向盘&quot;, AttributeValue: &quot;真皮&quot;},</span></span>
<span class="line">	<span class="token comment">//}}}</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//common.Db.Create(&amp;products)</span></span>
<span class="line">	<span class="token comment">//通过 CreateInBatches 限制批量插入的数量</span></span>
<span class="line">	<span class="token comment">//common.Db.CreateInBatches(&amp;products, 50)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//products := []model.Product{{Name: &quot;本田&quot;, Kind: &quot;游戏&quot;, Attributes: []model.ProductAttribute{</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;大灯&quot;, AttributeValue: &quot;LED&quot;},</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;方向盘&quot;, AttributeValue: &quot;真皮&quot;},</span></span>
<span class="line">	<span class="token comment">//}}, {Name: &quot;大众&quot;, Kind: &quot;游戏&quot;, Attributes: []model.ProductAttribute{</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;大灯&quot;, AttributeValue: &quot;LED&quot;},</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;方向盘&quot;, AttributeValue: &quot;真皮&quot;},</span></span>
<span class="line">	<span class="token comment">//}}}</span></span>
<span class="line">	<span class="token comment">////Omit 忽略 某些字段(关联)，这里直接 clause.Associations，忽略所有的关联</span></span>
<span class="line">	<span class="token comment">//common.Db.Omit(clause.Associations).Create(products)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//update with callbacks，这个更新操作将执行模型的BeforeUpdate, AfterUpdate方法，更新其UpdatedAt时间戳</span></span>
<span class="line">	<span class="token comment">//common.Db.Model(model.Product{}).Set(&quot;gorm:save_associations&quot;, false).Where(&quot;id = ?&quot;, 8).Updates(map[string]interface{}{&quot;name&quot;:&quot;避暑旅游打卡的好地方&quot;})</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//update，这个更新操作不会执行 callbacks相关的方法</span></span>
<span class="line">	<span class="token comment">//common.Db.Model(model.Product{}).Set(&quot;gorm:save_associations&quot;, false).Where(&quot;id = ?&quot;, 8).UpdateColumns(map[string]interface{}{&quot;name&quot;: &quot;避暑旅游打卡带娃野炊的好地方&quot;, &quot;kind&quot;: &quot;医疗健康&quot;})</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//update，这个更新操作不会执行 callbacks相关的方法，通过 Omit 忽略某些字段，不做更新</span></span>
<span class="line">	<span class="token comment">//common.Db.Model(model.Product{}).Set(&quot;gorm:save_associations&quot;, false).Where(&quot;id = ?&quot;, 8).Omit(&quot;name&quot;).UpdateColumns(map[string]interface{}{&quot;name&quot;: &quot;避暑旅游打卡带娃野炊的好地方&quot;, &quot;kind&quot;: &quot;医疗健康&quot;})</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//update，同时更新相关的关联模型,如果待更新内容不包含 关联模型字段，那么直接更新成功</span></span>
<span class="line">	<span class="token comment">//common.Db.Model(model.Product{}).Where(&quot;id = ?&quot;, 8).UpdateColumns(map[string]interface{}{&quot;name&quot;: &quot;避暑旅游团建的好地方&quot;, &quot;kind&quot;: &quot;健身运动&quot;})</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//关于更新有几个细节问题：①如果使用map的话可以更新任意结果，但是如果使用struct的话，如果待更新值为 &quot;&quot; 0 false，都不会被更新，下面的name值不会变</span></span>
<span class="line">	<span class="token comment">//common.Db.Model(model.Product{}).Where(&quot;id = ?&quot;, 8).UpdateColumns(model.Product{Name: &quot;&quot;, Kind: &quot;中医理疗&quot;})</span></span>
<span class="line">	<span class="token comment">//name的值变为空</span></span>
<span class="line">	<span class="token comment">//common.Db.Model(model.Product{}).Where(&quot;id = ?&quot;, 8).UpdateColumns(map[string]interface{}{&quot;name&quot;: &quot;&quot;, &quot;kind&quot;: &quot;中医理疗&quot;})</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//带关联模型的 更新，我还没找到怎么更新关联关系...，下面这个肯定是不行的，因为没有关联关系数据的id</span></span>
<span class="line">	<span class="token comment">//product := model.Product{Name: &quot;避暑旅游团建打卡的好地方&quot;, Kind: &quot;健身运动&quot;, Attributes: []model.ProductAttribute{</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;大灯&quot;, AttributeValue: &quot;LED&quot;},</span></span>
<span class="line">	<span class="token comment">//	{Attribute: &quot;方向盘&quot;, AttributeValue: &quot;真皮&quot;},</span></span>
<span class="line">	<span class="token comment">//}}</span></span>
<span class="line">	<span class="token comment">//common.Db.Model(model.Product{}).Where(&quot;id = ?&quot;, 8).Save(product)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//删除操作,当数据库定义了 deleted_at，那么就会出发软删除操作(给deleted_at赋值)</span></span>
<span class="line">	<span class="token comment">//common.Db.Where(&quot;id = ?&quot;, 1).Delete(&amp;model.Order{})</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//Unscoped的用法，①可以用来硬删除数据 ②可以用来查询软删除的数据</span></span>
<span class="line">	<span class="token comment">//order := model.Order{}</span></span>
<span class="line">	<span class="token comment">//common.Db.Where(&quot;id = ?&quot;, 1).Unscoped().First(&amp;order)</span></span>
<span class="line">	<span class="token comment">//fmt.Printf(&quot;order is:%+v\\n&quot;, order)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//common.Db.Where(&quot;id = ?&quot;, 1).Unscoped().Delete(&amp;model.Order{})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//验证 多对多 操作</span></span>
<span class="line">	<span class="token comment">//TODO::明天更新</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",i],["__file","gorm数据库操作上.html.vue"]]),u=JSON.parse('{"path":"/content/go/base/gorm%E6%95%B0%E6%8D%AE%E5%BA%93%E6%93%8D%E4%BD%9C%E4%B8%8A.html","title":"gorm数据库操作上","lang":"en-US","frontmatter":{"sidebar":false,"title":"gorm数据库操作上","description":"gorm数据库操作上"},"headers":[],"git":{},"filePathRelative":"content/go/base/gorm数据库操作上.md"}');export{p as comp,u as data};
