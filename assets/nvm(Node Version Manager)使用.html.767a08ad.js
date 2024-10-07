import{_ as n,o as i,c as e,g as s}from"./app.d66d8774.js";const l={},d=s(`<p>nvm(Node Version Manager)\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1&gt;\u5B98\u65B9\u4ECB\u7ECD
https://github.com/nvm-sh/nvm
2&gt;ubuntu22 \u5B89\u88C5nvm
//The script clones the nvm repository to ~/.nvm\uFF0C \u6211\u8FD9\u91CC\u6307\u5B9A\u7684\u7248\u672C\u662Fv0.39.7,\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u914D\u7F6E
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

\u9ED8\u8BA4\u4E0A\u9762\u7684\u811A\u672C\u6267\u884C\u5B8C\u4EE5\u540E\uFF0C\u4F1A\u5728 ~/.bashrc \u91CC\u8FFD\u52A0\u4E0B\u9762\u7684\u5185\u5BB9

export NVM_DIR=&quot;$HOME/.nvm&quot;
[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # This loads nvm
[ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;  # This loads nvm bash_completion

\u7136\u540E\u6267\u884C:
source ~/.bashrc

\u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F:
nvm --version
0.39.7
\u6216\u8005\u8FD0\u884C command -v nvm
nvm
\u8868\u793A\u5B89\u88C5\u5B8C\u6210
\u53C2\u8003\uFF1A
https://blog.csdn.net/lxyoucan/article/details/130288356
https://github.com/nvm-sh/nvm //\u5B98\u7F51

3&gt;\u4F7F\u7528\uFF0C\u4E0B\u9762\u5B89\u88C5\u4E00\u4E2Av18.xxx\u7684\u7248\u672C\uFF0C\u8FD9\u91CC\u662F v18.19.0
nvm install lts/hydrogen (\u8FD9\u91CC hydrogen \u53EA\u662Fv18\u7248\u672C\u7684\u4E00\u4E2A\u540D\u79F0\uFF0C\u8FD9\u6837\u4F1A\u4E0B\u8F7D\u6700\u65B0\u7684v18\u7248\u672C)\u6216\u8005\u76F4\u63A5 nvm install 18.19.0\uFF0C\u6CE8\u610F\u53EF\u80FD\u4F1A\u6709\u6743\u9650\u95EE\u9898

nvm use 18.19.0

\u518D\u5207\u6362\u4F1A\u4E4B\u524D\u5B89\u88C5\u7684 nvm use system

\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u6211\u53D1\u73B0\uFF0C\u4F7F\u7528nvm use\uFF0C\u53EA\u80FD\u4E34\u65F6\u6709\u6548\u3002\u91CD\u65B0\u6253\u5F00\u65B0\u7684\u7EC8\u7AEF\u7248\u672C\u53C8\u53D8\u56DE\u539F\u6765\u7684\u4E86
\u5982\u679C\u8BA9\u8BBE\u7F6E\u6C38\u4E45\u751F\u6548\u5462? nvm alias default xx.xx.x

nvm alias default 18.19.0\uFF0C\u5F53\u7136\u5207\u6362\u56DE\u4E4B\u524D\u7684\u7248\u672C\u4E5F\u662F nvm alias default system

4&gt;\u67E5\u770B\u672C\u5730node\u5B89\u88C5\u7684\u7248\u672C
nvm list

-&gt;       system
iojs -&gt; N/A (default)
node -&gt; stable (-&gt; N/A) (default)
unstable -&gt; N/A (default)
lts/* -&gt; lts/iron (-&gt; N/A)
lts/argon -&gt; v4.9.1 (-&gt; N/A)
lts/boron -&gt; v6.17.1 (-&gt; N/A)
lts/carbon -&gt; v8.17.0 (-&gt; N/A)
lts/dubnium -&gt; v10.24.1 (-&gt; N/A)
lts/erbium -&gt; v12.22.12 (-&gt; N/A)
lts/fermium -&gt; v14.21.3 (-&gt; N/A)
lts/gallium -&gt; v16.20.2 (-&gt; N/A)
lts/hydrogen -&gt; v18.19.0 (-&gt; N/A)
lts/iron -&gt; v20.10.0 (-&gt; N/A)

\u6CE8\u610F\u4E0A\u9762\u5C55\u793A\u4E86\uFF0C\u901A\u8FC7nvm\u5B89\u88C5\u548C\u81EA\u5B9A\u4E49\u5B89\u88C5\u7684node, \u6BD4\u5982\u4E0A\u9762\u7684 system, \u5176\u5B9E\u5C31\u662F\u6211\u4E4B\u524D\u624B\u52A8\u5B89\u88C5\u7684 v19.3.0 \u7248\u672C

4&gt;\u914D\u5408 .nvmrc \u4F7F\u7528
\u6211\u8FD9\u76F4\u63A5\u5728\u8FD9\u4E2A\u6587\u4EF6\u91CC\u9762\u914D\u7F6E lts/hydrogen // v18.xx\u7248\u672C

5&gt;\u6743\u9650\u95EE\u9898\u89E3\u51B3\u65B9\u6848
\u5728\u81EA\u884C nvm install 18.19.0\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u62A5\u7C7B\u4F3C\u4E0B\u9762\u7684\u9519\u8BEF
Downloading and installing node v19.4.0...
Downloading https://nodejs.org/dist/v19.4.0/node-v19.4.0-linux-x64.tar.xz...
Warning: Failed to open the file                                               
Warning: /home/wang/.nvm/.cache/bin/node-v19.4.0-linux-x64/node-v19.4.0-linux-x
Warning: 64.tar.xz: Permission denied
curl: (23) Failure writing output to destination

Binary download from https://nodejs.org/dist/v19.4.0/node-v19.4.0-linux-x64.tar.xz failed, trying source.
grep: /home/wang/.nvm/.cache/bin/node-v19.4.0-linux-x64/node-v19.4.0-linux-x64.tar.xz: \u6CA1\u6709\u90A3\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55
Provided file to checksum does not exist.
Binary download failed, trying source.
Downloading https://nodejs.org/dist/v19.4.0/node-v19.4.0.tar.xz...
Warning: Failed to open the file                                               
Warning: /home/wang/.nvm/.cache/src/node-v19.4.0/node-v19.4.0.tar.xz: 
Warning: Permission denied
curl: (23) Failure writing output to destination

Binary download from https://nodejs.org/dist/v19.4.0/node-v19.4.0.tar.xz failed, trying source.
grep: /home/wang/.nvm/.cache/src/node-v19.4.0/node-v19.4.0.tar.xz: \u6CA1\u6709\u90A3\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55
Provided file to checksum does not exist.
  
\u89E3\u51B3\u601D\u8DEF:
\u89C2\u5BDF\u62A5\u9519\u4FE1\u606F\uFF0C\u53D1\u73B0\u4E0B\u8F7D\u5B89\u88C5\u5305\u65F6\u5C31\u62A5\u9519\u4E86\uFF0C\u9519\u8BEF\u4FE1\u606F\u4E3A curl: (23) Failure writing output to destination
\u51FA\u73B0\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u9996\u5148\u60F3\u5230\u6211\u7684 curl \u662F\u901A\u8FC7 snap \u5B89\u88C5\u7684\uFF0C\u90A3\u4E48\u5378\u8F7D\u4F7F\u7528apt\u91CD\u88C5\u8BD5\u8BD5\uFF0C\u56E0\u4E3A\u5B98\u65B9\u6587\u6863\u91CC\u6709\u4EBA\u4E00\u76F4\u5728\u8BF4\u8FD9\u4E2Asnap,\u53EF\u4EE5\u53BB\u770B\u770B\uFF0C\u6211\u5F00\u59CB\u4E5F\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48.

\u89E3\u51B3\u65B9\u6848:
\u786E\u8BA4\u4E00\u4E0B\u4F60\u7684curl\u662F\u4E0D\u662F\u7528snap\u5B89\u88C5\u7684:
sudo snap list | grep curl

\u6709\u8F93\u51FA\uFF0C\u5219\u4E3Asnap\u5B89\u88C5\uFF0C\u5219\u5378\u8F7D:
sudo snap remove curl

\u7136\u540E\u7528apt\u91CD\u65B0\u5B89\u88C5:
sudo apt install curl

\u6700\u540E\u91CD\u65B0\u8FD0\u884C\u5B89\u88C5\u547D\u4EE4:
nvm install 18.19.0

\u6267\u884C\u5B8Cinstall \u4EE5\u540E\u9ED8\u8BA4\u4F1A\u81EA\u52A8\u628A\u8FD9\u4E2A\u5B89\u88C5\u7684\u7248\u672C\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u7248\u672C
  
https://blog.csdn.net/m0_63969219/article/details/128712231
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,t){return i(),e("div",null,v)}var u=n(l,[["render",a],["__file","nvm(Node Version Manager)\u4F7F\u7528.html.vue"]]);export{u as default};
