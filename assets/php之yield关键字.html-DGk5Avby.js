import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function d(p,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>php之yield关键字:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这个关键字的学名是 生成器，任何包含 yield 的函数都是一个生成器函数。</span>
<span class="line"></span>
<span class="line">生成器函数看起来像普通函数——不同的是普通函数返回一个值，而生成器可以 yield 生成多个想要的值。 </span>
<span class="line"></span>
<span class="line">当一个生成器被调用的时候，它返回一个可以被遍历的对象.当你遍历这个对象的时候(例如通过一个foreach循环)，PHP 将会在每次需要值的时候调用对象的遍历方法，并在产生一个值之后保存生成器的状态，这样它就可以在需要产生下一个值的时候恢复调用状态。</span>
<span class="line"></span>
<span class="line">一旦不再需要产生更多的值，生成器可以简单退出，而调用生成器的代码还可以继续执行，就像一个数组已经被遍历完了。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器函数的核心是yield关键字。它最简单的调用形式看起来像一个return申明，不同之处在于普通return会返回值并终止函数的执行，而yield会返回一个值给循环调用此生成器的代码并且只是暂停执行生成器函数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">一个简单的例子:</span>
<span class="line">&lt;?php</span>
<span class="line">function gen_one_to_three() {</span>
<span class="line">    for ($i = 1; $i &lt;= 3; $i++) {</span>
<span class="line">        //注意变量$i的值在不同的yield之间是保持传递的。</span>
<span class="line">        yield $i;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">$generator = gen_one_to_three();</span>
<span class="line">foreach ($generator as $value) {</span>
<span class="line">    echo &quot;$value\\n&quot;;</span>
<span class="line">}</span>
<span class="line">?&gt;</span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">输出:</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">3  </span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">注意:</span>
<span class="line">在内部会为生成的值配对连续的整型索引，就像一个非关联的数组。  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器能够返回多个值，通过 Generator::getReturn() 可以获取到</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">一个简单的例子:</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">$gen = (function() {</span>
<span class="line">    yield 1;</span>
<span class="line">    yield 2;</span>
<span class="line"></span>
<span class="line">    return 3;</span>
<span class="line">})();</span>
<span class="line"></span>
<span class="line">foreach ($gen as $val) {</span>
<span class="line">    echo $val, PHP_EOL;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">echo $gen-&gt;getReturn(), PHP_EOL;</span>
<span class="line"></span>
<span class="line">  </span>
<span class="line">输出:</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">3  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const r=s(l,[["render",d],["__file","php之yield关键字.html.vue"]]),v=JSON.parse('{"path":"/content/php/base/php%E4%B9%8Byield%E5%85%B3%E9%94%AE%E5%AD%97.html","title":"php之yield关键字","lang":"en-US","frontmatter":{"sidebar":false,"title":"php之yield关键字","description":"php之yield关键字"},"headers":[],"git":{},"filePathRelative":"content/php/base/php之yield关键字.md"}');export{r as comp,v as data};
