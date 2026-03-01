import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h5 id="symfony7下enum之cases的使用" tabindex="-1"><a class="header-anchor" href="#symfony7下enum之cases的使用"><span>symfony7下Enum之cases的使用</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Enum;</span>
<span class="line"></span>
<span class="line">enum OrderUserTabEnum: string</span>
<span class="line">{</span>
<span class="line">    case ALL = &#39;all&#39;;</span>
<span class="line">    case PENDING_PAYMENT = &#39;pendingPayment&#39;;</span>
<span class="line">    case PENDING_UPDATED = &#39;pendingUpdated&#39;;</span>
<span class="line"></span>
<span class="line">    public static function casesAsKeyValue(): array</span>
<span class="line">    {</span>
<span class="line">        $result = [];</span>
<span class="line">        foreach (self::cases() as $case) {</span>
<span class="line">            $result[$case-&gt;name] = $case-&gt;value;</span>
<span class="line">        }</span>
<span class="line">        return $result;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">返回如下结构:</span>
<span class="line">array:3 [</span>
<span class="line">  &quot;ALL&quot; =&gt; &quot;all&quot;</span>
<span class="line">  &quot;PENDING_PAYMENT&quot; =&gt; &quot;pendingPayment&quot;</span>
<span class="line">  &quot;PENDING_UPDATED&quot; =&gt; &quot;pendingUpdated&quot;</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",c],["__file","symfony7下Enum之cases的使用.html.vue"]]),m=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B8%8BEnum%E4%B9%8Bcases%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"symfony7下Enum之cases的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7下Enum之cases的使用","head":[["meta",{"name":"title","content":"symfony7下Enum之cases的使用"}],["meta",{"name":"description","content":"symfony7下Enum之cases的使用"}],["meta",{"name":"keywords","content":"symfony,php,enum,cases"}],["meta",{"property":"og:title","content":"symfony7下Enum之cases的使用"}],["meta",{"property":"og:description","content":"symfony7下Enum之cases的使用"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7下Enum之cases的使用.md"}');export{d as comp,m as data};
