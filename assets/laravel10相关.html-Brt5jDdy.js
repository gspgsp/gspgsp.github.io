import{_ as n,c as a,f as i,o as l}from"./app-BB_BIQV8.js";const e={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[i(`<p>laravel10相关:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.node升级(最好打开vpn,不然下载失败):</span>
<span class="line"># installs nvm (Node Version Manager)</span>
<span class="line">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash</span>
<span class="line">  </span>
<span class="line"># download and install Node.js (you may need to restart the terminal)</span>
<span class="line">nvm install 20</span>
<span class="line">  </span>
<span class="line"># verifies the right Node.js version is in the environment</span>
<span class="line">node -v # should print \`v20.15.0\`</span>
<span class="line">  </span>
<span class="line"># verifies the right NPM version is in the environment</span>
<span class="line">npm -v # should print \`10.7.0\`</span>
<span class="line">  </span>
<span class="line">官方链接：https://nodejs.org/zh-cn/download/package-manager</span>
<span class="line">  </span>
<span class="line">可以通过:$ nvm ls-remote 查看当前支持的node版本</span>
<span class="line">不要使用网上其它方法，比如使用  n 升级，都是垃圾</span>
<span class="line">  </span>
<span class="line">2.composer install 报:</span>
<span class="line">  </span>
<span class="line">phpoffice/phpspreadsheet 1.29.0 requires ext-dom * -&gt; it is missing from your system. Install or enable PHP&#39;s dom extension</span>
<span class="line">requires ext-curl * -&gt; it is missing from your system. Install or enable PHP&#39;s curl extension.</span>
<span class="line">  </span>
<span class="line">$ sudo apt-get install php8.3-curl</span>
<span class="line">  </span>
<span class="line">执行迁移文件的时候报:</span>
<span class="line">$ php artisan migrate</span>
<span class="line">  </span>
<span class="line">Illuminate\\Database\\QueryException </span>
<span class="line">  </span>
<span class="line">could not find driver (Connection: mysql, SQL: select table_name as \`name\`, (data_length + index_length) as \`size\`, table_comment as \`comment\`, engine as \`engine\`, table_collation as \`collation\` from information_schema.tables where table_schema = &#39;mmailer&#39; and table_type in (&#39;BASE TABLE&#39;, &#39;SYSTEM VERSIONED&#39;) order by table_name)</span>
<span class="line">  </span>
<span class="line">原因:缺少mysql依赖驱动</span>
<span class="line">$ sudo apt-get install php8.3-mysql</span>
<span class="line">  </span>
<span class="line">3.ubuntu22下有很多service,可以通过下面的命令找到指定的服务，比如php相关的</span>
<span class="line">$ systemctl status php*</span>
<span class="line">  </span>
<span class="line">发现没有php8.3-fpm.servie, 但是执行php -v 却展示了，原因是我只安装了php8.3的cli，没有安装fpm</span>
<span class="line">PHP 8.3.8 (cli) (built: Jun  8 2024 21:34:22) (NTS)</span>
<span class="line">Copyright (c) The PHP Group</span>
<span class="line">Zend Engine v4.3.8, Copyright (c) Zend Technologies</span>
<span class="line">    with Zend OPcache v8.3.8, Copyright (c), by Zend Technologies</span>
<span class="line">  </span>
<span class="line">手动改安装:    </span>
<span class="line">sudo apt install php8.3-fpm</span>
<span class="line">  </span>
<span class="line">4.访问站点报 502, 查看error.log 如下:</span>
<span class="line">2024/06/28 11:04:34 [crit] 55294#55294: *1 connect() to unix:/run/php/php8.3-fpm.sock failed (13: Permission denied) while connecting to upstream, client: 127.0.0.1, server: www.mmail.test, request: &quot;GET / HTTP/1.1&quot;, upstream: &quot;fastcgi://unix:/run/php/php8.3-fpm.sock:&quot;, host: &quot;www.mmail.test&quot;</span>
<span class="line">  </span>
<span class="line">可以确定这是一个对 /run/php/php8.3-fpm.sock 访问权限的问题</span>
<span class="line">1&gt;cd /etc/php/8.3/fpm/pool.d</span>
<span class="line">vim www.conf, 将里面的</span>
<span class="line">  </span>
<span class="line">user = www-data</span>
<span class="line">group = www-data</span>
<span class="line">改为(因为我的nginx 的 user 是 yizhi):</span>
<span class="line">user = yizhi</span>
<span class="line">group = yizhi</span>
<span class="line">再访问，还是报错，那还需要修改 sock文件的 user:group信息</span>
<span class="line">  </span>
<span class="line">2&gt;</span>
<span class="line">$ cd /run/php</span>
<span class="line">$ ll</span>
<span class="line">total 16</span>
<span class="line">drwxr-xr-x  2 www-data www-data  220  6月 28 11:12 ./</span>
<span class="line">drwxr-xr-x 41 root     root     1120  6月 28 11:03 ../</span>
<span class="line">-rw-r--r--  1 root     root        3  6月 28 08:37 php7.4-fpm.pid</span>
<span class="line">srw-rw----  1 yizhi     yizhi        0  6月 28 08:37 php7.4-fpm.sock=</span>
<span class="line">-rw-r--r--  1 root     root        3  6月 28 08:37 php8.1-fpm.pid</span>
<span class="line">srw-rw----  1 yizhi     yizhi        0  6月 28 08:37 php8.1-fpm.sock=</span>
<span class="line">-rw-r--r--  1 root     root        3  6月 28 08:37 php8.2-fpm.pid</span>
<span class="line">srw-rw----  1 www-data www-data    0  6月 28 08:37 php8.2-fpm.sock=</span>
<span class="line">-rw-r--r--  1 root     root        5  6月 28 11:12 php8.3-fpm.pid</span>
<span class="line">srw-rw----  1 www-data www-data    0  6月 28 11:12 php8.3-fpm.sock=</span>
<span class="line">lrwxrwxrwx  1 root     root       30  6月 28 08:37 php-fpm.sock -&gt; /etc/alternatives/php-fpm.sock=</span>
<span class="line">  </span>
<span class="line">发现 php8.2-fpm.sock 的 user:group 都为www-data,修改为yizhi</span>
<span class="line">sudo chown yizhi:yizhi php8.3-fpm.sock</span>
<span class="line">  </span>
<span class="line">3&gt;重启php8.3-fpm(也可以不用重启)</span>
<span class="line">$ sudo systemctl restart php8.3-fpm</span>
<span class="line">  </span>
<span class="line">4&gt;再次访问，没有报错</span>
<span class="line">  </span>
<span class="line">相关命令:</span>
<span class="line">sudo chown 新用户名:新用户组名 文件名</span>
<span class="line">sudo chown -R 新用户名:新用户组名 目录名</span>
<span class="line">  </span>
<span class="line">5.查看 Laravel 项目的版本:</span>
<span class="line">php artisan --version</span>
<span class="line">  </span>
<span class="line">6.迁移数据库之后，初始化一个用户的另一种方式(通过 factory，而不是直接run创建,但是还是run方式要好一些)</span>
<span class="line">//factories/UserFactory</span>
<span class="line">class UserFactory extends Factory</span>
<span class="line">{</span>
<span class="line">    protected $model = User::class;</span>
<span class="line"></span>
<span class="line">    public function definition()</span>
<span class="line">    {</span>
<span class="line">        return [</span>
<span class="line">            &#39;id&#39; =&gt; 1,</span>
<span class="line">            &#39;name&#39; =&gt; $this-&gt;faker-&gt;name,</span>
<span class="line">//            &#39;email&#39; =&gt; $this-&gt;faker-&gt;unique()-&gt;safeEmail,</span>
<span class="line">            &#39;email&#39; =&gt; &quot;shipeng.guo23@yizhi.com&quot;,</span>
<span class="line">            &#39;email_verified_at&#39; =&gt; now(),</span>
<span class="line">            &#39;password&#39; =&gt; bcrypt(&#39;Wuhan2019&#39;), // password</span>
<span class="line">            &#39;remember_token&#39; =&gt; Str::random(10),</span>
<span class="line">            &#39;role&#39; =&gt; &#39;Publisher&#39;</span>
<span class="line">        ];</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//seeds下</span>
<span class="line">class DatabaseSeeder extends Seeder</span>
<span class="line">{</span>
<span class="line">    /**</span>
<span class="line">     * Seed the application&#39;s database.</span>
<span class="line">     *</span>
<span class="line">     * @return void</span>
<span class="line">     */</span>
<span class="line">    public function run()</span>
<span class="line">    {</span>
<span class="line">        \\App\\User::factory()-&gt;create();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">执行:$ php artisan db:seed 即可新增一个用户</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(e,[["render",p],["__file","laravel10相关.html.vue"]]),v=JSON.parse('{"path":"/content/php/laravel/laravel10%E7%9B%B8%E5%85%B3.html","title":"laravel10相关","lang":"en-US","frontmatter":{"sidebar":false,"title":"laravel10相关","description":"laravel10相关"},"headers":[],"git":{},"filePathRelative":"content/php/laravel/laravel10相关.md"}');export{r as comp,v as data};
