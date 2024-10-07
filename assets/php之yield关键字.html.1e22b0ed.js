import{_ as e,o as n,c as i,g as l}from"./app.d66d8774.js";const d={},s=l(`<p>php\u4E4Byield\u5173\u952E\u5B57:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD9\u4E2A\u5173\u952E\u5B57\u7684\u5B66\u540D\u662F \u751F\u6210\u5668\uFF0C\u4EFB\u4F55\u5305\u542B yield \u7684\u51FD\u6570\u90FD\u662F\u4E00\u4E2A\u751F\u6210\u5668\u51FD\u6570\u3002

\u751F\u6210\u5668\u51FD\u6570\u770B\u8D77\u6765\u50CF\u666E\u901A\u51FD\u6570\u2014\u2014\u4E0D\u540C\u7684\u662F\u666E\u901A\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u800C\u751F\u6210\u5668\u53EF\u4EE5 yield \u751F\u6210\u591A\u4E2A\u60F3\u8981\u7684\u503C\u3002 

\u5F53\u4E00\u4E2A\u751F\u6210\u5668\u88AB\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A\u53EF\u4EE5\u88AB\u904D\u5386\u7684\u5BF9\u8C61.\u5F53\u4F60\u904D\u5386\u8FD9\u4E2A\u5BF9\u8C61\u7684\u65F6\u5019(\u4F8B\u5982\u901A\u8FC7\u4E00\u4E2Aforeach\u5FAA\u73AF)\uFF0CPHP \u5C06\u4F1A\u5728\u6BCF\u6B21\u9700\u8981\u503C\u7684\u65F6\u5019\u8C03\u7528\u5BF9\u8C61\u7684\u904D\u5386\u65B9\u6CD5\uFF0C\u5E76\u5728\u4EA7\u751F\u4E00\u4E2A\u503C\u4E4B\u540E\u4FDD\u5B58\u751F\u6210\u5668\u7684\u72B6\u6001\uFF0C\u8FD9\u6837\u5B83\u5C31\u53EF\u4EE5\u5728\u9700\u8981\u4EA7\u751F\u4E0B\u4E00\u4E2A\u503C\u7684\u65F6\u5019\u6062\u590D\u8C03\u7528\u72B6\u6001\u3002

\u4E00\u65E6\u4E0D\u518D\u9700\u8981\u4EA7\u751F\u66F4\u591A\u7684\u503C\uFF0C\u751F\u6210\u5668\u53EF\u4EE5\u7B80\u5355\u9000\u51FA\uFF0C\u800C\u8C03\u7528\u751F\u6210\u5668\u7684\u4EE3\u7801\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u6267\u884C\uFF0C\u5C31\u50CF\u4E00\u4E2A\u6570\u7EC4\u5DF2\u7ECF\u88AB\u904D\u5386\u5B8C\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u5668\u51FD\u6570\u7684\u6838\u5FC3\u662Fyield\u5173\u952E\u5B57\u3002\u5B83\u6700\u7B80\u5355\u7684\u8C03\u7528\u5F62\u5F0F\u770B\u8D77\u6765\u50CF\u4E00\u4E2Areturn\u7533\u660E\uFF0C\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\u666E\u901Areturn\u4F1A\u8FD4\u56DE\u503C\u5E76\u7EC8\u6B62\u51FD\u6570\u7684\u6267\u884C\uFF0C\u800Cyield\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u7ED9\u5FAA\u73AF\u8C03\u7528\u6B64\u751F\u6210\u5668\u7684\u4EE3\u7801\u5E76\u4E14\u53EA\u662F\u6682\u505C\u6267\u884C\u751F\u6210\u5668\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50:
&lt;?php
function gen_one_to_three() {
    for ($i = 1; $i &lt;= 3; $i++) {
        //\u6CE8\u610F\u53D8\u91CF$i\u7684\u503C\u5728\u4E0D\u540C\u7684yield\u4E4B\u95F4\u662F\u4FDD\u6301\u4F20\u9012\u7684\u3002
        yield $i;
    }
}

$generator = gen_one_to_three();
foreach ($generator as $value) {
    echo &quot;$value\\n&quot;;
}
?&gt;

  
\u8F93\u51FA:
1
2
3  

  
\u6CE8\u610F:
\u5728\u5185\u90E8\u4F1A\u4E3A\u751F\u6210\u7684\u503C\u914D\u5BF9\u8FDE\u7EED\u7684\u6574\u578B\u7D22\u5F15\uFF0C\u5C31\u50CF\u4E00\u4E2A\u975E\u5173\u8054\u7684\u6570\u7EC4\u3002  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u5668\u80FD\u591F\u8FD4\u56DE\u591A\u4E2A\u503C\uFF0C\u901A\u8FC7 Generator::getReturn() \u53EF\u4EE5\u83B7\u53D6\u5230</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50:
&lt;?php

$gen = (function() {
    yield 1;
    yield 2;

    return 3;
})();

foreach ($gen as $val) {
    echo $val, PHP_EOL;
}

echo $gen-&gt;getReturn(), PHP_EOL;

  
\u8F93\u51FA:
1
2
3  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[s];function a(r,c){return n(),i("div",null,v)}var m=e(d,[["render",a],["__file","php\u4E4Byield\u5173\u952E\u5B57.html.vue"]]);export{m as default};
