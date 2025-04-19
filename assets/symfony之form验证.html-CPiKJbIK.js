import{_ as s,c as a,d as p,o as t}from"./app-C7j_h9cy.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Course</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>EntityManagerInterface</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>AbstractType</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Extension<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Type<span class="token punctuation">\\</span>HiddenType</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Extension<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Type<span class="token punctuation">\\</span>IntegerType</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Extension<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Type<span class="token punctuation">\\</span>TextareaType</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Extension<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Type<span class="token punctuation">\\</span>TextType</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>FormBuilderInterface</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>OptionsResolver<span class="token punctuation">\\</span>OptionsResolver</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints<span class="token punctuation">\\</span>Callback</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints<span class="token punctuation">\\</span>NotNull</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Context<span class="token punctuation">\\</span>ExecutionContext</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CourseFormType</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractType</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name type-declaration">EntityManagerInterface</span> <span class="token variable">$entityManager</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">EntityManagerInterface</span> <span class="token variable">$entityManager</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">entityManager</span> <span class="token operator">=</span> <span class="token variable">$entityManager</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">buildForm</span><span class="token punctuation">(</span><span class="token class-name type-declaration">FormBuilderInterface</span> <span class="token variable">$builder</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$builder</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">TextType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">&#39;constraints&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token keyword">new</span> <span class="token class-name">Callback</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;callback&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">ExecutionContext</span> <span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">$builder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;The content should not be more than 50 words&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Please fill in course title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token variable">$course</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">entityManager</span><span class="token operator">-&gt;</span><span class="token function">getRepository</span><span class="token punctuation">(</span><span class="token class-name static-context">Course</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">findOneByField</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token variable">$course_id</span> <span class="token operator">=</span> <span class="token variable">$builder</span><span class="token operator">-&gt;</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;course_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$course</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$course</span><span class="token operator">-&gt;</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token variable">$course_id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;This collection should contain only unique elements.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cover_picture&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">HiddenType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">&#39;constraints&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token keyword">new</span> <span class="token class-name">Callback</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;callback&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">ExecutionContext</span> <span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Please upload cover_picture&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;description&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">TextareaType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">&#39;constraints&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token keyword">new</span> <span class="token class-name">Callback</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;callback&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">ExecutionContext</span> <span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;The content should not be more than 1000 words&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Please fill in course description&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;tag&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">TextType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">&#39;constraints&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token keyword">new</span> <span class="token class-name">NotNull</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Please fill in tag&#39;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;need_certification&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">IntegerType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;certification_name&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">TextType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">&#39;constraints&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token keyword">new</span> <span class="token class-name">Callback</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;callback&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">ExecutionContext</span> <span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">getRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;need_certification&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Please fill incertification name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;The content should not be more than 20 words&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;certification_url&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">HiddenType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;constraints&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                        <span class="token keyword">new</span> <span class="token class-name">Callback</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;callback&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">ExecutionContext</span> <span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">getRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;need_certification&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Please upload certification&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">configureOptions</span><span class="token punctuation">(</span><span class="token class-name type-declaration">OptionsResolver</span> <span class="token variable">$resolver</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$resolver</span><span class="token operator">-&gt;</span><span class="token function">setDefaults</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;data_class&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Course</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// enable/disable CSRF protection for this form</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;csrf_protection&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// the name of the hidden HTML field that stores the token</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;csrf_field_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;_token&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// an arbitrary string used to generate the value of the token</span></span>
<span class="line">            <span class="token comment">// using a different string for each form improves its security</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;csrf_token_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;course_create&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">//exclude self</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;course_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">0</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const i=s(e,[["render",o],["__file","symfony之form验证.html.vue"]]),u=JSON.parse('{"path":"/content/php/symfony/symfony%E4%B9%8Bform%E9%AA%8C%E8%AF%81.html","title":"symfony之form验证","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony之form验证","description":"symfony之form验证"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony之form验证.md"}');export{i as comp,u as data};
