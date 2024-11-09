import{_ as i,o as n,c as s,g as e}from"./app.66ae8700.js";const l={},d=e(`<p>typescript\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u5B98\u7F51
https://www.typescriptlang.org/

2.\u5728\u7EBF\u8FD0\u884C\u73AF\u5883
https://www.typescriptlang.org/play

3.\u5B98\u65B9\u6587\u6863
https://gibbok.github.io/typescript-book/zh-cn/book/typescript-introduction/

4.\u56FD\u4EA7\u6587\u6863
https://wangdoc.com/typescript/

5.\u4F7F\u7528
1&gt;\u5B89\u88C5
tsc \u662F\u4E00\u4E2A npm \u6A21\u5757\uFF0C\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5B89\u88C5\uFF08\u5FC5\u987B\u5148\u5B89\u88C5 npm\uFF09\u3002
$ sudo npm install -g typescript

2&gt;\u67E5\u770B\u7248\u672C
$ tsc -v
Version 5.3.2

3&gt;\u4F7F\u7528
TypeScript \u5141\u8BB8\u5C06tsc\u7684\u7F16\u8BD1\u53C2\u6570\uFF0C\u5199\u5728\u914D\u7F6E\u6587\u4EF6tsconfig.json\u3002\u53EA\u8981\u5F53\u524D\u76EE\u5F55\u6709\u8FD9\u4E2A\u6587\u4EF6\uFF0Ctsc\u5C31\u4F1A\u81EA\u52A8\u8BFB\u53D6\uFF0C\u6240\u4EE5\u8FD0\u884C\u65F6\u53EF\u4EE5\u4E0D\u5199\u53C2\u6570\u3002

$ tsc file1.ts file2.ts --outFile dist/app.js

\u4E0A\u9762\u8FD9\u4E2A\u547D\u4EE4\u5199\u6210tsconfig.json\uFF0C\u5C31\u662F\u4E0B\u9762\u8FD9\u6837\uFF1A
{
  &quot;files&quot;: [&quot;file1.ts&quot;, &quot;file2.ts&quot;],
  &quot;compilerOptions&quot;: {
    &quot;outFile&quot;: &quot;dist/app.js&quot;
  }
}

\u6709\u4E86\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u7F16\u8BD1\u65F6\u76F4\u63A5\u8C03\u7528tsc\u547D\u4EE4\u5C31\u53EF\u4EE5\u4E86\uFF1A
$ tsc

4&gt;vue-tsc --noEmit\u7684\u4F7F\u7528
vue-tsc\uFF1AVue \u5B98\u65B9\u63D0\u4F9B\u7684\u547D\u4EE4\uFF0C\u7528\u4E8E\u6267\u884C TS \u7684\u7C7B\u578B\u68C0\u67E5\u3002\u5B83\u5728\u6267\u884C\u65F6\u4F1A\u6839\u636E\u9879\u76EE\u4E2D\u7684 tsconfig.json \u6587\u4EF6\u914D\u7F6E\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5
--noEmit\uFF1ATS \u7F16\u8BD1\u5668\u7684\u9009\u9879\uFF0C\u4F7F\u7528 --noEmit \u9009\u9879\u540E\uFF0C\u7F16\u8BD1\u5668\u4EC5\u6267\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u800C\u4E0D\u4F1A\u751F\u6210\u4EFB\u4F55\u5B9E\u9645\u7684\u7F16\u8BD1\u8F93\u51FA

\u4E00\u822C\u914D\u7F6E\u5728package.json\u7684scripts\u4E0B:
&quot;build&quot;: &quot;vue-tsc --noEmit &amp;&amp; nuxt build&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function v(c,u){return n(),s("div",null,t)}var a=i(l,[["render",v],["__file","typescript\u6587\u6863\u4EE5\u53CA\u8FD0\u884C\u73AF\u5883.html.vue"]]);export{a as default};
