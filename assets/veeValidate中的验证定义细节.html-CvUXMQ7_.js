import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function d(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>vee-validate中的验证定义细节:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">discountName: string().required(), //这个required没加额外信息，默认就是，验证提示就是 discountName is a required field</span>
<span class="line">discountName: string().required(&quot;ha ha&quot;), // 这个required加了提示信息，验证提示就是 ha ha, 这会覆盖默认的msg，即使加了label也会被覆盖，discountName: string().required(&quot;ha ha&quot;).label(&quot;name&quot;), 最后还是 ha ha.</span>
<span class="line">discountName: string().required().label(&quot;name&quot;), //这个required没加额外信息，但是加了label信息，验证提示就是 name is a required field</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其它验证细节:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//yup条件验证 when的使用</span>
<span class="line">1.单条件</span>
<span class="line">vatCountries: array().when(&quot;displayPaymentMethods&quot;, {</span>
<span class="line">          is: true,</span>
<span class="line">          then: schema =&gt; schema.test(</span>
<span class="line">              &quot;at-least-one-vat-country&quot;,</span>
<span class="line">              verifyHint.fieldRequired,</span>
<span class="line">              (value) =&gt; value.length &gt; 0,</span>
<span class="line">            ),</span>
<span class="line">          otherwise: schema =&gt; schema.notRequired(),</span>
<span class="line">        }),</span>
<span class="line">vat: number().when(&quot;displayPaymentMethods&quot;, {</span>
<span class="line">  is: true,</span>
<span class="line">  then: schema =&gt; schema.required(verifyHint.fieldRequired),</span>
<span class="line">  otherwise: schema =&gt; schema.notRequired(),</span>
<span class="line">}),</span>
<span class="line"></span>
<span class="line">2.多条件(同时满足，需要解构)</span>
<span class="line">invoiceReceiverInformation: string().when(</span>
<span class="line">  [&quot;displayPaymentMethods&quot;, &quot;isWireTransfer&quot;],</span>
<span class="line">  {</span>
<span class="line">    is: ([displayPaymentMethods, isWireTransfer]) =&gt; displayPaymentMethods &amp;&amp; isWireTransfer,</span>
<span class="line">    then: (schema) =&gt; schema.required(verifyHint.fieldRequired),</span>
<span class="line">    otherwise: (schema) =&gt; schema.notRequired(),</span>
<span class="line">  }</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">多条件(任意一个满足，下面这个只是一个特例，其实最好不要这么用)</span>
<span class="line">invoiceReceiverInformation: string().when(</span>
<span class="line">  [&quot;displayPaymentMethods&quot;, &quot;isWireTransfer&quot;],</span>
<span class="line">  {</span>
<span class="line">    is: true,</span>
<span class="line">    then: (schema) =&gt; schema.required(verifyHint.fieldRequired),</span>
<span class="line">    otherwise: (schema) =&gt; schema.notRequired(),</span>
<span class="line">  }</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">3.使用字符串</span>
<span class="line">paymentMethod: string().when(&quot;paymentType&quot;, {</span>
<span class="line">  is: &quot;credit_card&quot;,</span>
<span class="line">  then: (schema) =&gt; schema.required(&quot;Credit card details are required&quot;),</span>
<span class="line">  otherwise: (schema) =&gt; schema.notRequired(),</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">或者</span>
<span class="line">someField: string().when(&quot;otherField&quot;, {</span>
<span class="line">  is: value =&gt; {</span>
<span class="line">    console.log(value); // 需要打印值</span>
<span class="line">    return value === &quot;someValue&quot;; // 需要 return</span>
<span class="line">  },</span>
<span class="line">  then: schema =&gt; schema.required(&quot;Required&quot;),</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">源码:</span>
<span class="line">type ConditionConfig&lt;T extends ISchema&lt;any&gt;&gt; = {</span>
<span class="line">    is: any | ((...values: any[]) =&gt; boolean);</span>
<span class="line">    then?: (schema: T) =&gt; ISchema&lt;any&gt;;</span>
<span class="line">    otherwise?: (schema: T) =&gt; ISchema&lt;any&gt;;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">可以知道 is 字段支持两种类型：</span>
<span class="line">直接传入值（例如 true、false、字符串等）</span>
<span class="line">传入一个函数（可接收多个 values 并返回 boolean）</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//数组验证</span>
<span class="line">vee-validate 提供了 useFieldArray 这个 API，专门用于处理 数组类型的表单字段，比如 动态添加或删除输入项。</span>
<span class="line"></span>
<span class="line">使用示例:</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { useFieldArray } from &quot;vee-validate&quot;;</span>
<span class="line"></span>
<span class="line">const { fields: reminders, push, remove } = useFieldArray&lt;{ message: string }&gt;(&quot;reminders&quot;);</span>
<span class="line"></span>
<span class="line">// 添加一项</span>
<span class="line">const addReminder = () =&gt; {</span>
<span class="line">  push({ message: &quot;&quot; });</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 删除一项</span>
<span class="line">const deleteReminder = (index: number) =&gt; {</span>
<span class="line">  remove(index);</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div v-for=&quot;(reminder, index) in reminders&quot; :key=&quot;reminder.key&quot;&gt;</span>
<span class="line">    &lt;input v-model=&quot;reminder.value.message&quot; placeholder=&quot;Enter reminder&quot; /&gt;</span>
<span class="line">    &lt;button @click=&quot;deleteReminder(index)&quot;&gt;Delete&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;button @click=&quot;addReminder&quot;&gt;Add Reminder&lt;/button&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">实际使用示例(单独定义验证层):</span>
<span class="line">const {</span>
<span class="line">  fields: reminders,</span>
<span class="line">  push,</span>
<span class="line">  remove,</span>
<span class="line">  replace,</span>
<span class="line">} = useFieldArray&lt;RegistrationPaymentsReminder&gt;(&quot;reminders&quot;);</span>
<span class="line"></span>
<span class="line">代码分析:</span>
<span class="line">reminders 绑定到 表单字段 reminders（即数组）</span>
<span class="line">push(item) 新增一项</span>
<span class="line">remove(index) 删除某一项</span>
<span class="line">replace(newArray) 替换整个数组</span>
<span class="line"></span>
<span class="line">useFieldArray 核心特点</span>
<span class="line">fields 是一个响应式数组，每个项都有 key 和 value：</span>
<span class="line">{ key: Symbol(), value: { message: &quot;&quot; } }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">还有个问题，如果有多个 useFieldArray 需要区分push这些,可以按照下面几种方式定义：</span>
<span class="line">1.分别定义多个useFieldArray, 给 push remove 等操作取名字， 上面的其实使用的默认名称 push remove 等， 适用于逻辑不同的</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { useFieldArray } from &quot;vee-validate&quot;;</span>
<span class="line"></span>
<span class="line">// 处理 reminders</span>
<span class="line">const { fields: reminders, push: pushReminder, remove: removeReminder } =</span>
<span class="line">  useFieldArray&lt;{ message: string }&gt;(&quot;reminders&quot;);</span>
<span class="line"></span>
<span class="line">// 处理 notifications</span>
<span class="line">const { fields: notifications, push: pushNotification, remove: removeNotification } =</span>
<span class="line">  useFieldArray&lt;{ title: string }&gt;(&quot;notifications&quot;);</span>
<span class="line"></span>
<span class="line">// 添加 reminder</span>
<span class="line">const addReminder = () =&gt; {</span>
<span class="line">  pushReminder({ message: &quot;&quot; });</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 添加 notification</span>
<span class="line">const addNotification = () =&gt; {</span>
<span class="line">  pushNotification({ title: &quot;&quot; });</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 删除 reminder</span>
<span class="line">const deleteReminder = (index: number) =&gt; {</span>
<span class="line">  removeReminder(index);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 删除 notification</span>
<span class="line">const deleteNotification = (index: number) =&gt; {</span>
<span class="line">  removeNotification(index);</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;h3&gt;Reminders&lt;/h3&gt;</span>
<span class="line">    &lt;div v-for=&quot;(reminder, index) in reminders&quot; :key=&quot;reminder.key&quot;&gt;</span>
<span class="line">      &lt;input v-model=&quot;reminder.value.message&quot; placeholder=&quot;Reminder&quot; /&gt;</span>
<span class="line">      &lt;button @click=&quot;deleteReminder(index)&quot;&gt;Delete&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;button @click=&quot;addReminder&quot;&gt;Add Reminder&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;h3&gt;Notifications&lt;/h3&gt;</span>
<span class="line">    &lt;div v-for=&quot;(notification, index) in notifications&quot; :key=&quot;notification.key&quot;&gt;</span>
<span class="line">      &lt;input v-model=&quot;notification.value.title&quot; placeholder=&quot;Notification&quot; /&gt;</span>
<span class="line">      &lt;button @click=&quot;deleteNotification(index)&quot;&gt;Delete&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;button @click=&quot;addNotification&quot;&gt;Add Notification&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">2.集中定义，适用于逻辑类似的</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { useFieldArray } from &quot;vee-validate&quot;;</span>
<span class="line"></span>
<span class="line">const fieldArrays = {</span>
<span class="line">  reminders: useFieldArray&lt;{ message: string }&gt;(&quot;reminders&quot;),</span>
<span class="line">  notifications: useFieldArray&lt;{ title: string }&gt;(&quot;notifications&quot;),</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 添加项</span>
<span class="line">const addItem = (fieldName: keyof typeof fieldArrays, item: any) =&gt; {</span>
<span class="line">  fieldArrays[fieldName].push(item);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 删除项</span>
<span class="line">const removeItem = (fieldName: keyof typeof fieldArrays, index: number) =&gt; {</span>
<span class="line">  fieldArrays[fieldName].remove(index);</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;h3&gt;Reminders&lt;/h3&gt;</span>
<span class="line">    &lt;div v-for=&quot;(reminder, index) in fieldArrays.reminders.fields&quot; :key=&quot;reminder.key&quot;&gt;</span>
<span class="line">      &lt;input v-model=&quot;reminder.value.message&quot; placeholder=&quot;Reminder&quot; /&gt;</span>
<span class="line">      &lt;button @click=&quot;removeItem(&#39;reminders&#39;, index)&quot;&gt;Delete&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;button @click=&quot;addItem(&#39;reminders&#39;, { message: &#39;&#39; })&quot;&gt;Add Reminder&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;h3&gt;Notifications&lt;/h3&gt;</span>
<span class="line">    &lt;div v-for=&quot;(notification, index) in fieldArrays.notifications.fields&quot; :key=&quot;notification.key&quot;&gt;</span>
<span class="line">      &lt;input v-model=&quot;notification.value.title&quot; placeholder=&quot;Notification&quot; /&gt;</span>
<span class="line">      &lt;button @click=&quot;removeItem(&#39;notifications&#39;, index)&quot;&gt;Delete&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;button @click=&quot;addItem(&#39;notifications&#39;, { title: &#39;&#39; })&quot;&gt;Add Notification&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const v=s(l,[["render",d],["__file","veeValidate中的验证定义细节.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/veeValidate%E4%B8%AD%E7%9A%84%E9%AA%8C%E8%AF%81%E5%AE%9A%E4%B9%89%E7%BB%86%E8%8A%82.html","title":"veeValidate中的验证定义细节","lang":"en-US","frontmatter":{"sidebar":false,"title":"veeValidate中的验证定义细节","head":[["meta",{"name":"title","content":"veeValidate中的验证定义细节"}],["meta",{"name":"description","content":"veeValidate中的验证定义细节"}],["meta",{"name":"keywords","content":"vee-validate,vue3,vee"}],["meta",{"property":"og:title","content":"veeValidate中的验证定义细节"}],["meta",{"property":"og:description","content":"veeValidate中的验证定义细节"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/veeValidate中的验证定义细节.md"}');export{v as comp,r as data};
