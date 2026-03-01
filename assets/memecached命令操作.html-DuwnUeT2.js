import{_ as s,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function c(d,e){return i(),n("div",null,e[0]||(e[0]=[a(`<p>memecached命令操作:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.连接客户端</span>
<span class="line">$ telnet 127.0.0.1 11211</span>
<span class="line">  </span>
<span class="line">2.查看memcached状态</span>
<span class="line">$ stats</span>
<span class="line">  </span>
<span class="line">3.查看所有的items</span>
<span class="line">$ stats items</span>
<span class="line">  </span>
<span class="line">4.查看指定item，通过命令stats cachedump id 0获得key的值。0表示全部列出</span>
<span class="line">$ stats cachedump 7 0</span>
<span class="line">  </span>
<span class="line">5.获取知道你功夫key对应的值</span>
<span class="line">$ get 15711150681vc //get命令获得key的值</span>
<span class="line">  </span>
<span class="line">6.删除key</span>
<span class="line">flush_all</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const m=s(l,[["render",c],["__file","memecached命令操作.html.vue"]]),p=JSON.parse('{"path":"/content/database/redis/memecached%E5%91%BD%E4%BB%A4%E6%93%8D%E4%BD%9C.html","title":"memecached命令操作","lang":"en-US","frontmatter":{"sidebar":false,"title":"memecached命令操作","description":"memecached命令操作"},"headers":[],"git":{},"filePathRelative":"content/database/redis/memecached命令操作.md"}');export{m as comp,p as data};
