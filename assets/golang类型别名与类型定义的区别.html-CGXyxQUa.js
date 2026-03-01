import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>golang类型别名与类型定义的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">类型别名 是 Go 1.9 版本添加的新功能。至于为什么要添加这个功能，官方文档：https://go.dev/talks/2016/refactor.article 有说明，简单来说就是：为了在代码库重构期间实现逐步的代码修复，必须能够为常量、函数、变量或类型创建替代名称。</span>
<span class="line"></span>
<span class="line">类型别名的语法：</span>
<span class="line">type OldAPI = NewPackage.API</span>
<span class="line"></span>
<span class="line">类型定义的语法:</span>
<span class="line">type OldAPI  NewPackage.API</span>
<span class="line"></span>
<span class="line">这俩的最大区别是，类型别名和源类型是相同的，可以直接使用，以及源类型自有的属性和方法，不允许自定义源类型没有的属性和方法；而类型定义 会生成一个新的类型和从语法上是不相等的，不能用于赋值 比较等操作</span>
<span class="line">比如下面，主要是为了实现对time的格式化输出：</span>
<span class="line"></span>
<span class="line">type JsonTime = time.Time</span>
<span class="line"></span>
<span class="line">func (j JsonTime) MarshalJSON() ([]byte, error) { //这里就会报:  Cannot define new methods on the non-local type &#39;time.Time&#39;</span>
<span class="line">	var stamp = fmt.Sprintf(\`&quot;%s&quot;\`, time.Time(j).Format(&quot;2006-01-02 15:04:05&quot;))</span>
<span class="line">	return []byte(stamp), nil</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">所以就需要通过类型定义来实现这个功能:</span>
<span class="line">type JsonTime  time.Time // 把 = 号去掉</span>
<span class="line"></span>
<span class="line">func (j JsonTime) MarshalJSON() ([]byte, error) {</span>
<span class="line">	var stamp = fmt.Sprintf(\`&quot;%s&quot;\`, time.Time(j).Format(&quot;2006-01-02 15:04:05&quot;))</span>
<span class="line">	return []byte(stamp), nil</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(l,[["render",t],["__file","golang类型别名与类型定义的区别.html.vue"]]),r=JSON.parse('{"path":"/content/go/base/golang%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D%E4%B8%8E%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"golang类型别名与类型定义的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang类型别名与类型定义的区别","description":"golang类型别名与类型定义的区别"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang类型别名与类型定义的区别.md"}');export{d as comp,r as data};
