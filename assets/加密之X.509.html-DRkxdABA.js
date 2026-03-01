import{_ as n,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(r,e){return i(),s("div",null,e[0]||(e[0]=[a(`<p>项目开发过程中，看到这个属性，就记录一下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">X.509是密码学里公钥证书的格式标准。X.509证书已应用在包括TLS/SSL在内的众多网络协议里，同时它也用在很多非在线应用场景里，</span>
<span class="line">比如电子签名服务。X.509证书里含有公钥、身份信息（比如网络主机名，组织的名称或个体名称等）和签名信息（可以是证书签发机构CA的签名，也可以是自签名）。  </span>
<span class="line"></span>
<span class="line">在X.509里，组织机构通过发起证书签名请求（CSR）来得到一份签名的证书。首先需要生成一对密钥对，然后用其中的私钥对CSR进行数字签署（签名），并安全地保存私钥。</span>
<span class="line">CSR进而包含有请求发起者的身份信息、用来对此请求进行验真的的公钥以及所请求证书专有名称。CSR里还可能带有CA要求的</span>
<span class="line">其它有关身份证明的信息。然后CA对这个CSR进行签名。 组织机构可以把受信的根证书分发给所有的成员，这样就可以使用公</span>
<span class="line">司的PKI系统了。浏览器（如Firefox）或操作系统预装有可信任的根证书列表，所以主流CA发布的TLS证书都直接可以正常使</span>
<span class="line">用。浏览器的开发者直接影响着它的用户对CA的信任。X.509也定义了CRL实现标准。另一种检查合法性的方式是OCSP。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=n(l,[["render",t],["__file","加密之X.509.html.vue"]]),p=JSON.parse('{"path":"/content/other/spread/%E5%8A%A0%E5%AF%86%E4%B9%8BX.509.html","title":"加密之X.509","lang":"en-US","frontmatter":{"sidebar":false,"title":"加密之X.509","description":"加密之X.509"},"headers":[],"git":{},"filePathRelative":"content/other/spread/加密之X.509.md"}');export{c as comp,p as data};
