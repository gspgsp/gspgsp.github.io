import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function c(p,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>vue-advanced-cropper 裁剪组件的使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 其中需要的样式，我做了全局导入，当然直接在当前不额页面直接  import &#39;vue-advanced-cropper/dist/style.css&#39;; 也是可以的</span>
<span class="line">// 这两个组件 CircleStencil, RectangleStencil 主要用来设置 stencil-component 的，主要设置矩形裁剪还是圆形裁剪，默认是 RectangleStencil</span>
<span class="line">// :stencil-props 用于设置在不同裁剪类型下的属性，分别参考</span>
<span class="line">// https://advanced-cropper.github.io/vue-advanced-cropper/components/rectangle-stencil.html#props 和  https://advanced-cropper.github.io/vue-advanced-cropper/components/circle-stencil.html#props</span>
<span class="line">// 还可以通过 backgroundClass 设置背景样式类</span>
<span class="line">  </span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import {</span>
<span class="line">  MModal,</span>
<span class="line">  MButton</span>
<span class="line">} from &quot;@mdpi-ui/design-system&quot;;</span>
<span class="line">import {Cropper, CircleStencil, RectangleStencil} from &#39;vue-advanced-cropper&#39;;</span>
<span class="line"></span>
<span class="line">interface Props {</span>
<span class="line">  src: string,</span>
<span class="line">  isCropperVisible: boolean</span>
<span class="line">}</span>
<span class="line">withDefaults(defineProps&lt;Props&gt;(), {</span>
<span class="line">  src: &quot;&quot;,</span>
<span class="line">  isCropperVisible: false</span>
<span class="line">})</span>
<span class="line">const emit = defineEmits&lt;{</span>
<span class="line">  cancel: void,</span>
<span class="line">  save: string</span>
<span class="line">}&gt;()</span>
<span class="line"></span>
<span class="line">const cropper = ref&lt;Cropper | null&gt;(null)</span>
<span class="line">const hint = ref(&quot;&quot;)</span>
<span class="line">const cancel = () =&gt; {</span>
<span class="line">  hint.value = &quot;&quot;</span>
<span class="line">  emit(&#39;cancel&#39;)</span>
<span class="line">}</span>
<span class="line">const saveCropper = () =&gt; {</span>
<span class="line">  hint.value = &quot;&quot;</span>
<span class="line">  const { canvas } = cropper.value.getResult();</span>
<span class="line">  if (canvas) {</span>
<span class="line">    const form = new FormData();</span>
<span class="line">    const timestamp = new Date().getTime();</span>
<span class="line">    const filename = \`\${timestamp}.png\`;</span>
<span class="line"></span>
<span class="line">    canvas.toBlob(async blob =&gt; {</span>
<span class="line">      form.append(&#39;file&#39;, blob, filename);</span>
<span class="line"></span>
<span class="line">      let img = new Image();</span>
<span class="line">      img.src = URL.createObjectURL(blob)</span>
<span class="line">      img.onload = function () {</span>
<span class="line">        let width = img.width</span>
<span class="line">        let height = img.height</span>
<span class="line">        console.log(&quot;img is:&quot;, width, &#39;----&#39;,height)</span>
<span class="line">        if (width &lt; 1200){</span>
<span class="line">          hint.value = &quot;Images should be at least 1200px wide&quot;</span>
<span class="line">        }else {</span>
<span class="line">          hint.value = &quot;&quot;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        if (hint.value){</span>
<span class="line">          return</span>
<span class="line">        }</span>
<span class="line">        console.log(&quot;form is:&quot;, form.get(&#39;file&#39;))</span>
<span class="line">        setTimeout(function (){</span>
<span class="line">          hint.value = &quot;Server error&quot;</span>
<span class="line">        }, 2000)</span>
<span class="line">        // after save success, return src to parent</span>
<span class="line">        // emit(&quot;save&quot;, &quot;xxxxxxx.png&quot;)</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;MModal</span>
<span class="line">    :model-value=&quot;isCropperVisible&quot;</span>
<span class="line">    :hideCloseIcon=&quot;true&quot;</span>
<span class="line">    maxWidth=&quot;90rem&quot;</span>
<span class="line">  &gt;</span>
<span class="line">    &lt;template #header&gt;</span>
<span class="line">      &lt;div class=&quot;flex justify-center&quot;&gt;</span>
<span class="line">        Customize your image</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">    &lt;template #body&gt;</span>
<span class="line">      &lt;Cropper</span>
<span class="line">        ref=&quot;cropper&quot;</span>
<span class="line">        :src=&quot;src&quot;</span>
<span class="line">        :stencil-component=&quot;RectangleStencil&quot;</span>
<span class="line">        :stencil-props=&quot;{aspectRatio: 3}&quot;</span>
<span class="line">        backgroundClass=&quot;background&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;div v-if=&quot;hint&quot; class=&quot;my-2 font-normal text-sm&quot;&gt;</span>
<span class="line">        {{ hint }}</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;div class=&quot;flex justify-end gap-4 mt-6&quot;&gt;</span>
<span class="line">        &lt;MButton</span>
<span class="line">          variant=&quot;secondary&quot;</span>
<span class="line">          @click=&quot;cancel()&quot;</span>
<span class="line">          class=&quot;md:!w-[8.4375rem]&quot;</span>
<span class="line">        &gt;</span>
<span class="line">          Cancel</span>
<span class="line">        &lt;/MButton&gt;</span>
<span class="line">        &lt;MButton</span>
<span class="line">          variant=&quot;primary&quot;</span>
<span class="line">          @click=&quot;saveCropper&quot;</span>
<span class="line">          class=&quot;md:!w-[12.3125rem]&quot;</span>
<span class="line">        &gt;</span>
<span class="line">          Create</span>
<span class="line">        &lt;/MButton&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/MModal&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">  </span>
<span class="line">cropper组件文档:https://advanced-cropper.github.io/vue-advanced-cropper/components/cropper.html#props</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//cropper固定圆大小:</span>
<span class="line">:stencil-size=&quot;{</span>
<span class="line">          width: 100,</span>
<span class="line">          height: 100,</span>
<span class="line">        }&quot;</span>
<span class="line">  </span>
<span class="line">//限制最小裁剪宽度和高度</span>
<span class="line">:min-width=&quot;200&quot;</span>
<span class="line">:min-height=&quot;200&quot;</span>
<span class="line">  </span>
<span class="line">//下面是这个是一个官方的滚动条的例子</span>
<span class="line">https://advanced-cropper.github.io/vue-advanced-cropper/guides/showcase.html#twitter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=s(l,[["render",c],["__file","vue3裁剪组件.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/vue3%E8%A3%81%E5%89%AA%E7%BB%84%E4%BB%B6.html","title":"vue3裁剪组件","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3裁剪组件","description":"vue3裁剪组件"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3裁剪组件.md"}');export{d as comp,v as data};
