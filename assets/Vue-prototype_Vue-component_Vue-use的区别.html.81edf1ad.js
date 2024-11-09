import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const l={},u=s(`<p>Vue.prototype\u548CVue.use\u7684\u533A\u522B:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import Vue from &#39;vue&#39;
import Element from &#39;element-ui&#39;
Vue.use(Element)
import echarts from &#39;echarts&#39;
vue.prototype.$echarts = echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD9\u6837\u7684\u4EE3\u7801\u6211\u4EEC\u80AF\u5B9A\u5F88\u719F\u6089\uFF0C \u4F46\u662F\u5BF9\u4E8EVue.use\u548CVue.prototype\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF0C
\u53EF\u80FD\u8FD8\u4E0D\u4E00\u5B9A\u5B8C\u5168\u6E05\u695A\u3002Vue\u4E3A\u4EC0\u4E48\u8981\u63D0\u9AD8\u4E24\u4E2A\u6CE8\u518C\u63D2\u4EF6\u7684\u65B9\u5F0F\uFF1F\u4ED6\u4EEC\u5404\u81EA\u6709\u4EC0\u4E48
\u4F18\u70B9\u548C\u8054\u7CFB\uFF1F
  
\u5148\u8BF4\u7ED3\u8BBA\uFF0CVue.use\u548CVue.prototype\u6CA1\u6709\u672C\u8D28\u533A\u522B\uFF0CVue.use\u5C31
\u662F\u5728Vue.prototype\u57FA\u7840\u4E0A\u53C8\u5C01\u88C5\u4E86\u4E00\u5C42\u800C\u5DF2\uFF0C\u4ED6\u4EEC\u5B9E\u73B0\u7684\u539F\u7406\u90FD\u662F
\u5728Vue.prototype\u4E0A\u6DFB\u52A0\u4E86\u4E00\u4E2A\u65B9\u6CD5\uFF0CVue.prototype\u9002\u5408\u4E8E\u6CE8\u518CVue\u751F\u6001
\u5916\u7684\u63D2\u4EF6\uFF0CVue.use\u9002\u5408\u4E8E\u6CE8\u518CVue\u751F\u6001\u5185\u7684\u63D2\u4EF6.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue.prototype\u7684\u7528\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u9700\u8981\u8BBE\u7F6E\u5168\u5C40\u53D8\u91CF\uFF0C\u5728main.js\u4E2D\uFF0CVue\u5B9E\u4F8B\u5316\u7684\u4EE3\u7801\u91CC\u6DFB\u52A0\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5728 \u539F\u578B \u4E0A\u5B9A\u4E49\u5B83\u4EEC\u4F7F\u5176\u5728\u6BCF\u4E2AVue\u5B9E\u4F8B\u4E2D\u53EF\u7528\u3002
  
vue.prototype.$echarts = echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue.use()\u7684 \u7528\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u901A\u8FC7\u5168\u5C40\u65B9\u6CD5 Vue.use() \u4F7F\u7528\u63D2\u4EF6
2.Vue.use \u4F1A\u81EA\u52A8\u963B\u6B62\u591A\u6B21\u6CE8\u518C\u76F8\u540C\u63D2\u4EF6
3.\u5B83\u9700\u8981\u5728\u4F60\u8C03\u7528 new Vue() \u542F\u52A8\u5E94\u7528\u4E4B\u524D\u5B8C\u6210
4.Vue.use() \u65B9\u6CD5\u81F3\u5C11\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u7C7B\u578B\u5FC5\u987B\u662F Object \u6216 Function\uFF0C\u5982\u679C\u662F Object \u90A3\u4E48\u8FD9\u4E2A Object \u9700\u8981\u5B9A\u4E49\u4E00\u4E2A install \u65B9\u6CD5\uFF0C\u5982\u679C\u662F Function \u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u5C31\u88AB\u5F53\u505A install \u65B9\u6CD5\u3002\u5728 Vue.use() \u6267\u884C\u65F6 install \u4F1A\u9ED8\u8BA4\u6267\u884C\uFF0C\u5F53 install \u6267\u884C\u65F6\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662F Vue\uFF0C\u5176\u4ED6\u53C2\u6570\u662F Vue.use() \u6267\u884C\u65F6\u4F20\u5165\u7684\u5176\u4ED6\u53C2\u6570\u3002
  
import Vue from &#39;vue&#39;
import Element from &#39;element-ui&#39;
Vue.use(Element)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>Vue.use = function (plugin) {
  if (plugin.installed) {
    return;
  }
  // additional parameters
  var args = toArray(arguments, 1);
  args.unshift(this);
  if (typeof plugin.install === &#39;function&#39;) {
    plugin.install.apply(plugin, args);
  } else {
    plugin.apply(null, args);
  }
  plugin.installed = true;
  return this;
};

// \u51C6\u5907\u597D install \u65B9\u6CD5 \u7ED9 Vue.use() \u4F7F\u7528
const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;

  // \u5C06\u5305\u88C5\u597D\u7684 toast \u6302\u5230Vue\u7684\u539F\u578B\u4E0A\uFF0C\u4F5C\u4E3A Vue \u5B9E\u4F8B\u4E0A\u7684\u65B9\u6CD5
  Vue.prototype.$toast = toast;
}

// \u9ED8\u8BA4\u5BFC\u51FA install
export default {
  install,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u4E86\u6E90\u7801\u624D\u77E5\u9053\u539F\u6765Vue.use\u4E3B\u8981\u662F\u6267\u884Cinstall\u65B9\u6CD5\uFF0C\u800Cinstall\u4E3B\u8981\u4E5F\u662F\u6267\u884CVue.prototype\u65B9\u6CD5\u3002\u6240\u4EE5\uFF0C\u5176\u5B9EVue.use()\u65B9\u6CD5\u7684\u6838\u5FC3\u5C31\u662FVue.prototype\uFF0C\u53EA\u4E0D\u8FC7\u53C8\u5C01\u88C5\u4E86\u4E00\u5C42,\u66F4\u52A0\u7684\u7075\u6D3B\uFF0C\u6269\u5C55\u6027\u66F4\u597D\u3002</p><p>\u4E0D\u540C\u4E4B\u5904\u662F\u4F7F\u7528vue.prototype\uFF0C\u63D2\u4EF6\u4E0D\u9700\u8981\u5B9E\u73B0install\u65B9\u6CD5\uFF0C\u7B80\u5355\u7C97\u66B4\uFF0C\u62FF\u6765\u5C31\u7528\uFF0C\u4F46\u662F\u7075\u6D3B\u6027\u4E0D\u5982Vue.use(), \u800CVue.use()\uFF0C\u5374\u8981\u6C42\u63D2\u4EF6\u5FC5\u987B\u5B9E\u73B0instal\u65B9\u6CD5\u6216\u8005\u8BE5\u63D2\u4EF6\u672C\u8EAB\u5C31\u662F\u51FD\u6570\uFF0C\u5728install\u65B9\u6CD5\u53EF\u4EE5\u5B8C\u6210\u81EA\u5DF1\u7684\u903B\u8F91\uFF0C \u6240\u4EE5Vue.use()\u7684\u65B9\u5F0F\u66F4\u52A0\u7684\u5F3A\u5927\uFF0C\u7075\u6D3B\uFF0C\u6269\u5C55\u6027\u66F4\u597D\u3002</p>`,11),d=[u];function a(t,r){return n(),i("div",null,d)}var c=e(l,[["render",a],["__file","Vue-prototype+Vue-component+Vue-use\u7684\u533A\u522B.html.vue"]]);export{c as default};
