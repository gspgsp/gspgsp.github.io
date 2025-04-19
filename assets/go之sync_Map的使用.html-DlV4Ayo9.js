import{_ as s,c as a,d as p,o as t}from"./app-C7j_h9cy.js";const e={};function c(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<p>普通map在并发写的场景下是不安全的，所以golang有了sync.Map数据类型，这个可以解决这个问题，当然还有读写锁</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">使用案例如下<span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//声明 scene，类型为 sync.Map，注意，sync.Map 不能使用 make 创建。</span></span>
<span class="line">	<span class="token keyword">var</span> scene sync<span class="token punctuation">.</span>Map</span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 将键值对保存到sync.Map</span></span>
<span class="line">	scene<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span></span>
<span class="line">	scene<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span></span>
<span class="line">	scene<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;wangwu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;湖北武汉&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	scene<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;zhaoliu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;上海浦东&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 从sync.Map中根据键取值</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 根据键删除对应的键值对</span></span>
<span class="line">	scene<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 遍历所有sync.Map中的键值对</span></span>
<span class="line">	i <span class="token operator">:=</span> <span class="token number">0</span></span>
<span class="line">	scene<span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;遍历syn_map====&gt;:&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span></span>
<span class="line">		<span class="token comment">//统计map的大小</span></span>
<span class="line">		i<span class="token operator">++</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;syn_map大小为:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(e,[["render",c],["__file","go之sync_Map的使用.html.vue"]]),u=JSON.parse('{"path":"/content/go/base/go%E4%B9%8Bsync_Map%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"go之sync_Map的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"go之sync_Map的使用","description":"go之sync_Map的使用"},"headers":[],"git":{},"filePathRelative":"content/go/base/go之sync_Map的使用.md"}');export{o as comp,u as data};
