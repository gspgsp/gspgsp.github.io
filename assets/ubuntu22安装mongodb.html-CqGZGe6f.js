import{_ as s,c as a,f as i,o as l}from"./app-BB_BIQV8.js";const e={};function t(c,n){return l(),a("div",null,n[0]||(n[0]=[i(`<p><strong>ubuntu22下docker安装mongodb</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//安装latest的社区版本</span>
<span class="line">docker pull mongodb/mongodb-community-server</span>
<span class="line">  </span>
<span class="line">// 普通启动</span>
<span class="line">docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest</span>
<span class="line">  </span>
<span class="line">// 加参数，持久化和账号</span>
<span class="line">docker run -d \\</span>
<span class="line">  --name mongodb-community \\</span>
<span class="line">  -p 27017:27017 \\</span>
<span class="line">  -v /usr/local/mongo-data:/data/db \\</span>
<span class="line">  -e MONGO_INITDB_ROOT_USERNAME=admin \\</span>
<span class="line">  -e MONGO_INITDB_ROOT_PASSWORD=admin123 \\</span>
<span class="line">  mongodb/mongodb-community-server:latest</span>
<span class="line">  </span>
<span class="line">// 查看容器启动情况</span>
<span class="line">docker container ls</span>
<span class="line">  </span>
<span class="line">//客户端工具 Robo 3T is now Studio 3T</span>
<span class="line">https://robomongo.org/</span>
<span class="line">https://studio3t.com/download-thank-you/?OS=x64</span>
<span class="line">  </span>
<span class="line">我是ubuntu22系统，查看linux版本</span>
<span class="line">$ lsb_release -dc</span>
<span class="line">Description:	Ubuntu 22.04.2 LTS</span>
<span class="line">Codename:	jammy</span>
<span class="line">  </span>
<span class="line">下载好以后(当前在/usr/local/下):</span>
<span class="line">$ mv ~/Downloads/studio-3t-linux-x64.tar.gz ./</span>
<span class="line">$ sudo tar zxvf studio-3t-linux-x64.tar.gz</span>
<span class="line">tar: Ignoring unknown extended header keyword &#39;LIBARCHIVE.creationtime&#39;</span>
<span class="line">studio-3t-linux-x64.sh</span>
<span class="line">  </span>
<span class="line">这是一个可执行脚本，添加执行权限:</span>
<span class="line">$ sudo chmod +x studio-3t-linux-x64.sh</span>
<span class="line">  </span>
<span class="line">然后:</span>
<span class="line">$ sudo ./studio-3t-linux-x64.sh</span>
<span class="line">Unpacking JRE ...</span>
<span class="line">Starting Installer ...</span>
<span class="line">直接下一步，安装完成后(可以选择创建icon)，Studio 3T 通常会安装到默认路径（例如 /opt/studio-3t）</span>
<span class="line">  </span>
<span class="line">打开studio，需要登陆，直接google邮箱登陆了.</span>
<span class="line">  </span>
<span class="line">到此结束，不用安装官网的mongosh.</span>
<span class="line">  </span>
<span class="line">使用:</span>
<span class="line">先通过studio链接启动的mongodb(使用这个uri: mongodb://admin:admin123@127.0.0.1:27017/admin)</span>
<span class="line">链接成功之后默认有单个数据库 admin config local</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是对mongo数据库的分析:</p><h5 id="mongodb-默认包含以下三个系统数据库" tabindex="-1"><a class="header-anchor" href="#mongodb-默认包含以下三个系统数据库"><span>MongoDB 默认包含以下三个系统数据库：</span></a></h5><ol><li><p><strong>admin</strong></p><ul><li><strong>功能</strong>: <ul><li><code>admin</code> 数据库被认为是 MongoDB 的“全局”数据库，存储系统范围的配置。</li><li>如果向 <code>admin</code> 数据库添加用户并授予适当权限，该用户将拥有所有数据库的管理权限。</li></ul></li><li><strong>用途</strong>: <ul><li>存储用户权限和角色信息。</li><li>配置系统级别的参数。</li></ul></li><li><strong>常用命令</strong>:<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">use admin</span>
<span class="line">db<span class="token punctuation">.</span>system<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 查看用户信息</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>config</strong></p><ul><li><strong>功能</strong>: <ul><li>存储分片集群的信息（仅当启用了分片时有用）。</li><li>包含与分片相关的元数据，如分片键和分片分布。</li></ul></li><li><strong>用途</strong>: <ul><li>仅用于分片模式的元数据存储。</li></ul></li><li><strong>注意</strong>: <ul><li>在非分片模式下，这个数据库通常不需要直接访问或修改。</li></ul></li></ul></li><li><p><strong>local</strong></p><ul><li><strong>功能</strong>: <ul><li>存储本地节点的特定信息。</li><li>数据不会在副本集中同步。</li></ul></li><li><strong>用途</strong>: <ul><li>存储 Oplog（操作日志），用于副本集的复制。</li><li>本地配置或状态信息。</li></ul></li><li><strong>注意</strong>: <ul><li>通常无需手动修改或删除此数据库中的内容。</li></ul></li></ul></li></ol><h5 id="如何创建自定义数据库" tabindex="-1"><a class="header-anchor" href="#如何创建自定义数据库"><span>如何创建自定义数据库</span></a></h5><p>MongoDB 不需要预先创建数据库，插入数据时会自动创建数据库。例如：</p><ol><li><p>切换到新数据库（如 <code>mydatabase</code>）：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">use mydatabase</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>插入一个集合和文档：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">db<span class="token punctuation">.</span>mycollection<span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>数据库 <code>mydatabase</code> 和集合 <code>mycollection</code> 将被自动创建。</p></li></ol><hr><h5 id="查询默认数据库中的内容" tabindex="-1"><a class="header-anchor" href="#查询默认数据库中的内容"><span>查询默认数据库中的内容</span></a></h5><ol><li><p><strong>查看默认数据库列表</strong>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">show dbs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">admin    0.000GB</span>
<span class="line">config   0.000GB</span>
<span class="line">local    0.000GB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>切换到 <code>admin</code> 数据库并查询用户</strong>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">use admin</span>
<span class="line">db<span class="token punctuation">.</span>system<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>切换到 <code>local</code> 数据库并查看 Oplog（适用于副本集）</strong>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">use local</span>
<span class="line">show collections</span>
<span class="line">db<span class="token punctuation">.</span>oplog<span class="token punctuation">.</span>rs<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pretty</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><h5 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h5><ul><li><strong><code>admin</code></strong>: 系统范围管理和用户权限。</li><li><strong><code>config</code></strong>: 分片集群元数据。</li><li><strong><code>local</code></strong>: 本地节点的配置，不会在集群间复制。</li></ul><p>如果你想创建自己的数据库或进行进一步操作，只需切换到你的目标数据库名称并开始插入数据即可！</p><p>贴一个node.js链接mongo：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const { MongoClient } = require(&#39;mongodb&#39;);</span>
<span class="line">  </span>
<span class="line">const uri = &quot;mongodb://admin:admin123@127.0.0.1:27017/admin&quot;; //这个url也可以作为studio链接mongo的uri</span>
<span class="line">  </span>
<span class="line">const client = new MongoClient(uri);</span>
<span class="line">  </span>
<span class="line">async function run() {</span>
<span class="line">  try {</span>
<span class="line">    await client.connect();</span>
<span class="line">    console.log(&quot;Connected to MongoDB!&quot;);</span>
<span class="line">    const db = client.db(&quot;test&quot;); // 替换为你需要操作的数据库</span>
<span class="line">    const collection = db.collection(&quot;example&quot;); // 替换为你的集合</span>
<span class="line">    const docs = await collection.find().toArray();</span>
<span class="line">    console.log(docs);</span>
<span class="line">  } finally {</span>
<span class="line">    await client.close();</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">run().catch(console.error);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const p=s(e,[["render",t],["__file","ubuntu22安装mongodb.html.vue"]]),o=JSON.parse('{"path":"/content/database/mongodb/ubuntu22%E5%AE%89%E8%A3%85mongodb.html","title":"ubuntu22安装mongodb","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu22安装mongodb","description":"ubuntu22安装mongodb"},"headers":[],"git":{},"filePathRelative":"content/database/mongodb/ubuntu22安装mongodb.md"}');export{p as comp,o as data};
