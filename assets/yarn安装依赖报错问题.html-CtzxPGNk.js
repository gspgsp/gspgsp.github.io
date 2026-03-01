import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function r(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>在做开发的时候，比如PHP 会执行yarn命令安装相关的依赖，但是总会报各种各样的问题，如下：</p><p>1.&quot;EPROTO: protocol error, symlink &#39;../../../parser/bin/babel-parser.js&#39;</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">执行：yarn install</span>
<span class="line"></span>
<span class="line">vagrant@homestead:~/code/duoxiaozhan-admin$ yarn install</span>
<span class="line">yarn install v1.22.17</span>
<span class="line">[1/4] Resolving packages...</span>
<span class="line">[2/4] Fetching packages...</span>
<span class="line">[3/4] Linking dependencies...</span>
<span class="line">warning &quot; &gt; sass-loader@7.3.1&quot; has unmet peer dependency &quot;webpack@^3.0.0 || ^4.0.0&quot;.</span>
<span class="line">error An unexpected error occurred: &quot;EPROTO: protocol error, symlink &#39;../../../parser/bin/babel-parser.js&#39; -&gt; &#39;/home/vagrant/code/duoxiaozhan-admin/node_modules/@babel/core/node_modules/.bin/parser&#39;&quot;.</span>
<span class="line">info If you think this is a bug, please open a bug report with the information provided in &quot;/home/vagrant/code/duoxiaozhan-admin/yarn-error.log&quot;.</span>
<span class="line">info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.  </span>
<span class="line"></span>
<span class="line">原因分析：</span>
<span class="line">npm默认会使用 symbolic links来安装组件，也即我们在linux系统里经常用的软链接（ln -s）或硬链接(ln)，但是有些文件系统不支持文件链接，比如 Windows（或者说出于安全原因禁用了），有时候linux 系统运行在有 windows分区的硬盘上也不支持链接，比如virtualbox在windows主机上默认禁止在共享文件夹里使用 symbolic links ,当然也是出于安全考虑。</span>
<span class="line">那么 npm install 默认需要使用 symbolic link，而且这也本身也是 npm 比较重要的一个特性，但如果我们的系统不支持这一属性的话，就会报上面的错误了。当然，你也可以整体设置一下npm，让它默认不再使用文件链接功能了，执行：</span>
<span class="line"></span>
<span class="line">这样了以后，再执行相关命令就可以不用带–no-bin-links了。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.yarn 查看配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1、查看版本</span>
<span class="line">yarn -v </span>
<span class="line"></span>
<span class="line">2、查看配置</span>
<span class="line">yarn config list </span>
<span class="line"></span>
<span class="line">3、配置淘宝镜像</span>
<span class="line">yarn config set registry https://registry.npm.taobao.org/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const c=s(l,[["render",r],["__file","yarn安装依赖报错问题.html.vue"]]),p=JSON.parse('{"path":"/content/front/js/yarn%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98.html","title":"yarn安装依赖报错问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"yarn安装依赖报错问题","description":"yarn安装依赖报错问题"},"headers":[],"git":{},"filePathRelative":"content/front/js/yarn安装依赖报错问题.md"}');export{c as comp,p as data};
