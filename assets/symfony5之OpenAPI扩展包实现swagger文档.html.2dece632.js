import{_ as n,o as s,c as e,g as i}from"./app.66ae8700.js";const t={},a=i(`<p>symfony5\u4E4BOpenAPI\u6269\u5C55\u5305\u5B9E\u73B0 swagger \u6587\u6863:<br> \u6700\u8FD1\u9700\u8981\u5C06\u4E4B\u524D\u5199\u7684\u63A5\u53E3\u51FA\u4E00\u4E2A\u6587\u6863\uFF0C\u51C6\u5907\u7528\u4E00\u4E0B\u5F53\u524D\u6BD4\u8F83\u6D41\u884C\u7684swagger\uFF0Csymfony\u6846\u67B6\u4E0B\uFF0C\u7528\u8FD9\u4E2A\u62D3\u5C55\u5305:https://github.com/nelmio/NelmioApiDocBundle \u5C31\u53EF\u4EE5\u4E86.</p><p>\u57FA\u672C\u4E0Acomposer \u5B89\u88C5\u597D\u4EE5\u540E\uFF0C\u914D\u7F6E\u4E24\u4E2A\u8DEF\u7531: api/doc \u548C api/doc.json \u5C31\u53EF\u4EE5\u4E86,\u4E00\u4E2A\u662F\u9875\u9762\u5C55\u793A\u5C0F\u9B3C\uFF0C\u8FD8\u6709\u4E00\u4E2A\u662F\u4EE5json\u6587\u4EF6\u7684\u5F62\u5F0F\u5C55\u793A\u51FA\u6765</p><p>\u4E0B\u9762\u662F\u5B9E\u9645\u4F7F\u7528:<br> 1.post\u8BF7\u6C42\u6CE8\u91CA</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * @OA\\Post(
 *     path=&quot;/api/post&quot;,
 *     summary=&quot;Create a new post&quot;,
 *     tags=<span class="token punctuation">{</span>&quot;Posts&quot;<span class="token punctuation">}</span>,
 *     @OA\\RequestBody(
 *         required=true,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;title&quot;, type=&quot;string&quot;, example=&quot;New Post&quot;),
 *             @OA\\Property(property=&quot;content&quot;, type=&quot;string&quot;, example=&quot;This is the content of the post.&quot;)
 *         )
 *     ),
 *     @OA\\Response(
 *         response=&quot;201&quot;,
 *         description=&quot;Post created successfully&quot;,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Post created successfully.&quot;)
 *         )
 *     ),
 *     @OA\\Response(
 *         response=&quot;400&quot;,
 *         description=&quot;Bad request&quot;,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Invalid input data.&quot;)
 *         )
 *     )
 * )
 */</span>
  
\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 @<span class="token constant">OA</span>\\Post \u6CE8\u91CA\u6765\u5B9A\u4E49\u4E00\u4E2A <span class="token constant">POST</span> \u8BF7\u6C42\u3002path \u53C2\u6570\u6307\u5B9A\u4E86 <span class="token constant">API</span> \u7684\u8DEF\u5F84\uFF0Csummary \u63D0\u4F9B\u4E86\u5173\u4E8E\u6B64\u64CD\u4F5C\u7684\u7B80\u8981\u63CF\u8FF0\uFF0Ctags \u5217\u51FA\u4E86\u76F8\u5173\u7684\u6807\u7B7E\u3002@<span class="token constant">OA</span>\\RequestBody \u7528\u4E8E\u5B9A\u4E49\u8BF7\u6C42\u4F53\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 @<span class="token constant">OA</span>\\JsonContent \u6765\u6307\u5B9A\u8BF7\u6C42\u4F53\u7684 <span class="token constant">JSON</span> \u683C\u5F0F\u3002@<span class="token constant">OA</span>\\Response \u7528\u4E8E\u5B9A\u4E49\u64CD\u4F5C\u7684\u54CD\u5E94\uFF0C\u5305\u62EC\u6210\u529F\u548C\u9519\u8BEF\u60C5\u51B5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.post\u53C2\u6570\u4E3A\u679A\u4E3E\u7C7B\u578B</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * @OA\\Post(
 *     path=&quot;/api/create_order&quot;,
 *     summary=&quot;Create a new order&quot;,
 *     tags=<span class="token punctuation">{</span>&quot;Orders&quot;<span class="token punctuation">}</span>,
 *     @OA\\RequestBody(
 *         required=true,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;product&quot;, type=&quot;string&quot;, enum=<span class="token punctuation">{</span>&quot;product1&quot;, &quot;product2&quot;, &quot;product3&quot;<span class="token punctuation">}</span>),
 *             @OA\\Property(property=&quot;quantity&quot;, type=&quot;integer&quot;, example=10)
 *         )
 *     ),
 *     @OA\\Response(
 *         response=&quot;201&quot;,
 *         description=&quot;Order created successfully&quot;,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Order created successfully.&quot;)
 *         )
 *     ),
 *     @OA\\Response(
 *         response=&quot;400&quot;,
 *         description=&quot;Bad request&quot;,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Invalid input data.&quot;)
 *         )
 *     )
 * )
 */</span>
  
\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C@<span class="token constant">OA</span>\\Schema \u6CE8\u91CA\u7528\u4E8E\u5B9A\u4E49\u4E00\u4E2A\u679A\u4E3E\u7C7B\u578B\u7684\u5BF9\u8C61\u3002\u5728 @<span class="token constant">OA</span>\\Property \u6CE8\u91CA\u4E2D\uFF0C\u4F7F\u7528 <span class="token keyword">enum</span> \u53C2\u6570\u6765\u6307\u5B9A\u5141\u8BB8\u7684\u679A\u4E3E\u503C\u5217\u8868\u3002\u8FD9\u91CC\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3A <span class="token string double-quoted-string">&quot;product&quot;</span> \u7684\u5B57\u6BB5\uFF0C\u5176\u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4E14\u4EC5\u5141\u8BB8\u53D6\u503C\u4E3A <span class="token string double-quoted-string">&quot;product1&quot;</span>\u3001<span class="token string double-quoted-string">&quot;product2&quot;</span> \u548C <span class="token string double-quoted-string">&quot;product3&quot;</span> \u4E2D\u7684\u4E00\u4E2A\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.post\u8FD4\u56DE\u503C\u5305\u542B\u5BF9\u8C61</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * @OA\\Post(
 *     summary=&quot;Create a new post&quot;,
 *     tags=<span class="token punctuation">{</span>&quot;Posts&quot;<span class="token punctuation">}</span>,
 *     @OA\\RequestBody(
 *         required=true,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;title&quot;, type=&quot;string&quot;),
 *             @OA\\Property(property=&quot;content&quot;, type=&quot;string&quot;)
 *         )
 *     ),
 *     @OA\\Response(
 *         response=&quot;201&quot;,
 *         description=&quot;Post created successfully&quot;,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Post created successfully.&quot;),
 *             @OA\\Property(property=&quot;post_data&quot;, type=&quot;object&quot;,
 *                 @OA\\Property(property=&quot;id&quot;, type=&quot;integer&quot;, example=123),
 *                 @OA\\Property(property=&quot;title&quot;, type=&quot;string&quot;),
 *                 @OA\\Property(property=&quot;content&quot;, type=&quot;string&quot;)
 *             )
 *         )
 *     ),
 *     @OA\\Response(
 *         response=&quot;400&quot;,
 *         description=&quot;Bad request&quot;,
 *         @OA\\JsonContent(
 *             @OA\\Property(property=&quot;message&quot;, type=&quot;string&quot;, example=&quot;Invalid input data.&quot;)
 *         )
 *     )
 * )
 */</span>
  
\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C@<span class="token constant">OA</span>\\Response \u6CE8\u89E3\u7528\u4E8E\u63CF\u8FF0\u54CD\u5E94\u3002\u5728 @<span class="token constant">OA</span>\\JsonContent \u6CE8\u89E3\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 @<span class="token constant">OA</span>\\Property \u6765\u5B9A\u4E49\u54CD\u5E94\u7684\u5C5E\u6027\u3002\u5176\u4E2D\uFF0Cpost_data \u662F\u4E00\u4E2A\u5BF9\u8C61\u5C5E\u6027\uFF0C\u6211\u4EEC\u5728\u5B83\u7684\u5185\u90E8\u4F7F\u7528\u53E6\u4E00\u4E2A @<span class="token constant">OA</span>\\Property \u6CE8\u89E3\u6765\u5B9A\u4E49\u8BE5\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u5982 id\u3001title \u548C content\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u666E\u901AGET\u8BF7\u6C42</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * @OA\\Get(
 *     path=&quot;/api/resource&quot;,
 *     summary=&quot;Get a list of resources&quot;,
 *     tags=<span class="token punctuation">{</span>&quot;Resource&quot;<span class="token punctuation">}</span>,
 *     @OA\\Response(
 *         response=200,
 *         description=&quot;Successful response&quot;,
 *         @OA\\JsonContent(
 *             type=&quot;array&quot;,
 *             @OA\\Items(ref=&quot;#/components/schemas/Resource&quot;)
 *         )
 *     )
 * )
 */</span>
  
\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C@<span class="token constant">OA</span>\\Get \u6CE8\u91CA\u8868\u793A\u8FD9\u662F\u4E00\u4E2A <span class="token constant">GET</span> \u8BF7\u6C42\u7684\u914D\u7F6E\u3002\u60A8\u9700\u8981\u6307\u5B9A\u8BF7\u6C42\u7684\u8DEF\u5F84\u3001\u6982\u8981\u3001\u6807\u7B7E\u548C\u54CD\u5E94\u3002\u54CD\u5E94\u90E8\u5206\u4F7F\u7528 @<span class="token constant">OA</span>\\Response \u6CE8\u91CA\u6765\u5B9A\u4E49\u6210\u529F\u54CD\u5E94\u7684\u72B6\u6001\u7801\u548C\u6570\u636E\u7ED3\u6784\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.\u5E26\u4E00\u4E2Aid\u8DEF\u7531\u53C2\u6570\u7684GET\u8BF7\u6C42</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * @OA\\Get(
 *     path=&quot;/api/resource/<span class="token punctuation">{</span>id<span class="token punctuation">}</span>&quot;,
 *     summary=&quot;Get a resource by ID&quot;,
 *     tags=<span class="token punctuation">{</span>&quot;Resource&quot;<span class="token punctuation">}</span>,
 *     @OA\\Parameter(
 *         name=&quot;id&quot;,
 *         in=&quot;path&quot;,
 *         required=true,
 *         description=&quot;ID of the resource&quot;,
 *         @OA\\Schema(type=&quot;integer&quot;)
 *     ),
 *     @OA\\Response(
 *         response=200,
 *         description=&quot;Successful response&quot;,
 *         @OA\\JsonContent(ref=&quot;#/components/schemas/Resource&quot;)
 *     )
 * )
 */</span>
  
\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5728\u8DEF\u5F84\u4E2D\u4F7F\u7528 <span class="token punctuation">{</span>id<span class="token punctuation">}</span> \u6765\u8868\u793A\u8DEF\u7531\u53C2\u6570\uFF0C\u7136\u540E\u4F7F\u7528 @<span class="token constant">OA</span>\\Parameter \u6CE8\u91CA\u6765\u5B9A\u4E49\u8FD9\u4E2A\u53C2\u6570\u3002\u6CE8\u91CA\u4E2D\u7684\u5C5E\u6027\u8BF4\u660E\u5982\u4E0B\uFF1A

name<span class="token punctuation">:</span> \u53C2\u6570\u7684\u540D\u79F0\uFF0C\u8FD9\u91CC\u662F <span class="token string double-quoted-string">&quot;id&quot;</span>\u3002
in<span class="token punctuation">:</span> \u53C2\u6570\u7684\u4F4D\u7F6E\uFF0C\u8FD9\u91CC\u662F <span class="token string double-quoted-string">&quot;path&quot;</span>\uFF0C\u8868\u793A\u5728 <span class="token constant">URL</span> \u8DEF\u5F84\u4E2D\u3002
required<span class="token punctuation">:</span> \u53C2\u6570\u662F\u5426\u4E3A\u5FC5\u9700\u7684\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A <span class="token constant boolean">true</span>\u3002
description<span class="token punctuation">:</span> \u53C2\u6570\u7684\u63CF\u8FF0\uFF0C\u89E3\u91CA\u4E86\u8BE5\u53C2\u6570\u7684\u7528\u9014\u3002
@<span class="token constant">OA</span><span class="token function"><span class="token punctuation">\\</span>Schema</span><span class="token punctuation">(</span>type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;integer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> \u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A\u6574\u6570\u7C7B\u578B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.@OA\\Property \u548C @OA\\Parameter \u7684\u533A\u522B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@OA\\Property \u548C @OA\\Parameter \u90FD\u662F Swagger-PHP \u4E2D\u7528\u4E8E\u63CF\u8FF0 API \u6587\u6863\u7684\u6CE8\u89E3\uFF0C\u4F46\u5B83\u4EEC\u5728\u4F7F\u7528\u573A\u666F\u548C\u542B\u4E49\u4E0A\u6709\u4E00\u4E9B\u533A\u522B\u3002
  
@OA\\Property:
\u7528\u4E8E\u63CF\u8FF0\u8BF7\u6C42\u4F53\u6216\u54CD\u5E94\u4F53\u4E2D\u7684\u5C5E\u6027\u3002\u901A\u5E38\u7528\u4E8E\u63CF\u8FF0 POST\u3001PUT \u7B49\u8BF7\u6C42\u65B9\u6CD5\u4E2D\u7684\u8BF7\u6C42\u4F53\u7684\u5C5E\u6027\uFF0C\u6216\u8005\u54CD\u5E94\u4E2D\u7684\u5C5E\u6027\u3002
\u9002\u7528\u4E8E\u63CF\u8FF0\u5B9E\u4F53\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4F8B\u5982\u8BF7\u6C42\u4F53\u4E2D\u7684\u5B57\u6BB5\u3001\u54CD\u5E94\u4E2D\u7684\u5B57\u6BB5\u3001\u5D4C\u5957\u5BF9\u8C61\u7B49\u3002
\u53EF\u4EE5\u8BBE\u7F6E\u7C7B\u578B\u3001\u793A\u4F8B\u503C\u3001\u63CF\u8FF0\u7B49\u5C5E\u6027\u3002
\u7528\u4E8E\u5C55\u793A\u8BF7\u6C42\u4F53\u548C\u54CD\u5E94\u4F53\u4E2D\u7684\u5C5E\u6027\u3002
  
@OA\\Parameter:
\u7528\u4E8E\u63CF\u8FF0 URL \u8DEF\u5F84\u53C2\u6570\u3001\u67E5\u8BE2\u53C2\u6570\u3001\u6807\u5934\u53C2\u6570\u7B49\u3002
\u9002\u7528\u4E8E\u63CF\u8FF0\u4F5C\u4E3A\u8BF7\u6C42\u53C2\u6570\u7684\u5C5E\u6027\uFF0C\u4F8B\u5982 GET \u8BF7\u6C42\u4E2D\u7684\u67E5\u8BE2\u53C2\u6570\uFF0C\u6216\u8005 URL \u4E2D\u7684\u8DEF\u5F84\u53C2\u6570\u3002
\u53EF\u4EE5\u8BBE\u7F6E\u7C7B\u578B\u3001\u793A\u4F8B\u503C\u3001\u63CF\u8FF0\u7B49\u5C5E\u6027\u3002
\u7528\u4E8E\u5C55\u793A\u63A5\u53E3\u7684\u8F93\u5165\u53C2\u6570\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.\u603B\u7ED3<br> \u5176\u5B9E\u8FD9\u4E2Aswagger-php \u7684\u4F7F\u7528\uFF0C\u4E3B\u8981\u5C31\u662F\u5C5E\u6027\u7684\u5D4C\u5957\uFF0C\u4E60\u60EF\u5C31\u597D\uFF0C\u552F\u4E00\u4E0D\u597D\u7684\u5C31\u662F\uFF0C\u6574\u4E2Aphp\u4EE3\u7801\u4F1A\u663E\u5F97\u5341\u5206\u81C3\u80BF\uFF0C\u4E3B\u8981\u8FD8\u662F\u6CE8\u91CA\u90E8\u5206</p>`,15),o=[a];function u(l,d){return s(),e("div",null,o)}var c=n(t,[["render",u],["__file","symfony5\u4E4BOpenAPI\u6269\u5C55\u5305\u5B9E\u73B0swagger\u6587\u6863.html.vue"]]);export{c as default};
