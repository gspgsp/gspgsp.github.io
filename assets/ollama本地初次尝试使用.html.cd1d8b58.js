import{_ as e,o as l,c as i,g as n}from"./app.d66d8774.js";const a={},s=n(`<p>ollama\u672C\u5730\u521D\u6B21\u5C1D\u8BD5\u4F7F\u7528:</p><ul><li>\u5B89\u88C5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ curl -fsSL https://ollama.com/install.sh | sh
&gt;&gt;&gt; Installing ollama to /usr/local
&gt;&gt;&gt; Downloading Linux amd64 CLI
######################################################################## 100.0%##O=#  #                                                                      
&gt;&gt;&gt; Making ollama accessible in the PATH in /usr/local/bin
&gt;&gt;&gt; Creating ollama user...
&gt;&gt;&gt; Adding ollama user to render group...
&gt;&gt;&gt; Adding ollama user to video group...
&gt;&gt;&gt; Adding current user to ollama group...
&gt;&gt;&gt; Creating ollama systemd service...
&gt;&gt;&gt; Enabling and starting ollama service...
Created symlink /etc/systemd/system/default.target.wants/ollama.service \u2192 /etc/systemd/system/ollama.service.
&gt;&gt;&gt; The Ollama API is now available at 127.0.0.1:11434.
&gt;&gt;&gt; Install complete. Run &quot;ollama&quot; from the command line.
WARNING: No NVIDIA/AMD GPU detected. Ollama will run in CPU-only mode.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u7248\u672C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ollama --version
ollama version is 0.3.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BBF\u95EE\u670D\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u8BBF\u95EE\u672C\u5730ollama\u670D\u52A1:
http://127.0.0.1:11434/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4FEE\u6539service\u6587\u4EF6,\u5728\u73AF\u5883\u53D8\u91CF\u540E\u6DFB\u52A0 &quot;OLLAMA_HOST=0.0.0.0&quot;, \u8FD9\u6837\u4FBF\u4E8E\u540E\u7EED\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u7684OpenWebUI\u53EF\u4EE5\u8BBF\u95EE\u5230Ollama API\u670D\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sudo vim /etc/systemd/system/ollama.service
[Unit]
Description=Ollama Service
After=network-online.target
  
[Service]
ExecStart=/usr/local/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment=&quot;PATH=.:/usr/local/jdk-17/jdk-17.0.7/bin:/usr/local/jdk-17/jdk-17.0.7/lib:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/usr/local/go/bin:/home/guoshipeng/Documents/go/bin&quot; &quot;OLLAMA_HOST=0.0.0.0&quot;
  
[Install]
WantedBy=default.target
\u4FEE\u6539\u540E\u6267\u884C:
systemctl daemon-reload
systemctl restart ollama
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ollama \u76F8\u5173\u547D\u4EE4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ollama --help
Large language model runner
  
Usage:
  ollama [flags]
  ollama [command]
  
Available Commands:
  serve       Start ollama
  create      Create a model from a Modelfile
  show        Show information for a model
  run         Run a model
  pull        Pull a model from a registry
  push        Push a model to a registry
  list        List models
  ps          List running models
  cp          Copy a model
  rm          Remove a model
  help        Help about any command
  
Flags:
  -h, --help      help for ollama
  -v, --version   Show version information
  
Use &quot;ollama [command] --help&quot; for more information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ollama \u6A21\u578B\u5E93</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ollama\u6A21\u578B\u5E93:https://ollama.com/library
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528 ollama \u8DD1\u4E00\u4E2A\u6A21\u578B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ollama run qwen2:1.5b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>ollama \u5217\u51FA\u672C\u5730\u6613\u5B89\u88C5\u6A21\u578B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ollama list //\u7528\u4E8E\u5217\u51FA\u672C\u5730\u5B89\u4F20\u7684model
NAME      	ID          	SIZE  	MODIFIED          
qwen2:1.5b	f6daf2b25194	934 MB	About an hour ago
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ollama api\u4F7F\u7528\u6587\u6863</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://github.com/ollama/ollama/blob/main/docs/api.md //\u975E\u5E38\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u4E86api\u7684\u4F7F\u7528\uFF0C\u5305\u542B\u5404\u79CD\u64CD\u4F5C\uFF0C\u589E\u5220\u6539\u67E5\u90FD\u6709
\u5176\u4E2D\u8FD9\u4E2A:
Send a chat message with a conversation history. You can use this same approach to start the conversation using multi-shot or chain-of-thought prompting.
curl http://localhost:11434/api/chat -d &#39;{
  &quot;model&quot;: &quot;llama3&quot;,
  &quot;messages&quot;: [
    {
      &quot;role&quot;: &quot;user&quot;,
      &quot;content&quot;: &quot;why is the sky blue?&quot;
    },
    {
      &quot;role&quot;: &quot;assistant&quot;,
      &quot;content&quot;: &quot;due to rayleigh scattering.&quot;
    },
    {
      &quot;role&quot;: &quot;user&quot;,
      &quot;content&quot;: &quot;how is that different than mie scattering?&quot;
    }
  ]
}&#39;
  
\u8FD9\u4E2A\u4E3B\u8981\u662F\u628Achat\u7684\u4E0A\u4E0B\u6587\u518D\u6BCF\u6B21chat\u7684\u65F6\u5019\u4E00\u8D77\u4F20\u9012\u7ED9\u63A5\u53E3\uFF0C\u7528\u4E8E\u521B\u5EFA\u8BED\u5883\uFF0C\u6211\u6253\u7B97\u7528\u53E6\u4E00\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5230\u65F6\u5019\u65B0\u5F00\u4E00\u7BC7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u672C\u5730docker\u90E8\u7F72open-webui</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
^[[CUnable to find image &#39;ghcr.io/open-webui/open-webui:main&#39; locally
main: Pulling from open-webui/open-webui
e4fff0779e6d: Already exists 
d97016d0706d: Pull complete 
53db1713e5d9: Pull complete 
a8cd795d9ccb: Pull complete 
de3ba92de392: Pull complete 
6f4d87c224b0: Pull complete 
4f4fb700ef54: Pull complete 
dd92a6022ddb: Pull complete 
bbbfed48a772: Pull complete 
a825beebdb5b: Pull complete 
638c7f4708d7: Pull complete 
dcd98ca2af09: Pull complete 
a3a183a1eb40: Pull complete 
a3b19b039cc9: Pull complete 
f86974dcccd6: Pull complete 
d026397a4a16: Pull complete 
Digest: sha256:d05b69e71c8011d3031c159aff1ed4942d3c0d98d1c531ae267962bcdcb603a6
Status: Downloaded newer image for ghcr.io/open-webui/open-webui:main
25c7f24d49b7b4de3d1924e6c36354d5895fcefbd47e5b8889636a2fe2f9bf9e
  
\u7136\u540E\u53EF\u4EE5\u901A\u8FC7 http://localhost:3000/ \u8BBF\u95EEopen-webui\uFF0C\u9996\u6B21\u9700\u8981\u6CE8\u518C\u8D26\u53F7\uFF0C\u7136\u540E\u53EF\u4EE5\u9009\u62E9\u672C\u5730\u5DF2\u7ECF\u5B89\u88C5\u7684\u6A21\u578B\u8FDB\u884C\u5BF9\u8BDD\uFF0C\u6211\u53D1\u73B0\u901A\u8FC7\u8FD9\u4E2Awebui\u53EF\u4EE5\u5B9E\u73B0\u4E0A\u4E0B\u6587\u5BF9\u8BDD\uFF0C\u4F46\u662F\u76F4\u63A5\u901A\u8FC7\u4E4B\u524D\u63D0\u5230\u7684API\u786E\u4E0D\u884C\uFF0C\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\uFF0C\u540E\u6765\u53D1\u73B0\u662F\u56E0\u4E3A\u6BCF\u6B21\u628A\u4E4B\u524D\u7684chat\u8BB0\u5F55\u4E00\u8D77\u53D1\u7ED9\u540E\u53F0\u4E86\uFF0C\u6211\u60F3\u8FD9\u4E2A\u5BF9\u4E8E\u666E\u901A\u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u538B\u529B\u8FD8\u662F\u5F88\u5927\u7684\uFF0C\u56E0\u4E3A\u6709\u5F88\u591A\u6570\u636E\u9700\u8981\u5904\u7406\u548C\u5B58\u50A8\u3002
  
\u603B\u7ED3\u4E00\u4E0B:
\u9996\u5148\uFF0C\u60F3\u73A9\u5927\u6A21\u578B\uFF0C\u4E0D\u7BA1\u4ED6\u5929\u82B1\u4E71\u5760\u6574\u5404\u79CD\u9ED1\u8BDD\u4EC0\u4E48Agent\u3001ChatBot\uFF0C\u5176\u5B9E\u6211\u4EEC\u8981\u770B\u7684\u6838\u5FC3\u7EC4\u4EF6\u65E0\u975E\u5C31\u662F\u4E24\u4E2A\uFF1A\u8BAD\u7EC3\u597D\u7684\u5927\u6A21\u578B\uFF0C\u4EE5\u53CAUI\u754C\u9762\u3002\u4E8E\u662F\u5C31\u6709\u5404\u79CD\u5F00\u6E90\u5927\u4F6C\u5728\u8FD9\u4E24\u65B9\u9762\u4E0B\u624B\u4E86\u3002\u5927\u6A21\u578B\u7684\u6536\u96C6\u548C\u8C03\u7528\u65B9\u9762\uFF0C\u7531ollama\u63D0\u4F9B\u652F\u6301\uFF08ollama\u4E00\u952E\u5728\u672C\u5730\u8FD0\u884C\u5927\u6A21\u578B\uFF0C\u88AB\u8FD0\u884C\u7684\u6A21\u578B\u53EF\u4EE5\u50CFAPI\u4E00\u6837\u88AB\u8C03\u7528\uFF09\uFF0C\u800CUI\u754C\u9762\u65B9\u9762\uFF0C\u5219\u6709open-webui\u3001lobe-chat\u7B49\u3002\u672C\u6B21\u4E3B\u8981\u5173\u6CE8ollama\u548Copen-webui\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),d=[s];function t(u,r){return l(),i("div",null,d)}var c=e(a,[["render",t],["__file","ollama\u672C\u5730\u521D\u6B21\u5C1D\u8BD5\u4F7F\u7528.html.vue"]]);export{c as default};
