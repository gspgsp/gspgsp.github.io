import{_ as s,c as i,f as l,o as a}from"./app-BB_BIQV8.js";const e={};function t(v,n){return a(),i("div",null,n[0]||(n[0]=[l(`<p>今天在看go的一个源码的时候，看到了rune，所以就想看看它的使用场景。 官网说 rune 是 int32的别名 下面通过一个案例说明问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">package test</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">	&quot;fmt&quot;</span>
<span class="line">	&quot;testing&quot;</span>
<span class="line">	&quot;unicode/utf8&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func TestRune(t *testing.T) {</span>
<span class="line">	var str = &quot;hello 中国&quot;</span>
<span class="line"></span>
<span class="line">	//golang中string底层是通过byte数组实现的。中文字符在unicode下占2个字节，在utf-8编码下占3个字节，而golang默认编码正好是utf-8。</span>
<span class="line">	fmt.Println(&quot;len(str):&quot;, len(str))//输出 12</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	//如果我们预期想得到一个字符串的长度，而不是字符串底层占得字节长度，那就可以通过rune实现</span>
<span class="line">	//通过utf8的RuneCountInString方法处理</span>
<span class="line">	fmt.Println(&quot;RuneCountInString:&quot;, utf8.RuneCountInString(str))//输出8</span>
<span class="line">	//通过rune类型处理</span>
<span class="line">	fmt.Println(&quot;rune:&quot;, len([]rune(str)))//输出8</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	//for-range循环，输出结果如下</span>
<span class="line">	//k1= 0 v1= h</span>
<span class="line">	//k1= 1 v1= e</span>
<span class="line">	//k1= 2 v1= l</span>
<span class="line">	//k1= 3 v1= l</span>
<span class="line">	//k1= 4 v1= o</span>
<span class="line">	//k1= 5 v1=</span>
<span class="line">	//k1= 6 v1= 中</span>
<span class="line">	//k1= 9 v1= 国 //这里索引自动 +3</span>
<span class="line"></span>
<span class="line">	//k2= 0 v2= h</span>
<span class="line">	//k2= 1 v2= e</span>
<span class="line">	//k2= 2 v2= l</span>
<span class="line">	//k2= 3 v2= l</span>
<span class="line">	//k2= 4 v2= o</span>
<span class="line">	//k2= 5 v2=</span>
<span class="line">	//k2= 6 v2= 中</span>
<span class="line">	//k2= 7 v2= 国 //索引递增</span>
<span class="line">	//--- PASS: TestRune (0.00s)</span>
<span class="line">	//PASS</span>
<span class="line">	s1 := &quot;hello 中国&quot;</span>
<span class="line"></span>
<span class="line">	for k, v := range s1 {</span>
<span class="line">		fmt.Println(&quot;k1=&quot;, k, &quot;v1=&quot;, string(v))</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	fmt.Println(&quot;&quot;)</span>
<span class="line">	for k, v := range []rune(s1) {</span>
<span class="line">		fmt.Println(&quot;k2=&quot;, k, &quot;v2=&quot;, string(v))</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	//rune 等同于int32,常用来处理unicode或utf-8字符</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(e,[["render",t],["__file","go之rune关键字.html.vue"]]),p=JSON.parse('{"path":"/content/go/base/go%E4%B9%8Brune%E5%85%B3%E9%94%AE%E5%AD%97.html","title":"go之rune关键字","lang":"en-US","frontmatter":{"sidebar":false,"title":"go之rune关键字","description":"go之rune关键字"},"headers":[],"git":{},"filePathRelative":"content/go/base/go之rune关键字.md"}');export{d as comp,p as data};
