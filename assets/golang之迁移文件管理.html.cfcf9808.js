import{_ as e,o as i,c as s,g as a}from"./app.dd03cafd.js";const n={},r=a(`<p>golang\u4E4B\u8FC1\u79FB\u6587\u4EF6\u7BA1\u7406:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0B\u8F7D:https://github.com/golang-migrate/migrate  //\u4E3B\u8981\u5305\u62ECcli[\u5355\u72EC\u4E0B\u8F7Dreleases\u4E0B\u7684\u6587\u4EF6] \u6A21\u5F0F \u548C \u5F15\u5165\u5305[go get github.com/golang-migrate/migrate/v4] \u6A21\u5F0F

\u5B89\u88C5:https://github.com/golang-migrate/migrate/releases

\u6267\u884C\u8FC1\u79FB[sslmode=enable \u8FD9\u4E2A\u53C2\u6570\u4E0D\u8981\u968F\u4FBF\u52A0\uFF0C\u4E0D\u7136\u4F1A\u62A5\u9519]:
duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ migrate create -ext sql -dir ./migrations -seq create_users_table
duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ migrate create -ext sql -dir ./migrations -seq add_role_id_users
duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ migrate -database &#39;mysql://root:123456@tcp(127.0.0.1:3306)/duo?charset=utf8mb4&amp;parseTime=true&amp;loc=Local&#39; -path ./migrations up [N]
1/u create_users_table (15.020662ms)
duo@k8s:/usr/local/go-project/src/duoxiaozhan-api$ migrate -database &#39;mysql://root:123456@tcp(127.0.0.1:3306)/duo?charset=utf8mb4&amp;parseTime=true&amp;loc=Local&#39; -path ./migrations down [N]
2/d add_role_id_to_users (32.834926ms)

N: \u662F\u6307\u5B9A\u5230\u7684\u7248\u672C\u53F7,\u4E0D\u6307\u5B9A\u5C31\u662F\u5168\u90E8

duo@k8s:/usr/local$ sudo dpkg -i ./migrate.linux-amd64.deb

duo@k8s:/usr/local$ migrate --help
Usage: migrate OPTIONS COMMAND [arg...]
       migrate [ -version | -help ]

Options:
  -source          Location of the migrations (driver://url)
  -path            Shorthand for -source=file://path
  -database        Run migrations against this database (driver://url)
  -prefetch N      Number of migrations to load in advance before executing (default 10)
  -lock-timeout N  Allow N seconds to acquire database lock (default 15)
  -verbose         Print verbose logging
  -version         Print version
  -help            Print usage
...
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[r];function d(t,o){return i(),s("div",null,l)}var u=e(n,[["render",d],["__file","golang\u4E4B\u8FC1\u79FB\u6587\u4EF6\u7BA1\u7406.html.vue"]]);export{u as default};
