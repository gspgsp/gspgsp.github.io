import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h5 id="php8之enum配合match的使用" tabindex="-1"><a class="header-anchor" href="#php8之enum配合match的使用"><span>php8之enum配合match的使用:</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 定义了如下enum类，用于获取 suffix</span>
<span class="line">enum RegistrationSuffix: string</span>
<span class="line">{</span>
<span class="line">    case Early = &#39;early&#39;;</span>
<span class="line">    case Late = &#39;late&#39;;</span>
<span class="line">    case Regular = &#39;regular&#39;;</span>
<span class="line"></span>
<span class="line">    public static function getSuffix(?string $suffix): self</span>
<span class="line">    {</span>
<span class="line">        return match ($suffix) {//使用 match 表达式（PHP 8.0+）来实现选择逻辑</span>
<span class="line">            &#39;Early bird&#39; =&gt; self::Early,</span>
<span class="line">            &#39;Late&#39;       =&gt; self::Late,</span>
<span class="line">            default      =&gt; self::Regular,</span>
<span class="line">        };</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用</span>
<span class="line">$suffix = RegistrationSuffix::getSuffix(&#39;Early bird&#39;);</span>
<span class="line">var_dump($suffix); // enum(RegistrationSuffix::Early)</span>
<span class="line"></span>
<span class="line">$suffixValue = RegistrationSuffix::getSuffix(&#39;Early bird&#39;)-&gt;value;</span>
<span class="line">echo $suffixValue; // 输出 &quot;early&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",t],["__file","php8之enum配合match的使用.html.vue"]]),m=JSON.parse('{"path":"/content/php/base/php8%E4%B9%8Benum%E9%85%8D%E5%90%88match%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"php8之enum配合match的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"php8之enum配合match的使用","head":[["meta",{"name":"title","content":"php8之enum配合match的使用"}],["meta",{"name":"description","content":"php8之enum配合match的使用"}],["meta",{"name":"keywords","content":"symfony7,match,php"}],["meta",{"property":"og:title","content":"php8之enum配合match的使用"}],["meta",{"property":"og:description","content":"php8之enum配合match的使用"}]]},"headers":[],"git":{},"filePathRelative":"content/php/base/php8之enum配合match的使用.md"}');export{r as comp,m as data};
