import{_ as s,c as a,f as e,o as p}from"./app-BB_BIQV8.js";const t={};function l(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>symfony之phpstan判断问题:<br> 有如下写法的代码，在phpstan做代码分析的时候，会出现两种不同的结果</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>DateTime</span></span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">date_regular_registration_end</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//如果这样判断，那么就会一直为true，因为 getDateRegularRegistrationEnd 会返回一个对象</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>DateTime<span class="token punctuation">|</span><span class="token keyword">null</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">date_regular_registration_end</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//如果这样判断，那么就可以返回fasle，因为 getDateRegularRegistrationEnd 有null属性</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">这个是通过phpstan判断出来的，尽管上面通过<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>可以返回<span class="token constant">null</span><span class="token punctuation">,</span>但是却不能通过</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(t,[["render",l],["__file","symfony之phpstan判断问题.html.vue"]]),u=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Bphpstan%E5%88%A4%E6%96%AD%E9%97%AE%E9%A2%98.html","title":"symfony之phpstan判断问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之phpstan判断问题","description":"symfony之phpstan判断问题"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之phpstan判断问题.md"}');export{o as comp,u as data};
