import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(p,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>vue3获取组件的属性:</p><p>主要通过这个包实现:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm i vue-component-type-helpers</span>
<span class="line">  </span>
<span class="line">npm地址:https://www.npmjs.com/package/vue-component-type-helpers</span>
<span class="line">官方介绍:Some very simple type helpers used behind vue-component-meta for extract component props, slots, emit, exposed types.</span>
<span class="line">这个包很实用，抓哟可以用老获取组件的props, slots, emit, exposed types，很牛逼</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官网例子:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//组件HelloWorld.vue</span>
<span class="line">&lt;template&gt;</span>
<span class="line">	&lt;slot name=&quot;header&quot; :num=&quot;123&quot; /&gt;</span>
<span class="line">	&lt;slot name=&quot;footer&quot; str=&quot;abc&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">defineProps&lt;{</span>
<span class="line">	msg: string</span>
<span class="line">}&gt;()</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">//使用</span>
<span class="line">import HelloWorld from &#39;./HelloWorld.vue&#39;</span>
<span class="line">import type { ComponentProps, ComponentSlots } from &#39;vue-component-type-helpers&#39;</span>
<span class="line"></span>
<span class="line">type Props = ComponentProps&lt;typeof HelloWorld&gt; // { msg: string }</span>
<span class="line">type Slots = ComponentSlots&lt;typeof HelloWorld&gt; // { header(_: { num: number; }): any; footer(_: { str: string; }): any; }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import type AppStepper from &quot;~/components/app/stepper/AppStepper.vue&quot;;</span>
<span class="line">import type { ComponentProps } from &#39;vue-component-type-helpers&#39;</span>
<span class="line"></span>
<span class="line">const steps: ComponentProps&lt;typeof AppStepper&gt;[&quot;steps&quot;] = [</span>
<span class="line">{</span>
<span class="line">    label: &quot;Tickets&quot;,</span>
<span class="line">    value: &quot;tickets&quot;,</span>
<span class="line">    route: {</span>
<span class="line">      name: &quot;events-id-event-settings-registration-tickets&quot;,</span>
<span class="line">      params: route.params,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    label: &quot;Add-ons&quot;,</span>
<span class="line">    value: &quot;addons&quot;,</span>
<span class="line">    route: {</span>
<span class="line">      name: &quot;events-id-event-settings-registration-addons&quot;,</span>
<span class="line">      params: route.params,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其它vue工具:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">https://github.com/vuejs/language-tools</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,9)]))}const r=n(i,[["render",t],["__file","vue3获取组件的属性.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/vue3%E8%8E%B7%E5%8F%96%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B1%9E%E6%80%A7.html","title":"vue3获取组件的属性","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue3获取组件的属性","description":"vue3获取组件的属性"},"headers":[],"git":{},"filePathRelative":"content/front/js/vue3获取组件的属性.md"}');export{r as comp,c as data};
