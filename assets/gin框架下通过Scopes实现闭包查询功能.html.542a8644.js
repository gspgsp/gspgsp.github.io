import{_ as t,o as s,c as r,a as e,g as d,r as n}from"./app.264f0052.js";const l={},u=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2460\u591A\u4E2A\u67E5\u8BE2\u5171\u7528\u4E00\u4E2A tx *DB\uFF0C\u67E5\u8BE2\u53E5\u67C4
\u6BD4\u5982 \u516C\u5171\u90E8\u5206\u5982\u4E0B\uFF1A
db := common.Db.Model(&amp;model.Product{}).Select(&quot;id, kind, count(*) as total&quot;)

\u540E\u9762\u53EF\u4EE5\u6839\u636E \u4E0D\u540C\u6761\u4EF6\u8FDB\u884C\u64CD\u4F5C:
db.Where(...)

\u2461\u901A\u8FC7Scopes\u5B9E\u73B0\u95ED\u5305\u67E5\u8BE2\u529F\u80FD

\u4E0B\u9762\u8FD9\u4E2A\u64CD\u4F5C\u4E3B\u8981\u5B9E\u73B0\u7684\u662F\uFF0Cwhere and or \u529F\u80FD\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728where\u91CC\u9762\u901A\u8FC7()\u5C06\u4E24\u4E2A\u6761\u4EF6\u62EC\u8D77\u6765\uFF0C\u5C31\u50CF\u539F\u751Fsql\u67E5\u8BE2\u4E00\u6837\uFF0C\u5176\u5B9E\u8FD9\u4E5F\u662Fgorm\u7684\u4E00\u4E2A\u4F18\u52BF\uFF0C\u76F4\u63A5\u53EF\u4EE5\u5728orm\u91CC\u5199\u539F\u751Fsql
//listTx := common.Db.Preload(&quot;Attributes&quot;).Where(&quot;kind = ? and (name like ? or properties like ?)&quot;, res.Kind.Kind, &quot;%&quot;+keywords+&quot;%&quot;, &quot;%&quot;+keywords+&quot;%&quot;)

//\u901A\u8FC7Scopes\u6765\u5B9E\u73B0\u95ED\u5305where\u67E5\u8BE2\uFF0C\u5C31\u50CF laravel \u4E00\u6837\uFF0C
listTx := common.Db.Preload(&quot;Attributes&quot;).Scopes(func(db *gorm.DB) *gorm.DB {
    return db.Where(&quot;name like ? or properties like ?&quot;, &quot;%&quot;+keywords+&quot;%&quot;, &quot;%&quot;+keywords+&quot;%&quot;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function c(a,m){const o=n("BackBtn"),i=n("CommentService");return s(),r("div",null,[u,e(o),e(i)])}var _=t(l,[["render",c],["__file","gin\u6846\u67B6\u4E0B\u901A\u8FC7Scopes\u5B9E\u73B0\u95ED\u5305\u67E5\u8BE2\u529F\u80FD.html.vue"]]);export{_ as default};
