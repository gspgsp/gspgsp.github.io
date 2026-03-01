import{_ as s,c as n,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(r,e){return a(),n("div",null,e[0]||(e[0]=[i(`<p>symfony使用Swift_Mailer发送邮件:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">\\Swift_Mailer $mailer,</span>
<span class="line"></span>
<span class="line">$message = (new \\Swift_Message(&#39;Hello Email&#39;))</span>
<span class="line">            -&gt;setContentType(&#39;text/html&#39;)</span>
<span class="line">            -&gt;setFrom(&#39;send@example.com&#39;)</span>
<span class="line">            -&gt;setTo(&#39;events@sciforum.net&#39;)</span>
<span class="line">            -&gt;setBody(&#39;This is the email body&#39;);</span>
<span class="line"></span>
<span class="line">        $mailer-&gt;send($message);</span>
<span class="line"></span>
<span class="line">一直没有发成功，是因为我加了 dd() 打印，会导致请求没有完成吧，不知道为什么，去掉之后 就可以发了 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const m=s(l,[["render",t],["__file","symfony使用Swift_Mailer发送邮件.html.vue"]]),c=JSON.parse('{"path":"/content/php/symfony/symfony%E4%BD%BF%E7%94%A8Swift_Mailer%E5%8F%91%E9%80%81%E9%82%AE%E4%BB%B6.html","title":"symfony使用Swift_Mailer发送邮件","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony使用Swift_Mailer发送邮件","description":"symfony使用Swift_Mailer发送邮件"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony使用Swift_Mailer发送邮件.md"}');export{m as comp,c as data};
