import{_ as e,o as s,c as n,g as i}from"./app.66ae8700.js";const l={},a=i(`<p>solr\u7684\u5BA2\u6237\u7AEF:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php:
composer require solarium/solarium

\u76F4\u63A5API\u8C03\u7528:
\u8BBE\u7F6E\u4E86\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684,\u5728header\u5934\u4E0B\u6DFB\u52A0\u8BA4\u8BC1:
Authorization: Basic base64(username:password)  // base64(username:password) \u9700\u8981\u624B\u52A8\u751F\u6210
\u7136\u540E\u5C31\u53EF\u4EE5\u8C03\u7528API\u4E86.

php\u4E0B\u751F\u6210\u52A0\u5BC6\u4FE1\u606F:
//\u5B98\u65B9\u52A0\u5BC6\u65B9\u5F0F\u5C11\u4E86\u4E00\u4E2A &#39;)&#39; \u53F7
base64(sha256(sha256(salt+password))) base64(salt)\uFF0C \u4E2D\u95F4\u6709\u4E2A\u7A7A\u683C

//security.json\u914D\u7F6E\u5982\u4E0B:
{
    &quot;authentication&quot;:{
        &quot;blockUnknown&quot;: true,
        &quot;class&quot;:&quot;solr.BasicAuthPlugin&quot;,
        &quot;credentials&quot;:{&quot;solr&quot;:&quot;ua1+S+w/1HipuKpWrOrhGkhH6mLJe+j0YvzPLOoe0KM= aGFoYQ==&quot;}, // \u5206\u522B\u662F\u7528\u6237\u540D\u548C \u52A0\u5BC6\u7684\u5BC6\u7801\u4EE5\u53CA\u5BC6\u7801\u76D0
        &quot;realm&quot;:&quot;My Solr users&quot;,
        &quot;forwardCredentials&quot;: false
    }
}

//\u52A0\u5BC6\u7B97\u6CD5
$name= &#39;solr&#39;;
$pwd = &#39;hello solr&#39;;
$salt = &#39;haha&#39;;

$hash = hash(&#39;sha256&#39;, hash(&#39;sha256&#39;, $salt.$pwd, true), true); // true \u8868\u793A\u8F93\u51FA\u539F\u59CB\u4E8C\u8FDB\u5236\u6570\u636E,\u5FC5\u987B\u8981\u8BBE\u7F6E\uFF0C\u5426\u5219\u751F\u6210\u7684hash\u503C\u9A8C\u8BC1\u4E0D\u901A\u8FC7
$res_pwd = base64_encode($hash);
$res_salt = base64_encode($salt);

dd($res_pwd.&#39;-----&#39;.$res_salt);

base64\u5728\u7EBF\u5DE5\u5177: https://base64.us/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function r(u,v){return s(),n("div",null,d)}var c=e(l,[["render",r],["__file","solr\u7684\u5BA2\u6237\u7AEF.html.vue"]]);export{c as default};
