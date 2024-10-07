import{_ as i,o as e,c as n,g as l}from"./app.d66d8774.js";const t={},s=l(`<p>img\u6807\u7B7E\u5C45\u4E2D\u4E4Btext-align: \`\`\`text\` \u91CD\u8981\u7684\u4E00\u70B9\uFF0C\u9700\u8981\u5C06img\u7684\u6837\u5F0F\u8BBE\u7F6E:display: inline-block;\u6216\u8005 display: inline;\u4E0D\u80FD\u8BBE\u7F6E\u4E3Adisplay: block; text-align\u53EA\u5BF9\u6587\u5B57\uFF0C\u884C\u5185\u5143\u7D20\uFF08inline\uFF09\uFF0C\u884C\u5185\u5757\u5143\u7D20\uFF08inline-block\uFF09\u8D77\u4F5C\u7528\uFF0C\u5BF9\u5757\u5143\u7D20\uFF08block\uFF09\u4E0D\u8D77\u4F5C\u7528\u3002</p><p>\u5B98\u65B9\u6587\u6863:https://developer.mozilla.org/en-US/docs/Web/CSS/text-align The text-align CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.</p><p>\u8865\u5145:\u5173\u4E8Eimg\u6807\u7B7E <img> \u662F\u4E00\u4E2A\u53EF\u66FF\u6362\u5143\u7D20\u3002\u5B83\u7684 display \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u662F inline\uFF0C\u4F46\u662F\u5B83\u7684\u9ED8\u8BA4\u5206\u8FA8\u7387\u662F\u7531\u88AB\u5D4C\u5165\u7684\u56FE\u7247\u7684\u539F\u59CB\u5BBD\u9AD8\u6765\u786E\u5B9A\u7684\uFF0C\u4F7F\u5F97\u5B83\u5C31\u50CF inline-block \u4E00\u6837\u3002\u4F60\u53EF\u4EE5\u4E3A <img> \u8BBE\u7F6E border/border-radius\u3001padding/margin\u3001width\u3001height \u7B49 CSS \u5C5E\u6027\u3002</p><p>\u8865\u5145:vertical-align https://www.cnblogs.com/fsg6/p/12711341.html // \u8FD9\u4E2A\u91CC\u9762\u6709\u4EE3\u7801\u4EE3\u7801\u53EF\u5B9E\u73B0 \u56FE+\u6587\u5B57\u5782\u76F4\u5C45\u4E2D(\u56FE\u7247\u5E95\u90E8\u7A7A\u767D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u7236\u7EA7\u7684font-size\uFF1A0;\u89E3\u51B3:https://www.cnblogs.com/goloving/p/8526095.html):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

\u56FE\u7247\u6587\u5B57\u5C45\u4E2D\u7684\u6848\u4F8B:
\`\`\`html
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;

    &lt;style&gt;

    .a{
        width: 600px;
        height: 600px;
        background-color: #bfa;
        &lt;-----\u8FD9\u91CC\u53EF\u4EE5\u8BBE\u7F6Eline-height:600px;\u4F7F\u6574\u4E2A\u9875\u9762\u7684\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D -----&gt;
    }

    img{
        vertical-align: middle;//\u662F\u56FE\u7247\u8BBE\u7F6Evertical-align\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u6587\u5B57
        width: 20%;
        height: 20%;

    }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;a&quot;&gt;
        &lt;img src=&quot;https://image.helixlife.cn/edu-cn/package/202003/qyuJO6dp2L9gWZwXwVaV1G4698Y73Ua1ptnm3bi4.png&quot; alt=&quot;&quot;&gt;
    	&lt;span&gt;nioifhiughi&lt;/span&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u7EBF\u8FD0\u884Ccss+html\u5E73\u53F0: https://developer.mozilla.org/en-US/play</p>`,6),d=[s];function a(v,c){return e(),n("div",null,d)}var m=i(t,[["render",a],["__file","img\u6807\u7B7E\u5C45\u4E2D\u4E4Btext-align.html.vue"]]);export{m as default};
