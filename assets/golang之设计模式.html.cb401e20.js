import{_ as n,o as s,c as a,g as e}from"./app.dd03cafd.js";const t={},p=e(`<p>\u521B\u5EFA\u578B\u6A21\u5F0F\uFF0C\u5171\u4E94\u79CD\uFF1A\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u3001\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u3001\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u3001\u5355\u4F8B\u6A21\u5F0F\u3001\u5EFA\u9020\u8005\u6A21\u5F0F\u3001\u539F\u578B\u6A21\u5F0F\u3002 \u7ED3\u6784\u578B\u6A21\u5F0F\uFF0C\u5171\u4E03\u79CD\uFF1A\u9002\u914D\u5668\u6A21\u5F0F\u3001\u88C5\u9970\u5668\u6A21\u5F0F\u3001\u4EE3\u7406\u6A21\u5F0F\u3001\u5916\u89C2\u6A21\u5F0F\u3001\u6865\u63A5\u6A21\u5F0F\u3001\u7EC4\u5408\u6A21\u5F0F\u3001\u4EAB\u5143\u6A21\u5F0F\u3002 \u884C\u4E3A\u578B\u6A21\u5F0F\uFF0C\u5171\u5341\u4E00\u79CD\uFF1A\u7B56\u7565\u6A21\u5F0F\u3001\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u3001\u89C2\u5BDF\u8005\u6A21\u5F0F\u3001\u8FED\u4EE3\u5668\u6A21\u5F0F\u3001\u8D23\u4EFB\u94FE\u6A21\u5F0F\u3001\u547D\u4EE4\u6A21\u5F0F\u3001\u5907\u5FD8\u5F55\u6A21\u5F0F\u3001\u72B6\u6001\u6A21\u5F0F\u3001\u8BBF\u95EE\u8005\u6A21\u5F0F\u3001\u4E2D\u4ECB\u8005\u6A21\u5F0F\u3001\u89E3\u91CA\u5668\u6A21\u5F0F\u3002</p><p>1.\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\uFF0C\u4E00\u822C\u662F\u4EE5NewXXX \u8FD4\u56DE interface(\u63A5\u53E3)\uFF0C\u7136\u540E\u6839\u636E\u8FD9\u4E2A \u8FD4\u56DE\u7684\u63A5\u53E3\u5BF9\u8C61\uFF0C\u8C03\u7528\u5BF9\u8C61\u5B9E\u73B0\u63A5\u53E3\u7684\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u4E86<br> 2.\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\uFF1A\u4F7F\u7528\u5B50\u7C7B\u7684\u65B9\u5F0F\u5EF6\u8FDF\u751F\u6210\u5BF9\u8C61\u5230\u5B50\u7C7B\u4E2D\u5B9E\u73B0<br></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ParseInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">parseConfigFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> parser <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>y <span class="token operator">*</span>parser<span class="token punctuation">)</span> <span class="token function">parseConfigFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;config name is:&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> jsonParser <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	parser
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newJsonParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ParseInterface <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>jsonParser<span class="token punctuation">{</span>
		parser<span class="token punctuation">{</span>
			name<span class="token punctuation">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> yamlParser <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	parser
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newYamlParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ParseInterface <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>yamlParser<span class="token punctuation">{</span>
		parser<span class="token punctuation">{</span>
			name<span class="token punctuation">:</span> <span class="token string">&quot;yaml&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sFactory</span><span class="token punctuation">(</span>t <span class="token builtin">int</span><span class="token punctuation">)</span> ParseInterface <span class="token punctuation">{</span>
	<span class="token keyword">var</span> obj ParseInterface
	<span class="token keyword">switch</span> t <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
		obj <span class="token operator">=</span> <span class="token function">newJsonParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
		obj <span class="token operator">=</span> <span class="token function">newYamlParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\u9519\u8BEF&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> obj
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestFactory</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ft <span class="token operator">:=</span> <span class="token function">sFactory</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	ft<span class="token punctuation">.</span><span class="token function">parseConfigFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">//=== RUN   TestFactory</span>
	<span class="token comment">//config name is: json</span>
	<span class="token comment">//--- PASS: TestFactory (0.00s)</span>
	<span class="token comment">//PASS</span>
	<span class="token comment">//</span>
	<span class="token comment">//Process finished with the exit code 0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u5355\u4F8B\u6A21\u5F0F<br></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> user <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> once sync<span class="token punctuation">.</span>Once <span class="token comment">//\u901A\u8FC7\u8FD9\u4E2A\u5B9E\u73B0\u5355\u6B21\u52A0\u8F7D</span>
<span class="token keyword">var</span> userInstance <span class="token operator">*</span>user

<span class="token keyword">func</span> <span class="token function">NewUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>user <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		userInstance <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> userInstance
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestSingle</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//user1 := NewUser()</span>
	<span class="token comment">//user1.Name = &quot;\u6D4B\u8BD511111111111&quot;</span>
	<span class="token comment">//fmt.Printf(&quot;user1 p is:%p\\n&quot;, user1)</span>
	<span class="token comment">//</span>
	<span class="token comment">//user2 := NewUser()</span>
	<span class="token comment">//user2.Name = &quot;\u6D4B\u8BD522222222222222&quot;</span>
	<span class="token comment">//fmt.Printf(&quot;user2 p is:%p\\n&quot;, user2)</span>

	<span class="token comment">//\u6253\u5370\u7ED3\u679C\uFF0Cuser1\u548Cuser2\u7684\u5730\u5740\u76F8\u540C</span>
	<span class="token comment">//=== RUN   TestSingle</span>
	<span class="token comment">//user1 p is:0xc00070a1f0</span>
	<span class="token comment">//user2 p is:0xc00070a1f0</span>
	<span class="token comment">//--- PASS: TestSingle (0.00s)</span>
	<span class="token comment">//PASS</span>
	<span class="token comment">//</span>
	<span class="token comment">//Process finished with the exit code 0</span>


	onceFunc <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func is coming&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>onceFunc<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u6253\u5370\u7ED3\u679C \u53EA\u4F1A\u8F93\u51FA\u4E00\u6B21\uFF1B\u8FD8\u52A0\u4E86 debug \u8C03\u8BD5</span>
	<span class="token comment">//=== RUN   TestSingle</span>
	<span class="token comment">//func is coming</span>
	<span class="token comment">//--- PASS: TestSingle (31.72s)</span>
	<span class="token comment">//PASS</span>
	<span class="token comment">//</span>
	<span class="token comment">//Debugger finished with the exit code 0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[p];function c(o,l){return s(),a("div",null,i)}var r=n(t,[["render",c],["__file","golang\u4E4B\u8BBE\u8BA1\u6A21\u5F0F.html.vue"]]);export{r as default};
