import{_ as s,c as e,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function t(d,n){return a(),e("div",null,n[0]||(n[0]=[l(`<h5 id="floatingui的使用-这个主要是解决弹窗等的自适应的问题-官网-https-floating-ui-com-docs-getting-started" tabindex="-1"><a class="header-anchor" href="#floatingui的使用-这个主要是解决弹窗等的自适应的问题-官网-https-floating-ui-com-docs-getting-started"><span>floatingUI的使用, 这个主要是解决弹窗等的自适应的问题, 官网：https://floating-ui.com/docs/getting-started</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//usePatchSelect.ts</span>
<span class="line">import {</span>
<span class="line">  autoUpdate,</span>
<span class="line">  flip,</span>
<span class="line">  offset as offsetMiddleware,</span>
<span class="line">  shift,</span>
<span class="line">  useFloating,</span>
<span class="line">} from &quot;@floating-ui/vue&quot;;</span>
<span class="line"></span>
<span class="line">export const usePatchSelect = () =&gt; {</span>
<span class="line">  const id = useId();</span>
<span class="line">  const wrapperElement = ref&lt;HTMLElement | null | undefined&gt;(null);</span>
<span class="line">  const floatingElement = ref&lt;HTMLElement | null | undefined&gt;(null);</span>
<span class="line">  const referenceElement = ref&lt;HTMLElement | null | undefined&gt;(null);</span>
<span class="line"></span>
<span class="line">  const floating = useFloating(referenceElement, floatingElement, {</span>
<span class="line">    placement: &quot;bottom-start&quot;,</span>
<span class="line">    middleware: [offsetMiddleware(0), shift(), flip()],</span>
<span class="line">    whileElementsMounted: autoUpdate,</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  const onBeforeOpen = () =&gt; {</span>
<span class="line">    nextTick(() =&gt; {</span>
<span class="line">      wrapperElement.value = document.querySelector&lt;HTMLElement&gt;(</span>
<span class="line">        \`[data-app-select-id=&quot;\${id}&quot;]\`,</span>
<span class="line">      );</span>
<span class="line">      referenceElement.value = wrapperElement.value?.querySelector&lt;HTMLElement&gt;(</span>
<span class="line">        &quot;.common-field__dropdown-input&quot;,</span>
<span class="line">      );</span>
<span class="line">      floatingElement.value = wrapperElement.value?.querySelector&lt;HTMLElement&gt;(</span>
<span class="line">        &quot;.common-field__options&quot;,</span>
<span class="line">      );</span>
<span class="line"></span>
<span class="line">      floating.update();</span>
<span class="line">      wrapperElement.value?.classList.add(&quot;overflow-hidden&quot;);</span>
<span class="line">    });</span>
<span class="line">  };</span>
<span class="line">  const onAfterClose = () =&gt; {</span>
<span class="line">    floatingElement.value = null;</span>
<span class="line">    floating.update();</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  watch(floating.floatingStyles, (styles) =&gt; {</span>
<span class="line">    wrapperElement.value?.classList.remove(&quot;overflow-hidden&quot;);</span>
<span class="line"></span>
<span class="line">    const listBox = floatingElement.value;</span>
<span class="line">    if (listBox) {</span>
<span class="line">      if (listBox.classList.contains(&quot;transition&quot;)) {</span>
<span class="line">        listBox.classList.remove(&quot;transition&quot;);</span>
<span class="line">        listBox.classList.add(&quot;transition-[opacity]&quot;);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      Object.assign(listBox.style, styles);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  return {</span>
<span class="line">    onBeforeOpen,</span>
<span class="line">    onAfterClose,</span>
<span class="line">    &quot;data-app-select-id&quot;: id,</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">const patchedProps = usePatchSelect();</span>
<span class="line">&lt;AppSelect</span>
<span class="line">      :model-value=&quot;perPageSelection&quot;</span>
<span class="line">      class=&quot;min-w-[8rem] md:!w-auto&quot;</span>
<span class="line">      :items=&quot;perPageOptions&quot;</span>
<span class="line">      v-bind=&quot;patchedProps&quot; //重要的是这个，会把usePatchSelect中暴露的 &quot;data-app-select-id&quot;: id 绑定到这个元素(有个data-app-select-id属性)，然后后面所有的操作都是基于这个id进行的</span>
<span class="line">      @update:model-value=&quot;emit(&#39;changePerPage&#39;, $event as MSelectItem&lt;number&gt;)&quot;</span>
<span class="line">    /&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;!-- AppSelect.vue --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;app-select-wrapper&quot; v-bind=&quot;$attrs&quot;&gt; // vue3使用这个v-bind=&quot;$attrs&quot; 来获取需要绑定的属性，这里是data-app-select-id</span>
<span class="line">    &lt;!-- dropdown, input, etc --&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(i,[["render",t],["__file","floatingUI的使用.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/floatingUI%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"floatingUI的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"floatingUI的使用","head":[["meta",{"name":"title","content":"floatingUI的使用"}],["meta",{"name":"description","content":"floatingUI的使用"}],["meta",{"name":"keywords","content":"floating"}],["meta",{"property":"og:title","content":"floatingUI的使用"}],["meta",{"property":"og:description","content":"floatingUI的使用"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/floatingUI的使用.md"}');export{p as comp,v as data};
