import{_ as e,o as n,c as s,g as i}from"./app.66ae8700.js";const t={},d=i(`<p>js\u5C06\u8F6C\u5316\u4E3A\u67D0\u5929\u67D0\u5C0F\u65F6\u67D0\u5206\u949F\u67D0\u79D2:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function formatSecToStr(seconds){
    let daySec = 24 *  60 * 60;
	let hourSec=  60 * 60;
	let minuteSec=60;
    let dd = Math.floor(seconds / daySec);
    let hh = Math.floor((seconds % daySec) / hourSec);
    let mm = Math.floor((seconds % hourSec) / minuteSec);
	let ss=seconds%minuteSec;
    if(dd &gt; 0){
      return dd + &quot;\u5929&quot; + hh + &quot;\u5C0F\u65F6&quot; + mm + &quot;\u5206\u949F&quot;+ss+&quot;\u79D2&quot;;
    }else if(hh &gt; 0){
      return hh + &quot;\u5C0F\u65F6&quot; + mm + &quot;\u5206\u949F&quot;+ss+&quot;\u79D2&quot;;
    } else if (mm &gt; 0){
      return mm + &quot;\u5206\u949F&quot;+ss+&quot;\u79D2&quot;;
    }else{
      return ss+&quot;\u79D2&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function u(c,o){return n(),s("div",null,l)}var a=e(t,[["render",u],["__file","js\u5C06\u8F6C\u5316\u4E3A\u67D0\u5929\u67D0\u5C0F\u65F6\u67D0\u5206\u949F\u67D0\u79D2.html.vue"]]);export{a as default};
