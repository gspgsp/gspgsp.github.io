import{_ as n,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const p={};function i(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<p>larave模型中的几个小技巧:<br></p><p>①模型中关于 $dates 和 $dateFormat<br></p><p>//将 [] 中自定的字段，转为 Carbon 类的时间对象，可以使用 Carbon 的方法，比如：$data-&gt;deleted_at-&gt;getTimestamp()；默认 created_at 和 updated_at 都已经转过了，就不用在 [] 里 写了 protected $dates = [&#39;deleted_at&#39;];</p><p>//定义时间存储到数据的格式，默认 &#39;Y-m-d H:i:s&#39; protected $dateFormat = &#39;Y-m-d H:i&#39;;</p><p>②模型中关于scope的使用，主要有两种使用方式:<br></p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"></span>
<span class="line">//局部使用Scope，这个status scope 还带了参数，更加灵活， 使用的时候直接 Produt::query()-&gt;-&gt;status(1)-&gt;get();就可以了</span>
<span class="line">public function scopeStatus($query, $status = 0)</span>
<span class="line">{</span>
<span class="line">      return $query-&gt;where(&#39;status&#39;, $status);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//全局使用Scope，这个不许用显示的调用</span>
<span class="line">protected static function boot()</span>
<span class="line">{</span>
<span class="line">    parent::boot();</span>
<span class="line"></span>
<span class="line">    //通过给scope 定义一个名称 filter，定义名称的好处是，可以通过 withoutGlobalScope()，取消指定名称的 scope；或者 withoutGlobalScopes(),不带参数可以取消所有scope</span>
<span class="line">    static::addGlobalScope(&#39;filter&#39;, function (Builder $builder) {</span>
<span class="line">        $builder-&gt;where(&#39;status&#39;, 0);</span>
<span class="line">    });</span>
<span class="line"></span>
<span class="line">    //匿名 scope</span>
<span class="line">    static::addGlobalScope(function (Builder $builder) {</span>
<span class="line">        $builder-&gt;where(&#39;status&#39;, 0);</span>
<span class="line">    });</span>
<span class="line"></span>
<span class="line">    //定义一个 Scope 实例，一定要new 一个对象</span>
<span class="line">    static::addGlobalScope(new StatusScope());</span>
<span class="line"> }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> //StatusScope 类如下，实现了Scope的一个apply接口</span>
<span class="line"> <span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"> <span class="token doc-comment comment">/**</span>
<span class="line">  * Created by PhpStorm.</span>
<span class="line">  * User: guoshipeng</span>
<span class="line">  * Date: 2022/9/23</span>
<span class="line">  * Time: 11:26</span>
<span class="line">  */</span></span>
<span class="line"></span>
<span class="line"> <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Scopes</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"> <span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Builder</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Scope</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"> <span class="token keyword">class</span> <span class="token class-name-definition class-name">StatusScope</span> <span class="token keyword">implements</span> <span class="token class-name">Scope</span></span>
<span class="line"> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">apply</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Builder</span> <span class="token variable">$builder</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Model</span> <span class="token variable">$model</span><span class="token punctuation">)</span></span>
<span class="line">     <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">return</span> <span class="token variable">$builder</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"> ③自动维 护创建时间 或 更新时间</span>
<span class="line"> 直接在模型里面加 <span class="token keyword">public</span>    <span class="token variable">$timestamps</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> 即可实现自动维护<span class="token operator">&lt;</span>br<span class="token operator">&gt;</span></span>
<span class="line"> 有时候我们只想维护其中一个，怎么弄，比如不需要自动更新时间，可以在模型里加： <span class="token keyword">const</span> <span class="token constant">UPDATED_AT</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span></span>
<span class="line"> 或者我们不想要 updated_at，想要改为其它的，我们可以在模型里加：<span class="token keyword">const</span> <span class="token constant">UPDATED_AT</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;update_time&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=n(p,[["render",i],["__file","laravel模型中的几个小技巧.html.vue"]]),d=JSON.parse('{"path":"/content/php/laravel/laravel%E6%A8%A1%E5%9E%8B%E4%B8%AD%E7%9A%84%E5%87%A0%E4%B8%AA%E5%B0%8F%E6%8A%80%E5%B7%A7.html","title":"laravel模型中的几个小技巧","lang":"en-US","frontmatter":{"sidebar":false,"title":"laravel模型中的几个小技巧","head":[["meta",{"name":"title","content":"laravel模型中的几个小技巧"}],["meta",{"name":"description","content":"laravel模型中的几个小技巧"}],["meta",{"name":"keywords","content":"laravel11,laravel技巧"}],["meta",{"property":"og:title","content":"laravel模型中的几个小技巧"}],["meta",{"property":"og:description","content":"laravel模型中的几个小技巧"}]]},"headers":[],"git":{},"filePathRelative":"content/php/laravel/laravel模型中的几个小技巧.md"}');export{o as comp,d as data};
