import{_ as n,o as e,c as i,g as s}from"./app.d66d8774.js";const r={},l=s(`<p>js\u4E4Bjson\u5BF9\u8C61\u8F6C\u6570\u7EC4_\u5B57\u7B26\u4E32:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.json\u5BF9\u8C61\u8F6C\u5B57\u7B26\u4E32
function getStringFromJson(obj) {
  let str = &quot;&quot;;
  Object.keys(obj).forEach((v) =&gt; {
    str += v + &quot;:&quot; + obj[v] + &quot;\\n&quot;;
  });
  return str;
}
  
2.json\u5BF9\u8C61\u8F6C\u6570\u7EC4
function getStringFromJson(obj) {
  const arr = [];
  Object.keys(obj).forEach((v) =&gt; {
    const o = {};
    o[v] = obj[v];
    arr.push(o);
  });
  return arr;
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function t(v,c){return e(),i("div",null,d)}var a=n(r,[["render",t],["__file","js\u4E4Bjson\u5BF9\u8C61\u8F6C\u6570\u7EC4_\u5B57\u7B26\u4E32.html.vue"]]);export{a as default};
