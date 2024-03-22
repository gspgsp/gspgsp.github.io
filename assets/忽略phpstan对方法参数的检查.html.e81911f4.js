import{_ as e,o as i,c as t,g as n}from"./app.b04686bd.js";const a={},s=n(`<p>\u5FFD\u7565phpstan\u5BF9\u65B9\u6CD5\u53C2\u6570\u7684\u68C0\u67E5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ignoreErrors:
        	- &quot;#Method [a-zA-Z0-9\\\\_\\\\\\\\:\\\\(\\\\)]+ has parameter \\\\$[a-zA-Z0-9_]+ with no value type specified in iterable type array#&quot;
        	- &quot;#Method [a-zA-Z0-9\\\\_\\\\\\\\:\\\\(\\\\)]+ return type has no value type specified in iterable type array#&quot;
        	- &quot;#Property [a-zA-Z0-9\\\\$\\\\_\\\\\\\\:\\\\(\\\\)]+ type has no value type specified in iterable type array#&quot;
        	
\u53C2\u8003:https://github.com/phpstan/phpstan/discussions/7287
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u662F\u4E4B\u524D\u7684\u5199\u6CD5\uFF0C\u4E3B\u8981\u76EE\u7684\u662F: \u60F3\u7ED9 $left \u548C $right \u7C7B\u578B\u58F0\u660E\uFF0C\u4F46\u662F array \u503C\u7684\u7C7B\u578B\uFF0C\u4E00\u76F4\u4E0D\u786E\u5B9A\uFF0C\u540E\u6765\u53D1\u73B0\u53EF\u4EE5\u6309\u4E0B\u9762\u7684\u65B9\u5F0F\u89E3\u51B3\uFF0C\u539F\u6765\u662Fmixed\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E0D\u7528\u6DFB\u52A0\u5982\u4E0A\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    /**
     * @param array&lt;mixed&gt; $left
     * @param array&lt;mixed&gt; $right
     */
    public function compareByDate($left = [], $right = [], string $order = &#39;asc&#39;): int
    {
        $dateLeft = $left[&#39;date&#39;]-&gt;getTimestamp();
        $dateRight = $right[&#39;date&#39;]-&gt;getTimestamp();

        $result = ($dateLeft &lt; $dateRight) ? -1 : 1;

        return (&#39;asc&#39; == $order) ? $result : -$result;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[s];function d(l,c){return i(),t("div",null,r)}var v=e(a,[["render",d],["__file","\u5FFD\u7565phpstan\u5BF9\u65B9\u6CD5\u53C2\u6570\u7684\u68C0\u67E5.html.vue"]]);export{v as default};
