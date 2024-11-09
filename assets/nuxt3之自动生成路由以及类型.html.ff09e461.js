import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const d={},u=s(`<p>nuxt3\u4E4B\u81EA\u52A8\u751F\u6210\u8DEF\u7531\u4EE5\u53CA\u7C7B\u578B:<br> 1&gt; \u7F18\u8D77 \u5728\u4F7F\u7528nuxt3\u5F00\u53D1\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u81EA\u5DF1\u5B9A\u4E49\u8DEF\u7531\u7684\uFF0C\u6846\u67B6\u4F1A\u81EA\u52A8\u6839\u636E\u9875\u9762(pages)\u76EE\u5F55\u751F\u6210\u76F8\u5173\u7684\u8DEF\u7531\u4FE1\u606F\u8FD9\u9700\u8981\u5B89\u88C5\u7279\u5B9A\u7684\u5305: nuxt-typed-router</p><p>2&gt; \u4F7F\u7528\u4EE5\u53CA\u5206\u6790</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import type { RoutesNamedLocations, RoutesNamesList } from &quot;@typed-router&quot;;
  
// \u5206\u6790
RoutesNamesList\u7684\u4F5C\u7528:
RoutesNamesList \u662F\u4ECE @typed-router \u5E93\u4E2D\u5BFC\u5165\u7684\u7C7B\u578B\uFF0C\u5176\u4E3B\u8981\u4F5C\u7528\u662F\u5B9A\u4E49\u9879\u76EE\u4E2D\u6240\u6709\u8DEF\u7531\u540D\u79F0\u7684\u5B57\u7B26\u4E32\u96C6\u5408\u3002\u5B83\u901A\u5E38\u7528\u4E8E\u4E3A\u9879\u76EE\u4E2D\u7684\u8DEF\u7531\u540D\u79F0\u63D0\u4F9B\u7C7B\u578B\u68C0\u67E5\uFF0C\u786E\u4FDD\u4EE3\u7801\u5728\u8BBF\u95EE\u8DEF\u7531\u65F6\u4F7F\u7528\u7684\u540D\u79F0\u662F\u6709\u6548\u4E14\u7C7B\u578B\u5B89\u5168\u7684\u3002
  
\u5177\u4F53\u4F5C\u7528\uFF1A
1.\u9650\u5236\u8DEF\u7531\u540D\u79F0\uFF1A
RoutesNamesList \u7684\u4F5C\u7528\u662F\u9650\u5236\u5F00\u53D1\u8005\u53EA\u80FD\u4F7F\u7528\u9884\u5B9A\u4E49\u7684\u8DEF\u7531\u540D\u79F0\u3002\u8FD9\u53EF\u4EE5\u9632\u6B62\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\u4E0D\u5B58\u5728\u6216\u62FC\u5199\u9519\u8BEF\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u51CF\u5C11\u8FD0\u884C\u65F6\u9519\u8BEF\u7684\u53EF\u80FD\u6027\u3002
  
2.\u81EA\u52A8\u8865\u5168\u548C\u7C7B\u578B\u68C0\u67E5\uFF1A
\u5F53\u4F60\u4F7F\u7528 RoutesNamesList \u4F5C\u4E3A\u8DEF\u7531\u540D\u79F0\u7684\u7C7B\u578B\u65F6\uFF0CIDE \u4F1A\u4E3A\u4F60\u63D0\u4F9B\u81EA\u52A8\u8865\u5168\u529F\u80FD\uFF0C\u5E76\u5728\u4F60\u5C1D\u8BD5\u4F7F\u7528\u65E0\u6548\u7684\u8DEF\u7531\u540D\u79F0\u65F6\u53D1\u51FA\u8B66\u544A\u3002\u8FD9\u5927\u5927\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\u548C\u4EE3\u7801\u7684\u53EF\u9760\u6027\u3002
  
3.\u8DEF\u7531\u540D\u79F0\u96C6\u4E2D\u7BA1\u7406\uFF1A
\u4F7F\u7528 RoutesNamesList \u53EF\u4EE5\u96C6\u4E2D\u7BA1\u7406\u9879\u76EE\u4E2D\u7684\u6240\u6709\u8DEF\u7531\u540D\u79F0\uFF0C\u4F7F\u5F97\u9879\u76EE\u7ED3\u6784\u66F4\u6E05\u6670\u3002\u5982\u679C\u9700\u8981\u6DFB\u52A0\u3001\u5220\u9664\u6216\u91CD\u547D\u540D\u67D0\u4E2A\u8DEF\u7531\uFF0C\u66F4\u65B0\u8FD9\u4E2A\u7C7B\u578B\u5B9A\u4E49\u53EF\u4EE5\u4F7F\u6574\u4E2A\u9879\u76EE\u7EDF\u4E00\u53CD\u6620\u8FD9\u4E2A\u53D8\u5316\u3002
  
\u793A\u4F8B\u8BF4\u660E\uFF1A
\u5047\u8BBE RoutesNamesList \u7684\u5B9A\u4E49\u7C7B\u4F3C\u5982\u4E0B\uFF1A
1.\u5047\u8BBE RoutesNamesList \u7684\u5B9A\u4E49\u7C7B\u4F3C\u5982\u4E0B\uFF1A
type RoutesNamesList = &quot;home&quot; | &quot;about&quot; | &quot;contact&quot;;
  
\u5F53\u4F7F\u7528 RoutesNamesList \u4F5C\u4E3A\u7C7B\u578B\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528 home\u3001about \u6216 contact \u4F5C\u4E3A\u5408\u6CD5\u7684\u8DEF\u7531\u540D\u79F0
  
let routeName: RoutesNamesList;

routeName = &quot;home&quot;;    // \u5408\u6CD5
routeName = &quot;contact&quot;; // \u5408\u6CD5
routeName = &quot;login&quot;;   // \u9519\u8BEF\uFF0C&quot;login&quot; \u4E0D\u5728 RoutesNamesList \u4E2D
  
//\u91CD\u547D\u540D\u8DEF\u7531
export { type RoutesNamesList as AppRouteList } from &quot;@typed-router&quot;;
\u8FD9\u91CC\u5C06 RoutesNamesList \u91CD\u65B0\u5BFC\u51FA\u4E3A AppRouteList\uFF0C\u8FD9\u6837\u9879\u76EE\u4E2D\u7684\u5176\u4ED6\u90E8\u5206\u53EF\u4EE5\u4F7F\u7528 AppRouteList \u6765\u4F5C\u4E3A\u8DEF\u7531\u540D\u79F0\u7684\u7C7B\u578B\u3002\u5B83\u786E\u4FDD\u4E86\u4EFB\u4F55\u4F7F\u7528\u8BE5\u7C7B\u578B\u7684\u5730\u65B9\u90FD\u53EA\u80FD\u4F7F\u7528\u9884\u5B9A\u4E49\u7684\u8DEF\u7531\u540D\u79F0\u3002


// \u5206\u6790
RoutesNamedLocations\u7684\u4F5C\u7528
RoutesNamedLocations \u662F\u4ECE @typed-router \u5BFC\u5165\u7684\u53E6\u4E00\u4E2A\u7C7B\u578B\uFF0C\u901A\u5E38\u7528\u4E8E\u5B9A\u4E49\u4E0E\u8DEF\u7531\u540D\u79F0\u76F8\u5173\u7684\u5177\u4F53\u8DEF\u7531\u5BF9\u8C61\u3002\u5B83\u4E0D\u4EC5\u5305\u542B\u4E86\u8DEF\u7531\u7684\u540D\u79F0\uFF0C\u8FD8\u53EF\u4EE5\u5305\u542B\u8DEF\u7531\u53C2\u6570\u3001\u67E5\u8BE2\u53C2\u6570\u7B49\u4FE1\u606F\uFF0C\u5E2E\u52A9\u4F60\u4EE5\u7C7B\u578B\u5B89\u5168\u7684\u65B9\u5F0F\u6784\u5EFA\u8DEF\u7531\u5BF9\u8C61\u3002
  
\u5177\u4F53\u4F5C\u7528\uFF1A
1.\u7C7B\u578B\u5B89\u5168\u7684\u8DEF\u7531\u5BFC\u822A\uFF1A
RoutesNamedLocations \u7684\u4F5C\u7528\u662F\u4E3A\u4F60\u63D0\u4F9B\u7C7B\u578B\u5316\u7684\u8DEF\u7531\u5BF9\u8C61\uFF0C\u7528\u4E8E\u8DEF\u7531\u5BFC\u822A\u3002\u8FD9\u6837\u4F60\u5728\u751F\u6210\u8DEF\u7531\u8DEF\u5F84\u65F6\uFF0C\u4E0D\u4EC5\u80FD\u6307\u5B9A\u8DEF\u7531\u540D\u79F0\uFF0C\u8FD8\u53EF\u4EE5\u786E\u4FDD\u4F20\u5165\u7684\u53C2\u6570\u7B26\u5408\u8BE5\u8DEF\u7531\u7684\u8981\u6C42\uFF08\u5982\u52A8\u6001\u53C2\u6570\u6216\u67E5\u8BE2\u53C2\u6570\uFF09\u3002
  
2.\u53C2\u6570\u7C7B\u578B\u68C0\u67E5\uFF1A
\u5BF9\u4E8E\u5E26\u6709\u52A8\u6001\u53C2\u6570\u7684\u8DEF\u7531\uFF0CRoutesNamedLocations \u5141\u8BB8\u4F60\u901A\u8FC7\u7C7B\u578B\u6765\u660E\u786E\u8981\u6C42\u7684\u53C2\u6570\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u67D0\u4E2A\u8DEF\u7531\u9700\u8981\u4E00\u4E2A id \u53C2\u6570\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u4F1A\u5F3A\u5236\u4F60\u5728\u5BFC\u822A\u65F6\u63D0\u4F9B id\uFF0C\u5426\u5219\u4F1A\u629B\u51FA\u7F16\u8BD1\u9519\u8BEF\uFF0C\u786E\u4FDD\u5BFC\u822A\u7684\u8DEF\u5F84\u548C\u53C2\u6570\u662F\u6B63\u786E\u7684\u3002
  
3.\u5BFC\u822A\u65F6\u7684\u81EA\u52A8\u8865\u5168\uFF1A
\u4F7F\u7528 RoutesNamedLocations \u4F5C\u4E3A\u8DEF\u7531\u5BF9\u8C61\u7684\u7C7B\u578B\u65F6\uFF0CIDE \u53EF\u4EE5\u4E3A\u4F60\u63D0\u4F9B\u667A\u80FD\u63D0\u793A\uFF0C\u81EA\u52A8\u8865\u5168\u8DEF\u7531\u540D\u79F0\u4EE5\u53CA\u76F8\u5173\u7684\u53C2\u6570\u3002\u8FD9\u4F7F\u5F97\u5728\u7F16\u5199\u5BFC\u822A\u4EE3\u7801\u65F6\uFF0C\u4E0D\u4EC5\u80FD\u5FEB\u901F\u9009\u62E9\u6B63\u786E\u7684\u8DEF\u7531\uFF0C\u8FD8\u80FD\u907F\u514D\u4F20\u9012\u9519\u8BEF\u6216\u7F3A\u5931\u7684\u53C2\u6570\u3002
  
\u793A\u4F8B\u8BF4\u660E\uFF1A
\u5047\u8BBE\u4F60\u6709\u4E00\u7EC4\u8DEF\u7531\u914D\u7F6E\uFF0C\u6BD4\u5982\uFF1A
// \u5047\u8BBE\u7684\u8DEF\u7531\u914D\u7F6E
type RoutesNamedLocations = {
  home: {};
  about: {};
  user: { params: { id: string }; query?: { referrer?: string } };
};
  
home \u548C about \u8DEF\u7531\u6CA1\u6709\u53C2\u6570\u8981\u6C42\uFF0C\u800C user \u8DEF\u7531\u9700\u8981\u4E00\u4E2A id \u53C2\u6570\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6709\u4E00\u4E2A\u53EF\u9009\u7684 query \u53C2\u6570 referrer\u3002
  
\u4F60\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528\uFF1A
let route: RoutesNamedLocations;

// \u5408\u6CD5\uFF1A\u6CA1\u6709\u53C2\u6570\u8981\u6C42
route = { name: &quot;home&quot; };
route = { name: &quot;about&quot; };

// \u5408\u6CD5\uFF1A\u63D0\u4F9B\u4E86\u5FC5\u9700\u7684\u53C2\u6570
route = { name: &quot;user&quot;, params: { id: &quot;123&quot; } };

// \u5408\u6CD5\uFF1A\u8FD8\u53EF\u4EE5\u5305\u542B\u53EF\u9009\u7684\u67E5\u8BE2\u53C2\u6570
route = { name: &quot;user&quot;, params: { id: &quot;123&quot; }, query: { referrer: &quot;homepage&quot; } };

// \u9519\u8BEF\uFF1A\u7F3A\u5C11 id \u53C2\u6570
route = { name: &quot;user&quot; }; // TypeScript \u62A5\u9519
  
// \u6DF7\u5408\u4F7F\u7528
export type AppGenericRoute = RoutesNamedLocations | string;
AppGenericRoute \u53EF\u4EE5\u662F\u7C7B\u578B\u5316\u7684 RoutesNamedLocations\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u3002\u8FD9\u610F\u5473\u7740\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u4F60\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u5316\u8DEF\u7531\uFF0C\u4E5F\u53EF\u4EE5\u53EA\u4F7F\u7528\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u8DEF\u7531\u540D\u79F0\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3&gt; \u8BF4\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u72EC\u7ACB\u4F7F\u7528 @typed-router\uFF1A\u5982\u679C\u4F60\u4E0D\u4F7F\u7528 Nuxt.js\uFF0C\u800C\u662F\u4E00\u4E2A\u666E\u901A\u7684 Vue Router \u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5B89\u88C5\u548C\u4F7F\u7528 @typed-router \u6765\u4E3A\u9879\u76EE\u6DFB\u52A0\u7C7B\u578B\u5B89\u5168\u7684\u8DEF\u7531\u652F\u6301\u3002
  
2.\u5728 Nuxt.js \u4E2D\u5728\u5B89\u88C5\u4E86 nuxt-typed-router\u4E4B\u540E\uFF0C\u4F60\u4E0D\u9700\u8981\u76F4\u63A5\u5B89\u88C5 @typed-router\uFF0C\u56E0\u4E3A nuxt-typed-router \u5DF2\u7ECF\u57FA\u4E8E\u5B83\u6784\u5EFA\u5E76\u63D0\u4F9B\u4E86\u6240\u6709\u529F\u80FD\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[u];function l(v,r){return i(),n("div",null,t)}var o=e(d,[["render",l],["__file","nuxt3\u4E4B\u81EA\u52A8\u751F\u6210\u8DEF\u7531\u4EE5\u53CA\u7C7B\u578B.html.vue"]]);export{o as default};
