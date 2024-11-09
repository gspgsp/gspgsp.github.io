import{_ as i,o as n,c as e,g as s}from"./app.66ae8700.js";const d={},l=s(`<p>nuxt3\u5F15\u7528\u62A5\u9519\u89E3\u51B3\u529E\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u6267\u884C
$ npx nuxi dev
\u62A5\u9519:
\u2718 [ERROR] Could not resolve &quot;#build/app.config.mjs&quot;

    node_modules/nuxt/dist/app/config.mjs:3:24:
      3 \u2502 import __appConfig from &quot;#build/app.config.mjs&quot;;
        \u2575                         ~~~~~~~~~~~~~~~~~~~~~~~

  The package import &quot;#build/app.config.mjs&quot; is not defined in this &quot;imports&quot; map:

    node_modules/nuxt/package.json:23:13:
      23 \u2502   &quot;imports&quot;: {
         \u2575              ^

  You can mark the path &quot;#build/app.config.mjs&quot; as external to exclude it from the bundle, which
  will remove this error.

\u539F\u56E0\uFF1A
\u5728\u6211\u7684utils/utils.js\u4E0B\u5F15\u5165\u4E86nuxt/app
import {useCookie} from &quot;nuxt/app&quot;;

\u89E3\u51B3\u529E\u6CD5:
import {useCookie} from &quot;#imports&quot;;

\u8FD9\u6837\u518D\u6B21\u6267\u884C\u5C31\u4E0D\u4F1A\u62A5\u9519\u4E86,\u4E0D\u660E\u767D\u4E3A\u4EC0\u4E48
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=[l];function t(o,a){return n(),e("div",null,u)}var v=i(d,[["render",t],["__file","nuxt3\u5F15\u7528\u62A5\u9519\u89E3\u51B3\u529E\u6CD5.html.vue"]]);export{v as default};
