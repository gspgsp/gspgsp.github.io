import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>最近做项目，报node版本过低的问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vagrant@homestead:~/code/duoxiaozhan-www$ yarn install</span>
<span class="line">yarn install v1.22.17</span>
<span class="line">info No lockfile found.</span>
<span class="line">[1/4] Resolving packages...</span>
<span class="line">[2/4] Fetching packages...</span>
<span class="line">error @vue-macros/common@1.3.3: The engine &quot;node&quot; is incompatible with this module. Expected version &quot;&gt;=16.14.0&quot;. Got &quot;14.19.0&quot; //版本过低</span>
<span class="line">error Found incompatible module.</span>
<span class="line">info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级nodeJs操作:<br> Node.js官方提供了一种命令行工具n，可以通过这个工具方便地升级到最新版本的Node.js。</p><ul><li>安装 n 命令</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vagrant@homestead:~/code/duoxiaozhan-www$ sudo npm install n -g</span>
<span class="line"></span>
<span class="line">added 1 package, and audited 2 packages in 7s</span>
<span class="line"></span>
<span class="line">found 0 vulnerabilities</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装要升级的版本</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vagrant@homestead:~/code/duoxiaozhan-www$ sudo n latest //这里直接到最新版本，可以指定，比如: 18.1.0</span>
<span class="line">  installing : node-v20.2.0</span>
<span class="line">       mkdir : /usr/local/n/versions/node/20.2.0</span>
<span class="line">       fetch : https://nodejs.org/dist/v20.2.0/node-v20.2.0-linux-x64.tar.xz</span>
<span class="line">     copying : node/20.2.0</span>
<span class="line">   installed : v20.2.0 (with npm 9.6.6)</span>
<span class="line"></span>
<span class="line">Note: the node command changed location and the old location may be remembered in your current shell.</span>
<span class="line">         old : /usr/bin/node</span>
<span class="line">         new : /usr/local/bin/node</span>
<span class="line">If &quot;node --version&quot; shows the old version then start a new shell, or reset the location hash with:</span>
<span class="line">hash -r  (for bash, zsh, ash, dash, and ksh)</span>
<span class="line">rehash   (for csh and tcsh)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上面的 Note，按照提示操作一遍即可解决问题，我直接新开一个terminal 然后执行 hash -r 即可</p>`,8)]))}const r=s(l,[["render",d],["__file","nodeJs版本升级.html.vue"]]),c=JSON.parse('{"path":"/content/front/js/nodeJs%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7.html","title":"nodeJs版本升级","lang":"en-US","frontmatter":{"sidebar":false,"title":"nodeJs版本升级","description":"nodeJs版本升级"},"headers":[],"git":{},"filePathRelative":"content/front/js/nodeJs版本升级.md"}');export{r as comp,c as data};
