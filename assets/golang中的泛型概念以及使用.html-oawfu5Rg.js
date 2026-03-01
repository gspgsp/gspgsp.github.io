import{_ as s,c as a,f as p,o as t}from"./app-BB_BIQV8.js";const l={};function e(i,n){return t(),a("div",null,n[0]||(n[0]=[p(`<p>golang中的泛型概念以及使用:</p><p>由于go语言是强类型语言，所以在1.18版本以前，无法像使用PHP一样，随意对不同类型数据进行操作；为了解决这个问题在1.18版本以后就有了泛型的使用 所谓泛型就是：定义一类通用的模板变量，可以传入不同类型的变量，使得逻辑更加通用，代码更加精简。 注意：使用1.18版本，必须要对编辑(GOLAND)进行升级(现在GOLAND和go语言版本不知道是不是做了绑定，要使用高版本的go，必须升级GOLAND，然后面临收费问题)，我用的是2021.1.3，最好2022版本，但是由于无法破解，所以一直用的2021版本，意味着无法使用泛型操作，但是可以在这个网站 https://gotipplay.golang.org 在线操作，建议在谷歌浏览器下执行，其它浏览器可能没有反应</p><p>我们可以这样定义一个泛型变量，比如，我们定义一个泛型切片，切片里的值类型，既可以是int，也可以是float64，也可以是string： type ScoreSlice [T int|float64|string] []T</p><p>这个怎么理解呢：</p><p>①T表示我们提炼出来的通用类型参数(Type parameter)，是我们就用来表示不同类型的模板，T只是取的一个通用的名字，你可以取名任意其他名字都行。</p><p>②后面的int|float64|string 叫类型约束（Type constraint），也就是约束了T的取值范围，只能从(int、float64、string）中取值。中间的|表示的是或的关系，等于语法&quot;||&quot;，所以你可以根据你类型的使用场景定义更多的类型约束。</p><p>③[]里面的这一串T int|float64|string，叫类型参数列表(type parameter list)，表示的是我们定义了几个泛型的参数。我们例子当中只有1个，下面的例子中，我们会创建多个。</p><p>④最后面的[]T这个我们就很熟悉了，就是申请一个切片类型，比如常见的：[]int, []string 等等，只不过我们这里的类型是T，也就是参数列表里面定义的变量值。</p><p>这个 ScoreSlice 类型的切片相当于定义了三种类型的切片: []int []float64 []string</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">//来个官方的demo:</span></span>
<span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;fmt&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// This playground uses a development build of Go:</span></span>
<span class="line"><span class="token comment">// devel go1.20-7c3284401f Thu Sep 15 06:23:50 2022 +0000</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> Print<span class="token punctuation">[</span>T any<span class="token punctuation">]</span><span class="token punctuation">(</span>s <span class="token operator">...</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;playground\\n&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//定义泛型的Map，然后实例化对象</span></span>
<span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> MapA<span class="token punctuation">[</span>K <span class="token builtin">string</span><span class="token punctuation">,</span> V any<span class="token punctuation">]</span> <span class="token keyword">map</span><span class="token punctuation">[</span>K<span class="token punctuation">]</span>V</span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	m1 <span class="token operator">:=</span> MapA<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">}</span></span>
<span class="line">	m1<span class="token punctuation">[</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">2</span> <span class="token comment">//修改val</span></span>
<span class="line"></span>
<span class="line">	m2 <span class="token operator">:=</span> MapA<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;湖北省武汉市&quot;</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> m2<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">注意如果写成下面的格式就会报错</span>
<span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> MapA<span class="token punctuation">[</span>K <span class="token builtin">string</span><span class="token punctuation">,</span> V any<span class="token punctuation">]</span> <span class="token keyword">map</span><span class="token punctuation">[</span>K<span class="token punctuation">]</span>V</span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	m1 <span class="token operator">:=</span> MapA<span class="token punctuation">{</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">}</span> <span class="token comment">//必须为 MapA[string, int]</span></span>
<span class="line">	m1<span class="token punctuation">[</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">2</span> <span class="token comment">//修改val</span></span>
<span class="line"></span>
<span class="line">	m2 <span class="token operator">:=</span> MapA<span class="token punctuation">{</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;湖北省武汉市&quot;</span><span class="token punctuation">}</span> <span class="token comment">//MapA[string, int]</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> m2<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span><span class="token operator">/</span>prog<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">:</span> cannot use generic <span class="token keyword">type</span> MapA<span class="token punctuation">[</span>K <span class="token builtin">string</span><span class="token punctuation">,</span> V any<span class="token punctuation">]</span> without <span class="token function">instantiation</span><span class="token punctuation">(</span>实例化<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token operator">/</span>prog<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">:</span> cannot use generic <span class="token keyword">type</span> MapA<span class="token punctuation">[</span>K <span class="token builtin">string</span><span class="token punctuation">,</span> V any<span class="token punctuation">]</span> without instantiation实例化<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//定义泛型的Channel，然后实例化对象</span></span>
<span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> C<span class="token punctuation">[</span>T <span class="token builtin">int</span><span class="token operator">|</span><span class="token builtin">float64</span><span class="token punctuation">]</span> <span class="token keyword">chan</span> T</span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	cha <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span>C<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">	cha <span class="token operator">&lt;-</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>cha<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	chb <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span>C<span class="token punctuation">[</span><span class="token builtin">float64</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">	chb <span class="token operator">&lt;-</span> <span class="token number">23.56</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>chb<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//定义泛型的Slice，然后实例化对象，最后调用泛型函数打印输出</span></span>
<span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> SliceT<span class="token punctuation">[</span>T any<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>T</span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> testSlice<span class="token punctuation">[</span>T any<span class="token punctuation">]</span><span class="token punctuation">(</span>s <span class="token punctuation">[</span><span class="token punctuation">]</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//[T any]表示支持任何类型的参数  （s []T表示形参s是一个T类型的切片）</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;val is:&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	s1 <span class="token operator">:=</span> SliceT<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span></span>
<span class="line">	<span class="token function">testSlice</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	s2 <span class="token operator">:=</span> SliceT<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wangwu&quot;</span><span class="token punctuation">}</span></span>
<span class="line">	<span class="token function">testSlice</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//使用interface中规定的类型 约束泛型函数的参数</span></span>
<span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> NumStr <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token builtin">int</span> <span class="token operator">|</span> <span class="token builtin">int32</span> <span class="token operator">|</span> <span class="token builtin">string</span>  <span class="token comment">//这个在高版本的golang下才会生效，如果换成自定义的 struct，好像不太能操作</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> add<span class="token punctuation">[</span>T NumStr<span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b T<span class="token punctuation">)</span> T <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10.34</span><span class="token punctuation">,</span><span class="token number">23.78</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// 会报错：./prog.go:15:16: float64 does not implement NumStr (float64 missing in int | int32 | string)</span></span>
<span class="line">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//其实最想验证的是 泛型的 struct，不知道可不可以</span></span>
<span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> A <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">   name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> GetVal<span class="token punctuation">[</span>T A<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> T <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> T<span class="token punctuation">{</span>  <span class="token comment">// 这里如果写 A 会报：./prog.go:11:9: cannot use A{…} (value of type A) as type T in return statement</span></span>
<span class="line">		name<span class="token punctuation">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">GetVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const o=s(l,[["render",e],["__file","golang中的泛型概念以及使用.html.vue"]]),u=JSON.parse('{"path":"/content/go/base/golang%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B%E6%A6%82%E5%BF%B5%E4%BB%A5%E5%8F%8A%E4%BD%BF%E7%94%A8.html","title":"golang中的泛型概念以及使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang中的泛型概念以及使用","description":"golang中的泛型概念以及使用"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang中的泛型概念以及使用.md"}');export{o as comp,u as data};
