import{_ as e,o as i,c as n,g as s}from"./app.dd03cafd.js";const t={},r=s(`<p>symfony\u4E4Buser-role\u6743\u9650\u7BA1\u7406\u539F\u7406:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>symfony\u7684\u7528\u6237\u89D2\u8272\u6743\u9650\u7BA1\u7406\u548Cjava\u7684\u5DEE\u4E0D\u591A\uFF0C\u90FD\u662F\u901A\u8FC7 \u6CE8\u91CA\u8DEF\u7531 \u6765\u63A7\u5236\u7684\uFF0C\u6211\u8FD8\u662F\u89C9\u5F97\u50CF laravel\u4E0B\u7684 RBAC \u6743\u9650\u63A7\u5236\u7CFB\u7EDF\u6BD4\u8F83\u597D\uFF0C\u66F4\u5168\u9762
\u901A\u8FC7 \u6CE8\u91CA\u8DEF\u7531 \u6765\u63A7\u5236\uFF0C \u611F\u89C9\u592A\u7B80\u5355\u7C97\u66B4\uFF0C\u9002\u5408\u7B80\u5355\u7684\u6743\u9650\u5206\u914D\u3002

\u4E0B\u9762\u8BF4\u4E00\u4E0B\u8FD9\u4E2A\u9A8C\u8BC1\u8FC7\u7A0B:
symfony\u7684\u9ED8\u8BA4\u6743\u9650\u9A8C\u8BC1 authenticate \u8C03\u7528\u7684\u662F vendor/symfony/security-http/Firewall/AccessListener.php  \u4E2D\u7684 authenticate \u65B9\u6CD5
\u5176\u4E2D\uFF1A
if (!$this-&gt;accessDecisionManager-&gt;decide($token, $attributes, $request, true)) {
           throw $this-&gt;createAccessDeniedException($request, $attributes);
       }
       
decide \u8C03\u7528\u7684\u662F  vendor/symfony/security-core/Authorization/AccessDecisionManager.php \u4E2D\u7684 decide \u65B9\u6CD5

\u5176\u4E2D:
return $this-&gt;strategy-&gt;decide(
           $this-&gt;collectResults($token, $attributes, $object)
       );

collectResults \u4E2D\u7684 $voter-&gt;vote($token, $object, $attributes); \u8C03\u7528\u7684\u662F  vendor/symfony/security-core/Authorization/Voter/RoleVoter.php \u4E2D\u7684 vote \u65B9\u6CD5, \u8FD9\u4E2A vote \u65B9\u6CD5\u7684\u903B\u8F91\u5F88\u7B80\u5355\u5C31\u662F\u5BF9\u6BD4 $token\u91CC\u7684
\u7528\u6237\u89D2\u8272\u4FE1\u606F \u548C \u5F53\u524D\u8DEF\u7531\u9700\u8981\u7684\u6743\u9650\u4FE1\u606F\uFF0C\u7528\u4E86\u4E24\u4E2A foreach \u5B9E\u73B0\uFF0C\u5982\u679C\u6709\u76F8\u7B49\u7684\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u9A8C\u8BC1\u901A\u8FC7.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[r];function l(d,a){return i(),n("div",null,c)}var v=e(t,[["render",l],["__file","symfony\u4E4Buser-role\u6743\u9650\u7BA1\u7406\u539F\u7406.html.vue"]]);export{v as default};
