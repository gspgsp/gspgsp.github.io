import{_ as n,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function c(d,s){return l(),a("div",null,s[0]||(s[0]=[e(`<p>vue3之watch和computed方法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.computed相关</span>
<span class="line">ex1:</span>
<span class="line">const isLoggedIn = computed(() =&gt; status.value === &quot;authenticated&quot;); // 这种对于简单操作是很方便的</span>
<span class="line"></span>
<span class="line">ex2:</span>
<span class="line">const isLoggedIn = computed(() =&gt; {</span>
<span class="line">	return status.value === &quot;authenticated&quot;; // 对于复杂的逻辑操作还是通过完整的方法体处理</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">ex3:默认情况下，计算属性仅为 getter(如上面的两种使用方式，其实都是getter的简写调用方式)。如果试图为计算属性赋新值，可以通过提供一个 getter 和一个 setter 来创建计算属性：</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { ref, computed } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const firstName = ref(&#39;John&#39;)</span>
<span class="line">const lastName = ref(&#39;Doe&#39;)</span>
<span class="line"></span>
<span class="line">const fullName = computed({</span>
<span class="line">  // getter</span>
<span class="line">  get() {</span>
<span class="line">    return firstName.value + &#39; &#39; + lastName.value</span>
<span class="line">  },</span>
<span class="line">  // setter</span>
<span class="line">  set(newValue) {</span>
<span class="line">    // Note: we are using destructuring assignment syntax here.</span>
<span class="line">    [firstName.value, lastName.value] = newValue.split(&#39; &#39;)</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">现在，当运行 fullName.value = &#39;Jerry Tom&#39;时，setter 将被调用，firstName 和 lastName 也会相应更新。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">computed 返回值是一个 computed ref， s所以这里可以使用 isLoggedIn.value，还有很重要一点，computed 中使用的属性应该是 reactive(ref) 的，这个和vue2不一样，原因在于 vue3 使用了大量组合式API.</span>
<span class="line">重要的是要记住，计算型获取函数只能执行纯粹的计算，不能有任何副作用。例如，不要在计算型获取函数中更改其他状态、进行异步请求或更改 DOM！将计算属性视为声明性地描述如何根据其他值推导出一个值，它唯一的职责就是计算并返回该值.</span>
<span class="line">计算属性的返回值是派生状态。把它想象成一个临时快照--每次源状态发生变化，就会创建一个新的快照。更改快照是没有意义的，因此计算的返回值应被视为只读，绝不能更改，而应更新它所依赖的源状态，以触发新的计算.</span>
<span class="line">  </span>
<span class="line">参考: https://vuejs.org/guide/essentials/computed.html</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">2.watch相关:</span>
<span class="line">watch&#39;s first argument can be different types of reactive &quot;sources&quot;: it can be a ref (including computed refs), a reactive object, a getter function, or an array of multiple sources, 第二个参数是一个 callback.</span>
<span class="line"></span>
<span class="line">ex:</span>
<span class="line">const x = ref(0)</span>
<span class="line">const y = ref(0)</span>
<span class="line"></span>
<span class="line">// single ref</span>
<span class="line">watch(x, (newX) =&gt; {</span>
<span class="line">  console.log(\`x is \${newX}\`)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// getter</span>
<span class="line">watch(</span>
<span class="line">  () =&gt; x.value + y.value,</span>
<span class="line">  (sum) =&gt; {</span>
<span class="line">    console.log(\`sum of x + y is: \${sum}\`)</span>
<span class="line">  }</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">// array of multiple sources</span>
<span class="line">watch([x, () =&gt; y.value], ([newX, newY]) =&gt; {</span>
<span class="line">  console.log(\`x is \${newX} and y is \${newY}\`)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">实际使用例子:</span>
<span class="line">ex1:</span>
<span class="line">watch(</span>
<span class="line">  () =&gt; isAdditionalFacetsExpanded.value,</span>
<span class="line">  (newVal) =&gt; {</span>
<span class="line">    if (!newVal) {</span>
<span class="line">      clearSearch();</span>
<span class="line">      abortByKey(ABORT_CONTROLLER_KEY);</span>
<span class="line">    } else {</span>
<span class="line">      loadData(); // 可以异步请求数据</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">);</span>
<span class="line"></span>
<span class="line">ex2:</span>
<span class="line">watch(</span>
<span class="line">  () =&gt; route.path,</span>
<span class="line">  () =&gt; {</span>
<span class="line">    headerNav.setMobileDrawerVisibility(false); // 修改 pinia 中的状态</span>
<span class="line">  }</span>
<span class="line">);</span>
<span class="line"></span>
<span class="line">ex3:</span>
<span class="line"> watch(</span>
<span class="line">    () =&gt; isMetricsError.value,</span>
<span class="line">    () =&gt; {</span>
<span class="line">      error.value = isMetricsError.value;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      immediate: true,</span>
<span class="line">    }</span>
<span class="line">);</span>
<span class="line"></span>
<span class="line">ex4:</span>
<span class="line">watch(</span>
<span class="line">  source,</span>
<span class="line">  (newValue, oldValue) =&gt; {</span>
<span class="line">    // when \`source\` changes, triggers only once</span>
<span class="line">  },</span>
<span class="line">  { once: true }</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">watch 默认是 &quot;懒惰 &quot;的：在被监视源发生变化之前不会调用回调。但在某些情况下，我们可能希望紧急运行相同的回调逻辑，例如，我们可能希望获取一些初始数据，然后在相关状态发生变化时重新获取数据. 我们可以通过传递 immediate: true 选项来强制立即执行观察者的回调.</span>
<span class="line">watch 默认只要被监视源发生变化，监视器的回调就会执行。如果希望回调只在源更改时触发一次，请使用 once: true 选项.</span>
<span class="line">  </span>
<span class="line">参考: https://vuejs.org/guide/essentials/watchers.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const v=n(i,[["render",c],["__file","vue3之watch和computed方法.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/vue3%E4%B9%8Bwatch%E5%92%8Ccomputed%E6%96%B9%E6%B3%95.html","title":"vue3之watch和computed方法","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3之watch和computed方法","description":"vue3之watch和computed方法"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3之watch和computed方法.md"}');export{v as comp,r as data};
