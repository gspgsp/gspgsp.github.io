import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function d(t,s){return l(),e("div",null,s[0]||(s[0]=[a(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// ts 类型定义的两种方式，结果却不同</span>
<span class="line">import type { dashboardItemNames } from &quot;~/constants/dashboard/dasboardItemNames&quot;;</span>
<span class="line">    </span>
<span class="line">type Items = {</span>
<span class="line">  label: string;</span>
<span class="line">  name: keyof typeof dashboardItemNames;</span>
<span class="line">  icon?: string | null;</span>
<span class="line">  children?: Items;</span>
<span class="line">}[];</span>
<span class="line">  </span>
<span class="line">export type UserDashboardRolesResponse = {</span>
<span class="line">  label: string;</span>
<span class="line">  items: Items;</span>
<span class="line">}[];</span>
<span class="line">  </span>
<span class="line">export type ExtendedUserDashboardRolesResponse = UserDashboardRolesResponse[number] &amp; {</span>
<span class="line">  roles: number[];</span>
<span class="line">}[];</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">import type { dashboardItemNames } from &quot;~/constants/dashboard/dasboardItemNames&quot;;</span>
<span class="line">  </span>
<span class="line">type Items = {</span>
<span class="line">  label: string;</span>
<span class="line">  name: keyof typeof dashboardItemNames;</span>
<span class="line">  icon?: string | null;</span>
<span class="line">  children?: Items;</span>
<span class="line">}[];</span>
<span class="line">  </span>
<span class="line">export type UserDashboardRolesResponse = {</span>
<span class="line">  label: string;</span>
<span class="line">  items: Items;</span>
<span class="line">}[];</span>
<span class="line">  </span>
<span class="line">type ExtendedUserDashboardRole = UserDashboardRolesResponse[number] &amp; {</span>
<span class="line">  roles: number[];</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">export type ExtendedUserDashboardRolesResponse = ExtendedUserDashboardRole[];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const roles = ref&lt;ExtendedUserDashboardRolesResponse&gt;([]);</span>
<span class="line">一个会报 never[], 一个不报错. 主要是ts类型检查(涉及到类型推断)的时候有问题，使用上没有问题</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const p=n(i,[["render",d],["__file","ts复用类型的两种方式.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/ts%E5%A4%8D%E7%94%A8%E7%B1%BB%E5%9E%8B%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"ts复用类型的两种方式","lang":"en-US","frontmatter":{"sidebar":false,"title":"ts复用类型的两种方式","head":[["meta",{"name":"title","content":"ts复用类型的两种方式"}],["meta",{"name":"description","content":"ts复用类型的两种方式"}],["meta",{"name":"keywords","content":"ts"}],["meta",{"property":"og:title","content":"ts复用类型的两种方式"}],["meta",{"property":"og:description","content":"ts复用类型的两种方式"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/ts复用类型的两种方式.md"}');export{p as comp,c as data};
