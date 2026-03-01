import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>symfony7序列化对象为数组格式:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">use Symfony\\Component\\Serializer\\Serializer;</span>
<span class="line">  </span>
<span class="line">然后 Serializer 提供了如下方法normalize</span>
<span class="line">$normalizedData = $this-&gt;normalize($data, $format, $context);</span>
<span class="line">  </span>
<span class="line">其中有个 $context 参数，这个参数很有用:</span>
<span class="line">其作用主要包括以下几种情况：</span>
<span class="line">  </span>
<span class="line">1.控制属性的输出：可以通过设置 groups 来指定输出哪些属性。例如，[&#39;groups&#39; =&gt; [&#39;group_name&#39;]] 只会序列化属于 group_name 分组的属性。</span>
<span class="line">  </span>
<span class="line">2.属性的深度控制：可以通过 max_depth 设置序列化的最大深度。这个选项在对象嵌套层次很深时非常有用，避免无限递归。</span>
<span class="line">  </span>
<span class="line">3.回调自定义：你可以在 $context 中定义自定义回调函数，用于序列化前或反序列化后的数据处理。例如，可以为属性设置一个转换回调函数。</span>
<span class="line">  </span>
<span class="line">4.类型强制和格式控制：如果序列化到特定格式（例如 json 或 xml），可以在 $context 中设置格式的相关选项，使得规范化过程更灵活。</span>
<span class="line">  </span>
<span class="line">5.忽略空值：通过 skip_null_values 选项忽略空属性值，例如 [&#39;skip_null_values&#39; =&gt; true] 会跳过所有为 null 的属性。</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">可以看到定义的的DTO对象的属性有如下定义:</span>
<span class="line">class TicketDto implements ResponsibleInterface</span>
<span class="line">{</span>
<span class="line">    #[Groups(&quot;form&quot;)]</span>
<span class="line">    private ?int $id;</span>
<span class="line">  </span>
<span class="line">    #[Groups([&quot;table&quot;, &quot;form&quot;])]</span>
<span class="line">    private string $title;</span>
<span class="line">  </span>
<span class="line">    #[Groups([&quot;table&quot;])]</span>
<span class="line">    private \\DateTimeInterface $createdAt;</span>
<span class="line">  </span>
<span class="line">    ...</span>
<span class="line">    ...</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">然后在控制器中，返回数据的时候：</span>
<span class="line">return $this-&gt;apiResponse-&gt;response(new Dto\\Query\\TicketDto($ticket), context: [&#39;groups&#39; =&gt; &#39;form&#39;]); //这样只有在 form group中的属性才会被序列化, 我人为这样的好处是，对于同一个DTO，可以被复用，有些接口只需要其中一部分属性，这样就可以控制哪些可以返回给用户</span>
<span class="line">  </span>
<span class="line">再举个例子，关于回调的:</span>
<span class="line">use Symfony\\Component\\Serializer\\SerializerInterface;</span>
<span class="line">  </span>
<span class="line">$serializer = ...; // 假设已创建 Serializer 实例</span>
<span class="line">$product = new ProductDTO(&quot;Sample Product&quot;, new \\DateTime(&quot;2024-11-11&quot;));</span>
<span class="line">  </span>
<span class="line">// 这个 context 会对其中的 createdAt 进行处理</span>
<span class="line">$context = [</span>
<span class="line">    &#39;groups&#39; =&gt; [&#39;table&#39;], // 指定分组</span>
<span class="line">    &#39;callbacks&#39; =&gt; [</span>
<span class="line">        &#39;createdAt&#39; =&gt; function (\\DateTimeInterface $date) {</span>
<span class="line">            return $date-&gt;format(&#39;Y-m-d&#39;); // 自定义日期格式</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">];</span>
<span class="line">  </span>
<span class="line">$normalizedData = $serializer-&gt;normalize($product, &#39;json&#39;, $context);</span>
<span class="line">  </span>
<span class="line">print_r($normalizedData);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=s(l,[["render",c],["__file","symfony7序列化对象为数组格式.html.vue"]]),t=JSON.parse('{"path":"/content/php/symfony/symfony7%E5%BA%8F%E5%88%97%E5%8C%96%E5%AF%B9%E8%B1%A1%E4%B8%BA%E6%95%B0%E7%BB%84%E6%A0%BC%E5%BC%8F.html","title":"symfony7序列化对象为数组格式","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7序列化对象为数组格式","description":"symfony7序列化对象为数组格式"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7序列化对象为数组格式.md"}');export{r as comp,t as data};
