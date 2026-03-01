import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function p(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">今天看vue-cli文档，发现了下面的这段话 vue-cli 改为了 @vue/cli，这两个npm有什么区别呢？npm包前面加@是什么意思呢？</span>
<span class="line"></span>
<span class="line">Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。</span>
<span class="line"></span>
<span class="line">查了下官网，npm包前面加@，代表scopes相关的包，可以理解为作用域(范围)包，作用域使我们可以创建与其他用户或组织创建的包同名，而不会发生冲突。</span>
<span class="line"></span>
<span class="line">A scope allows you to create a package with the same name as a package created by another user or Org without conflict.</span>
<span class="line"></span>
<span class="line">作用域名称是介于@和斜线之间的所有内容：</span>
<span class="line"></span>
<span class="line">The scope name is everything between the @ and the slash:</span>
<span class="line"></span>
<span class="line">// “npm” scope:</span>
<span class="line">@npm/package-name</span>
<span class="line">// “npmcorp” scope:</span>
<span class="line">@npmcorp/package-name</span>
<span class="line">为什么需要有作用域包</span>
<span class="line">npm包一个诟病就是包名很容易被占用的问题，占用后用其他人就不能用了。而作用域包类似于创建了一个命名空间，不同的命名空间，可以使用相同的包名</span>
<span class="line"></span>
<span class="line">作用域的命名不是谁便就能用的，只有两种可以使用：自己的用户名、自己创建的组织名</span>
<span class="line"></span>
<span class="line">注意：必须先注册一个npm用户帐户，然后才能发布用户作用域的npm软件包。此外，要发布组织作用域的软件包，您必须创建一个npm用户帐户，然后创建一个npm Org(组织)。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const r=s(l,[["render",p],["__file","npm包前面加@是什么意思.html.vue"]]),t=JSON.parse('{"path":"/content/other/spread/npm%E5%8C%85%E5%89%8D%E9%9D%A2%E5%8A%A0@%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D.html","title":"npm包前面加@是什么意思","lang":"en-US","frontmatter":{"sidebar":false,"title":"npm包前面加@是什么意思","description":"npm包前面加@是什么意思"},"headers":[],"git":{},"filePathRelative":"content/other/spread/npm包前面加@是什么意思.md"}');export{r as comp,t as data};
