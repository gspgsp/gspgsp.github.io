import{_ as n,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function o(t,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>关于symfony的session和cookie</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Symfony HttpFoundation component provides cookie and session management in an object-oriented manner. </span>
<span class="line">Cookie provides client-side data storage and it only supports a small amount of data. Usually, </span>
<span class="line">it is 2KB per domain and it depends on the browser. </span>
<span class="line">Session provides server-side data storage and it supports a large amount of data. </span>
<span class="line">Let us see how to create a cookie and session in a Symfony web application.  </span>
<span class="line"></span>
<span class="line">Cookie</span>
<span class="line">Symfony provides Cookie class to create a cookie item. Let us create a cookie color, which expires in 24 hours with value blue. The constructor parameter of the cookie class is as follows.</span>
<span class="line"></span>
<span class="line">name (type: string) - cookie name</span>
<span class="line">value (type: string) - cookie value</span>
<span class="line">expire (type: integer / string / datetime) - expiry information</span>
<span class="line">path (type: string) - the server path in which the cookie is available</span>
<span class="line">domain (type: string) – the domain address in which the cookie is available</span>
<span class="line">secure (type: boolean) - whether the cookie needs to be transmitted in HTTPS connection</span>
<span class="line">httpOnly (type: boolean) - whether the cookie is available only in HTTP protocol</span>
<span class="line"></span>
<span class="line">ex:</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Cookie;  </span>
<span class="line">$cookie = new Cookie(&#39;color&#39;, &#39;green&#39;, strtotime(&#39;tomorrow&#39;), &#39;/&#39;, </span>
<span class="line">   &#39;somedomain.com&#39;, true, true);</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Now, the created cookie needs to be attached to the http response object&#39;s header as follows.</span>
<span class="line">$response-&gt;headers-&gt;setCookie($cookie);</span>
<span class="line"></span>
<span class="line">To get the cookie, we can use Request object as follows</span>
<span class="line">$cookie = $request-&gt;cookie-&gt;get(&#39;color&#39;); </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Session</span>
<span class="line">Symfony provides a Session class implementing SessionInterface interface. The important session API are as follows,</span>
<span class="line"></span>
<span class="line">start − Starts the session.</span>
<span class="line"></span>
<span class="line">Session $session = new Session(); </span>
<span class="line">$session-&gt;start(); </span>
<span class="line">invalidate − Clears all session data and regenerates the session ID.</span>
<span class="line"></span>
<span class="line">set − Stores data in the session using a key.</span>
<span class="line"></span>
<span class="line">$session-&gt;set(&#39;key&#39;, &#39;value&#39;);</span>
<span class="line">We can use any data in the session value, be in simple integer to complex objects.</span>
<span class="line"></span>
<span class="line">get − Gets data from the session using the key.</span>
<span class="line"></span>
<span class="line">$val = $session-&gt;get(&#39;key&#39;);</span>
<span class="line">remove − Removes a key from the session.</span>
<span class="line"></span>
<span class="line">clear − Removes a session data.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",o],["__file","symfony5使用cookie和session.html.vue"]]),p=JSON.parse('{"path":"/content/php/symfony/symfony5%E4%BD%BF%E7%94%A8cookie%E5%92%8Csession.html","title":"symfony5使用cookie和session","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony5使用cookie和session","description":"symfony5使用cookie和session"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony5使用cookie和session.md"}');export{d as comp,p as data};
