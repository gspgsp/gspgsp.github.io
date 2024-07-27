import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<p>vue3\u4E4Bwatch\u548Ccomputed\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.computed\u76F8\u5173
ex1:
const isLoggedIn = computed(() =&gt; status.value === &quot;authenticated&quot;); // \u8FD9\u79CD\u5BF9\u4E8E\u7B80\u5355\u64CD\u4F5C\u662F\u5F88\u65B9\u4FBF\u7684

ex2:
const isLoggedIn = computed(() =&gt; {
	return status.value === &quot;authenticated&quot;; // \u5BF9\u4E8E\u590D\u6742\u7684\u903B\u8F91\u64CD\u4F5C\u8FD8\u662F\u901A\u8FC7\u5B8C\u6574\u7684\u65B9\u6CD5\u4F53\u5904\u7406
});

ex3:\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BA1\u7B97\u5C5E\u6027\u4EC5\u4E3A getter(\u5982\u4E0A\u9762\u7684\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5176\u5B9E\u90FD\u662Fgetter\u7684\u7B80\u5199\u8C03\u7528\u65B9\u5F0F)\u3002\u5982\u679C\u8BD5\u56FE\u4E3A\u8BA1\u7B97\u5C5E\u6027\u8D4B\u65B0\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D0\u4F9B\u4E00\u4E2A getter \u548C\u4E00\u4E2A setter \u6765\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\uFF1A
&lt;script setup&gt;
import { ref, computed } from &#39;vue&#39;

const firstName = ref(&#39;John&#39;)
const lastName = ref(&#39;Doe&#39;)

const fullName = computed({
  // getter
  get() {
    return firstName.value + &#39; &#39; + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(&#39; &#39;)
  }
})
&lt;/script&gt;

\u73B0\u5728\uFF0C\u5F53\u8FD0\u884C fullName.value = &#39;Jerry Tom&#39;\u65F6\uFF0Csetter \u5C06\u88AB\u8C03\u7528\uFF0CfirstName \u548C lastName \u4E5F\u4F1A\u76F8\u5E94\u66F4\u65B0\u3002


computed \u8FD4\u56DE\u503C\u662F\u4E00\u4E2A computed ref\uFF0C s\u6240\u4EE5\u8FD9\u91CC\u53EF\u4EE5\u4F7F\u7528 isLoggedIn.value\uFF0C\u8FD8\u6709\u5F88\u91CD\u8981\u4E00\u70B9\uFF0Ccomputed \u4E2D\u4F7F\u7528\u7684\u5C5E\u6027\u5E94\u8BE5\u662F reactive(ref) \u7684\uFF0C\u8FD9\u4E2A\u548Cvue2\u4E0D\u4E00\u6837\uFF0C\u539F\u56E0\u5728\u4E8E vue3 \u4F7F\u7528\u4E86\u5927\u91CF\u7EC4\u5408\u5F0FAPI.
\u91CD\u8981\u7684\u662F\u8981\u8BB0\u4F4F\uFF0C\u8BA1\u7B97\u578B\u83B7\u53D6\u51FD\u6570\u53EA\u80FD\u6267\u884C\u7EAF\u7CB9\u7684\u8BA1\u7B97\uFF0C\u4E0D\u80FD\u6709\u4EFB\u4F55\u526F\u4F5C\u7528\u3002\u4F8B\u5982\uFF0C\u4E0D\u8981\u5728\u8BA1\u7B97\u578B\u83B7\u53D6\u51FD\u6570\u4E2D\u66F4\u6539\u5176\u4ED6\u72B6\u6001\u3001\u8FDB\u884C\u5F02\u6B65\u8BF7\u6C42\u6216\u66F4\u6539 DOM\uFF01\u5C06\u8BA1\u7B97\u5C5E\u6027\u89C6\u4E3A\u58F0\u660E\u6027\u5730\u63CF\u8FF0\u5982\u4F55\u6839\u636E\u5176\u4ED6\u503C\u63A8\u5BFC\u51FA\u4E00\u4E2A\u503C\uFF0C\u5B83\u552F\u4E00\u7684\u804C\u8D23\u5C31\u662F\u8BA1\u7B97\u5E76\u8FD4\u56DE\u8BE5\u503C.
\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD4\u56DE\u503C\u662F\u6D3E\u751F\u72B6\u6001\u3002\u628A\u5B83\u60F3\u8C61\u6210\u4E00\u4E2A\u4E34\u65F6\u5FEB\u7167--\u6BCF\u6B21\u6E90\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5FEB\u7167\u3002\u66F4\u6539\u5FEB\u7167\u662F\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u56E0\u6B64\u8BA1\u7B97\u7684\u8FD4\u56DE\u503C\u5E94\u88AB\u89C6\u4E3A\u53EA\u8BFB\uFF0C\u7EDD\u4E0D\u80FD\u66F4\u6539\uFF0C\u800C\u5E94\u66F4\u65B0\u5B83\u6240\u4F9D\u8D56\u7684\u6E90\u72B6\u6001\uFF0C\u4EE5\u89E6\u53D1\u65B0\u7684\u8BA1\u7B97.
  
\u53C2\u8003: https://vuejs.org/guide/essentials/computed.html
  
  
2.watch\u76F8\u5173:
watch&#39;s first argument can be different types of reactive &quot;sources&quot;: it can be a ref (including computed refs), a reactive object, a getter function, or an array of multiple sources, \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A callback.

ex:
const x = ref(0)
const y = ref(0)

// single ref
watch(x, (newX) =&gt; {
  console.log(\`x is \${newX}\`)
})

// getter
watch(
  () =&gt; x.value + y.value,
  (sum) =&gt; {
    console.log(\`sum of x + y is: \${sum}\`)
  }
)

// array of multiple sources
watch([x, () =&gt; y.value], ([newX, newY]) =&gt; {
  console.log(\`x is \${newX} and y is \${newY}\`)
})


\u5B9E\u9645\u4F7F\u7528\u4F8B\u5B50:
ex1:
watch(
  () =&gt; isAdditionalFacetsExpanded.value,
  (newVal) =&gt; {
    if (!newVal) {
      clearSearch();
      abortByKey(ABORT_CONTROLLER_KEY);
    } else {
      loadData(); // \u53EF\u4EE5\u5F02\u6B65\u8BF7\u6C42\u6570\u636E
    }
  }
);

ex2:
watch(
  () =&gt; route.path,
  () =&gt; {
    headerNav.setMobileDrawerVisibility(false); // \u4FEE\u6539 pinia \u4E2D\u7684\u72B6\u6001
  }
);

ex3:
 watch(
    () =&gt; isMetricsError.value,
    () =&gt; {
      error.value = isMetricsError.value;
    },
    {
      immediate: true,
    }
);

ex4:
watch(
  source,
  (newValue, oldValue) =&gt; {
    // when \`source\` changes, triggers only once
  },
  { once: true }
)

watch \u9ED8\u8BA4\u662F &quot;\u61D2\u60F0 &quot;\u7684\uFF1A\u5728\u88AB\u76D1\u89C6\u6E90\u53D1\u751F\u53D8\u5316\u4E4B\u524D\u4E0D\u4F1A\u8C03\u7528\u56DE\u8C03\u3002\u4F46\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u5E0C\u671B\u7D27\u6025\u8FD0\u884C\u76F8\u540C\u7684\u56DE\u8C03\u903B\u8F91\uFF0C\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u80FD\u5E0C\u671B\u83B7\u53D6\u4E00\u4E9B\u521D\u59CB\u6570\u636E\uFF0C\u7136\u540E\u5728\u76F8\u5173\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u91CD\u65B0\u83B7\u53D6\u6570\u636E. \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012 immediate: true \u9009\u9879\u6765\u5F3A\u5236\u7ACB\u5373\u6267\u884C\u89C2\u5BDF\u8005\u7684\u56DE\u8C03.
watch \u9ED8\u8BA4\u53EA\u8981\u88AB\u76D1\u89C6\u6E90\u53D1\u751F\u53D8\u5316\uFF0C\u76D1\u89C6\u5668\u7684\u56DE\u8C03\u5C31\u4F1A\u6267\u884C\u3002\u5982\u679C\u5E0C\u671B\u56DE\u8C03\u53EA\u5728\u6E90\u66F4\u6539\u65F6\u89E6\u53D1\u4E00\u6B21\uFF0C\u8BF7\u4F7F\u7528 once: true \u9009\u9879.
  
\u53C2\u8003: https://vuejs.org/guide/essentials/watchers.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,u){return n(),i("div",null,v)}var t=e(l,[["render",a],["__file","vue3\u4E4Bwatch\u548Ccomputed\u65B9\u6CD5.html.vue"]]);export{t as default};
