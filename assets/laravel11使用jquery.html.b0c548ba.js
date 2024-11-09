import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>laravel11\u4F7F\u7528jquery:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u9996\u5148 npm install jquery, \u4F1A\u5B89\u88C5\u6700\u65B0\u7248\u672Cv3.7
  
2&gt;\u5728bootstrap.js\u4E0B\u914D\u7F6Ejquery
import $ from &#39;jquery&#39;;
  
window.$ = window.jQuery = $;
  
3&gt;\u5728user.blade.php\u9875\u9762\u4F7F\u7528(\u8FD9\u91CC\u7EE7\u627F\u81EAlayout/app.balde.php)
@section(&#39;script&#39;)
&lt;script&gt;
    $(function (){
        $(&#39;.user-log&#39;).click(function (){
            console.log(&quot;11111&quot;)
        })
    })
&lt;/script&gt;
@endsection
  
4&gt;\u8FD0\u884C npm run dev
  
5&gt;\u8BBF\u95EEuser\u9875\u9762\uFF0C \u62A5:ReferenceError: $ is not defined, Jquery Import with vite
  
6&gt; \u539F\u56E0\u5206\u6790
\u521A\u5F00\u59CB\u6211\u8FD8\u4EE5\u4E3A\u8FD9\u662F\u56E0\u4E3A \u5F15\u5165\u4E86vue\u7684\u7F18\u6545\uFF0C\u540E\u6765\u6211\u628Avue\u76F8\u5173\u7684\u90E8\u5206\u5168\u90E8\u6CE8\u91CA\u4E86\uFF0C\u53D1\u73B0\u8FD8\u662F\u62A5\u8FD9\u4E2A\u95EE\u9898
\u2460\u53D1\u73B0\u4F7F\u7528document.addEventListener \u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F46\u662F\u5199\u6CD5\u592A\u4E11\u4E86\uFF0C\u8FD9\u4E2A\u5176\u5B9E\u662F\u7B49\u6574\u4E2A\u9875\u9762\u52A0\u8F7D\u5B8C\u518D\u4F7F\u7528 jquery
document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  $(&#39;.user-log&#39;).click(function (){
         console.log(&quot;11111&quot;)
     })
});
  
\u2461\u76F4\u63A5\u901A\u8FC7\u5F15\u5165 &lt;script src=&quot;https://code.jquery.com/jquery-3.7.1.min.js&quot;&gt;&lt;/script&gt; \uFF0C \u4E5F\u53EF\u4EE5\u89E3\u51B3\u95EE\u9898\uFF0C\u4F46\u662F\u8FD9\u6837\u5F88\u4E0D\u53CB\u597D
  
\u2462\u6700\u7EC8\u53D1\u73B0\u5728 script \u6807\u7B7E\u91CC\u6DFB\u52A0 type=&quot;module&quot; \u95EE\u9898\u89E3\u51B3\uFF0C\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528 $ \u4E86
&lt;script type=&quot;module&quot;&gt;
    $(function (){
        $(&#39;.user-log&#39;).click(function (){
            console.log(&quot;11111&quot;)
        })
    })
&lt;/script&gt;
  
\u6839\u672C\u539F\u56E0\u662F\uFF1A
Vite is loading scripts as modules. And module scripts are always deferred. So if your jQuery script is placed after Vite directive, jQuery code is executed first, before loading jQuery to window - this triggers $ is undefined error.
  
In best practise, you should move the jQuery code to app.js file, so it stays in it&#39;s own module. The other way to handle this is to mark your script tag as a module, then it&#39;ll follow the loading order of the document.
  
\u5173\u4E8Emodule scripts are always deferred: https://javascript.info/modules-intro#module-scripts-are-deferred // \u4EE5\u524D\u4E0D\u77E5\u9053\u8FD9\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u4ECB\u7ECD\u7684\u5F88\u8BE6\u7EC6\uFF0C\u5F88\u6709\u7528
  
\u53C2\u8003\uFF1Ahttps://stackoverflow.com/questions/73010251/referenceerror-is-not-defined-jquery-import-with-vite // \u771F\u7684\u5F88\u6709\u7528\u7684\u5E16\u5B50
  
7&gt;\u603B\u7ED3
laravel11\u4F7F\u7528vite\u7F16\u8BD1js\u8D44\u6E90\u548C\u4E4B\u524D\u7684webpack\u8FD8\u662F\u6709\u5F88\u5927\u7684\u533A\u522B\u7684\uFF0C\u4F46\u662F\u4F7F\u7528vite\u66F4\u7B80\u6D01\uFF0C\u73B0\u5728\u5DF2\u7ECF\u89E3\u51B3\u4E86\u4F7F\u7528 laravel11 + vite5 + vue3 + tailwindcss3 + jquery3 \u6DF7\u5408\u5F00\u53D1\u7684\u6240\u6709\u95EE\u9898
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function t(v,u){return i(),n("div",null,r)}var a=e(l,[["render",t],["__file","laravel11\u4F7F\u7528jquery.html.vue"]]);export{a as default};
