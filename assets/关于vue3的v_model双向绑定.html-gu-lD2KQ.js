import{_ as n,c as l,f as e,o as a}from"./app-BB_BIQV8.js";const i={};function t(p,s){return a(),l("div",null,s[0]||(s[0]=[e(`<p>关于vue3的v_model双向绑定:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">v3.4之前使用 defineProps</span>
<span class="line">v3.4之后使用 defineModel        </span>
<span class="line">  </span>
<span class="line">文档:https://vuejs.org/guide/components/v-model.html</span>
<span class="line">  </span>
<span class="line">主要用法如下:</span>
<span class="line">1&gt;常规的单属性双向绑定</span>
<span class="line">ex:</span>
<span class="line">定义子组件Child.vue:</span>
<span class="line"></span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">const title = defineModel({</span>
<span class="line">  default: &quot;我是title的默认值&quot;,// 设置v-moddel的默认值</span>
<span class="line">  // required: true, // 设置为必传属性，当在父组件使用的时候</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">const change = () =&gt; {</span>
<span class="line">  title.value = &quot;我是title的新值&quot;; //这里改变 v-model 的值，会在下面同步修改</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;Button @click=&quot;change&quot;&gt;修改...&lt;/Button&gt;</span>
<span class="line">  &lt;div&gt;parent bound v-model is: {{ title }}&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">2&gt;通过父子组件使用</span>
<span class="line">ex:</span>
<span class="line">定义父组件Parent.vue:</span>
<span class="line"></span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">const count = ref(&quot;haha&quot;);</span>
<span class="line">const say = () =&gt; {</span>
<span class="line">  count.value = &quot;world&quot;;</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;Button @click=&quot;say&quot;&gt;添加&lt;/Button&gt;</span>
<span class="line">  &lt;input type=&quot;text&quot; :value=&quot;count&quot;&gt;// 同时，v-model的值会在这里展示，如果 子组件 触发了 change 事件，那么 父组件的count值也会改变</span>
<span class="line">  &lt;Child v-model=&quot;count&quot;&gt;&lt;/Child&gt; // 这里通过count给v-model传值，当count 没有值 比如 onst count = ref(); 的时候 ，会使用 子组件定义的 default 值</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">3&gt;可以在通过 defineModel 定义 v-model 的时候，限定 v-model的类型,如下:</span>
<span class="line">const title = defineModel&lt;boolean&gt;(); // 指定为 bool 型</span>
<span class="line">  </span>
<span class="line">4&gt;可以通过给 v-model 绑定参数，可以实现为 v-model 定义名称，在一个组件下有多个 v-model 属性的时候，必须要这么做, 单个的时候直接 defineModel()就可以了，可能是因为默认名称只能有一个吧</span>
<span class="line">ex:</span>
<span class="line">常规使用：</span>
<span class="line">子组件:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">const firstName = defineModel(&#39;haha&#39;)</span>
<span class="line">const lastName = defineModel(&#39;hehe&#39;)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot; /&gt;</span>
<span class="line">  &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">父组件:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import UserName from &#39;./UserName.vue&#39;</span>
<span class="line"></span>
<span class="line">const first = ref(&#39;John&#39;)</span>
<span class="line">const last = ref(&#39;Doe&#39;)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ first }} {{ last }}&lt;/h1&gt;</span>
<span class="line">  &lt;UserName</span>
<span class="line">    v-model:haha=&quot;first&quot;</span>
<span class="line">    v-model:hehe=&quot;last&quot;</span>
<span class="line">  /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">添加额外属性使用:</span>
<span class="line">子组件:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">const firstName = defineModel(&#39;haha&#39;)</span>
<span class="line">const lastName = defineModel(&#39;hehe&#39;, {</span>
<span class="line">  default: &quot;这个是默认值&quot;,</span>
<span class="line">  //required: true</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">const change = () =&gt; {</span>
<span class="line">  lastName.value = &quot;做个修改&quot;</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot; /&gt;</span>
<span class="line">  &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot; /&gt;</span>
<span class="line">  &lt;button @click=&quot;change&quot;&gt;修改一下&lt;/button&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">父亲组件:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import UserName from &#39;./UserName.vue&#39;</span>
<span class="line"></span>
<span class="line">const first = ref(&#39;John&#39;)</span>
<span class="line">const last = ref(&#39;Doe&#39;)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ first }} {{ last }}&lt;/h1&gt;</span>
<span class="line">  &lt;UserName</span>
<span class="line">    v-model:haha=&quot;first&quot;</span>
<span class="line">  /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">5&gt;可以为 v-model 定义修改器(modifiers)，一个v-model 属性上只能定义一个修改器，定义多个不生效</span>
<span class="line">ex:</span>
<span class="line">父组件:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import MyComponent from &#39;./MyComponent.vue&#39;</span>
<span class="line">  </span>
<span class="line">const myText = ref(&#39;&#39;)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  This input capitalizes everything you enter:</span>
<span class="line">  &lt;p&gt;{{ myText }}&lt;/p&gt;</span>
<span class="line">  &lt;MyComponent v-model.firtToUpper=&quot;myText&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">子组件:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { computed } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const [title, modifiers] = defineModel({</span>
<span class="line">  set(value) {</span>
<span class="line">    if (modifiers.firtToUpper) {</span>
<span class="line">      return value.charAt(0).toUpperCase() + value.slice(1)</span>
<span class="line">    }</span>
<span class="line">    return value</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">const change = () =&gt; {</span>
<span class="line">  title.value = &quot;change the value&quot;</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;button @click=&quot;change&quot;&gt;修改&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">  &lt;input type=&quot;text&quot; v-model=&quot;title&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">我发现 modifiers 参数是可以自定义的，可以定义为其它的，比如我这里改为  dodo:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { computed } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const [title, dodo] = defineModel({</span>
<span class="line">  set(value) {</span>
<span class="line">    if (dodo.firtToUpper) {</span>
<span class="line">      return value.charAt(0).toUpperCase() + value.slice(1)</span>
<span class="line">    }</span>
<span class="line">    return value</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">const change = () =&gt; {</span>
<span class="line">  title.value = &quot;change the value&quot;</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;button @click=&quot;change&quot;&gt;修改&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">  &lt;input type=&quot;text&quot; v-model=&quot;title&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">6&gt; 将修改器使用到多个 v-model 属性，下面这个是官网的例子，我认为没什么用，只是做了 console 打印，我以为可以像上面一样，对数据处理，需要自己尝试</span>
<span class="line">ex:</span>
<span class="line">子组件:</span>
<span class="line">&lt;UserName</span>
<span class="line">  v-model:haha.capitalize=&quot;first&quot;</span>
<span class="line">  v-model:hehe.uppercase=&quot;last&quot;</span>
<span class="line">/&gt;</span>
<span class="line"></span>
<span class="line">父组件:</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">const [firstName, firstNameModifiers] = defineModel(&#39;haha&#39;)</span>
<span class="line">const [lastName, lastNameModifiers] = defineModel(&#39;hehe&#39;)</span>
<span class="line"></span>
<span class="line">console.log(firstNameModifiers) // { capitalize: true }</span>
<span class="line">console.log(lastNameModifiers) // { uppercase: true}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=n(i,[["render",t],["__file","关于vue3的v_model双向绑定.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/%E5%85%B3%E4%BA%8Evue3%E7%9A%84v_model%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A.html","title":"关于vue3的v_model双向绑定","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于vue3的v_model双向绑定","description":"关于vue3的v_model双向绑定"},"headers":[],"git":{},"filePathRelative":"content/front/js/关于vue3的v_model双向绑定.md"}');export{c as comp,v as data};
