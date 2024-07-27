import{_ as n,o as s,c as a,g as t}from"./app.6e4bf74b.js";const p={},e=t(`<p>golang\u4E2D\u7684\u6CDB\u578B\u6982\u5FF5\u4EE5\u53CA\u4F7F\u7528:</p><p>\u7531\u4E8Ego\u8BED\u8A00\u662F\u5F3A\u7C7B\u578B\u8BED\u8A00\uFF0C\u6240\u4EE5\u57281.18\u7248\u672C\u4EE5\u524D\uFF0C\u65E0\u6CD5\u50CF\u4F7F\u7528PHP\u4E00\u6837\uFF0C\u968F\u610F\u5BF9\u4E0D\u540C\u7C7B\u578B\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\uFF1B\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u57281.18\u7248\u672C\u4EE5\u540E\u5C31\u6709\u4E86\u6CDB\u578B\u7684\u4F7F\u7528 \u6240\u8C13\u6CDB\u578B\u5C31\u662F\uFF1A\u5B9A\u4E49\u4E00\u7C7B\u901A\u7528\u7684\u6A21\u677F\u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E0D\u540C\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u4F7F\u5F97\u903B\u8F91\u66F4\u52A0\u901A\u7528\uFF0C\u4EE3\u7801\u66F4\u52A0\u7CBE\u7B80\u3002 \u6CE8\u610F\uFF1A\u4F7F\u75281.18\u7248\u672C\uFF0C\u5FC5\u987B\u8981\u5BF9\u7F16\u8F91(GOLAND)\u8FDB\u884C\u5347\u7EA7(\u73B0\u5728GOLAND\u548Cgo\u8BED\u8A00\u7248\u672C\u4E0D\u77E5\u9053\u662F\u4E0D\u662F\u505A\u4E86\u7ED1\u5B9A\uFF0C\u8981\u4F7F\u7528\u9AD8\u7248\u672C\u7684go\uFF0C\u5FC5\u987B\u5347\u7EA7GOLAND\uFF0C\u7136\u540E\u9762\u4E34\u6536\u8D39\u95EE\u9898)\uFF0C\u6211\u7528\u7684\u662F2021.1.3\uFF0C\u6700\u597D2022\u7248\u672C\uFF0C\u4F46\u662F\u7531\u4E8E\u65E0\u6CD5\u7834\u89E3\uFF0C\u6240\u4EE5\u4E00\u76F4\u7528\u76842021\u7248\u672C\uFF0C\u610F\u5473\u7740\u65E0\u6CD5\u4F7F\u7528\u6CDB\u578B\u64CD\u4F5C\uFF0C\u4F46\u662F\u53EF\u4EE5\u5728\u8FD9\u4E2A\u7F51\u7AD9 https://gotipplay.golang.org \u5728\u7EBF\u64CD\u4F5C\uFF0C\u5EFA\u8BAE\u5728\u8C37\u6B4C\u6D4F\u89C8\u5668\u4E0B\u6267\u884C\uFF0C\u5176\u5B83\u6D4F\u89C8\u5668\u53EF\u80FD\u6CA1\u6709\u53CD\u5E94</p><p>\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49\u4E00\u4E2A\u6CDB\u578B\u53D8\u91CF\uFF0C\u6BD4\u5982\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u6CDB\u578B\u5207\u7247\uFF0C\u5207\u7247\u91CC\u7684\u503C\u7C7B\u578B\uFF0C\u65E2\u53EF\u4EE5\u662Fint\uFF0C\u4E5F\u53EF\u4EE5\u662Ffloat64\uFF0C\u4E5F\u53EF\u4EE5\u662Fstring\uFF1A type ScoreSlice [T int|float64|string] []T</p><p>\u8FD9\u4E2A\u600E\u4E48\u7406\u89E3\u5462\uFF1A</p><p>\u2460T\u8868\u793A\u6211\u4EEC\u63D0\u70BC\u51FA\u6765\u7684\u901A\u7528\u7C7B\u578B\u53C2\u6570(Type parameter)\uFF0C\u662F\u6211\u4EEC\u5C31\u7528\u6765\u8868\u793A\u4E0D\u540C\u7C7B\u578B\u7684\u6A21\u677F\uFF0CT\u53EA\u662F\u53D6\u7684\u4E00\u4E2A\u901A\u7528\u7684\u540D\u5B57\uFF0C\u4F60\u53EF\u4EE5\u53D6\u540D\u4EFB\u610F\u5176\u4ED6\u540D\u5B57\u90FD\u884C\u3002</p><p>\u2461\u540E\u9762\u7684int|float64|string \u53EB\u7C7B\u578B\u7EA6\u675F\uFF08Type constraint\uFF09\uFF0C\u4E5F\u5C31\u662F\u7EA6\u675F\u4E86T\u7684\u53D6\u503C\u8303\u56F4\uFF0C\u53EA\u80FD\u4ECE(int\u3001float64\u3001string\uFF09\u4E2D\u53D6\u503C\u3002\u4E2D\u95F4\u7684|\u8868\u793A\u7684\u662F\u6216\u7684\u5173\u7CFB\uFF0C\u7B49\u4E8E\u8BED\u6CD5&quot;||&quot;\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u6839\u636E\u4F60\u7C7B\u578B\u7684\u4F7F\u7528\u573A\u666F\u5B9A\u4E49\u66F4\u591A\u7684\u7C7B\u578B\u7EA6\u675F\u3002</p><p>\u2462[]\u91CC\u9762\u7684\u8FD9\u4E00\u4E32T int|float64|string\uFF0C\u53EB\u7C7B\u578B\u53C2\u6570\u5217\u8868(type parameter list)\uFF0C\u8868\u793A\u7684\u662F\u6211\u4EEC\u5B9A\u4E49\u4E86\u51E0\u4E2A\u6CDB\u578B\u7684\u53C2\u6570\u3002\u6211\u4EEC\u4F8B\u5B50\u5F53\u4E2D\u53EA\u67091\u4E2A\uFF0C\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u521B\u5EFA\u591A\u4E2A\u3002</p><p>\u2463\u6700\u540E\u9762\u7684[]T\u8FD9\u4E2A\u6211\u4EEC\u5C31\u5F88\u719F\u6089\u4E86\uFF0C\u5C31\u662F\u7533\u8BF7\u4E00\u4E2A\u5207\u7247\u7C7B\u578B\uFF0C\u6BD4\u5982\u5E38\u89C1\u7684\uFF1A[]int, []string \u7B49\u7B49\uFF0C\u53EA\u4E0D\u8FC7\u6211\u4EEC\u8FD9\u91CC\u7684\u7C7B\u578B\u662FT\uFF0C\u4E5F\u5C31\u662F\u53C2\u6570\u5217\u8868\u91CC\u9762\u5B9A\u4E49\u7684\u53D8\u91CF\u503C\u3002</p><p>\u8FD9\u4E2A ScoreSlice \u7C7B\u578B\u7684\u5207\u7247\u76F8\u5F53\u4E8E\u5B9A\u4E49\u4E86\u4E09\u79CD\u7C7B\u578B\u7684\u5207\u7247: []int []float64 []string</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//\u6765\u4E2A\u5B98\u65B9\u7684demo:</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// This playground uses a development build of Go:</span>
<span class="token comment">// devel go1.20-7c3284401f Thu Sep 15 06:23:50 2022 +0000</span>

<span class="token keyword">func</span> Print<span class="token punctuation">[</span>T any<span class="token punctuation">]</span><span class="token punctuation">(</span>s <span class="token operator">...</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;playground\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9A\u4E49\u6CDB\u578B\u7684Map\uFF0C\u7136\u540E\u5B9E\u4F8B\u5316\u5BF9\u8C61</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> MapA<span class="token punctuation">[</span>K <span class="token builtin">string</span><span class="token punctuation">,</span> V any<span class="token punctuation">]</span> <span class="token keyword">map</span><span class="token punctuation">[</span>K<span class="token punctuation">]</span>V

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	m1 <span class="token operator">:=</span> MapA<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">}</span>
	m1<span class="token punctuation">[</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">2</span> <span class="token comment">//\u4FEE\u6539val</span>

	m2 <span class="token operator">:=</span> MapA<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6E56\u5317\u7701\u6B66\u6C49\u5E02&quot;</span><span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> m2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

\u6CE8\u610F\u5982\u679C\u5199\u6210\u4E0B\u9762\u7684\u683C\u5F0F\u5C31\u4F1A\u62A5\u9519
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> MapA<span class="token punctuation">[</span>K <span class="token builtin">string</span><span class="token punctuation">,</span> V any<span class="token punctuation">]</span> <span class="token keyword">map</span><span class="token punctuation">[</span>K<span class="token punctuation">]</span>V

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	m1 <span class="token operator">:=</span> MapA<span class="token punctuation">{</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">}</span> <span class="token comment">//\u5FC5\u987B\u4E3A MapA[string, int]</span>
	m1<span class="token punctuation">[</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">2</span> <span class="token comment">//\u4FEE\u6539val</span>

	m2 <span class="token operator">:=</span> MapA<span class="token punctuation">{</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6E56\u5317\u7701\u6B66\u6C49\u5E02&quot;</span><span class="token punctuation">}</span> <span class="token comment">//MapA[string, int]</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> m2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span><span class="token operator">/</span>prog<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">:</span> cannot use generic <span class="token keyword">type</span> MapA<span class="token punctuation">[</span>K <span class="token builtin">string</span><span class="token punctuation">,</span> V any<span class="token punctuation">]</span> without <span class="token function">instantiation</span><span class="token punctuation">(</span>\u5B9E\u4F8B\u5316<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token operator">/</span>prog<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">:</span> cannot use generic <span class="token keyword">type</span> MapA<span class="token punctuation">[</span>K <span class="token builtin">string</span><span class="token punctuation">,</span> V any<span class="token punctuation">]</span> without instantiation\u5B9E\u4F8B\u5316<span class="token punctuation">)</span>

<span class="token comment">//\u5B9A\u4E49\u6CDB\u578B\u7684Channel\uFF0C\u7136\u540E\u5B9E\u4F8B\u5316\u5BF9\u8C61</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> C<span class="token punctuation">[</span>T <span class="token builtin">int</span><span class="token operator">|</span><span class="token builtin">float64</span><span class="token punctuation">]</span> <span class="token keyword">chan</span> T

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cha <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span>C<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	cha <span class="token operator">&lt;-</span> <span class="token number">1</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>cha<span class="token punctuation">)</span>

	chb <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span>C<span class="token punctuation">[</span><span class="token builtin">float64</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	chb <span class="token operator">&lt;-</span> <span class="token number">23.56</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>chb<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9A\u4E49\u6CDB\u578B\u7684Slice\uFF0C\u7136\u540E\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u6700\u540E\u8C03\u7528\u6CDB\u578B\u51FD\u6570\u6253\u5370\u8F93\u51FA</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> SliceT<span class="token punctuation">[</span>T any<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>T

<span class="token keyword">func</span> testSlice<span class="token punctuation">[</span>T any<span class="token punctuation">]</span><span class="token punctuation">(</span>s <span class="token punctuation">[</span><span class="token punctuation">]</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//[T any]\u8868\u793A\u652F\u6301\u4EFB\u4F55\u7C7B\u578B\u7684\u53C2\u6570  \uFF08s []T\u8868\u793A\u5F62\u53C2s\u662F\u4E00\u4E2AT\u7C7B\u578B\u7684\u5207\u7247\uFF09</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;val is:&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s1 <span class="token operator">:=</span> SliceT<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span>
	<span class="token function">testSlice</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>

	s2 <span class="token operator">:=</span> SliceT<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wangwu&quot;</span><span class="token punctuation">}</span>
	<span class="token function">testSlice</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u4F7F\u7528interface\u4E2D\u89C4\u5B9A\u7684\u7C7B\u578B \u7EA6\u675F\u6CDB\u578B\u51FD\u6570\u7684\u53C2\u6570</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> NumStr <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token builtin">int</span> <span class="token operator">|</span> <span class="token builtin">int32</span> <span class="token operator">|</span> <span class="token builtin">string</span>  <span class="token comment">//\u8FD9\u4E2A\u5728\u9AD8\u7248\u672C\u7684golang\u4E0B\u624D\u4F1A\u751F\u6548\uFF0C\u5982\u679C\u6362\u6210\u81EA\u5B9A\u4E49\u7684 struct\uFF0C\u597D\u50CF\u4E0D\u592A\u80FD\u64CD\u4F5C</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> add<span class="token punctuation">[</span>T NumStr<span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b T<span class="token punctuation">)</span> T <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10.34</span><span class="token punctuation">,</span><span class="token number">23.78</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// \u4F1A\u62A5\u9519\uFF1A./prog.go:15:16: float64 does not implement NumStr (float64 missing in int | int32 | string)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5176\u5B9E\u6700\u60F3\u9A8C\u8BC1\u7684\u662F \u6CDB\u578B\u7684 struct\uFF0C\u4E0D\u77E5\u9053\u53EF\u4E0D\u53EF\u4EE5</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> A <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   name <span class="token builtin">string</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> GetVal<span class="token punctuation">[</span>T A<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> T <span class="token punctuation">{</span>
	<span class="token keyword">return</span> T<span class="token punctuation">{</span>  <span class="token comment">// \u8FD9\u91CC\u5982\u679C\u5199 A \u4F1A\u62A5\uFF1A./prog.go:11:9: cannot use A{\u2026} (value of type A) as type T in return statement</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">GetVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","golang\u4E2D\u7684\u6CDB\u578B\u6982\u5FF5\u4EE5\u53CA\u4F7F\u7528.html.vue"]]);export{k as default};
