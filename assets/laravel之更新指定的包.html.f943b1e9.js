import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728laravel\u5F00\u53D1\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u6709\u65F6\u5019\u9700\u8981\u66F4\u65B0\u6307\u5B9A\u7684\u5305\u7684\u7248\u672C\uFF0C\u5C24\u5176\u662F\u81EA\u5B9A\u4E49\u7684composer \u5305\u7684\u5185\u5BB9\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u66F4\u65B0\u624D\u80FD\u4F7F\u7528\u65B0\u7684\u5C5E\u6027\u6216\u8005\u65B9\u6CD5,
\u6709\u5982\u4E0B\u96C6\u4E2D\u4F7F\u7528\u573A\u666F:


composer\u66F4\u65B0\u6307\u5B9A\u7684\u4F9D\u8D56\u5305

compoesr \u7684require/update\u90FD\u53EF\u4EE5\u66F4\u65B0\u6307\u5B9A\u7684\u4F9D\u8D56\u5305(\u5347\u7EA7/\u964D\u7EA7)\u3002
require\u66F4\u4E3A\u7075\u6D3B\u4E9B\uFF0C\u672A\u5B89\u88C5\u5219\u8FDB\u884C\u5B89\u88C5\uFF0C\u5DF2\u5B89\u88C5\u5219\u6839\u636E\u4F20\u5165\u7684\u7248\u672C\u53F7\u8FDB\u884C\u5347\u7EA7\u6216\u964D\u7EA7\u3002
update\u5219\u65E0\u6CD5\u5728\u547D\u4EE4\u884C\u4F20\u5165\u65B0\u7684\u7248\u672C\u53F7\uFF0C\u9700\u8981\u5148\u624B\u52A8\u5728composer.json\u4E2D\u6307\u5B9A\u65B0\u7684\u7248\u672C\u53F7\uFF0C\u7136\u540E\u6267\u884C\u66F4\u65B0\u547D\u4EE4\u3002

require \u547D\u4EE4

// \u5B89\u88C5\u5305
composer require census/sql:1.3.3

// \u5DF2\u5B89\u88C5 \u5347\u7EA7
composer require census/sql:1.3.4

// \u5DF2\u5B89\u88C5 \u964D\u7EA7
composer require census/sql:1.3.2

update \u547D\u4EE4

update\u547D\u4EE4\u65E0\u6CD5\u5728\u547D\u4EE4\u884C\u4E2D\u6307\u5B9A\u5305\u7248\u672C\u53F7\uFF0C\u9700\u8981\u624B\u52A8\u4FEE\u6539composer.json\u6587\u4EF6

\u9519\u8BEF\u7528\u6CD5composer update census/sql:1.3.4

\u6B63\u786E\u7528\u6CD5\u793A\u4F8Bvim composer.json

&quot;require&quot;: {

&quot;census/sql&quot;: &quot;1.3.4&quot;

},

:wq

#\u5347\u7EA7\u52301.3.4

\u540C\u65F6\uFF0C\u5982\u679C\u6211\u4EEC\u7F16\u8F91\u66F4\u65B0\u4E86\u591A\u4E2A\u5305\u7684\u7248\u672C\u53F7\uFF0C\u5219\u65E0\u6CD5\u4F7F\u7528
composer update package1
composer update package2
composer update package3

\u7684\u65B9\u5F0F\u53BB\u4F9D\u6B21\u7684\u66F4\u65B0\uFF0C\u56E0\u4E3Acomposer\u4F1A\u6821\u9A8C\u914D\u7F6E\u6587\u4EF6\u7684\u5B8C\u6574\u6027json vs lock\uFF0C\u4F60\u6307\u5B9A\u8981\u6211\u66F4\u65B0A\uFF0C\u4F46\u4F60B\u7684version\u5728json\u548Clock\u4E2D\u4E0D\u4E00\u81F4\uFF0C\u4F60\u5374\u4E0D\u8981\u6211\u66F4\u65B0\u5B83\uFF0C\u8FD9\u662F\u6709\u95EE\u9898\u7684\u3002

\u8FD9\u65F6\u53EA\u80FD\u4F7F\u7528composer update\u5168\u5C40\u66F4\u65B0\u4F9D\u8D56\uFF0C\u6CE8\u610F\u662F\u5168\u5C40\u5305\u7684\u66F4\u65B0\u64CD\u4F5C\uFF0C\u4E00\u4E9B\u4F60\u672A\u66F4\u6539\u4F46\u4F7F\u7528\u4E86\u7248\u672C\u53F7\u8303\u56F4\u7684\u5305\u4E5F\u6709\u53EF\u80FD\u88AB\u66F4\u65B0\u5347\u7EA7\uFF0C\u8BF7\u614E\u7528\uFF01

install \u547D\u4EE4

install\u53EF\u4EE5\u7528\u4E8E\u9879\u76EE\u521D\u59CB\u5316\u540E\uFF0C\u521D\u6B21\u5B89\u88C5\u4F9D\u8D56\uFF0C\u4E14\u4F1A\u4F18\u5148\u8BFB\u53D6composer.lock\u4E2D\u7684\u7248\u672C\u53F7\uFF0C\u4EE5\u5C3D\u53EF\u80FD\u7684\u4FDD\u8BC1\u534F\u4F5C\u5F00\u53D1\u4E2D\u5305\u7248\u672C\u7684\u4E00\u81F4\u6027\u3002

composer.lock\u4E2D\u5B58\u6709\u7684\u5305\u7248\u672C\u8BB0\u5F55\u76F8\u5F53\u4E8E\u6267\u884C composer require packageName:versionNo\uFF0C\u4E0D\u5B58\u6709\u7684\u76F8\u5F53\u4E8E\u6267\u884Ccomposer update packageName with versionRule in composer.json\u3002

\u5F53\u6211\u4EEC\u534F\u540C\u5F00\u53D1\u65F6\uFF0CA \u5728\u672C\u5730\u5B89\u88C5\u4E86\u65B0\u7684\u4F9D\u8D56\u5305\uFF0C\u6216\u8005\u66F4\u65B0\u4E86\u4F9D\u8D56\u5305\uFF0C\u4F1A\u5199\u5165 composer.lock/composer.json,A \u4E0A\u4F20\u81F3\u4ED3\u5E93\uFF0CB \u62C9\u53D6\u81F3\u672C\u5730\u540E\uFF0C\u5E94\u6267\u884C\u4E00\u6B21 composer install\u6765\u540C\u6B65\u56E2\u961F\u7684\u7248\u672C\u53D8\u66F4\u3002

\u6240\u4EE5\u534F\u4F5C\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u8981\u540C\u65F6\u5C06composer.lock/composer.json\u4E0A\u4F20\u81F3\u8FDC\u7AEF\u4ED3\u5E93\u3002


\u7248\u672C\u53F7\u7BA1\u7406:
\u7248\u672C\u53F7\u8303\u56F4\u5927\u4E8E/\u5927\u4E8E\u7B49\u4E8E\uFF1A&gt;1.2.3 &gt;=1.2.3
\u5C0F\u4E8E/\u5C0F\u4E8E\u7B49\u4E8E\uFF1A&lt;1.2.3 &lt;=1.2.3
\u786E\u5207\u7684\u7248\u672C\u53F7\uFF1A1.2.3
~1.2.3: 1.2.3 &lt;= version &lt; 1.3 //\u5C0F\u7248\u672C
^1.2.3: 1.2.3 &lt;= version &lt; 2.0 //\u5927\u7248\u672C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[d];function r(c,a){return n(),i("div",null,v)}var m=e(l,[["render",r],["__file","laravel\u4E4B\u66F4\u65B0\u6307\u5B9A\u7684\u5305.html.vue"]]);export{m as default};
