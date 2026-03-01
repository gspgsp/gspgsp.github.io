import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>js之json对象转数组_字符串:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.json对象转字符串</span>
<span class="line">function getStringFromJson(obj) {</span>
<span class="line">  let str = &quot;&quot;;</span>
<span class="line">  Object.keys(obj).forEach((v) =&gt; {</span>
<span class="line">    str += v + &quot;:&quot; + obj[v] + &quot;\\n&quot;;</span>
<span class="line">  });</span>
<span class="line">  return str;</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">2.json对象转数组</span>
<span class="line">function getStringFromJson(obj) {</span>
<span class="line">  const arr = [];</span>
<span class="line">  Object.keys(obj).forEach((v) =&gt; {</span>
<span class="line">    const o = {};</span>
<span class="line">    o[v] = obj[v];</span>
<span class="line">    arr.push(o);</span>
<span class="line">  });</span>
<span class="line">  return arr;</span>
<span class="line">}  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",t],["__file","js之json对象转数组_字符串.html.vue"]]),o=JSON.parse('{"path":"/content/front/js/js%E4%B9%8Bjson%E5%AF%B9%E8%B1%A1%E8%BD%AC%E6%95%B0%E7%BB%84_%E5%AD%97%E7%AC%A6%E4%B8%B2.html","title":"js之json对象转数组_字符串","lang":"en-US","frontmatter":{"sidebar":false,"title":"js之json对象转数组_字符串","description":"js之json对象转数组_字符串"},"headers":[],"git":{},"filePathRelative":"content/front/js/js之json对象转数组_字符串.md"}');export{d as comp,o as data};
