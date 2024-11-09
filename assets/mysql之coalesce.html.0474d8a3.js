import{_ as e,o as n,c as s,g as i}from"./app.66ae8700.js";const d={},l=i(`<p>mysql\u4E4Bcoalesce:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728 MySQL 8 \u4E2D\uFF0CCOALESCE \u51FD\u6570\u7528\u4E8E\u8FD4\u56DE\u8868\u8FBE\u5F0F\u5217\u8868\u4E2D\u7B2C\u4E00\u4E2A\u975E NULL \u7684\u503C\u3002\u5982\u679C\u6240\u6709\u8868\u8FBE\u5F0F\u90FD\u662F NULL\uFF0C\u90A3\u4E48 COALESCE \u8FD4\u56DE NULL\u3002\u5B83\u901A\u5E38\u7528\u4E8E\u5728\u67E5\u8BE2\u4E2D\u5904\u7406\u53EF\u80FD\u5305\u542B NULL \u503C\u7684\u5217\u3002
\u4F7F\u7528:
COALESCE(expression1, expression2, ..., expressionN)
  
expression1, expression2, ..., expressionN \u662F\u8981\u68C0\u67E5\u7684\u8868\u8FBE\u5F0F\u3002
\u5B83\u4F1A\u4ECE\u5DE6\u5230\u53F3\u4F9D\u6B21\u68C0\u67E5\uFF0C\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u975E NULL \u7684\u8868\u8FBE\u5F0F\u503C\u3002
\u5982\u679C\u6240\u6709\u8868\u8FBE\u5F0F\u90FD\u662F NULL\uFF0C\u5219\u8FD4\u56DE NULL
  
\u4F8B\u5B50:
SELECT user_id, 
       COALESCE(address1, address2, address3, &#39;No Address&#39;) AS primary_address
FROM users;
  
\u6709\u65F6\u5019\u53EF\u4EE5\u548CIFNULL\u8D77\u5230\u76F8\u540C\u7684\u4F5C\u7528.

  
https://dev.mysql.com/doc/refman/8.4/en/comparison-operators.html#function_coalesce

  
mysql\u4E4Bconcat-ws:
\u8FD9\u4E2A\u65B9\u6CD5\u9ED8\u8BA4\u7684doctrine\u4E0D\u652F\u6301\uFF0C\u5728symfony\u6846\u67B6\u4E0B\u4F7F\u7528\u9700\u8981\u5B89\u88C5: composer require beberlei/doctrineextensions \u62D3\u5C55, \u540C\u65F6\u9700\u8981\u914D\u7F6E\uFF0C\u53C2\u8003: https://symfony.com/doc/current/doctrine/custom_dql_functions.html
  
https://dev.mysql.com/doc/refman/8.4/en/string-functions.html#function_concat-ws
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function r(a,v){return n(),s("div",null,c)}var m=e(d,[["render",r],["__file","mysql\u4E4Bcoalesce.html.vue"]]);export{m as default};
