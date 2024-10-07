import{_ as i,o as n,c as e,g as l}from"./app.d66d8774.js";const s={},d=l(`<p>vue-advanced-cropper \u88C1\u526A\u7EC4\u4EF6\u7684\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5176\u4E2D\u9700\u8981\u7684\u6837\u5F0F\uFF0C\u6211\u505A\u4E86\u5168\u5C40\u5BFC\u5165\uFF0C\u5F53\u7136\u76F4\u63A5\u5728\u5F53\u524D\u4E0D\u989D\u9875\u9762\u76F4\u63A5  import &#39;vue-advanced-cropper/dist/style.css&#39;; \u4E5F\u662F\u53EF\u4EE5\u7684
// \u8FD9\u4E24\u4E2A\u7EC4\u4EF6 CircleStencil, RectangleStencil \u4E3B\u8981\u7528\u6765\u8BBE\u7F6E stencil-component \u7684\uFF0C\u4E3B\u8981\u8BBE\u7F6E\u77E9\u5F62\u88C1\u526A\u8FD8\u662F\u5706\u5F62\u88C1\u526A\uFF0C\u9ED8\u8BA4\u662F RectangleStencil
// :stencil-props \u7528\u4E8E\u8BBE\u7F6E\u5728\u4E0D\u540C\u88C1\u526A\u7C7B\u578B\u4E0B\u7684\u5C5E\u6027\uFF0C\u5206\u522B\u53C2\u8003
// https://advanced-cropper.github.io/vue-advanced-cropper/components/rectangle-stencil.html#props \u548C  https://advanced-cropper.github.io/vue-advanced-cropper/components/circle-stencil.html#props
// \u8FD8\u53EF\u4EE5\u901A\u8FC7 backgroundClass \u8BBE\u7F6E\u80CC\u666F\u6837\u5F0F\u7C7B
  
&lt;script setup lang=&quot;ts&quot;&gt;
import {
  MModal,
  MButton
} from &quot;@mdpi-ui/design-system&quot;;
import {Cropper, CircleStencil, RectangleStencil} from &#39;vue-advanced-cropper&#39;;

interface Props {
  src: string,
  isCropperVisible: boolean
}
withDefaults(defineProps&lt;Props&gt;(), {
  src: &quot;&quot;,
  isCropperVisible: false
})
const emit = defineEmits&lt;{
  cancel: void,
  save: string
}&gt;()

const cropper = ref&lt;Cropper | null&gt;(null)
const hint = ref(&quot;&quot;)
const cancel = () =&gt; {
  hint.value = &quot;&quot;
  emit(&#39;cancel&#39;)
}
const saveCropper = () =&gt; {
  hint.value = &quot;&quot;
  const { canvas } = cropper.value.getResult();
  if (canvas) {
    const form = new FormData();
    const timestamp = new Date().getTime();
    const filename = \`\${timestamp}.png\`;

    canvas.toBlob(async blob =&gt; {
      form.append(&#39;file&#39;, blob, filename);

      let img = new Image();
      img.src = URL.createObjectURL(blob)
      img.onload = function () {
        let width = img.width
        let height = img.height
        console.log(&quot;img is:&quot;, width, &#39;----&#39;,height)
        if (width &lt; 1200){
          hint.value = &quot;Images should be at least 1200px wide&quot;
        }else {
          hint.value = &quot;&quot;
        }

        if (hint.value){
          return
        }
        console.log(&quot;form is:&quot;, form.get(&#39;file&#39;))
        setTimeout(function (){
          hint.value = &quot;Server error&quot;
        }, 2000)
        // after save success, return src to parent
        // emit(&quot;save&quot;, &quot;xxxxxxx.png&quot;)
      }
    })
  }
}
&lt;/script&gt;
&lt;template&gt;
  &lt;MModal
    :model-value=&quot;isCropperVisible&quot;
    :hideCloseIcon=&quot;true&quot;
    maxWidth=&quot;90rem&quot;
  &gt;
    &lt;template #header&gt;
      &lt;div class=&quot;flex justify-center&quot;&gt;
        Customize your image
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #body&gt;
      &lt;Cropper
        ref=&quot;cropper&quot;
        :src=&quot;src&quot;
        :stencil-component=&quot;RectangleStencil&quot;
        :stencil-props=&quot;{aspectRatio: 3}&quot;
        backgroundClass=&quot;background&quot;
      /&gt;
      &lt;div v-if=&quot;hint&quot; class=&quot;my-2 font-normal text-sm&quot;&gt;
        {{ hint }}
      &lt;/div&gt;
      &lt;div class=&quot;flex justify-end gap-4 mt-6&quot;&gt;
        &lt;MButton
          variant=&quot;secondary&quot;
          @click=&quot;cancel()&quot;
          class=&quot;md:!w-[8.4375rem]&quot;
        &gt;
          Cancel
        &lt;/MButton&gt;
        &lt;MButton
          variant=&quot;primary&quot;
          @click=&quot;saveCropper&quot;
          class=&quot;md:!w-[12.3125rem]&quot;
        &gt;
          Create
        &lt;/MButton&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/MModal&gt;
&lt;/template&gt;
  
cropper\u7EC4\u4EF6\u6587\u6863:https://advanced-cropper.github.io/vue-advanced-cropper/components/cropper.html#props
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8865\u5145:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//cropper\u56FA\u5B9A\u5706\u5927\u5C0F:
:stencil-size=&quot;{
          width: 100,
          height: 100,
        }&quot;
  
//\u9650\u5236\u6700\u5C0F\u88C1\u526A\u5BBD\u5EA6\u548C\u9AD8\u5EA6
:min-width=&quot;200&quot;
:min-height=&quot;200&quot;
  
//\u4E0B\u9762\u662F\u8FD9\u4E2A\u662F\u4E00\u4E2A\u5B98\u65B9\u7684\u6EDA\u52A8\u6761\u7684\u4F8B\u5B50
https://advanced-cropper.github.io/vue-advanced-cropper/guides/showcase.html#twitter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[d];function v(r,c){return n(),e("div",null,t)}var u=i(s,[["render",v],["__file","vue3\u88C1\u526A\u7EC4\u4EF6.html.vue"]]);export{u as default};
