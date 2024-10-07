import{_ as e,o as i,c as n,g as s}from"./app.d66d8774.js";const a={},l=s(`<p>laravel\u4E4Blaravel server\u7684\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u76F4\u63A5\u901A\u8FC7\u4E0B\u9762\u547D\u4EE4\u542F\u52A8larave server\uFF1A
php artisan serve
\u6765\u6E90\uFF1A https://wyz.xyz/d/763-laravel-11-servbayqiang-qiang-lian-he-da-zao-gao-xiao-wei-fu-wu-jia-gou
  
\u76F8\u5173\u4ECB\u7ECD:
php artisan serve \u662F Laravel \u63D0\u4F9B\u7684\u4E00\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u7528\u4E8E\u542F\u52A8\u5185\u7F6E\u7684 PHP \u5F00\u53D1\u670D\u52A1\u5668\u3002\u8FD9\u5728\u5F00\u53D1\u548C\u6D4B\u8BD5\u9636\u6BB5\u975E\u5E38\u6709\u7528\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u5FEB\u901F\u542F\u52A8\u4E00\u4E2A\u7B80\u5355\u7684 HTTP \u670D\u52A1\u5668\u6765\u8FD0\u884C\u4F60\u7684 Laravel \u5E94\u7528\uFF0C\u800C\u4E0D\u9700\u8981\u914D\u7F6E\u66F4\u590D\u6742\u7684 Web \u670D\u52A1\u5668\uFF08\u5982 Apache \u6216 Nginx\uFF09\u3002
  
\u4E3B\u8981\u529F\u80FD
\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668:
php artisan serve \u542F\u52A8\u4E00\u4E2A\u5185\u7F6E\u7684 PHP \u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u4F7F\u4F60\u80FD\u591F\u5728\u672C\u5730\u8BA1\u7B97\u673A\u4E0A\u8BBF\u95EE\u4F60\u7684 Laravel \u5E94\u7528\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4F1A\u76D1\u542C\u5728 http://localhost:8000 \u4E0A\u3002
  
\u6307\u5B9A\u4E3B\u673A\u548C\u7AEF\u53E3:
\u4F60\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u9009\u9879\u6307\u5B9A\u4E3B\u673A\u548C\u7AEF\u53E3\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528 php artisan serve --host=127.0.0.1 --port=8080 \u5C06\u670D\u52A1\u5668\u7ED1\u5B9A\u5230 http://127.0.0.1:8080\u3002
  
\u5F00\u53D1\u6D4B\u8BD5:
\u8FD9\u4E2A\u670D\u52A1\u5668\u9002\u7528\u4E8E\u5F00\u53D1\u548C\u6D4B\u8BD5\u9636\u6BB5\uFF0C\u4F46\u4E0D\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5B83\u6CA1\u6709\u50CF Apache \u6216 Nginx \u90A3\u6837\u7684\u751F\u4EA7\u7EA7\u522B\u7684\u6027\u80FD\u548C\u5B89\u5168\u6027\u3002
  
\u4F7F\u7528:
\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF08\u9ED8\u8BA4\u7AEF\u53E3 8000\uFF09:
php artisan serve
  
\u6307\u5B9A\u7AEF\u53E3\uFF08\u4F8B\u5982\u7AEF\u53E3 8080\uFF09:
php artisan serve --port=8080
  
\u6307\u5B9A\u4E3B\u673A\uFF08\u4F8B\u5982 127.0.0.1\uFF09:
php artisan serve --host=127.0.0.1
  
\u540C\u65F6\u6307\u5B9A\u4E3B\u673A\u548C\u7AEF\u53E3:
php artisan serve --host=127.0.0.1 --port=8080
  
\u6CE8\u610F\u4E8B\u9879
\u5F00\u53D1\u73AF\u5883: \u8FD9\u4E2A\u670D\u52A1\u5668\u662F\u4E3A\u4E86\u5F00\u53D1\u73AF\u5883\u800C\u8BBE\u8BA1\uFF0C\u4E0D\u9002\u5408\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u751F\u4EA7\u73AF\u5883\u4E2D\u5E94\u8BE5\u4F7F\u7528\u50CF Apache\u3001Nginx \u6216\u5176\u4ED6\u4E13\u4E1A\u7684 Web \u670D\u52A1\u5668\u6765\u63D0\u4F9B\u670D\u52A1\u3002
\u6027\u80FD: \u5185\u7F6E\u670D\u52A1\u5668\u9002\u7528\u4E8E\u6D4B\u8BD5\u548C\u5F00\u53D1\uFF0C\u4F46\u5BF9\u4E8E\u751F\u4EA7\u73AF\u5883\uFF0C\u4F7F\u7528\u4E13\u95E8\u7684 Web \u670D\u52A1\u5668\u53EF\u4EE5\u63D0\u4F9B\u66F4\u597D\u7684\u6027\u80FD\u548C\u5B89\u5168\u6027\u3002
CLI: \u8FD0\u884C php artisan serve \u547D\u4EE4\u65F6\uFF0C\u4F60\u901A\u5E38\u9700\u8981\u5728 Laravel \u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E2D\u6267\u884C\uFF0C\u786E\u4FDD\u53EF\u4EE5\u627E\u5230 artisan \u811A\u672C\u548C\u6B63\u786E\u7684\u9879\u76EE\u8BBE\u7F6E\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function r(d,c){return i(),n("div",null,v)}var u=e(a,[["render",r],["__file","laravel\u4E4Blaravel_server\u7684\u4F7F\u7528.html.vue"]]);export{u as default};
