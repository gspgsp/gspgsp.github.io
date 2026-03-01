import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>symfony5之OpenAPI扩展包实现 swagger 文档:<br> 最近需要将之前写的接口出一个文档，准备用一下当前比较流行的swagger，symfony框架下，用这个拓展包:https://github.com/nelmio/NelmioApiDocBundle 就可以了.</p><p>基本上composer 安装好以后，配置两个路由: api/doc 和 api/doc.json 就可以了,一个是页面展示小鬼，还有一个是以json文件的形式展示出来</p><p>下面是实际使用:<br> 1.post请求注释</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * @OA\\Post(</span>
<span class="line"> *     path=&quot;/api/post&quot;,</span>
<span class="line"> *     summary=&quot;Create a new post&quot;,</span>
<span class="line"> *     tags=<span class="token punctuation">{</span>&quot;Posts&quot;<span class="token punctuation">}</span>,</span>
<span class="line"> *     @OA\\RequestBody(</span>
<span class="line"> *         required=true,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;title&quot;, type=&quot;string&quot;, example=&quot;New Post&quot;),</span>
<span class="line"> *             @OA\\Property(property=&quot;content&quot;, type=&quot;string&quot;, example=&quot;This is the content of the post.&quot;)</span>
<span class="line"> *         )</span>
<span class="line"> *     ),</span>
<span class="line"> *     @OA\\Response(</span>
<span class="line"> *         response=&quot;201&quot;,</span>
<span class="line"> *         description=&quot;Post created successfully&quot;,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Post created successfully.&quot;)</span>
<span class="line"> *         )</span>
<span class="line"> *     ),</span>
<span class="line"> *     @OA\\Response(</span>
<span class="line"> *         response=&quot;400&quot;,</span>
<span class="line"> *         description=&quot;Bad request&quot;,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Invalid input data.&quot;)</span>
<span class="line"> *         )</span>
<span class="line"> *     )</span>
<span class="line"> * )</span>
<span class="line"> */</span></span>
<span class="line">  </span>
<span class="line">在这个示例中，我们使用 @<span class="token constant">OA</span>\\Post 注释来定义一个 <span class="token constant">POST</span> 请求。path 参数指定了 <span class="token constant">API</span> 的路径，summary 提供了关于此操作的简要描述，tags 列出了相关的标签。@<span class="token constant">OA</span>\\RequestBody 用于定义请求体，这里我们使用 @<span class="token constant">OA</span>\\JsonContent 来指定请求体的 <span class="token constant">JSON</span> 格式。@<span class="token constant">OA</span>\\Response 用于定义操作的响应，包括成功和错误情况。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.post参数为枚举类型</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * @OA\\Post(</span>
<span class="line"> *     path=&quot;/api/create_order&quot;,</span>
<span class="line"> *     summary=&quot;Create a new order&quot;,</span>
<span class="line"> *     tags=<span class="token punctuation">{</span>&quot;Orders&quot;<span class="token punctuation">}</span>,</span>
<span class="line"> *     @OA\\RequestBody(</span>
<span class="line"> *         required=true,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;product&quot;, type=&quot;string&quot;, enum=<span class="token punctuation">{</span>&quot;product1&quot;, &quot;product2&quot;, &quot;product3&quot;<span class="token punctuation">}</span>),</span>
<span class="line"> *             @OA\\Property(property=&quot;quantity&quot;, type=&quot;integer&quot;, example=10)</span>
<span class="line"> *         )</span>
<span class="line"> *     ),</span>
<span class="line"> *     @OA\\Response(</span>
<span class="line"> *         response=&quot;201&quot;,</span>
<span class="line"> *         description=&quot;Order created successfully&quot;,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Order created successfully.&quot;)</span>
<span class="line"> *         )</span>
<span class="line"> *     ),</span>
<span class="line"> *     @OA\\Response(</span>
<span class="line"> *         response=&quot;400&quot;,</span>
<span class="line"> *         description=&quot;Bad request&quot;,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Invalid input data.&quot;)</span>
<span class="line"> *         )</span>
<span class="line"> *     )</span>
<span class="line"> * )</span>
<span class="line"> */</span></span>
<span class="line">  </span>
<span class="line">在上面的示例中，@<span class="token constant">OA</span>\\Schema 注释用于定义一个枚举类型的对象。在 @<span class="token constant">OA</span>\\Property 注释中，使用 <span class="token keyword">enum</span> 参数来指定允许的枚举值列表。这里我们定义了一个名为 <span class="token string double-quoted-string">&quot;product&quot;</span> 的字段，其类型为字符串，且仅允许取值为 <span class="token string double-quoted-string">&quot;product1&quot;</span>、<span class="token string double-quoted-string">&quot;product2&quot;</span> 和 <span class="token string double-quoted-string">&quot;product3&quot;</span> 中的一个。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.post返回值包含对象</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * @OA\\Post(</span>
<span class="line"> *     summary=&quot;Create a new post&quot;,</span>
<span class="line"> *     tags=<span class="token punctuation">{</span>&quot;Posts&quot;<span class="token punctuation">}</span>,</span>
<span class="line"> *     @OA\\RequestBody(</span>
<span class="line"> *         required=true,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;title&quot;, type=&quot;string&quot;),</span>
<span class="line"> *             @OA\\Property(property=&quot;content&quot;, type=&quot;string&quot;)</span>
<span class="line"> *         )</span>
<span class="line"> *     ),</span>
<span class="line"> *     @OA\\Response(</span>
<span class="line"> *         response=&quot;201&quot;,</span>
<span class="line"> *         description=&quot;Post created successfully&quot;,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Post created successfully.&quot;),</span>
<span class="line"> *             @OA\\Property(property=&quot;post_data&quot;, type=&quot;object&quot;,</span>
<span class="line"> *                 @OA\\Property(property=&quot;id&quot;, type=&quot;integer&quot;, example=123),</span>
<span class="line"> *                 @OA\\Property(property=&quot;title&quot;, type=&quot;string&quot;),</span>
<span class="line"> *                 @OA\\Property(property=&quot;content&quot;, type=&quot;string&quot;)</span>
<span class="line"> *             )</span>
<span class="line"> *         )</span>
<span class="line"> *     ),</span>
<span class="line"> *     @OA\\Response(</span>
<span class="line"> *         response=&quot;400&quot;,</span>
<span class="line"> *         description=&quot;Bad request&quot;,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Invalid input data.&quot;)</span>
<span class="line"> *         )</span>
<span class="line"> *     )</span>
<span class="line"> * )</span>
<span class="line"> */</span></span>
<span class="line">  </span>
<span class="line">在这个示例中，@<span class="token constant">OA</span>\\Response 注解用于描述响应。在 @<span class="token constant">OA</span>\\JsonContent 注解中，我们使用 @<span class="token constant">OA</span>\\Property 来定义响应的属性。其中，post_data 是一个对象属性，我们在它的内部使用另一个 @<span class="token constant">OA</span>\\Property 注解来定义该对象的属性，如 id、title 和 content。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.普通GET请求</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * @OA\\Get(</span>
<span class="line"> *     path=&quot;/api/resource&quot;,</span>
<span class="line"> *     summary=&quot;Get a list of resources&quot;,</span>
<span class="line"> *     tags=<span class="token punctuation">{</span>&quot;Resource&quot;<span class="token punctuation">}</span>,</span>
<span class="line"> *     @OA\\Response(</span>
<span class="line"> *         response=200,</span>
<span class="line"> *         description=&quot;Successful response&quot;,</span>
<span class="line"> *         @OA\\JsonContent(</span>
<span class="line"> *             type=&quot;array&quot;,</span>
<span class="line"> *             @OA\\Items(ref=&quot;#/components/schemas/Resource&quot;)</span>
<span class="line"> *         )</span>
<span class="line"> *     )</span>
<span class="line"> * )</span>
<span class="line"> */</span></span>
<span class="line">  </span>
<span class="line">在上面的示例中，@<span class="token constant">OA</span>\\Get 注释表示这是一个 <span class="token constant">GET</span> 请求的配置。您需要指定请求的路径、概要、标签和响应。响应部分使用 @<span class="token constant">OA</span>\\Response 注释来定义成功响应的状态码和数据结构。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.带一个id路由参数的GET请求</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * @OA\\Get(</span>
<span class="line"> *     path=&quot;/api/resource/<span class="token punctuation">{</span>id<span class="token punctuation">}</span>&quot;,</span>
<span class="line"> *     summary=&quot;Get a resource by ID&quot;,</span>
<span class="line"> *     tags=<span class="token punctuation">{</span>&quot;Resource&quot;<span class="token punctuation">}</span>,</span>
<span class="line"> *     @OA\\Parameter(</span>
<span class="line"> *         name=&quot;id&quot;,</span>
<span class="line"> *         in=&quot;path&quot;,</span>
<span class="line"> *         required=true,</span>
<span class="line"> *         description=&quot;ID of the resource&quot;,</span>
<span class="line"> *         @OA\\Schema(type=&quot;integer&quot;)</span>
<span class="line"> *     ),</span>
<span class="line"> *     @OA\\Response(</span>
<span class="line"> *         response=200,</span>
<span class="line"> *         description=&quot;Successful response&quot;,</span>
<span class="line"> *         @OA\\JsonContent(ref=&quot;#/components/schemas/Resource&quot;)</span>
<span class="line"> *     )</span>
<span class="line"> * )</span>
<span class="line"> */</span></span>
<span class="line">  </span>
<span class="line">在上面的示例中，我们在路径中使用 <span class="token punctuation">{</span>id<span class="token punctuation">}</span> 来表示路由参数，然后使用 @<span class="token constant">OA</span>\\Parameter 注释来定义这个参数。注释中的属性说明如下：</span>
<span class="line"></span>
<span class="line">name<span class="token punctuation">:</span> 参数的名称，这里是 <span class="token string double-quoted-string">&quot;id&quot;</span>。</span>
<span class="line">in<span class="token punctuation">:</span> 参数的位置，这里是 <span class="token string double-quoted-string">&quot;path&quot;</span>，表示在 <span class="token constant">URL</span> 路径中。</span>
<span class="line">required<span class="token punctuation">:</span> 参数是否为必需的，这里设置为 <span class="token constant boolean">true</span>。</span>
<span class="line">description<span class="token punctuation">:</span> 参数的描述，解释了该参数的用途。</span>
<span class="line">@<span class="token constant">OA</span><span class="token function"><span class="token punctuation">\\</span>Schema</span><span class="token punctuation">(</span>type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;integer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 参数的数据类型，这里设置为整数类型。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.@OA\\Property 和 @OA\\Parameter 的区别</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@OA\\Property 和 @OA\\Parameter 都是 Swagger-PHP 中用于描述 API 文档的注解，但它们在使用场景和含义上有一些区别。</span>
<span class="line">  </span>
<span class="line">@OA\\Property:</span>
<span class="line">用于描述请求体或响应体中的属性。通常用于描述 POST、PUT 等请求方法中的请求体的属性，或者响应中的属性。</span>
<span class="line">适用于描述实体对象的属性，例如请求体中的字段、响应中的字段、嵌套对象等。</span>
<span class="line">可以设置类型、示例值、描述等属性。</span>
<span class="line">用于展示请求体和响应体中的属性。</span>
<span class="line">  </span>
<span class="line">@OA\\Parameter:</span>
<span class="line">用于描述 URL 路径参数、查询参数、标头参数等。</span>
<span class="line">适用于描述作为请求参数的属性，例如 GET 请求中的查询参数，或者 URL 中的路径参数。</span>
<span class="line">可以设置类型、示例值、描述等属性。</span>
<span class="line">用于展示接口的输入参数。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.总结<br> 其实这个swagger-php 的使用，主要就是属性的嵌套，习惯就好，唯一不好的就是，整个php代码会显得十分臃肿，主要还是注释部分</p>`,15)]))}const o=n(l,[["render",p],["__file","symfony5之OpenAPI扩展包实现swagger文档.html.vue"]]),u=JSON.parse('{"path":"/content/php/symfony/symfony5%E4%B9%8BOpenAPI%E6%89%A9%E5%B1%95%E5%8C%85%E5%AE%9E%E7%8E%B0swagger%E6%96%87%E6%A1%A3.html","title":"symfony5之OpenAPI扩展包实现swagger文档","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony5之OpenAPI扩展包实现swagger文档","description":"symfony5之OpenAPI扩展包实现swagger文档"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony5之OpenAPI扩展包实现swagger文档.md"}');export{o as comp,u as data};
