import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const d={},l=s(`<p>larave\u4E4Bhomestead\u914D\u7F6E\u6587\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
ip: &quot;192.168.56.56&quot;
memory: 2048
cpus: 2
provider: virtualbox

authorize: ~/.ssh/id_rsa.pub

keys:
    - ~/.ssh/id_rsa

folders:
    - map: D:/code
      to: /home/vagrant/code

sites:
    - map: admin.design.test
      to: /home/vagrant/code/design-admin/public
      php: &quot;7.3&quot;

databases:
    - homestead

features:
    - mysql: true
    - redis: true
    - memecached: true
    - mariadb: false
    - postgresql: true
    - ohmyzsh: false
    - webdriver: false

services:
    - enabled:
          - &quot;mysql&quot;
          - &quot;postgresql&quot;
          - &quot;redis&quot;
          - &quot;memecached&quot;
#    - disabled:
#        - &quot;postgresql@11-main&quot;

ports:
    - send: 33060 # MySQL/MariaDB
      to: 3306
    - send: 54320
      to: 5432
    - send: 6379
      to: 6379
    - send: 11211
      to: 11211
#    - send: 4040
#      to: 4040
#    - send: 54320 # PostgreSQL
#      to: 5432
#    - send: 8025 # Mailhog
#      to: 8025
#    - send: 9600
#      to: 9600
#    - send: 27017
#      to: 27017
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u914D\u7F6E\u5B8C\u4EE5\u540E\u6267\u884C vagrant up/halt\uFF0Cvagrant reload --provision

\u6B63\u5E38\u60C5\u51B5\u4E0B\u4F1A\u542F\u52A8\u6240\u6709\u7684\u670D\u52A1\uFF0C\u4F46\u662F\u901A\u8FC7netstat -tnlp \u53D1\u73B0 5432 \u670D\u52A1(postgresql)\u6CA1\u6709\u542F\u8D77\u6765

vagrant@homestead:~$ service postgresql status
\u25CF postgresql.service - PostgreSQL RDBMS
     Loaded: loaded (/lib/systemd/system/postgresql.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
vagrant@homestead:~$ service postgresql start
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ===
Authentication is required to start &#39;postgresql.service&#39;.
Authenticating as: vagrant //\u9700\u8981\u8F93\u5165\u5BC6\u7801\uFF0C\u5BC6\u7801\u9ED8\u8BA4\u4E3A vagrant
Password:
==== AUTHENTICATION COMPLETE ===
vagrant@homestead:~$ service postgresql status
\u25CF postgresql.service - PostgreSQL RDBMS
     Loaded: loaded (/lib/systemd/system/postgresql.service; disabled; vendor preset: enabled)
     Active: active (exited) since Mon 2022-10-17 05:17:28 UTC; 9s ago
    Process: 4725 ExecStart=/bin/true (code=exited, status=0/SUCCESS)
   Main PID: 4725 (code=exited, status=0/SUCCESS)

Oct 17 05:17:28 homestead systemd[1]: Starting PostgreSQL RDBMS...
Oct 17 05:17:28 homestead systemd[1]: Finished PostgreSQL RDBMS.

\u8FD9\u6837\u5C31\u597D\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[l];function a(r,t){return i(),n("div",null,v)}var u=e(d,[["render",a],["__file","laravel\u4E4Bhomestead\u914D\u7F6E\u6587\u4EF6.html.vue"]]);export{u as default};
