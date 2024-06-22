import{_ as e,o,c as p,a as n,g as c,r as s}from"./app.dd03cafd.js";const i={},u=c(`<p>gin\u6846\u67B6\u4E0B\u5C06\u5FAE\u4FE1\u9884\u652F\u4ED8\u94FE\u63A5\u8F6Cbase64\u56FE\u7247\u6D41\uFF1A</p><p>1.\u5B89\u88C5\u9700\u8981\u7684\u62D3\u5C55\u5305 go get github.com/skip2/go-qrcode</p><p>2.\u5177\u4F53\u5B9E\u73B0\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ReturnValue</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    qrCode<span class="token punctuation">,</span> err <span class="token operator">:=</span> qrcode<span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span><span class="token string">&quot;weixin://wxpay/bizpayurl?pr=6094umbzz&quot;</span><span class="token punctuation">,</span> qrcode<span class="token punctuation">.</span>Medium<span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;resp&quot;</span><span class="token punctuation">:</span> err<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    base64Data <span class="token operator">:=</span> base64<span class="token punctuation">.</span>StdEncoding<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>qrCode<span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span>gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span>
        <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u6210\u529F&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;data:image/png;base64,&quot;</span><span class="token operator">+</span>base64Data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5C0F\u6280\u5DE7\uFF1A
1.\u5982\u679C\u4E0D\u60F3\u8FD4\u56DEjson\u6570\u636E\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528 c.Data \u8FD4\u56DE\u6307\u5B9A\u683C\u5F0F\u7684\u6570\u636E
 c.JSON(http.StatusOK,gin.H{
        &quot;code&quot;:http.StatusOK,
        &quot;message&quot;:&quot;\u6210\u529F&quot;,
        &quot;data&quot;:&quot;data:image/png;base64,&quot;+base64Data,
    })

c.Data(200,&quot;Content-Type/image/png&quot;,qrCode)// qrCode\u4E3A[]byte \u7C7B\u578B, \u76F4\u63A5\u8F93\u51FA\u56FE\u7247\u5230\u5BA2\u6237\u7AEF

2.\u901A\u8FC7 fmt.Fprint \u8FD4\u56DE\u6307\u5B9A\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u8FD9\u4E2A\u5728\u652F\u4ED8\u5B9D\u652F\u4ED8\u7684\u65F6\u5019\u4F1A\u7528\u5230

const (
    AckSuccess = \`&lt;xml&gt;&lt;return_code&gt;&lt;![CDATA[SUCCESS]]&gt;&lt;/return_code&gt;&lt;/xml&gt;\`
    AckFail    = \`&lt;xml&gt;&lt;return_code&gt;&lt;![CDATA[FAIL]]&gt;&lt;/return_code&gt;&lt;/xml&gt;\`
)

fmt.Fprint(c.Writer, AckSuccess)//\u76F4\u63A5\u8C03\u7528\u8FD9\u4E2A\u5C31\u4F1A\u8FD4\u56DE\u6570\u636E\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u56E0\u4E3Awriter\u4F1A\u5199\u6570\u636E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function l(r,d){const a=s("BackBtn"),t=s("CommentService");return o(),p("div",null,[u,n(a),n(t)])}var k=e(i,[["render",l],["__file","gin\u6846\u67B6\u4E0B\u5C06\u5FAE\u4FE1\u9884\u652F\u4ED8\u94FE\u63A5\u8F6Cbase64\u56FE\u7247\u6D41.html.vue"]]);export{k as default};
