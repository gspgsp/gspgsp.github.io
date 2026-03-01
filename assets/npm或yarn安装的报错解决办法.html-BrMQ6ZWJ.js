import{_ as l,c as t,f as r,a as e,o as d,r as s}from"./app-BB_BIQV8.js";const c={};function p(m,n){const a=s("BackBtn"),i=s("CommentService");return d(),t("div",null,[n[0]||(n[0]=r(`<p>在我们拉取到前端的项目的时候，经常需要执行npm install 或者 yarn install，安装必须的依赖，其中会有各种问题，下面我就列出几个常见的，以及对应的解决办法:</p><p>1.&#39;vue-cli-service&#39; 不是内部或外部命令，这个问题一般需要安装依赖</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vagrant@homestead:~/code/xxx.net$ npm install -g @vue/cli</span>
<span class="line">vagrant@homestead:~/code/xxx.net$ npm install -g @vue/cli-service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可能会报下面的错误：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm ERR! code EACCES</span>
<span class="line">npm ERR! syscall mkdir</span>
<span class="line">npm ERR! path /usr/lib/node_modules/@vue</span>
<span class="line">npm ERR! errno -13</span>
<span class="line">npm ERR! Error: EACCES: permission denied, mkdir &#39;/usr/lib/node_modules/@vue&#39;</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">解决办法是加上 sudo，vagrant@homestead:~/xxx.net$ sudo npm install -g @vue/cli</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>执行 npm run serve的时候报：transpileDependencies.map is not a function，解决办法如下：</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在项目的 vue.config.js配置文件里，做如下修改</span>
<span class="line">module.exports = {</span>
<span class="line">    ...</span>
<span class="line">    transpileDependencies: [] //加上这个空的依赖即可解决问题</span>
<span class="line">    ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),e(a),e(i)])}const v=l(c,[["render",p],["__file","npm或yarn安装的报错解决办法.html.vue"]]),u=JSON.parse('{"path":"/content/front/js/npm%E6%88%96yarn%E5%AE%89%E8%A3%85%E7%9A%84%E6%8A%A5%E9%94%99%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html","title":"npm或yarn安装的报错解决办法","lang":"en-US","frontmatter":{"sidebar":false,"title":"npm或yarn安装的报错解决办法","description":"npm或yarn安装的报错解决办法"},"headers":[],"git":{},"filePathRelative":"content/front/js/npm或yarn安装的报错解决办法.md"}');export{v as comp,u as data};
