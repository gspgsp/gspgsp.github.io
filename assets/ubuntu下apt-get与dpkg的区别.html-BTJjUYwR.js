import{_ as a,c as s,f as e,o as t}from"./app-BB_BIQV8.js";const l={};function i(p,n){return t(),s("div",null,n[0]||(n[0]=[e(`<p>ubuntu下apt-get与dpkg的区别：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apt 与 dpkg 均为 ubuntu 下面的包管理工具。</span>
<span class="line">dpkg 侧重于本地软件的管理。</span>
<span class="line">apt 基于dpkg，侧重于远程包的下载和依赖管理，相当于 dpkg 的前端。  </span>
<span class="line"></span>
<span class="line">主要区别:</span>
<span class="line">dpkg 仅用于安装本地的软件包，安装时不会安装依赖包，不解决依赖问题。</span>
<span class="line">sudo dpkg -i &lt;package_name&gt;.deb</span>
<span class="line">apt 默认会从远程仓库搜索包的名字，下载并安装，安装时会自动安装依赖包，并解决依赖问题</span>
<span class="line">sudo apt install &lt;package_name&gt;</span>
<span class="line"></span>
<span class="line">如果需要使用apt 从本地安装，需要在包名前指定路径，否则只从远程仓库查找。</span>
<span class="line"></span>
<span class="line">sudo apt install &lt;path&gt;/&lt;package_name&gt;.deb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const u=a(l,[["render",i],["__file","ubuntu下apt-get与dpkg的区别.html.vue"]]),c=JSON.parse('{"path":"/content/linux/command/ubuntu%E4%B8%8Bapt-get%E4%B8%8Edpkg%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"ubuntu下apt-get与dpkg的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu下apt-get与dpkg的区别","description":"ubuntu下apt-get与dpkg的区别"},"headers":[],"git":{},"filePathRelative":"content/linux/command/ubuntu下apt-get与dpkg的区别.md"}');export{u as comp,c as data};
