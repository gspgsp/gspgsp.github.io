import{_ as e,o as i,c as n,g as l}from"./app.6e4bf74b.js";const s={},t=l(`<p>\u5173\u4E8Evue3\u7684v_model\u53CC\u5411\u7ED1\u5B9A:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>v3.4\u4E4B\u524D\u4F7F\u7528 defineProps
v3.4\u4E4B\u540E\u4F7F\u7528 defineModel        
  
\u6587\u6863:https://vuejs.org/guide/components/v-model.html
  
\u4E3B\u8981\u7528\u6CD5\u5982\u4E0B:
1&gt;\u5E38\u89C4\u7684\u5355\u5C5E\u6027\u53CC\u5411\u7ED1\u5B9A
ex:
\u5B9A\u4E49\u5B50\u7EC4\u4EF6Child.vue:

&lt;script setup lang=&quot;ts&quot;&gt;
const title = defineModel({
  default: &quot;\u6211\u662Ftitle\u7684\u9ED8\u8BA4\u503C&quot;,// \u8BBE\u7F6Ev-moddel\u7684\u9ED8\u8BA4\u503C
  // required: true, // \u8BBE\u7F6E\u4E3A\u5FC5\u4F20\u5C5E\u6027\uFF0C\u5F53\u5728\u7236\u7EC4\u4EF6\u4F7F\u7528\u7684\u65F6\u5019
});

const change = () =&gt; {
  title.value = &quot;\u6211\u662Ftitle\u7684\u65B0\u503C&quot;; //\u8FD9\u91CC\u6539\u53D8 v-model \u7684\u503C\uFF0C\u4F1A\u5728\u4E0B\u9762\u540C\u6B65\u4FEE\u6539
}
&lt;/script&gt;

&lt;template&gt;
  &lt;Button @click=&quot;change&quot;&gt;\u4FEE\u6539...&lt;/Button&gt;
  &lt;div&gt;parent bound v-model is: {{ title }}&lt;/div&gt;
&lt;/template&gt;
  
2&gt;\u901A\u8FC7\u7236\u5B50\u7EC4\u4EF6\u4F7F\u7528
ex:
\u5B9A\u4E49\u7236\u7EC4\u4EF6Parent.vue:

&lt;script setup lang=&quot;ts&quot;&gt;
const count = ref(&quot;haha&quot;);
const say = () =&gt; {
  count.value = &quot;world&quot;;
};
&lt;/script&gt;

&lt;template&gt;
  &lt;Button @click=&quot;say&quot;&gt;\u6DFB\u52A0&lt;/Button&gt;
  &lt;input type=&quot;text&quot; :value=&quot;count&quot;&gt;// \u540C\u65F6\uFF0Cv-model\u7684\u503C\u4F1A\u5728\u8FD9\u91CC\u5C55\u793A\uFF0C\u5982\u679C \u5B50\u7EC4\u4EF6 \u89E6\u53D1\u4E86 change \u4E8B\u4EF6\uFF0C\u90A3\u4E48 \u7236\u7EC4\u4EF6\u7684count\u503C\u4E5F\u4F1A\u6539\u53D8
  &lt;Child v-model=&quot;count&quot;&gt;&lt;/Child&gt; // \u8FD9\u91CC\u901A\u8FC7count\u7ED9v-model\u4F20\u503C\uFF0C\u5F53count \u6CA1\u6709\u503C \u6BD4\u5982 onst count = ref(); \u7684\u65F6\u5019 \uFF0C\u4F1A\u4F7F\u7528 \u5B50\u7EC4\u4EF6\u5B9A\u4E49\u7684 default \u503C
&lt;/template&gt;
  
3&gt;\u53EF\u4EE5\u5728\u901A\u8FC7 defineModel \u5B9A\u4E49 v-model \u7684\u65F6\u5019\uFF0C\u9650\u5B9A v-model\u7684\u7C7B\u578B,\u5982\u4E0B:
const title = defineModel&lt;boolean&gt;(); // \u6307\u5B9A\u4E3A bool \u578B
  
4&gt;\u53EF\u4EE5\u901A\u8FC7\u7ED9 v-model \u7ED1\u5B9A\u53C2\u6570\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E3A v-model \u5B9A\u4E49\u540D\u79F0\uFF0C\u5728\u4E00\u4E2A\u7EC4\u4EF6\u4E0B\u6709\u591A\u4E2A v-model \u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u8981\u8FD9\u4E48\u505A, \u5355\u4E2A\u7684\u65F6\u5019\u76F4\u63A5 defineModel()\u5C31\u53EF\u4EE5\u4E86\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u9ED8\u8BA4\u540D\u79F0\u53EA\u80FD\u6709\u4E00\u4E2A\u5427
ex:
\u5E38\u89C4\u4F7F\u7528\uFF1A
\u5B50\u7EC4\u4EF6:
&lt;script setup&gt;
const firstName = defineModel(&#39;haha&#39;)
const lastName = defineModel(&#39;hehe&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot; /&gt;
  &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot; /&gt;
&lt;/template&gt;

\u7236\u7EC4\u4EF6:
&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import UserName from &#39;./UserName.vue&#39;

const first = ref(&#39;John&#39;)
const last = ref(&#39;Doe&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ first }} {{ last }}&lt;/h1&gt;
  &lt;UserName
    v-model:haha=&quot;first&quot;
    v-model:hehe=&quot;last&quot;
  /&gt;
&lt;/template&gt;


\u6DFB\u52A0\u989D\u5916\u5C5E\u6027\u4F7F\u7528:
\u5B50\u7EC4\u4EF6:
&lt;script setup&gt;
const firstName = defineModel(&#39;haha&#39;)
const lastName = defineModel(&#39;hehe&#39;, {
  default: &quot;\u8FD9\u4E2A\u662F\u9ED8\u8BA4\u503C&quot;,
  //required: true
})

const change = () =&gt; {
  lastName.value = &quot;\u505A\u4E2A\u4FEE\u6539&quot;
}
&lt;/script&gt;

&lt;template&gt;
  &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot; /&gt;
  &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot; /&gt;
  &lt;button @click=&quot;change&quot;&gt;\u4FEE\u6539\u4E00\u4E0B&lt;/button&gt;
&lt;/template&gt;

\u7236\u4EB2\u7EC4\u4EF6:
&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import UserName from &#39;./UserName.vue&#39;

const first = ref(&#39;John&#39;)
const last = ref(&#39;Doe&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ first }} {{ last }}&lt;/h1&gt;
  &lt;UserName
    v-model:haha=&quot;first&quot;
  /&gt;
&lt;/template&gt;
  
5&gt;\u53EF\u4EE5\u4E3A v-model \u5B9A\u4E49\u4FEE\u6539\u5668(modifiers)\uFF0C\u4E00\u4E2Av-model \u5C5E\u6027\u4E0A\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u4FEE\u6539\u5668\uFF0C\u5B9A\u4E49\u591A\u4E2A\u4E0D\u751F\u6548
ex:
\u7236\u7EC4\u4EF6:
&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import MyComponent from &#39;./MyComponent.vue&#39;
  
const myText = ref(&#39;&#39;)
&lt;/script&gt;

&lt;template&gt;
  This input capitalizes everything you enter:
  &lt;p&gt;{{ myText }}&lt;/p&gt;
  &lt;MyComponent v-model.firtToUpper=&quot;myText&quot; /&gt;
&lt;/template&gt;

\u5B50\u7EC4\u4EF6:
&lt;script setup&gt;
import { computed } from &#39;vue&#39;

const [title, modifiers] = defineModel({
  set(value) {
    if (modifiers.firtToUpper) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})

const change = () =&gt; {
  title.value = &quot;change the value&quot;
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click=&quot;change&quot;&gt;\u4FEE\u6539&lt;/button&gt;

  &lt;input type=&quot;text&quot; v-model=&quot;title&quot; /&gt;
&lt;/template&gt;

\u6211\u53D1\u73B0 modifiers \u53C2\u6570\u662F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7684\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u5176\u5B83\u7684\uFF0C\u6BD4\u5982\u6211\u8FD9\u91CC\u6539\u4E3A  dodo:
&lt;script setup&gt;
import { computed } from &#39;vue&#39;

const [title, dodo] = defineModel({
  set(value) {
    if (dodo.firtToUpper) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})

const change = () =&gt; {
  title.value = &quot;change the value&quot;
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click=&quot;change&quot;&gt;\u4FEE\u6539&lt;/button&gt;

  &lt;input type=&quot;text&quot; v-model=&quot;title&quot; /&gt;
&lt;/template&gt;
  
6&gt; \u5C06\u4FEE\u6539\u5668\u4F7F\u7528\u5230\u591A\u4E2A v-model \u5C5E\u6027\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u662F\u5B98\u7F51\u7684\u4F8B\u5B50\uFF0C\u6211\u8BA4\u4E3A\u6CA1\u4EC0\u4E48\u7528\uFF0C\u53EA\u662F\u505A\u4E86 console \u6253\u5370\uFF0C\u6211\u4EE5\u4E3A\u53EF\u4EE5\u50CF\u4E0A\u9762\u4E00\u6837\uFF0C\u5BF9\u6570\u636E\u5904\u7406\uFF0C\u9700\u8981\u81EA\u5DF1\u5C1D\u8BD5
ex:
\u5B50\u7EC4\u4EF6:
&lt;UserName
  v-model:haha.capitalize=&quot;first&quot;
  v-model:hehe.uppercase=&quot;last&quot;
/&gt;

\u7236\u7EC4\u4EF6:
&lt;script setup&gt;
const [firstName, firstNameModifiers] = defineModel(&#39;haha&#39;)
const [lastName, lastNameModifiers] = defineModel(&#39;hehe&#39;)

console.log(firstNameModifiers) // { capitalize: true }
console.log(lastNameModifiers) // { uppercase: true}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[t];function v(u,a){return i(),n("div",null,d)}var m=e(s,[["render",v],["__file","\u5173\u4E8Evue3\u7684v_model\u53CC\u5411\u7ED1\u5B9A.html.vue"]]);export{m as default};
