import{_ as s,c as n,f as a,o as r}from"./app-BB_BIQV8.js";const i={};function t(l,e){return r(),n("div",null,e[0]||(e[0]=[a(`<p>symfony之form_rest的作用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">form_rest(form_view, variables)</span>
<span class="line">This renders all fields that have not yet been rendered for the given form. It&#39;s a good idea to always have this somewhere inside your form as it&#39;ll render hidden fields for you and make any fields you forgot to render easier to spot (since it&#39;ll render the field for you).</span>
<span class="line"></span>
<span class="line">{{ form_rest(form) }}</span>
<span class="line"></span>
<span class="line">翻译过来就是:</span>
<span class="line">它会渲染给定表单中所有尚未渲染的字段。在表单中的某个地方设置这个字段是个好主意，因为它会为你呈现隐藏的字段，并使你忘记呈现的字段更容易被发现（因为它会为你呈现字段）。</span>
<span class="line"></span>
<span class="line">尤其是会渲染 csrf_token 字段，其实 form_start 也会把隐藏的字段渲染出来(包括 csrf_token 这些)，以及把在 formType 里面定义了，但是没有在表单手动呈现的字段, 包括了 form_rest 的所有功能。</span>
<span class="line">之前我以为 form_start 不会渲染没有手动呈现的字段，后来实际验证了，会呈现，所以包括了 form_start 的所有功能。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(i,[["render",t],["__file","symfony之form_rest.html.vue"]]),m=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Bform_rest.html","title":"symfony之form_rest","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之form_rest","description":"symfony之form_rest"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之form_rest.md"}');export{d as comp,m as data};
