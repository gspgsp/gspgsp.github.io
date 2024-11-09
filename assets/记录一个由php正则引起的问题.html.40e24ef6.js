import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const l={},t=s(`<p>\u8BB0\u5F55\u4E00\u4E2A\u7531php\u6B63\u5219\u5F15\u8D77\u7684\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u6709\u5982\u4E0B\u5185\u5BB9\uFF0C\u9700\u8981\u6B63\u5219\u5339\u914D Reviewer comments \u540E\u7684\u5185\u5BB9\uFF0C\u4F46\u662F\u5F00\u59CB\u6CA1\u6709\u8003\u8651\u5230\u56DE\u8F66\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u5BFC\u81F4\u5339\u914D\u5185\u5BB9\u4E3A\u7A7A\u7684\u95EE\u9898
$comments = &#39;&lt;strong&gt;Reviewer recommendation:&lt;/strong&gt; Revision&lt;br/&gt;&lt;strong&gt;Reviewer comments:&lt;/strong&gt; s revisions - there is some merit in this submission, but it fails to meet all the requirements for presenting it in this eve
55355345&#39;;
if (strpos($comments, &#39;Reviewer comments&#39;)) {
//            preg_match(&#39;/&lt;strong&gt;Reviewer comments:&lt;\\/strong&gt;\\s*(.*?)$/&#39;, $comments, $matches);
    preg_match(&#39;/&lt;strong&gt;Reviewer comments:&lt;\\/strong&gt;\\s*(.*?)$/s&#39;, $comments, $matches);

    dd($matches);
}
  
(.*?)\u89E3\u91CA:
  
(.*?) \u662F\u4E00\u4E2A\u975E\u8D2A\u5A6A\u5339\u914D\u7EC4\u5408\uFF0C\u7528\u4E8E\u5339\u914D\u4EFB\u610F\u5B57\u7B26\uFF0C\u4E0D\u5305\u62EC\u6362\u884C\u7B26\uFF0C\u4F46\u4EE5\u6700\u77ED\u7684\u65B9\u5F0F\u5339\u914D\u3002\u8BA9\u6211\u6765\u89E3\u91CA\u4E00\u4E0B\u5B83\u7684\u5404\u4E2A\u90E8\u5206\uFF1A
( \u548C )\uFF1A\u8FD9\u662F\u6355\u83B7\u7EC4\uFF0C\u7528\u4E8E\u5C06\u5339\u914D\u7684\u5185\u5BB9\u6355\u83B7\u5230\u4E00\u4E2A\u5355\u72EC\u7684\u7EC4\u4E2D\uFF0C\u4EE5\u4FBF\u7A0D\u540E\u53EF\u4EE5\u901A\u8FC7\u53D8\u91CF\u6216\u6570\u7EC4\u5F15\u7528\u3002
  
.*?\uFF1A\u8FD9\u662F\u4E00\u4E2A\u975E\u8D2A\u5A6A\u5339\u914D\u7684\u8868\u8FBE\u5F0F\uFF0C\u5176\u4E2D\uFF1A
. \u5339\u914D\u4EFB\u610F\u5B57\u7B26\uFF08\u9664\u4E86\u6362\u884C\u7B26\uFF09\u3002
* \u8868\u793A\u5339\u914D\u524D\u9762\u7684\u5B57\u7B26\u96F6\u6B21\u6216\u591A\u6B21\u3002
? \u8868\u793A\u975E\u8D2A\u5A6A\u5339\u914D\uFF0C\u5373\u4EE5\u6700\u77ED\u7684\u65B9\u5F0F\u5339\u914D\u3002
  
\u6700\u77ED\u7684\u65B9\u5F0F:
\u610F\u5473\u7740\u6B63\u5219\u8868\u8FBE\u5F0F\u5F15\u64CE\u4F1A\u5C3D\u53EF\u80FD\u5730\u5339\u914D\u6700\u77ED\u7684\u5B57\u7B26\u4E32
\u5047\u5982\u6709\u8FD9\u6837\u7684\u5B57\u7B26\u4E32:  &lt;p&gt;Hello&lt;/p&gt;&lt;p&gt;World&lt;/p&gt; 
\u73B0\u5728\uFF0C\u6211\u4EEC\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F /&lt;p&gt;.*?&lt;\\/p&gt;/ \u6765\u5339\u914D\u4E24\u4E2A &lt;p&gt; \u6807\u7B7E\u4E4B\u95F4\u7684\u5185\u5BB9\u3002

\u5728\u8FD9\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\uFF0C.*? \u662F\u4E00\u4E2A\u975E\u8D2A\u5A6A\u5339\u914D\uFF0C\u5B83\u5C06\u5339\u914D\u4EFB\u610F\u5B57\u7B26\uFF08\u5305\u62EC\u6362\u884C\u7B26\uFF09\uFF0C\u4F46\u4EE5\u6700\u77ED\u7684\u65B9\u5F0F\u5339\u914D\u3002\u6240\u4EE5\uFF0C\u6574\u4E2A\u8868\u8FBE\u5F0F\u5C06\u5339\u914D\u4E24\u4E2A &lt;p&gt; \u6807\u7B7E\u4E4B\u95F4\u7684\u6700\u77ED\u5185\u5BB9\uFF0C\u5373\uFF1A

&lt;p&gt;Hello&lt;/p&gt;
&lt;p&gt;World&lt;/p&gt;

\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u8D2A\u5A6A\u5339\u914D\uFF0C\u5373 /&lt;p&gt;.*&lt;\\/p&gt;/\uFF0C\u90A3\u4E48\u6574\u4E2A\u8868\u8FBE\u5F0F\u5C06\u5339\u914D\u4E24\u4E2A &lt;p&gt; \u6807\u7B7E\u4E4B\u95F4\u7684\u6700\u957F\u5185\u5BB9\uFF0C\u5373\uFF1A
&lt;p&gt;Hello&lt;/p&gt;&lt;p&gt;World&lt;/p&gt;

  
\u6CE8\u610F\u8868\u8FBE\u5F0F\u91CC\u7684\u4E24\u4E2A s \u7684\u610F\u4E49\u4E0D\u540C:
  
\\s \u662F\u7528\u6765\u5339\u914D\u7A7A\u767D\u5B57\u7B26\u7684\u5143\u5B57\u7B26\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\\s \u5339\u914D\u7A7A\u683C\u3001\u5236\u8868\u7B26\u3001\u6362\u884C\u7B26\u7B49\u7A7A\u767D\u5B57\u7B26\u3002
  
\u4F7F\u7528 /s \u4FEE\u9970\u7B26\u4F1A\u6539\u53D8 . \u7684\u884C\u4E3A\uFF0C\u7ED3\u5C3E\u7684 /s \u4FEE\u9970\u7B26\u8868\u793A\u5355\u884C\u6A21\u5F0F\uFF08single-line mode\uFF09\uFF0C\u4F7F\u5176\u5339\u914D\u5305\u62EC\u7A7A\u767D\u5B57\u7B26\uFF08whitespace\uFF09\u5728\u5185\u7684\u4EFB\u610F\u5B57\u7B26\u3002\u7A7A\u767D\u5B57\u7B26\u5305\u62EC\u7A7A\u683C\u3001\u5236\u8868\u7B26\u3001\u6362\u884C\u7B26\u7B49\u3002
\u5177\u4F53\u6765\u8BF4\uFF0C/s \u4FEE\u9970\u7B26\u4F1A\u4F7F\u5F97 . \u5339\u914D\u4EE5\u4E0B\u5B57\u7B26\uFF1A
  
\u7A7A\u683C\uFF08space\uFF09
\u5236\u8868\u7B26\uFF08tab\uFF09
\u6362\u884C\u7B26\uFF08newline\uFF09
\u56DE\u8F66\u7B26\uFF08carriage return\uFF09
\u5782\u76F4\u5236\u8868\u7B26\uFF08vertical tab\uFF09
\u6362\u9875\u7B26\uFF08form feed\uFF09
\u6240\u4EE5\uFF0C\u5F53\u4F60\u4F7F\u7528 /s \u4FEE\u9970\u7B26\u65F6\uFF0C. \u5C06\u5339\u914D\u5305\u62EC &lt;br&gt; \u6807\u7B7E\u4E2D\u7684\u6362\u884C\u7B26 \\n \u5728\u5185\u7684\u4EFB\u610F\u5B57\u7B26\u3002
  
\u540C\u65F6\uFF0C\u7531\u4E8E $ \u951A\u70B9\u5339\u914D\u884C\u5C3E\uFF0C\u4E0D\u5305\u62EC\u6362\u884C\u7B26\u5728\u5185\u3002\u5982\u679C\u4E0D\u4F7F\u7528 /s \u4FEE\u9970\u7B26\uFF0C$ \u5C06\u5339\u914D\u884C\u5C3E\u800C\u4E0D\u662F\u6574\u4E2A\u5B57\u7B26\u4E32\u7684\u672B\u5C3E\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u5305\u62EC\u6362\u884C\u7B26\uFF0C\u4EE5\u53CA\u6362\u884C\u7B26\u4E4B\u540E\u7684\u5185\u5BB9\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[t];function v(r,m){return n(),i("div",null,d)}var a=e(l,[["render",v],["__file","\u8BB0\u5F55\u4E00\u4E2A\u7531php\u6B63\u5219\u5F15\u8D77\u7684\u95EE\u9898.html.vue"]]);export{a as default};
