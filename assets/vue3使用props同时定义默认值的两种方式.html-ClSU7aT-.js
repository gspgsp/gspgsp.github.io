import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>vue3使用props同时定义默认值的两种方式:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;通过definePropsWithDefaults</span>
<span class="line">const props = definePropsWithDefaults&lt;{</span>
<span class="line">  cancelText?: string;</span>
<span class="line">  submitText?: string;</span>
<span class="line">  isSubmitLoading?: boolean;</span>
<span class="line">  disabled?: boolean;</span>
<span class="line">}&gt;({</span>
<span class="line">  cancelText: &quot;Cancel&quot;,</span>
<span class="line">  submitText: &quot;Submit&quot;,</span>
<span class="line">});</span>
<span class="line">  </span>
<span class="line">2&gt;解构前为属性添加默认值</span>
<span class="line">const {</span>
<span class="line">  isFirstStep = false,</span>
<span class="line">  isLastStep = false,</span>
<span class="line">  isAllRegistrationSaved = false,</span>
<span class="line">} = defineProps&lt;{</span>
<span class="line">  isFirstStep?: boolean,</span>
<span class="line">  isLastStep?: boolean,</span>
<span class="line">  isAllRegistrationSaved?: boolean,</span>
<span class="line">}&gt;();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",t],["__file","vue3使用props同时定义默认值的两种方式.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/vue3%E4%BD%BF%E7%94%A8props%E5%90%8C%E6%97%B6%E5%AE%9A%E4%B9%89%E9%BB%98%E8%AE%A4%E5%80%BC%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"vue3使用props同时定义默认值的两种方式","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3使用props同时定义默认值的两种方式","description":"vue3使用props同时定义默认值的两种方式"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3使用props同时定义默认值的两种方式.md"}');export{d as comp,r as data};
