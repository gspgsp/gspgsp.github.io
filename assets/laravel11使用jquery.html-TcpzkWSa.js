import{_ as n,c as e,f as i,o as l}from"./app-BB_BIQV8.js";const a={};function r(c,s){return l(),e("div",null,s[0]||(s[0]=[i(`<p>laravel11使用jquery:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;首先 npm install jquery, 会安装最新版本v3.7</span>
<span class="line">  </span>
<span class="line">2&gt;在bootstrap.js下配置jquery</span>
<span class="line">import $ from &#39;jquery&#39;;</span>
<span class="line">  </span>
<span class="line">window.$ = window.jQuery = $;</span>
<span class="line">  </span>
<span class="line">3&gt;在user.blade.php页面使用(这里继承自layout/app.balde.php)</span>
<span class="line">@section(&#39;script&#39;)</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    $(function (){</span>
<span class="line">        $(&#39;.user-log&#39;).click(function (){</span>
<span class="line">            console.log(&quot;11111&quot;)</span>
<span class="line">        })</span>
<span class="line">    })</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">@endsection</span>
<span class="line">  </span>
<span class="line">4&gt;运行 npm run dev</span>
<span class="line">  </span>
<span class="line">5&gt;访问user页面， 报:ReferenceError: $ is not defined, Jquery Import with vite</span>
<span class="line">  </span>
<span class="line">6&gt; 原因分析</span>
<span class="line">刚开始我还以为这是因为 引入了vue的缘故，后来我把vue相关的部分全部注释了，发现还是报这个问题</span>
<span class="line">①发现使用document.addEventListener 可以解决这个问题，但是写法太丑了，这个其实是等整个页面加载完再使用 jquery</span>
<span class="line">document.addEventListener(&#39;DOMContentLoaded&#39;, function() {</span>
<span class="line">  $(&#39;.user-log&#39;).click(function (){</span>
<span class="line">         console.log(&quot;11111&quot;)</span>
<span class="line">     })</span>
<span class="line">});</span>
<span class="line">  </span>
<span class="line">②直接通过引入 &lt;script src=&quot;https://code.jquery.com/jquery-3.7.1.min.js&quot;&gt;&lt;/script&gt; ， 也可以解决问题，但是这样很不友好</span>
<span class="line">  </span>
<span class="line">③最终发现在 script 标签里添加 type=&quot;module&quot; 问题解决，可以正常使用 $ 了</span>
<span class="line">&lt;script type=&quot;module&quot;&gt;</span>
<span class="line">    $(function (){</span>
<span class="line">        $(&#39;.user-log&#39;).click(function (){</span>
<span class="line">            console.log(&quot;11111&quot;)</span>
<span class="line">        })</span>
<span class="line">    })</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">根本原因是：</span>
<span class="line">Vite is loading scripts as modules. And module scripts are always deferred. So if your jQuery script is placed after Vite directive, jQuery code is executed first, before loading jQuery to window - this triggers $ is undefined error.</span>
<span class="line">  </span>
<span class="line">In best practise, you should move the jQuery code to app.js file, so it stays in it&#39;s own module. The other way to handle this is to mark your script tag as a module, then it&#39;ll follow the loading order of the document.</span>
<span class="line">  </span>
<span class="line">关于module scripts are always deferred: https://javascript.info/modules-intro#module-scripts-are-deferred // 以前不知道这个知识点，介绍的很详细，很有用</span>
<span class="line">  </span>
<span class="line">参考：https://stackoverflow.com/questions/73010251/referenceerror-is-not-defined-jquery-import-with-vite // 真的很有用的帖子</span>
<span class="line">  </span>
<span class="line">7&gt;总结</span>
<span class="line">laravel11使用vite编译js资源和之前的webpack还是有很大的区别的，但是使用vite更简洁，现在已经解决了使用 laravel11 + vite5 + vue3 + tailwindcss3 + jquery3 混合开发的所有问题</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=n(a,[["render",r],["__file","laravel11使用jquery.html.vue"]]),p=JSON.parse('{"path":"/content/php/laravel/laravel11%E4%BD%BF%E7%94%A8jquery.html","title":"laravel11使用jquery","lang":"en-US","frontmatter":{"sidebar":false,"title":"laravel11使用jquery","description":"laravel11使用jquery"},"headers":[],"git":{},"filePathRelative":"content/php/laravel/laravel11使用jquery.md"}');export{t as comp,p as data};
