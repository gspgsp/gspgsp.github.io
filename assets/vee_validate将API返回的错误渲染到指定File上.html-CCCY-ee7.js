import{_ as s,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function r(t,e){return i(),n("div",null,e[0]||(e[0]=[a(`<p>vee_validate将API返回的错误渲染到指定File上:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">示例代码:</span>
<span class="line">const { handleSubmit, setFieldError, setErrors } = useForm();</span>
<span class="line">const onSubmit = handleSubmit(async values =&gt; {</span>
<span class="line">  // Send data to the API</span>
<span class="line">  const response = await client.post(&#39;/users/&#39;, values);</span>
<span class="line">  // all good</span>
<span class="line">  if (!response.errors) {</span>
<span class="line">    return;</span>
<span class="line">  }</span>
<span class="line">  // set single field error, 这个是我需要的</span>
<span class="line">  if (response.errors.email) {</span>
<span class="line">    setFieldError(&#39;email&#39;, response.errors.email);</span>
<span class="line">  }</span>
<span class="line">  // set multiple errors, assuming the keys are the names of the fields</span>
<span class="line">  // and the key&#39;s value is the error message， 这个还没试过，但是应该很好用，相当于  laravel的form验证错误渲染了</span>
<span class="line">  setErrors(response.errors);</span>
<span class="line">});</span>
<span class="line">  </span>
<span class="line">参考:https://vee-validate.logaretm.com/v4/guide/composition-api/handling-forms/ 下的  Setting Errors Manually 部分</span>
<span class="line">  </span>
<span class="line">开始我是这样:</span>
<span class="line">email.errorMessage.value = &quot;User account already exists&quot;;</span>
<span class="line">没有生效，应该:</span>
<span class="line">setFieldError(&quot;email&quot;, &quot;User account already exists&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(l,[["render",r],["__file","vee_validate将API返回的错误渲染到指定File上.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/vee_validate%E5%B0%86API%E8%BF%94%E5%9B%9E%E7%9A%84%E9%94%99%E8%AF%AF%E6%B8%B2%E6%9F%93%E5%88%B0%E6%8C%87%E5%AE%9AFile%E4%B8%8A.html","title":"vee_validate将API返回的错误渲染到指定File上","lang":"en-US","frontmatter":{"sidebar":false,"title":"vee_validate将API返回的错误渲染到指定File上","description":"vee_validate将API返回的错误渲染到指定File上"},"headers":[],"git":{},"filePathRelative":"content/front/js/vee_validate将API返回的错误渲染到指定File上.md"}');export{c as comp,v as data};
