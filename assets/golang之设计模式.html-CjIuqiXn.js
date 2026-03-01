import{_ as s,c as a,f as e,o as p}from"./app-BB_BIQV8.js";const l={};function t(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>创建型模式，共五种：简单工厂模式、工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。 结构型模式，共七种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。 行为型模式，共十一种：策略模式、模板方法模式、观察者模式、迭代器模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。</p><p>1.简单工厂模式，一般是以NewXXX 返回 interface(接口)，然后根据这个 返回的接口对象，调用对象实现接口的方法，就可以了<br> 2.工厂方法模式：使用子类的方式延迟生成对象到子类中实现<br></p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> test</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;fmt&quot;</span></span>
<span class="line">	<span class="token string">&quot;testing&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> ParseInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">parseConfigFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> parser <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>y <span class="token operator">*</span>parser<span class="token punctuation">)</span> <span class="token function">parseConfigFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;config name is:&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> jsonParser <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	parser</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">newJsonParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ParseInterface <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&amp;</span>jsonParser<span class="token punctuation">{</span></span>
<span class="line">		parser<span class="token punctuation">{</span></span>
<span class="line">			name<span class="token punctuation">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> yamlParser <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	parser</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">newYamlParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ParseInterface <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&amp;</span>yamlParser<span class="token punctuation">{</span></span>
<span class="line">		parser<span class="token punctuation">{</span></span>
<span class="line">			name<span class="token punctuation">:</span> <span class="token string">&quot;yaml&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">sFactory</span><span class="token punctuation">(</span>t <span class="token builtin">int</span><span class="token punctuation">)</span> ParseInterface <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">var</span> obj ParseInterface</span>
<span class="line">	<span class="token keyword">switch</span> t <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">		obj <span class="token operator">=</span> <span class="token function">newJsonParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span></span>
<span class="line">		obj <span class="token operator">=</span> <span class="token function">newYamlParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">default</span><span class="token punctuation">:</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;类型错误&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> obj</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">TestFactory</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	ft <span class="token operator">:=</span> <span class="token function">sFactory</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">	ft<span class="token punctuation">.</span><span class="token function">parseConfigFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//=== RUN   TestFactory</span></span>
<span class="line">	<span class="token comment">//config name is: json</span></span>
<span class="line">	<span class="token comment">//--- PASS: TestFactory (0.00s)</span></span>
<span class="line">	<span class="token comment">//PASS</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//Process finished with the exit code 0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.单例模式<br></p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> test</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;fmt&quot;</span></span>
<span class="line">	<span class="token string">&quot;sync&quot;</span></span>
<span class="line">	<span class="token string">&quot;testing&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> user <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> once sync<span class="token punctuation">.</span>Once <span class="token comment">//通过这个实现单次加载</span></span>
<span class="line"><span class="token keyword">var</span> userInstance <span class="token operator">*</span>user</span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">NewUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>user <span class="token punctuation">{</span></span>
<span class="line">	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		userInstance <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">return</span> userInstance</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">TestSingle</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//user1 := NewUser()</span></span>
<span class="line">	<span class="token comment">//user1.Name = &quot;测试11111111111&quot;</span></span>
<span class="line">	<span class="token comment">//fmt.Printf(&quot;user1 p is:%p\\n&quot;, user1)</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//user2 := NewUser()</span></span>
<span class="line">	<span class="token comment">//user2.Name = &quot;测试22222222222222&quot;</span></span>
<span class="line">	<span class="token comment">//fmt.Printf(&quot;user2 p is:%p\\n&quot;, user2)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">//打印结果，user1和user2的地址相同</span></span>
<span class="line">	<span class="token comment">//=== RUN   TestSingle</span></span>
<span class="line">	<span class="token comment">//user1 p is:0xc00070a1f0</span></span>
<span class="line">	<span class="token comment">//user2 p is:0xc00070a1f0</span></span>
<span class="line">	<span class="token comment">//--- PASS: TestSingle (0.00s)</span></span>
<span class="line">	<span class="token comment">//PASS</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//Process finished with the exit code 0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	onceFunc <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func is coming&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span></span>
<span class="line">		once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>onceFunc<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 打印结果 只会输出一次；还加了 debug 调试</span></span>
<span class="line">	<span class="token comment">//=== RUN   TestSingle</span></span>
<span class="line">	<span class="token comment">//func is coming</span></span>
<span class="line">	<span class="token comment">//--- PASS: TestSingle (31.72s)</span></span>
<span class="line">	<span class="token comment">//PASS</span></span>
<span class="line">	<span class="token comment">//</span></span>
<span class="line">	<span class="token comment">//Debugger finished with the exit code 0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const o=s(l,[["render",t],["__file","golang之设计模式.html.vue"]]),u=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html","title":"golang之设计模式","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之设计模式","description":"golang之设计模式"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之设计模式.md"}');export{o as comp,u as data};
