import{_ as e,o as i,c as n,g as s}from"./app.dd03cafd.js";const o={},a=s(`<p>\u5173\u4E8Esymfony\u7684session\u548Ccookie</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Symfony HttpFoundation component provides cookie and session management in an object-oriented manner. 
Cookie provides client-side data storage and it only supports a small amount of data. Usually, 
it is 2KB per domain and it depends on the browser. 
Session provides server-side data storage and it supports a large amount of data. 
Let us see how to create a cookie and session in a Symfony web application.  

Cookie
Symfony provides Cookie class to create a cookie item. Let us create a cookie color, which expires in 24 hours with value blue. The constructor parameter of the cookie class is as follows.

name (type: string) - cookie name
value (type: string) - cookie value
expire (type: integer / string / datetime) - expiry information
path (type: string) - the server path in which the cookie is available
domain (type: string) \u2013 the domain address in which the cookie is available
secure (type: boolean) - whether the cookie needs to be transmitted in HTTPS connection
httpOnly (type: boolean) - whether the cookie is available only in HTTP protocol

ex:
use Symfony\\Component\\HttpFoundation\\Cookie;  
$cookie = new Cookie(&#39;color&#39;, &#39;green&#39;, strtotime(&#39;tomorrow&#39;), &#39;/&#39;, 
   &#39;somedomain.com&#39;, true, true);


Now, the created cookie needs to be attached to the http response object&#39;s header as follows.
$response-&gt;headers-&gt;setCookie($cookie);

To get the cookie, we can use Request object as follows
$cookie = $request-&gt;cookie-&gt;get(&#39;color&#39;); 


Session
Symfony provides a Session class implementing SessionInterface interface. The important session API are as follows,

start \u2212 Starts the session.

Session $session = new Session(); 
$session-&gt;start(); 
invalidate \u2212 Clears all session data and regenerates the session ID.

set \u2212 Stores data in the session using a key.

$session-&gt;set(&#39;key&#39;, &#39;value&#39;);
We can use any data in the session value, be in simple integer to complex objects.

get \u2212 Gets data from the session using the key.

$val = $session-&gt;get(&#39;key&#39;);
remove \u2212 Removes a key from the session.

clear \u2212 Removes a session data.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[a];function l(d,r){return i(),n("div",null,t)}var c=e(o,[["render",l],["__file","symfony5\u4F7F\u7528cookie\u548Csession.html.vue"]]);export{c as default};
