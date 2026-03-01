import{_ as s,c as n,f as a,o as i}from"./app-BB_BIQV8.js";const t={};function l(p,e){return i(),n("div",null,e[0]||(e[0]=[a(`<p>忽略phpstan对方法参数的检查:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ignoreErrors:</span>
<span class="line">        	- &quot;#Method [a-zA-Z0-9\\\\_\\\\\\\\:\\\\(\\\\)]+ has parameter \\\\$[a-zA-Z0-9_]+ with no value type specified in iterable type array#&quot;</span>
<span class="line">        	- &quot;#Method [a-zA-Z0-9\\\\_\\\\\\\\:\\\\(\\\\)]+ return type has no value type specified in iterable type array#&quot;</span>
<span class="line">        	- &quot;#Property [a-zA-Z0-9\\\\$\\\\_\\\\\\\\:\\\\(\\\\)]+ type has no value type specified in iterable type array#&quot;</span>
<span class="line">        	</span>
<span class="line">参考:https://github.com/phpstan/phpstan/discussions/7287</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是之前的写法，主要目的是: 想给 $left 和 $right 类型声明，但是 array 值的类型，一直不确定，后来发现可以按下面的方式解决，原来是mixed就可以了，不用添加如上配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    /**</span>
<span class="line">     * @param array&lt;mixed&gt; $left</span>
<span class="line">     * @param array&lt;mixed&gt; $right</span>
<span class="line">     */</span>
<span class="line">    public function compareByDate($left = [], $right = [], string $order = &#39;asc&#39;): int</span>
<span class="line">    {</span>
<span class="line">        $dateLeft = $left[&#39;date&#39;]-&gt;getTimestamp();</span>
<span class="line">        $dateRight = $right[&#39;date&#39;]-&gt;getTimestamp();</span>
<span class="line"></span>
<span class="line">        $result = ($dateLeft &lt; $dateRight) ? -1 : 1;</span>
<span class="line"></span>
<span class="line">        return (&#39;asc&#39; == $order) ? $result : -$result;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=s(t,[["render",l],["__file","忽略phpstan对方法参数的检查.html.vue"]]),c=JSON.parse('{"path":"/content/php/base/%E5%BF%BD%E7%95%A5phpstan%E5%AF%B9%E6%96%B9%E6%B3%95%E5%8F%82%E6%95%B0%E7%9A%84%E6%A3%80%E6%9F%A5.html","title":"忽略phpstan对方法参数的检查","lang":"en-US","frontmatter":{"sidebar":false,"title":"忽略phpstan对方法参数的检查","description":"忽略phpstan对方法参数的检查"},"headers":[],"git":{},"filePathRelative":"content/php/base/忽略phpstan对方法参数的检查.md"}');export{d as comp,c as data};
