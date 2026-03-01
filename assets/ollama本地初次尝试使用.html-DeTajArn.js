import{_ as n,c as a,f as l,o as e}from"./app-BB_BIQV8.js";const i={};function d(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<p>ollama本地初次尝试使用:</p><ul><li>安装</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ curl -fsSL https://ollama.com/install.sh | sh</span>
<span class="line">&gt;&gt;&gt; Installing ollama to /usr/local</span>
<span class="line">&gt;&gt;&gt; Downloading Linux amd64 CLI</span>
<span class="line">######################################################################## 100.0%##O=#  #                                                                      </span>
<span class="line">&gt;&gt;&gt; Making ollama accessible in the PATH in /usr/local/bin</span>
<span class="line">&gt;&gt;&gt; Creating ollama user...</span>
<span class="line">&gt;&gt;&gt; Adding ollama user to render group...</span>
<span class="line">&gt;&gt;&gt; Adding ollama user to video group...</span>
<span class="line">&gt;&gt;&gt; Adding current user to ollama group...</span>
<span class="line">&gt;&gt;&gt; Creating ollama systemd service...</span>
<span class="line">&gt;&gt;&gt; Enabling and starting ollama service...</span>
<span class="line">Created symlink /etc/systemd/system/default.target.wants/ollama.service → /etc/systemd/system/ollama.service.</span>
<span class="line">&gt;&gt;&gt; The Ollama API is now available at 127.0.0.1:11434.</span>
<span class="line">&gt;&gt;&gt; Install complete. Run &quot;ollama&quot; from the command line.</span>
<span class="line">WARNING: No NVIDIA/AMD GPU detected. Ollama will run in CPU-only mode.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看版本</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ollama --version</span>
<span class="line">ollama version is 0.3.6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>访问服务</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">可以通过如下访问本地ollama服务:</span>
<span class="line">http://127.0.0.1:11434/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改service文件,在环境变量后添加 &quot;OLLAMA_HOST=0.0.0.0&quot;, 这样便于后续在容器中运行的OpenWebUI可以访问到Ollama API服务</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ sudo vim /etc/systemd/system/ollama.service</span>
<span class="line">[Unit]</span>
<span class="line">Description=Ollama Service</span>
<span class="line">After=network-online.target</span>
<span class="line">  </span>
<span class="line">[Service]</span>
<span class="line">ExecStart=/usr/local/bin/ollama serve</span>
<span class="line">User=ollama</span>
<span class="line">Group=ollama</span>
<span class="line">Restart=always</span>
<span class="line">RestartSec=3</span>
<span class="line">Environment=&quot;PATH=.:/usr/local/jdk-17/jdk-17.0.7/bin:/usr/local/jdk-17/jdk-17.0.7/lib:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/usr/local/go/bin:/home/guoshipeng/Documents/go/bin&quot; &quot;OLLAMA_HOST=0.0.0.0&quot;</span>
<span class="line">  </span>
<span class="line">[Install]</span>
<span class="line">WantedBy=default.target</span>
<span class="line">修改后执行:</span>
<span class="line">systemctl daemon-reload</span>
<span class="line">systemctl restart ollama</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ollama 相关命令</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ollama --help</span>
<span class="line">Large language model runner</span>
<span class="line">  </span>
<span class="line">Usage:</span>
<span class="line">  ollama [flags]</span>
<span class="line">  ollama [command]</span>
<span class="line">  </span>
<span class="line">Available Commands:</span>
<span class="line">  serve       Start ollama</span>
<span class="line">  create      Create a model from a Modelfile</span>
<span class="line">  show        Show information for a model</span>
<span class="line">  run         Run a model</span>
<span class="line">  pull        Pull a model from a registry</span>
<span class="line">  push        Push a model to a registry</span>
<span class="line">  list        List models</span>
<span class="line">  ps          List running models</span>
<span class="line">  cp          Copy a model</span>
<span class="line">  rm          Remove a model</span>
<span class="line">  help        Help about any command</span>
<span class="line">  </span>
<span class="line">Flags:</span>
<span class="line">  -h, --help      help for ollama</span>
<span class="line">  -v, --version   Show version information</span>
<span class="line">  </span>
<span class="line">Use &quot;ollama [command] --help&quot; for more information about a command.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ollama 模型库</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ollama模型库:https://ollama.com/library</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用 ollama 跑一个模型</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ollama run qwen2:1.5b</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>ollama 列出本地易安装模型</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ollama list //用于列出本地安传的model</span>
<span class="line">NAME      	ID          	SIZE  	MODIFIED          </span>
<span class="line">qwen2:1.5b	f6daf2b25194	934 MB	About an hour ago</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ollama api使用文档</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">https://github.com/ollama/ollama/blob/main/docs/api.md //非常详细的介绍了api的使用，包含各种操作，增删改查都有</span>
<span class="line">其中这个:</span>
<span class="line">Send a chat message with a conversation history. You can use this same approach to start the conversation using multi-shot or chain-of-thought prompting.</span>
<span class="line">curl http://localhost:11434/api/chat -d &#39;{</span>
<span class="line">  &quot;model&quot;: &quot;llama3&quot;,</span>
<span class="line">  &quot;messages&quot;: [</span>
<span class="line">    {</span>
<span class="line">      &quot;role&quot;: &quot;user&quot;,</span>
<span class="line">      &quot;content&quot;: &quot;why is the sky blue?&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;role&quot;: &quot;assistant&quot;,</span>
<span class="line">      &quot;content&quot;: &quot;due to rayleigh scattering.&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;role&quot;: &quot;user&quot;,</span>
<span class="line">      &quot;content&quot;: &quot;how is that different than mie scattering?&quot;</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}&#39;</span>
<span class="line">  </span>
<span class="line">这个主要是把chat的上下文再每次chat的时候一起传递给接口，用于创建语境，我打算用另一种方式实现，到时候新开一篇</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>本地docker部署open-webui</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main</span>
<span class="line">^[[CUnable to find image &#39;ghcr.io/open-webui/open-webui:main&#39; locally</span>
<span class="line">main: Pulling from open-webui/open-webui</span>
<span class="line">e4fff0779e6d: Already exists </span>
<span class="line">d97016d0706d: Pull complete </span>
<span class="line">53db1713e5d9: Pull complete </span>
<span class="line">a8cd795d9ccb: Pull complete </span>
<span class="line">de3ba92de392: Pull complete </span>
<span class="line">6f4d87c224b0: Pull complete </span>
<span class="line">4f4fb700ef54: Pull complete </span>
<span class="line">dd92a6022ddb: Pull complete </span>
<span class="line">bbbfed48a772: Pull complete </span>
<span class="line">a825beebdb5b: Pull complete </span>
<span class="line">638c7f4708d7: Pull complete </span>
<span class="line">dcd98ca2af09: Pull complete </span>
<span class="line">a3a183a1eb40: Pull complete </span>
<span class="line">a3b19b039cc9: Pull complete </span>
<span class="line">f86974dcccd6: Pull complete </span>
<span class="line">d026397a4a16: Pull complete </span>
<span class="line">Digest: sha256:d05b69e71c8011d3031c159aff1ed4942d3c0d98d1c531ae267962bcdcb603a6</span>
<span class="line">Status: Downloaded newer image for ghcr.io/open-webui/open-webui:main</span>
<span class="line">25c7f24d49b7b4de3d1924e6c36354d5895fcefbd47e5b8889636a2fe2f9bf9e</span>
<span class="line">  </span>
<span class="line">然后可以通过 http://localhost:3000/ 访问open-webui，首次需要注册账号，然后可以选择本地已经安装的模型进行对话，我发现通过这个webui可以实现上下文对话，但是直接通过之前提到的API确不行，不知道为什么，后来发现是因为每次把之前的chat记录一起发给后台了，我想这个对于普通服务器来说，压力还是很大的，因为有很多数据需要处理和存储。</span>
<span class="line">  </span>
<span class="line">总结一下:</span>
<span class="line">首先，想玩大模型，不管他天花乱坠整各种黑话什么Agent、ChatBot，其实我们要看的核心组件无非就是两个：训练好的大模型，以及UI界面。于是就有各种开源大佬在这两方面下手了。大模型的收集和调用方面，由ollama提供支持（ollama一键在本地运行大模型，被运行的模型可以像API一样被调用），而UI界面方面，则有open-webui、lobe-chat等。本次主要关注ollama和open-webui。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const r=n(i,[["render",d],["__file","ollama本地初次尝试使用.html.vue"]]),p=JSON.parse('{"path":"/content/llm/ai/ollama%E6%9C%AC%E5%9C%B0%E5%88%9D%E6%AC%A1%E5%B0%9D%E8%AF%95%E4%BD%BF%E7%94%A8.html","title":"ollama本地初次尝试使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"ollama本地初次尝试使用","description":"ollama本地初次尝试使用"},"headers":[],"git":{},"filePathRelative":"content/llm/ai/ollama本地初次尝试使用.md"}');export{r as comp,p as data};
