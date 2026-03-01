import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function t(c,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>js将转化为某天某小时某分钟某秒:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function formatSecToStr(seconds){</span>
<span class="line">    let daySec = 24 *  60 * 60;</span>
<span class="line">	let hourSec=  60 * 60;</span>
<span class="line">	let minuteSec=60;</span>
<span class="line">    let dd = Math.floor(seconds / daySec);</span>
<span class="line">    let hh = Math.floor((seconds % daySec) / hourSec);</span>
<span class="line">    let mm = Math.floor((seconds % hourSec) / minuteSec);</span>
<span class="line">	let ss=seconds%minuteSec;</span>
<span class="line">    if(dd &gt; 0){</span>
<span class="line">      return dd + &quot;天&quot; + hh + &quot;小时&quot; + mm + &quot;分钟&quot;+ss+&quot;秒&quot;;</span>
<span class="line">    }else if(hh &gt; 0){</span>
<span class="line">      return hh + &quot;小时&quot; + mm + &quot;分钟&quot;+ss+&quot;秒&quot;;</span>
<span class="line">    } else if (mm &gt; 0){</span>
<span class="line">      return mm + &quot;分钟&quot;+ss+&quot;秒&quot;;</span>
<span class="line">    }else{</span>
<span class="line">      return ss+&quot;秒&quot;;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(i,[["render",t],["__file","js将转化为某天某小时某分钟某秒.html.vue"]]),o=JSON.parse('{"path":"/content/front/js/js%E5%B0%86%E8%BD%AC%E5%8C%96%E4%B8%BA%E6%9F%90%E5%A4%A9%E6%9F%90%E5%B0%8F%E6%97%B6%E6%9F%90%E5%88%86%E9%92%9F%E6%9F%90%E7%A7%92.html","title":"js将转化为某天某小时某分钟某秒","lang":"en-US","frontmatter":{"sidebar":false,"title":"js将转化为某天某小时某分钟某秒","description":"js将转化为某天某小时某分钟某秒"},"headers":[],"git":{},"filePathRelative":"content/front/js/js将转化为某天某小时某分钟某秒.md"}');export{r as comp,o as data};
