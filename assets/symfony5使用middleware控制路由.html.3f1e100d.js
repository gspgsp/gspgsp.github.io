import{_ as e,o as n,c as s,g as i}from"./app.b04686bd.js";const t={},r=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u56E0\u4E3Asymfony\u6CA1\u6709vmiddleware\u7684\u6982\u5FF5\uFF0C\u4F46\u662F\u63D0\u4F9B\u4E86event\u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u505A\u540C\u6837\u7684\u4E8B\u60C5:  
https://stackoverflow.com/questions/48377175/how-to-add-middleware-for-one-or-two-controllers-in-symfony4

\u81EA\u5B9A\u4E49AccessDeniedException\u5F02\u5E38\u5904\u7406:  
https://symfony.com/doc/current/security/access_denied_handler.html

\u8FD8\u6709\u5C31\u662F\u627E\u5230\u4E00\u4E2Amiddleware\u7684composer\u5305\uFF0C\u4E0D\u8FC7\u611F\u89C9\u7528\u7684\u4EBA\u633A\u5C11\uFF1A  
https://github.com/kafkiansky/symfony-middleware


\u81EA\u5B9A\u4E49authenticator\uFF0C\u8FD9\u4E2A\u4E3B\u8981\u662F\u4E3A\u4E86\u5B9A\u4E49\u591A\u4E2Afirewall\u7684\u65F6\u5019\u7528\u5230\uFF0C\u6BD4\u5982\u540E\u53F0\u4E00\u5957  \u63A5\u53E3\u4E00\u5957:  
https://symfony.com/doc/current/security/custom_authenticator.html\uFF0C\u4F7F\u7528:https://symfony.com/doc/current/security/entry_point.html#multiple-authenticators-with-separate-entry-points


\u867D\u7136\u4E0D\u80FD\u76F4\u63A5\u5728\u63A7\u5236\u5668\u91CC\u5B9A\u4E49roles\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7 $this-&gt;denyAccessUnlessGranted(&#39;ROLE_USER&#39;); \u6765\u5224\u65AD\u662F\u5426\u6709 ROLE_USER \u89D2\u8272\uFF0C\u8FDB\u800C\u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 #[IsGranted(&#39;ROLE_ADMIN&#39;)] \u6765\u51B3\u5B9A:  
https://symfony.com/doc/current/security.html#security-securing-controller
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[r];function c(l,a){return n(),s("div",null,d)}var m=e(t,[["render",c],["__file","symfony5\u4F7F\u7528middleware\u63A7\u5236\u8DEF\u7531.html.vue"]]);export{m as default};
