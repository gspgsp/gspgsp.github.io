import{_ as n,c as e,d as a,o as i}from"./app-B4P9BclZ.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>larave之homestead配置文件:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">---</span>
<span class="line">ip: &quot;192.168.56.56&quot;</span>
<span class="line">memory: 2048</span>
<span class="line">cpus: 2</span>
<span class="line">provider: virtualbox</span>
<span class="line"></span>
<span class="line">authorize: ~/.ssh/id_rsa.pub</span>
<span class="line"></span>
<span class="line">keys:</span>
<span class="line">    - ~/.ssh/id_rsa</span>
<span class="line"></span>
<span class="line">folders:</span>
<span class="line">    - map: D:/code</span>
<span class="line">      to: /home/vagrant/code</span>
<span class="line"></span>
<span class="line">sites:</span>
<span class="line">    - map: admin.design.test</span>
<span class="line">      to: /home/vagrant/code/design-admin/public</span>
<span class="line">      php: &quot;7.3&quot;</span>
<span class="line"></span>
<span class="line">databases:</span>
<span class="line">    - homestead</span>
<span class="line"></span>
<span class="line">features:</span>
<span class="line">    - mysql: true</span>
<span class="line">    - redis: true</span>
<span class="line">    - memecached: true</span>
<span class="line">    - mariadb: false</span>
<span class="line">    - postgresql: true</span>
<span class="line">    - ohmyzsh: false</span>
<span class="line">    - webdriver: false</span>
<span class="line"></span>
<span class="line">services:</span>
<span class="line">    - enabled:</span>
<span class="line">          - &quot;mysql&quot;</span>
<span class="line">          - &quot;postgresql&quot;</span>
<span class="line">          - &quot;redis&quot;</span>
<span class="line">          - &quot;memecached&quot;</span>
<span class="line">#    - disabled:</span>
<span class="line">#        - &quot;postgresql@11-main&quot;</span>
<span class="line"></span>
<span class="line">ports:</span>
<span class="line">    - send: 33060 # MySQL/MariaDB</span>
<span class="line">      to: 3306</span>
<span class="line">    - send: 54320</span>
<span class="line">      to: 5432</span>
<span class="line">    - send: 6379</span>
<span class="line">      to: 6379</span>
<span class="line">    - send: 11211</span>
<span class="line">      to: 11211</span>
<span class="line">#    - send: 4040</span>
<span class="line">#      to: 4040</span>
<span class="line">#    - send: 54320 # PostgreSQL</span>
<span class="line">#      to: 5432</span>
<span class="line">#    - send: 8025 # Mailhog</span>
<span class="line">#      to: 8025</span>
<span class="line">#    - send: 9600</span>
<span class="line">#      to: 9600</span>
<span class="line">#    - send: 27017</span>
<span class="line">#      to: 27017</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">配置完以后执行 vagrant up/halt，vagrant reload --provision</span>
<span class="line"></span>
<span class="line">正常情况下会启动所有的服务，但是通过netstat -tnlp 发现 5432 服务(postgresql)没有启起来</span>
<span class="line"></span>
<span class="line">vagrant@homestead:~$ service postgresql status</span>
<span class="line">● postgresql.service - PostgreSQL RDBMS</span>
<span class="line">     Loaded: loaded (/lib/systemd/system/postgresql.service; disabled; vendor preset: enabled)</span>
<span class="line">     Active: inactive (dead)</span>
<span class="line">vagrant@homestead:~$ service postgresql start</span>
<span class="line">==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ===</span>
<span class="line">Authentication is required to start &#39;postgresql.service&#39;.</span>
<span class="line">Authenticating as: vagrant //需要输入密码，密码默认为 vagrant</span>
<span class="line">Password:</span>
<span class="line">==== AUTHENTICATION COMPLETE ===</span>
<span class="line">vagrant@homestead:~$ service postgresql status</span>
<span class="line">● postgresql.service - PostgreSQL RDBMS</span>
<span class="line">     Loaded: loaded (/lib/systemd/system/postgresql.service; disabled; vendor preset: enabled)</span>
<span class="line">     Active: active (exited) since Mon 2022-10-17 05:17:28 UTC; 9s ago</span>
<span class="line">    Process: 4725 ExecStart=/bin/true (code=exited, status=0/SUCCESS)</span>
<span class="line">   Main PID: 4725 (code=exited, status=0/SUCCESS)</span>
<span class="line"></span>
<span class="line">Oct 17 05:17:28 homestead systemd[1]: Starting PostgreSQL RDBMS...</span>
<span class="line">Oct 17 05:17:28 homestead systemd[1]: Finished PostgreSQL RDBMS.</span>
<span class="line"></span>
<span class="line">这样就好了</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const v=n(l,[["render",d],["__file","laravel之homestead配置文件.html.vue"]]),r=JSON.parse('{"path":"/content/php/laravel/laravel%E4%B9%8Bhomestead%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html","title":"larave之homestead配置文件","lang":"en-US","frontmatter":{"sidebar":false,"title":"larave之homestead配置文件","description":"larave之homestead配置文件的常用配，用到了postgresSql"},"headers":[],"git":{},"filePathRelative":"content/php/laravel/laravel之homestead配置文件.md"}');export{v as comp,r as data};
