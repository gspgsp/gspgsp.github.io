import{_ as i,o as e,c as n,g as a}from"./app.66ae8700.js";const l={},s=a(`<p>tailwindcss\u4E4B\u989C\u8272\u5B9A\u4E49\u4EE5\u53CAOpacity\u7684\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u81EA\u5B9A\u4E49\u989C\u8272
:root{
	 --color-white: 255, 255, 255;
}


\u4F7F\u7528\u989C\u8272\u53D8\u91CF:
const withOpacity = (variableName) =&gt;
  \`rgba(var(\${variableName}), &lt;alpha-value&gt;)\`;

white: withOpacity(&quot;--color-white&quot;),

\u8BF4\u660E\uFF1A the special &lt;alpha-value&gt; placeholder that Tailwind will use to inject the alpha value when using an opacity modifier\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u770B\u8FD9\u4E2A white \u7528\u5728\u54EA\u91CC\uFF0C\u5982\u679C\u662Fbg\u7684\u8BDD\uFF0C\u90A3\u4E48 alpha-value \u7684\u503C\u5C31\u662F bg-opacity-100 (\u9ED8\u8BA4\u662F100,\u4E5F\u5C31\u662F1)\uFF0C \u5982\u679C\u662Ftext\u7684\u8BDD\uFF0C\u5C31\u662F text-opacity-100\uFF0C\u8FD9\u4E9B\u5728 v2 \u7248\u672C\u4E0B\u770B\u7684\u6BD4\u8F83\u6E05\u695A. v3 \u4E0B\uFF0C\u9ED8\u8BA4\u6CA1\u6709\u5C55\u793A\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u4F46\u662F\u5C31\u662F\u8FD9\u4E48\u7528\u7684.

\u53C2\u8003: https://tailwindcss.com/docs/customizing-colors#using-css-variables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[s];function c(d,v){return e(),n("div",null,t)}var o=i(l,[["render",c],["__file","tailwindcss\u4E4B\u989C\u8272\u5B9A\u4E49\u4EE5\u53CAOpacity\u7684\u4F7F\u7528.html.vue"]]);export{o as default};
