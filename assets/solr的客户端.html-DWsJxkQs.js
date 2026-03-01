import{_ as n,c as a,f as e,o as l}from"./app-BB_BIQV8.js";const i={};function r(d,s){return l(),a("div",null,s[0]||(s[0]=[e(`<p>solr的客户端:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">php:</span>
<span class="line">composer require solarium/solarium</span>
<span class="line"></span>
<span class="line">直接API调用:</span>
<span class="line">设置了用户名和密码的,在header头下添加认证:</span>
<span class="line">Authorization: Basic base64(username:password)  // base64(username:password) 需要手动生成</span>
<span class="line">然后就可以调用API了.</span>
<span class="line"></span>
<span class="line">php下生成加密信息:</span>
<span class="line">//官方加密方式少了一个 &#39;)&#39; 号</span>
<span class="line">base64(sha256(sha256(salt+password))) base64(salt)， 中间有个空格</span>
<span class="line"></span>
<span class="line">//security.json配置如下:</span>
<span class="line">{</span>
<span class="line">    &quot;authentication&quot;:{</span>
<span class="line">        &quot;blockUnknown&quot;: true,</span>
<span class="line">        &quot;class&quot;:&quot;solr.BasicAuthPlugin&quot;,</span>
<span class="line">        &quot;credentials&quot;:{&quot;solr&quot;:&quot;ua1+S+w/1HipuKpWrOrhGkhH6mLJe+j0YvzPLOoe0KM= aGFoYQ==&quot;}, // 分别是用户名和 加密的密码以及密码盐</span>
<span class="line">        &quot;realm&quot;:&quot;My Solr users&quot;,</span>
<span class="line">        &quot;forwardCredentials&quot;: false</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//加密算法</span>
<span class="line">$name= &#39;solr&#39;;</span>
<span class="line">$pwd = &#39;hello solr&#39;;</span>
<span class="line">$salt = &#39;haha&#39;;</span>
<span class="line"></span>
<span class="line">$hash = hash(&#39;sha256&#39;, hash(&#39;sha256&#39;, $salt.$pwd, true), true); // true 表示输出原始二进制数据,必须要设置，否则生成的hash值验证不通过</span>
<span class="line">$res_pwd = base64_encode($hash);</span>
<span class="line">$res_salt = base64_encode($salt);</span>
<span class="line"></span>
<span class="line">dd($res_pwd.&#39;-----&#39;.$res_salt);</span>
<span class="line"></span>
<span class="line">base64在线工具: https://base64.us/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(i,[["render",r],["__file","solr的客户端.html.vue"]]),t=JSON.parse('{"path":"/content/search/solr/solr%E7%9A%84%E5%AE%A2%E6%88%B7%E7%AB%AF.html","title":"solr的客户端","lang":"en-US","frontmatter":{"sidebar":false,"title":"solr的客户端","description":"solr的客户端"},"headers":[],"git":{},"filePathRelative":"content/search/solr/solr的客户端.md"}');export{p as comp,t as data};
