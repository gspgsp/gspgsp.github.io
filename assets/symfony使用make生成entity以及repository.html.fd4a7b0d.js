import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const t={},r=s(`<p>symfony\u4F7F\u7528make\u751F\u6210entity\u4EE5\u53CArepository:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728 Symfony \u4E2D\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Doctrine ORM\uFF0C\u90A3\u4E48 Repository \u7C7B\u4F1A\u5728\u4F60\u751F\u6210\u5B9E\u4F53\u7C7B\u7684\u540C\u65F6\u81EA\u52A8\u751F\u6210\u3002\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B:
  
\u786E\u4FDD\u4F60\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86 Doctrine ORM \u76F8\u5173\u7684 bundle,\u5E76\u6620\u5C04\u4E86\u5B9E\u4F53\u8DEF\u5F84\u3002
\u4F7F\u7528 Symfony \u63D0\u4F9B\u7684\u547D\u4EE4\u6765\u751F\u6210\u5B9E\u4F53\u7C7B\u548C Repository \u7C7B:
php bin/console make:entity
\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5F15\u5BFC\u4F60\u8F93\u5165\u5B9E\u4F53\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002  
  
\u5728\u8BE5\u547D\u4EE4\u7684\u5F15\u5BFC\u8FC7\u7A0B\u4E2D,\u4F1A\u8BE2\u95EE\u4F60\u662F\u5426\u9700\u8981\u4E3A\u8BE5\u5B9E\u4F53\u751F\u6210 Repository \u7C7B,\u9009\u62E9&quot;Yes&quot;\u3002
\u547D\u4EE4\u6267\u884C\u5B8C\u6BD5\u540E,\u5C31\u4F1A\u5728 src/Repository \u76EE\u5F55\u4E0B\u751F\u6210\u5BF9\u5E94\u7684 Repository \u7C7B\u3002
\u5C31\u50CF\u4F60\u63D0\u4F9B\u7684 AffiliationRepository \u7C7B\u4EE3\u7801\u4E00\u6837,Symfony\u4F1A\u81EA\u52A8\u4E3A\u4F60\u751F\u6210\u7C7B\u7EE7\u627F\u81EA Doctrine\\ORM\\EntityRepository \u7684\u4ED3\u5E93\u7C7B\u3002
  
\u8FD9\u4E2A\u81EA\u52A8\u751F\u6210\u7684\u4ED3\u5E93\u7C7B\u4E2D\u662F\u7A7A\u7684,\u56E0\u4E3A\u9884\u671F\u4F60\u4F1A\u5728\u5176\u4E2D\u81EA\u884C\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684\u67E5\u8BE2\u65B9\u6CD5\u3002\u4F60\u53EF\u4EE5\u5728\u8BE5\u7C7B\u4E2D\u7F16\u5199\u9488\u5BF9\u8BE5\u5B9E\u4F53\u7684\u67E5\u8BE2\u903B\u8F91\u3002
  
\u5982\u679C\u4F60\u540E\u7EED\u9700\u8981\u4E3A\u5DF2\u6709\u7684\u5B9E\u4F53\u751F\u6210\u4ED3\u5E93\u7C7B,\u53EF\u4EE5\u8FD0\u884C:
php bin/console make:entity --entity=Entity\\ExistingEntity --regenerate
\u5176\u4E2D --entity \u9009\u9879\u6307\u5B9A\u4E86\u8981\u4E3A\u54EA\u4E2A\u5DF2\u5B58\u5728\u7684\u5B9E\u4F53\u7C7B\u751F\u6210\u4ED3\u5E93\u7C7B, --regenerate \u9009\u9879\u8868\u793A\u91CD\u65B0\u751F\u6210\u4ED3\u5E93\u7C7B(\u5982\u679C\u5DF2\u5B58\u5728\u5219\u8986\u76D6)\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[r];function l(d,a){return n(),i("div",null,o)}var v=e(t,[["render",l],["__file","symfony\u4F7F\u7528make\u751F\u6210entity\u4EE5\u53CArepository.html.vue"]]);export{v as default};
