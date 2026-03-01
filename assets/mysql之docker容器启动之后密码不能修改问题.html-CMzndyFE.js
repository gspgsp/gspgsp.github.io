import{_ as e,c as n,f as l,o as a}from"./app-BB_BIQV8.js";const i={};function c(d,s){return a(),n("div",null,s[0]||(s[0]=[l(`<p>mysql之docker容器启动之后密码不能修改问题:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">我发现创建完mysql contaienr之后，我需要修改 mysql的密码，修改了docker-compose.yml中对应mysql service部分的账号密码，但是重新 docker compose up -d，发现mysql的密码还是没有改变</span>
<span class="line">  </span>
<span class="line">原因:</span>
<span class="line">MySQL 的行为：</span>
<span class="line">当 MySQL 容器启动时，如果发现挂载的卷中已经有数据，它会使用这些现有数据而不是初始化新的数据库。</span>
<span class="line">  </span>
<span class="line">解决办法如下:</span>
<span class="line">1. 由于mysqld的相关数据是被挂载到了宿主机上，所以删除挂载就可以了，docker volume rm docker_volume-mysql-laravel, 这样做的坏处是会丢失mysql现有数据</span>
<span class="line">2. 进入 mysql container ，然后修改密码 </span>
<span class="line">mysql -u root -p</span>
<span class="line">ALTER USER &#39;your_user&#39;@&#39;%&#39; IDENTIFIED BY &#39;new_password&#39;;</span>
<span class="line">FLUSH PRIVILEGES;</span>
<span class="line"></span>
<span class="line">然后再把项目中的相关密码改为修改后的密码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const t=e(i,[["render",c],["__file","mysql之docker容器启动之后密码不能修改问题.html.vue"]]),m=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B9%8Bdocker%E5%AE%B9%E5%99%A8%E5%90%AF%E5%8A%A8%E4%B9%8B%E5%90%8E%E5%AF%86%E7%A0%81%E4%B8%8D%E8%83%BD%E4%BF%AE%E6%94%B9%E9%97%AE%E9%A2%98.html","title":"mysql之docker容器启动之后密码不能修改问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql之docker容器启动之后密码不能修改问题","description":"mysql之docker容器启动之后密码不能修改问题"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql之docker容器启动之后密码不能修改问题.md"}');export{t as comp,m as data};
