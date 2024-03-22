import{_ as e,o as n,c as i,g as s}from"./app.b04686bd.js";const r={},a=s(`<p>symfony\u76F4\u63A5\u5728\u63A7\u5236\u5668\u4E0B\u4F7F\u7528 validator\uFF0C\u5C31\u50CFlaravel\u4E00\u6837:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public function eventPaperSubscribeAction(Request $request, Service\\ScilitCommentManagementService $commentService, Entity\\Paper $paper, ValidatorInterface $validator)
    {
        $email = $request-&gt;request-&gt;get(&#39;email&#39;);

        $constraints = [
            new \\Symfony\\Component\\Validator\\Constraints\\Email(),
            new \\Symfony\\Component\\Validator\\Constraints\\NotBlank(),
        ];

        $error = $validator-&gt;validate($email, $constraints);
        if (count($error) &gt; 0) {
            return new JsonResponse([&#39;success&#39; =&gt; false, &#39;status&#39; =&gt; &#39;ERROR&#39;, &#39;message&#39; =&gt; &#39;Invalid email addresss&#39;]);
        }

        $validateSubscriber = $commentService-&gt;validateSubscriber($paper, $email);
        if (!$validateSubscriber[&#39;success&#39;]) {
            return new JsonResponse($validateSubscriber);
        }

        $subscribeUser = $commentService-&gt;subscribeUser($paper, $email, $this-&gt;getUser());

        return new JsonResponse($subscribeUser);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[a];function t(d,c){return n(),i("div",null,l)}var m=e(r,[["render",t],["__file","symfony\u76F4\u63A5\u5728\u63A7\u5236\u5668\u4E0B\u4F7F\u7528validator.html.vue"]]);export{m as default};
