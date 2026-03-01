import{_ as l,c as t,f as o,a as n,o as c,r as s}from"./app-BB_BIQV8.js";const r={};function d(p,e){const i=s("BackBtn"),a=s("CommentService");return c(),t("div",null,[e[0]||(e[0]=o(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">①多个查询共用一个 tx *DB，查询句柄</span>
<span class="line">比如 公共部分如下：</span>
<span class="line">db := common.Db.Model(&amp;model.Product{}).Select(&quot;id, kind, count(*) as total&quot;)</span>
<span class="line"></span>
<span class="line">后面可以根据 不同条件进行操作:</span>
<span class="line">db.Where(...)</span>
<span class="line"></span>
<span class="line">②通过Scopes实现闭包查询功能</span>
<span class="line"></span>
<span class="line">下面这个操作主要实现的是，where and or 功能，可以直接在where里面通过()将两个条件括起来，就像原生sql查询一样，其实这也是gorm的一个优势，直接可以在orm里写原生sql</span>
<span class="line">//listTx := common.Db.Preload(&quot;Attributes&quot;).Where(&quot;kind = ? and (name like ? or properties like ?)&quot;, res.Kind.Kind, &quot;%&quot;+keywords+&quot;%&quot;, &quot;%&quot;+keywords+&quot;%&quot;)</span>
<span class="line"></span>
<span class="line">//通过Scopes来实现闭包where查询，就像 laravel 一样，</span>
<span class="line">listTx := common.Db.Preload(&quot;Attributes&quot;).Scopes(func(db *gorm.DB) *gorm.DB {</span>
<span class="line">    return db.Where(&quot;name like ? or properties like ?&quot;, &quot;%&quot;+keywords+&quot;%&quot;, &quot;%&quot;+keywords+&quot;%&quot;)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),n(i),n(a)])}const m=l(r,[["render",d],["__file","gin框架下通过Scopes实现闭包查询功能.html.vue"]]),v=JSON.parse('{"path":"/content/go/gin/gin%E6%A1%86%E6%9E%B6%E4%B8%8B%E9%80%9A%E8%BF%87Scopes%E5%AE%9E%E7%8E%B0%E9%97%AD%E5%8C%85%E6%9F%A5%E8%AF%A2%E5%8A%9F%E8%83%BD.html","title":"gin框架下通过Scopes实现闭包查询功能","lang":"en-US","frontmatter":{"sidebar":false,"title":"gin框架下通过Scopes实现闭包查询功能","description":"gin框架下通过Scopes实现闭包查询功能"},"headers":[],"git":{},"filePathRelative":"content/go/gin/gin框架下通过Scopes实现闭包查询功能.md"}');export{m as comp,v as data};
