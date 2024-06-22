import{_ as n,o as s,c as a,g as e}from"./app.dd03cafd.js";const o={},t=e(`<p>\u6709\u65F6\u5019\u9700\u8981\u4EA7\u770BNode\u7684registry\u5730\u5740\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u5B9E\u73B0:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant@homestead:~/code/duoxiaozhan-www$ <span class="token function">npm</span> config list
<span class="token punctuation">;</span> <span class="token string">&quot;user&quot;</span> config from /home/vagrant/.npmrc

registry <span class="token operator">=</span> <span class="token string">&quot;https://registry.npm.taobao.org/&quot;</span> 

<span class="token punctuation">;</span> <span class="token string">&quot;project&quot;</span> config from /home/vagrant/code/duoxiaozhan-www/.npmrc

shamefully-hoist <span class="token operator">=</span> <span class="token boolean">true</span> 
strict-peer-dependencies <span class="token operator">=</span> <span class="token boolean">false</span> 

<span class="token punctuation">;</span> <span class="token function">node</span> bin location <span class="token operator">=</span> /usr/local/bin/node
<span class="token punctuation">;</span> <span class="token function">node</span> version <span class="token operator">=</span> v18.16.0
<span class="token punctuation">;</span> <span class="token function">npm</span> <span class="token builtin class-name">local</span> prefix <span class="token operator">=</span> /home/vagrant/code/duoxiaozhan-www
<span class="token punctuation">;</span> <span class="token function">npm</span> version <span class="token operator">=</span> <span class="token number">9.5</span>.1
<span class="token punctuation">;</span> cwd <span class="token operator">=</span> /home/vagrant/code/duoxiaozhan-www
<span class="token punctuation">;</span> <span class="token environment constant">HOME</span> <span class="token operator">=</span> /home/vagrant
<span class="token punctuation">;</span> Run <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> config <span class="token function">ls</span> -l<span class="token variable">\`</span></span> to show all defaults.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u76F4\u63A5:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant@homestead:~/code/duoxiaozhan-www$ <span class="token function">npm</span> config get registry
https://registry.npm.taobao.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[t];function c(l,p){return s(),a("div",null,i)}var d=n(o,[["render",c],["__file","nodeJs\u67E5\u770Bregistry\u5730\u5740.html.vue"]]);export{d as default};
