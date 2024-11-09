import{_ as n,o as s,c as a,g as e}from"./app.66ae8700.js";const p={},t=e(`<p>symfony\u914D\u7F6E\u5F02\u6B65\u90AE\u4EF6\u53D1\u9001\uFF0C\u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u5F0F</p><ul><li>\u4F7F\u7528\u9ED8\u8BA4\u7684messageHandler</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">framework</span><span class="token punctuation">:</span>
    <span class="token key atrule">messenger</span><span class="token punctuation">:</span>
        <span class="token key atrule">failure_transport</span><span class="token punctuation">:</span> failed

        <span class="token key atrule">transports</span><span class="token punctuation">:</span>
            <span class="token comment"># https://symfony.com/doc/current/messenger.html#transport-configuration</span>
            <span class="token key atrule">async</span><span class="token punctuation">:</span>
                <span class="token key atrule">dsn</span><span class="token punctuation">:</span> <span class="token string">&#39;%env(MESSENGER_TRANSPORT_DSN)%&#39;</span>
                <span class="token key atrule">options</span><span class="token punctuation">:</span>
                    <span class="token key atrule">use_notify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                    <span class="token key atrule">check_delayed_interval</span><span class="token punctuation">:</span> <span class="token number">60000</span>
                <span class="token key atrule">retry_strategy</span><span class="token punctuation">:</span>
                    <span class="token key atrule">max_retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
                    <span class="token key atrule">multiplier</span><span class="token punctuation">:</span> <span class="token number">2</span>
            <span class="token key atrule">failed</span><span class="token punctuation">:</span> <span class="token string">&#39;doctrine://default?queue_name=failed&#39;</span>
            <span class="token key atrule">sync</span><span class="token punctuation">:</span> <span class="token string">&#39;sync://&#39;</span>

        <span class="token key atrule">routing</span><span class="token punctuation">:</span>
            <span class="token key atrule">Symfony\\Component\\Mailer\\Messenger\\SendEmailMessage</span><span class="token punctuation">:</span> async

            <span class="token comment"># Route your messages to the transports</span>
            <span class="token comment"># &#39;App\\Message\\YourMessage&#39;: async</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684messageHandler</li></ul><p>1.\u5148\u521B\u5EFA\u4E00\u4E2A\u6D88\u606F\u7C7B</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Message</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EmailAsync</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$subject</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token variable">$body</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token variable">$bodyText</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token variable">$recipient</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$subject</span><span class="token punctuation">,</span> <span class="token variable">$body</span><span class="token punctuation">,</span> <span class="token variable">$bodyText</span><span class="token punctuation">,</span> <span class="token variable">$recipient</span><span class="token punctuation">,</span> <span class="token variable">$context</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">subject</span> <span class="token operator">=</span> <span class="token variable">$subject</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">body</span> <span class="token operator">=</span> <span class="token variable">$body</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">bodyText</span> <span class="token operator">=</span> <span class="token variable">$bodyText</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">recipient</span> <span class="token operator">=</span> <span class="token variable">$recipient</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">context</span> <span class="token operator">=</span> <span class="token variable">$context</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u521B\u5EFA\u4E00\u4E2A\u6D88\u606F\u5904\u7406\u7C7B</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>MessageHandler</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Message<span class="token punctuation">\\</span>EmailAsync</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Mime<span class="token punctuation">\\</span>Address</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Bridge<span class="token punctuation">\\</span>Twig<span class="token punctuation">\\</span>Mime<span class="token punctuation">\\</span>TemplatedEmail</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Mailer<span class="token punctuation">\\</span>MailerInterface</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Messenger<span class="token punctuation">\\</span>Handler<span class="token punctuation">\\</span>MessageHandlerInterface</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EmailAsyncHandler</span>  <span class="token keyword">implements</span> <span class="token class-name">MessageHandlerInterface</span> 
<span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token variable">$mailer</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">MailerInterface</span> <span class="token variable">$mailer</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mailer</span> <span class="token operator">=</span> <span class="token variable">$mailer</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token class-name type-declaration">EmailAsync</span> <span class="token variable">$email</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$subject</span> <span class="token operator">=</span> <span class="token variable">$email</span><span class="token operator">-&gt;</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$body</span> <span class="token operator">=</span> <span class="token variable">$email</span><span class="token operator">-&gt;</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$bodyText</span> <span class="token operator">=</span> <span class="token variable">$email</span><span class="token operator">-&gt;</span><span class="token function">getBodyText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$recipient</span> <span class="token operator">=</span> <span class="token variable">$email</span><span class="token operator">-&gt;</span><span class="token function">getRecipient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token variable">$email</span><span class="token operator">-&gt;</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$emailToSend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TemplatedEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;my-address@hello.com&quot;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;your-address@hello.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">subject</span><span class="token punctuation">(</span><span class="token variable">$subject</span><span class="token punctuation">)</span>

            <span class="token comment">// path of the Twig template to render</span>
            <span class="token operator">-&gt;</span><span class="token function">htmlTemplate</span><span class="token punctuation">(</span><span class="token variable">$body</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">textTemplate</span><span class="token punctuation">(</span><span class="token variable">$bodyText</span><span class="token punctuation">)</span>

            <span class="token comment">// pass variables (name =&gt; value) to the template</span>
            <span class="token operator">-&gt;</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token variable">$context</span><span class="token punctuation">)</span>
        <span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mailer</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$emailToSend</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u914D\u7F6EmessageHandler</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">framework</span><span class="token punctuation">:</span>
    <span class="token key atrule">messenger</span><span class="token punctuation">:</span>
        <span class="token key atrule">transports</span><span class="token punctuation">:</span>
            <span class="token key atrule">async</span><span class="token punctuation">:</span> <span class="token string">&#39;%env(MESSENGER_TRANSPORT_DSN)%&#39;</span>

        <span class="token key atrule">routing</span><span class="token punctuation">:</span>
            <span class="token comment"># Route your messages to the transports</span>
            <span class="token key atrule">App\\Message\\EmailAsync</span><span class="token punctuation">:</span>  async
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u89E6\u53D1\u90AE\u4EF6\u53D1\u9001\u670D\u52A1</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Service</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Message<span class="token punctuation">\\</span>EmailAsync</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Messenger<span class="token punctuation">\\</span>MessageBusInterface</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MailManagerAsync</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$bus</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">MessageBusInterface</span> <span class="token variable">$bus</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">bus</span> <span class="token operator">=</span> <span class="token variable">$bus</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">sendMessage</span><span class="token punctuation">(</span><span class="token variable">$subject</span><span class="token punctuation">,</span> <span class="token variable">$body</span><span class="token punctuation">,</span> <span class="token variable">$bodyText</span><span class="token punctuation">,</span> <span class="token variable">$to</span><span class="token punctuation">,</span> <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$emailAsync</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailAsync</span><span class="token punctuation">(</span><span class="token variable">$subject</span><span class="token punctuation">,</span> <span class="token variable">$body</span><span class="token punctuation">,</span> <span class="token variable">$bodyText</span><span class="token punctuation">,</span> <span class="token variable">$to</span><span class="token punctuation">,</span> <span class="token variable">$context</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">bus</span><span class="token operator">-&gt;</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token variable">$emailAsync</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6574\u4E2A\u6D41\u7A0B\u548C\u666E\u901A\u7684\u6D88\u606F\u961F\u5217\u662F\u4E00\u6837\u7684</p><p>\u6CE8\u610F\u70B9:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E4B\u524D\u6211\u8FD9\u91CC\u6709\u4E2A\u95EE\u9898\uFF0C\u5728config/packages/dev/mailer.yaml \u91CC\u914D\u7F6E\u4E86:
framework:
    mailer:
        dsn: &#39;%env(MAILER_DSN)%&#39;
        message_bus: false

\u6839\u636E\u5B98\u7F51\u7684\u4ECB\u7ECD(https://symfony.com/doc/5.4/mailer.html#sending-messages-async)\u53EF\u4EE5\u77E5\u9053\uFF0C\u8FD9\u91CC\u914D\u7F6E
\u4E3Afalse\u4EE5\u540E asymc \u5C31\u4F1A\u5931\u6548\uFF0C\u5C24\u5176\u662F\u8FD9\u4E2A dev \u73AF\u5883\uFF0C\u76F4\u63A5\u8986\u76D6\u4E86\u6211\u7684\u914D\u7F6E\uFF0C\u6240\u4EE5\u5BFC\u81F4 async \u4E00\u76F4\u4E0D\u751F\u6548
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[t];function c(o,i){return s(),a("div",null,l)}var r=n(p,[["render",c],["__file","symfony\u4E4B\u624B\u52A8\u914D\u7F6E\u5F02\u6B65\u53D1\u9001\u90AE\u4EF6.html.vue"]]);export{r as default};
