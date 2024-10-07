import{_ as n,o as t,c as s,g as e}from"./app.d66d8774.js";const o={},a=e(`<p>gorm\u6570\u636E\u5E93\u64CD\u4F5C\u4E0A:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> product

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestGormOperation</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u4EE5\u4E0B\u90FD\u662F\u4E00\u5BF9\u591A\u64CD\u4F5C</span>
	<span class="token comment">//\u65B0\u589E\uFF0C\u65E0\u5173\u8054</span>
	<span class="token comment">//Product :=model.Product{}</span>
	<span class="token comment">//Product.Name = &quot;\u8D85\u7EA7\u5927\u7684\u6ED1\u96EA\u573A\u51AC\u5B63\u5FC5\u5907&quot;</span>
	<span class="token comment">//Product.Kind = &quot;\u6587\u5A31\u65C5\u6E38&quot;</span>
	<span class="token comment">//</span>
	<span class="token comment">//common.Db.Set(&quot;gorm:save_associations&quot;, false).Create(&amp;Product)</span>

	<span class="token comment">//\u65B0\u50E7\uFF0C\u6709\u5173\u8054</span>
	<span class="token comment">//Product := model.Product{}</span>
	<span class="token comment">//Product.Name = &quot;\u907F\u6691\u7684\u597D\u5730\u65B9&quot;</span>
	<span class="token comment">//Product.Kind = &quot;\u6587\u5A31\u65C5\u6E38&quot;</span>
	<span class="token comment">//Product.Attributes = []model.ProductAttribute{</span>
	<span class="token comment">//	{Attribute: &quot;\u5730\u70B9&quot;, AttributeValue: &quot;\u6B66\u6C49&quot;},</span>
	<span class="token comment">//	{Attribute: &quot;\u5730\u70B9&quot;, AttributeValue: &quot;\u6210\u90FD&quot;},</span>
	<span class="token comment">//}</span>
	<span class="token comment">//</span>
	<span class="token comment">//common.Db.Create(&amp;Product)</span>

	<span class="token comment">//\u6279\u91CF\u521B\u5EFA</span>
	<span class="token comment">//products := []model.Product{{Name: &quot;\u5B9D\u9A6C&quot;, Kind: &quot;\u6E38\u620F&quot;, Attributes: []model.ProductAttribute{</span>
	<span class="token comment">//	{Attribute: &quot;\u5927\u706F&quot;, AttributeValue: &quot;LED&quot;},</span>
	<span class="token comment">//	{Attribute: &quot;\u65B9\u5411\u76D8&quot;, AttributeValue: &quot;\u771F\u76AE&quot;},</span>
	<span class="token comment">//}}, {Name: &quot;\u5954\u9A70&quot;, Kind: &quot;\u6E38\u620F&quot;, Attributes: []model.ProductAttribute{</span>
	<span class="token comment">//	{Attribute: &quot;\u5927\u706F&quot;, AttributeValue: &quot;LED&quot;},</span>
	<span class="token comment">//	{Attribute: &quot;\u65B9\u5411\u76D8&quot;, AttributeValue: &quot;\u771F\u76AE&quot;},</span>
	<span class="token comment">//}}}</span>
	<span class="token comment">//</span>
	<span class="token comment">//common.Db.Create(&amp;products)</span>
	<span class="token comment">//\u901A\u8FC7 CreateInBatches \u9650\u5236\u6279\u91CF\u63D2\u5165\u7684\u6570\u91CF</span>
	<span class="token comment">//common.Db.CreateInBatches(&amp;products, 50)</span>

	<span class="token comment">//products := []model.Product{{Name: &quot;\u672C\u7530&quot;, Kind: &quot;\u6E38\u620F&quot;, Attributes: []model.ProductAttribute{</span>
	<span class="token comment">//	{Attribute: &quot;\u5927\u706F&quot;, AttributeValue: &quot;LED&quot;},</span>
	<span class="token comment">//	{Attribute: &quot;\u65B9\u5411\u76D8&quot;, AttributeValue: &quot;\u771F\u76AE&quot;},</span>
	<span class="token comment">//}}, {Name: &quot;\u5927\u4F17&quot;, Kind: &quot;\u6E38\u620F&quot;, Attributes: []model.ProductAttribute{</span>
	<span class="token comment">//	{Attribute: &quot;\u5927\u706F&quot;, AttributeValue: &quot;LED&quot;},</span>
	<span class="token comment">//	{Attribute: &quot;\u65B9\u5411\u76D8&quot;, AttributeValue: &quot;\u771F\u76AE&quot;},</span>
	<span class="token comment">//}}}</span>
	<span class="token comment">////Omit \u5FFD\u7565 \u67D0\u4E9B\u5B57\u6BB5(\u5173\u8054)\uFF0C\u8FD9\u91CC\u76F4\u63A5 clause.Associations\uFF0C\u5FFD\u7565\u6240\u6709\u7684\u5173\u8054</span>
	<span class="token comment">//common.Db.Omit(clause.Associations).Create(products)</span>

	<span class="token comment">//update with callbacks\uFF0C\u8FD9\u4E2A\u66F4\u65B0\u64CD\u4F5C\u5C06\u6267\u884C\u6A21\u578B\u7684BeforeUpdate, AfterUpdate\u65B9\u6CD5\uFF0C\u66F4\u65B0\u5176UpdatedAt\u65F6\u95F4\u6233</span>
	<span class="token comment">//common.Db.Model(model.Product{}).Set(&quot;gorm:save_associations&quot;, false).Where(&quot;id = ?&quot;, 8).Updates(map[string]interface{}{&quot;name&quot;:&quot;\u907F\u6691\u65C5\u6E38\u6253\u5361\u7684\u597D\u5730\u65B9&quot;})</span>

	<span class="token comment">//update\uFF0C\u8FD9\u4E2A\u66F4\u65B0\u64CD\u4F5C\u4E0D\u4F1A\u6267\u884C callbacks\u76F8\u5173\u7684\u65B9\u6CD5</span>
	<span class="token comment">//common.Db.Model(model.Product{}).Set(&quot;gorm:save_associations&quot;, false).Where(&quot;id = ?&quot;, 8).UpdateColumns(map[string]interface{}{&quot;name&quot;: &quot;\u907F\u6691\u65C5\u6E38\u6253\u5361\u5E26\u5A03\u91CE\u708A\u7684\u597D\u5730\u65B9&quot;, &quot;kind&quot;: &quot;\u533B\u7597\u5065\u5EB7&quot;})</span>

	<span class="token comment">//update\uFF0C\u8FD9\u4E2A\u66F4\u65B0\u64CD\u4F5C\u4E0D\u4F1A\u6267\u884C callbacks\u76F8\u5173\u7684\u65B9\u6CD5\uFF0C\u901A\u8FC7 Omit \u5FFD\u7565\u67D0\u4E9B\u5B57\u6BB5\uFF0C\u4E0D\u505A\u66F4\u65B0</span>
	<span class="token comment">//common.Db.Model(model.Product{}).Set(&quot;gorm:save_associations&quot;, false).Where(&quot;id = ?&quot;, 8).Omit(&quot;name&quot;).UpdateColumns(map[string]interface{}{&quot;name&quot;: &quot;\u907F\u6691\u65C5\u6E38\u6253\u5361\u5E26\u5A03\u91CE\u708A\u7684\u597D\u5730\u65B9&quot;, &quot;kind&quot;: &quot;\u533B\u7597\u5065\u5EB7&quot;})</span>

	<span class="token comment">//update\uFF0C\u540C\u65F6\u66F4\u65B0\u76F8\u5173\u7684\u5173\u8054\u6A21\u578B,\u5982\u679C\u5F85\u66F4\u65B0\u5185\u5BB9\u4E0D\u5305\u542B \u5173\u8054\u6A21\u578B\u5B57\u6BB5\uFF0C\u90A3\u4E48\u76F4\u63A5\u66F4\u65B0\u6210\u529F</span>
	<span class="token comment">//common.Db.Model(model.Product{}).Where(&quot;id = ?&quot;, 8).UpdateColumns(map[string]interface{}{&quot;name&quot;: &quot;\u907F\u6691\u65C5\u6E38\u56E2\u5EFA\u7684\u597D\u5730\u65B9&quot;, &quot;kind&quot;: &quot;\u5065\u8EAB\u8FD0\u52A8&quot;})</span>

	<span class="token comment">//\u5173\u4E8E\u66F4\u65B0\u6709\u51E0\u4E2A\u7EC6\u8282\u95EE\u9898\uFF1A\u2460\u5982\u679C\u4F7F\u7528map\u7684\u8BDD\u53EF\u4EE5\u66F4\u65B0\u4EFB\u610F\u7ED3\u679C\uFF0C\u4F46\u662F\u5982\u679C\u4F7F\u7528struct\u7684\u8BDD\uFF0C\u5982\u679C\u5F85\u66F4\u65B0\u503C\u4E3A &quot;&quot; 0 false\uFF0C\u90FD\u4E0D\u4F1A\u88AB\u66F4\u65B0\uFF0C\u4E0B\u9762\u7684name\u503C\u4E0D\u4F1A\u53D8</span>
	<span class="token comment">//common.Db.Model(model.Product{}).Where(&quot;id = ?&quot;, 8).UpdateColumns(model.Product{Name: &quot;&quot;, Kind: &quot;\u4E2D\u533B\u7406\u7597&quot;})</span>
	<span class="token comment">//name\u7684\u503C\u53D8\u4E3A\u7A7A</span>
	<span class="token comment">//common.Db.Model(model.Product{}).Where(&quot;id = ?&quot;, 8).UpdateColumns(map[string]interface{}{&quot;name&quot;: &quot;&quot;, &quot;kind&quot;: &quot;\u4E2D\u533B\u7406\u7597&quot;})</span>

	<span class="token comment">//\u5E26\u5173\u8054\u6A21\u578B\u7684 \u66F4\u65B0\uFF0C\u6211\u8FD8\u6CA1\u627E\u5230\u600E\u4E48\u66F4\u65B0\u5173\u8054\u5173\u7CFB...\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u80AF\u5B9A\u662F\u4E0D\u884C\u7684\uFF0C\u56E0\u4E3A\u6CA1\u6709\u5173\u8054\u5173\u7CFB\u6570\u636E\u7684id</span>
	<span class="token comment">//product := model.Product{Name: &quot;\u907F\u6691\u65C5\u6E38\u56E2\u5EFA\u6253\u5361\u7684\u597D\u5730\u65B9&quot;, Kind: &quot;\u5065\u8EAB\u8FD0\u52A8&quot;, Attributes: []model.ProductAttribute{</span>
	<span class="token comment">//	{Attribute: &quot;\u5927\u706F&quot;, AttributeValue: &quot;LED&quot;},</span>
	<span class="token comment">//	{Attribute: &quot;\u65B9\u5411\u76D8&quot;, AttributeValue: &quot;\u771F\u76AE&quot;},</span>
	<span class="token comment">//}}</span>
	<span class="token comment">//common.Db.Model(model.Product{}).Where(&quot;id = ?&quot;, 8).Save(product)</span>


	<span class="token comment">//\u5220\u9664\u64CD\u4F5C,\u5F53\u6570\u636E\u5E93\u5B9A\u4E49\u4E86 deleted_at\uFF0C\u90A3\u4E48\u5C31\u4F1A\u51FA\u53D1\u8F6F\u5220\u9664\u64CD\u4F5C(\u7ED9deleted_at\u8D4B\u503C)</span>
	<span class="token comment">//common.Db.Where(&quot;id = ?&quot;, 1).Delete(&amp;model.Order{})</span>

	<span class="token comment">//Unscoped\u7684\u7528\u6CD5\uFF0C\u2460\u53EF\u4EE5\u7528\u6765\u786C\u5220\u9664\u6570\u636E \u2461\u53EF\u4EE5\u7528\u6765\u67E5\u8BE2\u8F6F\u5220\u9664\u7684\u6570\u636E</span>
	<span class="token comment">//order := model.Order{}</span>
	<span class="token comment">//common.Db.Where(&quot;id = ?&quot;, 1).Unscoped().First(&amp;order)</span>
	<span class="token comment">//fmt.Printf(&quot;order is:%+v\\n&quot;, order)</span>

	<span class="token comment">//common.Db.Where(&quot;id = ?&quot;, 1).Unscoped().Delete(&amp;model.Order{})</span>


	<span class="token comment">//\u9A8C\u8BC1 \u591A\u5BF9\u591A \u64CD\u4F5C</span>
	<span class="token comment">//TODO::\u660E\u5929\u66F4\u65B0</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[a];function u(c,l){return t(),s("div",null,i)}var d=n(o,[["render",u],["__file","gorm\u6570\u636E\u5E93\u64CD\u4F5C\u4E0A.html.vue"]]);export{d as default};
