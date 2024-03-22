import{_ as e,o as i,c as n,g as s}from"./app.b04686bd.js";const r={},l=s(`<p>\u4ECA\u5929\u5728\u5206\u6790\u4E4B\u524D\u7684\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u6709\u51E0\u5904\u914D\u7F6E\u4E0D\u592A\u6E05\u695A\uFF0C\u5C31\u7FFB\u4E86\u4E00\u4E0Bsymfony\u7684\u5B98\u65B9\u6587\u6863\uFF0C\u603B\u7ED3\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5168\u9762\u8BB2\u89E3symfony\u7684\u81EA\u52A8\u6CE8\u5165\u539F\u7406: https://symfony.com/doc/5.4/service_container/autowiring.html

# config/services.yaml
services:
    # ...

    # the id is not a class, so it won&#39;t be used for autowiring
    app.rot13.transformer:
        class: App\\Util\\Rot13Transformer
        # ...

    # but this fixes it!
    # the &quot;app.rot13.transformer&quot; service will be injected when
    # an App\\Util\\Rot13Transformer type-hint is detected
    App\\Util\\Rot13Transformer: &#39;@app.rot13.transformer&#39;
    
This creates a service &quot;alias&quot;, whose id is App\\Util\\Rot13Transformer. Thanks to this, autowiring sees this and uses it whenever the Rot13Transformer class is type-hinted
(\u8FD9\u521B\u5EFA\u4E86\u4E00\u4E2A\u670D\u52A1 &quot;\u522B\u540D&quot;\uFF0C\u5176ID\u662FApp\\Util\\Rot13Transformer\u3002\u591A\u4E8F\u4E86\u8FD9\u4E00\u70B9\uFF0C\u81EA\u52A8\u5E03\u7EBF\u770B\u5230\u4E86\u8FD9\u4E00\u70B9\uFF0C\u5E76\u5728Rot13Transformer\u7C7B\u88AB\u7C7B\u578B\u63D0\u793A\u65F6\u4F7F\u7528\u5B83)
  
\u901A\u8FC7\u522B\u540D\u5B9E\u73B0\u81EA\u52A8\u6CE8\u5165: https://symfony.com/doc/5.4/service_container/autowiring.html#using-aliases-to-enable-autowiring
   
\u901A\u8FC7setter\u65B9\u6CD5\u6CE8\u5165: https://symfony.com/doc/5.4/service_container/autowiring.html#autowiring-other-methods-e-g-setters-and-public-typed-properties
  
\u63A7\u5236\u5668\u91CC\u81EA\u52A8\u6CE8\u5165: https://symfony.com/doc/5.4/controller.html#controller-accessing-services
  
\u4F60\u600E\u4E48\u77E5\u9053\u8981\u4F7F\u7528LoggerInterface\u7684\u7C7B\u578B\u63D0\u793A\uFF1F\u4F60\u53EF\u4EE5\u9605\u8BFB\u4F60\u6240\u4F7F\u7528\u7684\u4EFB\u4F55\u529F\u80FD\u7684\u6587\u6863\uFF0C\u6216\u8005\u901A\u8FC7\u8FD0\u884C\u4EE5\u4E0B\u7A0B\u5E8F\u83B7\u5F97\u4E00\u4E2A\u53EF\u81EA\u52A8\u8FDE\u63A5\u7684\u7C7B\u578B\u63D0\u793A\u5217\u8868:  
php bin/console debug:autowiring
  
\u5BF9\u4E8E\u5BB9\u5668\u4E2D\u6240\u6709\u53EF\u80FD\u7684\u670D\u52A1\u7684\u5B8C\u6574\u5217\u8868\uFF0C\u8BF7\u8FD0\u884C:  
php bin/console debug:container
  
\u8FD8\u6709\u4E00\u79CD\u4E0E\u670D\u52A1\u6709\u5173\u7684\u53C2\u6570\u3002\u5728YAML\u914D\u7F6E\u4E2D\uFF0C\u4EFB\u4F55\u4EE5@\u5F00\u5934\u7684\u5B57\u7B26\u4E32\u90FD\u88AB\u8BA4\u4E3A\u662F\u670D\u52A1\u7684ID\uFF0C\u800C\u4E0D\u662F\u666E\u901A\u5B57\u7B26\u4E32\uFF1A
# config/services.yaml
services:
    App\\Service\\MessageGenerator:
        arguments:
            # this is not a string, but a reference to a service called &#39;logger&#39;
            - &#39;@logger&#39;

            # if the value of a string argument starts with &#39;@&#39;, you need to escape
            # it by adding another &#39;@&#39; so Symfony doesn&#39;t consider it a service
            # the following example would be parsed as the string &#39;@securepassword&#39;
            # - &#39;@@securepassword&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u5185\u5BB9\u8FD8\u662F\u6BD4\u8F83\u591A\u7684\uFF0C\u5B9E\u9645\u4F7F\u7528\u4E3B\u8981\u662F\u5728 config/service.yaml\u6587\u4EF6\u91CC\u914D\u7F6E\u5404\u79CD\u670D\u52A1\u3002</p>`,3),a=[l];function d(t,c){return i(),n("div",null,a)}var v=e(r,[["render",d],["__file","symfony\u4E4B\u81EA\u52A8\u6CE8\u5165\u539F\u7406.html.vue"]]);export{v as default};
