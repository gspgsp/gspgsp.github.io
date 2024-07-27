import{_ as n,o as s,c as e,g as i}from"./app.6e4bf74b.js";const a={},l=i(`<p>git\u4E4Bpost-merge\u94A9\u5B50\u51FD\u6570: \u5728\u4F7F\u7528\u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570\u4E4B\u524D\uFF0C\u5148\u8865\u5145\u4E00\u4E2Agit pull \u7684\u539F\u7406: git pull \u5305\u542B\u4E24\u4E2A\u64CD\u4F5C\uFF0Cgit fetch\u548Cgit merge</p><p>git fetch\uFF1A\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u5230\u672C\u5730\u4ED3\u5E93 git merge\uFF1A\u5C06\u672C\u5730\u4ED3\u5E93\u4E0E\u5206\u652F\u8FDB\u884Cmerge git pull\u6267\u884C\u65F6\uFF0C\u4F1A\u5148\u5411\u8FDC\u7A0B\u53D1\u9001git-upload-pack\u8BF7\u6C42\uFF0C\u643A\u5E26\u662F\u672C\u5730\u4ED3\u5E93commit\u7684\u8BB0\u5F55\uFF0C\u5982\u679C\u4E00\u6837\u5C31\u4E0D\u9700\u8981\u62C9\u53D6\uFF0C\u4E0D\u4E00\u6837\u5C31\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u4E0B\u6765\u3002</p><p>\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7git pull\u6216\u8005 git merge \u89E6\u53D1\u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570.</p><p>\u6253\u5F00\u9879\u76EE\u7684 .git\u76EE\u5F55\uFF0C\u7136\u540E\u6253\u5F00\u91CC\u9762\u7684hooks\u76EE\u5F55\uFF0C\u4F1A\u53D1\u73B0\u5404\u79CD .sample\u7ED3\u5C3E\u7684\u94A9\u5B50\u51FD\u6570. vim post-merge \u65B0\u5EFA\u6587\u4EF6\uFF0C\u6839\u636E\u9879\u76EEpull\u4E4B\u540E\u9700\u8981\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u6DFB\u52A0\u811A\u672C\uFF0C\u8FD9\u91CC\u7ED9\u4E2A\u4F8B\u5B50:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;composer install&#39;</span>
php8.1 /usr/bin/composer <span class="token function">install</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;invoking schema update&quot;</span>
php8.1 bin/console doctrine:migrations:migrate

<span class="token comment">#yarn</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;build admin resource&#39;</span>
<span class="token function">yarn</span> run dev

<span class="token comment">#web</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;build web resource&#39;</span>
<span class="token builtin class-name">cd</span> web-project
<span class="token function">yarn</span> build

<span class="token comment">#restart service</span>
supervisorctl restart web:web_project_00

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ECF\u8FC7\u4E0A\u9762\u7684\u64CD\u4F5C\uFF0Cphp \u5B89\u88C5\u6307\u5B9A\u7684\u4F9D\u8D56 \u6570\u636E\u5E93\u8FC1\u79FB \u4EE5\u53CA\u76F8\u5173\u9759\u6001\u8D44\u6E90\u7684\u6253\u5305\uFF1Bnuxt \u6253\u5305\u8D44\u6E90; supervisorctl \u91CD\u542F\u5B88\u62A4\u8FDB\u7A0B</p>`,6),t=[l];function c(r,p){return s(),e("div",null,t)}var d=n(a,[["render",c],["__file","git\u4E4Bpost-merge\u94A9\u5B50\u51FD\u6570.html.vue"]]);export{d as default};
