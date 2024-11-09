import{_ as n,o as s,c as a,g as e}from"./app.66ae8700.js";const t={},i=e(`<p>larave\u6A21\u578B\u4E2D\u7684\u51E0\u4E2A\u5C0F\u6280\u5DE7:<br></p><p>\u2460\u6A21\u578B\u4E2D\u5173\u4E8E $dates \u548C $dateFormat<br></p><p>//\u5C06 [] \u4E2D\u81EA\u5B9A\u7684\u5B57\u6BB5\uFF0C\u8F6C\u4E3A Carbon \u7C7B\u7684\u65F6\u95F4\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528 Carbon \u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982\uFF1A$data-&gt;deleted_at-&gt;getTimestamp()\uFF1B\u9ED8\u8BA4 created_at \u548C updated_at \u90FD\u5DF2\u7ECF\u8F6C\u8FC7\u4E86\uFF0C\u5C31\u4E0D\u7528\u5728 [] \u91CC \u5199\u4E86 protected $dates = [&#39;deleted_at&#39;];</p><p>//\u5B9A\u4E49\u65F6\u95F4\u5B58\u50A8\u5230\u6570\u636E\u7684\u683C\u5F0F\uFF0C\u9ED8\u8BA4 &#39;Y-m-d H:i:s&#39; protected $dateFormat = &#39;Y-m-d H:i&#39;;</p><p>\u2461\u6A21\u578B\u4E2D\u5173\u4E8Escope\u7684\u4F7F\u7528\uFF0C\u4E3B\u8981\u6709\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F:<br></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
//\u5C40\u90E8\u4F7F\u7528Scope\uFF0C\u8FD9\u4E2Astatus scope \u8FD8\u5E26\u4E86\u53C2\u6570\uFF0C\u66F4\u52A0\u7075\u6D3B\uFF0C \u4F7F\u7528\u7684\u65F6\u5019\u76F4\u63A5 Produt::query()-&gt;-&gt;status(1)-&gt;get();\u5C31\u53EF\u4EE5\u4E86
public function scopeStatus($query, $status = 0)
{
      return $query-&gt;where(&#39;status&#39;, $status);
}

//\u5168\u5C40\u4F7F\u7528Scope\uFF0C\u8FD9\u4E2A\u4E0D\u8BB8\u7528\u663E\u793A\u7684\u8C03\u7528
protected static function boot()
{
    parent::boot();

    //\u901A\u8FC7\u7ED9scope \u5B9A\u4E49\u4E00\u4E2A\u540D\u79F0 filter\uFF0C\u5B9A\u4E49\u540D\u79F0\u7684\u597D\u5904\u662F\uFF0C\u53EF\u4EE5\u901A\u8FC7 withoutGlobalScope()\uFF0C\u53D6\u6D88\u6307\u5B9A\u540D\u79F0\u7684 scope\uFF1B\u6216\u8005 withoutGlobalScopes(),\u4E0D\u5E26\u53C2\u6570\u53EF\u4EE5\u53D6\u6D88\u6240\u6709scope
    static::addGlobalScope(&#39;filter&#39;, function (Builder $builder) {
        $builder-&gt;where(&#39;status&#39;, 0);
    });

    //\u533F\u540D scope
    static::addGlobalScope(function (Builder $builder) {
        $builder-&gt;where(&#39;status&#39;, 0);
    });

    //\u5B9A\u4E49\u4E00\u4E2A Scope \u5B9E\u4F8B\uFF0C\u4E00\u5B9A\u8981new \u4E00\u4E2A\u5BF9\u8C61
    static::addGlobalScope(new StatusScope());
 }


 //StatusScope \u7C7B\u5982\u4E0B\uFF0C\u5B9E\u73B0\u4E86Scope\u7684\u4E00\u4E2Aapply\u63A5\u53E3
 <span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

 <span class="token doc-comment comment">/**
  * Created by PhpStorm.
  * User: guoshipeng
  * Date: 2022/9/23
  * Time: 11:26
  */</span>

 <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Scopes</span><span class="token punctuation">;</span>

 <span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Builder</span><span class="token punctuation">;</span>
 <span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
 <span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Scope</span><span class="token punctuation">;</span>

 <span class="token keyword">class</span> <span class="token class-name-definition class-name">StatusScope</span> <span class="token keyword">implements</span> <span class="token class-name">Scope</span>
 <span class="token punctuation">{</span>
     <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">apply</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Builder</span> <span class="token variable">$builder</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token variable">$builder</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 \u2462\u81EA\u52A8\u7EF4 \u62A4\u521B\u5EFA\u65F6\u95F4 \u6216 \u66F4\u65B0\u65F6\u95F4
 \u76F4\u63A5\u5728\u6A21\u578B\u91CC\u9762\u52A0 <span class="token keyword">public</span>    <span class="token variable">$timestamps</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> \u5373\u53EF\u5B9E\u73B0\u81EA\u52A8\u7EF4\u62A4<span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
 \u6709\u65F6\u5019\u6211\u4EEC\u53EA\u60F3\u7EF4\u62A4\u5176\u4E2D\u4E00\u4E2A\uFF0C\u600E\u4E48\u5F04\uFF0C\u6BD4\u5982\u4E0D\u9700\u8981\u81EA\u52A8\u66F4\u65B0\u65F6\u95F4\uFF0C\u53EF\u4EE5\u5728\u6A21\u578B\u91CC\u52A0\uFF1A <span class="token keyword">const</span> <span class="token constant">UPDATED_AT</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
 \u6216\u8005\u6211\u4EEC\u4E0D\u60F3\u8981 updated_at\uFF0C\u60F3\u8981\u6539\u4E3A\u5176\u5B83\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u6A21\u578B\u91CC\u52A0\uFF1A<span class="token keyword">const</span> <span class="token constant">UPDATED_AT</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;update_time&#39;</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[i];function p(c,o){return s(),a("div",null,l)}var u=n(t,[["render",p],["__file","laravel\u6A21\u578B\u4E2D\u7684\u51E0\u4E2A\u5C0F\u6280\u5DE7.html.vue"]]);export{u as default};
