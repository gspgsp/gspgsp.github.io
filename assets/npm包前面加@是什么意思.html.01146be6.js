import{_ as e,o as n,c as i,g as s}from"./app.dd03cafd.js";const l={},a=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4ECA\u5929\u770Bvue-cli\u6587\u6863\uFF0C\u53D1\u73B0\u4E86\u4E0B\u9762\u7684\u8FD9\u6BB5\u8BDD vue-cli \u6539\u4E3A\u4E86 @vue/cli\uFF0C\u8FD9\u4E24\u4E2Anpm\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1Fnpm\u5305\u524D\u9762\u52A0@\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F

Vue CLI \u7684\u5305\u540D\u79F0\u7531 vue-cli \u6539\u6210\u4E86 @vue/cli\u3002 \u5982\u679C\u4F60\u5DF2\u7ECF\u5168\u5C40\u5B89\u88C5\u4E86\u65E7\u7248\u672C\u7684 vue-cli (1.x \u6216 2.x)\uFF0C\u4F60\u9700\u8981\u5148\u901A\u8FC7 npm uninstall vue-cli -g \u6216 yarn global remove vue-cli \u5378\u8F7D\u5B83\u3002

\u67E5\u4E86\u4E0B\u5B98\u7F51\uFF0Cnpm\u5305\u524D\u9762\u52A0@\uFF0C\u4EE3\u8868scopes\u76F8\u5173\u7684\u5305\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4F5C\u7528\u57DF(\u8303\u56F4)\u5305\uFF0C\u4F5C\u7528\u57DF\u4F7F\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E0E\u5176\u4ED6\u7528\u6237\u6216\u7EC4\u7EC7\u521B\u5EFA\u7684\u5305\u540C\u540D\uFF0C\u800C\u4E0D\u4F1A\u53D1\u751F\u51B2\u7A81\u3002

A scope allows you to create a package with the same name as a package created by another user or Org without conflict.

\u4F5C\u7528\u57DF\u540D\u79F0\u662F\u4ECB\u4E8E@\u548C\u659C\u7EBF\u4E4B\u95F4\u7684\u6240\u6709\u5185\u5BB9\uFF1A

The scope name is everything between the @ and the slash:

// \u201Cnpm\u201D scope:
@npm/package-name
// \u201Cnpmcorp\u201D scope:
@npmcorp/package-name
\u4E3A\u4EC0\u4E48\u9700\u8981\u6709\u4F5C\u7528\u57DF\u5305
npm\u5305\u4E00\u4E2A\u8BDF\u75C5\u5C31\u662F\u5305\u540D\u5F88\u5BB9\u6613\u88AB\u5360\u7528\u7684\u95EE\u9898\uFF0C\u5360\u7528\u540E\u7528\u5176\u4ED6\u4EBA\u5C31\u4E0D\u80FD\u7528\u4E86\u3002\u800C\u4F5C\u7528\u57DF\u5305\u7C7B\u4F3C\u4E8E\u521B\u5EFA\u4E86\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\uFF0C\u4E0D\u540C\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684\u5305\u540D

\u4F5C\u7528\u57DF\u7684\u547D\u540D\u4E0D\u662F\u8C01\u4FBF\u5C31\u80FD\u7528\u7684\uFF0C\u53EA\u6709\u4E24\u79CD\u53EF\u4EE5\u4F7F\u7528\uFF1A\u81EA\u5DF1\u7684\u7528\u6237\u540D\u3001\u81EA\u5DF1\u521B\u5EFA\u7684\u7EC4\u7EC7\u540D

\u6CE8\u610F\uFF1A\u5FC5\u987B\u5148\u6CE8\u518C\u4E00\u4E2Anpm\u7528\u6237\u5E10\u6237\uFF0C\u7136\u540E\u624D\u80FD\u53D1\u5E03\u7528\u6237\u4F5C\u7528\u57DF\u7684npm\u8F6F\u4EF6\u5305\u3002\u6B64\u5916\uFF0C\u8981\u53D1\u5E03\u7EC4\u7EC7\u4F5C\u7528\u57DF\u7684\u8F6F\u4EF6\u5305\uFF0C\u60A8\u5FC5\u987B\u521B\u5EFA\u4E00\u4E2Anpm\u7528\u6237\u5E10\u6237\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2Anpm Org(\u7EC4\u7EC7)\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[a];function d(v,r){return n(),i("div",null,c)}var u=e(l,[["render",d],["__file","npm\u5305\u524D\u9762\u52A0@\u662F\u4EC0\u4E48\u610F\u601D.html.vue"]]);export{u as default};
