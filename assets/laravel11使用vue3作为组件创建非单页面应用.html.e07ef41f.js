import{_ as e,o as n,c as i,g as s}from"./app.d66d8774.js";const l={},v=s(`<p>laravel11\u4F7F\u7528vue3\u4F5C\u4E3A\u7EC4\u4EF6\u521B\u5EFA\u975E\u5355\u9875\u9762\u5E94\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// laravel11\u9ED8\u8BA4\u4F7F\u7528vite\u6253\u5305\uFF0C\u76F8\u5173\u914D\u7F6E\u5728vite.config.js\u4E0B
  
import { defineConfig } from &#39;vite&#39;;
import laravel from &#39;laravel-vite-plugin&#39;;
import vue from &#39;@vitejs/plugin-vue&#39;
  
export default defineConfig({
    plugins: [
        laravel({
            input: [&#39;resources/css/app.css&#39;, &#39;resources/css/welcome.css&#39; , &#39;resources/js/app.js&#39;], // \u9664\u4E86app.css \u4E5F\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2Acss\u5165\u53E3\u6587\u4EF6(\u6BD4\u5982\u8FD9\u91CC\u7684welcome.css)\uFF0C\u4EE5\u524D\u90FD\u662F\u4E60\u60EF\u5728\u4E00\u4E2Aapp.css,\u5176\u5B9E\u53EF\u4EE5\u591A\u4E2A\u76F8\u5F53\u4E8E\u5BF9css\u5206\u7EC4\u6253\u5305\u4E86
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    // Vue \u63D2\u4EF6\u4F1A\u91CD\u5199 Single File Components \u4E2D\u5F15\u7528\u7684\u8D44\u4EA7 URL\uFF0C
                    // \u6307\u5411 Laravel web \u670D\u52A1\u5668\u3002\u8BBE\u7F6E\u6B64\u503C\u4E3A \`null\` \u5141\u8BB8 Laravel \u63D2\u4EF6
                    // \u91CD\u65B0\u6307\u5411 Vite \u670D\u52A1\u5668\u3002
                    base: null,

                    // Vue \u63D2\u4EF6\u4F1A\u89E3\u6790\u7EDD\u5BF9 URL \u5E76\u5C06\u5B83\u4EEC\u89C6\u4E3A\u78C1\u76D8\u4E0A\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002
                    // \u8BBE\u7F6E\u6B64\u503C\u4E3A \`false\` \u5C06\u4E0D\u5904\u7406\u7EDD\u5BF9 URL\uFF0C\u6240\u4EE5\u5B83\u4EEC\u53EF\u4EE5\u5982\u9884\u671F
                    // \u90A3\u6837\u5F15\u7528\u516C\u5171\u76EE\u5F55\u4E2D\u7684\u8D44\u4EA7\u3002
                    includeAbsolute: false
                }
            }
        }),

    ],
});
  
\u9ED8\u8BA4\u662F\u6CA1\u6709 vue \u76F8\u5173\u7684\u914D\u7F6E\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7 @vitejs/plugin-vue \u63D2\u4EF6\u6DFB\u52A0\uFF0C\u4F46\u662F\u53D1\u73B0 vue \u7EC4\u4EF6\u4E0D\u751F\u6548, \u4E0B\u9762\u662F\u6211\u7684 app.js
import &#39;./bootstrap&#39;;
  
// \u975E\u5355\u9875\u9762\u5E94\u7528
import { createApp } from &#39;vue&#39;;
  
import ExampleComponent from &#39;./components/ExampleComponent.vue&#39;
  
const app = createApp({})
app.component(&#39;example-component&#39;, ExampleComponent)
  
app.mount(&#39;#app&#39;)
  
console.log(&#39;Vue app mounted&#39;)
  
\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u6700\u540E\u53D1\u73B0\u63A7\u5236\u53F0\u6709\u4E2A\u8B66\u544A:
Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias &quot;vue&quot; to &quot;vue/dist/vue.esm-bundler.js&quot;.
  
\u5F00\u59CB\u6CA1\u6709\u6CE8\u610F\uFF0C\u4EE5\u4E3A\u53EA\u662F\u4E00\u4E2A\u8B66\u544A\uFF0C\u4F46\u662F\u540E\u53F0\u6DFB\u52A0\u5230 vite.config.js\u4E0B\uFF0C\u95EE\u9898\u89E3\u51B3\u4E86:
import { defineConfig } from &#39;vite&#39;;
import laravel from &#39;laravel-vite-plugin&#39;;
import vue from &#39;@vitejs/plugin-vue&#39;
  
export default defineConfig({
    plugins: [
        laravel({
            input: [&#39;resources/css/app.css&#39;, &#39;resources/css/welcome.css&#39; , &#39;resources/js/app.js&#39;], // \u9664\u4E86app.css \u4E5F\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2Acss\u5165\u53E3\u6587\u4EF6(\u6BD4\u5982\u8FD9\u91CC\u7684welcome.css)\uFF0C\u4EE5\u524D\u90FD\u662F\u4E60\u60EF\u5728\u4E00\u4E2Aapp.css,\u5176\u5B9E\u53EF\u4EE5\u591A\u4E2A\u76F8\u5F53\u4E8E\u5BF9css\u5206\u7EC4\u6253\u5305\u4E86
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    // Vue \u63D2\u4EF6\u4F1A\u91CD\u5199 Single File Components \u4E2D\u5F15\u7528\u7684\u8D44\u4EA7 URL\uFF0C
                    // \u6307\u5411 Laravel web \u670D\u52A1\u5668\u3002\u8BBE\u7F6E\u6B64\u503C\u4E3A \`null\` \u5141\u8BB8 Laravel \u63D2\u4EF6
                    // \u91CD\u65B0\u6307\u5411 Vite \u670D\u52A1\u5668\u3002
                    base: null,

                    // Vue \u63D2\u4EF6\u4F1A\u89E3\u6790\u7EDD\u5BF9 URL \u5E76\u5C06\u5B83\u4EEC\u89C6\u4E3A\u78C1\u76D8\u4E0A\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002
                    // \u8BBE\u7F6E\u6B64\u503C\u4E3A \`false\` \u5C06\u4E0D\u5904\u7406\u7EDD\u5BF9 URL\uFF0C\u6240\u4EE5\u5B83\u4EEC\u53EF\u4EE5\u5982\u9884\u671F
                    // \u90A3\u6837\u5F15\u7528\u516C\u5171\u76EE\u5F55\u4E2D\u7684\u8D44\u4EA7\u3002
                    includeAbsolute: false
                }
            }
        }),

    ],
    resolve: {
        alias: {
            &#39;vue&#39;: &#39;vue/dist/vue.esm-bundler.js&#39;,
        },
    },
});
  
\u8FD9\u884C\u914D\u7F6E\u786E\u4FDD Vite \u4F7F\u7528\u4E86\u5305\u542B\u6A21\u677F\u7F16\u8BD1\u5668\u7684 Vue \u7248\u672C\uFF0C\u8FD9\u5BF9\u4E8E\u5728\u8FD0\u884C\u65F6\u7F16\u8BD1\u6A21\u677F\u662F\u5FC5\u8981\u7684.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[v];function a(r,u){return n(),i("div",null,d)}var m=e(l,[["render",a],["__file","laravel11\u4F7F\u7528vue3\u4F5C\u4E3A\u7EC4\u4EF6\u521B\u5EFA\u975E\u5355\u9875\u9762\u5E94\u7528.html.vue"]]);export{m as default};
