import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function p(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//查看php-fpm配置是否生效:</span>
<span class="line">root@ca4989b3147e:/usr/local/etc/php-fpm.d# php-fpm -t</span>
<span class="line">[22-Jan-2025 11:24:24] NOTICE: configuration file /usr/local/etc/php-fpm.conf test is successful</span>
<span class="line">  </span>
<span class="line">//查看当前php-fpm的哪些配置生效</span>
<span class="line">root@ca4989b3147e:/usr/local/etc# php-fpm -tt </span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE: [global]</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pid = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  error_log = /proc/self/fd/2</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  syslog.ident = php-fpm</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  syslog.facility = 24</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  log_buffering = yes</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  log_level = unknown value</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  log_limit = 8192</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  emergency_restart_interval = 0s</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  emergency_restart_threshold = 0</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  process_control_timeout = 0s</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  process.max = 0</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  process.priority = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  daemonize = no</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  rlimit_files = 0</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  rlimit_core = 0</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  events.mechanism = epoll</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  </span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE: [www]</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  prefix = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  user = www-data</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  group = www-data</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  listen = 9000</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  listen.backlog = -1</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  listen.owner = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  listen.group = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  listen.mode = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  listen.allowed_clients = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  process.priority = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  process.dumpable = no</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm = dynamic</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.max_children = 5</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.start_servers = 2</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.min_spare_servers = 1</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.max_spare_servers = 3</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.max_spawn_rate = 32</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.process_idle_timeout = 10</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.max_requests = 0</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.status_path = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  pm.status_listen = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  ping.path = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  ping.response = undefined</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  access.log = /proc/self/fd/2</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  access.format = %R - %u %t &quot;%m %r&quot; %s</span>
<span class="line">[22-Jan-2025 10:52:04] NOTICE:  slowlog = undefined</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const r=s(l,[["render",p],["__file","查看php-fpm配置是否生效.html.vue"]]),t=JSON.parse('{"path":"/content/php/base/%E6%9F%A5%E7%9C%8Bphp-fpm%E9%85%8D%E7%BD%AE%E6%98%AF%E5%90%A6%E7%94%9F%E6%95%88.html","title":"查看php-fpm配置是否生效","lang":"en-US","frontmatter":{"sidebar":false,"title":"查看php-fpm配置是否生效","head":[["meta",{"name":"title","content":"查看php-fpm配置是否生效"}],["meta",{"name":"description","content":"查看php-fpm配置是否生效"}],["meta",{"name":"keywords","content":"php-fpm"}],["meta",{"property":"og:title","content":"查看php-fpm配置是否生效"}],["meta",{"property":"og:description","content":"查看php-fpm配置是否生效"}]]},"headers":[],"git":{},"filePathRelative":"content/php/base/查看php-fpm配置是否生效.md"}');export{r as comp,t as data};
