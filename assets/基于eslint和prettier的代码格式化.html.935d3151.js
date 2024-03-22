import{_ as e,o as i,c as n,g as s}from"./app.b04686bd.js";const l={},u=s(`<p>\u57FA\u4E8Eeslint\u548Cprettier\u7684\u4EE3\u7801\u683C\u5F0F\u5316:</p><ul><li>\u5728\u7EBF\u6587\u6863\u4EE5\u53CA\u5728\u7EBF\u5E73\u53F0 <ul><li>https://prettier.io/docs/en/</li><li>https://prettier.io/playground/</li></ul></li></ul><p>\u4E0B\u9762\u662F\u4E00\u4E2A.eslintrc.json\u6587\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;env&quot;: {
    &quot;browser&quot;: true,
    &quot;node&quot;: true
  },
  &quot;root&quot;: true,
  &quot;parser&quot;: &quot;vue-eslint-parser&quot;,
  &quot;extends&quot;: [
    &quot;@nuxtjs/eslint-config-typescript&quot;,
    &quot;plugin:prettier/recommended&quot;
  ],
  &quot;plugins&quot;: [&quot;prettier&quot;],
  &quot;rules&quot;: {
    // ignore for page names
    &quot;vue/multi-word-component-names&quot;: [
      &quot;error&quot;,
      {
        &quot;ignores&quot;: [
          &quot;index&quot;,
          &quot;[slug]&quot;,
          &quot;[...slug]&quot;,
          &quot;[id]&quot;,
          &quot;default&quot;,
          &quot;boilerplate&quot;,
          &quot;custom&quot;,
          &quot;error&quot;
        ]
      }
    ],
    &quot;vue/block-lang&quot;: [
      &quot;error&quot;,
      {
        &quot;script&quot;: {
          &quot;lang&quot;: &quot;ts&quot;
        }
      }
    ],
    &quot;vue/block-order&quot;: [
      &quot;error&quot;, {
      &quot;order&quot;: [&quot;template&quot;, &quot;script&quot;, &quot;style&quot;]
    }]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5B9E\u9645\u53EF\u4EE5\u7B80\u5316\u4E00\u70B9,\u5220\u9664\u8FD9\u4E2A &quot;plugins&quot;: [&quot;prettier&quot;]:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;env&quot;: {
    &quot;browser&quot;: true,
    &quot;node&quot;: true
  },
  &quot;root&quot;: true,
  &quot;parser&quot;: &quot;vue-eslint-parser&quot;, //\u8FD9\u4E2A\u5730\u65B9\u7528\u4E86  vue-eslint-parser \u89E3\u6790\u5668,\u8BE5\u89E3\u6790\u5668\u5141\u8BB8\u6211\u4EEC\u5BF9 .vue \u6587\u4EF6\u7684 &lt;template&gt; \u8FDB\u884C\u68C0\u67E5\u3002\u5982\u679C\u6211\u4EEC\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\u590D\u6742\u7684\u6307\u4EE4\u548C\u8868\u8FBE\u5F0F\uFF0C\u5C31\u5F88\u5BB9\u6613\u5728 &lt;template&gt; \u4E0A\u72AF\u9519\u3002\u8FD9\u4E2A\u89E3\u6790\u5668\u548C eslint-plugin-vue \u7684\u89C4\u5219\u53EF\u4EE5\u53D1\u73B0\u5176\u4E2D\u7684\u4E00\u4E9B\u9519\u8BEF\u3002
  &quot;extends&quot;: [
    &quot;@nuxt/eslint-config&quot;, //\u8FD9\u4E2A\u624D\u662FNUXT3\u7684\u7248\u672C
    &quot;plugin:prettier/recommended&quot;
  ],
  &quot;rules&quot;: {
    // ignore for page names\uFF0C\u4E0B\u9762\u8FD9\u4E9B\uFF0C\u90FD\u662F eslint-plugin-vue \u7684\u89C4\u5219\u7684\u4F7F\u7528\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003:https://eslint.vuejs.org/rules/block-order.html,\u8FD9\u91CC\u9762\u5B9A\u4E49\u4E86\u5F88\u591A\u89C4\u5219\uFF0C\u672C\u6765\u8981\u4F7F\u7528\u4E0B\u9762\u7684 eslint-plugin-vue,\u9700\u8981\u5148\u5728plugins\u4E0B\u5F15\u5165vue\u7684\uFF0C\u5373 plugins: [&quot;vue&quot;], \u4F46\u662F\u7531\u4E8E\u5728\u914D\u7F6E\u4E2D\u4F7F\u7528\u4E86 parser: &quot;vue-eslint-parser&quot;\uFF0CESLint \u4F1A\u81EA\u52A8\u67E5\u627E\u5E76\u4F7F\u7528\u4E0E\u6240\u9009 parser \u76F8\u5173\u7684\u63D2\u4EF6\u89C4\u5219\uFF0C\u5305\u62EC eslint-plugin-vue\u3002\u56E0\u6B64\uFF0C\u867D\u7136\u4F60\u6CA1\u6709\u5728 plugins \u4E2D\u5F15\u5165 eslint-plugin-vue\uFF0C\u4F46\u7531\u4E8E\u4F7F\u7528\u4E86 parser: &quot;vue-eslint-parser&quot;\uFF0C\u76F8\u5173\u7684 Vue.js \u89C4\u5219\u4ECD\u7136\u4F1A\u751F\u6548\u3002\u8FD9\u662F\u4E00\u79CD\u5728 Vue.js \u9879\u76EE\u4E2D\u4F7F\u7528 ESLint \u7684\u5E38\u89C1\u65B9\u5F0F\u3002
    &quot;vue/multi-word-component-names&quot;: [
      &quot;error&quot;,
      {
        &quot;ignores&quot;: [
          &quot;index&quot;,
          &quot;[slug]&quot;,
          &quot;[...slug]&quot;,
          &quot;[id]&quot;,
          &quot;default&quot;,
          &quot;boilerplate&quot;,
          &quot;custom&quot;,
          &quot;error&quot;
        ]
      }
    ],
    &quot;vue/block-lang&quot;: [//\u9650\u5236vue\u9875\u9762\u4F7F\u7528\u7684script\uFF0C\u5FC5\u987B\u5B9A\u4E49lang=&quot;ts&quot;
      &quot;error&quot;,
      {
        &quot;script&quot;: {
          &quot;lang&quot;: &quot;ts&quot;
        }
      }
    ],
    &quot;vue/block-order&quot;: [//\u9650\u5236vue\u9875\u9762 [&quot;template&quot;, &quot;script&quot;, &quot;style&quot;] \u4E09\u8005\u7684\u987A\u5E8F
      &quot;error&quot;, {
      &quot;order&quot;: [&quot;template&quot;, &quot;script&quot;, &quot;style&quot;]
    }]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://juejin.cn/post/6924568874700505102
https://zhuanlan.zhihu.com/p/68026905
https://github.com/prettier/eslint-plugin-prettier // \u8FD9\u4E2Amarkdown\u6587\u6863\u91CC\u9762\u6709\u4ECB\u7ECD  plugin:prettier/recommended \u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E eslint-plugin-prettier \u548C eslint-config-prettier
https://github.com/nuxt/eslint-config // \u5728nuxt\u4E0B\u4F7F\u7528\u7684\u8BDD\uFF0C\u9700\u8981\u770B\u8FD9\u4E2A\uFF0C\u4E0D\u540C\u7248\u672C\u7684nuxt\uFF0C\u5B89\u88C5\u7684\u4E0D\u4E00\u6837\uFF0C\u4E4B\u524D\u7684\u6A21\u677F\u9879\u76EE\u91CC\u9762\u7684\u914D\u7F6E\uFF0C\u5C31\u6709\u95EE\u9898\uFF0C\u6211\u4FEE\u6539\u4E86
https://typescript-eslint.io/getting-started // \u8FD9\u4E2A\u94FE\u63A5\u4E0B\uFF0C\u662F\u5173\u4E8E @typescript-eslint/parser \u548C @typescript-eslint/eslint-plugin \u8FD9\u4E24\u4E2A\u5305\u7684\u4F7F\u7528\uFF0C\u4E4B\u524D\u6A21\u677F\u9879\u76EE\u91CC\u9762\u914D\u7F6E\u4E86\uFF0C\u4F46\u662F\u6211\u53D1\u73B0\u6CA1\u6709\u7528\u5230\uFF0C\u6211\u5C31\u53BB\u6389\u4E86
https://github.com/nuxt/eslint-plugin-nuxt //\u8FD9\u4E2A\u76EE\u524D\u4E5F\u6CA1\u7528\uFF0C\u6211\u4E5F\u53BB\u6389\u4E86\uFF0C\u4F46\u662Fmarkdown\u4E0B\u6709\u4E00\u4E2A\u914D\u7F6E\u7684\u4E24\u79CD\u7528\u6CD5\u95F4\u63A5\u7684\u89E3\u91CA\u4E86extends\u548Cplugins\u5199\u5173\u7CFB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2460\u5176\u5B9E\u5927\u90E8\u5206\u6700\u540E\u90FD\u4F1A\u5C06 prettier \u4F5C\u4E3A\u4E3B\u8981\u7684\u683C\u5F0F\u5316\u6837\u5F0F\uFF0C\u4F46\u662F prettier \u548C \u5176\u5B83eslint\u63D2\u4EF6\u4E0D\u540C\u7684\u662F\uFF0C\u5B83\u5FC5\u987B\u5305\u62EC eslint-plugin-prettier \u548C eslint-config-prettier \u4E24\u4E2A\u6587\u4EF6\uFF0C\u800C \u5176\u5B83\u7684\u53EA\u9700\u8981\u4E00\u4E2A\u5C31\u53EF\u4EE5\u4E86
\u2461extends \u3001plugins \u548C rules \u4E09\u8005\u4E4B\u95F4\u7684\u5173\u7CFB
\u5728\u6211\u5B9E\u9645\u4F7F\u7528\u770B\u6765\uFF0C 
extends = plugins + rules

plugins:
eslint\u672C\u8EAB\u6709\u4E9B\u89C4\u5219\uFF0C\u4F46\u80AF\u5B9A\u65E0\u6CD5\u5305\u542B\u6240\u6709\u8BED\u6CD5\uFF0C\u56E0\u6B64eslint\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\uFF0C\u800C\u9488\u5BF9\u7279\u6B8A\u8BED\u6CD5\u81EA\u5B9A\u4E49\u7684\u90A3\u4E9B\u89C4\u5219\u6211\u4EEC\u79F0\u4E4B\u4E3Aeslint\u63D2\u4EF6\uFF0C\u5E38\u89C1\u7684\u6709\uFF1A eslint-plugin-import\u3001eslint-plugin-promise\u3001eslint-plugin-react\u3002\u8FD9\u4E9B\u63D2\u4EF6\u90FD\u662F
\u5355\u72EC\u7684package\uFF0C\u5B89\u88C5\u8FD9\u4E9B\u63D2\u4EF6\u540E\uFF0C\u82E5\u8981\u662F\u9879\u76EE\u652F\u6301\u8FD9\u4E9B\u89C4\u5219\uFF0C\u5FC5\u987B\u5C06\u5176\u914D\u7F6E\u5728eslint\u5B57\u6BB5\u4E2D\uFF0C\u6BD4\u5982\u9488\u5BF9\u5982\u4E0A\u4E09\u4E2A\u793A\u4F8B\u63D2\u4EF6\u7684\u914D\u7F6E\uFF1Aplugins: [&quot;import&quot;, &#39;promise&#39;, &#39;react&#39;]\u3002

extends:
plugins\u7684\u914D\u7F6E\u4EC5\u4EC5\u4EE3\u8868\u5728\u9879\u76EE\u4E2D\u5F15\u5165\u4E86\u54EA\u4E9B\u89C4\u5219\uFF0C\u5E76\u6CA1\u6709\u6307\u660E\u8BE5\u89C4\u5219\u662F\u8B66\u544A\u3001\u62A5\u9519\u3001\u5FFD\u7565\uFF0Cextends\u8981\u505A\u7684\u5C31\u662F\u5F15\u5165eslint\u63A8\u8350\u7684\u89C4\u5219\u8BBE\u7F6E\u3002\u6309\u7167eslint\u63D2\u4EF6\u7684\u5F00\u53D1\u89C4\u8303\uFF0C\u6BCF\u4E2A\u63D2\u4EF6\u7684\u5165\u53E3\u6587\u4EF6\u90FD\u4F1A\u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176\u4E2D\u5C31\u6709\u4E00\u4E2Aconfigs\u5B57\u6BB5\uFF0C\u8BE5\u5B57\u6BB5
\u662F\u4E2A\u5BF9\u8C61\uFF0C\u4ED6\u53EF\u4EE5\u628A\u8BE5\u63D2\u4EF6\u5DF2\u6709\u7684\u89C4\u5219\u5206\u6210\u4E0D\u540C\u7684\u98CE\u683C\uFF0C\u6BD4\u5982\uFF1Ax eslint\u63D2\u4EF6\u5171\u5B9A\u4E49\u4E86a\u3001b\u3001c\u4E09\u4E2A\u89C4\u5219\uFF0C\u8FD9\u4E09\u4E2A\u89C4\u5219\u6211\u53EF\u4EE5\u914D\u7F6E\u591A\u79CD\u98CE\u683C\uFF0C\u6BD4\u5982\uFF1A
module.exports = {
    configs: {
        recommended: {
            plugins: [&quot;x&quot;],
            env: [&quot;browser&quot;],
            rules: {
                a: 1,
                b: 0,
                a: 2,
            }
        },
        node: {
            plugins: [&quot;x&quot;],
            env: [&quot;node&quot;],
            rules: {
                a: 0,
                b: 2,
                a: 1,
            }
        }
    }
};

\u5047\u8BBE\u6211\u4EEC\u8981\u9009\u62E9recommended\u98CE\u683C\uFF0C\u5728extends\u5B57\u6BB5\u4E2D\u586B\u5199 [&quot;plugin:x/recommended&quot;]\u3002\u81F3\u6B64\uFF0C\u9879\u76EE\u4FBF\u53EF\u4EE5\u57FA\u4E8EX\u8BED\u6CD5\u7684recommended\u98CE\u683C\u505A\u4EE3\u7801\u68C0\u6D4B.

rules:
\u5F53eslint\u63D2\u4EF6\u6CA1\u6709\u6307\u5B9A\u98CE\u683C\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8Erules\u5B8C\u5168\u81EA\u5B9A\u4E49\u4E00\u5957\u98CE\u683C\uFF0C\u5F53\u67D0\u4E2A\u98CE\u683C\u7684\u5355\u4E2A\u89C4\u5219\u4E0D\u6EE1\u8DB3\u9700\u6C42\uFF0C\u5728rules\u4E2D\u91CD\u65B0\u8BBE\u7F6E\u4FBF\u53EF\u8986\u76D6.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[u];function d(r,v){return i(),n("div",null,t)}var a=e(l,[["render",d],["__file","\u57FA\u4E8Eeslint\u548Cprettier\u7684\u4EE3\u7801\u683C\u5F0F\u5316.html.vue"]]);export{a as default};
