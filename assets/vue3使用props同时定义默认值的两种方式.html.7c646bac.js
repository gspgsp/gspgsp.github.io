import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>vue3\u4F7F\u7528props\u540C\u65F6\u5B9A\u4E49\u9ED8\u8BA4\u503C\u7684\u4E24\u79CD\u65B9\u5F0F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u901A\u8FC7definePropsWithDefaults
const props = definePropsWithDefaults&lt;{
  cancelText?: string;
  submitText?: string;
  isSubmitLoading?: boolean;
  disabled?: boolean;
}&gt;({
  cancelText: &quot;Cancel&quot;,
  submitText: &quot;Submit&quot;,
});
  
2&gt;\u89E3\u6784\u524D\u4E3A\u5C5E\u6027\u6DFB\u52A0\u9ED8\u8BA4\u503C
const {
  isFirstStep = false,
  isLastStep = false,
  isAllRegistrationSaved = false,
} = defineProps&lt;{
  isFirstStep?: boolean,
  isLastStep?: boolean,
  isAllRegistrationSaved?: boolean,
}&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function a(v,r){return i(),n("div",null,t)}var o=e(l,[["render",a],["__file","vue3\u4F7F\u7528props\u540C\u65F6\u5B9A\u4E49\u9ED8\u8BA4\u503C\u7684\u4E24\u79CD\u65B9\u5F0F.html.vue"]]);export{o as default};
