import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>vue3\u901A\u8FC7ts\u8BED\u6CD5\u4F7F\u7528\u7EC4\u5408\u5F0FAPI\u5B9A\u4E49props\u7684\u65F6\u5019,\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7684\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export interface Props {
  msg: string
  labels: string[]
}

const props = withDefaults(defineProps&lt;Props&gt;(), {
  msg: &#39;hello&#39;, //\u7B80\u5355\u7C7B\u578B\u76F4\u63A5\u8D4B\u503C
  labels: () =&gt; [&#39;one&#39;, &#39;two&#39;] //\u7531\u4E8E\u662F\u6570\u7EC4\uFF0C\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u8FD9\u6837\u8D4B\u503C\uFF0C \u4E5F\u53EF\u4EE5\u901A\u8FC7\u533F\u540D\u51FD\u6570\u8FD4\u56DE [&#39;one&#39;, &#39;two&#39;]
})

//\u5148\u5B9A\u4E49MessageObj.ts
export interface MessageObj{
    variant: string,
    message: string
}

//\u4F7F\u7528
interface MyComponentProps {
  modelValue: boolean;
  toastObj: MessageObj;
  timeOut: number;
}

const props = withDefaults(defineProps&lt;MyComponentProps&gt;(), {
  timeOut: 1500,//\u7B80\u5355\u7C7B\u578B\u76F4\u63A5\u8D4B\u503C
  modelValue: false,//\u7B80\u5355\u7C7B\u578B\u76F4\u63A5\u8D4B\u503C
  toastObj: () =&gt; { // \u8FD9\u91CC\u9700\u8981\u901A\u8FC7\u533F\u540D\u51FD\u6570\u7684\u5F62\u5F0F\u8FD4\u56DE\u6570\u636E
    return {
      variant: &#39;accent&#39;,
      message: &#39;\u8BF7\u6C42\u6210\u529F&#39;
    }
  }
});


//\u9519\u8BEF\u4F7F\u7528\u4EE3\u7801
const props = withDefaults(defineProps&lt;MyComponentProps&gt;(), {
  timeOut: 1500,//\u7B80\u5355\u7C7B\u578B\u76F4\u63A5\u8D4B\u503C
  modelValue: false,//\u7B80\u5355\u7C7B\u578B\u76F4\u63A5\u8D4B\u503C
  toastObj: { // \u8FD9\u6837\u662F\u9519\u8BEF\u7528\u6CD5\uFF0C\u6211\u5F00\u59CB\u4E00\u76F4\u60F3\u8FD9\u4E48\u7528\uFF0C\u4F46\u662F\u4E00\u76F4\u62A5\u9519\uFF0C\u540E\u6765\u901A\u8FC7\u5B98\u7F51\u624D\u627E\u5230\u89E3\u51B3\u529E\u6CD5\uFF0C\u56E0\u4E3A defineProps \u8FD4\u56DE\u7684\u662F\u4E00\u4E2Areadonly\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\uFF0C\u5BF9\u4E8E\u590D\u6742\u7C7B\u578B\uFF0C\u4E0D\u80FD\u8FD9\u4E48\u7528\uFF0C\u4F46\u662F\u666E\u901A\u6570\u636E\u7C7B\u578B\u662F\u53EF\u4EE5\u7684
      variant: &#39;accent&#39;,
      message: &#39;\u8BF7\u6C42\u6210\u529F&#39;
    }
});

  
\u603B\u7ED3\u5C31\u662F:\u666E\u901A\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8D4B\u503C\uFF0C\u6BD4\u5982 bool string \u7B49\uFF0C\u5BF9\u4E8E\u590D\u6742\u7C7B\u578B\u9700\u8981\u901A\u8FC7\u533F\u540D\u51FD\u6570\u8FD4\u56DE\uFF0C\u4F46\u662F\u6240\u6709\u7684\u7C7B\u578B\u90FD\u662F\u53EF\u4EE5\u901A\u8FC7\u533F\u540D\u51FD\u6570\u8FD4\u56DE\u6570\u636E\u7684.
  
\u5B8C\u6574\u89E3\u91CA:
\u5728\u8FD9\u91CC\uFF0CdefineProps&lt;MyComponentProps&gt;() \u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E86\u4F60\u5B9A\u4E49\u7684\u7EC4\u4EF6\u5C5E\u6027\u7684\u53EA\u8BFB\u5C5E\u6027\u5BF9\u8C61\u3002\u7136\u540E\uFF0CwithDefaults \u51FD\u6570\u88AB\u7528\u6765\u4E3A\u8FD9\u4E9B\u5C5E\u6027\u63D0\u4F9B\u9ED8\u8BA4\u503C\u3002

\u5173\u4E8E timeOut \u548C modelValue\uFF0C\u5B83\u4EEC\u7684\u9ED8\u8BA4\u503C\u88AB\u8BBE\u7F6E\u4E3A\u7B80\u5355\u7C7B\u578B\uFF081500 \u548C false\uFF09\uFF0C\u8FD9\u662F\u56E0\u4E3A\u8FD9\u4E9B\u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u800C\u4E0D\u4F1A\u89E6\u53D1 TypeScript \u7684\u53EA\u8BFB\u5C5E\u6027\u9519\u8BEF\u3002\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u5C5E\u6027\u5BF9\u8C61\u4E0A\u8BBE\u7F6E\u7B80\u5355\u7C7B\u578B\u7684\u9ED8\u8BA4\u503C\uFF0C\u8FD9\u662F TypeScript \u5141\u8BB8\u7684\u3002

\u5173\u4E8E toastObj\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u4F60\u60F3\u4E3A\u5B83\u63D0\u4F9B\u9ED8\u8BA4\u503C\u3002\u4F46\u662F\uFF0C\u7531\u4E8E TypeScript \u7684\u53EA\u8BFB\u5C5E\u6027\u7279\u6027\uFF0C\u5982\u679C\u4F60\u76F4\u63A5\u5728\u5BF9\u8C61\u4E2D\u63D0\u4F9B\u9ED8\u8BA4\u503C\uFF0CTypeScript \u4F1A\u8BA4\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u662F\u53EA\u8BFB\u7684\uFF0C\u800C\u4E0D\u80FD\u88AB\u4FEE\u6539\u3002

\u4E3A\u4E86\u7ED5\u5F00\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F60\u4F7F\u7528\u4E86\u4E00\u4E2A\u533F\u540D\u51FD\u6570 () =&gt; {...} \u6765\u5EF6\u8FDF toastObj \u7684\u521B\u5EFA\u3002\u8FD9\u6837\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4F1A\u5728\u9700\u8981 toastObj \u7684\u9ED8\u8BA4\u503C\u65F6\u88AB\u8C03\u7528\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u5E76\u4E0D\u662F\u5B9A\u4E49\u65F6\u7684\u53EA\u8BFB\u5C5E\u6027\u5BF9\u8C61\u7684\u4E00\u90E8\u5206\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u89E6\u53D1 TypeScript \u7684\u53EA\u8BFB\u5C5E\u6027\u9519\u8BEF\u3002\u5B9E\u9645\u4E0A\uFF0C\u4F60\u662F\u5728\u8FD0\u884C\u65F6\u751F\u6210\u4E86 toastObj \u7684\u9ED8\u8BA4\u503C\uFF0C\u800C\u4E0D\u662F\u5728\u5B9A\u4E49\u65F6\u3002

\u6240\u4EE5\uFF0C\u603B\u4F53\u6765\u8BF4\uFF0C\u901A\u8FC7\u4F7F\u7528\u51FD\u6570\u6765\u5EF6\u8FDF\u5BF9\u8C61\u7684\u521B\u5EFA\uFF0C\u4F60\u89C4\u907F\u4E86 TypeScript \u5BF9\u53EA\u8BFB\u5C5E\u6027\u7684\u9650\u5236\uFF0C\u4F7F\u5F97\u5728\u9700\u8981\u65F6\u624D\u751F\u6210\u5BF9\u8C61\u7684\u9ED8\u8BA4\u503C\u3002\u8FD9\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u786E\u4FDD\u4F60\u80FD\u591F\u4E3A\u5BF9\u8C61\u7C7B\u578B\u7684\u5C5E\u6027\u63D0\u4F9B\u9ED8\u8BA4\u503C\u800C\u4E0D\u89E6\u53D1 TypeScript \u7684\u53EA\u8BFB\u5C5E\u6027\u9519\u8BEF\u3002
  
\u53C2\u8003\uFF1Ahttps://cn.vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,t){return n(),i("div",null,v)}var u=e(l,[["render",a],["__file","vue3\u901A\u8FC7ts\u8BED\u6CD5\u4F7F\u7528\u7EC4\u5408\u5F0FAPI\u5B9A\u4E49props\u7684\u65F6\u5019\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7684\u65B9\u6CD5.html.vue"]]);export{u as default};
