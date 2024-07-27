import{_ as n,o as t,c as s,g as a}from"./app.6e4bf74b.js";const e={},i=a(`<p>gorm\u6570\u636E\u5E93\u8FC1\u79FB\u4E0A:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>	<span class="token comment">//\u7B80\u5355\u6570\u636E\u5E93\u8FC1\u79FB,\u8FD9\u4E2A\u662F\u6BD4\u8F83\u7B80\u5355\u7684\u8FC1\u79FB\u64CD\u4F5C(\u5355\u8868\u8FC1\u79FB)</span>
	<span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		Id             <span class="token builtin">uint</span>      <span class="token string">\`gorm:&quot;primarykey;not null;auto_increment;column:id;comment:ID&quot;\`</span>
		No             <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(255);default:NULL;column:no;comment:\u8BA2\u5355\u7F16\u53F7&quot;\`</span>
		OutTradeNo     <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(255);default:NULL;column:out_trade_no;comment:\u8BA2\u5355\u6D41\u6C34\u53F7&quot;\`</span>
		PayOrderNo     <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(255);default:NULL;column:pay_order_no;comment:\u652F\u4ED8\u5E73\u53F0\u8BA2\u5355\u53F7&quot;\`</span>
		Title          <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(255);default:NULL;column:title;comment:\u8BA2\u5355\u6807\u9898&quot;\`</span>
		Amount         <span class="token builtin">float64</span>   <span class="token string">\`gorm:&quot;type:decimal(10,2);default:0.0;column:amount;comment:\u8BA2\u5355\u91D1\u989D&quot;\`</span>
		Status         <span class="token builtin">int8</span>      <span class="token string">\`gorm:&quot;type:tinyint(1);default:0;column:status;comment:\u8BA2\u5355\u72B6\u6001[0:\u672A\u652F\u4ED8,1:\u5DF2\u5B8C\u6210,-1:\u5DF2\u8FC7\u671F]&quot;\`</span>
		PayAmount      <span class="token builtin">float64</span>   <span class="token string">\`gorm:&quot;type:decimal(10,2);default:0.0;column:pay_amount;comment:\u652F\u4ED8\u91D1\u989D&quot;\`</span>
		PayStatus      <span class="token builtin">int8</span>      <span class="token string">\`gorm:&quot;type:tinyint(1);default:0;column:pay_status;comment:\u652F\u4ED8\u72B6\u6001[0:\u672A\u652F\u4ED8,1:\u5DF2\u652F\u4ED8,-1:\u652F\u4ED8\u5931\u8D25]&quot;\`</span>
		PayExpiredAt   time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:pay_expired_at;comment:\u652F\u4ED8\u8FC7\u671F\u65F6\u95F4&quot;\`</span>
		PayAt          time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:pay_at;comment:\u652F\u4ED8\u8FC7\u671F\u65F6\u95F4&quot;\`</span>
		UserId         <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:user_id;comment:\u7528\u6237ID&quot;\`</span>
		CreatedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:created_at;comment:\u521B\u5EFA\u65F6\u95F4&quot;\`</span>
		DeletedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:deleted_at;comment:\u521B\u5EFA\u65F6\u95F4&quot;\`</span>
		UpdatedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:updated_at;comment:\u66F4\u65B0\u65F6\u95F4&quot;\`</span>
		CreatedAdminId <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:created_admin_id;comment:\u521B\u5EFA\u4EBAID&quot;\`</span>
		UpdatedAdminId <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:updated_admin_id;comment:\u66F4\u65B0\u4EBAID&quot;\`</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//err := common.Db.AutoMigrate(&amp;model.Order{})</span>
	<span class="token comment">//if err != nil {</span>
	<span class="token comment">//	fmt.Println(&quot;\u8FC1\u79FB\u9519\u8BEF:&quot;, err)</span>
	<span class="token comment">//}</span>
	<span class="token comment">//</span>
	<span class="token comment">//fmt.Println(&quot;\u8FC1\u79FB\u5B8C\u6210&quot;)</span>

	<span class="token comment">//\u624B\u52A8\u901A\u8FC7 Migrator \u5BF9\u8C61\u5B9E\u73B0\u76F8\u5173\u7684\u64CD\u4F5C</span>
	<span class="token comment">//m := common.Db.Migrator()</span>
	<span class="token comment">//err := m.CreateTable(&amp;model.Order{})</span>
	<span class="token comment">//if err != nil {</span>
	<span class="token comment">//	fmt.Println(&quot;\u8FC1\u79FB\u9519\u8BEF:&quot;, err)</span>
	<span class="token comment">//}</span>
	<span class="token comment">//</span>
	<span class="token comment">//fmt.Println(&quot;\u8FC1\u79FB\u5B8C\u6210&quot;)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[i];function l(m,c){return t(),s("div",null,o)}var p=n(e,[["render",l],["__file","gorm\u6570\u636E\u5E93\u8FC1\u79FB\u4E0A.html.vue"]]);export{p as default};
