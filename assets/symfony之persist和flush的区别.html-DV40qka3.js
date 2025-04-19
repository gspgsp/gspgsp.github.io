import{_ as n,c as a,d as t,o as e}from"./app-C7j_h9cy.js";const p={};function o(l,s){return e(),a("div",null,s[0]||(s[0]=[t(`<p>symfony之persist和flush的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">The main difference between persist() and persistFlush() is that persist() queues the entity for insertion into the database, but does not immediately execute the insert statement. Instead, the insert is executed when the transaction is committed or when the flush() method is called.</span>
<span class="line"></span>
<span class="line">persistFlush(), on the other hand, combines the persist() and flush() methods into a single call. It queues the entity for insertion and immediately executes the insert statement, flushing the changes to the database.</span>
<span class="line"></span>
<span class="line">Both persist() and persistFlush() can be useful in different situations. persist() can be useful when you want to queue multiple entities for insertion and flush them all to the database at once, while persistFlush() can be useful when you want to immediately persist an entity and ensure that it is saved to the database.</span>
<span class="line"></span>
<span class="line">In general, it&#39;s a good idea to use persist() when you want to optimize for performance and persistFlush() when you want to ensure that the entity is immediately persisted to the database.</span>
<span class="line"></span>
<span class="line">上面的文章翻译过来就是:persist会先把插入数据库操作放到队列里面，然后通过flush一起持久化到数据库，flush会立即持久化到数据库</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案列:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updateVideo</span><span class="token punctuation">(</span><span class="token variable">$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$dateTime</span> <span class="token operator">=</span> <span class="token class-name static-context">TimeService</span><span class="token operator">::</span><span class="token function">getDateTime</span><span class="token punctuation">(</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getEntityManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">transactional</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">,</span> <span class="token variable">$dateTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$data</span><span class="token operator">-&gt;</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$data</span><span class="token operator">-&gt;</span><span class="token function">setLength</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;length&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$data</span><span class="token operator">-&gt;</span><span class="token function">setPlayUrl</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;playUrl&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$data</span><span class="token operator">-&gt;</span><span class="token function">setUpdatedAt</span><span class="token punctuation">(</span><span class="token variable">$dateTime</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                 <span class="token comment">//①</span></span>
<span class="line">                <span class="token comment">//$this-&gt;save($data, true);</span></span>
<span class="line"></span>
<span class="line">                <span class="token variable">$cm</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getEntityManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getRepository</span><span class="token punctuation">(</span><span class="token class-name static-context">CourseManage</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">findOneBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;video&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;contentId&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$params</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;courseId&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$data</span><span class="token operator">-&gt;</span><span class="token function">getCourseId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$cm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token variable">$cm</span><span class="token operator">-&gt;</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token variable">$cm</span><span class="token operator">-&gt;</span><span class="token function">setUpdatedAt</span><span class="token punctuation">(</span><span class="token variable">$dateTime</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token comment">//②</span></span>
<span class="line">                    <span class="token comment">//$this-&gt;getEntityManager()-&gt;getRepository(CourseManage::class)-&gt;save($cm, true);</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//③</span></span>
<span class="line">                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getEntityManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Throwable</span> <span class="token variable">$exception</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;status&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;msg&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$exception</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;status&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;msg&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;operate success&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码分析：当①和② 都设置为true的时候，就会自动调用flush，当没有设置true的时候就只是persist到队列，没有flush，这个时候需要 手动调用$this-&gt;getEntityManager()-&gt;flush() 即可。同时如果没有①和②，直接调用$this-&gt;getEntityManager()-&gt;flush(),也是可以 把数据持久化到数据库的。</p><p>参考文档: https://www.doctrine-project.org/projects/doctrine1/en/latest/manual/component-overview.html</p>`,6)]))}const c=n(p,[["render",o],["__file","symfony之persist和flush的区别.html.vue"]]),u=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Bpersist%E5%92%8Cflush%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"symfony之persist和flush的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之persist和flush的区别","description":"symfony之persist和flush的区别"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之persist和flush的区别.md"}');export{c as comp,u as data};
