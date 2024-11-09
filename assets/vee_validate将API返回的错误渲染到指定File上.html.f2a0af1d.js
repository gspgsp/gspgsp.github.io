import{_ as e,o as s,c as i,g as n}from"./app.66ae8700.js";const r={},l=n(`<p>vee_validate\u5C06API\u8FD4\u56DE\u7684\u9519\u8BEF\u6E32\u67D3\u5230\u6307\u5B9AFile\u4E0A:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u793A\u4F8B\u4EE3\u7801:
const { handleSubmit, setFieldError, setErrors } = useForm();
const onSubmit = handleSubmit(async values =&gt; {
  // Send data to the API
  const response = await client.post(&#39;/users/&#39;, values);
  // all good
  if (!response.errors) {
    return;
  }
  // set single field error, \u8FD9\u4E2A\u662F\u6211\u9700\u8981\u7684
  if (response.errors.email) {
    setFieldError(&#39;email&#39;, response.errors.email);
  }
  // set multiple errors, assuming the keys are the names of the fields
  // and the key&#39;s value is the error message\uFF0C \u8FD9\u4E2A\u8FD8\u6CA1\u8BD5\u8FC7\uFF0C\u4F46\u662F\u5E94\u8BE5\u5F88\u597D\u7528\uFF0C\u76F8\u5F53\u4E8E  laravel\u7684form\u9A8C\u8BC1\u9519\u8BEF\u6E32\u67D3\u4E86
  setErrors(response.errors);
});
  
\u53C2\u8003:https://vee-validate.logaretm.com/v4/guide/composition-api/handling-forms/ \u4E0B\u7684  Setting Errors Manually \u90E8\u5206
  
\u5F00\u59CB\u6211\u662F\u8FD9\u6837:
email.errorMessage.value = &quot;User account already exists&quot;;
\u6CA1\u6709\u751F\u6548\uFF0C\u5E94\u8BE5:
setFieldError(&quot;email&quot;, &quot;User account already exists&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[l];function d(t,v){return s(),i("div",null,a)}var c=e(r,[["render",d],["__file","vee_validate\u5C06API\u8FD4\u56DE\u7684\u9519\u8BEF\u6E32\u67D3\u5230\u6307\u5B9AFile\u4E0A.html.vue"]]);export{c as default};
