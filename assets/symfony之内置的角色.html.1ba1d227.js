import{_ as e,o as n,c as i,g as s}from"./app.dd03cafd.js";const t={},c=s(`<p>\u4F7F\u7528symfony\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u4F1A\u5224\u65AD\u7528\u6237\u89D2\u8272\uFF0C\u5E38\u89C1\u7684\u5C31\u662F \u662F\u5426\u767B\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ROLE_ADMIN # \u4E00\u822C\u4F1A\u81EA\u5B9A\u4E49\u8FD9\u6837\u4E00\u4E2A\u89D2\u8272
ROLE_USER # \u4E00\u822C\u4F1A\u81EA\u5B9A\u4E49\u8FD9\u6837\u4E00\u4E2A\u89D2\u8272\uFF0CEntity \u521D\u59CB\u5316\u5B8C\u6210\u4EE5\u540E\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210

PUBLIC_ACCESS
IS_AUTHENTICATED_ANONYMOUSLY  #Deprecated: since Symfony 5.4
IS_AUTHENTICATED_FULLY

namespace Symfony\\Component\\Security\\Core\\Authorization\\Voter;
AuthenticatedVoter


User Deprecated: Since symfony/security-core 5.4: 
The &quot;IS_AUTHENTICATED_ANONYMOUSLY&quot; security attribute is deprecated, 
use &quot;PUBLIC_ACCESS&quot; for public resources, otherwise use &quot;IS_AUTHENTICATED&quot; or &quot;IS_AUTHENTICATED_FULLY&quot; instead if you want to check if the request is (fully) authenticated.  


\u53C2\u8003\uFF1Ahttps://symfony.com/doc/current/security.html#allowing-unsecured-access-i-e-anonymous-users\uFF0C\u4E2D Checking to see if a User is Logged In \u90E8\u5206
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[c];function d(l,u){return n(),i("div",null,r)}var o=e(t,[["render",d],["__file","symfony\u4E4B\u5185\u7F6E\u7684\u89D2\u8272.html.vue"]]);export{o as default};
