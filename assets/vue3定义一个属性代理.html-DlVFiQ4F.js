import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h5 id="vue3定义一个属性代理" tabindex="-1"><a class="header-anchor" href="#vue3定义一个属性代理"><span>vue3定义一个属性代理</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">有如下定义:</span>
<span class="line">type ContributionType = {</span>
<span class="line">  id: number;</span>
<span class="line">  name: string;</span>
<span class="line">  isChecked: boolean;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export class FakeContributionType {</span>
<span class="line">  readonly id: number;</span>
<span class="line">  readonly name: string;</span>
<span class="line">  readonly binding: {</span>
<span class="line">    get: () =&gt; boolean;</span>
<span class="line">    set: (value: boolean) =&gt; void;</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  constructor({</span>
<span class="line">    id,</span>
<span class="line">    name,</span>
<span class="line">    binding,</span>
<span class="line">  }: Omit&lt;ContributionType, &quot;isChecked&quot;&gt; &amp; {</span>
<span class="line">    binding: {</span>
<span class="line">      get: () =&gt; boolean;</span>
<span class="line">      set: (value: boolean) =&gt; void;</span>
<span class="line">    };</span>
<span class="line">  }) {</span>
<span class="line">    this.id = id;</span>
<span class="line">    this.name = name;</span>
<span class="line">    this.binding = binding;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  get isChecked() {</span>
<span class="line">    return this.binding.get();</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  set isChecked(value: boolean) {</span>
<span class="line">    this.binding.set(value);</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">例子:</span>
<span class="line">const checkboxBinding = {</span>
<span class="line">  get: () =&gt; someReactiveStore[id],</span>
<span class="line">  set: (val: boolean) =&gt; (someReactiveStore[id] = val),</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const item = new FakeContributionType({</span>
<span class="line">  id: 1,</span>
<span class="line">  name: &quot;Contributor&quot;,</span>
<span class="line">  binding: checkboxBinding,</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">console.log(item.isChecked); // 实际调用 checkboxBinding.get()</span>
<span class="line">item.isChecked = true;       // 实际调用 checkboxBinding.set(true)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">这个类的作用：</span>
<span class="line">解耦：让 isChecked 不直接依赖原始模型，而是通过传入的 binding 控制；</span>
<span class="line">灵活：可以连接到任意状态管理（如 Vue 的 ref、React 的 useState 等）；</span>
<span class="line">结构清晰：使用 getter/setter 显得像普通属性，但内部实际上是绑定逻辑</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">实际使用:</span>
<span class="line">//test.vue</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">definePageMeta({</span>
<span class="line">  middleware: [&quot;authentication&quot;, &quot;dashboard&quot;],</span>
<span class="line">  permission: &quot;event_overview_access&quot;,</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">const checkboxStatus = ref(true);</span>
<span class="line"></span>
<span class="line">const fakeStatus = new FakeContributionType({</span>
<span class="line">  id: -1,</span>
<span class="line">  name: &quot;Oral&quot;,</span>
<span class="line">  binding: {</span>
<span class="line">    get: () =&gt; checkboxStatus.value,</span>
<span class="line">    set: (value: boolean) =&gt; {</span>
<span class="line">      checkboxStatus.value = value;</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// 注意不要使用 click 事件，因为 click不能在数据修改之后触发，而是在数据修改前触发</span>
<span class="line">const change = () =&gt; {</span>
<span class="line">  console.log(&quot;fakeStatus.value is:&quot;, fakeStatus.isChecked);</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;Event Overview&lt;/div&gt;</span>
<span class="line">  &lt;input type=&quot;checkbox&quot; v-model=&quot;fakeStatus.isChecked&quot; @change=&quot;change&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">将 fakeStatus 的 isChecked 属性 代理到了 checkboxStatus.value 上。</span>
<span class="line">所以当访问：</span>
<span class="line">fakeStatus.isChecked</span>
<span class="line">它实际上等价于：</span>
<span class="line">checkboxStatus.value</span>
<span class="line"></span>
<span class="line">同样，当赋值：</span>
<span class="line">fakeStatus.isChecked = true</span>
<span class="line">它会触发：</span>
<span class="line">checkboxStatus.value = true</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">更复杂的逻辑</span>
<span class="line">//test.vue</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">const age = ref(17);</span>
<span class="line">const agreed = ref(false);</span>
<span class="line"></span>
<span class="line">const isEligible = new FakeContributionType({</span>
<span class="line">  id: -6,</span>
<span class="line">  name: &quot;Eligibility&quot;,</span>
<span class="line">  binding: {</span>
<span class="line">    get: () =&gt; agreed.value &amp;&amp; age.value &gt;= 18,</span>
<span class="line">    set: (value: boolean) =&gt; {</span>
<span class="line">      if (!value) {</span>
<span class="line">        agreed.value = false;</span>
<span class="line">      } else {</span>
<span class="line">        if (age.value &gt;= 18) {</span>
<span class="line">          agreed.value = true;</span>
<span class="line">        } else {</span>
<span class="line">          alert(&quot;You must be at least 18 to agree.&quot;);</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">const click = () =&gt; {</span>
<span class="line">  isEligible.isChecked = true;// 会触发 You must be at least 18 to agree.</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;Event Overview&lt;/div&gt;</span>
<span class="line">  &lt;button @click=&quot;click&quot;&gt;修改&lt;/button&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",c],["__file","vue3定义一个属性代理.html.vue"]]),t=JSON.parse('{"path":"/content/front/js/vue3%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA%E5%B1%9E%E6%80%A7%E4%BB%A3%E7%90%86.html","title":"vue3定义一个属性代理","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3定义一个属性代理","head":[["meta"],{"name":"title","content":"vue3定义一个属性代理"},["meta"],{"name":"description","content":"vue3定义一个属性代理"},["meta"],{"name":"keywords","content":"vue3"},["meta"],{"property":"og:title","content":"vue3定义一个属性代理"},["meta"],{"property":"og:description","content":"vue3定义一个属性代理"}]},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3定义一个属性代理.md"}');export{p as comp,t as data};
