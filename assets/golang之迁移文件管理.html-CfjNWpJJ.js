import{_ as a,c as n,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function r(t,s){return i(),n("div",null,s[0]||(s[0]=[e(`<p>golang之迁移文件管理:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">下载:https://github.com/golang-migrate/migrate  //主要包括cli[单独下载releases下的文件] 模式 和 引入包[go get github.com/golang-migrate/migrate/v4] 模式</span>
<span class="line"></span>
<span class="line">安装:https://github.com/golang-migrate/migrate/releases</span>
<span class="line"></span>
<span class="line">执行迁移[sslmode=enable 这个参数不要随便加，不然会报错]:</span>
<span class="line">duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ migrate create -ext sql -dir ./migrations -seq create_users_table</span>
<span class="line">duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ migrate create -ext sql -dir ./migrations -seq add_role_id_users</span>
<span class="line">duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ migrate -database &#39;mysql://root:123456@tcp(127.0.0.1:3306)/duo?charset=utf8mb4&amp;parseTime=true&amp;loc=Local&#39; -path ./migrations up [N]</span>
<span class="line">1/u create_users_table (15.020662ms)</span>
<span class="line">duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ migrate -database &#39;mysql://root:123456@tcp(127.0.0.1:3306)/duo?charset=utf8mb4&amp;parseTime=true&amp;loc=Local&#39; -path ./migrations down [N]</span>
<span class="line">2/d add_role_id_to_users (32.834926ms)</span>
<span class="line"></span>
<span class="line">N: 是指定到的版本号,不指定就是全部</span>
<span class="line"></span>
<span class="line">duo@k8s:/usr/local$ sudo dpkg -i ./migrate.linux-amd64.deb</span>
<span class="line"></span>
<span class="line">duo@k8s:/usr/local$ migrate --help</span>
<span class="line">Usage: migrate OPTIONS COMMAND [arg...]</span>
<span class="line">       migrate [ -version | -help ]</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -source          Location of the migrations (driver://url)</span>
<span class="line">  -path            Shorthand for -source=file://path</span>
<span class="line">  -database        Run migrations against this database (driver://url)</span>
<span class="line">  -prefetch N      Number of migrations to load in advance before executing (default 10)</span>
<span class="line">  -lock-timeout N  Allow N seconds to acquire database lock (default 15)</span>
<span class="line">  -verbose         Print verbose logging</span>
<span class="line">  -version         Print version</span>
<span class="line">  -help            Print usage</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=a(l,[["render",r],["__file","golang之迁移文件管理.html.vue"]]),o=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8B%E8%BF%81%E7%A7%BB%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.html","title":"golang之迁移文件管理","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之迁移文件管理","description":"golang之迁移文件管理"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之迁移文件管理.md"}');export{d as comp,o as data};
