import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h5 id="ubuntu之查看所有服务" tabindex="-1"><a class="header-anchor" href="#ubuntu之查看所有服务"><span>ubuntu之查看所有服务:</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ systemctl list-unit-files <span class="token parameter variable">-t</span> <span class="token function">service</span> </span>
<span class="line">UNIT FILE                                  STATE           VENDOR PRESET</span>
<span class="line">accounts-daemon.service                    enabled         enabled      </span>
<span class="line">acpid.service                              disabled        enabled      </span>
<span class="line">alsa-restore.service                       static          -            </span>
<span class="line">alsa-state.service                         static          -            </span>
<span class="line">alsa-utils.service                         masked          enabled      </span>
<span class="line">anacron.service                            enabled         enabled      </span>
<span class="line">apparmor.service                           enabled         enabled      </span>
<span class="line">apport-autoreport.service                  static          -            </span>
<span class="line">apport-forward@.service                    static          -            </span>
<span class="line">apport.service                             generated       -            </span>
<span class="line">apt-daily-upgrade.service                  static          -            </span>
<span class="line">apt-daily.service                          static          -            </span>
<span class="line">apt-news.service                           static          -            </span>
<span class="line">autovt@.service                            <span class="token builtin class-name">alias</span>           -            </span>
<span class="line">avahi-daemon.service                       enabled         enabled      </span>
<span class="line">bluetooth.service                          enabled         enabled      </span>
<span class="line">bolt.service                               static          -            </span>
<span class="line">brltty-udev.service                        static          -            </span>
<span class="line">brltty.service                             disabled        enabled      </span>
<span class="line">colord.service                             static          -            </span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ubuntu之查指定服务运行状态" tabindex="-1"><a class="header-anchor" href="#ubuntu之查指定服务运行状态"><span>ubuntu之查指定服务运行状态</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ps aux | grep nginx</span>
<span class="line">root        1155  0.0  0.0  84836  2760 ?        Ss   13:35   0:00 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;</span>
<span class="line">root+    1156  0.0  0.0  85500  6472 ?        S    13:35   0:00 nginx: worker process</span>
<span class="line">root+    1157  0.0  0.0  85500  6472 ?        S    13:35   0:00 nginx: worker process</span>
<span class="line">root+    1158  0.0  0.0  85500  6472 ?        S    13:35   0:00 nginx: worker process</span>
<span class="line">root+    1159  0.0  0.0  85500  6600 ?        S    13:35   0:00 nginx: worker process</span>
<span class="line">root+    1160  0.0  0.0  85500  6344 ?        S    13:35   0:00 nginx: worker process</span>
<span class="line">root+    1161  0.0  0.0  85500  6344 ?        S    13:35   0:00 nginx: worker process</span>
<span class="line">root+    1162  0.0  0.0  85500  6344 ?        S    13:35   0:00 nginx: worker process</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">// 参数解析</span>
<span class="line">a → 显示所有终端下的进程，包括其他用户的。</span>
<span class="line">u → 以用户为中心的格式显示，包含用户、CPU/内存占用等。</span>
<span class="line">x → 显示没有控制终端的进程（例如守护进程）。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ubuntu之查所有服务运行状态" tabindex="-1"><a class="header-anchor" href="#ubuntu之查所有服务运行状态"><span>ubuntu之查所有服务运行状态</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ ps aux</span>
<span class="line">USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND</span>
<span class="line">root           1  0.0  0.0 167468 11956 ?        Ss   13:35   0:05 /sbin/init splash</span>
<span class="line">root           2  0.0  0.0      0     0 ?        S    13:35   0:00 [kthreadd]</span>
<span class="line">root           3  0.0  0.0      0     0 ?        S    13:35   0:00 [pool_workqueue_release]</span>
<span class="line">root           4  0.0  0.0      0     0 ?        I&lt;   13:35   0:00 [kworker/R-rcu_g]</span>
<span class="line">root           5  0.0  0.0      0     0 ?        I&lt;   13:35   0:00 [kworker/R-rcu_p]</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">//参数解析</span>
<span class="line">USER → 进程所属用户</span>
<span class="line">PID → 进程 ID</span>
<span class="line">%CPU → 占用 CPU 百分比</span>
<span class="line">%MEM → 占用物理内存百分比</span>
<span class="line">VSZ → 占用的虚拟内存大小（KB）</span>
<span class="line">RSS → 实际常驻内存大小（KB）</span>
<span class="line">TTY → 进程的控制终端（? 表示无终端）</span>
<span class="line">STAT → 进程状态（例如 S=睡眠，R=运行，Z=僵尸，T=停止）</span>
<span class="line">START → 进程启动时间</span>
<span class="line">TIME → 占用 CPU 的累计时间</span>
<span class="line">COMMAND → 启动进程的命令</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ubuntu之查指定端口" tabindex="-1"><a class="header-anchor" href="#ubuntu之查指定端口"><span>ubuntu之查指定端口</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ netstat -tnlp | grep 80</span>
<span class="line">(Not all processes could be identified, non-owned process info</span>
<span class="line"> will not be shown, you would have to be root to see it all.)</span>
<span class="line">tcp        0      0 0.0.0.0:8083            0.0.0.0:*               LISTEN      1156/nginx: worker  </span>
<span class="line">tcp        0      0 0.0.0.0:9080            0.0.0.0:*               LISTEN      -                   </span>
<span class="line">tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      -                   </span>
<span class="line">tcp6       0      0 :::9080                 :::*                    LISTEN      -                   </span>
<span class="line">tcp6       0      0 :::80                   :::*                    LISTEN      -  </span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">// 参数解析</span>
<span class="line">-t → TCP</span>
<span class="line">-n → 显示数字地址（不做域名反查）</span>
<span class="line">-l → 只显示监听状态的端口</span>
<span class="line">-p → 显示对应的进程 PID/程序名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ubuntu之查所有端口" tabindex="-1"><a class="header-anchor" href="#ubuntu之查所有端口"><span>ubuntu之查所有端口</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ netstat -tnlp</span>
<span class="line">(Not all processes could be identified, non-owned process info</span>
<span class="line"> will not be shown, you would have to be root to see it all.)</span>
<span class="line">Active Internet connections (only servers)</span>
<span class="line">Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    </span>
<span class="line">tcp        0      0 127.0.0.1:43817         0.0.0.0:*               LISTEN      8127/clash-linux    </span>
<span class="line">tcp        0      0 127.0.0.1:11211         0.0.0.0:*               LISTEN      -                   </span>
<span class="line">tcp        0      0 0.0.0.0:8081            0.0.0.0:*               LISTEN      -                   </span>
<span class="line">tcp        0      0 0.0.0.0:8083            0.0.0.0:*               LISTEN      1156/nginx: worker  </span>
<span class="line">tcp        0      0 0.0.0.0:8109            0.0.0.0:*               LISTEN      -                   </span>
<span class="line">tcp        0      0 0.0.0.0:8108            0.0.0.0:*               LISTEN      -                   </span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">// 参数解析</span>
<span class="line">Proto → 协议类型</span>
<span class="line">  tcp → IPv4 TCP</span>
<span class="line">  tcp6 → IPv6 TCP</span>
<span class="line">Recv-Q → 接收队列中未被应用程序取走的数据（一般为 0，如果不是 0，可能表示应用处理不过来）</span>
<span class="line">Send-Q → 发送队列中未被对方确认的数据（一般为 0，如果不是 0，可能表示网络拥塞或应用未读取）</span>
<span class="line">Local Address → 本地监听的地址和端口</span>
<span class="line">  0.0.0.0:22 → 监听所有 IPv4 地址的 22 端口</span>
<span class="line">  :::80 → 监听所有 IPv6 地址的 80 端口</span>
<span class="line">Foreign Address → 对端地址（监听状态下一般是 *，表示未建立连接）</span>
<span class="line">State → 当前连接状态</span>
<span class="line">  常见值：LISTEN、ESTABLISHED、TIME_WAIT、CLOSE_WAIT</span>
<span class="line">PID/Program name → 占用端口的进程 PID 和程序名</span>
<span class="line">  1234/sshd 表示 PID=1234 的 sshd 占用</span>
<span class="line">  </span>
<span class="line">常见情况解释</span>
<span class="line"></span>
<span class="line">0.0.0.0:80</span>
<span class="line">→ 监听所有网卡的 IPv4 地址 80 端口（外部可访问）。</span>
<span class="line"></span>
<span class="line">127.0.0.1:3306</span>
<span class="line">→ 仅监听本机回环地址（外部不能访问，只能本机连接）。</span>
<span class="line"></span>
<span class="line">:::443</span>
<span class="line">→ 监听所有 IPv6 地址的 443 端口</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const r=n(l,[["render",c],["__file","ubuntu之查看所有服务.html.vue"]]),v=JSON.parse('{"path":"/content/linux/command/ubuntu%E4%B9%8B%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E6%9C%8D%E5%8A%A1.html","title":"ubuntu之查看所有服务","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu之查看所有服务","description":"ubuntu之查看所有服务"},"headers":[],"git":{},"filePathRelative":"content/linux/command/ubuntu之查看所有服务.md"}');export{r as comp,v as data};
