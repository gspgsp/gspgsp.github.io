import{_ as n,o as e,c as i,g as s}from"./app.dd03cafd.js";const l={},d=s(`<p>symfony\u6A21\u677F\u6E32\u67D3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2460\u5E38\u89C4\u65B9\u5F0F
// src/Controller/ProductController.php
namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;

class ProductController extends AbstractController
{
    public function index(): Response
    {
        // ...

        // the \`render()\` method returns a \`Response\` object with the
        // contents created by the template
        return $this-&gt;render(&#39;product/index.html.twig&#39;, [
            &#39;category&#39; =&gt; &#39;...&#39;,
            &#39;promotions&#39; =&gt; [&#39;...&#39;, &#39;...&#39;],
        ]);

        // the \`renderView()\` method only returns the contents created by the
        // template, so you can use those contents later in a \`Response\` object
        $contents = $this-&gt;renderView(&#39;product/index.html.twig&#39;, [
            &#39;category&#39; =&gt; &#39;...&#39;,
            &#39;promotions&#39; =&gt; [&#39;...&#39;, &#39;...&#39;],
        ]);

        return new Response($contents);
        
        //\u6216\u8005\u76F4\u63A5 render
        return $this-&gt;render(&#39;product/index.html.twig&#39;, [
            &#39;pagination&#39; =&gt; $pagination,
            &#39;query&#39; =&gt; $request-&gt;query-&gt;all(),
        ]);
    }
}

\u2461v5.4\u7248\u672C\u4EE5\u540E\u53EF\u4EE5\u901A\u8FC7Annotation\u65B9\u5F0F\uFF0C\u867D\u7136\u5B98\u7F51\u8BF4\u662Fv6.2\u4EE5\u540E\u624D\u884C
// src/Controller/ProductController.php
namespace App\\Controller;

use Symfony\\Bridge\\Twig\\Attribute\\Template;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;

class ProductController extends AbstractController
{
    #[Template(&#39;product/index.html.twig&#39;)] //Annotation\u65B9\u5F0F
    public function index()
    {
        // ...

        // when using the #[Template()] attribute, you only need to return
        // an array with the parameters to pass to the template (the attribute
        // is the one which will create and return the Response object).
        return [
            &#39;category&#39; =&gt; &#39;...&#39;,
            &#39;promotions&#39; =&gt; [&#39;...&#39;, &#39;...&#39;],
        ];
    }
}

\u2462\u5728\u975E\u63A7\u5236\u5668(\u6BD4\u5982 service \u91CC\u9762)
// src/Service/SomeService.php
namespace App\\Service;

use Twig\\Environment;//\u6CE8\u610F\u8FD9\u4E2Atwig\u7684\u73AF\u5883\u53D8\u91CF

class SomeService
{
    public function __construct(
        private Environment $twig,
    ) {
    }

    public function someMethod()
    {
        // ...

        $htmlContents = $this-&gt;twig-&gt;render(&#39;product/index.html.twig&#39;, [
            &#39;category&#39; =&gt; &#39;...&#39;,
            &#39;promotions&#39; =&gt; [&#39;...&#39;, &#39;...&#39;],
        ]);
    }
}


\u2463\u76F4\u63A5\u5728 config/routes.yaml \u6E32\u67D3\u6A21\u677F,\u867D\u7136\u6A21\u677F\u901A\u5E38\u5728\u63A7\u5236\u5668\u548C\u670D\u52A1\u4E2D\u5448\u73B0\uFF0C\u4F46\u4F60\u53EF\u4EE5\u76F4\u63A5\u4ECE\u8DEF\u7531\u5B9A\u4E49\u4E2D\u5448\u73B0\u4E0D\u9700\u8981\u4EFB\u4F55\u53D8\u91CF\u7684\u9759\u6001\u9875\u9762\u3002\u4F7F\u7528Symfony\u63D0\u4F9B\u7684\u7279\u6B8ATemplateController\uFF1A
acme_privacy:
  path:          /admin/test //\u8DEF\u7531
  controller:    Symfony\\Bundle\\FrameworkBundle\\Controller\\TemplateController //\u8FD9\u4E2A\u63A7\u5236\u5668\u662Fsymfony\u81EA\u5E26\u7684\uFF0C\u4E0D\u8BB8\u7528\u6211\u4EEC\u5904\u7406
  defaults:
    # the path of the template to render
    template:  &#39;admin/test.html.twig&#39; //\u53EA\u9700\u8981\u4E00\u4E2A\u9759\u6001\u9875\u9762\u5373\u53EF

    # the response status code (default: 200)
    statusCode: 200

    # special options defined by Symfony to set the page cache
    maxAge:    86400
    sharedAge: 86400

    # whether or not caching should apply for client caches only
    private: true

    # optionally you can define some arguments passed to the template
    context:
      site_name: &#39;ACME&#39;
      theme: &#39;dark&#39;

\u68C0\u67E5\u6240\u6709\u6A21\u677F:$ php bin/console lint:twig
\u5C55\u793A\u6A21\u677F\u4FE1\u606F:$ php bin/console debug:twig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function t(v,a){return e(),i("div",null,r)}var u=n(l,[["render",t],["__file","symfony\u4E4B\u6A21\u677F\u6E32\u67D3.html.vue"]]);export{u as default};
