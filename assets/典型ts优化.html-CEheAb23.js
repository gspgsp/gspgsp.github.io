import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function d(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>有如下ts类型定义:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ListResponse.ts</span>
<span class="line">原始写法:</span>
<span class="line">export type RawSection = {</span>
<span class="line">  value: number;</span>
<span class="line">  label: string;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">export type RawTicket = {</span>
<span class="line">  id: number;</span>
<span class="line">  title: string;</span>
<span class="line">  section: RawSection;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">export type RawAddonsEditResponse = {</span>
<span class="line">  id: number;</span>
<span class="line">  title: string;</span>
<span class="line">  price: string;</span>
<span class="line">  quantity: number;</span>
<span class="line">  additionalInformation: string;</span>
<span class="line">  tickets: RawTicket[];</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">export type Section = {</span>
<span class="line">  id: number;</span>
<span class="line">  title: string;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">export type Ticket = {</span>
<span class="line">  id: number;</span>
<span class="line">  title: string;</span>
<span class="line">  section: Section;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">export type AddonsEditResponse = {</span>
<span class="line">  id: number;</span>
<span class="line">  title: string;</span>
<span class="line">  price: string;</span>
<span class="line">  quantity: number;</span>
<span class="line">  additionalInformation: string;</span>
<span class="line">  tickets: Ticket[];</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">优化后:</span>
<span class="line">type BaseTicket&lt;S&gt; = {</span>
<span class="line">  id: number;</span>
<span class="line">  title: string;</span>
<span class="line">  section: S;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">type BaseAddonsEditResponse&lt;T&gt; = {</span>
<span class="line">  id: number;</span>
<span class="line">  title: string;</span>
<span class="line">  price: string;</span>
<span class="line">  quantity: number;</span>
<span class="line">  additionalInformation: string;</span>
<span class="line">  tickets: T[];</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">export type RawSection = {</span>
<span class="line">  value: number;</span>
<span class="line">  label: string;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">export type RawTicket = BaseTicket&lt;RawSection&gt;;</span>
<span class="line">  </span>
<span class="line">export type RawAddonsEditResponse = BaseAddonsEditResponse&lt;RawTicket&gt;;</span>
<span class="line">  </span>
<span class="line">export type Section = {</span>
<span class="line">  id: number;</span>
<span class="line">  title: string;</span>
<span class="line">};</span>
<span class="line">  </span>
<span class="line">export type Ticket = BaseTicket&lt;Section&gt;;</span>
<span class="line">  </span>
<span class="line">export type AddonsEditResponse = BaseAddonsEditResponse&lt;Ticket&gt;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化分析:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">提取通用类型：将 BaseSection, BaseTicket, 和 BaseAddonsEditResponse 定义为通用类型，并通过泛型参数增强复用性。</span>
<span class="line">复用性提升：通过泛型参数 S 和 T，将类型从依赖具体的 RawSection 或 Section，转变为可以适配不同上下文的通用类型。</span>
<span class="line">最终类型定义清晰化：后面的三个最终类型 (Section, Ticket, AddonsEditResponse) 依然保留原样，保持清晰的业务含义。</span>
<span class="line">这样可以减少重复代码，并使代码更具扩展性。如果需要新增类似的类型，维护起来也更简单。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const p=s(l,[["render",d],["__file","典型ts优化.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/%E5%85%B8%E5%9E%8Bts%E4%BC%98%E5%8C%96.html","title":"典型ts优化","lang":"en-US","frontmatter":{"sidebar":false,"title":"典型ts优化","head":[["meta",{"name":"title","content":"典型ts优化"}],["meta",{"name":"description","content":"典型ts优化"}],["meta",{"name":"keywords","content":"典型ts优化"}],["meta",{"property":"og:title","content":"典型ts优化"}],["meta",{"property":"og:description","content":"典型ts优化"}]]},"headers":[],"git":{},"filePathRelative":"content/front/js/典型ts优化.md"}');export{p as comp,r as data};
