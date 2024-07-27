import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},r=s(`<p>symfony\u8DEF\u7531\u6587\u4EF6\u8BE6\u89E3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2460\u67E5\u770B\u6240\u6709\u8DEF\u7531
php bin/console debug:router

\u2461\u67E5\u770B\u6307\u5B9A\u8DEF\u7531\u4FE1\u606F
php bin/console debug:router admin_course_list

\u2462\u6839\u636E\u6307\u5B9A\u8DEF\u7531\u540D\u79F0\u83B7\u53D6url
\u5982\u679C\u4F60\u7684\u63A7\u5236\u5668\u6269\u5C55\u81EAAbstractController\uFF0C\u4F7F\u7528generateUrl()\u5E2E\u52A9\u5668:
$this-&gt;generateUrl(&#39;sign_up&#39;);

\u5982\u679C\u4F60\u7684\u63A7\u5236\u5668\u6CA1\u6709\u4ECEAbstractController\u6269\u5C55\uFF0C\u4F60\u9700\u8981\u5728\u4F60\u7684\u63A7\u5236\u5668\u4E2D\u83B7\u53D6\u670D\u52A1\uFF0C\u5E76\u9075\u5FAA\u4E0B\u4E00\u8282\u7684\u6307\u793A:
// src/Service/SomeService.php
namespace App\\Service;

use Symfony\\Component\\Routing\\Generator\\UrlGeneratorInterface;

class SomeService
{
    public function __construct(
        private UrlGeneratorInterface $router,
    ) {
    }

    public function someMethod()
    {
        // ...

        // generate a URL with no route arguments
        $signUpPage = $this-&gt;router-&gt;generate(&#39;sign_up&#39;);

        // generate a URL with route arguments
        $userProfilePage = $this-&gt;router-&gt;generate(&#39;user_profile&#39;, [
            &#39;username&#39; =&gt; $user-&gt;getUserIdentifier(),
        ]);

        // generated URLs are &quot;absolute paths&quot; by default. Pass a third optional
        // argument to generate different URLs (e.g. an &quot;absolute URL&quot;)
        $signUpPage = $this-&gt;router-&gt;generate(&#39;sign_up&#39;, [], UrlGeneratorInterface::ABSOLUTE_URL);

        // when a route is localized, Symfony uses by default the current request locale
        // pass a different &#39;_locale&#39; value if you want to set the locale explicitly
        $signUpPageInDutch = $this-&gt;router-&gt;generate(&#39;sign_up&#39;, [&#39;_locale&#39; =&gt; &#39;nl&#39;]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[r];function d(t,v){return n(),i("div",null,a)}var c=e(l,[["render",d],["__file","symfony\u4E4B\u8DEF\u7531\u6587\u4EF6\u8BE6\u89E3.html.vue"]]);export{c as default};
