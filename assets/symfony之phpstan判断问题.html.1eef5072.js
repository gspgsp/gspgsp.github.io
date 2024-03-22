import{_ as n,o as s,c as a,g as e}from"./app.b04686bd.js";const t={},p=e(`<p>symfony\u4E4Bphpstan\u5224\u65AD\u95EE\u9898:<br> \u6709\u5982\u4E0B\u5199\u6CD5\u7684\u4EE3\u7801\uFF0C\u5728phpstan\u505A\u4EE3\u7801\u5206\u6790\u7684\u65F6\u5019\uFF0C\u4F1A\u51FA\u73B0\u4E24\u79CD\u4E0D\u540C\u7684\u7ED3\u679C</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>DateTime</span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">date_regular_registration_end</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token comment">//\u5982\u679C\u8FD9\u6837\u5224\u65AD\uFF0C\u90A3\u4E48\u5C31\u4F1A\u4E00\u76F4\u4E3Atrue\uFF0C\u56E0\u4E3A getDateRegularRegistrationEnd \u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>


<span class="token punctuation">}</span>
    
    
    
<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>DateTime<span class="token punctuation">|</span><span class="token keyword">null</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">date_regular_registration_end</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token comment">//\u5982\u679C\u8FD9\u6837\u5224\u65AD\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u8FD4\u56DEfasle\uFF0C\u56E0\u4E3A getDateRegularRegistrationEnd \u6709null\u5C5E\u6027</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>


<span class="token punctuation">}</span>

\u8FD9\u4E2A\u662F\u901A\u8FC7phpstan\u5224\u65AD\u51FA\u6765\u7684\uFF0C\u5C3D\u7BA1\u4E0A\u9762\u901A\u8FC7<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getDateRegularRegistrationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\u53EF\u4EE5\u8FD4\u56DE<span class="token constant">null</span><span class="token punctuation">,</span>\u4F46\u662F\u5374\u4E0D\u80FD\u901A\u8FC7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function l(c,o){return s(),a("div",null,i)}var r=n(t,[["render",l],["__file","symfony\u4E4Bphpstan\u5224\u65AD\u95EE\u9898.html.vue"]]);export{r as default};
