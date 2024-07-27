import{_ as n,o as i,c as e,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<p>laravel10\u76F8\u5173:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.node\u5347\u7EA7(\u6700\u597D\u6253\u5F00vpn,\u4E0D\u7136\u4E0B\u8F7D\u5931\u8D25):
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  
# download and install Node.js (you may need to restart the terminal)
nvm install 20
  
# verifies the right Node.js version is in the environment
node -v # should print \`v20.15.0\`
  
# verifies the right NPM version is in the environment
npm -v # should print \`10.7.0\`
  
\u5B98\u65B9\u94FE\u63A5\uFF1Ahttps://nodejs.org/zh-cn/download/package-manager
  
\u53EF\u4EE5\u901A\u8FC7:$ nvm ls-remote \u67E5\u770B\u5F53\u524D\u652F\u6301\u7684node\u7248\u672C
\u4E0D\u8981\u4F7F\u7528\u7F51\u4E0A\u5176\u5B83\u65B9\u6CD5\uFF0C\u6BD4\u5982\u4F7F\u7528  n \u5347\u7EA7\uFF0C\u90FD\u662F\u5783\u573E
  
2.composer install \u62A5:
  
phpoffice/phpspreadsheet 1.29.0 requires ext-dom * -&gt; it is missing from your system. Install or enable PHP&#39;s dom extension
requires ext-curl * -&gt; it is missing from your system. Install or enable PHP&#39;s curl extension.
  
$ sudo apt-get install php8.3-curl
  
\u6267\u884C\u8FC1\u79FB\u6587\u4EF6\u7684\u65F6\u5019\u62A5:
$ php artisan migrate
  
Illuminate\\Database\\QueryException 
  
could not find driver (Connection: mysql, SQL: select table_name as \`name\`, (data_length + index_length) as \`size\`, table_comment as \`comment\`, engine as \`engine\`, table_collation as \`collation\` from information_schema.tables where table_schema = &#39;mmailer&#39; and table_type in (&#39;BASE TABLE&#39;, &#39;SYSTEM VERSIONED&#39;) order by table_name)
  
\u539F\u56E0:\u7F3A\u5C11mysql\u4F9D\u8D56\u9A71\u52A8
$ sudo apt-get install php8.3-mysql
  
3.ubuntu22\u4E0B\u6709\u5F88\u591Aservice,\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u627E\u5230\u6307\u5B9A\u7684\u670D\u52A1\uFF0C\u6BD4\u5982php\u76F8\u5173\u7684
$ systemctl status php*
  
\u53D1\u73B0\u6CA1\u6709php8.3-fpm.servie, \u4F46\u662F\u6267\u884Cphp -v \u5374\u5C55\u793A\u4E86\uFF0C\u539F\u56E0\u662F\u6211\u53EA\u5B89\u88C5\u4E86php8.3\u7684cli\uFF0C\u6CA1\u6709\u5B89\u88C5fpm
PHP 8.3.8 (cli) (built: Jun  8 2024 21:34:22) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.3.8, Copyright (c) Zend Technologies
    with Zend OPcache v8.3.8, Copyright (c), by Zend Technologies
  
\u624B\u52A8\u6539\u5B89\u88C5:    
sudo apt install php8.3-fpm
  
4.\u8BBF\u95EE\u7AD9\u70B9\u62A5 502, \u67E5\u770Berror.log \u5982\u4E0B:
2024/06/28 11:04:34 [crit] 55294#55294: *1 connect() to unix:/run/php/php8.3-fpm.sock failed (13: Permission denied) while connecting to upstream, client: 127.0.0.1, server: www.mmail.test, request: &quot;GET / HTTP/1.1&quot;, upstream: &quot;fastcgi://unix:/run/php/php8.3-fpm.sock:&quot;, host: &quot;www.mmail.test&quot;
  
\u53EF\u4EE5\u786E\u5B9A\u8FD9\u662F\u4E00\u4E2A\u5BF9 /run/php/php8.3-fpm.sock \u8BBF\u95EE\u6743\u9650\u7684\u95EE\u9898
1&gt;cd /etc/php/8.3/fpm/pool.d
vim www.conf, \u5C06\u91CC\u9762\u7684
  
user = www-data
group = www-data
\u6539\u4E3A(\u56E0\u4E3A\u6211\u7684nginx \u7684 user \u662F yizhi):
user = yizhi
group = yizhi
\u518D\u8BBF\u95EE\uFF0C\u8FD8\u662F\u62A5\u9519\uFF0C\u90A3\u8FD8\u9700\u8981\u4FEE\u6539 sock\u6587\u4EF6\u7684 user:group\u4FE1\u606F
  
2&gt;
$ cd /run/php
$ ll
total 16
drwxr-xr-x  2 www-data www-data  220  6\u6708 28 11:12 ./
drwxr-xr-x 41 root     root     1120  6\u6708 28 11:03 ../
-rw-r--r--  1 root     root        3  6\u6708 28 08:37 php7.4-fpm.pid
srw-rw----  1 yizhi     yizhi        0  6\u6708 28 08:37 php7.4-fpm.sock=
-rw-r--r--  1 root     root        3  6\u6708 28 08:37 php8.1-fpm.pid
srw-rw----  1 yizhi     yizhi        0  6\u6708 28 08:37 php8.1-fpm.sock=
-rw-r--r--  1 root     root        3  6\u6708 28 08:37 php8.2-fpm.pid
srw-rw----  1 www-data www-data    0  6\u6708 28 08:37 php8.2-fpm.sock=
-rw-r--r--  1 root     root        5  6\u6708 28 11:12 php8.3-fpm.pid
srw-rw----  1 www-data www-data    0  6\u6708 28 11:12 php8.3-fpm.sock=
lrwxrwxrwx  1 root     root       30  6\u6708 28 08:37 php-fpm.sock -&gt; /etc/alternatives/php-fpm.sock=
  
\u53D1\u73B0 php8.2-fpm.sock \u7684 user:group \u90FD\u4E3Awww-data,\u4FEE\u6539\u4E3Ayizhi
sudo chown yizhi:yizhi php8.3-fpm.sock
  
3&gt;\u91CD\u542Fphp8.3-fpm(\u4E5F\u53EF\u4EE5\u4E0D\u7528\u91CD\u542F)
$ sudo systemctl restart php8.3-fpm
  
4&gt;\u518D\u6B21\u8BBF\u95EE\uFF0C\u6CA1\u6709\u62A5\u9519
  
\u76F8\u5173\u547D\u4EE4:
sudo chown \u65B0\u7528\u6237\u540D:\u65B0\u7528\u6237\u7EC4\u540D \u6587\u4EF6\u540D
sudo chown -R \u65B0\u7528\u6237\u540D:\u65B0\u7528\u6237\u7EC4\u540D \u76EE\u5F55\u540D
  
5.\u67E5\u770B Laravel \u9879\u76EE\u7684\u7248\u672C:
php artisan --version
  
6.\u8FC1\u79FB\u6570\u636E\u5E93\u4E4B\u540E\uFF0C\u521D\u59CB\u5316\u4E00\u4E2A\u7528\u6237\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F(\u901A\u8FC7 factory\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5run\u521B\u5EFA,\u4F46\u662F\u8FD8\u662Frun\u65B9\u5F0F\u8981\u597D\u4E00\u4E9B)
//factories/UserFactory
class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            &#39;id&#39; =&gt; 1,
            &#39;name&#39; =&gt; $this-&gt;faker-&gt;name,
//            &#39;email&#39; =&gt; $this-&gt;faker-&gt;unique()-&gt;safeEmail,
            &#39;email&#39; =&gt; &quot;shipeng.guo23@yizhi.com&quot;,
            &#39;email_verified_at&#39; =&gt; now(),
            &#39;password&#39; =&gt; bcrypt(&#39;Wuhan2019&#39;), // password
            &#39;remember_token&#39; =&gt; Str::random(10),
            &#39;role&#39; =&gt; &#39;Publisher&#39;
        ];
    }
}

//seeds\u4E0B
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application&#39;s database.
     *
     * @return void
     */
    public function run()
    {
        \\App\\User::factory()-&gt;create();
    }
}
  
\u6267\u884C:$ php artisan db:seed \u5373\u53EF\u65B0\u589E\u4E00\u4E2A\u7528\u6237
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function v(a,c){return i(),e("div",null,r)}var t=n(l,[["render",v],["__file","laravel10\u76F8\u5173.html.vue"]]);export{t as default};
