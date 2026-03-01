import{_ as i,c as p,a as n,f as c,o as t,r as a}from"./app-BB_BIQV8.js";const d={};function r(o,s){const e=a("DocSearchInPage"),l=a("InArticleAd");return t(),p("div",null,[n(e),n(l),s[0]||(s[0]=c(`<h1 id="redis-使用手册" tabindex="-1"><a class="header-anchor" href="#redis-使用手册"><span>Redis 使用手册</span></a></h1><h2 id="_1-redis-基础概念" tabindex="-1"><a class="header-anchor" href="#_1-redis-基础概念"><span>1. Redis 基础概念</span></a></h2><h3 id="_1-1-什么是-redis" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是-redis"><span>1.1 什么是 Redis</span></a></h3><p>Redis 是一个开源的、基于内存的数据结构存储系统，可用作数据库、缓存和消息队列。它支持多种数据结构，如字符串、列表、集合、有序集合、哈希等，具有高性能、低延迟的特点。</p><h3 id="_1-2-redis-的特点" tabindex="-1"><a class="header-anchor" href="#_1-2-redis-的特点"><span>1.2 Redis 的特点</span></a></h3><ul><li>完全基于内存，访问速度快</li><li>支持丰富的数据结构</li><li>支持数据持久化</li><li>支持主从复制和高可用</li><li>支持事务和 Lua 脚本</li><li>单线程模型，避免并发问题</li><li>开源免费，广泛应用</li></ul><h3 id="_1-3-redis-适用场景" tabindex="-1"><a class="header-anchor" href="#_1-3-redis-适用场景"><span>1.3 Redis 适用场景</span></a></h3><ul><li>缓存（热点数据、会话缓存）</li><li>计数器（浏览量、点赞数）</li><li>消息队列</li><li>排行榜</li><li>分布式锁</li><li>实时数据分析</li><li>地理位置索引</li></ul><hr><h2 id="_2-redis-安装与配置" tabindex="-1"><a class="header-anchor" href="#_2-redis-安装与配置"><span>2. Redis 安装与配置</span></a></h2><h3 id="_2-1-linux-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-linux-安装"><span>2.1 Linux 安装</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Ubuntu/Debian</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> redis-server</span>
<span class="line"></span>
<span class="line"><span class="token comment"># CentOS/RHEL</span></span>
<span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> redis</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从源码编译（最新版本）</span></span>
<span class="line"><span class="token function">wget</span> http://download.redis.io/redis-stable.tar.gz</span>
<span class="line"><span class="token function">tar</span> xzf redis-stable.tar.gz</span>
<span class="line"><span class="token builtin class-name">cd</span> redis-stable</span>
<span class="line"><span class="token function">make</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-启动-redis" tabindex="-1"><a class="header-anchor" href="#_2-2-启动-redis"><span>2.2 启动 Redis</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 前台启动</span></span>
<span class="line">redis-server</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 后台启动（指定配置文件）</span></span>
<span class="line">redis-server /etc/redis/redis.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 systemctl（如果以服务安装）</span></span>
<span class="line"><span class="token function">sudo</span> systemctl start redis-server</span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> redis-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-连接-redis" tabindex="-1"><a class="header-anchor" href="#_2-3-连接-redis"><span>2.3 连接 Redis</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 默认连接本地</span></span>
<span class="line">redis-cli</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定主机和端口</span></span>
<span class="line">redis-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6379</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定数据库</span></span>
<span class="line">redis-cli <span class="token parameter variable">-n</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 连接带密码的 Redis</span></span>
<span class="line">redis-cli <span class="token parameter variable">-a</span> password</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 交互模式</span></span>
<span class="line">redis-cli</span>
<span class="line"><span class="token operator">&gt;</span> PING</span>
<span class="line">PONG</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-配置文件重点项" tabindex="-1"><a class="header-anchor" href="#_2-4-配置文件重点项"><span>2.4 配置文件重点项</span></a></h3><p>Redis 配置文件位于 <code>/etc/redis/redis.conf</code></p><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 监听端口</span>
<span class="line">port 6379</span>
<span class="line"></span>
<span class="line"># 监听地址</span>
<span class="line">bind 127.0.0.1</span>
<span class="line"></span>
<span class="line"># 数据库数量</span>
<span class="line">databases 16</span>
<span class="line"></span>
<span class="line"># 最大客户端连接数</span>
<span class="line">maxclients 10000</span>
<span class="line"></span>
<span class="line"># 最大内存限制</span>
<span class="line">maxmemory 256mb</span>
<span class="line"></span>
<span class="line"># 内存淘汰策略</span>
<span class="line">maxmemory-policy allkeys-lru</span>
<span class="line"></span>
<span class="line"># 数据持久化相关</span>
<span class="line">save 900 1</span>
<span class="line">save 300 10</span>
<span class="line">save 60 10000</span>
<span class="line"></span>
<span class="line"># RDB 文件名</span>
<span class="line">dbfilename dump.rdb</span>
<span class="line"></span>
<span class="line"># RDB 文件存放目录</span>
<span class="line">dir /var/lib/redis</span>
<span class="line"></span>
<span class="line"># 日志级别</span>
<span class="line">loglevel notice</span>
<span class="line"></span>
<span class="line"># 日志文件</span>
<span class="line">logfile &quot;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-redis-数据类型" tabindex="-1"><a class="header-anchor" href="#_3-redis-数据类型"><span>3. Redis 数据类型</span></a></h2><h3 id="_3-1-string-字符串" tabindex="-1"><a class="header-anchor" href="#_3-1-string-字符串"><span>3.1 String（字符串）</span></a></h3><p>最基本的数据类型，可以存储字符串、数字、二进制数据。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 设置值</span></span>
<span class="line">SET key value</span>
<span class="line">SET key value EX <span class="token number">10</span>          <span class="token comment"># 设置过期时间 10 秒</span></span>
<span class="line">SET key value PX <span class="token number">10000</span>       <span class="token comment"># 设置过期时间 10000 毫秒</span></span>
<span class="line">SET key value NX             <span class="token comment"># 仅当 key 不存在时设置</span></span>
<span class="line">SET key value XX             <span class="token comment"># 仅当 key 存在时设置</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取值</span></span>
<span class="line">GET key</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 批量设置/获取</span></span>
<span class="line">MSET key1 value1 key2 value2</span>
<span class="line">MGET key1 key2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 追加字符串</span></span>
<span class="line">APPEND key <span class="token string">&quot;hello&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取字符串长度</span></span>
<span class="line">STRLEN key</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 数值操作（key 必须是整数）</span></span>
<span class="line">INCR key                     <span class="token comment"># 加 1</span></span>
<span class="line">INCRBY key <span class="token number">5</span>                 <span class="token comment"># 加 5</span></span>
<span class="line">DECR key                     <span class="token comment"># 减 1</span></span>
<span class="line">DECRBY key <span class="token number">3</span>                 <span class="token comment"># 减 3</span></span>
<span class="line">INCRBYFLOAT key <span class="token number">0.5</span>          <span class="token comment"># 加浮点数</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取并设置</span></span>
<span class="line">GETSET key newvalue          <span class="token comment"># 返回旧值，设置新值</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取子字符串</span></span>
<span class="line">GETRANGE key <span class="token number">0</span> <span class="token number">4</span>             <span class="token comment"># 获取第 0-4 位字符</span></span>
<span class="line">SETRANGE key <span class="token number">0</span> <span class="token string">&quot;hello&quot;</span>       <span class="token comment"># 从 0 位开始设置</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-list-列表" tabindex="-1"><a class="header-anchor" href="#_3-2-list-列表"><span>3.2 List（列表）</span></a></h3><p>有序的字符串集合，支持从两端插入和删除。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 左边插入</span></span>
<span class="line">LPUSH key value1 value2       <span class="token comment"># 在列表左端添加一个或多个元素</span></span>
<span class="line">LPUSHX key value               <span class="token comment"># 仅当列表存在时，在左端添加</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 右边插入</span></span>
<span class="line">RPUSH key value1 value2        <span class="token comment"># 在列表右端添加</span></span>
<span class="line">RPUSHX key value               <span class="token comment"># 仅当列表存在时，在右端添加</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取元素</span></span>
<span class="line">LRANGE key <span class="token number">0</span> <span class="token parameter variable">-1</span>                <span class="token comment"># 获取全部元素</span></span>
<span class="line">LINDEX key <span class="token number">0</span>                   <span class="token comment"># 获取指定索引的元素</span></span>
<span class="line">LLEN key                       <span class="token comment"># 获取列表长度</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除元素</span></span>
<span class="line">LPOP key                       <span class="token comment"># 删除并返回左端元素</span></span>
<span class="line">RPOP key                       <span class="token comment"># 删除并返回右端元素</span></span>
<span class="line">LREM key <span class="token number">1</span> value               <span class="token comment"># 删除列表中与 value 相等的元素，count 为 1</span></span>
<span class="line">LTRIM key <span class="token number">0</span> <span class="token number">2</span>                  <span class="token comment"># 保留指定范围内的元素，其他删除</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改元素</span></span>
<span class="line">LSET key <span class="token number">0</span> newvalue            <span class="token comment"># 设置指定索引的元素</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 阻塞式获取（用于队列消费）</span></span>
<span class="line">BLPOP key <span class="token number">0</span>                    <span class="token comment"># 阻塞直到有元素可弹出，0 表示永久阻塞</span></span>
<span class="line">BRPOP key <span class="token number">5</span>                    <span class="token comment"># 阻塞最多 5 秒</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列表间操作</span></span>
<span class="line">RPOPLPUSH <span class="token builtin class-name">source</span> destination   <span class="token comment"># 从源列表右端弹出，插入目标列表左端</span></span>
<span class="line">BRPOPLPUSH <span class="token builtin class-name">source</span> destination <span class="token number">0</span>  <span class="token comment"># 阻塞版本</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-set-集合" tabindex="-1"><a class="header-anchor" href="#_3-3-set-集合"><span>3.3 Set（集合）</span></a></h3><p>无序的、唯一的字符串集合，支持集合间的交集、并集、差集等操作。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加元素</span></span>
<span class="line">SADD key member1 member2       <span class="token comment"># 添加一个或多个元素</span></span>
<span class="line">SCARD key                      <span class="token comment"># 获取集合大小</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看元素</span></span>
<span class="line">SMEMBERS key                   <span class="token comment"># 获取所有元素</span></span>
<span class="line">SISMEMBER key member           <span class="token comment"># 检查元素是否存在</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除元素</span></span>
<span class="line">SREM key member1 member2       <span class="token comment"># 删除一个或多个元素</span></span>
<span class="line">SPOP key                       <span class="token comment"># 随机删除并返回一个元素</span></span>
<span class="line">SPOP key <span class="token number">2</span>                     <span class="token comment"># 随机删除并返回 2 个元素</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 随机获取</span></span>
<span class="line">SRANDMEMBER key                <span class="token comment"># 随机返回一个元素</span></span>
<span class="line">SRANDMEMBER key <span class="token number">2</span>              <span class="token comment"># 随机返回 2 个元素</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 集合间操作</span></span>
<span class="line">SINTER key1 key2               <span class="token comment"># 交集</span></span>
<span class="line">SUNION key1 key2               <span class="token comment"># 并集</span></span>
<span class="line">SDIFF key1 key2                <span class="token comment"># 差集（key1 有但 key2 没有）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 集合间操作（存储结果）</span></span>
<span class="line">SINTERSTORE dest key1 key2     <span class="token comment"># 交集结果存储到 dest</span></span>
<span class="line">SUNIONSTORE dest key1 key2     <span class="token comment"># 并集结果存储到 dest</span></span>
<span class="line">SDIFFSTORE dest key1 key2      <span class="token comment"># 差集结果存储到 dest</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移动元素</span></span>
<span class="line">SMOVE <span class="token builtin class-name">source</span> destination member  <span class="token comment"># 将元素从源集合移到目标集合</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-hash-哈希" tabindex="-1"><a class="header-anchor" href="#_3-4-hash-哈希"><span>3.4 Hash（哈希）</span></a></h3><p>包含字段和值对的集合，适合存储对象。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 设置字段</span></span>
<span class="line">HSET key field value           <span class="token comment"># 设置一个字段</span></span>
<span class="line">HSET key field1 value1 field2 value2  <span class="token comment"># 设置多个字段</span></span>
<span class="line">HMSET key field1 value1 field2 value2 <span class="token comment"># 批量设置（已弃用，用 HSET 替代）</span></span>
<span class="line">HSETNX key field value         <span class="token comment"># 仅当字段不存在时设置</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取字段值</span></span>
<span class="line">HGET key field                 <span class="token comment"># 获取指定字段值</span></span>
<span class="line">HMGET key field1 field2        <span class="token comment"># 批量获取字段值</span></span>
<span class="line">HGETALL key                    <span class="token comment"># 获取所有字段和值</span></span>
<span class="line">HKEYS key                      <span class="token comment"># 获取所有字段名</span></span>
<span class="line">HVALS key                      <span class="token comment"># 获取所有字段值</span></span>
<span class="line">HLEN key                       <span class="token comment"># 获取字段数量</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查字段</span></span>
<span class="line">HEXISTS key field              <span class="token comment"># 检查字段是否存在</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除字段</span></span>
<span class="line">HDEL key field1 field2         <span class="token comment"># 删除一个或多个字段</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 数值操作</span></span>
<span class="line">HINCRBY key field <span class="token number">5</span>            <span class="token comment"># 字段值增加 5（必须是整数）</span></span>
<span class="line">HINCRBYFLOAT key field <span class="token number">1.5</span>     <span class="token comment"># 字段值增加 1.5（浮点数）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串操作</span></span>
<span class="line">HSTRLEN key field              <span class="token comment"># 获取字段值的字符串长度</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-sorted-set-有序集合" tabindex="-1"><a class="header-anchor" href="#_3-5-sorted-set-有序集合"><span>3.5 Sorted Set（有序集合）</span></a></h3><p>集合中的每个成员关联一个分数，按分数排序。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加成员</span></span>
<span class="line">ZADD key <span class="token number">1</span> member1 <span class="token number">2</span> member2   <span class="token comment"># 添加成员及其分数</span></span>
<span class="line">ZADD key NX <span class="token number">3</span> member3          <span class="token comment"># 仅新增</span></span>
<span class="line">ZADD key XX <span class="token number">4</span> member1          <span class="token comment"># 仅更新</span></span>
<span class="line">ZADD key CH <span class="token number">5</span> member1          <span class="token comment"># 返回变化的成员数</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取成员</span></span>
<span class="line">ZRANGE key <span class="token number">0</span> <span class="token parameter variable">-1</span>                <span class="token comment"># 按分数从小到大获取全部</span></span>
<span class="line">ZREVRANGE key <span class="token number">0</span> <span class="token parameter variable">-1</span>             <span class="token comment"># 按分数从大到小获取全部</span></span>
<span class="line">ZRANGE key <span class="token number">0</span> <span class="token parameter variable">-1</span> WITHSCORES     <span class="token comment"># 带分数返回</span></span>
<span class="line">ZCARD key                      <span class="token comment"># 获取有序集合大小</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取分数</span></span>
<span class="line">ZSCORE key member              <span class="token comment"># 获取成员分数</span></span>
<span class="line">ZRANK key member               <span class="token comment"># 获取成员排名（从小到大，从 0 开始）</span></span>
<span class="line">ZREVRANK key member            <span class="token comment"># 获取成员排名（从大到小）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 范围操作</span></span>
<span class="line">ZCOUNT key <span class="token number">0</span> <span class="token number">10</span>                <span class="token comment"># 计数分数在 0-10 之间的成员</span></span>
<span class="line">ZRANGEBYSCORE key <span class="token number">0</span> <span class="token number">10</span>         <span class="token comment"># 获取分数在 0-10 之间的成员</span></span>
<span class="line">ZREVRANGEBYSCORE key <span class="token number">10</span> <span class="token number">0</span>      <span class="token comment"># 从大到小获取分数在范围内的成员</span></span>
<span class="line">ZRANGEBYSCORE key <span class="token parameter variable">-inf</span> +inf    <span class="token comment"># 获取所有成员</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除成员</span></span>
<span class="line">ZREM key member1 member2       <span class="token comment"># 删除成员</span></span>
<span class="line">ZREMRANGEBYRANK key <span class="token number">0</span> <span class="token number">1</span>        <span class="token comment"># 删除排名前两位的成员</span></span>
<span class="line">ZREMRANGEBYSCORE key <span class="token number">0</span> <span class="token number">10</span>      <span class="token comment"># 删除分数在 0-10 的成员</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 分数操作</span></span>
<span class="line">ZINCRBY key <span class="token number">5</span> member           <span class="token comment"># 成员分数增加 5</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 集合间操作</span></span>
<span class="line">ZINTERSTORE dest <span class="token number">2</span> key1 key2   <span class="token comment"># 交集存储到 dest</span></span>
<span class="line">ZUNIONSTORE dest <span class="token number">2</span> key1 key2   <span class="token comment"># 并集存储到 dest</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-key-常用命令" tabindex="-1"><a class="header-anchor" href="#_4-key-常用命令"><span>4. Key 常用命令</span></a></h2><h3 id="_4-1-key-操作" tabindex="-1"><a class="header-anchor" href="#_4-1-key-操作"><span>4.1 Key 操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查 key 是否存在</span></span>
<span class="line">EXISTS key1 key2               <span class="token comment"># 返回存在的 key 数量</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除 key</span></span>
<span class="line">DEL key1 key2                  <span class="token comment"># 删除一个或多个 key</span></span>
<span class="line">UNLINK key1 key2               <span class="token comment"># 异步删除（效率更高）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取 key 类型</span></span>
<span class="line">TYPE key</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重命名 key</span></span>
<span class="line">RENAME oldkey newkey           <span class="token comment"># 重命名，若新 key 存在则覆盖</span></span>
<span class="line">RENAMENX oldkey newkey         <span class="token comment"># 重命名，若新 key 存在则不操作</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置过期时间</span></span>
<span class="line">EXPIRE key <span class="token number">10</span>                  <span class="token comment"># 设置过期时间 10 秒</span></span>
<span class="line">PEXPIRE key <span class="token number">10000</span>              <span class="token comment"># 设置过期时间 10000 毫秒</span></span>
<span class="line">EXPIREAT key <span class="token number">1609459200</span>        <span class="token comment"># 在指定时间戳过期</span></span>
<span class="line">PEXPIREAT key <span class="token number">1609459200000</span>    <span class="token comment"># 在指定时间戳（毫秒）过期</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看过期时间</span></span>
<span class="line">TTL key                        <span class="token comment"># 返回剩余生存时间（秒），-1 表示永不过期，-2 表示 key 不存在</span></span>
<span class="line">PTTL key                       <span class="token comment"># 返回剩余生存时间（毫秒）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移除过期时间</span></span>
<span class="line">PERSIST key</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 扫描 key</span></span>
<span class="line">KEYS pattern                   <span class="token comment"># 查找符合模式的 key（生产环境慎用）</span></span>
<span class="line">SCAN <span class="token number">0</span> MATCH pattern COUNT <span class="token number">10</span>  <span class="token comment"># 扫描遍历 key</span></span>
<span class="line">RANDOMKEY                      <span class="token comment"># 返回随机 key</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-key-的-scan-操作" tabindex="-1"><a class="header-anchor" href="#_4-2-key-的-scan-操作"><span>4.2 Key 的 Scan 操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 扫描 key（游标扫描，避免 KEYS 阻塞）</span></span>
<span class="line">SCAN <span class="token number">0</span>                         <span class="token comment"># 从游标 0 开始</span></span>
<span class="line">SCAN cursor MATCH pattern      <span class="token comment"># 指定匹配模式</span></span>
<span class="line">SCAN cursor COUNT count        <span class="token comment"># 指定返回数量</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 扫描 Hash 中的字段</span></span>
<span class="line">HSCAN key <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 扫描 Set 中的成员</span></span>
<span class="line">SSCAN key <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 扫描 Sorted Set 中的成员</span></span>
<span class="line">ZSCAN key <span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_5-事务与脚本" tabindex="-1"><a class="header-anchor" href="#_5-事务与脚本"><span>5. 事务与脚本</span></a></h2><h3 id="_5-1-事务" tabindex="-1"><a class="header-anchor" href="#_5-1-事务"><span>5.1 事务</span></a></h3><p>Redis 事务用于原子性执行多个命令。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 开始事务</span></span>
<span class="line">MULTI</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 排队命令</span></span>
<span class="line">SET key1 value1</span>
<span class="line">INCR counter</span>
<span class="line">LPUSH mylist member</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 执行事务</span></span>
<span class="line">EXEC</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 取消事务</span></span>
<span class="line">DISCARD</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 监视 key（实现乐观锁）</span></span>
<span class="line">WATCH key</span>
<span class="line">MULTI</span>
<span class="line">SET key newvalue</span>
<span class="line">EXEC</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 取消监视</span></span>
<span class="line">UNWATCH</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-lua-脚本" tabindex="-1"><a class="header-anchor" href="#_5-2-lua-脚本"><span>5.2 Lua 脚本</span></a></h3><p>使用 Lua 脚本执行原子操作。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 执行脚本</span></span>
<span class="line">EVAL <span class="token string">&quot;return redis.call(&#39;GET&#39;, KEYS[1])&quot;</span> <span class="token number">1</span> mykey</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 执行脚本示例：原子性递增计数器</span></span>
<span class="line">EVAL <span class="token string">&quot;local val = redis.call(&#39;GET&#39;, KEYS[1]) or 0; redis.call(&#39;SET&#39;, KEYS[1], val+1); return val+1&quot;</span> <span class="token number">1</span> counter</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 加载脚本（脚本缓存）</span></span>
<span class="line">SCRIPT LOAD <span class="token string">&quot;return &#39;hello&#39;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 执行已加载的脚本</span></span>
<span class="line">EVALSHA sha1 <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看已加载脚本</span></span>
<span class="line">SCRIPT EXISTS sha1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清空脚本缓存</span></span>
<span class="line">SCRIPT FLUSH</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-lua-脚本示例-分布式锁" tabindex="-1"><a class="header-anchor" href="#_5-3-lua-脚本示例-分布式锁"><span>5.3 Lua 脚本示例：分布式锁</span></a></h3><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token comment">-- 获取锁</span></span>
<span class="line"><span class="token keyword">local</span> lockKey <span class="token operator">=</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">local</span> lockValue <span class="token operator">=</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">local</span> ttl <span class="token operator">=</span> ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">if</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;SET&#39;</span><span class="token punctuation">,</span> lockKey<span class="token punctuation">,</span> lockValue<span class="token punctuation">,</span> <span class="token string">&#39;NX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;EX&#39;</span><span class="token punctuation">,</span> ttl<span class="token punctuation">)</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 释放锁</span></span>
<span class="line"><span class="token keyword">local</span> lockKey <span class="token operator">=</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">local</span> lockValue <span class="token operator">=</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">if</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> lockKey<span class="token punctuation">)</span> <span class="token operator">==</span> lockValue <span class="token keyword">then</span></span>
<span class="line">    <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;DEL&#39;</span><span class="token punctuation">,</span> lockKey<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_6-持久化" tabindex="-1"><a class="header-anchor" href="#_6-持久化"><span>6. 持久化</span></a></h2><h3 id="_6-1-rdb-快照" tabindex="-1"><a class="header-anchor" href="#_6-1-rdb-快照"><span>6.1 RDB（快照）</span></a></h3><p>将数据库快照保存到磁盘。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 手动触发快照</span></span>
<span class="line">SAVE                           <span class="token comment"># 同步保存，会阻塞</span></span>
<span class="line">BGSAVE                         <span class="token comment"># 后台保存，不阻塞</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看上次快照时间</span></span>
<span class="line">LASTSAVE</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置自动保存（在 redis.conf 中）</span></span>
<span class="line">save <span class="token number">900</span> <span class="token number">1</span>                     <span class="token comment"># 900 秒内至少 1 个 key 改变</span></span>
<span class="line">save <span class="token number">300</span> <span class="token number">10</span>                    <span class="token comment"># 300 秒内至少 10 个 key 改变</span></span>
<span class="line">save <span class="token number">60</span> <span class="token number">10000</span>                  <span class="token comment"># 60 秒内至少 10000 个 key 改变</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-aof-追加日志" tabindex="-1"><a class="header-anchor" href="#_6-2-aof-追加日志"><span>6.2 AOF（追加日志）</span></a></h3><p>记录每个写操作，重启时重放。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 启用 AOF（在 redis.conf 中）</span></span>
<span class="line">appendonly <span class="token function">yes</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># AOF 重写</span></span>
<span class="line">BGREWRITEAOF</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置 AOF（在 redis.conf 中）</span></span>
<span class="line">appendfsync always             <span class="token comment"># 每个命令都写入磁盘</span></span>
<span class="line">appendfsync everysec           <span class="token comment"># 每秒写入一次</span></span>
<span class="line">appendfsync no                 <span class="token comment"># 由操作系统决定</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 AOF 状态</span></span>
<span class="line">BGREWRITEAOF</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-rdb-与-aof-对比" tabindex="-1"><a class="header-anchor" href="#_6-3-rdb-与-aof-对比"><span>6.3 RDB 与 AOF 对比</span></a></h3><table><thead><tr><th>特性</th><th>RDB</th><th>AOF</th></tr></thead><tbody><tr><td>性能</td><td>高</td><td>低</td></tr><tr><td>文件大小</td><td>小</td><td>大</td></tr><tr><td>恢复速度</td><td>快</td><td>慢</td></tr><tr><td>数据完整性</td><td>一般</td><td>高</td></tr><tr><td>推荐场景</td><td>对数据一致性要求不高</td><td>对数据完整性要求高</td></tr></tbody></table><hr><h2 id="_7-高可用方案" tabindex="-1"><a class="header-anchor" href="#_7-高可用方案"><span>7. 高可用方案</span></a></h2><h3 id="_7-1-主从复制-master-slave" tabindex="-1"><a class="header-anchor" href="#_7-1-主从复制-master-slave"><span>7.1 主从复制（Master-Slave）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 在从服务器上执行</span></span>
<span class="line">SLAVEOF <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>         <span class="token comment"># 设置主服务器</span></span>
<span class="line">SLAVEOF NO ONE                 <span class="token comment"># 取消复制</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看复制状态</span></span>
<span class="line">INFO replication</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置文件方式（从服务器 redis.conf）</span></span>
<span class="line">replicaof <span class="token number">127.0</span>.0.1 <span class="token number">6379</span></span>
<span class="line">replica-read-only <span class="token function">yes</span>          <span class="token comment"># 从服务器只读</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-哨兵模式-sentinel" tabindex="-1"><a class="header-anchor" href="#_7-2-哨兵模式-sentinel"><span>7.2 哨兵模式（Sentinel）</span></a></h3><p>哨兵负责监控主从，主宕机时自动故障转移。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># sentinel.conf 配置文件</span></span>
<span class="line">port <span class="token number">26379</span></span>
<span class="line">sentinel monitor mymaster <span class="token number">127.0</span>.0.1 <span class="token number">6379</span> <span class="token number">1</span></span>
<span class="line">sentinel down-after-milliseconds mymaster <span class="token number">30000</span></span>
<span class="line">sentinel parallel-syncs mymaster <span class="token number">1</span></span>
<span class="line">sentinel failover-timeout mymaster <span class="token number">180000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动哨兵</span></span>
<span class="line">redis-sentinel sentinel.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看哨兵状态</span></span>
<span class="line">redis-cli <span class="token parameter variable">-p</span> <span class="token number">26379</span></span>
<span class="line"><span class="token operator">&gt;</span> SENTINEL masters</span>
<span class="line"><span class="token operator">&gt;</span> SENTINEL slaves mymaster</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-集群模式-cluster" tabindex="-1"><a class="header-anchor" href="#_7-3-集群模式-cluster"><span>7.3 集群模式（Cluster）</span></a></h3><p>Redis Cluster 提供分布式存储和高可用。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建集群（至少 6 个节点）</span></span>
<span class="line">redis-cli <span class="token parameter variable">--cluster</span> create <span class="token number">127.0</span>.0.1:7000 <span class="token number">127.0</span>.0.1:7001 <span class="token punctuation">\\</span></span>
<span class="line">          <span class="token number">127.0</span>.0.1:7002 <span class="token number">127.0</span>.0.1:7003 <span class="token number">127.0</span>.0.1:7004 <span class="token punctuation">\\</span></span>
<span class="line">          <span class="token number">127.0</span>.0.1:7005 --cluster-replicas <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看集群信息</span></span>
<span class="line">redis-cli <span class="token parameter variable">-p</span> <span class="token number">7000</span> CLUSTER INFO</span>
<span class="line">redis-cli <span class="token parameter variable">-p</span> <span class="token number">7000</span> CLUSTER NODES</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 连接集群</span></span>
<span class="line">redis-cli <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">7000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_8-性能优化" tabindex="-1"><a class="header-anchor" href="#_8-性能优化"><span>8. 性能优化</span></a></h2><h3 id="_8-1-连接优化" tabindex="-1"><a class="header-anchor" href="#_8-1-连接优化"><span>8.1 连接优化</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 连接池配置（应用程序侧）</span></span>
<span class="line"><span class="token comment"># 根据业务需求设置合适的连接池大小</span></span>
<span class="line"><span class="token comment"># 通常为：min_idle = 10, max_size = 100</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 增加 Redis 最大客户端连接数</span></span>
<span class="line">CONFIG SET maxclients <span class="token number">50000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-命令优化" tabindex="-1"><a class="header-anchor" href="#_8-2-命令优化"><span>8.2 命令优化</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 不好的做法：使用 KEYS 遍历</span></span>
<span class="line">KEYS *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 优化后：使用 SCAN 遍历</span></span>
<span class="line">SCAN <span class="token number">0</span> MATCH pattern COUNT <span class="token number">10</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 不好的做法：多次单个操作</span></span>
<span class="line">GET key1</span>
<span class="line">GET key2</span>
<span class="line">GET key3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 优化后：使用管道或 MGET</span></span>
<span class="line">MGET key1 key2 key3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 不好的做法：频繁小操作</span></span>
<span class="line">LPUSH mylist member1</span>
<span class="line">LPUSH mylist member2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 优化后：批量操作</span></span>
<span class="line">LPUSH mylist member1 member2 member3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-内存优化" tabindex="-1"><a class="header-anchor" href="#_8-3-内存优化"><span>8.3 内存优化</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看内存使用情况</span></span>
<span class="line">INFO memory</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 key 占用内存（需要安装 redis-cli 扩展）</span></span>
<span class="line">redis-cli <span class="token parameter variable">--bigkeys</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置最大内存和淘汰策略</span></span>
<span class="line">CONFIG SET maxmemory 256mb</span>
<span class="line">CONFIG SET maxmemory-policy allkeys-lru</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 淘汰策略说明：</span></span>
<span class="line"><span class="token comment"># noeviction: 不淘汰，写满后返回错误（默认）</span></span>
<span class="line"><span class="token comment"># allkeys-lru: 所有 key 中，优先删除最近最少使用的</span></span>
<span class="line"><span class="token comment"># allkeys-lfu: 所有 key 中，优先删除最不经常使用的</span></span>
<span class="line"><span class="token comment"># allkeys-random: 随机删除所有 key</span></span>
<span class="line"><span class="token comment"># volatile-lru: expired key 中，优先删除最近最少使用的</span></span>
<span class="line"><span class="token comment"># volatile-lfu: expired key 中，优先删除最不经常使用的</span></span>
<span class="line"><span class="token comment"># volatile-random: 随机删除 expired key</span></span>
<span class="line"><span class="token comment"># volatile-ttl: 优先删除剩余 TTL 最短的 key</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-监控和调试" tabindex="-1"><a class="header-anchor" href="#_8-4-监控和调试"><span>8.4 监控和调试</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 监控实时命令</span></span>
<span class="line">MONITOR</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看统计信息</span></span>
<span class="line">INFO</span>
<span class="line">INFO server              <span class="token comment"># 服务器信息</span></span>
<span class="line">INFO clients             <span class="token comment"># 客户端信息</span></span>
<span class="line">INFO memory              <span class="token comment"># 内存信息</span></span>
<span class="line">INFO stats               <span class="token comment"># 统计信息</span></span>
<span class="line">INFO replication         <span class="token comment"># 复制信息</span></span>
<span class="line">INFO cpu                 <span class="token comment"># CPU 信息</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看慢查询日志</span></span>
<span class="line">SLOWLOG GET <span class="token number">10</span>           <span class="token comment"># 获取最近 10 条慢查询</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置慢查询阈值（微秒）</span></span>
<span class="line">CONFIG SET slowlog-max-len <span class="token number">128</span></span>
<span class="line">CONFIG SET slowlog-log-slower-than <span class="token number">10000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_9-常见应用场景" tabindex="-1"><a class="header-anchor" href="#_9-常见应用场景"><span>9. 常见应用场景</span></a></h2><h3 id="_9-1-缓存" tabindex="-1"><a class="header-anchor" href="#_9-1-缓存"><span>9.1 缓存</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 获取缓存</span></span>
<span class="line">GET cache:user:1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置缓存（带过期时间）</span></span>
<span class="line">SET cache:user:1 <span class="token string">&quot;{name:&#39;john&#39;,age:25}&quot;</span> EX <span class="token number">3600</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 缓存穿透保护：缓存空值</span></span>
<span class="line">SET cache:user:999 <span class="token string">&quot;&quot;</span> EX <span class="token number">60</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 缓存预热（应用启动时）</span></span>
<span class="line">MSET cache:user:1 <span class="token string">&quot;{...}&quot;</span> cache:user:2 <span class="token string">&quot;{...}&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-计数器" tabindex="-1"><a class="header-anchor" href="#_9-2-计数器"><span>9.2 计数器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 页面访问量</span></span>
<span class="line">INCR page:visit:count</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取计数</span></span>
<span class="line">GET page:visit:count</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置过期时间（用于统计当日访问）</span></span>
<span class="line">SET daily:visit:2024-01-01 <span class="token number">100</span> EX <span class="token number">86400</span></span>
<span class="line">INCR daily:visit:2024-01-01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-排行榜" tabindex="-1"><a class="header-anchor" href="#_9-3-排行榜"><span>9.3 排行榜</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 更新用户分数</span></span>
<span class="line">ZADD leaderboard <span class="token number">100</span> user1</span>
<span class="line">ZADD leaderboard <span class="token number">200</span> user2</span>
<span class="line">ZADD leaderboard <span class="token number">150</span> user3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取排行榜（前 10 名）</span></span>
<span class="line">ZREVRANGE leaderboard <span class="token number">0</span> <span class="token number">9</span> WITHSCORES</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取用户排名</span></span>
<span class="line">ZREVRANK leaderboard user1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取用户分数</span></span>
<span class="line">ZSCORE leaderboard user1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-消息队列" tabindex="-1"><a class="header-anchor" href="#_9-4-消息队列"><span>9.4 消息队列</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 生产者：发送消息</span></span>
<span class="line">RPUSH queue:jobs <span class="token string">&quot;{id:1,task:&#39;email&#39;}&quot;</span></span>
<span class="line">RPUSH queue:jobs <span class="token string">&quot;{id:2,task:&#39;report&#39;}&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 消费者：阻塞式消费</span></span>
<span class="line">BLPOP queue:jobs <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 延迟队列（使用有序集合）</span></span>
<span class="line">ZADD delayed:queue <span class="token number">1609459200</span> <span class="token string">&quot;{id:1,task:&#39;send&#39;}&quot;</span></span>
<span class="line"><span class="token comment"># 定时扫描过期任务</span></span>
<span class="line">ZRANGEBYSCORE delayed:queue <span class="token number">0</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-5-分布式锁" tabindex="-1"><a class="header-anchor" href="#_9-5-分布式锁"><span>9.5 分布式锁</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 获取锁（带超时）</span></span>
<span class="line">SET lock:resource <span class="token string">&quot;uuid-123&quot;</span> NX EX <span class="token number">30</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 业务操作</span></span>
<span class="line"><span class="token comment"># ... 关键代码 ...</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 释放锁（需要验证 uuid，防止误删）</span></span>
<span class="line">EVAL <span class="token string">&quot;if redis.call(&#39;GET&#39;, KEYS[1]) == ARGV[1] then return redis.call(&#39;DEL&#39;, KEYS[1]) else return 0 end&quot;</span> <span class="token number">1</span> lock:resource uuid-123</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-6-会话存储" tabindex="-1"><a class="header-anchor" href="#_9-6-会话存储"><span>9.6 会话存储</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 存储会话</span></span>
<span class="line">HSET session:user:123 username john email john@example.com age <span class="token number">25</span></span>
<span class="line">EXPIRE session:user:123 <span class="token number">1800</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新会话字段</span></span>
<span class="line">HSET session:user:123 last_visit <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取会话</span></span>
<span class="line">HGETALL session:user:123</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除会话</span></span>
<span class="line">DEL session:user:123</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-7-hyperloglog-基数估计" tabindex="-1"><a class="header-anchor" href="#_9-7-hyperloglog-基数估计"><span>9.7 HyperLogLog（基数估计）</span></a></h3><p>用于估计大数据集中不同元素的数量。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加元素</span></span>
<span class="line">PFADD hll a b c d e f g</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取基数（不同元素的数量）</span></span>
<span class="line">PFCOUNT hll</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 合并多个 HyperLogLog</span></span>
<span class="line">PFMERGE hll3 hll1 hll2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-8-布隆过滤器-bloom-filter" tabindex="-1"><a class="header-anchor" href="#_9-8-布隆过滤器-bloom-filter"><span>9.8 布隆过滤器（Bloom Filter）</span></a></h3><p>Redis 4.0+ 支持，用于判断元素是否可能存在。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加元素</span></span>
<span class="line">BF.ADD mybloom item1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查元素</span></span>
<span class="line">BF.EXISTS mybloom item1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 批量添加</span></span>
<span class="line">BF.MADD mybloom item1 item2 item3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 批量检查</span></span>
<span class="line">BF.MEXISTS mybloom item1 item2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_10-常见问题" tabindex="-1"><a class="header-anchor" href="#_10-常见问题"><span>10. 常见问题</span></a></h2><h3 id="_10-1-内存溢出" tabindex="-1"><a class="header-anchor" href="#_10-1-内存溢出"><span>10.1 内存溢出</span></a></h3><p><strong>问题</strong>：Redis 占用内存不断增长</p><p><strong>解决方案</strong>：</p><ul><li>设置 <code>maxmemory</code> 和淘汰策略</li><li>定期清理过期 key</li><li>使用 <code>INFO memory</code> 分析内存使用</li><li>优化数据结构，避免存储大对象</li></ul><h3 id="_10-2-性能下降" tabindex="-1"><a class="header-anchor" href="#_10-2-性能下降"><span>10.2 性能下降</span></a></h3><p><strong>问题</strong>：Redis 响应变慢</p><p><strong>解决方案</strong>：</p><ul><li>使用 <code>SLOWLOG</code> 找出慢查询</li><li>避免使用 <code>KEYS</code> 命令，改用 <code>SCAN</code></li><li>检查网络延迟</li><li>考虑使用集群分散负载</li><li>优化持久化配置</li></ul><h3 id="_10-3-主从不同步" tabindex="-1"><a class="header-anchor" href="#_10-3-主从不同步"><span>10.3 主从不同步</span></a></h3><p><strong>问题</strong>：主从数据不一致</p><p><strong>解决方案</strong>：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看复制偏移量</span></span>
<span class="line">INFO replication</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制重新同步</span></span>
<span class="line">SLAVEOF NO ONE</span>
<span class="line">SLAVEOF master-ip master-port</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查网络连接</span></span>
<span class="line"><span class="token comment"># 增加 \`repl-diskless-sync no\` 配置</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-4-连接超时" tabindex="-1"><a class="header-anchor" href="#_10-4-连接超时"><span>10.4 连接超时</span></a></h3><p><strong>问题</strong>：无法连接 Redis</p><p><strong>解决方案</strong>：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查服务是否启动</span></span>
<span class="line"><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> redis-server</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查端口是否开放</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-tlnp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">6379</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查防火墙</span></span>
<span class="line"><span class="token function">sudo</span> firewall-cmd --add-port<span class="token operator">=</span><span class="token number">6379</span>/tcp <span class="token parameter variable">--permanent</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查配置中的绑定地址</span></span>
<span class="line"><span class="token function">grep</span> <span class="token string">&quot;^bind&quot;</span> /etc/redis/redis.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-5-数据丢失" tabindex="-1"><a class="header-anchor" href="#_10-5-数据丢失"><span>10.5 数据丢失</span></a></h3><p><strong>问题</strong>：重启后数据丢失</p><p><strong>解决方案</strong>：</p><ul><li>启用 RDB：配置 <code>save</code> 指令</li><li>启用 AOF：设置 <code>appendonly yes</code></li><li>使用主从复制或集群</li><li>定期备份 dump.rdb 和 appendonly.aof</li></ul><hr><h2 id="_11-redis-与其他技术结合" tabindex="-1"><a class="header-anchor" href="#_11-redis-与其他技术结合"><span>11. Redis 与其他技术结合</span></a></h2><h3 id="_11-1-redis-php" tabindex="-1"><a class="header-anchor" href="#_11-1-redis-php"><span>11.1 Redis + PHP</span></a></h3><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token comment">// 使用 Redis 扩展</span></span>
<span class="line"><span class="token variable">$redis</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Redis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 设置值</span></span>
<span class="line"><span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user:1&#39;</span><span class="token punctuation">,</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;John&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;age&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取值</span></span>
<span class="line"><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user:1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 列表操作</span></span>
<span class="line"><span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">rpush</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;queue:jobs&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;job1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;job2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$job</span> <span class="token operator">=</span> <span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">lpop</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;queue:jobs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 有序集合（排行榜）</span></span>
<span class="line"><span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">zadd</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;leaderboard&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">zadd</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;leaderboard&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$top</span> <span class="token operator">=</span> <span class="token variable">$redis</span><span class="token operator">-&gt;</span><span class="token function">zrevrange</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;leaderboard&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-redis-python" tabindex="-1"><a class="header-anchor" href="#_11-2-redis-python"><span>11.2 Redis + Python</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> redis</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 连接 Redis</span></span>
<span class="line">r <span class="token operator">=</span> redis<span class="token punctuation">.</span>Redis<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">6379</span><span class="token punctuation">,</span> decode_responses<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串操作</span></span>
<span class="line">r<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> ex<span class="token operator">=</span><span class="token number">3600</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列表操作</span></span>
<span class="line">r<span class="token punctuation">.</span>rpush<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;task1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;task2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>lrange<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 有序集合操作</span></span>
<span class="line">r<span class="token punctuation">.</span>zadd<span class="token punctuation">(</span><span class="token string">&#39;scores&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;user1&#39;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&#39;user2&#39;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>zrange<span class="token punctuation">(</span><span class="token string">&#39;scores&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> withscores<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Hash 操作</span></span>
<span class="line">r<span class="token punctuation">.</span>hset<span class="token punctuation">(</span><span class="token string">&#39;user:1&#39;</span><span class="token punctuation">,</span> mapping<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,130))])}const u=i(d,[["render",r],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/books/redis-handbook/","title":"Redis 使用手册","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. Redis 基础概念","slug":"_1-redis-基础概念","link":"#_1-redis-基础概念","children":[{"level":3,"title":"1.1 什么是 Redis","slug":"_1-1-什么是-redis","link":"#_1-1-什么是-redis","children":[]},{"level":3,"title":"1.2 Redis 的特点","slug":"_1-2-redis-的特点","link":"#_1-2-redis-的特点","children":[]},{"level":3,"title":"1.3 Redis 适用场景","slug":"_1-3-redis-适用场景","link":"#_1-3-redis-适用场景","children":[]}]},{"level":2,"title":"2. Redis 安装与配置","slug":"_2-redis-安装与配置","link":"#_2-redis-安装与配置","children":[{"level":3,"title":"2.1 Linux 安装","slug":"_2-1-linux-安装","link":"#_2-1-linux-安装","children":[]},{"level":3,"title":"2.2 启动 Redis","slug":"_2-2-启动-redis","link":"#_2-2-启动-redis","children":[]},{"level":3,"title":"2.3 连接 Redis","slug":"_2-3-连接-redis","link":"#_2-3-连接-redis","children":[]},{"level":3,"title":"2.4 配置文件重点项","slug":"_2-4-配置文件重点项","link":"#_2-4-配置文件重点项","children":[]}]},{"level":2,"title":"3. Redis 数据类型","slug":"_3-redis-数据类型","link":"#_3-redis-数据类型","children":[{"level":3,"title":"3.1 String（字符串）","slug":"_3-1-string-字符串","link":"#_3-1-string-字符串","children":[]},{"level":3,"title":"3.2 List（列表）","slug":"_3-2-list-列表","link":"#_3-2-list-列表","children":[]},{"level":3,"title":"3.3 Set（集合）","slug":"_3-3-set-集合","link":"#_3-3-set-集合","children":[]},{"level":3,"title":"3.4 Hash（哈希）","slug":"_3-4-hash-哈希","link":"#_3-4-hash-哈希","children":[]},{"level":3,"title":"3.5 Sorted Set（有序集合）","slug":"_3-5-sorted-set-有序集合","link":"#_3-5-sorted-set-有序集合","children":[]}]},{"level":2,"title":"4. Key 常用命令","slug":"_4-key-常用命令","link":"#_4-key-常用命令","children":[{"level":3,"title":"4.1 Key 操作","slug":"_4-1-key-操作","link":"#_4-1-key-操作","children":[]},{"level":3,"title":"4.2 Key 的 Scan 操作","slug":"_4-2-key-的-scan-操作","link":"#_4-2-key-的-scan-操作","children":[]}]},{"level":2,"title":"5. 事务与脚本","slug":"_5-事务与脚本","link":"#_5-事务与脚本","children":[{"level":3,"title":"5.1 事务","slug":"_5-1-事务","link":"#_5-1-事务","children":[]},{"level":3,"title":"5.2 Lua 脚本","slug":"_5-2-lua-脚本","link":"#_5-2-lua-脚本","children":[]},{"level":3,"title":"5.3 Lua 脚本示例：分布式锁","slug":"_5-3-lua-脚本示例-分布式锁","link":"#_5-3-lua-脚本示例-分布式锁","children":[]}]},{"level":2,"title":"6. 持久化","slug":"_6-持久化","link":"#_6-持久化","children":[{"level":3,"title":"6.1 RDB（快照）","slug":"_6-1-rdb-快照","link":"#_6-1-rdb-快照","children":[]},{"level":3,"title":"6.2 AOF（追加日志）","slug":"_6-2-aof-追加日志","link":"#_6-2-aof-追加日志","children":[]},{"level":3,"title":"6.3 RDB 与 AOF 对比","slug":"_6-3-rdb-与-aof-对比","link":"#_6-3-rdb-与-aof-对比","children":[]}]},{"level":2,"title":"7. 高可用方案","slug":"_7-高可用方案","link":"#_7-高可用方案","children":[{"level":3,"title":"7.1 主从复制（Master-Slave）","slug":"_7-1-主从复制-master-slave","link":"#_7-1-主从复制-master-slave","children":[]},{"level":3,"title":"7.2 哨兵模式（Sentinel）","slug":"_7-2-哨兵模式-sentinel","link":"#_7-2-哨兵模式-sentinel","children":[]},{"level":3,"title":"7.3 集群模式（Cluster）","slug":"_7-3-集群模式-cluster","link":"#_7-3-集群模式-cluster","children":[]}]},{"level":2,"title":"8. 性能优化","slug":"_8-性能优化","link":"#_8-性能优化","children":[{"level":3,"title":"8.1 连接优化","slug":"_8-1-连接优化","link":"#_8-1-连接优化","children":[]},{"level":3,"title":"8.2 命令优化","slug":"_8-2-命令优化","link":"#_8-2-命令优化","children":[]},{"level":3,"title":"8.3 内存优化","slug":"_8-3-内存优化","link":"#_8-3-内存优化","children":[]},{"level":3,"title":"8.4 监控和调试","slug":"_8-4-监控和调试","link":"#_8-4-监控和调试","children":[]}]},{"level":2,"title":"9. 常见应用场景","slug":"_9-常见应用场景","link":"#_9-常见应用场景","children":[{"level":3,"title":"9.1 缓存","slug":"_9-1-缓存","link":"#_9-1-缓存","children":[]},{"level":3,"title":"9.2 计数器","slug":"_9-2-计数器","link":"#_9-2-计数器","children":[]},{"level":3,"title":"9.3 排行榜","slug":"_9-3-排行榜","link":"#_9-3-排行榜","children":[]},{"level":3,"title":"9.4 消息队列","slug":"_9-4-消息队列","link":"#_9-4-消息队列","children":[]},{"level":3,"title":"9.5 分布式锁","slug":"_9-5-分布式锁","link":"#_9-5-分布式锁","children":[]},{"level":3,"title":"9.6 会话存储","slug":"_9-6-会话存储","link":"#_9-6-会话存储","children":[]},{"level":3,"title":"9.7 HyperLogLog（基数估计）","slug":"_9-7-hyperloglog-基数估计","link":"#_9-7-hyperloglog-基数估计","children":[]},{"level":3,"title":"9.8 布隆过滤器（Bloom Filter）","slug":"_9-8-布隆过滤器-bloom-filter","link":"#_9-8-布隆过滤器-bloom-filter","children":[]}]},{"level":2,"title":"10. 常见问题","slug":"_10-常见问题","link":"#_10-常见问题","children":[{"level":3,"title":"10.1 内存溢出","slug":"_10-1-内存溢出","link":"#_10-1-内存溢出","children":[]},{"level":3,"title":"10.2 性能下降","slug":"_10-2-性能下降","link":"#_10-2-性能下降","children":[]},{"level":3,"title":"10.3 主从不同步","slug":"_10-3-主从不同步","link":"#_10-3-主从不同步","children":[]},{"level":3,"title":"10.4 连接超时","slug":"_10-4-连接超时","link":"#_10-4-连接超时","children":[]},{"level":3,"title":"10.5 数据丢失","slug":"_10-5-数据丢失","link":"#_10-5-数据丢失","children":[]}]},{"level":2,"title":"11. Redis 与其他技术结合","slug":"_11-redis-与其他技术结合","link":"#_11-redis-与其他技术结合","children":[{"level":3,"title":"11.1 Redis + PHP","slug":"_11-1-redis-php","link":"#_11-1-redis-php","children":[]},{"level":3,"title":"11.2 Redis + Python","slug":"_11-2-redis-python","link":"#_11-2-redis-python","children":[]}]}],"git":{},"filePathRelative":"books/redis-handbook/index.md"}');export{u as comp,v as data};
