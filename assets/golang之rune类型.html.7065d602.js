import{_ as n,o as e,c as i,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<p>golang\u4E4Brune\u7C7B\u578B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B57\u7B26\u4E32\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u53EB\u505A\u201C\u5B57\u7B26\u201D\uFF0C\u5728\u904D\u5386\u6216\u8005\u5355\u4E2A\u83B7\u53D6\u5B57\u7B26\u4E32\u5143\u7D20\u65F6\u53EF\u4EE5\u83B7\u5F97\u5B57\u7B26
  
Go\u8BED\u8A00\u7684\u5B57\u7B26\u6709\u4EE5\u4E0B\u4E24\u79CD\uFF1A
\u4E00\u79CD\u662Fbyte \u7C7B\u578B\uFF0C\u4EE3\u8868\u4E86 ASCII \u7801\u7684\u4E00\u4E2A\u5B57\u7B26\u3002byte\u7B49\u4EF7\u4E8Euint8\u7C7B\u578B
\u53E6\u4E00\u79CD\u662F rune \u7C7B\u578B\uFF0C\u4EE3\u8868\u4E00\u4E2AUnicode\u5B57\u7B26\uFF0C\u5F53\u9700\u8981\u5904\u7406\u4E2D\u6587\u3001\u65E5\u6587\u6216\u8005\u5176\u4ED6\u590D\u5408\u5B57\u7B26\u65F6\uFF0C\u5219\u9700\u8981\u7528\u5230 rune \u7C7B\u578B\u3002rune \u7C7B\u578B\u7B49\u4EF7\u4E8E int32 \u7C7B\u578B
  
// byte is an alias for uint8 and is equivalent to uint8 in all ways. It is
// used, by convention, to distinguish byte values from 8-bit unsigned
// integer values.
type byte = uint8
  
// rune is an alias for int32 and is equivalent to int32 in all ways. It is
// used, by convention, to distinguish character values from integer values.
type rune = int32
  
\u5173\u4E8Erune\u7684\u51E0\u4E2A\u70B9:https://juejin.cn/post/7068726981159829541
rune\u7684\u4F7F\u7528\u573A\u666F:https://learnku.com/articles/23411/the-difference-between-rune-and-byte-of-go
  
int\u7684\u5404\u4E2A\u5355\u4F4D\u5927\u5C0F:https://clickhouse.com/docs/en/sql-reference/data-types/int-uint
  
unicode\u548Cascii\u7684\u533A\u522B\u4E3B\u8981\u4F53\u73B0\u5728:
1.\u7F16\u7801\u8303\u56F4\u4E0D\u540C
ASCII\u7684\u7F16\u7801\u8303\u56F4\u662F0-127\uFF0C\u4E3B\u8981\u7528\u4E8E\u8868\u793A\u82F1\u8BED\u5B57\u6BCD\uFF1B\u800CUnicode\u7684\u7F16\u7801\u8303\u56F4\u5E7F\u9614\u5F97\u591A\uFF0C\u53EF\u4EE5\u8868\u793A\u51E0\u4E4E\u6240\u6709\u7684\u8BED\u8A00\u5B57\u7B26\u3002
  
2.\u5B58\u50A8\u7A7A\u95F4\u4E0D\u540C
ASCII\u7F16\u7801\u901A\u5E38\u4F7F\u75281\u4E2A\u5B57\u8282\u6765\u5B58\u50A8\u4E00\u4E2A\u5B57\u7B26\uFF0C\u800CUnicode\u7F16\u7801\u53EF\u80FD\u4F7F\u75282\u4E2A\u6216\u66F4\u591A\u7684\u5B57\u8282\u6765\u5B58\u50A8\u4E00\u4E2A\u5B57\u7B26\u3002
  
3.\u517C\u5BB9\u6027\u4E0D\u540C
ASCII\u7F16\u7801\u662FUnicode\u7F16\u7801\u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6240\u6709\u7684ASCII\u5B57\u7B26\u5728Unicode\u7F16\u7801\u4E2D\u90FD\u6709\u5BF9\u5E94\u7684\u7F16\u7801\u3002\u8FD9\u4E5F\u610F\u5473\u7740ASCII\u7F16\u7801\u7684\u6587\u672C\u53EF\u4EE5\u76F4\u63A5\u8F6C\u6362\u4E3AUnicode\u7F16\u7801\uFF0C\u800C\u4E0D\u4F1A\u4E22\u5931\u4EFB\u4F55\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function t(v,r){return e(),i("div",null,a)}var u=n(l,[["render",t],["__file","golang\u4E4Brune\u7C7B\u578B.html.vue"]]);export{u as default};
