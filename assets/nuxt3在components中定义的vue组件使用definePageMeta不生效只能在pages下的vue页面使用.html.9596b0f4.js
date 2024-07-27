import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728 Nuxt 3 \u4E2D\uFF0C\u5982\u679C\u4F60\u5728 components/ \u76EE\u5F55\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6\uFF0C\u5E76\u5728\u8BE5\u7EC4\u4EF6\u4E2D\u4F7F\u7528 definePageMeta \u6765\u8BBE\u7F6E\u9875\u9762\u5143\u6570\u636E\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E0D\u751F\u6548\u7684\u60C5\u51B5\u3002

\u8FD9\u662F\u56E0\u4E3A\u5728 Nuxt 3 \u4E2D\uFF0C\u9875\u9762\u5143\u6570\u636E\u53EA\u80FD\u5728\u9875\u9762\u7EC4\u4EF6\uFF08\u4F4D\u4E8E pages/ \u76EE\u5F55\u4E2D\uFF09\u4E2D\u751F\u6548\u3002\u5982\u679C\u4F60\u60F3\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 definePageMeta\uFF0C\u4F60\u9700\u8981\u5C06\u8BE5\u7EC4\u4EF6\u8F6C\u5316\u4E3A\u4E00\u4E2A\u9875\u9762\u7EC4\u4EF6\u3002

\u8981\u5C06\u4E00\u4E2A\u7EC4\u4EF6\u8F6C\u5316\u4E3A\u4E00\u4E2A\u9875\u9762\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728 pages/ \u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A\u4E0E\u8BE5\u7EC4\u4EF6\u540C\u540D\u7684\u6587\u4EF6\uFF0C\u5E76\u5C06\u5176\u4F5C\u4E3A\u9875\u9762\u7EC4\u4EF6\u6765\u4F7F\u7528\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u5728 components/ \u76EE\u5F55\u4E2D\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A my-component.vue \u7684\u7EC4\u4EF6\uFF0C\u5E76\u5728\u5176\u4E2D\u4F7F\u7528\u4E86 definePageMeta\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u5728 pages/ \u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A my-component.vue \u7684\u6587\u4EF6\uFF0C\u5E76\u5C06\u5176\u4F5C\u4E3A\u9875\u9762\u7EC4\u4EF6\u6765\u4F7F\u7528\u3002\u7136\u540E\u5728\u9875\u9762\u7EC4\u4EF6\u4E2D\u4F7F\u7528 definePageMeta \u6765\u8BBE\u7F6E\u9875\u9762\u5143\u6570\u636E\u3002

\u4F8B\u5982\uFF0C\u5728 pages/my-component.vue \u6587\u4EF6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49\u9875\u9762\u7EC4\u4EF6\uFF1A
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;My Component Page&lt;/h1&gt;
    &lt;my-component /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import MyComponent from &#39;@/components/my-component.vue&#39;

export default {
  components: { MyComponent },

  async definePageMeta($meta) {
    $meta.title = &#39;My Component Page&#39;
    $meta.description = &#39;This is a page for My Component&#39;
  }
}
&lt;/script&gt;


\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5728 pages/my-component.vue \u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u9875\u9762\u7EC4\u4EF6\uFF0C\u5E76\u5728\u5176\u4E2D\u4F7F\u7528\u4E86 definePageMeta \u6765\u8BBE\u7F6E\u9875\u9762\u5143\u6570\u636E\u3002\u8FD9\u6837\uFF0C\u5F53\u7528\u6237\u8BBF\u95EE /my-component \u9875\u9762\u65F6\uFF0C\u5C06\u4F1A\u81EA\u52A8\u5E94\u7528\u8BE5\u9875\u9762\u7EC4\u4EF6\uFF0C\u5E76\u4F7F\u7528\u5176\u4E2D\u5B9A\u4E49\u7684\u9875\u9762\u5143\u6570\u636E\u3002

\u4F46\u662F\u611F\u89C9\u4E0A\u9762\u8FD9\u6837\u8F6C\u6362\u610F\u4E49\u4E0D\u5927\uFF0C\u8FD8\u662F\u4E0D\u5982\u76F4\u63A5\u5199\u5728pages\u9875\u9762\u91CC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[d];function a(v,m){return n(),i("div",null,t)}var o=e(l,[["render",a],["__file","nuxt3\u5728components\u4E2D\u5B9A\u4E49\u7684vue\u7EC4\u4EF6\u4F7F\u7528definePageMeta\u4E0D\u751F\u6548\u53EA\u80FD\u5728pages\u4E0B\u7684vue\u9875\u9762\u4F7F\u7528.html.vue"]]);export{o as default};
