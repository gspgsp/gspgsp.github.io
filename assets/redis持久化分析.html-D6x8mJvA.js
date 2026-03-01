import{_ as n,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h3 id="redis持久化分析" tabindex="-1"><a class="header-anchor" href="#redis持久化分析"><span>redis持久化分析</span></a></h3><h4 id="redis-提供两种持久化机制" tabindex="-1"><a class="header-anchor" href="#redis-提供两种持久化机制"><span>Redis 提供两种持久化机制：</span></a></h4><h5 id="_1-rdb-redis-database" tabindex="-1"><a class="header-anchor" href="#_1-rdb-redis-database"><span>1. RDB（Redis Database）</span></a></h5><ul><li>以 <strong>二进制快照</strong> 方式保存数据到磁盘。</li><li>触发方式： <ul><li>默认会在一定间隔或达到一定条件（如 N 秒内 M 次修改）时进行 <strong>自动快照</strong>。</li><li>可以执行 <code>SAVE(手动)</code>（阻塞当前进程）或 <code>BGSAVE(手动/自动)</code>（创建子进程异步执行）。</li></ul></li><li>优点： <ul><li>适合大规模数据恢复（启动时直接加载）。</li><li>采用二进制存储，占用空间小，恢复速度快。</li></ul></li><li>缺点： <ul><li>可能会丢失最近的数据（因为是定期持久化）。</li><li>需要 fork 进程，可能消耗 CPU 和内存。</li></ul></li></ul><h5 id="_2-aof-append-only-file" tabindex="-1"><a class="header-anchor" href="#_2-aof-append-only-file"><span>2. AOF（Append Only File）</span></a></h5><ul><li>记录 <strong>所有写操作日志</strong>，以追加的方式存入文件。</li><li>触发方式： <ul><li><code>appendfsync</code> 配置： <ul><li><code>always</code>（每次写入都同步，最安全但最慢）。</li><li><code>everysec</code>（每秒同步一次，折中）。</li><li><code>no</code>（依赖 OS，最快但可能丢失数据）。</li></ul></li></ul></li><li>优点： <ul><li>数据持久性更强，几乎不会丢失数据。</li></ul></li><li>缺点： <ul><li>AOF 文件比 RDB 大，恢复速度相对慢。</li><li>需要定期 AOF rewrite 以控制文件大小。</li></ul></li></ul><h5 id="两者组合" tabindex="-1"><a class="header-anchor" href="#两者组合"><span><strong>两者组合</strong></span></a></h5><ul><li>Redis 允许 <strong>同时开启 RDB 和 AOF</strong>，结合两者优点： <ul><li>先用 RDB 快速加载数据。</li><li>再用 AOF 追加最新数据，减少数据丢失。</li></ul></li></ul><h5 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span><strong>适用场景</strong></span></a></h5><table><thead><tr><th>机制</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>RDB</strong></td><td>适用于 <strong>数据丢失影响较小</strong>，但需要 <strong>快速恢复</strong> 的场景，比如缓存</td></tr><tr><td><strong>AOF</strong></td><td>适用于 <strong>数据持久化要求高</strong>，但对恢复时间要求不严格的业务</td></tr><tr><td><strong>RDB + AOF</strong></td><td>需要 <strong>快速恢复</strong> 和 <strong>高持久性</strong> 的业务，如重要数据库</td></tr></tbody></table><p>如果你的 Redis 需要较强的持久性，一般建议 <strong>开启 AOF，并配置 <code>everysec</code></strong>，同时保留 RDB 作为额外的备份手段。</p><h5 id="redis默认持久化方式" tabindex="-1"><a class="header-anchor" href="#redis默认持久化方式"><span>redis默认持久化方式</span></a></h5><ul><li>Redis 默认使用的是 RDB（Redis Database） 持久化方式。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在默认情况下，Redis 会根据以下配置生成 RDB 快照文件：</span>
<span class="line">save 900 1   # 900秒（15分钟）内，如果至少有1个键被修改，则保存快照</span>
<span class="line">save 300 10  # 300秒（5分钟）内，如果至少有10个键被修改，则保存快照</span>
<span class="line">save 60 10000 # 60秒内，如果至少有10000个键被修改，则保存快照</span>
<span class="line"></span>
<span class="line">这个配置意味着 Redis 会在满足一定条件时定期生成快照并保存到磁盘，通常是 dump.rdb 文件。这个文件存放在 Redis 数据目录下，并且是默认的持久化方式。</span>
<span class="line">如果需要启用 AOF（Append-Only File）持久化，可以通过修改 redis.conf 配置文件中的 appendonly 配置项：</span>
<span class="line">appendonly yes</span>
<span class="line">默认情况下，AOF 是关闭的，因此 Redis 启动时只会根据 RDB 快照来加载数据。如果启用了 AOF，Redis 会将每个写操作追加到 AOF 文件中，提供更高的持久性。</span>
<span class="line"></span>
<span class="line">如果手动注释掉默认的RDB配置，那么，Redis 将 不再自动进行 RDB 持久化。即数据不会定期保存到磁盘中。如果也不启用 AOF，那么 Redis 只会存储数据在内存中，这意味着数据在 Redis 重启后会丢失。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="rdb方式的影响" tabindex="-1"><a class="header-anchor" href="#rdb方式的影响"><span>RDB方式的影响</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">执行 SAVE 或 BGSAVE(包括自动执行) 后，都会生成新的备份文件（dump.rdb），并且覆盖之前的文件。如果需要保留多个备份，建议手动管理文件名。</span>
<span class="line">例如，可以在执行命令之前，手动将当前的 dump.rdb 重命名为一个带有时间戳或其他标识符的文件：</span>
<span class="line">mv dump.rdb dump-$(date +%Y%m%d%H%M%S).rdb</span>
<span class="line"></span>
<span class="line">Redis 不会同时保存多个 RDB 文件，只有最新的快照会保存在 dump.rdb 文件中。所以每次执行 SAVE、BGSAVE 或自动触发的持久化时，dump.rdb 都会被新快照替换。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="最新的rdb文件包括哪些信息" tabindex="-1"><a class="header-anchor" href="#最新的rdb文件包括哪些信息"><span>最新的RDB文件包括哪些信息</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">当 Redis 执行 SAVE 或 BGSAVE 并覆盖现有的 dump.rdb 文件时，新的 dump.rdb 文件将包含当前 Redis 数据库中的所有数据，即在执行快照时 Redis 内存中的数据状态。</span>
<span class="line"></span>
<span class="line">新的 dump.rdb 文件包含的内容：</span>
<span class="line">1&gt;所有数据库的数据：</span>
<span class="line">Redis 默认会有 16 个数据库（编号从 0 到 15），如果你没有修改 redis.conf 中的 databases 配置，新的 dump.rdb 文件会包含所有数据库（及其对应的键值对）的数据。</span>
<span class="line">每个数据库的内容（键和值）都会被保存到新的 dump.rdb 文件中。</span>
<span class="line"></span>
<span class="line">2&gt;当前内存中的所有数据：</span>
<span class="line">Redis 在执行快照时，会将 当前内存中的所有键值对（包括字符串、哈希、列表、集合、有序集合等数据结构）保存到磁盘。无论这些数据来自手动写入、自动持久化、还是客户端操作，都会被完整保存。</span>
<span class="line"></span>
<span class="line">3&gt;元数据（例如过期键信息）：</span>
<span class="line">dump.rdb 文件还会包含一些与 Redis 数据库相关的元数据，比如键的过期时间（如果有设置过期时间的键）和数据库版本等信息。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="aof方式影响" tabindex="-1"><a class="header-anchor" href="#aof方式影响"><span>AOF方式影响</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">默认情况下，Redis 会 只生成一个 AOF 文件，即 appendonly.aof。所有的写命令都会追加到这个文件中。</span>
<span class="line">如果 Redis 重启或持久化操作（例如 AOF 重写）发生，原有的 AOF 文件可能会被重命名为备份文件（如 appendonly.aof.old），并且 Redis 会创建一个新的 AOF 文件。</span>
<span class="line">可以在配置文件中指定多个 AOF 文件，但默认情况下 Redis 只会使用一个 appendonly.aof 文件。</span>
<span class="line"></span>
<span class="line">Redis 在使用 AOF 时，也有非阻塞模式（例如，appendfsync always 和 appendfsync everysec）。具体来说：</span>
<span class="line">主进程继续服务客户端请求：Redis 会将每个写操作命令追加到 AOF 文件中。即使 AOF 持久化正在进行，主进程也可以继续处理客户端请求，不会被阻塞。</span>
<span class="line">写操作的影响：在 AOF 持久化过程中，新的写操作会被追加到 AOF 文件中，并且会与现有的 AOF 持久化机制一起进行处理。例如，如果你设置了 appendfsync everysec，Redis 会每秒同步一次 AOF 文件，新的写操作会被定期追加到文件中。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="aof-的配置选项" tabindex="-1"><a class="header-anchor" href="#aof-的配置选项"><span>AOF 的配置选项</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">AOF 的操作和行为可以通过 Redis 配置文件（redis.conf）进行调整，常见的配置选项包括：</span>
<span class="line">appendonly：启用或禁用 AOF，默认为 no。</span>
<span class="line">appendfsync：控制 AOF 的写入同步策略，选项有：</span>
<span class="line">always：每次写入操作都同步到磁盘（最安全，但性能差）。</span>
<span class="line">everysec：每秒同步一次（推荐，平衡了性能和安全性）。</span>
<span class="line">no：不同步（最快，但可能丢失数据）。</span>
<span class="line">auto-aof-rewrite-percentage：触发 AOF 重写的大小增长百分比。</span>
<span class="line">auto-aof-rewrite-min-size：触发 AOF 重写的最小文件大小。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="aof-的恢复过程" tabindex="-1"><a class="header-anchor" href="#aof-的恢复过程"><span>AOF 的恢复过程</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 Redis 重启时，AOF 文件会被加载到内存中。Redis 会按顺序执行 AOF 文件中的命令，从而恢复数据。恢复过程比 RDB 快照更慢，因为 Redis 需要按顺序重放所有的操作命令，但能够提供更精确的恢复（即恢复到某个时间点）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="最新的aof文件会包含哪些信息" tabindex="-1"><a class="header-anchor" href="#最新的aof文件会包含哪些信息"><span>最新的AOF文件会包含哪些信息</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">与 RDB 不同，AOF 会记录 每个执行的写命令（如 SET, HSET, LPUSH 等），并将它们追加到日志文件中。通过重放这些命令，可以恢复数据库的状态。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论：</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">RDB 快照：保存的是 Redis 数据库 在某一时刻的完整状态（即所有键值对和其元数据），而不包括实际执行的操作命令。</span>
<span class="line">AOF 持久化：保存的是执行的每个操作命令，可以按顺序重放这些命令恢复数据。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="aof-重写" tabindex="-1"><a class="header-anchor" href="#aof-重写"><span>AOF 重写</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">AOF 重写（AOF Rewrite）是 Redis 提供的一种机制，用于优化 AOF 文件的大小和性能，避免 AOF 文件在长时间运行后变得过于庞大，导致加载和恢复数据时变慢。AOF 重写过程会将当前数据库状态以最小的操作量重新写入新的 AOF 文件，替代原先的 AOF 文件，从而减少冗余和提高性能。</span>
<span class="line"></span>
<span class="line">AOF 重写的基本原理：</span>
<span class="line">1&gt;AOF 重写的目的：</span>
<span class="line">随着 Redis 运行，所有写操作会被追加到 appendonly.aof 文件中。随着时间的推移，这个文件可能变得非常大，特别是当你进行大量小的写操作时。由于 AOF 文件会记录每个操作命令，而 Redis 实际的内存状态可能已经发生了很大的变化，许多操作已经不再需要（例如，如果一个键已经被修改或删除，它的历史命令就不再重要）。</span>
<span class="line">AOF 重写就是通过将当前数据库状态（包括所有现有数据）写入一个新的文件，替代现有的 AOF 文件，从而减小文件大小，消除冗余的命令。</span>
<span class="line"></span>
<span class="line">2&gt;AOF 重写的工作流程：</span>
<span class="line">异步执行：AOF 重写是异步进行的。Redis 会在后台启动一个新的进程来重写 AOF 文件，这样 Redis 主进程可以继续处理客户端请求，不会阻塞。</span>
<span class="line">新文件生成：在重写过程中，Redis 会通过将数据库的当前状态（从内存中导出的键值对）转换成 AOF 命令的形式，并写入新的 AOF 文件中。这些 AOF 命令会被精简，仅包含最基本的操作（即能够将数据库恢复到当前状态的命令）。</span>
<span class="line">重写完成：当新的 AOF 文件完成后，原有的 AOF 文件会被替换掉。</span>
<span class="line"></span>
<span class="line">3&gt;AOF 重写的触发条件： AOF 重写并不是每次都会触发，它有一定的触发条件。Redis 会根据配置选项自动触发 AOF 重写，或者你可以手动触发。常见的触发条件有：</span>
<span class="line">auto-aof-rewrite-percentage：AOF 文件的大小变化百分比。如果当前 AOF 文件的大小比上一次 AOF 重写时大了指定百分比（例如 100%），则触发重写。</span>
<span class="line">auto-aof-rewrite-min-size：AOF 文件的最小大小。如果 AOF 文件的大小超过了这个最小值，并且符合 auto-aof-rewrite-percentage 的要求，AOF 重写将会触发。</span>
<span class="line">手动触发：你也可以通过执行 BGREWRITEAOF 命令来手动触发 AOF 重写操作。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="redis持久化有个常见问题-不管是rdb还是-aof-如果都不用阻塞的方式持久化-那么在持久化的时候-还有写操作或者更新操作-有影响吗" tabindex="-1"><a class="header-anchor" href="#redis持久化有个常见问题-不管是rdb还是-aof-如果都不用阻塞的方式持久化-那么在持久化的时候-还有写操作或者更新操作-有影响吗"><span>Redis持久化有个常见问题，不管是RDB还是 AOF, 如果都不用阻塞的方式持久化，那么在持久化的时候，还有写操作或者更新操作，有影响吗</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这个问题涉及到一个 数据一致性问题，对于AOF是没有任何影响的，因为 AOF 是以追加的方式将命令写入文件的，并不涉及创建副本或进行内存快照，所以不存在像 RDB 那样需要担心 COW 问题。但是对于RDB是由影响的，但是有方法加解决,</span>
<span class="line">为了确保数据的一致性，Redis 采用了一种叫做 copy-on-write (COW) 的机制。这是通过操作系统级的内存管理机制来实现的。具体来说，copy-on-write 允许子进程在进行快照时，只读取内存数据的快照，而不影响主进程对数据的修改。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="cow机制" tabindex="-1"><a class="header-anchor" href="#cow机制"><span>COW机制</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">写时复制（Copy-on-Write, COW），这是操作系统内存管理的一个优化技术。当 Redis 执行 RDB 快照时，创建一个子进程(从父进程fork)用于复制内存中的数据。在这个过程中，父进程继续处理写操作，但不会直接影响子进程的数据。具体来说，这个机制通过操作系统的内存管理实现了“惰性复制”，即只有在修改数据时才会实际复制数据。让我们一步步解析：</span>
<span class="line"></span>
<span class="line">写时复制（COW）概念：</span>
<span class="line">写时复制（COW）是一个内存优化策略，主要用于避免不必要的数据复制。在 COW 机制下，当进程创建一个子进程时，子进程并不会直接复制父进程的所有内存数据，而是和父进程共享相同的内存页面（内存的最小单元）。这时，父进程和子进程都可以访问相同的数据。</span>
<span class="line">但是，当父进程或子进程对共享内存做修改时(这个才是重点，cow其实为了处理父进程/子进程对内存内容修改的问题，对如RDB,子进程不会修改数据，所以子进程不会cow,只会在父进程出现)，操作系统才会实际创建内存的副本，并且修改的部分仅会影响其中一个进程。这就避免了不必要的内存复制，提高了效率。</span>
<span class="line"></span>
<span class="line">在 Redis 中的应用：</span>
<span class="line">1.子进程创建快照：当 Redis 执行 BGSAVE 命令时，创建一个子进程来进行 RDB 快照生成。子进程会开始读取 Redis 内存中的数据，但是在这时，父进程的数据和子进程的数据是共享的，没有立即复制。父进程和子进程都访问同一块内存区域。</span>
<span class="line"></span>
<span class="line">2.父进程修改数据：如果此时父进程有写操作，操作系统会利用 COW 特性延迟复制被修改的内存页面。假设父进程修改了某个内存数据，当父进程试图修改该数据时，操作系统会为父进程“复制”一个新的内存页。父进程继续操作这个新的内存页，而子进程仍然保持对旧内存页的只读访问。</span>
<span class="line"></span>
<span class="line">3.子进程的读取操作：子进程在进行快照时，读取的是父进程内存中没有被修改的部分。如果父进程没有修改某些数据，子进程和父进程可以共享这部分数据，避免不必要的复制。</span>
<span class="line"></span>
<span class="line">4.写操作的影响：因为修改的内存会被复制到新的内存页，所以写操作不会影响到子进程正在读取的快照数据。也就是说，子进程快照的数据并不会被父进程的写操作改变，它会保持快照开始时的一致性。</span>
<span class="line"></span>
<span class="line">5.完成快照：当子进程完成快照时，它会将快照数据写入磁盘。此时，子进程和父进程的数据已经分离，互不干扰。父进程继续进行写操作，子进程已经完成快照。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="操作系统会为父进程创建一个新的内存副本-这个新的内存副本包括哪些数据" tabindex="-1"><a class="header-anchor" href="#操作系统会为父进程创建一个新的内存副本-这个新的内存副本包括哪些数据"><span>操作系统会为父进程创建一个新的内存副本， 这个新的内存副本包括哪些数据</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在 写时复制（Copy-on-Write, COW） 机制中，当父进程（如 Redis 主进程）修改数据时，操作系统为父进程创建的新的内存副本仅包括 父进程修改的内存页，而不会复制整个内存空间。</span>
<span class="line"></span>
<span class="line">具体来说，内存副本的内容包括哪些数据？</span>
<span class="line">1.修改过的数据页（Memory Page）：</span>
<span class="line"></span>
<span class="line">操作系统采用的是 按页（page）进行内存管理。内存通常是按 4KB（或更大）为单位划分为多个页。父进程修改内存中的数据时，操作系统并不会直接复制整个数据块，而是只会 复制那些实际被修改的内存页。</span>
<span class="line">这些修改后的内存页是新的副本，只对父进程可见，子进程仍然看到旧的内存页，直到子进程尝试修改这些数据页时才会触发复制。</span>
<span class="line"></span>
<span class="line">2.修改的数据内容：</span>
<span class="line">如果父进程修改了某个键的值，操作系统会为该键所在的内存页创建一个新的副本，存储修改后的值。</span>
<span class="line">其他没有被修改的内存页则仍然由父进程和子进程共享，不会被复制。</span>
<span class="line"></span>
<span class="line">3.其他内存区域：</span>
<span class="line">对于未被修改的内存区域（例如其他键值对或数据结构），操作系统不会为这些部分创建副本，而是让父进程和子进程共享这些内存页面。这样，内存使用得到有效优化。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="副本的页数据不需要和原始内存页的数据同步吗" tabindex="-1"><a class="header-anchor" href="#副本的页数据不需要和原始内存页的数据同步吗"><span>副本的页数据不需要和原始内存页的数据同步吗</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">为什么副本和原始数据不需要同步？</span>
<span class="line">在 COW 机制下，内存页在进程修改数据时被复制。具体来说，当一个进程修改共享内存页时，操作系统会将该页复制到该进程的私有地址空间，之后修改会发生在副本上。原始内存页保持不变，直到有另一个进程尝试修改它时，才会再次触发 COW 机制。</span>
<span class="line"></span>
<span class="line">为什么不需要同步？</span>
<span class="line">减少开销：COW 机制的主要优势是 延迟内存复制，只有在需要修改数据时才会进行复制。通过这种方式，多个进程可以共享相同的数据，直到某个进程修改数据时才会消耗额外的内存来创建副本。这个过程避免了不必要的复制开销。</span>
<span class="line">独立修改：副本和原始内存页在被复制后是 独立的。修改副本只会影响该进程的数据，而不会影响其他进程。如果副本和原始数据是同步的，那么这将使得数据在多个进程间共享时出现冲突和复杂性。</span>
<span class="line">并发性：不同的进程在不同的时间对数据进行修改，副本机制保证了每个进程都有自己的独立数据副本，这样就避免了多个进程对同一块内存进行并发写入时的竞争问题。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="对于父进程-主进程-在触发-cow-后-父进程会访问-两个数据页-副本和原始" tabindex="-1"><a class="header-anchor" href="#对于父进程-主进程-在触发-cow-后-父进程会访问-两个数据页-副本和原始"><span>对于父进程(主进程)在触发 COW 后，父进程会访问 两个数据页(副本和原始)</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COW 机制和内存页访问</span>
<span class="line">共享内存页：</span>
<span class="line">初始时，父进程和子进程共享同一块内存。假设父进程和子进程共享两个数据：key1 = &quot;value1&quot; 和 key2 = &quot;value2&quot;，这两个数据通常会存储在 相同的内存页 中。这个内存页是只读的。</span>
<span class="line"></span>
<span class="line">触发 COW：</span>
<span class="line">当父进程修改 key1（例如将其值改为 &quot;new_value&quot;）时，操作系统会创建 key1 的副本（这通常是一个新的内存页），并将修改后的值存储在副本中。此时，原始内存页中的 key1 = &quot;value1&quot; 保持不变，父进程会访问新的副本，修改后的 key1 = &quot;new_value&quot;。</span>
<span class="line"></span>
<span class="line">父进程访问内存页：</span>
<span class="line">key1 的副本：父进程访问修改后的 key1 = &quot;new_value&quot; 时，操作系统会将父进程指向新创建的副本内存页。</span>
<span class="line">key2 仍然在原始内存页：对于 key2，因为父进程并没有修改它，所以父进程仍然会访问原始内存页中的 key2 = &quot;value2&quot;，而该内存页没有发生改变。</span>
<span class="line"></span>
<span class="line">总结:</span>
<span class="line">在父进程修改 key1 时，操作系统创建了 key1 的副本，但父进程 仍然可以访问 key2，并且会继续访问原始的内存页。父进程通过不同的内存页访问 key1 和 key2，因此 父进程会同时访问两个数据页：一个包含修改后的 key1，另一个包含未修改的 key2。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40)]))}const c=n(l,[["render",d],["__file","redis持久化分析.html.vue"]]),p=JSON.parse('{"path":"/content/database/redis/redis%E6%8C%81%E4%B9%85%E5%8C%96%E5%88%86%E6%9E%90.html","title":"redis持久化分析","lang":"en-US","frontmatter":{"sidebar":false,"title":"redis持久化分析","head":[["meta",{"name":"title","content":"redis持久化分析"}],["meta",{"name":"description","content":"redis持久化分析"}],["meta",{"name":"keywords","content":"redis,RDB,AOF"}],["meta",{"property":"og:title","content":"redis持久化分析"}],["meta",{"property":"og:description","content":"redis持久化分析"}]]},"headers":[{"level":3,"title":"redis持久化分析","slug":"redis持久化分析","link":"#redis持久化分析","children":[]}],"git":{},"filePathRelative":"content/database/redis/redis持久化分析.md"}');export{c as comp,p as data};
