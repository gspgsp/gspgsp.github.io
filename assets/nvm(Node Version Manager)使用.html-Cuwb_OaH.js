import{_ as s,c as a,d as i,o as l}from"./app-C7j_h9cy.js";const e={};function d(v,n){return l(),a("div",null,n[0]||(n[0]=[i(`<p>nvm(Node Version Manager)使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1&gt;官方介绍</span>
<span class="line">https://github.com/nvm-sh/nvm</span>
<span class="line">2&gt;ubuntu22 安装nvm</span>
<span class="line">//The script clones the nvm repository to ~/.nvm， 我这里指定的版本是v0.39.7,可以根据实际配置</span>
<span class="line">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash</span>
<span class="line"></span>
<span class="line">默认上面的脚本执行完以后，会在 ~/.bashrc 里追加下面的内容</span>
<span class="line"></span>
<span class="line">export NVM_DIR=&quot;$HOME/.nvm&quot;</span>
<span class="line">[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # This loads nvm</span>
<span class="line">[ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;  # This loads nvm bash_completion</span>
<span class="line"></span>
<span class="line">然后执行:</span>
<span class="line">source ~/.bashrc</span>
<span class="line"></span>
<span class="line">查看是否安装成功:</span>
<span class="line">nvm --version</span>
<span class="line">0.39.7</span>
<span class="line">或者运行 command -v nvm</span>
<span class="line">nvm</span>
<span class="line">表示安装完成</span>
<span class="line">参考：</span>
<span class="line">https://blog.csdn.net/lxyoucan/article/details/130288356</span>
<span class="line">https://github.com/nvm-sh/nvm //官网</span>
<span class="line"></span>
<span class="line">3&gt;使用，下面安装一个v18.xxx的版本，这里是 v18.19.0</span>
<span class="line">nvm install lts/hydrogen (这里 hydrogen 只是v18版本的一个名称，这样会下载最新的v18版本)或者直接 nvm install 18.19.0，注意可能会有权限问题</span>
<span class="line"></span>
<span class="line">nvm use 18.19.0</span>
<span class="line"></span>
<span class="line">再切换会之前安装的 nvm use system</span>
<span class="line"></span>
<span class="line">使用的过程中我发现，使用nvm use，只能临时有效。重新打开新的终端版本又变回原来的了</span>
<span class="line">如果让设置永久生效呢? nvm alias default xx.xx.x</span>
<span class="line"></span>
<span class="line">nvm alias default 18.19.0，当然切换回之前的版本也是 nvm alias default system</span>
<span class="line"></span>
<span class="line">4&gt;查看本地node安装的版本</span>
<span class="line">nvm list</span>
<span class="line"></span>
<span class="line">-&gt;       system</span>
<span class="line">iojs -&gt; N/A (default)</span>
<span class="line">node -&gt; stable (-&gt; N/A) (default)</span>
<span class="line">unstable -&gt; N/A (default)</span>
<span class="line">lts/* -&gt; lts/iron (-&gt; N/A)</span>
<span class="line">lts/argon -&gt; v4.9.1 (-&gt; N/A)</span>
<span class="line">lts/boron -&gt; v6.17.1 (-&gt; N/A)</span>
<span class="line">lts/carbon -&gt; v8.17.0 (-&gt; N/A)</span>
<span class="line">lts/dubnium -&gt; v10.24.1 (-&gt; N/A)</span>
<span class="line">lts/erbium -&gt; v12.22.12 (-&gt; N/A)</span>
<span class="line">lts/fermium -&gt; v14.21.3 (-&gt; N/A)</span>
<span class="line">lts/gallium -&gt; v16.20.2 (-&gt; N/A)</span>
<span class="line">lts/hydrogen -&gt; v18.19.0 (-&gt; N/A)</span>
<span class="line">lts/iron -&gt; v20.10.0 (-&gt; N/A)</span>
<span class="line"></span>
<span class="line">注意上面展示了，通过nvm安装和自定义安装的node, 比如上面的 system, 其实就是我之前手动安装的 v19.3.0 版本</span>
<span class="line"></span>
<span class="line">4&gt;配合 .nvmrc 使用</span>
<span class="line">我这直接在这个文件里面配置 lts/hydrogen // v18.xx版本</span>
<span class="line"></span>
<span class="line">5&gt;权限问题解决方案</span>
<span class="line">在自行 nvm install 18.19.0的时候可能会报类似下面的错误</span>
<span class="line">Downloading and installing node v19.4.0...</span>
<span class="line">Downloading https://nodejs.org/dist/v19.4.0/node-v19.4.0-linux-x64.tar.xz...</span>
<span class="line">Warning: Failed to open the file                                               </span>
<span class="line">Warning: /home/wang/.nvm/.cache/bin/node-v19.4.0-linux-x64/node-v19.4.0-linux-x</span>
<span class="line">Warning: 64.tar.xz: Permission denied</span>
<span class="line">curl: (23) Failure writing output to destination</span>
<span class="line"></span>
<span class="line">Binary download from https://nodejs.org/dist/v19.4.0/node-v19.4.0-linux-x64.tar.xz failed, trying source.</span>
<span class="line">grep: /home/wang/.nvm/.cache/bin/node-v19.4.0-linux-x64/node-v19.4.0-linux-x64.tar.xz: 没有那个文件或目录</span>
<span class="line">Provided file to checksum does not exist.</span>
<span class="line">Binary download failed, trying source.</span>
<span class="line">Downloading https://nodejs.org/dist/v19.4.0/node-v19.4.0.tar.xz...</span>
<span class="line">Warning: Failed to open the file                                               </span>
<span class="line">Warning: /home/wang/.nvm/.cache/src/node-v19.4.0/node-v19.4.0.tar.xz: </span>
<span class="line">Warning: Permission denied</span>
<span class="line">curl: (23) Failure writing output to destination</span>
<span class="line"></span>
<span class="line">Binary download from https://nodejs.org/dist/v19.4.0/node-v19.4.0.tar.xz failed, trying source.</span>
<span class="line">grep: /home/wang/.nvm/.cache/src/node-v19.4.0/node-v19.4.0.tar.xz: 没有那个文件或目录</span>
<span class="line">Provided file to checksum does not exist.</span>
<span class="line">  </span>
<span class="line">解决思路:</span>
<span class="line">观察报错信息，发现下载安装包时就报错了，错误信息为 curl: (23) Failure writing output to destination</span>
<span class="line">出现这个错误，首先想到我的 curl 是通过 snap 安装的，那么卸载使用apt重装试试，因为官方文档里有人一直在说这个snap,可以去看看，我开始也不知道为什么.</span>
<span class="line"></span>
<span class="line">解决方案:</span>
<span class="line">确认一下你的curl是不是用snap安装的:</span>
<span class="line">sudo snap list | grep curl</span>
<span class="line"></span>
<span class="line">有输出，则为snap安装，则卸载:</span>
<span class="line">sudo snap remove curl</span>
<span class="line"></span>
<span class="line">然后用apt重新安装:</span>
<span class="line">sudo apt install curl</span>
<span class="line"></span>
<span class="line">最后重新运行安装命令:</span>
<span class="line">nvm install 18.19.0</span>
<span class="line"></span>
<span class="line">执行完install 以后默认会自动把这个安装的版本设置为默认版本</span>
<span class="line">  </span>
<span class="line">https://blog.csdn.net/m0_63969219/article/details/128712231</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(e,[["render",d],["__file","nvm(Node Version Manager)使用.html.vue"]]),r=JSON.parse('{"path":"/content/tool/front/nvm(Node%20Version%20Manager)%E4%BD%BF%E7%94%A8.html","title":"nvm(Node Version Manager)使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"nvm(Node Version Manager)使用","description":"nvm(Node Version Manager)使用"},"headers":[],"git":{},"filePathRelative":"content/tool/front/nvm(Node Version Manager)使用.md"}');export{p as comp,r as data};
