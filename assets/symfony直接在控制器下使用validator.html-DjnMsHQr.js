import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>symfony直接在控制器下使用 validator，就像laravel一样:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    public function eventPaperSubscribeAction(Request $request, Service\\ScilitCommentManagementService $commentService, Entity\\Paper $paper, ValidatorInterface $validator)</span>
<span class="line">    {</span>
<span class="line">        $email = $request-&gt;request-&gt;get(&#39;email&#39;);</span>
<span class="line"></span>
<span class="line">        $constraints = [</span>
<span class="line">            new \\Symfony\\Component\\Validator\\Constraints\\Email(),</span>
<span class="line">            new \\Symfony\\Component\\Validator\\Constraints\\NotBlank(),</span>
<span class="line">        ];</span>
<span class="line"></span>
<span class="line">        $error = $validator-&gt;validate($email, $constraints);</span>
<span class="line">        if (count($error) &gt; 0) {</span>
<span class="line">            return new JsonResponse([&#39;success&#39; =&gt; false, &#39;status&#39; =&gt; &#39;ERROR&#39;, &#39;message&#39; =&gt; &#39;Invalid email addresss&#39;]);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $validateSubscriber = $commentService-&gt;validateSubscriber($paper, $email);</span>
<span class="line">        if (!$validateSubscriber[&#39;success&#39;]) {</span>
<span class="line">            return new JsonResponse($validateSubscriber);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $subscribeUser = $commentService-&gt;subscribeUser($paper, $email, $this-&gt;getUser());</span>
<span class="line"></span>
<span class="line">        return new JsonResponse($subscribeUser);</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",t],["__file","symfony直接在控制器下使用validator.html.vue"]]),p=JSON.parse('{"path":"/content/php/symfony/symfony%E7%9B%B4%E6%8E%A5%E5%9C%A8%E6%8E%A7%E5%88%B6%E5%99%A8%E4%B8%8B%E4%BD%BF%E7%94%A8validator.html","title":"symfony直接在控制器下使用validator","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony直接在控制器下使用validator","description":"symfony直接在控制器下使用validator"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony直接在控制器下使用validator.md"}');export{d as comp,p as data};
