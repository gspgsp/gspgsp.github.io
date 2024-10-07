import{_ as n,o as s,c as a,g as e}from"./app.d66d8774.js";const i={},t=e(`<p>ubuntu22\u5C06\u666E\u901A\u7528\u6237\u6DFB\u52A0\u8D85\u7EA7\u7BA1\u7406\u5458\u6743\u9650\u514D\u5BC6:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5B98\u65B9\u63A8\u8350\u4F7F\u7528 <span class="token function">sudo</span> visudo /etc/sudoers\uFF0C \u7136\u540E\u4FEE\u6539  ctrl +o  \u56DE\u8F66 ctrl+x \u5373\u53EF
  
<span class="token comment"># User privilege specification</span>
root    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> ALL

<span class="token comment"># Members of the admin group may gain root privileges</span>
%admin <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> ALL

<span class="token comment"># Allow members of group sudo to execute any command</span>
%sudo   <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> ALL
qinhong    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> NOPASSWD: ALL  //\u53EF\u4EE5\u4F7F\u7528 <span class="token function">sudo</span> \u4E0D\u7528\u8F93\u5BC6\u7801\uFF0C\u4F46\u662F\u8FD8\u662F\u8981sudo\u64CD\u4F5C

  
\u4F7F\u7528:
<span class="token function">tee</span> /etc/sudoers.d/qinhong <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&#39;qinhong ALL=(ALL) NOPASSWD: ALL&#39;</span> //\u53E6\u4E00\u79CD\u65B9\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function l(c,p){return s(),a("div",null,o)}var r=n(i,[["render",l],["__file","ubuntu22\u5C06\u666E\u901A\u7528\u6237\u6DFB\u52A0\u8D85\u7EA7\u7BA1\u7406\u5458\u6743\u9650\u514D\u5BC6.html.vue"]]);export{r as default};
