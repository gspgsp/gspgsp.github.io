import{_ as s,c as a,f as t,o as e}from"./app-BB_BIQV8.js";const l={};function i(p,n){return e(),a("div",null,n[0]||(n[0]=[t(`<p>gorm数据库迁移上:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">	<span class="token comment">//简单数据库迁移,这个是比较简单的迁移操作(单表迁移)</span></span>
<span class="line">	<span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">		Id             <span class="token builtin">uint</span>      <span class="token string">\`gorm:&quot;primarykey;not null;auto_increment;column:id;comment:ID&quot;\`</span></span>
<span class="line">		No             <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(255);default:NULL;column:no;comment:订单编号&quot;\`</span></span>
<span class="line">		OutTradeNo     <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(255);default:NULL;column:out_trade_no;comment:订单流水号&quot;\`</span></span>
<span class="line">		PayOrderNo     <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(255);default:NULL;column:pay_order_no;comment:支付平台订单号&quot;\`</span></span>
<span class="line">		Title          <span class="token builtin">string</span>    <span class="token string">\`gorm:&quot;type:varchar(255);default:NULL;column:title;comment:订单标题&quot;\`</span></span>
<span class="line">		Amount         <span class="token builtin">float64</span>   <span class="token string">\`gorm:&quot;type:decimal(10,2);default:0.0;column:amount;comment:订单金额&quot;\`</span></span>
<span class="line">		Status         <span class="token builtin">int8</span>      <span class="token string">\`gorm:&quot;type:tinyint(1);default:0;column:status;comment:订单状态[0:未支付,1:已完成,-1:已过期]&quot;\`</span></span>
<span class="line">		PayAmount      <span class="token builtin">float64</span>   <span class="token string">\`gorm:&quot;type:decimal(10,2);default:0.0;column:pay_amount;comment:支付金额&quot;\`</span></span>
<span class="line">		PayStatus      <span class="token builtin">int8</span>      <span class="token string">\`gorm:&quot;type:tinyint(1);default:0;column:pay_status;comment:支付状态[0:未支付,1:已支付,-1:支付失败]&quot;\`</span></span>
<span class="line">		PayExpiredAt   time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:pay_expired_at;comment:支付过期时间&quot;\`</span></span>
<span class="line">		PayAt          time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:pay_at;comment:支付过期时间&quot;\`</span></span>
<span class="line">		UserId         <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:user_id;comment:用户ID&quot;\`</span></span>
<span class="line">		CreatedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:created_at;comment:创建时间&quot;\`</span></span>
<span class="line">		DeletedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:deleted_at;comment:创建时间&quot;\`</span></span>
<span class="line">		UpdatedAt      time<span class="token punctuation">.</span>Time <span class="token string">\`gorm:&quot;type:timestamp;default:NULL;column:updated_at;comment:更新时间&quot;\`</span></span>
<span class="line">		CreatedAdminId <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:created_admin_id;comment:创建人ID&quot;\`</span></span>
<span class="line">		UpdatedAdminId <span class="token builtin">int</span>       <span class="token string">\`gorm:&quot;type:int;default:NULL;column:updated_admin_id;comment:更新人ID&quot;\`</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">//err := common.Db.AutoMigrate(&amp;model.Order{})</span></span>
<span class="line">	<span class="token comment">//if err != nil {</span></span>
<span class="line">	<span class="token comment">//	fmt.Println(&quot;迁移错误:&quot;, err)</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//fmt.Println(&quot;迁移完成&quot;)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//手动通过 Migrator 对象实现相关的操作</span></span>
<span class="line">	<span class="token comment">//m := common.Db.Migrator()</span></span>
<span class="line">	<span class="token comment">//err := m.CreateTable(&amp;model.Order{})</span></span>
<span class="line">	<span class="token comment">//if err != nil {</span></span>
<span class="line">	<span class="token comment">//	fmt.Println(&quot;迁移错误:&quot;, err)</span></span>
<span class="line">	<span class="token comment">//}</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//fmt.Println(&quot;迁移完成&quot;)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(l,[["render",i],["__file","gorm数据库迁移上.html.vue"]]),m=JSON.parse('{"path":"/content/go/base/gorm%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%81%E7%A7%BB%E4%B8%8A.html","title":"gorm数据库迁移上","lang":"en-US","frontmatter":{"sidebar":false,"title":"gorm数据库迁移上","description":"gorm数据库迁移上"},"headers":[],"git":{},"filePathRelative":"content/go/base/gorm数据库迁移上.md"}');export{c as comp,m as data};
